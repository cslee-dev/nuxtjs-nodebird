export const state = () => ({
    me: null,
    followerList: [{id: 1, nickname: '제플린'}, {id: 2, nickname: '맥북'}, {id: 3, nickname: 'nuxt'}],
    followingList: [{id: 1, nickname: '제플린'}, {id: 2, nickname: '맥북'}, {id: 3, nickname: 'nuxt'}],
})

export const mutations = {
    setMe(state, payload) {
        state.me = payload
    },
    changeNickname(state, payload) {
        state.me.nickname = payload
    },
    deleteFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id)
        state.followerList.splice(index, 1)
    },
    deleteFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id)
        state.followingList.splice(index, 1)
    }
}

export const actions = {
    signUp({commit}, payload) {
        commit('setMe', payload)
    },
    logIn({commit}, payload) {
        commit('setMe', payload);

    },
    logOut({commit}, payload) {
        commit('setMe', null)
    },
    changeNickname({commit}, payload) {
        commit('changeNickname', payload)
    },
    deleteFollower({commit}, payload) {
        commit('deleteFollower', payload)
    },
    deleteFollowing({commit}, payload) {
        commit('deleteFollowing', payload)
    }
}