<template>
    <div class="mb-3">
        <input v-model="getSearchQuery"
               type="text"
               class="form-control form-control-lg"
               placeholder="Enter product name"
               @input="searchProduct"
        >
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SearchProduct",

    // data() {
    //     return {
    //         search: ''
    //     }
    // },
    //
    // methods: {
    //     searchProduct() {
    //         this.$store.dispatch('setSearchProducts', this.search)
    //     }
    // },

    computed: {
        ...mapGetters([
            'getSearchQuery'
        ])
    }
}
</script>


<style scoped lang="scss">

</style>