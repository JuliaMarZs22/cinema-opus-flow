import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Panel({ children, className }: { children: ReactNode; className?: string }) { return <section className={cn("panel", className)}>{children}</section>; }
export function PanelHead({ title, meta, children }: { title: string; meta?: string; children?: ReactNode }) { return <div className="panel-head"><div><h2>{title}</h2>{meta && <p>{meta}</p>}</div>{children ?? <Button variant="ghost" size="icon" aria-label={`Opções de ${title}`}><MoreHorizontal/></Button>}</div>; }
export function Metric({ label, value, trend, icon: Icon, dark=false }: { label:string; value:string; trend?:string; icon?:LucideIcon; dark?:boolean }) { const up=!trend?.startsWith("-"); return <div className={cn("metric-card", dark && "metric-dark")}><div className="metric-top"><span>{label}</span>{Icon && <Icon/>}</div><strong>{value}</strong>{trend && <small className={up ? "trend-up":"trend-down"}>{up?<ArrowUpRight/>:<ArrowDownRight/>}{trend}</small>}</div>; }
export function Status({ children, tone="neutral" }: { children:ReactNode; tone?:"neutral"|"dark"|"warning"|"success" }) { return <span className={`status status-${tone}`}><i />{children}</span>; }
export function Progress({ value }: { value:number }) { return <div className="progress-track"><span style={{ width: `${value}%` }}/></div>; }
export function AvatarStack({ names }: { names:string[] }) { return <div className="avatar-stack">{names.map((n)=><span key={n}>{n}</span>)}</div>; }
export function SectionTabs({ items, active }: { items:string[]; active:string }) { return <div className="section-tabs">{items.map(item=><button type="button" className={item===active?"active":""} key={item}>{item}</button>)}</div>; }
