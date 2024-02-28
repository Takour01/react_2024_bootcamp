import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import React from "react";

import useViewModel from "../../pages/Home/components/Agenda/AgendaVM";

type hrefType =
  | "/"
  | "/about"
  | "/initial"
  | "/environment"
  | "/jsx"
  | "/components"
  | "/events"
  | "/conditional"
  | "/lists"
  | "/forms"
  | "/props";

const links: {
  href: hrefType;
}[] = [
  { href: "/initial" },
  { href: "/environment" },
  { href: "/jsx" },
  { href: "/components" },
  { href: "/props" },
  { href: "/events" },
  { href: "/conditional" },
  { href: "/lists" },
  { href: "/forms" },
];

export default function RightNav() {
  const { lessonsDetails } = useViewModel();

  const components: {
    title: string;
    href: hrefType;
  }[] = lessonsDetails.map((lesson, index) => {
    const link = links[index] || { href: "/initial" };

    return {
      title: lesson.subTitle,
      href: link.href,
    };
  });

  return (
    <NavigationMenu className="hidden mr-20 md:flex">
      <NavigationMenuList className="gap-2  w-[400px] justify-end">
        <NavigationMenuItem className="w-[100px]">
          <NavigationMenuTrigger className="bg-transparent">
            Lessons
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] overflow-visible ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  // @ts-ignore
                  to={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-[100px] flex place-content-center">
          <Link to="/">
            <NavigationMenuLink className="bg-transparent">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="w-[100px] flex place-content-center">
          <Link to="#about">
            <NavigationMenuLink className="bg-transparent">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
