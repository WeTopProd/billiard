import axios from "axios";

const url = `http://frantsuz-shop.ru/api/goods/`

export const goodsApi = {
    get: async (token) => {
        const res = await axios.request(`${url}`,{
            method: 'GET',
            body:{},
            headers:{
                "content-type": "application/json",
                authorization: `Token ${token}`,   
            },
        })
        return  res.data.results
    }
}