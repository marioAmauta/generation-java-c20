import { ExternalAppRoutes } from "@/lib/app-routes";

import { ExternalLink } from "@/components/external-link";

export function GenerationLinkButton() {
  return <ExternalLink href={ExternalAppRoutes.generationWeb}>Ir a Generation</ExternalLink>;
}

export function GenerationEnrollLinkButton() {
  return <ExternalLink href={ExternalAppRoutes.generationEnroll}>Postula a un curso ya</ExternalLink>;
}
