import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  silent: false,
  adapter: {
    loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
      console.log('loaded')

    },
    loading (listender, Init) {
        console.log('loading')
    },
    error (listender, Init) {
        console.log('error')
    }
}
})


