import { connect } from "react-redux";
import ContentContainer from "../../../pages/userProfile/ContentContainer";
import ACTION from "../../../../store/actions/action";


const mapStateToProps = (state) => {
    return {
        name: state.user_reducer.name,
        region: state.user_reducer.region,
        sex: state.user_reducer.sex,
        email: state.user_reducer.email,
        age: state.user_reducer.age,
        addRegion: state.user_reducer.addRegion,
        merit: state.user_reducer.merit,
        loveNotice: state.user_reducer.loveNotice,
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