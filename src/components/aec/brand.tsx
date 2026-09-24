import { cn } from "@/lib/utils";
import logoAsset from "@/assets/arte-em-cinema-logo.png.asset.json";

export function Brand({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("brand flex items-center", compact && "brand-compact", className)}>
      <img src={logoAsset.url} alt="Arte em Cinema" width={185} height={118} />
      {!compact && <span>OS</span>}
    </div>
  );
}
