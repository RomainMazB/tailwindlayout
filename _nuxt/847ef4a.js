(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{248:function(e,t,n){"use strict";n.r(t);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=n(9),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:e.slug}}}},[n("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[n("div",{class:e.positionClass},[e._t("default")],2)]),e._v(" "),n("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},250:function(e,t,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("20f5c078",content,!0,{sourceMap:!1})},255:function(e,t,n){"use strict";n(250)},256:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n.breadcrumb-item:after{\n  display:inline-block;\n  height:.8em;\n  margin:0 .5em;\n  content:"";\n  border-right:.1em solid var(--color-fg-muted);\n  transform:rotate(15deg)\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},282:function(e,t,n){"use strict";n.r(t);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},l=(n(255),n(9)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-card",{attrs:{slug:e.slug,label:e.label}},[n("ul",{staticClass:"flex"},[n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"/"}},[e._v("A")])]),e._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"/"}},[e._v("B")])]),e._v(" "),n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"/"}},[e._v("C")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseCard:n(248).default})}}]);