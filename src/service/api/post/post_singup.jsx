import _ from "../../../config/env"
import NotificationPool from "../../../containers/redux/components/NotificationPool/";

/**
 * @description 회원가입 
 * @method POST
 * @request @body data{email, password}
 */
const postNotice = (data) => {

    return fetch(_.SERVER_URL + "/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem("YAT"),
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.status === 500) throw Promise.resolve({ errorCode: 500, errorName: "Server error" })
        if (!res.ok) throw res.json()

    }).catch(async (error) => {
        let err = await error.then()
        NotificationPool.api.add({
            title: "Error from post_notice",
            content: err.errorName + "(" + err.errorCode + ")",
            status: "error"
        })
        console.log("Error from post_notice\n" + err.errorCode + "\n" + err.errorName)
        //에러처리
        throw err
    })
    //}

}

export default postNotice