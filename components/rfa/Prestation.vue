<template>
  <div class="card card-small" :style="{'background-color': color}" :class="{contains: prestation.contains, noTitle: prestation.title == null}">
    <div class="card-body">
      <div v-lazy-container="{ selector: 'nuxt-img' }">
        <nuxt-img
          :src="prestation.image"
          :alt="prestation.alt"
          width="640px"
          loading="lazy"
        />
      </div>
      <h6 class="h5 text-light text-center">{{prestation.title}}</h6>
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
