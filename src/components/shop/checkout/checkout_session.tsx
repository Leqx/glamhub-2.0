'use client';

import { CheckCheck, XCircle } from 'lucide-react';
import Stripe from 'stripe';

interface Props {
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
}

export function CheckoutSession({ customerDetails }: Props) {
  if (!customerDetails) {
    return (
      <>
        <XCircle className="mx-auto h-10 w-10 text-red-400" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
          No checkout session found
        </h1>
      </>
    );
  }

  return (
    <>
      <CheckCheck className="mx-auto h-10 w-10 text-teal-500 dark:text-teal-400" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-teal-500 dark:text-teal-400 sm:text-5xl">
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7">
        Thank you,{' '}
        <span className="font-extrabold ">
          {customerDetails.name}
        </span>
        !
      </h3>
      <p className="mt-8">
        Check your purchase email{' '}
        <span className="mx-1 font-extrabold gradientText">
          {customerDetails.email}
        </span>{' '}
        for your invoice.
      </p>
    </>
  );
}
