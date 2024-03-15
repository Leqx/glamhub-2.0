import { showTimestamp } from '@/lib/utils';
import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();

    // console.log(data);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    };

    const timestamp = showTimestamp();

    const mydata = {
      BusinessShortCode: 174379,
      Password:
        'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzE1MTgwNjMz',
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Number(data.amount),
      PartyA: Number(data.phoneNumber),
      PartyB: 174379,
      PhoneNumber: Number(data.phoneNumber),
      CallBackURL: 'https://glamhub.site/dashboard',
      AccountReference: 'GlamHub',
      TransactionDesc: `Payment of ${data.description} membership.`,
    };

    //console.log(paymentData);

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      mydata,
      { headers }
    );

    console.log(response.data);

    return NextResponse.json({ data: response.data });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

// import axios from 'axios';

// export default async function handler(req: any, res: any) {
//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }

//   const { token, description, phoneNumber, amount } = req.body;

//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   };

//   // Set up your payment request parameters here
//   const paymentData = {
//     BusinessShortCode: 174379,
//     Password:
//       'MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwMzE1MTUxNzQ4',
//     Timestamp: '20240315151748',
//     TransactionType: 'CustomerPayBillOnline',
//     Amount: amount,
//     PartyA: phoneNumber,
//     PartyB: 174379,
//     PhoneNumber: phoneNumber,
//     CallBackURL: 'https://localhost:3000',
//     AccountReference: 'GlamHub',
//     TransactionDesc: `${description}`,
//   };

//   try {
//     const response = await axios.post(
//       'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
//       paymentData,
//       { headers }
//     );
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }
