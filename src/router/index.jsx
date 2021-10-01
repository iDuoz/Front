import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import HomeRouter from "./HomeRouter";
import UserPageRouter from "./UserProfileRouter";
import CreateNoticeRouter from "./CreateNoticeRouter";
import NotFound from "../pages/NotFound/test"
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
                    <Route path="/createnotice">
                        <CreateNoticeRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></CreateNoticeRouter>
                    </Route>
                    <Route path="/profile">
                        <UserPageRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></UserPageRouter>
                    </Route>
                    {/* TODO 404NotFound page 만들기 */}
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )

}
export default AppRouter;
