import React from 'react'
// import { Row, Col } from '../../../layout'
import styled from "styled-components"
import { Row, Col } from '../../../layout'
import { Img } from '../../index'
import merit_active from "../../../assets/icons/merit_active.png"
import merit_animal from "../../../assets/icons/merit_animal.png"
import merit_disaster from "../../../assets/icons/merit_disaster.png"
import merit_farming from "../../../assets/icons/merit_farming.png"
import merit_online from "../../../assets/icons/merit_online.png"


const CardWrapper = styled.div`
margin : 10px 0;
 padding : 20px 20px 15px 20px;
width : 100%;
    height : 9rem;
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
const CardIcon = styled.div`
z-index : 5;
position: absolute;

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
    display : flex;
align-items: center;
    &:hover ${CardColorSide} {
        width : 80px;
        ${props => props.small ? `
        width : 100%;
        border-top-right-radius: 11px;
border-bottom-right-radius: 11px; ` : null};
    } 
`
const CardTitle = styled.div`
position : absolute;
left : 100px;
padding-right: 20px;
top : 1.2rem;
width : auto;
color : #555A5F;
font-size: 1.5rem;
font-weight: 600;
${props => props.small ? `
font-size : 0.6rem;
left : 20px;
top : 10px;
` : null};
`

const Cardlast = styled.div`
position : absolute;
padding-right: 20px;
left : 100px;
bottom : 1.5rem;
color : #555A5F;
font-size : 1rem;
${props => props.small ? `
left : 20px;
bottom : 0.7rem;
` : null}
`



const NoticeCardForm = ({ merit, listTitle, listContent }) => {

    const meritColor = {
        active: '#BA68C8',
        eco: '#52A43A',
        animal: '#F7AA17',
        disaster: '#EF5350',
        farming: '#50efc7',
        online: '#5060ef',
    }

    const meritIcon = {
        active: merit_active,
        animal: merit_animal,
        eco: merit_farming,
        disaster: merit_disaster,
        farming: merit_farming,
        online: merit_online,
    }

    return (
        <>
            <Row>
                <Col xs={0} sm={0} md={12} lg={12} xl={12} xxl={12}>
                    <CardWrapper>
                        <CardContent>
                            <CardIcon>
                                <Img src={meritIcon[merit]} width={'3rem'}></Img>
                            </CardIcon>

                            <CardColorSide background={meritColor[merit]} />

                            <CardDivider />
                            <CardTitle>{listTitle}</CardTitle>
                            <Cardlast>{listContent}</Cardlast>


                        </CardContent>
                    </CardWrapper>
                </Col>

                <Col xs={12} sm={12} md={0} lg={0} xl={0} xxl={0}>
                    <CardWrapper>
                        <CardContent small={true} >
                            <CardColorSide background={meritColor[merit]} />
                            <CardTitle small={true}>{listTitle}</CardTitle>
                            <Cardlast small={true}>{listContent}</Cardlast>
                        </CardContent>
                    </CardWrapper>
                </Col>
            </Row>

        </>
    )
}

export default NoticeCardForm