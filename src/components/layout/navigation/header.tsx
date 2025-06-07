import { BrandLogo } from "@/components/brand-logo";
import { ThemeSwitcher } from "@/components/theme-switcher";

import { DesktopNavbar } from "./desktop-navbar";
import { HeaderHider } from "./header-hider";
import { MobileNavbar } from "./mobile-navbar";

export function Header() {
  return (
    <HeaderHider className="border-b bg-background">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 p-4 max-[322px]:justify-center">
        <BrandLogo />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <DesktopNavbar />
          <ThemeSwitcher />
          <MobileNavbar />
        </div>
      </div>
    </HeaderHider>
  );
}
