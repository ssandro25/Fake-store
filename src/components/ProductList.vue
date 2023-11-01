<template>
   <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-3">
       <div v-for="product in getProductList" :key="product.id" class="col">
           <div class="product border rounded overflow-hidden">
                <div class="product__img">
                    <router-link :to="'/product/'+product.id">
                        <img :src="product.thumbnail" class="w-100 d-block img-fluid" alt="">
                    </router-link>
                </div>

               <div class="p-3">
                   <router-link :to="'/product/'+product.id"
                                class="product__title d-block text-light text-center text-truncate text-decoration-none mb-0">
                       {{ product.title }}
                   </router-link>

                   <p class="product__price text-light text-center mt-3">
                       {{ product.price }} $
                   </p>

                   <p class="product__description text-light fs-14 mt-3 mb-0">
                       {{ product.description }}
                   </p>

                   <div class="mt-3">
                       <router-link :to="'/product/'+product.id" type="button" class="btn btn-sm btn-outline-light w-100">
                           {{ $t('view_product') }}
                       </router-link>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
import Api from "@/requests/Requests";

const api = new Api()
export default {
    name: "ProductList",

    methods: {
        getProducts() {
            api.getProductsList().then(response => {
                if(response.data) {
                    this.$store.dispatch('setProductList', response.data.products)
                }
            })
        }
    },

    mounted() {
        this.getProducts()
    },

    watch: {
        getProductList() {
            console.log(this.getProductList)
            // this.getProductList.filter(product => product.title.includes(this.getSearchQuery))
        }
    },

    computed: {
        ...mapGetters([
            'getProductList',
            'getSearchProducts',
            'getSearchQuery'
        ]),
    }
}
</script>

<style scoped lang="scss">
.product {
    &__img img {
        height: 150px;
        object-fit: cover;
    }

    &__description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 42px;
    }
}
</style>