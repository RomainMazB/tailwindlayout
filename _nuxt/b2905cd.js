(window.webpackJsonp=window.webpackJsonp||[]).push([[33,2],{250:function(t,e,n){"use strict";n.r(e);var l={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},r=n(9),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:t.slug}}}},[n("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[n("div",{class:t.positionClass},[t._t("default")],2)]),t._v(" "),n("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var l={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},r=n(9),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-card",{attrs:{slug:t.slug,label:t.label,centered:!1,custom_class:"h-full p-2"}},[n("div",{staticClass:"\n      max-w-sm\n      flex flex-col\n      rounded-lg\n      overflow-hidden\n      bg-white\n      shadow\n      border border-indigo-300\n      relative\n    "},[n("div",{staticClass:"\n        absolute\n        bg-white\n        opacity-90\n        z-10\n        h-full\n        w-full\n        flex\n        items-center\n        justify-center\n      "},[n("div",{staticClass:"flex items-center"},[n("span",{staticClass:"text-xs mr-1"},[t._v("Loading")]),t._v(" "),n("svg",{staticClass:"animate-spin h-3 w-3 text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])])]),t._v(" "),n("div",{staticClass:"w-full h-8 bg-indigo-100 border-b border-indigo-300"}),t._v(" "),n("div",{staticClass:"flex-1 px-2 py-1"},[n("div",{staticClass:"font-bold mb-0 text-sm"},[t._v("Title")]),t._v(" "),n("p",{staticClass:"text-gray-700 text-xs"},[t._v("Content")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:n(250).default})}}]);