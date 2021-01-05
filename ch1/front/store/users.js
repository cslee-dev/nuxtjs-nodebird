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
    addFollower(state, payload) {
        state.followerList.push(payload)
    },
    addFollowing(state, payload) {
        state.followingList.push(payload)
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id)
        state.followerList.splice(index, 1)
    },
    removeFollowing(state, payload) {
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
    addFollower({commit}, payload) {
        commit('addFollower', payload)
    },
    addFollowing({commit}, payload) {
        commit('addFollowing', payload)
    },
    removeFollower({commit}, payload) {
        commit('removeFollower', payload)
    },
    removeFollowing({commit}, payload) {
        commit('removeFollowing', payload)
    }
}