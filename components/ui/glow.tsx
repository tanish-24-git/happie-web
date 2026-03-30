import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "from-brand-foreground/80 to-transparent absolute left-1/2 h-[300px] w-[80%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-20% to-80% opacity-30 blur-3xl sm:h-[600px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "from-brand/60 to-transparent absolute left-1/2 h-[150px] w-[50%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-70% opacity-40 blur-2xl sm:h-[300px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
}

export default Glow;
