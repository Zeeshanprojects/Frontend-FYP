"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
export const Header1 = () => {

  const pathname = usePathname()

  console.log(pathname,"ajjaja")
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };


  const navigationItems = [
    {
      title: "Home",
      href: "/", // Redirects to the home page
    },
    {
      title: "Editor",
      href: "/editor", // Redirects to the editor page
    },
    {
      title: "Playground",
      href: "/playground", // Redirects to the editor page
    },
    // {
    //   title: "playground",
    //   href: "/", // Corrected to /contact-us
    // },
    {
      title: "Others",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About US",
          href: "/about-us", // Corrected to /about-us
        },
        {
          title: "Contact US",
          href: "/contact-us", // Corrected to /contact-us
        },
        {
          title: "Pricing",
          href: "/pricing", // Redirects to the pricing page
        },
       
        {
          title: "Settings",
          href: "/settings", // Corrected to /settings
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    
    
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) =>
                item.href ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>
                        <Button variant="ghost">{item.title}</Button>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="font-medium text-sm">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                        <div className="flex flex-col h-full justify-between">
                          <div className="flex flex-col">
                            <p className="text-base">{item.title}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                          <Button size="sm" className="mt-10">
                            Log Out
                          </Button>
                        </div>
                        <div className="flex flex-col text-sm h-full justify-end">
                          {item.items?.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.title}
                              asChild
                            >
                              <Link
                                href={subItem.href}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <p className="font-semibold cursor-pointer">
            CODELESS BACKEND SOLUTIONS
          </p>
        </div>
        <div className="flex justify-end w-full gap-4">
          {/* <Button variant="ghost" className="hidden md:inline" onClick={handleLogout}>
            <Link href="#">Log out</Link>
          </Button> */}
          <div className="border-r hidden md:inline"></div>
          <Button variant="outline">
            <Link href="/login">Sign in</Link>
          </Button>
          <Button>
            <Link href="/signup">Get started</Link>
          </Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
