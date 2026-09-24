import { cn } from "@/lib/utils";

export function Brand({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("brand-signature", compact && "brand-signature-compact", className)} aria-label="Arte em Cinema OS">
      <b>AEC</b>
      <i />
      <span>OS</span>
    </div>
  );
}
