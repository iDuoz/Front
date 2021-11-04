import React from 'react'
import './GuideMeritForm.css'


const GuideMeritForm = () => {


    return (

        <div class="section-2">
            <div class="guide-wrap">
                <div class="txt-title-box ani">
                    <span>
                        <em>쇼핑몰 운영의 <br />모든 순간이 <br />간편해져요.</em>
                        <svg class="icon-svg" version="1.1" width="190" height="20" xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink">
                            <path fill="none" fill-rule="evenodd" stroke="#F7444E" stroke-linecap="round" stroke-width="3" class="draw-line"
                                d="M2 10c4-3.333 8-5 12-5 6 0 14 6 19 6s15-7 24-7 18 6 26 6 13-6 20-6 16 6 25 6 13-6 18-6 12 6 21 5c6-.667 12.333-3 19-7" />
                        </svg>
                    </span>
                </div>
                <span class="txt-sb-tit">판매에만 집중할 수 있도록 필요한<br />모든 서비스를 제공해요.</span>
                <div class="service-cont">
                    <a href="/" class="item-box pot-1 scrollMotion on">
                        <span class="svc-txt-1">결제서비스</span>
                        <span class="svc-txt-2">다양한 결제기능을 제공하는<br />쇼핑몰 필수 서비스</span>
                        <span class="btn-detail">자세히보기</span>
                    </a>
                    <a href="/" class="item-box pot-2 scrollMotion on">
                        <span class="svc-txt-1">디자인 센터</span>
                        <span class="svc-txt-2">잘나가는 쇼핑몰에 딱 맞는<br />특별한 디자인</span>
                        <span class="btn-detail">자세히보기</span>
                    </a>
                    <a href="/" target="_blank" class="item-box pot-3 scrollMotion on" rel="noreferrer">
                        <span class="svc-txt-1">도메인 등록</span>
                        <span class="svc-txt-2">빠르고 편리하게 도메인 등록</span>
                        <span class="btn-detail" >자세히보기</span>
                    </a>
                    <a href="/" class="item-box pot-4 scrollMotion on">
                        <span class="svc-txt-1">이용가이드</span>
                        <span class="svc-txt-2">솔루션을 통한 쇼핑몰 창업과 운영에<br />꼭 필요한 가이드</span>
                        <span class="btn-detail">자세히보기</span>
                    </a>
                    <a href="/" class="item-box pot-5 scrollMotion on">
                        <span class="svc-txt-1">부가서비스</span>
                        <span class="svc-txt-2">이커머스에 특화된 부가서비스</span>
                        <span class="btn-detail">자세히보기</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GuideMeritForm
