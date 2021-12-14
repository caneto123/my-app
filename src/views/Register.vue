<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
    <v-text-field
    class="mx-6"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
        <v-text-field
        class="mx-6"
      v-model="lastname"
      :counter="10"
      :rules="nameRules"
      label="Lastname"
      required
    ></v-text-field>

    <v-text-field
    class="mx-6"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      type="email"
      required
    ></v-text-field>

    <v-text-field
    class="mx-6"
      v-model="password"
      :counter="10"
      :rules="nameRules"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-select
    class="mx-6"
      v-model="select"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
    class="mx-6"
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <div class="my-5 mx-6">
      <v-btn class="btnOne" elevation="2" color="#ea9f77" type="submit">
        <v-icon left color="white"> mdi-login </v-icon>
        <span class="white--text">Resgister</span>
      </v-btn>
    </div>
    <p class="mx-6">Have an account? <router-link to="/login">Login here</router-link></p>

    <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
  </v-form>
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

.test1 {
  outline: red solid;
}
</style>
