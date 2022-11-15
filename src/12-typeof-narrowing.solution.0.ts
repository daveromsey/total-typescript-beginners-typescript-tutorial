import { expect, it } from "vitest";

// Problem:
//const coerceAmount = (amount: number | { amount: number }) => {};

// Solution:
const coerceAmount = (amount: number | { amount: number }) => {
	if ( typeof( amount) === 'number' ) {
		return amount;
	} else if ( typeof( amount) === 'object' ) {
		return amount.amount;
	}
};


it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});