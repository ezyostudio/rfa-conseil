const TOKEN = "0ExS33QDLxWWVR9BaomonMxzcSLaJeDN"
export default ({
  $axios
}, inject) => {
  const axios = $axios.create({
    baseURL: 'https://send.pageclip.co/'+TOKEN,
    headers: {
      "X-REQMETHOD": "form-v1",
      "X-REQMETHOD": "send-v1",
      "Content-Type": "application/json"
    }
  });

  inject('pageclip', {
    axios,
    send(data) {
      return axios.post("", data);
    }
  })
}
