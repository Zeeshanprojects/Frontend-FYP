import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats2 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              This is the start of something new
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              <MoveUpRight className="w-4 h-4 mb-10 text-white" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white">
                500.000
                <span className="text-sm tracking-normal">
                  +20.1%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white">
                Monthly active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <MoveDownLeft className="w-4 h-4 mb-10 text-white" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white">
                20.105
                <span className="text-sm tracking-normal">
                  -2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white">
                Daily active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gradient-to-r from-green-400 via-yellow-500 to-red-500">
              <MoveUpRight className="w-4 h-4 mb-10 text-white" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white">
                $523.520
                <span className="text-sm tracking-normal">
                  +8%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white">
                Monthly recurring revenue
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
              <MoveUpRight className="w-4 h-4 mb-10 text-white" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-white">
                $1052
                <span className="text-sm tracking-normal">
                  +2%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-white">
                Cost per acquisition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
