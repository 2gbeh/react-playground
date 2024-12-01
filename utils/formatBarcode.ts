// 012345678901 => 0 12345 67890 1
export const formatBarcode = (barcode: string) =>
  barcode.slice(0, 1) +
  " " +
  barcode.slice(1, 6) +
  " " +
  barcode.slice(6, 11) +
  " " +
  barcode.slice(-1);