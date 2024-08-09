import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Blog1 = () => (
  <div className="w-full py-20">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          We’ll help you get started
        </h4>
        <Button>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gray-100 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl text-black">
            1/0
          </div>
          <h3 className="text-xl tracking-tight text-black">Custom APIs</h3>
          <p className="text-base text-black">
            Flexibility with Custom APIs
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gray-100 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl  text-black">
            30+
          </div>
          <h3 className="text-xl tracking-tight text-black">API Library</h3>
          <p className="text-base text-black">
            Comprehensive set of ready-made features
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gray-100 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl  text-black">
            100%
          </div>
          <h3 className="text-xl tracking-tight text-black">Deployable File</h3>
          <p className="text-base text-black">
            Easily export and deploy your applications
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gray-100 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl text-black">
            2X
          </div>
          <h3 className="text-xl tracking-tight text-black">AI Bot</h3>
          <p className="text-base text-black">
            Speed with integrated AI bot
          </p>
        </div>
      </div>
    </div>
  </div>
);
