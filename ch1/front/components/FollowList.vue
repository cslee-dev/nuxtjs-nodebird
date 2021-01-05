<template>
  <v-list>
    <v-list-item
      v-for="follow in followList"
      :key="follow.id"
    >
      <span>{{ follow.nickname }}</span>
      <v-icon @click.prevent="deleteFollow(follow)">mdi-minus-circle-outline</v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "FollowList",
  props: {
    'followList': {
      type: Array,
      required: true,
    },
    'eventName': {
      type: String,
      required: true,
    }
  },
  methods: {
    deleteFollow(follow) {
      this.$store.dispatch(`users/delete${this.eventName}`, follow)
        .then(() => {
          window.alert('성공적으로 삭제되었습니다.')
        })
        .catch(() => {
          window.alert('삭제에 실패했습니다.')
        })
    }
  }
}
</script>

<style scoped>

</style>