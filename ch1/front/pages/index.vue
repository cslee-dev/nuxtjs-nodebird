<template>
  <v-container>
    <post-form v-if="me" />
    <post-card />
    <post-card />
    <post-card />
    <post-card />
    <post-card />
  </v-container>
</template>

<script>

//import VueRouter from 'vue-router' // 잘안씀 페이지가 여러개라서.. 페이지마다 다 이게 들어가야함. 따로따로 연결 해줘야함. 중복임.
import PostCard from "~/components/PostCard"
import PostForm from "~/components/PostForm"
import {mapState} from "vuex"

export default {
  name: "Main",
  components: {
    PostCard, PostForm
  },
  data() {
    return {
      name: 'Nuxt.js',
    }
  },
  computed: {
    ...mapState('users', ['me'])
  }
}
</script>

<style>

</style>