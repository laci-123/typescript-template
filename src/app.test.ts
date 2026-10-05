import { add_two_numbers } from "./app.ts";
import { test, expect } from "vitest";

test("addition works", () => {
  expect(add_two_numbers(1, 2)).toBe(3);
})
