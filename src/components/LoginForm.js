import { useState } from "react";
import styled from "styled-components";
import { loginUser, saveUserToken } from "../utils/functions";
// import { registerUser } from "../utils";

export const LoginForm = ( {user, setUser}) => {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        loginUser( username, password, setUser )
    };

    const logoutUser = () => {
        saveUserToken('');
        setUser({});
    };

    const registerUser = () => {
        console.log("registerUser, 2do");
        // todo: open a signup form/thingy and register the user
    };


    return(
        <DivLogin>
        {   !user?.username  
            ? (<form onSubmit={submitHandler} autoComplete="off">
                <input type="text" placeholder="Username" name="username" 
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Password" name="psw" 
                    onChange={(e) => setPassword(e.target.value)}  />
                <button type="submit" >Login</button>
                <button type="button" onClick={registerUser}>Register</button>
            </form>)
            : (<form>
                <label>Welcome, {user?.username}</label>
                <button type="button" onClick={logoutUser}s>Logout</button>
            </form>)
        }
        </DivLogin>
    )
}


const DivLogin = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    label {
        margin: 6px;
    }

    input[type=text] {
        padding: 6px;
        /* margin-top: 8px; */
        margin: 5px;
        font-size: 17px;
        border: none;
        width: 150px; /* adjust as needed (as long as it doesn't break the topnav) */
    }
    button {
        padding: 6px;
        /* margin-top: 8px; */
        margin-right: 8px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;        
    }
    button:last-child { margin-right: 16px; }
    button:hover { background: #ccc; }

    /* Add responsiveness - On small screens, display the navbar vertically instead of horizontally */
    @media screen and (max-width: 600px) {

        /* display: flex;
        justify-content: flex-start; */
        flex-direction: column;
        align-items: flex-start;        

        input[type=text], button {
            display: block;
            text-align: left;
            width: 100%;
            margin: 0;
            padding: 14px;
        }
        input[type=text] { border: 1px solid #ccc; }
    }

`