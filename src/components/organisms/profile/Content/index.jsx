import React from 'react'
import { Row, Col, ContentStyle } from '../../../../layout'
import { Typo, Divider, MeritIcon, Btn, TextBox, Modal, AlertModalForm } from "../../../../components"
import { Radio, Checkbox } from "antd"


const ProfileContent = ({
    closeNewbeModal,
    isNewbeModal,
    handleNewbeModal,


    userBasicProfile,
    userMeritProfile,
    plainAddRegionOptions,
    plainRegionOptions,
    editBasicProfileFunction,
    editMeritProfileFunction,

    isEditForm,
    editShowOnclick,
    editCloseOnclick,
}) => {


    return (
        <>
            <ContentStyle>
                <Row justify={'space-around'} align={'center'} style={{ backgroundColor: 'inherit' }}>
                    <Col span={12}>
                        <Modal visible={isNewbeModal} maskClosable={false} headerClose
                            onClose={handleNewbeModal.close} size={7}>
                            <AlertModalForm handleClose={closeNewbeModal}></AlertModalForm>
                        </Modal>
                    </Col>
                    {/* SECTION Left */}

                    <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} span={4} style={{
                        // marginRight: '4.1%'
                    }}>
                        <Row>
                            <Col span={12}>
                                {/* TODO 이채은 -> username */}
                                <Typo size={"2.3rem"} weight={'bold'}>{userBasicProfile.name || 'GUEST'} </Typo>
                            </Col>
                        </Row>
                        <Row gutter={[3, 0]}>
                            <Col span={12}>
                                <Typo size={"1.1rem"} opacity={'0.5'}>
                                    {userBasicProfile.email || '로그인이 필요합니다'}
                                </Typo>

                            </Col>
                        </Row>
                        <Row gutter={[15, 0]} style={{ marginTop: '2rem' }}>
                            <Col span={12} align={'center'}>
                                <Typo size={"1.3rem"} weight={"bold"}>my Merit.</Typo>
                                {
                                    (isEditForm === false) ?
                                        null
                                        : <Typo padding={'0 0 0 5px'} size={"1.1rem"} weight={"bold"} color={'#9baacf'}>3개이상의 merit를 골라주세요</Typo>
                                }

                                <Divider marginTop={'1rem'} marginBottom={'0rem'}></Divider>
                            </Col>
                            <Col span={12}>
                                {
                                    (isEditForm === false) ?
                                        <MeritIcon userMeritProfile={userMeritProfile} blockClick editMeritProfileFunction={null}></MeritIcon>
                                        : <MeritIcon userMeritProfile={userMeritProfile} editMeritProfileFunction={editMeritProfileFunction}></MeritIcon>
                                }

                            </Col>
                        </Row>
                    </Col>
                    {/*!SECTION Left */}
                    {/* SECTION Right */}
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} span={6}>
                        <Row >
                            <Col span={12}>
                                <Typo size={"1.3rem"} weight={"bold"} > 프로필 수정</Typo>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'15px'} marginBottom={'0px'} borderWidth={'3px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>이름</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditForm === false) ?
                                            <>
                                                <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                                    {
                                                        (userBasicProfile.name) ?
                                                            <Typo size={'1.1rem'} weight={"bold"}>{userBasicProfile.name}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'이름을 기입해 주세요'} </Typo>
                                                    }
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.4} span={12} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} align={'center'} justify={'start'} >
                                                            <TextBox color={"black"} block
                                                                onChange={editBasicProfileFunction.name} value={userBasicProfile.name}></TextBox>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>이메일</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>



                                    <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                        {
                                            (userBasicProfile.email) ?
                                                <Typo size={'1.1rem'} weight={"bold"}>{userBasicProfile.email}</Typo>
                                                :
                                                <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'이메일을 기입해 주세요'} </Typo>
                                        }
                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>나이</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditForm === false) ?
                                            <>
                                                <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                                    {
                                                        (userBasicProfile.age) ?
                                                            <Typo size={'1.1rem'} weight={"bold"}>{(userBasicProfile.age === "teen") ? '미성년자' : '성인'}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'나이를 기입해 주세요'} </Typo>
                                                    }
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.4} span={12} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6} align={'center'} justify={'start'} >
                                                            <Radio.Group onChange={editBasicProfileFunction.age} value={userBasicProfile.age}>
                                                                <Radio value={"teen"}>미성년자</Radio>
                                                                <Radio value={"adult"}>성인</Radio>
                                                            </Radio.Group>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>성별</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditForm === false) ?
                                            <>
                                                <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                                    {
                                                        (userBasicProfile.sex) ?
                                                            <Typo size={'1.1rem'} weight={"bold"}>{(userBasicProfile.sex === "man") ? '남자' : '여자'}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'성별을 기입해 주세요'} </Typo>
                                                    }
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.4} span={12} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} align={'center'} justify={'start'} >
                                                            <Radio.Group onChange={editBasicProfileFunction.sex} value={userBasicProfile.sex}>
                                                                <Radio value={"man"}>남자</Radio>
                                                                <Radio value={"woman"}>여자</Radio>
                                                            </Radio.Group>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>


                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>지역</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditForm === false) ?
                                            <>
                                                <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                                    {
                                                        (userBasicProfile.region) ?
                                                            <Typo size={'1.1rem'} weight={"bold"}>{userBasicProfile.region}</Typo>
                                                            :
                                                            <Typo backColor={'rgb(255, 253, 126)'} weight={"bold"}>{'지역을 기입해 주세요'} </Typo>
                                                    }
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.4} span={12} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} align={'center'} justify={'start'} >
                                                            <Radio.Group
                                                                onChange={editBasicProfileFunction.region}
                                                                options={plainRegionOptions}
                                                                value={userBasicProfile.region}>
                                                            </Radio.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'1.8px'} ></Divider>
                        <Row justify={"space-between"} style={{ height: "60px" }}>
                            <Col span={2} justify={"center"} align={"center"} style={{ backgroundColor: "#dbdee9", height: "inherit" }}>
                                <Typo weight={'bold'}>추가지역</Typo>
                            </Col>
                            <Col span={10} align={'center'} style={{ backgroundColor: "#edeff2 ", height: "inherit" }}>
                                <Row align={'initial'} justify={"space-between"}>
                                    {
                                        (isEditForm === false) ?
                                            <>
                                                <Col offset={0.4} span={12} justify={"start"} align={"center"} >
                                                    {
                                                        (userBasicProfile.addRegion) ?
                                                            <Typo size={'1.1rem'} weight={"bold"}>{userBasicProfile.addRegion}</Typo>
                                                            :
                                                            <Typo weight={"bold"}>{'추가지역을 기입해 주세요'} </Typo>
                                                    }
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col offset={0.4} span={12} justify={"center"} align={"center"} >
                                                    <Row align={'center'}>
                                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} align={'center'} justify={'start'} >
                                                            <Checkbox.Group
                                                                options={plainAddRegionOptions}
                                                                value={userBasicProfile.addRegion}
                                                                onChange={editBasicProfileFunction.addRegion}
                                                            >
                                                            </Checkbox.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </Col>
                        </Row>
                        <Divider color={'#000000'} marginTop={'0px'} marginBottom={'0px'} borderWidth={'3px'} ></Divider>
                        {/* SECTION 수정하기버튼 */}
                        <Row justify={'flex-end'} align={'center'} style={{ marginTop: '10px' }}>
                            <Col span={3} justify={'flex-end'} align={'center'}>
                                {(isEditForm === false) ?
                                    <Btn fontSize={'1.3rem'} types={'primary'} block onClick={editShowOnclick}
                                        value={'수정하기'}></Btn>
                                    :
                                    <Btn fontSize={'1.3rem'} types={'primary'} block onClick={editCloseOnclick}
                                        value={'저장하기'}></Btn>
                                }

                            </Col>
                        </Row>
                        {/* !SECTION 수정하기버튼 */}
                    </Col>
                    {/* !SECTION Right */}
                </Row>
            </ContentStyle>
        </>
    )
}

export default ProfileContent