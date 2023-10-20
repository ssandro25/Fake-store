<template>
    <Header/>

    <main class="container-fluid px-0 bg-dark py-5">
        <router-view/>
    </main>

    <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Footer,
        Header
    }
}
</script>

<style lang="scss">

</style>
