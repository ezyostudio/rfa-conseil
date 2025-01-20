<template>
  <div class="bg-primary">
    <!-- Responsive navbar-->
    <Nav :links="[
      {
        label: 'EXPERTISE',
        ref: () => $refs.expertiseSection
      },
      {
        label: 'PRESTATIONS',
        children: [{
          label: 'AUDIT TECHNIQUE DES PRESTATIONS',
          ref: () => $refs.evaltechStep,
        },{
          label: 'AUDIT DES CLAUSES CONTRACTUELLES',
          ref: () => $refs.auditStep,
        },{
          label: 'NÉGOCIATION TARIFAIRE',
          ref: () => $refs.negotarifStep,
        }]
      },
      {
        label: 'CONTACT',
        ref: () => $refs.contactSection
      }
    ]" />

    <!-- Header-->
    <rfa-header :ctaTarget="()=> $refs.expertiseSection" />

    <section class="container-fluid bg-primary mb-5" id="expertise" ref="expertiseSection">
      <div class="container card px-4 py-5">
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-7 order-1 order-md-0">
              <p class="text-justify">RFA CONSEIL propose un service de <b>Conseil</b> et de <b>Courtage</b>
                spécialisé en location et entretien de vêtements de travail, linge plat et équipements sanitaires sur toute la France.
                <br><br>
                Après plus de 20 ans d’expérience chez les loueurs de linge, l’expertise et le réseau de RFA CONSEIL,
                <b>créée en 2015</b>, permet aux clients industrie, hôtellerie, restauration, santé, de :</p>
                <ul class="ms-2">
              <li>Optimiser leurs besoins,</li>
              <li>Gagner du temps,</li>
              <li>Assurer l’obtention d’une baisse des coûts significative.</li>
            </ul>
            <p class="text">La rémunération perçue est conditionnée aux économies générées par son intervention.</p>
            <p class="text">Un principe simple qui vous protège et nous engage :</p>
            <p><span class="text-primary fw-bold">Pas d’économie, pas d’honoraires</span> = un principe simple qui vous protège et nous engage.</p>
            </div>
            <div class="col align-self-center text-center order-0 order-md-1 mb-md-0">
              <iconLogo class="w-50 mb-3" />
              <h4 class="text-primary fw-bold text-center">Vous assure un service indépendant car non rémunérée par le prestataire qui prendrait le marché.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-primary mb-5" id="prestations" ref="prestationSection">
      <div class="container card px-4 py-5 position-static">
        <div class="card-body">
          <p class=" mb-3"><b>Une prestation déclinée en trois volets pour répondre aux besoins de chaque client :
          </b></p>

          <div class="accordion" ref="accordion">

            <rfa-title type="title" ref="evaltechStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_one"
              role="button" aria-expanded="false" aria-controls="collapsible_one">
              <icon-chevron-right /> 1. AUDIT TECHNIQUE DES PRESTATIONS </rfa-title>

            <div id="collapsible_one" class="collapse" data-bs-parent="#accordionPrestation">
              <ul class="mb-4">
                <li>
                  Nous analysons en profondeur vos besoins et vos services actuels.

                </li>
                <li>Nous identifions les axes d’amélioration.
                </li>
                <li>
                  Nous élaborons ensemble un nouveau cahier des charges approfondi.
                </li>
                <li>
                  Vous recevez des conseils sur mesures en adéquation avec votre réalité et vos contraintes.

                </li>
              </ul>

              <rfa-prestation-list title="VÊTEMENTS DE TRAVAIL" subtitle="Standard" class="mb-5" color="#105391"
                :data="prestations.standard" />
              <rfa-prestation-list subtitle="EPI" class="mb-5" color="#105391" :data="prestations.epi" />
              <rfa-prestation-list title="ARMOIRES VESTIAIRES" class="mb-5" color="#727676"
                :data="prestations.armoires" />
              <rfa-prestation-list title="LINGE PLAT" class="mb-5" color="#32AFDA" :data="prestations.linges" />
              <rfa-prestation-list title="ÉQUIPEMENTS SANITAIRES" class="mb-5" color="#94D0E6"
                :data="prestations.sanitaires" />
              <rfa-prestation-list title="TAPIS ANTISALISSURES" class="mb-5" color="#44607D"
                :data="prestations.tapis" />
              <rfa-prestation-list title="LAVETTES INDUSTRIELLES" class="mb-5" color="#004873"
                :data="prestations.lavette" />
              <rfa-prestation-list title="FONTAINES DÉGRAISSANTES" class="mb-5" color="#64518D"
                :data="prestations.fontaine_d" />
              <rfa-prestation-list title="FONTAINES À EAU" class="mb-5" color="#7E7D97"
                :data="prestations.fontaine_eau" />
              <rfa-prestation-list title="DISTRIBUTION AUTOMATIQUE" class="mb-5" color="#4B4C7D"
                :data="prestations.distributeur" />
            </div>

            <rfa-title type="title" ref="auditStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_three"
              role="button" aria-expanded="false" aria-controls="collapsible_three">
              <icon-chevron-right /> 2. AUDIT DES CLAUSES CONTRACTUELLES</rfa-title>


            <div id="collapsible_three" class="collapse" data-bs-parent="#accordionPrestation">

              <p >Nous examinons vos contrats actuels et nous optimisons les clauses de vos futurs contrats.</p>

              <ul>
                <li>Soit avec votre prestataire actuel,</li>
                <li>Soit avec la concurrence,
                </li>
              </ul>

              <p class="mb-4 text-primary fw-bold">C’est l’assurance pour vous d’avoir une protection maximale et d’obtenir des conditions avantageuses.              </p>

              <div class="row d-flex justify-content-center gx-5">
                <div class="col-md-4 img-sizer me-md-5 mb-3">
                  <nuxt-img src="/images/prestations/contrat/signature.jpg" alt="signature" class="img-fluid" />
                </div>
                <div class="col-md-4 img-sizer mb-3">
                  <nuxt-img src="/images/prestations/contrat/mains.jpg" alt="mains" class="img-fluid" />
                </div>
              </div>
            </div>

            <rfa-title type="title" ref="negotarifStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_two"
              role="button" aria-expanded="false" aria-controls="collapsible_two">
              <icon-chevron-right /> 3. NÉGOCIATION TARIFAIRE </rfa-title>

            <div id="collapsible_two" class="collapse" data-bs-parent="#accordionPrestation">
              <p>Nous négocions les tarifs avec les blanchisseurs et les loueurs de linge pour vous garantir les meilleures conditions financières en conformité avec le cahier des charges établi ensemble en fonction de vos nouveaux besoins.
              </p>
              <ul>
                <li class="mb-3">Soit par la renégociation de votre contrat existant avec votre prestataire,</li>
                <li>Soit par la mise en concurrence de celui-ci.</li>
              </ul>

              <div class="row d-flex justify-content-center align-items-center mt-5 mb-3 gx-5">
                <div class="col-md-4 img-sizer me-md-5 mb-3">
                  <nuxt-img src="/images/prestations/nego/rfa-1.jpg" alt="tableau" class="img-fluid" />
                </div>
                <div class="col-md-4 img-sizer mb-3">
                  <nuxt-img src="/images/prestations/nego/presentation.jpg" alt="presentation" class="img-fluid" />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-primary mb-5" id="contact" ref="contactSection">
      <Contact />
    </section>

    <rfa-footer />
  </div>
