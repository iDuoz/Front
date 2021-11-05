import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import HomeRouter from "./HomeRouter";
import UserPageRouter from "./UserProfileRouter";
import CreateNoticeRouter from "./CreateNoticeRouter";
import TotalNoticeRouter from "./TotalNoticeRouter";
import ProposalRouter from "./ProposalRouter";
import MainRouter from "./MainRouter"
import NotFound from "../pages/NotFound"
import { connect } from "react-redux";


const AppRouter = ({ role, basic, merit }) => {


    const userInfo = {
        role, basic, merit
    };

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomeRouter />
                    </Route>
                    <Route path="/main">
                        <MainRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></MainRouter>
                    </Route>
                    <Route path="/createnotice">
                        <CreateNoticeRouter security={["ADMIN"]} userInfo={userInfo}></CreateNoticeRouter>
                    </Route>
                    <Route path="/profile">
                        <UserPageRouter security={["ADMIN", "USER"]} userInfo={userInfo}></UserPageRouter>
                    </Route>
                    <Route path="/notice/:id/:title">
                        <TotalNoticeRouter
                            security={["ADMIN", "GUEST", "USER"]}
                            userInfo={userInfo}
                        ></TotalNoticeRouter>
                    </Route>
                    <Route path="/notice">
                        <TotalNoticeRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></TotalNoticeRouter>
                    </Route>
                    <Route path="/proposal/:id/:title">
                        <ProposalRouter
                            security={["ADMIN", "USER"]}
                            userInfo={userInfo}
                        ></ProposalRouter>
                    </Route>
                    <Route path="/proposal">
                        <ProposalRouter security={["ADMIN", "USER"]} userInfo={userInfo}></ProposalRouter>
                    </Route>
                    {/* TODO 404NotFound page 만들기 */}
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        role: state.user_reducer?.role,
        basic: state.user_reducer?.basic,
        merit: state.user_reducer?.merit,
    }
}

export default connect(mapStateToProps, null)(AppRouter);
