<template>
  <div class="card" :style="cardStyle">
    <div class="card-body">
      <img :src="prestation.image" :alt="prestation.alt" class="mb-3">
      <h5 class="card-title text-center text-light">{{prestation.title}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prestation', 'cardStyle']
}
</script>
