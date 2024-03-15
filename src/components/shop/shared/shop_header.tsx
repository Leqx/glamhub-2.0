'use client';

import Link from 'next/link';
import {
  Calculator,
  Book,
  Pencil,
  Hoodie,
} from '@phosphor-icons/react';

type Props = {};

const ShopHeader = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-3xl font-semibold gradientText">
        Choose a product
      </h2>
      <p className="text-lg text-center">
        Explore dozens school supply products.
      </p>
      <div className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5">
        <Link
          href={'/phones'}
          className="flex gap-2 hover:text-sky-500 cursor-pointer duration-200"
        >
          <Calculator
            weight="duotone"
            size={32}
            className="hover:text-teal-500"
          />
          <p>Electronics</p>
        </Link>
        <div className="h-7 w-[1px] bg-designColor inline-flex" />
        <Link
          href={'/phonecases'}
          className="flex items-center gap-2 hover:text-sky-500 cursor-pointer duration-200"
        >
          <Pencil
            weight="duotone"
            size={32}
            className="hover:text-teal-500"
          />
          <p>Stationery</p>
        </Link>
        <div className="h-7 w-[1px] bg-designColor inline-flex" />

        <Link
          href={'/watches'}
          className="flex items-center gap-2 hover:text-sky-500 cursor-pointer duration-200"
        >
          <Book
            weight="duotone"
            size={32}
            className="hover:text-teal-500"
          />
          <p>Books</p>
        </Link>
        <div className="h-7 w-[1px] bg-designColor inline-flex" />

        <Link
          href={'/accessories'}
          className="flex items-center gap-2 hover:text-sky-500 cursor-pointer duration-200"
        >
          <Hoodie
            weight="duotone"
            size={32}
            className="hover:text-teal-500"
          />
          <p>Merch</p>
        </Link>
      </div>
    </div>
  );
};

export default ShopHeader;
