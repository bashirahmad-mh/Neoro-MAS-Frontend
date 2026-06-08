declare module "*.svg" {
 import type { ComponentPropsWithoutRef, ElementType } from "react";

 const SvgIcon: ElementType<ComponentPropsWithoutRef<"svg">>;
 export default SvgIcon;
}

declare module "*.svg?url" {
 const content: string;
 export default content;
}
