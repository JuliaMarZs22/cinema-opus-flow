import { createFileRoute } from "@tanstack/react-router";
import { ServiceOrdersPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/ordens-servico")({
  head: () => pageHead("Ordens de serviço", "Planejamento e acompanhamento das ordens de serviço."),
  component: ServiceOrdersPage,
});
