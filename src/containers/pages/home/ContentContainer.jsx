import React from 'react';
import HomeContent from "../../../components/organisms/Home/Content/index"




const ContentContainer = ({
    logined,
    uid,
    basic,
    merit,
    loveNotice,
    totalLoveNotice,
    role,
    regions,
}) => {

    return (
        <>
            <HomeContent logined={logined}
                uid={uid}
                basic={basic}
                merit={merit}
                loveNotice={loveNotice}
                totalLoveNotice={totalLoveNotice}
                role={role}
                regions={regions}
            ></HomeContent>
        </>
    )
}

export default ContentContainer