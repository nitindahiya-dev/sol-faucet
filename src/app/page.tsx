"use client";
import React from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AirDropForm } from "@/components/AirDropForm";
import { LinkGithub } from "@/components/LinkGithub";
import Heading from "@/components/Heading";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { SessionProvider } from "next-auth/react"; // Import SessionProvider from next-auth

export default function Home() {
  return (
    <SessionProvider> {/* Wrap everything with SessionProvider */}
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/YMEA2JwMZDAKAmATUjlwvrpP0Rnmc2YF"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <BackgroundGradientAnimation>
              <div className="absolute top-5 right-5">
                <WalletMultiButton />
              </div>
              <main className="flex min-h-screen flex-col gap-5 items-center justify-center">
                <Heading />
                <AirDropForm />
                <LinkGithub />
              </main>
              <ToastContainer />
            </BackgroundGradientAnimation>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </SessionProvider>
  );
}
