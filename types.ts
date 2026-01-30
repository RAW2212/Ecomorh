import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}
