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
        <input
          class="mx-2 form-control col-md-2"
          type="name"
          placeholder="Name..."
          v-model="name"
        />
        <input
          class="form-control"
          type="LastName"
          placeholder="Last name..."
          v-model="LastName"
        />
        <v-select
          class="mx-2 form-control"
          :items="items"
          dense
          outlined
        ></v-select>
        <v-checkbox
          v-model="terms"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Accept terms and conditions"
          required
        >
        </v-checkbox>
      </v-card>
      <div id="example-2" class="my-5">
        <v-btn
          v-on:click="greet"
          class="btnOne"
          elevation="2"
          color="#ea9f77"
          type="submit"
        >
          <v-icon left color="white"> mdi-login </v-icon>
          <span class="white--text">Register</span>
        </v-btn>
      </div>
      <p>Have an account? <router-link to="/login">Login here</router-link></p>
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
      name: "",
      items: ["Patient", "Caregiver", "Both"],
      terms: false,
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

<style scoped>
.textPrincipal {
  text-align: center;
  color: #676a6c;
}
</style>
