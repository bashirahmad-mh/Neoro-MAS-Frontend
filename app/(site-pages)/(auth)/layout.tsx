import React from "react";
import Image from "next/image";

function AuthLayout({ children }: { children: React.ReactNode }) {
 return (
  <div className="flex min-h-screen w-full pl-4">
   <div className="relative my-4 hidden h-[calc(100dvh-32px)] min-w-[480px] overflow-hidden rounded-[24px] border border-[#252525] lg:block lg:w-1/3">
    <Image
     src="/auth-banner.png"
     alt="Auth background"
     quality={100}
     fill
     className="pointer-events-none h-full w-full object-cover select-none"
     priority
     draggable={false}
    />
    <div className="absolute bottom-6 flex w-full flex-col gap-3 px-6 text-white">
     <h1 className="text-4xl font-semibold">The Future of Team Productivity</h1>
     <p className="leading-6">
      Collaborate with AI agents, streamline operations, and scale your workflow effortlessly.
     </p>
    </div>
   </div>
   <div className="flex h-screen w-full flex-col items-center justify-center overflow-y-auto py-4 pr-4">
    {children}
   </div>
  </div>
 );
}

export default AuthLayout;
