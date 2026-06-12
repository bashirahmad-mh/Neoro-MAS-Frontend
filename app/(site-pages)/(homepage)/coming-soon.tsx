"use client";

import SiteLogo from "@/assets/site-logo";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

function AnimatedShinyText({
 children,
 className,
 shimmerWidth = 100,
}: {
 children: React.ReactNode;
 className?: string;
 shimmerWidth?: number;
}) {
 return (
  <p
   style={{ "--shiny-width": `${shimmerWidth}px` } as React.CSSProperties}
   className={cn(
    "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
    "animate-shiny-text bg-clip-text [background-position:0_0] bg-no-repeat",
    "[background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
    "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent dark:via-white/60",
    className,
   )}
  >
   {children}
  </p>
 );
}

export default function ComingSoon() {
 return (
  <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
   {/* Blue radial glow */}
   <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
     background:
      "radial-gradient(ellipse 65% 50% at 50% 60%, rgba(1,99,255,0.14) 0%, rgba(1,56,138,0.07) 45%, transparent 70%)",
    }}
   />

   {/* Vignette */}
   <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
     background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.7) 100%)",
    }}
   />

   {/* Particles */}
   <Particles
    className="absolute inset-0 z-0"
    quantity={120}
    staticity={40}
    ease={60}
    color="#4d9fff"
    size={0.5}
   />

   {/* Meteors */}
   <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    <Meteors number={18} />
   </div>

   {/* Content */}
   <div className="relative z-20 flex flex-col items-center gap-7 px-6 text-center">
    <SiteLogo className="h-10 w-auto" />

    <div className="border-primary/20 bg-primary/10 flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm">
     <span className="relative flex h-1.5 w-1.5">
      <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
      <span className="bg-primary relative inline-flex h-1.5 w-1.5 rounded-full" />
     </span>
     <AnimatedShinyText
      shimmerWidth={80}
      className="text-primary/70 text-xs font-medium tracking-widest uppercase"
     >
      Coming Soon
     </AnimatedShinyText>
    </div>

    <div className="flex flex-col gap-3">
     <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
      Something{" "}
      <span
       className="bg-clip-text text-transparent"
       style={{
        backgroundImage: "linear-gradient(135deg, #4d9fff 0%, #0163ff 50%, #01388a 100%)",
       }}
      >
       big
      </span>{" "}
      is coming.
     </h1>
    </div>

    <div className="via-border h-px w-32 bg-gradient-to-r from-transparent to-transparent" />
   </div>
  </div>
 );
}
