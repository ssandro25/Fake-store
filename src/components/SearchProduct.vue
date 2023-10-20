<template>
    <div class="mb-3">
        <input v-model="search"
               type="text"
               class="form-control form-control-lg"
               placeholder="Enter product name"
               @input="searchProduct"
        >
    </div>
</template>

<script>
export default {
    name: "SearchProduct",

    data() {
        return {
            search: ''
        }
    },

    methods: {
        searchProduct() {
            this.$store.dispatch('setSearchProducts', this.search)
        }
    },
}
</script>


<style scoped lang="scss">

</style>