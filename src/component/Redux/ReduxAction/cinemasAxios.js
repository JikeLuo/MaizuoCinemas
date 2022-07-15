import React, {useEffect} from 'react';
import axios from "axios";

export default function CinemasAxios() {

    return (dispatch) => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3593144',
            headers: {
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"1653840033519411869941761","bc":"110100"}`,
                "X-Host": `mall.film-ticket.cinema.list`
            }
        }).then(res => {
            dispatch({
                type: "cinemasList",
                payload: res.data.data.cinemas
            })
        })
    }
}
