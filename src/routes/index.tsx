import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead("Dashboard", "Resumo executivo da operação Arte em Cinema."),
  component: DashboardPage,
});
