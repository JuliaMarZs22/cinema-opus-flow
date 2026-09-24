import { createFileRoute } from "@tanstack/react-router";
import { PipelinePage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/pipeline")({
  head: () => pageHead("Pipeline comercial", "Visão comercial configurável por etapas."),
  component: PipelinePage,
});
