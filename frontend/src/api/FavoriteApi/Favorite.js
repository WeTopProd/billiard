import axios from "axios"



<<<<<<< HEAD
const url = `http://127.0.0.1:8000/api/goods`
=======
const url = `https://frantsuz-shop.ru/api/goods`
>>>>>>> c9818edb5c2cd749dffbc75392a37dbc54bf6f04
export const favorite = {
    get: async (token) => {
        const res = await axios.get(`${url}/?is_favorited=1`, {

            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
            },

        })
        const data = await res.data

        return await data
    },
    post: async (token, favorite_id) => {
        const res = await axios.request(`${url}/${favorite_id}/favorite/`, {
            method: "POST",
            body: {},
            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
            }
        })
        return res
    },
    delete: async (token, favorite_id) => {
        const res = await axios.request(`${url}/${favorite_id}/favorite/`, {
            method: "DELETE",
            body: {},
            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
            }
        })
        return res
    }
}
export default favorite