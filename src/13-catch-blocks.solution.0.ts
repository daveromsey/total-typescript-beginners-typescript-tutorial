import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
	// Problem:
  // try {
  //   if (state === "fail") {
  //     throw new Error("Failure!");
  //   }
  // } catch (e) {
  //   return e.message;
  // }

	// Solution (ideal approach): https://fettblog.eu/typescript-typing-catch-clauses/
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
		if ( e instanceof Error ) {
   		return e.message;
		}
		// Add failover...
  }

	// Alternative solution 1: any type (not ideal)
  // try {
  //   if (state === "fail") {
  //     throw new Error("Failure!");
  //   }
  // } catch (e:any) {
  //  	 return e.message;
  // }

	// Alternative solution 2: coerce (a little better, but not great)
  // try {
  //   if (state === "fail") {
  //     throw new Error("Failure!");
  //   }
  // } catch (e) {
  //  	 return (e as Error).message;
  // }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
