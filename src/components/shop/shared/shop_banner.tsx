'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { Carousel } from 'react-responsive-carousel';
import {
  Clock,
  DeviceMobile,
  MapTrifold,
  Envelope,
} from '@phosphor-icons/react';

export function ShopHeroBanner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      {/* <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://links.papareact.com/gi1"
            alt="1"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/6ff"
            alt="2"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/7ma"
            alt="3"
            loading="lazy"
          />
        </div>
      </Carousel> */}
    </div>
  );
}

export const ShopBanner = () => {
  return (
    <>
      <div className="h-20 bg-primary-foreground/80 mt-5 transform  hidden lg:inline-flex items-center gap-x-12 p-10">
        <div className="flex items-center gap-5 w-60">
          <Clock
            weight="duotone"
            size={42}
            className="text-teal-500 hover:text-sky-500"
          />
          <div>
            <p>7 days a week</p>
            <p className="font-semibold">24 hours</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <DeviceMobile
            weight="duotone"
            size={42}
            className="text-teal-500 hover:text-sky-500"
          />
          <div>
            <p>+ 018 0000 0000</p>
            <p className="font-semibold">Order by Phone</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <MapTrifold
            weight="duotone"
            size={42}
            className="text-teal-500 hover:text-sky-500"
          />
          <div>
            <p>Mirpur, Dhaka</p>
            <p className="font-semibold">Address</p>
          </div>
        </div>
        <div className="flex items-center gap-5 w-60">
          <Envelope
            weight="duotone"
            size={42}
            className="text-teal-500 hover:text-sky-500"
          />
          <div>
            <p>Get an invoice</p>
            <p className="font-semibold">Email us</p>
          </div>
        </div>
      </div>
    </>
  );
};
