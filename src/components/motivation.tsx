import { Calendar, Code, LucideProps, Server, Users } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import { GenerationLinkButton } from "@/components/generation-link-button";
import { ContainerSection, RegularSection, SectionHeader } from "@/components/layout/sections";

export function Motivation() {
  return (
    <RegularSection className="bg-muted/50">
      <ContainerSection className="space-y-10">
        <SectionHeader
          title="Construyendo Desarrolladores del Mañana"
          description="Nuestro bootcamp intensivo de Java transforma a principiantes en desarrolladores hábiles a través de
            proyectos prácticos, mejores prácticas de la industria y mentoría de profesionales experimentados."
        />
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { Icon: Calendar, text: "14 semanas de formación intensiva" },
              { Icon: Code, text: "Mejores practicas de la industria" },
              { Icon: Server, text: "Infraestructura de clase empresarial" },
              { Icon: Users, text: "Aprendizaje colaborativo" }
            ].map((item, index) => (
              <IconWithText key={index} Icon={item.Icon} text={item.text} />
            ))}
          </div>
          <div className="flex justify-end">
            <GenerationLinkButton />
          </div>
        </div>
      </ContainerSection>
    </RegularSection>
  );
}

type IconWithTextProps = {
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  text: string;
};

function IconWithText({ Icon, text }: IconWithTextProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="size-5 text-primary" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
