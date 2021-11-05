import { connect } from "react-redux";
import ContentContainer from "../../../pages/home/ContentContainer";



const mapStateToProps = (state) => {
    return {
        logined: state.login_reducer.logined || null,
        uid: state.user_reducer.uid || null,
        basic: state.user_reducer.basic || null,
        merit: state.user_reducer.merit || null,
        loveNotice: state.user_reducer.loveNotice || null,
        totalLoveNotice: state.user_reducer.totalLoveNotice || null,
        role: state.user_reducer.role || null,
        regions: state.region_reducer.region || null,
    }
}


export default connect(mapStateToProps)(ContentContainer)