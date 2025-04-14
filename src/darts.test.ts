import { calcPoints, possibleCheckout } from "./darts";

describe("calcPoints", () => {
  it("should calculate total from hits string", () => {
    expect(calcPoints("3 20 1 17 2 4")).toBe(85);
    expect(calcPoints("2 15 1 18 3 19")).toBe(105);
    expect(calcPoints("3 20 1 5")).toBe(65);
    expect(calcPoints("")).toBe(0);
  });

  it("should throw on invalid input (uneven count)", () => {
    expect(() => calcPoints("3 20 1")).toThrow("Invalid hits string");
  });

  it("should throw on invalid values", () => {
    expect(() => calcPoints("x y")).toThrow("Invalid hits string");
  });
});

describe("possibleCheckout", () => {
  it("should return correct double checkout if valid", () => {
    expect(possibleCheckout(477)).toBe("Double 12");
    expect(possibleCheckout(441)).toBe("No checkout possible");
  });

  it("should return 'No checkout possible' if odd number remains", () => {
    expect(possibleCheckout(480)).toBe("No checkout possible");
  });

  it("should return 'No checkout possible' if double > 20", () => {
    expect(possibleCheckout(440)).toBe("No checkout possible");
  });
});
