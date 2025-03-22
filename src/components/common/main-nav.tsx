import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Icons } from "@/components/assets/icons";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/hub"
          className="transition-colors hover:text-foreground/80"
        >
          Hub
        </Link>
        <Link
          href="/modules"
          className="transition-colors hover:text-foreground/80"
        >
          Modules
        </Link>
        <Link
          href="/accessories"
          className="transition-colors hover:text-foreground/80"
        >
          Accessories
        </Link>
        <Link
          href="/software"
          className="transition-colors hover:text-foreground/80"
        >
          Software
        </Link>
      </nav>
    </div>
  );
}
