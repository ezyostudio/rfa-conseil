<template>
  <header id="intro" class="container-fluid bg-primary p-0">
    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel"
      data-bs-interval="3000" data-bs-pause="false" data-bs-touch="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <nuxt-img src="/images/header/cintres.jpg" alt="cintres" class="carousel-image" />
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
      <div class="content align-self-center fw-bold d-flex flex-column justify-content-center align-items-center w-md-75">
        <iconLogo class="w-100 m-auto mb-md-5" height="160px" />
        <h1 class="text-center text-primary">Conseil et Courtage</h1>
        <h3 class="text-center mb-4">en location et entretien de vêtements de travail, linge plat et équipements
          sanitaires</h3>
        <icon-dots class="dots mb-4 mx-auto w-100" />

        <div>
          <nuxt-link v-if="backUrl" tag="button" class="btn btn-lg fs-6 fs-md-3 fw-bold btn-primary me-3" :to="backUrl">
            <icon-arrow-back />
            {{ backText }}
          </nuxt-link>
          <button
            :class="`btn btn-lg fs-6 fs-md-3 fw-bold mr-auto ml-auto ${backUrl ? 'btn-outline-primary' : 'btn-primary'}`"
            @click="$scrollTo(ctaTarget)">{{ ctaText }}
            <icon-arrow-down />
          </button>
        </div>

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
    ctaTarget: {},
    backText: {
      default: 'Retour'
    },
    backUrl: {}
  }
})
</script>

<style lang="scss" scoped>
#intro {
  margin-top: -56px;
  position: relative;
  z-index: 0;

  .carousel {
    width: 90vw;
    height: calc(95vh - 100px);
    min-height: 600px;
    z-index: -1;
    position: absolute;
    right: 0;
    margin-right: 0;
    margin-left: auto;
    padding-left: 10vw;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    overflow: hidden;

    .carousel-image {
      width: 90vw;
      height: calc(95vh - 100px);
      min-height: 600px;
      object-fit: cover;
    }
  }

  .navbar-toggler {
    border: none;
  }


  h2 {
    font-weight: 300;
  }

  h3 {
    color: #4E4E4E;
    font-weight: 300;
  }

  .container {
    max-width: 90vw;
    z-index: 1;

    // TO-DO: responsive breakpoint
    height: calc(95vh - 100px);
    min-height: 600px;

    margin-right: 0;
    margin-left: auto;
    padding-left: 10vw;

    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 22.81%, rgba(255, 255, 255, 0.40) 98.88%);
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      margin-left: -15vw;
      width: 100%;

      .btn {
        border-radius: 40px;
      }
    }
  }

  .dots {
    max-width: 252px;
  }
}
</style>
