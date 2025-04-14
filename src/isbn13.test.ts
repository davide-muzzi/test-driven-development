import { isValid } from "./isbn13";

describe("isValid", () => {
  it("should return true for valid ISBN-13", () => {
    expect(isValid("9780306406157")).toBe(true);
    expect(isValid("9781861972712")).toBe(true);
  });

  it("should return false for invalid ISBN-13", () => {
    expect(isValid("9780306406158")).toBe(false);
    expect(isValid("9781861972710")).toBe(false);
  });

  it("should allow ISBNs with dashes or spaces removed", () => {
    expect(isValid("978-0-306-40615-7")).toBe(true);
    expect(isValid("978 1 86197 271 2")).toBe(true);
  });

  it("should return false for input not 13 digits after cleanup", () => {
    expect(isValid("123456789")).toBe(false);
    expect(isValid("abcdefghijklm")).toBe(false);
  });
});
