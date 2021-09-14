<template>
  <div>
    <h5 class="text-center">{{title}}</h5>

    <div class="row gy-4">
      <div v-for="x in data" :key="x.title" class="col-12 col-md-6 col-lg-3">
        <rfa-prestation :prestation="x" :style="{'background-color': color}" />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['title', 'color', 'data']
  }

</script>
