<template>
<div id= "app">
  <header>
<h1>Coveted Sneakers</h1>
<img src="..\src\assets\OIP.jpg" alt="">
<nav>
<font-awesome-icon icon="fas fa-shopping-cart" />
</nav>

</header>
<shopping-cart/>
    <display-sneakers/>
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
}

h1{
  font-family:fantasy, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-emphasis: circle;
  
  
}

header{
  align-items: center;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

header img{
  height: 100px;
}

</style>
