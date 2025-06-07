import { AlignJustify } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger className={buttonVariants({ variant: "ghost", className: "md:hidden" })}>
        <AlignJustify className="size-8" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="p-4">Opciones</div>
      </SheetContent>
    </Sheet>
  );
}
