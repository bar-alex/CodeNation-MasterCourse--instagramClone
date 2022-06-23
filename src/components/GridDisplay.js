// import logo from './logo.svg';
// import './App.css';
// import GridDisplay from './components/GridDisplay';

import { useEffect, useState } from "react";
import styled from "styled-components";
// import { useEffect } from "react";
import useFetch from "../useFetch";
import PictureCard from "./PictureCard";
// import HeaderSpace from "./HeaderSpace";

const randomPage = Math.floor(Math.random()*10)+1;

function GridDisplay() {

    // const [ listItems, setListItems ] = useState([]);
    const { data, isPending, error } = useFetch(`https://picsum.photos/v2/list?limit=12&page=${randomPage}`);    

    return (
        <MainDiv>

            {/* <HeaderSpace /> */}

            { (!data || data.length === 0) && 
                <p id="empty-text">
                    GridDisplay component - nothing here atm
                </p> 
            }
            
            { !!data && data.map( (it, idx) => 
                <PictureCard key={idx} 
                    author={it.author} 
                    url={it.download_url} 
                    dataObj={it} 
                /> )
            }
        </MainDiv>
    );
}

export default GridDisplay;


const MainDiv = styled.div`

    width: 1000px;
    margin-left: 50%;
    transform: translate(-50%);

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    #empty-text{
        margin: 20vh auto;
    }
`