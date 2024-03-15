'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import {
  formatCurrencyString,
  useShoppingCart,
} from 'use-shopping-cart';
import { Product } from 'use-shopping-cart/core';
import { Clock } from '@phosphor-icons/react';

import { shimmer, toBase64 } from '@lib/shop/image';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useToast } from '@components/ui/use-toast';
import { CartItemsEmpty } from '@components/shop/cart/cart_items_empty';

export function CartItems() {
  const { cartDetails, setItemQuantity, removeItem } =
    useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(
    ([_, product]) => product
  );
  const { toast } = useToast();

  function removeCartItem(product: Product) {
    removeItem(product._id);
    toast({
      title: `${product.name} removed.`,
      description: 'Product was removed from the cart.',
      variant: 'destructive',
    });
  }

  if (cartItems.length === 0) return <CartItemsEmpty />;

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200/50 dark:divide-gray-500 dark:border-gray-900/50"
    >
      {cartItems.map((product, productIdx) => (
        <li key={product._id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 200)
              )}`}
              src={product.images[0].images.asset}
              alt={product.name}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/app/shop/products/${product.slug.current}`}
                      className="font-medium gradientText"
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">
                  {formatCurrencyString({
                    currency: product.currency,
                    value: product.price,
                  })}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label
                  htmlFor={`quantity-${productIdx}`}
                  className="sr-only"
                >
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={(event) =>
                    setItemQuantity(
                      product._id,
                      Number(event.target.value)
                    )
                  }
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <X
                      className="h-5 w-5 text-rose-600"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex space-x-2 text-sm">
              <Clock
                weight="duotone"
                size={20}
                className=" shrink-0 text-sky-500"
                aria-hidden="true"
              />
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
