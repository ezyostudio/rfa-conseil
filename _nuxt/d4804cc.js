(window.webpackJsonp=window.webpackJsonp||[]).push([[18,17,19],{286:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("7ea62e20",content,!0,{sourceMap:!1})},291:function(t,e,o){var content=o(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("7271fb16",content,!0,{sourceMap:!1})},292:function(t,e,o){"use strict";o(286)},293:function(t,e,o){var l=o(43)(!1);l.push([t.i,".box[data-v-258f2aaf]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;box-sizing:border-box;padding:.15em 1em .15em .4em}.title[data-v-258f2aaf]{background-color:#00aeef}.title h3[data-v-258f2aaf]{margin:0;font-size:20px}.subtitle[data-v-258f2aaf]{background-color:#fff;padding:.1em .8em}.subtitle .h5[data-v-258f2aaf]{margin-bottom:0}",""]),t.exports=l},295:function(t,e,o){"use strict";o.r(e);var l={props:["text","type","color"],props:{text:{},type:{},color:{},tag:{default:"h4"}}},n=(o(292),o(22)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",["title"==t.type?o("div",{staticClass:"box title"},[o("h3",t._b({staticClass:"text-light fw-bold"},"h3",t.$props,!1),[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)]):t._e(),t._v(" "),"subtitle"==t.type?o("div",{staticClass:"box subtitle card-title",style:{backgroundColor:t.color}},[o(t.tag,t._b({tag:"component",staticClass:"h5 text-light"},"component",t.$props,!1),[t._t("default",(function(){return[t._v(t._s(t.text))]}))],2)],1):t._e()])}),[],!1,null,"258f2aaf",null);e.default=component.exports},304:function(t,e,o){"use strict";o(291)},305:function(t,e,o){var l=o(43)(!1);l.push([t.i,".card img[data-v-572a9aef]{aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover;background-color:#fff;margin-bottom:1em}.card.contains img[data-v-572a9aef]{-o-object-fit:contain;object-fit:contain}.card.noTitle h5[data-v-572a9aef]{display:none}.card.noTitle img[data-v-572a9aef]{margin-bottom:0}",""]),t.exports=l},308:function(t,e,o){"use strict";o.r(e);var l={props:["prestation","cardStyle","color"]},n=(o(304),o(22)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card card-small",class:{contains:t.prestation.contains,noTitle:null==t.prestation.title},style:{"background-color":t.color}},[o("div",{staticClass:"card-body"},[o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"nuxt-img"},expression:"{ selector: 'nuxt-img' }"}]},[o("nuxt-img",{attrs:{src:t.prestation.image,alt:t.prestation.alt,width:"640px",loading:"lazy"}})],1),t._v(" "),o("h6",{staticClass:"h5 text-light text-center"},[t._v(t._s(t.prestation.title))])])])}),[],!1,null,"572a9aef",null);e.default=component.exports},314:function(t,e,o){"use strict";o.r(e);var l={props:["title","color","data","subtitle"]},n=o(22),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.title?o("rfa-title",{staticClass:"text-center text-lg-start",attrs:{color:t.color,type:"subtitle"}},[t._v(t._s(t.title))]):t._e(),t._v(" "),o("div",{staticClass:"d-flex justify-content-center"},[t.subtitle?o("rfa-title",{staticClass:"text-center",attrs:{tag:"h5",color:t.color,type:"subtitle"}},[t._v(t._s(t.subtitle))]):t._e()],1),t._v(" "),o("div",{staticClass:"row gy-4 justify-content-center"},t._l(t.data,(function(e){return o("div",{key:e.title,staticClass:"col-12 col-md-6 col-lg-3"},[o("rfa-prestation",{attrs:{prestation:e,color:t.color}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RfaTitle:o(295).default,RfaPrestation:o(308).default})}}]);