type Classes = (string | false | null | undefined)[];

export function cn(...classes: Classes): string {
  return classes.filter(Boolean).join(" ");
}