import { play } from "./rock-paper-scissors";

describe("play", () => {
  it("should return 1 when player1 wins", () => {
    expect(play("rock", "scissors")).toBe(1);
    expect(play("scissors", "paper")).toBe(1);
    expect(play("paper", "rock")).toBe(1);
  });

  it("should return 2 when player2 wins", () => {
    expect(play("scissors", "rock")).toBe(2);
    expect(play("paper", "scissors")).toBe(2);
    expect(play("rock", "paper")).toBe(2);
  });

  it("should return 0 when it's a draw", () => {
    expect(play("rock", "rock")).toBe(0);
    expect(play("paper", "paper")).toBe(0);
    expect(play("scissors", "scissors")).toBe(0);
  });

  it("should ignore case and surrounding spaces", () => {
    expect(play(" Rock ", " Scissors ")).toBe(1);
    expect(play("PaPer", "ROCK")).toBe(1);
  });

  it("should throw an error for invalid moves", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move");
    expect(() => play("rock", "fire")).toThrow("Invalid move");
  });
});
