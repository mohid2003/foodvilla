import { createContext } from "react";

const UserContext = createContext({
    user:{
    name:"Dummy Name",
    email:"mohid@gmail.com"
}})

export default UserContext;