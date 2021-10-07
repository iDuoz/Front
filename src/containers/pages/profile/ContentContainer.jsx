import React, { useEffect, useState } from 'react'
import { ProfileContent } from '../../../components'




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
    console.log(true && true && true && true && true)
    // console.log(merit.active && merit.animal && merit.disaster && merit.farming && merit.online
    //     && basic.age && basic.name && basic.region)



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
    * @param active t/f
    * @param animal t/f
    * @param disaster t/f
    * @param farming t/f
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
        email: (e) => {
            const email = e.target.value;
            return setUserBasicProfile((state) => ({ ...state, email: email }))
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
        active: () => {
            (userMeritProfile.active === true) ?
                setUserMeritProfile((state) => ({ ...state, active: false })) :
                setUserMeritProfile((state) => ({ ...state, active: true }))
        },
        animal: () => {
            (userMeritProfile.animal === true) ?
                setUserMeritProfile((state) => ({ ...state, animal: false })) :
                setUserMeritProfile((state) => ({ ...state, animal: true }))
        },
        disaster: () => {
            (userMeritProfile.disaster === true) ?
                setUserMeritProfile((state) => ({ ...state, disaster: false })) :
                setUserMeritProfile((state) => ({ ...state, disaster: true }))
        },
        farming: () => {
            (userMeritProfile.farming === true) ?
                setUserMeritProfile((state) => ({ ...state, farming: false })) :
                setUserMeritProfile((state) => ({ ...state, farming: true }))
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

    //이름 form handler
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
        editForm.close()
    }
    //!SECTION



    return (
        <>
            <ProfileContent
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