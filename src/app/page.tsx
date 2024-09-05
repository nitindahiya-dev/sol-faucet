import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {AirDropForm} from "@/components/AirDropForm";
import { LinkGithub } from "@/components/LinkGithub";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
    <main className="flex min-h-screen flex-col gap-5 items-center justify-center">
      <AirDropForm />
      <LinkGithub />
    </main>
    </BackgroundGradientAnimation>
  );
}
