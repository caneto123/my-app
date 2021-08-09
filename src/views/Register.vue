<template>
  <div class="text-center">
    <v-form @submit.prevent="register">
      <h2>Register</h2>
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
          <span class="white--text">Resgister</span>
        </v-btn>
      </div>
      <p>Have an account? <router-link to="/login">Login here</router-link></p>
      <!-- <button type="submit">Register</button> -->
    </v-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      // eslint-disable-next-line no-undef
      then(() => {
        alert("Successfully registered! Please login.");
        console.log("Hello, World!");
        this.$router.push("/Login");
      }).catch((error) => {
        alert(error.message);
        console.log("Hello, World!");
      });
    },
  },
};
</script>
