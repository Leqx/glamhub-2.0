'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ShoppingBag } from '@phosphor-icons/react';
import {
  formatCurrencyString,
  useShoppingCart,
} from 'use-shopping-cart';

import { Button } from '@components/ui/button';

export function CartSummary() {
  const [isLoading, setLoading] = useState(false);

  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart();
  const shippingAmount = cartCount! > 0 ? 0 : 0;
  const totalAmount = totalPrice! + shippingAmount;

  const isDisabled = isLoading || cartCount! === 0;

  async function onCheckout() {
    setLoading(true);
    const response = await fetch('/api/shop/checkout', {
      method: 'POST',
      body: JSON.stringify(cartDetails),
    });

    const data = await response.json();

    const result = await redirectToCheckout(data.id);

    if (result?.error) {
      console.error(result);
    }

    setLoading(false);
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200/50 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900/50 dark:bg-background sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">
            {formattedTotalPrice}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200/50 pt-4 dark:border-gray-600/50">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({
              value: shippingAmount,
              currency: 'USD',
            })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200/50 pt-4 dark:border-gray-600/50">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {formatCurrencyString({
              value: totalAmount,
              currency: 'USD',
            })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button
          disabled={isDisabled}
          onClick={onCheckout}
          className="w-full gradientBg"
        >
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {isLoading ? (
            <span className="flex items-center justify-center gap-1 animate-pulse ">
              Loading...
            </span>
          ) : (
            <>
              <ShoppingBag
                weight="duotone"
                size={20}
                className="mx-2"
              />
              Checkout
            </>
          )}
        </Button>
      </div>
    </section>
  );
}
