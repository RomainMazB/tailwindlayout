(window.webpackJsonp=window.webpackJsonp||[]).push([[28,2],{248:function(e,n,t){"use strict";t.r(n);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=t(9),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:e.slug}}}},[t("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[t("div",{class:e.positionClass},[e._t("default")],2)]),e._v(" "),t("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports},299:function(e,n,t){"use strict";t.r(n);var r={props:{slug:{type:String,requiindigo:!0},label:{type:String,required:!0}}},l=t(9),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-card",{attrs:{slug:e.slug,label:e.label,centered:!0,custom_class:"h-full"}},[t("div",{staticClass:"h-16 w-full flex border border-indigo-300"},[t("div",{staticClass:"flex-1 bg-indigo-50 border-r border-indigo-300"}),e._v(" "),t("div",{staticClass:"flex-1 bg-indigo-50 border-r border-indigo-300"}),e._v(" "),t("div",{staticClass:"flex-1 bg-indigo-50"})])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseCard:t(248).default})}}]);