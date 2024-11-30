type Classes = (string | false | null | undefined)[];

export function classNames(...classes: Classes): string {
  return classes.filter(Boolean).join(" ");
}

export const mockApiCall = (secs = 3) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(Math.random() < 0.5), secs * 1000)
  );

export const formatBarcode = (barcode: string) =>
  barcode.slice(0, 1) +
  " " +
  barcode.slice(1, 6) +
  " " +
  barcode.slice(6, 11) +
  " " +
  barcode.slice(-1);

export const substrSearch = (str: unknown, substr: unknown) => {
  let [x, y] = [str as string, substr as string];
  return x.search(new RegExp(y, "i")) > -1;
};
