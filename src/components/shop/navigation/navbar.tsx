'use client';

import Link from 'next/link';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
//import { useShoppingCart } from 'use-shopping-cart';
import { ShoppingBagOpen, Layout } from '@phosphor-icons/react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { useSelector } from 'react-redux';
import { selectItems } from '@lib/store/features/cart/cartSlice';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { ModeToggle } from '@components/shared/buttons/theme_toggle';
import { LoginButton } from '@/components/auth/login-button';

import React from 'react';
import { UserButton } from '@/components/auth/user-button';
import { DashboardIcon } from '@radix-ui/react-icons';

type Props = {
  user: any;
};

export function ShopNavbar({ user }: Props) {
  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <header className="sticky top-0 z-40 w-full h-16 border-b border-primary/10">
      <div className="mx-auto flex h-16 items-center justify-between space-x-4 px-6 sm:space-x-0">
        <div></div>
        <form
          onSubmit={() => {}}
          className="hidden items-center lg:inline-flex gap-1"
        >
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            //defaultValue={defaultSearchQuery}
          />
        </form>

        <div className="flex items-center space-x-1">
          {user && (
            <div className="flex flex-row gap-2 items-center justify-center">
              <Link href="/dashboard">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-primary text-white"
                >
                  <Layout
                    weight="duotone"
                    size={20}
                    className="text-white"
                  />
                  <span className="ml-2 text-sm font-bold">
                    Dashboard
                  </span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
              <Link href="/app/shop/cart">
                <Button size="sm" variant="ghost">
                  <ShoppingBagOpen
                    weight="duotone"
                    size={20}
                    className="text-primary"
                  />
                  <span className="ml-2 text-sm font-bold">
                    {items.length}
                  </span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>

              <UserButton />
            </div>
          )}
          {!user && (
            <LoginButton asChild>
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </LoginButton>
          )}
        </div>
      </div>
    </header>
  );
}
