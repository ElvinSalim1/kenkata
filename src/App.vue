<template>
  <div>
    <navbar/> 
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    Footer
  }
}
</script>
<style>
  :root {
    --green: #20D3C2; 
  }
  .green-color {
    color: var(--green);
  }
  .green {
    background-color: #20D3C2;
  }
  * {
    font-family: 'Roboto', sans-serif;
  }
</style>
