import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

// Problem:
//const guitarists = new Set();

// Solution:
const guitarists = new Set<string>();

// Map example, has 2 arguments:
const map = new Map<string, string>();
map.set('test', 'another test');

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
