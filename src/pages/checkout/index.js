import Checkout from '@/components/Checkout';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Head from 'next/head';
import React from 'react';

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Mosh NFT - Checkout </title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
}