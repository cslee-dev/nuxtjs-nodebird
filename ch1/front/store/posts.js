export const state = () => ({
    mainPosts: [],
    hasMorePost: true,
})

const limit = 10;
const totalPosts = 51;

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
        const diff = totalPosts - state.mainPosts.length
        const fakePosts = Array(diff > limit ? limit : diff).fill().map(v => ({
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
    loadPosts({commit}){
        commit('loadPosts')
    }

}