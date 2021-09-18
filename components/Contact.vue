<template>
  <div class="container card px-4 py-5">
    <div class="card-body">
      <h3 class="text-center mb-4">Contact</h3>

      <div class="d-flex justify-content-center mb-3">
        <div class="btn-group " role="group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked  value="mail" v-model="picker">
          <label class="btn btn-outline-primary" for="btnradio1">
            <icon-mail /></label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="tel" v-model="picker">
          <label class="btn btn-outline-primary" for="btnradio2">
            <icon-tel /></label>
        </div>
      </div>

      <form class="row" v-if="picker=='mail'">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Adresse Mail</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="john@doe.com">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Nom de l'entreprise</label>
            <input type="name" class="form-control" id="exampleInputPassword1" placeholder="John Doe">
          </div>
        </div>
        <div class="mb-3 col-md-6">
          <label for="textarea" class="form-label">Votre demande</label>
          <textarea class="form-control" name="textarea" id="textarea" cols="100" rows="6"
            placeholder="Je vous contacte car..."></textarea>
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