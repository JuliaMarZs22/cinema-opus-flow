import { createFileRoute } from "@tanstack/react-router";
import { StockPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/estoque")({
  head: () => pageHead("Estoque", "Inventário de produtos, equipamentos, materiais e kits."),
  component: StockPage,
});
