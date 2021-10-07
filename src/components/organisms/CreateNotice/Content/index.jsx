//NOTE CreateNotice CONTENT
import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { MeritIcon } from "../../../../components"
import { Row, Col } from "../../../../layout"
const CreateNoticeWrapper = styled.div`
  width: 100%;
  height : 100%;
  height: calc(100% - 6rem);
  display: flex;
  animation: 0.5s ease 0s 1 normal forwards running Tags;
  position : absolute;
  @keyframes Tags {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CreateArea = styled.div`
  background-color: white;
  min-width: 0px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
  padding: 2rem 3rem 3rem;
`;

const CreateTextArea = styled.textarea.attrs((props) => ({
  placeholder: "제목을 입력하세요",
}))`
  min-height: 2.6rem;
  display: block;
  padding: 0px;
  font-size: 2.3rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: rgb(33, 37, 41);
  ::placeholder {
    color: #adb5bd;
  }
`;
const CreateDivider = styled.div`
  ${(props) => (props.blank ? null : `background: rgb(73, 80, 87)`)};
  height: 6px;
  width: 4rem;
  margin-top: 1.9rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

const CreateTagWrapper = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
`;

const FixedTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: rgb(241, 243, 245);
  color: rgb(12, 166, 120);
  margin-right: 0.75rem;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  margin-bottom: 0.75rem;
  animation-duration: 0.125s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-name: Tags;
  @keyframes Tags {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;




const WarningTag = styled.div`
  color: #858585;
  font-size: ${(props) => props.size || "1rem"};
  cursor: default;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SetUrl = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "참고 url을 올려주세요",
}))`
  outline: none;
  cursor: text;
  font-size: 1.2rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  border: none;

  &:focus {
    outline: none;

    border: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 50%,
      #cae3f8 50%
    );
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: Tags;
    @keyframes Tags {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
const SubmitBtnWrapper = styled.div`
  height: 4rem;
  width: 100%;
  position: absolute;

  left: 0;
  bottom: 0;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SubmitBtn = styled.div`
  margin : 0 5px;
  height: 2.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(15, 140, 255);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  &:hover {
    background: rgb(15, 140, 255, 0.8);
  }
`;




const PreviewArea = styled.div`
  min-width: 0px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  word-break: break-word;
  padding: 2rem 3rem 0 3rem;
  background-color: rgb(251, 253, 252);
`;
const PreviewTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  margin-bottom: 1rem;
  font-size: 2.3rem;
  width: 100%;
  font-weight: bold;
  color: rgb(33, 37, 41);
`;

const PreviewSwurl = styled.iframe.attrs((props) => ({
  src: props.src,
}))`
  min-height: 40rem;
  width: auto;
  border: none;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const CreateNoticeContent = ({
  userMeritProfile,
  editMeritProfileFunction,
  noticeData,
  handleTags,
  createNoticeFunction,
  newTag,
  formSubmitOnclick,
  fileSubmitOnclick,
}) => {
  const { title, swurl, tags } = noticeData;

  const ref = useRef(null);
  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = "2.5rem";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  return (
    <>
      <CreateNoticeWrapper>
        {/* CreateNotice 관련 component */}
        {/* SECTION 게시글 작성하기 */}
        <CreateArea>
          <CreateTextArea
            onInput={handleResizeHeight}
            rows={1}
            ref={ref}
            value={title}
            onChange={createNoticeFunction.title}
          ></CreateTextArea>
          <CreateDivider></CreateDivider>
          <SetUrl value={swurl} onChange={createNoticeFunction.swurl}></SetUrl>
          <CreateDivider></CreateDivider>
          <Row style={{ marginTop: '1rem' }}>
            <Col span={8}>
              <MeritIcon userMeritProfile={userMeritProfile} editMeritProfileFunction={editMeritProfileFunction} ></MeritIcon>
            </Col>
          </Row>


          <CreateDivider></CreateDivider>


          <SubmitBtnWrapper>

            <div style={{
              display: "flex",

            }}>
              <SubmitBtn onClick={formSubmitOnclick}>Form 제출</SubmitBtn>
              <SubmitBtn onClick={fileSubmitOnclick}>File 제출</SubmitBtn>
            </div>
          </SubmitBtnWrapper>
        </CreateArea>
        {/*! SECTION  */}

        {/* SECTION 게시글 미리보기 */}
        <PreviewArea>
          {title ? (
            <PreviewTitle>{title}</PreviewTitle>
          ) : (
            <WarningTag>
              생성 될 게시글의 제목을 미리 확인할 수 있습니다.{" "}
            </WarningTag>
          )}

          <CreateTagWrapper>
            {tags.map((tag, index) => {
              return (
                <FixedTag
                  key={index}
                  value={newTag}
                  onClick={handleTags.delete}
                >
                  {tag}
                </FixedTag>
              );
            })}
          </CreateTagWrapper>
          {swurl ? (
            <PreviewSwurl src={swurl}></PreviewSwurl>
          ) : (
            <WarningTag>
              올바른 주소 입력시 게시글에 미리보기를 확인할 수 있습니다.
            </WarningTag>
          )}
        </PreviewArea>
        {/*! SECTION 게시글  */}
      </CreateNoticeWrapper>
    </>
  );
};

export default CreateNoticeContent;
