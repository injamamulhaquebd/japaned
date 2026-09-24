import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function yesterdayKey(d = new Date()): string {
  const y = new Date(d);
  y.setDate(y.getDate() - 1);
  return todayKey(y);
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = copy[i];
    const b = copy[j];
    if (a === undefined || b === undefined) continue;
    copy[i] = b;
    copy[j] = a;
  }
  return copy;
}

export function normalizeJa(s: string): string {
  return s
    .replace(/[「」『』。、！？!?,.~\s]/g, "")
    .replace(/ー/g, "")
    .toLowerCase();
}

export function roughlyMatches(heard: string, target: string): boolean {
  const a = normalizeJa(heard);
  const b = normalizeJa(target);
  if (!a || !b) return false;
  if (a.includes(b) || b.includes(a)) return true;
  let matches = 0;
  const min = Math.min(a.length, b.length);
  for (let i = 0; i < min; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches / Math.max(a.length, b.length) >= 0.45;
}
