(window.webpackJsonp=window.webpackJsonp||[]).push([[13,11,12],{343:function(t,n,e){"use strict";e.r(n);var l=e(44),component=Object(l.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M3.33333 2.66667H6L7.33333 6L5.66667 7C6.38064 8.44769 7.55231 9.61937 9 10.3333L10 8.66667L13.3333 10V12.6667C13.3333 13.0203 13.1929 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14C9.39951 13.842 6.94677 12.7377 5.10455 10.8955C3.26234 9.05324 2.15803 6.6005 2 4.00001C2 3.64638 2.14048 3.30724 2.39052 3.0572C2.64057 2.80715 2.97971 2.66667 3.33333 2.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);n.default=component.exports},344:function(t,n,e){"use strict";e.r(n);var l=e(44),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",stroke:"currentColor",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93028 2 4.66666V11.3333C2 12.0697 2.59695 12.6667 3.33333 12.6667H12.6667C13.403 12.6667 14 12.0697 14 11.3333V4.66666C14 3.93028 13.403 3.33333 12.6667 3.33333Z","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M2 4.66667L8 8.66667L14 4.66667","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);n.default=component.exports},345:function(t,n,e){},349:function(t,n,e){"use strict";e.r(n);e(65);var l=e(88),r=Object(l.a)({props:{links:{type:Array,required:!0}},setup:function(){var t,n=Object(l.h)(),e=Object(l.g)().$scrollTo,r=Object(l.e)(null),o=Object(l.e)(null),c=Object(l.e)(!1),d=function(){window.pageYOffset>=t?c.value=!0:c.value=!1};return Object(l.c)((function(){t=r.value.offsetTop,window.screen.width<=768?c.value=!0:window.addEventListener("scroll",d)})),Object(l.d)((function(){window.removeEventListener("scroll",d)})),{lowerBar:r,sticky:c,dropdown:o,mailto:function(t){t.target.href="mailto:"+decodeURIComponent(escape(window.atob("cmVnaXMuZnJhY2hpZXJAcmZhLWNvbnNlaWwuZnI=")))},processLink:function(link){console.log("now"),link.ref?e(link.ref):link.path&&n.push(link.path)},localScrollTo:function(t,n){t.ref().$el.click(),setTimeout((function(){window.scrollTo({top:t.ref().$el.getBoundingClientRect().top+window.pageYOffset-65})}),400)}}}}),o=(e(354),e(44)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:{height:t.sticky?"112px":void 0}},[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary d-none d-md-block"},[e("div",{staticClass:"container-fluid px-5"},[e("ul",{staticClass:"ms-auto navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{href:"tel:+33951740779"}},[e("icon-tel"),t._v(" 09 51 74 07 79\n          ")],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",on:{click:t.mailto}},[e("icon-mail"),t._v(" regis.frachier@"),e("span",{staticClass:"d-none"},[t._v("email.")]),t._v("rfa-conseil.fr\n          ")],1)])])])]),t._v(" "),e("nav",{ref:"lowerBar",staticClass:"navbar navbar-expand-md navbar-light d-flex align-items-start",class:{"fixed-top":t.sticky},staticStyle:{"z-index":"10"},attrs:{id:"lowerBar"}},[t._m(0),t._v(" "),e("div",{staticClass:"container-fluid px-5 text-end d-flex justify-content-end"},[t._m(1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[t._l(t.links,(function(link){return[link.children&&link.children.length>0?[e("li",{key:link.label,ref:"dropdown",refInFor:!0,staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link text-dark dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                  "+t._s(link.label)+"\n                ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu dropdown-menu-end",attrs:{"aria-labelledby":"navbarDropdown"}},t._l(link.children,(function(n){return e("li",{key:n.label},[e("a",{staticClass:"dropdown-item text-end text-md-start",on:{click:function(e){return t.localScrollTo(n,{block:"start"})}}},[t._v("\n                      "+t._s(n.label)+"\n                    ")])])})),0)])]:[e("li",{key:link.label,staticClass:"nav-item"},[e("a",{staticClass:"nav-link text-dark",on:{click:function(n){return t.processLink(link)}}},[t._v("\n                  "+t._s(link.label)+"\n                ")])])]]}))],2)])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"d-block navbar-brand position-absolute px-5 py-0",attrs:{href:"#"}},[n("img",{staticClass:"py-1",attrs:{src:"/images/logo_blanc.png",alt:"Logo RFA Conseil"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"ae2e51d0",null);n.default=component.exports;installComponents(component,{IconTel:e(343).default,IconMail:e(344).default,Nav:e(349).default})},354:function(t,n,e){"use strict";e(345)}}]);