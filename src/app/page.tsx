import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {AirDropForm} from "@/components/AirDropForm";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <AirDropForm />
    </main>
    </BackgroundGradientAnimation>
  );
}
