import { createFileRoute } from "@tanstack/react-router";
import { EquipmentPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/equipamento")({
  head: () => pageHead("Equipamento", "Rastreabilidade completa do equipamento."),
  component: EquipmentPage,
});
