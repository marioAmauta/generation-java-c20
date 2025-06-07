import { GenerationEnrollLinkButton } from "@/components/generation-link-button";
import { ContainerSection, RegularSection, SectionHeader } from "@/components/layout/sections";

export function CTAGeneration() {
  return (
    <RegularSection>
      <ContainerSection>
        <SectionHeader
          title="¿Listo para comenzar tu viaje?"
          description="Únase a nuestra próxima cohorte y cree proyectos increíbles mientras aprende desarrollo Java con expertos de la industria."
        />
        <div className="flex justify-center">
          <GenerationEnrollLinkButton />
        </div>
      </ContainerSection>
    </RegularSection>
  );
}
