import { connect } from "react-redux";
import ContentContainer from "../../../pages/createnotice/ContentContainer";
import ACTION from "../../../../store/actions/action";


const mapStateToProps = (state) => {
    return {
        uid: state.user_reducer.uid,
        role: state.user_reducer.role,
        regions: state.region_reducer.region,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_REGION: function (payload) {
            dispatch(ACTION.SET_REGION__ACTION_FUNC(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)