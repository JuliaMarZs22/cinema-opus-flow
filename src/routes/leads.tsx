import { createFileRoute } from "@tanstack/react-router";
import { LeadsPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/leads")({
  head: () => pageHead("Leads", "Gestão de leads e potenciais projetos."),
  component: LeadsPage,
});
