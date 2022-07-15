import axios from "axios";


async function DetailAxios() {

    console.log('comingSoon已啟動')
    let list = await axios({
        url: 'https://m.maizuo.com/gateway?filmId=5895&k=3986546',
        headers: {
            "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"1653840033519411869941761","bc":"110100"}`,
            "X-Host": `mall.film-ticket.film.list`
        }
    }).then(res => {
        return {
            type: "DetailList",
            payload: res.data
        }
    })
    return list
}
export default DetailAxios