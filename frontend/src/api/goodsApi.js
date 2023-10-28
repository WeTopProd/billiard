import axios from "axios";

<<<<<<< HEAD
const url = `http://127.0.0.1:8000/api/goods/`
=======
const url = `https://frantsuz-shop.ru/api/goods/`
>>>>>>> c9818edb5c2cd749dffbc75392a37dbc54bf6f04

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