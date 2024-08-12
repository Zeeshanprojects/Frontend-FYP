import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                This is the start of something new
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
        1. What is a code-less backend solution?
        </AccordionTrigger>
        <AccordionContent>
        A no-code backend is when a no-code app builder automatically generates the backend code. No-code tools 
                    empower more people to build powerful backend processes without writing a single line of code. But no-code development 
                    knowledge is required to deliver apps that work as expected.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
        2. How does the AI-powered code generation work?
        </AccordionTrigger>
        <AccordionContent>
        A no-code backend is when a no-code app builder automatically generates the backend code. No-code tools 
                    empower more people to build powerful backend processes without writing a single line of code. But no-code development 
                    knowledge is required to deliver apps that work as expected.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
        3. Can I customize pre-defined APIs?
        </AccordionTrigger>
        <AccordionContent>
        A no-code backend is when a no-code app builder automatically generates the backend code. No-code tools 
                    empower more people to build powerful backend processes without writing a single line of code. But no-code development 
                    knowledge is required to deliver apps that work as expected.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
        4. How do I deploy my configured backend?
        </AccordionTrigger>
        <AccordionContent>
        A no-code backend is when a no-code app builder automatically generates the backend code. No-code tools 
                    empower more people to build powerful backend processes without writing a single line of code. But no-code development 
                    knowledge is required to deliver apps that work as expected.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
        5. Is documentation available for the platform?
        </AccordionTrigger>
        <AccordionContent>
        A no-code backend is when a no-code app builder automatically generates the backend code. No-code tools 
                    empower more people to build powerful backend processes without writing a single line of code. But no-code development 
                    knowledge is required to deliver apps that work as expected.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  </div>
);