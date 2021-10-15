<template>
      <header id="intro" class="container-fluid bg-primary p-0">
      <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel"
        data-bs-interval="5000" data-bs-pause="false" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <nuxt-img src="/images/header/cintres.jpg" alt="cintres" class="carousel-image" loading="lazy" />
          </div>
          <div class="carousel-item">
            <nuxt-img src="/images/prestations/linges/hotel.jpg" alt="coussin" class="carousel-image" loading="lazy" />
          </div>
          <div class="carousel-item">
            <nuxt-img src="/images/header/serviette.jpg" alt="serviette" class="carousel-image" loading="lazy" />
          </div>
        </div>

      </div>
      <div class="container d-flex justify-content-center">
        <div class="content align-self-center fw-bold d-md-block d-flex flex-column justify-content-center w-75">
          <iconLogo class="w-100 m-auto mb-md-5" />
          <h2 class="text-center text-md-start text-primary">Conseil et Courtage</h2>
          <h3 class="text-center text-md-start ps-md-5 mb-4">en location et entretien de vêtements de travail et autres
            prestations</h3>
          <icon-dots class="mb-4 w-100" />
          <button class="btn btn-lg fs-6 fs-md-3 fw-bold btn-primary" @click="$scrollTo(ctaTarget)">{{ctaText}}
            <icon-arrow-down />
          </button>
        </div>
      </div>
    </header>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
   
  },
  props: {
    ctaText: {
      default: 'En savoir plus'
    },
    ctaTarget: {}
  }
})
</script>
