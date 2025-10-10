//page 5
let newUser = {
    id: 1,
    name: "Shehab",
    age: 23,
    email: "shehab@gmail.com",
};
//2. Create a variable updateUser of type Partial<User>.
let updateUser = { name: "Ahmed" };
console.log(updateUser);
//3. Create a variable profile of type Readonly<User>.
//Try to change one of its properties — what happens?
const profile = {
    id: 1,
    name: "7amada",
    email: "7amada@gmail.com",
};
let userPreview = { id: 1, name: "Shehab" };
console.log(userPreview);
export {};
//# sourceMappingURL=page5.js.map