(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2],{248:function(n,e,t){"use strict";t.r(e);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=t(9),component=Object(l.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("NuxtLink",{staticClass:"\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-24\n    leading-6\n    no-underline\n    md:w-32\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:n.slug}}}},[t("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[t("div",{class:n.positionClass},[n._t("default")],2)]),n._v(" "),t("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[n._v("\n    "+n._s(n.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},279:function(n,e,t){"use strict";t.r(e);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},l=t(9),component=Object(l.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-card",{attrs:{slug:n.slug,label:n.label,centered:!1,custom_class:"h-full"}},[t("div",{staticClass:"relative h-full bg-indigo-50"},[t("div",{staticClass:"\n        absolute\n        right-0\n        top-2/4\n        transform\n        -translate-y-1/2\n        w-6\n        h-10\n        bg-indigo-500\n        text-white\n        flex\n        items-center\n        justify-center\n      "})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:t(248).default})}}]);