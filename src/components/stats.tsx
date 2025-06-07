import { ContainerSection, RegularSection } from "@/components/layout/sections";
import { StatCard } from "@/components/stat-card";

export type Stat = {
  label: string;
  value: string;
};

export function Stats() {
  const stats: Stat[] = [
    { label: "Proyectos totales", value: "24" },
    { label: "Estudiantes", value: "18" },
    { label: "Completaron el curso", value: "90%" },
    { label: "Nota general", value: "5" }
  ];

  return (
    <RegularSection className="bg-muted/50">
      <ContainerSection>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </ContainerSection>
    </RegularSection>
  );
}
