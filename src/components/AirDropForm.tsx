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

export function AirDropForm() {
  return (
    <Card className="rounded-lg shadow-sm w-full md:max-w-lg">
      <form>
        <div className="flex text-white items-center justify-between px-6">
          <CardHeader>
            <CardTitle>Request Airdrop</CardTitle>
            <CardDescription className="text-xs text-gray-400">Maximum of 2 requests per hour</CardDescription>
          </CardHeader>
          <div className="flex flex-col space-y-1.5">
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Devent" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="devent">Devnet</SelectItem>
                <SelectItem value="testnet">Testnet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex text-white items-center gap-5">
              <Input id="name" className="placeholder:text-white" placeholder="Wallet Address" />
              <div className="flex flex-col space-y-1.5">
                <Select>
                  <SelectTrigger id="framework">
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
          <Button className="w-full">Confirm Airdrop</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
