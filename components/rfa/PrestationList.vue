<template>
  <div>
    <h4 v-if="title" class="text-center text-lg-start">{{title}}</h4>
    <h5 v-if="subtitle" class="text-center">{{subtitle}}</h5>

    <div class="row gy-4 justify-content-center">
      <div v-for="x in data" :key="x.title" class="col-12 col-md-6 col-lg-3">
        <rfa-prestation :prestation="x" :color="color" />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['title', 'color', 'data', 'subtitle']
  }

</script>
