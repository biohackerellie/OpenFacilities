//@ts-nocheck

import NextAuth, { User as NextAuthUser } from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Non LPS Staff Login',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'person@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } else {
          return null;
        }
      },
    }),

    ...(process.env.NEXT_PUBLIC_ENABLE_AZURE_AUTH?.toLowerCase() === 'true'
      ? [
          AzureADProvider({
            clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.NEXT_PUBLIC_AZURE_TENANT_ID,
            authorizationUrl: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,

            async authorize(credentials: { email: any }) {
              const user = await prisma.user.findFirst({
                where: {
                  email: credentials.email,
                },
              });
              if (user) {
                return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                };
              }
              return null;
            },
          }),
        ]
      : []),
    ...(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH?.toLowerCase() === 'true'
      ? [
          GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,

            async authroize(credentials: { email: any }) {
              const user = await prisma.user.findFirst({
                where: {
                  email: credentials.email,
                },
              });
              if (user) {
                return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  role: user.role,
                };
              }
              return null;
            },
          }),
        ]
      : []),
  ].filter(Boolean) as any,

  events: {},

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.user.roles = token.role ? token.role : 'USER';
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
