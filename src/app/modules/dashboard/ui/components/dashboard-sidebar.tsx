"use client";
import Link from "next/link";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/meetings",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents",
  },
];
const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
];

export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground">
        <Link href="/" className="flex items-center gap-2 px-2 pt-2"
          <Image src="/logo.svg" alt="MEET.AI" width={36} height={36} /> 
          <p className="text-2xl font-semibold">Meet.AI</p>
        </Link>
        <div className="px-4 py-2">
          <Separator className="opacity-10 text-[#5D6B68]" />
        </div>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {firstSection.map((item) => (
                  <SidebarMenuItem key={item.href}>
                   
                    <SidebarMenuButton
                    asChild
                      className={cn(
                        "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className="size-5" />
                        <span className="text-sm font-medium tracking-tight">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarHeader>
    </Sidebar>
  );
};
