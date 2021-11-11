(()=>{"use strict";var e={996:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?u((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function a(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function c(e,t,n){var a={};return n.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=r(e[t],n)})),o(t).forEach((function(o){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(i(e,o)&&n.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return u;var n=t.customMerge(e);return"function"==typeof n?n:u}(o,n)(e[o],t[o],n):a[o]=r(t[o],n))})),a}function u(e,n,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=r;var i=Array.isArray(n);return i===Array.isArray(e)?i?o.arrayMerge(e,n,o):c(e,n,o):r(n,o)}u.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return u(e,n,t)}),{})};var s=u;e.exports=s}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={route:"long_name",street_number:"short_name",postal_code:"short_name",city:"long_name",country:"long_name"},t=["address_components","adr_address","alt_id","formatted_address","geometry","icon","id","name","business_status","photo","place_id","scope","type","url","utc_offset_minutes","vicinity"];var r=function(e,t,n,r,a,o,i,c){var u,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):a&&(u=c?function(){a.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:a),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(e,t){return u.call(t),f(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:s}}({mixins:[Fieldtype],data:function(){return{location:"",searchResults:[],autoCompleteService:null,initialText:""}},metaInfo:function(){var e=this;return{script:[{src:"https://maps.googleapis.com/maps/api/js?key=".concat(this.meta.googleMapsApiKey,"&libraries=places"),async:!0,defer:!0,callback:function(){return e.MapsInit()}}]}},mounted:function(){this.value&&(this.initialText=this.value.formatted_address)},beforeUpdate:function(){this.initialText=this.value.formatted_address},methods:{handleBlur:function(){console.log(this.$refs),""===this.$refs.inputRef.value&&this.update(null)},onPlaceChanged:function(){var e=this.autocompleteService.getPlace();if(e.geometry){var t=this.formatResult(e);console.log(e,t),this.update(t)}else this.update(null)},MapsInit:function(){this.autocompleteService=new google.maps.places.Autocomplete(this.$refs.inputRef,{fields:t}),this.autocompleteService.addListener("place_changed",this.onPlaceChanged)},formatResult:function(t){for(var n={},r=0;r<t.address_components.length;r++){var a=t.address_components[r].types[0];if(e[a]){var o=t.address_components[r][e[a]];n[a]=o}}return n.latitude=t.geometry.location.lat(),n.longitude=t.geometry.location.lng(),n.formatted_address=t.formatted_address,n}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{ref:"inputRef",staticClass:"input-text",attrs:{type:"text"},domProps:{value:e.initialText},on:{blur:e.handleBlur}})])}),[],!1,null,null,null);const a=r.exports;var o=n(996),i=n.n(o);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){return Array.isArray(e)}function m(e){return void 0===e}function h(e){return"object"===c(e)}function y(e){return"object"===c(e)&&null!==e}function b(e){return"function"==typeof e}var g=(function(){try{return!m(window)}catch(e){return!1}}()?window:n.g).console||{};function _(e){g&&g.warn&&g.warn(e)}var O=function(){return _("This vue app/component has no vue-meta configuration")},M={title:void 0,titleChunk:"",titleTemplate:"%s",htmlAttrs:{},bodyAttrs:{},headAttrs:{},base:[],link:[],meta:[],style:[],script:[],noscript:[],__dangerouslyDisableSanitizers:[],__dangerouslyDisableSanitizersByTagID:{}},$="metaInfo",j="data-vue-meta",A="data-vue-meta-server-rendered",I="vmid",S="content",N="template",T=!0,w=10,x="ssr",k=Object.keys(M),E=[k[12],k[13]],D=[k[1],k[2],"changed"].concat(E),K=[k[3],k[4],k[5]],P=["link","style","script"],C=["base","meta","link"],R=["noscript","script","style"],z=["innerHTML","cssText","json"],L=["once","skip","template"],W=["body","pbody"],B=["allowfullscreen","amp","amp-boilerplate","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","truespeed","typemustmatch","visible"],H=null;function U(e,t,n){var r=e.debounceWait;t._vueMeta.initialized||!t._vueMeta.initializing&&"watcher"!==n||(t._vueMeta.initialized=null),t._vueMeta.initialized&&!t._vueMeta.pausing&&function(e,t){if(!(t=void 0===t?10:t))return void e();clearTimeout(H),H=setTimeout((function(){e()}),t)}((function(){t.$meta().refresh()}),r)}function V(e,t,n){if(!Array.prototype.findIndex){for(var r=0;r<e.length;r++)if(t.call(n,e[r],r,e))return r;return-1}return e.findIndex(t,n)}function J(e){return Array.from?Array.from(e):Array.prototype.slice.call(e)}function q(e,t){if(!Array.prototype.includes){for(var n in e)if(e[n]===t)return!0;return!1}return e.includes(t)}var F=function(e,t){return(t||document).querySelectorAll(e)};function G(e,t){return e[t]||(e[t]=document.getElementsByTagName(t)[0]),e[t]}function X(e,t,n){var r=t.appId,a=t.attribute,o=t.type,i=t.tagIDKeyName;n=n||{};var c=["".concat(o,"[").concat(a,'="').concat(r,'"]'),"".concat(o,"[data-").concat(i,"]")].map((function(e){for(var t in n){var r=n[t],a=r&&!0!==r?'="'.concat(r,'"'):"";e+="[data-".concat(t).concat(a,"]")}return e}));return J(F(c.join(", "),e))}function Q(e,t){e.removeAttribute(t)}function Y(e){return(e=e||this)&&(!0===e._vueMeta||h(e._vueMeta))}function Z(e,t){return e._vueMeta.pausing=!0,function(){return ee(e,t)}}function ee(e,t){if(e._vueMeta.pausing=!1,t||void 0===t)return e.$meta().refresh()}function te(e){var t=e.$router;!e._vueMeta.navGuards&&t&&(e._vueMeta.navGuards=!0,t.beforeEach((function(t,n,r){Z(e),r()})),t.afterEach((function(){e.$nextTick((function(){var t=ee(e).metaInfo;t&&b(t.afterNavigation)&&t.afterNavigation(t)}))})))}var ne=1;function re(e,t){var n=["activated","deactivated","beforeMount"],r=!1;return{beforeCreate:function(){var a=this,o=this.$root,i=this.$options,c=e.config.devtools;if(Object.defineProperty(this,"_hasMetaInfo",{configurable:!0,get:function(){return c&&!o._vueMeta.deprecationWarningShown&&(_("VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead"),o._vueMeta.deprecationWarningShown=!0),Y(this)}}),this===o&&o.$once("hook:beforeMount",(function(){if(!(r=this.$el&&1===this.$el.nodeType&&this.$el.hasAttribute("data-server-rendered"))&&o._vueMeta&&1===o._vueMeta.appId){var e=G({},"html");r=e&&e.hasAttribute(t.ssrAttribute)}})),!m(i[t.keyName])&&null!==i[t.keyName]){if(o._vueMeta||(o._vueMeta={appId:ne},ne++,c&&o.$options[t.keyName]&&this.$nextTick((function(){var e=function(e,t,n){if(Array.prototype.find)return e.find(t,n);for(var r=0;r<e.length;r++)if(t.call(n,e[r],r,e))return e[r]}(o.$children,(function(e){return e.$vnode&&e.$vnode.fnOptions}));e&&e.$vnode.fnOptions[t.keyName]&&_("VueMeta has detected a possible global mixin which adds a ".concat(t.keyName," property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"))}))),!this._vueMeta){this._vueMeta=!0;for(var u=this.$parent;u&&u!==o;)m(u._vueMeta)&&(u._vueMeta=!1),u=u.$parent}b(i[t.keyName])&&(i.computed=i.computed||{},i.computed.$metaInfo=i[t.keyName],this.$isServer||this.$on("hook:created",(function(){this.$watch("$metaInfo",(function(){U(t,this.$root,"watcher")}))}))),m(o._vueMeta.initialized)&&(o._vueMeta.initialized=this.$isServer,o._vueMeta.initialized||(o._vueMeta.initializedSsr||(o._vueMeta.initializedSsr=!0,this.$on("hook:beforeMount",(function(){var e=this.$root;r&&(e._vueMeta.appId=t.ssrAppId)}))),this.$on("hook:mounted",(function(){var e=this.$root;e._vueMeta.initialized||(e._vueMeta.initializing=!0,this.$nextTick((function(){var n=e.$meta().refresh(),r=n.tags,a=n.metaInfo;!1===r&&null===e._vueMeta.initialized&&this.$nextTick((function(){return U(t,e,"init")})),e._vueMeta.initialized=!0,delete e._vueMeta.initializing,!t.refreshOnceOnNavigation&&a.afterNavigation&&te(e)})))})),t.refreshOnceOnNavigation&&te(o))),this.$on("hook:destroyed",(function(){var e=this;this.$parent&&Y(this)&&(delete this._hasMetaInfo,this.$nextTick((function(){if(t.waitOnDestroyed&&e.$el&&e.$el.offsetParent)var n=setInterval((function(){e.$el&&null!==e.$el.offsetParent||(clearInterval(n),U(t,e.$root,"destroyed"))}),50);else U(t,e.$root,"destroyed")})))})),this.$isServer||n.forEach((function(e){a.$on("hook:".concat(e),(function(){U(t,this.$root,e)}))}))}}}}function ae(e){return{keyName:(e=h(e)?e:{}).keyName||$,attribute:e.attribute||j,ssrAttribute:e.ssrAttribute||A,tagIDKeyName:e.tagIDKeyName||I,contentKeyName:e.contentKeyName||S,metaTemplateKeyName:e.metaTemplateKeyName||N,debounceWait:m(e.debounceWait)?w:e.debounceWait,waitOnDestroyed:m(e.waitOnDestroyed)?T:e.waitOnDestroyed,ssrAppId:e.ssrAppId||x,refreshOnceOnNavigation:!!e.refreshOnceOnNavigation}}function oe(e,t){return t&&h(e)?(v(e[t])||(e[t]=[]),e):v(e)?e:[]}var ie=[[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot;"],[/'/g,"&#x27;"]],ce=[[/&/g,"&"],[/</g,"<"],[/>/g,">"],[/"/g,'"'],[/'/g,"'"]];function ue(e,t,n,r){var a=t.tagIDKeyName,o=n.doEscape,i=void 0===o?function(e){return e}:o,c={};for(var u in e){var s=e[u];if(q(D,u))c[u]=s;else{var f=E[0];if(n[f]&&q(n[f],u))c[u]=s;else{var l=e[a];if(l&&(f=E[1],n[f]&&n[f][l]&&q(n[f][l],u)))c[u]=s;else if("string"==typeof s?c[u]=i(s):v(s)?c[u]=s.map((function(e){return y(e)?ue(e,t,n,!0):i(e)})):y(s)?c[u]=ue(s,t,n,!0):c[u]=s,r){var d=i(u);u!==d&&(c[d]=c[u],delete c[u])}}}}return c}function se(e,t,n){n=n||[];var r={doEscape:function(e){return n.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};return E.forEach((function(e,n){if(0===n)oe(t,e);else if(1===n)for(var a in t[e])oe(t[e],a);r[e]=t[e]})),ue(t,e,r)}function fe(e,t,n,r){var a=e.component,o=e.metaTemplateKeyName,i=e.contentKeyName;return!0!==n&&!0!==t[o]&&(m(n)&&t[o]&&(n=t[o],t[o]=!0),n?(m(r)&&(r=t[i]),t[i]=b(n)?n.call(a,r):n.replace(/%s/g,r),!0):(delete t[o],!1))}var le=!1;function de(e,t,n){return n=n||{},void 0===t.title&&delete t.title,K.forEach((function(e){if(t[e])for(var n in t[e])n in t[e]&&void 0===t[e][n]&&(q(B,n)&&!le&&(_("VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details"),le=!0),delete t[e][n])})),i()(e,t,{arrayMerge:function(e,t){return function(e,t,n){var r=e.component,a=e.tagIDKeyName,o=e.metaTemplateKeyName,i=e.contentKeyName,c=[];return t.length||n.length?(t.forEach((function(e,t){if(e[a]){var u=V(n,(function(t){return t[a]===e[a]})),s=n[u];if(-1!==u){if(i in s&&void 0===s[i]||"innerHTML"in s&&void 0===s.innerHTML)return c.push(e),void n.splice(u,1);if(null!==s[i]&&null!==s.innerHTML){var f=e[o];if(f){if(!s[o])return fe({component:r,metaTemplateKeyName:o,contentKeyName:i},s,f),void(s.template=!0);s[i]||fe({component:r,metaTemplateKeyName:o,contentKeyName:i},s,void 0,e[i])}}else n.splice(u,1)}else c.push(e)}else c.push(e)})),c.concat(n)):c}(n,e,t)}})}function pe(e,t){return ve(e||{},t,M)}function ve(e,t,n){if(n=n||{},t._inactive)return n;var r=(e=e||{}).keyName,a=t.$metaInfo,o=t.$options,i=t.$children;if(o[r]){var c=a||o[r];h(c)&&(n=de(n,c,e))}return i.length&&i.forEach((function(t){(function(e){return(e=e||this)&&!m(e._vueMeta)})(t)&&(n=ve(e,t,n))})),n}var me=[];function he(e,t,n,r){var a=e.tagIDKeyName,o=!1;return n.forEach((function(e){e[a]&&e.callback&&(o=!0,function(e,t){1===arguments.length&&(t=e,e=""),me.push([e,t])}("".concat(t,"[data-").concat(a,'="').concat(e[a],'"]'),e.callback))})),r&&o?ye():o}function ye(){var e;"complete"!==(e||document).readyState?document.onreadystatechange=function(){be()}:be()}function be(e){me.forEach((function(t){var n=t[0],r=t[1],a="".concat(n,'[onload="this.__vm_l=1"]'),o=[];e||(o=J(F(a))),e&&e.matches(a)&&(o=[e]),o.forEach((function(e){if(!e.__vm_cb){var t=function(){e.__vm_cb=!0,Q(e,"onload"),r(e)};e.__vm_l?t():e.__vm_ev||(e.__vm_ev=!0,e.addEventListener("load",t))}}))}))}var ge,_e={};function Oe(e,t,n,r,a){var o=(t||{}).attribute,i=a.getAttribute(o);i&&(_e[n]=JSON.parse(decodeURI(i)),Q(a,o));var c=_e[n]||{},u=[];for(var s in c)void 0!==c[s]&&e in c[s]&&(u.push(s),r[s]||delete c[s][e]);for(var f in r){var l=c[f];l&&l[e]===r[f]||(u.push(f),void 0!==r[f]&&(c[f]=c[f]||{},c[f][e]=r[f]))}for(var d=0,p=u;d<p.length;d++){var v=p[d],m=c[v],h=[];for(var y in m)Array.prototype.push.apply(h,[].concat(m[y]));if(h.length){var b=q(B,v)&&h.some(Boolean)?"":h.filter((function(e){return void 0!==e})).join(" ");a.setAttribute(v,b)}else Q(a,v)}_e[n]=c}function Me(e,t,n,r,a,o){var i=t||{},c=i.attribute,u=i.tagIDKeyName,s=W.slice();s.push(u);var f=[],l={appId:e,attribute:c,type:n,tagIDKeyName:u},d={head:X(a,l),pbody:X(o,l,{pbody:!0}),body:X(o,l,{body:!0})};if(r.length>1){var p=[];r=r.filter((function(e){var t=JSON.stringify(e),n=!q(p,t);return p.push(t),n}))}r.forEach((function(t){if(!t.skip){var r=document.createElement(n);t.once||r.setAttribute(c,e),Object.keys(t).forEach((function(e){if(!q(L,e))if("innerHTML"!==e)if("json"!==e)if("cssText"!==e)if("callback"!==e){var n=q(s,e)?"data-".concat(e):e,a=q(B,e);if(!a||t[e]){var o=a?"":t[e];r.setAttribute(n,o)}}else r.onload=function(){return t[e](r)};else r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else r.innerHTML=JSON.stringify(t.json);else r.innerHTML=t.innerHTML}));var a,o=d[function(e){var t=e.body,n=e.pbody;return t?"body":n?"pbody":"head"}(t)],i=o.some((function(e,t){return a=t,r.isEqualNode(e)}));i&&(a||0===a)?o.splice(a,1):f.push(r)}}));var v=[];for(var m in d)Array.prototype.push.apply(v,d[m]);return v.forEach((function(e){e.parentNode.removeChild(e)})),f.forEach((function(e){e.hasAttribute("data-body")?o.appendChild(e):e.hasAttribute("data-pbody")?o.insertBefore(e,o.firstChild):a.appendChild(e)})),{oldTags:v,newTags:f}}function $e(e,t,n){var r=t=t||{},a=r.ssrAttribute,o=r.ssrAppId,i={},c=G(i,"html");if(e===o&&c.hasAttribute(a)){Q(c,a);var u=!1;return P.forEach((function(e){n[e]&&he(t,e,n[e])&&(u=!0)})),u&&ye(),!1}var s,f={},l={};for(var d in n)if(!q(D,d))if("title"!==d){if(q(K,d)){var p=d.substr(0,4);Oe(e,t,d,n[d],G(i,p))}else if(v(n[d])){var m=Me(e,t,d,n[d],G(i,"head"),G(i,"body")),h=m.oldTags,y=m.newTags;y.length&&(f[d]=y,l[d]=h)}}else((s=n.title)||""===s)&&(document.title=s);return{tagsAdded:f,tagsRemoved:l}}function je(e,t,n){return{set:function(r){return function(e,t,n,r){if(e&&e.$el)return $e(t,n,r);(ge=ge||{})[t]=r}(e,t,n,r)},remove:function(){return function(e,t,n){if(e&&e.$el){var r,a={},o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(K);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=i.substr(0,4);Oe(t,n,i,{},G(a,c))}}catch(e){o.e(e)}finally{o.f()}return function(e,t){var n=e.attribute;J(F("[".concat(n,'="').concat(t,'"]'))).map((function(e){return e.remove()}))}(n,t)}ge[t]&&(delete ge[t],Ie())}(e,t,n)}}}function Ae(){return ge}function Ie(e){!e&&Object.keys(ge).length||(ge=void 0)}function Se(e,t,n,r){n=n||[];var a=(e=e||{}).tagIDKeyName;return t.title&&(t.titleChunk=t.title),t.titleTemplate&&"%s"!==t.titleTemplate&&fe({component:r,contentKeyName:"title"},t,t.titleTemplate,t.titleChunk||""),t.base&&(t.base=Object.keys(t.base).length?[t.base]:[]),t.meta&&(t.meta=t.meta.filter((function(e,t,n){return!e[a]||t===V(n,(function(t){return t[a]===e[a]}))})),t.meta.forEach((function(t){return fe(e,t)}))),se(e,t,n)}function Ne(e,t,n,r){var a=e||{},o=a.ssrAppId,i=a.attribute,c=a.tagIDKeyName,u=r||{},s=u.appId,f=u.isSSR,d=void 0===f||f,p=u.body,v=void 0!==p&&p,m=u.pbody,h=void 0!==m&&m,y=u.ln,b=void 0!==y&&y,g=[c].concat(l(W));return n&&n.length?n.reduce((function(e,n){if(n.skip)return e;if(0===Object.keys(n).length)return e;if(Boolean(n.body)!==v||Boolean(n.pbody)!==h)return e;var r=n.once?"":" ".concat(i,'="').concat(s||(!1===d?"1":o),'"');for(var a in n)if(!z.includes(a)&&!L.includes(a))if("callback"!==a){var c="";g.includes(a)&&(c="data-");var u=!c&&B.includes(a);u&&!n[a]||(r+=" ".concat(c).concat(a)+(u?"":'="'.concat(n[a],'"')))}else r+=' onload="this.__vm_l=1"';var f="";n.json&&(f=JSON.stringify(n.json));var l=n.innerHTML||n.cssText||f,p=!C.includes(t),m=p&&R.includes(t);return"".concat(e,"<").concat(t).concat(r).concat(!m&&p?"/":"",">")+(m?"".concat(l,"</").concat(t,">"):"")+(b?"\n":"")}),""):""}function Te(e,t,n){var r={data:t,extraData:void 0,addInfo:function(e,t){this.extraData=this.extraData||{},this.extraData[e]=t},callInjectors:function(e){var t=this.injectors;return(e.body||e.pbody?"":t.title.text(e))+t.meta.text(e)+t.base.text(e)+t.link.text(e)+t.style.text(e)+t.script.text(e)+t.noscript.text(e)},injectors:{head:function(e){return r.callInjectors(f(f({},n),{},{ln:e}))},bodyPrepend:function(e){return r.callInjectors(f(f({},n),{},{ln:e,pbody:!0}))},bodyAppend:function(e){return r.callInjectors(f(f({},n),{},{ln:e,body:!0}))}}},a=function(t){if(D.includes(t))return"continue";r.injectors[t]={text:function(a){if(a=f(f({addSsrAttribute:!0===a},n),a),"title"===t)return function(e,t,n,r){var a=(r||{}).ln;return n?"<".concat(t,">").concat(n,"</").concat(t,">").concat(a?"\n":""):""}(0,t,r.data[t],a);if(K.includes(t)){var o={},i=r.data[t];if(i){var c=!1===a.isSSR?"1":e.ssrAppId;for(var s in i)o[s]=u({},c,i[s])}if(r.extraData)for(var d in r.extraData){var p=r.extraData[d][t];if(p)for(var v in p)o[v]=f(f({},o[v]),{},u({},d,p[v]))}return function(e,t,n,r){var a=r.addSsrAttribute,o=e||{},i=o.attribute,c=o.ssrAttribute,u="";for(var s in n){var f=n[s],d=[];for(var p in f)d.push.apply(d,l([].concat(f[p])));d.length&&(u+=B.includes(s)&&d.some(Boolean)?"".concat(s):"".concat(s,'="').concat(d.join(" "),'"'),u+=" ")}return u&&(u+="".concat(i,'="').concat(encodeURI(JSON.stringify(n)),'"')),"htmlAttrs"===t&&a?"".concat(c).concat(u?" ":"").concat(u):u}(e,t,o,a)}var m=Ne(e,t,r.data[t],a);if(r.extraData)for(var h in r.extraData){var y=r.extraData[h][t],b=Ne(e,t,y,f({appId:h},a));m="".concat(m).concat(b)}return m}}};for(var o in M)a(o);return r}function we(e){e=e||{};var t=this.$root;return{getOptions:function(){return function(e){var t={};for(var n in e)t[n]=e[n];return t}(e)},setOptions:function(n){var r="refreshOnceOnNavigation";n&&n[r]&&(e.refreshOnceOnNavigation=!!n[r],te(t));var a="debounceWait";if(n&&a in n){var o=parseInt(n.debounceWait);isNaN(o)||(e.debounceWait=o)}var i="waitOnDestroyed";n&&i in n&&(e.waitOnDestroyed=!!n.waitOnDestroyed)},refresh:function(){return function(e,t){if(t=t||{},!e._vueMeta)return O(),{};var n=Se(t,pe(t,e),ce,e),r=$e(e._vueMeta.appId,t,n);r&&b(n.changed)&&(n.changed(n,r.tagsAdded,r.tagsRemoved),r={addedTags:r.tagsAdded,removedTags:r.tagsRemoved});var a=Ae();if(a){for(var o in a)$e(o,t,a[o]),delete a[o];Ie(!0)}return{vm:e,metaInfo:n,tags:r}}(t,e)},inject:function(n){return function(e,t,n){if(!e._vueMeta)return O(),{};var r=Te(t,Se(t,pe(t,e),ie,e),n),a=Ae();if(a){for(var o in a)r.addInfo(o,a[o]),delete a[o];Ie(!0)}return r.injectors}(t,e,n)},pause:function(){return Z(t)},resume:function(){return ee(t)},addApp:function(n){return je(t,n,e)}}}const xe={version:"2.4.0",install:function(e,t){e.__vuemeta_installed||(e.__vuemeta_installed=!0,t=ae(t),e.prototype.$meta=function(){return we.call(this,t)},e.mixin(re(e,t)))},generate:function(e,t){return function(e,t){return Te(t=ae(t),Se(t,e,ie)).injectors}(e,t)},hasMetaInfo:Y};window.Vue.use(xe,{refreshOnceOnNavigation:!0}),Statamic.$components.register("location-fieldtype",a)})()})();