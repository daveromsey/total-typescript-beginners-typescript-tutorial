interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/**
 * How do we type this return statement so it's both
 * User AND { posts: Post[] }
 */
// Problem:
//export const getDefaultUserAndPosts = (): unknown => {

// Solution: Intersection symbol &
export const getDefaultUserAndPosts = (): User & { posts: Post[] }  => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

// Solution: Intersection symbol: & additional parameter
// export const getDefaultUserAndPosts = (): User & { posts: Post[] } & { additionalParam:number} => {
// 		return {
// 			id: "1",
// 			firstName: "Matt",
// 			lastName: "Pocock",
// 			additionalParam : 2,
// 			posts: [
// 				{
// 					id: "1",
// 					title: "How I eat so much cheese",
// 					body: "It's pretty edam difficult",
// 				},
// 			],
// 		};
// 	};

// // Solution 2: creating a new type
// type DefaultUserAndPosts = User & { posts: Post[] } & { additionalParam:number };
// export const getDefaultUserAndPosts = (): DefaultUserAndPosts => {
// 	return {
// 		id: "1",
// 		firstName: "Matt",
// 		lastName: "Pocock",
// 		additionalParam : 2,
// 		posts: [
// 			{
// 				id: "1",
// 				title: "How I eat so much cheese",
// 				body: "It's pretty edam difficult",
// 			},
// 		],
// 	};
// };

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
