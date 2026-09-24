import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  head: () => pageHead("Acesso", "Acesso restrito ao Arte em Cinema OS."),
  component: LoginPage,
});
