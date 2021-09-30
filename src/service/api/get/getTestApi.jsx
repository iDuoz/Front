import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool";
import { createUserWithEmailAndPassword } from "firebase/auth"
/**
 * @description Test Api 
 * @method TEST
 */
const getTestApi = (data) => {

    return fetch(_.SERVER_URL + "/test/connect/welcome", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
        if (!res.ok) throw res.json();
        console.log(res);
        return res.json();
    }).catch(async (error) => {
        let err = await error.then()
        NotificationPool.api.add({
            title: "Test",
            content: err.errorName + "(" + err.errorCode + ")",
            status: "error"
        })
        console.log("Error Test\n" + err.errorCode + "\n" + err.errorName)
        //에러처리
        throw err
    })

}

export default getTestApi