(function(e){function t(t){for(var a,s,p=t[0],o=t[1],r=t[2],y=0,l=[];y<p.length;y++)s=p[y],Object.prototype.hasOwnProperty.call(u,s)&&u[s]&&l.push(u[s][0]),u[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var p=n[s];0!==u[p]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},u={app:0},i=[];function p(e){return o.p+"js/"+({about:"about",transaction:"transaction"}[e]||e)+"."+{about:"afdb654b",transaction:"f6d00384"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={about:1,transaction:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",transaction:"transaction"}[e]||e)+"."+{about:"f5bc857a",transaction:"74953d63"}[e]+".css",u=o.p+a,i=document.getElementsByTagName("link"),p=0;p<i.length;p++){var r=i[p],y=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(y===a||y===u))return t()}var l=document.getElementsByTagName("style");for(p=0;p<l.length;p++){r=l[p],y=r.getAttribute("data-href");if(y===a||y===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],d.parentNode.removeChild(d),n(i)},d.href=u;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[e]=0})));var a=u[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=u[e]=[t,n]}));t.push(a[2]=i);var r,y=document.createElement("script");y.charset="utf-8",y.timeout=120,o.nc&&y.setAttribute("nonce",o.nc),y.src=p(e);var l=new Error;r=function(t){y.onerror=y.onload=null,clearTimeout(d);var n=u[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}u[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:y})}),12e4);y.onerror=y.onload=r,document.head.appendChild(y)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],y=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=y;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},"2e02":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.toggleView?n("router-view"):e._e()],1)},s=[],u=n("1da1"),i=(n("96cf"),n("4795"),n("0d03"),n("d3b7"),n("25f0"),n("d4ec")),p=n("bee2"),o=(n("b64b"),n("fb6a"),n("277d"),n("a9e3"),n("b680"),n("c975"),n("99af"),n("d01b")),r=n.n(o),y=n("8564"),l=function(){function e(t){Object(i["a"])(this,e),this.address=t,this.tronWeb=new r.a({fullHost:"https://api.shasta.trongrid.io",eventServer:"https://api.shasta.trongrid.io"})}return Object(p["a"])(e,[{key:"call",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,u,i,p,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.method,a=t.contractAddress,s=t.issuerAddress,u=void 0===s?this.address:s,i=t.parameter,p=void 0===i?[]:i,o=t.options,r=void 0===o?[]:o,e.next=3,this.tronWeb.transactionBuilder.triggerConstantContract(a,n,r,p,u);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"event",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.contractAddress,a=t.eventName,e.next=3,this.tronWeb.getEventResult(n,{eventName:a,size:200,sort:"-block_timestamp"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"initContracts",value:function(){for(var e=Object.keys(y),t={},n=0,a=e;n<a.length;n++){var s=a[n];t[s]=window.tronWeb.contract(y[s].abi,y[s].address)}return t}}]),e}();function d(){return window.tronWeb.toBigNumber(this)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return this.toBN().multipliedBy(f(e)).toFixed()}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return this.toBN().dividedBy(f(e)).toFixed()}function f(e){return"10".toBN().exponentiatedBy(e)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t="string"===typeof this?this:"".concat(this),n=t.indexOf(".");return n>0?t.slice(n+1).length<=e?t:e>0?"".concat(t.slice(0,n),".").concat(t.slice(n+1,n+1+e)):"".concat(t.slice(0,n)):t}String.prototype.toBN=d,String.prototype.toSun=m,String.prototype.fromSun=c,String.prototype.toFixed=b,String.prototype.decode=function(e,t){var n="0x"===this.slice(0,2)?this:"0x".concat(this);if(Array.isArray(t)&&t.length>0)return window.tronWeb.utils.abi.decodeParams(t,e,n);if(Array.isArray(t))return window.tronWeb.utils.abi.decodeParams(e,n);var a=window.tronWeb.utils.abi.decodeParams(e,n)[0];return"address"===e[0]?window.tronWeb.address.fromHex(a):a},Number.prototype.toBN=d,Number.prototype.toSun=m,Number.prototype.fromSun=c,Number.prototype.toFixed=b;var v={data:function(){return{toggleView:!0}},created:function(){var e=this;window.onload=function(){if(window.tronWeb)if(tronWeb.defaultAddress.base58)e.init(tronWeb.defaultAddress.base58);else var t=setInterval((function(){tronWeb.defaultAddress.base58&&(e.init(tronWeb.defaultAddress.base58),clearInterval(t))}),500)}},methods:{reload:function(){var e=this;this.toggleView=!1,this.$nextTick((function(){e.toggleView=!0}))},init:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=new l(e),Vue.prototype.$utils=a,Vue.prototype.$address=e,Vue.prototype.$contracts=a.initContracts(),console.log(Vue.prototype.$contracts),n.next=7,t.$utils.call({contractAddress:t.$contracts.Relation.address,method:"myIsMiner()"});case 7:return Vue.prototype.$isBind=n.sent.constant_result[0].decode(["bool"]),n.next=10,t.$utils.call({contractAddress:t.$contracts.FCmToken.address,method:"balanceOf(address)",parameter:[{type:"address",value:t.$address}]});case 10:s=n.sent.constant_result[0].decode(["uint"]).toString().fromSun(),console.log("母币余额",s),Vue.prototype.$loading=function(e,t){return t&&vant.Toast.loading({message:"".concat(t,"中..."),overlay:!0,forbidClick:!0,duration:0}),new Promise((function(n){var a=setInterval((function(){window.tronWeb.trx.getTransaction(e).then((function(e){e.ret&&e.ret[0].contractRet&&(vant.Toast.clear(),clearInterval(a),t&&("SUCCESS"!=e.ret[0].contractRet?vant.Toast.fail("".concat(t,"失败！")):vant.Toast.success("".concat(t,"成功！"))),n("SUCCESS"===e.ret[0].contractRet))}))}),1e3)}))},t.reload();case 14:case"end":return n.stop()}}),n)})))()}}},h=v,w=(n("034f"),n("5c64"),n("2877")),g=Object(w["a"])(h,a,s,!1,null,null,null),x=g.exports;n("3ca3"),n("ddb0");Vue.use(VueRouter);var M=[{path:"/",name:"trading",component:function(){return n.e("about").then(n.bind(null,"9418"))}},{path:"/pledge",name:"pledge",component:function(){return n.e("about").then(n.bind(null,"76c7"))}},{path:"/currency",name:"currency",component:function(){return n.e("about").then(n.bind(null,"b8d7"))}},{path:"/preach",name:"preach",component:function(){return n.e("about").then(n.bind(null,"00a0"))}}],_=new VueRouter({mode:"hash",base:"",routes:M}),k=_,T=(n("499a"),{}),A={};Vue.use(VueI18n);var S=new VueI18n({locale:localStorage.getItem("locale")||"zh",messages:{zh:T,en:A}}),O=S,C=n("4eb5"),P=n.n(C),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-tab"},[n("div",{staticClass:"tab-item",on:{click:function(t){return e.switchTo("/")}}},[n("span",{class:{on:"/"===e.$route.path}},[e._v("交易")])]),n("div",{staticClass:"tab-item",on:{click:function(t){return e.switchTo("/pledge")}}},[n("span",{class:{on:"/pledge"===e.$route.path}},[e._v("质押")])]),n("div",{staticClass:"tab-item",on:{click:function(t){return e.switchTo("/currency")}}},[n("span",{class:{on:"/currency"===e.$route.path}},[e._v("划币")])]),n("div",{staticClass:"tab-item",on:{click:function(t){return e.switchTo("/preach")}}},[n("span",{class:{on:"/preach"===e.$route.path}},[e._v("布道")])])])},V=[],E=(n("ac1f"),n("5319"),{data:function(){return{}},methods:{switchTo:function(e){this.$route.path!==e&&this.$router.replace(e)}},mounted:function(){},watch:{}}),R=E,j=(n("bd3e"),Object(w["a"])(R,I,V,!1,null,null,null)),$=j.exports;Vue.component("navigation",$),Vue.use(P.a),Vue.config.productionTip=!1,new Vue({router:k,i18n:O,render:function(e){return e(x)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";n("d32a")},8564:function(e){e.exports=JSON.parse('{"FCmToken":{"abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"},{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"address":"TFmR3uqew5KmzZCiLSxTX8aWtQE6rMTvGP"},"FCsToken":{"abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"},{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"address":"THGL3J55JGWRZWZM14M17hoMBDQciCGZcp"},"JustswapExchange":{"abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"trx_sold","type":"uint256"},{"indexed":true,"name":"tokens_bought","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":true,"name":"tokens_sold","type":"uint256"},{"indexed":true,"name":"trx_bought","type":"uint256"}],"name":"TrxPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"provider","type":"address"},{"indexed":true,"name":"trx_amount","type":"uint256"},{"indexed":true,"name":"token_amount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"provider","type":"address"},{"indexed":true,"name":"trx_amount","type":"uint256"},{"indexed":true,"name":"token_amount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":true,"name":"trx_balance","type":"uint256"},{"indexed":true,"name":"token_balance","type":"uint256"}],"name":"Snapshot","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"token_addr","type":"address"}],"name":"setup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"input_amount","type":"uint256"},{"name":"input_reserve","type":"uint256"},{"name":"output_reserve","type":"uint256"}],"name":"getInputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"output_amount","type":"uint256"},{"name":"input_reserve","type":"uint256"},{"name":"output_reserve","type":"uint256"}],"name":"getOutputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"min_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"trxToTokenSwapInput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"min_tokens","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"trxToTokenTransferInput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"trxToTokenSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"trxToTokenTransferOutput","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_trx","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_trx","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"tokenToTrxTransferInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trx_bought","type":"uint256"},{"name":"max_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"tokenToTrxSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trx_bought","type":"uint256"},{"name":"max_tokens","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"}],"name":"tokenToTrxTransferOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_tokens_bought","type":"uint256"},{"name":"min_trx_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"token_addr","type":"address"}],"name":"tokenToTokenSwapInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_tokens_bought","type":"uint256"},{"name":"min_trx_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"},{"name":"token_addr","type":"address"}],"name":"tokenToTokenTransferInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"max_tokens_sold","type":"uint256"},{"name":"max_trx_sold","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"token_addr","type":"address"}],"name":"tokenToTokenSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"max_tokens_sold","type":"uint256"},{"name":"max_trx_sold","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"},{"name":"token_addr","type":"address"}],"name":"tokenToTokenTransferOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_tokens_bought","type":"uint256"},{"name":"min_trx_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_sold","type":"uint256"},{"name":"min_tokens_bought","type":"uint256"},{"name":"min_trx_bought","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"},{"name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferInput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"max_tokens_sold","type":"uint256"},{"name":"max_trx_sold","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"exchange_addr","type":"address"}],"name":"tokenToExchangeSwapOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tokens_bought","type":"uint256"},{"name":"max_tokens_sold","type":"uint256"},{"name":"max_trx_sold","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"recipient","type":"address"},{"name":"exchange_addr","type":"address"}],"name":"tokenToExchangeTransferOutput","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"trx_sold","type":"uint256"}],"name":"getTrxToTokenInputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokens_bought","type":"uint256"}],"name":"getTrxToTokenOutputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokens_sold","type":"uint256"}],"name":"getTokenToTrxInputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"trx_bought","type":"uint256"}],"name":"getTokenToTrxOutputPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factoryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"min_liquidity","type":"uint256"},{"name":"max_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"min_trx","type":"uint256"},{"name":"min_tokens","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"address":"TELS8tiRk21kwnhnxConAjGLBFncqkRsz1"},"KTimeController":{"abi":[{"constant":true,"inputs":[],"name":"offsetTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timestemp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"t","type":"uint256"}],"name":"increaseTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"address":"41579dbb2f37a2516f3daf73a2e1baabc9841a5362"},"PledgeMine":{"abi":[{"constant":false,"inputs":[{"name":"auther","type":"address"}],"name":"KDelAuthAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"auther","type":"address"}],"name":"KAddAuthAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"KImplementAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"KContractOwners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mineableTotalAward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tc","type":"address"}],"name":"KSetDebugTimeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"impl","type":"address"}],"name":"SetKImplementAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"KAuthAddresses","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"amout","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"Pledge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"amount","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"UnPledge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"amount","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"},{"indexed":false,"name":"business","type":"uint256"},{"indexed":false,"name":"tokenAddress","type":"address"}],"name":"Award","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":true,"inputs":[],"name":"getNetworkInfo","outputs":[{"name":"pledgeAmount","type":"uint256"},{"name":"apy","type":"uint256"},{"name":"rate","type":"uint256"},{"name":"minePerSecond","type":"uint256"},{"name":"spas","type":"bool"},{"name":"sTokenClaimed","type":"uint256"},{"name":"sTokenDestoryed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adds","type":"address[]"}],"name":"getMinersInfo","outputs":[{"name":"pledgeAmounts","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMinerInfo","outputs":[{"name":"pledgeAmount","type":"uint256"},{"name":"pmra","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"},{"name":"size","type":"uint256"}],"name":"getRecommendInfo","outputs":[{"name":"total","type":"uint256"},{"name":"childs","type":"address[]"},{"name":"lps","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"lpAmount","type":"uint256"}],"name":"pledge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"lpAmount","type":"uint256"}],"name":"unPledge","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drawMotherPledgeAward","outputs":[{"name":"award","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drawSonPledgeAward","outputs":[{"name":"award","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drawRecommendAward","outputs":[{"name":"mr","type":"uint256"},{"name":"sr","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"mShiftSwitch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mGetSwitch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mGetSystemConfig","outputs":[{"name":"mpy","type":"uint256"},{"name":"spy","type":"uint256"},{"name":"mry","type":"uint256"},{"name":"sry","type":"uint256"},{"name":"upg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mpy","type":"uint256"},{"name":"spy","type":"uint256"},{"name":"mry","type":"uint256"},{"name":"sry","type":"uint256"},{"name":"upg","type":"uint256"}],"name":"mSetSystemConfig","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"address":"TQ2TmZmHkf34VvhhFejJZZEnKgDZU76gA4"},"Relation":{"abi":[{"constant":false,"inputs":[{"name":"auther","type":"address"}],"name":"KDelAuthAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"auther","type":"address"}],"name":"KAddAuthAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"KImplementAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"KContractOwners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"Pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tc","type":"address"}],"name":"KSetDebugTimeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"Unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"impl","type":"address"}],"name":"SetKImplementAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"KAuthAddresses","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":false,"inputs":[{"name":"_mine","type":"address"}],"name":"mSetPledgeMine","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mGetAllCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myIsMiner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getRecommer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"getAllChilds","outputs":[{"name":"childs","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"offset","type":"uint256"},{"name":"size","type":"uint256"}],"name":"getChilds","outputs":[{"name":"total","type":"uint256"},{"name":"childs","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recommer","type":"address"}],"name":"addRelationEx","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"}],"address":"TXagJUTgvkiWzTMdurHAf5cKf1V4yEjiWQ"}}')},"85ec":function(e,t,n){},bd3e:function(e,t,n){"use strict";n("2e02")},d32a:function(e,t,n){}});