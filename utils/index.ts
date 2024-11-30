type Classes = (string | false | null | undefined)[];

export function classNames(...classes: Classes): string {
  return classes.filter(Boolean).join(" ");
}

export const mockApiCall = (secs = 3) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(Math.random() < 0.5), secs * 1000)
  );
