import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Feature6 = () => (
  <div className="w-full py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl md:text-6xl tracking-tighter max-w-xl font-regular text-left text-black">
              Your Journey Starts Here
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-black text-left">
              Get started with our platform by exploring the key features that will help you succeed.
              Our comprehensive tools and services are designed to empower you at every step.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 text-black rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1 text-black" />
            <div className="flex flex-col">
              <h3 className="text-2xl tracking-tight text-black">Our Mission</h3>
              <p className="text-black max-w-xs text-base">
                Learn more about our team, who work hard to deliver the best products and services.
                We are committed to pushing boundaries and innovating for your success.
              </p>
              <div className="flex flex-row gap-4 py-5">
                <Button className="gap-2">
                  Sign up here
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 text-black rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1 text-black" />
            <div className="flex flex-col">
              <h3 className="text-2xl tracking-tight text-black">FAQs Page</h3>
              <p className="text-black max-w-xs text-base">
                Have questions? We've compiled the most frequently asked ones for your convenience.
                Get the answers you need to navigate our platform with confidence.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 text-black rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1 text-black" />
            <div className="flex flex-col">
              <h3 className="text-2xl tracking-tight text-black">Get in Touch</h3>
              <p className="text-black max-w-xs text-base">
                Have questions or need assistance? We're here for you! Reach out to our support team
                anytime, and we'll make sure you have everything you need to succeed.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 text-black rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1 text-black" />
            <div className="flex flex-col">
              <h3 className="text-2xl tracking-tight text-black">Choose Your Plan</h3>
              <p className="text-black max-w-xs text-base">
                Discover the pricing plans that work best for your business. We offer flexible options
                designed to fit your needs and budget, helping you grow at your own pace.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 text-black rounded-md aspect-square p-6 flex justify-between flex-col">
            <User className="w-8 h-8 stroke-1 text-black" />
            <div className="flex flex-col">
              <h3 className="text-2xl tracking-tight text-black">Work with Us</h3>
              <p className="text-black max-w-xs text-base">
                Become a part of something extraordinary. Work with CodeGenius to be at the forefront of
                innovation and excellence. Join our team and make a lasting impact in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
