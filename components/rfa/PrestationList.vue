<template>
  <div>
    <div class="d-flex justify-content-center flex-column align-items-center">
      <rfa-title :color="color" type="subtitle" v-if="title" class="text-center">{{title}}</rfa-title>
      <rfa-title tag="h5" :color="color" type="subtitle" v-if="subtitle" class="text-center">{{subtitle}}</rfa-title>
    </div>


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
