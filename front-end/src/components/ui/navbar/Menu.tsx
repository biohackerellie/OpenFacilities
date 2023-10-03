'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button, ModeToggle, RequestBadge } from '@/components/ui/buttons';
import IsAdminNav from '@/components/contexts/isAdminNav';
import React from 'react';
import { cn } from '@/lib/utils';

import Link from 'next/link';

export function AuthenticatedMenu() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <NavigationMenuItem>
        <Button disabled>Please Wait</Button>
      </NavigationMenuItem>
    );
  }
  if (status === 'authenticated') {
    return (
      <>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <Link href="/account" legacyBehavior passHref>
                <ListItem title="My Reservations">
                  Manage your reservations
                </ListItem>
              </Link>
              <ListItem
                className="cursor-pointer"
                title="Sign Out"
                onClick={() => signOut()}
              >
                Sign out of your account
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <IsAdminNav>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Admin</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <Link href="/admin/reservations" legacyBehavior passHref>
                  <ListItem title="Reservations">Manage reservations</ListItem>
                </Link>
                <Link href="/admin/requests" legacyBehavior passHref>
                  <ListItem title="Requests">
                    Manage requests <RequestBadge />
                  </ListItem>
                </Link>
                <Link href="/admin/users" legacyBehavior passHref>
                  <ListItem title="Users">Manage users</ListItem>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </IsAdminNav>
      </>
    );
  }
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className={`${navigationMenuTriggerStyle()}, cursor-pointer`}
        onClick={() => signIn()}
      >
        Sign In
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/calendar" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Calendar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/facilities" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Facilities
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <AuthenticatedMenu />

        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
