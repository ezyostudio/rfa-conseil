(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,6,7,10,11,12,13,14,15],{337:function(t,e,r){},338:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.33333 2.66667H6L7.33333 6L5.66667 7C6.38064 8.44769 7.55231 9.61937 9 10.3333L10 8.66667L13.3333 10V12.6667C13.3333 13.0203 13.1929 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14C9.39951 13.842 6.94677 12.7377 5.10455 10.8955C3.26234 9.05324 2.15803 6.6005 2 4.00001C2 3.64638 2.14048 3.30724 2.39052 3.0572C2.64057 2.80715 2.97971 2.66667 3.33333 2.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93028 2 4.66666V11.3333C2 12.0697 2.59695 12.6667 3.33333 12.6667H12.6667C13.403 12.6667 14 12.0697 14 11.3333V4.66666C14 3.93028 13.403 3.33333 12.6667 3.33333Z","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),r("path",{attrs:{d:"M2 4.66667L8 8.66667L14 4.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,r){},341:function(t,e,r){},342:function(t,e,r){"use strict";r(337)},343:function(t,e,r){"use strict";r.r(e);var n=r(102),l=Object(n.a)({props:{links:{type:Array,required:!0}},setup:function(){var t,e=Object(n.e)(null),r=Object(n.e)(null),l=Object(n.e)(!1),o=function(){window.pageYOffset>=t?l.value=!0:l.value=!1};return Object(n.c)((function(){t=e.value.offsetTop,window.screen.width<=768?l.value=!0:window.addEventListener("scroll",o)})),Object(n.d)((function(){window.removeEventListener("scroll",o)})),{lowerBar:e,sticky:l,dropdown:r}}}),o=(r(345),r(44)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:{height:t.sticky?"112px":void 0}},[r("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary d-none d-md-block"},[r("div",{staticClass:"container-fluid px-5"},[r("ul",{staticClass:"ms-auto navbar-nav"},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:"#"}},[r("icon-tel"),t._v(" 09 51 74 07 79\n          ")],1)]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{href:"#"}},[r("icon-mail"),t._v(" regis.frachier@rfa-conseil.fr\n          ")],1)])])])]),t._v(" "),r("nav",{ref:"lowerBar",staticClass:"navbar navbar-expand-md navbar-light bg-transparent",class:{"fixed-top":t.sticky},staticStyle:{"z-index":"10"},attrs:{id:"lowerBar"}},[t._m(0),t._v(" "),r("div",{staticClass:"container-fluid px-5 text-end d-flex justify-content-end"},[t._m(1),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[t._l(t.links,(function(link){return[link.children&&link.children.length>0?[r("li",{key:link.label,ref:"dropdown",refInFor:!0,staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                  "+t._s(link.label)+"\n                ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu bg-transparent bg-light-md",attrs:{"aria-labelledby":"navbarDropdown"}},t._l(link.children,(function(e){return r("li",{key:e.label},[r("a",{staticClass:"dropdown-item",on:{click:function(r){return t.$scrollTo(e.ref,!1)}}},[t._v("\n                      "+t._s(e.label)+"\n                    ")])])})),0)])]:[r("li",{key:link.label,staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:function(e){return t.$scrollTo(link.ref)}}},[t._v("\n                  "+t._s(link.label)+"\n                ")])])]]}))],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"d-none d-md-block navbar-brand position-absolute px-5 py-0",attrs:{href:"#"}},[e("img",{staticClass:"py-1",attrs:{src:"/images/logo_blanc.png",alt:"Logo RFA Conseil"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"f46b6fe2",null);e.default=component.exports;installComponents(component,{IconTel:r(338).default,IconMail:r(339).default,Nav:r(343).default})},344:function(t,e,r){"use strict";r.r(e);var n={props:["prestation","cardStyle"]},l=(r(342),r(44)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",class:{contains:t.prestation.contains,noTitle:null==t.prestation.title},style:t.cardStyle},[r("div",{staticClass:"card-body"},[r("nuxt-img",{attrs:{src:t.prestation.image,alt:t.prestation.alt}}),t._v(" "),r("h5",{staticClass:"card-title text-center text-light"},[t._v(t._s(t.prestation.title))])],1)])}),[],!1,null,"1b54ca99",null);e.default=component.exports},345:function(t,e,r){"use strict";r(340)},346:function(t,e,r){"use strict";r(341)},347:function(t,e,r){"use strict";r.r(e);var n={props:["text"]},l=(r(346),r(44)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",t._b({staticClass:"text-light fw-bold"},"h3",t.$props,!1),[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)])}),[],!1,null,"7c97109e",null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var n={props:["title","color","data","subtitle"]},l=r(44),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.title?r("h4",{staticClass:"text-center text-lg-start"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?r("h5",{staticClass:"text-center"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),r("div",{staticClass:"row gy-4 justify-content-center"},t._l(t.data,(function(e){return r("div",{key:e.title,staticClass:"col-12 col-md-6 col-lg-3"},[r("rfa-prestation",{attrs:{prestation:e,cardStyle:{"background-color":t.color}}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RfaPrestation:r(344).default})},349:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{picker:"mail"}},mounted:function(){window.vueInstance=this}},l=r(44),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container card p-5"},[r("div",{staticClass:"card-body d-flex justify-content-center align-items-center"},[r("div",{staticClass:"col-lg-6 me-lg-5"},[r("icon-illustration")],1),t._v(" "),r("div",{staticClass:"col-12 col-lg-6"},[r("h3",{staticClass:"text-center mb-4"},[t._v("Contact")]),t._v(" "),r("div",{staticClass:"d-flex justify-content-center mb-3"},[r("div",{staticClass:"btn-group ",attrs:{role:"group"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.picker,expression:"picker"}],staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:"",value:"mail"},domProps:{checked:t._q(t.picker,"mail")},on:{change:function(e){t.picker="mail"}}}),t._v(" "),r("label",{staticClass:"btn btn-outline-primary",attrs:{for:"btnradio1"}},[r("icon-mail"),t._v(" Par mail")],1),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.picker,expression:"picker"}],staticClass:"btn-check",attrs:{type:"radio",name:"btnradio",id:"btnradio2",autocomplete:"off",value:"tel"},domProps:{checked:t._q(t.picker,"tel")},on:{change:function(e){t.picker="tel"}}}),t._v(" "),r("label",{staticClass:"btn btn-outline-primary",attrs:{for:"btnradio2"}},[r("icon-tel"),t._v(" Par téléphone")],1)])]),t._v(" "),r("form",{attrs:{action:""}},["mail"==t.picker?r("div",[t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),"tel"==t.picker?r("div",[t._m(2)]):t._e(),t._v(" "),t._m(3)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Nom de l'entreprise")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"name",id:"exampleInputPassword1",placeholder:"John Doe"}})]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Adresse Mail")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"john@doe.com"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"textarea"}},[t._v("Votre demande")]),t._v(" "),r("textarea",{staticClass:"form-control",attrs:{name:"textarea",id:"textarea",cols:"100",rows:"5",placeholder:"Je vous contacte car..."}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Nom de l'entreprise")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"name",id:"exampleInputPassword1",placeholder:"John Doe"}})]),t._v(" "),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Numero de téléphone")]),t._v(" "),r("div",{staticClass:"input-group mb-3"},[r("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("+33")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text","aria-label":"Username","aria-describedby":"basic-addon1"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("button",{staticClass:"btn btn-primary px-3",attrs:{type:"submit"}},[t._v("Envoyer")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IconIllustration:r(353).default,IconMail:r(339).default,IconTel:r(338).default})},350:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{attrs:{width:"252",height:"23",viewBox:"0 0 252 23",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("rect",{attrs:{width:"252",height:"23",fill:"url(#icon-dots)"}}),t._v(" "),r("defs",[r("pattern",{attrs:{id:"icon-dots",patternContentUnits:"objectBoundingBox",width:"1",height:"1"}},[r("use",{attrs:{"xlink:href":"#image-dots",transform:"scale(0.002 0.0222222)"}})]),t._v(" "),r("image",{attrs:{id:"image-dots",width:"500",height:"45","xlink:href":"data:image/png;base64,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"}})])])])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("path",{attrs:{d:"M19.9946 10.2681L20.9919 11.3621C21.4142 11.8254 21.4142 12.5744 20.9919 13.0327L12.2636 22.6128C11.8413 23.076 11.1585 23.076 10.7407 22.6128L2.00791 13.0327C1.58564 12.5695 1.58564 11.8205 2.00791 11.3621L3.00517 10.2681C3.43193 9.79997 4.12822 9.80983 4.546 10.2878L9.70303 16.2261V2.063C9.70303 1.40758 10.1837 0.88028 10.7812 0.88028H12.2187C12.8161 0.88028 13.2968 1.40758 13.2968 2.063V16.2261L18.4538 10.2878C18.8716 9.8049 19.5679 9.79504 19.9946 10.2681Z",fill:"white"}})]),t._v(" "),r("defs",[r("clipPath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"22.0775",height:"23",fill:"white",transform:"translate(23 0.88028) rotate(90)"}})])])])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"feather feather-chevron-right",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("polyline",{attrs:{points:"9 18 15 12 9 6"}})])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.r(e);var n=r(8),l=(r(51),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("prestations").fetch();case 3:return n=e.sent.data,e.abrupt("return",{prestations:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{},mounted:function(){window.nuxtInstance=this,console.log(this)}}),o=r(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-primary"},[r("Nav",{attrs:{links:[{label:"EXPERTISE",ref:function(){return t.$refs.expertiseSection}},{label:"PRESTATIONS",children:[{label:"EVALUATION TECHNIQUE",ref:function(){return t.$refs.evaltechStep}},{label:"NÉGOCIATION TARIFAIRES",ref:function(){return t.$refs.negotarifStep}},{label:"AUDIT DES CLAUSES CONTRACTUELLES",ref:function(){return t.$refs.auditStep}}]},{label:"CONTACT",ref:function(){return t.$refs.contactSection}}]}}),t._v(" "),r("header",{staticClass:"container-fluid bg-primary p-0",attrs:{id:"intro"}},[r("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleSlidesOnly","data-bs-ride":"carousel","data-bs-interval":"5000","data-bs-pause":"false","data-bs-touch":"false"}},[r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active"},[r("nuxt-img",{staticClass:"carousel-image",attrs:{src:"/images/header/cintres.jpg",alt:"cintres"}})],1),t._v(" "),r("div",{staticClass:"carousel-item"},[r("nuxt-img",{staticClass:"carousel-image",attrs:{src:"/images/header/coussin.jpg",alt:"coussin"}})],1),t._v(" "),r("div",{staticClass:"carousel-item"},[r("nuxt-img",{staticClass:"carousel-image",attrs:{src:"/images/header/serviette.png",alt:"serviette"}})],1)])]),t._v(" "),r("div",{staticClass:"container d-flex justify-content-center"},[r("div",{staticClass:"content align-self-center fw-bold"},[r("iconLogo",{staticClass:"w-100 m-auto mb-5"}),t._v(" "),r("h2",{staticClass:"text-center text-md-start text-primary"},[t._v("Conseil et Courtage")]),t._v(" "),r("h3",{staticClass:"text-center text-md-start ps-md-5 mb-4"},[t._v("en location et entretien de vêtements de travail et autres prestations")]),t._v(" "),r("icon-dots",{staticClass:"mb-4"}),t._v(" "),r("button",{staticClass:"btn btn-lg fw-bold btn-primary",on:{click:function(e){return t.$scrollTo(t.$refs.expertiseSection)}}},[t._v("En savoir plus\n          "),r("icon-arrow-down")],1)],1)])]),t._v(" "),r("section",{ref:"expertiseSection",staticClass:"container-fluid bg-primary mb-5",attrs:{id:"expertise"}},[r("div",{staticClass:"container card px-4 py-5"},[r("div",{staticClass:"card-body"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("rfa-title",{staticClass:"mb-3"},[t._v("L’objectif de RFA CONSEIL est d’assurer à tous ses clients")]),t._v(" "),t._m(1),t._v(" "),r("p",{staticClass:"text-primary fw-bold"},[t._v("RFA CONSEIL vous assure un service indépendant en toutes circonstances qui\n            représente\n            vos intérêts.")])],1),t._v(" "),r("div",{staticClass:"row"},[r("rfa-title",{staticClass:"mb-3"},[t._v("Bénéficiez de conseils personnalisés pour une rentabilité accrue")]),t._v(" "),r("p",{staticClass:"text"},[t._v("La rémunération perçue par RFA CONSEIL est conditionnée aux économies générées par son\n            intervention.")]),t._v(" "),r("p",{staticClass:"text"},[t._v("Un principe simple qui vous protège et nous engage:")]),t._v(" "),r("p",{staticClass:"text-primary fw-bold"},[t._v("Si RFA CONSEIL ne vous permet pas de dégager d’économies, vous n’avez pas\n            d’honoraire\n            à verser !")])],1)])])]),t._v(" "),r("section",{ref:"prestationSection",staticClass:"container-fluid bg-primary mb-5",attrs:{id:"prestations"}},[r("div",{staticClass:"container card px-4 py-5"},[r("div",{staticClass:"card-body"},[t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"accordion",attrs:{id:"accordionPrestation"}},[r("rfa-title",{ref:"evaltechStep",staticClass:"mb-3",attrs:{"data-bs-toggle":"collapse",href:"#collapsible_one",role:"button","aria-expanded":"false","aria-controls":"collapsible_one"}},[r("icon-chevron-right"),t._v(" 1. EVALUATION TECHNIQUE ")],1),t._v(" "),r("div",{staticClass:"collapse",attrs:{id:"collapsible_one","data-bs-parent":"#accordionPrestation"}},[r("p",[t._v("Bénéficiez d’un audit technique au sein de vos locaux comprenant l’élaboration d’un cahier des charges\n            approfondi pour vos futurs besoins et recevez des conseils sur mesures en adéquation avec votre réalité et\n            vos contraintes.")]),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"VETEMENTS DE TRAVAIL",subtitle:"Standard",color:"#105391",data:t.prestations.standard}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{subtitle:"EPI",color:"#105391",data:t.prestations.epi}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"ARMOIRES VESTIMENTAIRES",color:"#727676",data:t.prestations.armoires}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"LINGES PLATS",color:"#32AFDA",data:t.prestations.linges}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"EQUIPEMENTS SANITAIRES",color:"#94D0E6",data:t.prestations.sanitaires}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"TAPIS ANTISALISSURES",color:"#44607D",data:t.prestations.tapis}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"LAVETTE INDUSTRIELLES",color:"#004873",data:t.prestations.lavette}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"FONTAINES DÉGRAISSANTES",color:"#64518D",data:t.prestations.fontaine_d}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"FONTAINES À EAU",color:"#7E7D97",data:t.prestations.fontaine_eau}}),t._v(" "),r("rfa-prestation-list",{staticClass:"mb-5",attrs:{title:"DISTRIBUTION AUTOMATIQUE",color:"#4B4C7D",data:t.prestations.distributeur}})],1),t._v(" "),r("rfa-title",{ref:"negotarifStep",staticClass:"mb-3",attrs:{"data-bs-toggle":"collapse",href:"#collapsible_two",role:"button","aria-expanded":"false","aria-controls":"collapsible_two"}},[r("icon-chevron-right"),t._v(" 2. NÉGOCIATION TARIFAIRES ")],1),t._v(" "),r("div",{staticClass:"collapse",attrs:{id:"collapsible_two","data-bs-parent":"#accordionPrestation"}},[r("p",{staticClass:"text-primary fw-bold"},[t._v("Disposez de solutions tarifaires innovantantes par :")]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"row d-flex justify-content-center gx-5"},[r("div",{staticClass:"col-md-4 img-sizer me-5 mb-3"},[r("nuxt-img",{attrs:{src:"/images/prestations/nego/tableau.png",alt:"tableau"}})],1),t._v(" "),r("div",{staticClass:"col-md-4 img-sizer mb-3"},[r("nuxt-img",{attrs:{src:"/images/prestations/nego/presentation.jpg",alt:"presentation"}})],1)])]),t._v(" "),r("rfa-title",{ref:"auditStep",staticClass:"mb-3",attrs:{"data-bs-toggle":"collapse",href:"#collapsible_three",role:"button","aria-expanded":"false","aria-controls":"collapsible_three"}},[r("icon-chevron-right"),t._v(" 3. AUDIT DES CLAUSES CONTRACTUELLES")],1),t._v(" "),t._m(5)],1)])])]),t._v(" "),r("section",{ref:"contactSection",staticClass:"container-fluid bg-primary mb-5",attrs:{id:"contact"}},[r("Contact")],1),t._v(" "),r("footer",{staticClass:"py-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(6),t._v(" "),r("div",{staticClass:"col"},[r("p",{staticClass:"text-light text-end"},[t._v("Made with\n            "),r("icon-love"),t._v(" by EzyoStudio")],1)])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-7 order-1 order-md-0"},[r("p",{staticClass:"text-justify"},[t._v("RFA CONSEIL propose un service exclusif de conseil et de courtage en\n              location et en entretien de vêtements de travail, armoires vestiaires, linge plat, équipements\n              sanitaires, tapis antisalissures, lavettes industrielles, fontaines dégraissantes, fontaines à eau et\n              machines à café. "),r("br"),r("br"),t._v("\n              Née en 2015 de la volonté de son dirigeant de mettre à profit une expertise de plus de 25 ans dans ce\n              domaine d’activités, RFA CONSEIL s’adresse à tous types d’entreprises dans l’industrie, l’hôtellerie, la\n              restauration et les établissements de santé.")])]),t._v(" "),r("div",{staticClass:"col align-self-center order-0 order-md-1 mb-5 mb-md-0"},[r("h3",{staticClass:"text-primary fw-bold text-center text-md-end"},[t._v("Obtenez des réponses techniques et tarifaires à\n              vos exigences,\n              et\n              gardez\n              la maîtrise des conditions générales de vente de vos contrats.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"ms-2"},[r("li",[t._v("L’optimisation des besoin avec l’élaboration d’un nouveau cahier des charges")]),t._v(" "),r("li",[t._v("La garantie d’une réduction des coûts")]),t._v(" "),r("li",[t._v("L’optimisation des conditions contractuelles")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"text-center mb-3"},[t._v("Les prestations de "),r("br"),t._v("RFA CONSEIL")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-4"},[r("p",[t._v("RFA CONSEIL détient une connaissance incontestable du marché des blanchisseurs et loueurs de linge, et\n            permet à votre entreprise de bénéficier de cette expertise de plus de 25 ans.")]),t._v(" "),r("h6",[t._v("Pour apporter une réponse exhaustive aux besoins de chaque client, RFA CONSEIL propose une prestation\n            déclinée en trois volets: ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("Soit la renégociation du contrat existant avec votre prestataire,")]),t._v(" "),r("li",[t._v("Soit la mise en concurrence de celui-ci en conformité avec le cahier des charges établi\n              ensemble en fonction de vos nouveaux besoins.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"collapse",attrs:{id:"collapsible_three","data-bs-parent":"#accordionPrestation"}},[r("p",[t._v("Profitez d'une analyse compléte de vos contrats actuels et d'une revalorisation des conditions\n            générales de vente de vos futurs contrats de location et d'entretien.")]),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("RFA CONSEIL assure le respect de vos intéréts par le biais d'un audit axé sur l'étude et le\n            contrôle des clauses de vos contrats.")]),t._v(" "),r("div",{staticClass:"row d-flex justify-content-center gx-5"},[r("div",{staticClass:"col-md-4 img-sizer me-md-5 mb-3"},[r("img",{attrs:{src:"/images/prestations/contrat/signature.jpg",alt:"tableau"}})]),t._v(" "),r("div",{staticClass:"col-md-4 img-sizer mb-3"},[r("img",{attrs:{src:"/images/prestations/contrat/mains.jpg",alt:"presentation"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("p",{staticClass:"m-0 text-light"},[t._v("© 2021 RFA CONSEIL")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(343).default,IconDots:r(350).default,IconArrowDown:r(351).default,RfaTitle:r(347).default,IconChevronRight:r(352).default,RfaPrestationList:r(348).default,Contact:r(349).default})}}]);