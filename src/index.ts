import { User } from "./models/User";

const user = new User({ name: "Mitchell", age: 22 });

user.on("change", () => {
  console.log("User changed");
});
user.on("delete", () => {
  console.log("DELETE")
})
console.log(user);

user.trigger('change');