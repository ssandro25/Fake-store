<template>
    <button class="btn btn-light mb-3 w-100 d-flex align-items-center justify-content-between d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#categoriesCollapse"
            aria-expanded="false"
            aria-controls="categoriesCollapse"
    >
        {{ $t('categories') }}

        <i class="fa-solid fa-chevron-down fs-14 fw-bold"></i>
    </button>

    <div :class="['collapse sticky-lg-top', {'show' : mobileSize}]" id="categoriesCollapse" style="top: 84px;">
        <div class="border rounded">
            <div class="list-group list-group-item-dark">
                <button type="button"
                        class="list-group-item list-group-item-action text-capitalize"
                        @click="getAllProducts"
                >
                    {{ $t('all') }}
                </button>

                <button v-for="(category, index) in categories"
                        :key="index"
                        type="button"
                        class="list-group-item list-group-item-action text-capitalize"
                        @click="pushCategory(category)"
                >
                    {{ $t(category) }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/requests/Requests"

const api = new Api()

export default {
    name: "v-categories",

    data() {
        return {
            categories: [],
            windowWidth: window.innerWidth,
            mobileSize: false
        }
    },

    methods: {
        pushCategory(category) {
            api.getProductsByCategories(category).then(response => {
                if(response.data) {
                    this.$store.dispatch('setProductList', response.data.products);
                }
            });
        },

        getAllProducts() {
            api.getProductsList().then(response => {
                if(response.data) {
                    this.$store.dispatch('setProductList', response.data.products)
                }
            })
        },

        onResize() {
            this.windowWidth = window.innerWidth
        },

        checkWindowWith() {
            if(this.windowWidth >= 992) {
                this.mobileSize = true
            } else {
                this.mobileSize = false
            }
        }
    },

    watch: {
        checkWindowWith() {
            this.checkWindowWith()
        }
    },

    mounted() {
        api.getCategories().then(response => {
            this.categories = response.data
        })

        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    created() {
        this.checkWindowWith()
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.onResize);
    },
}
</script>


<style scoped lang="scss">

</style>