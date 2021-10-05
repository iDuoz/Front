import React from "react"
import { Icon, Img } from "../../index";
import { Col, Row } from "../../../layout";
import merit_active from "../../../assets/icons/merit_active.png"
import merit_active_color from "../../../assets/icons/merit_active_color.png"
import merit_animal_color from "../../../assets/icons/merit_animal_color.png"
import merit_animal from "../../../assets/icons/merit_animal.png"
import merit_disaster_color from "../../../assets/icons/merit_disaster_color.png"
import merit_disaster from "../../../assets/icons/merit_disaster.png"
import merit_farming_color from "../../../assets/icons/merit_farming_color.png"
import merit_farming from "../../../assets/icons/merit_farming.png"
// merit_online_color
import merit_online_color from "../../../assets/icons/merit_online_color.png"
import merit_online from "../../../assets/icons/merit_online.png"


const MeritIcon = ({ userMeritProfile, editMeritProfileFunction }) => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <Row justify={'space-between'} align={'center'} >
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                (userMeritProfile.active) ?
                                    <Icon direction={'column'} size={'7rem'}
                                        value={'활동적인'} onClick={editMeritProfileFunction.active}>
                                        <Img src={merit_active_color} width={'5rem'}></Img>
                                    </Icon>
                                    :
                                    <Icon direction={'column'} size={'7rem'} weight={'500'}
                                        value={'활동적인'} onClick={editMeritProfileFunction.active}>
                                        <Img src={merit_active} width={'5rem'}></Img>
                                    </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                (userMeritProfile.animal) ?
                                    <Icon direction={'column'} size={'7rem'} value={'동물조아'}
                                        onClick={editMeritProfileFunction.animal}>
                                        <Img src={merit_animal_color} width={'5rem'}></Img>
                                    </Icon>
                                    :
                                    <Icon direction={'column'} size={'7rem'} value={'동물조아'} weight={'500'}
                                        onClick={editMeritProfileFunction.animal}>
                                        <Img src={merit_animal} width={'5rem'}></Img>
                                    </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
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
                    <Row justify={'center'} align={'center'}>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
                                (userMeritProfile.farming) ?
                                    <Icon direction={'column'} size={'7rem'} value={'농사조아'}
                                        onClick={editMeritProfileFunction.farming}>
                                        <Img src={merit_farming_color} width={'5rem'}></Img>
                                    </Icon>
                                    :
                                    <Icon direction={'column'} size={'7rem'} value={'농사조아'} weight={'500'}
                                        onClick={editMeritProfileFunction.farming}>
                                        <Img src={merit_farming} width={'5rem'}></Img>
                                    </Icon>
                            }
                        </Col>
                        <Col span={4} justify={'center'} align={'center'}>
                            {
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