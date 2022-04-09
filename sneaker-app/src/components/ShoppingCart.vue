<template>
  <div class="shopping-cart">
  <div class="item-cart" v-for="sneaker in $store.state.cart" v-bind:key="sneaker.subname">
     <h2>{{sneaker.name}}</h2>
        <h3>{{sneaker.subname}}</h3>
        <div>
        <img :src="sneaker.images" v-on:click="cyclePic(sneaker)" id= "sneakerPic" 
         >
         </div>
        <h4>{{sneaker.price}}</h4>
  </div>
      
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
  props: "showCart" 

}
</script>

<style  scoped>


.shopping-cart{ 
  width: 30%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
   overflow: scroll;
}

.item-cart{
  display: block;
  size: 80%;
}

#sneakerPic{
  width: 100%;
}



</style>