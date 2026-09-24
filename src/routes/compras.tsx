import { createFileRoute } from "@tanstack/react-router";
import { PurchasesPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/compras")({
  head: () => pageHead("Compras", "Solicitações, cotações, pedidos e recebimentos."),
  component: PurchasesPage,
});
