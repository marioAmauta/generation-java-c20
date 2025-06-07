import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";
import { LinkType } from "@/lib/types";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export function DesktopNavbar() {
  const links: LinkType[] = [
    {
      href: AppRoutes.projects,
      label: "Projects",
      testId: "desktop-header-projects-link"
    }
  ];

  return (
    <div className="hidden items-center gap-2 md:flex">
      {links.map(({ href, label, testId }) => (
        <Link
          key={href}
          href={href}
          className={cn(buttonVariants({ variant: "link" }), "h-10 px-4", "text-sm")}
          data-testid={testId}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
