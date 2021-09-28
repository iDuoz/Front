import { connect } from "react-redux"
import Header from "../../../../components/organisms/Header/Content"


const mapStateToProps = (state) => {
    return {
        logined: state.login_reducer.logined,
    }


}

export default connect(mapStateToProps, null)(Header)