import axios from "axios";

export default class Api {
    getProductsList() {
        return axios.get('https://dummyjson.com/products')
    }

    getProductView(productID) {
        return axios.get('https://dummyjson.com/products/'+productID)
    }

    getCategories() {
        return axios.get('https://dummyjson.com/products/categories')
    }

    getProductsByCategories(category) {
        return axios.get('https://dummyjson.com/products/category/'+category)
    }
}