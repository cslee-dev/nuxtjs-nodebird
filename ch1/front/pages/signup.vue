<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>회원가입</v-subheader>
          <v-form>
            <v-text-field
                label="이메일"
                type="email"
                required
            />
            <v-text-field
                label="비밀번호"
                type="password"
                required
            />
            <v-text-field
                label="비밀번호 확인"
                type="password1"
                required
            />
            <v-text-field
                label="닉네임"
                type="nickname"
                required
            />
            <v-checkbox
                label="모든 사항을 동의합니다."
                required
            />
            <v-btn color="green" type="submit">가입하기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "signup",
  head() {
    return {
      title: '회원가입'
    }
  }
}
</script>

<style scoped>

</style>