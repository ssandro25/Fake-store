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

    methods: {
        getCurrentProduct(productID) {
            api.getProductView(productID).then(response => {
                this.currentProduct = response.data
            })
        }
    },

    watch: {
        '$route'(e) {
            this.getCurrentProduct(e.params.productID) // თუ იგივე გვერდზე ვარ და მხოლოდ და მხოლოდ როუტი განიცდის ცვლილებას
            // თავიდან /product/:id (პროდუქტის ნახვის გვერდი) არ არის mounted, ხოლო როცა უკვე mounted არის, საჭიროა watch-ით ვუყუროთ მაგ route-ს ცვლილებას
        }
    },

    mounted() {
       this.getCurrentProduct(this.$route.params.productID) // თუ სხვა გვერდიდან გადმოვედი ამ გვერდზე გაეშვება mounted
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