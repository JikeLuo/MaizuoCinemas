import React from 'react';
import axios from "axios";

export default async function swiperAxios() {
    let list = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=6011509',
        headers: {
            "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"1653840033519411869941761","bc":"440100"}`,
            "X-Host": `mall.film-ticket.film.list`
        }
    }).then(res => {
        return {
            type: "swiperAxios",
            payload: res.data.data.films
        }
    })
    return list
}
