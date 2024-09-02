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
    <Card className="w-[350px] bg-white">
      <div className="flex items-center justify-between">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
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
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
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

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
