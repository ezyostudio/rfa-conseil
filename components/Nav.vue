<template>
  <div :style="{height: sticky?'112px':undefined}">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary d-none d-md-block">
      <div class="container-fluid px-5">
        <ul class="ms-auto navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <icon-tel /> 09 51 74 07 79
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <icon-mail /> regis.frachier@rfa-conseil.fr
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <nav ref="lowerBar" id="lowerBar" class="navbar navbar-expand-lg navbar-light bg-transparent"
      :class="{'fixed-top': sticky}" style="z-index: 10">
      <a class="d-none d-md-block navbar-brand position-absolute px-5 py-0" href="#">
        <img class="py-1" src="/images/logo_blanc.png" alt="Logo RFA Conseil">
      </a>
      <div class="container-fluid px-5">
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li v-for="link in links" :key="link.label" class="nav-item">
              <a @click="$scrollTo(link.ref)" class="nav-link">
                {{link.label}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  #lowerBar {
    img {
      display: none;
    }
    transition: all .3s;

    &.fixed-top {
      background-color: rgba(255, 255, 255, 0.5) !important;
      backdrop-filter: blur(8px);

      img {
        display: block;
      }
    }

    .navbar-brand img {
      vertical-align: bottom;
      height: 50px;
    }
  }

  li {
    cursor: pointer;
  }

</style>

<script>
  import {
    defineComponent,
    ref,
    onMounted,
    onUnmounted,
  } from '@nuxtjs/composition-api'

  export default defineComponent({
    props: {
      links: {
        type: Array,
        required: true
      }
    },
    setup() {
      const lowerBar = ref(null);
      const sticky = ref(false);
      let stickyBreakpoint;

      const handleScroll = () => {
        if (window.pageYOffset >= stickyBreakpoint) {
          sticky.value = true;
        } else {
          sticky.value = false;
        }
      }

      // .. code

      // this will register the event when the component is mounted on the DOM
      onMounted(() => {
        stickyBreakpoint = lowerBar.value.offsetTop
        window.addEventListener('scroll', handleScroll)
      })

      // We then unregister the listener when the component is removed from the DOM
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
      return {
        lowerBar,
        sticky
      };
    },
  })

</script>
