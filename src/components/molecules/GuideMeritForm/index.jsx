import React from 'react'
import styled from "styled-components"
import { Img, Typo, MeritIcon } from "../../index"
import { Col, Row } from "../../../layout/index"
import merit_education from "../../../assets/icons/merit_education.png"
import merit_education_color from "../../../assets/icons/merit_education_color.png"
import merit_cooking_color from "../../../assets/icons/merit_cooking_color.png"
import merit_cooking from "../../../assets/icons/merit_cooking.png"
import merit_disaster_color from "../../../assets/icons/merit_disaster_color.png"
import merit_disaster from "../../../assets/icons/merit_disaster.png"
import merit_eco_color from "../../../assets/icons/merit_eco_color.png"
import merit_eco from "../../../assets/icons/merit_eco.png"
import merit_government_color from "../../../assets/icons/merit_government_color.png"
import merit_government from "../../../assets/icons/merit_government.png"
// merit_online_color
import merit_online_color from "../../../assets/icons/merit_online_color.png"
import merit_online from "../../../assets/icons/merit_online.png"

import Speechbubble from "../../../assets/images/speechbubble.png"
import TopSpeechbubble from "../../../assets/images/Topspeechbubble.png"
import girl from "../../../assets/images/girl.png"
import boy from "../../../assets/images/boy.png"
// 70px -> 5em
// service-cont

const GuideMeritWrapper = styled.div`
height : 75em;
box-sizing : border-box;
padding : 2em 0;
background-color : #edeff2;
width : 100%;
display : flex;
transition: all 1s;
justify-content: center;
@media (max-width: 830px) {
    height : auto;
}
`
const GuideMeritPosition = styled.div`
position: relative;
width : 98em;
height : 100%;
@media (max-width: 1415px) {
        font-size: 10px;
    };

@media (max-width: 1024px) {
        font-size: 8px;
      };

@media (max-width: 768px) {
        font-size: 8px;
    };

@media (max-width: 830px) {
    display : flex;
    flex-direction: column;
    justify-content: center;
    height : auto;
    width : 100%;
    align-items : center;
    };
`


const TitleBox = styled.div`
position : relative;
display : flex;
margin-top : 1em;
margin-left : 7em;
flex-direction : column;
@media (max-width : 500px){
          margin : 0;
      }
`
const FlexDirTItleBox = styled.div`
display : flex;
`
const MeritBoxContainer = styled.div`
@media (max-width: 830px) {
        font-size: 8px;
        display : flex;
        width : 80%;
        justify-content: space-around;
        align-items: center;
        padding : 2.5em 0;
      };
`
const MeritBox = styled.div`

cursor : pointer;
position : absolute;
transition: all 1s;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
  width: 14em;
  height: 22em;

  padding: 1em;
  box-sizing: border-box;
    border-radius: 4px;
  /* box-shadow: 0.4em 0.3em 0.9em #454545; */
  box-shadow: 0.3em 0.3em 0.6em #c7c7c7, -0.2em -0.2em 0.5em #FFFFFF;
  background: #edeff2;
  transition: all 1s;
    ${props => `
       left : ${props.left};
       top : ${props.top};
   `}
   &:hover{
    cursor : pointer;
    transform: translate(0px, -20px);
   };
   opacity: 0;
   ${props => (props.inview === true) ?
        `
    transition-delay : ${props.index * 0.2}s;
    transform: translateY(0px);
    opacity: 1;
`
        : null};
        
        @media (max-width: 830px) {
        font-size: 8px;
        display : flex;
        position: static;

      };
      @media (max-width : 500px){
          font-size : 5px;
      }
`

const MeritBoxDescription = styled.div`
 @media (max-width : 500px){
          display : none;
      }
`

const PeopleMerit = styled.div`
position : absolute;
transition: all 1s;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
  width: 35em;
  height: 50em;
  opacity: 0;
  transform: translateY(20px);
  right : 0;
  /* box-shadow: 0.3em 0.3em 0.6em #c7c7c7, -0.2em -0.2em 0.5em #FFFFFF; */
  ${props => `
    //    left : ${props.left};
       top : ${props.top};
   `}
  ${props => (props.inview === true) ?
        `
    transition-delay :1.2s;
    transform: translateY(0px);
    opacity: 1;
`
        : null};
        @media (max-width: 1300px) {
            top : 35em;
            /* left : 54em; */
      }
      @media (max-width: 830px) {
        font-size: 8px;
        display : flex;
        position: static;
        width : 50%;
        height: auto;
      };
      @media (max-width : 500px){
          font-size : 5px;
          width : 80%;
          padding: 10px 0;
      }
`


