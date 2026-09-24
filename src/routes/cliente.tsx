import { createFileRoute } from "@tanstack/react-router";
import { ClientPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cliente")({
  head: () => pageHead("Cliente João Silva", "Detalhes e histórico do cliente."),
  component: ClientPage,
});
