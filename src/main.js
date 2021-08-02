import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'



  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCOXKOtDbN4ZSSguqdWm_Z9qcR05_cTGzo",
    authDomain: "testfirebase-ceae9.firebaseapp.com",
    projectId: "testfirebase-ceae9",
    storageBucket: "testfirebase-ceae9.appspot.com",
    messagingSenderId: "965190414724",
    appId: "1:965190414724:web:a814a074d9cf551f95edd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
