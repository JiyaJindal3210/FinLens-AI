import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Wallet,
  BarChart3,
  BellRing,
  ShieldCheck,
  Target,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Spending Insights",
    description:
      "Detect spending patterns, uncover hidden trends, and receive personalized AI recommendations.",
    featured: true,
  },
  {
    icon: Wallet,
    title: "Smart Budget Planning",
    description:
      "Build adaptive monthly budgets that evolve with your spending habits.",
  },
  {
    icon: BarChart3,
    title: "Interactive Analytics",
    description:
      "Visualize income, expenses, savings, and financial health through interactive dashboards.",
  },
  {
    icon: BellRing,
    title: "Predictive Alerts",
    description:
      "Get notified before overspending, unusual transactions, or budget overruns occur.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Protection",
    description:
      "Industry-standard encryption keeps your financial data private and protected.",
  },
  {
    icon: Target,
    title: "Financial Goal Tracking",
    description:
      "Track savings goals and receive AI guidance to reach them faster.",
  },
];