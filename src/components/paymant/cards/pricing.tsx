'use client';

import { CheckCircle2, Loader2 } from 'lucide-react';
import { pricingOptions } from '@/constants';
import { Button } from '@/components/ui/button';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { showTimestamp } from '@/lib/utils';

const Pricing = () => {
  //   const { token, description, phoneNumber, amount } = req.body;
  const pay = async (description: any, amount: any) => {
    const token = await axios.get('/api/mpesa/token');

    console.log(token.data.token);

    const response = await axios.post('/api/mpesa/stkpush', {
      token: token.data.token,
      description,
      phoneNumber: 254700001485,
      amount,
    });

    console.log(response.data);
  };

  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: async ({ amount, description }: any) => {
      const token = await axios.get('/api/mpesa/token');

      const apiUrl =
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.data.token} `,
      };

      console.log(token.data.token);

      const data = {
        BusinessShortCode: 174379,
        Password:
          'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzE1MTUxNzQ4',
        Timestamp: showTimestamp(),
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: 254700001485,
        PartyB: 174379,
        PhoneNumber: 254700001485,
        CallBackURL: 'https://localhost:3000',
        AccountReference: 'GlamHub',
        TransactionDesc: `Subscribed to ${description} plan`,
      };

      const response = await axios.post(apiUrl, data, {
        headers,
      });

      console.log(response.data);

      return response.data;
    },
  });

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-primary sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option: any, index: any) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl md:w-[250px] mb-8">
                {option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">
                  ksh. {option.price}
                </span>
                <span className="text-neutral-400 tracking-tight">
                  /Month
                </span>
              </p>
              <ul>
                {option.features.map((feature: any, index: any) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => pay(option.title, option.price)}
                variant="outline"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                {isPending ? (
                  <Loader2 className=" h-4 w-4 animate-spin" />
                ) : (
                  <span>Subscribe</span>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
