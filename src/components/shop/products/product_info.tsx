'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// import {
//   formatCurrencyString,
//   useShoppingCart,
// } from 'use-shopping-cart';

import { Button } from '@components/ui/button';
import { useToast } from '@components/ui/use-toast';
import { ShoppingCart } from '@phosphor-icons/react';

interface Props {
  product: any;
}

export function ProductInfo({ product }: Props) {
  // const { addItem, cartDetails, incrementItem } = useShoppingCart();
  // const isInCart = !!cartDetails?.[product._id];
  const { toast } = useToast();

  function addToCart() {
    const item = {
      ...product,
    };

    // isInCart ? incrementItem(item._id) : addItem(item);
    // toast({
    //   title: `${item.name}`,
    //   description: 'Product added to cart',
    //   action: (
    //     <Link href="/app/shop/cart">
    //       <Button
    //         variant="link"
    //         className="gap-x-2 whitespace-nowrap"
    //       >
    //         <span>Open Cart</span>
    //         <ArrowRight className="h-5 w-5" />
    //       </Button>
    //     </Link>
    //   ),
    // });
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight gradientText">
        {product.name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">
          {/* {formatCurrencyString({
            value: product.price,
            currency: 'USD',
          })} */}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base hover:gradientText">
          {product.description}
        </div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            onClick={addToCart}
            type="button"
            className="w-full gradientBg py-6 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <ShoppingCart
              weight="duotone"
              size={20}
              className="mx-2"
            />
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  );
}
