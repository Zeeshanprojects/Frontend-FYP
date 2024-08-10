import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats2 = () => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-black">
              This is the start of something new
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-left text-black">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gray-100">
              <MoveUpRight className="w-4 h-4 mb-10 text-black" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                500.000
                <span className="text-sm tracking-normal">+20.1%</span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-black">
                Monthly active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gray-100">
              <MoveDownLeft className="w-4 h-4 mb-10 text-black" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                20.105
                <span className="text-sm tracking-normal">-2%</span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-black">
                Daily active users
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gray-100">
              <MoveUpRight className="w-4 h-4 mb-10 text-black" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                $523.520
                <span className="text-sm tracking-normal">+8%</span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-black">
                Monthly recurring revenue
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 rounded-md bg-gray-100">
              <MoveUpRight className="w-4 h-4 mb-10 text-black" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end text-black">
                $1052
                <span className="text-sm tracking-normal">+2%</span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight max-w-xl text-left text-black">
                Cost per acquisition
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
