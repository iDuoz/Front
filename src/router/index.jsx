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
                        }}>『흑렴룡』의 분노를 받아라🐉💢</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
