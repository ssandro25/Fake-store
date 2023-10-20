<template>
    <div class="border rounded text-white p-3">
        <h1 class="fs-5">
            {{ currentProduct.title }}
        </h1>

        <div class="mt-3">
            <span class="badge text-bg-info fs-6">
                {{ currentProduct.brand }}
            </span>
        </div>

        <p class="fs-14 mt-3 mb-0">
            {{ currentProduct.description }}
        </p>
    </div>
</template>

<script>
export default {
    name: "ProductTitles",

    props: {
        currentProduct: Object
    }
}
</script>



<style scoped lang="scss">

</style>