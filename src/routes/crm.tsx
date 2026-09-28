import { createFileRoute } from "@tanstack/react-router";
import { CrmChatPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/crm")({
  head: () => pageHead("CRM · Conversas", "Gerencie leads e conversas comerciais."),
  component: CrmChatPage,
});
