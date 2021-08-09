<template>
  <div class="vue-tempalte">
    <h2>Dashboard</h2>
    <p>This page is only visible to users that are currently logged in</p>
    <h3>Welcome</h3>
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>

    <div class="my-5">
      <v-btn
        class="btnOne"
        elevation="2"
        color="#ea9f77"
        type="submit"
        @click="logOut()"
      >
        <v-icon left color="white"> mdi-login </v-icon>
        <span class="white--text">Log out</span>
      </v-btn>
    </div>

    <!-- <button
      type="submit"
      class="btn btn-dark btn-lg btn-block"
      @click="logOut()"
    >
      Log out
    </button> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>
