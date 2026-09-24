import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Boxes, BriefcaseBusiness, ChevronDown, CircleDollarSign, ClipboardCheck, Command, ContactRound, FileCheck2, GitBranch, LayoutDashboard, Menu, Search, Settings2, ShoppingCart, UserRound, UsersRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";

const groups = [
  { label: "Visão geral", items: [{ to: "/", label: "Dashboard", icon: LayoutDashboard }] },
  { label: "Relacionamento", items: [{ to: "/leads", label: "Leads", icon: ContactRound }, { to: "/pipeline", label: "Pipeline", icon: BriefcaseBusiness }, { to: "/clientes", label: "Clientes", icon: UsersRound }, { to: "/area-cliente", label: "Área do cliente", icon: UserRound }] },
  { label: "Operação", items: [{ to: "/projeto", label: "Projetos", icon: Command }, { to: "/checklist", label: "Checklists", icon: ClipboardCheck }, { to: "/ordens-servico", label: "Ordens de serviço", icon: FileCheck2 }] },
  { label: "Recursos", items: [{ to: "/estoque", label: "Estoque", icon: Boxes }, { to: "/compras", label: "Compras", icon: ShoppingCart }, { to: "/financeiro", label: "Financeiro", icon: CircleDollarSign }] },
  { label: "Sistema", items: [{ to: "/fluxos", label: "Fluxos", icon: GitBranch }, { to: "/usuarios", label: "Usuários", icon: Settings2 }] },
] as const;

export function AppShell({ children, title, eyebrow, action }: { children: ReactNode; title: string; eyebrow?: string; action?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const nav = <>{groups.map((group) => <div key={group.label} className="nav-group"><p>{group.label}</p>{group.items.map((item) => { const Icon = item.icon; const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to); return <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={active ? "nav-link nav-link-active" : "nav-link"}><Icon /><span>{item.label}</span>{active && <i />}</Link>; })}</div>)}</>;
  return <div className="app-frame">
    <aside className="sidebar"><Brand /><nav>{nav}</nav><div className="sidebar-user"><span>MM</span><div><b>Marcelo Martins</b><small>Diretor / Gestor</small></div><ChevronDown /></div></aside>
    {open && <><button className="drawer-backdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} /><div className="mobile-drawer"><div className="flex items-center justify-between"><Brand /><Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setOpen(false)}><X /></Button></div><nav>{nav}</nav></div></>}
    <main className="app-main">
      <header className="topbar"><Button className="desktop-hidden" variant="ghost" size="icon" aria-label="Abrir menu" onClick={() => setOpen(true)}><Menu /></Button><div className="search-box"><Search/><input aria-label="Buscar" placeholder="Buscar projeto, cliente, equipamento..."/><kbd>⌘ K</kbd></div><div className="top-actions"><Button variant="outline" size="icon" aria-label="Notificações"><Bell/><i /></Button><span className="avatar">MM</span></div></header>
      <div className="page-wrap"><div className="page-heading"><div>{eyebrow && <p>{eyebrow}</p>}<h1>{title}</h1></div>{action}</div>{children}</div>
    </main>
    <nav className="bottom-nav" aria-label="Navegação principal">{groups.slice(0,4).map((group) => {const item=group.items[0]; const Icon=item.icon; const active=item.to === "/" ? pathname === "/" : pathname.startsWith(item.to); return <Link key={item.to} to={item.to} className={active ? "active" : ""}><Icon/><span>{item.label}</span></Link>})}<Button variant="ghost" type="button" onClick={() => setOpen(true)}><Menu/><span>Mais</span></Button></nav>
  </div>;
}
