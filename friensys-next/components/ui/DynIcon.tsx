import {
  GraduationCap, School, Smartphone, AlertTriangle,
  CalendarClock, Gift, Store, Users, CheckCircle,
  Sparkles, Wallet,
  LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  GraduationCap,
  School,
  Smartphone,
  AlertTriangle,
  CalendarClock,
  Gift,
  Store,
  Users,
  CheckCircle,
  Sparkles,
  Wallet,
};

interface DynIconProps extends LucideProps {
  name: string;
}

export function DynIcon({ name, ...props }: DynIconProps) {
  const Icon = iconMap[name] ?? CheckCircle;
  return <Icon {...props} />;
}
