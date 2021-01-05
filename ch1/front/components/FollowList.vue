<template>
  <v-list>
    <v-list-item
      v-for="follow in followList"
      :key="follow.id"
    >
      <span>{{ follow.nickname }}</span>
      <v-icon @click.prevent="remove(follow)">mdi-minus-circle-outline</v-icon>
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
    remove: {
      type: Function,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>