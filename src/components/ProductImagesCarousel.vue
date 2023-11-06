<template>
    <div id="productCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="(image, index) in currentProduct.images"
                 :key="index"
                 :class="['carousel-item', { 'active': index === activeIndex }]"
            >
                <img :src="image" class="d-block w-100" alt="">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

        <div class="carousel-indicators position-static overflow-auto mx-0">
            <button v-for="(image, index) in currentProduct.images"
                    :key="index"
                    type="button"
                    data-bs-target="#productCarousel"
                    :data-bs-slide-to="index"
                    :class="{'active': index === activeIndex}"
                    aria-current="true"
                    aria-label="Slide 1"
            >
                    <span class="d-flex gap-3">
                        <img :src="image" alt="" class="d-block" width="90">
                    </span>
            </button>
        </div>
        </div>
</template>

<script>
export default {
    name: "ProductImagesCarousel",

    props: {
        currentProduct: Object
    },

    data() {
        return {
            activeIndex: 0
        }
    }
}
</script>



<style scoped lang="scss">

</style>