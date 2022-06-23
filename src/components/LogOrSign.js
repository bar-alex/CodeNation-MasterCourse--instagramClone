import { useState } from "react";
import { createUser } from "../utils";

export const LogOrSign = ({setter}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        createUser(username, email, password, setter);
    }


    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} />
            <input onChange={(e) => setEmail(e.target.value)} />
            <input onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>

    )
}