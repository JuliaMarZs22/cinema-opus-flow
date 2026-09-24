import { createFileRoute } from "@tanstack/react-router";
import { FinancePage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/financeiro")({
  head: () => pageHead("Financeiro", "Visão financeira integrada à operação."),
  component: FinancePage,
});
