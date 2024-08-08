import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
 
export const Blog1 = () => (
  <div className="w-full py-20 lg:py-40 bg-black text-white">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
          We’ll help you get started
        </h4>
        <Button className="gap-4">
          View all articles <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl font-extrabold text-white">
            1/0
          </div>
          <h3 className="text-xl tracking-tight">Custom APIs</h3>
          <p className="text-muted-foreground text-white">
            Flexibility with Custom APIs
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-500 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl font-extrabold text-white">
            30+
          </div>
          <h3 className="text-xl tracking-tight">API Library</h3>
          <p className="text-muted-foreground text-white">
            Comprehensive set of ready-made features
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl font-extrabold text-white">
            100%
          </div>
          <h3 className="text-xl tracking-tight">Deployable File</h3>
          <p className="text-muted-foreground text-white">
            Easily export and deploy your applications
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
          <div className="bg-gradient-to-r from-red-300 via-yellow-500 to-green-500 rounded-md aspect-video mb-4 flex items-center justify-center text-6xl font-extrabold text-white">
            2X
          </div>
          <h3 className="text-xl tracking-tight">AI Bot</h3>
          <p className="text-muted-foreground text-white">
            Speed with integrated AI bot
          </p>
        </div>
      </div>
    </div>
  </div>
);
