<template>
  <v-app id="inspire">    
    <v-navigation-drawer
    v-model="drawer"
    app
    color="#B8F5E9"
    >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"  
        src="https://picsum.photos/id/11/500/300"
      >
      </v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Nutrition
          </v-list-item-title>
          <v-list-item-subtitle>
            software nutrition!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>


      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#1ab394"
      dark
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
        </v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Tablero</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-home-outline', to:'/' },
          { title: 'Agenda', icon: 'mdi-calendar-arrow-right', to:'/agenda' },
          { title: 'Pacientes', icon: 'mdi-account-group',to:'/pacientes' },
          { title: 'Mensajes', icon: 'mdi-forum',to:'/mensajes' },
          { title: 'Acompañamiento', icon: 'mdi-hand-heart' },
          { title: 'Alimentos', icon: 'mdi-food-fork-drink' },
          { title: 'Tareas', icon: 'mdi-book-check', to:'/tareas'  },
          { title: 'Registrar cliente', icon: 'mdi-account-plus', to:'/form' },
          { title: 'Login', icon: 'mdi-account-plus', to:'/login' },
          { title: 'Register', icon: 'mdi-account-plus', to:'/register' },    
          { title: 'Dashboard', icon: 'mdi-account-plus', to:'/dashboard' },    
        ],        
      }),
  }
</script>
<style scoped>
input {   
  margin-right: 20px; 
}

</style>
