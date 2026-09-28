import { createFileRoute } from "@tanstack/react-router";
import { CrmPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/crm")({
  head: () => pageHead("CRM · Comercial", "Gerencie conversas, leads e o pipeline comercial."),
  component: CrmPage,
});
