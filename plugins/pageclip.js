const TOKEN = "api_udYuQKaQvbkOMQNGlwwgtZVFmbsmJOIf"
export default ({
  $axios
}, inject) => {

  const axios = $axios.create({
    baseURL: 'https://api.pageclip.co/',
    auth: {
      username: TOKEN
    },
    headers: {
      'X-Custom-Header': 'foobar',
      'Accept': 'application/vnd.pageclip.v1+json'
    }
  });
  inject('pageclip', {
    axios,
    send(data) {
      axios.post(`data/`)
    }
  })
}
