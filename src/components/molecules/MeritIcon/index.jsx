import React from "react"
import { Icon, Img } from "../../index";
import { Col, Row } from "../../../layout";
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


const MeritIcon = ({ userMeritProfile, editMeritProfileFunction, blockClick }) => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <Row justify={'space-between'} align={'center'} >
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.education) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'교육관련'} >
                                            <Img src={merit_education_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} weight={'500'} justIcon value={'교육관련'}>
                                            <Img src={merit_education} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.education) ?
                                        <Icon direction={'column'} size={'7rem'}
                                            value={'교육관련'} onClick={editMeritProfileFunction.education}>
                                            <Img src={merit_education_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} weight={'500'}
                                            value={'교육관련'} onClick={editMeritProfileFunction.education}>
                                            <Img src={merit_education} width={'5rem'}></Img>
                                        </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.cooking) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'요리조아'}>
                                            <Img src={merit_cooking_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} value={'요리조아'} justIcon weight={'500'}>
                                            <Img src={merit_cooking} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.cooking) ?
                                        <Icon direction={'column'} size={'7rem'} value={'요리조아'}
                                            onClick={editMeritProfileFunction.cooking}>
                                            <Img src={merit_cooking_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} value={'요리조아'} weight={'500'}
                                            onClick={editMeritProfileFunction.cooking}>
                                            <Img src={merit_cooking} width={'5rem'}></Img>
                                        </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.disaster) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'}>
                                            <Img src={merit_disaster_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'재난관련'} weight={'500'}>
                                            <Img src={merit_disaster} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.disaster) ?
                                        <Icon direction={'column'} size={'7rem'} value={'재난관련'}
                                            onClick={editMeritProfileFunction.disaster}>
                                            <Img src={merit_disaster_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} value={'재난관련'} weight={'500'}
                                            onClick={editMeritProfileFunction.disaster}>
                                            <Img src={merit_disaster} width={'5rem'}></Img>
                                        </Icon>
                            }
                        </Col>
                    </Row>
                </Col>
                <Col span={12} style={{ marginTop: '15px' }}>
                    <Row justify={'space-between'} align={'center'}>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.eco) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'}>
                                            <Img src={merit_eco_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'환경조아'} weight={'500'}>
                                            <Img src={merit_eco} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.eco) ?
                                        <Icon direction={'column'} size={'7rem'} value={'환경조아'}
                                            onClick={editMeritProfileFunction.eco}>
                                            <Img src={merit_eco_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} value={'환경조아'} weight={'500'}
                                            onClick={editMeritProfileFunction.eco}>
                                            <Img src={merit_eco} width={'5rem'}></Img>
                                        </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.government) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'일반행정'}>
                                            <Img src={merit_government_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'일반행정'} weight={'500'}>
                                            <Img src={merit_government} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.government) ?
                                        <Icon direction={'column'} size={'7rem'} value={'일반행정'}
                                            onClick={editMeritProfileFunction.government}>
                                            <Img src={merit_government_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} value={'일반행정'} weight={'500'}
                                            onClick={editMeritProfileFunction.government}>
                                            <Img src={merit_government} width={'5rem'}></Img>
                                        </Icon>
                            }
                        </Col>

                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                blockClick ?
                                    (userMeritProfile.online) ?
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'}>
                                            <Img src={merit_online_color} width={'5rem'}></Img>
                                        </Icon>
                                        :
                                        <Icon direction={'column'} size={'7rem'} justIcon value={'온라인'} weight={'500'}>
                                            <Img src={merit_online} width={'5rem'}></Img>
                                        </Icon>
                                    :
                                    (userMeritProfile.online) ?
                                        <Icon direction={'column'} size={'7rem'} value={'온라인'}
                                            onClick={editMeritProfileFunction.online}>
                                            <Img src={merit_online_color} width={'5rem'}></Img>
                                        </Icon>
                                        :

                                        <Icon direction={'column'} size={'7rem'} value={'온라인'} weight={'500'}
                                            onClick={editMeritProfileFunction.online}>
                                            <Img src={merit_online} width={'5rem'}></Img>
                                        </Icon>

                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default MeritIcon;