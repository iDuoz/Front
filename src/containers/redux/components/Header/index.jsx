import { connect } from "react-redux"
import Header from "../../../../components/organisms/Header/Content/index"


const mapStateToProps = (state) => {
    console.log(state.login_reducer.logined)
    return {
        logined: state.login_reducer.logined,

    }


}

export default connect(mapStateToProps, null)(Header)