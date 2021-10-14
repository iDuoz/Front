import React, { memo, useEffect, useState } from "react";
import CreateNoticeContent from "../../../components/organisms/CreateNotice/Content/index";
import addRegion from "../../../service/firebase/database/addRegion";
import addNotices from "../../../service/firebase/database/addNotices"
import { notification } from 'antd';
import { useHistory } from "react-router-dom"

const ContentContainer = ({
  uid,
  role,
  regions,
  SET_REGION,
}) => {
  //createnotice에서 관리할 모든 state / 함수
  const history = useHistory()
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
    setUserMeritProfile({ education: false, cooking: false, disaster: false, eco: false, online: false })
  }, [])
  let editMeritProfileFunction = {
    education: () => {
      if (userMeritProfile.education === true) {
        setUserMeritProfile((state) => ({ ...state, education: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.education === false) {
        setUserMeritProfile((state) => ({ ...state, education: true, cooking: false, disaster: false, eco: false }))
        setNoticeData((state) => ({ ...state, merit: "education" }))
      }
    },
    cooking: () => {
      if (userMeritProfile.cooking === true) {
        setUserMeritProfile((state) => ({ ...state, cooking: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.cooking === false) {
        setUserMeritProfile((state) => ({ ...state, cooking: true, active: false, disaster: false, eco: false }))
        setNoticeData((state) => ({ ...state, merit: "cooking" }))
      }
    },
    disaster: () => {
      if (userMeritProfile.disaster === true) {
        setUserMeritProfile((state) => ({ ...state, disaster: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.disaster === false) {
        setUserMeritProfile((state) => ({ ...state, disaster: true, active: false, cooking: false, eco: false }))
        setNoticeData((state) => ({ ...state, merit: "disaster" }))
      }

    },
    eco: () => {
      if (userMeritProfile.eco === true) {
        setUserMeritProfile((state) => ({ ...state, eco: false }))
        setNoticeData((state) => ({ ...state, merit: "" }))
      }
      if (userMeritProfile.eco === false) {
        setUserMeritProfile((state) => ({ ...state, eco: true, active: false, cooking: false, disaster: false }))
        setNoticeData((state) => ({ ...state, merit: "eco" }))
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

  const noticeSubmit = () => {
    // console.log(setNoticeData)
    // console.log(setNoticeData.age && setNoticeData.merit && setNoticeData.title && setNoticeData.region && true)
    (noticeData.age && noticeData.merit && noticeData.title && noticeData.region && true) ?
      addNotices({
        age: noticeData.age,
        merit: noticeData.merit,
        online: noticeData.online,
        title: noticeData.title,
        region: noticeData.region,
        url: noticeData.url
      })
        .then((res) => {
          console.log(res)
          console.log('notice update 성공')
          history.push('/')
          // home으로 이동
        })
        .catch((e) => { console.log(e) })
      : notification['error']({
        message: `notice 추가 실패😥 `,
        description: '모든값을 입력해 주세요',
      });

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
        noticeSubmit={noticeSubmit}
      ></CreateNoticeContent>
    </>
  );
};

export default memo(ContentContainer);
