"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SiteSwitcher() {
  const pathname = usePathname();

  const sites = [
    { name: "Acme", href: "/acme", description: "Centered / Symmetric" },
    { name: "Catalyst", href: "/catalyst", description: "Asymmetric / Left-weighted" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-background border-b">
      <div className="container mx-auto flex h-10 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">shadcn/ui</span>
          <span>Block Variations</span>
        </div>
        <nav className="flex items-center gap-1">
          {sites.map((site) => (
            <Link
              key={site.href}
              href={site.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                pathname === site.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {site.name}
              <span className="hidden sm:inline text-[10px] ml-1.5 opacity-70">
                — {site.description}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
