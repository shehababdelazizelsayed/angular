//page 5

//1. Create an interface User with:
//o id, name, age (optional), and email.

interface User {
  id: number;
  name: string;
  age?: number;
  email: string;
}

let newUser: User = {
  id: 1,
  name: "Shehab",
  age: 23,
  email: "shehab@gmail.com",
};
//2. Create a variable updateUser of type Partial<User>.

let updateUser: Partial<User> = { name: "Ahmed" };

console.log(updateUser);
//3. Create a variable profile of type Readonly<User>.
//Try to change one of its properties — what happens?

const profile: Readonly<User> = {
  id: 2,
  name: "7amada",
  email: "7amada@gmail.com",
};
//me4 hayassign 3a4an read only
//profile.name = "ali";

//4. Use Pick to create a new type with only id and name.
type UserPreview = Pick<User, "id" | "name">;
let userPreview: UserPreview = { id: 1, name: "Shehab" };
console.log(userPreview);

//5. Write a short note explaining what each of these utility types does:
//o Partial
//o Readonly
//o Pick

//partial by5aly el property optional
//readonly mab3rf4 a5yr 7aga
//pick by5tar el 7aga el ana 3ayzha bas
