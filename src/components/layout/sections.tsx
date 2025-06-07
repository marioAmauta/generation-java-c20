import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { TypographyH2, TypographyLead } from "@/components/typography";

export function RegularSection({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn("py-12 md:py-24 lg:py-32", className)} {...props}>
      {children}
    </section>
  );
}

export function ContainerSection({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("container mx-auto space-y-8 px-4 md:px-6", className)} {...props}>
      {children}
    </div>
  );
}

export function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-4 text-center md:mb-12">
      <TypographyH2>{title}</TypographyH2>
      <TypographyLead className="text-lg text-balance">{description}</TypographyLead>
    </div>
  );
}
