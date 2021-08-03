<template>
  <div class="home pa-6 container">
    <div id="nav">
      <h1><strong>El único software que necesitas para empezar tu plan alimentación</strong>     </h1>
        <router-link to="/login">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <button >Logout</button> 
    </div>
          <div class="container" id="home">
        <div class="row">
            <div class="col-md-6 textTitle">
              <div class="textTitleTwo">            
                <h2 class="text-md-start">
                  <strong>El único software que necesitas para empezar tu plan alimentación</strong>            
                </h2>
              </div>
              <div class="textSubTitle">
                <p class="text-md-start">
                  Nutrium es un software de nutrición para que los profesionales administren sus negocios mientras se enfocan en el éxito de sus clientes.
                </p>
              </div>
            </div>
            <div class="col-md-5 ImgSectionA">
            </div>
        </div>
                  <div class="card col-md-3 boxSectionB" style="width: 18rem;">
            <div class="card-body">
              <h4 class="card-title">Gana tiempo para cosas importantes</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, optio corporis quae nulla aspernatur in alias at
                numquam rerum ea excepturi expedita tenetur assumenda
                voluptatibus eveniet.</p>
              <a href="#" class="btn hvr-grow">Leer más</a>
            </div>
          </div>
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


