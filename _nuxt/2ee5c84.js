(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{248:function(t,n,e){"use strict";e.r(n);var r={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},l=e(9),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:t.slug}}}},[e("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[e("div",{class:t.positionClass},[t._t("default")],2)]),t._v(" "),e("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[t._v("\n    "+t._s(t.label)+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports},278:function(t,n,e){"use strict";e.r(n);var r={props:{slug:{type:String,default:"avatar"},label:{type:String,default:"Avatar"}}},l=e(9),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-card",{attrs:{slug:t.slug,label:t.label}},[e("div",{staticClass:"relative w-12"},[e("img",{staticClass:"rounded-full ring-2 ring-gray-100 w-12 h-12",attrs:{src:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}}),t._v(" "),e("div",{staticClass:"\n        absolute\n        bottom-0\n        right-0\n        h-3\n        w-3\n        rounded-full\n        ring ring-white\n        bg-green-600\n      "})])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseCard:e(248).default})}}]);