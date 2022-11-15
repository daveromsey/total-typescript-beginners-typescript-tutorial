import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
// Problem:
// interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
// }

// interface Post {
//   id: string;
//   title: string;
//   body: string;
// }

// interface Comment {
//   id: string;
//   comment: string;
// }

// Solution: https://blog.logrocket.com/extending-object-like-types-interfaces-typescript/
interface Entity {
  id: string;
}

interface User extends Entity {
	firstName: string;
  lastName: string;
}

interface Post extends Entity {
	title: string;
	body: string;
}

// We can also extend multiple:
// interface Post extends Entity, User {
// 	title: string;
// 	body: string;
// }

interface Comment extends Entity {
	comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,

	// Extend multiple example:
	//Expect<Equal<Post, { id: string; title: string; body: string; firstName: string; lastName: string }>>,

	Expect<Equal<Comment, { id: string; comment: string }>>,
];
