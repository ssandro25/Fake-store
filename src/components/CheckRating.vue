<template>
    <div v-if="currentProduct.rating === 5">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
    </div>

    <div v-if="currentProduct.rating > 4 && currentProduct.rating < 5">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star-half-stroke text-warning"></i>
    </div>

    <div v-if="currentProduct.rating === 4">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating > 3 && currentProduct.rating < 4">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star-half-stroke text-warning"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating === 3">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating > 2 && currentProduct.rating < 3">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star-half-stroke text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating === 2">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating > 1 && currentProduct.rating < 2">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star-half-stroke text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating === 1">
        <i class="fa-solid fa-star text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating > 0 && currentProduct.rating < 1">
        <i class="fa-solid fa-star-half-stroke text-warning"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>

    <div v-if="currentProduct.rating === 0">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    </div>
</template>

<script>
export default {
    name: "CheckRating",

    props: {
        currentProduct: Object
    }
}
</script>



<style scoped lang="scss">

</style>