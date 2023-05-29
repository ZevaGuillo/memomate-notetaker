import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(username:string) {
  const names = username.split(' ');

  // Obtener la primera letra de cada nombre y unirlas
  const initials = names.map(name => name[0]).join('');

  return initials;
}