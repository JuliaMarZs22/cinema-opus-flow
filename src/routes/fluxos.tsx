import { createFileRoute } from "@tanstack/react-router";
import { FlowsPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/fluxos")({
  head: () => pageHead("Construtor de fluxos", "Automação visual dos processos operacionais."),
  component: FlowsPage,
});