</template>

<script>
  export default {
    async asyncData({
      $content
    }) {
      const prestations = (await $content('prestations').fetch()).data;

      return {
        prestations
      };
    },
    mounted() {
      window.nuxtInstance = this;
      console.log(this);
      this.$refs.accordion.addEventListener('show.bs.collapse', this.handleScroll)
    },
    beforeDestroy() {
      this.$refs.accordion.removeEventListener('show.bs.collapse', this.handleScroll)
    },
    methods: {
      handleScroll(e) {
        const old = this.$refs.accordion.querySelector(".collapse.show");
        const target = e.target;
        const title = target.previousElementSibling;
        let options = {
          top: 0,
          left: 0,
          behavior: 'smooth'
        }
        if (old) {
          const oldTitle = old.previousElementSibling
          const oldIndex = parseInt(oldTitle.innerText.slice(1,2))
          const targetIndex = parseInt(title.innerText.slice(1,2))
          if(oldIndex<targetIndex) {
            options.top = title.getBoundingClientRect().top+ window.pageYOffset - (old.getBoundingClientRect().height+ oldTitle.getBoundingClientRect().height) - 120
          }else {
            options.top = title.getBoundingClientRect().top+ window.pageYOffset - 120
          }
          if (oldIndex === 1) options.behavior='instant'
          window.scrollTo(options)
          old.classList.remove('show');
          title.setAttribute('aria-expanded', "false");
        }


      },
    },
  }

</script>
