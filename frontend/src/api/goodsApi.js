import axios from "axios";

const url = `https://frantsuz-shop.ru/api/goods/`

export const goodsApi = {
    get: async (token) => {
        const res = await axios.request(`${url}`, {
            method: 'GET',
            body: {},
            headers: {
                "content-type": "application/json",
                
            },
        })
        return res.data.results
    },
    getPromotion: async (token) => {
        const res = await axios.request(`${url}?affiliation_goods=promotion`, {
            method: 'GET',
            body: {},
            headers: {
                "content-type": "application/json",
                
            },

        })
        return res.data.results
    },
    getBestseller: async (token) => {
        const res = await axios.request(`${url}?affiliation_goods=bestseller`, {
            method: 'GET',
            body: {},
            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
            },

        })
        return res.data.results
    }
}