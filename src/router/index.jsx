import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from "react"
import { useEffect } from "react"


/**
 * @description 할당된 모든 구역 받아오기
 * @method GET
 * @request @headers YAT token
 * @request @body data{title , content , region , nor , dov , tov , dod}
 */
const checkEmailValidation = () => {
    return fetch('https://us-central1-eun-cherry.cloudfunctions.net/api/smileun', {
        method: 'GET',
        headers: {

        }
    }).then((res) => {
        if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
        if (!res.ok) throw res.json()
        return res.json()
    }).then(data => {
        return data
    }).catch(async (error) => {
        let err = await error.then()
        console.log("Error from check_email_validation\n" + err.errorCode + "\n" + err.errorName)
        //에러처리
        throw err
    })
}

const AppRouter = () => {

    useEffect(() => {
        checkEmailValidation()
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div style={{
                            margin: '100px 100px',
                            fontSize: '5rem'
                        }}>『흑염룡』의 분노를 받아라🐉💢</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
