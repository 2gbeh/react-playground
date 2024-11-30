import { format } from "date-fns";

type Timestamp = string | Date;

export class DateHelper {
  static asSunJan11970 = (ts: Timestamp) =>
    format(new Date(ts), "EEE, MMM d, yyyy"); //  Sun, Jan 1, 1970

  static as1200AM = (ts: Timestamp) => format(new Date(ts), "hh:mm a"); // 12:00 AM
}
