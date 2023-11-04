import styled from "styled-components"

export const ButtonStyled = styled.button`
    width: 200 px;
    background-color: blue;
    color: white;
    margin: 5px 25px;
    padding: 5px 15px;
    border-radius: 4px ;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);

    &:hover {
        font-weight: bold;
        cursor: pointer;
        background-color: lightblue;
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
        color: black;
        border-radius: 5px ;
    }

`;