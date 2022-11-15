import { Interface } from "readline";
import { expect, it } from "vitest";
import { number } from "zod";

// Original
// export const addTwoNumbers = (params) => {
//   return params.first + params.second;
// };

// Solutions:
// @link https://www.typescriptlang.org/docs/handbook/2/objects.html

// Anonymous object type:
// export const addTwoNumbers = (params: { first: number; second: number } ) => {
//   return params.first + params.second;
// };

// Interface:
// interface Params {
// 	first: number;
// 	second: number;
// }
//
// export const addTwoNumbers = ( params: Params ) => {
//   return params.first + params.second;
// };

// Type alias:
type Params = {
	first: number;
	second: number;
}
export const addTwoNumbers = ( params: Params ) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
