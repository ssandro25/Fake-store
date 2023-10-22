import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: localStorage.getItem('currentLang') ? localStorage.getItem('currentLang') : 'EN',
    productList: [],
    searchProducts: [],
    cartProducts: [],
  },

  getters: {
    getLang: state => state.lang,
    getProductList: state => state.productList,
    getSearchProducts: state => state.searchProducts,
    getCartProducts: state => state.cartProducts,
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

    // setSearchProducts({state}, word) {
    //   [...state.getProductList].filter(product => product.title.toLowerCase().includes(word.toLowerCase()))
    // }

    setSearchProducts({ state }, searchQuery) {
      state.searchProducts = state.productList.filter(product => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    },


    setCartProducts({state}, product) {
      state.cartProducts.push(product)
    },
  },

  modules: {
  }
})
