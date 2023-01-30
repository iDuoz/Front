import { connect } from "react-redux";
import ContentContainer from "../../../pages/suggest/ContentContainer";



const mapStateToProps = (state) => {
    return {
        logined: state.login_reducer.logined || null,
        uid: state.user_reducer.uid || null,
        role: state.user_reducer.role || null,
    }
}


export default connect(mapStateToProps)(ContentContainer)