<template>
  <div class="container card p-3 p-md-5 pt-md-4">
     <div class="text-primary d-flex flex-column flex-lg-row justify-content-around align-items-center w-100 m-auto mb-3 mb-md-4 gap-1">
       <div class="d-flex align-items-center m-auto m-lg-0">
          <icon-home width="30" height="30" />
          <h6 class="mb-0 ms-1 one-line">11 Rue des Métiers, 77181 COURTRY </h6>
        </div>

         <div class="d-flex align-items-center">
          <icon-tel width="30" height="30" />
          <h6 class="mb-0 ms-1 one-line"> 06 32 77 41 51 — 09 51 74 07 79</h6>
        </div>

        <div class="d-flex align-items-center ">
          <icon-mail width="30" height="30" />
          <h6 class="mb-0 ms-1 one-line"> regis.frachier@<span class="d-none">email.</span>rfa-conseil.fr</h6>
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

        <form ref="form">
          <div v-if="picker=='mail'">
            <div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="companyName" name="name" placeholder=" " required>
                <label for="companyName">Nom de l'entreprise</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder=" " required>
                <label for="email">Adresse Mail</label>
              </div>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Votre demande</label>
              <textarea class="form-control" name="message" id="textarea" cols="100" rows="5"
                required></textarea>
            </div>
          </div>

          <div v-if="picker=='tel'">
            <div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="companyName" name="name" placeholder=" " required>
                <label for="companyName">Nom de l'entreprise</label>
              </div>

              <div class="form-floating mb-3">
                <input type="phone" class="form-control" id="phoneNumber" name="phoneNumber" placeholder=" "
                  required>
                <label for="phoneNumber">Téléphone</label>
              </div>
            </div>

            <input type="hidden" name="message" value="Être rappelé">
            <input type="hidden" name="email" value="no-reply@rfa-conseil.fr">
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

   @media screen and (max-width: 576px) {
      font-size: .8rem;
   }
    @media screen and (max-width: 370px) {
      font-size: .6rem;
   }
}
</style>


<script>
  import {
    defineComponent,
    ref,
    useContext,
    onMounted
  } from '@nuxtjs/composition-api';

  export default defineComponent({
    setup() {
      const {
        $swal,
        $stableform,
      } = useContext()

      const form = ref(null);

      const picker = ref("mail");

      onMounted(() => {
        new $stableform({
          formId: '64a066e423b4395b06dc06e9',
          apiKey: 'B91D69E2-BBA2-4613-8783-051DFFC17E8F',
        })
          .on('success', data => {
            form.value.reset();

            $swal({
              title: "Formulaire envoyé",
              icon: 'success',
              confirmButtonColor: "#105391",
              timer: 3000
            })
          })
          .on('error', err => {
            console.error(err);
            alert(StableForm.friendlyError(err, i18n.locale));
          })
          .subscribeTo(form.value);
      })

      return {
        form,
        picker,
      };
    },


  })

</script>
