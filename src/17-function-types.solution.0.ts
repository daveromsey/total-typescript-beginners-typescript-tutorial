import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */
// Problem:
//const addListener = (onFocusChange: unknown) => {

// Solution: Declaring function types.
const addListener = (onFocusChange: (isFocused: boolean) => void ) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});

// Alt Solution (better)
// type FocusListener = (isFocused: boolean) => void;
// const addListener = (onFocusChange: FocusListener) => {
//   window.addEventListener("focus", () => {
//     onFocusChange(true);
//   });

//   window.addEventListener("blur", () => {
//     onFocusChange(false);
//   });
// };

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
