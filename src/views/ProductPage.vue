<template>
   <div class="container">
       <div class="row">
            <div class="col-lg-6">
                <ProductImagesCarousel :current-product="currentProduct"/>
            </div>

            <div class="col-lg-3">
                <ProductTitles :current-product="currentProduct"/>
            </div>

           <div class="col-lg-3 mt-lg-0 mt-3">
                <ProductInfo :current-product="currentProduct"/>
           </div>
       </div>
   </div>
</template>

<script>
import Api from "@/requests/Requests";
import ProductImagesCarousel from "@/components/ProductImagesCarousel.vue";
import ProductTitles from "@/components/ProductTitles.vue";
import ProductInfo from "@/components/ProductInfo.vue";

const api = new Api()
export default {
    name: "ProductPage",

    components: {
        ProductInfo,
        ProductTitles,
        ProductImagesCarousel
    },

    data() {
        return {
            currentProduct: [],
        }
    },

    mounted() {
        api.getProductView(this.$route.params.productID).then(response => {
            this.currentProduct = response.data
        })
    }
}
</script>

<style lang="scss">
.carousel-indicators [data-bs-target] {
    width: auto !important;
    height: auto !important;
}
.carousel-inner img {
    height: 350px;
    object-fit: cover;
 }
</style>