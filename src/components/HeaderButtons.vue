<template>
    <button :class="lang === 'GE' ? 'btn btn-secondary' : 'btn btn-outline-dark'"
            @click="changeLang('GE')"
    >
        <img :src="geIcon" width="20" alt="">
    </button>

    <button :class="lang === 'EN' ? 'btn btn-secondary' : 'btn btn-outline-dark'"
            @click="changeLang('EN')"
    >
        <img :src="enIcon" width="20" alt="">
    </button>

    <button class="btn btn-outline-light position-relative cart__btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#cart"
            aria-controls="cart"
    >
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="d-none d-md-inline ms-2">{{ $t('cart') }}</span>

        <span v-if="cart.length" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
            {{ cart.length }}
        </span>
    </button>
</template>

<script>
import { mapGetters } from "vuex";
import I18n from "@/helpers"
import geIcon from "@/assets/images/ge-icon.png"
import enIcon from "@/assets/images/en-icon.png"
export default {
    data() {
        return {
            geIcon,
            enIcon,
        }
    },

    computed: {
        ...mapGetters({
            lang: 'getLang',
            cart: 'getCartProducts'
        })
    },

    methods: {
        changeLang(lang) {
            this.$store.dispatch('setLang', lang)
        },
    },

    mounted() {
        I18n.global.locale = this.lang
        localStorage.setItem('currentLang', this.lang)
    },

    watch: {
        lang(val) {
            localStorage.setItem('currentLang', val)
            I18n.global.locale = val
        }
    },
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 992px) {
    .cart__btn {
        min-width: 116px;
    }
}
</style>