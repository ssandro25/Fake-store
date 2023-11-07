<template>
   <div v-if="filteredData.length" class="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-3">
       <div v-for="product in filteredData" :key="product.id" class="col">
           <div class="product border rounded overflow-hidden">
                <div class="product__img">
                    <router-link :to="'/product/'+product.id" class="d-block">
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

    <div v-else>
        <p class="text-white text-center fs-4 mb-0">
            {{ $t('product_not_found') }}...
        </p>
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

    computed: {
        ...mapGetters([
            'getProductList',
            'getSearchQuery',
            'getSearchQuery'
        ]),

        filteredData() {
            return this.getProductList.filter(product => product.title.toLowerCase().includes(this.getSearchQuery) ||
                                                        product.title.toUpperCase().includes(this.getSearchQuery) ||
                                                        product.description.toLowerCase().includes(this.getSearchQuery) ||
                                                        product.description.toUpperCase().includes(this.getSearchQuery))

        }
    },
}
</script>

<style scoped lang="scss">
.product {
    transition: .3s;

    &:hover {
        background-color: #000;
    }
    &__img {
        overflow: hidden;
    }

    &__img img {
        height: 150px;
        object-fit: cover;
        transition: .3s;
    }

    &__img img:hover {
        filter: brightness(.4);
        transform: scale(1.2);
    }

    &__title:hover {
        opacity: .85;
        text-decoration: underline !important;
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