import { RegularSection } from "@/components/layout/sections";
import { TypographyH1 } from "@/components/typography";

export function Hero() {
  return (
    <RegularSection className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <TypographyH1 className="text-center">Desarrollador Full Stack Jr Java</TypographyH1>
    </RegularSection>
  );
}
