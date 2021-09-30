/** 
 * @author : chaeeun 
 * @date : 2021-02-24 16:20:36 
 * @Last Modified by: eun.🍒
 * @Last Modified time: 2021-09-30 16:33:22
 */


import React from "react"
import PageNav from "../../../../containers/redux/components/PageNav"
import UserCard from "../../../../containers/redux/components/UserCard"
import Typo from "../../../atoms/Typography"


import ContentLayout from "../../../../layout/Content"
import Row from "../../../../layout/Grid/Row"
import Col from "../../../../layout/Grid/Column"
import Button from "../../../atoms/Button"
import TextBox from "../../../atoms/TextBox"
import Img from "../../../atoms/Image"
import SelectBox from "../../../atoms/SelectBox"
import VerifiedForm from "../../../molecules/VerifiedForm/VerifiedForm"

import RadioBox from "../../../atoms/RadioButton"
import Modal from "../../../atoms/Modal"
import SexConfirmModal from "../SexConfirmForm"

import DeleteMyInfoModal from "../DeleteMyInfoForm"

import DefaultImg from "../../../../assets/images/ProfileDefaultImg.png"

import FileBox from "../../../atoms/FileBox"
import Divider from "../../../atoms/Divider"

const ProfileContent = ({
    userProfile, // 우저정보

    editProfileFunction,// userProfile 수정함수들

    isDeleteConfirmVisible, // 탈퇴하기 modal 
    confirmDeleteModal, // 탈퇴하기 modal handler
    deleteOnClick,// 탈퇴하기  모달 show
    okDeleteConfirmOnclick, //  탈퇴하기재확인모달 확인
    cancelDeleteConfirmOnclick, //탈퇴하기재확인모달 확인

    isCustomImgPostForm, //  //true : 커스텀이미지 저장하기 + 이미지 올리기  form 열기   false :  커스텀이미지 저장하기 + 이미지 올리기 form 닫기 
    uploadImgOnclick, // 로컬에서 선택한 이미지를 업로드하기 
    postImgOnclick, //업로드한 이미지를 저장하기
    kakaoImgOnclick, //카카오톡 프로필 사진으로  프로필 사진 변경

    isEditNickNameForm, //true : 닉네임 변경하는 form   false :  닉네임 변경하는 form 닫기
    editNicknameOnclick, // 닉네임을 변경하는 form open 
    postNicknameOnclick, //닉네임 변경후 저장하기

    isEditRealNameForm, //true : 이름 변경하는 form   false :  이름 변경하는 form 닫기 
    editRealNameOnclick, //이름 변경하는 form open 
    postRealNameOnclick, //이름 변경후 저장하기

    isEditPhoneForm,    //true : 전화번호 변경하는 form   false :  전화번호 변경하는 form 닫기 
    editPhoneOnclick,  //전화번호 변경하는 form open 
    postPhoneOnclick,//전화번호 변경후 저장하기


    isEditSexForm, ////true : 성별 변경하는 form   false :  성별 변경하는 form 닫기
    isSexConfirmVisible, //true : 성별변경 확인 modal false : 성별 변경  modal  닫기
    editSexOnclick, //성별 변경하는 form open 
    postSexOnclick, //성별 저장할지 한번더 묻는 modal Show
    confirmSexModal, //sex모달 handler
    okSexConfirmOnclick,//성별 선택후 저장(모달 ok)
    cancelSexConfirmOnclick,//(모달 close)

    isEditEmailForm,  //true : 이메일 변경하는 form  열기  false :  이메일 변경하는 form 닫기 
    isInputAuthNumForm, //    //true : 인증번호 입력하는 form  열기  false :  인증번호 입력하는 form 닫기 
    authEmailOnclick, //FORM{이메일 수정 하는 input + 인증번호 발송}
    authEmailCancelOnclick, // 이메일  관련 FORM 닫기

    editAuthNum, // 인증번호 입력
    postAuthNumOnclick,  //이메일 수정완료 후 인증번호 발송 / 인증번호 재발송 
    checkAuthNumOnclick,//인증번호 맞는지 확인
    minutes, seconds, authNum,

    firstRegionOnchange, //1순위 관심지역 설정 & 수정
    secondRegionOnchange,//2순위 관심지역 설정 & 수정
    firstRegionOptions,
    SecondRegionOptions,
    isReceivingEmailOnclick,

}) => {
    const { email, firstRegion, imgUrl, isReceivingEmail, phone, realname, secondRegion,
        sex, username, emailValidation, } = userProfile;

    const settingSex = (sex) => {
        if (sex === 'FEMALE') return '여성';
        if (sex === 'MALE') return '남성';
    }
    const settingIsReceivingEmail = (isReceivingEmail) => {
        if (isReceivingEmail === 'YES') return '수신';
        if (isReceivingEmail === 'NO') return '비수신';
    }

    return (
        <>
            {/* SECTION Left */}
            <ContentLayout >
                <Row>

                    <Col xs={0} sm={0} md={4} lg={4} xl={4} xxl={4} style={{
                        marginRight: '4.1%'
                    }}>
                        {/* [Left]  Name Title */}
                        <Row>
                            <Col span={12}>
                                {/* <Typo size={"2.3rem"} weight={'bold'}>{username} </Typo> */}
                                <Typo size={"2.3rem"} weight={'bold'}>{username} </Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                <Typo size={"1.1rem"} opacity={'0.5'}>
                                    {
                                        (emailValidation === "YES") ? `${email} >` : `email을 인증해 주세요`
                                    }
                                </Typo>
                            </Col>
                        </Row >

                        {/* [Left]  PageNav */}
                        <Row gutter={[15, 0]} style={{ marginTop: '2rem' }}>
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"}>로그인 된 카카오계정</Typo>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <UserCard></UserCard>
                            </Col>
                        </Row>
                        <Row gutter={[15, 0]}>
                            <Col span={12}>
                                <PageNav />
                            </Col>
                        </Row>


                        {/* [Left]  탈퇴하기 , 업데이트 정보 */}
                        <Row gutter={[15, 0]} style={{ margin: '3.5rem 0 0 0 ' }}>
                            <Col span={4}>
                                <Typo size={"1rem"} color={'#ff4d4f'} weight={"500"} cursor={'pointer'} onClick={deleteOnClick} >탈퇴하기</Typo>
                            </Col>
                            <Col span={8}>
                                <Typo size={"1rem"} color={'#707070'} weight={"500"} cursor={'pointer'} >업데이트 정보</Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Modal headerClose visible={isDeleteConfirmVisible}
                        maskClosable={true} onClose={confirmDeleteModal.close} size={4} xs={7} sm={7} md={6} lg={6} xl={5} xxl={4}>
                        <DeleteMyInfoModal username={username} okDeleteConfirmOnclick={okDeleteConfirmOnclick} cancelDeleteConfirmOnclick={cancelDeleteConfirmOnclick}></DeleteMyInfoModal>
                    </Modal>
                    {/* !SECTION Left */}

                    {/* SECTION Right */}
                    <Col xs={12} sm={12} md={7.5} span={7.5}>
                        <Row >
                            <Col span={12}>
                                <Typo size={"1.2rem"} weight={"bold"} > 프로필 수정</Typo>
                            </Col>
                        </Row>

                        {/* PIN 프로필사진 */}
                        <Divider color={'#000000'} marginTop={'15px'} marginBottom={'0px'} borderWidth={'3px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "100px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>프로필 사진</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}  >
                                    <Col offset={0.25} span={4} justify={"start"} align={"center"}>
                                        {
                                            (imgUrl) ?
                                                <Img src={imgUrl} width={'90px'} circle></Img>
                                                :
                                                <Img src={DefaultImg} width={'90px'} circle></Img>
                                        }
                                    </Col>
                                    <Col span={3}>
                                        {
                                            (isCustomImgPostForm === false) ?
                                                <Row gutter={[0, 0]} justify={'center'} align={'center'} style={{ alignContent: "space-evenly" }}  >
                                                    <Col span={12}>
                                                        <FileBox block id={"customImg"} accept="image/*" onChange={uploadImgOnclick} >이미지선택</FileBox>
                                                    </Col>
                                                    <Col span={12} >
                                                        <Button block value={'카카오 사진으로'} onClick={kakaoImgOnclick}></Button>
                                                    </Col>
                                                </Row>
                                                :
                                                <>
                                                    <Row gutter={[0, 0]} justify={'space-between'} align={'center'}   >
                                                        <Col span={7}>
                                                            <FileBox block id={"customImg"} accept="image/*" onChange={uploadImgOnclick} >파일선택</FileBox>
                                                        </Col>
                                                        <Col span={4} >
                                                            <Button block types={'primary'} value={'저장'} onClick={postImgOnclick}></Button>
                                                        </Col>
                                                    </Row>
                                                    <Row justify={'flex-end'}>
                                                        <Col span={12} >
                                                            <Button block value={'카카오 사진으로'} onClick={kakaoImgOnclick}></Button>
                                                        </Col>
                                                    </Row>
                                                </>
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>



                        {/* PIN 닉네임  */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>닉네임</Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditNickNameForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (username) ?
                                                            <Typo weight={"bold"}>{username}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'닉네임을 기입해 주새요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    <Button block value={'닉네임 변경'} onClick={editNicknameOnclick}></Button>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={5} sm={6} md={5} lg={6} xl={6} xxl={6} align={'center'} justify={'center'} >
                                                            <TextBox color={"black"} border block autofocus
                                                                radius={'22px'} align={'center'}
                                                                onChange={editProfileFunction.username} value={username}></TextBox>
                                                        </Col>
                                                        <Col xs={7} sm={6} md={7} lg={6} xl={6} xxl={6} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                            <Typo color={'#707070'} size={'0.8rem'}>초기설정은 카톡닉네임입니다.</Typo>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'닉네임저장'} onClick={postNicknameOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>





                        {/* PIN 이름 */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>* 이름</Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditRealNameForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (realname) ?
                                                            <Typo weight={"bold"}>{realname}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'실명을 기입해 주새요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    <Button block value={'이름변경'} onClick={editRealNameOnclick}></Button>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={5} sm={6} md={5} lg={6} xl={6} xxl={6} align={'center'} justify={'center'} >
                                                            <TextBox color={"black"} border block
                                                                radius={'22px'} align={'center'}
                                                                onChange={editProfileFunction.realname} value={realname}></TextBox>
                                                        </Col>
                                                        <Col xs={6} sm={6} md={7} lg={6} xl={6} xxl={6} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                            <Typo color={'#707070'} size={'0.8rem'}>반드시 실명을 기입해 주세요.</Typo>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'이름저장'} onClick={postRealNameOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>


                        {/* PIN  전화번호 */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>* 전화번호</Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditPhoneForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (phone) ?
                                                            <Typo weight={"bold"}>{phone}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'전화번호를 기입해 주세요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    <Button block value={'번호변경'} onClick={editPhoneOnclick}></Button>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={5} sm={6} md={5} lg={6} xl={6} xxl={6} align={'center'} justify={'center'} >
                                                            <TextBox color={"black"} border block
                                                                radius={'22px'} align={'center'}
                                                                onChange={editProfileFunction.phone} value={phone}></TextBox>
                                                        </Col>
                                                        <Col xs={6} sm={6} md={7} lg={6} xl={6} xxl={6} align={"center"} style={{ paddingLeft: '0.8rem' }}>
                                                            <Typo color={'#707070'} size={'0.8rem'}>'-' 없이 숫자만 입력해 주세요.</Typo>
                                                        </Col>
                                                    </Row>
                                                </Col>

                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'번호저장'} onClick={postPhoneOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>

                        {/* PIN 성별 */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>* 성별 </Typo>
                            </Col>

                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditSexForm === false) ?
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >
                                                    {
                                                        (sex !== 'UNKNOWN') ?
                                                            <Typo weight={"bold"}>{settingSex(sex)}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'성별을 기입해 주새요'} </Typo>
                                                    }
                                                </Col>

                                                <Col span={3}>
                                                    {
                                                        (sex === 'UNKNOWN') ?
                                                            <Button block value={'성별기입'} onClick={editSexOnclick}></Button>
                                                            :
                                                            null
                                                    }

                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"} >

                                                    <Col xs={6} sm={6} md={4} lg={5} xl={4} xxl={4} align={'space-between'} justify={'start'} >

                                                        <RadioBox justify={'space-between'} name={"sex"} options={["남성", "여성"]}
                                                            onClick={editProfileFunction.sex} checkedValue={settingSex(sex)}></RadioBox>
                                                    </Col>


                                                </Col>
                                                <Col span={3}>
                                                    <Button types={"primary"} block value={'성별저장'} onClick={postSexOnclick}></Button>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>

                        <Modal headerClose visible={isSexConfirmVisible}
                            maskClosable={true} onClose={confirmSexModal.close} size={4} xs={7} sm={7} md={6} lg={6} xl={5} xxl={5} >
                            <SexConfirmModal username={username} sex={sex} okSexConfirmOnclick={okSexConfirmOnclick} cancelSexConfirmOnclick={cancelSexConfirmOnclick} ></SexConfirmModal>
                        </Modal>


                        {/* PIN 이메일 */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        {
                            (emailValidation === "NO") ?
                                <>
                                    {/* NOTE  인증안댄경우*/}
                                    <Row justify={"space-between"} style={{ height: "50px" }}>
                                        <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                            <Typo weight={'bold'}>* 이메일 인증 </Typo>
                                        </Col>
                                        <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                            <Row align={'initial'} justify={"space-between"}>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"}>
                                                    <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>
                                                        이메일인증이 반드시 필요합니다.
                                                    </Typo>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"}>
                                                    {
                                                        (isEditEmailForm) ?
                                                            <Button block value={'인증취소'} onClick={authEmailCancelOnclick}></Button>
                                                            :
                                                            <Button block value={'인증하기'} onClick={authEmailOnclick}></Button>
                                                    }
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    {
                                        (isEditEmailForm) ?
                                            <>
                                                <VerifiedForm minutes={minutes} seconds={seconds} email={email} editProfileFunction={editProfileFunction}
                                                    isInputAuthNumForm={isInputAuthNumForm} postAuthNumOnclick={postAuthNumOnclick}
                                                    authNum={authNum} editAuthNum={editAuthNum} checkAuthNumOnclick={checkAuthNumOnclick} />
                                            </>
                                            :
                                            null
                                    }
                                </>
                                :
                                <>
                                    <Row justify={"space-between"} style={{ height: "50px" }}>
                                        <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                            <Typo weight={'bold'}>* 이메일</Typo>
                                        </Col>
                                        <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                            <Row align={'initial'} justify={"space-between"}>
                                                <Col offset={0.25} span={8} justify={"start"} align={"center"}>
                                                    <Typo weight={"bold"}>{email}</Typo>
                                                </Col>
                                                <Col span={3} justify={"center"} align={"center"}>
                                                    {
                                                        (isEditEmailForm) ?
                                                            <Button block value={'변경취소'} onClick={authEmailCancelOnclick}></Button>
                                                            :
                                                            <Button block value={'이메일변경'} onClick={authEmailOnclick}></Button>
                                                    }
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    {
                                        (isEditEmailForm) ?
                                            <>
                                                <VerifiedForm minutes={minutes} seconds={seconds} email={email} editProfileFunction={editProfileFunction}
                                                    isInputAuthNumForm={isInputAuthNumForm} postAuthNumOnclick={postAuthNumOnclick}
                                                    authNum={authNum} editAuthNum={editAuthNum} checkAuthNumOnclick={checkAuthNumOnclick} />
                                            </>
                                            :
                                            null
                                    }
                                </>
                        }

                        {/* PIN 괸심지역  */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "130px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>관심지역</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Row gutter={[5, 0]}>
                                    <Col span={12}>
                                        <Row align={'center'}>
                                            <Col offset={0.25} span={1}>
                                                <Typo weight={'bold'}>1순위</Typo>
                                            </Col>
                                            <Col span={2.5}>
                                                <SelectBox background block border value={firstRegion} options={firstRegionOptions} onChange={firstRegionOnchange}></SelectBox>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row align={'center'}>
                                            <Col offset={0.25} span={1}>
                                                <Typo weight={'bold'}>2순위</Typo>
                                            </Col>
                                            <Col span={2.5}>
                                                <SelectBox background block border value={secondRegion} options={SecondRegionOptions} onChange={secondRegionOnchange}></SelectBox>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col offset={0.25} span={12}>
                                        <Typo color={'#707070'} size={'0.8rem'}>-관심지역을 선택하시면 맞춤형 봉사활동을 알려드립니다.</Typo>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>



                        {/* PIN 이메일 수신 여부  */}
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "50px" }}>

                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#f5f5f5", height: "inherit" }}>
                                <Typo weight={'bold'}>이메일 수신동의</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#ffffff ", height: "inherit" }}>
                                <Col offset={0.25} span={4}>
                                    {
                                        (isReceivingEmail) ?
                                            <RadioBox justify={'space-between'} name={"isReceivingEmail"} options={["수신", "비수신"]} onClick={isReceivingEmailOnclick}
                                                checkedValue={settingIsReceivingEmail(isReceivingEmail)}></RadioBox>
                                            :
                                            null
                                    }
                                </Col>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'3px'} ></Divider>
                    </Col>
                </Row>
                {/* !SECTION Right */}
            </ContentLayout>
        </>
    )

}

export default ProfileContent;