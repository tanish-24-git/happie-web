import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";


import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <img src="/logo.png" alt="Happie Logo" className="size-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all group-hover:scale-110" />,
  name = "Happie",
  columns = [
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: siteConfig.url },
        { text: "Getting started", href: siteConfig.getStartedUrl },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Email", href: siteConfig.links.email },
        { text: "Twitter", href: "https://twitter.com" },
        { text: "Github", href: siteConfig.links.github },
        { text: "LinkedIn", href: siteConfig.links.linkedin },
      ],
    },
  ],
  copyright = "© 2026 Happie. All rights reserved",
  policies = [],
  showModeToggle = false,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4 border-t border-border/40 dark:border-border/10", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="group flex items-center gap-2 cursor-pointer transition-colors duration-300">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="flex flex-col items-center justify-center gap-4 text-center sm:flex-col sm:items-center sm:justify-center">
            <div>{copyright}</div>
            {showModeToggle && (
              <div className="flex items-center gap-4">
                <ModeToggle />
              </div>
            )}
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
