<template>
    <div>
        <firstNavbar class="nav"/>
        <secondNavbar />
        <hr>
        <thirdNavbar />
    </div>
</template>

<script>
import firstNavbar from '@/components/firstNavbar.vue'
import secondNavbar from '@/components/secondNavbar.vue'
import thirdNavbar from '@/components/thirdNavbar.vue'

export default {
    name: 'Navbar',
    components: {
        firstNavbar,
        secondNavbar,
        thirdNavbar
    }
}
</script>


<style scoped>

hr {
    margin: 0;
}

.nav {
    display: none;
}

@media (min-width: 992px) { 
    .nav {
        display: block;
    }
}

</style>
