import axios from 'axios';

//axios post request to the server
const url = "http://localhost:3000/users"
axios.post(url, {name: "name", age:21});

//get users from the server
axios.get(url+"/1");