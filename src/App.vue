<template>
  <div id="app">
    <NavBar />
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';



import NavBar from './components/NavBar'

export default {
  name: 'App',
  components:{
    NavBar
  }
  
}
</script>

