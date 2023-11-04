import styled from "styled-components"

export const StatisticsListStyled = styled.ul`
list-style: none;
width: 280px;
margin: 20px ;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: end;
        

`
export const DataFeedback = styled.li`
            margin: 0 px;
            
`
export const AnalyticsListStyled = styled.ul`
width: 300;
        list-style: none;
        /* display: flex; */
        margin: 20px;
        padding: 0;
        background-color: #e3e8ed;
        border-radius: 20px;
`

export const DataAnalytics = styled.li`
width: 240px;
            margin: 10px 10px ;
            font-size: 17px;
            font-weight: bold;
            & :focus,
    & :hover {
        font-weight: bold;
        cursor: pointer;
        background-color: lightblue;
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
        color: black;
        border-radius: 5px ;
    }

`