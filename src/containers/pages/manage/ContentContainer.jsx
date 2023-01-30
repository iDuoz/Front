import React, { useState, useEffect } from 'react';
import ManageContent from "../../../components/organisms/Manage/Content/index"
import { createGlobalStyle } from 'styled-components';
import getPatientData from "../../../service/firebase/database/getPatientData"
import editPatient from "../../../service/firebase/database/editPatientData"

const GlobalStyle = createGlobalStyle`

html,body {
    background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
}
`

const ContentContainer = ({
    logined,
    uid,
    basic,
    merit,
    loveNotice,
    totalLoveNotice,
    role,
    regions,
}) => {

    //SECTION 환자정보 불러와서 저장하기
    const [patientInfo, setPatientInfo] = useState([])


    useEffect(() => {
        setPatientInfo(() => ([]))
        getPatientData()
            .then((res) => {
                const patientInfo = res.patients
                patientInfo.forEach((patient) => {
                    setPatientInfo((state) => ([...state, {
                        age: patient.age,
                        birth: patient.birth,
                        content: patient.content,
                        name: patient.name,
                        part: patient.part,
                        patientId: patient.patientId,
                        record: {
                            first: patient.first || null,
                            second: patient.second || null,
                            third: patient.third || null,
                            fourth: patient.fourth || null,
                        },
                        sex: patient.sex
                    }]))
                    setNowRecord((state) => ({ ...state, [patient.patientId]: [] }))
                    setFeedbackValue((state) => ({ ...state, [patient.patientId]: {} }))
                    console.log("🦋🦋🦋🦋🦋🦋🦋🦋🦋")
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
    //!SECTION


    //SECTION 피드백 운동 
    const [nowRecord, setNowRecord] = useState({})


    const recordOnClick = (infoRecord, patientId, sequence) => {
        infoRecord[6] = sequence
        setNowRecord((state) => ({ ...state, [patientId]: infoRecord }))
    }


    const [feedbackValue, setFeedbackValue] = useState({})


    const feedbackIconOnClick = (nowRecordFeedback, patientId, sequence, IconValue) => {

        setFeedbackValue((state) => ({
            ...state, [patientId]: {
                [sequence]: IconValue
            }
        }))


    }

    const feedbackSubmitOnClick = (nowRecordValue, patientId) => {

        console.log("🚀 ~ patientId", patientId);
        console.log("🚀 ~ nowRecordValue", nowRecordValue);
        const editFeedback = {
            [nowRecordValue[6]]: [
                nowRecordValue[0],
                Number(nowRecordValue[1]),
                Number(nowRecordValue[2]),
                Number(nowRecordValue[3]),
                Number(nowRecordValue[4]),
                feedbackValue[patientId][nowRecord[patientId][6]],
                nowRecordValue[6]
            ]
        }

        console.log("🚀 ~ editFeedback", editFeedback);


        editPatient(patientId, editFeedback).then((res) => {
            console.log("피드백제출 완료");
            setNowRecord((state) => ({
                ...state, [patientId]: [
                    nowRecordValue[0],
                    Number(nowRecordValue[1]),
                    Number(nowRecordValue[2]),
                    Number(nowRecordValue[3]),
                    Number(nowRecordValue[4]),
                    feedbackValue[patientId][nowRecord[patientId][6]],
                    nowRecordValue[6]
                ]
            }))
        }).catch((err) => { console.log("err") })
    }
    //!SECTION

    //SECTION 운동 추가
    /**
     *  @property {type} o운동뭔지 -wrist / upper / lower 
     *  @property {set} o세트수 -3 / 4/ ...
     *  @property {kg} o중량 -30 / 35 / 40 / ...
     *  @property {time} o횟수 - 10 / 15 / ...
     *  @property {done} o운동한횟수 - 0 (환자가 운동한 횟수니까 static0)
     * @property {feedback} o피드백 - 'null' (운동 후 피드백이니까 'null')
     * @property {sequence} o순서 -first/second/ third/fourth
     */

    /** @description 레코드 갯수 세는 함수 */
    const countRecordNum = (infoRecord) => {
        const staticRecordNum = ["first", "second", "third", "fourth"]
        const countRecordNum = [];
        if (infoRecord.first) countRecordNum.push("first");
        if (infoRecord.second) countRecordNum.push("second");
        if (infoRecord.third) countRecordNum.push("third");
        if (infoRecord.fourth) countRecordNum.push("fourth");

        return (staticRecordNum[countRecordNum.length])
    }


    const [addSportValue, setAddSportValue] = useState({
        type: "",
        set: 0,
        kg: 0,
        time: 0,

    })

    /**
         * @description 운동 추가 onChange 객체 : {함수s} */
    let addSportFunction = {
        sequence: "first",
        type: (e) => {
            const type = e.target.value;
            return setAddSportValue((state) => ({ ...state, type: type }))
        },
        setUp: () => {
            return setAddSportValue((state) => ({ ...state, set: state.set + 1 }))
        },
        setDown: () => {
            return setAddSportValue((state) => ({ ...state, set: state.set - 1 }))
        },
        kgUp: () => {
            return setAddSportValue((state) => ({ ...state, kg: state.kg + 5 }))
        },
        kgDown: () => {
            return setAddSportValue((state) => ({ ...state, kg: state.kg - 5 }))
        },
        timeUp: () => {
            return setAddSportValue((state) => ({ ...state, time: state.time + 1 }))
        },
        timeDown: () => {
            return setAddSportValue((state) => ({ ...state, time: state.time - 1 }))
        },
    }

    const addSportSubmit = (patientId, infoRecord) => {

        console.log(countRecordNum(infoRecord))
        const addSportSubmitValue = {
            [countRecordNum(infoRecord)]: [
                addSportValue.type,
                Number(addSportValue.set),
                Number(addSportValue.kg),
                Number(addSportValue.time),
                Number(0),
                String("null"),
                countRecordNum(infoRecord)

            ]
        }
        //TODO 레코드 축가 통신
        console.log(addSportSubmitValue)

        editPatient(patientId, addSportSubmitValue).then((res) => {
            console.log("레코드리스트 추가 완료");
            getPatientData()
                .then((res) => {
                    setPatientInfo([])
                    const patientInfo = res.patients
                    patientInfo.forEach((patient) => {
                        setPatientInfo((state) => ([...state, {
                            age: patient.age,
                            birth: patient.birth,
                            content: patient.content,
                            name: patient.name,
                            part: patient.part,
                            patientId: patient.patientId,
                            record: {
                                first: patient.first || null,
                                second: patient.second || null,
                                third: patient.third || null,
                                fourth: patient.fourth || null,
                            },
                            sex: patient.sex
                        }]))
                        console.log("🦋")
                    })

                    setAddSportValue({
                        type: "",
                        set: 0,
                        kg: 0,
                        time: 0,
                    })
                })
                .catch((e) => {
                    console.log(e)
                })
        }).catch((err) => { console.log("err") })
    }

    //!SECTION


    console.log("😁😆")
    //레코드 개수
    // console.log(totalRecordNum)
    console.log(addSportValue)
    //선택한거
    console.log(nowRecord)
    //GOOD BAD 선택한거 
    console.log(feedbackValue)

    return (
        <>
            <GlobalStyle role={role} />
            <ManageContent
                patientInfo={patientInfo}
                logined={logined}
                uid={uid}
                basic={basic}
                merit={merit}
                loveNotice={loveNotice}
                totalLoveNotice={totalLoveNotice}
                role={role}
                regions={regions}
                nowRecord={nowRecord}
                recordOnClick={recordOnClick}
                feedbackSubmitOnClick={feedbackSubmitOnClick}
                feedbackIconOnClick={feedbackIconOnClick}
                feedbackValue={feedbackValue}

                countRecordNum={countRecordNum}
                addSportValue={addSportValue}
                addSportFunction={addSportFunction}
                addSportSubmit={addSportSubmit}
            ></ManageContent>
        </>
    )
}

export default ContentContainer