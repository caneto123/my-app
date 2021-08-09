<template>
  <div class="home pa-6 container">
    <h1>home</h1>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    function logout() {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch((err) => alert(err.message));
    }
    return {
      name,
      logout,
    };
  },
};
</script>
