import React, { useEffect, useState } from 'react';
import { Typo, Img, Btn, AniTypo } from '../../..';
import { Row, Col, ContentStyle } from '../../../../layout'
import styled from 'styled-components'

import { useInView } from "react-intersection-observer"
import mainInfo from "../../../../assets/images/mainInfo.svg"
import shareIcon from "../../../../assets/icons/shareIcon.svg"
import puzzleMain from "../../../../assets/icons/puzzleMain.svg"
import disney7Img from "../../../../assets/images/disney7.jpg"
import disney8Img from "../../../../assets/images/smile.jfif"



const ScrollSnapSection = styled.section`
  scroll-snap-align: center;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    height : ${props => props.first ? `calc(100vh - 7.5rem)` : `100vh`} ;
    width : 100%;
`
const InfoWrapper = styled.div`
display : flex;
justify-content : center;
align-items: center;
 width: 100%;
  height: 12rem;
  object-fit: contain;
  background-image: ${props => props.src ? `url("${props.src}")` : null};
  background-size: cover;
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
            <ContentStyle style={{ height: 'auto', padding: '0' }}>
                <Row style={{ scrollBehavior: 'smooth' }}>

                    {/* SECTION 1 */}
                    <Col span={12} style={{ height: 'calc(100vh - 7.5rem)' }}>
                        <Row justify={'flex-start'} align={'center'} style={{ alignContent: 'space-between' }}>
                            <Col span={12} justify={'center'} align={'center'}>
                                <InfoWrapper src={mainInfo} >
                                    <Row align={'center'} justify={'center'} style={{ height: '100%' }} >
                                        <Col xs={0} sm={1} md={1} lg={1} xl={2} xxl={2} span={2} justify={'center'} align={'flex-end'} style={{ height: '100%' }} >
                                            <Img src={shareIcon} width={'10rem'} />
                                        </Col>
                                        <Col xs={0} sm={5} md={5} lg={5} xl={5} xxl={4} span={4} justify={'flex-start'} align={'center'} style={{ margin: '0 40px' }}>
                                            <Typo size={'1.3rem'} color={'#fff'}>
                                                meritshare는 user가 편하게 원하는 봉사를<br />
                                                찾을 수 있도록 1365의 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </Col>
                                        <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'} style={{ padding: '12px 15px' }}>
                                            <Typo size={'1.1rem'} color={'#fff'}>
                                                meritshare는 user가 편하게 원하는 봉사를
                                                찾을 수 있도록 1365의 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </Col>
                                        <Col xs={4} sm={2} md={2} lg={2} xl={2} xxl={2} span={2} justify={'start'} align={'center'}>
                                            <Btn bold types={'secondary'} value={'meritshare 시작하기 🕵️‍♂️'} shadow={'0.1rem 0.1rem 0.3rem #666666, -0.1rem -0.1rem 0.1rem #ffffff'} />
                                        </Col>
                                    </Row>
                                </InfoWrapper>


                            </Col>
                            <Col span={12} justify={'center'} align={'center'}>
                                <Row justify={'center'} align={'center'} style={{ padding: '3rem 0' }}>
                                    <Col justify={'center'} align={'center'} span={12}>
                                        <Img src={puzzleMain} width={'13rem'} ></Img>
                                    </Col>
                                    <Col justify={'center'} align={'center'} span={12}>
                                        <AniTypo fontFamily={'Jalnan'} size={'4.5rem'} typo={['Find ', "your ", 'Share ', '.']}></AniTypo>
                                    </Col>
                                    <Col justify={'center'} align={'center'} span={12}>
                                        <Typo size={'1rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'400'}>
                                            meritShare에서 나만의 merit를 나눌 수 있는 봉사를 알려드릴게요.
                                        </Typo>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        <Row justify={'flex-start'} align={'center'}>
                            <Col span={12} style={{ marginTop: '1rem' }}>


                            </Col>
                        </Row>
                    </Col>
                    {/* !SECTION 1 */}



                    {/* SECTION 2 */}
                    <ScrollSnapSection>
                        <Col span={12} style={{ height: 'inherit', border: '2px solid black' }}>
                            <Row justify={'flex-start'} align={'center'}>
                                <Col span={4}>
                                    <Typo full size={'4.5rem'} weight={'bold'}> #11 place </Typo>
                                    <Typo size={'2rem'} weight={'bold'}>for all your professional needs</Typo>
                                </Col>
                            </Row>
                            <Row justify={'flex-start'} align={'center'}>
                                <Col span={3} style={{ marginTop: '5rem' }}>
                                    <Typo full size={'1rem'} color={'#8996b8'}> Select the right pro based on their experience. We'll introduce you
                                        to the best local professionals from pour curated list </Typo>

                                </Col>
                            </Row>
                        </Col>
                    </ScrollSnapSection>
                    {/* !SECTION 2 */}
                    {/* SECTION 3 */}
                    <ScrollSnapSection>
                        <Col span={12} style={{ height: 'inherit', border: '2px solid black' }}>
                            <Row justify={'flex-start'} align={'center'}>
                                <Col span={4}>
                                    <Typo full size={'4.5rem'} weight={'bold'}> #11 place </Typo>
                                    <Typo size={'2rem'} weight={'bold'}>for all your professional needs</Typo>
                                </Col>
                            </Row>
                            <Row justify={'flex-start'} align={'center'}>
                                <Col span={3} style={{ marginTop: '5rem' }}>
                                    <Typo full size={'1rem'} color={'#8996b8'}> Select the right pro based on their experience. We'll introduce you
                                        to the best local professionals from pour curated list </Typo>

                                </Col>
                            </Row>
                        </Col>
                    </ScrollSnapSection>
                    {/* !SECTION 2 */}
                    {/* <Col span={12}>
                        <Row style={{ width: '100%', height: '100%', backgroundColor: '#c8d0e7' }}>
                            <div>2</div>
                        </Row>
                    </Col>


                    <Col span={12}>
                        <Row style={{ width: '100%', height: '100%', backgroundColor: '#6d5dfc' }} >
                            <div>3</div>
                        </Row>
                    </Col> */}

                </Row>



            </ContentStyle>
        </>
    )
}

export default MainContent