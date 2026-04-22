"use client";

import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon, Download } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  download?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "HAPIE - The Next-Gen AI Inference Engine",
  description = "A premium, local-first platform for lightning-fast AI inference. Hardware-aware optimization that dynamically scales across your local CPU and GPU for maximum performance.",
  mockup = (
    <div className="group/mockup relative w-full flex flex-col items-center justify-center mt-8 sm:mt-12">
      {/* Background Glow (Light Bulb Effect) */}
      <div className="absolute w-full top-[10%] animate-appear-zoom opacity-0 delay-2000 lg:top-[20%] pointer-events-none transition-all duration-1000 group-hover/mockup:scale-110">
        <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-5 sm:h-[512px] dark:opacity-20 group-hover/mockup:opacity-40 transition-opacity duration-700 -translate-y-1/2"></div>
        <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-10 sm:h-[256px] dark:opacity-30 group-hover/mockup:opacity-60 transition-opacity duration-700 -translate-y-1/2"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-center w-full transition-all duration-1000">
          <div className="relative z-30 w-full max-w-[1200px] animate-appear opacity-0 delay-500">
            <div className="relative overflow-hidden rounded-xl border border-border/50 dark:border-border/10 bg-background/50 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover/mockup:shadow-[0_0_50px_rgba(var(--brand),0.2)]">
              <img 
                src="/dashboard-dark.png" 
                alt="HAPIE Dashboard" 
                className="w-full h-auto block"
                style={{
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  badge = (
    <div className="animate-appear inline-flex items-center rounded-full border border-border/100 dark:border-border/20 text-xs font-semibold transition-colors gap-2 text-foreground px-3 py-1 bg-muted/50 backdrop-blur-sm">
      <span className="text-muted-foreground mr-2 font-medium">
        HAPIE Desktop v1.0 is now live!
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1 font-bold hover:underline">
        Get Started
        <ArrowRightIcon className="size-3" />
      </a>
    </div>
  ),
  buttons = [
    {
      href: "/HAPIE-Desktop-Setup.exe",
      text: "Download for Windows",
      variant: "default",
      icon: <Download className="mr-2 size-4" />,
      download: "HAPIE-Desktop-Setup.exe",
    },
    {
      href: siteConfig.links.github,
      text: "Github",
      variant: "outline",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "overflow-hidden pb-0 sm:pb-0 md:pb-0 border-none",
        className,
      )}
    >
      <div className="max-w-container relative mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground via-foreground to-foreground/60 relative z-10 inline-block bg-linear-to-b bg-clip-text text-5xl leading-tight font-bold tracking-tight text-balance text-transparent drop-shadow-2xl sm:text-7xl sm:leading-[1.1] md:text-8xl md:leading-[1.1]">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[840px] font-medium text-balance opacity-0 delay-100 sm:text-xl md:text-2xl leading-relaxed">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                  className={cn(
                    "h-12 px-8 text-base font-semibold transition-all duration-300",
                    button.variant === "default" ? "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "glass"
                  )}
                >
                  <a href={button.href} onClick={button.onClick} download={button.download}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full">
              {mockup}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

