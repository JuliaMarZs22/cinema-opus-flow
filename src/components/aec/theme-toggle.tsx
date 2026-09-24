import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type ThemeMode = "light" | "dark" | "system";

export function ThemeToggle({ className }: { className?: string }) {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("aec-theme");
    setMode(saved === "light" || saved === "dark" ? saved : "system");
  }, []);

  const choose = (next: ThemeMode) => {
    const dark = next === "dark" || (next === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("aec-theme", next);
    setMode(next);
    setOpen(false);
  };

  const Icon = mode === "light" ? Sun : mode === "dark" ? Moon : Laptop;
  return (
    <div className="theme-control">
      <Button className={className} variant="outline" size="icon" aria-label="Escolher aparência" title="Aparência" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Icon /></Button>
      {open&&<div className="theme-menu" role="menu">{([{value:"light",label:"Claro",icon:Sun},{value:"dark",label:"Escuro",icon:Moon},{value:"system",label:"Sistema",icon:Laptop}] as const).map((item)=><button key={item.value} type="button" role="menuitem" onClick={()=>choose(item.value)}><item.icon/><span>{item.label}</span>{mode===item.value&&<Check/>}</button>)}</div>}
    </div>
  );
}