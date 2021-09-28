import React, { useState } from "react";



const authContentContainer = () => {

    //SECTION 모달 관리
    const [isLoginModal, setIsLoginModalVisible] = useState(false);
    const handleLoginModal = {
        show: () => setIsLoginModalVisible(true),
        close: () => {
            setIsLoginModalVisible(false);
            setIsSignUpModalVisible(false);
            setSignUpInfo({
                email: "",
                password: "",
                name: "",
                region: "",
                phoneNumber: "",
            });
            setLoginInfo({
                email: "",
                password: "",
            });
        },
    };


    const [isSignUpModal, setIsSignUpModalVisible] = useState(false);
    const handleSignUpModal = {
        show: () => setIsSignUpModalVisible(true),
        close: () => setIsSignUpModalVisible(false),
    };

    //!SECTION 모달 관리






    return (
        <>
        </>
    )

}


export default authContentContainer