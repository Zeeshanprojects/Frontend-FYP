import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header1 } from "@/header/page";
import { Footer1 } from "@/footer/page";

export const CTA1 = () => (
    <>
    <Header1/>
     <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
        <div>
          <Badge>Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            About us
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Welcome to CodeFlow: Unleash Your Front-End Creativity with
            Seamless, Code-Free Backend Integration! Dive into the future of web
            development with CodeFlow, where front-end creativity meets back-end
            power without a single line of code. Experience the freedom to
            design, innovate, and deploy robust APIs with unparalleled ease.
            Welcome to a world where your ideas come to life effortlessly,
            bridging the digital divide with a click. Join us on this journey to
            redefine development, one API at a time.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Jump on a call <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
  <Footer1/>
    </>
 
);
export default CTA1