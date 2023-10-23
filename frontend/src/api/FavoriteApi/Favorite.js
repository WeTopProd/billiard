import axios from "axios"



const url = `https://frantsuz-shop.ru/api/goods`
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
        return  res
    },
    delete: async (token,favorite_id) => {
        const res =await axios.request(`${url}/${favorite_id}/favorite/`,{
            method: "DELETE",
            body:{},
            headers:{
                "content-type": "application/json",
                authorization: `Token ${token}`,
            }
        })
        return res
    }
}
export default favorite