import Link from "next/link";

import { ContainerSection } from "@/components/layout/sections";
import { TypographyMuted } from "@/components/typography";

export function Footer() {
  return (
    <footer className="border-t">
      <ContainerSection className="flex flex-wrap justify-center gap-4 space-y-0 py-6 md:justify-between">
        <TypographyMuted className="text-xs">© 2024 Java Boot Camp. All rights reserved.</TypographyMuted>
        <nav className="flex gap-4">
          <Link href="#" className="text-xs underline-offset-4 hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs underline-offset-4 hover:underline">
            Contact
          </Link>
        </nav>
      </ContainerSection>
    </footer>
  );
}
