// import { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";

export const NavBar = ({user, setUser}) => {
    

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     registerUser(username, email, password, setter);
    // }


    return(
        <NavDiv>
            {/* <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a> */}
            <LoginForm user={user} setUser={setUser} />
        </NavDiv>
    )
}

const NavDiv = styled.nav`
    
    display:flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #e9e9e9;
    /* background-color: #ddd; */

    a {
        /* border: 1px solid red; */
        display: block;
        color: black;
        text-align: center;
        padding: 10px 16px; 
        text-decoration: none;
        font-size: 17px;
    }
    a:hover {
        background-color: #ddd;
        color: black;
    }
    a.active {
        background-color: #2196F3;
        color: white;
    }

    > div {
        /* border: 1px solid red; */
        margin-left: auto;
    }

    @media screen and (max-width: 600px) {
        a {
            display: block;
            text-align: left;
            width: 100%;
            margin: 0;
            padding: 10px;
        }
    }

`