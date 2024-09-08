import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function AirDropForm() {
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet(); // Extract publicKey and connected state
  const [network, setNetwork] = useState("");
  const [amount, setAmount] = useState("");

  const sendAirdrop = async () => {
    if (!connected || !publicKey) {
      alert("Please connect your wallet");
      return;
    }

    if (!connection) {
      alert("Connection is not established");
      return;
    }

    const amountInLamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    
    try {
      const airdropSignature = await connection.requestAirdrop(publicKey, amountInLamports);
      await connection.confirmTransaction(airdropSignature);
      alert(`Airdrop of ${amount} SOL successful!`);
    } catch (error) {
      console.error("Airdrop failed:", error);
      alert("Airdrop failed. Please try again.");
    }
  };

  return (
    <Card className="rounded-lg shadow-sm w-full md:max-w-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex text-white items-center justify-between px-6">
          <CardHeader>
            <CardTitle>Request Airdrop</CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Maximum of 2 requests per hour
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col space-y-1.5">
            <Select value={network} onValueChange={setNetwork}>
              <SelectTrigger id="network">
                <SelectValue placeholder="Devnet" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="devnet">Devnet</SelectItem>
                <SelectItem value="testnet">Testnet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex text-white items-center gap-5">
              <Input
                id="walletAddress"
                className="placeholder:text-white"
                placeholder="Connect Your Wallet"
                value={connected && publicKey ? publicKey.toString() : ""}
                readOnly
              />
              <div className="flex flex-col space-y-1.5">
                <Select value={amount} onValueChange={setAmount}>
                  <SelectTrigger id="amount">
                    <SelectValue placeholder="Amount" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <div className="grid grid-cols-2">
                      <SelectItem className="cursor-pointer" value="0.5">0.5</SelectItem>
                      <SelectItem className="cursor-pointer" value="1">1</SelectItem>
                      <SelectItem className="cursor-pointer" value="2.5">2.5</SelectItem>
                      <SelectItem className="cursor-pointer" value="5">5</SelectItem>
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center">
          <Button onClick={sendAirdrop} className="w-full">
            Confirm Airdrop
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
