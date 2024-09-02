import Image from "next/image";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-black">Hello</h1>
    </main>
    </BackgroundGradientAnimation>
  );
}
