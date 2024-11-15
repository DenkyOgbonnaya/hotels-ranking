import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to customizes tailwind classed to object

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
