import React, { useEffect, useState, useRef } from 'react';
import { Typo, Img, Btn, AniTypo, Icon, GuideMeritForm, Modal, LoginModalForm, AlertLoginModalForm } from '../../..';
import { Row, Col, ContentStyle, Header } from '../../../../layout'
import styled from 'styled-components'

import mainInfo from "../../../../assets/images/mainInfo.svg"
import shareIcon from "../../../../assets/icons/shareIcon.svg"
import puzzleMain from "../../../../assets/icons/puzzleMain.svg"
import { BackTop, Divider, notification, } from 'antd';
import { HiArrowSmUp } from 'react-icons/hi';

import { useInView } from "react-intersection-observer"
import { useHistory } from 'react-router';
import SignUpProcess from '../../../../service/transaction/auth/signup_process';
import login_process from '../../../../service/transaction/auth/login_process';
const ScrollSnapScroller = styled.div`
scroll-snap-type: y mandatory;
overflow-y : scroll;
height : calc(100vh );
scroll-behavior: smooth;
      scroll-padding-bottom : 100px;
/* scroll-padding-top  : 27px; */
`

const ScrollSnapSection = styled.div`
  scroll-snap-align: start;
    /* scroll-snap-stop: always; */
    scroll-behavior: smooth;
    width : 100%;
    min-height : 100vh;
`
const InfoWrapper = styled.div`
display : flex;
justify-content : center;
align-items: center;
 width: 100%;
  height: 23.5rem;
  object-fit: contain;
  background-image: ${props => props.src ? `url("${props.src}")` : null};
  background-size: cover;
`

