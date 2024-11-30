type Classes = (string | false | null | undefined)[];

export function classNames(...classes: Classes): string {
  return classes.filter(Boolean).join(" ");
}