import { createFileRoute } from "@tanstack/react-router";
import { ProjectPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/projeto")({
  head: () => pageHead("Projeto AEC-00482", "Gestão completa do projeto Casa João Silva."),
  component: ProjectPage,
});
