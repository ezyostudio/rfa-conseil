<template>
  <div>
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

    <nav ref="lowerBar" class="navbar navbar-expand-lg navbar-light bg-transparent" style="z-index: 10">
      <a class="d-none d-md-block navbar-brand position-absolute px-5 mt-n4" href="#">
        <img src="/images/logo-light.png" alt="" height="70px">
      </a>
      <div class="container-fluid px-5">
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">EXPERTISE</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">PRESTATION</a></li>
            <li class="nav-item"><a class="nav-link" href="#!">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  // import {
  //   defineComponent,
  //   ref
  // } from '@nuxtjs/composition-api'

  // export default defineComponent({
  //   setup() {
  //     const lowerBar = ref(null);


  //     const handleScroll = () => {
  //       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //         console.log('yay!')
  //       }
  //     }

  //     // .. code

  //     // this will register the event when the component is mounted on the DOM
  //     onMounted(() => {
  //       window.addEventListener('scroll', handleScroll)
  //     })

  //     // We then unregister the listener when the component is removed from the DOM
  //     onUnmounted(() => {
  //       window.removeEventListener('scroll', handleScroll)
  //     })
  //     return {
  //       lowerBar
  //     };
  //   },
  // })

</script>
