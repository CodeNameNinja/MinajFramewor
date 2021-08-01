import { User } from "./models/User";

const user = new User({ name: "Mitchell", age: 22 });
user.set({ name: "Inez"});
console.log(user.get("name"));
console.log(user.get("age"));
