interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// Problem:
// export const fetchLukeSkywalker = async (): LukeSkywalker => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };


// Solution 1
//https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};


// Solution 2a
// Solutions 2a and 2b are not ideal because we don't know what the API is returning for certain.
// export const fetchLukeSkywalker = async () => {
//   const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };

// Solution 2b
// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//   const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

//   return data;
// };


// Solution 3: Cast
// export const fetchLukeSkywalker = async () => {
//   const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//     return res.json();
//   });

// 	//const dave = {} as LukeSkywalker;

//   return data as LukeSkywalker;
// };