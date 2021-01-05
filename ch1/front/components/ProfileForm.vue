<template>
  <v-card style="margin-bottom:20px;">
    <v-container>
      <v-subheader>내 프로필</v-subheader>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="onSubmitForm"
      >
        <v-text-field
          v-model="nickname"
          label="닉네임"
          required
          :success="success"
          :success-messages="successMessages"
          :error="error"
          :error-messages="errorMessages"
        />
        <v-btn
          color="green"
          type="submit"
          :disabled="!me"
        >
          수정
        </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "ProfileForm",
  data() {
    return {
      valid: false,
      nickname: '',
      nicknameRules: [v => !!v || "변경할 닉네임을 입력해주세요."],
      success: false,
      successMessages: '',
      error: false,
      errorMessages: '',
    }
  },
  computed: {
    ...mapState('users', ['me'])
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.error = false
        this.errorMessages = ''
        if (!this.me) {
          this.error = true
          this.errorMessages = '로그인이 필요한 서비스입니다.'
        } else {
          this.$store.dispatch('users/changeNickname', this.nickname)
            .then(() => {
              this.success = true
              this.successMessages = "닉네임이 성공적으로 변경되었습니다."
            })
            .catch(() => {
              window.alert('아이쿠 닉네임 변경에 실패했습니다.')
            })
        }

      }
    }
  }
}
</script>

<style scoped>

</style>