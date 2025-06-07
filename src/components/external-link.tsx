import { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";

export function ExternalLink({ children, href, className, ...props }: ComponentProps<"a">) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonVariants({ className })} {...props}>
      {children}
    </a>
  );
}
