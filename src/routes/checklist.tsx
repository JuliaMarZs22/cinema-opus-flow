import { createFileRoute } from "@tanstack/react-router";
import { ChecklistPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/checklist")({
  head: () => pageHead("Checklist de instalação", "Checklist operacional da instalação."),
  component: ChecklistPage,
});
