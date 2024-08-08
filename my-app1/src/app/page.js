import { Blog1 } from "@/blogs/page";
import { CTA2 } from "@/call-to-action/page";
import { Case1 } from "@/cases/page";
import { Contact1 } from "@/contact/page";
import Editor from "@/editor/page";
import { FAQ1 } from "@/faq/page";
import { Feature6 } from "@/features/page";
import { Footer1 } from "@/footer/page";
import { Header1 } from "@/header/page";
import { Hero1 } from "@/heroes/page";
import { LoginForm } from "@/login/page";
import { Dashboard } from "@/playground/page";


import { Pricing2 } from "@/pricing/page";
import { Hero3 } from "@/section/page";
import { SignUP } from "@/signup/page";
import { Stats2 } from "@/stats/page";
import { Testimonials1 } from "@/testimonials/page";



import Image from "next/image";

export default function Home() {
  return (
   <>
   <Header1/>
   <Hero1/>
   <Hero3/>
   <Case1/>
   <Testimonials1/>
   <Feature6/>
   <Pricing2/>
   <Stats2/>
   <CTA2/>
   <Blog1/>
   <FAQ1/>
   <Contact1/>
 <SignUP/>
<Dashboard/>
   <LoginForm/>
   <Editor/>
   <Footer1/>
   </>
  );
}
