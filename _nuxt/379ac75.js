(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{250:function(e,t,r){"use strict";r.r(t);var n={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=r(9),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:e.slug}}}},[r("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[r("div",{class:e.positionClass},[e._t("default")],2)]),e._v(" "),r("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports},253:function(e,t,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(72).default)("20f5c078",content,!0,{sourceMap:!1})},260:function(e,t,r){"use strict";r(253)},261:function(e,t,r){var n=r(71)((function(i){return i[1]}));n.push([e.i,'.breadcrumb-item:after{display:inline-block;height:.8em;margin:0 .5em;content:"";border-right:.1em solid var(--color-fg-muted);transform:rotate(15deg)}',""]),n.locals={},e.exports=n},287:function(e,t,r){"use strict";r.r(t);var n={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},l=(r(260),r(9)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-card",{attrs:{slug:e.slug,label:e.label}},[r("ul",{staticClass:"flex"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/"}},[e._v("A")])]),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/"}},[e._v("B")])]),e._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"/"}},[e._v("C")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseCard:r(250).default})}}]);