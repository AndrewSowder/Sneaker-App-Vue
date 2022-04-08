<template>
<div class= "main">
    <div class= "sneaker" v-for="sneaker in $store.state.sneakers" :key="sneaker.subname">
        <h2>{{sneaker.name}}</h2>
        <h3>{{sneaker.subname}}</h3>
        <img v-on:click="cyclePic(sneaker)" id= "sneakerPic" v-bind:src=
        "sneaker.images" alt="">
        <h4>{{sneaker.price}}</h4>
        <select name = "dropdown">
            <option value = "10">10</option>
            <option value = "11">11</option>  
            <option value = "12">12</option>
         </select>
        <button class="buy" v-bind="sneaker" v-on:click="addToCart(sneaker)"> {{ !sneaker.inCart ? "Add to Cart" : "Remove from Cart" }} </button>

    </div>

</div>
  
</template>

<script>
export default {
    name:"display-sneakers",
    methods:{
        addToCart(sneaker){
            this.$store.commit('ADD_TO_CART', sneaker)
        },
        cyclePic(sneaker){
          this.$store.commit('CYCLE_PIC', sneaker)
        }
    }

}
</script>

<style>

div.main{
    justify-content: center;
    display:flex;
    flex-wrap: wrap;
    background-image: url(https://cdn.wallpapersafari.com/38/6/HPB5I7.jpg)
}
div.main div.sneaker {
  border: 1px black solid;
  border-radius: 6px;
  padding: 1rem;
  margin: 10px;
  width: 25%;
  background-color:white;
}


div.main div.sneaker div{
  height: 2rem;
  vertical-align: top;
  margin: 0 0.5rem;
}

div.main div.sneaker img {
  height: 200px;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}

div.main div.sneaker p {
  margin: 20px;
}

div.main div.sneaker h4 {
  font-size: 1rem;
}

button{

}

</style>