const GuideMeritForm = ({ setInView, editonclickMeritFunction,
    onclickMerit }) => {


    return (
        <Col span={12}>
            <GuideMeritWrapper>
                <GuideMeritPosition>
                    <TitleBox>
                        <FlexDirTItleBox>
                            <Typo fontFamily={'Jalnan'} size={'3.5em'} color={'#000000'} weight={'400'}>
                                What is&nbsp;
                            </Typo>
                            <Typo fontFamily={'Jalnan'} size={'5em'} color={'#ff4d4f'} weight={'400'}>
                                Merit?
                            </Typo>
                        </FlexDirTItleBox>
                        <FlexDirTItleBox>
                            <Typo size={'1.3em'} color={'#595959'} fontFamily={'Gong'} weight={'100'}>
                                meritshare에서 merit는 <br />
                                나만의 장점과 관심분야를 뜻합니다. <br />

                            </Typo>
                        </FlexDirTItleBox>
                    </TitleBox>
                    <MeritBoxContainer >
                        <MeritBox onClick={editonclickMeritFunction.education} inview={setInView} top={'0em'} left={'66em'} index={1}>
                            {
                                (onclickMerit.education) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            교육관련
                                        </Typo>
                                        <Img src={merit_education_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>

                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            교육관련
                                        </Typo>
                                        <Img src={merit_education} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                        <MeritBox onClick={editonclickMeritFunction.cooking} inview={setInView} top={'10em'} left={'44em'} index={2}>
                            {
                                (onclickMerit.cooking) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            cooking
                                        </Typo>
                                        <Img src={merit_cooking_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            cooking
                                        </Typo>
                                        <Img src={merit_cooking} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                        <MeritBox onClick={editonclickMeritFunction.disaster} inview={setInView} top={'20em'} left={'20em'} index={3}>
                            {
                                (onclickMerit.disaster) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            disaster
                                        </Typo>
                                        <Img src={merit_disaster_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            disaster
                                        </Typo>
                                        <Img src={merit_disaster} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                    </MeritBoxContainer >
                    <MeritBoxContainer >
                        <MeritBox onClick={editonclickMeritFunction.online} inview={setInView} top={'30em'} left={'0em'} index={4}>
                            {
                                (onclickMerit.online) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            online
                                        </Typo>
                                        <Img src={merit_online_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            online
                                        </Typo>
                                        <Img src={merit_online} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                        <MeritBox onClick={editonclickMeritFunction.government} inview={setInView} top={'50em'} left={'17em'} index={6}>
                            {
                                (onclickMerit.government) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            government
                                        </Typo>
                                        <Img src={merit_government_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            government
                                        </Typo>
                                        <Img src={merit_government} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                        <MeritBox onClick={editonclickMeritFunction.eco} inview={setInView} top={'40em'} left={'38em'} index={5}>
                            {
                                (onclickMerit.eco) ?
                                    <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#ff4d4f'} weight={'bold'}>
                                            eco
                                        </Typo>
                                        <Img src={merit_eco_color} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </> : <>
                                        <Typo fontFamily={'Jalnan'} size={'2em'} color={'#000000'} weight={'100'}>
                                            eco
                                        </Typo>
                                        <Img src={merit_eco} width={'7em'}></Img>
                                        <MeritBoxDescription>
                                            <Typo fontFamily={'Gong'} size={'0.9em'} color={'#000000'} weight={'100'}>
                                                찾을 수 있도록 봉사를 추천해주는 서비스입니다.
                                            </Typo>
                                        </MeritBoxDescription>
                                    </>
                            }
                        </MeritBox>
                    </MeritBoxContainer >

                    <PeopleMerit inview={setInView} top={'25em'} left={'60em'} index={5}>
                        <Img src={TopSpeechbubble} width={'100%'}></Img>
                        <Typo fontFamily={'Gong'} size={'1em'} color={'#000000'} weight={'100'}>
                            merit 선택 예시 입니다.
                        </Typo>
                        <MeritIcon userMeritProfile={onclickMerit} editMeritProfileFunction={editonclickMeritFunction} ></MeritIcon>
                        <Img src={Speechbubble} width={'100%'}></Img>
                        <Img src={girl} width={'7em'}></Img>
                    </PeopleMerit>

                </GuideMeritPosition>
            </GuideMeritWrapper >
        </Col >

    )
}

export default GuideMeritForm
