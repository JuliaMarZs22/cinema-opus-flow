import { createFileRoute } from "@tanstack/react-router";
import { OpportunityPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/oportunidade")({
  head: () => pageHead("Oportunidade", "Detalhes da oportunidade comercial."),
  component: OpportunityPage,
});
