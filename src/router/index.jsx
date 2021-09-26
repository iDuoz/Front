import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import HomeRouter from "./HomeRouter";
import UserPageRouter from "./UserProfileRouter";

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
                    <Route path="/:username/profile">
                        <UserPageRouter security={["ADMIN", "GUEST", "USER"]} userInfo={userInfo}></UserPageRouter>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )

}
export default AppRouter;
