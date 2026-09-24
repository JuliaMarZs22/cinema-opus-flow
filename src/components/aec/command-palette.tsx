import { Link } from "@tanstack/react-router";
import { Box, BriefcaseBusiness, FileText, Search, UsersRound, Wrench, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const results = [
  { label: "Casa João Silva", meta: "Projeto · AEC-00482", to: "/projeto", icon: BriefcaseBusiness },
  { label: "João Henrique Silva", meta: "Cliente", to: "/cliente", icon: UsersRound },
  { label: "Sony VPL-XW5000", meta: "Equipamento · S/N 5A0021847", to: "/equipamento", icon: Box },
  { label: "OS-0198", meta: "Instalação de equipamentos", to: "/ordens-servico", icon: Wrench },
  { label: "Proposta Private Cinema", meta: "Documento · R$ 280.000", to: "/oportunidade", icon: FileText },
] as const;

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  useEffect(() => { if (!open) setQuery(""); }, [open]);
  const filtered = useMemo(() => results.filter((item) => `${item.label} ${item.meta}`.toLowerCase().includes(query.toLowerCase())), [query]);
  if (!open) return null;
  return <div className="command-layer" role="presentation" onMouseDown={onClose}>
    <section className="command-palette" role="dialog" aria-modal="true" aria-label="Busca global" onMouseDown={(event) => event.stopPropagation()}>
      <div className="command-input"><Search/><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar em todo o sistema..."/><Button variant="ghost" size="icon" aria-label="Fechar busca" onClick={onClose}><X/></Button></div>
      <div className="command-results"><p>Resultados rápidos</p>{filtered.map((item) => { const Icon=item.icon; return <Link key={item.label} to={item.to} onClick={onClose}><span><Icon/></span><div><b>{item.label}</b><small>{item.meta}</small></div><kbd>↵</kbd></Link>; })}{filtered.length===0&&<div className="command-empty"><Search/><b>Nenhum resultado</b><span>Tente buscar por cliente, projeto, equipamento ou documento.</span></div>}</div>
      <footer><span>↑↓ Navegar</span><span>↵ Abrir</span><span>esc Fechar</span></footer>
    </section>
  </div>;
}