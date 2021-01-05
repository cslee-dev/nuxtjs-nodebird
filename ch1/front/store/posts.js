export const state = () => ({
    mainPosts: [],
    hasMorePost: true,
})

const limit = 10;

export const mutations = {
    addMainPost(state, payload) {
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.id)
        state.mainPosts.splice(index, 1)
    },
    addComment(state, payload) {
        const index = state.mainPosts.findIndex(v => v.id === payload.postId)
        state.mainPosts[index].Comments.unshift(payload);
    },
    loadPosts(state) {
        const fakePosts = Array(limit).fill().map(v => ({
            id: Math.random().toString(),
            User: {
                id: 1,
                nickname: "더미더"
            },
            content: `Hello infinite scrolling - ${Math.random()}`,
            Comments: [],
            Images: [],
        }))
        state.mainPosts = state.mainPosts.concat(fakePosts);
        state.hasMorePost = fakePosts.length === limit;
    },
}

export const actions = {
    add({commit}, payload) {
        commit('addMainPost', payload)
    },
    remove({commit}, payload) {
        commit('removeMainPost', payload)
    },
    addComment({commit}, paylod) {
        commit('addComment', paylod)
    },

}