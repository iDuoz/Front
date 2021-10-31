import React from 'react'
// import { Row, Col } from '../../../layout'
import styled from "styled-components"
import { Row, Col } from '../../../layout'
import { Img } from '../../index'
import merit_education from "../../../assets/icons/merit_education.png"
import merit_education_color from "../../../assets/icons/merit_education_color.png"
import merit_cooking from "../../../assets/icons/merit_cooking.png"
import merit_cooking_color from "../../../assets/icons/merit_cooking_color.png"
import merit_disaster from "../../../assets/icons/merit_disaster.png"
import merit_disaster_color from "../../../assets/icons/merit_disaster_color.png"
import merit_eco from "../../../assets/icons/merit_eco.png"
import merit_eco_color from "../../../assets/icons/merit_eco_color.png"
import merit_online from "../../../assets/icons/merit_online.png"
import merit_online_color from "../../../assets/icons/merit_online_color.png"
import merit_government from "../../../assets/icons/merit_government.png"
import merit_government_color from "../../../assets/icons/merit_government_color.png"
import puzzle from "../../../assets/icons/puzzle.png"

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
font-size : 1.1rem;
left : 20px;
top : 10px;
` : null};
`

const CardLast = styled.div`
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

const CardColorSide = styled.div`
background-color : ${props => props.background || `#23a1a1`};

position: absolute;
left : 0;
top : 0;
width : 7px;
height: 100%;
border-top-left-radius: 11px;
border-bottom-left-radius: 11px;
transition: width 0.3s;
`


const CardWrapper = styled.div`
margin : 15px 0;
 padding : 20px 20px 15px 20px;
width : 100%;
    height : 10rem;
    border-radius: 11px;
    cursor: pointer;
    position : relative;  
    box-shadow: 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #fff;
    &:hover ${CardColorSide} {
        width : 80px;
        ${props => props.small ? `
        width : 100%;
        border-top-right-radius: 11px;
border-bottom-right-radius: 11px; ` : null};
    };

    &:hover ${CardTitle} {
        ${props => props.small ? `
        color : white;
        `: null
    }
    };
    &:hover ${CardLast} {
        ${props => props.small ? `
        color : white;
        `: null
    }
    

    }
`

const IsOnlineIconWrapper = styled.div`
height : 10rem;
display : flex;
align-items: center;
`
const IsOnlineIcon = styled.div`
position: absolute;
left : -4.2rem;
${props => props.small ? `
            left : -8px;
            top : -10px;
        `: null
    }
`

const CardIconWrapper = styled.div`
position: absolute;
height : 10rem;
width : 80px;
top: 0;
left : 0;
display : flex;
align-items: center;
justify-content: center;
`


const CardIcon = styled.div`
z-index : 5;
position: absolute;
`

const CardIconColor = styled.div`
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

`


const NoticeCardForm = ({ onClick, merit, listTitle, online, listContent }) => {

    const meritColor = {
        education: '#BA68C8',
        eco: '#52A43A',
        cooking: '#F7AA17',
        disaster: '#EF5350',
        government: '#50efc7',
        online: '#5060ef',
    }

    const meritIcon = {
        education: merit_education,
        cooking: merit_cooking,
        eco: merit_eco,
        disaster: merit_disaster,
        government: merit_government,
        online: merit_online,
    }
    const meritColorIcon = {
        education: merit_education_color,
        cooking: merit_cooking_color,
        eco: merit_eco_color,
        disaster: merit_disaster_color,
        government: merit_government_color,
        online: merit_online_color,
    }

    return (
        <>
            <Row  >
                <Col justify={'center'} align={'center'} xs={0} sm={0} md={12} lg={12} xl={12} xxl={12}>

                    <CardWrapper onClick={onClick}>
                        <CardIconWrapper>
                            {
                                (online === true) ?
                                    <IsOnlineIconWrapper>
                                        <IsOnlineIcon>
                                            <Img src={meritColorIcon.online || puzzle} width={'3rem'}></Img>
                                        </IsOnlineIcon>
                                    </IsOnlineIconWrapper>
                                    : null
                            }
                            <CardIconColor >
                                {
                                    (online === true && !merit) ?
                                        <Img src={meritColorIcon.online} width={'3rem'}></Img>
                                        :
                                        <Img src={meritColorIcon[merit] || puzzle} width={'3rem'}></Img>
                                }

                            </CardIconColor>
                            <CardIcon>
                                {
                                    (online === true && !merit) ?
                                        <Img src={meritIcon.online} width={'3rem'}></Img>
                                        :
                                        <Img src={meritIcon[merit] || puzzle} width={'3rem'}></Img>
                                }

                            </CardIcon>
                        </CardIconWrapper>
                        <CardContent >

                            <CardColorSide background={meritColor[merit]} />

                            <CardDivider />
                            <CardTitle>{listTitle}</CardTitle>
                            <CardLast>{listContent}</CardLast>


                        </CardContent>
                    </CardWrapper>
                </Col>

                <Col xs={11} sm={12} md={0} lg={0} xl={0} xxl={0} justify={'center'} align={'center'}>
                    <CardWrapper onClick={onClick} small={true} >
                        <CardContent >
                            <CardColorSide background={meritColor[merit]} />
                            {
                                (online) ?
                                    <IsOnlineIconWrapper>
                                        <IsOnlineIcon small>
                                            <Img src={meritColorIcon.online || puzzle} width={'3rem'}></Img>
                                        </IsOnlineIcon>
                                    </IsOnlineIconWrapper>
                                    : null
                            }
                            <CardTitle small={true}>{listTitle}</CardTitle>
                            <CardLast small={true}>{listContent}</CardLast>
                        </CardContent>
                    </CardWrapper>
                </Col>
            </Row>

        </>
    )
}

export default NoticeCardForm