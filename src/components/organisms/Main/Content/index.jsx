import React, { useEffect, useState } from 'react';
import { Typo } from '../../..';
import { Row, Col, ContentStyle } from '../../../../layout'
import styled from 'styled-components'

import { useInView } from "react-intersection-observer"
import disney6Img from "../../../../assets/images/disney6.png"
import disney7Img from "../../../../assets/images/disney7.jpg"
import disney8Img from "../../../../assets/images/smile.jfif"

const MainImg = styled.img.attrs((props) => ({
    src: props.src
}))`
height :  ${props => props.height || null} ;
width : ${props => props.width};
`

const SettingTrans = styled.div`
    transform: translateY(20px);
    transition: 0.2s ease-in-out;
    opacity: 0;
    width : max-content;
`

const TransSection = styled(SettingTrans)`
position : relative;
top: ${props => props.top ? props.top : null};
left :  ${props => props.left ? props.left : null} ;
display : flex;
${props => props.open ? `
    transition-delay : ${props.Index * 0.2}s;
    transform: translateY(0px);
    opacity: 1;
`: null}
`


const MainContent = () => {
    const [ref, inView] = useInView()
    const [isOpenFirstSection, setIsOpenFirstSection] = useState(false)

    useEffect(() => {
        if (inView) {
            setIsOpenFirstSection(true)
        }

    }, [inView])

    return (
        <>
            <ContentStyle>
                <Row justify={'flex-start'} align={'center'}>
                    <Col span={4} style={{ marginTop: '5rem' }}>
                        <Typo full size={'4.5rem'} weight={'bold'}> #1 place </Typo>
                        <Typo size={'2rem'} weight={'bold'}>for all your professional needs</Typo>
                    </Col>
                </Row>
                <Row justify={'flex-start'} align={'center'}>
                    <Col span={3} style={{ marginTop: '5rem' }}>
                        <Typo full size={'1rem'} color={'#8996b8'}> Select the right pro based on their experience. We'll introduce you
                            to the best local professionals from pour curated list </Typo>

                    </Col>
                </Row>

            </ContentStyle>
        </>
    )
}

export default MainContent