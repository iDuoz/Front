import React, { memo, createRef, useEffect, useRef, useState } from "react";

import HeaderContent from "../redux/components/Header/index";
import gsap from "gsap"


import login_process from "../../service/transaction/login_process"
import logout_process from "../../service/transaction/logout_process"
import SignupProcess from "../../service/transaction/signup_process";
import LoginModalForm from "../../components/organisms/Header/LoginModalForm/index"
const ContentContainer = () => {
    const headerItemsName = ['Notice', 'Create', 'Director', 'Experience']



    const matchingHeaderPath = (itemName) => {
        const itemRoute = {
            Notice: '/',
            Create: '/createnotice',
            Director: '/',
            Experience: '/',
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




    const [active, setActive] = useState({ index: 0 });
    const menuWrapperRef = React.createRef();
    const headerItems = useRef(setHeaderItem.map(createRef))
    const indicator1 = useRef();
    const indicator2 = useRef();



    const animate = () => {
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
        animate()
        window.addEventListener('resize', animate)

        return (() => {
            window.removeEventListener('resize', animate)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active.index, menuWrapperRef, setHeaderItem])



    const handleActiveIndex = (index) => {
        setActive((state) => ({ ...state, index: index }))
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
            return setLoginInfo((state) => ({ ...state, password: password }));
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
        setLoginInfo({
            email: "",
            password: "",
        });
        console.log("왜안없어지고 지랄")
        console.log(logInInfo)
        handleLoginModal.close();
    };
    const SignupBtnOnclick = () => {
        SignupProcess(signUpInfo)
        handleLoginModal.close();
        setSignUpInfo({
            email: "",
            password: "",
        });
    };




    const logOutHandler = () => {
        logout_process()
    }
    //!SECTION










    return (
        <>
            <HeaderContent
                menuWrapperRef={menuWrapperRef}
                setHeaderItem={setHeaderItem}
                headerItems={headerItems}
                handleActiveIndex={handleActiveIndex}
                active={active}
                indicator1={indicator1}
                indicator2={indicator2}


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