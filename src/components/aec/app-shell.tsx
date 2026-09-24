import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Boxes, BriefcaseBusiness, CalendarDays, CircleDollarSign, ContactRound, GitBranch, Home, Menu, Search, Settings2, ShoppingCart, UserRound, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Brand } from "./brand";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { CommandPalette } from "./command-palette";

const navItems = [
  { to: "/", label: "Início", icon: Home },
  { to: "/pipeline", label: "CRM", icon: ContactRound },
  { to: "/projeto", label: "Projetos", icon: BriefcaseBusiness },
  { to: "/ordens-servico", label: "Operação", icon: Settings2 },
  { to: "/estoque", label: "Estoque", icon: Boxes },
  { to: "/compras", label: "Compras", icon: ShoppingCart },
  { to: "/financeiro", label: "Financeiro", icon: CircleDollarSign },
  { to: "/fluxos", label: "Fluxos", icon: GitBranch },
] as const;

const moreItems = [
  { to: "/estoque", label: "Estoque", icon: Boxes }, { to: "/compras", label: "Compras", icon: ShoppingCart },
  { to: "/financeiro", label: "Financeiro", icon: CircleDollarSign }, { to: "/fluxos", label: "Fluxos", icon: GitBranch },
  { to: "/usuarios", label: "Configurações", icon: Settings2 }, { to: "/area-cliente", label: "Área do cliente", icon: UserRound },
] as const;

export function AppShell({ children, title, eyebrow, action }: { children: ReactNode; title: string; eyebrow?: string; action?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [searchOpen,setSearchOpen]=useState(false);
  useEffect(()=>{const onKey=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();setSearchOpen(true)}if(event.key==="Escape"){setSearchOpen(false);setOpen(false)}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
  const nav = <>{navItems.map((item) => { const Icon = item.icon; const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to); return <Link key={item.to} to={item.to} aria-label={item.label} title={item.label} className={active ? "nav-link nav-link-active" : "nav-link"}><Icon /><span>{item.label}</span></Link>; })}</>;
  return <div className="app-frame">
    <div className="ambient-light ambient-one"/><div className="ambient-light ambient-two"/>
    <aside className="sidebar"><Brand compact/><nav>{nav}</nav><Link to="/usuarios" className="rail-profile" aria-label="Perfil e configurações"><span>MM</span></Link></aside>
    {open && <><button className="drawer-backdrop" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)} /><section className="mobile-drawer" aria-label="Mais opções"><header><div><p>Menu</p><h2>Mais opções</h2></div><Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setOpen(false)}><X /></Button></header><div className="mobile-more-grid">{moreItems.map((item)=>{const Icon=item.icon;return <Link key={item.to} to={item.to} onClick={()=>setOpen(false)}><Icon/><span>{item.label}</span></Link>})}</div><div className="mobile-theme"><span>Aparência</span><ThemeToggle/></div></section></>}
    <main className="app-main">
       <header className="topbar"><Button className="desktop-hidden" variant="ghost" size="icon" aria-label="Abrir menu" onClick={() => setOpen(true)}><Menu /></Button><button className="search-box" type="button" onClick={()=>setSearchOpen(true)}><Search/><span>Buscar projeto, cliente, equipamento...</span><kbd>⌘ K</kbd></button><div className="top-actions"><ThemeToggle/><Button variant="outline" size="icon" aria-label="Notificações"><Bell/><i /></Button><Link to="/usuarios" className="avatar" aria-label="Abrir perfil">MM</Link></div></header>
      <div className="page-wrap"><div className="page-heading"><div>{eyebrow && <p>{eyebrow}</p>}<h1>{title}</h1></div>{action}</div>{children}</div>
    </main>
    <nav className="bottom-nav" aria-label="Navegação principal"><Link to="/" className={pathname==="/"?"active":""}><Home/><span>Home</span></Link><Link to="/pipeline" className={pathname.startsWith("/pipeline")?"active":""}><ContactRound/><span>CRM</span></Link><Link to="/projeto" className={pathname.startsWith("/projeto")?"active":""}><BriefcaseBusiness/><span>Projetos</span></Link><Link to="/agenda" className={pathname.startsWith("/agenda")?"active":""}><CalendarDays/><span>Agenda</span></Link><Button variant="ghost" type="button" onClick={() => setOpen(true)}><Menu/><span>Mais</span></Button></nav>
    <CommandPalette open={searchOpen} onClose={()=>setSearchOpen(false)}/>
  </div>;
}
