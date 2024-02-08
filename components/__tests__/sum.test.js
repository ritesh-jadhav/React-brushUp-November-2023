import sum from "../sum";

test("Sum of two numbers ::", () => {
  const result = sum(3, 4);
  expected(result).toBe(7);
});
