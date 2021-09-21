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
                        }}>당다라당다당다닫ㅇ다닫ㅇ다라당다당다닫ㅇ다 당코코~~~~</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
