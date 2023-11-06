import { createStore } from 'vuex'

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

    setSearchQuery({state}, word) {
      state.searchQuery = word
    },
  },

  modules: {
  }
})
