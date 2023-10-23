import axios from "axios"


const goodsApiUrl = 'https://frantsuz-shop.ru/api/goods'
export const basketApi = {
    get: async (token, id) => {

        const res = await axios.get(`${goodsApiUrl}/basket/`, {
            headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
            }
        })

        const data = await res.data;

        return await data.map(obj => {
            return {
                ...obj.goods, count: obj.count
            }

        })


    },
    post: async (token, id) => {
        var res = await axios.request({
            method: 'post',
            url: `${goodsApiUrl}/${id}/shopping_cart/`,
            headers: {
                'authorization': `Token ${token}`
            },
            data: ''
        });

        return res.data;
    },
    plusOne: async (token, id) => {

        try {
            const getRes = await basketApi.get(token)

            const allGoodsIn = getRes
            const filtered = await allGoodsIn.filter(el => el.id === id)[0]
            filtered.count += 1

            const res = await axios.request({
                method: "PATCH",
                url: `${goodsApiUrl}/${id}/shopping_cart/`,
                data: { ...filtered },
                headers: {
                    "content-type": "application/json",
                    authorization: `Token ${token}`,
                }
            }).then(() => basketApi.get(token, id))

            return res

        } catch (err) {
            console.error(err.message);

        }
    },
    minusOne: async (token, id) => {
        try {
            const getRes = await basketApi.get(token)

            const allGoodsIn = getRes
            const filtered = await allGoodsIn.filter(el => el.id === id)[0]
            filtered.count -= 1

            const res = await axios.request({
                method: "PATCH",
                url: `${goodsApiUrl}/${id}/shopping_cart/`,
                data: { ...filtered },
                headers: {
                    "content-type": "application/json",
                    authorization: `Token ${token}`,
                }
            }).then(() => basketApi.get(token))
            return res

        } catch (err) {
            console.error(err.message);

        }
    },
    delete: async (token, id) => {

        try {
            const res = await axios.delete(`${goodsApiUrl}/${id}/shopping_cart/`, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Token ${token}`,
                }
            }).then(() => basketApi.get(token))

            return res.json

        } catch (err) {
            console.error(err.message);

        }
    },
    clearAll: async (token) => {
        try {
            const allGoods = await basketApi.get(token)
            await allGoods.map(async (good) => {
                const id = good.goods.id
                await axios.delete(`${goodsApiUrl}/${id}/shopping_cart/`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `Token ${token}`,
                    }
                })
            })
            return [] //BECAUSE WE HAVE DELETED EVERYTHING YOPTA ------ IF YOU DONT GET IT YOURE LOKH (потому что массив уже пустой)

        } catch (err) {
            console.error(err.message);

        }
    }
}




export default basketApi