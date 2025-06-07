import { Stat } from "@/components/stats";

export function StatCard({ label, value }: Stat) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-3xl font-bold text-primary md:text-4xl">{value}</div>
      <div className="text-center text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
