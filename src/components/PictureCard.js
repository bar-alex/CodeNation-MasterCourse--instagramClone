

// {
//     "id": "0",
//     "author": "Alejandro Escamilla",
//     "width": 5616,
//     "height": 3744,
//     "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
//     "download_url": "https://picsum.photos/id/0/5616/3744"
// },


import styled from "styled-components";
import { CgHeart } from "react-icons/cg";
// import { useEffect } from "react";
// import useFetch from "../useFetch";
// import SquareCard from "./SquareCard";


const PictureCard = ({author, url}) => {

    //console.log(props);

    return (
        <CardDiv url={url}>
            {/* <div className="img--infra" /> */}
            {/* <img id="image" 
                className="img--infra vignette-inset"
                src={url} 
                alt={`photographed by ${author}`}/> */}
            <div id="image" className="img--infra"></div>


            <p id="caption" 
                className="fading"
            >{author}</p>
            
            <CgHeart id="like" className="fading"/>
        </CardDiv>
    );
}

export default PictureCard;


const CardDiv = styled.div`
    /* border: 1px solid red; */

    height: 300px;
    width: 300px;
    margin: 10px;
    position: relative;
    

    display: flex;
    flex-flow: column wrap;

    /* style for a card */
    max-width: 350px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    margin: 30px auto;
    /* style for a card */

    #image {
        border: 1px solid white;

        border-radius: 5px;
        /* height: 300px; width: 300px; */
        height: 290px; width: 290px;
        top: 5px; left: 5px;
        object-fit:cover;

        /* opacity: .8; */
        /* visibility */
        /* box-shadow: 0 0 200px rgba(0,0,0,0.9) inset; */

        /* :after{
            box-shadow: 10 10 15px white inset;
        }
        :after :hover{
            visibility: visible;
        } */
    }

    #caption {
        position: absolute;
        bottom: -10px;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 1.5em;
    }

    #like {
        position: absolute;
        top: 10px; right: 10px;
        font-size: 1.8em;
        color: white;
    }

    .fading {
        transition: opacity .5s ease-in;
        opacity: 0;
    }

    :hover{
        .fading{ opacity: 1; }
        /* #image{ src: ""; } */
    }

    .img--infra {
        border-radius: 5px;
        background-image: url("${ (pr)=>pr.url }");
        height: 290px;
        background-size: cover;
        position: absolute;
    }

    .img--infra:after {
        content: '';
        border-radius: 5px;
        position: absolute;
        top:0px; left:0px;
        width: 100%;
        background-image: url("${ (pr)=>pr.url }");
        filter: invert(1) saturate(.75) hue-rotate(60deg);
        height: 290px;
        background-size: cover;
        mix-blend-mode: color;
    }

`