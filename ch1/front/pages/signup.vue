<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>
            회원가입
          </v-subheader>
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="onSubmitForm"
          >
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-text-field
              v-model="password1"
              label="비밀번호 확인"
              type="password"
              :rules="passwordCheckRules"
              required
            />
            <v-text-field
              v-model="nickname"
              label="닉네임"
              type="nickname"
              :rules="nicknameRules"
              required
            />
            <v-checkbox
              v-model="terms"
              label="모든 사항을 동의합니다."
              :rules="[v=>!!v|| '약관에 동의해야 합니다.']"
              required
            />
            <v-btn
              color="green"
              type="submit"
            >
              가입하기
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "SignUp",
  middleware: 'anonymous',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      password1: '',
      nickname: '',
      terms: false,
      emailRules: [
        v => !!v || "이메일은 필수입니다.",
        v => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      nicknameRules: [
        v => !!v || "닉네임은 필수입니다.",
      ],
      passwordRules: [
        v => !!v || "비밀번호는 필수입니다.",
      ],
      passwordCheckRules: [
        v => v === this.password || "비밀번호가 일치하지 않습니다."
      ]

    }
  },
  head: {
    title: '회원가입'
  },
  computed: {
    me() {
      return this.$store.state.users.me
    }
  },
  watch: {
    me(value) {
      if (value) {
        this.$router.push({
          path: '/',
        })
      }
    }
  },
  methods: {
    onSubmitForm() {
      let vm = this;
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signUp', {
          email: this.email,
          nickname: this.nickname,
        }).then(() => {
          vm.$router.push({path: '/'})
        }).catch(() => {
          alert('회원가입 실패');
        })
      }
    }
  },
}
</script>

<style scoped>

</style>