import { createFileRoute } from "@tanstack/react-router";
import { WonSalePage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/venda-ganha")({
  head: () => pageHead("Venda ganha", "Conversão de venda em projeto operacional."),
  component: WonSalePage,
});
