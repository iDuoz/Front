import React, { useEffect, useState, useRef } from 'react';
import { Typo, Img, Btn, AniTypo, Icon, GuideMeritForm, Modal, LoginModalForm, AlertLoginModalForm } from '../../..';
import { Row, Col, ContentStyle, Header } from '../../../../layout'
import { Collapse, Space } from 'antd';
import getPatientData from '../../../../service/firebase/database/getPatientData'
import LilltSettingIcon from "../../../../assets/icons/LilltSettingIcon.png"
import PatientInfoForm from '../../../molecules/PatientInfoForm';
import PatientContentForm from '../../../molecules/PatientContentForm';

const { Panel } = Collapse;




const ManageContent = ({
    patientInfo,
    logined,
    uid,
    basic,
    merit,
    loveNotice,
    totalLoveNotice,
    role,
    regions,
    nowRecord,
    recordOnClick,
    feedbackIconOnClick,
    feedbackSubmitOnClick,
    feedbackValue,
    countRecordNum,
    addSportValue,
    addSportFunction,
    addSportSubmit,
}) => {

    console.log("patientInfo")
    console.log(patientInfo)

    return (
        <>
            <ContentStyle style={{ padding: '5.2vh 4.2vw 6vh 4.2vw ' }} >
                <Row>
                    <Col span={12}>
                        <Row align={"center"} gutter={[10, 0]}>
                            <Col span={12} >
                                <Typo size={"3rem"} weight={"500"} color={"#484848"}>환자 관리</Typo>
                            </Col>
                            <Col span={12} align={"center"} justify={"flex-start"}>
                                <Typo size={"1.5rem"} weight={"500"} color={"#717171"}>
                                    환자의 개인정보를 관리 및 피드백 합니다.
                                </Typo>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Space direction="vertical" style={{ width: "100%" }}>

                            {

                                patientInfo.map((patient, index) => {
                                    return (

                                        <div key={index}>
                                            <Collapse collapsible="header"  >
                                                <Panel header={
                                                    <PatientInfoForm
                                                        infoName={patient.name}
                                                        infoAge={patient.age}
                                                        infoBirth={patient.birth}
                                                        infoSex={patient.sex}
                                                    />} key="1">
                                                    {<PatientContentForm
                                                        infoPart={patient.part}
                                                        infoContent={patient.content}

                                                        infoRecord={patient.record}
                                                        nowRecord={nowRecord}
                                                        patientId={patient.patientId}
                                                        recordOnClick={recordOnClick}
                                                        feedbackValue={feedbackValue}
                                                        feedbackIconOnClick={feedbackIconOnClick}
                                                        feedbackSubmitOnClick={feedbackSubmitOnClick}
                                                        countRecordNum={countRecordNum}
                                                        addSportValue={addSportValue}
                                                        addSportFunction={addSportFunction}
                                                        addSportSubmit={addSportSubmit}
                                                    />}
                                                </Panel>
                                            </Collapse>
                                        </div>
                                    )

                                })
                            }
                        </Space>
                    </Col>

                </Row>

            </ContentStyle >

        </>
    )
}

export default ManageContent