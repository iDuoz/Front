import React, { memo, useEffect, useState } from "react";
import CreateNoticeContent from "../../../components/organisms/CreateNotice/Content/index";
import addRegion from "../../../service/firebase/database/addRegion";
import { notification } from 'antd';
const ContentContainer = ({
  uid,
  role,
  regions,
  SET_REGION,
}) => {
  //createnotice에서 관리할 모든 state / 함수

  /**
   * @description notice 만들떄 필요한 data */
  const [noticeData, setNoticeData] = useState({
    title: "",
    url: "",
    merit: "",
    online: false,
    region: "",
    age: [],
  });

  console.log(noticeData);

  const [plainRegionsOptions, setPlaneRegionOptions] = useState([])


  useEffect(() => {
    if (regions) {
      setPlaneRegionOptions([...regions])
    }
  }, [regions])


  const [isNewRegionForm, setIsNewRegionForm] = useState(false);


  const [newRegion, setNewRegion] = useState("");


  /**
@description new Region
@function RegionFormOpenClose
@function NewRegionOnChange 
@function NewRegionSubmit
*/
  const handleNewRegion = {
    RegionFormOpenClose: () => {
      isNewRegionForm ? setIsNewRegionForm(false) : setIsNewRegionForm(true)
    },
    NewRegionSubmit: (value) => {
      setNewRegion(value)
      console.log(newRegion)
      if (regions.includes(value)) {
        return notification['error']({
          message: `이미 등록된 지역입니다.😥 `,
          description: '지역을 선택해주세요',
        })
      }

      addRegion(value);
      setNewRegion("");
      setNoticeData((state) => ({ ...state, region: value }))
      setIsNewRegionForm(false);
      SET_REGION(({
        region: [...plainRegionsOptions, value]
      }))
    },
  };

  /**
   * @description noticeCreate  입력  FUNCTION  */
  let createNoticeFunction = {
    title: (e) => {
      const title = e.target.value;
      return setNoticeData((state) => ({ ...state, title: title }));
    },
    url: (e) => {
      const url = e.target.value;
      return setNoticeData((state) => ({ ...state, url: url }));
    },
    region: (e) => {
      const region = e.target.value;
      return setNoticeData((state) => ({ ...state, region: region }));
    },
    age: (list) => {
      return setNoticeData((state) => ({ ...state, age: list }))
    }
  };


  const [userMeritProfile, setUserMeritProfile] = useState({})
  useEffect(() => {
    setUserMeritProfile({ active: false, animal: false, disaster: false, farming: false, online: false })
  }, [])
  let editMeritProfileFunction = {
    active: () => {
      if (userMeritProfile.active === true) {
        setUserMeritProfile((state) => ({ ...state, active: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.active === false) {
        setUserMeritProfile((state) => ({ ...state, active: true, animal: false, disaster: false, farming: false }))
        setNoticeData((state) => ({ ...state, merit: "active" }))
      }
    },
    animal: () => {
      if (userMeritProfile.animal === true) {
        setUserMeritProfile((state) => ({ ...state, animal: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.animal === false) {
        setUserMeritProfile((state) => ({ ...state, animal: true, active: false, disaster: false, farming: false }))
        setNoticeData((state) => ({ ...state, merit: "animal" }))
      }
    },
    disaster: () => {
      if (userMeritProfile.disaster === true) {
        setUserMeritProfile((state) => ({ ...state, disaster: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.disaster === false) {
        setUserMeritProfile((state) => ({ ...state, disaster: true, active: false, animal: false, farming: false }))
        setNoticeData((state) => ({ ...state, merit: "disaster" }))
      }

    },
    farming: () => {
      if (userMeritProfile.farming === true) {
        setUserMeritProfile((state) => ({ ...state, farming: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.farming === false) {
        setUserMeritProfile((state) => ({ ...state, farming: true, active: false, animal: false, disaster: false }))
        setNoticeData((state) => ({ ...state, merit: "farming" }))
      }
    },
    online: () => {
      if (userMeritProfile.online === true) {
        setUserMeritProfile((state) => ({ ...state, online: false }))
        setNoticeData((state) => ({ ...state, online: false }))
      }
      if (userMeritProfile.online === false) {
        setUserMeritProfile((state) => ({ ...state, online: true }))
        setNoticeData((state) => ({ ...state, online: true }))
      }
    },
  }
  return (
    <>
      <CreateNoticeContent
        //props로 넘겨주기
        noticeData={noticeData}
        handleNewRegion={handleNewRegion}
        isNewRegionForm={isNewRegionForm}
        userMeritProfile={userMeritProfile}
        editMeritProfileFunction={editMeritProfileFunction}

        createNoticeFunction={createNoticeFunction}
        plainRegionsOptions={plainRegionsOptions}
      ></CreateNoticeContent>
    </>
  );
};

export default memo(ContentContainer);
