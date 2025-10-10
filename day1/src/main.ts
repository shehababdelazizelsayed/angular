import { createApiResponse } from "./api.js";

//2. In another file main.ts:
//o Import createApiResponse.
//o Create a type Product with id, name, and price.
//o Use createApiResponse<Product> to create two responses: success and error.

type Product = {
  id: number;
  name: string;
  price: number;
};

const success = createApiResponse<Product>(
  { id: 1, name: "Dart", price: 20 },
  200,
  "success"
);
console.log(success);

const error = createApiResponse<Product>(
  { id: 0, name: "", price: 0 },
  404,
  "not found"
);

//3. What happens if you try to use a wrong data type?
//const tagroba = createApiResponse<string>({id:5}, 200);
//Argument of type '{ id: number; }' is not assignable to parameter of type 'string'.

//4. Explain what generics (<T>) allow you to do.
//bt5aly el code y4t8l m3 ay data type

//5. What are ES modules, and how do you import/export in TypeScript?

//export {el 7aga el ana 3ayzha}
//import {el 7aga el ana 3ayzha} from "asm el file el hya feha"
