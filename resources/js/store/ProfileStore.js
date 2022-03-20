import axios from 'axios'

export default {
    strict: true,
    namespaced: true,
    mutations: {},
    actions: {
        public({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/public/profile/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },

        profile({ commit }, id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let { data } = await axios(`/api/v1/profile/${id}`)
                    resolve(data?.result)
                } catch (e) {
                    reject(e)
                }
            })
        },
    },
}
