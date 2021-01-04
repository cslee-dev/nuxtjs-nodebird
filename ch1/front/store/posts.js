export const state = () => ({
    mainPosts: [],
})

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    }
}

export const actions = {
    add({commit},payload){
        commit('addMainPost', payload)
    }
}