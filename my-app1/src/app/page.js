import { Blog1 } from "@/blogs/page";
import { CTA2 } from "@/call-to-action/page";
import { Case1 } from "@/cases/page";
import { Contact1 } from "@/contact/page";


import { Feature6 } from "@/features/page";
import { Footer1 } from "@/footer/page";
import { Header1 } from "@/header/page";
import { Hero1 } from "@/heroes/page";

import { Dashboard } from "@/playground/page";

import { Hero3 } from "@/section/page";

import { Stats2 } from "@/stats/page";
import { Testimonials1 } from "@/testimonials/page";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header1 />
      <Hero1 />
      <Blog1 />
      <Hero3 />
      <Testimonials1 />
      <Case1 />
      <Feature6 />
      <Stats2 />
      <CTA2 />
   
      <Contact1 />
      <Dashboard />
      <Footer1 />
    </>
  );
}
