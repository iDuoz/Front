
import React from 'react'
import styled from 'styled-components'
import Col from '../../../layout/Grid/Column'
import Row from '../../../layout/Grid/Row'
import { VscClose } from "react-icons/vsc";



const ModalWrapper = styled.div`
  /* display : ${props => (props.visible) ? `flex` : `none`}; */
  visibility :hidden;
  display:none;

  justify-content: center;
  align-items: center;
  flex-direction : column;
  top:0;
  right : 0;
  left : 0;
  bottom : 0;
  position : fixed;
  /* background-color: rgba(228 ,235 ,245,0.7); */
  background-color: rgba(255 ,255 ,255,0.4);
  z-index : ${props => (props.zIndex) - 1 || 100};
  opacity: 0;
 
  ${props => (props.visible) ? `
  display : flex;
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
  transition-duration: 0.3s, 0s;
  transition :display 0.25s ease;
  `:
        null
    };
 `



const ModalContainer = styled.div`
  flex-direction : column;
  justify-content: center;
  align-items: center;
  width : 100%; 
  height : auto;
  max-height : 60%;
  /* background-color : #e4ebf5; */
  background-color : #ecf0f3;
  border-radius: 3rem;
  visibility: hidden;
    transition:display 0.4s ease  0s;
 // antd
  position : relative;
  margin : auto auto;
  box-shadow: 0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #FFFFFF;
 z-index : ${props => (props.zIndex) || null};
 ${props => (props.visible) ? `
display:flex;
animation: modalComeIn 0.25s ease;
  visibility: visible;

  @keyframes modalComeIn {
  0% {
    visibility: hidden;
    opacity: 0;
    -moz-transform: scale(0.8, 0.8);
    -ms-transform: scale(0.8, 0.8);
    -webkit-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8);
  }
  65.5% {
    -moz-transform: scale(1.03, 1.03);
    -ms-transform: scale(1.03, 1.03);
    -webkit-transform: scale(1.03, 1.03);
    transform: scale(1.03, 1.03);
  }
  100% {
    visibility: visible;
    opacity: 1;
    -moz-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}`
        :
        null}

 `


const CloseButton = styled.button`
 position : absolute;
 top : 0;
 right : 0;
 padding : 0;
 border-top-right-radius: 3rem;
 padding-right: 1rem;
 padding-top:1rem ;
 background-color : #ecf0f3;
 border : 0;
 outline : 0;
 cursor : pointer;
 display :block;
 width : 50px;
 height : 50px;
 
 `

const ModalHeader = styled.div`
 display : ${props => (props.headerClose) ? `none` : `flex`};
 border-top-left-radius: 3rem;
 border-top-right-radius: 3rem;
 padding: 16px 24px;
 color: rgba(0,0,0,.85);
 background-color : #ecf0f3;
 border-bottom: 1px solid #f0f0f0;
 line-height: 22px;
 font-size: 16px;
 font-weight: 600;
 width : 100%;
 box-sizing : border-box;
 min-height : 52px;
 `


const ModalContent = styled.div`
position: relative;
 padding: 24px;
 width : inherit;
 box-sizing : border-box;
`


const stopBubbling = (e) => {
    e.stopPropagation()
}

/**
 * @param title - modal title
 * @param visible true - open Modal / false - close Modal
 * @param closable true - 닫기 버튼 있음 / false - 닫기버튼 없음
 * @param maskClosable true - 배경 클릭시 모달 꺼짐 / false - 배경 클릭시 모달 안꺼짐
 * @param onClose - 모달 닫는 함수넣어주기 
 * @param size - 가로 크기 조절 
 * @param children 컴포넌트 테그 사이에 값을 조회
 * @param headerClose - 헤더안보이게
 * @see antD Modal (사용법 antD 참조)
 */
const Modal = ({ zIndex, headerClose, title, visible, closable, maskClosable,
    onClose, children, size, xs, sm, md, lg, xl, xxl }) => {



    return (
        <>
            <ModalWrapper
                zIndex={zIndex}
                visible={visible}
                onClick={maskClosable ? onClose : null}
            >
                <Row justify="center">
                    <Col span={size} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>

                        <ModalContainer
                            visible={visible}
                            onClick={stopBubbling}
                        >
                            {closable && <CloseButton onClick={onClose}><VscClose></VscClose></CloseButton>}

                            <ModalHeader headerClose={headerClose} >
                                {title}
                            </ModalHeader>

                            <ModalContent visible={visible}>
                                {headerClose && closable && <CloseButton onClick={onClose}><VscClose></VscClose></CloseButton>}
                                {children}
                            </ModalContent>
                        </ModalContainer>
                    </Col>
                </Row>

            </ModalWrapper>
        </>
    )
}

export default Modal;