import { createFileRoute } from "@tanstack/react-router";
import { UsersPage } from "@/components/aec/pages";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/usuarios")({
  head: () => pageHead("Usuários e permissões", "Perfis de acesso e permissões por módulo."),
  component: UsersPage,
});
