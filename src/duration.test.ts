import { formatDuration } from "./duration";

describe("formatDuration", () => {
  it("should format seconds only", () => {
    expect(formatDuration(33)).toBe("33s");
  });

  it("should format minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });

  it("should format hours only", () => {
    expect(formatDuration(3600)).toBe("1h");
  });

  it("should format hours, minutes and seconds", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
  
  it("should format zero seconds", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  
  it("should throw on negative numbers", () => {
    expect(() => formatDuration(-1)).toThrow("must not be negative");
  });
  
  it("should round floating-point seconds", () => {
    expect(formatDuration(59.6)).toBe("1m");
  });  
});
