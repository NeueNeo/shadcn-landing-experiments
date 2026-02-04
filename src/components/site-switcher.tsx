"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-8 h-8 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </button>
  );
}

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
        <div className="flex items-center gap-1">
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
          <div className="w-px h-4 bg-border mx-1" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
