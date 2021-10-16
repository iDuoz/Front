import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Col, Row } from "../../../../layout/index"

import { Img, Typo } from '../../..';
import puzzleMain from "../../../../assets/icons/puzzleMain.svg"

import { useInView } from "react-intersection-observer"


const SettingTrans = styled.div`
    transform: translateY(20px);
    transition: 0.2s ease-in-out;
    opacity: 0;
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


const FirstSectionForm = () => {
    const [ref, inView] = useInView()
    const [isOpenFirstSection, setIsOpenFirstSection] = useState(false)

    useEffect(() => {
        if (inView) {
            setIsOpenFirstSection(true)
        }

    }, [inView])

    return (
        <>
            <Row style={{ height: "calc(100% - 6rem)", marginTop: "6.5rem" }}>
                <Col span={12} style={{ height: '100%', alignContent: "space-between" }}>
                    <TransSection ref={ref} open={isOpenFirstSection} Index={1} height={"70%"} align={'center'} justify={'center'}>
                        <Row justify={'center'} align={'center'} style={{ padding: '3rem 0' }}>
                            <Col justify={'center'} align={'center'} span={12}>
                                <Img src={puzzleMain} width={'13rem'} ></Img>
                            </Col>
                            <Col justify={'center'} align={'center'} span={12}>
                                <Typo size={'4rem'} color={'#595959'} fontFamily={'Noto Serif KR'} weight={'bold'}>Find your Share</Typo>
                            </Col>
                            <Col justify={'center'} align={'center'} span={12}>
                                <Typo size={'1rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'400'}>
                                    MeritShare에서 나만의 merit를 나눌 수 있는 봉사를 알아보세요.
                                </Typo>
                            </Col>
                        </Row>
                    </TransSection>

                    <Row justify={'center'} align={'center'} style={{ padding: '3rem 0', height: '30%', backgroundColor: 'rgba(254, 235, 182, 0.32)' }}>
                        <TransSection open={isOpenFirstSection} Index={2}>
                            <Col justify={'center'} align={'center'} span={5}>
                                <Typo size={'3.2rem'} color={'#FD9F28'} fontFamily={'Noto Serif KR'} weight={'500'}>MeritShare</Typo>
                            </Col>
                            <Col justify={'center'} align={'center'} span={7}>
                                <Typo padding={'0 0 5px 0'} size={'1.3rem'} color={'#FD9F28'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    나만의 장점을 선행으로 나눕니다.
                                </Typo>
                                <Typo size={'1.3rem'} color={'#FD9F28'} fontFamily={'Noto Sans KR'} weight={'500'} full>
                                    능력을 따뜻함으로 표현하는 방법 'MeritShare'
                                </Typo>
                            </Col>
                        </TransSection>
                    </Row>

                </Col>
            </Row>
        </>
    )
}


export default FirstSectionForm