//NOTE CreateNotice CONTENT
import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { MeritIcon, LinkBtn, Divider, Typo, IframeBox, DetailNoticeForm, Btn } from "../../../../components"
import { Radio, Tooltip, Input, Checkbox } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { Row, Col, ContentStyle } from "../../../../layout"

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
const SetUrl = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "참고 url을 올려주세요",
}))`
  outline: none;
  cursor: text;
  font-size: 1.2rem;
  line-height: 2rem;
  width : 100%;
  margin-top:1rem;
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

const SetRegion = styled.div`
cursor : pointer;
display : flex;
flex-direction: row;
align-items: center;
`

const SubmitBtnWrapper = styled.div`
height : 60px;
width : 100%;
box-shadow: rgb(0 0 0 / 10%) 0px -5px 5px;
background: rgba(255, 255, 255, 0);
  display: flex;
  z-index : 2;
  align-items: center;
  justify-content: flex-end;
`
const BtnJustity = styled.div`
width : 50%;
display : flex;
align-items : center;
justify-content: space-around;
@media(max-width: 768px)
{ width : 100%; }
`


const CreateNoticeContent = ({
  userMeritProfile,
  editMeritProfileFunction,
  noticeData,

  createNoticeFunction,

  plainRegionsOptions,
  isNewRegionForm,
  handleNewRegion,
  noticeSubmit
}) => {

  const { title, url, merit, online, region, age } = noticeData;

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
      <ContentStyle style={{ height: 'max-content', padding: '0' }}>
        <Row>
          {/* SECTION  left 글쓰기 */}
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} span={6} align={'start'} style={{
            backgroundColor: 'white', minHeight: '100%',
            padding: '2rem 2rem 60px 2rem',
          }}>
            <Row>
              <Col span={12}>
                <CreateTextArea
                  onInput={handleResizeHeight}
                  rows={1}
                  ref={ref}
                  value={title}
                  onChange={createNoticeFunction.title}
                ></CreateTextArea>
              </Col>
              <Col span={12}>
                <Divider marginBottom={'1rem'} marginTop={'1.9rem'} radius={'1px'}
                  width={'4rem'} borderWidth={'6px'} color={'rgb(73, 80, 87)'}></Divider>
              </Col>
              <Col span={12}>
                <SetUrl value={url} onChange={createNoticeFunction.url}></SetUrl>
              </Col>
              <Col span={12}>
                <Divider marginBottom={'2.5rem'} marginTop={'1.9rem'} radius={'1px'}
                  width={'4rem'} borderWidth={'6px'} color={'rgb(73, 80, 87)'}></Divider>
              </Col>
              <Col span={12} justify={'center'} align={'center'}>
                <Typo size={"1.1rem"} color={'#9baacf'} weight={'550'} >중복선택은 온라인만 가능합니다.</Typo>
              </Col>
              <Col span={12} style={{ marginTop: "1.3rem" }}>
                <MeritIcon userMeritProfile={userMeritProfile} editMeritProfileFunction={editMeritProfileFunction}></MeritIcon>
              </Col>
              <Col span={12}>
                <Divider marginBottom={'2rem'} marginTop={'2.5rem'} radius={'1px'}
                  width={'4rem'} borderWidth={'6px'} color={'rgb(73, 80, 87)'}></Divider>
              </Col>
              <Col span={12}>
                <Typo size={"1.3rem"} weight={"bold"}>지역 입력</Typo>
              </Col>
              <Col span={12}>
                <Radio.Group
                  options={plainRegionsOptions}
                  value={noticeData.region}
                  onChange={createNoticeFunction.region}
                  optionType="button"
                  style={{ marginTop: 16 }}>
                </Radio.Group>
              </Col>
              <Col span={12} style={{ marginTop: '1rem' }} align={'center'}>
                <Tooltip placement="right" title="클릭하면 지역을 입력할 수 있습니다.">
                  <SetRegion onClick={handleNewRegion.RegionFormOpenClose}>
                    <Typo cursor={'pointer'} color={'#9baacf'}>원하는 지역이 없나요?</Typo>
                    <EditOutlined style={{ color: '#9baacf' }} />
                  </SetRegion>
                </Tooltip>
              </Col>
              {
                (isNewRegionForm) ?
                  <Col span={12} style={{ marginTop: 5 }}>
                    <Input.Search placeholder="원하는 지역 입력"
                      allowClear
                      enterButton={<CheckOutlined />}
                      onSearch={handleNewRegion.NewRegionSubmit}
                      style={{ width: 300 }}
                    />

                  </Col>
                  : null
              }

              <Col span={12}>
                <Divider marginBottom={'2rem'} marginTop={'2.5rem'} radius={'1px'}
                  width={'4rem'} borderWidth={'6px'} color={'rgb(73, 80, 87)'}></Divider>
              </Col>
              <Col span={12}>
                <Typo size={"1.3rem"} weight={"bold"}>봉사자 유형</Typo>
              </Col>

              <Col span={12} style={{ marginTop: '1rem' }} >
                <Checkbox.Group onChange={createNoticeFunction.age} value={noticeData.age}>
                  <Checkbox value={"teen"}>미성년자</Checkbox>
                  <Checkbox value={"adult"}>성인</Checkbox>
                </Checkbox.Group>
              </Col>

            </Row>
          </Col>
          {/* !SECTION  left 글쓰기 */}



          {/* SECTION  right 미리보기 */}
          <Col xs={0} sm={0} md={6} lg={6} xl={6} xxl={6} span={6} style={{
            overflowY: 'auto', wordBreak: 'break-word',
            padding: '2rem 2rem 60px 2rem', backgroundColor: 'rgb(251, 253, 252)', minHeight: 'calc(100vh - 7.5rem)',
            alignItems: 'start', boxShadow: 'rgb(0 0 0 / 15%) 0px -3px 8px'

          }}>
            <Row>
              <Col span={12}>
                {title ? (
                  <Typo weight={'bold'} full size={'2.3rem'} > {title}</Typo>
                ) : (
                  <Typo color={'#858585'}>생성 될 게시글의 제목을 미리 확인할 수 있습니다.</Typo>
                )}
              </Col>
              <Col span={12} style={{ marginTop: '1rem' }}>
                <DetailNoticeForm merit={merit} online={online} region={region} age={age} />
              </Col>
              {
                (title && url) ?
                  <Col span={12} style={{ marginTop: '1rem' }}>
                    {
                      url ? (
                        <IframeBox src={url} height={'50rem'}></IframeBox>
                      ) : (
                        <Typo color={'#858585'}>올바른 주소 입력시 게시글에 미리보기를 확인할 수 있습니다.</Typo>
                      )
                    }
                  </Col>
                  :
                  <Col span={12} style={{ marginTop: '1rem', minHeight: '57rem' }}>
                    {
                      url ? (
                        <IframeBox src={url} height={'50rem'}></IframeBox>
                      ) : (
                        <Typo color={'#858585'}>올바른 주소 입력시 게시글에 미리보기를 확인할 수 있습니다.</Typo>
                      )
                    }
                  </Col>
              }
            </Row>
          </Col>
          {/* !SECTION  right 미리보기 */}
        </Row >
      </ContentStyle>
      <Row style={{ height: 'auto' }}>
        <Col span={12}>
          <SubmitBtnWrapper>
            <BtnJustity>
              <LinkBtn linkName={"1365"} linkHref={'https://www.1365.go.kr/vols/main.do'} ></LinkBtn>

              <Btn types={'primary'} value={'게시글 작성'} onClick={noticeSubmit}></Btn>
            </BtnJustity>

          </SubmitBtnWrapper>
        </Col>
      </Row>
    </>
  );
};

export default CreateNoticeContent;
