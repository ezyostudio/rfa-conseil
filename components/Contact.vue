<template>
  <div class="container card p-3 p-md-5 pt-md-4">
     <div class="text-primary d-flex flex-column flex-lg-row justify-content-around align-items-center w-75 m-auto mb-3 mb-md-4 ">
       <div class="d-flex align-items-center m-auto m-lg-0">
          <icon-home width="30" height="30" />
          <h6 class="mb-0 one-line">11 Rue des Métiers, 77181 Courtry </h6>
        </div>

        <div class="d-flex align-items-center ">
          <icon-mail width="30" height="30" />
          <h6 class="mb-0"> regis.frachier@rfa-conseil.fr</h6>
        </div>

        <div class="d-flex align-items-center">
          <icon-tel width="30" height="30" />
          <h6 class="mb-0"> 09 51 74 07 79 </h6>
        </div>
    </div>
    <div class="card-body pt-0 d-flex justify-content-center align-items-center">
      <div class="d-none d-lg-block col-lg-6 me-lg-5">
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
              <div class="form-floating mb-3">
                <input v-model="companyName" type="text" class="form-control" id="companyName" placeholder=" " required>
                <label for="companyName">Nom de l'entreprise</label>
              </div>
              <div class="form-floating mb-3">
                <input v-model="email" type="email" class="form-control" id="email" placeholder=" " required>
                <label for="email">Adresse Mail</label>
              </div>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Votre demande</label>
              <textarea v-model="message" class="form-control" name="message" id="textarea" cols="100" rows="5"
                required></textarea>
            </div>
          </div>

          <div v-if="picker=='tel'">
            <div>
              <div class="form-floating mb-3">
                <input v-model="companyName" type="text" class="form-control" id="companyName" placeholder=" " required>
                <label for="companyName">Nom de l'entreprise</label>
              </div>

              <div class="form-floating mb-3">
                <input v-model="phoneNumber" type="phone" class="form-control" id="phoneNumber" placeholder=" "
                  required>
                <label for="phoneNumber">Téléphone</label>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary px-3">{{picker=='tel'?'Être rappelé':'Envoyer'}}</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.one-line {
  @media screen and (min-width: 992px) and (max-width: 1200px) { 
      font-size: .8rem;
   }

}
</style>


<script>
  import {
    defineComponent,
    ref,
    useContext,
    onMounted
  } from '@nuxtjs/composition-api'

  export default defineComponent({
    setup() {

      const {
        $pageclip,
        $swal
      } = useContext()

      const picker = ref("mail");
      const companyName = ref("");
      const phoneNumber = ref("");
      const email = ref("");
      const message = ref("");

      const inputs = {
        companyName,
        phoneNumber,
        email,
        message
      };

      const submit = async () => {
        const data = Object.fromEntries(Object.entries(inputs).map(([key, {
          value
        }]) => [key, value]));
        const req = await $pageclip.send(data);
        if (req.status !== 200) {
          alert('Une erreur technique est survenue, merci de réessayer ultérieurement.');
        }

        //Remove input data from form
        companyName.value = ""
        phoneNumber.value = ""
        email.value = ""
        message.value = ""

        $swal({
          title: "Formulaire envoyé",
          icon: 'success',
          confirmButtonColor: "#105391",
          timer: 3000
        })
      }

      return {
        companyName,
        phoneNumber,
        email,
        message,
        picker,
        submit,
      };
    },


  })

</script>
