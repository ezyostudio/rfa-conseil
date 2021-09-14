<template>
  <div>
    <h5 v-if="title" class="text-center">{{title}}</h5>

    <div class="row gy-4 justify-content-center">
      <div v-for="x in data" :key="x.title" class="col-12 col-md-6 col-lg-3">
        <rfa-prestation :prestation="x" :cardStyle="{'background-color': color}" />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['title', 'color', 'data']
  }

</script>
