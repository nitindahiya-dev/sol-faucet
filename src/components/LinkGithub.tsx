import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LinkGithub() {
  return (
    <Card className="rounded-lg shadow-sm w-full md:max-w-lg">
      <form>
        <div className="flex text-white items-center justify-between px-6">
          <CardHeader>
            <CardTitle>Unlock a Higher Airdrop Limit</CardTitle>
            <CardDescription className="text-xs text-gray-400">Sign in with your GitHub account to unlock a higher airdrop limit</CardDescription>
          </CardHeader>
        </div>
        <CardFooter className="flex items-center">
          <Button className="w-full">Connect Your Github</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
