<template>
    <div class="border rounded sticky-lg-top" style="top: 84px;">
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
</template>

<script>
import Api from "@/requests/Requests"

const api = new Api()

export default {
    name: "v-categories",

    data() {
        return {
            categories: [],
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
        }
    },

    mounted() {
        api.getCategories().then(response => {
            this.categories = response.data
        })
    }
}
</script>


<style scoped lang="scss">

</style>