<template>
  <div class="text-center">
    <v-form @submit.prevent="userLogin">
      <h2>Login</h2>
      <v-card class="d-flex justify-center mb-6" flat>
        <input
          class="mx-2 form-control col-md-2"
          type="email"
          placeholder="Email address..."
          v-model="email"
        />
        <input
          class="mx-2 form-control col-md-2"
          type="password"
          placeholder="Password..."
          v-model="password"
        />
      </v-card>
      <div class="my-5">
        <v-btn class="btnOne" elevation="2" color="#ea9f77" type="submit">
          <v-icon left color="white"> mdi-login </v-icon>
          <span class="white--text">Login</span>
        </v-btn>
      </div>
      <p>
        don't have an account
        <router-link to="/register">Register here</router-link>
      </p>
    </v-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 20px;
}
</style>
