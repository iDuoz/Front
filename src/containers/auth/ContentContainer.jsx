import React, { useState } from "react";
import LoginModalForm from "../../components/organisms/Header/LoginModalForm";
import LoginProcess from "../../service/transaction/login_process";
import SignupProcess from "../../service/transaction/signup_process";
const AuthContentContainer = () => {

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
                name: "",
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
        name: "",
    });
    const [logInInfo, setLoginInfo] = useState({
        userId: "",
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
        },
        name: (e) => {
            const name = e.target.value;
            return setSignUpInfo((state) => ({ ...state, name: name }));
        },
    };

    let settingLogInValueFunction = {
        userId: (e) => {
            const userId = e.target.value;
            return setLoginInfo((state) => ({ ...state, userId: userId }));
        },

        password: (e) => {
            const password = e.target.value;
            return setLoginInfo((state) => ({ ...state, password: password }));
        },
    };

    //!SECTION


    // SECTION 로그인 회원가입 함수
    const LoginBtnOnclick = () => {
        LoginProcess(logInInfo);
        setLoginInfo({
            userId: "",
            password: "",
        });
        handleLoginModal.close();
    };
    const SignupBtnOnclick = () => {
        SignupProcess(signUpInfo);
        handleLoginModal.close();
        setSignUpInfo({
            email: "",
            password: "",
            name: "",
        });
    };
    //!SECTION

    return (
        <>
            <LoginModalForm
                // modal
                isHeaderLoginModal={isHeaderLoginModal}
                handleLoginModal={handleLoginModal}
                settingSingUpValueFunction={settingSingUpValueFunction}
                settingLogInValueFunction={settingLogInValueFunction}
                LoginBtnOnclick={LoginBtnOnclick}
                SignupBtnOnclick={SignupBtnOnclick}
            ></LoginModalForm>
        </>
    )

}


export default AuthContentContainer