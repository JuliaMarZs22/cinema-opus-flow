import { createFileRoute } from "@tanstack/react-router";
import { ClientAreaPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/area-cliente")({
  head: () => pageHead("Área do cliente", "Acompanhamento de projeto, documentos e financeiro do cliente."),
  component: ClientAreaPage,
});