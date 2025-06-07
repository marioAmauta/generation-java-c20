import Image from "next/image";

import { ContainerSection, RegularSection, SectionHeader } from "@/components/layout/sections";
import { StatCard } from "@/components/stat-card";
import { Stat } from "@/components/stats";
import { TypographyBlockquote, TypographyH4, TypographyMuted } from "@/components/typography";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const stats: Stat[] = [
    { label: "Tasa de colocación laboral", value: "95%" },
    { label: "Salario promedio inicial", value: "$800.000" },
    { label: "Tiempo promedio hasta la oferta de trabajo", value: "3 semanas" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      testimonial:
        "The bootcamp completely changed my career trajectory. Building the banking management system taught me not just Java, but how to think like a software engineer. I landed my dream job just 2 weeks after graduation!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      company: "StartupXYZ",
      testimonial:
        "The hands-on approach was incredible. My e-commerce project became the centerpiece of my portfolio. The instructors pushed us to build real-world applications, not just toy examples.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Backend Developer",
      company: "DataFlow Inc",
      testimonial:
        "Coming from a non-tech background, I was nervous about learning Java. The bootcamp's project-based learning made complex concepts click. My API project impressed my current employer!",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Java Developer",
      company: "Enterprise Solutions",
      testimonial:
        "The bootcamp prepared me for enterprise development. Working with Hibernate and MySQL in my library project gave me the database skills that employers were looking for.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Data Engineer",
      company: "CloudTech",
      testimonial:
        "The weather analytics project opened my eyes to data visualization and API integration. It directly led to my current role in data engineering. The skills transfer was seamless!",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Senior Java Developer",
      company: "FinanceFlow",
      testimonial:
        "Six months after graduation, I got promoted to senior developer! The payroll system project taught me Spring Security and complex business logic that I use daily in my current role.",
      rating: 5
    }
  ];

  return (
    <RegularSection className="bg-muted/50">
      <ContainerSection>
        <SectionHeader
          title="Historias de Éxito"
          description="Escuche a nuestros graduados sobre su experiencia en el bootcamp y cómo transformó sus carreras."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </ContainerSection>
    </RegularSection>
  );
}

type Testimonial = {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
};

function TestimonialCard({ name, role, company, testimonial, rating }: Testimonial) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-4 p-0">
        <div className="flex items-center gap-4">
          <Image
            src="/user-placeholder.png"
            width={60}
            height={60}
            alt="Lisa Wang"
            className="rounded-full object-cover"
          />
          <div>
            <TypographyH4 className="font-semibold">{name}</TypographyH4>
            <TypographyMuted>{role}</TypographyMuted>
            <TypographyMuted>{company}</TypographyMuted>
          </div>
        </div>
        <TypographyBlockquote>{testimonial}</TypographyBlockquote>
        <div className="flex text-yellow-400">{"★".repeat(rating)}</div>
      </CardContent>
    </Card>
  );
}
