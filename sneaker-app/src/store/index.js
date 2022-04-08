import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    cart:[],
    sneakers: [
      {
        name: "Jordan 4 Retro",
        subname: "Travis Scott Cactus Jack",
        images: ["https://stockx-360.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Images/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Lv2/img21.jpg?auto=format,compress&w=1117&q=90&dpr=2",
          "https://stockx-360.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Images/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Lv2/img11.jpg?auto=format,compress&w=1117&q=90&dpr=2"
        ]
        ,
        price: "$1105",
        inCart: false
      },
      {
        name: "Jordan 1 Retro High",
        subname: "J Balvin",
        images: [
          "https://media.restocks.net/products/DC3481-900/air-jordan-1-retro-high-j-balvin-3-1000.png"
        ],
        price: "$572",
        inCart: false
      },
      {
        name: "Jordan 1 Retro High",
        subname: "UNC",
        images: [
          "https://www.universekickz.com/wp-content/uploads/2021/02/img22.jpg"],
        price: "$396",
        inCart: false
      },
      {
        name: "Jordan 3 Retro",
        subname: "Varsity Royal Cement",
        images: ["https://mag.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/C/T/CT8532-400_2_1.png",
        ],
        price: "$235",
        inCart: false
      },
      {
        name: "Jordan 4 Retro",
        subname: "Military Blue",
        images: [
          "http://jordansdaily.com/wp-content/uploads/2016/06/air-jordan-4-military-blue-4.png"],
        price: "$850",
        inCart: false
      },
      {
        name: "Jordan 4 Retro",
        subname: "Crimson",
        images: ["https://houseofheat.co/app/uploads/2021/02/air-jordan-4-red-thunder-ct8527-016-release-date.jpg"],
        price: "$330",
        inCart: false
      },
      {
        name: "Jordan 4 Retro",
        subname: "Thunder",
        images: ["https://stockx.imgix.net/Air-Jordan-4-Retro-Thunder-2012-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256"],
        price: "$330",
        inCart: false
      },

    ]
  },
  mutations: {

    ADD_TO_CART(state, sneaker) {
      let index = state.sneakers.indexOf(sneaker.subname)
      if (sneaker.inCart === false) {
        sneaker.inCart = true;
        state.cart.push(sneaker)

      }else  if (sneaker.inCart === true) {
        state.cart.splice(index,1)
        sneaker.inCart = false;
      }
      
    
    },

    CYCLE_PIC(state, sneaker) {
      let index = state.index
      index++
      if(index === sneaker.images.length){
        sneaker.images = sneaker.images[0]
      }else{
      sneaker.images = sneaker.images[index]
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
