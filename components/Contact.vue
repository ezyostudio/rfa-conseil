<template>
  <div class="container card px-4 py-5">
    <div class="card-body">
      <h3 class="text-center mb-4">Contact</h3>

      <div class="d-flex justify-content-center mb-3">
        <div class="btn-group " role="group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked  value="mail" v-model="picker">
          <label class="btn btn-outline-primary" for="btnradio1">
            <icon-mail /> Par mail</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="tel" v-model="picker">
          <label class="btn btn-outline-primary" for="btnradio2">
            <icon-tel /> Par téléphone</label>
        </div>
      </div>

      <form class="row" v-if="picker=='mail'">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input type="text" name="company" class="form-control" id="inputCompany" placeholder="John Doe">
            <label for="inputCompany">Nom de l'entreprise</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control" id="inputEmail" placeholder="john@doe.com">
            <label for="inputEmail">Adresse Mail</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" name="textarea" id="inputMessage" cols="100" rows="6" placeholder="Je vous contacte car..."></textarea>
            <label for="inputMessage">Votre demande</label>
          </div>
        </div>
        
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>

          <form class="row" v-if="picker=='tel'">
        <div class="col-md-6">
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
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
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
