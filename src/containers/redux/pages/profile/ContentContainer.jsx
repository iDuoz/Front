import { connect } from "react-redux";
import ContentContainer from "../../../pages/profile/ContentContainer";
import ACTION from "../../../../store/actions/action";


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

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)