<template>
<div id= "app">
  <div class="head">
  <header>
<h1>Coveted Sneakers</h1>
<img src="..\src\assets\OIP.jpg">
</header>
<nav>
<font-awesome-icon icon="fas fa-shopping-cart fa-4x" id="fonta" v-on:click="toggleCart()"/>
</nav>
</div>
<shopping-cart id="shop" v-show="showCart"/>
    <display-sneakers id="display"/>
</div>
</template>

<script>
import DisplaySneakers from './components/DisplaySneakers.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    DisplaySneakers,
    ShoppingCart,
  },
  data(){
    return{
      showCart:false
    }
  },
  methods:{
    toggleCart(){
      this.showCart =! this.showCart
      
    }
  }

}
</script>

<style>
#app
  {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100vw;
  display: grid;
  grid-template-areas: 
  "header  header",
  "display shop",
  "display shop",
  "display display"
  ;
  grid-column: 3fr 1fr;
}

#shop{
  position:fixed;
  z-index: 100;
  grid-area: "shop";
  top: 25%;
  right: 10px;
  background: white;
 
  
}

#fonta{
  height: 90%;
  justify-self: self-end
  ;
}

#fonta:hover{
  cursor: pointer;
}
nav{
  display: block;
  height: 3rem;
  grid-area: "nav";

  
}

#display{
  grid-area: "display"
  
}

header{
  display: flex;
  grid-area: "header";
  width: 100%;
  justify-content:center;
  align-items: center;
}

h1{
  font-family:fantasy, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-emphasis: circle;
 

  
  
}



header > img{
  height: 100px;
}

</style>
