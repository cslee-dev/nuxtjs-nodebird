<template>

  <v-form
    ref="form"
    v-model="valid"
    style="position:relative"
    @submit.prevent="onSubmitForm"
  >
    <v-btn
      @click="onSubmitForm"
    >
      작성
    </v-btn>
    <v-textarea
      v-model="content"
      filled
      label="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    />
  </v-form>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "CommentForm",
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      valid: false,
      content: '',
      success: false,
      successMessages: '',
      hideDetails: true,
    }
  },
  computed: {
    ...mapState('users', ['me']),
  },
  methods: {
    onChangeTextarea(value) {
      if (value.length) {
        this.hideDetails = true
        this.success = false
        this.successMessages = ''
      }
    },
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('posts/addComment', {
          id: Date.now().toString(),
          postId: this.postId,
          content: this.content,
          User: {
            nickname: this.me.nickname,
          }
        })
          .then(() => {
            this.successMessages = ''
            this.success = true
            this.successMessages = '댓글이 작성되었습니다.'
            this.hideDetails = false
          })
          .catch(() => {

          })
      }
    }
  }
}
</script>

<style scoped>

</style>