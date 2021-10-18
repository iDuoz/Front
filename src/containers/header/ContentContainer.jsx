import React, { memo, createRef, useEffect, useRef, useState } from "react";

import HeaderContent from "../../components/organisms/Header/Content/index";
import gsap from "gsap"

import login_process from "../../service/transaction/login_process"
import logout_process from "../../service/transaction/logout_process"
import SignupProcess from "../../service/transaction/signup_process";
import { useHistory, useLocation } from "react-router-dom";
import { notification } from "antd";
const ContentContainer = ({
    logined,
    uid,
}) => {
    const headerItemsName = ['전체게시글', '게시글작성', 'Profile', '추천봉사']
    const history = useHistory();
    const location = useLocation()
    const path = location.pathname


    const matchingHeaderPath = (itemName) => {
        const itemRoute = {
            '전체게시글': '/notice',
            '게시글작성': '/createnotice',
            'Profile': '/profile',
            '추천봉사': '/proposal',
        };
        return itemRoute[itemName] || "/notFound"
    }

    const matchingHeaderColor = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",]


    const setHeaderItem = headerItemsName.map((items, index, source) => {
        return {
            name: items,
            color: matchingHeaderColor[index],
            path: matchingHeaderPath(items)
        }
    })




    const [active, setActive] = useState({ index: null });
    const menuWrapperRef = React.createRef();
    const headerItems = useRef(setHeaderItem.map(createRef))
    const indicator1 = useRef();
    const indicator2 = useRef();

    useEffect(() => {
        if (path === '/notice') {
            setActive((state) => ({ ...state, index: 0 }))
        }
        if (path === '/createnotice') {
            setActive((state) => ({ ...state, index: 1 }))
        }
        if (path === '/profile') {
            setActive((state) => ({ ...state, index: 2 }))
        }
        if (path === '/proposal') {
            setActive((state) => ({ ...state, index: 3 }))
        }
    }, [path])


    const animate = () => {
        if (active.index === null) return null;
        if (!headerItems.current[active.index].current) return null;
        const menuOffset = menuWrapperRef.current.getBoundingClientRect()
        const activeItem = headerItems.current[active.index].current;
        const { width, height, top, left } = activeItem.getBoundingClientRect()

        const settings = {
            x: left - menuOffset.x,
            y: top - menuOffset.y,
            width: width,
            height: height,
            backgroundColor: setHeaderItem[active.index].color,
            ease: 'elastic.out(.7, .7)',
            duration: .8
        }

        gsap.to(indicator1.current, {
            ...settings,
        })

        gsap.to(indicator2.current, {
            ...settings,
            duration: 1
        })
    }



    useEffect(() => {
        if (active.index === null) {
            gsap.to(indicator1.current, {
                width: 0,
                height: 0,
                duration: .8
            })
            gsap.to(indicator2.current, {
                width: 0,
                height: 0,
                duration: 1
            })
        } else {
            animate()
        }
        window.addEventListener('resize', animate)
        return (() => {
            window.removeEventListener('resize', animate)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active.index, menuWrapperRef, setHeaderItem])



    const handleActiveIndex = (index) => {
        setActive((state) => ({ ...state, index: index }))
    }

    const handleWrapperOnMouseLeave = () => {
        if (path === '/') {
            setActive((state) => ({ ...state, index: null }))
        }
        if (path === '/notice') {
            setActive((state) => ({ ...state, index: 0 }))
        }
        if (path === '/createnotice') {
            setActive((state) => ({ ...state, index: 1 }))
        }
        if (path === '/profile') {
            setActive((state) => ({ ...state, index: 2 }))
        }
        if (path === '/proposal') {
            setActive((state) => ({ ...state, index: 3 }))
        }
    }


    const handleOnMouseLeave = (e) => {
        e.stopPropagation()
    }

    //SECTION 모달 관리
    const [isHeaderLoginModal, setIsHeaderLoginModal] = useState({
        visible: false,
        type: 'login',
    });

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

    //!SECTION 



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
        SignupProcess(signUpInfo)
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




    const logOutHandler = () => {
        logout_process()
        history.push('/')
    }
    //!SECTION

    return (
        <>
            <HeaderContent
                logined={logined}
                menuWrapperRef={menuWrapperRef}
                setHeaderItem={setHeaderItem}
                headerItems={headerItems}
                handleActiveIndex={handleActiveIndex}
                active={active}
                indicator1={indicator1}
                indicator2={indicator2}
                handleWrapperOnMouseLeave={handleWrapperOnMouseLeave}
                handleOnMouseLeave={handleOnMouseLeave}

                // modal
                isHeaderLoginModal={isHeaderLoginModal}
                handleLoginModal={handleLoginModal}
                settingSingUpValueFunction={settingSingUpValueFunction}
                settingLogInValueFunction={settingLogInValueFunction}
                LoginBtnOnclick={LoginBtnOnclick}
                SignupBtnOnclick={SignupBtnOnclick}
                LogintoSignUp={LogintoSignUp}
                SignUPtoLogin={SignUPtoLogin}
                logInInfo={logInInfo}
                signUpInfo={signUpInfo}
                logOutHandler={logOutHandler}
            ></HeaderContent>

        </>
    )

}


export default memo(ContentContainer)