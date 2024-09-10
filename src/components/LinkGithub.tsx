import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function LinkGithub() {
  return (
    <Card className="rounded-lg shadow-sm w-full relative md:max-w-2xl backdrop-blur-md bg-opacity-30 bg-black">
      <form onSubmit={(e) => {
          e.preventDefault();
        }}>
        <div className="flex text-white items-center justify-between px-6">
          <CardHeader>
            <CardTitle>Unlock a Higher Airdrop Limit</CardTitle>
            <CardDescription className="text-xs text-gray-400">Sign in with your GitHub account to unlock a higher airdrop limit</CardDescription>
          </CardHeader>
        </div>
        <CardFooter className="flex items-center">
          <Button className="w-full z-50">Connect Your Github</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
