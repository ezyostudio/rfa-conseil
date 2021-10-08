<template>
  <div class="container card p-3 p-md-5">
    <div class="card-body d-flex justify-content-center align-items-center">
      <div class="col-lg-6 me-lg-5">
        <icon-illustration />
      </div>
      <div class="col-12 col-lg-6">
        <h3 class="text-center mb-4">Contact</h3>
        <div class="d-flex justify-content-center mb-3">
          <div class="btn-group " role="group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked value="mail"
              v-model="picker">
            <label class="btn btn-outline-primary" for="btnradio1">
              <icon-mail /> Par mail</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="tel"
              v-model="picker">
            <label class="btn btn-outline-primary" for="btnradio2">
              <icon-tel /> Par téléphone</label>
          </div>
        </div>

        <form @submit.prevent="submit">
          <div v-if="picker=='mail'">
            <div>
              <div class="mb-3">
                <label for="companyName" class="form-label">Nom de l'entreprise</label>
                <input v-model="companyName" type="text" class="form-control" id="companyName" placeholder="John Doe" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Adresse Mail</label>
                <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
                  placeholder="john@doe.com" required>
              </div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Votre demande</label>
              <textarea v-model="message" class="form-control" name="message" id="textarea" cols="100" rows="5"
                placeholder="Je vous contacte car..." required></textarea>
            </div>
          </div>

          <div v-if="picker=='tel'">
            <div>
              <div class="mb-3">
                <label for="companyName2" class="form-label">Nom de l'entreprise</label>
                <input v-model="companyName" type="text" class="form-control" id="companyName2" placeholder="John Doe" required>
              </div>

              <div class="mb-3">
                <label for="phoneNumber" class="form-label">Numero de téléphone</label>
                <div class="input-group mb-3">
                  <!-- <span class="input-group-text" id="basic-addon1">+33</span> -->
                  <input v-model="phoneNumber" type="phone" id="phoneNumber" class="form-control" aria-label="Username"
                    aria-describedby="basic-addon1" required>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary px-3">Envoyer</button>
          </div>

        </form>

      </div>
    </div>
  </div>
</template>


<script>
  import {
    defineComponent,
    ref,
    useContext
  } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {

      const { $pageclip } = useContext()

      const picker = ref("mail");
      const companyName = ref("");
      const phoneNumber = ref("");
      const email = ref("");
      const message = ref("");

      const inputs = { companyName, phoneNumber, email, message };

      const submit = async () => {
        const data = Object.fromEntries(Object.entries(inputs).map(([key, {value}])=>[key, value]));
        const req = await $pageclip.send(data);
        if(req.status !== 200) {
          alert('Une erreur technique est survenue,merci de réessayer ultérieurement.');
        }
      }

      return {
        companyName,
        phoneNumber,
        email,
        message,
        picker,
        submit
      };
    },
  })
    mounted() {
        window.vueInstance = this
    }
}
</script>
