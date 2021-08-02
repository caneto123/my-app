<template>
  <div class="home pa-6 container">
    <div id="nav">
      <h1>Esto es la página pricipal donde deberían haber un mix de elementos</h1>
        <router-link to="/login">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <button >Logout</button> 
    </div>
    <!-- <div>   
  <form @submit.prevent="login">     
    <h2>Login</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
</div>               -->
  </div>
</template>


