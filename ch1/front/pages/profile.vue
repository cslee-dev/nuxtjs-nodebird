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
          :follow-list="followingList"
          event-name="Following"
        />
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
          :follow-list="followerList"
          event-name="Follower"
        />
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
import {mapState} from 'vuex'

export default {
  name: "Profile",
  components: {
    FollowList,
    ProfileForm
  },
  computed: {
    ...mapState('users', ['followerList', 'followingList', 'me'])
  }
}
</script>

<style scoped>

</style>