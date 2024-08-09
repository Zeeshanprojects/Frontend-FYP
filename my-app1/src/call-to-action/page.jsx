import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA2 = () => (
  <div className="w-full min-h-screen bg-black text-white flex items-center">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge className="bg-white text-black">Get started</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Try our platform today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-gray-300 max-w-xl">
            Try CLBS for as long as you like with our free Starter plan.
            Purchase a paid Site plan to publish, host, and unlock additional
            features.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4 bg-white text-black">
            Sign up here <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
