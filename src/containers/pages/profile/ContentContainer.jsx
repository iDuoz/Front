import { notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { ProfileContent } from '../../../components'

import editUser from '../../../service/firebase/database/editUser';



const ContentContainer = ({
    uid,
    basic,
    merit,
    loveNotice,
    totalLoveNotice,
    role,
    regions,
    SET_USER
}) => {
    console.log(merit);
    console.log(basic);
    console.log(regions);
    // console.log(merit.education && merit.cooking && merit.disaster && merit.eco && merit.online
    //     && basic.age && basic.name && basic.region)

    /**
        * @description  초기가입자 안내 
        * */
    const [isNewbeModal, setIsNewbeModal] = useState(false)

    const handleNewbeModal = {
        show: () => setIsNewbeModal(true),
        close: () => setIsNewbeModal(false)
    }


    const closeNewbeModal = () => {
        handleNewbeModal.close()
        editForm.show()

    }

    /**
     * @description  유저 정보 초기 세팅
     * @param addRegion []
     * @param age string
     * @param email string
     * @param name string
     * @param region string
     * @param sex string
     */
    const [userBasicProfile, setUserBasicProfile] = useState({})

    /**
    * @description  유저 merit 정보 넣기
    * @param education t/f
    * @param cooking t/f
    * @param disaster t/f
    * @param eco t/f
    * @param online t/f
    */
    const [userMeritProfile, setUserMeritProfile] = useState({})

    /**
    * @description  myRegion plain options
    * */
    const [plainRegionOptions, setPlainRegionOptions] = useState([])
    /**
    * @description  myRegion plain options
    * */
    const plainAddRegionOptions = plainRegionOptions.filter(region => region !== userBasicProfile.region)

    useEffect(() => {
        setUserBasicProfile({ ...basic, role: role })
        setUserMeritProfile({ ...merit })
        if (regions) {
            setPlainRegionOptions([...regions])
        }
    }, [basic, merit, role, regions])

    useEffect(() => {
        if (!merit || !basic) {
            return console.log("!merit")
        }
        let counts = 0;
        for (let keys in merit) {
            if (merit[keys] === true) {
                if (counts >= 3) break;
                counts = counts + 1;
            }
        }
        if (counts >= 3) return console.log("already user!");
        else if (counts < 3 && basic.region === '') {
            console.log("newbe is here🐝")
            setIsNewbeModal(true)
        }
        console.log("?")
        console.log(basic.region)
        console.log(basic.region === '')
    }, [merit, basic])



    console.log(userBasicProfile)
    console.log(plainRegionOptions)
    console.log(plainAddRegionOptions)



    /**
         * @description BASIC 프로필수정   FUNCTION  */
    let editBasicProfileFunction = {
        age: (e) => {
            const age = e.target.value;
            return setUserBasicProfile((state) => ({ ...state, age: age }))
        },
        name: (e) => {
            const name = e.target.value;
            return setUserBasicProfile((state) => ({ ...state, name: name }))
        },
        region: (e) => {
            const region = e.target.value;
            return setUserBasicProfile((state) => ({ ...state, region: region }))
        },
        sex: (e) => {
            let sex = e.target.value;
            return setUserBasicProfile((state) => ({ ...state, sex: sex }))
        },
        addRegion: (list) => {
            console.log("list")
            console.log(list)
            return setUserBasicProfile((state) => ({ ...state, addRegion: list }));
        }
    }

    /**
     * @description merit 수정   FUNCTION  */
    let editMeritProfileFunction = {
        education: () => {
            (userMeritProfile.education === true) ?
                setUserMeritProfile((state) => ({ ...state, education: false })) :
                setUserMeritProfile((state) => ({ ...state, education: true }))
        },
        cooking: () => {
            (userMeritProfile.cooking === true) ?
                setUserMeritProfile((state) => ({ ...state, cooking: false })) :
                setUserMeritProfile((state) => ({ ...state, cooking: true }))
        },
        disaster: () => {
            (userMeritProfile.disaster === true) ?
                setUserMeritProfile((state) => ({ ...state, disaster: false })) :
                setUserMeritProfile((state) => ({ ...state, disaster: true }))
        },
        eco: () => {
            (userMeritProfile.eco === true) ?
                setUserMeritProfile((state) => ({ ...state, eco: false })) :
                setUserMeritProfile((state) => ({ ...state, eco: true }))
        },
        government: () => {
            (userMeritProfile.government === true) ?
                setUserMeritProfile((state) => ({ ...state, government: false })) :
                setUserMeritProfile((state) => ({ ...state, government: true }))
        },
        online: () => {
            (userMeritProfile.online === true) ?
                setUserMeritProfile((state) => ({ ...state, online: false })) :
                setUserMeritProfile((state) => ({ ...state, online: true }))
        },
    }

    //SECTION  변경 관련  CODE
    //true :  변경하는 form   false :   변경하는 form 닫기 
    const [isEditForm, setEditForm] = useState(false);

    //edit form handler
    const editForm = {
        show: () => setEditForm(true),
        close: () => setEditForm(false)
    }

    /**
    @description  변경하는 form open 
    @function buttonOnclick
    @btnValue   변경
    @detail  변경 form 열기 */
    const editShowOnclick = () => editForm.show()


    /**
    @description   변경후 저장하기
    @function buttonOnclick
    @btnValue  저장
    @detail   [POST] 하기  -> form close 하기*/
    const editCloseOnclick = () => {
        // TODO 백에 수정

        let settingMeritCount = 0;
        for (let keys in userMeritProfile) {
            if (userMeritProfile[keys] === true) {
                settingMeritCount = settingMeritCount + 1;
            }
        }
        console.log(settingMeritCount)
        if (settingMeritCount < 3) {
            return (
                notification['error']({
                    message: `${userBasicProfile.name}님 merit를 확인해주세요😥 `,
                    description: '3개이상의 merit를 선택해야 합니다.',
                })
            )
        }
        const settingUpdateData = {
            basic: {
                addRegion: userBasicProfile.addRegion,
                age: userBasicProfile.age,
                name: userBasicProfile.name,
                region: userBasicProfile.region,
                email: userBasicProfile.email,
                sex: userBasicProfile.sex
            },
            merit: {
                education: userMeritProfile.education,
                cooking: userMeritProfile.cooking,
                disaster: userMeritProfile.disaster,
                eco: userMeritProfile.eco,
                online: userMeritProfile.online,
                government: userMeritProfile.government
            }
        }
        console.log('"settingUpdateData"')
        console.log(settingUpdateData)
        editUser(uid, settingUpdateData).then((res) => {
            console.log('정보db저장성공');

            console.log(res);
            SET_USER({
                user: {
                    basic: userBasicProfile,
                    merit: userMeritProfile
                }
            })
            editForm.close();
        }).catch((e) => { console.log(e) })
    }
    //!SECTION



    return (
        <>
            <ProfileContent
                uid={uid}
                closeNewbeModal={closeNewbeModal}
                isNewbeModal={isNewbeModal}
                handleNewbeModal={handleNewbeModal}

                userBasicProfile={userBasicProfile}
                userMeritProfile={userMeritProfile}
                plainAddRegionOptions={plainAddRegionOptions}
                plainRegionOptions={plainRegionOptions}
                editBasicProfileFunction={editBasicProfileFunction}
                editMeritProfileFunction={editMeritProfileFunction}

                isEditForm={isEditForm}
                editShowOnclick={editShowOnclick}
                editCloseOnclick={editCloseOnclick}
            ></ProfileContent>
        </>
    )
}

export default ContentContainer