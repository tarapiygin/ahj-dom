!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=75)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(41))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(0),o=r(29),i=r(1),u=r(30),c=r(35),f=r(58),a=o("wks"),s=e.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(6),o=r(8),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(6),o=r(23),i=r(5),u=r(13),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports={}},function(t,n,r){var e=r(43),o=r(12);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(7);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(4);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(29),o=r(30),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(0),o=r(21).f,i=r(4),u=r(25),c=r(14),f=r(45),a=r(52);t.exports=function(t,n){var r,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(r=h?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){var e=r(6),o=r(42),i=r(9),u=r(11),c=r(13),f=r(1),a=r(23),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(6),o=r(3),i=r(24);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(7),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(4),i=r(1),u=r(14),c=r(26),f=r(28),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(f?!p&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e=r(27),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(14),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},function(t,n,r){var e,o,i,u=r(44),c=r(0),f=r(7),a=r(4),s=r(1),l=r(15),p=r(17),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var b=l("state");p[b]=!0,e=function(t,n){return a(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(16),o=r(27);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(47),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(1),o=r(11),i=r(49).indexOf,u=r(17);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(u,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(18),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(12);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e,o,i,u=r(37),c=r(4),f=r(1),a=r(2),s=r(16),l=a("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||f(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(1),o=r(34),i=r(15),u=r(68),c=i("IE_PROTO"),f=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,n,r){var e=r(8).f,o=r(1),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){},function(t,n,r){var e=r(20),o=r(53);e({target:"Array",stat:!0,forced:!r(63)((function(t){Array.from(t)}))},{from:o})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(3),o=r(22),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(26),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(1),o=r(46),i=r(21),u=r(8);t.exports=function(t,n){for(var r=o(n),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(31),o=r(48),i=r(51),u=r(5);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(32),o=r(19).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(11),o=r(33),i=r(50),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(18),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(3),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,r){"use strict";var e=r(54),o=r(34),i=r(56),u=r(57),c=r(33),f=r(59),a=r(60);t.exports=function(t){var n,r,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,b=void 0!==g,x=a(y),m=0;if(b&&(g=e(g,d>2?arguments[2]:void 0,2)),null==x||h==Array&&u(x))for(r=new h(n=c(y.length));n>m;m++)v=b?g(y[m],m):y[m],f(r,m,v);else for(p=(l=x.call(y)).next,r=new h;!(s=p.call(l)).done;m++)v=b?i(l,g,[s.value,m],!0):s.value,f(r,m,v);return r.length=m,r}},function(t,n,r){var e=r(55);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(2),o=r(10),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){var e=r(35);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){"use strict";var e=r(13),o=r(8),i=r(9);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(61),o=r(10),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(62),o=r(22),i=r(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(2)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(65).charAt,o=r(28),i=r(66),u="String Iterator",c=o.set,f=o.getterFor(u);i(String,"String",(function(t){c(this,{type:u,string:String(t),index:0})}),(function(){var t,n=f(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(18),o=r(12),i=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e=r(20),o=r(67),i=r(37),u=r(73),c=r(38),f=r(4),a=r(25),s=r(2),l=r(16),p=r(10),v=r(36),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g="keys",b="values",x="entries",m=function(){return this};t.exports=function(t,n,r,s,v,O,w){o(r,n,s);var S,j,P,_=function(t){if(t===v&&M)return M;if(!h&&t in E)return E[t];switch(t){case g:case b:case x:return function(){return new r(this,t)}}return function(){return new r(this)}},A=n+" Iterator",T=!1,E=t.prototype,I=E[d]||E["@@iterator"]||v&&E[v],M=!h&&I||_(v),k="Array"==n&&E.entries||I;if(k&&(S=i(k.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(u?u(S,y):"function"!=typeof S[d]&&f(S,d,m)),c(S,A,!0,!0),l&&(p[A]=m))),v==b&&I&&I.name!==b&&(T=!0,M=function(){return I.call(this)}),l&&!w||E[d]===M||f(E,d,M),p[n]=M,v)if(j={values:_(b),keys:O?M:_(g),entries:_(x)},w)for(P in j)(h||T||!(P in E))&&a(E,P,j[P]);else e({target:n,proto:!0,forced:h||T},j);return j}},function(t,n,r){"use strict";var e=r(36).IteratorPrototype,o=r(69),i=r(9),u=r(38),c=r(10),f=function(){return this};t.exports=function(t,n,r){var a=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,a,!1,!0),c[a]=f,t}},function(t,n,r){var e=r(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e,o=r(5),i=r(70),u=r(19),c=r(17),f=r(72),a=r(24),s=r(15),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete y.prototype[u[r]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=y(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(6),o=r(8),i=r(5),u=r(71);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(32),o=r(19);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(31);t.exports=e("document","documentElement")},function(t,n,r){var e=r(5),o=r(74);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(7);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";r.r(n);r(39),r(40),r(64);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.field=document.querySelector(".field"),this.cells=Array.from(document.getElementsByClassName("field-cell")),this.image=document.querySelector(".cell-image"),this.activePosition=null}var n,r,o;return n=t,(r=[{key:"redrawPositions",value:function(t){var n=this.image.cloneNode(!0);n.style.display="",null!==this.activePosition&&this.cells[this.activePosition].querySelector(".cell-image").remove(),this.cells[t].append(n),this.activePosition=t}}])&&e(n.prototype,r),o&&e(n,o),t}();function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.gamePlay=new o,this.intervalId=null,this.init()}var n,r,e;return n=t,(r=[{key:"positionGeneration",value:function(){for(;;){var t=(n=this.gamePlay.cells.length,Math.floor(Math.random()*Math.floor(n)));if(t!==this.gamePlay.activePosition){this.gamePlay.redrawPositions(t);break}}var n}},{key:"init",value:function(){this.intervalId=setInterval(this.positionGeneration.bind(this),400)}}])&&i(n.prototype,r),e&&i(n,e),t}();document.addEventListener("DOMContentLoaded",(new u).init())}]);