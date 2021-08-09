<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="#B8F5E9">
      <!-- <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://picsum.photos/id/11/500/300"
      >
      </v-img> -->
      <v-layout
        column
        class="text-center"
        v-for="person in team"
        :key="person.name"
      >
        <v-flex class="mt-5 justify-center">
          <v-avatar size="100" class="ml-10 justify-center">
            <v-img :src="person.avatar" class="justify-center"></v-img>
          </v-avatar>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6 align-center">
                {{ person.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="align-center">
                {{ person.role }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#1ab394" dark prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
        </v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Nutrition</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn class="btnOne" elevation="2" color="#ea9f77">
        <span class="white--text">Iniciar sesión</span>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Planes</v-tab>
          <v-tab>Productos</v-tab>
          <v-tab>Precios</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <div>
        <nav>
          <router-link to="/"> Home </router-link> |
          <router-link to="/dashboard"> Feed </router-link> |
          <router-link to="/register"> Register </router-link> |
          <router-link to="/login"> Login </router-link> |
        </nav>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/resgister") {
          router.replace("/");
        }
      });
    });
  },
  data: () => ({
    drawer: null,
    team: [
      {
        name: "Carlos Pacheco",
        role: "Web developer",
        avatar: "/avatar-3.jpg",
        edad: "21",
      },
    ],
    items: [
      { title: "Home", icon: "mdi-home-outline", to: "/" },
      {
        title: "Landingpage",
        icon: "mdi-calendar-arrow-right",
        to: "landingpage",
      },
      { title: "Agenda", icon: "mdi-calendar-arrow-right", to: "/agenda" },
      { title: "Pacientes", icon: "mdi-account-group", to: "/pacientes" },
      { title: "Mensajes", icon: "mdi-forum", to: "/mensajes" },
      { title: "Acompañamiento", icon: "mdi-hand-heart" },
      { title: "Alimentos", icon: "mdi-food-fork-drink" },
      { title: "Tareas", icon: "mdi-book-check", to: "/tareas" },
      { title: "Registrar cliente", icon: "mdi-account-plus", to: "/form" },
      { title: "Login", icon: "mdi-account-plus", to: "/login" },
      { title: "Register", icon: "mdi-account-plus", to: "/register" },
      { title: "Dashboard", icon: "mdi-account-plus", to: "/dashboard" },
    ],
  }),
};
</script>
