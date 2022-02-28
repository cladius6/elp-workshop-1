import { rpn } from "./rpn";

describe("rpn()", () => {
  it("'2' should return 2", () => {
    expect(rpn("2")).toBe(2);
  });

  it("'1 3 +' should return 4", () => {
    expect(rpn("1 3 +")).toBe(4);
  });

  it("'2 2 /' should return 1", () => {
    expect(rpn("2 2 /")).toBe(1);
  });

  it("'-2 2 *' should return -4", () => {
    expect(rpn("-2 2 *")).toBe(-4);
  });

  it("'2 2 + 3 *' should return 12", () => {
    expect(rpn("2 2 + 3 *")).toBe(12);
  });

  it("'3 1 - 2 2 + *' should return 8", () => {
    expect(rpn("3 1 - 2 2 + *")).toBe(8);
  });
  
  it("'4 3 4 + 5 1 + 2 * + +' should return 23", () => {
    expect(rpn("4 3 4 + 5 1 + 2 * + +")).toBe(23);
  });

  it("'' should throw error 'Invalid Expression'", () => {
    expect(() => rpn("")).toThrow("Invalid Expression");
  });

  it("'abc' should throw error 'Invalid Expression'", () => {
    expect(() => rpn("abc")).toThrow("Invalid Expression");
  });

  it("'1 +' should throw error 'Not Enough Operands'", () => {
    expect(() => rpn("1 +")).toThrow("Not Enough Operands");
  });
});
