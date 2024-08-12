import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
export const Hero3 = () => (
  <div className="w-full py-20 ">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Browse through a large set of ready-made features or create one using AI.
              No more waiting for integrations – bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-row gap-4">
          <Button>
            <Link href="/signup">  Sign up here</Link>
          </Button>
           
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <Image
            src="/coding.jpg"
            alt="Image"
            width="1920"
            height="380"
            className="h-full w-full object-cover rounded-md dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  </div>
);
