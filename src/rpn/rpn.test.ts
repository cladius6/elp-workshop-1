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
});
