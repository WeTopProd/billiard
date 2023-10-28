import axios from "axios";

const url = `http://127.0.0.1:8000/api/goods/`

export const goodsApi = {
    get: async (token) => {
        const res = await axios.request(`${url}`, {
            method: 'GET',
            body: {},
            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
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
                authorization: `Token ${token}`,
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