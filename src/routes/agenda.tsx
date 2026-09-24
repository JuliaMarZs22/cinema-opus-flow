import { createFileRoute } from "@tanstack/react-router";
import { AgendaPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/agenda")({
  head: () => pageHead("Agenda", "Compromissos e agenda operacional da Arte em Cinema."),
  component: AgendaPage,
});