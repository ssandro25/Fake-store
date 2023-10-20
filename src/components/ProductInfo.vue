<template>
    <div class="border rounded text-white p-3">
        <div class="d-flex align-items-center justify-content-between">
            <p class="mb-0">
                Price: {{ currentProduct.price }} $
            </p>

            <p class="fs14 text-success mb-0">
                In stock: {{ currentProduct.stock }}
            </p>
        </div>

        <div class="d-flex  align-items-center gap-2 mt-3 mb-0">
            <p class="mb-0">
                Rate: {{ currentProduct.rating }}
            </p>

            <CheckRating :current-product="currentProduct"/>
        </div>

        <div class="d-flex align-items-center gap-2 mt-3">
            <input type="number"
                   :readonly="addedToCart"
                   v-model="productCount"
                   class="form-control form-control-sm text-white"
                   :class="{
                       'bg-black' : productCount <= currentProduct.stock && !addedToCart,
                       'bg-danger': productCount > currentProduct.stock,
                       'bg-secondary' : addedToCart
                   }
                 "
            >

            <button type="button"
                    class="btn btn-sm btn-outline-light w-100"
                    :disabled="addedToCart || productCount > currentProduct.stock || productCount === 0"
                    @click="addToCart()"
            >
                <span v-if="!addedToCart">
                    <i class="fa-solid fa-cart-shopping me-1"></i>
                    Add to basket
                </span>

                <span v-if="addedToCart">
                    <i class="fa-solid fa-check"></i> Added
                </span>
            </button>
        </div>

        <p v-if="productCount > currentProduct.stock" class="d-block text-danger fs-12 mt-1">
            Not enough product in stock
        </p>
    </div>
</template>

<script>
import CheckRating from "@/components/CheckRating.vue";

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
            addedToCart: false,
        }
    },

    methods: {
        addToCart() {
            this.addedToCart = true

            // eslint-disable-next-line vue/no-mutating-props
            this.currentProduct.productCount = this.productCount

            this.$store.dispatch('setCartProducts', this.currentProduct)
        }
    }
}
</script>



<style scoped lang="scss">

</style>