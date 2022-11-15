import { expect, it } from "vitest";

const createCache = () => {
  // Problem:
	//const cache = {};

	// My solution: Add index signature
	// https://basarat.gitbook.io/typescript/type-system/index-signatures#declaring-an-index-signature
	const cache: {
		[id:string]: string
	} = {};

	// Solution 1: Record type
	//const cache: Record<string, string> = {};

	// Solution 2: Type alias.
	// type Blah = {
	// 	[index:string]: string;
	// };
	// const cache: Blah = {};

	// Solutions 3: Interface can also be used.

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
