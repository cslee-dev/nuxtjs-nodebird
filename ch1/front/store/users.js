export const state = () => ({
    me: null,
    followerList: [{id: 1, nickname: '제플린'}, {id: 2, nickname: '맥북'}, {id: 3, nickname: 'nuxt'}],
    followingList: [{id: 1, nickname: '제플린'}, {id: 2, nickname: '맥북'}, {id: 3, nickname: 'nuxt'}],
    hasMoreFollowing: true,
    hasMoreFollower: true,
})
const limit = 3
const totalFollowings = 13
const totalFollowers = 8

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
    },
    loadFollowers(state) {
        const diff = totalFollowers - state.followerList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random(),
            nickname: (Math.floor(Math.random() * 1000)).toString(),
        }))
        state.followerList = state.followerList.concat(fakeUsers)
        state.hasMoreFollower = fakeUsers.length === limit
    },
    loadFollowings(state) {
        const diff = totalFollowings - state.followingList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random(),
            nickname: (Math.floor(Math.random() * 1000)).toString(),
        }))
        state.followingList = state.followingList.concat(fakeUsers)
        state.hasMoreFollowing = fakeUsers.length === limit

    },
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
    },
    loadFollowers({commit, state}) {
        if (state.hasMoreFollower) {
            commit('loadFollowers')
        }
    },
    loadFollowings({commit, state}) {
        if (state.hasMoreFollowing) {
            commit('loadFollowings')
        }
    },

}