import { cn } from "@/lib/utils";

export function Brand({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      {!compact && <span className="leading-none"><b className="block text-[11px] font-semibold tracking-[0.18em]">ARTE EM CINEMA</b><span className="mt-1 block text-[9px] font-medium tracking-[0.38em] text-muted-foreground">OPERATING SYSTEM</span></span>}
    </div>
  );
}
