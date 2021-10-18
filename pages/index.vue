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
          label: 'NÉGOCIATION TARIFAIRES',
          ref: () => $refs.negotarifStep,
        },{
          label: 'AUDIT DES CLAUSES CONTRACTUELLES',
          ref: () => $refs.auditStep,
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
              <p class="text-justify">RFA CONSEIL propose un service exclusif de conseil et de courtage en
                location et en entretien de vêtements de travail, et autres prestations.<br><br>
                Née en 2015 de la volonté de son dirigeant de mettre à profit une expertise de plus de 25 ans dans ce
                domaine d’activités, RFA CONSEIL s’adresse à tous types d’entreprises dans l’industrie, l’hôtellerie, la
                restauration et les établissements de santé.</p>
              <p class="text-primary fw-bold">Obtenez des réponses techniques et tarifaires à
                vos exigences,
                et
                gardez
                la maîtrise des conditions générales de vente de vos contrats.</p>
            </div>
            <div class="col align-self-center text-center order-0 order-md-1 mb-md-0">
              <iconLogo class="w-50 mb-3"/>
              <h3 class="text-primary fw-bold text-center">Vous assure un service<br>indépendant<br> en
                toutes circonstances qui
                représente
                vos intérêts.</h3>
            </div>
          </div>

          <div class="row">
            <rfa-title type="title" class="mb-3">L’objectif de RFA CONSEIL est d’assurer à tous ses clients</rfa-title>
            <ul class="ms-2">
              <li>L’optimisation des besoin avec l’élaboration d’un nouveau cahier des charges</li>
              <li>La garantie d’une réduction des coûts</li>
              <li>L’optimisation des conditions contractuelles</li>
            </ul>
            <!-- <p class="text-primary fw-bold">RFA CONSEIL vous assure un service indépendant en toutes circonstances qui
              représente
              vos intérêts.</p> -->
          </div>

          <div class="row">
            <rfa-title type="title" class="mb-3">Bénéficiez de conseils personnalisés pour une rentabilité accrue
            </rfa-title>
            <p class="text">La rémunération perçue par RFA CONSEIL est conditionnée aux économies générées par son
              intervention.</p>
            <p class="text">Un principe simple qui vous protège et nous engage:</p>
            <p class="text-primary fw-bold">Si RFA CONSEIL ne vous permet pas de dégager d’économies, vous n’avez pas
              d’honoraire
              à verser !</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-primary mb-5" id="prestations" ref="prestationSection">
      <div class="container card px-4 py-5">
        <div class="card-body">
          <h3 class="text-center mb-3">Les prestations de <br>RFA CONSEIL</h3>

          <div class="row mb-4">
            <p>RFA CONSEIL détient une connaissance incontestable du marché des blanchisseurs et loueurs de linge, et
              permet à votre entreprise de bénéficier de cette expertise de plus de 25 ans.</p>
            <h6>Pour apporter une réponse exhaustive aux besoins de chaque client, RFA CONSEIL propose une prestation
              déclinée en trois volets: </h6>
          </div>

          <div class="accordion" id="accordionPrestation">

            <rfa-title type="title" ref="evaltechStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_one"
              role="button" aria-expanded="false" aria-controls="collapsible_one">
              <icon-chevron-right /> 1. AUDIT TECHNIQUE DES PRESTATIONS </rfa-title>

            <div id="collapsible_one" class="collapse" data-bs-parent="#accordionPrestation">
              <p>Bénéficiez d’un audit technique au sein de vos locaux comprenant l’élaboration d’un cahier des charges
                approfondi pour vos futurs besoins et recevez des conseils sur mesures en adéquation avec votre réalité
                et
                vos contraintes.</p>

              <rfa-prestation-list title="VETEMENTS DE TRAVAIL" subtitle="Standard" class="mb-5" color="#105391"
                :data="prestations.standard" />
              <rfa-prestation-list subtitle="EPI" class="mb-5" color="#105391" :data="prestations.epi" />

              <rfa-prestation-list title="ARMOIRES VESTIAIRES" class="mb-5" color="#727676"
                :data="prestations.armoires" />
              <rfa-prestation-list title="LINGES PLATS" class="mb-5" color="#32AFDA" :data="prestations.linges" />
              <rfa-prestation-list title="EQUIPEMENTS SANITAIRES" class="mb-5" color="#94D0E6"
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

            <rfa-title type="title" ref="negotarifStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_two"
              role="button" aria-expanded="false" aria-controls="collapsible_two">
              <icon-chevron-right /> 2. NÉGOCIATION TARIFAIRES </rfa-title>

            <div id="collapsible_two" class="collapse" data-bs-parent="#accordionPrestation">
              <h5 class="text-primary fw-bold mb-3">Disposez de solutions tarifaires innovantantes par :</h5>
              <ul>
                <li class="mb-3">Soit la renégociation du contrat existant avec votre prestataire,</li>
                <li>Soit la mise en concurrence de celui-ci en conformité avec le cahier des charges établi
                  ensemble en fonction de vos nouveaux besoins.</li>
              </ul>

              <div class="row d-flex justify-content-center mt-5 mb-3 gx-5">
                <div class="col-md-4 img-sizer me-5 mb-3">
                  <nuxt-img src="/images/prestations/nego/tableau.jpg" alt="tableau" class="img-fluid" />
                </div>
                <div class="col-md-4 img-sizer mb-3">
                  <nuxt-img src="/images/prestations/nego/presentation.jpg" alt="presentation" class="img-fluid" />
                </div>
              </div>
            </div>

            <rfa-title type="title" ref="auditStep" class="mb-3" data-bs-toggle="collapse" href="#collapsible_three"
              role="button" aria-expanded="false" aria-controls="collapsible_three">
              <icon-chevron-right /> 3. AUDIT DES CLAUSES CONTRACTUELLES</rfa-title>


            <div id="collapsible_three" class="collapse" data-bs-parent="#accordionPrestation">
              <p>Profitez d'une analyse compléte de vos contrats actuels et d'une revalorisation des conditions
                générales de vente de vos futurs contrats de location et d'entretien.</p>
              <p class="mb-4 text-primary fw-bold">RFA CONSEIL assure le respect de vos intéréts par le biais d'un audit axé sur l'étude et
                le
                contrôle des clauses de vos contrats.</p>

              <div class="row d-flex justify-content-center gx-5">
                <div class="col-md-4 img-sizer me-md-5 mb-3">
                  <nuxt-img src="/images/prestations/contrat/signature.jpg" alt="signature" class="img-fluid" />
                </div>
                <div class="col-md-4 img-sizer mb-3">
                  <nuxt-img src="/images/prestations/contrat/mains.jpg" alt="mains" class="img-fluid" />
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
    methods: {},
    mounted() {
      window.nuxtInstance = this;
      console.log(this);
    }
  }

</script>
