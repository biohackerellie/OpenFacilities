import NextAuth, { User as NextAuthUser } from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { User } from '@/lib/db/schema';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
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
        const user = await db.query.User.findFirst({
          where: eq(User.email, credentials.email),
        });
        if (
          user &&
          user.password &&
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
            clientId: process.env.AZURE_AD_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
            tenantId: process.env.AZURE_TENANT_ID as string,
            //@ts-expect-error
            authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,

            async authorize(credentials: { email: any }) {
              const user = await db.query.User.findFirst({
                where: eq(User.email, credentials.email),
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
    //   ...(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH?.toLowerCase() === 'true'
    //     ? [
    //         GoogleProvider({
    //           clientId: process.env.GOOGLE_CLIENT_ID as string,
    //           clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    //           async authorize(credentials: { email: any }) {
    //             const user = await db.query.User.findFirst({
    //               where: eq(User.email, credentials.email),
    //             });
    //             if (user) {
    //               return {
    //                 id: user.id,
    //                 name: user.name,
    //                 email: user.email,
    //                 role: user.role,
    //               };
    //             }
    //             return null;
    //           },
    //         }),
    //       ]
    //     : []),
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
    async jwt({ token, user, account, profile }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = account?.access_token;
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }: any) {
      session.user.roles = token.role ? token.role : 'USER';
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
