import { CTAGeneration } from "@/components/cta-generation";
import { Hero } from "@/components/hero";
import { Motivation } from "@/components/motivation";
import { Projects } from "@/components/projects";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Testimonials />
      <Motivation />
      <CTAGeneration />
    </>
  );
}
