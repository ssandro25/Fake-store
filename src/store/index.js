import {createStore} from 'vuex'

export default createStore({
  state: {
    lang: localStorage.getItem('currentLang') ? localStorage.getItem('currentLang') : 'EN',
    productList: [],
    cartProducts: localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : [] ,
    searchQuery: '',
  },

  getters: {
    getLang: state => state.lang,
    getProductList: state => state.productList,
    getCartProducts: state => state.cartProducts,
    getSearchQuery: state => state.searchQuery,
  },

  mutations: {
  },

  actions: {
    setLang({state}, language) {
      state.lang = language
    },

    setProductList({state}, products) {
      state.productList = products
    },

    setCartProducts({state}, product) {
      state.cartProducts.push(product);

      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },

    updateCartProductCount({state}, data) {
      let id = data.productID
      let count = data.productCount

      state.cartProducts = state.cartProducts.map(product => {
        if(product.id === id) {
          product.productCount = count
        }

        return product
      })

      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },

    removeCartProduct({state}, productID) {
      state.cartProducts = state.cartProducts.splice(state.cartProducts.findIndex((e) => parseInt(e.id) === productID), 1)

      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },

    setSearchQuery({state}, word) {
      state.searchQuery = word
    },
  },

  modules: {
  }
})
