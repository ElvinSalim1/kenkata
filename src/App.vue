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
    --orange: #FFBB00;
    --green: #20D3C2; 
    --blue: #0E153D; 
    --btnHover: #098d80; 
    --gray: #333333;
    --lightgray: #8A8A8A;  
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
