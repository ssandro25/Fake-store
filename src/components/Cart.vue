<template>
    <div class="offcanvas offcanvas-start border-end"
         data-bs-scroll="true"
         data-bs-backdrop="false"
         tabindex="-1"
         id="cart"
         aria-labelledby="cartLabel">
        <div class="offcanvas-header bg-dark border-bottom">
            <h5 class="offcanvas-title text-white" id="cartLabel">{{ $t('cart') }}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
        </div>

        <div class="offcanvas-body bg-dark">
            <p v-if="!getCartProducts.length"
                class="text-white"
            >
                {{ $t('empty_cart') }}...
            </p>

            <div v-for="product in getCartProducts" :key="product.id" class="row m-0">
                <div class="col-3 px-0">
                    <router-link :to="'/product/'+product.id" class="d-block">
                        <img :alt="product.title"
                             :src="product.thumbnail"
                             class="w-100"
                             height="73"
                             title="product.title"
                        >
                    </router-link>
                </div>

                <div class="col-9 pe-0">
                    <div class="d-flex justify-content-between">
                        <router-link :to="'/product/'+product.id" class="cart_product__title text-decoration-none text-white fw-bold d-block">
                            {{ product.title }}
                        </router-link>

                        <button type="button"
                                class="btn p-0 border-0 lh-1 remove__product"
                                @click="removeFromCart(product.id)"
                        >
                            <i class="fa-solid fa-trash fs-14 text-secondary"></i>
                        </button>
                    </div>

                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                            <p class="text-secondary fs-14 mb-0">
                                {{ product.brand }}
                            </p>

                            <p class="text-secondary fs-14 mb-0">
                                {{ product.price * product.productCount}} $
                            </p>

                            {{ product.stock }}
                        </div>

                        <div class="d-flex align-items-center border rounded">
                            <button class="btn btn-sm border-0 p-0 change_count__btn"
                                    type="button"
                            >
                                <i v-if="product.productCount > 1"
                                   class="fa-solid fa-minus text-white w-100 h-100 d-flex align-items-center justify-content-center"
                                   @click="decreaseQuantity(product.id)"
                                ></i>

                                <i v-if="product.productCount === 1"
                                   class="fa-solid fa-xmark text-danger w-100 h-100 d-flex align-items-center justify-content-center"
                                   @click="removeFromCart(product.id)"
                                ></i>
                            </button>

                            <input v-model="product.productCount"
                                   class="form-control text-center p-2 border-start border-end border-0 rounded-0 bg-dark text-white cart_count__input"
                                   type="number"
                                   readonly
                            >

                            <button class="btn btn-sm border-0 p-0 change_count__btn"
                                    type="button"
                                    @click="increaseQuantity(product.id)"
                                    :disabled="product.productCount >= product.stock"
                            >
                                <i class="fa-solid fa-plus text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>
<!--                <p v-if="product.productCount >= product.stock" class="d-block text-danger fs-12 mt-1">-->
<!--                    {{ $t('not_enough_product') }}-->
<!--                </p>-->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "v-cart",

    data() {
        return {
        }
    },

    methods: {
        removeFromCart(productID) {
            this.getCartProducts.splice(this.getCartProducts.findIndex((e) => parseInt(e.id) === productID), 1)

            this.$store.dispatch('removeCartProduct', productID)

            this.$store.dispatch('checkAddedToCart', false)
        },

        decreaseQuantity(productID) {
            let product = this.getCartProducts.find(product => product.id === productID)
            product.productCount--

            let data = {
                'productID' : productID,
                'productCount' : product.productCount
            }

            this.$store.dispatch('updateCartProductCount', data)
        },

        increaseQuantity(productID) {
            let product = this.getCartProducts.find(product => product.id === productID)
            product.productCount++

            let data = {
                'productID' : productID,
                'productCount' : product.productCount
            }

            this.$store.dispatch('updateCartProductCount', data)
        }
    },

    computed: {
        ...mapGetters([
            'getCartProducts'
        ])
    }
}
</script>


<style scoped lang="scss">
.remove__product {
    transition: .2s;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50% !important;
}

.remove__product:hover {
    background-color: #eaeaea;
}

.cart_count__input,
.change_count__btn {
    width: 40px;
    height: 35px;
}
.cart_product__title:hover {
    text-decoration: underline !important;
    opacity: .85;
}
</style>