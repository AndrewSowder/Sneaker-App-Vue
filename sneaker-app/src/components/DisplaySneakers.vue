<template>
  <div class="main">
    <div
      class="sneaker"
      v-for="sneaker in $store.state.sneakers"
      :key="sneaker.subname"
    >
      <h2>{{ sneaker.name }}</h2>
      <h3>{{ sneaker.subname }}</h3>
      <div class="imgDiv">
      <img
        v-on:click="cyclePic(sneaker)"
        id="sneakerPic"
        v-bind:src="(sneaker.images)"
        alt=""
      />
      </div>
      <h4>{{ sneaker.price }}</h4>
      
      <select class="dropdown" v-model="size">
        <option  v-for="sizes in sneaker.availableSizes" :key="sizes" :value="sizes"> {{sizes}}
          </option>
      </select>
      <button class="buy" v-bind="sneaker" v-on:click="addToCart(sneaker)">
        Add to Cart 
      </button>
      <button class="remove" v-on:click="removeFromCart(sneaker)" v-show="checkCart(sneaker)" >
      Remove From Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "display-sneakers",
  data(){
    return{
      size:"",
      sneakerObj:{
        cartId: "",
        size: ""

      }
    }
  },

  computed:{
  
  },

  
  methods: {
    addToCart(sneaker) {
      let cartId = 0;
       this.$store.state.cart.forEach(item => {
         if(item.Id > cartId || !item.id){
           cartId = item.Id + 1;
         }
       });
      this.sneakerObj = sneaker;
      this.sneakerObj.cartId = cartId;
      this.sneakerObj.size = this.size;
      
      
      this.$store.commit("ADD_TO_CART", this.sneakerObj);
    },

    removeFromCart(sneaker) {
      this.$store.commit("REMOVE_FROM_CART", sneaker);
    },

    cyclePic(sneaker) {
      this.$store.commit("CYCLE_PIC", sneaker);
    },

    checkCart(sneaker) {
      let sneakersInCart = this.$store.state.cart
      if(sneakersInCart.includes(sneaker)){
         let showButton = true;
         return showButton;
      }
    },

  },
};
</script>

<style>
div.main {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  background-image: url(https://cdn.wallpapersafari.com/38/6/HPB5I7.jpg);
}
div.main div.sneaker {
  border: 1px black solid;
  border-radius: 6px;
  padding: 1rem;
  margin: 10px;
  width: 25%;
  background-color: white;
}

div.main div.sneaker div.imgDiv {
  width: 100%;
  vertical-align: top;
 
}

div.main div.sneaker img {
  width: 100%;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}

div.main div.sneaker p {
  margin: 20px;
}

div.main div.sneaker h4 {
  font-size: 1rem;
}
.dropdown {
  scroll-behavior: smooth;
  overflow: scroll;
}
</style>