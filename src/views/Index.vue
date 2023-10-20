<template>
   <div class="container">
       <div class="row">
           <div class="col-lg-3">
               <Categories/>
           </div>

           <div class="col-lg-9 mt-lg-0 mt-3">
                <SearchProduct/>

                <ProductList/>
           </div>
       </div>
   </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import ProductList from "@/components/ProductList.vue";
import SearchProduct from "@/components/SearchProduct.vue";

export default {
    name: 'v-index',

    components: {
        SearchProduct,
        ProductList,
        Categories
    },
}
</script>
