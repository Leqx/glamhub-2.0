import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const auth = new Buffer(
      `${process.env.MPESA_API_KEY}:${process.env.MPESA_API_SECRET}`
    ).toString('base64');

    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    console.log(response.data.access_token);

    return NextResponse.json({ token: response.data.access_token });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
