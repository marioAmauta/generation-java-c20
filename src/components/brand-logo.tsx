import { Code } from "lucide-react";
import Link from "next/link";

import { AppRoutes } from "@/lib/app-routes";
import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <Code className="size-8" />
      <Link href={AppRoutes.homePage} className={cn(buttonVariants({ variant: "link" }), "p-0 text-lg font-bold")}>
        {APP_NAME}
      </Link>
    </div>
  );
}
