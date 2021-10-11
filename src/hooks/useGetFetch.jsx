import { useState, useEffect } from 'react';
import _ from "../config/env"
import { notification } from 'antd';

const useGetFetch = ({ url, bodyReq }) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });

    useEffect(() => {
        fetch(_.SERVER_URL + url, {
            Method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => {
                if (res.status === 500)
                    throw Promise.resolve({ errorCode: 500, errorName: "Server error" });
                if (!res.ok) throw res.json();
                console.log(res)
                setState((state) => ({
                    ...state,
                    loading: false,
                    data: res.json()
                }))
            })
            .catch(async (error) => {
                let err = await error.then()
                notification['error']({
                    message: `실패😥 `,
                    description: error.message || error.code,
                });
                console.log(
                    "Error " +
                    err.message +
                    "\n success : " +
                    err.success
                );
                setState((state) => ({
                    ...state,
                    loading: false,
                    error: err
                }))
            })
    }, [url])

    return { ...state }




}

export default useGetFetch