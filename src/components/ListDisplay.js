
import styled from "styled-components";
import PictureCard from "./PictureCard";


export const ListDisplay = ( {type, data} ) => {

    return (
        <MainDiv type={type}>
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


const MainDiv = styled.div`

    width: 1000px;
    margin-left: 50%;
    transform: translate(-50%);

    display: flex;
    flex-flow: ${ (props) => props.type==="grid" ? "row wrap" : "column nowrap" };
    justify-content: ${ (props) => props.type==="grid" ? "space-between" : "flex-start" };
    align-items: ${ (props) => props.type==="grid"? "flex-start" : "center" };

`