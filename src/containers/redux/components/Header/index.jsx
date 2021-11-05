import { connect } from "react-redux"
import Header from "../../../../containers/header/ContentContainer"


const mapStateToProps = (state) => {

    return {
        logined: state.login_reducer.logined,
        uid: state.user_reducer.uid || null,
        role: state.user_reducer.role,
        basic: state.user_reducer.basic || null,
    }


}

export default connect(mapStateToProps, null)(Header)