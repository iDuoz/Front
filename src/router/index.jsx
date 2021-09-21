import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"


const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div style={{
                            margin: '100px 100px',
                            fontSize: '5rem'
                        }}>최대가알알ㅇㄹ얄 ㅇㄹ</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
