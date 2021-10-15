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

    <nav ref="lowerBar" id="lowerBar" class="navbar navbar-expand-md navbar-light d-flex align-items-start" :class="{'fixed-top': sticky}"
      style="z-index: 10">
      <a class="d-block navbar-brand position-absolute px-5 py-0" href="#">
        <img class="py-1" src="/images/logo_blanc.png" alt="Logo RFA Conseil">
      </a>
      <div class="container-fluid px-5 text-end d-flex justify-content-end">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <template v-for="link in links">
              <template v-if="link.children && link.children.length>0">
                <li ref="dropdown" class="nav-item dropdown" :key="link.label">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {{link.label}}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li v-for="child in link.children" :key="child.label">
                      <a class="dropdown-item text-end text-md-start" @click="$scrollTo(child.ref, false)">
                        {{child.label}}
                      </a>
                    </li>
                  </ul>
                </li>
              </template>

              <template v-else>
                <li class="nav-item" :key="link.label">
<<<<<<< Updated upstream
                  <a @click="$scrollTo(link.ref)" class="nav-link">
=======
                  <a @click="processLink(link)" class="nav-link text-dark">
>>>>>>> Stashed changes
                    {{link.label}}
                  </a>
                </li>
              </template>
            </template>
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



  @media screen and (max-width: 768px) {
    .navbar-toggler {
      border: none;
      outline: none;
      color: rgba($color: #000000, $alpha: 0);
    }

    .dropdown-menu {
      display: block;

    }

    .navbar-nav {
      .dropdown-menu {
        background-color: rgba($color: #000000, $alpha: 0) ;
        padding: 0;
        border: none;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s;

        .dropdown-item {
          text-align: right;
          color: rgba($color: #000000, $alpha: .55);
          padding-right: 0;
          padding-left: 0;
        }

        &.show {
          max-height: 500px;
        }
      }
    }
  }

</style>

<script>
  import {
    defineComponent,
    ref,
    onMounted,
    onUnmounted,
    useRouter,
    useContext
  } from '@nuxtjs/composition-api'

  export default defineComponent({
    props: {
      links: {
        type: Array,
        required: true
      }
    },
    setup() {
      const router = useRouter();
      const {$scrollTo} = useContext();
      const lowerBar = ref(null);
      const dropdown = ref(null);

      const sticky = ref(false);
      let stickyBreakpoint;

      const handleScroll = () => {
        if (window.pageYOffset >= stickyBreakpoint) {
          sticky.value = true;
        } else {
          sticky.value = false;
        }
      }

<<<<<<< Updated upstream
=======
      const mailto = (e) => {
        e.target.href ="mailto:"+decodeURIComponent(escape(window.atob("cmVnaXMuZnJhY2hpZXJAcmZhLWNvbnNlaWwuZnI=")));
      }

      const processLink = (link) => {
        if(link.ref) $scrollTo(link.ref);
        else if(link.path) router.push(link.path);
      }
>>>>>>> Stashed changes
      // this will register the event when the component is mounted on the DOM
      onMounted(() => {
        stickyBreakpoint = lowerBar.value.offsetTop
        if (window.screen.width <= 768) {
          sticky.value = true
        } else {
          window.addEventListener('scroll', handleScroll)
        }

      })

      // We then unregister the listener when the component is removed from the DOM
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
      })
      return {
        lowerBar,
        sticky,
<<<<<<< Updated upstream
        dropdown
=======
        dropdown,
        mailto,
        processLink
>>>>>>> Stashed changes
      };
    },
  })

</script>
