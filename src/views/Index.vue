<template>
   <div class="container">
       <div class="row">
           <div class="col-12 d-none d-md-block mb-5">
               <img src="../assets/images/cover-bg.png" class="w-100 img-fluid rounded" alt="" style="object-fit: cover; height: 400px;">
           </div>

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
