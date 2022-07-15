import React, {useEffect} from 'react';
import axios from "axios";

export default function TopAxios() {

    return (dispatch) => {
        // console.log('TopAxios已啟動')
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=7366030',
            headers: {
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"1653840033519411869941761","bc":"440100"}`,
                "X-Host": `mall.film-ticket.film.list`
            }
        }).then(res => {
            dispatch({
                type: "topList",
                payload: res.data.data.films
            })
        })
    }
}
