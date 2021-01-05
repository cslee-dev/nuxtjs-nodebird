<template>
  <v-container>
    <profile-form />
    <v-card
      v-if="me"
      style="margin-bottom:20px;"
    >
      <v-container>
        <v-subheader>팔로잉</v-subheader>
        <follow-list
          :users="followingList"
          :remove="removeFollowing"
        />
        <v-btn
          style="width:100%;"
          @click="loadFollowings"
          v-show="hasMoreFollowing"
        >
          더보기
        </v-btn>
      </v-container>
    </v-card>
    <v-card
      v-else
      style="margin-bottom:20px;"
    >
      <v-container>
        <v-subheader>팔로잉</v-subheader>
        <v-list>
          <v-list-item>
            <span>로그인이 필요한 서비스입니다.</span>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
    <v-card
      v-if="me"
      style="margin-bottom:20px;"
    >
      <v-container>
        <v-subheader>팔로워</v-subheader>
        <follow-list
          :users="followerList"
          :remove="removeFollower"
        />
        <v-btn
          style="width:100%;"
          @click="loadFollowers"
          v-show="hasMoreFollower"
        >
          더보기
        </v-btn>
      </v-container>
    </v-card>
    <v-card
      v-else
      style="margin-bottom:20px;"
    >
      <v-container>
        <v-subheader>팔로워</v-subheader>
        <v-list>
          <v-list-item>
            <span>로그인이 필요한 서비스입니다.</span>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import FollowList from '~/components/FollowList';
import ProfileForm from '~/components/ProfileForm'
import {mapState, mapActions} from 'vuex'

export default {
  name: "Profile",
  components: {
    FollowList,
    ProfileForm
  },
  middleware: 'authenticated',
  computed: {
    ...mapState('users', ['followerList', 'followingList', 'me', 'hasMoreFollowing', 'hasMoreFollower'])
  },
  methods: {
    removeFollower(user) {
      this.$store.dispatch('users/removeFollower', user)
    },
    removeFollowing(user) {
      this.$store.dispatch('users/removeFollowing', user)
    },
    ...mapActions('users', ['loadFollowers', 'loadFollowings'])
  },
}
</script>

<style scoped>

</style>