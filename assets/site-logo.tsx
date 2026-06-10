import LogoFull from "@/assets/logos/site-logo-full.svg";
import LogoIcon from "@/assets/logos/site-logo-icon.svg";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
 variant?: "full" | "icon";
 className?: string;
};

function SiteLogo({ variant = "full", className }: SiteLogoProps) {
 return (
  <>
   {variant === "icon" ? (
    <LogoIcon className={cn("size-[unset]", className)} />
   ) : (
    <LogoFull className={cn("size-[unset]", className)} />
   )}
  </>
 );
}

export default SiteLogo;
