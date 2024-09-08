"use client"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AirDropForm } from "@/components/AirDropForm";
import { LinkGithub } from "@/components/LinkGithub";



import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';



export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <ConnectionProvider endpoint={"https://api.mainnet-beta.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="absolute top-5 right-5">
              <WalletMultiButton />
            </div>
            <main className="flex min-h-screen flex-col gap-5 items-center justify-center">
              <AirDropForm />
              <LinkGithub />
            </main>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </BackgroundGradientAnimation>
  );
}
