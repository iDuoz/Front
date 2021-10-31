import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import HomeRouter from "./HomeRouter";
import UserPageRouter from "./UserProfileRouter";
import CreateNoticeRouter from "./CreateNoticeRouter";
import TotalNoticeRouter from "./TotalNoticeRouter";
import ProposalRouter from "./ProposalRouter";
import MainRouter from "./MainRouter"
import NotFound from "../pages/NotFound"

const AppRouter = () => {


    const userInfo = {
        //TODO role 하드코딩한거 지우기
        role: "ADMIN",
        //받아온거 넣기
    };

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomeRouter />
                    </Route>
                    {/* <Route path="/:username/profile">
                        <UserPageRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></UserPageRouter>
                    </Route> */}
                    <Route path="/main">
                        <MainRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></MainRouter>
                    </Route>
                    <Route path="/createnotice">
                        <CreateNoticeRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></CreateNoticeRouter>
                    </Route>
                    <Route path="/profile">
                        <UserPageRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></UserPageRouter>
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
                            security={["ADMIN", "GUEST", "USER"]}
                            userInfo={userInfo}
                        ></ProposalRouter>
                    </Route>
                    <Route path="/proposal">
                        <ProposalRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></ProposalRouter>
                    </Route>
                    {/* TODO 404NotFound page 만들기 */}
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )

}
export default AppRouter;
