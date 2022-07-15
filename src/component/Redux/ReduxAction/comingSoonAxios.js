import React, {} from 'react';
import axios from "axios";

async function ComingSoonAxios() {

    console.log('comingSoon已啟動')
    let list = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=4365388',
        headers: {
            "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"1653840033519411869941761","bc":"110100"}`,
            "X-Host": `mall.film-ticket.film.list`
        }
    }).then(res => {
        return {
            type: "comingSoonList",
            payload: res.data.data.films
        }
    })
    return list
}
export default ComingSoonAxios