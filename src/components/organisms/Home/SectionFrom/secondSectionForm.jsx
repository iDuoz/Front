import React from 'react';
import styled from 'styled-components';
import { Col, Row } from "../../../../layout/index"
import { Img, Icon, Typo, Divider } from '../../..';

import merit_education_color from "../../../../assets/icons/merit_education_color.png"
import merit_cooking_color from "../../../../assets/icons/merit_cooking_color.png"
import merit_disaster_color from "../../../../assets/icons/merit_disaster_color.png"
import merit_eco_color from "../../../../assets/icons/merit_eco_color.png"
import merit_government_color from "../../../../assets/icons/merit_government_color.png"
import merit_online_color from "../../../../assets/icons/merit_online_color.png"





const SettingTrans = styled.div`
    transform: translateY(20px);
    transition: 0.2s ease-in-out;
    opacity: 0;
    height : 100%;
    width : 100%;
`

const TransSection = styled(SettingTrans)`
display : flex;
justify-content : ${props => props.justify};
align-items :${props => props.align};
height : ${props => props.height};
background-color : ${props => props.backgroundColor};
${props => props.open ? `
    transition-delay : ${props.Index * 0.2}s;
    transform: translateY(0px);
    opacity: 1;
`: null}
`


const SecondSectionForm = (isOpenSecondSection) => {

    return (
        <>
            <Row style={{ height: "calc(100% - 6rem)", marginTop: "6.5rem", padding: " 0 1.5rem" }}>
                <Col span={12} style={{ height: '100%', alignContent: "space-between" }}>
                    <TransSection open={isOpenSecondSection} Index={1} height={"30%"} align={'center'} justify={'center'}>
                        <Row justify={'flex-start'} align={'center'} style={{ padding: '2rem 0' }}>
                            <Col justify={'flex-start'} align={'center'} span={12} style={{ paddingLeft: "1.5rem" }}>
                                <Typo size={'3rem'} color={'#000000'} fontFamily={'Noto Serif KR'} weight={'bold'}>About MeritShare?</Typo>
                            </Col>
                            <Col span={12}>
                                <Divider marginTop={'10px'} color={'#313131'} width={'70%'} ></Divider>
                            </Col>
                            <Col justify={'center'} align={'center'} span={4}>
                                <Typo padding={'0 0 5px 0'} size={'1.3rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    Merit + Share의 합성어로,
                                </Typo>
                                <Typo size={'1.3rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    나만의 merit를 통해 나와 어울리는 봉사를 전달하는 서비스
                                </Typo>
                            </Col>
                        </Row>
                    </TransSection>
                    <TransSection open={isOpenSecondSection} Index={2} height={"30%"} align={'center'} justify={'center'}>
                        <Row justify={'flex-end'} align={'center'} style={{ padding: '2rem 0' }}>
                            <Col justify={'flex-end'} align={'center'} span={12} style={{ paddingRight: "1.5rem" }}>
                                <Typo size={'3rem'} color={'#000000'} fontFamily={'Noto Serif KR'} weight={'bold'}>Recommendation </Typo>
                            </Col>
                            <Col justify={'flex-end'} span={12}>
                                <Divider marginTop={'10px'} color={'#313131'} width={'70%'} ></Divider>
                            </Col>
                            <Col justify={'center'} align={'center'} span={4}>
                                <Typo padding={'0 0 5px 0'} size={'1.3rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    나와 어울리는 봉사를 찾고 싶나요?
                                </Typo>
                                <Typo size={'1.3rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    봉사시간이 아닌 나의 나눔이 중심이 되는 봉사를 추천합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </TransSection>

                    <TransSection open={isOpenSecondSection} Index={3} height={"40%"} align={'center'} justify={'center'}>
                        <Row justify={'center'} align={'center'} style={{ padding: '1rem 0', height: "100%" }}>
                            <Col justify={'flex-start'} align={'center'} span={12}>
                                <Typo padding={'0 0 15px 0'} size={'2.8rem'} color={'#FD9F28'} fontFamily={'Noto Serif KR'} weight={'bold'} full>
                                    Merit.
                                </Typo>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'교육관련'} >
                                    <Img src={merit_education_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                    <Img src={merit_disaster_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'요리조아'}>
                                    <Img src={merit_cooking_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'}>
                                    <Img src={merit_eco_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'일반행정'}>
                                    <Img src={merit_government_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                            <Col justify={'center'} align={'center'} span={2}>
                                <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'}>
                                    <Img src={merit_online_color} width={'5rem'}></Img>
                                </Icon>
                            </Col>
                        </Row>
                    </TransSection>

                </Col>
            </Row>
        </>
    )
}


export default SecondSectionForm