const MainContent = ({
    logined,
    uid,
    basic,
    merit,
    loveNotice,
    totalLoveNotice,
    role,
    regions, }) => {
    const history = useHistory();
    const backTopRef = useRef();
    console.log('🕵️‍♂️')
    console.log(basic)
    const [secondRef, insecondRefView] = useInView();
    const [onclickMerit, setOnclickMerit] = useState({
        education: false,
        cooking: false,
        disaster: false,
        eco: false,
        online: false,
        government: false
    })
    //SECTION newbe
    const [isNewbeModal, setIsNewbeModal] = useState(false)
    const handleNewbeModal = {
        show: () => setIsNewbeModal(true),
        close: () => setIsNewbeModal(false)
    }
    const loginOpenNewbeModal = () => {
        handleNewbeModal.close()
        SignUPtoLogin()
        handleLoginModal.show()
    }
    const SignUpOpenNewbeModal = () => {
        handleNewbeModal.close()
        LogintoSignUp()
        handleLoginModal.show()
    }
    //!SECTION newbe

    //SECTION 회원가입 정보
    const [signUpInfo, setSignUpInfo] = useState({
        email: "",
        password: "",
    });
    const [logInInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    //TODO 코드 정리
    let settingSingUpValueFunction = {
        email: (e) => {
            const email = e.target.value;
            return setSignUpInfo((state) => ({ ...state, email: email }));
        },
        password: (e) => {
            const password = e.target.value;
            return setSignUpInfo((state) => ({ ...state, password: password }));
        }
    };

    let settingLogInValueFunction = {
        email: (e) => {
            const email = e.target.value;
            return setLoginInfo((state) => ({ ...state, email: email }));
        },

        password: (e) => {
            const password = e.target.value;
            return setLoginInfo((state) => ({ ...state, password: password }))
        },
    };

    //!SECTION

    // SECTION 로그인 회원가입 함수
    const handleLoginModal = {
        show: () => setIsHeaderLoginModal((state) => ({ ...state, visible: true })),
        close: () => {
            setIsHeaderLoginModal((state) => ({ ...state, visible: false, type: "login" }));

            setSignUpInfo({
                email: "",
                password: "",
            });
            setLoginInfo({
                email: "",
                password: "",
            });
        },
    };

    const [isHeaderLoginModal, setIsHeaderLoginModal] = useState({
        visible: false,
        type: 'login',
    });




    const LogintoSignUp = () => {
        setIsHeaderLoginModal((state) => ({ ...state, type: "SignUp" }));
    }
    const SignUPtoLogin = () => {
        setIsHeaderLoginModal((state) => ({ ...state, type: "login" }));
    }


    const LoginBtnOnclick = () => {
        login_process(logInInfo)
            .then((res) => {
                console.log(logInInfo)
            })
            .catch((e) =>
                notification['error']({
                    message: 'error',
                    description: e.message || e.code,
                })
            )
        handleLoginModal.close();
        setLoginInfo({
            email: "",
            password: "",
        });
    };
    const SignupBtnOnclick = () => {
        SignUpProcess(signUpInfo)
            .then((res) => {
                history.push('/profile')
            })
            .catch((e) =>
                notification['error']({
                    message: 'error',
                    description: e.message || e.code,
                })
            )

        handleLoginModal.close();
        setSignUpInfo({
            email: "",
            password: "",
        });

    };



    //NOTE MERIT 시작하기
    const isClickToStart = () => {
        if (!logined) return handleNewbeModal.show()
        if (basic) {
            if (!basic.age) return history.push('/profile')
            if (!basic.sex) return history.push('/profile')
            if (!basic.addRegion) return history.push('/profile')
            if (!basic.region) return history.push('/profile')
            if (!basic.name) return history.push('/profile')
            if (Object.values(merit).includes(true)) return history.push('/proposal')
        }

    }

    const isValueToStart = () => {
        if (!logined) return '로그인 후 meritshare 시작하기 🎯'
        if (basic) {

            if (!basic.age) return '정보입력 후 meritshare 시작하기 ✍'
            if (!basic.sex) return '정보입력 후 meritshare 시작하기 ✍'
            if (!basic.addRegion) return '정보입력 후 meritshare 시작하기 ✍'
            if (!basic.region) return '정보입력 후 meritshare 시작하기 ✍'
            if (!basic.name) return '정보입력 후 meritshare 시작하기 ✍'
            if (Object.values(merit).includes(true)) return `meritshare 추천봉사 확인하기 🕵️‍♂️`
        }
    }


    //!SECTION
    let editonclickMeritFunction = {
        education: () => {
            (onclickMerit.education === true) ?
                setOnclickMerit((state) => ({ ...state, education: false })) :
                setOnclickMerit((state) => ({ ...state, education: true }))
        },
        cooking: () => {
            (onclickMerit.cooking === true) ?
                setOnclickMerit((state) => ({ ...state, cooking: false })) :
                setOnclickMerit((state) => ({ ...state, cooking: true }))
        },
        disaster: () => {
            (onclickMerit.disaster === true) ?
                setOnclickMerit((state) => ({ ...state, disaster: false })) :
                setOnclickMerit((state) => ({ ...state, disaster: true }))

        },
        eco: () => {
            (onclickMerit.eco === true) ?
                setOnclickMerit((state) => ({ ...state, eco: false })) :
                setOnclickMerit((state) => ({ ...state, eco: true }))
        },
        government: () => {
            (onclickMerit.government === true) ?
                setOnclickMerit((state) => ({ ...state, government: false })) :
                setOnclickMerit((state) => ({ ...state, government: true }))
        },
        online: () => {
            (onclickMerit.online === true) ?
                setOnclickMerit((state) => ({ ...state, online: false })) :
                setOnclickMerit((state) => ({ ...state, online: true }))
        },
    }


    const onPeopleclick = () => {
        if (!logined)
            return (
                notification['info']({
                    message: `로그인이 필요해요.😥 `,
                    description: '로그인 시 profile로 이동합니다.',
                })
            )
        return history.push("/profile")
    }

    // Anch
    return (
        <>

            <ContentStyle style={{ height: 'auto', padding: '0', }}>
                <Row style={{
                    scrollBehavior: 'smooth',

                }}>
                    <ScrollSnapScroller ref={backTopRef}>
                        {/* SECTION 1 */}
                        <ScrollSnapSection >
                            <Modal visible={isNewbeModal} maskClosable={false} headerClose
                                onClose={handleNewbeModal.close} size={7}>
                                <AlertLoginModalForm SignUpOpenNewbeModal={SignUpOpenNewbeModal} loginOpenNewbeModal={loginOpenNewbeModal}></AlertLoginModalForm>
                            </Modal>
                            <Modal headerClose visible={isHeaderLoginModal.visible} closable={false} maskClosable={true}
                                onClose={handleLoginModal.close} size={8} xs={8} sm={8} md={7} lg={7} xl={7} xxl={6}>
                                <LoginModalForm isHeaderLoginModal={isHeaderLoginModal}
                                    handleLoginModal={handleLoginModal}
                                    settingSingUpValueFunction={settingSingUpValueFunction}
                                    settingLogInValueFunction={settingLogInValueFunction}
                                    LoginBtnOnclick={LoginBtnOnclick}
                                    SignupBtnOnclick={SignupBtnOnclick}
                                    LogintoSignUp={LogintoSignUp}
                                    SignUPtoLogin={SignUPtoLogin}
                                    logInInfo={logInInfo}
                                    signUpInfo={signUpInfo}
                                />
                            </Modal>
                            < Col span={12} style={{ height: '100vh' }}>
                                <Row justify={'flex-start'} align={'center'} style={{ alignContent: 'space-between' }}>
                                    {/* SECTION 1 -Info- */}
                                    {/* PIN -Info-   */}
                                    <Col span={12} justify={'center'} align={'center'}>
                                        <InfoWrapper src={mainInfo} >
                                            <Row align={'center'} justify={'center'} style={{ height: '100%', alignContent: 'space-between' }} >
                                                <Col span={12} style={{ height: '7.5rem', }}>
                                                    <Header position={'relative'} home ></Header>
                                                </Col >
                                                <Col span={12} align={'center'} style={{ height: '16rem', }}>
                                                    <Row align={'center'} justify={'center'} style={{ height: '100%' }}>
                                                        <Col xs={0} sm={1} md={1} lg={1} xl={2} xxl={2} span={2} justify={'center'} align={'flex-end'} style={{ height: '100%' }} >
                                                            <Img src={shareIcon} width={'10rem'} />
                                                        </Col>
                                                        <Col xs={0} sm={5} md={5} lg={5} xl={5} xxl={4} span={4} justify={'flex-start'} align={'center'} style={{ margin: '0 40px' }}>
                                                            <Typo size={'1.3rem'} color={'#595959'} fontFamily={'Gong'} weight={'100'}>
                                                                meritshare는  user가 편하게 원하는 봉사를<br />
                                                                찾을 수 있도록 1365의 봉사를 추천해주는 서비스입니다.
                                                            </Typo>
                                                        </Col>
                                                        <Col xs={12} sm={0} md={0} lg={0} xl={0} xxl={0} span={0} justify={'center'} align={'center'} style={{ padding: '12px 15px' }}>
                                                            <Typo size={'1.1rem'} color={'#595959'}>
                                                                meritshare는 user가 편하게 원하는 봉사를
                                                                찾을 수 있도록 1365의 봉사를 추천해주는 서비스입니다.
                                                            </Typo>
                                                        </Col>
                                                        <Col xs={4} sm={2} md={2} lg={2} xl={2} xxl={2} span={2} justify={'start'} align={'center'}>
                                                            <Btn onClick={isClickToStart} bold types={'secondary'} value={isValueToStart()} shadow={'0.1rem 0.1rem 0.3rem #666666, -0.1rem -0.1rem 0.1rem #ffffff'} />
                                                        </Col>
                                                    </Row>

                                                </Col>

                                            </Row>
                                        </InfoWrapper>
                                    </Col>
                                    {/* !SECTION 1 -Info- */}


                                    {/* SECTION 1 -Icon- */}
                                    {/* PIN -Icon-   */}
                                    <Col span={12} justify={'center'} align={'center'} style={{ height: 'calc(100vh - 23.5rem)' }}>
                                        <Row justify={'center'} align={'center'} style={{ padding: '3rem 0' }}>
                                            <Col justify={'center'} align={'center'} span={12}>
                                                <Img src={puzzleMain} width={'14rem'} ></Img>
                                            </Col>
                                            <Col justify={'center'} align={'center'} span={12} >
                                                <AniTypo fontFamily={'Jalnan'} size={'4.5rem'} typo={['Find ', "your ", 'Merits', 'Share']} mainTypos={[2, 3]}></AniTypo>
                                            </Col>

                                            <Col justify={'center'} align={'center'} span={12}>
                                                <Typo size={'1.23rem'} color={'#595959'} fontFamily={'Gong'} weight={'100'}>
                                                    meritShare에서 나만의 merit를 나눌 수 있는 봉사를 알려드릴게요.
                                                </Typo>
                                            </Col>
                                        </Row>
                                    </Col>
                                    {/* !SECTION 1 -Icon- */}
                                </Row>
                            </Col>
                        </ScrollSnapSection>
                        {/* !SECTION 1 */}
                        <Col span={12} style={{ margin: ' 5rem' }}></Col>


                        {/* SECTION 2 */}
                        <ScrollSnapSection  >
                            <Col span={12} style={{ height: 'auto', }}>
                                <Row justify={'flex-start'} align={'center'} style={{ alignContent: 'space-between' }}>
                                    {/* SECTION 2 -GuideMerit-  */}
                                    {/* PIN -GuideMerit-   */}
                                    <Col colRef={secondRef} span={12} >
                                        <Col span={12} justify={'center'} align={'center'}>
                                            <Row justify={'center'} align={'center'}>

                                                <Col justify={'flex-start'} align={'center'} span={12}  >
                                                    <GuideMeritForm
                                                        onPeopleclick={onPeopleclick}
                                                        userSex={() => { if (basic.sex) return basic.sex }}
                                                        setInView={insecondRefView}
                                                        editonclickMeritFunction={editonclickMeritFunction}
                                                        onclickMerit={onclickMerit}
                                                    ></GuideMeritForm>
                                                </Col>
                                                <Col justify={'center'} align={'center'} span={12}>
                                                    {/* <Typo size={'1rem'} color={'#595959'} fontFamily={'Noto Sans KR'} weight={'400'}>
                                                        meritShare에서 나만의 merit를 나눌 수 있는 봉사를 알려드릴게요.
                                                    </Typo> */}
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                    {/* !SECTION 2 -GuideMerit- */}
                                    {/* SECTION 2 -GuideMerit-- */}
                                    {/* PIN -Icon-   */}
                                    <Col span={12} justify={'center'} align={'center'} style={{ padding: '1rem ' }}>
                                        {/* <Row justify={'center'} align={'center'} style={{ padding: '3rem 0' }}>
                                            <Col justify={'center'} align={'center'} span={12}>
                                                <Img src={puzzleMain} width={'14rem'} ></Img>
                                            </Col>
                                            <Col justify={'center'} align={'center'} span={12} >
                                                <AniTypo fontFamily={'Jalnan'} size={'4.5rem'} typo={['Find ', "your ", 'Merits', 'Share']} mainTypos={[2, 3]}></AniTypo>
                                            </Col>

                                            <Col justify={'center'} align={'center'} span={12}>
                                                <Typo size={'1.23rem'} color={'#595959'} fontFamily={'Gong'} weight={'100'}>
                                                    meritShare에서 나만의 merit를 나눌 수 있는 봉사를 알려드릴게요.
                                                </Typo>
                                            </Col>
                                        </Row> */}
                                    </Col>
                                    {/* !SECTION 2 -GuideMerit- */}
                                </Row>
                            </Col>
                        </ScrollSnapSection>
                        {/* !SECTION 2 */}


                        {/* SECTION 3 */}
                        {/* <ScrollSnapSection>
                            <Col span={12} style={{ height: 'auto', border: '2px solid blue', padding: "30rem 0" }}>
                                <Row justify={'flex-start'} align={'center'}>
                                    <Col span={12}>
                                    </Col>
                                </Row>
                            </Col>
                        </ScrollSnapSection> */}
                        {/* !SECTION 2 */}

                        {/* SECTION BackTop */}
                        <BackTop visibilityHeight={10} target={() => backTopRef.current}>
                            <Icon size={'40px'} ><HiArrowSmUp /></Icon>
                        </BackTop>
                    </ScrollSnapScroller>
                    {/* !SECTION BackTop */}
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



            </ContentStyle >

        </>
    )
}

export default MainContent