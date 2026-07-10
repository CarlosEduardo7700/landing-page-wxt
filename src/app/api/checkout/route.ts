import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia', 
});

const ALLOWED_EXTENSION_ORIGIN = process.env.ALLOWED_EXTENSION_ORIGIN || 'chrome-extension://SEU_ID_DA_EXTENSAO_AQUI';

function setCorsHeaders(res: NextResponse, requestHeaders: Headers) {
  const origin = requestHeaders.get('origin');

  if (origin === ALLOWED_EXTENSION_ORIGIN) {
    res.headers.set('Access-Control-Allow-Origin', ALLOWED_EXTENSION_ORIGIN);
  } else {
    res.headers.set('Access-Control-Allow-Origin', 'null');
  }

  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return res;
}

export async function OPTIONS(request: Request) {
  return setCorsHeaders(new NextResponse(null, { status: 204 }), request.headers);
}

export async function POST(request: Request) {
  try {
    const { userId, email } = await request.json();

    if (typeof userId !== 'string' || typeof email !== 'string' || !userId || !email) {
      const response = NextResponse.json({ error: 'Missing userId or email' }, { status: 400 });
      return setCorsHeaders(response);
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [{ price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!, quantity: 1 }],
      client_reference_id: userId, 
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    });

    const response = NextResponse.json({ url: session.url });
    return setCorsHeaders(response, request.headers);
  } catch (error: unknown) {
    console.error('Error creating Stripe Checkout Session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    return setCorsHeaders(response, request.headers);
  }
}