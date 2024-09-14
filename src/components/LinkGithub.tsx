import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn, signOut, useSession } from "next-auth/react"; // Import necessary methods from next-auth

export function LinkGithub() {
  const { data: session } = useSession(); // Get session data
  


  return (
    <Card className="rounded-lg shadow-sm w-full z-50 relative md:max-w-2xl backdrop-blur-md bg-opacity-30 bg-black">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex text-white items-center justify-between px-6">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">
              {session ? `Welcome, ${session.user?.name}` : "Unlock a Higher Airdrop Limit"}
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              {session
                ? "You're signed in with GitHub, enjoy higher airdrop limits!"
                : "Sign in with your GitHub account to unlock a higher airdrop limit"}
            </CardDescription>
          </CardHeader>
        </div>
        <CardFooter className="flex items-center cursor-pointer">
          {session ? (
            <Button onClick={() => signOut()} className="w-full">
              Sign Out from GitHub
            </Button>
          ) : (
            <Button onClick={() => signIn("github")} className="w-full ">
              Connect Your Github
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
