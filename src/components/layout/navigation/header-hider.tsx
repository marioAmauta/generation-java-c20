"use client";

import { ComponentProps, useEffect, useId } from "react";

import { cn } from "@/lib/utils";

export function HeaderHider({ children, className, ...props }: ComponentProps<"header">) {
  const headerId = useId();

  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    function handleScroll() {
      const $header = document.getElementById(headerId);

      if ($header === null) {
        return;
      }

      const currentScrollPosition = window.scrollY;

      if (previousScrollPosition > currentScrollPosition) {
        $header.style.top = "0px";
      } else {
        $header.style.top = `-${$header.offsetHeight}px`;
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerId]);

  return (
    <header id={headerId} className={cn("sticky top-0 z-50 transition-all duration-400", className)} {...props}>
      {children}
    </header>
  );
}
