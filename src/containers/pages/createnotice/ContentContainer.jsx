import React, { memo, useEffect, useState } from "react";
import CreateNoticeContent from "../../../components/organisms/CreateNotice/Content/index";
import postCreateFormNotice from "../../../service/api/post/post_create_form_notice";
import postCreateFileNotice from "../../../service/api/post/post_create_file_notice";

const ContentContainer = () => {
  //createnotice에서 관리할 모든 state / 함수

  /**
   * @description notice 만들떄 필요한 data */
  const [noticeData, setNoticeData] = useState({
    title: "",
    swurl: "",
    tags: [],
    startDate: null,
    endDate: null,
  });

  console.log(noticeData);

  const [newTag, setNewTag] = useState("");

  /**
@description tag 다루는 함수
@function tagCreate
@function tagAdd 
@function tagDelete */
  const handleTags = {
    changetag: (e) => {
      setNewTag(e.target.value);
    },
    add: (e) => {
      if (e.key === "Enter") {
        console.log(newTag);
        const pushTags = [...noticeData.tags, newTag];
        setNoticeData((state) => ({ ...state, tags: pushTags }));
        setNewTag("");
      }
    },
    delete: (e) => {
      console.log(e.target.innerText);
      console.log(noticeData.tags);
      const deleteTag = noticeData.tags.filter(
        (tag) => tag !== e.target.innerText
      );
      console.log(deleteTag);
      setNoticeData((state) => ({ ...state, tags: deleteTag }));
    },
  };

  /**
   * @description noticeCreate  입력  FUNCTION  */
  let createNoticeFunction = {
    title: (e) => {
      const title = e.target.value;
      return setNoticeData((state) => ({ ...state, title: title }));
    },
    swurl: (e) => {
      const swurl = e.target.value;
      return setNoticeData((state) => ({ ...state, swurl: swurl }));
    },
    tag: (e) => {
      const tags = e.target.value;
      return setNoticeData((state) => ({ ...state, tags: tags }));
    },
    startDate: (e) => {
      const startDate = e.target.value;
      return setNoticeData((state) => ({ ...state, startDate: startDate }));
    },
    endDate: (e) => {
      const endDate = e.target.value;
      return setNoticeData((state) => ({ ...state, endDate: endDate }));
    },
  };

  /**
    @description   제출하기 버튼 OnClick 
    @function buttonOnclick
    @btnValue 제출하기
    @detail  requestData 형식으로 맞추고 post  */

  //Form
  const formSubmitOnclick = () => {
    postCreateFormNotice(
      JSON.stringify({
        name: noticeData.title,
        swurl: noticeData.swurl,
        tag1: noticeData.tags[0] || null,
        tag2: noticeData.tags[1] || null,
        tag3: noticeData.tags[2] || null,
        startDay: noticeData.startDate,
        destDay: noticeData.endDate,
      })
    )
      .then((res) => {
        console.log("게시글 올리기 성공");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  //File
  const fileSubmitOnclick = () => {
    postCreateFileNotice(
      JSON.stringify({
        name: noticeData.title,
        swurl: noticeData.swurl,
        tag1: noticeData.tags[0] || null,
        tag2: noticeData.tags[1] || null,
        tag3: noticeData.tags[2] || null,
        startDay: noticeData.startDate,
        destDay: noticeData.endDate,
      })
    )
      .then((res) => {
        console.log("게시글 올리기 성공");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const [userMeritProfile, setUserMeritProfile] = useState({})
  useEffect(() => {
    setUserMeritProfile({ active: false, animal: false, disaster: false, farming: false, online: false })
  }, [])
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
  return (
    <>
      <CreateNoticeContent
        //props로 넘겨주기
        userMeritProfile={userMeritProfile}
        editMeritProfileFunction={editMeritProfileFunction}
        noticeData={noticeData}
        handleTags={handleTags}
        newTag={newTag}
        createNoticeFunction={createNoticeFunction}
        formSubmitOnclick={formSubmitOnclick}
        fileSubmitOnclick={fileSubmitOnclick}
      ></CreateNoticeContent>
    </>
  );
};

export default memo(ContentContainer);
