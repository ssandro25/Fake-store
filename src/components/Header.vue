<template>
    <header class="container-fluid px-0 border-bottom sticky-lg-top">
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img :src="LogoWeb" width="130" alt="True zmani logo" class="d-none d-md-block">
                    <img :src="LogoMob" width="100" alt="True zmani logo" class="d-block d-md-none">
                </router-link>

                <div class="d-flex d-lg-none align-items-center gap-2 justify-content-end">
                    <HeaderButtons/>
                </div>

                <button class="navbar-toggler border-0 p-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
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

                        <div class="d-none d-lg-flex align-items-center gap-2 justify-content-end">
                            <HeaderButtons/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <Cart/>
</template>

<script>

import Cart from "@/components/Cart.vue";
import LogoWeb from "@/assets/images/tz-logo-1.png"
import LogoMob from "@/assets/images/tz-logo-2.png"
import HeaderButtons from "@/components/HeaderButtons.vue";

export default {
    name: 'v-header',

    components: {
        HeaderButtons,
        Cart
    },

    data() {
        return {
            LogoWeb,
            LogoMob
        }
    },
}
</script>

<style lang="scss" scoped>
header {
    z-index: 1030;
}
</style>