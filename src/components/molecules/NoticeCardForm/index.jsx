import React, { useState } from 'react'
import { Row, Col } from '../../../layout'
import styled from "styled-components"


const CardWrapper = styled.div`
margin : 10px 0;
 padding : 20px 20px 15px 20px;
width : 100%;
    height : 7rem;
    /* background-color: rgb(248, 249, 250); */
    border-radius: 11px;
    cursor: pointer;
    position : relative;  
    box-shadow: 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #fff;

`

const CardColorSide = styled.div`
background-color: #BA68C8;
background-color : ${props => props.background || `#BA68C8`};
/* background-color: #52A43A;
background-color: #F7AA17;
background-color: #EF5350;
background-color: #EF5350; */

position: absolute;
left : 0;
top : 0;
width : 7px;
height: 100%;
border-top-left-radius: 11px;
border-bottom-left-radius: 11px;
transition: width 0.3s;
`
const CardDivider = styled.div`
    position  :absolute;
    left : 80px;
    top : 10px;
    width : 1px;
    height : calc(100% - 20px);
    background-color: #c8d0e7;
`
const CardContent = styled.div`
    height : 100%;
    &:hover ${CardColorSide} {
        width : 80px;
    } 
`

const NoticeCardForm = ({ merit }) => {

    const meritColor = {
        a: '#BA68C8',
        b: '#52A43A',
        c: '#F7AA17',
        d: '#EF5350'

    }

    return (
        <>
            <CardWrapper>
                <CardContent>
                    <CardColorSide background={meritColor[merit]} />
                    <CardDivider />
                </CardContent>
            </CardWrapper>
        </>
    )
}

export default NoticeCardForm