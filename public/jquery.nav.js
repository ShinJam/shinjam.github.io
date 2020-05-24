parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Qrlz":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],o=function(t){return t&&t.Math==Math&&t};module.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")();
},{}],"Ygtd":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"Gk7f":[function(require,module,exports) {
var e=require("../internals/fails");module.exports=!e(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});
},{"../internals/fails":"Ygtd"}],"sZ5V":[function(require,module,exports) {
"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,t=e&&!r.call({1:2},1);exports.f=t?function(r){var t=e(this,r);return!!t&&t.enumerable}:r;
},{}],"N8CE":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"aEmq":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"QHZR":[function(require,module,exports) {
var r=require("../internals/fails"),e=require("../internals/classof-raw"),t="".split;module.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(r){return"String"==e(r)?t.call(r,""):Object(r)}:Object;
},{"../internals/fails":"Ygtd","../internals/classof-raw":"aEmq"}],"ugY9":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on "+o);return o};
},{}],"VVU8":[function(require,module,exports) {
var e=require("../internals/indexed-object"),r=require("../internals/require-object-coercible");module.exports=function(i){return e(r(i))};
},{"../internals/indexed-object":"QHZR","../internals/require-object-coercible":"ugY9"}],"xbmz":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"VvOM":[function(require,module,exports) {
var t=require("../internals/is-object");module.exports=function(r,e){if(!t(r))return r;var n,o;if(e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;if("function"==typeof(n=r.valueOf)&&!t(o=n.call(r)))return o;if(!e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;throw TypeError("Can't convert object to primitive value")};
},{"../internals/is-object":"xbmz"}],"fDsF":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"KqLa":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/is-object"),t=e.document,n=r(t)&&r(t.createElement);module.exports=function(e){return n?t.createElement(e):{}};
},{"../internals/global":"Qrlz","../internals/is-object":"xbmz"}],"jZu5":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/fails"),n=require("../internals/document-create-element");module.exports=!e&&!r(function(){return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a});
},{"../internals/descriptors":"Gk7f","../internals/fails":"Ygtd","../internals/document-create-element":"KqLa"}],"I5on":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/object-property-is-enumerable"),i=require("../internals/create-property-descriptor"),t=require("../internals/to-indexed-object"),n=require("../internals/to-primitive"),s=require("../internals/has"),a=require("../internals/ie8-dom-define"),o=Object.getOwnPropertyDescriptor;exports.f=e?o:function(e,c){if(e=t(e),c=n(c,!0),a)try{return o(e,c)}catch(u){}if(s(e,c))return i(!r.f.call(e,c),e[c])};
},{"../internals/descriptors":"Gk7f","../internals/object-property-is-enumerable":"sZ5V","../internals/create-property-descriptor":"N8CE","../internals/to-indexed-object":"VVU8","../internals/to-primitive":"VvOM","../internals/has":"fDsF","../internals/ie8-dom-define":"jZu5"}],"jbEH":[function(require,module,exports) {
var r=require("../internals/fails"),e=/#|\.prototype\./,t=function(e,t){var u=o[n(e)];return u==i||u!=a&&("function"==typeof t?r(t):!!t)},n=t.normalize=function(r){return String(r).replace(e,".").toLowerCase()},o=t.data={},a=t.NATIVE="N",i=t.POLYFILL="P";module.exports=t;
},{"../internals/fails":"Ygtd"}],"iKXg":[function(require,module,exports) {
module.exports={};
},{}],"V6CR":[function(require,module,exports) {
module.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n};
},{}],"DiXl":[function(require,module,exports) {
var n=require("../internals/a-function");module.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 0:return function(){return r.call(t)};case 1:return function(n){return r.call(t,n)};case 2:return function(n,e){return r.call(t,n,e)};case 3:return function(n,e,u){return r.call(t,n,e,u)}}return function(){return r.apply(t,arguments)}};
},{"../internals/a-function":"V6CR"}],"ylfB":[function(require,module,exports) {
var r=require("../internals/is-object");module.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e};
},{"../internals/is-object":"xbmz"}],"aYro":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/ie8-dom-define"),i=require("../internals/an-object"),t=require("../internals/to-primitive"),n=Object.defineProperty;exports.f=e?n:function(e,o,s){if(i(e),o=t(o,!0),i(s),r)try{return n(e,o,s)}catch(u){}if("get"in s||"set"in s)throw TypeError("Accessors not supported");return"value"in s&&(e[o]=s.value),e};
},{"../internals/descriptors":"Gk7f","../internals/ie8-dom-define":"jZu5","../internals/an-object":"ylfB","../internals/to-primitive":"VvOM"}],"PR9y":[function(require,module,exports) {
var r=require("../internals/descriptors"),e=require("../internals/object-define-property"),t=require("../internals/create-property-descriptor");module.exports=r?function(r,n,i){return e.f(r,n,t(1,i))}:function(r,e,t){return r[e]=t,r};
},{"../internals/descriptors":"Gk7f","../internals/object-define-property":"aYro","../internals/create-property-descriptor":"N8CE"}],"l7ap":[function(require,module,exports) {

"use strict";var e=require("../internals/global"),r=require("../internals/object-get-own-property-descriptor").f,t=require("../internals/is-forced"),n=require("../internals/path"),o=require("../internals/function-bind-context"),a=require("../internals/create-non-enumerable-property"),i=require("../internals/has"),s=function(e){var r=function(r,t,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,n)}return e.apply(this,arguments)};return r.prototype=e.prototype,r};module.exports=function(p,u){var c,l,f,y,h,q,w,b,d=p.target,g=p.global,m=p.stat,v=p.proto,x=g?e:m?e[d]:(e[d]||{}).prototype,j=g?n:n[d]||(n[d]={}),F=j.prototype;for(f in u)c=!t(g?f:d+(m?".":"#")+f,p.forced)&&x&&i(x,f),h=j[f],c&&(q=p.noTargetGet?(b=r(x,f))&&b.value:x[f]),y=c&&q?q:u[f],c&&typeof h==typeof y||(w=p.bind&&c?o(y,e):p.wrap&&c?s(y):v&&"function"==typeof y?o(Function.call,y):y,(p.sham||y&&y.sham||h&&h.sham)&&a(w,"sham",!0),j[f]=w,v&&(i(n,l=d+"Prototype")||a(n,l,{}),n[l][f]=y,p.real&&F&&!F[f]&&a(F,f,y)))};
},{"../internals/global":"Qrlz","../internals/object-get-own-property-descriptor":"I5on","../internals/is-forced":"jbEH","../internals/path":"iKXg","../internals/function-bind-context":"DiXl","../internals/create-non-enumerable-property":"PR9y","../internals/has":"fDsF"}],"BcE8":[function(require,module,exports) {

var n=require("../internals/path"),e=require("../internals/global"),r=function(n){return"function"==typeof n?n:void 0};module.exports=function(t,i){return arguments.length<2?r(n[t])||r(e[t]):n[t]&&n[t][i]||e[t]&&e[t][i]};
},{"../internals/path":"iKXg","../internals/global":"Qrlz"}],"ZVAh":[function(require,module,exports) {
var e=require("../internals/get-built-in");module.exports=e("navigator","userAgent")||"";
},{"../internals/get-built-in":"BcE8"}],"fn0m":[function(require,module,exports) {

var e=require("../internals/export"),n=require("../internals/global"),t=require("../internals/engine-user-agent"),r=[].slice,i=/MSIE .\./.test(t),l=function(e){return function(n,t){var i=arguments.length>2,l=i?r.call(arguments,2):void 0;return e(i?function(){("function"==typeof n?n:Function(n)).apply(this,l)}:n,t)}};e({global:!0,bind:!0,forced:i},{setTimeout:l(n.setTimeout),setInterval:l(n.setInterval)});
},{"../internals/export":"l7ap","../internals/global":"Qrlz","../internals/engine-user-agent":"ZVAh"}],"IXIn":[function(require,module,exports) {
require("../modules/web.timers");var e=require("../internals/path");module.exports=e.setInterval;
},{"../modules/web.timers":"fn0m","../internals/path":"iKXg"}],"KvgW":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/set-interval");
},{"core-js-pure/stable/set-interval":"IXIn"}],"Kuzy":[function(require,module,exports) {
var e=require("../internals/require-object-coercible");module.exports=function(r){return Object(e(r))};
},{"../internals/require-object-coercible":"ugY9"}],"yxlb":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"ZKqW":[function(require,module,exports) {
var e=require("../internals/to-integer"),r=Math.min;module.exports=function(n){return n>0?r(e(n),9007199254740991):0};
},{"../internals/to-integer":"yxlb"}],"PxKZ":[function(require,module,exports) {
var r=require("../internals/classof-raw");module.exports=Array.isArray||function(a){return"Array"==r(a)};
},{"../internals/classof-raw":"aEmq"}],"aJ2Z":[function(require,module,exports) {
module.exports=!0;
},{}],"RYng":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/create-non-enumerable-property");module.exports=function(n,t){try{r(e,n,t)}catch(a){e[n]=t}return t};
},{"../internals/global":"Qrlz","../internals/create-non-enumerable-property":"PR9y"}],"YiJE":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/set-global"),l="__core-js_shared__",a=e[l]||r(l,{});module.exports=a;
},{"../internals/global":"Qrlz","../internals/set-global":"RYng"}],"NgSm":[function(require,module,exports) {
var r=require("../internals/is-pure"),e=require("../internals/shared-store");(module.exports=function(r,i){return e[r]||(e[r]=void 0!==i?i:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});
},{"../internals/is-pure":"aJ2Z","../internals/shared-store":"YiJE"}],"F3wp":[function(require,module,exports) {
var o=0,r=Math.random();module.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++o+r).toString(36)};
},{}],"oQPf":[function(require,module,exports) {
var r=require("../internals/fails");module.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())});
},{"../internals/fails":"Ygtd"}],"YhtB":[function(require,module,exports) {
var e=require("../internals/native-symbol");module.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;
},{"../internals/native-symbol":"oQPf"}],"Q4b0":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/shared"),i=require("../internals/has"),n=require("../internals/uid"),s=require("../internals/native-symbol"),t=require("../internals/use-symbol-as-uid"),l=r("wks"),u=e.Symbol,a=t?u:u&&u.withoutSetter||n;module.exports=function(e){return i(l,e)||(s&&i(u,e)?l[e]=u[e]:l[e]=a("Symbol."+e)),l[e]};
},{"../internals/global":"Qrlz","../internals/shared":"NgSm","../internals/has":"fDsF","../internals/uid":"F3wp","../internals/native-symbol":"oQPf","../internals/use-symbol-as-uid":"YhtB"}],"rxGZ":[function(require,module,exports) {
var r=require("../internals/is-object"),e=require("../internals/is-array"),n=require("../internals/well-known-symbol"),o=n("species");module.exports=function(n,i){var t;return e(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!e(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===i?0:i)};
},{"../internals/is-object":"xbmz","../internals/is-array":"PxKZ","../internals/well-known-symbol":"Q4b0"}],"fuDa":[function(require,module,exports) {
var e=require("../internals/function-bind-context"),r=require("../internals/indexed-object"),n=require("../internals/to-object"),i=require("../internals/to-length"),t=require("../internals/array-species-create"),a=[].push,s=function(s){var u=1==s,c=2==s,o=3==s,l=4==s,f=6==s,d=5==s||f;return function(h,q,v,p){for(var x,b,m=n(h),g=r(m),j=e(q,v,3),y=i(g.length),w=0,E=p||t,I=u?E(h,y):c?E(h,0):void 0;y>w;w++)if((d||w in g)&&(b=j(x=g[w],w,m),s))if(u)I[w]=b;else if(b)switch(s){case 3:return!0;case 5:return x;case 6:return w;case 2:a.call(I,x)}else if(l)return!1;return f?-1:o||l?l:I}};module.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)};
},{"../internals/function-bind-context":"DiXl","../internals/indexed-object":"QHZR","../internals/to-object":"Kuzy","../internals/to-length":"ZKqW","../internals/array-species-create":"rxGZ"}],"TgKI":[function(require,module,exports) {


var e,r,s=require("../internals/global"),n=require("../internals/engine-user-agent"),a=s.process,i=a&&a.versions,t=i&&i.v8;t?r=(e=t.split("."))[0]+e[1]:n&&(!(e=n.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=n.match(/Chrome\/(\d+)/))&&(r=e[1]),module.exports=r&&+r;
},{"../internals/global":"Qrlz","../internals/engine-user-agent":"ZVAh"}],"S8KX":[function(require,module,exports) {
var n=require("../internals/fails"),e=require("../internals/well-known-symbol"),r=require("../internals/engine-v8-version"),o=e("species");module.exports=function(e){return r>=51||!n(function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[e](Boolean).foo})};
},{"../internals/fails":"Ygtd","../internals/well-known-symbol":"Q4b0","../internals/engine-v8-version":"TgKI"}],"Tf4d":[function(require,module,exports) {
var r=require("../internals/descriptors"),e=require("../internals/fails"),n=require("../internals/has"),t=Object.defineProperty,i={},u=function(r){throw r};module.exports=function(a,l){if(n(i,a))return i[a];l||(l={});var o=[][a],s=!!n(l,"ACCESSORS")&&l.ACCESSORS,f=n(l,0)?l[0]:u,c=n(l,1)?l[1]:void 0;return i[a]=!!o&&!e(function(){if(s&&!r)return!0;var e={length:-1};s?t(e,1,{enumerable:!0,get:u}):e[1]=1,o.call(e,f,c)})};
},{"../internals/descriptors":"Gk7f","../internals/fails":"Ygtd","../internals/has":"fDsF"}],"QD7o":[function(require,module,exports) {
"use strict";var r=require("../internals/export"),e=require("../internals/array-iteration").filter,t=require("../internals/array-method-has-species-support"),i=require("../internals/array-method-uses-to-length"),a=t("filter"),n=i("filter");r({target:"Array",proto:!0,forced:!a||!n},{filter:function(r){return e(this,r,arguments.length>1?arguments[1]:void 0)}});
},{"../internals/export":"l7ap","../internals/array-iteration":"fuDa","../internals/array-method-has-species-support":"S8KX","../internals/array-method-uses-to-length":"Tf4d"}],"raH9":[function(require,module,exports) {
var r=require("../internals/path");module.exports=function(e){return r[e+"Prototype"]};
},{"../internals/path":"iKXg"}],"zP53":[function(require,module,exports) {
require("../../../modules/es.array.filter");var r=require("../../../internals/entry-virtual");module.exports=r("Array").filter;
},{"../../../modules/es.array.filter":"QD7o","../../../internals/entry-virtual":"raH9"}],"j8GT":[function(require,module,exports) {
var r=require("../array/virtual/filter"),e=Array.prototype;module.exports=function(t){var a=t.filter;return t===e||t instanceof Array&&a===e.filter?r:a};
},{"../array/virtual/filter":"zP53"}],"kjiD":[function(require,module,exports) {
var e=require("../../es/instance/filter");module.exports=e;
},{"../../es/instance/filter":"j8GT"}],"NH3m":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/instance/filter");
},{"core-js-pure/stable/instance/filter":"kjiD"}],"lQlP":[function(require,module,exports) {
module.exports=function(){};
},{}],"ixSA":[function(require,module,exports) {
"use strict";var r=require("../internals/export"),e=require("../internals/array-iteration").find,n=require("../internals/add-to-unscopables"),t=require("../internals/array-method-uses-to-length"),i="find",a=!0,o=t(i);i in[]&&Array(1)[i](function(){a=!1}),r({target:"Array",proto:!0,forced:a||!o},{find:function(r){return e(this,r,arguments.length>1?arguments[1]:void 0)}}),n(i);
},{"../internals/export":"l7ap","../internals/array-iteration":"fuDa","../internals/add-to-unscopables":"lQlP","../internals/array-method-uses-to-length":"Tf4d"}],"NexY":[function(require,module,exports) {
require("../../../modules/es.array.find");var r=require("../../../internals/entry-virtual");module.exports=r("Array").find;
},{"../../../modules/es.array.find":"ixSA","../../../internals/entry-virtual":"raH9"}],"wUrc":[function(require,module,exports) {
var r=require("../array/virtual/find"),a=Array.prototype;module.exports=function(n){var e=n.find;return n===a||n instanceof Array&&e===a.find?r:e};
},{"../array/virtual/find":"NexY"}],"AOeW":[function(require,module,exports) {
var e=require("../../es/instance/find");module.exports=e;
},{"../../es/instance/find":"wUrc"}],"m19E":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/instance/find");
},{"core-js-pure/stable/instance/find":"AOeW"}],"vCec":[function(require,module,exports) {
"use strict";var t=e(require("@babel/runtime-corejs3/core-js-stable/set-interval")),n=e(require("@babel/runtime-corejs3/core-js-stable/instance/filter")),i=e(require("@babel/runtime-corejs3/core-js-stable/instance/find"));function e(t){return t&&t.__esModule?t:{default:t}}!function(e,s,o,a){var l=function(t,n){this.elem=t,this.$elem=e(t),this.options=n,this.metadata=this.$elem.data("plugin-options"),this.$win=e(s),this.sections={},this.didScroll=!1,this.$doc=e(o),this.docHeight=this.$doc.height()};l.defaults=(l.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1,padding:0},init:function(){var t,s;(this.config=e.extend({},this.defaults,this.options,this.metadata),this.$nav=(0,i.default)(t=this.$elem).call(t,this.config.navItems),""!==(0,n.default)(this.config))&&(this.$nav=(0,n.default)(s=this.$nav).call(s,(0,n.default)(this.config)));return this.$nav.on("click.onePageNav",e.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",e.proxy(this.getPositions,this)),this},adjustNav:function(t,n){var e;(0,i.default)(e=t.$elem).call(e,"."+t.config.currentClass).removeClass(t.config.currentClass),n.addClass(t.config.currentClass)},bindInterval:function(){var n,i=this;i.$win.on("scroll.onePageNav",function(){i.didScroll=!0}),i.t=(0,t.default)(function(){n=i.$doc.height(),i.didScroll&&(i.didScroll=!1,i.scrollChange()),n!==i.docHeight&&(i.docHeight=n,i.getPositions())},250)},getHash:function(t){return t.attr("href").split("#")[1]},getPositions:function(){var t,n,i,s=this;s.$nav.each(function(){t=s.getHash(e(this)),(i=e("#"+t)).length&&(n=i.offset().top,s.sections[t]=Math.round(n))})},getSection:function(t){var n=null,i=Math.round(this.$win.height()*this.config.scrollThreshold);for(var e in this.sections)this.sections[e]-i<t&&(n=e);return n},handleClick:function(t){var n=this,i=e(t.currentTarget),o=i.parent(),a="#"+n.getHash(i);o.hasClass(n.config.currentClass)||(n.config.begin&&n.config.begin(),n.adjustNav(n,o),n.unbindInterval(),n.scrollTo(a,function(){n.config.changeHash&&(s.location.hash=a),n.bindInterval(),n.config.end&&n.config.end()})),t.preventDefault()},scrollChange:function(){var t,n,e=this.$win.scrollTop(),s=this.getSection(e);null!==s&&((t=(0,i.default)(n=this.$elem).call(n,'a[href$="#'+s+'"]').parent()).hasClass(this.config.currentClass)||(this.adjustNav(this,t),this.config.scrollChange&&this.config.scrollChange(t)))},scrollTo:function(t,n){var i=e(t).offset().top-this.config.padding;e("html, body").animate({scrollTop:i},this.config.scrollSpeed,this.config.easing,n)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}}).defaults,e.fn.onePageNav=function(t){return this.each(function(){new l(this,t).init()})}}(jQuery,window,document);
},{"@babel/runtime-corejs3/core-js-stable/set-interval":"KvgW","@babel/runtime-corejs3/core-js-stable/instance/filter":"NH3m","@babel/runtime-corejs3/core-js-stable/instance/find":"m19E"}]},{},["vCec"], null)