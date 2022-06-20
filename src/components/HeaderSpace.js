import { useState } from "react";
import styled from "styled-components";


const HeaderSpace = () => {

    const [picSize, setPicSize] = useState('small');

    return (
        <Div>
            
        </Div>
    )
}


export default HeaderSpace;


const Div = styled.div`
    border: 1px solid green;
    width: 100%;
    height: 50px;

`