import { connect } from "react-redux";
import ContentContainer from "../../../pages/proposal/ContentContainer";



const mapStateToProps = (state) => {
    return {
        uid: state.user_reducer.uid,
        basic: state.user_reducer.basic,
        merit: state.user_reducer.merit,
        loveNotice: state.user_reducer.loveNotice,
        totalLoveNotice: state.user_reducer.totalLoveNotice,
        role: state.user_reducer.role,
        regions: state.region_reducer.region,
    }
}


export default connect(mapStateToProps)(ContentContainer)