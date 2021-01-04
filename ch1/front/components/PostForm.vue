<template>
  <v-card :style="{marginBottom:'20px;'}">
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="onSubmitForm"
      >
        <v-textarea
          v-model="content"
          outlined
          auto-grow
          clearable
          label="어떤 신기한 일이 있었나요?"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="[v=> !!v.trim() || '내용을 입력하세요.']"
          @input="onChangeTextarea"
        />
        <v-container>
          <v-btn
            color="green"
            type="submit"
            absolute
            right
          >
            생성
          </v-btn>
          <v-btn>이미지 업로드</v-btn>
        </v-container>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "PostForm",
  data() {
    return {
      valid: false,
      hideDetails: false,
      success: false,
      successMessages: '',
      content: '',
    }
  },
  head: {
    title: "게시글 작성"
  },
  computed: {
    ...mapState('users', ['me'])
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = true
      this.success = false
      this.successMessages = ''
    },
    onSubmitForm() {
      let vm = this;
      if (this.$refs.form.validate()) {
        this.$store.dispatch('posts/add', {
          content: this.content,
          User: {
            nickname: vm.me.nickname
          },
          Comments: [],
          Images: [],
          id: Date.now().toString(),
          createdAt: Date.now(),
        }).then(() => {
          vm.hideDetails = false
          this.success = true
          vm.successMessages = "게시글 등록 성공!"

        }).catch(() => {

        })
      }
    }
  }
}
</script>

<style scoped>

</style>