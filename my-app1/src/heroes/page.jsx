import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero1 = () => (
  <div className="w-full ">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Button variant="secondary" size="sm" className="gap-4">
            Read our launch article <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
          Build backend tasks
          in minutes
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
          Building backend tasks can be complex, but our codeless solutions simplify the process. With our low-code platforms, you can quickly create backend services without extensive coding. Our AI-powered tools automate tasks and optimize processes, saving you time and effort.
          </p>
        </div>
        <div className="flex flex-row gap-3">
         
        <Button>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);