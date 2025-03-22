"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/assets/icons";
import { MainNav } from "@/components/common/main-nav";

import { Button } from "@/components/ui/button";
import { ModeSwitcher } from "@/components/assets/mode-switcher";
import { FilterNav } from "./filter-nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const subHeaderPaths = ["/modules", "/accessories"];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MainNav />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <nav className="flex items-center gap-1">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-8 w-8 px-0"
              >
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <ModeSwitcher />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </div>
        </div>
        {subHeaderPaths.includes(pathname) && (
          <div className="container flex h-10 items-center gap-2 md:gap-4">
            <FilterNav pathname={pathname} />
          </div>
        )}
      </div>
    </header>
  );
}
