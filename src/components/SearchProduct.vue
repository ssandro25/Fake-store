<template>
    <div class="position-relative mb-3">
        <input v-model="search"
               type="text"
               class="form-control form-control-lg search_input"
               :placeholder="$t('enter_product_name_or_description')"
               @input="searchProduct"
        >

        <button v-if="search !== ''"
                type="button"
                class="btn border-0 p-0 clear__search_input"
                @click="clearSearchProduct"
        >
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SearchProduct",

    data() {
        return {
            search: ''
        }
    },

    methods: {
        searchProduct() {
            this.$store.dispatch('setSearchQuery', this.search)
        },

        clearSearchProduct() {
            this.search = '';
            this.$store.dispatch('setSearchQuery', '')
        }
    },

    computed: {
        ...mapGetters([
            'getSearchQuery'
        ])
    }
}
</script>


<style scoped lang="scss">
.clear__search_input {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search_input {
    padding-right: 46px;
}
</style>