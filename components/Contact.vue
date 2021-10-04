<template>
  <div class="container card p-5">
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

        <form action="">
          <div v-if="picker=='mail'">
            <div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Nom de l'entreprise</label>
                <input type="name" class="form-control" id="exampleInputPassword1" placeholder="John Doe">
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Adresse Mail</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="john@doe.com">
              </div>
            </div>
            <div class="mb-3">
              <label for="textarea" class="form-label">Votre demande</label>
              <textarea class="form-control" name="textarea" id="textarea" cols="100" rows="5"
                placeholder="Je vous contacte car..."></textarea>
            </div>
          </div>

          <div v-if="picker=='tel'">
            <div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Nom de l'entreprise</label>
                <input type="name" class="form-control" id="exampleInputPassword1" placeholder="John Doe">
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Numero de téléphone</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">+33</span>
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
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
  export default {
    data() {
      return {
        picker: "mail"
      }
    },

    mounted() {
      window.vueInstance = this
    }
  }

</script>
