(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f146"],{"4bqi":function(t,e,o){"use strict";o.r(e);var n=o("bh0E"),a=o.n(n),i={data:function(){return{center:"北京",overview:!1,maptype:!1,geolocation:!1}},unmount:function(){var t=this.distanceTool;t&&t.close()},methods:{mapClick:function(t){console.log(t)},viewchanged:function(t){console.log(t)},locationSuccess:function(t){console.log(t),this.getResultMessage(!0,"当前定位："+t.addressComponent.province+"，"+t.addressComponent.city)},openDistanceTool:function(t){var e=this.distanceTool;e&&e.open()},setDistanceToolInstance:function(t){var e=t.map;this.distanceTool=new a.a(e,{lineStroke:2})},getResultMessage:function(t,e){this.$message({message:e,type:!0===t?"success":"warning"})}}},c=(o("Z64I"),o("KHd+")),s=Object(c.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-spe"},[o("p",{staticClass:"content-spe-title"},[t._v(t._s(t.$t("route.mapController")))]),t._v(" "),o("div",{staticClass:"content-spe-element"},[o("el-form",{ref:"filterFormData",staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[o("el-form-item",[o("el-switch",{attrs:{"active-text":"缩略图展开","inactive-text":"缩略图收起"},model:{value:t.overview,callback:function(e){t.overview=e},expression:"overview"}})],1),t._v(" "),o("el-form-item",[o("el-switch",{attrs:{"active-text":"地图类型 ","inactive-text":"城市列表","active-color":"#E6A23C","inactive-color":"#67C23A"},model:{value:t.maptype,callback:function(e){t.maptype=e},expression:"maptype"}})],1),t._v(" "),o("el-form-item",[o("el-switch",{attrs:{"active-text":"定位 ","inactive-text":"全景","active-color":"#E6A23C","inactive-color":"#67C23A"},model:{value:t.geolocation,callback:function(e){t.geolocation=e},expression:"geolocation"}})],1),t._v(" "),o("el-form-item",[o("bm-control",[o("el-button",{attrs:{type:"primary"},on:{click:t.openDistanceTool}},[t._v("开启测距")])],1)],1)],1),t._v(" "),o("baidu-map",{staticClass:"bm-view",attrs:{center:t.center,"scroll-wheel-zoom":!0,zoom:16},on:{click:t.mapClick,ready:t.setDistanceToolInstance}},[o("bm-scale",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_LEFT"}}),t._v(" "),o("bm-navigation",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT"}}),t._v(" "),o("bm-overview-map",{attrs:{anchor:"BMAP_ANCHOR_BOTTOM_LEFT","is-open":t.overview},on:{viewchanged:t.viewchanged}}),t._v(" "),t.maptype?o("bm-map-type",{attrs:{"map-types":["BMAP_NORMAL_MAP","BMAP_HYBRID_MAP"],anchor:"BMAP_ANCHOR_TOP_LEFT"}}):o("bm-city-list",{attrs:{anchor:"BMAP_ANCHOR_TOP_LEFT"}}),t._v(" "),t.geolocation?o("bm-geolocation",{attrs:{anchor:"BMAP_ANCHOR_TOP_RIGHT","auto-location":!0},on:{locationSuccess:t.locationSuccess}}):o("bm-panorama")],1)],1)])])])},[],!1,null,"0ae973ce",null);s.options.__file="controller.vue";e.default=s.exports},OVvn:function(t,e,o){},Z64I:function(t,e,o){"use strict";var n=o("OVvn");o.n(n).a}}]);