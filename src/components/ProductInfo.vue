<template>
    <div class="border rounded text-white p-3">
        <div class="d-flex align-items-center justify-content-between">
            <p class="mb-0">
                {{ $t('price') }}: {{ currentProduct.price }} $
            </p>

            <p class="fs14 text-success mb-0">
                {{ $t('in_stock') }}: {{ currentProduct.stock }}
            </p>
        </div>

        <div class="d-flex align-items-center gap-2 mt-3 mb-0">
            <p class="mb-0">
                {{ $t('rate') }}: {{ currentProduct.rating }}
            </p>

            <CheckRating :current-product="currentProduct"/>
        </div>

        <div class="d-flex align-items-center gap-2 mt-3">
            <input v-if="!getAddedToCart"
                   v-model="productCount"
                   type="number"
                   class="form-control form-control-sm text-white"
                   :class="{
                       'bg-black' : productCount <= currentProduct.stock && !getAddedToCart,
                       'bg-danger': productCount > currentProduct.stock
                   }
                 "
            >

            <button type="button"
                    class="btn btn-sm btn-outline-light w-100 text-truncate"
                    :disabled="getAddedToCart || productCount > currentProduct.stock || productCount === 0"
                    @click="addToCart()"
            >
                <span v-if="!getAddedToCart">
                    <i class="fa-solid fa-cart-shopping me-1"></i>
                    {{ $t('add_to_cart') }}
                </span>

                <span v-if="getAddedToCart">
                    <i class="fa-solid fa-check"></i>
                    {{ $t('added') }}
                </span>
            </button>
        </div>

        <span v-if="getAddedToCart"
              class="d-block fs-14 text-center mt-2 cursor-pointer text-decoration-underline"
              data-bs-toggle="offcanvas"
              data-bs-target="#cart"
              aria-controls="cart">
                        კალათის გახსნა
        </span>

        <p v-if="productCount > currentProduct.stock" class="d-block text-danger fs-12 mt-1">
            {{ $t('not_enough_product') }}
        </p>
    </div>
</template>

<script>
import CheckRating from "@/components/CheckRating.vue";
import {mapGetters} from "vuex";

export default {
    name: "ProductInfo",

    components: {
        CheckRating
    },

    props: {
        currentProduct: Object
    },

    data() {
        return {
            productCount: 0,
        }
    },

    methods: {
        addToCart() {
            // eslint-disable-next-line vue/no-mutating-props
            this.currentProduct.productCount = this.productCount

            this.$store.dispatch('setCartProducts', this.currentProduct)

            this.$store.dispatch('checkAddedToCart', true)
        },

        checkAddedToCart() {
            if(this.getCartProducts && this.getCartProducts.length > 0) {
                let cartProductID = this.getCartProducts.find(product => product.id).id;
                let currentProductID = parseInt(this.$route.params.productID)

                if( cartProductID === currentProductID) {
                    this.$store.dispatch('checkAddedToCart', true)
                } else {
                    this.$store.dispatch('checkAddedToCart', false)
                }
            }
        }
    },

    // watch: {
    //     getCartProducts() {
    //         this.checkAddedToCart()
    //     }
    // },

    mounted() {
        this.checkAddedToCart()
    },

    computed: {
        ...mapGetters([
            'getCartProducts',
            'getAddedToCart'
        ])
    }
}
</script>



<style scoped lang="scss">

</style>