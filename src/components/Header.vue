<template>
    <header class="container-fluid px-0 border-bottom sticky-lg-top">
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand" href="#">Fake Market</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                     aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active">
                                    {{ $t('main') }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/about" class="nav-link active">
                                    {{ $t('about_us') }}
                                </router-link>
                            </li>
                        </ul>

                        <div class="d-flex align-items-center gap-2 justify-content-end">
                            <button class="btn btn-outline-light me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="cart">
                                <i class="fa-solid fa-cart-shopping"></i>
                                {{ $t('cart') }}
                            </button>

                            <button :class="lang === 'GE' ? 'btn btn-secondary' : 'btn btn-outline-dark'"
                                    @click="changeLang('GE')"
                            >
                                <img :src="geIcon" width="20"  alt="">
                            </button>
                            
                            <button :class="lang === 'EN' ? 'btn btn-secondary' : 'btn btn-outline-dark'"
                                    @click="changeLang('EN')"
                            >
                                <img :src="enIcon" width="20"  alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <Cart/>
</template>

<script>
import { mapGetters } from "vuex";
import I18n from "@/helpers"
import geIcon from "@/assets/images/ge-icon.png"
import enIcon from "@/assets/images/en-icon.png"
import Cart from "@/components/Cart.vue";

export default {
    name: 'v-header',

    components: {
        Cart
    },

    data() {
      return {
          geIcon,
          enIcon
      }
    },

    computed: {
        ...mapGetters({
            lang: 'getLang'
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

<style lang="scss" scoped>
header {
    z-index: 1030;
}
</style>