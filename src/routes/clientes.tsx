import { createFileRoute } from "@tanstack/react-router";
import { ClientsPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/clientes")({
  head: () => pageHead("Clientes", "Base de clientes da Arte em Cinema."),
  component: ClientsPage,
});
