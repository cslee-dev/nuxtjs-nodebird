<template>
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/" :style="{color:'#ffffff', textDecoration:'none' }">NodeBird</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label="검색" hide-details="false" prepend-icon="mdi-magnify" :style="navBtnStyle"/>
          <v-btn text nuxt to="/profile" :style="navBtnStyle">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup" :Style="navBtnStyle">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row>
      <v-col cols="12" xs="12" md="4">
        <login-form/>
      </v-col>
      <v-col cols="12" xs="12" md="8">
        <nuxt/>
      </v-col>

    </v-row>
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm";

export default {
  name: "default",
  components: {
    LoginForm
  },
  head: {
    title: "NodeBird"
  },
  computed: {
    navBtnStyle() {
      return {display: 'flex', alignItems: 'center'}
    }
  }
}
</script>

<style scoped>

</style>