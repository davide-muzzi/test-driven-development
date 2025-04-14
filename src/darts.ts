export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const parts = hits.trim().split(/\s+/).map(Number);
  if (parts.some(isNaN) || parts.length % 2 !== 0) {
    throw new Error("Invalid hits string");
  }

  let total = 0;
  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parts[i];
    const sector = parts[i + 1];
    total += multiplier * sector;
  }
  return total;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;
  if (remaining <= 0 || remaining % 2 !== 0) {
    return "No checkout possible";
  }

  const double = remaining / 2;
  if (double > 20) {
    return "No checkout possible";
  }

  return `Double ${double}`;
}
