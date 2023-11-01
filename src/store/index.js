import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: localStorage.getItem('currentLang') ? localStorage.getItem('currentLang') : 'EN',
    productList: [],
    cartProducts: [],
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
      state.cartProducts.push(product)
    },

    setSearchQuery({state}, word) {
      state.searchQuery = word
    }
  },

  modules: {
  }
})
