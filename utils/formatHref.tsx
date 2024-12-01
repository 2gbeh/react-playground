// mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!
// <a href="mailto:contact@domain.com?subject=Prospective%20Client">Contact Us</a>
export const mailto = (
  email: string,
  subject?: null | string,
  cc?: null | string,
  bcc?: null | string,
) => {
  let query = "";
  if (subject) query = `?subject=${subject}`;
  if (cc) query = `?cc=${cc}`;
  if (bcc) query = `?bcc=${bcc}`;
  if (cc && bcc) query = `?cc=${cc}&bcc=${bcc}`;
  if (subject && cc) query = `?subject=${subject}&cc=${cc}`;
  if (subject && bcc) query = `?subject=${subject}&bcc=${bcc}`;
  if (subject && cc && bcc) query = `?cc=${cc}&bcc=${bcc}&subject=${subject}`;
  //
  return `mailto:${email}${query.replaceAll(" ", "%20")}`;
};

// <a href="tel:+2348169960928">Call</a>
export const tel = (phone: string) => {
  // MUST INCLUDE COUNTRY CODE Ex. +234, +1
  return `tel:+${phone
    .replaceAll("+", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "")
    .replaceAll("-", "")}`;
};