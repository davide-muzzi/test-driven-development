export function isValid(isbn: string): boolean {
  const cleaned = isbn.replace(/[-\s]/g, "");

  if (!/^\d{13}$/.test(cleaned)) return false;

  const digits = cleaned.split("").map(Number);
  const checksum = digits
    .slice(0, 12)
    .reduce((sum, digit, i) => sum + digit * (i % 2 === 0 ? 1 : 3), 0);

  const checkDigit = (10 - (checksum % 10)) % 10;

  return checkDigit === digits[12];
}
