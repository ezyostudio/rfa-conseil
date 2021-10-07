<template>
  <div class="card" :style="{'background-color': color}" :class="{contains: prestation.contains, noTitle: prestation.title == null}">
    <div class="card-body">
      <nuxt-img :src="prestation.image" :alt="prestation.alt" />
      <rfa-title type="subtitle" :color="color">{{prestation.title}}</rfa-title>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['prestation', 'cardStyle', 'color'],
  }

</script>

<style lang="scss" scoped>
  .card {
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
      background-color: white;
      margin-bottom: 1em;
    }

    &.contains {
      img {
        object-fit: contain;

      }
    }

    &.noTitle {
      h5 {
        display: none;
      }

      img {
        margin-bottom: 0;
      }
    }
  }

</style>
