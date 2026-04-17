function xk(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function q0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H0={exports:{}},fc={},W0={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),bk=Symbol.for("react.portal"),Sk=Symbol.for("react.fragment"),kk=Symbol.for("react.strict_mode"),_k=Symbol.for("react.profiler"),Ek=Symbol.for("react.provider"),Ck=Symbol.for("react.context"),jk=Symbol.for("react.forward_ref"),Tk=Symbol.for("react.suspense"),Pk=Symbol.for("react.memo"),Ak=Symbol.for("react.lazy"),rg=Symbol.iterator;function Rk(e){return e===null||typeof e!="object"?null:(e=rg&&e[rg]||e["@@iterator"],typeof e=="function"?e:null)}var G0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,Y0={};function os(e,t,r){this.props=e,this.context=t,this.refs=Y0,this.updater=r||G0}os.prototype.isReactComponent={};os.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};os.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function J0(){}J0.prototype=os.prototype;function gf(e,t,r){this.props=e,this.context=t,this.refs=Y0,this.updater=r||G0}var mf=gf.prototype=new J0;mf.constructor=gf;K0(mf,os.prototype);mf.isPureReactComponent=!0;var ng=Array.isArray,Q0=Object.prototype.hasOwnProperty,vf={current:null},X0={key:!0,ref:!0,__self:!0,__source:!0};function Z0(e,t,r){var n,i={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Q0.call(t,n)&&!X0.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Lo,type:e,key:s,ref:o,props:i,_owner:vf.current}}function Ik(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function Ok(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var ig=/\/+/g;function nu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ok(""+e.key):t.toString(36)}function Ka(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Lo:case bk:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+nu(o,0):n,ng(i)?(r="",e!=null&&(r=e.replace(ig,"$&/")+"/"),Ka(i,t,r,"",function(u){return u})):i!=null&&(yf(i)&&(i=Ik(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ig,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",ng(e))for(var a=0;a<e.length;a++){s=e[a];var l=n+nu(s,a);o+=Ka(s,t,r,l,i)}else if(l=Rk(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=n+nu(s,a++),o+=Ka(s,t,r,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(e,t,r){if(e==null)return e;var n=[],i=0;return Ka(e,n,"","",function(s){return t.call(r,s,i++)}),n}function $k(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},Ya={transition:null},Lk={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:vf};function ew(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ea,forEach:function(e,t,r){ea(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ea(e,function(){t++}),t},toArray:function(e){return ea(e,function(t){return t})||[]},only:function(e){if(!yf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=os;ee.Fragment=Sk;ee.Profiler=_k;ee.PureComponent=gf;ee.StrictMode=kk;ee.Suspense=Tk;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;ee.act=ew;ee.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=K0({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=vf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Q0.call(t,l)&&!X0.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Lo,type:e.type,key:i,ref:s,props:n,_owner:o}};ee.createContext=function(e){return e={$$typeof:Ck,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ek,_context:e},e.Consumer=e};ee.createElement=Z0;ee.createFactory=function(e){var t=Z0.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:jk,render:e}};ee.isValidElement=yf;ee.lazy=function(e){return{$$typeof:Ak,_payload:{_status:-1,_result:e},_init:$k}};ee.memo=function(e,t){return{$$typeof:Pk,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=Ya.transition;Ya.transition={};try{e()}finally{Ya.transition=t}};ee.unstable_act=ew;ee.useCallback=function(e,t){return ot.current.useCallback(e,t)};ee.useContext=function(e){return ot.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};ee.useEffect=function(e,t){return ot.current.useEffect(e,t)};ee.useId=function(){return ot.current.useId()};ee.useImperativeHandle=function(e,t,r){return ot.current.useImperativeHandle(e,t,r)};ee.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return ot.current.useMemo(e,t)};ee.useReducer=function(e,t,r){return ot.current.useReducer(e,t,r)};ee.useRef=function(e){return ot.current.useRef(e)};ee.useState=function(e){return ot.current.useState(e)};ee.useSyncExternalStore=function(e,t,r){return ot.current.useSyncExternalStore(e,t,r)};ee.useTransition=function(){return ot.current.useTransition()};ee.version="18.3.1";W0.exports=ee;var _=W0.exports;const ir=q0(_),zk=xk({__proto__:null,default:ir},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nk=_,Dk=Symbol.for("react.element"),Mk=Symbol.for("react.fragment"),Uk=Object.prototype.hasOwnProperty,Fk=Nk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vk={key:!0,ref:!0,__self:!0,__source:!0};function tw(e,t,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Uk.call(t,n)&&!Vk.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Dk,type:e,key:s,ref:o,props:i,_owner:Fk.current}}fc.Fragment=Mk;fc.jsx=tw;fc.jsxs=tw;H0.exports=fc;var c=H0.exports,Ed={},rw={exports:{}},Pt={},nw={exports:{}},iw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,N){var V=$.length;$.push(N);e:for(;0<V;){var U=V-1>>>1,X=$[U];if(0<i(X,N))$[U]=N,$[V]=X,V=U;else break e}}function r($){return $.length===0?null:$[0]}function n($){if($.length===0)return null;var N=$[0],V=$.pop();if(V!==N){$[0]=V;e:for(var U=0,X=$.length,A=X>>>1;U<A;){var Z=2*(U+1)-1,fe=$[Z],le=Z+1,I=$[le];if(0>i(fe,V))le<X&&0>i(I,fe)?($[U]=I,$[le]=V,U=le):($[U]=fe,$[Z]=V,U=Z);else if(le<X&&0>i(I,V))$[U]=I,$[le]=V,U=le;else break e}}return N}function i($,N){var V=$.sortIndex-N.sortIndex;return V!==0?V:$.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,y=!1,m=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var N=r(u);N!==null;){if(N.callback===null)n(u);else if(N.startTime<=$)n(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=r(u)}}function k($){if(x=!1,w($),!m)if(r(l)!==null)m=!0,ce(C);else{var N=r(u);N!==null&&Ae(k,N.startTime-$)}}function C($,N){m=!1,x&&(x=!1,v(j),j=-1),y=!0;var V=f;try{for(w(N),h=r(l);h!==null&&(!(h.expirationTime>N)||$&&!L());){var U=h.callback;if(typeof U=="function"){h.callback=null,f=h.priorityLevel;var X=U(h.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?h.callback=X:h===r(l)&&n(l),w(N)}else n(l);h=r(l)}if(h!==null)var A=!0;else{var Z=r(u);Z!==null&&Ae(k,Z.startTime-N),A=!1}return A}finally{h=null,f=V,y=!1}}var S=!1,E=null,j=-1,R=5,P=-1;function L(){return!(e.unstable_now()-P<R)}function W(){if(E!==null){var $=e.unstable_now();P=$;var N=!0;try{N=E(!0,$)}finally{N?re():(S=!1,E=null)}}else S=!1}var re;if(typeof g=="function")re=function(){g(W)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,rt=ae.port2;ae.port1.onmessage=W,re=function(){rt.postMessage(null)}}else re=function(){b(W,0)};function ce($){E=$,S||(S=!0,re())}function Ae($,N){j=b(function(){$(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,ce(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var V=f;f=N;try{return $()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,N){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var V=f;f=$;try{return N()}finally{f=V}},e.unstable_scheduleCallback=function($,N,V){var U=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?U+V:U):V=U,$){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=V+X,$={id:d++,callback:N,priorityLevel:$,startTime:V,expirationTime:X,sortIndex:-1},V>U?($.sortIndex=V,t(u,$),r(l)===null&&$===r(u)&&(x?(v(j),j=-1):x=!0,Ae(k,V-U))):($.sortIndex=X,t(l,$),m||y||(m=!0,ce(C))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var N=f;return function(){var V=f;f=N;try{return $.apply(this,arguments)}finally{f=V}}}})(iw);nw.exports=iw;var Bk=nw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk=_,jt=Bk;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sw=new Set,eo={};function Xn(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(eo[e]=t,e=0;e<t.length;e++)sw.add(t[e])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=Object.prototype.hasOwnProperty,Hk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sg={},og={};function Wk(e){return Cd.call(og,e)?!0:Cd.call(sg,e)?!1:Hk.test(e)?og[e]=!0:(sg[e]=!0,!1)}function Gk(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kk(e,t,r,n){if(t===null||typeof t>"u"||Gk(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,r,n,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var wf=/[\-:]([a-z])/g;function xf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wf,xf);Ke[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wf,xf);Ke[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wf,xf);Ke[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function bf(e,t,r,n){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kk(t,r,i,n)&&(r=null),n||i===null?Wk(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Lr=qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),wi=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),ow=Symbol.for("react.provider"),aw=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),lw=Symbol.for("react.offscreen"),ag=Symbol.iterator;function fs(e){return e===null||typeof e!="object"?null:(e=ag&&e[ag]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,iu;function As(e){if(iu===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);iu=t&&t[1]||""}return`
`+iu+e}var su=!1;function ou(e,t){if(!e||su)return"";su=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?As(e):""}function Yk(e){switch(e.tag){case 5:return As(e.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return e=ou(e.type,!1),e;case 11:return e=ou(e.type.render,!1),e;case 1:return e=ou(e.type,!0),e;default:return""}}function Ad(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xi:return"Fragment";case wi:return"Portal";case jd:return"Profiler";case Sf:return"StrictMode";case Td:return"Suspense";case Pd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case aw:return(e.displayName||"Context")+".Consumer";case ow:return(e._context.displayName||"Context")+".Provider";case kf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _f:return t=e.displayName||null,t!==null?t:Ad(e.type)||"Memo";case Vr:t=e._payload,e=e._init;try{return Ad(e(t))}catch{}}return null}function Jk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(t);case 8:return t===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qk(e){var t=cw(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ra(e){e._valueTracker||(e._valueTracker=Qk(e))}function uw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=cw(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rd(e,t){var r=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lg(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=hn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dw(e,t){t=t.checked,t!=null&&bf(e,"checked",t,!1)}function Id(e,t){dw(e,t);var r=hn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Od(e,t.type,r):t.hasOwnProperty("defaultValue")&&Od(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cg(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Od(e,t,r){(t!=="number"||yl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Rs=Array.isArray;function Ni(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+hn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $d(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ug(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(O(92));if(Rs(r)){if(1<r.length)throw Error(O(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:hn(r)}}function hw(e,t){var r=hn(t.value),n=hn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function dg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var na,pw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function to(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xk=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(e){Xk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ds[t]=Ds[e]})});function gw(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ds.hasOwnProperty(e)&&Ds[e]?(""+t).trim():t+"px"}function mw(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=gw(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Zk=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zd(e,t){if(t){if(Zk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Nd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Md=null,Di=null,Mi=null;function hg(e){if(e=Do(e)){if(typeof Md!="function")throw Error(O(280));var t=e.stateNode;t&&(t=yc(t),Md(e.stateNode,e.type,t))}}function vw(e){Di?Mi?Mi.push(e):Mi=[e]:Di=e}function yw(){if(Di){var e=Di,t=Mi;if(Mi=Di=null,hg(e),t)for(e=0;e<t.length;e++)hg(t[e])}}function ww(e,t){return e(t)}function xw(){}var au=!1;function bw(e,t,r){if(au)return e(t,r);au=!0;try{return ww(e,t,r)}finally{au=!1,(Di!==null||Mi!==null)&&(xw(),yw())}}function ro(e,t){var r=e.stateNode;if(r===null)return null;var n=yc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(O(231,t,typeof r));return r}var Ud=!1;if(Ar)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Ud=!1}function e_(e,t,r,n,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var Ms=!1,wl=null,xl=!1,Fd=null,t_={onError:function(e){Ms=!0,wl=e}};function r_(e,t,r,n,i,s,o,a,l){Ms=!1,wl=null,e_.apply(t_,arguments)}function n_(e,t,r,n,i,s,o,a,l){if(r_.apply(this,arguments),Ms){if(Ms){var u=wl;Ms=!1,wl=null}else throw Error(O(198));xl||(xl=!0,Fd=u)}}function Zn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Sw(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fg(e){if(Zn(e)!==e)throw Error(O(188))}function i_(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return fg(i),e;if(s===n)return fg(i),t;s=s.sibling}throw Error(O(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,n=s;break}if(a===n){o=!0,n=i,r=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===r){o=!0,r=s,n=i;break}if(a===n){o=!0,n=s,r=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(r.alternate!==n)throw Error(O(190))}if(r.tag!==3)throw Error(O(188));return r.stateNode.current===r?e:t}function kw(e){return e=i_(e),e!==null?_w(e):null}function _w(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_w(e);if(t!==null)return t;e=e.sibling}return null}var Ew=jt.unstable_scheduleCallback,pg=jt.unstable_cancelCallback,s_=jt.unstable_shouldYield,o_=jt.unstable_requestPaint,Te=jt.unstable_now,a_=jt.unstable_getCurrentPriorityLevel,Cf=jt.unstable_ImmediatePriority,Cw=jt.unstable_UserBlockingPriority,bl=jt.unstable_NormalPriority,l_=jt.unstable_LowPriority,jw=jt.unstable_IdlePriority,pc=null,pr=null;function c_(e){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(pc,e,void 0,(e.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:h_,u_=Math.log,d_=Math.LN2;function h_(e){return e>>>=0,e===0?32:31-(u_(e)/d_|0)|0}var ia=64,sa=4194304;function Is(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sl(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?n=Is(a):(s&=o,s!==0&&(n=Is(s)))}else o=r&~i,o!==0?n=Is(o):s!==0&&(n=Is(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Zt(t),i=1<<r,n|=e[r],t&=~i;return n}function f_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&r)||a&n)&&(i[o]=f_(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Vd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tw(){var e=ia;return ia<<=1,!(ia&4194240)&&(ia=64),e}function lu(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function zo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Zt(t),e[t]=r}function g_(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Zt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function jf(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Zt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var oe=0;function Pw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Aw,Tf,Rw,Iw,Ow,Bd=!1,oa=[],Zr=null,en=null,tn=null,no=new Map,io=new Map,Wr=[],m_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":no.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function gs(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Do(t),t!==null&&Tf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function v_(e,t,r,n,i){switch(t){case"focusin":return Zr=gs(Zr,e,t,r,n,i),!0;case"dragenter":return en=gs(en,e,t,r,n,i),!0;case"mouseover":return tn=gs(tn,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return no.set(s,gs(no.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,gs(io.get(s)||null,e,t,r,n,i)),!0}return!1}function $w(e){var t=$n(e.target);if(t!==null){var r=Zn(t);if(r!==null){if(t=r.tag,t===13){if(t=Sw(r),t!==null){e.blockedOn=t,Ow(e.priority,function(){Rw(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ja(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=qd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Dd=n,r.target.dispatchEvent(n),Dd=null}else return t=Do(r),t!==null&&Tf(t),e.blockedOn=r,!1;t.shift()}return!0}function mg(e,t,r){Ja(e)&&r.delete(t)}function y_(){Bd=!1,Zr!==null&&Ja(Zr)&&(Zr=null),en!==null&&Ja(en)&&(en=null),tn!==null&&Ja(tn)&&(tn=null),no.forEach(mg),io.forEach(mg)}function ms(e,t){e.blockedOn===t&&(e.blockedOn=null,Bd||(Bd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,y_)))}function so(e){function t(i){return ms(i,e)}if(0<oa.length){ms(oa[0],e);for(var r=1;r<oa.length;r++){var n=oa[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Zr!==null&&ms(Zr,e),en!==null&&ms(en,e),tn!==null&&ms(tn,e),no.forEach(t),io.forEach(t),r=0;r<Wr.length;r++)n=Wr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Wr.length&&(r=Wr[0],r.blockedOn===null);)$w(r),r.blockedOn===null&&Wr.shift()}var Ui=Lr.ReactCurrentBatchConfig,kl=!0;function w_(e,t,r,n){var i=oe,s=Ui.transition;Ui.transition=null;try{oe=1,Pf(e,t,r,n)}finally{oe=i,Ui.transition=s}}function x_(e,t,r,n){var i=oe,s=Ui.transition;Ui.transition=null;try{oe=4,Pf(e,t,r,n)}finally{oe=i,Ui.transition=s}}function Pf(e,t,r,n){if(kl){var i=qd(e,t,r,n);if(i===null)yu(e,t,n,_l,r),gg(e,n);else if(v_(i,e,t,r,n))n.stopPropagation();else if(gg(e,n),t&4&&-1<m_.indexOf(e)){for(;i!==null;){var s=Do(i);if(s!==null&&Aw(s),s=qd(e,t,r,n),s===null&&yu(e,t,n,_l,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else yu(e,t,n,null,r)}}var _l=null;function qd(e,t,r,n){if(_l=null,e=Ef(n),e=$n(e),e!==null)if(t=Zn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Sw(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _l=e,null}function Lw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case Cf:return 1;case Cw:return 4;case bl:case l_:return 16;case jw:return 536870912;default:return 16}default:return 16}}var Jr=null,Af=null,Qa=null;function zw(){if(Qa)return Qa;var e,t=Af,r=t.length,n,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[s-n];n++);return Qa=i.slice(e,1<n?1-n:void 0)}function Xa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function vg(){return!1}function At(e){function t(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:vg,this.isPropagationStopped=vg,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),t}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=At(as),No=ke({},as,{view:0,detail:0}),b_=At(No),cu,uu,vs,gc=ke({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vs&&(vs&&e.type==="mousemove"?(cu=e.screenX-vs.screenX,uu=e.screenY-vs.screenY):uu=cu=0,vs=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),yg=At(gc),S_=ke({},gc,{dataTransfer:0}),k_=At(S_),__=ke({},No,{relatedTarget:0}),du=At(__),E_=ke({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=At(E_),j_=ke({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T_=At(j_),P_=ke({},as,{data:0}),wg=At(P_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I_[e])?!!t[e]:!1}function If(){return O_}var $_=ke({},No,{key:function(e){if(e.key){var t=A_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?Xa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L_=At($_),z_=ke({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xg=At(z_),N_=ke({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),D_=At(N_),M_=ke({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=At(M_),F_=ke({},gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V_=At(F_),B_=[9,13,27,32],Of=Ar&&"CompositionEvent"in window,Us=null;Ar&&"documentMode"in document&&(Us=document.documentMode);var q_=Ar&&"TextEvent"in window&&!Us,Nw=Ar&&(!Of||Us&&8<Us&&11>=Us),bg=String.fromCharCode(32),Sg=!1;function Dw(e,t){switch(e){case"keyup":return B_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bi=!1;function H_(e,t){switch(e){case"compositionend":return Mw(t);case"keypress":return t.which!==32?null:(Sg=!0,bg);case"textInput":return e=t.data,e===bg&&Sg?null:e;default:return null}}function W_(e,t){if(bi)return e==="compositionend"||!Of&&Dw(e,t)?(e=zw(),Qa=Af=Jr=null,bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nw&&t.locale!=="ko"?null:t.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!G_[e.type]:t==="textarea"}function Uw(e,t,r,n){vw(n),t=El(t,"onChange"),0<t.length&&(r=new Rf("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Fs=null,oo=null;function K_(e){Qw(e,0)}function mc(e){var t=_i(e);if(uw(t))return e}function Y_(e,t){if(e==="change")return t}var Fw=!1;if(Ar){var hu;if(Ar){var fu="oninput"in document;if(!fu){var _g=document.createElement("div");_g.setAttribute("oninput","return;"),fu=typeof _g.oninput=="function"}hu=fu}else hu=!1;Fw=hu&&(!document.documentMode||9<document.documentMode)}function Eg(){Fs&&(Fs.detachEvent("onpropertychange",Vw),oo=Fs=null)}function Vw(e){if(e.propertyName==="value"&&mc(oo)){var t=[];Uw(t,oo,e,Ef(e)),bw(K_,t)}}function J_(e,t,r){e==="focusin"?(Eg(),Fs=t,oo=r,Fs.attachEvent("onpropertychange",Vw)):e==="focusout"&&Eg()}function Q_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mc(oo)}function X_(e,t){if(e==="click")return mc(t)}function Z_(e,t){if(e==="input"||e==="change")return mc(t)}function eE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sr=typeof Object.is=="function"?Object.is:eE;function ao(e,t){if(sr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Cd.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function Cg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jg(e,t){var r=Cg(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cg(r)}}function Bw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qw(){for(var e=window,t=yl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=yl(e.document)}return t}function $f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tE(e){var t=qw(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bw(r.ownerDocument.documentElement,r)){if(n!==null&&$f(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=jg(r,s);var o=jg(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rE=Ar&&"documentMode"in document&&11>=document.documentMode,Si=null,Hd=null,Vs=null,Wd=!1;function Tg(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wd||Si==null||Si!==yl(n)||(n=Si,"selectionStart"in n&&$f(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Vs&&ao(Vs,n)||(Vs=n,n=El(Hd,"onSelect"),0<n.length&&(t=new Rf("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Si)))}function la(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ki={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},pu={},Hw={};Ar&&(Hw=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function vc(e){if(pu[e])return pu[e];if(!ki[e])return e;var t=ki[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Hw)return pu[e]=t[r];return e}var Ww=vc("animationend"),Gw=vc("animationiteration"),Kw=vc("animationstart"),Yw=vc("transitionend"),Jw=new Map,Pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){Jw.set(e,t),Xn(t,[e])}for(var gu=0;gu<Pg.length;gu++){var mu=Pg[gu],nE=mu.toLowerCase(),iE=mu[0].toUpperCase()+mu.slice(1);mn(nE,"on"+iE)}mn(Ww,"onAnimationEnd");mn(Gw,"onAnimationIteration");mn(Kw,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Yw,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Ag(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,n_(n,t,void 0,e),e.currentTarget=null}function Qw(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var a=n[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}else for(o=0;o<n.length;o++){if(a=n[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ag(i,a,u),s=l}}}if(xl)throw e=Fd,xl=!1,Fd=null,e}function pe(e,t){var r=t[Qd];r===void 0&&(r=t[Qd]=new Set);var n=e+"__bubble";r.has(n)||(Xw(t,e,2,!1),r.add(n))}function vu(e,t,r){var n=0;t&&(n|=4),Xw(r,e,n,t)}var ca="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[ca]){e[ca]=!0,sw.forEach(function(r){r!=="selectionchange"&&(sE.has(r)||vu(r,!1,e),vu(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ca]||(t[ca]=!0,vu("selectionchange",!1,t))}}function Xw(e,t,r,n){switch(Lw(t)){case 1:var i=w_;break;case 4:i=x_;break;default:i=Pf}r=i.bind(null,t,r,e),i=void 0,!Ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function yu(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$n(a),o===null)return;if(l=o.tag,l===5||l===6){n=s=o;continue e}a=a.parentNode}}n=n.return}bw(function(){var u=s,d=Ef(r),h=[];e:{var f=Jw.get(e);if(f!==void 0){var y=Rf,m=e;switch(e){case"keypress":if(Xa(r)===0)break e;case"keydown":case"keyup":y=L_;break;case"focusin":m="focus",y=du;break;case"focusout":m="blur",y=du;break;case"beforeblur":case"afterblur":y=du;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=D_;break;case Ww:case Gw:case Kw:y=C_;break;case Yw:y=U_;break;case"scroll":y=b_;break;case"wheel":y=V_;break;case"copy":case"cut":case"paste":y=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xg}var x=(t&4)!==0,b=!x&&e==="scroll",v=x?f!==null?f+"Capture":null:f;x=[];for(var g=u,w;g!==null;){w=g;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,v!==null&&(k=ro(g,v),k!=null&&x.push(co(g,k,w)))),b)break;g=g.return}0<x.length&&(f=new y(f,m,null,r,d),h.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&r!==Dd&&(m=r.relatedTarget||r.fromElement)&&($n(m)||m[Rr]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(m=r.relatedTarget||r.toElement,y=u,m=m?$n(m):null,m!==null&&(b=Zn(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(x=yg,k="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=xg,k="onPointerLeave",v="onPointerEnter",g="pointer"),b=y==null?f:_i(y),w=m==null?f:_i(m),f=new x(k,g+"leave",y,r,d),f.target=b,f.relatedTarget=w,k=null,$n(d)===u&&(x=new x(v,g+"enter",m,r,d),x.target=w,x.relatedTarget=b,k=x),b=k,y&&m)t:{for(x=y,v=m,g=0,w=x;w;w=ii(w))g++;for(w=0,k=v;k;k=ii(k))w++;for(;0<g-w;)x=ii(x),g--;for(;0<w-g;)v=ii(v),w--;for(;g--;){if(x===v||v!==null&&x===v.alternate)break t;x=ii(x),v=ii(v)}x=null}else x=null;y!==null&&Rg(h,f,y,x,!1),m!==null&&b!==null&&Rg(h,b,m,x,!0)}}e:{if(f=u?_i(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=Y_;else if(kg(f))if(Fw)C=Z_;else{C=Q_;var S=J_}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=X_);if(C&&(C=C(e,u))){Uw(h,C,r,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Od(f,"number",f.value)}switch(S=u?_i(u):window,e){case"focusin":(kg(S)||S.contentEditable==="true")&&(Si=S,Hd=u,Vs=null);break;case"focusout":Vs=Hd=Si=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,Tg(h,r,d);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":Tg(h,r,d)}var E;if(Of)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else bi?Dw(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(Nw&&r.locale!=="ko"&&(bi||j!=="onCompositionStart"?j==="onCompositionEnd"&&bi&&(E=zw()):(Jr=d,Af="value"in Jr?Jr.value:Jr.textContent,bi=!0)),S=El(u,j),0<S.length&&(j=new wg(j,e,null,r,d),h.push({event:j,listeners:S}),E?j.data=E:(E=Mw(r),E!==null&&(j.data=E)))),(E=q_?H_(e,r):W_(e,r))&&(u=El(u,"onBeforeInput"),0<u.length&&(d=new wg("onBeforeInput","beforeinput",null,r,d),h.push({event:d,listeners:u}),d.data=E))}Qw(h,t)})}function co(e,t,r){return{instance:e,listener:t,currentTarget:r}}function El(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(e,r),s!=null&&n.unshift(co(e,s,i)),s=ro(e,t),s!=null&&n.push(co(e,s,i))),e=e.return}return n}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rg(e,t,r,n,i){for(var s=t._reactName,o=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,i?(l=ro(r,s),l!=null&&o.unshift(co(r,l,a))):i||(l=ro(r,s),l!=null&&o.push(co(r,l,a)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var oE=/\r\n?/g,aE=/\u0000|\uFFFD/g;function Ig(e){return(typeof e=="string"?e:""+e).replace(oE,`
`).replace(aE,"")}function ua(e,t,r){if(t=Ig(t),Ig(e)!==t&&r)throw Error(O(425))}function Cl(){}var Gd=null,Kd=null;function Yd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(uE)}:Jd;function uE(e){setTimeout(function(){throw e})}function wu(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),so(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);so(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $g(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ls=Math.random().toString(36).slice(2),fr="__reactFiber$"+ls,uo="__reactProps$"+ls,Rr="__reactContainer$"+ls,Qd="__reactEvents$"+ls,dE="__reactListeners$"+ls,hE="__reactHandles$"+ls;function $n(e){var t=e[fr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Rr]||r[fr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=$g(e);e!==null;){if(r=e[fr])return r;e=$g(e)}return t}e=r,r=e.parentNode}return null}function Do(e){return e=e[fr]||e[Rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function yc(e){return e[uo]||null}var Xd=[],Ei=-1;function vn(e){return{current:e}}function me(e){0>Ei||(e.current=Xd[Ei],Xd[Ei]=null,Ei--)}function de(e,t){Ei++,Xd[Ei]=e.current,e.current=t}var fn={},tt=vn(fn),ht=vn(!1),Wn=fn;function Hi(e,t){var r=e.type.contextTypes;if(!r)return fn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function jl(){me(ht),me(tt)}function Lg(e,t,r){if(tt.current!==fn)throw Error(O(168));de(tt,t),de(ht,r)}function Zw(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(O(108,Jk(e)||"Unknown",i));return ke({},r,n)}function Tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Wn=tt.current,de(tt,e),de(ht,ht.current),!0}function zg(e,t,r){var n=e.stateNode;if(!n)throw Error(O(169));r?(e=Zw(e,t,Wn),n.__reactInternalMemoizedMergedChildContext=e,me(ht),me(tt),de(tt,e)):me(ht),de(ht,r)}var br=null,wc=!1,xu=!1;function ex(e){br===null?br=[e]:br.push(e)}function fE(e){wc=!0,ex(e)}function yn(){if(!xu&&br!==null){xu=!0;var e=0,t=oe;try{var r=br;for(oe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}br=null,wc=!1}catch(i){throw br!==null&&(br=br.slice(e+1)),Ew(Cf,yn),i}finally{oe=t,xu=!1}}return null}var Ci=[],ji=0,Pl=null,Al=0,Lt=[],zt=0,Gn=null,Sr=1,kr="";function Cn(e,t){Ci[ji++]=Al,Ci[ji++]=Pl,Pl=e,Al=t}function tx(e,t,r){Lt[zt++]=Sr,Lt[zt++]=kr,Lt[zt++]=Gn,Gn=e;var n=Sr;e=kr;var i=32-Zt(n)-1;n&=~(1<<i),r+=1;var s=32-Zt(t)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Sr=1<<32-Zt(t)+i|r<<i|n,kr=s+e}else Sr=1<<s|r<<i|n,kr=e}function Lf(e){e.return!==null&&(Cn(e,1),tx(e,1,0))}function zf(e){for(;e===Pl;)Pl=Ci[--ji],Ci[ji]=null,Al=Ci[--ji],Ci[ji]=null;for(;e===Gn;)Gn=Lt[--zt],Lt[zt]=null,kr=Lt[--zt],Lt[zt]=null,Sr=Lt[--zt],Lt[zt]=null}var Ct=null,Et=null,ye=!1,Xt=null;function rx(e,t){var r=Nt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ng(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,Et=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gn!==null?{id:Sr,overflow:kr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ct=e,Et=null,!0):!1;default:return!1}}function Zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eh(e){if(ye){var t=Et;if(t){var r=t;if(!Ng(e,t)){if(Zd(e))throw Error(O(418));t=rn(r.nextSibling);var n=Ct;t&&Ng(e,t)?rx(n,r):(e.flags=e.flags&-4097|2,ye=!1,Ct=e)}}else{if(Zd(e))throw Error(O(418));e.flags=e.flags&-4097|2,ye=!1,Ct=e}}}function Dg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function da(e){if(e!==Ct)return!1;if(!ye)return Dg(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yd(e.type,e.memoizedProps)),t&&(t=Et)){if(Zd(e))throw nx(),Error(O(418));for(;t;)rx(e,t),t=rn(t.nextSibling)}if(Dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Et=rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Ct?rn(e.stateNode.nextSibling):null;return!0}function nx(){for(var e=Et;e;)e=rn(e.nextSibling)}function Wi(){Et=Ct=null,ye=!1}function Nf(e){Xt===null?Xt=[e]:Xt.push(e)}var pE=Lr.ReactCurrentBatchConfig;function ys(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(O(309));var n=r.stateNode}if(!n)throw Error(O(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(O(284));if(!r._owner)throw Error(O(290,e))}return e}function ha(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mg(e){var t=e._init;return t(e._payload)}function ix(e){function t(v,g){if(e){var w=v.deletions;w===null?(v.deletions=[g],v.flags|=16):w.push(g)}}function r(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=an(v,g),v.index=0,v.sibling=null,v}function s(v,g,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<g?(v.flags|=2,g):w):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,g,w,k){return g===null||g.tag!==6?(g=ju(w,v.mode,k),g.return=v,g):(g=i(g,w),g.return=v,g)}function l(v,g,w,k){var C=w.type;return C===xi?d(v,g,w.props.children,k,w.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vr&&Mg(C)===g.type)?(k=i(g,w.props),k.ref=ys(v,g,w),k.return=v,k):(k=sl(w.type,w.key,w.props,null,v.mode,k),k.ref=ys(v,g,w),k.return=v,k)}function u(v,g,w,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Tu(w,v.mode,k),g.return=v,g):(g=i(g,w.children||[]),g.return=v,g)}function d(v,g,w,k,C){return g===null||g.tag!==7?(g=Bn(w,v.mode,k,C),g.return=v,g):(g=i(g,w),g.return=v,g)}function h(v,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ju(""+g,v.mode,w),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ta:return w=sl(g.type,g.key,g.props,null,v.mode,w),w.ref=ys(v,null,g),w.return=v,w;case wi:return g=Tu(g,v.mode,w),g.return=v,g;case Vr:var k=g._init;return h(v,k(g._payload),w)}if(Rs(g)||fs(g))return g=Bn(g,v.mode,w,null),g.return=v,g;ha(v,g)}return null}function f(v,g,w,k){var C=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return C!==null?null:a(v,g,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ta:return w.key===C?l(v,g,w,k):null;case wi:return w.key===C?u(v,g,w,k):null;case Vr:return C=w._init,f(v,g,C(w._payload),k)}if(Rs(w)||fs(w))return C!==null?null:d(v,g,w,k,null);ha(v,w)}return null}function y(v,g,w,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(w)||null,a(g,v,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ta:return v=v.get(k.key===null?w:k.key)||null,l(g,v,k,C);case wi:return v=v.get(k.key===null?w:k.key)||null,u(g,v,k,C);case Vr:var S=k._init;return y(v,g,w,S(k._payload),C)}if(Rs(k)||fs(k))return v=v.get(w)||null,d(g,v,k,C,null);ha(g,k)}return null}function m(v,g,w,k){for(var C=null,S=null,E=g,j=g=0,R=null;E!==null&&j<w.length;j++){E.index>j?(R=E,E=null):R=E.sibling;var P=f(v,E,w[j],k);if(P===null){E===null&&(E=R);break}e&&E&&P.alternate===null&&t(v,E),g=s(P,g,j),S===null?C=P:S.sibling=P,S=P,E=R}if(j===w.length)return r(v,E),ye&&Cn(v,j),C;if(E===null){for(;j<w.length;j++)E=h(v,w[j],k),E!==null&&(g=s(E,g,j),S===null?C=E:S.sibling=E,S=E);return ye&&Cn(v,j),C}for(E=n(v,E);j<w.length;j++)R=y(E,v,j,w[j],k),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?j:R.key),g=s(R,g,j),S===null?C=R:S.sibling=R,S=R);return e&&E.forEach(function(L){return t(v,L)}),ye&&Cn(v,j),C}function x(v,g,w,k){var C=fs(w);if(typeof C!="function")throw Error(O(150));if(w=C.call(w),w==null)throw Error(O(151));for(var S=C=null,E=g,j=g=0,R=null,P=w.next();E!==null&&!P.done;j++,P=w.next()){E.index>j?(R=E,E=null):R=E.sibling;var L=f(v,E,P.value,k);if(L===null){E===null&&(E=R);break}e&&E&&L.alternate===null&&t(v,E),g=s(L,g,j),S===null?C=L:S.sibling=L,S=L,E=R}if(P.done)return r(v,E),ye&&Cn(v,j),C;if(E===null){for(;!P.done;j++,P=w.next())P=h(v,P.value,k),P!==null&&(g=s(P,g,j),S===null?C=P:S.sibling=P,S=P);return ye&&Cn(v,j),C}for(E=n(v,E);!P.done;j++,P=w.next())P=y(E,v,j,P.value,k),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?j:P.key),g=s(P,g,j),S===null?C=P:S.sibling=P,S=P);return e&&E.forEach(function(W){return t(v,W)}),ye&&Cn(v,j),C}function b(v,g,w,k){if(typeof w=="object"&&w!==null&&w.type===xi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ta:e:{for(var C=w.key,S=g;S!==null;){if(S.key===C){if(C=w.type,C===xi){if(S.tag===7){r(v,S.sibling),g=i(S,w.props.children),g.return=v,v=g;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vr&&Mg(C)===S.type){r(v,S.sibling),g=i(S,w.props),g.ref=ys(v,S,w),g.return=v,v=g;break e}r(v,S);break}else t(v,S);S=S.sibling}w.type===xi?(g=Bn(w.props.children,v.mode,k,w.key),g.return=v,v=g):(k=sl(w.type,w.key,w.props,null,v.mode,k),k.ref=ys(v,g,w),k.return=v,v=k)}return o(v);case wi:e:{for(S=w.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){r(v,g.sibling),g=i(g,w.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else t(v,g);g=g.sibling}g=Tu(w,v.mode,k),g.return=v,v=g}return o(v);case Vr:return S=w._init,b(v,g,S(w._payload),k)}if(Rs(w))return m(v,g,w,k);if(fs(w))return x(v,g,w,k);ha(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,w),g.return=v,v=g):(r(v,g),g=ju(w,v.mode,k),g.return=v,v=g),o(v)):r(v,g)}return b}var Gi=ix(!0),sx=ix(!1),Rl=vn(null),Il=null,Ti=null,Df=null;function Mf(){Df=Ti=Il=null}function Uf(e){var t=Rl.current;me(Rl),e._currentValue=t}function th(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Fi(e,t){Il=e,Df=Ti=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Df!==e)if(e={context:e,memoizedValue:t,next:null},Ti===null){if(Il===null)throw Error(O(308));Ti=e,Il.dependencies={lanes:0,firstContext:e}}else Ti=Ti.next=e;return t}var Ln=null;function Ff(e){Ln===null?Ln=[e]:Ln.push(e)}function ox(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ff(t)):(r.next=i.next,i.next=r),t.interleaved=r,Ir(e,n)}function Ir(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Br=!1;function Vf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ne&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Ir(e,r)}return i=n.interleaved,i===null?(t.next=t,Ff(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ir(e,r)}function Za(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,jf(e,r)}}function Ug(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ol(e,t,r,n){var i=e.updateQueue;Br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((n&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,x=a;switch(f=t,y=r,x.tag){case 1:if(m=x.payload,typeof m=="function"){h=m.call(y,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,f=typeof m=="function"?m.call(y,h,f):m,f==null)break e;h=ke({},h,f);break e;case 2:Br=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=h):d=d.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Yn|=o,e.lanes=o,e.memoizedState=h}}function Fg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(O(191,i));i.call(n)}}}var Mo={},gr=vn(Mo),ho=vn(Mo),fo=vn(Mo);function zn(e){if(e===Mo)throw Error(O(174));return e}function Bf(e,t){switch(de(fo,t),de(ho,e),de(gr,Mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ld(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ld(t,e)}me(gr),de(gr,t)}function Ki(){me(gr),me(ho),me(fo)}function lx(e){zn(fo.current);var t=zn(gr.current),r=Ld(t,e.type);t!==r&&(de(ho,e),de(gr,r))}function qf(e){ho.current===e&&(me(gr),me(ho))}var xe=vn(0);function $l(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bu=[];function Hf(){for(var e=0;e<bu.length;e++)bu[e]._workInProgressVersionPrimary=null;bu.length=0}var el=Lr.ReactCurrentDispatcher,Su=Lr.ReactCurrentBatchConfig,Kn=0,Se=null,Me=null,Fe=null,Ll=!1,Bs=!1,po=0,gE=0;function Ye(){throw Error(O(321))}function Wf(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!sr(e[r],t[r]))return!1;return!0}function Gf(e,t,r,n,i,s){if(Kn=s,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,el.current=e===null||e.memoizedState===null?wE:xE,e=r(n,i),Bs){s=0;do{if(Bs=!1,po=0,25<=s)throw Error(O(301));s+=1,Fe=Me=null,t.updateQueue=null,el.current=bE,e=r(n,i)}while(Bs)}if(el.current=zl,t=Me!==null&&Me.next!==null,Kn=0,Fe=Me=Se=null,Ll=!1,t)throw Error(O(300));return e}function Kf(){var e=po!==0;return po=0,e}function dr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ut(){if(Me===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Fe===null?Se.memoizedState:Fe.next;if(t!==null)Fe=t,Me=e;else{if(e===null)throw Error(O(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?Se.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function go(e,t){return typeof t=="function"?t(e):t}function ku(e){var t=Ut(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var n=Me,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Kn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=n):l=l.next=h,Se.lanes|=d,Yn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=n:l.next=a,sr(n,t.memoizedState)||(ut=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Se.lanes|=s,Yn|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _u(e){var t=Ut(),r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);sr(s,t.memoizedState)||(ut=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function cx(){}function ux(e,t){var r=Se,n=Ut(),i=t(),s=!sr(n.memoizedState,i);if(s&&(n.memoizedState=i,ut=!0),n=n.queue,Yf(fx.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Fe!==null&&Fe.memoizedState.tag&1){if(r.flags|=2048,mo(9,hx.bind(null,r,n,i,t),void 0,null),Be===null)throw Error(O(349));Kn&30||dx(r,t,i)}return i}function dx(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hx(e,t,r,n){t.value=r,t.getSnapshot=n,px(t)&&gx(e)}function fx(e,t,r){return r(function(){px(t)&&gx(e)})}function px(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!sr(e,r)}catch{return!0}}function gx(e){var t=Ir(e,1);t!==null&&er(t,e,1,-1)}function Vg(e){var t=dr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=yE.bind(null,Se,e),[t.memoizedState,e]}function mo(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function mx(){return Ut().memoizedState}function tl(e,t,r,n){var i=dr();Se.flags|=e,i.memoizedState=mo(1|t,r,void 0,n===void 0?null:n)}function xc(e,t,r,n){var i=Ut();n=n===void 0?null:n;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,n!==null&&Wf(n,o.deps)){i.memoizedState=mo(t,r,s,n);return}}Se.flags|=e,i.memoizedState=mo(1|t,r,s,n)}function Bg(e,t){return tl(8390656,8,e,t)}function Yf(e,t){return xc(2048,8,e,t)}function vx(e,t){return xc(4,2,e,t)}function yx(e,t){return xc(4,4,e,t)}function wx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xx(e,t,r){return r=r!=null?r.concat([e]):null,xc(4,4,wx.bind(null,t,e),r)}function Jf(){}function bx(e,t){var r=Ut();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wf(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Sx(e,t){var r=Ut();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wf(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function kx(e,t,r){return Kn&21?(sr(r,t)||(r=Tw(),Se.lanes|=r,Yn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=r)}function mE(e,t){var r=oe;oe=r!==0&&4>r?r:4,e(!0);var n=Su.transition;Su.transition={};try{e(!1),t()}finally{oe=r,Su.transition=n}}function _x(){return Ut().memoizedState}function vE(e,t,r){var n=on(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ex(e))Cx(t,r);else if(r=ox(e,t,r,n),r!==null){var i=st();er(r,e,n,i),jx(r,t,n)}}function yE(e,t,r){var n=on(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ex(e))Cx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,r);if(i.hasEagerState=!0,i.eagerState=a,sr(a,o)){var l=t.interleaved;l===null?(i.next=i,Ff(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}r=ox(e,t,i,n),r!==null&&(i=st(),er(r,e,n,i),jx(r,t,n))}}function Ex(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Cx(e,t){Bs=Ll=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function jx(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,jf(e,r)}}var zl={readContext:Mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},wE={readContext:Mt,useCallback:function(e,t){return dr().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Bg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,tl(4194308,4,wx.bind(null,t,e),r)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var r=dr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=dr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=vE.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=dr();return e={current:e},t.memoizedState=e},useState:Vg,useDebugValue:Jf,useDeferredValue:function(e){return dr().memoizedState=e},useTransition:function(){var e=Vg(!1),t=e[0];return e=mE.bind(null,e[1]),dr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Se,i=dr();if(ye){if(r===void 0)throw Error(O(407));r=r()}else{if(r=t(),Be===null)throw Error(O(349));Kn&30||dx(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Bg(fx.bind(null,n,s,e),[e]),n.flags|=2048,mo(9,hx.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=dr(),t=Be.identifierPrefix;if(ye){var r=kr,n=Sr;r=(n&~(1<<32-Zt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=po++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=gE++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xE={readContext:Mt,useCallback:bx,useContext:Mt,useEffect:Yf,useImperativeHandle:xx,useInsertionEffect:vx,useLayoutEffect:yx,useMemo:Sx,useReducer:ku,useRef:mx,useState:function(){return ku(go)},useDebugValue:Jf,useDeferredValue:function(e){var t=Ut();return kx(t,Me.memoizedState,e)},useTransition:function(){var e=ku(go)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:cx,useSyncExternalStore:ux,useId:_x,unstable_isNewReconciler:!1},bE={readContext:Mt,useCallback:bx,useContext:Mt,useEffect:Yf,useImperativeHandle:xx,useInsertionEffect:vx,useLayoutEffect:yx,useMemo:Sx,useReducer:_u,useRef:mx,useState:function(){return _u(go)},useDebugValue:Jf,useDeferredValue:function(e){var t=Ut();return Me===null?t.memoizedState=e:kx(t,Me.memoizedState,e)},useTransition:function(){var e=_u(go)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:cx,useSyncExternalStore:ux,useId:_x,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function rh(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ke({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var bc={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=st(),i=on(e),s=Cr(n,i);s.payload=t,r!=null&&(s.callback=r),t=nn(e,s,i),t!==null&&(er(t,e,i,n),Za(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=st(),i=on(e),s=Cr(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=nn(e,s,i),t!==null&&(er(t,e,i,n),Za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=st(),n=on(e),i=Cr(r,n);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,n),t!==null&&(er(t,e,n,r),Za(t,e,n))}};function qg(e,t,r,n,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!ao(r,n)||!ao(i,s):!0}function Tx(e,t,r){var n=!1,i=fn,s=t.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=ft(t)?Wn:tt.current,n=t.contextTypes,s=(n=n!=null)?Hi(e,i):fn),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Hg(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function nh(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Vf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=ft(t)?Wn:tt.current,i.context=Hi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(rh(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bc.enqueueReplaceState(i,i.state,null),Ol(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yi(e,t){try{var r="",n=t;do r+=Yk(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Eu(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ih(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function Px(e,t,r){r=Cr(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Dl||(Dl=!0,ph=n),ih(e,t)},r}function Ax(e,t,r){r=Cr(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ih(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ih(e,t),typeof n!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Wg(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new SE;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=zE.bind(null,e,t,r),t.then(e,e))}function Gg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kg(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Cr(-1,1),t.tag=2,nn(r,t,1))),r.lanes|=1),e)}var kE=Lr.ReactCurrentOwner,ut=!1;function it(e,t,r,n){t.child=e===null?sx(t,null,r,n):Gi(t,e.child,r,n)}function Yg(e,t,r,n,i){r=r.render;var s=t.ref;return Fi(t,i),n=Gf(e,t,r,n,s,i),r=Kf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(ye&&r&&Lf(t),t.flags|=1,it(e,t,n,i),t.child)}function Jg(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!ip(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Rx(e,t,s,n,i)):(e=sl(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:ao,r(o,n)&&e.ref===t.ref)return Or(e,t,i)}return t.flags|=1,e=an(s,n),e.ref=t.ref,e.return=t,t.child=e}function Rx(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(ao(s,n)&&e.ref===t.ref)if(ut=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,Or(e,t,i)}return sh(e,t,r,n,i)}function Ix(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ai,St),St|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Ai,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,de(Ai,St),St|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,de(Ai,St),St|=n;return it(e,t,i,r),t.child}function Ox(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sh(e,t,r,n,i){var s=ft(r)?Wn:tt.current;return s=Hi(t,s),Fi(t,i),r=Gf(e,t,r,n,s,i),n=Kf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Or(e,t,i)):(ye&&n&&Lf(t),t.flags|=1,it(e,t,r,i),t.child)}function Qg(e,t,r,n,i){if(ft(r)){var s=!0;Tl(t)}else s=!1;if(Fi(t,i),t.stateNode===null)rl(e,t),Tx(t,r,n),nh(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ft(r)?Wn:tt.current,u=Hi(t,u));var d=r.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||l!==u)&&Hg(t,o,n,u),Br=!1;var f=t.memoizedState;o.state=f,Ol(t,n,o,i),l=t.memoizedState,a!==n||f!==l||ht.current||Br?(typeof d=="function"&&(rh(t,r,d,n),l=t.memoizedState),(a=Br||qg(t,r,a,n,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),o.props=n,o.state=l,o.context=u,n=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ax(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Gt(t.type,a),o.props=u,h=t.pendingProps,f=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ft(r)?Wn:tt.current,l=Hi(t,l));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Hg(t,o,n,l),Br=!1,f=t.memoizedState,o.state=f,Ol(t,n,o,i);var m=t.memoizedState;a!==h||f!==m||ht.current||Br?(typeof y=="function"&&(rh(t,r,y,n),m=t.memoizedState),(u=Br||qg(t,r,u,n,f,m,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),o.props=n,o.state=m,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return oh(e,t,r,n,s,i)}function oh(e,t,r,n,i,s){Ox(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&zg(t,r,!1),Or(e,t,s);n=t.stateNode,kE.current=t;var a=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Gi(t,e.child,null,s),t.child=Gi(t,null,a,s)):it(e,t,a,s),t.memoizedState=n.state,i&&zg(t,r,!0),t.child}function $x(e){var t=e.stateNode;t.pendingContext?Lg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lg(e,t.context,!1),Bf(e,t.containerInfo)}function Xg(e,t,r,n,i){return Wi(),Nf(i),t.flags|=256,it(e,t,r,n),t.child}var ah={dehydrated:null,treeContext:null,retryLane:0};function lh(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lx(e,t,r){var n=t.pendingProps,i=xe.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(xe,i&1),e===null)return eh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,n,0,null),e=Bn(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=lh(r),t.memoizedState=ah,e):Qf(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _E(e,t,o,n,a,i,r);if(s){s=n.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=an(i,l),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=an(a,s):(s=Bn(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?lh(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=ah,n}return s=e.child,e=s.sibling,n=an(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Qf(e,t){return t=_c({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,r,n){return n!==null&&Nf(n),Gi(t,e.child,null,r),e=Qf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _E(e,t,r,n,i,s,o){if(r)return t.flags&256?(t.flags&=-257,n=Eu(Error(O(422))),fa(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=_c({mode:"visible",children:n.children},i,0,null),s=Bn(s,i,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Gi(t,e.child,null,o),t.child.memoizedState=lh(o),t.memoizedState=ah,s);if(!(t.mode&1))return fa(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,s=Error(O(419)),n=Eu(s,n,void 0),fa(e,t,o,n)}if(a=(o&e.childLanes)!==0,ut||a){if(n=Be,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ir(e,i),er(n,e,i,-1))}return np(),n=Eu(Error(O(421))),fa(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=NE.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Et=rn(i.nextSibling),Ct=t,ye=!0,Xt=null,e!==null&&(Lt[zt++]=Sr,Lt[zt++]=kr,Lt[zt++]=Gn,Sr=e.id,kr=e.overflow,Gn=t),t=Qf(t,n.children),t.flags|=4096,t)}function Zg(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),th(e.return,t,r)}function Cu(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function zx(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(it(e,t,n.children,r),n=xe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zg(e,r,t);else if(e.tag===19)Zg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(de(xe,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&$l(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Cu(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$l(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Cu(t,!0,r,null,s);break;case"together":Cu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,r=an(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=an(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function EE(e,t,r){switch(t.tag){case 3:$x(t),Wi();break;case 5:lx(t);break;case 1:ft(t.type)&&Tl(t);break;case 4:Bf(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;de(Rl,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(de(xe,xe.current&1),t.flags|=128,null):r&t.child.childLanes?Lx(e,t,r):(de(xe,xe.current&1),e=Or(e,t,r),e!==null?e.sibling:null);de(xe,xe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return zx(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(xe,xe.current),n)break;return null;case 22:case 23:return t.lanes=0,Ix(e,t,r)}return Or(e,t,r)}var Nx,ch,Dx,Mx;Nx=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ch=function(){};Dx=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,zn(gr.current);var s=null;switch(r){case"input":i=Rd(e,i),n=Rd(e,n),s=[];break;case"select":i=ke({},i,{value:void 0}),n=ke({},n,{value:void 0}),s=[];break;case"textarea":i=$d(e,i),n=$d(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Cl)}zd(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var l=n[u];if(a=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(s||(s=[]),s.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Mx=function(e,t,r,n){r!==n&&(t.flags|=4)};function ws(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function CE(e,t,r){var n=t.pendingProps;switch(zf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ft(t.type)&&jl(),Je(t),null;case 3:return n=t.stateNode,Ki(),me(ht),me(tt),Hf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xt!==null&&(vh(Xt),Xt=null))),ch(e,t),Je(t),null;case 5:qf(t);var i=zn(fo.current);if(r=t.type,e!==null&&t.stateNode!=null)Dx(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(O(166));return Je(t),null}if(e=zn(gr.current),da(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[fr]=t,n[uo]=s,e=(t.mode&1)!==0,r){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(i=0;i<Os.length;i++)pe(Os[i],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":lg(n,s),pe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},pe("invalid",n);break;case"textarea":ug(n,s),pe("invalid",n)}zd(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?n.textContent!==a&&(s.suppressHydrationWarning!==!0&&ua(n.textContent,a,e),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ua(n.textContent,a,e),i=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pe("scroll",n)}switch(r){case"input":ra(n),cg(n,s,!0);break;case"textarea":ra(n),dg(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Cl)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fw(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[fr]=t,e[uo]=n,Nx(e,t,!1,!1),t.stateNode=e;e:{switch(o=Nd(r,n),r){case"dialog":pe("cancel",e),pe("close",e),i=n;break;case"iframe":case"object":case"embed":pe("load",e),i=n;break;case"video":case"audio":for(i=0;i<Os.length;i++)pe(Os[i],e);i=n;break;case"source":pe("error",e),i=n;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=n;break;case"details":pe("toggle",e),i=n;break;case"input":lg(e,n),i=Rd(e,n),pe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ke({},n,{value:void 0}),pe("invalid",e);break;case"textarea":ug(e,n),i=$d(e,n),pe("invalid",e);break;default:i=n}zd(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mw(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pw(e,l)):s==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&to(e,l):typeof l=="number"&&to(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",e):l!=null&&bf(e,s,l,o))}switch(r){case"input":ra(e),cg(e,n,!1);break;case"textarea":ra(e),dg(e);break;case"option":n.value!=null&&e.setAttribute("value",""+hn(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ni(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ni(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cl)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Mx(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(O(166));if(r=zn(fo.current),zn(gr.current),da(t)){if(n=t.stateNode,r=t.memoizedProps,n[fr]=t,(s=n.nodeValue!==r)&&(e=Ct,e!==null))switch(e.tag){case 3:ua(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[fr]=t,t.stateNode=n}return Je(t),null;case 13:if(me(xe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&Et!==null&&t.mode&1&&!(t.flags&128))nx(),Wi(),t.flags|=98560,s=!1;else if(s=da(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(O(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[fr]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),s=!1}else Xt!==null&&(vh(Xt),Xt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Ue===0&&(Ue=3):np())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return Ki(),ch(e,t),e===null&&lo(t.stateNode.containerInfo),Je(t),null;case 10:return Uf(t.type._context),Je(t),null;case 17:return ft(t.type)&&jl(),Je(t),null;case 19:if(me(xe),s=t.memoizedState,s===null)return Je(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)ws(s,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=$l(e),o!==null){for(t.flags|=128,ws(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(xe,xe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Te()>Ji&&(t.flags|=128,n=!0,ws(s,!1),t.lanes=4194304)}else{if(!n)if(e=$l(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Je(t),null}else 2*Te()-s.renderingStartTime>Ji&&r!==1073741824&&(t.flags|=128,n=!0,ws(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Te(),t.sibling=null,r=xe.current,de(xe,n?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return rp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?St&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function jE(e,t){switch(zf(t),t.tag){case 1:return ft(t.type)&&jl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(),me(ht),me(tt),Hf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qf(t),null;case 13:if(me(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(xe),null;case 4:return Ki(),null;case 10:return Uf(t.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var pa=!1,Ze=!1,TE=typeof WeakSet=="function"?WeakSet:Set,z=null;function Pi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ee(e,t,n)}else r.current=null}function uh(e,t,r){try{r()}catch(n){Ee(e,t,n)}}var em=!1;function PE(e,t){if(Gd=kl,e=qw(),$f(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var y;h!==r||i!==0&&h.nodeType!==3||(a=o+i),h!==s||n!==0&&h.nodeType!==3||(l=o+n),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===e)break t;if(f===r&&++u===i&&(a=o),f===s&&++d===n&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Kd={focusedElem:e,selectionRange:r},kl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,b=m.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:Gt(t.type,x),b);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){Ee(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return m=em,em=!1,m}function qs(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&uh(t,r,s)}i=i.next}while(i!==n)}}function Sc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function dh(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ux(e){var t=e.alternate;t!==null&&(e.alternate=null,Ux(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fr],delete t[uo],delete t[Qd],delete t[dE],delete t[hE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fx(e){return e.tag===5||e.tag===3||e.tag===4}function tm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hh(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Cl));else if(n!==4&&(e=e.child,e!==null))for(hh(e,t,r),e=e.sibling;e!==null;)hh(e,t,r),e=e.sibling}function fh(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(fh(e,t,r),e=e.sibling;e!==null;)fh(e,t,r),e=e.sibling}var We=null,Jt=!1;function Nr(e,t,r){for(r=r.child;r!==null;)Vx(e,t,r),r=r.sibling}function Vx(e,t,r){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(pc,r)}catch{}switch(r.tag){case 5:Ze||Pi(r,t);case 6:var n=We,i=Jt;We=null,Nr(e,t,r),We=n,Jt=i,We!==null&&(Jt?(e=We,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):We.removeChild(r.stateNode));break;case 18:We!==null&&(Jt?(e=We,r=r.stateNode,e.nodeType===8?wu(e.parentNode,r):e.nodeType===1&&wu(e,r),so(e)):wu(We,r.stateNode));break;case 4:n=We,i=Jt,We=r.stateNode.containerInfo,Jt=!0,Nr(e,t,r),We=n,Jt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(r,t,o),i=i.next}while(i!==n)}Nr(e,t,r);break;case 1:if(!Ze&&(Pi(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){Ee(r,t,a)}Nr(e,t,r);break;case 21:Nr(e,t,r);break;case 22:r.mode&1?(Ze=(n=Ze)||r.memoizedState!==null,Nr(e,t,r),Ze=n):Nr(e,t,r);break;default:Nr(e,t,r)}}function rm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new TE),t.forEach(function(n){var i=DE.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function qt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Jt=!1;break e;case 3:We=a.stateNode.containerInfo,Jt=!0;break e;case 4:We=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(We===null)throw Error(O(160));Vx(s,o,i),We=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bx(t,e),t=t.sibling}function Bx(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),lr(e),n&4){try{qs(3,e,e.return),Sc(3,e)}catch(x){Ee(e,e.return,x)}try{qs(5,e,e.return)}catch(x){Ee(e,e.return,x)}}break;case 1:qt(t,e),lr(e),n&512&&r!==null&&Pi(r,r.return);break;case 5:if(qt(t,e),lr(e),n&512&&r!==null&&Pi(r,r.return),e.flags&32){var i=e.stateNode;try{to(i,"")}catch(x){Ee(e,e.return,x)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dw(i,s),Nd(a,o);var u=Nd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?mw(i,h):d==="dangerouslySetInnerHTML"?pw(i,h):d==="children"?to(i,h):bf(i,d,h,u)}switch(a){case"input":Id(i,s);break;case"textarea":hw(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ni(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[uo]=s}catch(x){Ee(e,e.return,x)}}break;case 6:if(qt(t,e),lr(e),n&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){Ee(e,e.return,x)}}break;case 3:if(qt(t,e),lr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(x){Ee(e,e.return,x)}break;case 4:qt(t,e),lr(e);break;case 13:qt(t,e),lr(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ep=Te())),n&4&&rm(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||d,qt(t,e),Ze=u):qt(t,e),lr(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(h=z=d;z!==null;){switch(f=z,y=f.child,f.tag){case 0:case 11:case 14:case 15:qs(4,f,f.return);break;case 1:Pi(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(x){Ee(n,r,x)}}break;case 5:Pi(f,f.return);break;case 22:if(f.memoizedState!==null){im(h);continue}}y!==null?(y.return=f,z=y):im(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gw("display",o))}catch(x){Ee(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Ee(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qt(t,e),lr(e),n&4&&rm(e);break;case 21:break;default:qt(t,e),lr(e)}}function lr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fx(r)){var n=r;break e}r=r.return}throw Error(O(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(to(i,""),n.flags&=-33);var s=tm(e);fh(e,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,a=tm(e);hh(e,a,o);break;default:throw Error(O(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function AE(e,t,r){z=e,qx(e)}function qx(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||pa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=pa;var u=Ze;if(pa=o,(Ze=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?sm(i):l!==null?(l.return=o,z=l):sm(i);for(;s!==null;)z=s,qx(s),s=s.sibling;z=i,pa=a,Ze=u}nm(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):nm(e)}}function nm(e){for(;z!==null;){var t=z;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||Sc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ze)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Gt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fg(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Fg(t,o,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&so(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ze||t.flags&512&&dh(t)}catch(f){Ee(t,t.return,f)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function im(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function sm(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Sc(4,t)}catch(l){Ee(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){Ee(t,i,l)}}var s=t.return;try{dh(t)}catch(l){Ee(t,s,l)}break;case 5:var o=t.return;try{dh(t)}catch(l){Ee(t,o,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var RE=Math.ceil,Nl=Lr.ReactCurrentDispatcher,Xf=Lr.ReactCurrentOwner,Dt=Lr.ReactCurrentBatchConfig,ne=0,Be=null,Le=null,Ge=0,St=0,Ai=vn(0),Ue=0,vo=null,Yn=0,kc=0,Zf=0,Hs=null,ct=null,ep=0,Ji=1/0,yr=null,Dl=!1,ph=null,sn=null,ga=!1,Qr=null,Ml=0,Ws=0,gh=null,nl=-1,il=0;function st(){return ne&6?Te():nl!==-1?nl:nl=Te()}function on(e){return e.mode&1?ne&2&&Ge!==0?Ge&-Ge:pE.transition!==null?(il===0&&(il=Tw()),il):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Lw(e.type)),e):1}function er(e,t,r,n){if(50<Ws)throw Ws=0,gh=null,Error(O(185));zo(e,r,n),(!(ne&2)||e!==Be)&&(e===Be&&(!(ne&2)&&(kc|=r),Ue===4&&Gr(e,Ge)),pt(e,n),r===1&&ne===0&&!(t.mode&1)&&(Ji=Te()+500,wc&&yn()))}function pt(e,t){var r=e.callbackNode;p_(e,t);var n=Sl(e,e===Be?Ge:0);if(n===0)r!==null&&pg(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&pg(r),t===1)e.tag===0?fE(om.bind(null,e)):ex(om.bind(null,e)),cE(function(){!(ne&6)&&yn()}),r=null;else{switch(Pw(n)){case 1:r=Cf;break;case 4:r=Cw;break;case 16:r=bl;break;case 536870912:r=jw;break;default:r=bl}r=Xx(r,Hx.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hx(e,t){if(nl=-1,il=0,ne&6)throw Error(O(327));var r=e.callbackNode;if(Vi()&&e.callbackNode!==r)return null;var n=Sl(e,e===Be?Ge:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ul(e,n);else{t=n;var i=ne;ne|=2;var s=Gx();(Be!==e||Ge!==t)&&(yr=null,Ji=Te()+500,Vn(e,t));do try{$E();break}catch(a){Wx(e,a)}while(1);Mf(),Nl.current=s,ne=i,Le!==null?t=0:(Be=null,Ge=0,t=Ue)}if(t!==0){if(t===2&&(i=Vd(e),i!==0&&(n=i,t=mh(e,i))),t===1)throw r=vo,Vn(e,0),Gr(e,n),pt(e,Te()),r;if(t===6)Gr(e,n);else{if(i=e.current.alternate,!(n&30)&&!IE(i)&&(t=Ul(e,n),t===2&&(s=Vd(e),s!==0&&(n=s,t=mh(e,s))),t===1))throw r=vo,Vn(e,0),Gr(e,n),pt(e,Te()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(O(345));case 2:jn(e,ct,yr);break;case 3:if(Gr(e,n),(n&130023424)===n&&(t=ep+500-Te(),10<t)){if(Sl(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jd(jn.bind(null,e,ct,yr),t);break}jn(e,ct,yr);break;case 4:if(Gr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Zt(n);s=1<<o,o=t[o],o>i&&(i=o),n&=~s}if(n=i,n=Te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*RE(n/1960))-n,10<n){e.timeoutHandle=Jd(jn.bind(null,e,ct,yr),n);break}jn(e,ct,yr);break;case 5:jn(e,ct,yr);break;default:throw Error(O(329))}}}return pt(e,Te()),e.callbackNode===r?Hx.bind(null,e):null}function mh(e,t){var r=Hs;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Ul(e,t),e!==2&&(t=ct,ct=r,t!==null&&vh(t)),e}function vh(e){ct===null?ct=e:ct.push.apply(ct,e)}function IE(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!sr(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gr(e,t){for(t&=~Zf,t&=~kc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Zt(t),n=1<<r;e[r]=-1,t&=~n}}function om(e){if(ne&6)throw Error(O(327));Vi();var t=Sl(e,0);if(!(t&1))return pt(e,Te()),null;var r=Ul(e,t);if(e.tag!==0&&r===2){var n=Vd(e);n!==0&&(t=n,r=mh(e,n))}if(r===1)throw r=vo,Vn(e,0),Gr(e,t),pt(e,Te()),r;if(r===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,ct,yr),pt(e,Te()),null}function tp(e,t){var r=ne;ne|=1;try{return e(t)}finally{ne=r,ne===0&&(Ji=Te()+500,wc&&yn())}}function Jn(e){Qr!==null&&Qr.tag===0&&!(ne&6)&&Vi();var t=ne;ne|=1;var r=Dt.transition,n=oe;try{if(Dt.transition=null,oe=1,e)return e()}finally{oe=n,Dt.transition=r,ne=t,!(ne&6)&&yn()}}function rp(){St=Ai.current,me(Ai)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lE(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(zf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&jl();break;case 3:Ki(),me(ht),me(tt),Hf();break;case 5:qf(n);break;case 4:Ki();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Uf(n.type._context);break;case 22:case 23:rp()}r=r.return}if(Be=e,Le=e=an(e.current,null),Ge=St=t,Ue=0,vo=null,Zf=kc=Yn=0,ct=Hs=null,Ln!==null){for(t=0;t<Ln.length;t++)if(r=Ln[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}Ln=null}return e}function Wx(e,t){do{var r=Le;try{if(Mf(),el.current=zl,Ll){for(var n=Se.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ll=!1}if(Kn=0,Fe=Me=Se=null,Bs=!1,po=0,Xf.current=null,r===null||r.return===null){Ue=1,vo=t,Le=null;break}e:{var s=e,o=r.return,a=r,l=t;if(t=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Gg(o);if(y!==null){y.flags&=-257,Kg(y,o,a,s,t),y.mode&1&&Wg(s,u,t),t=y,l=u;var m=t.updateQueue;if(m===null){var x=new Set;x.add(l),t.updateQueue=x}else m.add(l);break e}else{if(!(t&1)){Wg(s,u,t),np();break e}l=Error(O(426))}}else if(ye&&a.mode&1){var b=Gg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Kg(b,o,a,s,t),Nf(Yi(l,a));break e}}s=l=Yi(l,a),Ue!==4&&(Ue=2),Hs===null?Hs=[s]:Hs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Px(s,l,t);Ug(s,v);break e;case 1:a=l;var g=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(sn===null||!sn.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Ax(s,a,t);Ug(s,k);break e}}s=s.return}while(s!==null)}Yx(r)}catch(C){t=C,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(1)}function Gx(){var e=Nl.current;return Nl.current=zl,e===null?zl:e}function np(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Be===null||!(Yn&268435455)&&!(kc&268435455)||Gr(Be,Ge)}function Ul(e,t){var r=ne;ne|=2;var n=Gx();(Be!==e||Ge!==t)&&(yr=null,Vn(e,t));do try{OE();break}catch(i){Wx(e,i)}while(1);if(Mf(),ne=r,Nl.current=n,Le!==null)throw Error(O(261));return Be=null,Ge=0,Ue}function OE(){for(;Le!==null;)Kx(Le)}function $E(){for(;Le!==null&&!s_();)Kx(Le)}function Kx(e){var t=Qx(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Yx(e):Le=t,Xf.current=null}function Yx(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=jE(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Le=null;return}}else if(r=CE(r,t,St),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ue===0&&(Ue=5)}function jn(e,t,r){var n=oe,i=Dt.transition;try{Dt.transition=null,oe=1,LE(e,t,r,n)}finally{Dt.transition=i,oe=n}return null}function LE(e,t,r,n){do Vi();while(Qr!==null);if(ne&6)throw Error(O(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(g_(e,s),e===Be&&(Le=Be=null,Ge=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ga||(ga=!0,Xx(bl,function(){return Vi(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var a=ne;ne|=4,Xf.current=null,PE(e,r),Bx(r,e),tE(Kd),kl=!!Gd,Kd=Gd=null,e.current=r,AE(r),o_(),ne=a,oe=o,Dt.transition=s}else e.current=r;if(ga&&(ga=!1,Qr=e,Ml=i),s=e.pendingLanes,s===0&&(sn=null),c_(r.stateNode),pt(e,Te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Dl)throw Dl=!1,e=ph,ph=null,e;return Ml&1&&e.tag!==0&&Vi(),s=e.pendingLanes,s&1?e===gh?Ws++:(Ws=0,gh=e):Ws=0,yn(),null}function Vi(){if(Qr!==null){var e=Pw(Ml),t=Dt.transition,r=oe;try{if(Dt.transition=null,oe=16>e?16:e,Qr===null)var n=!1;else{if(e=Qr,Qr=null,Ml=0,ne&6)throw Error(O(331));var i=ne;for(ne|=4,z=e.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:qs(8,d,s)}var h=d.child;if(h!==null)h.return=d,z=h;else for(;z!==null;){d=z;var f=d.sibling,y=d.return;if(Ux(d),d===u){z=null;break}if(f!==null){f.return=y,z=f;break}z=y}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var g=e.current;for(z=g;z!==null;){o=z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,z=w;else e:for(o=g;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(C){Ee(a,a.return,C)}if(a===o){z=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,z=k;break e}z=a.return}}if(ne=i,yn(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(pc,e)}catch{}n=!0}return n}finally{oe=r,Dt.transition=t}}return!1}function am(e,t,r){t=Yi(r,t),t=Px(e,t,1),e=nn(e,t,1),t=st(),e!==null&&(zo(e,1,t),pt(e,t))}function Ee(e,t,r){if(e.tag===3)am(e,e,r);else for(;t!==null;){if(t.tag===3){am(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sn===null||!sn.has(n))){e=Yi(r,e),e=Ax(t,e,1),t=nn(t,e,1),e=st(),t!==null&&(zo(t,1,e),pt(t,e));break}}t=t.return}}function zE(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&r,Be===e&&(Ge&r)===r&&(Ue===4||Ue===3&&(Ge&130023424)===Ge&&500>Te()-ep?Vn(e,0):Zf|=r),pt(e,t)}function Jx(e,t){t===0&&(e.mode&1?(t=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):t=1);var r=st();e=Ir(e,t),e!==null&&(zo(e,t,r),pt(e,r))}function NE(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Jx(e,r)}function DE(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(O(314))}n!==null&&n.delete(t),Jx(e,r)}var Qx;Qx=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)ut=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ut=!1,EE(e,t,r);ut=!!(e.flags&131072)}else ut=!1,ye&&t.flags&1048576&&tx(t,Al,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;rl(e,t),e=t.pendingProps;var i=Hi(t,tt.current);Fi(t,r),i=Gf(null,t,n,e,i,r);var s=Kf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(n)?(s=!0,Tl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vf(t),i.updater=bc,t.stateNode=i,i._reactInternals=t,nh(t,n,e,r),t=oh(null,t,n,!0,s,r)):(t.tag=0,ye&&s&&Lf(t),it(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=UE(n),e=Gt(n,e),i){case 0:t=sh(null,t,n,e,r);break e;case 1:t=Qg(null,t,n,e,r);break e;case 11:t=Yg(null,t,n,e,r);break e;case 14:t=Jg(null,t,n,Gt(n.type,e),r);break e}throw Error(O(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Gt(n,i),sh(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Gt(n,i),Qg(e,t,n,i,r);case 3:e:{if($x(t),e===null)throw Error(O(387));n=t.pendingProps,s=t.memoizedState,i=s.element,ax(e,t),Ol(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Yi(Error(O(423)),t),t=Xg(e,t,n,r,i);break e}else if(n!==i){i=Yi(Error(O(424)),t),t=Xg(e,t,n,r,i);break e}else for(Et=rn(t.stateNode.containerInfo.firstChild),Ct=t,ye=!0,Xt=null,r=sx(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Wi(),n===i){t=Or(e,t,r);break e}it(e,t,n,r)}t=t.child}return t;case 5:return lx(t),e===null&&eh(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Yd(n,i)?o=null:s!==null&&Yd(n,s)&&(t.flags|=32),Ox(e,t),it(e,t,o,r),t.child;case 6:return e===null&&eh(t),null;case 13:return Lx(e,t,r);case 4:return Bf(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Gi(t,null,n,r):it(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Gt(n,i),Yg(e,t,n,i,r);case 7:return it(e,t,t.pendingProps,r),t.child;case 8:return it(e,t,t.pendingProps.children,r),t.child;case 12:return it(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,de(Rl,n._currentValue),n._currentValue=o,s!==null)if(sr(s.value,o)){if(s.children===i.children&&!ht.current){t=Or(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(s.tag===1){l=Cr(-1,r&-r),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),th(s.return,r,t),a.lanes|=r;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),th(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Fi(t,r),i=Mt(i),n=n(i),t.flags|=1,it(e,t,n,r),t.child;case 14:return n=t.type,i=Gt(n,t.pendingProps),i=Gt(n.type,i),Jg(e,t,n,i,r);case 15:return Rx(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Gt(n,i),rl(e,t),t.tag=1,ft(n)?(e=!0,Tl(t)):e=!1,Fi(t,r),Tx(t,n,i),nh(t,n,i,r),oh(null,t,n,!0,e,r);case 19:return zx(e,t,r);case 22:return Ix(e,t,r)}throw Error(O(156,t.tag))};function Xx(e,t){return Ew(e,t)}function ME(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,r,n){return new ME(e,t,r,n)}function ip(e){return e=e.prototype,!(!e||!e.isReactComponent)}function UE(e){if(typeof e=="function")return ip(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kf)return 11;if(e===_f)return 14}return 2}function an(e,t){var r=e.alternate;return r===null?(r=Nt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function sl(e,t,r,n,i,s){var o=2;if(n=e,typeof e=="function")ip(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xi:return Bn(r.children,i,s,t);case Sf:o=8,i|=8;break;case jd:return e=Nt(12,r,t,i|2),e.elementType=jd,e.lanes=s,e;case Td:return e=Nt(13,r,t,i),e.elementType=Td,e.lanes=s,e;case Pd:return e=Nt(19,r,t,i),e.elementType=Pd,e.lanes=s,e;case lw:return _c(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ow:o=10;break e;case aw:o=9;break e;case kf:o=11;break e;case _f:o=14;break e;case Vr:o=16,n=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Nt(o,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Bn(e,t,r,n){return e=Nt(7,e,n,t),e.lanes=r,e}function _c(e,t,r,n){return e=Nt(22,e,n,t),e.elementType=lw,e.lanes=r,e.stateNode={isHidden:!1},e}function ju(e,t,r){return e=Nt(6,e,null,t),e.lanes=r,e}function Tu(e,t,r){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function FE(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sp(e,t,r,n,i,s,o,a,l){return e=new FE(e,t,r,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),e}function VE(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Zx(e){if(!e)return fn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var r=e.type;if(ft(r))return Zw(e,r,t)}return t}function e1(e,t,r,n,i,s,o,a,l){return e=sp(r,n,!0,e,i,s,o,a,l),e.context=Zx(null),r=e.current,n=st(),i=on(r),s=Cr(n,i),s.callback=t??null,nn(r,s,i),e.current.lanes=i,zo(e,i,n),pt(e,n),e}function Ec(e,t,r,n){var i=t.current,s=st(),o=on(i);return r=Zx(r),t.context===null?t.context=r:t.pendingContext=r,t=Cr(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=nn(i,t,o),e!==null&&(er(e,i,o,s),Za(e,i,o)),o}function Fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function op(e,t){lm(e,t),(e=e.alternate)&&lm(e,t)}function BE(){return null}var t1=typeof reportError=="function"?reportError:function(e){console.error(e)};function ap(e){this._internalRoot=e}Cc.prototype.render=ap.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Ec(e,t,null,null)};Cc.prototype.unmount=ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Ec(null,e,null,null)}),t[Rr]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iw();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Wr.length&&t!==0&&t<Wr[r].priority;r++);Wr.splice(r,0,e),r===0&&$w(e)}};function lp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cm(){}function qE(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=Fl(o);s.call(u)}}var o=e1(t,n,e,0,null,!1,!1,"",cm);return e._reactRootContainer=o,e[Rr]=o.current,lo(e.nodeType===8?e.parentNode:e),Jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var u=Fl(l);a.call(u)}}var l=sp(e,0,!1,null,null,!1,!1,"",cm);return e._reactRootContainer=l,e[Rr]=l.current,lo(e.nodeType===8?e.parentNode:e),Jn(function(){Ec(t,l,r,n)}),l}function Tc(e,t,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fl(o);a.call(l)}}Ec(t,o,e,i)}else o=qE(r,t,e,i,n);return Fl(o)}Aw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Is(t.pendingLanes);r!==0&&(jf(t,r|1),pt(t,Te()),!(ne&6)&&(Ji=Te()+500,yn()))}break;case 13:Jn(function(){var n=Ir(e,1);if(n!==null){var i=st();er(n,e,1,i)}}),op(e,1)}};Tf=function(e){if(e.tag===13){var t=Ir(e,134217728);if(t!==null){var r=st();er(t,e,134217728,r)}op(e,134217728)}};Rw=function(e){if(e.tag===13){var t=on(e),r=Ir(e,t);if(r!==null){var n=st();er(r,e,t,n)}op(e,t)}};Iw=function(){return oe};Ow=function(e,t){var r=oe;try{return oe=e,t()}finally{oe=r}};Md=function(e,t,r){switch(t){case"input":if(Id(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=yc(n);if(!i)throw Error(O(90));uw(n),Id(n,i)}}}break;case"textarea":hw(e,r);break;case"select":t=r.value,t!=null&&Ni(e,!!r.multiple,t,!1)}};ww=tp;xw=Jn;var HE={usingClientEntryPoint:!1,Events:[Do,_i,yc,vw,yw,tp]},xs={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WE={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kw(e),e===null?null:e.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||BE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{pc=ma.inject(WE),pr=ma}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;Pt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(t))throw Error(O(200));return VE(e,t,null,r)};Pt.createRoot=function(e,t){if(!lp(e))throw Error(O(299));var r=!1,n="",i=t1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sp(e,1,!1,null,null,r,!1,n,i),e[Rr]=t.current,lo(e.nodeType===8?e.parentNode:e),new ap(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=kw(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return Jn(e)};Pt.hydrate=function(e,t,r){if(!jc(t))throw Error(O(200));return Tc(null,e,t,!0,r)};Pt.hydrateRoot=function(e,t,r){if(!lp(e))throw Error(O(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=t1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=e1(t,null,e,1,r??null,i,!1,s,o),e[Rr]=t.current,lo(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Cc(t)};Pt.render=function(e,t,r){if(!jc(t))throw Error(O(200));return Tc(null,e,t,!1,r)};Pt.unmountComponentAtNode=function(e){if(!jc(e))throw Error(O(40));return e._reactRootContainer?(Jn(function(){Tc(null,null,e,!1,function(){e._reactRootContainer=null,e[Rr]=null})}),!0):!1};Pt.unstable_batchedUpdates=tp;Pt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!jc(r))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Tc(e,t,r,!1,n)};Pt.version="18.3.1-next-f1338f8080-20240426";function r1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r1)}catch(e){console.error(e)}}r1(),rw.exports=Pt;var n1=rw.exports;const GE=q0(n1);var um=n1;Ed.createRoot=um.createRoot,Ed.hydrateRoot=um.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yo.apply(this,arguments)}var Xr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xr||(Xr={}));const dm="popstate";function KE(e){e===void 0&&(e={});function t(n,i){let{pathname:s,search:o,hash:a}=n.location;return yh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:Vl(i)}return JE(t,r,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function i1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function YE(){return Math.random().toString(36).substr(2,8)}function hm(e,t){return{usr:e.state,key:e.key,idx:t}}function yh(e,t,r,n){return r===void 0&&(r=null),yo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cs(t):t,{state:r,key:t&&t.key||n||YE()})}function Vl(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function cs(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function JE(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,a=Xr.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(yo({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Xr.Pop;let b=d(),v=b==null?null:b-u;u=b,l&&l({action:a,location:x.location,delta:v})}function f(b,v){a=Xr.Push;let g=yh(x.location,b,v);r&&r(g,b),u=d()+1;let w=hm(g,u),k=x.createHref(g);try{o.pushState(w,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}s&&l&&l({action:a,location:x.location,delta:1})}function y(b,v){a=Xr.Replace;let g=yh(x.location,b,v);r&&r(g,b),u=d();let w=hm(g,u),k=x.createHref(g);o.replaceState(w,"",k),s&&l&&l({action:a,location:x.location,delta:0})}function m(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof b=="string"?b:Vl(b);return g=g.replace(/ $/,"%20"),ze(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let x={get action(){return a},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dm,h),l=b,()=>{i.removeEventListener(dm,h),l=null}},createHref(b){return t(i,b)},createURL:m,encodeLocation(b){let v=m(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:y,go(b){return o.go(b)}};return x}var fm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fm||(fm={}));function QE(e,t,r){return r===void 0&&(r="/"),XE(e,t,r,!1)}function XE(e,t,r,n){let i=typeof t=="string"?cs(t):t,s=cp(i.pathname||"/",r);if(s==null)return null;let o=s1(e);ZE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=u2(s);a=l2(o[l],u,n)}return a}function s1(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ze(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=ln([n,l.relativePath]),d=r.concat(l);s.children&&s.children.length>0&&(ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),s1(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:o2(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of o1(s.path))i(s,o,l)}),t}function o1(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=o1(n.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ZE(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:a2(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const e2=/^:[\w-]+$/,t2=3,r2=2,n2=1,i2=10,s2=-2,pm=e=>e==="*";function o2(e,t){let r=e.split("/"),n=r.length;return r.some(pm)&&(n+=s2),t&&(n+=r2),r.filter(i=>!pm(i)).reduce((i,s)=>i+(e2.test(s)?t2:s===""?n2:i2),n)}function a2(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function l2(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},s="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",h=gm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!h&&u&&r&&!n[n.length-1].route.index&&(h=gm({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:ln([s,h.pathname]),pathnameBase:p2(ln([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=ln([s,h.pathnameBase]))}return o}function gm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=c2(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((u,d,h)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const m=a[h];return y&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function c2(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),i1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function u2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return i1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function d2(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?cs(e):e;return{pathname:r?r.startsWith("/")?r:h2(r,t):t,search:g2(n),hash:m2(i)}}function h2(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Pu(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function a1(e,t){let r=f2(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function l1(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=cs(e):(i=yo({},e),ze(!i.pathname||!i.pathname.includes("?"),Pu("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Pu("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Pu("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=r;else{let h=t.length-1;if(!n&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?t[h]:"/"}let l=d2(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const ln=e=>e.join("/").replace(/\/\/+/g,"/"),p2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const c1=["post","put","patch","delete"];new Set(c1);const y2=["get",...c1];new Set(y2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wo.apply(this,arguments)}const up=_.createContext(null),w2=_.createContext(null),ei=_.createContext(null),Pc=_.createContext(null),wn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),u1=_.createContext(null);function x2(e,t){let{relative:r}=t===void 0?{}:t;Uo()||ze(!1);let{basename:n,navigator:i}=_.useContext(ei),{hash:s,pathname:o,search:a}=h1(e,{relative:r}),l=o;return n!=="/"&&(l=o==="/"?n:ln([n,o])),i.createHref({pathname:l,search:a,hash:s})}function Uo(){return _.useContext(Pc)!=null}function Fo(){return Uo()||ze(!1),_.useContext(Pc).location}function d1(e){_.useContext(ei).static||_.useLayoutEffect(e)}function Ac(){let{isDataRoute:e}=_.useContext(wn);return e?$2():b2()}function b2(){Uo()||ze(!1);let e=_.useContext(up),{basename:t,future:r,navigator:n}=_.useContext(ei),{matches:i}=_.useContext(wn),{pathname:s}=Fo(),o=JSON.stringify(a1(i,r.v7_relativeSplatPath)),a=_.useRef(!1);return d1(()=>{a.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let h=l1(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ln([t,h.pathname])),(d.replace?n.replace:n.push)(h,d.state,d)},[t,n,o,s,e])}function S2(){let{matches:e}=_.useContext(wn),t=e[e.length-1];return t?t.params:{}}function h1(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=_.useContext(ei),{matches:i}=_.useContext(wn),{pathname:s}=Fo(),o=JSON.stringify(a1(i,n.v7_relativeSplatPath));return _.useMemo(()=>l1(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function k2(e,t){return _2(e,t)}function _2(e,t,r,n){Uo()||ze(!1);let{navigator:i}=_.useContext(ei),{matches:s}=_.useContext(wn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Fo(),d;if(t){var h;let b=typeof t=="string"?cs(t):t;l==="/"||(h=b.pathname)!=null&&h.startsWith(l)||ze(!1),d=b}else d=u;let f=d.pathname||"/",y=f;if(l!=="/"){let b=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=QE(e,{pathname:y}),x=P2(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:ln([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ln([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,r,n);return t&&x?_.createElement(Pc.Provider,{value:{location:wo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xr.Pop}},x):x}function E2(){let e=O2(),t=v2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),r?_.createElement("pre",{style:i},r):null,s)}const C2=_.createElement(E2,null);class j2 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?_.createElement(wn.Provider,{value:this.props.routeContext},_.createElement(u1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T2(e){let{routeContext:t,match:r,children:n}=e,i=_.useContext(up);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),_.createElement(wn.Provider,{value:t},n)}function P2(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=(i=r)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||ze(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:y}=r,m=h.route.loader&&f[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,h,f)=>{let y,m=!1,x=null,b=null;r&&(y=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||C2,l&&(u<0&&f===0?(L2("route-fallback",!1),m=!0,b=null):u===f&&(m=!0,b=h.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,f+1)),g=()=>{let w;return y?w=x:m?w=b:h.route.Component?w=_.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=d,_.createElement(T2,{match:h,routeContext:{outlet:d,matches:v,isDataRoute:r!=null},children:w})};return r&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?_.createElement(j2,{location:r.location,revalidation:r.revalidation,component:x,error:y,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var f1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(f1||{}),Bl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bl||{});function A2(e){let t=_.useContext(up);return t||ze(!1),t}function R2(e){let t=_.useContext(w2);return t||ze(!1),t}function I2(e){let t=_.useContext(wn);return t||ze(!1),t}function p1(e){let t=I2(),r=t.matches[t.matches.length-1];return r.route.id||ze(!1),r.route.id}function O2(){var e;let t=_.useContext(u1),r=R2(Bl.UseRouteError),n=p1(Bl.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function $2(){let{router:e}=A2(f1.UseNavigateStable),t=p1(Bl.UseNavigateStable),r=_.useRef(!1);return d1(()=>{r.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wo({fromRouteId:t},s)))},[e,t])}const mm={};function L2(e,t,r){!t&&!mm[e]&&(mm[e]=!0)}function z2(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function xt(e){ze(!1)}function N2(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Xr.Pop,navigator:s,static:o=!1,future:a}=e;Uo()&&ze(!1);let l=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:l,navigator:s,static:o,future:wo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof n=="string"&&(n=cs(n));let{pathname:d="/",search:h="",hash:f="",state:y=null,key:m="default"}=n,x=_.useMemo(()=>{let b=cp(d,l);return b==null?null:{location:{pathname:b,search:h,hash:f,state:y,key:m},navigationType:i}},[l,d,h,f,y,m,i]);return x==null?null:_.createElement(ei.Provider,{value:u},_.createElement(Pc.Provider,{children:r,value:x}))}function D2(e){let{children:t,location:r}=e;return k2(wh(t),r)}new Promise(()=>{});function wh(e,t){t===void 0&&(t=[]);let r=[];return _.Children.forEach(e,(n,i)=>{if(!_.isValidElement(n))return;let s=[...t,i];if(n.type===_.Fragment){r.push.apply(r,wh(n.props.children,s));return}n.type!==xt&&ze(!1),!n.props.index||!n.props.children||ze(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=wh(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xh(){return xh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xh.apply(this,arguments)}function M2(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function U2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F2(e,t){return e.button===0&&(!t||t==="_self")&&!U2(e)}const V2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],B2="6";try{window.__reactRouterVersion=B2}catch{}const q2="startTransition",vm=zk[q2];function H2(e){let{basename:t,children:r,future:n,window:i}=e,s=_.useRef();s.current==null&&(s.current=KE({window:i,v5Compat:!0}));let o=s.current,[a,l]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},d=_.useCallback(h=>{u&&vm?vm(()=>l(h)):l(h)},[l,u]);return _.useLayoutEffect(()=>o.listen(d),[o,d]),_.useEffect(()=>z2(n),[n]),_.createElement(N2,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:o,future:n})}const W2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=_.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:h}=t,f=M2(t,V2),{basename:y}=_.useContext(ei),m,x=!1;if(typeof u=="string"&&G2.test(u)&&(m=u,W2))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),C=cp(k.pathname,y);k.origin===w.origin&&C!=null?u=C+k.search+k.hash:x=!0}catch{}let b=x2(u,{relative:i}),v=K2(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:h});function g(w){n&&n(w),w.defaultPrevented||v(w)}return _.createElement("a",xh({},f,{href:m||b,onClick:x||s?n:g,ref:r,target:l}))});var ym;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var wm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function K2(e,t){let{target:r,replace:n,state:i,preventScrollReset:s,relative:o,viewTransition:a}=t===void 0?{}:t,l=Ac(),u=Fo(),d=h1(e,{relative:o});return _.useCallback(h=>{if(F2(h,r)){h.preventDefault();let f=n!==void 0?n:Vl(u)===Vl(d);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,n,i,r,e,s,o,a])}const g1=_.createContext(void 0),Pe=()=>{const e=_.useContext(g1);if(e===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return e},Y2=({children:e})=>{const[t,r]=_.useState(()=>{const o=localStorage.getItem("bestfkersintown_language");return o||(navigator.language.split("-")[0]==="en"?"en":"fr")}),n=()=>{r(o=>o==="fr"?"en":"fr")},i=o=>{r(o)};_.useEffect(()=>{localStorage.setItem("bestfkersintown_language",t)},[t]);const s={language:t,toggleLanguage:n,setLanguage:i};return c.jsx(g1.Provider,{value:s,children:e})};var dt=function(){return dt=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},dt.apply(this,arguments)};function xo(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,s;n<i;n++)(s||!(n in t))&&(s||(s=Array.prototype.slice.call(t,0,n)),s[n]=t[n]);return e.concat(s||Array.prototype.slice.call(t))}var ge="-ms-",Gs="-moz-",se="-webkit-",m1="comm",Rc="rule",dp="decl",J2="@import",v1="@keyframes",Q2="@layer",y1=Math.abs,hp=String.fromCharCode,bh=Object.assign;function X2(e,t){return Ve(e,0)^45?(((t<<2^Ve(e,0))<<2^Ve(e,1))<<2^Ve(e,2))<<2^Ve(e,3):0}function w1(e){return e.trim()}function wr(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,r){return e.replace(t,r)}function ol(e,t,r){return e.indexOf(t,r)}function Ve(e,t){return e.charCodeAt(t)|0}function Qi(e,t,r){return e.slice(t,r)}function hr(e){return e.length}function x1(e){return e.length}function $s(e,t){return t.push(e),e}function Z2(e,t){return e.map(t).join("")}function xm(e,t){return e.filter(function(r){return!wr(r,t)})}var Ic=1,Xi=1,b1=0,Ft=0,$e=0,us="";function Oc(e,t,r,n,i,s,o,a){return{value:e,root:t,parent:r,type:n,props:i,children:s,line:Ic,column:Xi,length:o,return:"",siblings:a}}function Ur(e,t){return bh(Oc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function si(e){for(;e.root;)e=Ur(e.root,{children:[e]});$s(e,e.siblings)}function eC(){return $e}function tC(){return $e=Ft>0?Ve(us,--Ft):0,Xi--,$e===10&&(Xi=1,Ic--),$e}function tr(){return $e=Ft<b1?Ve(us,Ft++):0,Xi++,$e===10&&(Xi=1,Ic++),$e}function qn(){return Ve(us,Ft)}function al(){return Ft}function $c(e,t){return Qi(us,e,t)}function Sh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rC(e){return Ic=Xi=1,b1=hr(us=e),Ft=0,[]}function nC(e){return us="",e}function Au(e){return w1($c(Ft-1,kh(e===91?e+2:e===40?e+1:e)))}function iC(e){for(;($e=qn())&&$e<33;)tr();return Sh(e)>2||Sh($e)>3?"":" "}function sC(e,t){for(;--t&&tr()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return $c(e,al()+(t<6&&qn()==32&&tr()==32))}function kh(e){for(;tr();)switch($e){case e:return Ft;case 34:case 39:e!==34&&e!==39&&kh($e);break;case 40:e===41&&kh(e);break;case 92:tr();break}return Ft}function oC(e,t){for(;tr()&&e+$e!==47+10;)if(e+$e===42+42&&qn()===47)break;return"/*"+$c(t,Ft-1)+"*"+hp(e===47?e:tr())}function aC(e){for(;!Sh(qn());)tr();return $c(e,Ft)}function lC(e){return nC(ll("",null,null,null,[""],e=rC(e),0,[0],e))}function ll(e,t,r,n,i,s,o,a,l){for(var u=0,d=0,h=o,f=0,y=0,m=0,x=1,b=1,v=1,g=0,w="",k=i,C=s,S=n,E=w;b;)switch(m=g,g=tr()){case 40:if(m!=108&&Ve(E,h-1)==58){ol(E+=Q(Au(g),"&","&\f"),"&\f",y1(u?a[u-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:E+=Au(g);break;case 9:case 10:case 13:case 32:E+=iC(m);break;case 92:E+=sC(al()-1,7);continue;case 47:switch(qn()){case 42:case 47:$s(cC(oC(tr(),al()),t,r,l),l);break;default:E+="/"}break;case 123*x:a[u++]=hr(E)*v;case 125*x:case 59:case 0:switch(g){case 0:case 125:b=0;case 59+d:v==-1&&(E=Q(E,/\f/g,"")),y>0&&hr(E)-h&&$s(y>32?Sm(E+";",n,r,h-1,l):Sm(Q(E," ","")+";",n,r,h-2,l),l);break;case 59:E+=";";default:if($s(S=bm(E,t,r,u,d,i,a,w,k=[],C=[],h,s),s),g===123)if(d===0)ll(E,t,S,S,k,s,h,a,C);else switch(f===99&&Ve(E,3)===110?100:f){case 100:case 108:case 109:case 115:ll(e,S,S,n&&$s(bm(e,S,S,0,0,i,a,w,i,k=[],h,C),C),i,C,h,a,n?k:C);break;default:ll(E,S,S,S,[""],C,0,a,C)}}u=d=y=0,x=v=1,w=E="",h=o;break;case 58:h=1+hr(E),y=m;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&tC()==125)continue}switch(E+=hp(g),g*x){case 38:v=d>0?1:(E+="\f",-1);break;case 44:a[u++]=(hr(E)-1)*v,v=1;break;case 64:qn()===45&&(E+=Au(tr())),f=qn(),d=h=hr(w=E+=aC(al())),g++;break;case 45:m===45&&hr(E)==2&&(x=0)}}return s}function bm(e,t,r,n,i,s,o,a,l,u,d,h){for(var f=i-1,y=i===0?s:[""],m=x1(y),x=0,b=0,v=0;x<n;++x)for(var g=0,w=Qi(e,f+1,f=y1(b=o[x])),k=e;g<m;++g)(k=w1(b>0?y[g]+" "+w:Q(w,/&\f/g,y[g])))&&(l[v++]=k);return Oc(e,t,r,i===0?Rc:a,l,u,d,h)}function cC(e,t,r,n){return Oc(e,t,r,m1,hp(eC()),Qi(e,2,-2),0,n)}function Sm(e,t,r,n,i){return Oc(e,t,r,dp,Qi(e,0,n),Qi(e,n+1,-1),n,i)}function S1(e,t,r){switch(X2(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 4789:return Gs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+Gs+e+ge+e+e;case 5936:switch(Ve(e,t+11)){case 114:return se+e+ge+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+ge+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+ge+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return se+e+ge+e+e;case 6165:return se+e+ge+"flex-"+e+e;case 5187:return se+e+Q(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return se+e+ge+"flex-item-"+Q(e,/flex-|-self/g,"")+(wr(e,/flex-|baseline/)?"":ge+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return se+e+ge+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return se+e+ge+Q(e,"shrink","negative")+e;case 5292:return se+e+ge+Q(e,"basis","preferred-size")+e;case 6060:return se+"box-"+Q(e,"-grow","")+se+e+ge+Q(e,"grow","positive")+e;case 4554:return se+Q(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4200:if(!wr(e,/flex-|baseline/))return ge+"grid-column-align"+Qi(e,t)+e;break;case 2592:case 3360:return ge+Q(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,i){return t=i,wr(n.props,/grid-\w+-end/)})?~ol(e+(r=r[t].value),"span",0)?e:ge+Q(e,"-start","")+e+ge+"grid-row-span:"+(~ol(r,"span",0)?wr(r,/\d+/):+wr(r,/\d+/)-+wr(e,/\d+/))+";":ge+Q(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return wr(n.props,/grid-\w+-start/)})?e:ge+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(e)-1-t>6)switch(Ve(e,t+1)){case 109:if(Ve(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+Gs+(Ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ol(e,"stretch",0)?S1(Q(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,s,o,a,l,u){return ge+i+":"+s+u+(o?ge+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ve(e,t+6)===121)return Q(e,":",":"+se)+e;break;case 6444:switch(Ve(e,Ve(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Ve(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ge+"$2box$3")+e;case 100:return Q(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function ql(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function uC(e,t,r,n){switch(e.type){case Q2:if(e.children.length)break;case J2:case dp:return e.return=e.return||e.value;case m1:return"";case v1:return e.return=e.value+"{"+ql(e.children,n)+"}";case Rc:if(!hr(e.value=e.props.join(",")))return""}return hr(r=ql(e.children,n))?e.return=e.value+"{"+r+"}":""}function dC(e){var t=x1(e);return function(r,n,i,s){for(var o="",a=0;a<t;a++)o+=e[a](r,n,i,s)||"";return o}}function hC(e){return function(t){t.root||(t=t.return)&&e(t)}}function fC(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case dp:e.return=S1(e.value,e.length,r);return;case v1:return ql([Ur(e,{value:Q(e.value,"@","@"+se)})],n);case Rc:if(e.length)return Z2(r=e.props,function(i){switch(wr(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(Ur(e,{props:[Q(i,/:(read-\w+)/,":"+Gs+"$1")]})),si(Ur(e,{props:[i]})),bh(e,{props:xm(r,n)});break;case"::placeholder":si(Ur(e,{props:[Q(i,/:(plac\w+)/,":"+se+"input-$1")]})),si(Ur(e,{props:[Q(i,/:(plac\w+)/,":"+Gs+"$1")]})),si(Ur(e,{props:[Q(i,/:(plac\w+)/,ge+"input-$1")]})),si(Ur(e,{props:[i]})),bh(e,{props:xm(r,n)});break}return""})}}var pC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",k1="active",_1="data-styled-version",Lc="6.1.19",fp=`/*!sc*/
`,Hl=typeof window<"u"&&typeof document<"u",gC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),zc=Object.freeze([]),es=Object.freeze({});function mC(e,t,r){return r===void 0&&(r=es),e.theme!==r.theme&&e.theme||t||r.theme}var E1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yC=/(^-|-$)/g;function km(e){return e.replace(vC,"-").replace(yC,"")}var wC=/(a)(d)/gi,va=52,_m=function(e){return String.fromCharCode(e+(e>25?39:97))};function _h(e){var t,r="";for(t=Math.abs(e);t>va;t=t/va|0)r=_m(t%va)+r;return(_m(t%va)+r).replace(wC,"$1-$2")}var Ru,C1=5381,Ri=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},j1=function(e){return Ri(C1,e)};function T1(e){return _h(j1(e)>>>0)}function xC(e){return e.displayName||e.name||"Component"}function Iu(e){return typeof e=="string"&&!0}var P1=typeof Symbol=="function"&&Symbol.for,A1=P1?Symbol.for("react.memo"):60115,bC=P1?Symbol.for("react.forward_ref"):60112,SC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_C=((Ru={})[bC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ru[A1]=R1,Ru);function Em(e){return("type"in(t=e)&&t.type.$$typeof)===A1?R1:"$$typeof"in e?_C[e.$$typeof]:SC;var t}var EC=Object.defineProperty,CC=Object.getOwnPropertyNames,Cm=Object.getOwnPropertySymbols,jC=Object.getOwnPropertyDescriptor,TC=Object.getPrototypeOf,jm=Object.prototype;function I1(e,t,r){if(typeof t!="string"){if(jm){var n=TC(t);n&&n!==jm&&I1(e,n,r)}var i=CC(t);Cm&&(i=i.concat(Cm(t)));for(var s=Em(e),o=Em(t),a=0;a<i.length;++a){var l=i[a];if(!(l in kC||r&&r[l]||o&&l in o||s&&l in s)){var u=jC(t,l);try{EC(e,l,u)}catch{}}}}return e}function ts(e){return typeof e=="function"}function pp(e){return typeof e=="object"&&"styledComponentId"in e}function Nn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Eh(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function bo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ch(e,t,r){if(r===void 0&&(r=!1),!r&&!bo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ch(e[n],t[n]);else if(bo(t))for(var n in t)e[n]=Ch(e[n],t[n]);return e}function gp(e,t){Object.defineProperty(e,"toString",{value:t})}function Vo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var PC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,s=i;t>=s;)if((s<<=1)<0)throw Vo(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,r.length);o<l;o++)this.tag.insertRule(a,r[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),i=n+r;this.groupSizes[t]=0;for(var s=n;s<i;s++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n,o=i;o<s;o++)r+="".concat(this.tag.getRule(o)).concat(fp);return r},e}(),cl=new Map,Wl=new Map,ul=1,ya=function(e){if(cl.has(e))return cl.get(e);for(;Wl.has(ul);)ul++;var t=ul++;return cl.set(e,t),Wl.set(t,e),t},AC=function(e,t){ul=t+1,cl.set(e,t),Wl.set(t,e)},RC="style[".concat(Zi,"][").concat(_1,'="').concat(Lc,'"]'),IC=new RegExp("^".concat(Zi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),OC=function(e,t,r){for(var n,i=r.split(","),s=0,o=i.length;s<o;s++)(n=i[s])&&e.registerName(t,n)},$C=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(fp),i=[],s=0,o=n.length;s<o;s++){var a=n[s].trim();if(a){var l=a.match(IC);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(AC(d,u),OC(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Tm=function(e){for(var t=document.querySelectorAll(RC),r=0,n=t.length;r<n;r++){var i=t[r];i&&i.getAttribute(Zi)!==k1&&($C(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function LC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var O1=function(e){var t=document.head,r=e||t,n=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Zi,"]")));return l[l.length-1]}(r),s=i!==void 0?i.nextSibling:null;n.setAttribute(Zi,k1),n.setAttribute(_1,Lc);var o=LC();return o&&n.setAttribute("nonce",o),r.insertBefore(n,s),n},zC=function(){function e(t){this.element=O1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,i=0,s=n.length;i<s;i++){var o=n[i];if(o.ownerNode===r)return o}throw Vo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),NC=function(){function e(t){this.element=O1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),DC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pm=Hl,MC={isServer:!Hl,useCSSOMInjection:!gC},$1=function(){function e(t,r,n){t===void 0&&(t=es),r===void 0&&(r={});var i=this;this.options=dt(dt({},MC),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Hl&&Pm&&(Pm=!1,Tm(this)),gp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var f=function(v){return Wl.get(v)}(h);if(f===void 0)return"continue";var y=s.names.get(f),m=o.getGroup(h);if(y===void 0||!y.size||m.length===0)return"continue";var x="".concat(Zi,".g").concat(h,'[id="').concat(f,'"]'),b="";y!==void 0&&y.forEach(function(v){v.length>0&&(b+="".concat(v,","))}),l+="".concat(m).concat(x,'{content:"').concat(b,'"}').concat(fp)},d=0;d<a;d++)u(d);return l}(i)})}return e.registerId=function(t){return ya(t)},e.prototype.rehydrate=function(){!this.server&&Hl&&Tm(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(dt(dt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,i=r.target;return r.isServer?new DC(i):n?new zC(i):new NC(i)}(this.options),new PC(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ya(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ya(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ya(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),UC=/&/g,FC=/^\s*\/\/.*$/gm;function L1(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=L1(r.children,t)),r})}function VC(e){var t,r,n,i=e===void 0?es:e,s=i.options,o=s===void 0?es:s,a=i.plugins,l=a===void 0?zc:a,u=function(f,y,m){return m.startsWith(r)&&m.endsWith(r)&&m.replaceAll(r,"").length>0?".".concat(t):f},d=l.slice();d.push(function(f){f.type===Rc&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(UC,r).replace(n,u))}),o.prefix&&d.push(fC),d.push(uC);var h=function(f,y,m,x){y===void 0&&(y=""),m===void 0&&(m=""),x===void 0&&(x="&"),t=x,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var b=f.replace(FC,""),v=lC(m||y?"".concat(m," ").concat(y," { ").concat(b," }"):b);o.namespace&&(v=L1(v,o.namespace));var g=[];return ql(v,dC(d.concat(hC(function(w){return g.push(w)})))),g};return h.hash=l.length?l.reduce(function(f,y){return y.name||Vo(15),Ri(f,y.name)},C1).toString():"",h}var BC=new $1,jh=VC(),z1=ir.createContext({shouldForwardProp:void 0,styleSheet:BC,stylis:jh});z1.Consumer;ir.createContext(void 0);function Am(){return _.useContext(z1)}var N1=function(){function e(t,r){var n=this;this.inject=function(i,s){s===void 0&&(s=jh);var o=n.name+s.hash;i.hasNameForId(n.id,o)||i.insertRules(n.id,o,s(n.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,gp(this,function(){throw Vo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jh),this.name+t.hash},e}(),qC=function(e){return e>="A"&&e<="Z"};function Rm(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;qC(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var D1=function(e){return e==null||e===!1||e===""},M1=function(e){var t,r,n=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!D1(s)&&(Array.isArray(s)&&s.isCss||ts(s)?n.push("".concat(Rm(i),":"),s,";"):bo(s)?n.push.apply(n,xo(xo(["".concat(i," {")],M1(s),!1),["}"],!1)):n.push("".concat(Rm(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in pC||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Hn(e,t,r,n){if(D1(e))return[];if(pp(e))return[".".concat(e.styledComponentId)];if(ts(e)){if(!ts(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Hn(i,t,r,n)}var s;return e instanceof N1?r?(e.inject(r,n),[e.getName(n)]):[e]:bo(e)?M1(e):Array.isArray(e)?Array.prototype.concat.apply(zc,e.map(function(o){return Hn(o,t,r,n)})):[e.toString()]}function HC(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ts(r)&&!pp(r))return!1}return!0}var WC=j1(Lc),GC=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&HC(t),this.componentId=r,this.baseHash=Ri(WC,r),this.baseStyle=n,$1.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Nn(i,this.staticRulesId);else{var s=Eh(Hn(this.rules,t,r,n)),o=_h(Ri(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,o)){var a=n(s,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,a)}i=Nn(i,o),this.staticRulesId=o}else{for(var l=Ri(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var f=Eh(Hn(h,t,r,n));l=Ri(l,f+d),u+=f}}if(u){var y=_h(l>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),i=Nn(i,y)}}return i},e}(),U1=ir.createContext(void 0);U1.Consumer;var Ou={};function KC(e,t,r){var n=pp(e),i=e,s=!Iu(e),o=t.attrs,a=o===void 0?zc:o,l=t.componentId,u=l===void 0?function(k,C){var S=typeof k!="string"?"sc":km(k);Ou[S]=(Ou[S]||0)+1;var E="".concat(S,"-").concat(T1(Lc+S+Ou[S]));return C?"".concat(C,"-").concat(E):E}(t.displayName,t.parentComponentId):l,d=t.displayName,h=d===void 0?function(k){return Iu(k)?"styled.".concat(k):"Styled(".concat(xC(k),")")}(e):d,f=t.displayName&&t.componentId?"".concat(km(t.displayName),"-").concat(t.componentId):t.componentId||u,y=n&&i.attrs?i.attrs.concat(a).filter(Boolean):a,m=t.shouldForwardProp;if(n&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;m=function(k,C){return x(k,C)&&b(k,C)}}else m=x}var v=new GC(r,f,n?i.componentStyle:void 0);function g(k,C){return function(S,E,j){var R=S.attrs,P=S.componentStyle,L=S.defaultProps,W=S.foldedComponentIds,re=S.styledComponentId,ae=S.target,rt=ir.useContext(U1),ce=Am(),Ae=S.shouldForwardProp||ce.shouldForwardProp,$=mC(E,rt,L)||es,N=function(fe,le,I){for(var Y,K=dt(dt({},le),{className:void 0,theme:I}),ie=0;ie<fe.length;ie+=1){var G=ts(Y=fe[ie])?Y(K):Y;for(var te in G)K[te]=te==="className"?Nn(K[te],G[te]):te==="style"?dt(dt({},K[te]),G[te]):G[te]}return le.className&&(K.className=Nn(K.className,le.className)),K}(R,E,$),V=N.as||ae,U={};for(var X in N)N[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&N.theme===$||(X==="forwardedAs"?U.as=N.forwardedAs:Ae&&!Ae(X,V)||(U[X]=N[X]));var A=function(fe,le){var I=Am(),Y=fe.generateAndInjectStyles(le,I.styleSheet,I.stylis);return Y}(P,N),Z=Nn(W,re);return A&&(Z+=" "+A),N.className&&(Z+=" "+N.className),U[Iu(V)&&!E1.has(V)?"class":"className"]=Z,j&&(U.ref=j),_.createElement(V,U)}(w,k,C)}g.displayName=h;var w=ir.forwardRef(g);return w.attrs=y,w.componentStyle=v,w.displayName=h,w.shouldForwardProp=m,w.foldedComponentIds=n?Nn(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=f,w.target=n?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=n?function(C){for(var S=[],E=1;E<arguments.length;E++)S[E-1]=arguments[E];for(var j=0,R=S;j<R.length;j++)Ch(C,R[j],!0);return C}({},i.defaultProps,k):k}}),gp(w,function(){return".".concat(w.styledComponentId)}),s&&I1(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Im(e,t){for(var r=[e[0]],n=0,i=t.length;n<i;n+=1)r.push(t[n],e[n+1]);return r}var Om=function(e){return Object.assign(e,{isCss:!0})};function F1(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ts(e)||bo(e))return Om(Hn(Im(zc,xo([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Hn(n):Om(Hn(Im(n,t)))}function Th(e,t,r){if(r===void 0&&(r=es),!t)throw Vo(1,t);var n=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,r,F1.apply(void 0,xo([i],s,!1)))};return n.attrs=function(i){return Th(e,t,dt(dt({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return Th(e,t,dt(dt({},r),i))},n}var V1=function(e){return Th(KC,e)},p=V1;E1.forEach(function(e){p[e]=V1(e)});function mp(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Eh(F1.apply(void 0,xo([e],t,!1))),i=T1(n);return new N1(i,n)}const B1=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Nc=_.createContext({}),Dc=_.createContext(null),Mc=typeof document<"u",vp=Mc?_.useLayoutEffect:_.useEffect,q1=_.createContext({strict:!1}),yp=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),YC="framerAppearId",H1="data-"+yp(YC);function JC(e,t,r,n){const{visualElement:i}=_.useContext(Nc),s=_.useContext(q1),o=_.useContext(Dc),a=_.useContext(B1).reducedMotion,l=_.useRef();n=n||s.renderer,!l.current&&n&&(l.current=n(e,{visualState:t,parent:i,props:r,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;_.useInsertionEffect(()=>{u&&u.update(r,o)});const d=_.useRef(!!(r[H1]&&!window.HandoffComplete));return vp(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),_.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Ii(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function QC(e,t,r){return _.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&(typeof r=="function"?r(n):Ii(r)&&(r.current=n))},[t])}function So(e){return typeof e=="string"||Array.isArray(e)}function Uc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const wp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],xp=["initial",...wp];function Fc(e){return Uc(e.animate)||xp.some(t=>So(e[t]))}function W1(e){return!!(Fc(e)||e.variants)}function XC(e,t){if(Fc(e)){const{initial:r,animate:n}=e;return{initial:r===!1||So(r)?r:void 0,animate:So(n)?n:void 0}}return e.inherit!==!1?t:{}}function ZC(e){const{initial:t,animate:r}=XC(e,_.useContext(Nc));return _.useMemo(()=>({initial:t,animate:r}),[$m(t),$m(r)])}function $m(e){return Array.isArray(e)?e.join(" "):e}const Lm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ko={};for(const e in Lm)ko[e]={isEnabled:t=>Lm[e].some(r=>!!t[r])};function ej(e){for(const t in e)ko[t]={...ko[t],...e[t]}}const bp=_.createContext({}),G1=_.createContext({}),tj=Symbol.for("motionComponentSymbol");function rj({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:i}){e&&ej(e);function s(a,l){let u;const d={..._.useContext(B1),...a,layoutId:nj(a)},{isStatic:h}=d,f=ZC(a),y=n(a,h);if(!h&&Mc){f.visualElement=JC(i,y,d,t);const m=_.useContext(G1),x=_.useContext(q1).strict;f.visualElement&&(u=f.visualElement.loadFeatures(d,x,e,m))}return _.createElement(Nc.Provider,{value:f},u&&f.visualElement?_.createElement(u,{visualElement:f.visualElement,...d}):null,r(i,a,QC(y,f.visualElement,l),y,h,f.visualElement))}const o=_.forwardRef(s);return o[tj]=i,o}function nj({layoutId:e}){const t=_.useContext(bp).id;return t&&e!==void 0?t+"-"+e:e}function ij(e){function t(n,i={}){return rj(e(n,i))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(n,i)=>(r.has(i)||r.set(i,t(i)),r.get(i))})}const sj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sp(e){return typeof e!="string"||e.includes("-")?!1:!!(sj.indexOf(e)>-1||/[A-Z]/.test(e))}const Gl={};function oj(e){Object.assign(Gl,e)}const Bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ti=new Set(Bo);function K1(e,{layout:t,layoutId:r}){return ti.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Gl[e]||e==="opacity")}const mt=e=>!!(e&&e.getVelocity),aj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lj=Bo.length;function cj(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,i){let s="";for(let o=0;o<lj;o++){const a=Bo[o];if(e[a]!==void 0){const l=aj[a]||a;s+=`${l}(${e[a]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,n?"":s):r&&n&&(s="none"),s}const Y1=e=>t=>typeof t=="string"&&t.startsWith(e),J1=Y1("--"),Ph=Y1("var(--"),uj=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,dj=(e,t)=>t&&typeof e=="number"?t.transform(e):e,pn=(e,t,r)=>Math.min(Math.max(r,e),t),ri={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ks={...ri,transform:e=>pn(0,1,e)},wa={...ri,default:1},Ys=e=>Math.round(e*1e5)/1e5,Vc=/(-)?([\d]*\.?[\d])+/g,Q1=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hj=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qo(e){return typeof e=="string"}const Ho=e=>({test:t=>qo(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Fr=Ho("deg"),mr=Ho("%"),H=Ho("px"),fj=Ho("vh"),pj=Ho("vw"),zm={...mr,parse:e=>mr.parse(e)/100,transform:e=>mr.transform(e*100)},Nm={...ri,transform:Math.round},X1={borderWidth:H,borderTopWidth:H,borderRightWidth:H,borderBottomWidth:H,borderLeftWidth:H,borderRadius:H,radius:H,borderTopLeftRadius:H,borderTopRightRadius:H,borderBottomRightRadius:H,borderBottomLeftRadius:H,width:H,maxWidth:H,height:H,maxHeight:H,size:H,top:H,right:H,bottom:H,left:H,padding:H,paddingTop:H,paddingRight:H,paddingBottom:H,paddingLeft:H,margin:H,marginTop:H,marginRight:H,marginBottom:H,marginLeft:H,rotate:Fr,rotateX:Fr,rotateY:Fr,rotateZ:Fr,scale:wa,scaleX:wa,scaleY:wa,scaleZ:wa,skew:Fr,skewX:Fr,skewY:Fr,distance:H,translateX:H,translateY:H,translateZ:H,x:H,y:H,z:H,perspective:H,transformPerspective:H,opacity:Ks,originX:zm,originY:zm,originZ:H,zIndex:Nm,fillOpacity:Ks,strokeOpacity:Ks,numOctaves:Nm};function kp(e,t,r,n){const{style:i,vars:s,transform:o,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const h in t){const f=t[h];if(J1(h)){s[h]=f;continue}const y=X1[h],m=dj(f,y);if(ti.has(h)){if(l=!0,o[h]=m,!d)continue;f!==(y.default||0)&&(d=!1)}else h.startsWith("origin")?(u=!0,a[h]=m):i[h]=m}if(t.transform||(l||n?i.transform=cj(e.transform,r,d,n):i.transform&&(i.transform="none")),u){const{originX:h="50%",originY:f="50%",originZ:y=0}=a;i.transformOrigin=`${h} ${f} ${y}`}}const _p=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Z1(e,t,r){for(const n in t)!mt(t[n])&&!K1(n,r)&&(e[n]=t[n])}function gj({transformTemplate:e},t,r){return _.useMemo(()=>{const n=_p();return kp(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}function mj(e,t,r){const n=e.style||{},i={};return Z1(i,n,e),Object.assign(i,gj(e,t,r)),e.transformValues?e.transformValues(i):i}function vj(e,t,r){const n={},i=mj(e,t,r);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const yj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yj.has(e)}let eb=e=>!Kl(e);function wj(e){e&&(eb=t=>t.startsWith("on")?!Kl(t):e(t))}try{wj(require("@emotion/is-prop-valid").default)}catch{}function xj(e,t,r){const n={};for(const i in e)i==="values"&&typeof e.values=="object"||(eb(i)||r===!0&&Kl(i)||!t&&!Kl(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}function Dm(e,t,r){return typeof e=="string"?e:H.transform(t+r*e)}function bj(e,t,r){const n=Dm(t,e.x,e.width),i=Dm(r,e.y,e.height);return`${n} ${i}`}const Sj={offset:"stroke-dashoffset",array:"stroke-dasharray"},kj={offset:"strokeDashoffset",array:"strokeDasharray"};function _j(e,t,r=1,n=0,i=!0){e.pathLength=1;const s=i?Sj:kj;e[s.offset]=H.transform(-n);const o=H.transform(t),a=H.transform(r);e[s.array]=`${o} ${a}`}function Ep(e,{attrX:t,attrY:r,attrScale:n,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},d,h,f){if(kp(e,u,d,f),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:m,dimensions:x}=e;y.transform&&(x&&(m.transform=y.transform),delete y.transform),x&&(i!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=bj(x,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(y.x=t),r!==void 0&&(y.y=r),n!==void 0&&(y.scale=n),o!==void 0&&_j(y,o,a,l,!1)}const tb=()=>({..._p(),attrs:{}}),Cp=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ej(e,t,r,n){const i=_.useMemo(()=>{const s=tb();return Ep(s,t,{enableHardwareAcceleration:!1},Cp(n),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Z1(s,e.style,e),i.style={...s,...i.style}}return i}function Cj(e=!1){return(r,n,i,{latestValues:s},o)=>{const l=(Sp(r)?Ej:vj)(n,s,o,r),d={...xj(n,typeof r=="string",e),...l,ref:i},{children:h}=n,f=_.useMemo(()=>mt(h)?h.get():h,[h]);return _.createElement(r,{...d,children:f})}}function rb(e,{style:t,vars:r},n,i){Object.assign(e.style,t,i&&i.getProjectionStyles(n));for(const s in r)e.style.setProperty(s,r[s])}const nb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ib(e,t,r,n){rb(e,t,void 0,n);for(const i in t.attrs)e.setAttribute(nb.has(i)?i:yp(i),t.attrs[i])}function jp(e,t){const{style:r}=e,n={};for(const i in r)(mt(r[i])||t.style&&mt(t.style[i])||K1(i,e))&&(n[i]=r[i]);return n}function sb(e,t){const r=jp(e,t);for(const n in e)if(mt(e[n])||mt(t[n])){const i=Bo.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[i]=e[n]}return r}function Tp(e,t,r,n={},i={}){return typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,i)),t}function ob(e){const t=_.useRef(null);return t.current===null&&(t.current=e()),t.current}const Yl=e=>Array.isArray(e),jj=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Tj=e=>Yl(e)?e[e.length-1]||0:e;function dl(e){const t=mt(e)?e.get():e;return jj(t)?t.toValue():t}function Pj({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,i,s){const o={latestValues:Aj(n,i,s,e),renderState:t()};return r&&(o.mount=a=>r(n,a,o)),o}const ab=e=>(t,r)=>{const n=_.useContext(Nc),i=_.useContext(Dc),s=()=>Pj(e,t,n,i);return r?s():ob(s)};function Aj(e,t,r,n){const i={},s=n(e,{});for(const f in s)i[f]=dl(s[f]);let{initial:o,animate:a}=e;const l=Fc(e),u=W1(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=r?r.initial===!1:!1;d=d||o===!1;const h=d?a:o;return h&&typeof h!="boolean"&&!Uc(h)&&(Array.isArray(h)?h:[h]).forEach(y=>{const m=Tp(e,y);if(!m)return;const{transitionEnd:x,transition:b,...v}=m;for(const g in v){let w=v[g];if(Array.isArray(w)){const k=d?w.length-1:0;w=w[k]}w!==null&&(i[g]=w)}for(const g in x)i[g]=x[g]}),i}const Ce=e=>e;class Mm{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function Rj(e){let t=new Mm,r=new Mm,n=0,i=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const h=d&&i,f=h?t:r;return u&&o.add(l),f.add(l)&&h&&i&&(n=t.order.length),l},cancel:l=>{r.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let u=0;u<n;u++){const d=t.order[u];d(l),o.has(d)&&(a.schedule(d),e())}i=!1,s&&(s=!1,a.process(l))}};return a}const xa=["prepare","read","update","preRender","render","postRender"],Ij=40;function Oj(e,t){let r=!1,n=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=xa.reduce((h,f)=>(h[f]=Rj(()=>r=!0),h),{}),o=h=>s[h].process(i),a=()=>{const h=performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(h-i.timestamp,Ij),1),i.timestamp=h,i.isProcessing=!0,xa.forEach(o),i.isProcessing=!1,r&&t&&(n=!1,e(a))},l=()=>{r=!0,n=!0,i.isProcessing||e(a)};return{schedule:xa.reduce((h,f)=>{const y=s[f];return h[f]=(m,x=!1,b=!1)=>(r||l(),y.schedule(m,x,b)),h},{}),cancel:h=>xa.forEach(f=>s[f].cancel(h)),state:i,steps:s}}const{schedule:he,cancel:$r,state:Xe,steps:$u}=Oj(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ce,!0),$j={useVisualState:ab({scrapeMotionValuesFromProps:sb,createRenderState:tb,onMount:(e,t,{renderState:r,latestValues:n})=>{he.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),he.render(()=>{Ep(r,n,{enableHardwareAcceleration:!1},Cp(t.tagName),e.transformTemplate),ib(t,r)})}})},Lj={useVisualState:ab({scrapeMotionValuesFromProps:jp,createRenderState:_p})};function zj(e,{forwardMotionProps:t=!1},r,n){return{...Sp(e)?$j:Lj,preloadedFeatures:r,useRender:Cj(t),createVisualElement:n,Component:e}}function _r(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const lb=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Bc(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const Nj=e=>t=>lb(t)&&e(t,Bc(t));function jr(e,t,r,n){return _r(e,t,Nj(r),n)}const Dj=(e,t)=>r=>t(e(r)),cn=(...e)=>e.reduce(Dj);function cb(e){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=e,r):!1}}const Um=cb("dragHorizontal"),Fm=cb("dragVertical");function ub(e){let t=!1;if(e==="y")t=Fm();else if(e==="x")t=Um();else{const r=Um(),n=Fm();r&&n?t=()=>{r(),n()}:(r&&r(),n&&n())}return t}function db(){const e=ub(!0);return e?(e(),!1):!0}let xn=class{constructor(t){this.isMounted=!1,this.node=t}update(){}};function Vm(e,t){const r="pointer"+(t?"enter":"leave"),n="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||db())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[n]&&he.update(()=>a[n](s,o))};return jr(e.current,r,i,{passive:!e.getProps()[n]})}class Mj extends xn{mount(){this.unmount=cn(Vm(this.node,!0),Vm(this.node,!1))}unmount(){}}class Uj extends xn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cn(_r(this.node.current,"focus",()=>this.onFocus()),_r(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const hb=(e,t)=>t?e===t?!0:hb(e,t.parentElement):!1;function Lu(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,Bc(r))}class Fj extends xn{constructor(){super(...arguments),this.removeStartListeners=Ce,this.removeEndListeners=Ce,this.removeAccessibleListeners=Ce,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),s=jr(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:h}=this.node.getProps();he.update(()=>{!h&&!hb(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(n.onTap||n.onPointerUp)}),o=jr(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=cn(s,o),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||Lu("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&he.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=_r(this.node.current,"keyup",o),Lu("down",(a,l)=>{this.startPress(a,l)})},r=_r(this.node.current,"keydown",t),n=()=>{this.isPressing&&Lu("cancel",(s,o)=>this.cancelPress(s,o))},i=_r(this.node.current,"blur",n);this.removeAccessibleListeners=cn(r,i)}}startPress(t,r){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&he.update(()=>n(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!db()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&he.update(()=>n(t,r))}mount(){const t=this.node.getProps(),r=jr(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=_r(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=cn(r,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Ah=new WeakMap,zu=new WeakMap,Vj=e=>{const t=Ah.get(e.target);t&&t(e)},Bj=e=>{e.forEach(Vj)};function qj({root:e,...t}){const r=e||document;zu.has(r)||zu.set(r,{});const n=zu.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(Bj,{root:e,...t})),n[i]}function Hj(e,t,r){const n=qj(t);return Ah.set(e,r),n.observe(e),()=>{Ah.delete(e),n.unobserve(e)}}const Wj={some:0,all:1};class Gj extends xn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:i="some",once:s}=t,o={root:r?r.current:void 0,rootMargin:n,threshold:typeof i=="number"?i:Wj[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=u?d:h;f&&f(l)};return Hj(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(Kj(t,r))&&this.startObserver()}unmount(){}}function Kj({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const Yj={inView:{Feature:Gj},tap:{Feature:Fj},focus:{Feature:Uj},hover:{Feature:Mj}};function fb(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Jj(e){const t={};return e.values.forEach((r,n)=>t[n]=r.get()),t}function Qj(e){const t={};return e.values.forEach((r,n)=>t[n]=r.getVelocity()),t}function qc(e,t,r){const n=e.getProps();return Tp(n,t,r!==void 0?r:n.custom,Jj(e),Qj(e))}let Xj=Ce,Pp=Ce;const un=e=>e*1e3,Tr=e=>e/1e3,Zj={current:!1},pb=e=>Array.isArray(e)&&typeof e[0]=="number";function gb(e){return!!(!e||typeof e=="string"&&mb[e]||pb(e)||Array.isArray(e)&&e.every(gb))}const Ls=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,mb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function vb(e){if(e)return pb(e)?Ls(e):Array.isArray(e)?e.map(vb):mb[e]}function eT(e,t,r,{delay:n=0,duration:i,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[t]:r};l&&(u.offset=l);const d=vb(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:n,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function tT(e,{repeat:t,repeatType:r="loop"}){const n=t&&r!=="loop"&&t%2===1?0:e.length-1;return e[n]}const yb=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,rT=1e-7,nT=12;function iT(e,t,r,n,i){let s,o,a=0;do o=t+(r-t)/2,s=yb(o,n,i)-e,s>0?r=o:t=o;while(Math.abs(s)>rT&&++a<nT);return o}function Wo(e,t,r,n){if(e===t&&r===n)return Ce;const i=s=>iT(s,0,1,e,r);return s=>s===0||s===1?s:yb(i(s),t,n)}const sT=Wo(.42,0,1,1),oT=Wo(0,0,.58,1),wb=Wo(.42,0,.58,1),aT=e=>Array.isArray(e)&&typeof e[0]!="number",xb=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bb=e=>t=>1-e(1-t),Ap=e=>1-Math.sin(Math.acos(e)),Sb=bb(Ap),lT=xb(Ap),kb=Wo(.33,1.53,.69,.99),Rp=bb(kb),cT=xb(Rp),uT=e=>(e*=2)<1?.5*Rp(e):.5*(2-Math.pow(2,-10*(e-1))),dT={linear:Ce,easeIn:sT,easeInOut:wb,easeOut:oT,circIn:Ap,circInOut:lT,circOut:Sb,backIn:Rp,backInOut:cT,backOut:kb,anticipate:uT},Bm=e=>{if(Array.isArray(e)){Pp(e.length===4);const[t,r,n,i]=e;return Wo(t,r,n,i)}else if(typeof e=="string")return dT[e];return e},Ip=(e,t)=>r=>!!(qo(r)&&hj.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),_b=(e,t,r)=>n=>{if(!qo(n))return n;const[i,s,o,a]=n.match(Vc);return{[e]:parseFloat(i),[t]:parseFloat(s),[r]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},hT=e=>pn(0,255,e),Nu={...ri,transform:e=>Math.round(hT(e))},Dn={test:Ip("rgb","red"),parse:_b("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+Nu.transform(e)+", "+Nu.transform(t)+", "+Nu.transform(r)+", "+Ys(Ks.transform(n))+")"};function fT(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}}const Rh={test:Ip("#"),parse:fT,transform:Dn.transform},Oi={test:Ip("hsl","hue"),parse:_b("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+mr.transform(Ys(t))+", "+mr.transform(Ys(r))+", "+Ys(Ks.transform(n))+")"},nt={test:e=>Dn.test(e)||Rh.test(e)||Oi.test(e),parse:e=>Dn.test(e)?Dn.parse(e):Oi.test(e)?Oi.parse(e):Rh.parse(e),transform:e=>qo(e)?e:e.hasOwnProperty("red")?Dn.transform(e):Oi.transform(e)},be=(e,t,r)=>-r*e+r*t+e;function Du(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function pT({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let i=0,s=0,o=0;if(!t)i=s=o=r;else{const a=r<.5?r*(1+t):r+t-r*t,l=2*r-a;i=Du(l,a,e+1/3),s=Du(l,a,e),o=Du(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}const Mu=(e,t,r)=>{const n=e*e;return Math.sqrt(Math.max(0,r*(t*t-n)+n))},gT=[Rh,Dn,Oi],mT=e=>gT.find(t=>t.test(e));function qm(e){const t=mT(e);let r=t.parse(e);return t===Oi&&(r=pT(r)),r}const Eb=(e,t)=>{const r=qm(e),n=qm(t),i={...r};return s=>(i.red=Mu(r.red,n.red,s),i.green=Mu(r.green,n.green,s),i.blue=Mu(r.blue,n.blue,s),i.alpha=be(r.alpha,n.alpha,s),Dn.transform(i))};function vT(e){var t,r;return isNaN(e)&&qo(e)&&(((t=e.match(Vc))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(Q1))===null||r===void 0?void 0:r.length)||0)>0}const Cb={regex:uj,countKey:"Vars",token:"${v}",parse:Ce},jb={regex:Q1,countKey:"Colors",token:"${c}",parse:nt.parse},Tb={regex:Vc,countKey:"Numbers",token:"${n}",parse:ri.parse};function Uu(e,{regex:t,countKey:r,token:n,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+r]=s.length,e.tokenised=e.tokenised.replace(t,n),e.values.push(...s.map(i)))}function Jl(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&Uu(r,Cb),Uu(r,jb),Uu(r,Tb),r}function Pb(e){return Jl(e).values}function Ab(e){const{values:t,numColors:r,numVars:n,tokenised:i}=Jl(e),s=t.length;return o=>{let a=i;for(let l=0;l<s;l++)l<n?a=a.replace(Cb.token,o[l]):l<n+r?a=a.replace(jb.token,nt.transform(o[l])):a=a.replace(Tb.token,Ys(o[l]));return a}}const yT=e=>typeof e=="number"?0:e;function wT(e){const t=Pb(e);return Ab(e)(t.map(yT))}const gn={test:vT,parse:Pb,createTransformer:Ab,getAnimatableNone:wT},Rb=(e,t)=>r=>`${r>0?t:e}`;function Ib(e,t){return typeof e=="number"?r=>be(e,t,r):nt.test(e)?Eb(e,t):e.startsWith("var(")?Rb(e,t):$b(e,t)}const Ob=(e,t)=>{const r=[...e],n=r.length,i=e.map((s,o)=>Ib(s,t[o]));return s=>{for(let o=0;o<n;o++)r[o]=i[o](s);return r}},xT=(e,t)=>{const r={...e,...t},n={};for(const i in r)e[i]!==void 0&&t[i]!==void 0&&(n[i]=Ib(e[i],t[i]));return i=>{for(const s in n)r[s]=n[s](i);return r}},$b=(e,t)=>{const r=gn.createTransformer(t),n=Jl(e),i=Jl(t);return n.numVars===i.numVars&&n.numColors===i.numColors&&n.numNumbers>=i.numNumbers?cn(Ob(n.values,i.values),r):Rb(e,t)},_o=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n},Hm=(e,t)=>r=>be(e,t,r);function bT(e){return typeof e=="number"?Hm:typeof e=="string"?nt.test(e)?Eb:$b:Array.isArray(e)?Ob:typeof e=="object"?xT:Hm}function ST(e,t,r){const n=[],i=r||bT(e[0]),s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ce:t;a=cn(l,a)}n.push(a)}return n}function Lb(e,t,{clamp:r=!0,ease:n,mixer:i}={}){const s=e.length;if(Pp(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=ST(t,n,i),a=o.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const h=_o(e[d],e[d+1],u);return o[d](h)};return r?u=>l(pn(e[0],e[s-1],u)):l}function kT(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const i=_o(0,t,n);e.push(be(r,1,i))}}function _T(e){const t=[0];return kT(t,e.length-1),t}function ET(e,t){return e.map(r=>r*t)}function CT(e,t){return e.map(()=>t||wb).splice(0,e.length-1)}function Ql({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){const i=aT(n)?n.map(Bm):Bm(n),s={done:!1,value:t[0]},o=ET(r&&r.length===t.length?r:_T(t),e),a=Lb(o,t,{ease:Array.isArray(i)?i:CT(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}function zb(e,t){return t?e*(1e3/t):0}const jT=5;function Nb(e,t,r){const n=Math.max(t-jT,0);return zb(r-e(n),t-n)}const Fu=.001,TT=.01,Wm=10,PT=.05,AT=1;function RT({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let i,s;Xj(e<=un(Wm));let o=1-t;o=pn(PT,AT,o),e=pn(TT,Wm,Tr(e)),o<1?(i=u=>{const d=u*o,h=d*e,f=d-r,y=Ih(u,o),m=Math.exp(-h);return Fu-f/y*m},s=u=>{const h=u*o*e,f=h*r+r,y=Math.pow(o,2)*Math.pow(u,2)*e,m=Math.exp(-h),x=Ih(Math.pow(u,2),o);return(-i(u)+Fu>0?-1:1)*((f-y)*m)/x}):(i=u=>{const d=Math.exp(-u*e),h=(u-r)*e+1;return-Fu+d*h},s=u=>{const d=Math.exp(-u*e),h=(r-u)*(e*e);return d*h});const a=5/e,l=OT(i,s,a);if(e=un(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*n;return{stiffness:u,damping:o*2*Math.sqrt(n*u),duration:e}}}const IT=12;function OT(e,t,r){let n=r;for(let i=1;i<IT;i++)n=n-e(n)/t(n);return n}function Ih(e,t){return e*Math.sqrt(1-t*t)}const $T=["duration","bounce"],LT=["stiffness","damping","mass"];function Gm(e,t){return t.some(r=>e[r]!==void 0)}function zT(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Gm(e,LT)&&Gm(e,$T)){const r=RT(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function Db({keyframes:e,restDelta:t,restSpeed:r,...n}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:u,duration:d,velocity:h,isResolvedFromDuration:f}=zT({...n,velocity:-Tr(n.velocity||0)}),y=h||0,m=l/(2*Math.sqrt(a*u)),x=s-i,b=Tr(Math.sqrt(a/u)),v=Math.abs(x)<5;r||(r=v?.01:2),t||(t=v?.005:.5);let g;if(m<1){const w=Ih(b,m);g=k=>{const C=Math.exp(-m*b*k);return s-C*((y+m*b*x)/w*Math.sin(w*k)+x*Math.cos(w*k))}}else if(m===1)g=w=>s-Math.exp(-b*w)*(x+(y+b*x)*w);else{const w=b*Math.sqrt(m*m-1);g=k=>{const C=Math.exp(-m*b*k),S=Math.min(w*k,300);return s-C*((y+m*b*x)*Math.sinh(S)+w*x*Math.cosh(S))/w}}return{calculatedDuration:f&&d||null,next:w=>{const k=g(w);if(f)o.done=w>=d;else{let C=y;w!==0&&(m<1?C=Nb(g,w,k):C=0);const S=Math.abs(C)<=r,E=Math.abs(s-k)<=t;o.done=S&&E}return o.value=o.done?s:k,o}}}function Km({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},y=j=>a!==void 0&&j<a||l!==void 0&&j>l,m=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let x=r*t;const b=h+x,v=o===void 0?b:o(b);v!==b&&(x=v-h);const g=j=>-x*Math.exp(-j/n),w=j=>v+g(j),k=j=>{const R=g(j),P=w(j);f.done=Math.abs(R)<=u,f.value=f.done?v:P};let C,S;const E=j=>{y(f.value)&&(C=j,S=Db({keyframes:[f.value,m(f.value)],velocity:Nb(w,j,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:j=>{let R=!1;return!S&&C===void 0&&(R=!0,k(j),E(j)),C!==void 0&&j>C?S.next(j-C):(!R&&k(j),f)}}}const NT=e=>{const t=({timestamp:r})=>e(r);return{start:()=>he.update(t,!0),stop:()=>$r(t),now:()=>Xe.isProcessing?Xe.timestamp:performance.now()}},Ym=2e4;function Jm(e){let t=0;const r=50;let n=e.next(t);for(;!n.done&&t<Ym;)t+=r,n=e.next(t);return t>=Ym?1/0:t}const DT={decay:Km,inertia:Km,tween:Ql,keyframes:Ql,spring:Db};function Xl({autoplay:e=!0,delay:t=0,driver:r=NT,keyframes:n,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:h,...f}){let y=1,m=!1,x,b;const v=()=>{b=new Promise(U=>{x=U})};v();let g;const w=DT[i]||Ql;let k;w!==Ql&&typeof n[0]!="number"&&(k=Lb([0,100],n,{clamp:!1}),n=[0,100]);const C=w({...f,keyframes:n});let S;a==="mirror"&&(S=w({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let E="idle",j=null,R=null,P=null;C.calculatedDuration===null&&s&&(C.calculatedDuration=Jm(C));const{calculatedDuration:L}=C;let W=1/0,re=1/0;L!==null&&(W=L+o,re=W*(s+1)-o);let ae=0;const rt=U=>{if(R===null)return;y>0&&(R=Math.min(R,U)),y<0&&(R=Math.min(U-re/y,R)),j!==null?ae=j:ae=Math.round(U-R)*y;const X=ae-t*(y>=0?1:-1),A=y>=0?X<0:X>re;ae=Math.max(X,0),E==="finished"&&j===null&&(ae=re);let Z=ae,fe=C;if(s){const K=Math.min(ae,re)/W;let ie=Math.floor(K),G=K%1;!G&&K>=1&&(G=1),G===1&&ie--,ie=Math.min(ie,s+1),!!(ie%2)&&(a==="reverse"?(G=1-G,o&&(G-=o/W)):a==="mirror"&&(fe=S)),Z=pn(0,1,G)*W}const le=A?{done:!1,value:n[0]}:fe.next(Z);k&&(le.value=k(le.value));let{done:I}=le;!A&&L!==null&&(I=y>=0?ae>=re:ae<=0);const Y=j===null&&(E==="finished"||E==="running"&&I);return h&&h(le.value),Y&&$(),le},ce=()=>{g&&g.stop(),g=void 0},Ae=()=>{E="idle",ce(),x(),v(),R=P=null},$=()=>{E="finished",d&&d(),ce(),x()},N=()=>{if(m)return;g||(g=r(rt));const U=g.now();l&&l(),j!==null?R=U-j:(!R||E==="finished")&&(R=U),E==="finished"&&v(),P=R,j=null,E="running",g.start()};e&&N();const V={then(U,X){return b.then(U,X)},get time(){return Tr(ae)},set time(U){U=un(U),ae=U,j!==null||!g||y===0?j=U:R=g.now()-U/y},get duration(){const U=C.calculatedDuration===null?Jm(C):C.calculatedDuration;return Tr(U)},get speed(){return y},set speed(U){U===y||!g||(y=U,V.time=Tr(ae))},get state(){return E},play:N,pause:()=>{E="paused",j=ae},stop:()=>{m=!0,E!=="idle"&&(E="idle",u&&u(),Ae())},cancel:()=>{P!==null&&rt(P),Ae()},complete:()=>{E="finished"},sample:U=>(R=0,rt(U))};return V}function MT(e){let t;return()=>(t===void 0&&(t=e()),t)}const UT=MT(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),FT=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ba=10,VT=2e4,BT=(e,t)=>t.type==="spring"||e==="backgroundColor"||!gb(t.ease);function qT(e,t,{onUpdate:r,onComplete:n,...i}){if(!(UT()&&FT.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,a,l,u=!1;const d=()=>{l=new Promise(w=>{a=w})};d();let{keyframes:h,duration:f=300,ease:y,times:m}=i;if(BT(t,i)){const w=Xl({...i,repeat:0,delay:0});let k={done:!1,value:h[0]};const C=[];let S=0;for(;!k.done&&S<VT;)k=w.sample(S),C.push(k.value),S+=ba;m=void 0,h=C,f=S-ba,y="linear"}const x=eT(e.owner.current,t,h,{...i,duration:f,ease:y,times:m}),b=()=>{u=!1,x.cancel()},v=()=>{u=!0,he.update(b),a(),d()};return x.onfinish=()=>{u||(e.set(tT(h,i)),n&&n(),v())},{then(w,k){return l.then(w,k)},attachTimeline(w){return x.timeline=w,x.onfinish=null,Ce},get time(){return Tr(x.currentTime||0)},set time(w){x.currentTime=un(w)},get speed(){return x.playbackRate},set speed(w){x.playbackRate=w},get duration(){return Tr(f)},play:()=>{o||(x.play(),$r(b))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:w}=x;if(w){const k=Xl({...i,autoplay:!1});e.setWithVelocity(k.sample(w-ba).value,k.sample(w).value,ba)}v()},complete:()=>{u||x.finish()},cancel:v}}function HT({keyframes:e,delay:t,onUpdate:r,onComplete:n}){const i=()=>(r&&r(e[e.length-1]),n&&n(),{time:0,speed:1,duration:0,play:Ce,pause:Ce,stop:Ce,then:s=>(s(),Promise.resolve()),cancel:Ce,complete:Ce});return t?Xl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const WT={type:"spring",stiffness:500,damping:25,restSpeed:10},GT=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),KT={type:"keyframes",duration:.8},YT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},JT=(e,{keyframes:t})=>t.length>2?KT:ti.has(e)?e.startsWith("scale")?GT(t[1]):WT:YT,Oh=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(gn.test(t)||t==="0")&&!t.startsWith("url(")),QT=new Set(["brightness","contrast","saturate","opacity"]);function XT(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=r.match(Vc)||[];if(!n)return e;const i=r.replace(n,"");let s=QT.has(t)?1:0;return n!==r&&(s*=100),t+"("+s+i+")"}const ZT=/([a-z-]*)\(.*?\)/g,$h={...gn,getAnimatableNone:e=>{const t=e.match(ZT);return t?t.map(XT).join(" "):e}},eP={...X1,color:nt,backgroundColor:nt,outlineColor:nt,fill:nt,stroke:nt,borderColor:nt,borderTopColor:nt,borderRightColor:nt,borderBottomColor:nt,borderLeftColor:nt,filter:$h,WebkitFilter:$h},Op=e=>eP[e];function Mb(e,t){let r=Op(e);return r!==$h&&(r=gn),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const Ub=e=>/^0[^.\s]+$/.test(e);function tP(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Ub(e)}function rP(e,t,r,n){const i=Oh(t,r);let s;Array.isArray(r)?s=[...r]:s=[null,r];const o=n.from!==void 0?n.from:e.get();let a;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),tP(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(a=s[u]);if(i&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];s[d]=Mb(t,a)}return s}function nP({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function $p(e,t){return e[t]||e.default||e}const iP={skipAnimations:!1},Lp=(e,t,r,n={})=>i=>{const s=$p(n,e)||{},o=s.delay||n.delay||0;let{elapsed:a=0}=n;a=a-un(o);const l=rP(t,e,r,s),u=l[0],d=l[l.length-1],h=Oh(e,u),f=Oh(e,d);let y={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{t.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(nP(s)||(y={...y,...JT(e,y)}),y.duration&&(y.duration=un(y.duration)),y.repeatDelay&&(y.repeatDelay=un(y.repeatDelay)),!h||!f||Zj.current||s.type===!1||iP.skipAnimations)return HT(y);if(!n.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=qT(t,e,y);if(m)return m}return Xl(y)};function Zl(e){return!!(mt(e)&&e.add)}const Fb=e=>/^\-?\d*\.?\d+$/.test(e);function zp(e,t){e.indexOf(t)===-1&&e.push(t)}function Np(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class Dp{constructor(){this.subscriptions=[]}add(t){return zp(this.subscriptions,t),()=>Np(this.subscriptions,t)}notify(t,r,n){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,r,n);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const sP=e=>!isNaN(parseFloat(e));class oP{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,i=!0)=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=Xe;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,he.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>he.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=sP(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Dp);const n=this.events[t].add(r);return t==="change"?()=>{n(),he.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,n){this.set(r),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?zb(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rs(e,t){return new oP(e,t)}const Vb=e=>t=>t.test(e),aP={test:e=>e==="auto",parse:e=>e},Bb=[ri,H,mr,Fr,pj,fj,aP],bs=e=>Bb.find(Vb(e)),lP=[...Bb,nt,gn],cP=e=>lP.find(Vb(e));function uP(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,rs(r))}function dP(e,t){const r=qc(e,t);let{transitionEnd:n={},transition:i={},...s}=r?e.makeTargetAnimatable(r,!1):{};s={...s,...n};for(const o in s){const a=Tj(s[o]);uP(e,o,a)}}function hP(e,t,r){var n,i;const s=Object.keys(t).filter(a=>!e.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(i=(n=r[l])!==null&&n!==void 0?n:e.readValue(l))!==null&&i!==void 0?i:t[l]),d!=null&&(typeof d=="string"&&(Fb(d)||Ub(d))?d=parseFloat(d):!cP(d)&&gn.test(u)&&(d=Mb(l,u)),e.addValue(l,rs(d,{owner:e})),r[l]===void 0&&(r[l]=d),d!==null&&e.setBaseTarget(l,d))}}function fP(e,t){return t?(t[e]||t.default||t).from:void 0}function pP(e,t,r){const n={};for(const i in e){const s=fP(i,t);if(s!==void 0)n[i]=s;else{const o=r.getValue(i);o&&(n[i]=o.get())}}return n}function gP({protectedKeys:e,needsAnimating:t},r){const n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function mP(e,t){const r=e.get();if(Array.isArray(t)){for(let n=0;n<t.length;n++)if(t[n]!==r)return!0}else return r!==t}function qb(e,t,{delay:r=0,transitionOverride:n,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");n&&(s=n);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const h in a){const f=e.getValue(h),y=a[h];if(!f||y===void 0||d&&gP(d,h))continue;const m={delay:r,elapsed:0,...$p(s||{},h)};if(window.HandoffAppearAnimations){const v=e.getProps()[H1];if(v){const g=window.HandoffAppearAnimations(v,h,f,he);g!==null&&(m.elapsed=g,m.isHandoff=!0)}}let x=!m.isHandoff&&!mP(f,y);if(m.type==="spring"&&(f.getVelocity()||m.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(Lp(h,f,y,e.shouldReduceMotion&&ti.has(h)?{type:!1}:m));const b=f.animation;Zl(l)&&(l.add(h),b.then(()=>l.remove(h))),u.push(b)}return o&&Promise.all(u).then(()=>{o&&dP(e,o)}),u}function Lh(e,t,r={}){const n=qc(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(i=r.transitionOverride);const s=n?()=>Promise.all(qb(e,n,r)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=i;return vP(e,t,u+l,d,h,r)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(r.delay)])}function vP(e,t,r=0,n=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*n,l=i===1?(u=0)=>u*n:(u=0)=>a-u*n;return Array.from(e.variantChildren).sort(yP).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Lh(u,t,{...s,delay:r+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function yP(e,t){return e.sortNodePosition(t)}function wP(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const i=t.map(s=>Lh(e,s,r));n=Promise.all(i)}else if(typeof t=="string")n=Lh(e,t,r);else{const i=typeof t=="function"?qc(e,t,r.custom):t;n=Promise.all(qb(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}const xP=[...wp].reverse(),bP=wp.length;function SP(e){return t=>Promise.all(t.map(({animation:r,options:n})=>wP(e,r,n)))}function kP(e){let t=SP(e);const r=EP();let n=!0;const i=(l,u)=>{const d=qc(e,u);if(d){const{transition:h,transitionEnd:f,...y}=d;l={...l,...y,...f}}return l};function s(l){t=l(e)}function o(l,u){const d=e.getProps(),h=e.getVariantContext(!0)||{},f=[],y=new Set;let m={},x=1/0;for(let v=0;v<bP;v++){const g=xP[v],w=r[g],k=d[g]!==void 0?d[g]:h[g],C=So(k),S=g===u?w.isActive:null;S===!1&&(x=v);let E=k===h[g]&&k!==d[g]&&C;if(E&&n&&e.manuallyAnimateOnMount&&(E=!1),w.protectedKeys={...m},!w.isActive&&S===null||!k&&!w.prevProp||Uc(k)||typeof k=="boolean")continue;let R=_P(w.prevProp,k)||g===u&&w.isActive&&!E&&C||v>x&&C,P=!1;const L=Array.isArray(k)?k:[k];let W=L.reduce(i,{});S===!1&&(W={});const{prevResolvedValues:re={}}=w,ae={...re,...W},rt=ce=>{R=!0,y.has(ce)&&(P=!0,y.delete(ce)),w.needsAnimating[ce]=!0};for(const ce in ae){const Ae=W[ce],$=re[ce];if(m.hasOwnProperty(ce))continue;let N=!1;Yl(Ae)&&Yl($)?N=!fb(Ae,$):N=Ae!==$,N?Ae!==void 0?rt(ce):y.add(ce):Ae!==void 0&&y.has(ce)?rt(ce):w.protectedKeys[ce]=!0}w.prevProp=k,w.prevResolvedValues=W,w.isActive&&(m={...m,...W}),n&&e.blockInitialAnimation&&(R=!1),R&&(!E||P)&&f.push(...L.map(ce=>({animation:ce,options:{type:g,...l}})))}if(y.size){const v={};y.forEach(g=>{const w=e.getBaseTarget(g);w!==void 0&&(v[g]=w)}),f.push({animation:v})}let b=!!f.length;return n&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(b=!1),n=!1,b?t(f):Promise.resolve()}function a(l,u,d){var h;if(r[l].isActive===u)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(y=>{var m;return(m=y.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),r[l].isActive=u;const f=o(d,l);for(const y in r)r[y].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>r}}function _P(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!fb(t,e):!1}function kn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function EP(){return{animate:kn(!0),whileInView:kn(),whileHover:kn(),whileTap:kn(),whileDrag:kn(),whileFocus:kn(),exit:kn()}}class CP extends xn{constructor(t){super(t),t.animationState||(t.animationState=kP(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Uc(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let jP=0;class TP extends xn{constructor(){super(...arguments),this.id=jP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:n??this.node.getProps().custom});r&&!t&&s.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const PP={animation:{Feature:CP},exit:{Feature:TP}},Qm=(e,t)=>Math.abs(e-t);function AP(e,t){const r=Qm(e.x,t.x),n=Qm(e.y,t.y);return Math.sqrt(r**2+n**2)}class Hb{constructor(t,r,{transformPagePoint:n,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Bu(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=AP(h.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:m}=h,{timestamp:x}=Xe;this.history.push({...m,timestamp:x});const{onStart:b,onMove:v}=this.handlers;f||(b&&b(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Vu(f,this.transformPagePoint),he.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Bu(h.type==="pointercancel"?this.lastMoveEventInfo:Vu(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(h,b),m&&m(h,b)},!lb(t))return;this.dragSnapToOrigin=s,this.handlers=r,this.transformPagePoint=n,this.contextWindow=i||window;const o=Bc(t),a=Vu(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Xe;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=r;d&&d(t,Bu(a,this.history)),this.removeListeners=cn(jr(this.contextWindow,"pointermove",this.handlePointerMove),jr(this.contextWindow,"pointerup",this.handlePointerUp),jr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),$r(this.updatePoint)}}function Vu(e,t){return t?{point:t(e.point)}:e}function Xm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Bu({point:e},t){return{point:e,delta:Xm(e,Wb(t)),offset:Xm(e,RP(t)),velocity:IP(t,.1)}}function RP(e){return e[0]}function Wb(e){return e[e.length-1]}function IP(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const i=Wb(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>un(t)));)r--;if(!n)return{x:0,y:0};const s=Tr(i.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-n.x)/s,y:(i.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Tt(e){return e.max-e.min}function zh(e,t=0,r=.01){return Math.abs(e-t)<=r}function Zm(e,t,r,n=.5){e.origin=n,e.originPoint=be(t.min,t.max,e.origin),e.scale=Tt(r)/Tt(t),(zh(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=be(r.min,r.max,e.origin)-e.originPoint,(zh(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Js(e,t,r,n){Zm(e.x,t.x,r.x,n?n.originX:void 0),Zm(e.y,t.y,r.y,n?n.originY:void 0)}function ev(e,t,r){e.min=r.min+t.min,e.max=e.min+Tt(t)}function OP(e,t,r){ev(e.x,t.x,r.x),ev(e.y,t.y,r.y)}function tv(e,t,r){e.min=t.min-r.min,e.max=e.min+Tt(t)}function Qs(e,t,r){tv(e.x,t.x,r.x),tv(e.y,t.y,r.y)}function $P(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?be(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?be(r,e,n.max):Math.min(e,r)),e}function rv(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function LP(e,{top:t,left:r,bottom:n,right:i}){return{x:rv(e.x,r,i),y:rv(e.y,t,n)}}function nv(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function zP(e,t){return{x:nv(e.x,t.x),y:nv(e.y,t.y)}}function NP(e,t){let r=.5;const n=Tt(e),i=Tt(t);return i>n?r=_o(t.min,t.max-n,e.min):n>i&&(r=_o(e.min,e.max-i,t.min)),pn(0,1,r)}function DP(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Nh=.35;function MP(e=Nh){return e===!1?e=0:e===!0&&(e=Nh),{x:iv(e,"left","right"),y:iv(e,"top","bottom")}}function iv(e,t,r){return{min:sv(e,t),max:sv(e,r)}}function sv(e,t){return typeof e=="number"?e:e[t]||0}const ov=()=>({translate:0,scale:1,origin:0,originPoint:0}),$i=()=>({x:ov(),y:ov()}),av=()=>({min:0,max:0}),Re=()=>({x:av(),y:av()});function $t(e){return[e("x"),e("y")]}function Gb({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function UP({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function FP(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function qu(e){return e===void 0||e===1}function Dh({scale:e,scaleX:t,scaleY:r}){return!qu(e)||!qu(t)||!qu(r)}function Tn(e){return Dh(e)||Kb(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Kb(e){return lv(e.x)||lv(e.y)}function lv(e){return e&&e!=="0%"}function ec(e,t,r){const n=e-r,i=t*n;return r+i}function cv(e,t,r,n,i){return i!==void 0&&(e=ec(e,i,n)),ec(e,r,n)+t}function Mh(e,t=0,r=1,n,i){e.min=cv(e.min,t,r,n,i),e.max=cv(e.max,t,r,n,i)}function Yb(e,{x:t,y:r}){Mh(e.x,t.translate,t.scale,t.originPoint),Mh(e.y,r.translate,r.scale,r.originPoint)}function VP(e,t,r,n=!1){const i=r.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=r[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Li(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Yb(e,o)),n&&Tn(s.latestValues)&&Li(e,s.latestValues))}t.x=uv(t.x),t.y=uv(t.y)}function uv(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function qr(e,t){e.min=e.min+t,e.max=e.max+t}function dv(e,t,[r,n,i]){const s=t[i]!==void 0?t[i]:.5,o=be(e.min,e.max,s);Mh(e,t[r],t[n],o,t.scale)}const BP=["x","scaleX","originX"],qP=["y","scaleY","originY"];function Li(e,t){dv(e.x,t,BP),dv(e.y,t,qP)}function Jb(e,t){return Gb(FP(e.getBoundingClientRect(),t))}function HP(e,t,r){const n=Jb(e,r),{scroll:i}=t;return i&&(qr(n.x,i.offset.x),qr(n.y,i.offset.y)),n}const Qb=({current:e})=>e?e.ownerDocument.defaultView:null,WP=new WeakMap;class GP{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Bc(d,"page").point)},s=(d,h)=>{const{drag:f,dragPropagation:y,onDragStart:m}=this.getProps();if(f&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ub(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(b=>{let v=this.getAxisMotionValue(b).get()||0;if(mr.test(v)){const{projection:g}=this.visualElement;if(g&&g.layout){const w=g.layout.layoutBox[b];w&&(v=Tt(w)*(parseFloat(v)/100))}}this.originPoint[b]=v}),m&&he.update(()=>m(d,h),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,h)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:m,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:b}=h;if(y&&this.currentDirection===null){this.currentDirection=KP(b),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,b),this.updateAxis("y",h.point,b),this.visualElement.render(),x&&x(d,h)},a=(d,h)=>this.stop(d,h),l=()=>$t(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Hb(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Qb(this.visualElement)})}stop(t,r){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=r;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&he.update(()=>s(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,n){const{drag:i}=this.getProps();if(!n||!Sa(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(o=$P(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;r&&Ii(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&i?this.constraints=LP(i.layoutBox,r):this.constraints=!1,this.elastic=MP(n),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&$t(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=DP(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Ii(t))return!1;const n=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=HP(n,i.root,this.visualElement.getTransformPagePoint());let o=zP(i.layout.layoutBox,s);if(r){const a=r(UP(o));this.hasMutatedConstraints=!!a,a&&(o=Gb(a))}return o}startAnimation(t){const{drag:r,dragMomentum:n,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=$t(d=>{if(!Sa(d,r,this.currentDirection))return;let h=l&&l[d]||{};o&&(h={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,m={type:"inertia",velocity:n?t[d]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...h};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,r){const n=this.getAxisMotionValue(t);return n.start(Lp(t,n,0,r))}stopAnimation(){$t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){$t(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),i=n[r];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){$t(r=>{const{drag:n}=this.getProps();if(!Sa(r,n,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(r);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[r];s.set(t[r]-be(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!Ii(r)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};$t(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();i[o]=NP({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),$t(o=>{if(!Sa(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(be(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;WP.set(this.visualElement,this);const t=this.visualElement.current,r=jr(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();Ii(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",n);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),n();const o=_r(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&($t(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),r(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Nh,dragMomentum:a=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Sa(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function KP(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class YP extends xn{constructor(t){super(t),this.removeGroupControls=Ce,this.removeListeners=Ce,this.controls=new GP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ce}unmount(){this.removeGroupControls(),this.removeListeners()}}const hv=e=>(t,r)=>{e&&he.update(()=>e(t,r))};class JP extends xn{constructor(){super(...arguments),this.removePointerDownListener=Ce}onPointerDown(t){this.session=new Hb(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qb(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:hv(t),onStart:hv(r),onMove:n,onEnd:(s,o)=>{delete this.session,i&&he.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=jr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function QP(){const e=_.useContext(Dc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:n}=e,i=_.useId();return _.useEffect(()=>n(i),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}const hl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fv(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ss={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(H.test(e))e=parseFloat(e);else return e;const r=fv(e,t.target.x),n=fv(e,t.target.y);return`${r}% ${n}%`}},XP={correct:(e,{treeScale:t,projectionDelta:r})=>{const n=e,i=gn.parse(e);if(i.length>5)return n;const s=gn.createTransformer(e),o=typeof i[0]!="number"?1:0,a=r.x.scale*t.x,l=r.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=be(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class ZP extends ir.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:i}=this.props,{projection:s}=t;oj(eA),s&&(r.group&&r.group.add(s),n&&n.register&&i&&n.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),hl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:n,drag:i,isPresent:s}=this.props,o=n.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==r||r===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||he.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Xb(e){const[t,r]=QP(),n=_.useContext(bp);return ir.createElement(ZP,{...e,layoutGroup:n,switchLayoutGroup:_.useContext(G1),isPresent:t,safeToRemove:r})}const eA={borderRadius:{...Ss,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ss,borderTopRightRadius:Ss,borderBottomLeftRadius:Ss,borderBottomRightRadius:Ss,boxShadow:XP},Zb=["TopLeft","TopRight","BottomLeft","BottomRight"],tA=Zb.length,pv=e=>typeof e=="string"?parseFloat(e):e,gv=e=>typeof e=="number"||H.test(e);function rA(e,t,r,n,i,s){i?(e.opacity=be(0,r.opacity!==void 0?r.opacity:1,nA(n)),e.opacityExit=be(t.opacity!==void 0?t.opacity:1,0,iA(n))):s&&(e.opacity=be(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,n));for(let o=0;o<tA;o++){const a=`border${Zb[o]}Radius`;let l=mv(t,a),u=mv(r,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||gv(l)===gv(u)?(e[a]=Math.max(be(pv(l),pv(u),n),0),(mr.test(u)||mr.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||r.rotate)&&(e.rotate=be(t.rotate||0,r.rotate||0,n))}function mv(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const nA=eS(0,.5,Sb),iA=eS(.5,.95,Ce);function eS(e,t,r){return n=>n<e?0:n>t?1:r(_o(e,t,n))}function vv(e,t){e.min=t.min,e.max=t.max}function Rt(e,t){vv(e.x,t.x),vv(e.y,t.y)}function yv(e,t,r,n,i){return e-=t,e=ec(e,1/r,n),i!==void 0&&(e=ec(e,1/i,n)),e}function sA(e,t=0,r=1,n=.5,i,s=e,o=e){if(mr.test(t)&&(t=parseFloat(t),t=be(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=be(s.min,s.max,n);e===s&&(a-=t),e.min=yv(e.min,t,r,a,i),e.max=yv(e.max,t,r,a,i)}function wv(e,t,[r,n,i],s,o){sA(e,t[r],t[n],t[i],t.scale,s,o)}const oA=["x","scaleX","originX"],aA=["y","scaleY","originY"];function xv(e,t,r,n){wv(e.x,t,oA,r?r.x:void 0,n?n.x:void 0),wv(e.y,t,aA,r?r.y:void 0,n?n.y:void 0)}function bv(e){return e.translate===0&&e.scale===1}function tS(e){return bv(e.x)&&bv(e.y)}function lA(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function rS(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Sv(e){return Tt(e.x)/Tt(e.y)}class cA{constructor(){this.members=[]}add(t){zp(this.members,t),t.scheduleRender()}remove(t){if(Np(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(i=>t===i);if(r===0)return!1;let n;for(let i=r;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){n=s;break}}return n?(this.promote(n),!0):!1}promote(t,r){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,r&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:n}=t;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kv(e,t,r){let n="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(n=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:l,rotateX:u,rotateY:d}=r;l&&(n+=`rotate(${l}deg) `),u&&(n+=`rotateX(${u}deg) `),d&&(n+=`rotateY(${d}deg) `)}const o=e.x.scale*t.x,a=e.y.scale*t.y;return(o!==1||a!==1)&&(n+=`scale(${o}, ${a})`),n||"none"}const uA=(e,t)=>e.depth-t.depth;class dA{constructor(){this.children=[],this.isDirty=!1}add(t){zp(this.children,t),this.isDirty=!0}remove(t){Np(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(uA),this.isDirty=!1,this.children.forEach(t)}}function hA(e,t){const r=performance.now(),n=({timestamp:i})=>{const s=i-r;s>=t&&($r(n),e(s-t))};return he.read(n,!0),()=>$r(n)}function fA(e){window.MotionDebug&&window.MotionDebug.record(e)}function pA(e){return e instanceof SVGElement&&e.tagName!=="svg"}function gA(e,t,r){const n=mt(e)?e:rs(e);return n.start(Lp("",n,t,r)),n.animation}const _v=["","X","Y","Z"],mA={visibility:"hidden"},Ev=1e3;let vA=0;const Pn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function nS({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=vA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pn.totalNodes=Pn.resolvedTargetDeltas=Pn.recalculatedProjection=0,this.nodes.forEach(xA),this.nodes.forEach(EA),this.nodes.forEach(CA),this.nodes.forEach(bA),fA(Pn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new dA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Dp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=pA(o),this.instance=o;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let h;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=hA(f,250),hl.hasAnimatedSinceResize&&(hl.hasAnimatedSinceResize=!1,this.nodes.forEach(jv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||RA,{onLayoutAnimationStart:b,onLayoutAnimationComplete:v}=d.getProps(),g=!this.targetLayout||!rS(this.targetLayout,m)||y,w=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||w||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,w);const k={...$p(x,"layout"),onPlay:b,onComplete:v};(d.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k)}else f||jv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,$r(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jA),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Cv);return}this.isUpdating||this.nodes.forEach(kA),this.isUpdating=!1,this.nodes.forEach(_A),this.nodes.forEach(yA),this.nodes.forEach(wA),this.clearAllSnapshots();const a=performance.now();Xe.delta=pn(0,1e3/60,a-Xe.timestamp),Xe.timestamp=a,Xe.isProcessing=!0,$u.update.process(Xe),$u.preRender.process(Xe),$u.render.process(Xe),Xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(SA),this.sharedNodes.forEach(TA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,he.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){he.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!tS(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(a||Tn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),IA(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Re();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(qr(a.x,l.offset.x),qr(a.y,l.offset.y)),a}removeElementScroll(o){const a=Re();Rt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:h}=u;if(u!==this.root&&d&&h.layoutScroll){if(d.isRoot){Rt(a,o);const{scroll:f}=this.root;f&&(qr(a.x,-f.offset.x),qr(a.y,-f.offset.y))}qr(a.x,d.offset.x),qr(a.y,d.offset.y)}}return a}applyTransform(o,a=!1){const l=Re();Rt(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Li(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Tn(d.latestValues)&&Li(l,d.latestValues)}return Tn(this.latestValues)&&Li(l,this.latestValues),l}removeTransform(o){const a=Re();Rt(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Tn(u.latestValues))continue;Dh(u.latestValues)&&u.updateSnapshot();const d=Re(),h=u.measurePageBox();Rt(d,h),xv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Tn(this.latestValues)&&xv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=Xe.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Qs(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),OP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rt(this.target,this.layout.layoutBox),Yb(this.target,this.targetDelta)):Rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Qs(this.relativeTargetOrigin,this.target,y.target),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Dh(this.parent.latestValues)||Kb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Xe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;Rt(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;VP(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=$i(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=$i(),this.projectionDeltaWithTransform=$i());const x=this.projectionTransform;Js(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=kv(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Pn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},h=$i();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Re(),y=l?l.source:void 0,m=this.layout?this.layout.source:void 0,x=y!==m,b=this.getStack(),v=!b||b.members.length<=1,g=!!(x&&!v&&this.options.crossfade===!0&&!this.path.some(AA));this.animationProgress=0;let w;this.mixTargetDelta=k=>{const C=k/1e3;Tv(h.x,o.x,C),Tv(h.y,o.y,C),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qs(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),PA(this.relativeTarget,this.relativeTargetOrigin,f,C),w&&lA(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Re()),Rt(w,this.relativeTarget)),x&&(this.animationValues=d,rA(d,u,this.latestValues,C,g,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&($r(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=he.update(()=>{hl.hasAnimatedSinceResize=!0,this.currentAnimation=gA(0,Ev,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ev),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&iS(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Re();const h=Tt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const f=Tt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Rt(a,l),Li(a,d),Js(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cA),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<_v.length;d++){const h="rotate"+_v[d];l[h]&&(u[h]=l[h],o.setStaticValue(h,0))}o.render();for(const d in u)o.setStaticValue(d,u[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return mA;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=dl(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=dl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Tn(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),u.transform=kv(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:y,y:m}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${m.origin*100}% 0`,h.animationValues?u.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in Gl){if(f[x]===void 0)continue;const{correct:b,applyTo:v}=Gl[x],g=u.transform==="none"?f[x]:b(f[x],h);if(v){const w=v.length;for(let k=0;k<w;k++)u[v[k]]=g}else u[x]=g}return this.options.layoutId&&(u.pointerEvents=h===this?dl(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Cv),this.root.sharedNodes.clear()}}}function yA(e){e.updateLayout()}function wA(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:i}=e.layout,{animationType:s}=e.options,o=r.source!==e.layout.source;s==="size"?$t(h=>{const f=o?r.measuredBox[h]:r.layoutBox[h],y=Tt(f);f.min=n[h].min,f.max=f.min+y}):iS(s,r.layoutBox,n)&&$t(h=>{const f=o?r.measuredBox[h]:r.layoutBox[h],y=Tt(n[h]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+y)});const a=$i();Js(a,n,r.layoutBox);const l=$i();o?Js(l,e.applyTransform(i,!0),r.measuredBox):Js(l,n,r.layoutBox);const u=!tS(a);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:y}=h;if(f&&y){const m=Re();Qs(m,r.layoutBox,f.layoutBox);const x=Re();Qs(x,n,y.layoutBox),rS(m,x)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=m,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:r,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function xA(e){Pn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function bA(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function SA(e){e.clearSnapshot()}function Cv(e){e.clearMeasurements()}function kA(e){e.isLayoutDirty=!1}function _A(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function jv(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function EA(e){e.resolveTargetDelta()}function CA(e){e.calcProjection()}function jA(e){e.resetRotation()}function TA(e){e.removeLeadSnapshot()}function Tv(e,t,r){e.translate=be(t.translate,0,r),e.scale=be(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function Pv(e,t,r,n){e.min=be(t.min,r.min,n),e.max=be(t.max,r.max,n)}function PA(e,t,r,n){Pv(e.x,t.x,r.x,n),Pv(e.y,t.y,r.y,n)}function AA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const RA={duration:.45,ease:[.4,0,.1,1]},Av=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Rv=Av("applewebkit/")&&!Av("chrome/")?Math.round:Ce;function Iv(e){e.min=Rv(e.min),e.max=Rv(e.max)}function IA(e){Iv(e.x),Iv(e.y)}function iS(e,t,r){return e==="position"||e==="preserve-aspect"&&!zh(Sv(t),Sv(r),.2)}const OA=nS({attachResizeListener:(e,t)=>_r(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Hu={current:void 0},sS=nS({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Hu.current){const e=new OA({});e.mount(window),e.setOptions({layoutScroll:!0}),Hu.current=e}return Hu.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$A={pan:{Feature:JP},drag:{Feature:YP,ProjectionNode:sS,MeasureLayout:Xb}},LA=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function zA(e){const t=LA.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]}function Uh(e,t,r=1){const[n,i]=zA(e);if(!n)return;const s=window.getComputedStyle(t).getPropertyValue(n);if(s){const o=s.trim();return Fb(o)?parseFloat(o):o}else return Ph(i)?Uh(i,t,r+1):i}function NA(e,{...t},r){const n=e.current;if(!(n instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),e.values.forEach(i=>{const s=i.get();if(!Ph(s))return;const o=Uh(s,n);o&&i.set(o)});for(const i in t){const s=t[i];if(!Ph(s))continue;const o=Uh(s,n);o&&(t[i]=o,r||(r={}),r[i]===void 0&&(r[i]=s))}return{target:t,transitionEnd:r}}const DA=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),oS=e=>DA.has(e),MA=e=>Object.keys(e).some(oS),Ov=e=>e===ri||e===H,$v=(e,t)=>parseFloat(e.split(", ")[t]),Lv=(e,t)=>(r,{transform:n})=>{if(n==="none"||!n)return 0;const i=n.match(/^matrix3d\((.+)\)$/);if(i)return $v(i[1],t);{const s=n.match(/^matrix\((.+)\)$/);return s?$v(s[1],e):0}},UA=new Set(["x","y","z"]),FA=Bo.filter(e=>!UA.has(e));function VA(e){const t=[];return FA.forEach(r=>{const n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}const ns={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Lv(4,13),y:Lv(5,14)};ns.translateX=ns.x;ns.translateY=ns.y;const BA=(e,t,r)=>{const n=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,a={};o==="none"&&t.setStaticValue("display",e.display||"block"),r.forEach(u=>{a[u]=ns[u](n,s)}),t.render();const l=t.measureViewportBox();return r.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=ns[u](l,s)}),e},qA=(e,t,r={},n={})=>{t={...t},n={...n};const i=Object.keys(t).filter(oS);let s=[],o=!1;const a=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=r[l],h=bs(d);const f=t[l];let y;if(Yl(f)){const m=f.length,x=f[0]===null?1:0;d=f[x],h=bs(d);for(let b=x;b<m&&f[b]!==null;b++)y?Pp(bs(f[b])===y):y=bs(f[b])}else y=bs(f);if(h!==y)if(Ov(h)&&Ov(y)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&y===H&&(t[l]=f.map(parseFloat))}else h!=null&&h.transform&&(y!=null&&y.transform)&&(d===0||f===0)?d===0?u.set(y.transform(d)):t[l]=h.transform(f):(o||(s=VA(e),o=!0),a.push(l),n[l]=n[l]!==void 0?n[l]:t[l],u.jump(f))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=BA(t,e,a);return s.length&&s.forEach(([d,h])=>{e.getValue(d).set(h)}),e.render(),Mc&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:n}}else return{target:t,transitionEnd:n}};function HA(e,t,r,n){return MA(t)?qA(e,t,r,n):{target:t,transitionEnd:n}}const WA=(e,t,r,n)=>{const i=NA(e,t,n);return t=i.target,n=i.transitionEnd,HA(e,t,r,n)},Fh={current:null},aS={current:!1};function GA(){if(aS.current=!0,!!Mc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Fh.current=e.matches;e.addListener(t),t()}else Fh.current=!1}function KA(e,t,r){const{willChange:n}=t;for(const i in t){const s=t[i],o=r[i];if(mt(s))e.addValue(i,s),Zl(n)&&n.add(i);else if(mt(o))e.addValue(i,rs(s,{owner:e})),Zl(n)&&n.remove(i);else if(o!==s)if(e.hasValue(i)){const a=e.getValue(i);!a.hasAnimated&&a.set(s)}else{const a=e.getStaticValue(i);e.addValue(i,rs(a!==void 0?a:s,{owner:e}))}}for(const i in r)t[i]===void 0&&e.removeValue(i);return t}const zv=new WeakMap,lS=Object.keys(ko),YA=lS.length,Nv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],JA=xp.length;class QA{constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>he.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=r.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Fc(r),this.isVariantNode=W1(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(r,{});for(const h in d){const f=d[h];a[h]!==void 0&&mt(f)&&(f.set(a[h],!1),Zl(u)&&u.add(h))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,zv.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),aS.current||GA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Fh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){zv.delete(this.current),this.projection&&this.projection.unmount(),$r(this.notifyUpdate),$r(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const n=ti.has(t),i=r.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&he.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),s=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},n,i,s){let o,a;for(let l=0;l<YA;l++){const u=lS[l],{isEnabled:d,Feature:h,ProjectionNode:f,MeasureLayout:y}=ko[u];f&&(o=f),d(r)&&(!this.features[u]&&h&&(this.features[u]=new h(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:y}=r;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||h&&Ii(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Nv.length;n++){const i=Nv[n];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=KA(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const r={};for(let n=0;n<JA;n++){const i=xp[n],s=this.props[i];(So(s)||s===!1)&&(r[i]=s)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=rs(r,{owner:this}),this.addValue(t,n)),n}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:n}=this.props,i=typeof n=="string"||typeof n=="object"?(r=Tp(this.props,n))===null||r===void 0?void 0:r[t]:void 0;if(n&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!mt(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Dp),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class cS extends QA{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...n},{transformValues:i},s){let o=pP(n,t||{},this);if(i&&(r&&(r=i(r)),n&&(n=i(n)),o&&(o=i(o))),s){hP(this,n,o);const a=WA(this,n,o,r);r=a.transitionEnd,n=a.target}return{transition:t,transitionEnd:r,...n}}}function XA(e){return window.getComputedStyle(e)}class ZA extends cS{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(ti.has(r)){const n=Op(r);return n&&n.default||0}else{const n=XA(t),i=(J1(r)?n.getPropertyValue(r):n[r])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:r}){return Jb(t,r)}build(t,r,n,i){kp(t,r,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,r){return jp(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;mt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,n,i){rb(t,r,n,i)}}class eR extends cS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(ti.has(r)){const n=Op(r);return n&&n.default||0}return r=nb.has(r)?r:yp(r),t.getAttribute(r)}measureInstanceViewportBox(){return Re()}scrapeMotionValuesFromProps(t,r){return sb(t,r)}build(t,r,n,i){Ep(t,r,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,r,n,i){ib(t,r,n,i)}mount(t){this.isSVGTag=Cp(t.tagName),super.mount(t)}}const tR=(e,t)=>Sp(e)?new eR(t,{enableHardwareAcceleration:!1}):new ZA(t,{enableHardwareAcceleration:!0}),rR={layout:{ProjectionNode:sS,MeasureLayout:Xb}},nR={...PP,...Yj,...$A,...rR},F=ij((e,t)=>zj(e,t,nR,tR));function uS(){const e=_.useRef(!1);return vp(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function iR(){const e=uS(),[t,r]=_.useState(0),n=_.useCallback(()=>{e.current&&r(t+1)},[t]);return[_.useCallback(()=>he.postRender(n),[n]),t]}class sR extends _.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=r.offsetHeight||0,n.width=r.offsetWidth||0,n.top=r.offsetTop,n.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function oR({children:e,isPresent:t}){const r=_.useId(),n=_.useRef(null),i=_.useRef({width:0,height:0,top:0,left:0});return _.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=i.current;if(t||!n.current||!s||!o)return;n.current.dataset.motionPopId=r;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),_.createElement(sR,{isPresent:t,childRef:n,sizeRef:i},_.cloneElement(e,{ref:n}))}const Wu=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=ob(aR),l=_.useId(),u=_.useMemo(()=>({id:l,initial:t,isPresent:r,custom:i,onExitComplete:d=>{a.set(d,!0);for(const h of a.values())if(!h)return;n&&n()},register:d=>(a.set(d,!1),()=>a.delete(d))}),s?void 0:[r]);return _.useMemo(()=>{a.forEach((d,h)=>a.set(h,!1))},[r]),_.useEffect(()=>{!r&&!a.size&&n&&n()},[r]),o==="popLayout"&&(e=_.createElement(oR,{isPresent:r},e)),_.createElement(Dc.Provider,{value:u},e)};function aR(){return new Map}function lR(e){return _.useEffect(()=>()=>e(),[])}const An=e=>e.key||"";function cR(e,t){e.forEach(r=>{const n=An(r);t.set(n,r)})}function uR(e){const t=[];return _.Children.forEach(e,r=>{_.isValidElement(r)&&t.push(r)}),t}const bn=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=_.useContext(bp).forceRender||iR()[0],l=uS(),u=uR(e);let d=u;const h=_.useRef(new Map).current,f=_.useRef(d),y=_.useRef(new Map).current,m=_.useRef(!0);if(vp(()=>{m.current=!1,cR(u,y),f.current=d}),lR(()=>{m.current=!0,y.clear(),h.clear()}),m.current)return _.createElement(_.Fragment,null,d.map(g=>_.createElement(Wu,{key:An(g),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:s,mode:o},g)));d=[...d];const x=f.current.map(An),b=u.map(An),v=x.length;for(let g=0;g<v;g++){const w=x[g];b.indexOf(w)===-1&&!h.has(w)&&h.set(w,void 0)}return o==="wait"&&h.size&&(d=[]),h.forEach((g,w)=>{if(b.indexOf(w)!==-1)return;const k=y.get(w);if(!k)return;const C=x.indexOf(w);let S=g;if(!S){const E=()=>{h.delete(w);const j=Array.from(y.keys()).filter(R=>!b.includes(R));if(j.forEach(R=>y.delete(R)),f.current=u.filter(R=>{const P=An(R);return P===w||j.includes(P)}),!h.size){if(l.current===!1)return;a(),n&&n()}};S=_.createElement(Wu,{key:An(k),isPresent:!1,onExitComplete:E,custom:t,presenceAffectsLayout:s,mode:o},k),h.set(w,S)}d.splice(C,0,S)}),d=d.map(g=>{const w=g.key;return h.has(w)?g:_.createElement(Wu,{key:An(g),isPresent:!0,presenceAffectsLayout:s,mode:o},g)}),_.createElement(_.Fragment,null,h.size?d:d.map(g=>_.cloneElement(g)))};var dR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const hR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fR=(e,t)=>{const r=_.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},u)=>_.createElement("svg",{ref:u,...dR,width:i,height:i,stroke:n,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${hR(e)}`,...l},[...t.map(([d,h])=>_.createElement(d,h)),...(Array.isArray(a)?a:[a])||[]]));return r.displayName=`${e}`,r};var M=fR;const Eo=M("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),pR=M("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),dS=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),dn=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),hS=M("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Co=M("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),is=M("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Gu=M("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),gR=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),mR=M("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),vR=M("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),yR=M("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]),wR=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),xR=M("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]),bR=M("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),SR=M("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),kR=M("Gift",[["polyline",{points:"20 12 20 22 4 22 4 12",key:"nda8fc"}],["rect",{width:"20",height:"5",x:"2",y:"7",key:"wkgdzj"}],["line",{x1:"12",x2:"12",y1:"22",y2:"7",key:"1n8zgp"}],["path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z",key:"zighg4"}],["path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",key:"1pa5tk"}]]),Mp=M("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),_R=M("Grid",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"3",y2:"21",key:"13tij5"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}]]),or=M("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ER=M("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),Vh=M("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),fS=M("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),pS=M("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),CR=M("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),jR=M("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),tc=M("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),TR=M("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]),gS=M("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Up=M("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),PR=M("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),mS=M("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),AR=M("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),Bh=M("Package",[["path",{d:"M16.5 9.4 7.55 4.24",key:"10qotr"}],["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),Dv=M("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]),RR=M("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Mv=M("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),qh=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),IR=M("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]),OR=M("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]),Fp=M("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Uv=M("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),$R=M("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Vp=M("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),LR=M("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),rc=M("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]),Go=M("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),zR=M("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),vS=M("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Ko=M("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),jo=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),NR=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),DR=M("Truck",[["path",{d:"M10 17h4V5H2v12h3",key:"1jq12e"}],["path",{d:"M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5",key:"1xb3ft"}],["path",{d:"M14 17h1",key:"nufu4t"}],["circle",{cx:"7.5",cy:"17.5",r:"2.5",key:"a7aife"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),MR=M("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),nc=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Hc=M("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),fl=M("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]),rr=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yS=_.createContext(void 0),UR=p.div`
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`,FR=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-4);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${e=>{switch(e.type){case"success":return"#10B981";case"error":return"#EF4444";case"warning":return"#F59E0B";case"info":return"#d13296";default:return"var(--gray-400)"}}};
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`,VR=p.div`
  flex: 1;
`,BR=p.h4`
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-1);
  color: var(--gray-900);
`,qR=p.p`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  line-height: 1.4;
`,HR=p.button`
  background: none;
  border: none;
  color: var(--primary-medium);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  
  &:hover {
    color: var(--primary-dark);
  }
`,WR=p.button`
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--gray-600);
  }
`,GR=e=>{switch(e){case"success":return c.jsx(is,{size:20,color:"var(--accent-green)"});case"error":return c.jsx(Eo,{size:20,color:"var(--accent-red)"});case"warning":return c.jsx(pR,{size:20,color:"var(--accent-yellow)"});case"info":return c.jsx(Vh,{size:20,color:"var(--primary-medium)"});default:return c.jsx(Vh,{size:20,color:"var(--gray-400)"})}},KR=({children:e})=>{const[t,r]=_.useState([]),n=l=>{const u=Math.random().toString(36).substr(2,9),d={...l,id:u,duration:l.duration||5e3};r(h=>[...h,d]),d.duration&&d.duration>0&&setTimeout(()=>{i(u)},d.duration)},i=l=>{r(u=>u.filter(d=>d.id!==l))},s=()=>{r([])},o=l=>{l.action&&l.action.onClick(),i(l.id)},a={showNotification:n,hideNotification:i,clearNotifications:s};return c.jsxs(yS.Provider,{value:a,children:[e,c.jsx(UR,{children:c.jsx(bn,{children:t.map(l=>c.jsxs(FR,{type:l.type,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{duration:.3,ease:"easeOut"},children:[GR(l.type),c.jsxs(VR,{children:[c.jsx(BR,{children:l.title}),c.jsx(qR,{children:l.message}),l.action&&c.jsx(HR,{onClick:()=>o(l),children:l.action.label})]}),c.jsx(WR,{onClick:()=>i(l.id),children:c.jsx(rr,{size:16})})]},l.id))})})]})},Vt=()=>{const e=_.useContext(yS);if(e===void 0)throw new Error("useNotification must be used within a NotificationProvider");return e};function wS(e,t){return function(){return e.apply(t,arguments)}}const{toString:YR}=Object.prototype,{getPrototypeOf:Bp}=Object,{iterator:Wc,toStringTag:xS}=Symbol,Gc=(e=>t=>{const r=YR.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ar=e=>(e=e.toLowerCase(),t=>Gc(t)===e),Kc=e=>t=>typeof t===e,{isArray:ds}=Array,To=Kc("undefined");function Yo(e){return e!==null&&!To(e)&&e.constructor!==null&&!To(e.constructor)&&gt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bS=ar("ArrayBuffer");function JR(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bS(e.buffer),t}const QR=Kc("string"),gt=Kc("function"),SS=Kc("number"),Jo=e=>e!==null&&typeof e=="object",XR=e=>e===!0||e===!1,pl=e=>{if(Gc(e)!=="object")return!1;const t=Bp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xS in e)&&!(Wc in e)},ZR=e=>{if(!Jo(e)||Yo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},eI=ar("Date"),tI=ar("File"),rI=ar("Blob"),nI=ar("FileList"),iI=e=>Jo(e)&&gt(e.pipe),sI=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||gt(e.append)&&((t=Gc(e))==="formdata"||t==="object"&&gt(e.toString)&&e.toString()==="[object FormData]"))},oI=ar("URLSearchParams"),[aI,lI,cI,uI]=["ReadableStream","Request","Response","Headers"].map(ar),dI=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qo(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),ds(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{if(Yo(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(n=0;n<o;n++)a=s[n],t.call(null,e[a],a,e)}}function kS(e,t){if(Yo(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Mn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),_S=e=>!To(e)&&e!==Mn;function Hh(){const{caseless:e}=_S(this)&&this||{},t={},r=(n,i)=>{const s=e&&kS(t,i)||i;pl(t[s])&&pl(n)?t[s]=Hh(t[s],n):pl(n)?t[s]=Hh({},n):ds(n)?t[s]=n.slice():t[s]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Qo(arguments[n],r);return t}const hI=(e,t,r,{allOwnKeys:n}={})=>(Qo(t,(i,s)=>{r&&gt(i)?e[s]=wS(i,r):e[s]=i},{allOwnKeys:n}),e),fI=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),pI=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},gI=(e,t,r,n)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=r!==!1&&Bp(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},mI=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},vI=e=>{if(!e)return null;if(ds(e))return e;let t=e.length;if(!SS(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},yI=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Bp(Uint8Array)),wI=(e,t)=>{const n=(e&&e[Wc]).call(e);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},xI=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},bI=ar("HTMLFormElement"),SI=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Fv=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),kI=ar("RegExp"),ES=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Qo(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(n[s]=o||i)}),Object.defineProperties(e,n)},_I=e=>{ES(e,(t,r)=>{if(gt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(gt(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},EI=(e,t)=>{const r={},n=i=>{i.forEach(s=>{r[s]=!0})};return ds(e)?n(e):n(String(e).split(t)),r},CI=()=>{},jI=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function TI(e){return!!(e&&gt(e.append)&&e[xS]==="FormData"&&e[Wc])}const PI=e=>{const t=new Array(10),r=(n,i)=>{if(Jo(n)){if(t.indexOf(n)>=0)return;if(Yo(n))return n;if(!("toJSON"in n)){t[i]=n;const s=ds(n)?[]:{};return Qo(n,(o,a)=>{const l=r(o,i+1);!To(l)&&(s[a]=l)}),t[i]=void 0,s}}return n};return r(e,0)},AI=ar("AsyncFunction"),RI=e=>e&&(Jo(e)||gt(e))&&gt(e.then)&&gt(e.catch),CS=((e,t)=>e?setImmediate:t?((r,n)=>(Mn.addEventListener("message",({source:i,data:s})=>{i===Mn&&s===r&&n.length&&n.shift()()},!1),i=>{n.push(i),Mn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",gt(Mn.postMessage)),II=typeof queueMicrotask<"u"?queueMicrotask.bind(Mn):typeof process<"u"&&process.nextTick||CS,OI=e=>e!=null&&gt(e[Wc]),T={isArray:ds,isArrayBuffer:bS,isBuffer:Yo,isFormData:sI,isArrayBufferView:JR,isString:QR,isNumber:SS,isBoolean:XR,isObject:Jo,isPlainObject:pl,isEmptyObject:ZR,isReadableStream:aI,isRequest:lI,isResponse:cI,isHeaders:uI,isUndefined:To,isDate:eI,isFile:tI,isBlob:rI,isRegExp:kI,isFunction:gt,isStream:iI,isURLSearchParams:oI,isTypedArray:yI,isFileList:nI,forEach:Qo,merge:Hh,extend:hI,trim:dI,stripBOM:fI,inherits:pI,toFlatObject:gI,kindOf:Gc,kindOfTest:ar,endsWith:mI,toArray:vI,forEachEntry:wI,matchAll:xI,isHTMLForm:bI,hasOwnProperty:Fv,hasOwnProp:Fv,reduceDescriptors:ES,freezeMethods:_I,toObjectSet:EI,toCamelCase:SI,noop:CI,toFiniteNumber:jI,findKey:kS,global:Mn,isContextDefined:_S,isSpecCompliantForm:TI,toJSONObject:PI,isAsyncFn:AI,isThenable:RI,setImmediate:CS,asap:II,isIterable:OI};function J(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}T.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.status}}});const jS=J.prototype,TS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{TS[e]={value:e}});Object.defineProperties(J,TS);Object.defineProperty(jS,"isAxiosError",{value:!0});J.from=(e,t,r,n,i,s)=>{const o=Object.create(jS);return T.toFlatObject(e,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),J.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const $I=null;function Wh(e){return T.isPlainObject(e)||T.isArray(e)}function PS(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function Vv(e,t,r){return e?e.concat(t).map(function(i,s){return i=PS(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function LI(e){return T.isArray(e)&&!e.some(Wh)}const zI=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function Yc(e,t,r){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=T.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,b){return!T.isUndefined(b[x])});const n=r.metaTokens,i=r.visitor||d,s=r.dots,o=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(T.isDate(m))return m.toISOString();if(T.isBoolean(m))return m.toString();if(!l&&T.isBlob(m))throw new J("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(m)||T.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,x,b){let v=m;if(m&&!b&&typeof m=="object"){if(T.endsWith(x,"{}"))x=n?x:x.slice(0,-2),m=JSON.stringify(m);else if(T.isArray(m)&&LI(m)||(T.isFileList(m)||T.endsWith(x,"[]"))&&(v=T.toArray(m)))return x=PS(x),v.forEach(function(w,k){!(T.isUndefined(w)||w===null)&&t.append(o===!0?Vv([x],k,s):o===null?x:x+"[]",u(w))}),!1}return Wh(m)?!0:(t.append(Vv(b,x,s),u(m)),!1)}const h=[],f=Object.assign(zI,{defaultVisitor:d,convertValue:u,isVisitable:Wh});function y(m,x){if(!T.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+x.join("."));h.push(m),T.forEach(m,function(v,g){(!(T.isUndefined(v)||v===null)&&i.call(t,v,T.isString(g)?g.trim():g,x,f))===!0&&y(v,x?x.concat(g):[g])}),h.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Bv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function qp(e,t){this._pairs=[],e&&Yc(e,this,t)}const AS=qp.prototype;AS.append=function(t,r){this._pairs.push([t,r])};AS.toString=function(t){const r=t?function(n){return t.call(this,n,Bv)}:Bv;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function NI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function RS(e,t,r){if(!t)return e;const n=r&&r.encode||NI;T.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let s;if(i?s=i(t,r):s=T.isURLSearchParams(t)?t.toString():new qp(t,r).toString(n),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class DI{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(n){n!==null&&t(n)})}}const qv=DI,IS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},MI=typeof URLSearchParams<"u"?URLSearchParams:qp,UI=typeof FormData<"u"?FormData:null,FI=typeof Blob<"u"?Blob:null,VI={isBrowser:!0,classes:{URLSearchParams:MI,FormData:UI,Blob:FI},protocols:["http","https","file","blob","url","data"]},Hp=typeof window<"u"&&typeof document<"u",Gh=typeof navigator=="object"&&navigator||void 0,BI=Hp&&(!Gh||["ReactNative","NativeScript","NS"].indexOf(Gh.product)<0),qI=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),HI=Hp&&window.location.href||"http://localhost",WI=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hp,hasStandardBrowserEnv:BI,hasStandardBrowserWebWorkerEnv:qI,navigator:Gh,origin:HI},Symbol.toStringTag,{value:"Module"})),et={...WI,...VI};function GI(e,t){return Yc(e,new et.classes.URLSearchParams,{visitor:function(r,n,i,s){return et.isNode&&T.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function KI(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function YI(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}function OS(e){function t(r,n,i,s){let o=r[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=r.length;return o=!o&&T.isArray(i)?i.length:o,l?(T.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!a):((!i[o]||!T.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],s)&&T.isArray(i[o])&&(i[o]=YI(i[o])),!a)}if(T.isFormData(e)&&T.isFunction(e.entries)){const r={};return T.forEachEntry(e,(n,i)=>{t(KI(n),i,r,0)}),r}return null}function JI(e,t,r){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Wp={transitional:IS,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,s=T.isObject(t);if(s&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return i?JSON.stringify(OS(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t)||T.isReadableStream(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return GI(t,this.formSerializer).toString();if((a=T.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Yc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),JI(t)):t}],transformResponse:[function(t){const r=this.transitional||Wp.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(T.isResponse(t)||T.isReadableStream(t))return t;if(t&&T.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Wp.headers[e]={}});const Gp=Wp,QI=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XI=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&QI[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Hv=Symbol("internals");function ks(e){return e&&String(e).trim().toLowerCase()}function gl(e){return e===!1||e==null?e:T.isArray(e)?e.map(gl):String(e)}function ZI(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const eO=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ku(e,t,r,n,i){if(T.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!T.isString(t)){if(T.isString(n))return t.indexOf(n)!==-1;if(T.isRegExp(n))return n.test(t)}}function tO(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function rO(e,t){const r=T.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,s,o){return this[n].call(this,t,i,s,o)},configurable:!0})})}class Jc{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function s(a,l,u){const d=ks(l);if(!d)throw new Error("header name must be a non-empty string");const h=T.findKey(i,d);(!h||i[h]===void 0||u===!0||u===void 0&&i[h]!==!1)&&(i[h||l]=gl(a))}const o=(a,l)=>T.forEach(a,(u,d)=>s(u,d,l));if(T.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(T.isString(t)&&(t=t.trim())&&!eO(t))o(XI(t),r);else if(T.isObject(t)&&T.isIterable(t)){let a={},l,u;for(const d of t){if(!T.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(l=a[u])?T.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}o(a,r)}else t!=null&&s(r,t,n);return this}get(t,r){if(t=ks(t),t){const n=T.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return ZI(i);if(T.isFunction(r))return r.call(this,i,n);if(T.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ks(t),t){const n=T.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ku(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function s(o){if(o=ks(o),o){const a=T.findKey(n,o);a&&(!r||Ku(n,n[a],a,r))&&(delete n[a],i=!0)}}return T.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const s=r[n];(!t||Ku(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,n={};return T.forEach(this,(i,s)=>{const o=T.findKey(n,s);if(o){r[o]=gl(i),delete r[s];return}const a=t?tO(s):String(s).trim();a!==s&&delete r[s],r[a]=gl(i),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return T.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&T.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[Hv]=this[Hv]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=ks(o);n[a]||(rO(i,o),n[a]=!0)}return T.isArray(t)?t.forEach(s):s(t),this}}Jc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(Jc.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});T.freezeMethods(Jc);const nr=Jc;function Yu(e,t){const r=this||Gp,n=t||r,i=nr.from(n.headers);let s=n.data;return T.forEach(e,function(a){s=a.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function $S(e){return!!(e&&e.__CANCEL__)}function hs(e,t,r){J.call(this,e??"canceled",J.ERR_CANCELED,t,r),this.name="CanceledError"}T.inherits(hs,J,{__CANCEL__:!0});function LS(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new J("Request failed with status code "+r.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function nO(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function iO(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=n[s];o||(o=u),r[i]=l,n[i]=u;let h=s,f=0;for(;h!==i;)f+=r[h++],h=h%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const y=d&&u-d;return y?Math.round(f*1e3/y):void 0}}function sO(e,t){let r=0,n=1e3/t,i,s;const o=(u,d=Date.now())=>{r=d,i=null,s&&(clearTimeout(s),s=null),e(...u)};return[(...u)=>{const d=Date.now(),h=d-r;h>=n?o(u,d):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},n-h)))},()=>i&&o(i)]}const ic=(e,t,r=3)=>{let n=0;const i=iO(50,250);return sO(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-n,u=i(l),d=o<=a;n=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-o)/u:void 0,event:s,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(h)},r)},Wv=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Gv=e=>(...t)=>T.asap(()=>e(...t)),oO=et.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,et.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(et.origin),et.navigator&&/(msie|trident)/i.test(et.navigator.userAgent)):()=>!0,aO=et.hasStandardBrowserEnv?{write(e,t,r,n,i,s){const o=[e+"="+encodeURIComponent(t)];T.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),T.isString(n)&&o.push("path="+n),T.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lO(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cO(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function zS(e,t,r){let n=!lO(t);return e&&(n||r==!1)?cO(e,t):t}const Kv=e=>e instanceof nr?{...e}:e;function Qn(e,t){t=t||{};const r={};function n(u,d,h,f){return T.isPlainObject(u)&&T.isPlainObject(d)?T.merge.call({caseless:f},u,d):T.isPlainObject(d)?T.merge({},d):T.isArray(d)?d.slice():d}function i(u,d,h,f){if(T.isUndefined(d)){if(!T.isUndefined(u))return n(void 0,u,h,f)}else return n(u,d,h,f)}function s(u,d){if(!T.isUndefined(d))return n(void 0,d)}function o(u,d){if(T.isUndefined(d)){if(!T.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function a(u,d,h){if(h in t)return n(u,d);if(h in e)return n(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,d,h)=>i(Kv(u),Kv(d),h,!0)};return T.forEach(Object.keys({...e,...t}),function(d){const h=l[d]||i,f=h(e[d],t[d],d);T.isUndefined(f)&&h!==a||(r[d]=f)}),r}const NS=e=>{const t=Qn({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=t;t.headers=o=nr.from(o),t.url=RS(zS(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(T.isFormData(r)){if(et.hasStandardBrowserEnv||et.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...d]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(et.hasStandardBrowserEnv&&(n&&T.isFunction(n)&&(n=n(t)),n||n!==!1&&oO(t.url))){const u=i&&s&&aO.read(s);u&&o.set(i,u)}return t},uO=typeof XMLHttpRequest<"u",dO=uO&&function(e){return new Promise(function(r,n){const i=NS(e);let s=i.data;const o=nr.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=i,d,h,f,y,m;function x(){y&&y(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(i.method.toUpperCase(),i.url,!0),b.timeout=i.timeout;function v(){if(!b)return;const w=nr.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:w,config:e,request:b};LS(function(E){r(E),x()},function(E){n(E),x()},C),b=null}"onloadend"in b?b.onloadend=v:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(v)},b.onabort=function(){b&&(n(new J("Request aborted",J.ECONNABORTED,e,b)),b=null)},b.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,b)),b=null},b.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||IS;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),n(new J(k,C.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,b)),b=null},s===void 0&&o.setContentType(null),"setRequestHeader"in b&&T.forEach(o.toJSON(),function(k,C){b.setRequestHeader(C,k)}),T.isUndefined(i.withCredentials)||(b.withCredentials=!!i.withCredentials),a&&a!=="json"&&(b.responseType=i.responseType),u&&([f,m]=ic(u,!0),b.addEventListener("progress",f)),l&&b.upload&&([h,y]=ic(l),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(d=w=>{b&&(n(!w||w.type?new hs(null,e,b):w),b.abort(),b=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const g=nO(i.url);if(g&&et.protocols.indexOf(g)===-1){n(new J("Unsupported protocol "+g+":",J.ERR_BAD_REQUEST,e));return}b.send(s||null)})},hO=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,i;const s=function(u){if(!i){i=!0,a();const d=u instanceof Error?u:this.reason;n.abort(d instanceof J?d:new hs(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,s(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),e=null)};e.forEach(u=>u.addEventListener("abort",s));const{signal:l}=n;return l.unsubscribe=()=>T.asap(a),l}},fO=hO,pO=function*(e,t){let r=e.byteLength;if(!t||r<t){yield e;return}let n=0,i;for(;n<r;)i=n+t,yield e.slice(n,i),n=i},gO=async function*(e,t){for await(const r of mO(e))yield*pO(r,t)},mO=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Yv=(e,t,r,n)=>{const i=gO(e,t);let s=0,o,a=l=>{o||(o=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await i.next();if(u){a(),l.close();return}let h=d.byteLength;if(r){let f=s+=h;r(f)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},Qc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",DS=Qc&&typeof ReadableStream=="function",vO=Qc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),MS=(e,...t)=>{try{return!!e(...t)}catch{return!1}},yO=DS&&MS(()=>{let e=!1;const t=new Request(et.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Jv=64*1024,Kh=DS&&MS(()=>T.isReadableStream(new Response("").body)),sc={stream:Kh&&(e=>e.body)};Qc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!sc[t]&&(sc[t]=T.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new J(`Response type '${t}' is not supported`,J.ERR_NOT_SUPPORT,n)})})})(new Response);const wO=async e=>{if(e==null)return 0;if(T.isBlob(e))return e.size;if(T.isSpecCompliantForm(e))return(await new Request(et.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(T.isArrayBufferView(e)||T.isArrayBuffer(e))return e.byteLength;if(T.isURLSearchParams(e)&&(e=e+""),T.isString(e))return(await vO(e)).byteLength},xO=async(e,t)=>{const r=T.toFiniteNumber(e.getContentLength());return r??wO(t)},bO=Qc&&(async e=>{let{url:t,method:r,data:n,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:u,headers:d,withCredentials:h="same-origin",fetchOptions:f}=NS(e);u=u?(u+"").toLowerCase():"text";let y=fO([i,s&&s.toAbortSignal()],o),m;const x=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let b;try{if(l&&yO&&r!=="get"&&r!=="head"&&(b=await xO(d,n))!==0){let C=new Request(t,{method:"POST",body:n,duplex:"half"}),S;if(T.isFormData(n)&&(S=C.headers.get("content-type"))&&d.setContentType(S),C.body){const[E,j]=Wv(b,ic(Gv(l)));n=Yv(C.body,Jv,E,j)}}T.isString(h)||(h=h?"include":"omit");const v="credentials"in Request.prototype;m=new Request(t,{...f,signal:y,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:v?h:void 0});let g=await fetch(m,f);const w=Kh&&(u==="stream"||u==="response");if(Kh&&(a||w&&x)){const C={};["status","statusText","headers"].forEach(R=>{C[R]=g[R]});const S=T.toFiniteNumber(g.headers.get("content-length")),[E,j]=a&&Wv(S,ic(Gv(a),!0))||[];g=new Response(Yv(g.body,Jv,E,()=>{j&&j(),x&&x()}),C)}u=u||"text";let k=await sc[T.findKey(sc,u)||"text"](g,e);return!w&&x&&x(),await new Promise((C,S)=>{LS(C,S,{data:k,headers:nr.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:m})})}catch(v){throw x&&x(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new J("Network Error",J.ERR_NETWORK,e,m),{cause:v.cause||v}):J.from(v,v&&v.code,e,m)}}),Yh={http:$I,xhr:dO,fetch:bO};T.forEach(Yh,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Qv=e=>`- ${e}`,SO=e=>T.isFunction(e)||e===null||e===!1,US={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let r,n;const i={};for(let s=0;s<t;s++){r=e[s];let o;if(n=r,!SO(r)&&(n=Yh[(o=String(r)).toLowerCase()],n===void 0))throw new J(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+s]=n}if(!n){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(Qv).join(`
`):" "+Qv(s[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return n},adapters:Yh};function Ju(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hs(null,e)}function Xv(e){return Ju(e),e.headers=nr.from(e.headers),e.data=Yu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),US.getAdapter(e.adapter||Gp.adapter)(e).then(function(n){return Ju(e),n.data=Yu.call(e,e.transformResponse,n),n.headers=nr.from(n.headers),n},function(n){return $S(n)||(Ju(e),n&&n.response&&(n.response.data=Yu.call(e,e.transformResponse,n.response),n.response.headers=nr.from(n.response.headers))),Promise.reject(n)})}const FS="1.11.0",Xc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Zv={};Xc.transitional=function(t,r,n){function i(s,o){return"[Axios v"+FS+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,a)=>{if(t===!1)throw new J(i(o," has been removed"+(r?" in "+r:"")),J.ERR_DEPRECATED);return r&&!Zv[o]&&(Zv[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,a):!0}};Xc.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function kO(e,t,r){if(typeof e!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],o=t[s];if(o){const a=e[s],l=a===void 0||o(a,s,e);if(l!==!0)throw new J("option "+s+" must be "+l,J.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new J("Unknown option "+s,J.ERR_BAD_OPTION)}}const ml={assertOptions:kO,validators:Xc},cr=ml.validators;class oc{constructor(t){this.defaults=t||{},this.interceptors={request:new qv,response:new qv}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Qn(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:s}=r;n!==void 0&&ml.assertOptions(n,{silentJSONParsing:cr.transitional(cr.boolean),forcedJSONParsing:cr.transitional(cr.boolean),clarifyTimeoutError:cr.transitional(cr.boolean)},!1),i!=null&&(T.isFunction(i)?r.paramsSerializer={serialize:i}:ml.assertOptions(i,{encode:cr.function,serialize:cr.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ml.assertOptions(r,{baseUrl:cr.spelling("baseURL"),withXsrfToken:cr.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&T.merge(s.common,s[r.method]);s&&T.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),r.headers=nr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(l=l&&x.synchronous,a.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,h=0,f;if(!l){const m=[Xv.bind(this),void 0];for(m.unshift(...a),m.push(...u),f=m.length,d=Promise.resolve(r);h<f;)d=d.then(m[h++],m[h++]);return d}f=a.length;let y=r;for(h=0;h<f;){const m=a[h++],x=a[h++];try{y=m(y)}catch(b){x.call(this,b);break}}try{d=Xv.call(this,y)}catch(m){return Promise.reject(m)}for(h=0,f=u.length;h<f;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=Qn(this.defaults,t);const r=zS(t.baseURL,t.url,t.allowAbsoluteUrls);return RS(r,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){oc.prototype[t]=function(r,n){return this.request(Qn(n||{},{method:t,url:r,data:(n||{}).data}))}});T.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,a){return this.request(Qn(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}oc.prototype[t]=r(),oc.prototype[t+"Form"]=r(!0)});const vl=oc;class Kp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{n.subscribe(a),s=a}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,a){n.reason||(n.reason=new hs(s,o,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Kp(function(i){t=i}),cancel:t}}}const _O=Kp;function EO(e){return function(r){return e.apply(null,r)}}function CO(e){return T.isObject(e)&&e.isAxiosError===!0}const Jh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jh).forEach(([e,t])=>{Jh[t]=e});const jO=Jh;function VS(e){const t=new vl(e),r=wS(vl.prototype.request,t);return T.extend(r,vl.prototype,t,{allOwnKeys:!0}),T.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return VS(Qn(e,i))},r}const Ne=VS(Gp);Ne.Axios=vl;Ne.CanceledError=hs;Ne.CancelToken=_O;Ne.isCancel=$S;Ne.VERSION=FS;Ne.toFormData=Yc;Ne.AxiosError=J;Ne.Cancel=Ne.CanceledError;Ne.all=function(t){return Promise.all(t)};Ne.spread=EO;Ne.isAxiosError=CO;Ne.mergeConfig=Qn;Ne.AxiosHeaders=nr;Ne.formToJSON=e=>OS(T.isHTMLForm(e)?new FormData(e):e);Ne.getAdapter=US.getAdapter;Ne.HttpStatusCode=jO;Ne.default=Ne;const Er=Ne,Un={BIGCOMMERCE:{STORE_HASH:{}.VITE_BIGCOMMERCE_STORE_HASH||"qdy1j8i5vg",CLIENT_ID:{}.VITE_BIGCOMMERCE_CLIENT_ID||"",ACCESS_TOKEN:{}.VITE_BIGCOMMERCE_ACCESS_TOKEN||"",CLIENT_SECRET:{}.VITE_BIGCOMMERCE_CLIENT_SECRET||"",API_URL:{}.VITE_BIGCOMMERCE_API_URL||"https://api.bigcommerce.com/stores/qdy1j8i5vg/v3",STOREFRONT_URL:{}.VITE_BIGCOMMERCE_STOREFRONT_URL||"https://store-qdy1j8i5vg.mybigcommerce.com"},GOOGLE:{CLIENT_ID:{}.VITE_GOOGLE_CLIENT_ID||"YOUR_GOOGLE_CLIENT_ID",CLIENT_SECRET:{}.VITE_GOOGLE_CLIENT_SECRET||"YOUR_GOOGLE_CLIENT_SECRET",REDIRECT_URI:{}.VITE_GOOGLE_REDIRECT_URI||"http://localhost:3000"},STRIPE:{PUBLISHABLE_KEY:{}.VITE_STRIPE_PUBLISHABLE_KEY||"pk_test_your_stripe_publishable_key_here",SECRET_KEY:{}.VITE_STRIPE_SECRET_KEY||"sk_test_your_stripe_secret_key_here"},APP:{NAME:{}.VITE_APP_NAME||"BestF.kersinTown",URL:{}.VITE_APP_URL||"http://localhost:3000",API_URL:{}.VITE_API_URL||"http://localhost:3001/api",ENVIRONMENT:"production"},MAILCHIMP:{API_KEY:{}.VITE_MAILCHIMP_API_KEY||"your_mailchimp_api_key_here",LIST_ID:{}.VITE_MAILCHIMP_LIST_ID||"your_mailchimp_list_id_here",SERVER_PREFIX:{}.VITE_MAILCHIMP_SERVER_PREFIX||"us1"},AIRTABLE:{API_KEY:{}.VITE_AIRTABLE_API_KEY||"your_airtable_api_key_here",BASE_ID:{}.VITE_AIRTABLE_BASE_ID||"your_airtable_base_id_here"}},TO=Un.BIGCOMMERCE.STORE_HASH,BS="";console.log("[BigCommerce Service] Using PROXY_BASE: (relative path)");const Oe=Er.create({baseURL:`${BS}/api/bigcommerce/v3`,headers:{"Content-Type":"application/json",Accept:"application/json"}}),ac=Er.create({baseURL:`${BS}/api/bigcommerce/v2`,headers:{"Content-Type":"application/json",Accept:"application/json"}}),PO=Er.create({baseURL:`https://api.bigcommerce.com/stores/${TO}/v3`,headers:{"X-Auth-Token":Un.BIGCOMMERCE.ACCESS_TOKEN,"Content-Type":"application/json",Accept:"application/json"}});function ka(e){var t,r,n,i,s,o;return{id:e.id.toString(),title:e.name,description:e.description||"",handle:((r=(t=e.custom_url)==null?void 0:t.url)==null?void 0:r.replace(/^\/|\/$/g,""))||e.name.toLowerCase().replace(/\s+/g,"-"),images:(e.images||[]).map(a=>({id:a.id.toString(),src:a.url_standard||a.url_zoom||a.image_file,altText:a.description||e.name})),variants:(e.variants||[]).map(a=>{var u;const l=e.inventory_tracking&&e.inventory_tracking!=="none";return{id:a.id.toString(),title:((u=a.option_values)==null?void 0:u.map(d=>d.label).join(" / "))||"Default",price:parseFloat((a.calculated_price||a.price||e.price).toString()),compareAtPrice:a.retail_price?parseFloat(a.retail_price.toString()):null,available:!a.purchasing_disabled&&(!l||a.inventory_level>0),inventoryQuantity:a.inventory_level,options:(a.option_values||[]).map(d=>({name:d.option_display_name,value:d.label}))}}),tags:((n=e.custom_fields)==null?void 0:n.filter(a=>a.name==="tag").map(a=>a.value))||[],productType:((s=(i=e.categories)==null?void 0:i[0])==null?void 0:s.toString())||"",vendor:((o=e.brand_id)==null?void 0:o.toString())||"",createdAt:e.date_created,updatedAt:e.date_modified,publishedAt:e.date_created,status:e.is_visible?"active":"draft",totalInventory:e.inventory_level,hasOnlyDefaultVariant:!e.variants||e.variants.length<=1,options:(e.options||[]).map(a=>{var l;return{id:a.id.toString(),name:a.display_name,values:((l=a.option_values)==null?void 0:l.map(u=>u.label))||[]}})}}const Pr={async getAllProducts(e=50,t=1){var r,n;try{console.log("Fetching BigCommerce products...");const i=await Oe.get("/catalog/products",{params:{limit:e,page:t,include:"images,variants,options,modifiers,custom_fields",is_visible:!0}});console.log("BigCommerce API Response:",i.data);const s=i.data.data.map(ka),o=((r=i.data.meta)==null?void 0:r.pagination)||{};return{products:s,hasNextPage:o.current_page<o.total_pages,totalPages:o.total_pages||1,totalProducts:o.total||s.length}}catch(i){throw console.error("Error fetching BigCommerce products:",((n=i.response)==null?void 0:n.data)||i.message),i}},async getProductById(e){var t;try{console.log("Fetching BigCommerce product by ID:",e);const r=await Oe.get(`/catalog/products/${e}`,{params:{include:"images,variants,options,modifiers,custom_fields"}});return ka(r.data.data)}catch(r){throw console.error("Error fetching BigCommerce product:",((t=r.response)==null?void 0:t.data)||r.message),r}},async searchProducts(e,t=20){var r;try{return(await Oe.get("/catalog/products",{params:{limit:t,"name:like":e,include:"images,variants,options",is_visible:!0}})).data.data.map(ka)}catch(n){throw console.error("Error searching BigCommerce products:",((r=n.response)==null?void 0:r.data)||n.message),n}},async getProductsByCategory(e,t=50){var r;try{return(await Oe.get("/catalog/products",{params:{limit:t,"categories:in":e,include:"images,variants,options",is_visible:!0}})).data.data.map(ka)}catch(n){throw console.error("Error fetching products by category:",((r=n.response)==null?void 0:r.data)||n.message),n}}},qS={async getAllCategories(){var e;try{return(await Oe.get("/catalog/categories",{params:{limit:250,is_visible:!0}})).data.data}catch(t){throw console.error("Error fetching categories:",((e=t.response)==null?void 0:e.data)||t.message),t}},async getCategoryById(e){var t;try{return(await Oe.get(`/catalog/categories/${e}`)).data.data}catch(r){throw console.error("Error fetching category:",((t=r.response)==null?void 0:t.data)||r.message),r}}},Kr={async getCustomerByEmail(e){var t;try{return(await Oe.get("/customers",{params:{"email:in":e}})).data.data[0]||null}catch(r){throw console.error("Error fetching customer:",((t=r.response)==null?void 0:t.data)||r.message),r}},async createCustomer(e){var t;try{return(await Oe.post("/customers",[e])).data.data[0]}catch(r){throw console.error("Error creating customer:",((t=r.response)==null?void 0:t.data)||r.message),r}},async updateCustomer(e,t){var r;try{return(await Oe.put("/customers",[{id:e,...t}])).data.data[0]}catch(n){throw console.error("Error updating customer:",((r=n.response)==null?void 0:r.data)||n.message),n}}},Yp={async getCustomerOrders(e){var t;try{return(await ac.get("/orders",{params:{customer_id:e}})).data}catch(r){throw console.error("Error fetching customer orders:",((t=r.response)==null?void 0:t.data)||r.message),r}},async getOrderById(e){var t;try{return(await ac.get(`/orders/${e}`)).data}catch(r){throw console.error("Error fetching order:",((t=r.response)==null?void 0:t.data)||r.message),r}}},HS={async checkProductAvailability(e){var t;try{const n=(await Oe.get(`/catalog/products/${e}`,{params:{include:"variants"}})).data.data;return n.inventory_level>0||((t=n.variants)==null?void 0:t.some(i=>i.inventory_level>0))}catch(r){return console.error("Error checking product availability:",r),!1}},async updateVariantInventory(e,t,r){var n;try{await Oe.put(`/catalog/products/${e}/variants/${t}`,{inventory_level:r})}catch(i){throw console.error("Error updating inventory:",((n=i.response)==null?void 0:n.data)||i.message),i}}},Wt={async createCart(e){var t;try{return(await Oe.post("/carts",{line_items:e.map(n=>({product_id:n.productId,variant_id:n.variantId,quantity:n.quantity}))})).data.data}catch(r){throw console.error("Error creating cart:",((t=r.response)==null?void 0:t.data)||r.message),r}},async addToCart(e,t,r,n){var i;try{return(await Oe.post(`/carts/${e}/items`,{line_items:[{product_id:t,variant_id:r,quantity:n}]})).data.data}catch(s){throw console.error("Error adding to cart:",((i=s.response)==null?void 0:i.data)||s.message),s}},async getCart(e){var t;try{return(await Oe.get(`/carts/${e}`,{params:{include:"line_items.physical_items.options,line_items.digital_items.options"}})).data.data}catch(r){throw console.error("Error fetching cart:",((t=r.response)==null?void 0:t.data)||r.message),r}},async updateCartItem(e,t,r){var n;try{return(await Oe.put(`/carts/${e}/items/${t}`,{line_item:{quantity:r}})).data.data}catch(i){throw console.error("Error updating cart item:",((n=i.response)==null?void 0:n.data)||i.message),i}},async removeFromCart(e,t){var r;try{return(await Oe.delete(`/carts/${e}/items/${t}`)).data.data}catch(n){throw console.error("Error removing from cart:",((r=n.response)==null?void 0:r.data)||n.message),n}},async deleteCart(e){var t;try{await Oe.delete(`/carts/${e}`)}catch(r){throw console.error("Error deleting cart:",((t=r.response)==null?void 0:t.data)||r.message),r}},async createCheckoutUrl(e){var t;try{return(await Oe.post(`/carts/${e}/redirect_urls`)).data.data.checkout_url}catch(r){throw console.error("Error creating checkout URL:",((t=r.response)==null?void 0:t.data)||r.message),r}}},AO={productService:Pr,categoryService:qS,customerService:Kr,orderService:Yp,inventoryService:HS,cartService:Wt,bigcommerceAPI:Oe,bigcommerceAPIv2:ac},lc=Object.freeze(Object.defineProperty({__proto__:null,bigcommerceAPI:Oe,bigcommerceAPIv2:ac,bigcommerceDirectAPI:PO,cartService:Wt,categoryService:qS,customerService:Kr,default:AO,inventoryService:HS,orderService:Yp,productService:Pr},Symbol.toStringTag,{value:"Module"})),ey=Un.GOOGLE.CLIENT_ID,Dr={async login(e,t){try{const r=await Kr.getCustomerByEmail(e);if(!r)throw new Error("Utilisateur non trouvé");const n={id:r.id.toString(),email:r.email,firstName:r.first_name,lastName:r.last_name,isAuthenticated:!0,bcCustomerId:r.id.toString()};return localStorage.setItem("user",JSON.stringify(n)),n}catch(r){throw console.error("Erreur lors de la connexion:",r),r}},async register(e){try{const t=await Kr.createCustomer({email:e.email,first_name:e.firstName,last_name:e.lastName}),r={id:t.id.toString(),email:t.email,firstName:t.first_name,lastName:t.last_name,isAuthenticated:!0,bcCustomerId:t.id.toString()};return localStorage.setItem("user",JSON.stringify(r)),r}catch(t){throw console.error("Erreur lors de l'inscription:",t),t}},initGoogleAuth(){return new Promise((e,t)=>{window.google?(window.google.accounts.id.initialize({client_id:ey,callback:this.handleGoogleSignIn.bind(this),auto_select:!1,cancel_on_tap_outside:!0}),e()):t(new Error("Google API non chargée"))})},async handleGoogleSignIn(e){try{const{credential:t}=e,r=JSON.parse(atob(t.split(".")[1])),n=await this.createOrGetBigCommerceCustomer({email:r.email,firstName:r.given_name,lastName:r.family_name,googleId:r.sub,avatar:r.picture}),i={id:n.id.toString(),email:n.email,firstName:n.first_name,lastName:n.last_name,avatar:r.picture,isAuthenticated:!0,bcCustomerId:n.id.toString(),googleId:r.sub};return localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("googleToken",t),i}catch(t){throw console.error("Erreur lors de la connexion Google:",t),t}},async createOrGetBigCommerceCustomer(e){try{let t=await Kr.getCustomerByEmail(e.email);if(!t)t=await Kr.createCustomer({email:e.email,first_name:e.firstName,last_name:e.lastName,company:`Google User ${e.googleId}`});else{const r={first_name:e.firstName,last_name:e.lastName};t=await Kr.updateCustomer(t.id,r)}return t}catch(t){throw console.error("Erreur lors de la création/récupération du client BigCommerce:",t),t}},loginWithGoogle(){return new Promise((e,t)=>{if(!window.google){t(new Error("Google API non chargée"));return}window.google.accounts.id.initialize({client_id:ey,callback:async r=>{try{const n=await this.handleGoogleSignIn(r);e({customer:{id:n.id,email:n.email,firstName:n.firstName,lastName:n.lastName}})}catch(n){t(n)}},auto_select:!1,cancel_on_tap_outside:!0}),window.google.accounts.id.prompt()})},logout(){localStorage.removeItem("user"),localStorage.removeItem("googleToken")},getCurrentUser(){const e=localStorage.getItem("user");if(e){const t=JSON.parse(e);return t.isAuthenticated=!0,t}return null},isAuthenticated(){return this.getCurrentUser()!==null},async refreshGoogleToken(){const e=localStorage.getItem("googleToken");if(!e)return null;try{const t=await Er.get(`https://oauth2.googleapis.com/tokeninfo?access_token=${e}`);return e}catch{return this.logout(),null}}},WS=_.createContext(void 0),RO=({children:e})=>{const[t,r]=_.useState(null),[n,i]=_.useState(!0),[s,o]=_.useState(null),{showNotification:a}=Vt(),l=()=>new Promise((m,x)=>{if(window.google&&window.google.accounts){m();return}const b=document.createElement("script");b.src="https://accounts.google.com/gsi/client",b.async=!0,b.defer=!0,b.onload=()=>m(),b.onerror=()=>x(new Error("Impossible de charger Google OAuth")),document.head.appendChild(b)});_.useEffect(()=>{(async()=>{try{if(i(!0),o(null),await l(),Dr.isAuthenticated()){const x=Dr.getCurrentUser();x?r(x):Dr.logout()}i(!1)}catch(x){console.error("Erreur lors de l'initialisation de l'authentification:",x),o("Erreur lors de l'initialisation de l'authentification"),i(!1)}})()},[]);const y={user:t,isLoading:n,error:s,login:async(m,x)=>{try{i(!0),o(null);const b=await Dr.login(m,x);r(b),a({type:"success",title:"Connexion réussie",message:`Bienvenue ${b.firstName} !`})}catch(b){console.error("Erreur lors de la connexion:",b),o(b instanceof Error?b.message:"Erreur lors de la connexion"),a({type:"error",title:"Erreur de connexion",message:b instanceof Error?b.message:"Erreur lors de la connexion"})}finally{i(!1)}},register:async m=>{try{i(!0),o(null);const x=await Dr.register({email:m.email,firstName:m.firstName,lastName:m.lastName,password:m.password});r(x),a({type:"success",title:"Compte créé avec succès",message:`Bienvenue ${x.firstName} ! Votre compte a été créé.`})}catch(x){console.error("Erreur lors de la création du compte:",x),o(x instanceof Error?x.message:"Erreur lors de la création du compte"),a({type:"error",title:"Erreur de création",message:x instanceof Error?x.message:"Erreur lors de la création du compte"})}finally{i(!1)}},logout:()=>{try{Dr.logout(),r(null),o(null),a({type:"success",title:"Déconnexion réussie",message:"Vous avez été déconnecté avec succès"})}catch(m){console.error("Erreur lors de la déconnexion:",m),a({type:"error",title:"Erreur",message:"Erreur lors de la déconnexion"})}},refreshUser:async()=>{try{if(Dr.isAuthenticated()){const m=Dr.getCurrentUser();r(m)}else r(null)}catch(m){console.error("Erreur lors du rafraîchissement:",m),r(null)}},isAuthenticated:!!t};return c.jsx(WS.Provider,{value:y,children:e})},Zc=()=>{const e=_.useContext(WS);if(e===void 0)throw new Error("useAuth doit être utilisé dans un AuthProvider");return e},GS=_.createContext(void 0),_a=e=>{const t=e.reduce((o,a)=>o+a.price*a.quantity,0),r=t*.2/1.2,n=t>50?0:5.99,i=t+n,s=e.reduce((o,a)=>o+a.quantity,0);return{subtotal:t,tax:r,shipping:n,total:i,itemCount:s}},IO=({children:e})=>{const t=()=>{const v=localStorage.getItem("cart");if(v)try{const g=JSON.parse(v);return console.log("Chargement du panier initial depuis localStorage:",g),g}catch(g){console.error("Erreur lors du chargement du panier initial:",g)}return{items:[],subtotal:0,tax:0,shipping:0,total:0,itemCount:0}},[r,n]=_.useState(t),[i,s]=_.useState(null),[o,a]=_.useState(()=>localStorage.getItem("bigcommerce_cart_id"));_.useEffect(()=>{console.log("Sauvegarde du panier:",r),localStorage.setItem("cart",JSON.stringify(r)),window.dispatchEvent(new CustomEvent("cartStateChanged",{detail:{cart:r}}))},[r]),_.useEffect(()=>{o&&localStorage.setItem("bigcommerce_cart_id",o)},[o]),_.useEffect(()=>{const v=g=>{if(g.key==="cart"&&g.newValue)try{const w=JSON.parse(g.newValue);console.log("Panier mis a jour depuis localStorage:",w),n(w)}catch(w){console.error("Erreur lors du parsing du panier:",w)}};return window.addEventListener("storage",v),()=>window.removeEventListener("storage",v)},[]);const l=async(v,g=1,w)=>{var k,C,S,E;try{console.log("addToCart appele avec:",{product:v.title,quantity:g,variantId:w});const j=w||((C=(k=v.variants)==null?void 0:k[0])==null?void 0:C.id);if(!j)throw new Error("Aucune variante disponible pour ce produit");console.log("Variante selectionnee:",j);const R=r.items.find(P=>P.productId===v.id&&P.variantId===j);if(console.log("Article existant trouve:",R),R){console.log("Mise a jour de la quantite existante");const P=r.items.map(W=>W.productId===v.id&&W.variantId===j?{...W,quantity:W.quantity+g}:W),L=_a(P);console.log("Nouveaux totaux:",L),n(W=>{const re={...W,items:P,...L};return console.log("Nouveau panier:",re),re})}else{console.log("Ajout d'un nouvel article");const P={id:`${v.id}-${j}-${Date.now()}`,productId:v.id,variantId:j,title:v.title,price:v.price,quantity:g,image:v.images[0]||"",options:((E=(S=v.variants)==null?void 0:S.find(re=>re.id===j))==null?void 0:E.options)||[]};console.log("Nouvel article cree:",P);const L=[...r.items,P],W=_a(L);console.log("Nouveaux totaux:",W),n(re=>{const ae={...re,items:L,...W};return console.log("Nouveau panier:",ae),ae})}console.log("addToCart termine avec succes");try{await m()}catch(P){console.warn("Erreur lors de la synchronisation BigCommerce:",P)}}catch(j){throw console.error("Erreur lors de l'ajout au panier:",j),j}},u=async v=>{try{const g=r.items.find(C=>C.id===v),w=r.items.filter(C=>C.id!==v),k=_a(w);if(n(C=>({...C,items:w,...k})),o&&g)try{const S=(await Wt.getCart(o)).line_items.physical_items.find(E=>E.product_id.toString()===g.productId);S&&await Wt.removeFromCart(o,S.id)}catch(C){console.warn("Erreur lors de la suppression BigCommerce:",C)}}catch(g){throw console.error("Erreur lors de la suppression du panier:",g),g}},d=async(v,g)=>{try{if(g<=0){await u(v);return}const w=r.items.find(S=>S.id===v),k=r.items.map(S=>S.id===v?{...S,quantity:g}:S),C=_a(k);if(n(S=>({...S,items:k,...C})),o&&w)try{const E=(await Wt.getCart(o)).line_items.physical_items.find(j=>j.product_id.toString()===w.productId);E&&await Wt.updateCartItem(o,E.id,g)}catch(S){console.warn("Erreur lors de la mise a jour BigCommerce:",S)}}catch(w){throw console.error("Erreur lors de la mise a jour de la quantite:",w),w}},h=async()=>{try{if(n({items:[],subtotal:0,tax:0,shipping:0,total:0,itemCount:0}),o)try{await Wt.deleteCart(o),a(null),s(null),localStorage.removeItem("bigcommerce_cart_id")}catch(g){console.warn("Erreur lors de la suppression du panier BigCommerce:",g)}}catch(v){throw console.error("Erreur lors du vidage du panier:",v),v}},f=()=>r.itemCount,y=()=>r.total,m=async()=>{try{if(console.log("Debut de la synchronisation avec BigCommerce..."),r.items.length===0){console.log("Panier vide, pas de synchronisation necessaire");return}if(o)try{const v=await Wt.getCart(o);s(v),console.log("Panier BigCommerce existant recupere:",v.id)}catch{console.log("Panier BigCommerce expire, creation d'un nouveau...");const g=r.items.map(k=>({productId:parseInt(k.productId),variantId:k.variantId?parseInt(k.variantId):void 0,quantity:k.quantity})),w=await Wt.createCart(g);s(w),a(w.id)}else{console.log("Creation d'un nouveau panier BigCommerce...");const v=r.items.map(w=>({productId:parseInt(w.productId),variantId:w.variantId?parseInt(w.variantId):void 0,quantity:w.quantity})),g=await Wt.createCart(v);s(g),a(g.id),console.log("Panier BigCommerce cree:",g.id)}console.log("Synchronisation avec BigCommerce terminee"),window.dispatchEvent(new CustomEvent("cartUpdated",{detail:{cart:i,timestamp:new Date}}))}catch(v){throw console.error("Erreur lors de la synchronisation avec BigCommerce:",v),v}},b={cart:r,bigcommerceCart:i,addToCart:l,removeFromCart:u,updateQuantity:d,clearCart:h,getItemCount:f,getTotal:y,syncWithBigCommerce:m,getCheckoutUrl:async()=>{try{if(o||await m(),o)return await Wt.createCheckoutUrl(o);throw new Error("Impossible de creer l'URL de checkout")}catch(v){throw console.error("Erreur lors de la creation de l'URL de checkout:",v),v}}};return c.jsx(GS.Provider,{value:b,children:e})},ni=()=>{const e=_.useContext(GS);if(e===void 0)throw new Error("useCart must be used within a CartProvider");return e},Ea={async getUserFavorites(e){try{const t=this.getLocalFavorites(e);if(t.length>0)return t;if(e&&e!=="anonymous")try{const n=(await Er.get(`${Un.APP.API_URL}/favorites/${e}`)).data;return this.saveLocalFavorites(e,n),n}catch(r){return console.warn("Impossible de récupérer les favoris depuis le serveur:",r),[]}return[]}catch(t){return console.error("Erreur lors de la récupération des favoris:",t),[]}},async addToFavorites(e,t){try{const r={id:`fav_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,productId:t.id,variantId:t.variantId,productTitle:t.title,variantTitle:t.variantTitle,productImage:t.image,productPrice:t.price,userId:e,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},i=[...this.getLocalFavorites(e),r];return this.saveLocalFavorites(e,i),r}catch(r){throw console.error("Erreur lors de l'ajout aux favoris:",r),r}},async removeFromFavorites(e,t,r){try{const i=this.getLocalFavorites(e).filter(s=>r?!(s.productId===t&&s.variantId===r):s.productId!==t);this.saveLocalFavorites(e,i)}catch(n){throw console.error("Erreur lors de la suppression des favoris:",n),n}},isProductFavorited(e,t,r){try{const n=this.getLocalFavorites(e);return r?n.some(i=>i.productId===t&&i.variantId===r):n.some(i=>i.productId===t)}catch(n){return console.error("Erreur lors de la vérification des favoris:",n),!1}},getFavoritesCount(e){try{return this.getLocalFavorites(e).length}catch(t){return console.error("Erreur lors du comptage des favoris:",t),0}},async syncFavorites(e){try{if(!e||e==="anonymous")return;const t=this.getLocalFavorites(e);await Er.post(`${Un.APP.API_URL}/favorites/sync`,{userId:e,favorites:t});const n=(await Er.get(`${Un.APP.API_URL}/favorites/${e}`)).data,i=this.mergeFavorites(t,n);this.saveLocalFavorites(e,i)}catch(t){console.error("Erreur lors de la synchronisation des favoris:",t)}},getLocalFavorites(e){try{const t=`favorites_${e}`,r=localStorage.getItem(t);return r?JSON.parse(r):[]}catch(t){return console.error("Erreur lors de la lecture des favoris locaux:",t),[]}},saveLocalFavorites(e,t){try{const r=`favorites_${e}`;localStorage.setItem(r,JSON.stringify(t))}catch(r){console.error("Erreur lors de la sauvegarde des favoris locaux:",r)}},mergeFavorites(e,t){const r=new Map,n=i=>`${i.productId}_${i.variantId||"default"}`;return e.forEach(i=>{r.set(n(i),i)}),t.forEach(i=>{const s=n(i),o=r.get(s);(!o||new Date(i.updatedAt)>new Date(o.updatedAt))&&r.set(s,i)}),Array.from(r.values())},async clearAllFavorites(e){try{if(this.saveLocalFavorites(e,[]),e&&e!=="anonymous")try{await Er.delete(`${Un.APP.API_URL}/favorites/${e}/all`)}catch(t){console.warn("Impossible de synchroniser avec le serveur:",t)}}catch(t){throw console.error("Erreur lors de la suppression de tous les favoris:",t),t}},cleanupOrphanedFavorites(){try{Object.keys(localStorage).filter(r=>r.startsWith("favorites_")).forEach(r=>{JSON.parse(localStorage.getItem(r)||"[]").length===0&&localStorage.removeItem(r)})}catch(e){console.error("Erreur lors du nettoyage des favoris:",e)}}},KS=_.createContext(void 0),OO=({children:e})=>{const[t,r]=_.useState({favorites:[],isLoading:!1,error:null}),{user:n,isAuthenticated:i}=Zc(),{language:s}=Pe(),{showNotification:o}=Vt();_.useEffect(()=>{a()},[n]);const a=async()=>{const x=(n==null?void 0:n.id)||"anonymous";try{r(v=>({...v,isLoading:!0,error:null}));const b=await Ea.getUserFavorites(x);r({favorites:b,isLoading:!1,error:null})}catch(b){console.error("Erreur lors du chargement des favoris:",b),r(v=>({...v,isLoading:!1,error:"Erreur lors du chargement des favoris"}))}},m={...t,addFavorite:async x=>{const b=(n==null?void 0:n.id)||"anonymous";try{r(g=>({...g,isLoading:!0,error:null}));const v=await Ea.addToFavorites(b,x);r(g=>({...g,favorites:[...g.favorites,v],isLoading:!1,error:null})),o({type:"success",title:s==="fr"?"Succès":"Success",message:s==="fr"?"Produit ajouté aux favoris":"Product added to favorites"})}catch(v){console.error("Erreur lors de l'ajout du favori:",v),r(g=>({...g,isLoading:!1,error:"Erreur lors de l'ajout du favori"}))}},removeFavorite:async(x,b)=>{const v=(n==null?void 0:n.id)||"anonymous";try{r(g=>({...g,isLoading:!0,error:null})),await Ea.removeFromFavorites(v,x,b),r(g=>({...g,favorites:g.favorites.filter(w=>b?!(w.productId===x&&w.variantId===b):w.productId!==x),isLoading:!1,error:null})),o({type:"info",title:s==="fr"?"Succès":"Success",message:s==="fr"?"Produit retiré des favoris":"Product removed from favorites"})}catch(g){console.error("Erreur lors de la suppression du favori:",g),r(w=>({...w,isLoading:!1,error:"Erreur lors de la suppression du favori"}))}},isFavorite:(x,b)=>b?t.favorites.some(v=>v.productId===x&&v.variantId===b):t.favorites.some(v=>v.productId===x),getFavoritesCount:()=>t.favorites.length,clearAllFavorites:async()=>{const x=(n==null?void 0:n.id)||"anonymous";try{r(b=>({...b,isLoading:!0,error:null})),await Ea.clearAllFavorites(x),r({favorites:[],isLoading:!1,error:null}),o({type:"success",title:s==="fr"?"Succès":"Success",message:s==="fr"?"Tous les favoris ont été supprimés":"All favorites have been removed"})}catch(b){console.error("Erreur lors de la suppression de tous les favoris:",b),r(v=>({...v,isLoading:!1,error:"Erreur lors de la suppression de tous les favoris"})),o({type:"error",title:s==="fr"?"Erreur":"Error",message:s==="fr"?"Erreur lors de la suppression de tous les favoris":"Error while removing all favorites"})}},refreshFavorites:async()=>{await a()}};return c.jsx(KS.Provider,{value:m,children:e})},Xo=()=>{const e=_.useContext(KS);if(e===void 0)throw new Error("useFavorites doit être utilisé dans un FavoritesProvider");return e},$O=p.div`
  position: relative;
`,LO=p(F.button)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: ${e=>e.$isAuthenticated?"rgba(209, 50, 150, 0.1)":"rgba(209, 50, 150, 0.05)"};
  border: 1px solid rgba(209, 50, 150, 0.1);
  color: var(--gray-700);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  font-weight: var(--font-medium);

  &:hover {
    background: rgba(209, 50, 150, 0.15);
    color: #d13296;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-1) var(--spacing-2);
  }
`,YS=p.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>e.$avatar?`url(${e.$avatar}) center/cover`:"var(--primary-gradient)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: var(--font-bold);
  font-size: var(--font-size-xs);
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 10px;
  }
`,ty=p.span`
  font-size: var(--font-size-sm);
  
  @media (max-width: 768px) {
    display: none;
  }
`,zO=p(F.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: var(--spacing-2);
  background: var(--white);
  border: 1px solid rgba(209, 50, 150, 0.1);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  min-width: 220px;
  z-index: 1000;
  overflow: hidden;

  @media (max-width: 768px) {
    right: -10px;
    min-width: 200px;
  }
`,NO=p.div`
  padding: var(--spacing-4);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  background: rgba(209, 50, 150, 0.02);
`,DO=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-2);
`,MO=p(YS)`
  width: 40px;
  height: 40px;
  font-size: var(--font-size-sm);
`,UO=p.div`
  flex: 1;
`,FO=p.div`
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  font-size: var(--font-size-sm);
`,VO=p.div`
  color: var(--gray-600);
  font-size: var(--font-size-xs);
  margin-top: 2px;
`,BO=p.div`
  display: flex;
  gap: var(--spacing-4);
  margin-top: var(--spacing-2);
`,ry=p.div`
  text-align: center;
  flex: 1;
`,ny=p.div`
  font-weight: var(--font-bold);
  color: #d13296;
  font-size: var(--font-size-lg);
`,iy=p.div`
  color: var(--gray-600);
  font-size: var(--font-size-xs);
  margin-top: 2px;
`,qO=p.div`
  padding: var(--spacing-2);
`,HO=p(vt)`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  color: var(--gray-700);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  font-size: var(--font-size-sm);

  &:hover {
    background: rgba(209, 50, 150, 0.05);
    color: #d13296;
  }
`,WO=p.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  color: var(--gray-700);
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  font-size: var(--font-size-sm);
  cursor: pointer;

  &:hover {
    background: rgba(209, 50, 150, 0.05);
    color: #d13296;
  }
`,GO=p.div`
  padding: var(--spacing-4);
  text-align: center;
`,KO=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,YO=p.p`
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  line-height: 1.5;
`,JO=p(F.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  padding: var(--spacing-3);
  background: #4285F4;
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    background: #3367D6;
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`,QO=()=>{const{user:e,isAuthenticated:t,logout:r}=Zc(),{getFavoritesCount:n}=Xo(),{language:i}=Pe(),{showNotification:s}=Vt(),[o,a]=_.useState(!1),[l,u]=_.useState(0),d=_.useRef(null);_.useEffect(()=>{const b=v=>{d.current&&!d.current.contains(v.target)&&a(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]),_.useEffect(()=>{e&&t&&u(n())},[e,n]);const h=()=>{a(!o)},f=async()=>{try{window.location.href="/account",a(!1)}catch(b){console.error("Erreur lors de la connexion:",b)}},y=()=>{r(),a(!1),s({type:"success",title:i==="fr"?"Déconnexion réussie":"Successfully logged out",message:i==="fr"?"Vous avez été déconnecté avec succès":"You have been successfully logged out"})},m=(b,v)=>`${b.charAt(0)}${v.charAt(0)}`.toUpperCase(),x=()=>[{icon:c.jsx(or,{size:16}),label:i==="fr"?"Mes favoris":"My favorites",to:"/favorites",count:l},{icon:c.jsx(rc,{size:16}),label:i==="fr"?"Mes commandes":"My orders",to:"/orders"},{icon:c.jsx(Vp,{size:16}),label:i==="fr"?"Paramètres":"Settings",to:"/account"}];return c.jsxs($O,{ref:d,children:[c.jsxs(LO,{$isAuthenticated:t,onClick:h,whileTap:{scale:.95},children:[t&&e?c.jsxs(c.Fragment,{children:[c.jsx(YS,{$avatar:"",children:m(e.firstName,e.lastName)}),c.jsx(ty,{children:e.firstName})]}):c.jsxs(c.Fragment,{children:[c.jsx(nc,{size:20}),c.jsx(ty,{children:i==="fr"?"Compte":"Account"})]}),c.jsx(gR,{size:16,style:{transform:o?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"}})]}),c.jsx(bn,{children:o&&c.jsx(zO,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:t&&e?c.jsxs(c.Fragment,{children:[c.jsxs(NO,{children:[c.jsxs(DO,{children:[c.jsx(MO,{$avatar:"",children:m(e.firstName,e.lastName)}),c.jsxs(UO,{children:[c.jsxs(FO,{children:[e.firstName," ",e.lastName]}),c.jsx(VO,{children:e.email})]})]}),c.jsxs(BO,{children:[c.jsxs(ry,{children:[c.jsx(ny,{children:l}),c.jsx(iy,{children:i==="fr"?"Favoris":"Favorites"})]}),c.jsxs(ry,{children:[c.jsx(ny,{children:"0"}),c.jsx(iy,{children:i==="fr"?"Commandes":"Orders"})]})]})]}),c.jsxs(qO,{children:[x().map((b,v)=>c.jsxs(HO,{to:b.to,onClick:()=>a(!1),children:[b.icon,c.jsx("span",{children:b.label}),b.count!==void 0&&b.count>0&&c.jsx("span",{style:{marginLeft:"auto",fontSize:"12px",color:"#d13296"},children:b.count})]},v)),c.jsxs(WO,{onClick:y,children:[c.jsx(gS,{size:16}),c.jsx("span",{children:i==="fr"?"Déconnexion":"Logout"})]})]})]}):c.jsxs(GO,{children:[c.jsx(KO,{children:i==="fr"?"Connectez-vous":"Sign in"}),c.jsx(YO,{children:i==="fr"?"Connectez-vous pour accéder à vos favoris, commandes et paramètres":"Sign in to access your favorites, orders and settings"}),c.jsxs(JO,{onClick:f,whileHover:{scale:1.02},whileTap:{scale:.98},children:[c.jsx(yR,{size:16}),c.jsx("span",{children:i==="fr"?"Continuer avec Google":"Continue with Google"})]})]})})})]})};function eu(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function XO(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function a(d){try{u(n.next(d))}catch(h){o(h)}}function l(d){try{u(n.throw(d))}catch(h){o(h)}}function u(d){d.done?s(d.value):i(d.value).then(a,l)}u((n=n.apply(e,t||[])).next())})}const ZO=e=>e?(...t)=>e(...t):(...t)=>fetch(...t);class Jp extends Error{constructor(t,r="FunctionsError",n){super(t),this.name=r,this.context=n}}class e3 extends Jp{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class sy extends Jp{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class oy extends Jp{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Qh;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Qh||(Qh={}));class t3{constructor(t,{headers:r={},customFetch:n,region:i=Qh.Any}={}){this.url=t,this.headers=r,this.region=i,this.fetch=ZO(n)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t){return XO(this,arguments,void 0,function*(r,n={}){var i;let s,o;try{const{headers:a,method:l,body:u,signal:d,timeout:h}=n;let f={},{region:y}=n;y||(y=this.region);const m=new URL(`${this.url}/${r}`);y&&y!=="any"&&(f["x-region"]=y,m.searchParams.set("forceFunctionRegion",y));let x;u&&(a&&!Object.prototype.hasOwnProperty.call(a,"Content-Type")||!a)?typeof Blob<"u"&&u instanceof Blob||u instanceof ArrayBuffer?(f["Content-Type"]="application/octet-stream",x=u):typeof u=="string"?(f["Content-Type"]="text/plain",x=u):typeof FormData<"u"&&u instanceof FormData?x=u:(f["Content-Type"]="application/json",x=JSON.stringify(u)):u&&typeof u!="string"&&!(typeof Blob<"u"&&u instanceof Blob)&&!(u instanceof ArrayBuffer)&&!(typeof FormData<"u"&&u instanceof FormData)?x=JSON.stringify(u):x=u;let b=d;h&&(o=new AbortController,s=setTimeout(()=>o.abort(),h),d?(b=o.signal,d.addEventListener("abort",()=>o.abort())):b=o.signal);const v=yield this.fetch(m.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},f),this.headers),a),body:x,signal:b}).catch(C=>{throw new e3(C)}),g=v.headers.get("x-relay-error");if(g&&g==="true")throw new sy(v);if(!v.ok)throw new oy(v);let w=((i=v.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),k;return w==="application/json"?k=yield v.json():w==="application/octet-stream"||w==="application/pdf"?k=yield v.blob():w==="text/event-stream"?k=v:w==="multipart/form-data"?k=yield v.formData():k=yield v.text(),{data:k,error:null,response:v}}catch(a){return{data:null,error:a,response:a instanceof oy||a instanceof sy?a.context:void 0}}finally{s&&clearTimeout(s)}})}}var r3=class extends Error{constructor(e){super(e.message),this.name="PostgrestError",this.details=e.details,this.hint=e.hint,this.code=e.code}},n3=class{constructor(e){var t,r;this.shouldThrowOnError=!1,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=(t=e.shouldThrowOnError)!==null&&t!==void 0?t:!1,this.signal=e.signal,this.isMaybeSingle=(r=e.isMaybeSingle)!==null&&r!==void 0?r:!1,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}then(e,t){var r=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const n=this.fetch;let i=n(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{let o=null,a=null,l=null,u=s.status,d=s.statusText;if(s.ok){var h,f;if(r.method!=="HEAD"){var y;const v=await s.text();v===""||(r.headers.get("Accept")==="text/csv"||r.headers.get("Accept")&&(!((y=r.headers.get("Accept"))===null||y===void 0)&&y.includes("application/vnd.pgrst.plan+text"))?a=v:a=JSON.parse(v))}const x=(h=r.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),b=(f=s.headers.get("content-range"))===null||f===void 0?void 0:f.split("/");x&&b&&b.length>1&&(l=parseInt(b[1])),r.isMaybeSingle&&r.method==="GET"&&Array.isArray(a)&&(a.length>1?(o={code:"PGRST116",details:`Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},a=null,l=null,u=406,d="Not Acceptable"):a.length===1?a=a[0]:a=null)}else{var m;const x=await s.text();try{o=JSON.parse(x),Array.isArray(o)&&s.status===404&&(a=[],o=null,u=200,d="OK")}catch{s.status===404&&x===""?(u=204,d="No Content"):o={message:x}}if(o&&r.isMaybeSingle&&(!(o==null||(m=o.details)===null||m===void 0)&&m.includes("0 rows"))&&(o=null,u=200,d="OK"),o&&r.shouldThrowOnError)throw new r3(o)}return{error:o,data:a,count:l,status:u,statusText:d}});return this.shouldThrowOnError||(i=i.catch(s=>{var o;let a="";const l=s==null?void 0:s.cause;if(l){var u,d,h,f;const m=(u=l==null?void 0:l.message)!==null&&u!==void 0?u:"",x=(d=l==null?void 0:l.code)!==null&&d!==void 0?d:"";a=`${(h=s==null?void 0:s.name)!==null&&h!==void 0?h:"FetchError"}: ${s==null?void 0:s.message}`,a+=`

Caused by: ${(f=l==null?void 0:l.name)!==null&&f!==void 0?f:"Error"}: ${m}`,x&&(a+=` (${x})`),l!=null&&l.stack&&(a+=`
${l.stack}`)}else{var y;a=(y=s==null?void 0:s.stack)!==null&&y!==void 0?y:""}return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:a,hint:"",code:""},data:null,count:null,status:0,statusText:""}})),i.then(e,t)}returns(){return this}overrideTypes(){return this}},i3=class extends n3{select(e){let t=!1;const r=(e??"*").split("").map(n=>/\s/.test(n)&&!t?"":(n==='"'&&(t=!t),n)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(e,{ascending:t=!0,nullsFirst:r,foreignTable:n,referencedTable:i=n}={}){const s=i?`${i}.order`:"order",o=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${o?`${o},`:""}${e}.${t?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(e,{foreignTable:t,referencedTable:r=t}={}){const n=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(n,`${e}`),this}range(e,t,{foreignTable:r,referencedTable:n=r}={}){const i=typeof n>"u"?"offset":`${n}.offset`,s=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(s,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:e=!1,verbose:t=!1,settings:r=!1,buffers:n=!1,wal:i=!1,format:s="text"}={}){var o;const a=[e?"analyze":null,t?"verbose":null,r?"settings":null,n?"buffers":null,i?"wal":null].filter(Boolean).join("|"),l=(o=this.headers.get("Accept"))!==null&&o!==void 0?o:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${l}"; options=${a};`),s==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(e){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${e}`),this}};const ay=new RegExp("[,()]");var mi=class extends i3{eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(",")}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(",")}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(",")}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(",")}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){const r=Array.from(new Set(t)).map(n=>typeof n=="string"&&ay.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(e,`in.(${r})`),this}notIn(e,t){const r=Array.from(new Set(t)).map(n=>typeof n=="string"&&ay.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(e,`not.in.(${r})`),this}contains(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(",")}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t=="string"?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(",")}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t=="string"?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(",")}}`),this}textSearch(e,t,{config:r,type:n}={}){let i="";n==="plain"?i="pl":n==="phrase"?i="ph":n==="websearch"&&(i="w");const s=r===void 0?"":`(${r})`;return this.url.searchParams.append(e,`${i}fts${s}.${t}`),this}match(e){return Object.entries(e).forEach(([t,r])=>{this.url.searchParams.append(t,`eq.${r}`)}),this}not(e,t,r){return this.url.searchParams.append(e,`not.${t}.${r}`),this}or(e,{foreignTable:t,referencedTable:r=t}={}){const n=r?`${r}.or`:"or";return this.url.searchParams.append(n,`(${e})`),this}filter(e,t,r){return this.url.searchParams.append(e,`${t}.${r}`),this}},s3=class{constructor(e,{headers:t={},schema:r,fetch:n}){this.url=e,this.headers=new Headers(t),this.schema=r,this.fetch=n}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){const{head:r=!1,count:n}=t??{},i=r?"HEAD":"GET";let s=!1;const o=(e??"*").split("").map(u=>/\s/.test(u)&&!s?"":(u==='"'&&(s=!s),u)).join(""),{url:a,headers:l}=this.cloneRequestState();return a.searchParams.set("select",o),n&&l.append("Prefer",`count=${n}`),new mi({method:i,url:a,headers:l,schema:this.schema,fetch:this.fetch})}insert(e,{count:t,defaultToNull:r=!0}={}){var n;const i="POST",{url:s,headers:o}=this.cloneRequestState();if(t&&o.append("Prefer",`count=${t}`),r||o.append("Prefer","missing=default"),Array.isArray(e)){const a=e.reduce((l,u)=>l.concat(Object.keys(u)),[]);if(a.length>0){const l=[...new Set(a)].map(u=>`"${u}"`);s.searchParams.set("columns",l.join(","))}}return new mi({method:i,url:s,headers:o,schema:this.schema,body:e,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch})}upsert(e,{onConflict:t,ignoreDuplicates:r=!1,count:n,defaultToNull:i=!0}={}){var s;const o="POST",{url:a,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),t!==void 0&&a.searchParams.set("on_conflict",t),n&&l.append("Prefer",`count=${n}`),i||l.append("Prefer","missing=default"),Array.isArray(e)){const u=e.reduce((d,h)=>d.concat(Object.keys(h)),[]);if(u.length>0){const d=[...new Set(u)].map(h=>`"${h}"`);a.searchParams.set("columns",d.join(","))}}return new mi({method:o,url:a,headers:l,schema:this.schema,body:e,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch})}update(e,{count:t}={}){var r;const n="PATCH",{url:i,headers:s}=this.cloneRequestState();return t&&s.append("Prefer",`count=${t}`),new mi({method:n,url:i,headers:s,schema:this.schema,body:e,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch})}delete({count:e}={}){var t;const r="DELETE",{url:n,headers:i}=this.cloneRequestState();return e&&i.append("Prefer",`count=${e}`),new mi({method:r,url:n,headers:i,schema:this.schema,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch})}},o3=class JS{constructor(t,{headers:r={},schema:n,fetch:i}={}){this.url=t,this.headers=new Headers(r),this.schemaName=n,this.fetch=i}from(t){if(!t||typeof t!="string"||t.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new s3(new URL(`${this.url}/${t}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new JS(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,r={},{head:n=!1,get:i=!1,count:s}={}){var o;let a;const l=new URL(`${this.url}/rpc/${t}`);let u;const d=y=>y!==null&&typeof y=="object"&&(!Array.isArray(y)||y.some(d)),h=n&&Object.values(r).some(d);h?(a="POST",u=r):n||i?(a=n?"HEAD":"GET",Object.entries(r).filter(([y,m])=>m!==void 0).map(([y,m])=>[y,Array.isArray(m)?`{${m.join(",")}}`:`${m}`]).forEach(([y,m])=>{l.searchParams.append(y,m)})):(a="POST",u=r);const f=new Headers(this.headers);return h?f.set("Prefer",s?`count=${s},return=minimal`:"return=minimal"):s&&f.set("Prefer",`count=${s}`),new mi({method:a,url:l,headers:f,schema:this.schemaName,body:u,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}};class a3{constructor(){}static detectEnvironment(){var t;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((t=navigator.userAgent)===null||t===void 0)&&t.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const n=r.versions;if(n&&n.node){const i=n.node,s=parseInt(i.replace(/^v/,"").split(".")[0]);return s>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${s} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${s} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const t=this.detectEnvironment();if(t.constructor)return t.constructor;let r=t.error||"WebSocket not supported in this environment.";throw t.workaround&&(r+=`

Suggested solution: ${t.workaround}`),new Error(r)}static createWebSocket(t,r){const n=this.getWebSocketConstructor();return new n(t,r)}static isWebSocketSupported(){try{const t=this.detectEnvironment();return t.type==="native"||t.type==="ws"}catch{return!1}}}const l3="2.90.1",c3=`realtime-js/${l3}`,QS="1.0.0",u3="2.0.0",ly=QS,Xh=1e4,d3=1e3,h3=100;var Hr;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(Hr||(Hr={}));var De;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(De||(De={}));var Qt;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(Qt||(Qt={}));var Zh;(function(e){e.websocket="websocket"})(Zh||(Zh={}));var In;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(In||(In={}));class f3{constructor(t){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=t??[]}encode(t,r){if(t.event===this.BROADCAST_EVENT&&!(t.payload instanceof ArrayBuffer)&&typeof t.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(t));let n=[t.join_ref,t.ref,t.topic,t.event,t.payload];return r(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(t){var r;return this._isArrayBuffer((r=t.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(t):this._encodeJsonUserBroadcastPush(t)}_encodeBinaryUserBroadcastPush(t){var r,n;const i=(n=(r=t.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(t,this.BINARY_ENCODING,i)}_encodeJsonUserBroadcastPush(t){var r,n;const i=(n=(r=t.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:{},o=new TextEncoder().encode(JSON.stringify(i)).buffer;return this._encodeUserBroadcastPush(t,this.JSON_ENCODING,o)}_encodeUserBroadcastPush(t,r,n){var i,s;const o=t.topic,a=(i=t.ref)!==null&&i!==void 0?i:"",l=(s=t.join_ref)!==null&&s!==void 0?s:"",u=t.payload.event,d=this.allowedMetadataKeys?this._pick(t.payload,this.allowedMetadataKeys):{},h=Object.keys(d).length===0?"":JSON.stringify(d);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`ref length ${a.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const f=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+a.length+o.length+u.length+h.length,y=new ArrayBuffer(this.HEADER_LENGTH+f);let m=new DataView(y),x=0;m.setUint8(x++,this.KINDS.userBroadcastPush),m.setUint8(x++,l.length),m.setUint8(x++,a.length),m.setUint8(x++,o.length),m.setUint8(x++,u.length),m.setUint8(x++,h.length),m.setUint8(x++,r),Array.from(l,v=>m.setUint8(x++,v.charCodeAt(0))),Array.from(a,v=>m.setUint8(x++,v.charCodeAt(0))),Array.from(o,v=>m.setUint8(x++,v.charCodeAt(0))),Array.from(u,v=>m.setUint8(x++,v.charCodeAt(0))),Array.from(h,v=>m.setUint8(x++,v.charCodeAt(0)));var b=new Uint8Array(y.byteLength+n.byteLength);return b.set(new Uint8Array(y),0),b.set(new Uint8Array(n),y.byteLength),b.buffer}decode(t,r){if(this._isArrayBuffer(t)){let n=this._binaryDecode(t);return r(n)}if(typeof t=="string"){const n=JSON.parse(t),[i,s,o,a,l]=n;return r({join_ref:i,ref:s,topic:o,event:a,payload:l})}return r({})}_binaryDecode(t){const r=new DataView(t),n=r.getUint8(0),i=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(t,r,i)}}_decodeUserBroadcast(t,r,n){const i=r.getUint8(1),s=r.getUint8(2),o=r.getUint8(3),a=r.getUint8(4);let l=this.HEADER_LENGTH+4;const u=n.decode(t.slice(l,l+i));l=l+i;const d=n.decode(t.slice(l,l+s));l=l+s;const h=n.decode(t.slice(l,l+o));l=l+o;const f=t.slice(l,t.byteLength),y=a===this.JSON_ENCODING?JSON.parse(n.decode(f)):f,m={type:this.BROADCAST_EVENT,event:d,payload:y};return o>0&&(m.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:u,event:this.BROADCAST_EVENT,payload:m}}_isArrayBuffer(t){var r;return t instanceof ArrayBuffer||((r=t==null?void 0:t.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(t,r){return!t||typeof t!="object"?{}:Object.fromEntries(Object.entries(t).filter(([n])=>r.includes(n)))}}class XS{constructor(t,r){this.callback=t,this.timerCalc=r,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=r}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ue;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(ue||(ue={}));const cy=(e,t,r={})=>{var n;const i=(n=r.skipTypes)!==null&&n!==void 0?n:[];return t?Object.keys(t).reduce((s,o)=>(s[o]=p3(o,e,t,i),s),{}):{}},p3=(e,t,r,n)=>{const i=t.find(a=>a.name===e),s=i==null?void 0:i.type,o=r[e];return s&&!n.includes(s)?ZS(s,o):ef(o)},ZS=(e,t)=>{if(e.charAt(0)==="_"){const r=e.slice(1,e.length);return y3(t,r)}switch(e){case ue.bool:return g3(t);case ue.float4:case ue.float8:case ue.int2:case ue.int4:case ue.int8:case ue.numeric:case ue.oid:return m3(t);case ue.json:case ue.jsonb:return v3(t);case ue.timestamp:return w3(t);case ue.abstime:case ue.date:case ue.daterange:case ue.int4range:case ue.int8range:case ue.money:case ue.reltime:case ue.text:case ue.time:case ue.timestamptz:case ue.timetz:case ue.tsrange:case ue.tstzrange:return ef(t);default:return ef(t)}},ef=e=>e,g3=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},m3=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},v3=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch{return e}return e},y3=(e,t)=>{if(typeof e!="string")return e;const r=e.length-1,n=e[r];if(e[0]==="{"&&n==="}"){let s;const o=e.slice(1,r);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(a=>ZS(t,a))}return e},w3=e=>typeof e=="string"?e.replace(" ","T"):e,ek=e=>{const t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,"http"),t.pathname=t.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),t.pathname===""||t.pathname==="/"?t.pathname="/api/broadcast":t.pathname=t.pathname+"/api/broadcast",t.href};class Qu{constructor(t,r,n={},i=Xh){this.channel=t,this.event=r,this.payload=n,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,r){var n;return this._hasReceived(t)&&r((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:t,callback:r}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=r=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=r,this._matchReceive(r)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,r){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:r})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(r))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var uy;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(uy||(uy={}));class Xs{constructor(t,r){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=(r==null?void 0:r.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Xs.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=Xs.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],a()}),this.channel._on(n.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:a}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Xs.syncDiff(this.state,i,s,o),a())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,r,n,i){const s=this.cloneDeep(t),o=this.transformState(r),a={},l={};return this.map(s,(u,d)=>{o[u]||(l[u]=d)}),this.map(o,(u,d)=>{const h=s[u];if(h){const f=d.map(b=>b.presence_ref),y=h.map(b=>b.presence_ref),m=d.filter(b=>y.indexOf(b.presence_ref)<0),x=h.filter(b=>f.indexOf(b.presence_ref)<0);m.length>0&&(a[u]=m),x.length>0&&(l[u]=x)}else a[u]=d}),this.syncDiff(s,{joins:a,leaves:l},n,i)}static syncDiff(t,r,n,i){const{joins:s,leaves:o}={joins:this.transformState(r.joins),leaves:this.transformState(r.leaves)};return n||(n=()=>{}),i||(i=()=>{}),this.map(s,(a,l)=>{var u;const d=(u=t[a])!==null&&u!==void 0?u:[];if(t[a]=this.cloneDeep(l),d.length>0){const h=t[a].map(y=>y.presence_ref),f=d.filter(y=>h.indexOf(y.presence_ref)<0);t[a].unshift(...f)}n(a,d,l)}),this.map(o,(a,l)=>{let u=t[a];if(!u)return;const d=l.map(h=>h.presence_ref);u=u.filter(h=>d.indexOf(h.presence_ref)<0),t[a]=u,i(a,u,l),u.length===0&&delete t[a]}),t}static map(t,r){return Object.getOwnPropertyNames(t).map(n=>r(n,t[n]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((r,n)=>{const i=t[n];return"metas"in i?r[n]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):r[n]=i,r},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var dy;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(dy||(dy={}));var Zs;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(Zs||(Zs={}));var xr;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(xr||(xr={}));class zi{constructor(t,r={config:{}},n){var i,s;if(this.topic=t,this.params=r,this.socket=n,this.bindings={},this.state=De.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.timeout=this.socket.timeout,this.joinPush=new Qu(this,Qt.join,this.params,this.timeout),this.rejoinTimer=new XS(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=De.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=De.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=De.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=De.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=De.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Qt.reply,{},(o,a)=>{this._trigger(this._replyEventName(a),o)}),this.presence=new Xs(this),this.broadcastEndpointURL=ek(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((s=(i=this.params.config)===null||i===void 0?void 0:i.broadcast)===null||s===void 0)&&s.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(t,r=this.timeout){var n,i,s;if(this.socket.isConnected()||this.socket.connect(),this.state==De.closed){const{config:{broadcast:o,presence:a,private:l}}=this.params,u=(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(y=>y.filter))!==null&&i!==void 0?i:[],d=!!this.bindings[Zs.PRESENCE]&&this.bindings[Zs.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,h={},f={broadcast:o,presence:Object.assign(Object.assign({},a),{enabled:d}),postgres_changes:u,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(y=>t==null?void 0:t(xr.CHANNEL_ERROR,y)),this._onClose(()=>t==null?void 0:t(xr.CLOSED)),this.updateJoinPayload(Object.assign({config:f},h)),this.joinedOnce=!0,this._rejoin(r),this.joinPush.receive("ok",async({postgres_changes:y})=>{var m;if(this.socket._isManualToken()||this.socket.setAuth(),y===void 0){t==null||t(xr.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,b=(m=x==null?void 0:x.length)!==null&&m!==void 0?m:0,v=[];for(let g=0;g<b;g++){const w=x[g],{filter:{event:k,schema:C,table:S,filter:E}}=w,j=y&&y[g];if(j&&j.event===k&&zi.isFilterValueEqual(j.schema,C)&&zi.isFilterValueEqual(j.table,S)&&zi.isFilterValueEqual(j.filter,E))v.push(Object.assign(Object.assign({},w),{id:j.id}));else{this.unsubscribe(),this.state=De.errored,t==null||t(xr.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=v,t&&t(xr.SUBSCRIBED);return}}).receive("error",y=>{this.state=De.errored,t==null||t(xr.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(y).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(xr.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,r={}){return await this.send({type:"presence",event:"track",payload:t},r.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,r,n){return this.state===De.joined&&t===Zs.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(t,r,n)}async httpSend(t,r,n={}){var i;if(r==null)return Promise.reject("Payload is required for httpSend()");const s={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(s.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o={method:"POST",headers:s,body:JSON.stringify({messages:[{topic:this.subTopic,event:t,payload:r,private:this.private}]})},a=await this._fetchWithTimeout(this.broadcastEndpointURL,o,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);if(a.status===202)return{success:!0};let l=a.statusText;try{const u=await a.json();l=u.error||u.message||l}catch{}return Promise.reject(new Error(l))}async send(t,r={}){var n,i;if(!this._canPush()&&t.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:o}=t,a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:a,body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o,private:this.private}]})};try{const u=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=u.body)===null||i===void 0?void 0:i.cancel()),u.ok?"ok":"error"}catch(u){return u.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,a,l;const u=this._push(t.type,t,r.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(a=(o=this.params)===null||o===void 0?void 0:o.config)===null||a===void 0?void 0:a.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("error",()=>s("error")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=De.leaving;const r=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Qt.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(i=>{n=new Qu(this,Qt.leave,{},t),n.receive("ok",()=>{r(),i("ok")}).receive("timeout",()=>{r(),i("timed out")}).receive("error",()=>{i("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n==null||n.destroy()})}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=De.closed,this.bindings={}}async _fetchWithTimeout(t,r,n){const i=new AbortController,s=setTimeout(()=>i.abort(),n),o=await this.socket.fetch(t,Object.assign(Object.assign({},r),{signal:i.signal}));return clearTimeout(s),o}_push(t,r,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Qu(this,t,r,n);return this._canPush()?i.send():this._addToPushBuffer(i),i}_addToPushBuffer(t){if(t.startTimeout(),this.pushBuffer.push(t),this.pushBuffer.length>h3){const r=this.pushBuffer.shift();r&&(r.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload))}}_onMessage(t,r,n){return r}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,r,n){var i,s;const o=t.toLocaleLowerCase(),{close:a,error:l,leave:u,join:d}=Qt;if(n&&[a,l,u,d].indexOf(o)>=0&&n!==this._joinRef())return;let f=this._onMessage(o,r,n);if(r&&!f)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(y=>{var m,x,b;return((m=y.filter)===null||m===void 0?void 0:m.event)==="*"||((b=(x=y.filter)===null||x===void 0?void 0:x.event)===null||b===void 0?void 0:b.toLocaleLowerCase())===o}).map(y=>y.callback(f,n)):(s=this.bindings[o])===null||s===void 0||s.filter(y=>{var m,x,b,v,g,w,k,C;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in y){const S=y.id,E=(m=y.filter)===null||m===void 0?void 0:m.event;return S&&((x=r.ids)===null||x===void 0?void 0:x.includes(S))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((b=r.data)===null||b===void 0?void 0:b.type.toLocaleLowerCase()))&&(!(!((v=y.filter)===null||v===void 0)&&v.table)||y.filter.table===((g=r.data)===null||g===void 0?void 0:g.table))}else{const S=(k=(w=y==null?void 0:y.filter)===null||w===void 0?void 0:w.event)===null||k===void 0?void 0:k.toLocaleLowerCase();return S==="*"||S===((C=r==null?void 0:r.event)===null||C===void 0?void 0:C.toLocaleLowerCase())}else return y.type.toLocaleLowerCase()===o}).map(y=>{if(typeof f=="object"&&"ids"in f){const m=f.data,{schema:x,table:b,commit_timestamp:v,type:g,errors:w}=m;f=Object.assign(Object.assign({},{schema:x,table:b,commit_timestamp:v,eventType:g,new:{},old:{},errors:w}),this._getPayloadRecords(m))}y.callback(f,n)})}_isClosed(){return this.state===De.closed}_isJoined(){return this.state===De.joined}_isJoining(){return this.state===De.joining}_isLeaving(){return this.state===De.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,r,n){const i=t.toLocaleLowerCase(),s={type:i,filter:r,callback:n};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(t,r){const n=t.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&zi.isEqual(i.filter,r))})),this}static isEqual(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const n in t)if(t[n]!==r[n])return!1;return!0}static isFilterValueEqual(t,r){return(t??void 0)===(r??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(Qt.close,{},t)}_onError(t){this._on(Qt.error,{},r=>t(r))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=De.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const r={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(r.new=cy(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(r.old=cy(t.columns,t.old_record)),r}}const Xu=()=>{},Ca={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},x3=[1e3,2e3,5e3,1e4],b3=1e4,S3=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class k3{constructor(t,r){var n;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=Xh,this.transport=null,this.heartbeatIntervalMs=Ca.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Xu,this.ref=0,this.reconnectTimer=null,this.vsn=ly,this.logger=Xu,this.conn=null,this.sendBuffer=[],this.serializer=new f3,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._heartbeatSentAt=null,this._resolveFetch=i=>i?(...s)=>i(...s):(...s)=>fetch(...s),!(!((n=r==null?void 0:r.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey,this.endPoint=`${t}/${Zh.websocket}`,this.httpEndpoint=ek(t),this._initializeOptions(r),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(r==null?void 0:r.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=a3.createWebSocket(this.endpointURL())}catch(t){this._setConnectionState("disconnected");const r=t.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(t,r){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(t?this.conn.close(t,r??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(t){const r=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),r}async removeAllChannels(){const t=await Promise.all(this.channels.map(r=>r.unsubscribe()));return this.channels=[],this.disconnect(),t}log(t,r,n){this.logger(t,r,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Hr.connecting:return In.Connecting;case Hr.open:return In.Open;case Hr.closing:return In.Closing;default:return In.Closed}}isConnected(){return this.connectionState()===In.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(t,r={config:{}}){const n=`realtime:${t}`,i=this.getChannels().find(s=>s.topic===n);if(i)return i;{const s=new zi(`realtime:${t}`,r,this);return this.channels.push(s),s}}push(t){const{topic:r,event:n,payload:i,ref:s}=t,o=()=>{this.encode(t,a=>{var l;(l=this.conn)===null||l===void 0||l.send(a)})};this.log("push",`${r} ${n} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}async setAuth(t=null){this._authPromise=this._performAuth(t);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var t;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this._heartbeatSentAt=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this._wasManualDisconnect=!1,(t=this.conn)===null||t===void 0||t.close(d3,"heartbeat timeout"),setTimeout(()=>{var r;this.isConnected()||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout()},Ca.HEARTBEAT_TIMEOUT_FALLBACK);return}this._heartbeatSentAt=Date.now(),this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this._setAuthSafely("heartbeat")}onHeartbeat(t){this.heartbeatCallback=t}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let r=this.channels.find(n=>n.topic===t&&(n._isJoined()||n._isJoining()));r&&(this.log("transport",`leaving duplicate topic "${t}"`),r.unsubscribe())}_remove(t){this.channels=this.channels.filter(r=>r.topic!==t.topic)}_onConnMessage(t){this.decode(t.data,r=>{if(r.topic==="phoenix"&&r.event==="phx_reply"&&r.ref&&r.ref===this.pendingHeartbeatRef){const u=this._heartbeatSentAt?Date.now()-this._heartbeatSentAt:void 0;try{this.heartbeatCallback(r.payload.status==="ok"?"ok":"error",u)}catch(d){this.log("error","error in heartbeat callback",d)}this._heartbeatSentAt=null,this.pendingHeartbeatRef=null}const{topic:n,event:i,payload:s,ref:o}=r,a=o?`(${o})`:"",l=s.status||"";this.log("receive",`${l} ${n} ${i} ${a}`.trim(),s),this.channels.filter(u=>u._isMember(n)).forEach(u=>u._trigger(i,s,o)),this._triggerStateCallbacks("message",r)})}_clearTimer(t){var r;t==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):t==="reconnect"&&((r=this.reconnectTimer)===null||r===void 0||r.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t),this.conn.readyState===Hr.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===Hr.open||this.conn.readyState===Hr.connecting)try{this.conn.close()}catch(t){this.log("error","Error closing connection",t)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(t=>t.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(r=>{this.log("error","error waiting for auth on connect",r),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(t){var r;this._setConnectionState("disconnected"),this.log("transport","close",t),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(r=this.reconnectTimer)===null||r===void 0||r.scheduleTimeout(),this._triggerStateCallbacks("close",t)}_onConnError(t){this._setConnectionState("disconnected"),this.log("transport",`${t}`),this._triggerChanError(),this._triggerStateCallbacks("error",t)}_triggerChanError(){this.channels.forEach(t=>t._trigger(Qt.error))}_appendParams(t,r){if(Object.keys(r).length===0)return t;const n=t.match(/\?/)?"&":"?",i=new URLSearchParams(r);return`${t}${n}${i}`}_workerObjectUrl(t){let r;if(t)r=t;else{const n=new Blob([S3],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_setConnectionState(t,r=!1){this._connectionState=t,t==="connecting"?this._wasManualDisconnect=!1:t==="disconnecting"&&(this._wasManualDisconnect=r)}async _performAuth(t=null){let r,n=!1;if(t)r=t,n=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(i){this.log("error","Error fetching access token from callback",i),r=this.accessTokenValue}else r=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(i=>{const s={access_token:r,version:c3};r&&i.updateJoinPayload(s),i.joinedOnce&&i._isJoined()&&i._push(Qt.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(t="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${t}`,r)})}_triggerStateCallbacks(t,r){try{this.stateChangeCallbacks[t].forEach(n=>{try{n(r)}catch(i){this.log("error",`error in ${t} callback`,i)}})}catch(n){this.log("error",`error triggering ${t} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new XS(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Ca.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(t){var r,n,i,s,o,a,l,u,d,h,f,y;switch(this.transport=(r=t==null?void 0:t.transport)!==null&&r!==void 0?r:null,this.timeout=(n=t==null?void 0:t.timeout)!==null&&n!==void 0?n:Xh,this.heartbeatIntervalMs=(i=t==null?void 0:t.heartbeatIntervalMs)!==null&&i!==void 0?i:Ca.HEARTBEAT_INTERVAL,this.worker=(s=t==null?void 0:t.worker)!==null&&s!==void 0?s:!1,this.accessToken=(o=t==null?void 0:t.accessToken)!==null&&o!==void 0?o:null,this.heartbeatCallback=(a=t==null?void 0:t.heartbeatCallback)!==null&&a!==void 0?a:Xu,this.vsn=(l=t==null?void 0:t.vsn)!==null&&l!==void 0?l:ly,t!=null&&t.params&&(this.params=t.params),t!=null&&t.logger&&(this.logger=t.logger),(t!=null&&t.logLevel||t!=null&&t.log_level)&&(this.logLevel=t.logLevel||t.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(u=t==null?void 0:t.reconnectAfterMs)!==null&&u!==void 0?u:m=>x3[m-1]||b3,this.vsn){case QS:this.encode=(d=t==null?void 0:t.encode)!==null&&d!==void 0?d:(m,x)=>x(JSON.stringify(m)),this.decode=(h=t==null?void 0:t.decode)!==null&&h!==void 0?h:(m,x)=>x(JSON.parse(m));break;case u3:this.encode=(f=t==null?void 0:t.encode)!==null&&f!==void 0?f:this.serializer.encode.bind(this.serializer),this.decode=(y=t==null?void 0:t.decode)!==null&&y!==void 0?y:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=t==null?void 0:t.workerUrl}}}var Po=class extends Error{constructor(e,t){var r;super(e),this.name="IcebergError",this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType==="CommitStateUnknownException"||[500,502,504].includes(t.status)&&((r=t.icebergType)==null?void 0:r.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function _3(e,t,r){const n=new URL(t,e);if(r)for(const[i,s]of Object.entries(r))s!==void 0&&n.searchParams.set(i,s);return n.toString()}async function E3(e){return!e||e.type==="none"?{}:e.type==="bearer"?{Authorization:`Bearer ${e.token}`}:e.type==="header"?{[e.name]:e.value}:e.type==="custom"?await e.getHeaders():{}}function C3(e){const t=e.fetchImpl??globalThis.fetch;return{async request({method:r,path:n,query:i,body:s,headers:o}){const a=_3(e.baseUrl,n,i),l=await E3(e.auth),u=await t(a,{method:r,headers:{...s?{"Content-Type":"application/json"}:{},...l,...o},body:s?JSON.stringify(s):void 0}),d=await u.text(),h=(u.headers.get("content-type")||"").includes("application/json"),f=h&&d?JSON.parse(d):d;if(!u.ok){const y=h?f:void 0,m=y==null?void 0:y.error;throw new Po((m==null?void 0:m.message)??`Request failed with status ${u.status}`,{status:u.status,icebergType:m==null?void 0:m.type,icebergCode:m==null?void 0:m.code,details:y})}return{status:u.status,headers:u.headers,data:f}}}}function ja(e){return e.join("")}var j3=class{constructor(e,t=""){this.client=e,this.prefix=t}async listNamespaces(e){const t=e?{parent:ja(e.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(e,t){const r={namespace:e.namespace,properties:t==null?void 0:t.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ja(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ja(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ja(e.namespace)}`}),!0}catch(t){if(t instanceof Po&&t.status===404)return!1;throw t}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(r){if(r instanceof Po&&r.status===409)return;throw r}}};function oi(e){return e.join("")}var T3=class{constructor(e,t="",r){this.client=e,this.prefix=t,this.accessDelegation=r}async listTables(e){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables`,body:t,headers:r})).data.metadata}async updateTable(e,t){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(e,t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String((t==null?void 0:t.purge)??!1)}})}async loadTable(e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){const t={};this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${oi(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(r){if(r instanceof Po&&r.status===404)return!1;throw r}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(r){if(r instanceof Po&&r.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw r}}},P3=class{constructor(e){var n;let t="v1";e.catalogName&&(t+=`/${e.catalogName}`);const r=e.baseUrl.endsWith("/")?e.baseUrl:`${e.baseUrl}/`;this.client=C3({baseUrl:r,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=(n=e.accessDelegation)==null?void 0:n.join(","),this.namespaceOps=new j3(this.client,t),this.tableOps=new T3(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}},tu=class extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}};function we(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}var A3=class extends tu{constructor(e,t,r){super(e),this.name="StorageApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},tf=class extends tu{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}};const Qp=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),R3=()=>Response,rf=e=>{if(Array.isArray(e))return e.map(r=>rf(r));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([r,n])=>{const i=r.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));t[i]=rf(n)}),t},I3=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},O3=e=>!e||typeof e!="string"||e.length===0||e.length>100||e.trim()!==e||e.includes("/")||e.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e);function Ao(e){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ao(e)}function $3(e,t){if(Ao(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(Ao(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function L3(e){var t=$3(e,"string");return Ao(t)=="symbol"?t:t+""}function z3(e,t,r){return(t=L3(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hy(Object(r),!0).forEach(function(n){z3(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hy(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}const Zu=e=>{var t;return e.msg||e.message||e.error_description||(typeof e.error=="string"?e.error:(t=e.error)===null||t===void 0?void 0:t.message)||JSON.stringify(e)},N3=async(e,t,r)=>{e instanceof await R3()&&!(r!=null&&r.noResolveJson)?e.json().then(n=>{const i=e.status||500,s=(n==null?void 0:n.statusCode)||i+"";t(new A3(Zu(n),i,s))}).catch(n=>{t(new tf(Zu(n),n))}):t(new tf(Zu(e),e))},D3=(e,t,r,n)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?i:(I3(n)?(i.headers=q({"Content-Type":"application/json"},t==null?void 0:t.headers),i.body=JSON.stringify(n)):i.body=n,t!=null&&t.duplex&&(i.duplex=t.duplex),q(q({},i),r))};async function Zo(e,t,r,n,i,s){return new Promise((o,a)=>{e(r,D3(t,n,i,s)).then(l=>{if(!l.ok)throw l;return n!=null&&n.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>N3(l,a,n))})}async function Ro(e,t,r,n){return Zo(e,"GET",t,r,n)}async function Kt(e,t,r,n,i){return Zo(e,"POST",t,n,i,r)}async function nf(e,t,r,n,i){return Zo(e,"PUT",t,n,i,r)}async function M3(e,t,r,n){return Zo(e,"HEAD",t,q(q({},r),{},{noResolveJson:!0}),n)}async function Xp(e,t,r,n,i){return Zo(e,"DELETE",t,n,i,r)}var U3=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(we(t))return{data:null,error:t};throw t}}};let tk;tk=Symbol.toStringTag;var F3=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[tk]="BlobDownloadBuilder",this.promise=null}asStream(){return new U3(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(we(t))return{data:null,error:t};throw t}}};const V3={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},fy={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var B3=class{constructor(e,t={},r,n){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=r,this.fetch=Qp(n)}throwOnError(){return this.shouldThrowOnError=!0,this}async uploadOrUpdate(e,t,r,n){var i=this;try{let s;const o=q(q({},fy),n);let a=q(q({},i.headers),e==="POST"&&{"x-upsert":String(o.upsert)});const l=o.metadata;typeof Blob<"u"&&r instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),l&&s.append("metadata",i.encodeMetadata(l)),s.append("",r)):typeof FormData<"u"&&r instanceof FormData?(s=r,s.has("cacheControl")||s.append("cacheControl",o.cacheControl),l&&!s.has("metadata")&&s.append("metadata",i.encodeMetadata(l))):(s=r,a["cache-control"]=`max-age=${o.cacheControl}`,a["content-type"]=o.contentType,l&&(a["x-metadata"]=i.toBase64(i.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!o.duplex&&(o.duplex="half")),n!=null&&n.headers&&(a=q(q({},a),n.headers));const u=i._removeEmptyFolders(t),d=i._getFinalPath(u),h=await(e=="PUT"?nf:Kt)(i.fetch,`${i.url}/object/${d}`,s,q({headers:a},o!=null&&o.duplex?{duplex:o.duplex}:{}));return{data:{path:u,id:h.Id,fullPath:h.Key},error:null}}catch(s){if(i.shouldThrowOnError)throw s;if(we(s))return{data:null,error:s};throw s}}async upload(e,t,r){return this.uploadOrUpdate("POST",e,t,r)}async uploadToSignedUrl(e,t,r,n){var i=this;const s=i._removeEmptyFolders(e),o=i._getFinalPath(s),a=new URL(i.url+`/object/upload/sign/${o}`);a.searchParams.set("token",t);try{let l;const u=q({upsert:fy.upsert},n),d=q(q({},i.headers),{"x-upsert":String(u.upsert)});return typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType),{data:{path:s,fullPath:(await nf(i.fetch,a.toString(),l,{headers:d})).Key},error:null}}catch(l){if(i.shouldThrowOnError)throw l;if(we(l))return{data:null,error:l};throw l}}async createSignedUploadUrl(e,t){var r=this;try{let n=r._getFinalPath(e);const i=q({},r.headers);t!=null&&t.upsert&&(i["x-upsert"]="true");const s=await Kt(r.fetch,`${r.url}/object/upload/sign/${n}`,{},{headers:i}),o=new URL(r.url+s.url),a=o.searchParams.get("token");if(!a)throw new tu("No token returned by API");return{data:{signedUrl:o.toString(),path:e,token:a},error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(we(n))return{data:null,error:n};throw n}}async update(e,t,r){return this.uploadOrUpdate("PUT",e,t,r)}async move(e,t,r){var n=this;try{return{data:await Kt(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r==null?void 0:r.destinationBucket},{headers:n.headers}),error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(we(i))return{data:null,error:i};throw i}}async copy(e,t,r){var n=this;try{return{data:{path:(await Kt(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:e,destinationKey:t,destinationBucket:r==null?void 0:r.destinationBucket},{headers:n.headers})).Key},error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(we(i))return{data:null,error:i};throw i}}async createSignedUrl(e,t,r){var n=this;try{let i=n._getFinalPath(e),s=await Kt(n.fetch,`${n.url}/object/sign/${i}`,q({expiresIn:t},r!=null&&r.transform?{transform:r.transform}:{}),{headers:n.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return s={signedUrl:encodeURI(`${n.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(we(i))return{data:null,error:i};throw i}}async createSignedUrls(e,t,r){var n=this;try{const i=await Kt(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:t,paths:e},{headers:n.headers}),s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(o=>q(q({},o),{},{signedUrl:o.signedURL?encodeURI(`${n.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(we(i))return{data:null,error:i};throw i}}download(e,t){const r=typeof(t==null?void 0:t.transform)<"u"?"render/image/authenticated":"object",n=this.transformOptsToQueryString((t==null?void 0:t.transform)||{}),i=n?`?${n}`:"",s=this._getFinalPath(e),o=()=>Ro(this.fetch,`${this.url}/${r}/${s}${i}`,{headers:this.headers,noResolveJson:!0});return new F3(o,this.shouldThrowOnError)}async info(e){var t=this;const r=t._getFinalPath(e);try{return{data:rf(await Ro(t.fetch,`${t.url}/object/info/${r}`,{headers:t.headers})),error:null}}catch(n){if(t.shouldThrowOnError)throw n;if(we(n))return{data:null,error:n};throw n}}async exists(e){var t=this;const r=t._getFinalPath(e);try{return await M3(t.fetch,`${t.url}/object/${r}`,{headers:t.headers}),{data:!0,error:null}}catch(n){if(t.shouldThrowOnError)throw n;if(we(n)&&n instanceof tf){const i=n.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:n}}throw n}}getPublicUrl(e,t){const r=this._getFinalPath(e),n=[],i=t!=null&&t.download?`download=${t.download===!0?"":t.download}`:"";i!==""&&n.push(i);const s=typeof(t==null?void 0:t.transform)<"u"?"render/image":"object",o=this.transformOptsToQueryString((t==null?void 0:t.transform)||{});o!==""&&n.push(o);let a=n.join("&");return a!==""&&(a=`?${a}`),{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${r}${a}`)}}}async remove(e){var t=this;try{return{data:await Xp(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async list(e,t,r){var n=this;try{const i=q(q(q({},V3),t),{},{prefix:e||""});return{data:await Kt(n.fetch,`${n.url}/object/list/${n.bucketId}`,i,{headers:n.headers},r),error:null}}catch(i){if(n.shouldThrowOnError)throw i;if(we(i))return{data:null,error:i};throw i}}async listV2(e,t){var r=this;try{const n=q({},e);return{data:await Kt(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,n,{headers:r.headers},t),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(we(n))return{data:null,error:n};throw n}}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}};const rk="2.90.1",nk={"X-Client-Info":`storage-js/${rk}`};var q3=class{constructor(e,t={},r,n){this.shouldThrowOnError=!1;const i=new URL(e);n!=null&&n.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase.")),this.url=i.href.replace(/\/$/,""),this.headers=q(q({},nk),t),this.fetch=Qp(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async listBuckets(e){var t=this;try{const r=t.listBucketOptionsToQueryString(e);return{data:await Ro(t.fetch,`${t.url}/bucket${r}`,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async getBucket(e){var t=this;try{return{data:await Ro(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async createBucket(e,t={public:!1}){var r=this;try{return{data:await Kt(r.fetch,`${r.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:r.headers}),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(we(n))return{data:null,error:n};throw n}}async updateBucket(e,t){var r=this;try{return{data:await nf(r.fetch,`${r.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:r.headers}),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(we(n))return{data:null,error:n};throw n}}async emptyBucket(e){var t=this;try{return{data:await Kt(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async deleteBucket(e){var t=this;try{return{data:await Xp(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}listBucketOptionsToQueryString(e){const t={};return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}},H3=class{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=q(q({},nk),t),this.fetch=Qp(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async createBucket(e){var t=this;try{return{data:await Kt(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async listBuckets(e){var t=this;try{const r=new URLSearchParams;(e==null?void 0:e.limit)!==void 0&&r.set("limit",e.limit.toString()),(e==null?void 0:e.offset)!==void 0&&r.set("offset",e.offset.toString()),e!=null&&e.sortColumn&&r.set("sortColumn",e.sortColumn),e!=null&&e.sortOrder&&r.set("sortOrder",e.sortOrder),e!=null&&e.search&&r.set("search",e.search);const n=r.toString(),i=n?`${t.url}/bucket?${n}`:`${t.url}/bucket`;return{data:await Ro(t.fetch,i,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}async deleteBucket(e){var t=this;try{return{data:await Xp(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(we(r))return{data:null,error:r};throw r}}from(e){var t=this;if(!O3(e))throw new tu("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new P3({baseUrl:this.url,catalogName:e,auth:{type:"custom",getHeaders:async()=>t.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(r,{get(i,s){const o=i[s];return typeof o!="function"?o:async(...a)=>{try{return{data:await o.apply(i,a),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}};const Zp={"X-Client-Info":`storage-js/${rk}`,"Content-Type":"application/json"};var ik=class extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}};function kt(e){return typeof e=="object"&&e!==null&&"__isStorageVectorsError"in e}var ed=class extends ik{constructor(e,t,r){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},W3=class extends ik{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}};const eg=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),G3=e=>{if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},py=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),K3=async(e,t,r)=>{if(e&&typeof e=="object"&&"status"in e&&"ok"in e&&typeof e.status=="number"&&!(r!=null&&r.noResolveJson)){const n=e.status||500,i=e;if(typeof i.json=="function")i.json().then(s=>{const o=(s==null?void 0:s.statusCode)||(s==null?void 0:s.code)||n+"";t(new ed(py(s),n,o))}).catch(()=>{const s=n+"";t(new ed(i.statusText||`HTTP ${n} error`,n,s))});else{const s=n+"";t(new ed(i.statusText||`HTTP ${n} error`,n,s))}}else t(new W3(py(e),e))},Y3=(e,t,r,n)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"||!n?i:(G3(n)?(i.headers=q({"Content-Type":"application/json"},t==null?void 0:t.headers),i.body=JSON.stringify(n)):i.body=n,q(q({},i),r))};async function J3(e,t,r,n,i,s){return new Promise((o,a)=>{e(r,Y3(t,n,i,s)).then(l=>{if(!l.ok)throw l;if(n!=null&&n.noResolveJson)return l;const u=l.headers.get("content-type");return!u||!u.includes("application/json")?{}:l.json()}).then(l=>o(l)).catch(l=>K3(l,a,n))})}async function _t(e,t,r,n,i){return J3(e,"POST",t,n,i,r)}var Q3=class{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=q(q({},Zp),t),this.fetch=eg(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async createIndex(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{},error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async getIndex(e,t){var r=this;try{return{data:await _t(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:r.headers}),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(kt(n))return{data:null,error:n};throw n}}async listIndexes(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async deleteIndex(e,t){var r=this;try{return{data:await _t(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:r.headers})||{},error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(kt(n))return{data:null,error:n};throw n}}},X3=class{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=q(q({},Zp),t),this.fetch=eg(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async putVectors(e){var t=this;try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return{data:await _t(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{},error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async getVectors(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async listVectors(e){var t=this;try{if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return{data:await _t(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async queryVectors(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async deleteVectors(e){var t=this;try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return{data:await _t(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{},error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}},Z3=class{constructor(e,t={},r){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=q(q({},Zp),t),this.fetch=eg(r)}throwOnError(){return this.shouldThrowOnError=!0,this}async createBucket(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{},error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async getBucket(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async listBuckets(e={}){var t=this;try{return{data:await _t(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}),error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}async deleteBucket(e){var t=this;try{return{data:await _t(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{},error:null}}catch(r){if(t.shouldThrowOnError)throw r;if(kt(r))return{data:null,error:r};throw r}}},e$=class extends Z3{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new t$(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,r=this;return t().call(r,e)}async getBucket(e){var t=()=>super.getBucket,r=this;return t().call(r,e)}async listBuckets(e={}){var t=()=>super.listBuckets,r=this;return t().call(r,e)}async deleteBucket(e){var t=()=>super.deleteBucket,r=this;return t().call(r,e)}},t$=class extends Q3{constructor(e,t,r,n){super(e,t,n),this.vectorBucketName=r}async createIndex(e){var t=()=>super.createIndex,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,r=this;return t().call(r,r.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,r=this;return t().call(r,r.vectorBucketName,e)}index(e){return new r$(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},r$=class extends X3{constructor(e,t,r,n,i){super(e,t,i),this.vectorBucketName=r,this.indexName=n}async putVectors(e){var t=()=>super.putVectors,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(e){var t=()=>super.getVectors,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,r=this;return t().call(r,q(q({},e),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},n$=class extends q3{constructor(e,t={},r,n){super(e,t,r,n)}from(e){return new B3(this.url,this.headers,e,this.fetch)}get vectors(){return new e$(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new H3(this.url+"/iceberg",this.headers,this.fetch)}};const sk="2.90.1",vi=30*1e3,sf=3,td=sf*vi,i$="http://localhost:9999",s$="supabase.auth.token",o$={"X-Client-Info":`gotrue-js/${sk}`},of="X-Supabase-Api-Version",ok={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},a$=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,l$=10*60*1e3;class Io extends Error{constructor(t,r,n){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}}function D(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class c$ extends Io{constructor(t,r,n){super(t,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function u$(e){return D(e)&&e.name==="AuthApiError"}class On extends Io{constructor(t,r){super(t),this.name="AuthUnknownError",this.originalError=r}}class zr extends Io{constructor(t,r,n,i){super(t,n,i),this.name=r,this.status=n}}class bt extends zr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function d$(e){return D(e)&&e.name==="AuthSessionMissingError"}class ai extends zr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Ta extends zr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Pa extends zr{constructor(t,r=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function h$(e){return D(e)&&e.name==="AuthImplicitGrantRedirectError"}class gy extends zr{constructor(t,r=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class f$ extends zr{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class af extends zr{constructor(t,r){super(t,"AuthRetryableFetchError",r,void 0)}}function rd(e){return D(e)&&e.name==="AuthRetryableFetchError"}class my extends zr{constructor(t,r,n){super(t,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}}class lf extends zr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const cc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),vy=` 	
\r=`.split(""),p$=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<vy.length;t+=1)e[vy[t].charCodeAt(0)]=-2;for(let t=0;t<cc.length;t+=1)e[cc[t].charCodeAt(0)]=t;return e})();function yy(e,t,r){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(cc[n]),t.queuedBits-=6}else if(t.queuedBits>0)for(t.queue=t.queue<<6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;){const n=t.queue>>t.queuedBits-6&63;r(cc[n]),t.queuedBits-=6}}function ak(e,t,r){const n=p$[e];if(n>-1)for(t.queue=t.queue<<6|n,t.queuedBits+=6;t.queuedBits>=8;)r(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function wy(e){const t=[],r=o=>{t.push(String.fromCodePoint(o))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},s=o=>{v$(o,n,r)};for(let o=0;o<e.length;o+=1)ak(e.charCodeAt(o),i,s);return t.join("")}function g$(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function m$(e,t){for(let r=0;r<e.length;r+=1){let n=e.charCodeAt(r);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(e.charCodeAt(r+1)-56320&65535|i)+65536,r+=1}g$(n,t)}}function v$(e,t,r){if(t.utf8seq===0){if(e<=127){r(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&r(t.codepoint)}}function Bi(e){const t=[],r={queue:0,queuedBits:0},n=i=>{t.push(i)};for(let i=0;i<e.length;i+=1)ak(e.charCodeAt(i),r,n);return new Uint8Array(t)}function y$(e){const t=[];return m$(e,r=>t.push(r)),new Uint8Array(t)}function Fn(e){const t=[],r={queue:0,queuedBits:0},n=i=>{t.push(i)};return e.forEach(i=>yy(i,r,n)),yy(null,r,n),t.join("")}function w$(e){return Math.round(Date.now()/1e3)+e}function x$(){return Symbol("auth-callback")}const He=()=>typeof window<"u"&&typeof document<"u",_n={tested:!1,writable:!1},lk=()=>{if(!He())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(_n.tested)return _n.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),_n.tested=!0,_n.writable=!0}catch{_n.tested=!0,_n.writable=!1}return _n.writable};function b$(e){const t={},r=new URL(e);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((i,s)=>{t[s]=i})}catch{}return r.searchParams.forEach((n,i)=>{t[i]=n}),t}const ck=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),S$=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",yi=async(e,t,r)=>{await e.setItem(t,JSON.stringify(r))},En=async(e,t)=>{const r=await e.getItem(t);if(!r)return null;try{return JSON.parse(r)}catch{return r}},qe=async(e,t)=>{await e.removeItem(t)};class ru{constructor(){this.promise=new ru.promiseConstructor((t,r)=>{this.resolve=t,this.reject=r})}}ru.promiseConstructor=Promise;function nd(e){const t=e.split(".");if(t.length!==3)throw new lf("Invalid JWT structure");for(let n=0;n<t.length;n++)if(!a$.test(t[n]))throw new lf("JWT not in base64url format");return{header:JSON.parse(wy(t[0])),payload:JSON.parse(wy(t[1])),signature:Bi(t[2]),raw:{header:t[0],payload:t[1]}}}async function k$(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function _$(e,t){return new Promise((n,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){n(o);return}}catch(o){if(!t(s,o)){i(o);return}}})()})}function E$(e){return("0"+e.toString(16)).substr(-2)}function C$(){const t=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let i="";for(let s=0;s<56;s++)i+=r.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(t),Array.from(t,E$).join("")}async function j$(e){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r),i=new Uint8Array(n);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}async function T$(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const r=await j$(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function li(e,t,r=!1){const n=C$();let i=n;r&&(i+="/PASSWORD_RECOVERY"),await yi(e,`${t}-code-verifier`,i);const s=await T$(n);return[s,n===s?"plain":"s256"]}const P$=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function A$(e){const t=e.headers.get(of);if(!t||!t.match(P$))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function R$(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function I$(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const O$=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ci(e){if(!O$.test(e))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function id(){const e={};return new Proxy(e,{get:(t,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(t,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function $$(e,t){return new Proxy(e,{get:(r,n,i)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const s=n.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,n,i)}return!t.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),t.value=!0),Reflect.get(r,n,i)}})}function xy(e){return JSON.parse(JSON.stringify(e))}const Rn=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),L$=[502,503,504];async function by(e){var t;if(!S$(e))throw new af(Rn(e),0);if(L$.includes(e.status))throw new af(Rn(e),e.status);let r;try{r=await e.json()}catch(s){throw new On(Rn(s),s)}let n;const i=A$(e);if(i&&i.getTime()>=ok["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new my(Rn(r),e.status,((t=r.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(n==="session_not_found")throw new bt}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((s,o)=>s&&typeof o=="string",!0))throw new my(Rn(r),e.status,r.weak_password.reasons);throw new c$(Rn(r),e.status||500,n)}const z$=(e,t,r,n)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),r))};async function B(e,t,r,n){var i;const s=Object.assign({},n==null?void 0:n.headers);s[of]||(s[of]=ok["2024-01-01"].name),n!=null&&n.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const o=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(o.redirect_to=n.redirectTo);const a=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await N$(e,t,r+a,{headers:s,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function N$(e,t,r,n,i,s){const o=z$(t,n,i,s);let a;try{a=await e(r,Object.assign({},o))}catch(l){throw console.error(l),new af(Rn(l),0)}if(a.ok||await by(a),n!=null&&n.noResolveJson)return a;try{return await a.json()}catch(l){await by(l)}}function Ht(e){var t;let r=null;U$(e)&&(r=Object.assign({},e),e.expires_at||(r.expires_at=w$(e.expires_in)));const n=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:r,user:n},error:null}}function Sy(e){const t=Ht(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(t.data.weak_password=e.weak_password),t}function Yr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function D$(e){return{data:e,error:null}}function M$(e){const{action_link:t,email_otp:r,hashed_token:n,redirect_to:i,verification_type:s}=e,o=eu(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),a={action_link:t,email_otp:r,hashed_token:n,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:a,user:l},error:null}}function ky(e){return e}function U$(e){return e.access_token&&e.refresh_token&&e.expires_in}const sd=["global","local","others"];class F${constructor({url:t="",headers:r={},fetch:n}){this.url=t,this.headers=r,this.fetch=ck(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(t,r=sd[0]){if(sd.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${sd.join(", ")}`);try{return await B(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(n){if(D(n))return{data:null,error:n};throw n}}async inviteUserByEmail(t,r={}){try{return await B(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:Yr})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async generateLink(t){try{const{options:r}=t,n=eu(t,["options"]),i=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await B(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:M$,redirectTo:r==null?void 0:r.redirectTo})}catch(r){if(D(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(t){try{return await B(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Yr})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async listUsers(t){var r,n,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},d=await B(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:ky});if(d.error)throw d.error;const h=await d.json(),f=(o=d.headers.get("x-total-count"))!==null&&o!==void 0?o:0,y=(l=(a=d.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return y.length>0&&(y.forEach(m=>{const x=parseInt(m.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(m.split(";")[1].split("=")[1]);u[`${b}Page`]=x}),u.total=parseInt(f)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(D(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){ci(t);try{return await B(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Yr})}catch(r){if(D(r))return{data:{user:null},error:r};throw r}}async updateUserById(t,r){ci(t);try{return await B(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:r,headers:this.headers,xform:Yr})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async deleteUser(t,r=!1){ci(t);try{return await B(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:r},xform:Yr})}catch(n){if(D(n))return{data:{user:null},error:n};throw n}}async _listFactors(t){ci(t.userId);try{const{data:r,error:n}=await B(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:r,error:n}}catch(r){if(D(r))return{data:null,error:r};throw r}}async _deleteFactor(t){ci(t.userId),ci(t.id);try{return{data:await B(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}async _listOAuthClients(t){var r,n,i,s,o,a,l;try{const u={nextPage:null,lastPage:0,total:0},d=await B(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=t==null?void 0:t.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:ky});if(d.error)throw d.error;const h=await d.json(),f=(o=d.headers.get("x-total-count"))!==null&&o!==void 0?o:0,y=(l=(a=d.headers.get("link"))===null||a===void 0?void 0:a.split(","))!==null&&l!==void 0?l:[];return y.length>0&&(y.forEach(m=>{const x=parseInt(m.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(m.split(";")[1].split("=")[1]);u[`${b}Page`]=x}),u.total=parseInt(f)),{data:Object.assign(Object.assign({},h),u),error:null}}catch(u){if(D(u))return{data:{clients:[]},error:u};throw u}}async _createOAuthClient(t){try{return await B(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:t,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(D(r))return{data:null,error:r};throw r}}async _getOAuthClient(t){try{return await B(this.fetch,"GET",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(D(r))return{data:null,error:r};throw r}}async _updateOAuthClient(t,r){try{return await B(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${t}`,{body:r,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(D(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(t){try{return await B(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${t}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(D(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(t){try{return await B(this.fetch,"POST",`${this.url}/admin/oauth/clients/${t}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(D(r))return{data:null,error:r};throw r}}}function _y(e={}){return{getItem:t=>e[t]||null,setItem:(t,r)=>{e[t]=r},removeItem:t=>{delete e[t]}}}const ui={debug:!!(globalThis&&lk()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class uk extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class V$ extends uk{}async function B$(e,t,r){ui.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const n=new globalThis.AbortController;return t>0&&setTimeout(()=>{n.abort(),ui.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async i=>{if(i){ui.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,i.name);try{return await r()}finally{ui.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,i.name)}}else{if(t===0)throw ui.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new V$(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(ui.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await r()}}))}function q$(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function dk(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw new Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function H$(e){return parseInt(e,16)}function W$(e){const t=new TextEncoder().encode(e);return"0x"+Array.from(t,n=>n.toString(16).padStart(2,"0")).join("")}function G$(e){var t;const{chainId:r,domain:n,expirationTime:i,issuedAt:s=new Date,nonce:o,notBefore:a,requestId:l,resources:u,scheme:d,uri:h,version:f}=e;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(o&&o.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(f!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);if(!((t=e.statement)===null||t===void 0)&&t.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`)}const y=dk(e.address),m=d?`${d}://${n}`:n,x=e.statement?`${e.statement}
`:"",b=`${m} wants you to sign in with your Ethereum account:
${y}

${x}`;let v=`URI: ${h}
Version: ${f}
Chain ID: ${r}${o?`
Nonce: ${o}`:""}
Issued At: ${s.toISOString()}`;if(i&&(v+=`
Expiration Time: ${i.toISOString()}`),a&&(v+=`
Not Before: ${a.toISOString()}`),l&&(v+=`
Request ID: ${l}`),u){let g=`
Resources:`;for(const w of u){if(!w||typeof w!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);g+=`
- ${w}`}v+=g}return`${b}
${v}`}class Ie extends Error{constructor({message:t,code:r,cause:n,name:i}){var s;super(t,{cause:n}),this.__isWebAuthnError=!0,this.name=(s=i??(n instanceof Error?n.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=r}}class uc extends Ie{constructor(t,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:t}),this.name="WebAuthnUnknownError",this.originalError=r}}function K$({error:e,options:t}){var r,n,i;const{publicKey:s}=t;if(!s)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new Ie({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if(e.name==="ConstraintError"){if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new Ie({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e});if(t.mediation==="conditional"&&((n=s.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new Ie({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:e});if(((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new Ie({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else{if(e.name==="InvalidStateError")return new Ie({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e});if(e.name==="NotAllowedError")return new Ie({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="NotSupportedError")return s.pubKeyCredParams.filter(a=>a.type==="public-key").length===0?new Ie({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}):new Ie({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e});if(e.name==="SecurityError"){const o=window.location.hostname;if(hk(o)){if(s.rp.id!==o)return new Ie({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new Ie({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if(e.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}function Y$({error:e,options:t}){const{publicKey:r}=t;if(!r)throw Error("options was missing required publicKey property");if(e.name==="AbortError"){if(t.signal instanceof AbortSignal)return new Ie({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else{if(e.name==="NotAllowedError")return new Ie({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});if(e.name==="SecurityError"){const n=window.location.hostname;if(hk(n)){if(r.rpId!==n)return new Ie({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e})}else if(e.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e})}class J${createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const t=new AbortController;return this.controller=t,t.signal}cancelCeremony(){if(this.controller){const t=new Error("Manually cancelling existing WebAuthn API call");t.name="AbortError",this.controller.abort(t),this.controller=void 0}}}const Q$=new J$;function X$(e){if(!e)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(e);const{challenge:t,user:r,excludeCredentials:n}=e,i=eu(e,["challenge","user","excludeCredentials"]),s=Bi(t).buffer,o=Object.assign(Object.assign({},r),{id:Bi(r.id).buffer}),a=Object.assign(Object.assign({},i),{challenge:s,user:o});if(n&&n.length>0){a.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const u=n[l];a.excludeCredentials[l]=Object.assign(Object.assign({},u),{id:Bi(u.id).buffer,type:u.type||"public-key",transports:u.transports})}}return a}function Z$(e){if(!e)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(e);const{challenge:t,allowCredentials:r}=e,n=eu(e,["challenge","allowCredentials"]),i=Bi(t).buffer,s=Object.assign(Object.assign({},n),{challenge:i});if(r&&r.length>0){s.allowCredentials=new Array(r.length);for(let o=0;o<r.length;o++){const a=r[o];s.allowCredentials[o]=Object.assign(Object.assign({},a),{id:Bi(a.id).buffer,type:a.type||"public-key",transports:a.transports})}}return s}function e5(e){var t;if("toJSON"in e&&typeof e.toJSON=="function")return e.toJSON();const r=e;return{id:e.id,rawId:e.id,response:{attestationObject:Fn(new Uint8Array(e.response.attestationObject)),clientDataJSON:Fn(new Uint8Array(e.response.clientDataJSON))},type:"public-key",clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:(t=r.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function t5(e){var t;if("toJSON"in e&&typeof e.toJSON=="function")return e.toJSON();const r=e,n=e.getClientExtensionResults(),i=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:Fn(new Uint8Array(i.authenticatorData)),clientDataJSON:Fn(new Uint8Array(i.clientDataJSON)),signature:Fn(new Uint8Array(i.signature)),userHandle:i.userHandle?Fn(new Uint8Array(i.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(t=r.authenticatorAttachment)!==null&&t!==void 0?t:void 0}}function hk(e){return e==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Ey(){var e,t;return!!(He()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.create)=="function"&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.get)=="function")}async function r5(e){try{const t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new uc("Browser returned unexpected credential type",t)}:{data:null,error:new uc("Empty credential response",t)}}catch(t){return{data:null,error:K$({error:t,options:e})}}}async function n5(e){try{const t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new uc("Browser returned unexpected credential type",t)}:{data:null,error:new uc("Empty credential response",t)}}catch(t){return{data:null,error:Y$({error:t,options:e})}}}const i5={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},s5={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function dc(...e){const t=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),r=i=>i instanceof ArrayBuffer||ArrayBuffer.isView(i),n={};for(const i of e)if(i)for(const s in i){const o=i[s];if(o!==void 0)if(Array.isArray(o))n[s]=o;else if(r(o))n[s]=o;else if(t(o)){const a=n[s];t(a)?n[s]=dc(a,o):n[s]=dc(o)}else n[s]=o}return n}function o5(e,t){return dc(i5,e,t||{})}function a5(e,t){return dc(s5,e,t||{})}class l5{constructor(t){this.client=t,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(t){return this.client.mfa.enroll(Object.assign(Object.assign({},t),{factorType:"webauthn"}))}async _challenge({factorId:t,webauthn:r,friendlyName:n,signal:i},s){try{const{data:o,error:a}=await this.client.mfa.challenge({factorId:t,webauthn:r});if(!o)return{data:null,error:a};const l=i??Q$.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;u.name||(u.name=`${u.id}:${n}`),u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=o5(o.webauthn.credential_options.publicKey,s==null?void 0:s.create),{data:d,error:h}=await r5({publicKey:u,signal:l});return d?{data:{factorId:t,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:d}},error:null}:{data:null,error:h}}case"request":{const u=a5(o.webauthn.credential_options.publicKey,s==null?void 0:s.request),{data:d,error:h}=await n5(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:l}));return d?{data:{factorId:t,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:d}},error:null}:{data:null,error:h}}}}catch(o){return D(o)?{data:null,error:o}:{data:null,error:new On("Unexpected error in challenge",o)}}}async _verify({challengeId:t,factorId:r,webauthn:n}){return this.client.mfa.verify({factorId:r,challengeId:t,webauthn:n})}async _authenticate({factorId:t,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},s){if(!r)return{data:null,error:new Io("rpId is required for WebAuthn authentication")};try{if(!Ey())return{data:null,error:new On("Browser does not support WebAuthn",null)};const{data:o,error:a}=await this.challenge({factorId:t,webauthn:{rpId:r,rpOrigins:n},signal:i},{request:s});if(!o)return{data:null,error:a};const{webauthn:l}=o;return this._verify({factorId:t,challengeId:o.challengeId,webauthn:{type:l.type,rpId:r,rpOrigins:n,credential_response:l.credential_response}})}catch(o){return D(o)?{data:null,error:o}:{data:null,error:new On("Unexpected error in authenticate",o)}}}async _register({friendlyName:t,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},s){if(!r)return{data:null,error:new Io("rpId is required for WebAuthn registration")};try{if(!Ey())return{data:null,error:new On("Browser does not support WebAuthn",null)};const{data:o,error:a}=await this._enroll({friendlyName:t});if(!o)return await this.client.mfa.listFactors().then(d=>{var h;return(h=d.data)===null||h===void 0?void 0:h.all.find(f=>f.factor_type==="webauthn"&&f.friendly_name===t&&f.status!=="unverified")}).then(d=>d?this.client.mfa.unenroll({factorId:d==null?void 0:d.id}):void 0),{data:null,error:a};const{data:l,error:u}=await this._challenge({factorId:o.id,friendlyName:o.friendly_name,webauthn:{rpId:r,rpOrigins:n},signal:i},{create:s});return l?this._verify({factorId:o.id,challengeId:l.challengeId,webauthn:{rpId:r,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:u}}catch(o){return D(o)?{data:null,error:o}:{data:null,error:new On("Unexpected error in register",o)}}}}q$();const c5={url:i$,storageKey:s$,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:o$,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:1e4};async function Cy(e,t,r){return await r()}const di={};class Oo{get jwks(){var t,r;return(r=(t=di[this.storageKey])===null||t===void 0?void 0:t.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(t){di[this.storageKey]=Object.assign(Object.assign({},di[this.storageKey]),{jwks:t})}get jwks_cached_at(){var t,r;return(r=(t=di[this.storageKey])===null||t===void 0?void 0:t.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(t){di[this.storageKey]=Object.assign(Object.assign({},di[this.storageKey]),{cachedAt:t})}constructor(t){var r,n,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},c5),t);if(this.storageKey=s.storageKey,this.instanceID=(r=Oo.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,Oo.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&He()){const o=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(o),this.logDebugMessages&&console.trace(o)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.admin=new F$({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=ck(s.fetch),this.lock=s.lock||Cy,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,this.lockAcquireTimeout=s.lockAcquireTimeout,s.lock?this.lock=s.lock:this.persistSession&&He()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=B$:this.lock=Cy,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new l5(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:lk()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=_y(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=_y(this.memoryStorage)),He()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(o){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",o)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async o=>{this._debug("received broadcast notification from other tab or client",o),await this._notifyAllSubscribers(o.data.event,o.data.session,!1)})}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(t){if(this.throwOnError&&t&&t.error)throw t.error;return t}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${sk}) ${new Date().toISOString()}`}_debug(...t){return this.logDebugMessages&&this.logger(this._logPrefix(),...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{let r={},n="none";if(He()&&(r=b$(window.location.href),this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce")),He()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:s}=await this._getSessionFromURL(r,n);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),h$(s)){const l=(t=s.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return{error:s}}const{session:o,redirectType:a}=i;return this._debug("#_initialize()","detected session in URL",o,"redirect type",a),await this._saveSession(o),setTimeout(async()=>{a==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",o):await this._notifyAllSubscribers("SIGNED_IN",o)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return D(r)?this._returnResult({error:r}):this._returnResult({error:new On("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var r,n,i;try{const s=await B(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=t==null?void 0:t.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=t==null?void 0:t.options)===null||i===void 0?void 0:i.captchaToken}},xform:Ht}),{data:o,error:a}=s;if(a||!o)return this._returnResult({data:{user:null,session:null},error:a});const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:u,session:l},error:null})}catch(s){if(D(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(t){var r,n,i;try{let s;if("email"in t){const{email:d,password:h,options:f}=t;let y=null,m=null;this.flowType==="pkce"&&([y,m]=await li(this.storage,this.storageKey)),s=await B(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f==null?void 0:f.emailRedirectTo,body:{email:d,password:h,data:(r=f==null?void 0:f.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:y,code_challenge_method:m},xform:Ht})}else if("phone"in t){const{phone:d,password:h,options:f}=t;s=await B(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:d,password:h,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},channel:(i=f==null?void 0:f.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Ht})}else throw new Ta("You must provide either an email or phone number and a password");const{data:o,error:a}=s;if(a||!o)return await qe(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:a});const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:u,session:l},error:null})}catch(s){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(t){try{let r;if("email"in t){const{email:s,password:o,options:a}=t;r=await B(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Sy})}else if("phone"in t){const{phone:s,password:o,options:a}=t;r=await B(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Sy})}else throw new Ta("You must provide either an email or phone number and a password");const{data:n,error:i}=r;if(i)return this._returnResult({data:{user:null,session:null},error:i});if(!n||!n.session||!n.user){const s=new ai;return this._returnResult({data:{user:null,session:null},error:s})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(r){if(D(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(t){var r,n,i,s;return await this._handleProviderSignIn(t.provider,{redirectTo:(r=t.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=t.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(t))}async signInWithWeb3(t){const{chain:r}=t;switch(r){case"ethereum":return await this.signInWithEthereum(t);case"solana":return await this.signInWithSolana(t);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(t){var r,n,i,s,o,a,l,u,d,h,f;let y,m;if("message"in t)y=t.message,m=t.signature;else{const{chain:x,wallet:b,statement:v,options:g}=t;let w;if(He())if(typeof b=="object")w=b;else{const R=window;if("ethereum"in R&&typeof R.ethereum=="object"&&"request"in R.ethereum&&typeof R.ethereum.request=="function")w=R.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof b!="object"||!(g!=null&&g.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=b}const k=new URL((r=g==null?void 0:g.url)!==null&&r!==void 0?r:window.location.href),C=await w.request({method:"eth_requestAccounts"}).then(R=>R).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!C||C.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const S=dk(C[0]);let E=(n=g==null?void 0:g.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!E){const R=await w.request({method:"eth_chainId"});E=H$(R)}const j={domain:k.host,address:S,statement:v,uri:k.href,version:"1",chainId:E,nonce:(i=g==null?void 0:g.signInWithEthereum)===null||i===void 0?void 0:i.nonce,issuedAt:(o=(s=g==null?void 0:g.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&o!==void 0?o:new Date,expirationTime:(a=g==null?void 0:g.signInWithEthereum)===null||a===void 0?void 0:a.expirationTime,notBefore:(l=g==null?void 0:g.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(u=g==null?void 0:g.signInWithEthereum)===null||u===void 0?void 0:u.requestId,resources:(d=g==null?void 0:g.signInWithEthereum)===null||d===void 0?void 0:d.resources};y=G$(j),m=await w.request({method:"personal_sign",params:[W$(y),S]})}try{const{data:x,error:b}=await B(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:y,signature:m},!((h=t.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(f=t.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:Ht});if(b)throw b;if(!x||!x.session||!x.user){const v=new ai;return this._returnResult({data:{user:null,session:null},error:v})}return x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),this._returnResult({data:Object.assign({},x),error:b})}catch(x){if(D(x))return this._returnResult({data:{user:null,session:null},error:x});throw x}}async signInWithSolana(t){var r,n,i,s,o,a,l,u,d,h,f,y;let m,x;if("message"in t)m=t.message,x=t.signature;else{const{chain:b,wallet:v,statement:g,options:w}=t;let k;if(He())if(typeof v=="object")k=v;else{const S=window;if("solana"in S&&typeof S.solana=="object"&&("signIn"in S.solana&&typeof S.solana.signIn=="function"||"signMessage"in S.solana&&typeof S.solana.signMessage=="function"))k=S.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof v!="object"||!(w!=null&&w.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=v}const C=new URL((r=w==null?void 0:w.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in k&&k.signIn){const S=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},w==null?void 0:w.signInWithSolana),{version:"1",domain:C.host,uri:C.href}),g?{statement:g}:null));let E;if(Array.isArray(S)&&S[0]&&typeof S[0]=="object")E=S[0];else if(S&&typeof S=="object"&&"signedMessage"in S&&"signature"in S)E=S;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in E&&"signature"in E&&(typeof E.signedMessage=="string"||E.signedMessage instanceof Uint8Array)&&E.signature instanceof Uint8Array)m=typeof E.signedMessage=="string"?E.signedMessage:new TextDecoder().decode(E.signedMessage),x=E.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");m=[`${C.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...g?["",g,""]:[""],"Version: 1",`URI: ${C.href}`,`Issued At: ${(i=(n=w==null?void 0:w.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((s=w==null?void 0:w.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${w.signInWithSolana.notBefore}`]:[],...!((o=w==null?void 0:w.signInWithSolana)===null||o===void 0)&&o.expirationTime?[`Expiration Time: ${w.signInWithSolana.expirationTime}`]:[],...!((a=w==null?void 0:w.signInWithSolana)===null||a===void 0)&&a.chainId?[`Chain ID: ${w.signInWithSolana.chainId}`]:[],...!((l=w==null?void 0:w.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${w.signInWithSolana.nonce}`]:[],...!((u=w==null?void 0:w.signInWithSolana)===null||u===void 0)&&u.requestId?[`Request ID: ${w.signInWithSolana.requestId}`]:[],...!((h=(d=w==null?void 0:w.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...w.signInWithSolana.resources.map(E=>`- ${E}`)]:[]].join(`
`);const S=await k.signMessage(new TextEncoder().encode(m),"utf8");if(!S||!(S instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=S}}try{const{data:b,error:v}=await B(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:m,signature:Fn(x)},!((f=t.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(y=t.options)===null||y===void 0?void 0:y.captchaToken}}:null),xform:Ht});if(v)throw v;if(!b||!b.session||!b.user){const g=new ai;return this._returnResult({data:{user:null,session:null},error:g})}return b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),this._returnResult({data:Object.assign({},b),error:v})}catch(b){if(D(b))return this._returnResult({data:{user:null,session:null},error:b});throw b}}async _exchangeCodeForSession(t){const r=await En(this.storage,`${this.storageKey}-code-verifier`),[n,i]=(r??"").split("/");try{if(!n&&this.flowType==="pkce")throw new f$;const{data:s,error:o}=await B(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:n},xform:Ht});if(await qe(this.storage,`${this.storageKey}-code-verifier`),o)throw o;if(!s||!s.session||!s.user){const a=new ai;return this._returnResult({data:{user:null,session:null,redirectType:null},error:a})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:i??null}),error:o})}catch(s){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(t){try{const{options:r,provider:n,token:i,access_token:s,nonce:o}=t,a=await B(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:r==null?void 0:r.captchaToken}},xform:Ht}),{data:l,error:u}=a;if(u)return this._returnResult({data:{user:null,session:null},error:u});if(!l||!l.session||!l.user){const d=new ai;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:u})}catch(r){if(D(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(t){var r,n,i,s,o;try{if("email"in t){const{email:a,options:l}=t;let u=null,d=null;this.flowType==="pkce"&&([u,d]=await li(this.storage,this.storageKey));const{error:h}=await B(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:a,data:(r=l==null?void 0:l.data)!==null&&r!==void 0?r:{},create_user:(n=l==null?void 0:l.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:d},redirectTo:l==null?void 0:l.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in t){const{phone:a,options:l}=t,{data:u,error:d}=await B(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:a,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:d})}throw new Ta("You must provide either an email or phone number.")}catch(a){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async verifyOtp(t){var r,n;try{let i,s;"options"in t&&(i=(r=t.options)===null||r===void 0?void 0:r.redirectTo,s=(n=t.options)===null||n===void 0?void 0:n.captchaToken);const{data:o,error:a}=await B(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:Ht});if(a)throw a;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:u,session:l},error:null})}catch(i){if(D(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithSSO(t){var r,n,i,s,o;try{let a=null,l=null;this.flowType==="pkce"&&([a,l]=await li(this.storage,this.storageKey));const u=await B(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(n=(r=t.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:l}),headers:this.headers,xform:D$});return!((s=u.data)===null||s===void 0)&&s.url&&He()&&!(!((o=t.options)===null||o===void 0)&&o.skipBrowserRedirect)&&window.location.assign(u.data.url),this._returnResult(u)}catch(a){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(a))return this._returnResult({data:null,error:a});throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)throw n;if(!r)throw new bt;const{error:i}=await B(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:i})})}catch(t){if(D(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async resend(t){try{const r=`${this.url}/resend`;if("email"in t){const{email:n,type:i,options:s}=t,{error:o}=await B(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:o})}else if("phone"in t){const{phone:n,type:i,options:s}=t,{data:o,error:a}=await B(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:a})}throw new Ta("You must provide either an email or phone number and a type")}catch(r){if(D(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async r=>r))}async _acquireLock(t,r){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await t(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const r=await En(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?t=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const n=t.expires_at?t.expires_at*1e3-Date.now()<td:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",t.expires_at),!n){if(this.userStorage){const o=await En(this.userStorage,this.storageKey+"-user");o!=null&&o.user?t.user=o.user:t.user=id()}if(this.storage.isServer&&t.user&&!t.user.__isUserNotAvailableProxy){const o={value:this.suppressGetSessionWarning};t.user=$$(t.user,o),o.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:t},error:null}}const{data:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?this._returnResult({data:{session:null},error:s}):this._returnResult({data:{session:i},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(t){if(t)return await this._getUser(t);await this.initializePromise;const r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(t){try{return t?await B(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Yr}):await this._useSession(async r=>{var n,i,s;const{data:o,error:a}=r;if(a)throw a;return!(!((n=o.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new bt}:await B(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(i=o.session)===null||i===void 0?void 0:i.access_token)!==null&&s!==void 0?s:void 0,xform:Yr})})}catch(r){if(D(r))return d$(r)&&(await this._removeSession(),await qe(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(t,r={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(t,r))}async _updateUser(t,r={}){try{return await this._useSession(async n=>{const{data:i,error:s}=n;if(s)throw s;if(!i.session)throw new bt;const o=i.session;let a=null,l=null;this.flowType==="pkce"&&t.email!=null&&([a,l]=await li(this.storage,this.storageKey));const{data:u,error:d}=await B(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r==null?void 0:r.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:a,code_challenge_method:l}),jwt:o.access_token,xform:Yr});if(d)throw d;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(n){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(t){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new bt;const r=Date.now()/1e3;let n=r,i=!0,s=null;const{payload:o}=nd(t.access_token);if(o.exp&&(n=o.exp,i=n<=r),i){const{data:a,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!a)return{data:{user:null,session:null},error:null};s=a}else{const{data:a,error:l}=await this._getUser(t.access_token);if(l)throw l;s={access_token:t.access_token,refresh_token:t.refresh_token,user:a.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(r){if(D(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async r=>{var n;if(!t){const{data:o,error:a}=r;if(a)throw a;t=(n=o.session)!==null&&n!==void 0?n:void 0}if(!(t!=null&&t.refresh_token))throw new bt;const{data:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):i?this._returnResult({data:{user:i.user,session:i},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(D(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(t,r){try{if(!He())throw new Pa("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Pa(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new gy("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Pa("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new gy("No code detected.");const{data:g,error:w}=await this._exchangeCodeForSession(t.code);if(w)throw w;const k=new URL(window.location.href);return k.searchParams.delete("code"),window.history.replaceState(window.history.state,"",k.toString()),{data:{session:g.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:a,expires_at:l,token_type:u}=t;if(!s||!a||!o||!u)throw new Pa("No session defined in URL");const d=Math.round(Date.now()/1e3),h=parseInt(a);let f=d+h;l&&(f=parseInt(l));const y=f-d;y*1e3<=vi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${h}s`);const m=f-h;d-m>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",m,f,d):d-m<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",m,f,d);const{data:x,error:b}=await this._getUser(s);if(b)throw b;const v={provider_token:n,provider_refresh_token:i,access_token:s,expires_in:h,expires_at:f,refresh_token:o,token_type:u,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:v,redirectType:t.type},error:null})}catch(n){if(D(n))return this._returnResult({data:{session:null,redirectType:null},error:n});throw n}}_isImplicitGrantCallback(t){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),t):!!(t.access_token||t.error_description)}async _isPKCECallback(t){const r=await En(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&r)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:i,error:s}=r;if(s)return this._returnResult({error:s});const o=(n=i.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:a}=await this.admin.signOut(o,t);if(a&&!(u$(a)&&(a.status===404||a.status===401||a.status===403)))return this._returnResult({error:a})}return t!=="others"&&(await this._removeSession(),await qe(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(t){const r=x$(),n={id:r,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)})))(),{data:{subscription:n}}}async _emitInitialSession(t){return await this._useSession(async r=>{var n,i;try{const{data:{session:s},error:o}=r;if(o)throw o;await((n=this.stateChangeEmitters.get(t))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,r={}){let n=null,i=null;this.flowType==="pkce"&&([n,i]=await li(this.storage,this.storageKey,!0));try{return await B(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(s){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var t;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(t=r.user.identities)!==null&&t!==void 0?t:[]},error:null})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(t){return"token"in t?this.linkIdentityIdToken(t):this.linkIdentityOAuth(t)}async linkIdentityOAuth(t){var r;try{const{data:n,error:i}=await this._useSession(async s=>{var o,a,l,u,d;const{data:h,error:f}=s;if(f)throw f;const y=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(o=t.options)===null||o===void 0?void 0:o.redirectTo,scopes:(a=t.options)===null||a===void 0?void 0:a.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await B(this.fetch,"GET",y,{headers:this.headers,jwt:(d=(u=h.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0})});if(i)throw i;return He()&&!(!((r=t.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),this._returnResult({data:{provider:t.provider,url:n==null?void 0:n.url},error:null})}catch(n){if(D(n))return this._returnResult({data:{provider:t.provider,url:null},error:n});throw n}}async linkIdentityIdToken(t){return await this._useSession(async r=>{var n;try{const{error:i,data:{session:s}}=r;if(i)throw i;const{options:o,provider:a,token:l,access_token:u,nonce:d}=t,h=await B(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=s==null?void 0:s.access_token)!==null&&n!==void 0?n:void 0,body:{provider:a,id_token:l,access_token:u,nonce:d,link_identity:!0,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Ht}),{data:f,error:y}=h;return y?this._returnResult({data:{user:null,session:null},error:y}):!f||!f.session||!f.user?this._returnResult({data:{user:null,session:null},error:new ai}):(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("USER_UPDATED",f.session)),this._returnResult({data:f,error:y}))}catch(i){if(await qe(this.storage,`${this.storageKey}-code-verifier`),D(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}})}async unlinkIdentity(t){try{return await this._useSession(async r=>{var n,i;const{data:s,error:o}=r;if(o)throw o;return await B(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(i=(n=s.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(t){const r=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(r,"begin");try{const n=Date.now();return await _$(async i=>(i>0&&await k$(200*Math.pow(2,i-1)),this._debug(r,"refreshing attempt",i),await B(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:Ht})),(i,s)=>{const o=200*Math.pow(2,i);return s&&rd(s)&&Date.now()+o-n<vi})}catch(n){if(this._debug(r,"error",n),D(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(r,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",r,"url",n),He()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:t,url:n},error:null}}async _recoverAndRefresh(){var t,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await En(this.storage,this.storageKey);if(i&&this.userStorage){let o=await En(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!o&&(o={user:i.user},await yi(this.userStorage,this.storageKey+"-user",o)),i.user=(t=o==null?void 0:o.user)!==null&&t!==void 0?t:id()}else if(i&&!i.user&&!i.user){const o=await En(this.storage,this.storageKey+"-user");o&&(o!=null&&o.user)?(i.user=o.user,await qe(this.storage,this.storageKey+"-user"),await yi(this.storage,this.storageKey,i)):i.user=id()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const s=((r=i.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<td;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${td}s`),s){if(this.autoRefreshToken&&i.refresh_token){const{error:o}=await this._callRefreshToken(i.refresh_token);o&&(console.error(o),rd(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:o,error:a}=await this._getUser(i.access_token);!a&&(o!=null&&o.user)?(i.user=o.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(o){console.error("Error getting user data:",o),this._debug(n,"error getting user data, skipping SIGNED_IN notification",o)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var r,n;if(!t)throw new bt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new ru;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new bt;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const a={data:s.session,error:null};return this.refreshingDeferred.resolve(a),a}catch(s){if(this._debug(i,"error",s),D(s)){const o={data:null,error:s};return rd(s)||await this._removeSession(),(r=this.refreshingDeferred)===null||r===void 0||r.resolve(o),o}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,r,n=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:t,session:r});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async a=>{try{await a.callback(t,r)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let a=0;a<s.length;a+=1)console.error(s[a]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await qe(this.storage,`${this.storageKey}-code-verifier`);const r=Object.assign({},t),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await yi(this.userStorage,this.storageKey+"-user",{user:r.user});const i=Object.assign({},r);delete i.user;const s=xy(i);await yi(this.storage,this.storageKey,s)}else{const i=xy(r);await yi(this.storage,this.storageKey,i)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await qe(this.storage,this.storageKey),await qe(this.storage,this.storageKey+"-code-verifier"),await qe(this.storage,this.storageKey+"-user"),this.userStorage&&await qe(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&He()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),vi);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-t)/vi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${vi}ms, refresh threshold is ${sf} ticks`),i<=sf&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof uk)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!He()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const r=`#_onVisibilityChanged(${t})`;this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,r,n){const i=[`provider=${encodeURIComponent(r)}`];if(n!=null&&n.redirectTo&&i.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n!=null&&n.scopes&&i.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[s,o]=await li(this.storage,this.storageKey),a=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});i.push(a.toString())}if(n!=null&&n.queryParams){const s=new URLSearchParams(n.queryParams);i.push(s.toString())}return n!=null&&n.skipBrowserRedirect&&i.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${t}?${i.join("&")}`}async _unenroll(t){try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;return s?this._returnResult({data:null,error:s}):await B(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(t){try{return await this._useSession(async r=>{var n,i;const{data:s,error:o}=r;if(o)return this._returnResult({data:null,error:o});const a=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:t.factorType==="totp"?{issuer:t.issuer}:{}),{data:l,error:u}=await B(this.fetch,"POST",`${this.url}/factors`,{body:a,headers:this.headers,jwt:(n=s==null?void 0:s.session)===null||n===void 0?void 0:n.access_token});return u?this._returnResult({data:null,error:u}):(t.factorType==="totp"&&l.type==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async _verify(t){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;if(s)return this._returnResult({data:null,error:s});const o=Object.assign({challenge_id:t.challengeId},"webauthn"in t?{webauthn:Object.assign(Object.assign({},t.webauthn),{credential_response:t.webauthn.type==="create"?e5(t.webauthn.credential_response):t5(t.webauthn.credential_response)})}:{code:t.code}),{data:a,error:l}=await B(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:o,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return l?this._returnResult({data:null,error:l}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),this._returnResult({data:a,error:l}))})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}})}async _challenge(t){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:s}=r;if(s)return this._returnResult({data:null,error:s});const o=await B(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:t,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});if(o.error)return o;const{data:a}=o;if(a.type!=="webauthn")return{data:a,error:null};switch(a.webauthn.type){case"create":return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:X$(a.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Z$(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}})}async _challengeAndVerify(t){const{data:r,error:n}=await this._challenge({factorId:t.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:t.factorId,challengeId:r.id,code:t.code})}async _listFactors(){var t;const{data:{user:r},error:n}=await this.getUser();if(n)return{data:null,error:n};const i={all:[],phone:[],totp:[],webauthn:[]};for(const s of(t=r==null?void 0:r.factors)!==null&&t!==void 0?t:[])i.all.push(s),s.status==="verified"&&i[s.factor_type].push(s);return{data:i,error:null}}async _getAuthenticatorAssuranceLevel(){var t,r;const{data:{session:n},error:i}=await this.getSession();if(i)return this._returnResult({data:null,error:i});if(!n)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=nd(n.access_token);let o=null;s.aal&&(o=s.aal);let a=o;((r=(t=n.user.factors)===null||t===void 0?void 0:t.filter(d=>d.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(a="aal2");const u=s.amr||[];return{data:{currentLevel:o,nextLevel:a,currentAuthenticationMethods:u},error:null}}async _getAuthorizationDetails(t){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;return i?this._returnResult({data:null,error:i}):n?await B(this.fetch,"GET",`${this.url}/oauth/authorizations/${t}`,{headers:this.headers,jwt:n.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new bt})})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(t,r){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!i)return this._returnResult({data:null,error:new bt});const o=await B(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"approve"},xform:a=>({data:a,error:null})});return o.data&&o.data.redirect_url&&He()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(o.data.redirect_url),o})}catch(n){if(D(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(t,r){try{return await this._useSession(async n=>{const{data:{session:i},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!i)return this._returnResult({data:null,error:new bt});const o=await B(this.fetch,"POST",`${this.url}/oauth/authorizations/${t}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"deny"},xform:a=>({data:a,error:null})});return o.data&&o.data.redirect_url&&He()&&!(r!=null&&r.skipBrowserRedirect)&&window.location.assign(o.data.redirect_url),o})}catch(n){if(D(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;return n?this._returnResult({data:null,error:n}):r?await B(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new bt})})}catch(t){if(D(t))return this._returnResult({data:null,error:t});throw t}}async _revokeOAuthGrant(t){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;return i?this._returnResult({data:null,error:i}):n?(await B(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:t.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new bt})})}catch(r){if(D(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(t,r={keys:[]}){let n=r.keys.find(a=>a.kid===t);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(a=>a.kid===t),n&&this.jwks_cached_at+l$>i)return n;const{data:s,error:o}=await B(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(o)throw o;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=i,n=s.keys.find(a=>a.kid===t),!n)?null:n}async getClaims(t,r={}){try{let n=t;if(!n){const{data:y,error:m}=await this.getSession();if(m||!y.session)return this._returnResult({data:null,error:m});n=y.session.access_token}const{header:i,payload:s,signature:o,raw:{header:a,payload:l}}=nd(n);r!=null&&r.allowExpired||R$(s.exp);const u=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,r!=null&&r.keys?{keys:r.keys}:r==null?void 0:r.jwks);if(!u){const{error:y}=await this.getUser(n);if(y)throw y;return{data:{claims:s,header:i,signature:o},error:null}}const d=I$(i.alg),h=await crypto.subtle.importKey("jwk",u,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,o,y$(`${a}.${l}`)))throw new lf("Invalid JWT signature");return{data:{claims:s,header:i,signature:o},error:null}}catch(n){if(D(n))return this._returnResult({data:null,error:n});throw n}}}Oo.nextInstanceID={};const u5=Oo,d5="2.90.1";let zs="";typeof Deno<"u"?zs="deno":typeof document<"u"?zs="web":typeof navigator<"u"&&navigator.product==="ReactNative"?zs="react-native":zs="node";const h5={"X-Client-Info":`supabase-js-${zs}/${d5}`},f5={headers:h5},p5={schema:"public"},g5={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},m5={};function $o(e){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$o(e)}function v5(e,t){if($o(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if($o(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y5(e){var t=v5(e,"string");return $o(t)=="symbol"?t:t+""}function w5(e,t,r){return(t=y5(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function jy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jy(Object(r),!0).forEach(function(n){w5(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jy(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}const x5=e=>e?(...t)=>e(...t):(...t)=>fetch(...t),b5=()=>Headers,S5=(e,t,r)=>{const n=x5(r),i=b5();return async(s,o)=>{var a;const l=(a=await t())!==null&&a!==void 0?a:e;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),n(s,_e(_e({},o),{},{headers:u}))}};function k5(e){return e.endsWith("/")?e:e+"/"}function _5(e,t){var r,n;const{db:i,auth:s,realtime:o,global:a}=e,{db:l,auth:u,realtime:d,global:h}=t,f={db:_e(_e({},l),i),auth:_e(_e({},u),s),realtime:_e(_e({},d),o),storage:{},global:_e(_e(_e({},h),a),{},{headers:_e(_e({},(r=h==null?void 0:h.headers)!==null&&r!==void 0?r:{}),(n=a==null?void 0:a.headers)!==null&&n!==void 0?n:{})}),accessToken:async()=>""};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function E5(e){const t=e==null?void 0:e.trim();if(!t)throw new Error("supabaseUrl is required.");if(!t.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(k5(t))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var C5=class extends u5{constructor(e){super(e)}},j5=class{constructor(e,t,r){var n,i;this.supabaseUrl=e,this.supabaseKey=t;const s=E5(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",s),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",s),this.storageUrl=new URL("storage/v1",s),this.functionsUrl=new URL("functions/v1",s);const o=`sb-${s.hostname.split(".")[0]}-auth-token`,a={db:p5,realtime:m5,auth:_e(_e({},g5),{},{storageKey:o}),global:f5},l=_5(r??{},a);if(this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(i=l.global.headers)!==null&&i!==void 0?i:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(d,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var u;this.auth=this._initSupabaseAuthClient((u=l.auth)!==null&&u!==void 0?u:{},this.headers,l.global.fetch)}this.fetch=S5(t,this._getAccessToken.bind(this),l.global.fetch),this.realtime=this._initRealtimeClient(_e({headers:this.headers,accessToken:this._getAccessToken.bind(this)},l.realtime)),this.accessToken&&this.accessToken().then(d=>this.realtime.setAuth(d)).catch(d=>console.warn("Failed to set initial Realtime auth token:",d)),this.rest=new o3(new URL("rest/v1",s).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch}),this.storage=new n$(this.storageUrl.href,this.headers,this.fetch,r==null?void 0:r.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new t3(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,r)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this,t,r;if(e.accessToken)return await e.accessToken();const{data:n}=await e.auth.getSession();return(t=(r=n.session)===null||r===void 0?void 0:r.access_token)!==null&&t!==void 0?t:e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:i,storageKey:s,flowType:o,lock:a,debug:l,throwOnError:u},d,h){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new C5({url:this.authUrl.href,headers:_e(_e({},f),d),storageKey:s,autoRefreshToken:e,persistSession:t,detectSessionInUrl:r,storage:n,userStorage:i,flowType:o,lock:a,debug:l,throwOnError:u,fetch:h,hasCustomAuthorizationHeader:Object.keys(this.headers).some(y=>y.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new k3(this.realtimeUrl.href,_e(_e({},e),{},{params:_e(_e({},{apikey:this.supabaseKey}),e==null?void 0:e.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,"CLIENT",t==null?void 0:t.access_token)})}_handleTokenChanged(e,t,r){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const T5=(e,t,r)=>new j5(e,t,r);function P5(){if(typeof window<"u")return!1;const e=globalThis.process;if(!e)return!1;const t=e.version;if(t==null)return!1;const r=t.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=18:!1}P5()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const cf={}.VITE_SUPABASE_URL,uf={}.VITE_SUPABASE_ANON_KEY,Qe=!!(cf&&uf),df=Qe&&cf&&uf?T5(cf,uf):null;console.log(df?"✅ Supabase configuré et connecté":"⚠️ Supabase non configuré - utilisation du localStorage");function yt(){if(!df)throw new Error("Supabase client is not initialized. Check your environment variables.");return df}function od(){const e="bfit_user_id";let t=localStorage.getItem(e);return t||(t=`user_${Date.now()}_${Math.random().toString(36).substring(2,9)}`,localStorage.setItem(e,t)),t}const ve={VOTE_ITEMS:"bfit_vote_items",USER_VOTES:"bfit_user_votes",COMING_ITEMS:"bfit_coming_items",VOTED_ITEMS:"bfit_voted_items"},hf=[{id:"1",title:"Collection Pride 2026",titleEn:"Pride Collection 2026",description:"Une collection audacieuse célébrant la diversité avec des couleurs vibrantes et des designs inclusifs.",descriptionEn:"A bold collection celebrating diversity with vibrant colors and inclusive designs.",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:1247,category:"collection",isActive:!0,createdAt:new Date().toISOString()},{id:"2",title:"Sneakers Rainbow",titleEn:"Rainbow Sneakers",description:"Des sneakers colorées et confortables pour exprimer votre authenticité au quotidien.",descriptionEn:"Colorful and comfortable sneakers to express your authenticity daily.",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:892,category:"shoes",isActive:!0,createdAt:new Date().toISOString()},{id:"3",title:'T-shirt "Be You"',titleEn:'"Be You" T-shirt',description:"Un message puissant sur un t-shirt confortable, pour rappeler à chacun d'être authentique.",descriptionEn:"A powerful message on a comfortable t-shirt, reminding everyone to be authentic.",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:1567,category:"clothing",isActive:!0,createdAt:new Date().toISOString()},{id:"4",title:'Hoodie "Love Wins"',titleEn:'"Love Wins" Hoodie',description:"Un hoodie confortable avec un message d'amour et d'acceptation pour tous.",descriptionEn:"A comfortable hoodie with a message of love and acceptance for everyone.",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:2034,category:"clothing",isActive:!0,createdAt:new Date().toISOString()},{id:"5",title:"Accessoires Rainbow",titleEn:"Rainbow Accessories",description:"Une collection d'accessoires colorés pour compléter votre style unique.",descriptionEn:"A collection of colorful accessories to complete your unique style.",image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:756,category:"accessories",isActive:!0,createdAt:new Date().toISOString()},{id:"6",title:"Collection Sport Inclusive",titleEn:"Inclusive Sport Collection",description:"Des vêtements de sport inclusifs pour tous les corps et toutes les identités.",descriptionEn:"Inclusive sportswear for all bodies and identities.",image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",votes:1345,category:"sport",isActive:!0,createdAt:new Date().toISOString()}],ff=[{id:"1",title:"Collection Été 2026",titleEn:"Summer 2026 Collection",description:"Une collection estivale audacieuse avec des couleurs vibrantes et des designs inclusifs.",descriptionEn:"A bold summer collection with vibrant colors and inclusive designs.",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",releaseDate:"2026-06-01",createdAt:new Date().toISOString()},{id:"2",title:"Accessoires Rainbow",titleEn:"Rainbow Accessories",description:"Une ligne d'accessoires colorés pour compléter votre style unique.",descriptionEn:"A line of colorful accessories to complete your unique style.",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",releaseDate:"2026-07-01",createdAt:new Date().toISOString()}];function _s(e,t){try{const r=localStorage.getItem(e);if(r)return JSON.parse(r)}catch(r){console.error(`Error reading ${e} from localStorage:`,r)}return t}function Yt(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(r){console.error(`Error writing ${e} to localStorage:`,r)}}function fk(){localStorage.getItem(ve.VOTE_ITEMS)||Yt(ve.VOTE_ITEMS,hf),localStorage.getItem(ve.COMING_ITEMS)||Yt(ve.COMING_ITEMS,ff),localStorage.getItem(ve.USER_VOTES)||Yt(ve.USER_VOTES,[])}Qe||fk();function Aa(e){return{id:e.id,title:e.title,titleEn:e.title_en||void 0,description:e.description,descriptionEn:e.description_en||void 0,image:e.image,category:e.category,votes:e.votes,isActive:e.is_active,startDate:e.start_date||void 0,endDate:e.end_date||void 0,createdAt:e.created_at,updatedAt:e.updated_at||void 0}}function ad(e){return{id:e.id,title:e.title,titleEn:e.title_en||void 0,description:e.description,descriptionEn:e.description_en||void 0,image:e.image,releaseDate:e.release_date,createdAt:e.created_at}}const lt={async getVoteItems(e=!1){if(Qe){let n=yt().from("vote_items").select("*").order("votes",{ascending:!1});e&&(n=n.eq("is_active",!0));const{data:i,error:s}=await n;if(s)throw console.error("Supabase error:",s),s;return(i||[]).map(Aa)}const t=_s(ve.VOTE_ITEMS,hf);return e?t.filter(r=>r.isActive):t},async getVoteItemById(e){if(Qe){const r=yt(),{data:n,error:i}=await r.from("vote_items").select("*").eq("id",e).single();if(i){if(i.code==="PGRST116")return null;throw console.error("Supabase error:",i),i}return n?Aa(n):null}return(await this.getVoteItems()).find(r=>r.id===e)||null},async createVoteItem(e){if(Qe){const n=yt(),{data:i,error:s}=await n.from("vote_items").insert({title:e.title,title_en:e.titleEn||null,description:e.description,description_en:e.descriptionEn||null,image:e.image,category:e.category,is_active:e.isActive,start_date:e.startDate||null,end_date:e.endDate||null,votes:0}).select().single();if(s)throw console.error("Supabase error:",s),s;return Aa(i)}const t=await this.getVoteItems(),r={...e,id:Date.now().toString(),votes:0,createdAt:new Date().toISOString()};return t.push(r),Yt(ve.VOTE_ITEMS,t),r},async updateVoteItem(e,t){if(Qe){const i=yt(),s={updated_at:new Date().toISOString()};t.title!==void 0&&(s.title=t.title),t.titleEn!==void 0&&(s.title_en=t.titleEn),t.description!==void 0&&(s.description=t.description),t.descriptionEn!==void 0&&(s.description_en=t.descriptionEn),t.image!==void 0&&(s.image=t.image),t.category!==void 0&&(s.category=t.category),t.isActive!==void 0&&(s.is_active=t.isActive),t.votes!==void 0&&(s.votes=t.votes),t.startDate!==void 0&&(s.start_date=t.startDate),t.endDate!==void 0&&(s.end_date=t.endDate);const{data:o,error:a}=await i.from("vote_items").update(s).eq("id",e).select().single();if(a)throw console.error("Supabase error:",a),a;return o?Aa(o):null}const r=await this.getVoteItems(),n=r.findIndex(i=>i.id===e);return n===-1?null:(r[n]={...r[n],...t,updatedAt:new Date().toISOString()},Yt(ve.VOTE_ITEMS,r),r[n])},async deleteVoteItem(e){if(Qe){const n=yt(),{error:i}=await n.from("vote_items").delete().eq("id",e);if(i)throw console.error("Supabase error:",i),i;return!0}const t=await this.getVoteItems(),r=t.filter(n=>n.id!==e);return r.length===t.length?!1:(Yt(ve.VOTE_ITEMS,r),!0)},async toggleVoteItemActive(e){const t=await this.getVoteItemById(e);return t?this.updateVoteItem(e,{isActive:!t.isActive}):null},async hasUserVoted(e){const t=od();if(Qe){const n=yt(),{data:i,error:s}=await n.from("user_votes").select("id").eq("vote_item_id",e).eq("user_identifier",t).maybeSingle();return s?(console.error("Supabase error:",s),!1):!!i}return _s(ve.VOTED_ITEMS,[]).includes(e)},async getUserVotedItemIds(){const e=od();if(Qe){const t=yt(),{data:r,error:n}=await t.from("user_votes").select("vote_item_id").eq("user_identifier",e);return n?(console.error("Supabase error:",n),[]):(r||[]).map(i=>i.vote_item_id)}return _s(ve.VOTED_ITEMS,[])},async vote(e){const t=od();if(await this.hasUserVoted(e)){const o=await this.getVoteItemById(e);return{success:!1,newVoteCount:(o==null?void 0:o.votes)||0}}if(Qe){const o=yt(),{data:a,error:l}=await o.from("vote_items").select("votes").eq("id",e).single();if(l||!a)return console.error("Supabase error:",l),{success:!1,newVoteCount:0};const u=(a.votes||0)+1,{error:d}=await o.from("vote_items").update({votes:u,updated_at:new Date().toISOString()}).eq("id",e);if(d)return console.error("Supabase error:",d),{success:!1,newVoteCount:a.votes||0};const{error:h}=await o.from("user_votes").insert({vote_item_id:e,user_identifier:t});return h?(console.error("Supabase error:",h),await o.from("vote_items").update({votes:u-1}).eq("id",e),{success:!1,newVoteCount:u-1}):{success:!0,newVoteCount:u}}const n=await this.getVoteItems(),i=n.findIndex(o=>o.id===e);if(i===-1)return{success:!1,newVoteCount:0};n[i].votes+=1,Yt(ve.VOTE_ITEMS,n);const s=_s(ve.VOTED_ITEMS,[]);return s.push(e),Yt(ve.VOTED_ITEMS,s),{success:!0,newVoteCount:n[i].votes}},async getComingItems(){if(Qe){const e=yt(),{data:t,error:r}=await e.from("coming_items").select("*").order("release_date",{ascending:!0});if(r)throw console.error("Supabase error:",r),r;return(t||[]).map(ad)}return _s(ve.COMING_ITEMS,ff)},async createComingItem(e){if(Qe){const n=yt(),{data:i,error:s}=await n.from("coming_items").insert({title:e.title,title_en:e.titleEn||null,description:e.description,description_en:e.descriptionEn||null,image:e.image,release_date:e.releaseDate}).select().single();if(s)throw console.error("Supabase error:",s),s;return ad(i)}const t=await this.getComingItems(),r={...e,id:Date.now().toString(),createdAt:new Date().toISOString()};return t.push(r),Yt(ve.COMING_ITEMS,t),r},async updateComingItem(e,t){if(Qe){const i=yt(),s={};t.title!==void 0&&(s.title=t.title),t.titleEn!==void 0&&(s.title_en=t.titleEn),t.description!==void 0&&(s.description=t.description),t.descriptionEn!==void 0&&(s.description_en=t.descriptionEn),t.image!==void 0&&(s.image=t.image),t.releaseDate!==void 0&&(s.release_date=t.releaseDate);const{data:o,error:a}=await i.from("coming_items").update(s).eq("id",e).select().single();if(a)throw console.error("Supabase error:",a),a;return o?ad(o):null}const r=await this.getComingItems(),n=r.findIndex(i=>i.id===e);return n===-1?null:(r[n]={...r[n],...t},Yt(ve.COMING_ITEMS,r),r[n])},async deleteComingItem(e){if(Qe){const n=yt(),{error:i}=await n.from("coming_items").delete().eq("id",e);if(i)throw console.error("Supabase error:",i),i;return!0}const t=await this.getComingItems(),r=t.filter(n=>n.id!==e);return r.length===t.length?!1:(Yt(ve.COMING_ITEMS,r),!0)},async getVoteStats(){const e=await this.getVoteItems(!0),t=await this.getUserVotedItemIds(),r=e.reduce((s,o)=>s+o.votes,0),n=t.length;let i=null;if(e.length>0){const s=e.reduce((o,a)=>a.votes>o.votes?a:o);i={title:s.title,votes:s.votes,percentage:r>0?Math.round(s.votes/r*100):0}}return{totalVotes:r,totalVoters:n,topVotedItem:i,averageVotesPerItem:e.length>0?r/e.length:0,itemCount:e.length}},async resetToDefaults(){if(Qe){const e=yt();await e.from("user_votes").delete().neq("id","00000000-0000-0000-0000-000000000000"),await e.from("vote_items").delete().neq("id","00000000-0000-0000-0000-000000000000"),await e.from("coming_items").delete().neq("id","00000000-0000-0000-0000-000000000000");for(const t of hf)await e.from("vote_items").insert({title:t.title,title_en:t.titleEn||null,description:t.description,description_en:t.descriptionEn||null,image:t.image,category:t.category,votes:t.votes,is_active:t.isActive});for(const t of ff)await e.from("coming_items").insert({title:t.title,title_en:t.titleEn||null,description:t.description,description_en:t.descriptionEn||null,image:t.image,release_date:t.releaseDate});localStorage.removeItem(ve.VOTED_ITEMS),localStorage.removeItem("bfit_user_id");return}localStorage.removeItem(ve.VOTE_ITEMS),localStorage.removeItem(ve.USER_VOTES),localStorage.removeItem(ve.COMING_ITEMS),localStorage.removeItem(ve.VOTED_ITEMS),localStorage.removeItem("bfit_user_id"),fk()},isUsingSupabase(){return Qe}},pk={}.VITE_CLOUDINARY_CLOUD_NAME,gk={}.VITE_CLOUDINARY_UPLOAD_PRESET,ld=!!(pk&&gk),Ty=({value:e,onChange:t,placeholder:r})=>{const{language:n}=Pe(),[i,s]=_.useState(!1),[o,a]=_.useState(!1),[l,u]=_.useState(null),[d,h]=_.useState("url"),f=_.useRef(null),y=async S=>{if(!ld)throw new Error("Cloudinary not configured");const E=new FormData;E.append("file",S),E.append("upload_preset",gk),E.append("folder","bfit-votes");const j=await fetch(`https://api.cloudinary.com/v1_1/${pk}/image/upload`,{method:"POST",body:E});if(!j.ok)throw new Error("Upload failed");return(await j.json()).secure_url},m=_.useCallback(async S=>{if(!S.type.startsWith("image/")){u(n==="fr"?"Seules les images sont acceptées":"Only images are accepted");return}if(S.size>10*1024*1024){u(n==="fr"?"Image trop lourde (max 10MB)":"Image too large (max 10MB)");return}a(!0),u(null);try{if(ld){const E=await y(S);t(E)}else{const E=new FileReader;E.onload=j=>{var P;const R=(P=j.target)==null?void 0:P.result;t(R)},E.readAsDataURL(S)}}catch(E){console.error("Upload error:",E),u(n==="fr"?"Erreur lors de l'upload":"Upload error")}finally{a(!1)}},[n,t]),x=_.useCallback(S=>{S.preventDefault(),S.stopPropagation(),s(!0)},[]),b=_.useCallback(S=>{S.preventDefault(),S.stopPropagation(),s(!1)},[]),v=_.useCallback(S=>{S.preventDefault(),S.stopPropagation()},[]),g=_.useCallback(S=>{S.preventDefault(),S.stopPropagation(),s(!1);const E=S.dataTransfer.files;E.length>0&&m(E[0])},[m]),w=()=>{var S;(S=f.current)==null||S.click()},k=S=>{const E=S.target.files;E&&E.length>0&&m(E[0])},C=()=>{t(""),u(null)};return c.jsxs(A5,{children:[c.jsxs(R5,{children:[c.jsxs(Py,{$active:d==="url",onClick:()=>h("url"),children:[c.jsx(CR,{size:14}),"URL"]}),c.jsxs(Py,{$active:d==="upload",onClick:()=>h("upload"),children:[c.jsx(MR,{size:14}),n==="fr"?"Téléverser":"Upload"]})]}),d==="url"?c.jsx(I5,{type:"url",value:e,onChange:S=>t(S.target.value),placeholder:r||"https://example.com/image.jpg"}):c.jsxs(O5,{$isDragging:i,$hasImage:!!e,onDragEnter:x,onDragLeave:b,onDragOver:v,onDrop:g,onClick:w,children:[c.jsx("input",{ref:f,type:"file",accept:"image/*",onChange:k,style:{display:"none"}}),o?c.jsxs(M5,{children:[c.jsx(TR,{size:32,className:"spinner"}),c.jsx("span",{children:n==="fr"?"Upload en cours...":"Uploading..."})]}):e?c.jsxs(N5,{children:[c.jsx(Ay,{src:e,alt:"Preview"}),c.jsx(D5,{onClick:S=>{S.stopPropagation(),C()},children:c.jsx(rr,{size:16})})]}):c.jsxs($5,{children:[c.jsx(ER,{size:40,strokeWidth:1.5}),c.jsx(L5,{children:n==="fr"?"Glissez une image ici ou cliquez pour sélectionner":"Drag an image here or click to select"}),c.jsx(z5,{children:"PNG, JPG, WebP (max 10MB)"})]})]}),d==="url"&&e&&c.jsx(U5,{children:c.jsx(Ay,{src:e,alt:"Preview"})}),l&&c.jsx(F5,{children:l}),d==="upload"&&!ld&&c.jsx(V5,{children:n==="fr"?"⚠️ Cloudinary non configuré. Les images seront en base64 (local uniquement).":"⚠️ Cloudinary not configured. Images will be base64 (local only)."})]})},A5=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`,R5=p.div`
  display: flex;
  gap: var(--spacing-1);
  background: var(--gray-100);
  padding: 4px;
  border-radius: var(--radius-lg);
`,Py=p.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  background: ${e=>e.$active?"var(--white)":"transparent"};
  color: ${e=>e.$active?"#d13296":"var(--gray-600)"};
  box-shadow: ${e=>e.$active?"var(--shadow-sm)":"none"};

  &:hover {
    color: #d13296;
  }
`,I5=p.input`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`,O5=p.div`
  position: relative;
  border: 2px dashed ${e=>e.$isDragging?"#d13296":"var(--gray-300)"};
  border-radius: var(--radius-lg);
  padding: ${e=>e.$hasImage?"0":"var(--spacing-6)"};
  background: ${e=>e.$isDragging?"rgba(209, 50, 150, 0.05)":"var(--gray-50)"};
  cursor: pointer;
  transition: all var(--transition-normal);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    border-color: #d13296;
    background: rgba(209, 50, 150, 0.02);
  }
`,$5=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-500);
`,L5=p.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  text-align: center;
`,z5=p.span`
  font-size: var(--font-size-xs);
  color: var(--gray-400);
`,N5=p.div`
  position: relative;
  width: 100%;
  height: 150px;
`,Ay=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
`,D5=p.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover {
    background: rgba(239, 68, 68, 0.9);
    transform: scale(1.1);
  }
`,M5=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,U5=p.div`
  height: 120px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--gray-200);
`,F5=p.div`
  color: #ef4444;
  font-size: var(--font-size-sm);
  padding: var(--spacing-2);
  background: #fef2f2;
  border-radius: var(--radius-md);
`,V5=p.div`
  color: #b45309;
  font-size: var(--font-size-xs);
  padding: var(--spacing-2);
  background: #fffbeb;
  border-radius: var(--radius-md);
  border: 1px solid #fcd34d;
`,B5=({isVisible:e,onClose:t})=>{const{language:r}=Pe(),{showNotification:n}=Vt(),[i,s]=_.useState("votes"),[o,a]=_.useState([]),[l,u]=_.useState(null),[d,h]=_.useState(!1),[f,y]=_.useState([]),[m,x]=_.useState(null),[b,v]=_.useState(!1),[g,w]=_.useState(!1),[k,C]=_.useState({title:"",titleEn:"",description:"",descriptionEn:"",image:"",category:""}),[S,E]=_.useState({title:"",titleEn:"",description:"",descriptionEn:"",image:"",releaseDate:""}),j=_.useCallback(async()=>{w(!0);try{const[A,Z]=await Promise.all([lt.getVoteItems(!1),lt.getComingItems()]);a(A),y(Z)}catch(A){console.error("Error loading data:",A),n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors du chargement des données":"Error loading data"})}finally{w(!1)}},[r,n]);_.useEffect(()=>{e&&j()},[e,j]);const R=()=>{h(!0),u(null),C({title:"",titleEn:"",description:"",descriptionEn:"",image:"",category:""})},P=A=>{u(A),h(!1),C({title:A.title,titleEn:A.titleEn||"",description:A.description,descriptionEn:A.descriptionEn||"",image:A.image,category:A.category})},L=async A=>{if(window.confirm(r==="fr"?"Êtes-vous sûr de vouloir supprimer cet élément ?":"Are you sure you want to delete this item?"))try{await lt.deleteVoteItem(A)&&(a(fe=>fe.filter(le=>le.id!==A)),n({type:"success",title:r==="fr"?"Supprimé":"Deleted",message:r==="fr"?"Élément supprimé avec succès":"Item deleted successfully"}))}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la suppression":"Error deleting item"})}},W=async()=>{if(!k.title||!k.description||!k.image||!k.category){n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Veuillez remplir tous les champs obligatoires":"Please fill all required fields"});return}try{if(l){const A=await lt.updateVoteItem(l.id,{title:k.title,titleEn:k.titleEn||void 0,description:k.description,descriptionEn:k.descriptionEn||void 0,image:k.image,category:k.category});A&&(a(Z=>Z.map(fe=>fe.id===l.id?A:fe)),n({type:"success",title:r==="fr"?"Modifié":"Updated",message:r==="fr"?"Élément modifié avec succès":"Item updated successfully"}))}else{const A=await lt.createVoteItem({title:k.title,titleEn:k.titleEn||void 0,description:k.description,descriptionEn:k.descriptionEn||void 0,image:k.image,category:k.category,isActive:!0});a(Z=>[...Z,A]),n({type:"success",title:r==="fr"?"Ajouté":"Added",message:r==="fr"?"Nouvel élément ajouté avec succès":"New item added successfully"})}re()}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la sauvegarde":"Error saving item"})}},re=()=>{u(null),h(!1),C({title:"",titleEn:"",description:"",descriptionEn:"",image:"",category:""})},ae=async A=>{try{const Z=await lt.toggleVoteItemActive(A);Z&&a(fe=>fe.map(le=>le.id===A?Z:le))}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la modification":"Error updating item"})}},rt=()=>{v(!0),x(null),E({title:"",titleEn:"",description:"",descriptionEn:"",image:"",releaseDate:""})},ce=A=>{x(A),v(!1),E({title:A.title,titleEn:A.titleEn||"",description:A.description,descriptionEn:A.descriptionEn||"",image:A.image,releaseDate:A.releaseDate.split("T")[0]})},Ae=async A=>{if(window.confirm(r==="fr"?"Êtes-vous sûr de vouloir supprimer cet élément ?":"Are you sure you want to delete this item?"))try{await lt.deleteComingItem(A)&&(y(fe=>fe.filter(le=>le.id!==A)),n({type:"success",title:r==="fr"?"Supprimé":"Deleted",message:r==="fr"?"Élément supprimé avec succès":"Item deleted successfully"}))}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la suppression":"Error deleting item"})}},$=async()=>{if(!S.title||!S.description||!S.image||!S.releaseDate){n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Veuillez remplir tous les champs obligatoires":"Please fill all required fields"});return}try{if(m){const A=await lt.updateComingItem(m.id,{title:S.title,titleEn:S.titleEn||void 0,description:S.description,descriptionEn:S.descriptionEn||void 0,image:S.image,releaseDate:S.releaseDate});A&&(y(Z=>Z.map(fe=>fe.id===m.id?A:fe)),n({type:"success",title:r==="fr"?"Modifié":"Updated",message:r==="fr"?"Élément modifié avec succès":"Item updated successfully"}))}else{const A=await lt.createComingItem({title:S.title,titleEn:S.titleEn||void 0,description:S.description,descriptionEn:S.descriptionEn||void 0,image:S.image,releaseDate:S.releaseDate});y(Z=>[...Z,A]),n({type:"success",title:r==="fr"?"Ajouté":"Added",message:r==="fr"?"Nouvel élément ajouté avec succès":"New item added successfully"})}N()}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la sauvegarde":"Error saving item"})}},N=()=>{x(null),v(!1),E({title:"",titleEn:"",description:"",descriptionEn:"",image:"",releaseDate:""})},V=async()=>{if(window.confirm(r==="fr"?"Réinitialiser toutes les données aux valeurs par défaut ? Cette action est irréversible.":"Reset all data to defaults? This action cannot be undone."))try{await lt.resetToDefaults(),await j(),n({type:"success",title:r==="fr"?"Réinitialisé":"Reset",message:r==="fr"?"Données réinitialisées avec succès":"Data reset successfully"})}catch{n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Erreur lors de la réinitialisation":"Error resetting data"})}},U=A=>{const Z=new Date(A);return r==="fr"?Z.toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"}):Z.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})};if(!e)return null;const X=c.jsx(q5,{onClick:A=>A.target===A.currentTarget&&t(),children:c.jsxs(H5,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},onClick:A=>A.stopPropagation(),children:[c.jsxs(W5,{children:[c.jsx(G5,{children:r==="fr"?"Gestionnaire Admin":"Admin Manager"}),c.jsx(K5,{onClick:t,children:c.jsx(rr,{size:24})})]}),c.jsxs(Y5,{children:[c.jsxs(Ry,{$active:i==="votes",onClick:()=>s("votes"),children:[c.jsx(fl,{size:18}),"Votes",c.jsx(Iy,{children:o.length})]}),c.jsxs(Ry,{$active:i==="coming",onClick:()=>s("coming"),children:[c.jsx(Co,{size:18}),r==="fr"?"Prochainement":"Coming Soon",c.jsx(Iy,{children:f.length})]})]}),c.jsxs(J5,{children:[g&&c.jsx(X5,{children:r==="fr"?"Chargement...":"Loading..."}),i==="votes"&&c.jsxs(c.Fragment,{children:[c.jsxs(Oy,{children:[c.jsxs($y,{onClick:R,children:[c.jsx(qh,{size:16}),r==="fr"?"Ajouter un vote":"Add Vote Item"]}),c.jsxs(Q5,{onClick:V,children:[c.jsx(Fp,{size:16}),r==="fr"?"Réinitialiser tout":"Reset All"]})]}),(d||l)&&c.jsxs(Ly,{children:[c.jsx(zy,{children:l?r==="fr"?"Modifier le vote":"Edit Vote Item":r==="fr"?"Nouveau vote":"New Vote Item"}),c.jsxs(Ny,{children:[c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Titre (FR) *":"Title (FR) *"}),c.jsx(Es,{type:"text",value:k.title,onChange:A=>C({...k,title:A.target.value}),placeholder:r==="fr"?"Titre en français":"French title"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Titre (EN)":"Title (EN)"}),c.jsx(Es,{type:"text",value:k.titleEn,onChange:A=>C({...k,titleEn:A.target.value}),placeholder:r==="fr"?"Titre en anglais (optionnel)":"English title (optional)"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:"Description (FR) *"}),c.jsx(Ra,{value:k.description,onChange:A=>C({...k,description:A.target.value}),placeholder:r==="fr"?"Description en français":"French description",rows:3})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:"Description (EN)"}),c.jsx(Ra,{value:k.descriptionEn,onChange:A=>C({...k,descriptionEn:A.target.value}),placeholder:r==="fr"?"Description en anglais (optionnel)":"English description (optional)",rows:3})]}),c.jsxs(It,{$fullWidth:!0,children:[c.jsx(Ot,{children:"Image *"}),c.jsx(Ty,{value:k.image,onChange:A=>C({...k,image:A}),placeholder:"https://example.com/image.jpg"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Catégorie *":"Category *"}),c.jsxs(Z5,{value:k.category,onChange:A=>C({...k,category:A.target.value}),children:[c.jsx("option",{value:"",children:r==="fr"?"Sélectionner":"Select"}),c.jsx("option",{value:"collection",children:"Collection"}),c.jsx("option",{value:"clothing",children:r==="fr"?"Vêtements":"Clothing"}),c.jsx("option",{value:"accessories",children:r==="fr"?"Accessoires":"Accessories"}),c.jsx("option",{value:"shoes",children:r==="fr"?"Chaussures":"Shoes"}),c.jsx("option",{value:"sport",children:"Sport"}),c.jsx("option",{value:"other",children:r==="fr"?"Autre":"Other"})]})]}),c.jsxs(Dy,{children:[c.jsxs(My,{onClick:re,children:[c.jsx(rr,{size:16}),r==="fr"?"Annuler":"Cancel"]}),c.jsxs(Uy,{onClick:W,children:[c.jsx(Uv,{size:16}),r==="fr"?"Sauvegarder":"Save"]})]})]})]}),c.jsxs(Fy,{children:[c.jsxs(Vy,{children:[r==="fr"?"Éléments de vote":"Vote Items"," (",o.length,")"]}),o.length===0?c.jsx(By,{children:r==="fr"?"Aucun élément de vote créé":"No vote items created"}):o.map(A=>c.jsxs(qy,{children:[c.jsx(Hy,{src:A.image,alt:A.title}),c.jsxs(Wy,{children:[c.jsx(Gy,{children:A.title}),c.jsx(Ky,{children:A.description}),c.jsxs(Yy,{children:[c.jsx(eL,{children:A.category}),c.jsxs(tL,{children:[A.votes," votes"]}),c.jsx(nL,{$isActive:A.isActive,children:A.isActive?r==="fr"?"Actif":"Active":r==="fr"?"Inactif":"Inactive"})]})]}),c.jsxs(Jy,{children:[c.jsx(Cs,{onClick:()=>P(A),title:r==="fr"?"Modifier":"Edit",children:c.jsx(Dv,{size:16})}),c.jsx(Cs,{onClick:()=>ae(A.id),title:A.isActive?r==="fr"?"Désactiver":"Disable":r==="fr"?"Activer":"Enable",children:c.jsx(SR,{size:16})}),c.jsx(Cs,{onClick:()=>L(A.id),title:r==="fr"?"Supprimer":"Delete",$danger:!0,children:c.jsx(jo,{size:16})})]})]},A.id))]})]}),i==="coming"&&c.jsxs(c.Fragment,{children:[c.jsx(Oy,{children:c.jsxs($y,{onClick:rt,children:[c.jsx(qh,{size:16}),r==="fr"?"Ajouter un prochainement":"Add Coming Item"]})}),(b||m)&&c.jsxs(Ly,{children:[c.jsx(zy,{children:m?r==="fr"?"Modifier le prochainement":"Edit Coming Item":r==="fr"?"Nouveau prochainement":"New Coming Item"}),c.jsxs(Ny,{children:[c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Titre (FR) *":"Title (FR) *"}),c.jsx(Es,{type:"text",value:S.title,onChange:A=>E({...S,title:A.target.value}),placeholder:r==="fr"?"Titre en français":"French title"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Titre (EN)":"Title (EN)"}),c.jsx(Es,{type:"text",value:S.titleEn,onChange:A=>E({...S,titleEn:A.target.value}),placeholder:r==="fr"?"Titre en anglais (optionnel)":"English title (optional)"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:"Description (FR) *"}),c.jsx(Ra,{value:S.description,onChange:A=>E({...S,description:A.target.value}),placeholder:r==="fr"?"Description en français":"French description",rows:3})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:"Description (EN)"}),c.jsx(Ra,{value:S.descriptionEn,onChange:A=>E({...S,descriptionEn:A.target.value}),placeholder:r==="fr"?"Description en anglais (optionnel)":"English description (optional)",rows:3})]}),c.jsxs(It,{$fullWidth:!0,children:[c.jsx(Ot,{children:"Image *"}),c.jsx(Ty,{value:S.image,onChange:A=>E({...S,image:A}),placeholder:"https://example.com/image.jpg"})]}),c.jsxs(It,{children:[c.jsx(Ot,{children:r==="fr"?"Date de sortie *":"Release Date *"}),c.jsx(Es,{type:"date",value:S.releaseDate,onChange:A=>E({...S,releaseDate:A.target.value})})]}),c.jsxs(Dy,{children:[c.jsxs(My,{onClick:N,children:[c.jsx(rr,{size:16}),r==="fr"?"Annuler":"Cancel"]}),c.jsxs(Uy,{onClick:$,children:[c.jsx(Uv,{size:16}),r==="fr"?"Sauvegarder":"Save"]})]})]})]}),c.jsxs(Fy,{children:[c.jsxs(Vy,{children:[r==="fr"?"Éléments prochainement":"Coming Soon Items"," (",f.length,")"]}),f.length===0?c.jsx(By,{children:r==="fr"?"Aucun élément prochainement créé":"No coming soon items created"}):f.map(A=>c.jsxs(qy,{children:[c.jsx(Hy,{src:A.image,alt:A.title}),c.jsxs(Wy,{children:[c.jsx(Gy,{children:A.title}),c.jsx(Ky,{children:A.description}),c.jsx(Yy,{children:c.jsxs(rL,{children:[c.jsx(Co,{size:12}),U(A.releaseDate)]})})]}),c.jsxs(Jy,{children:[c.jsx(Cs,{onClick:()=>ce(A),title:r==="fr"?"Modifier":"Edit",children:c.jsx(Dv,{size:16})}),c.jsx(Cs,{onClick:()=>Ae(A.id),title:r==="fr"?"Supprimer":"Delete",$danger:!0,children:c.jsx(jo,{size:16})})]})]},A.id))]})]})]})]})});return GE.createPortal(X,document.body)},q5=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  padding-top: 80px;
  overflow-y: auto;
`,H5=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 900px;
  width: 100%;
  max-height: calc(100vh - 120px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,W5=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #a8287a 100%);
  color: white;
  flex-shrink: 0;
`,G5=p.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: white;
`,K5=p.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`,Y5=p.div`
  display: flex;
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
  flex-shrink: 0;
`,Ry=p.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
  border: none;
  background: ${e=>e.$active?"var(--white)":"transparent"};
  color: ${e=>e.$active?"#d13296":"var(--gray-600)"};
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  border-bottom: 3px solid ${e=>e.$active?"#d13296":"transparent"};

  &:hover {
    color: #d13296;
    background: ${e=>e.$active?"var(--white)":"rgba(209, 50, 150, 0.05)"};
  }
`,Iy=p.span`
  background: var(--gray-200);
  color: var(--gray-700);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`,J5=p.div`
  padding: var(--spacing-6);
  overflow-y: auto;
  flex: 1;
`,Oy=p.div`
  margin-bottom: var(--spacing-6);
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
`,$y=p.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`,Q5=p.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    background: var(--gray-200);
  }
`,X5=p.div`
  text-align: center;
  padding: var(--spacing-4);
  color: var(--gray-500);
  font-style: italic;
`,Ly=p.div`
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`,zy=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
`,Ny=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-4);
`,It=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  ${e=>e.$fullWidth&&"grid-column: 1 / -1;"}
`,Ot=p.label`
  font-weight: var(--font-medium);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`,Es=p.input`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`,Ra=p.textarea`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  resize: vertical;
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`,Z5=p.select`
  padding: var(--spacing-3);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  background: var(--white);
  transition: all var(--transition-normal);

  &:focus {
    outline: none;
    border-color: #d13296;
  }
`,Dy=p.div`
  grid-column: 1 / -1;
  display: flex;
  gap: var(--spacing-3);
  justify-content: flex-end;
  margin-top: var(--spacing-4);
`,My=p.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    background: var(--gray-200);
  }
`,Uy=p.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`,Fy=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,Vy=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,By=p.div`
  text-align: center;
  padding: var(--spacing-8);
  color: var(--gray-500);
  font-style: italic;
  background: var(--gray-50);
  border-radius: var(--radius-lg);
`,qy=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  transition: all var(--transition-normal);

  &:hover {
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,Hy=p.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  flex-shrink: 0;
`,Wy=p.div`
  flex: 1;
  min-width: 0;
`,Gy=p.h4`
  font-size: var(--font-size-base);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
`,Ky=p.p`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Yy=p.div`
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  flex-wrap: wrap;
`,eL=p.span`
  background: var(--primary-gradient);
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`,tL=p.span`
  background: var(--gray-100);
  color: var(--gray-700);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`,rL=p.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: var(--white);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
`,nL=p.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  background: ${e=>e.$isActive?"#10b981":"#ef4444"};
  color: var(--white);
`,Jy=p.div`
  display: flex;
  gap: var(--spacing-2);
  flex-shrink: 0;
`,Cs=p.button`
  background: ${e=>e.$danger?"#ef4444":"var(--gray-100)"};
  color: ${e=>e.$danger?"var(--white)":"var(--gray-700)"};
  border: none;
  padding: var(--spacing-2);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: ${e=>e.$danger?"#dc2626":"var(--gray-200)"};
    transform: scale(1.05);
  }
`;p.button`
  background: #fee2e2;
  color: #ef4444;
  border: 1px solid #fecaca;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-top: var(--spacing-4);
  width: fit-content;
  align-self: center;

  &:hover {
    background: #fecaca;
    transform: translateY(-1px);
  }
`;const iL=p.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
`,sL=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 var(--spacing-3);
  }
`,oL=p(vt)`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`,aL=p.div`
  width: 32px;
  height: 32px;
  background: var(--primary-gradient);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-weight: var(--font-bold);
  font-size: var(--font-size-sm);
  box-shadow: var(--shadow-md);
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: var(--font-size-xs);
  }
`,lL=p.nav`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    display: none;
  }
`,cL=p(vt)`
  color: ${e=>e.$isActive?"#d13296":"var(--gray-700)"};
  text-decoration: none;
  font-weight: var(--font-medium);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.05);
  }
  
  ${e=>e.$isActive&&`
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: var(--primary-gradient);
      border-radius: var(--radius-full);
    }
  `}
`,uL=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    gap: var(--spacing-2);
  }
`,Ns=p.button`
  background: rgba(209, 50, 150, 0.05);
  border: 1px solid rgba(209, 50, 150, 0.1);
  color: var(--gray-700);
  padding: var(--spacing-2);
  border-radius: var(--radius-lg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  position: relative;
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-1);
  }
`,Qy=p.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #d13296;
  color: var(--white);
  font-size: var(--font-size-xs);
  font-weight: var(--font-bold);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,dL=p(Ns)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`,hL=p(F.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--white);
  border-bottom: 1px solid rgba(209, 50, 150, 0.1);
  padding: var(--spacing-4);
  z-index: 40;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 768px) {
    top: 60px;
  }
`,fL=p.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`,Xy=p(vt)`
  color: ${e=>e.$isActive?"#d13296":"var(--gray-700)"};
  text-decoration: none;
  font-weight: var(--font-medium);
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    background: rgba(209, 50, 150, 0.05);
  }
`,pL=()=>{const e=Fo(),{language:t,toggleLanguage:r}=Pe(),{cart:n}=ni(),{user:i,isAuthenticated:s}=Zc(),{getFavoritesCount:o}=Xo(),[a,l]=_.useState(!1),[u,d]=_.useState(!1),[h,f]=_.useState(!1),[y,m]=_.useState(0);_.useEffect(()=>{const v=w=>{const C=w.detail.cart.items.reduce((S,E)=>S+E.quantity,0);console.log("🛒 Header: Mise à jour du compteur panier:",C),m(C)};window.addEventListener("cartStateChanged",v);const g=n.items.reduce((w,k)=>w+k.quantity,0);return m(g),()=>window.removeEventListener("cartStateChanged",v)},[n]);const x=[{path:"/",label:t==="fr"?"Accueil":"Home"},{path:"/products",label:t==="fr"?"Produits":"Products"},{path:"/vote",label:t==="fr"?"Participer":"Participate"},{path:"/about",label:t==="fr"?"À propos":"About"}],b=()=>{l(!1)};return _.useEffect(()=>{b()},[e.pathname]),_.useEffect(()=>{(()=>{const w=localStorage.getItem("adminMode")==="true";new URLSearchParams(window.location.search).get("admin")==="true"&&!w?(localStorage.setItem("adminMode","true"),d(!0)):d(w)})();const g=w=>{w.key==="adminMode"&&d(w.newValue==="true")};return window.addEventListener("storage",g),()=>{window.removeEventListener("storage",g)}},[e.search]),c.jsxs(iL,{children:[c.jsxs(sL,{children:[c.jsxs(oL,{to:"/",children:[c.jsx(aL,{children:"BFT"}),c.jsxs("span",{className:"papyrus-font",children:["BestF.kers",c.jsx("span",{className:"brand-in",children:"in"}),"Town"]})]}),c.jsx(lL,{children:x.map(v=>c.jsx(cL,{to:v.path,$isActive:e.pathname===v.path,children:v.label},v.path))}),c.jsxs(uL,{children:[c.jsx(Ns,{onClick:r,title:t==="fr"?"Changer de langue":"Change language",children:c.jsx(Mp,{size:20})}),c.jsxs(Ns,{title:t==="fr"?"Favoris":"Favorites",onClick:()=>window.location.href="/favorites",children:[c.jsx(or,{size:20}),i&&s&&o()>0&&c.jsx(Qy,{children:o()})]}),c.jsxs(Ns,{title:t==="fr"?"Panier":"Cart",onClick:()=>window.location.href="/cart",children:[c.jsx(Go,{size:20}),y>0&&c.jsx(Qy,{children:y})]}),u&&c.jsx(Ns,{onClick:()=>f(!0),title:"Administration",children:c.jsx(Vp,{size:20})}),c.jsx(QO,{}),c.jsx(dL,{onClick:()=>l(!a),title:"Menu",children:a?c.jsx(rr,{size:20}):c.jsx(PR,{size:20})})]})]}),c.jsx(bn,{children:a&&c.jsx(hL,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3,ease:"easeInOut"},children:c.jsxs(fL,{children:[x.map(v=>c.jsx(Xy,{to:v.path,$isActive:e.pathname===v.path,onClick:b,children:v.label},v.path)),u&&c.jsxs(Xy,{to:"#",$isActive:!1,onClick:()=>{f(!0),b()},style:{color:"#d13296",fontWeight:"bold"},children:["⚙️ ","Administration"]})]})})}),c.jsx(B5,{isVisible:h,onClose:()=>f(!1)})]})},je=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-3);
  }
`,gL=p.footer`
  background: var(--gray-900);
  color: var(--white);
  padding: var(--spacing-8) 0 var(--spacing-4);
`,mL=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-6);
`,Zy=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`,e0=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-3);
  color: var(--white);
`,vL=p(vt)`
  color: var(--gray-300);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-normal);
  
  &:hover {
    color: #d13296;
  }
`,t0=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-300);
  font-size: var(--font-size-sm);
`,yL=p.div`
  display: flex;
  gap: var(--spacing-3);
`,r0=p.a`
  width: 36px;
  height: 36px;
  background: var(--gray-800);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);
  transition: all var(--transition-normal);
  
  &:hover {
    background: #d13296;
    color: var(--white);
    transform: translateY(-2px);
  }
`,wL=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-800);
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,xL=p.p`
  color: var(--gray-400);
  font-size: var(--font-size-sm);
`,bL=p.div`
  display: flex;
  gap: var(--spacing-4);
  
  @media (max-width: 768px) {
    gap: var(--spacing-3);
  }
`,cd=p(vt)`
  color: var(--gray-400);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-normal);
  
  &:hover {
    color: #d13296;
  }
`,SL=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-400);
  font-size: var(--font-size-sm);
`,kL=()=>{const{language:e}=Pe(),t=[{title:"Navigation",links:[{to:"/",label:e==="fr"?"Accueil":"Home"},{to:"/products",label:e==="fr"?"Produits":"Products"},{to:"/vote",label:e==="fr"?"Voter":"Vote"},{to:"/about",label:e==="fr"?"À propos":"About"}]},{title:"Support",links:[{to:"/commitments",label:e==="fr"?"Nos engagements":"Our commitments"},{to:"/account",label:e==="fr"?"Mon compte":"My account"},{to:"/cart",label:e==="fr"?"Panier":"Cart"}]}];return c.jsx(gL,{children:c.jsxs(je,{children:[c.jsxs(mL,{children:[t.map((r,n)=>c.jsxs(Zy,{children:[c.jsx(e0,{children:r.title}),r.links.map((i,s)=>c.jsx(vL,{to:i.to,children:i.label},s))]},n)),c.jsxs(Zy,{children:[c.jsx(e0,{children:"Contact"}),c.jsxs(t0,{as:"a",href:"mailto:contact@bestfkersintown.com",style:{textDecoration:"none",color:"inherit"},children:[c.jsx(Up,{size:16}),"contact@bestfkersintown.com"]}),c.jsxs(t0,{children:[c.jsx(RR,{size:16}),"+33 6 70 25 86 34"]}),c.jsxs(yL,{children:[c.jsx(r0,{href:"https://www.instagram.com/bestf.kersintown/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:c.jsx(fS,{size:18})}),c.jsx(r0,{href:"https://www.tiktok.com/@bestf.kersintown?_r=1&_t=ZN-93ESJFFeLXq","aria-label":"TikTok",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:c.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.18-1.3-.44-.24-.86-.52-1.24-.85V15a7.5 7.5 0 0 1-14.91 1.41 7.5 7.5 0 0 1 13.61-4.82c.02-.17.04-.34.04-.51V.02z"})})})]})]})]}),c.jsxs(wL,{children:[c.jsxs(xL,{children:["© 2025 ",c.jsx("span",{className:"papyrus-font",children:"BestF.kersinTown"})]}),c.jsxs(bL,{children:[c.jsx(cd,{to:"/about",children:e==="fr"?"Mentions légales":"Legal"}),c.jsx(cd,{to:"/cgv",children:e==="fr"?"CGV":"Terms & Conditions"}),c.jsx(cd,{to:"/commitments",children:e==="fr"?"Confidentialité":"Privacy"})]}),c.jsxs(SL,{children:[c.jsx(pS,{size:16}),e==="fr"?"Mode inclusive":"Inclusive fashion"]})]})]})})},_L="sk-8dbf1f68c4d2473e8fd3501a9504a1a9",EL="https://api.deepseek.com/v1/chat/completions",n0=Er.create({baseURL:EL,headers:{Authorization:`Bearer ${_L}`,"Content-Type":"application/json"}}),CL=`
Tu es l'assistant virtuel de BestF.kersinTown, une marque de vêtements inclusive et authentique fondée en 2025.

INFORMATIONS SUR LA MARQUE :
- Nom : BestF.kersinTown
- Fondation : 2025
- Mission : Créer des vêtements inclusifs qui célèbrent la diversité et l'authenticité
- Valeurs : Inclusivité, Diversité, Authenticité, Communauté
- Public cible : Communauté LGBT+, personnes cherchant des vêtements authentiques et inclusifs

PRODUITS :
- Vêtements inclusifs pour tous les corps et identités
- Designs qui célèbrent la diversité
- Collections Pride et Rainbow
- Vêtements de sport inclusifs
- Accessoires colorés et authentiques

SERVICES :
- Livraison express 24h
- Retours gratuits
- Support client inclusif
- Communauté en ligne

INFORMATIONS PRATIQUES :
- Site web : bestfkersintown.com
- Email : contact@bestfkersintown.com
- Téléphone : +33 1 23 45 67 89
- Adresse : 123 Rue de la Mode, 75001 Paris, France

RÈGLES DE COMMUNICATION :
- Sois toujours inclusif et respectueux
- Utilise un langage chaleureux et authentique
- Réponds en français ou en anglais selon la langue de l'utilisateur
- Sois fier de représenter une marque inclusive
- Encourage l'expression de soi et l'authenticité
- Propose toujours d'aider avec des informations sur les produits, commandes, ou support

FONCTIONNALITÉS DISPONIBLES :
- Informations sur les produits et collections
- Aide pour les commandes et livraisons
- Support client et retours
- Informations sur la marque et ses valeurs
- Conseils de style inclusifs
- Informations sur la communauté et les événements
`,i0={async sendMessage(e,t=[],r="fr"){try{const i=[{role:"system",content:`${CL}

Langue de réponse : ${r==="fr"?"français":"anglais"}`},...t,{role:"user",content:e}],o=(await n0.post("",{model:"deepseek-chat",messages:i,max_tokens:500,temperature:.7,top_p:.9,frequency_penalty:.1,presence_penalty:.1})).data;if(o.choices&&o.choices.length>0)return o.choices[0].message.content;throw new Error("Aucune réponse reçue de DeepSeek")}catch(n){console.error("Erreur lors de l'appel à DeepSeek:",n);const s={fr:["Désolé, je rencontre des difficultés techniques. Pouvez-vous reformuler votre question ou contacter notre équipe à contact@bestfkersintown.com ?","Je ne peux pas traiter votre demande pour le moment. N'hésitez pas à nous appeler au +33 1 23 45 67 89 pour une assistance immédiate.","Il y a un problème technique. En attendant, vous pouvez consulter notre FAQ ou nous envoyer un email."],en:["Sorry, I'm experiencing technical difficulties. Can you rephrase your question or contact our team at contact@bestfkersintown.com?","I can't process your request right now. Feel free to call us at +33 1 23 45 67 89 for immediate assistance.","There's a technical issue. In the meantime, you can check our FAQ or send us an email."]}[r];return s[Math.floor(Math.random()*s.length)]}},async getQuickResponse(e,t="fr"){const r={fr:{produits:"Nos produits sont conçus pour célébrer la diversité et l'authenticité. Découvrez nos collections inclusives sur notre site !",commandes:"Pour suivre votre commande, connectez-vous à votre compte ou contactez-nous avec votre numéro de commande.",livraison:"Nous proposons une livraison express en 24h. Les frais de livraison varient selon votre localisation.",retours:"Les retours sont gratuits sous 30 jours. Contactez notre service client pour initier un retour.",taille:"Nos vêtements sont conçus pour s'adapter à tous les corps. Consultez notre guide des tailles inclusif.",prix:"Nos prix reflètent la qualité et l'inclusivité de nos produits. Nous proposons aussi des promotions régulières.",contact:"Contactez-nous à contact@bestfkersintown.com ou appelez-nous au +33 1 23 45 67 89."},en:{produits:"Our products are designed to celebrate diversity and authenticity. Discover our inclusive collections on our website!",commandes:"To track your order, log into your account or contact us with your order number.",livraison:"We offer express delivery in 24h. Shipping costs vary depending on your location.",retours:"Returns are free within 30 days. Contact our customer service to initiate a return.",taille:"Our clothes are designed to fit all body types. Check out our inclusive size guide.",prix:"Our prices reflect the quality and inclusivity of our products. We also offer regular promotions.",contact:"Contact us at contact@bestfkersintown.com or call us at +33 1 23 45 67 89."}};return r[t][e]||r[t].contact},analyzeIntent(e){const t=e.toLowerCase();return t.includes("produit")||t.includes("vêtement")||t.includes("collection")?"produits":t.includes("commande")||t.includes("suivre")||t.includes("tracking")?"commandes":t.includes("livraison")||t.includes("expédition")||t.includes("shipping")?"livraison":t.includes("retour")||t.includes("remboursement")||t.includes("return")?"retours":t.includes("taille")||t.includes("size")||t.includes("mesure")?"taille":t.includes("prix")||t.includes("coût")||t.includes("price")?"prix":t.includes("contact")||t.includes("appeler")||t.includes("email")?"contact":"general"},async checkAPIHealth(){try{return(await n0.post("",{model:"deepseek-chat",messages:[{role:"user",content:"test"}],max_tokens:10})).status===200}catch(e){return console.error("DeepSeek API non disponible:",e),!1}}},jL=p(F.div)`
  position: fixed;
  bottom: var(--spacing-6);
  right: var(--spacing-6);
  z-index: 1000;
  font-family: inherit;
`,TL=p(F.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-gradient);
  border: none;
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-xl);
  }
`,PL=p(F.div)`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--gray-200);

  @media (max-width: 768px) {
    width: 320px;
    height: 450px;
    right: -20px;
  }
`,AL=p.div`
  background: var(--primary-gradient);
  color: var(--white);
  padding: var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,RL=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  margin: 0;
`,IL=p.button`
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-md);
  transition: background var(--transition-normal);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,OL=p.div`
  flex: 1;
  padding: var(--spacing-4);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`,s0=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);
  max-width: 80%;
  align-self: ${e=>e.$isUser?"flex-end":"flex-start"};
`,$L=p.div`
  background: ${e=>e.$isUser?"var(--primary-gradient)":"var(--gray-100)"};
  color: ${e=>e.$isUser?"var(--white)":"var(--gray-900)"};
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  line-height: 1.4;
  word-wrap: break-word;
`,o0=p.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${e=>e.$isUser?"var(--primary-gradient)":"var(--gray-200)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$isUser?"var(--white)":"var(--gray-600)"};
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
`,LL=p.div`
  padding: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
  display: flex;
  gap: var(--spacing-2);
`,zL=p.input`
  flex: 1;
  padding: var(--spacing-3);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  outline: none;
  transition: border-color var(--transition-normal);

  &:focus {
    border-color: #d13296;
  }
`,NL=p.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--spacing-3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,DL=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-3);
`,ML=p.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-300);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    background: #d13296;
    color: var(--white);
    border-color: #d13296;
  }
`,UL=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-500);
  font-size: var(--font-size-sm);
  font-style: italic;
`,FL=()=>{const{language:e}=Pe(),[t,r]=_.useState(!1),[n,i]=_.useState([]),[s,o]=_.useState(""),[a,l]=_.useState(!1),[u,d]=_.useState(!0),h=_.useRef(null),f=_.useRef(null),y={fr:["Bonjour ! Je suis l'assistant virtuel de BestF.kersinTown. Comment puis-je vous aider aujourd'hui ?","Salut ! Je suis là pour vous aider avec vos questions sur BestF.kersinTown. Que souhaitez-vous savoir ?","Hey ! Bienvenue chez BestF.kersinTown. Je peux vous aider avec nos produits, commandes, ou tout autre question !"],en:["Hello! I'm BestF.kersinTown's virtual assistant. How can I help you today?","Hi! I'm here to help you with your questions about BestF.kersinTown. What would you like to know?","Hey! Welcome to BestF.kersinTown. I can help you with our products, orders, or any other questions!"]},m={fr:["Voir les produits","Suivre ma commande","Informations sur la marque","Contact"],en:["View products","Track my order","Brand information","Contact"]};_.useEffect(()=>{(async()=>{const w=await i0.checkAPIHealth();d(w)})()},[]),_.useEffect(()=>{var g;(g=h.current)==null||g.scrollIntoView({behavior:"smooth"})},[n]),_.useEffect(()=>{t&&setTimeout(()=>{var g;(g=f.current)==null||g.focus()},300)},[t]),_.useEffect(()=>{if(t&&n.length===0){const g=y[e][Math.floor(Math.random()*y[e].length)];i([{role:"assistant",content:g}])}},[t,e]);const x=async g=>{if(!g.trim()||a)return;const w={role:"user",content:g};i(k=>[...k,w]),o(""),l(!0);try{if(u){const k=await i0.sendMessage(g,n,e);i(C=>[...C,{role:"assistant",content:k}])}else{const k=e==="fr"?"Désolé, je rencontre des difficultés techniques. Pouvez-vous reformuler votre question ou contacter notre équipe à contact@bestfkersintown.com ?":"Sorry, I'm experiencing technical difficulties. Can you rephrase your question or contact our team at contact@bestfkersintown.com?";i(C=>[...C,{role:"assistant",content:k}])}}catch(k){console.error("Erreur lors de l'envoi du message:",k);const C=e==="fr"?"Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter directement.":"Sorry, an error occurred. Please try again or contact us directly.";i(S=>[...S,{role:"assistant",content:C}])}finally{l(!1)}},b=g=>{o(g),x(g)},v=g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),x(s))};return c.jsxs(jL,{children:[!t&&c.jsx(TL,{onClick:()=>r(!0),whileHover:{scale:1.1},whileTap:{scale:.95},children:c.jsx(mS,{size:24})}),t&&c.jsxs(PL,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{duration:.3,type:"spring",stiffness:300,damping:30},children:[c.jsxs(AL,{children:[c.jsx(RL,{children:e==="fr"?"Assistant BestF.kersinTown":"BestF.kersinTown Assistant"}),c.jsx(IL,{onClick:()=>r(!1),children:c.jsx(rr,{size:20})})]}),c.jsxs(OL,{children:[n.map((g,w)=>c.jsxs(s0,{$isUser:g.role==="user",children:[c.jsx(o0,{$isUser:g.role==="user",children:g.role==="user"?c.jsx(nc,{size:16}):"BFT"}),c.jsx($L,{$isUser:g.role==="user",children:g.content})]},w)),a&&c.jsxs(s0,{$isUser:!1,children:[c.jsx(o0,{$isUser:!1,children:"BFT"}),c.jsxs(UL,{children:[c.jsx(tc,{size:16,className:"animate-spin"}),e==="fr"?"Je réfléchis...":"Thinking..."]})]}),c.jsx("div",{ref:h})]}),n.length===1&&c.jsx(DL,{children:m[e].map((g,w)=>c.jsx(ML,{onClick:()=>b(g),children:g},w))}),c.jsxs(LL,{children:[c.jsx(zL,{ref:f,type:"text",placeholder:e==="fr"?"Tapez votre message...":"Type your message...",value:s,onChange:g=>o(g.target.value),onKeyPress:v,disabled:a}),c.jsx(NL,{onClick:()=>x(s),disabled:!s.trim()||a,children:c.jsx($R,{size:16})})]})]})]})},VL=({onAccept:e,onDecline:t})=>{const{language:r}=Pe(),[n,i]=_.useState(!1);_.useEffect(()=>{localStorage.getItem("cookieConsent")||setTimeout(()=>i(!0),2e3)},[]);const s=()=>{localStorage.setItem("cookieConsent","true"),i(!1),e()},o=()=>{localStorage.setItem("cookieConsent","false"),i(!1),t()};return c.jsx(bn,{children:n&&c.jsx(BL,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:c.jsxs(qL,{initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:50,scale:.9},transition:{duration:.3,ease:"easeOut"},children:[c.jsx(HL,{onClick:o,children:c.jsx(rr,{size:20})}),c.jsx(WL,{children:c.jsx(xR,{size:32})}),c.jsx(GL,{children:r==="fr"?"Cookies et Confidentialité":"Cookies & Privacy"}),c.jsx(KL,{children:r==="fr"?"Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En continuant, vous acceptez notre politique de confidentialité.":"We use cookies to enhance your experience and analyze traffic. By continuing, you accept our privacy policy."}),c.jsxs(YL,{children:[c.jsx(JL,{onClick:o,children:r==="fr"?"Refuser":"Decline"}),c.jsxs(QL,{onClick:s,children:[c.jsx(is,{size:16}),r==="fr"?"Accepter":"Accept"]})]})]})})})},BL=p(F.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
`,qL=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-xl);
  border: 1px solid rgba(209, 50, 150, 0.1);
  max-width: 400px;
  position: relative;
  
  @media (max-width: 768px) {
    max-width: none;
    padding: var(--spacing-4);
  }
`,HL=p.button`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: none;
  border: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-full);
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--gray-600);
    background: var(--gray-100);
  }
`,WL=p.div`
  width: 48px;
  height: 48px;
  background: var(--primary-gradient);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  margin-bottom: var(--spacing-4);
`,GL=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`,KL=p.p`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  line-height: 1.5;
  margin-bottom: var(--spacing-4);
`,YL=p.div`
  display: flex;
  gap: var(--spacing-3);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,JL=p.button`
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  flex: 1;
  
  &:hover {
    background: var(--gray-200);
    color: var(--gray-800);
  }
`,QL=p.button`
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  flex: 1;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`,XL=()=>{const[e,t]=_.useState(!1);return _.useEffect(()=>{if(!localStorage.getItem("newsletter_modal_seen")){const i=setTimeout(()=>{t(!0)},25e3);return()=>clearTimeout(i)}},[]),{showNewsletterModal:e,closeNewsletterModal:()=>{t(!1),localStorage.setItem("newsletter_modal_seen","true")}}};class ZL{async subscribeToNewsletter(t,r,n){return console.log("📧 Tentative d'inscription à la newsletter (Shopify retiré):",t,r,n),{success:!0,message:"Inscription réussie (Mode démo - Shopify retiré) !"}}async unsubscribeFromNewsletter(t){return console.log("📧 Désabonnement (Shopify retiré):",t),{success:!0,message:"Désabonnement réussi"}}}const e4=new ZL,t4=p(F.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-4);
`,r4=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  max-width: 450px;
  width: 100%;
  position: relative;
  box-shadow: var(--shadow-2xl);
  overflow: hidden;
`,n4=p.button`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  background: var(--gray-100);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  
  &:hover {
    background: var(--gray-200);
    transform: scale(1.1);
  }
`,i4=p.div`
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-4);
  text-align: center;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  position: relative;
`,s4=p.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-4);
  backdrop-filter: blur(10px);
`,o4=p.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
`,a4=p.p`
  font-size: var(--font-size-lg);
  opacity: 0.9;
  line-height: 1.5;
`,l4=p.div`
  padding: var(--spacing-6);
`,c4=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
`,ud=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`,dd=p.div`
  width: 24px;
  height: 24px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  flex-shrink: 0;
`,u4=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,d4=p.input`
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
  
  &::placeholder {
    color: var(--gray-400);
  }
`,h4=p.button`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,f4=p.p`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
  text-align: center;
  line-height: 1.4;
  margin-top: var(--spacing-4);
`,p4=({isOpen:e,onClose:t})=>{const{language:r}=Pe(),{showNotification:n}=Vt(),[i,s]=_.useState(""),[o,a]=_.useState(!1),[l,u]=_.useState(!1),[d,h]=_.useState(""),f=async m=>{if(m.preventDefault(),!i||!i.includes("@")){n({type:"error",title:r==="fr"?"Email invalide":"Invalid email",message:r==="fr"?"Veuillez entrer une adresse email valide":"Please enter a valid email address"});return}a(!0);try{const x=await e4.subscribeToNewsletter(i);x.success?(u(!0),n({type:"success",title:r==="fr"?"Inscription réussie !":"Successfully subscribed!",message:x.message}),setTimeout(()=>{t(),u(!1),s(""),h("")},3e3)):n({type:"error",title:r==="fr"?"Erreur d'inscription":"Subscription error",message:x.message})}catch(x){console.error("Erreur lors de l'inscription:",x),n({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Une erreur est survenue lors de l'inscription":"An error occurred during subscription"})}finally{a(!1)}},y=()=>{localStorage.setItem("newsletter_modal_seen","true"),t()};return c.jsx(bn,{children:e&&c.jsx(t4,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:y,children:c.jsxs(r4,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:m=>m.stopPropagation(),children:[c.jsx(n4,{onClick:y,children:c.jsx(rr,{size:20})}),c.jsxs(i4,{children:[c.jsx(s4,{children:c.jsx(kR,{size:24})}),c.jsxs(o4,{children:[r==="fr"?"Offre Spéciale !":"Special Offer!",c.jsx("span",{style:{fontSize:"var(--font-size-lg)"},children:"🎉"})]}),c.jsx(a4,{children:r==="fr"?"Inscrivez-vous à notre newsletter et obtenez 10% de réduction sur votre première commande !":"Sign up for our newsletter and get 10% off your first order!"})]}),c.jsxs(l4,{children:[c.jsxs(c4,{children:[c.jsxs(ud,{children:[c.jsx(dd,{children:c.jsx(Gu,{size:14})}),c.jsx("span",{children:r==="fr"?"Offres exclusives":"Exclusive offers"})]}),c.jsxs(ud,{children:[c.jsx(dd,{children:c.jsx(Gu,{size:14})}),c.jsx("span",{children:r==="fr"?"Nouveautés en avant-première":"New arrivals in preview"})]}),c.jsxs(ud,{children:[c.jsx(dd,{children:c.jsx(Gu,{size:14})}),c.jsx("span",{children:r==="fr"?"Conseils de style personnalisés":"Personalized style advice"})]})]}),l?c.jsxs("div",{style:{textAlign:"center",padding:"var(--spacing-6)",color:"#10b981",fontSize:"var(--font-size-lg)",fontWeight:"var(--font-bold)"},children:[c.jsx("div",{style:{marginBottom:"var(--spacing-4)"},children:r==="fr"?"Merci ! Votre code de réduction vous a été envoyé par email.":"Thank you! Your discount code has been sent to your email."}),c.jsxs("div",{style:{background:"#f8f9fa",padding:"var(--spacing-4)",borderRadius:"var(--radius-lg)",border:"2px dashed #10b981"},children:[c.jsx("div",{style:{fontSize:"var(--font-size-sm)",color:"var(--gray-600)",marginBottom:"var(--spacing-2)"},children:r==="fr"?"Code de réduction :":"Discount code:"}),c.jsx("div",{style:{fontSize:"var(--font-size-xl)",fontWeight:"var(--font-bold)",color:"#d13296",letterSpacing:"2px"},children:d||"NEWSLETTER10"})]})]}):c.jsxs(u4,{onSubmit:f,children:[c.jsx(d4,{type:"email",placeholder:r==="fr"?"Votre adresse email":"Your email address",value:i,onChange:m=>s(m.target.value),required:!0}),c.jsxs(h4,{type:"submit",disabled:o,children:[c.jsx(Up,{size:20}),o?r==="fr"?"Inscription...":"Signing up...":r==="fr"?"S'inscrire":"Sign up",!o&&c.jsx(dn,{size:20})]})]}),c.jsx(f4,{children:r==="fr"?"En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désinscrire à tout moment.":"By signing up, you agree to receive our marketing emails. You can unsubscribe at any time."})]})]})})})},g4=p.div`
  min-height: 100vh;
`,m4=p.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 50vh;
    min-height: 350px;
  }
`,v4=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://res.cloudinary.com/dy6rstttw/image/upload/v1755450580/fuckerintow_baniere_rkgglx.jpg') center/cover;
  z-index: 1;
  transform: translateZ(0);
  will-change: transform;
  
  @media (max-width: 768px) {
    background-position: center 25%;
  }
`,y4=p.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 var(--spacing-4);
  display: none;
`,w4=p(F.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--white);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`,x4=p(F.p)`
  font-size: var(--font-size-xl);
  color: var(--white);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`,b4=p(F.div)`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`,a0=p(vt)`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: var(--font-semibold);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
  }
`,l0=p.button`
  background: rgba(19, 18, 18, 0.66);
  color: var(--white);
  border: 2px solid var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  backdrop-filter: blur(10px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: var(--white);
    color: var(--gray-900);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    text-shadow: none;
  }
`,S4=p.section`
  padding: var(--spacing-20) 0;
  background: var(--white);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(209, 50, 150, 0.3), transparent);
  }
`,k4=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-16);
  
  @media (max-width: 768px) {
    gap: var(--spacing-12);
  }
`,_4=p.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,c0=p(F.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.3;
`,E4=p(F.p)`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
`,C4=p(F.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,hd=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`,fd=p.div`
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-sm);
`,j4=p.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: var(--spacing-6);
  }
`,pf=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
  }
`,u0=p.div`
  height: 300px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  &:hover::before {
    opacity: 1;
  }
`,T4=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-fast);
  
  ${pf}:hover & {
    opacity: 1;
  }
`,P4=p.div`
  display: flex;
  gap: var(--spacing-3);
`,d0=p.button`
  background: var(--white);
  border: none;
  border-radius: var(--radius-full);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: #d13296;
    color: var(--white);
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
  }
`,h0=p.div`
  padding: var(--spacing-6);
`,A4=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,R4=p(vt)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
  }
`;p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
`;p.span`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
`;p.span`
  font-size: var(--font-size-lg);
  color: var(--gray-400);
  text-decoration: line-through;
`;const I4=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
`,O4=p.div`
  display: flex;
  gap: 2px;
`,$4=p(Ko)`
  color: ${e=>e.$filled?"var(--accent-yellow)":"var(--gray-300)"};
  fill: ${e=>e.$filled?"var(--accent-yellow)":"none"};
`,L4=p(vt)`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-3);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
    box-shadow: var(--shadow-lg);
  }
  box-shadow: var(--shadow-md);
`,z4=p.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`,N4=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-8);
  text-align: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ia=p(F.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
`,Oa=p.div`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: #d13296;
`,$a=p.div`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  font-weight: var(--font-medium);
`,D4=p.section`
  padding: var(--spacing-20) 0;
  background: var(--gray-50);
`,M4=p.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`,U4=p(F.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.3;
`,F4=p(F.p)`
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-6);
`,V4=p(vt)`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  text-decoration: none;
  font-weight: var(--font-semibold);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: linear-gradient(135deg, #b02a7a 0%, #FF7043 100%);
  }
`,B4=p.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  text-align: center;
  padding: var(--spacing-4) var(--spacing-2);
  font-weight: var(--font-semibold);
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-md);
  
  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    padding: var(--spacing-3) var(--spacing-2);
  }
`,q4=p.div`
  padding: var(--spacing-16) 0;
  background: var(--white);
  text-align: center;
`,H4=p(F.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`,W4=p(F.p)`
  font-size: var(--font-size-xl);
  color: var(--gray-700);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,G4=p(F.div)`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`,K4=()=>{const{language:e}=Pe(),{addToCart:t}=ni(),{showNotification:r}=Vt(),[n,i]=_.useState([]),[s,o]=_.useState(!0);_.useEffect(()=>{(async()=>{try{o(!0);const d=await Pr.getAllProducts();if(d.products&&d.products.length>0){const h=d.products.slice(0,3).map(f=>{var y,m,x;return{id:f.id.toString(),title:f.title,price:((y=f.variants[0])==null?void 0:y.price)||0,originalPrice:((m=f.variants[0])==null?void 0:m.compareAtPrice)||void 0,image:((x=f.images[0])==null?void 0:x.src)||"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",rating:4.5,reviews:Math.floor(Math.random()*500)+100}});i(h)}else i([{id:"1",title:e==="fr"?"T-shirt Pride Collection":"Pride Collection T-shirt",price:29.99,originalPrice:39.99,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:342},{id:"2",title:e==="fr"?"Jean Inclusif":"Inclusive Jeans",price:89.99,originalPrice:119.99,image:"https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:567},{id:"3",title:e==="fr"?"Sneakers Rainbow":"Rainbow Sneakers",price:129.99,originalPrice:159.99,image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:234}])}catch(d){console.error("Erreur lors du chargement des produits vedettes:",d),i([{id:"1",title:e==="fr"?"T-shirt Pride Collection":"Pride Collection T-shirt",price:29.99,originalPrice:39.99,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:342},{id:"2",title:e==="fr"?"Jean Inclusif":"Inclusive Jeans",price:89.99,originalPrice:119.99,image:"https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:567},{id:"3",title:e==="fr"?"Sneakers Rainbow":"Rainbow Sneakers",price:129.99,originalPrice:159.99,image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",rating:4.5,reviews:234}])}finally{o(!1)}})()},[e]);const a=u=>{t({id:u.id,title:u.title,description:"",price:u.price,images:[u.image],category:"",tags:[],variants:[],available:!0,featured:!1,rating:u.rating,reviewCount:u.reviews,likes:0,isLiked:!1,createdAt:"",updatedAt:""}),r({type:"success",title:e==="fr"?"Produit ajouté":"Product added",message:e==="fr"?`${u.title} a été ajouté au panier`:`${u.title} has been added to cart`})},l=u=>{r({type:"info",title:e==="fr"?"Favori ajouté":"Favorite added",message:e==="fr"?"Produit ajouté aux favoris":"Product added to favorites"})};return c.jsxs(g4,{children:[c.jsxs(m4,{children:[c.jsx(v4,{}),c.jsxs(y4,{children:[c.jsx(w4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:e==="fr"?"BestF.kersinTown - Mode Inclusive & Authentique":"BestF.kersinTown - Inclusive & Authentic Fashion"}),c.jsx(x4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:e==="fr"?"Découvrez une mode qui vous ressemble vraiment ! Des vêtements audacieux et vibrants qui célèbrent votre authenticité. Rejoignez notre communauté inclusive et exprimez-vous sans limites.":"Discover fashion that truly reflects you! Bold and vibrant clothing that celebrates your authenticity. Join our inclusive community and express yourself without limits."}),c.jsxs(b4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[c.jsxs(a0,{to:"/products",children:[e==="fr"?"Découvrir":"Discover",c.jsx(dn,{size:20})]}),c.jsxs(l0,{children:[c.jsx(Mv,{size:20}),e==="fr"?"Voir la vidéo":"Watch video"]})]})]})]}),c.jsx(B4,{children:e==="fr"?"Best F.kers in Town Depuis 2025...":"Best F.kers in Town Since 2025..."}),c.jsx(q4,{children:c.jsxs(je,{children:[c.jsxs(H4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx("span",{className:"bft-title",style:{display:"block",marginBottom:"0.5rem"},children:"BFT"}),e==="fr"?c.jsxs(c.Fragment,{children:["Best F.kers ",c.jsx("span",{className:"brand-in",children:"in"})," Town - Mode Inclusive & Authentique"]}):c.jsxs(c.Fragment,{children:["Best F.kers ",c.jsx("span",{className:"brand-in",children:"in"})," Town - Inclusive & Authentic Fashion"]})]}),c.jsx(W4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:e==="fr"?"Découvrez une mode qui vous ressemble vraiment ! Des vêtements audacieux et vibrants qui célèbrent votre authenticité. Rejoignez notre communauté inclusive et exprimez-vous sans limites.":"Discover fashion that truly reflects you! Bold and vibrant clothing that celebrates your authenticity. Join our inclusive community and express yourself without limits."}),c.jsxs(G4,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[c.jsxs(a0,{to:"/products",children:[e==="fr"?"Découvrir":"Discover",c.jsx(dn,{size:20})]}),c.jsxs(l0,{children:[c.jsx(Mv,{size:20}),e==="fr"?"Voir la vidéo":"Watch video"]})]})]})}),c.jsx(S4,{children:c.jsx(je,{children:c.jsxs(k4,{children:[c.jsxs(_4,{children:[c.jsx(c0,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8},viewport:{once:!0},children:e==="fr"?c.jsxs(c.Fragment,{children:["Pourquoi Vous Allez Adorer ",c.jsx("span",{className:"bft-title",children:"BFT"})," ?"]}):c.jsxs(c.Fragment,{children:["Why You'll Love ",c.jsx("span",{className:"bft-title",children:"BFT"}),"?"]})}),c.jsx(E4,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:e==="fr"?"Parce que vous méritez de vous sentir incroyable dans vos vêtements ! Nous créons chaque pièce avec votre bonheur en tête. Des designs qui vous font briller, des couleurs qui vous donnent confiance, et une qualité qui vous accompagne partout. Vous n'êtes pas juste un client, vous faites partie de notre famille.":"Because you deserve to feel amazing in your clothes! We create each piece with your happiness in mind. Designs that make you shine, colors that give you confidence, and quality that follows you everywhere. You're not just a customer, you're part of our family."}),c.jsxs(C4,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.4},viewport:{once:!0},children:[c.jsxs(hd,{children:[c.jsx(fd,{children:"🌈"}),c.jsx("span",{children:e==="fr"?"Créé pour VOUS, par des gens comme VOUS":"Created for YOU, by people like YOU"})]}),c.jsxs(hd,{children:[c.jsx(fd,{children:"✨"}),c.jsx("span",{children:e==="fr"?"Des designs qui vous font briller":"Designs that make you shine"})]}),c.jsxs(hd,{children:[c.jsx(fd,{children:"💚"}),c.jsx("span",{children:e==="fr"?"Qualité qui vous accompagne partout":"Quality that follows you everywhere"})]})]})]}),c.jsx(F.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.3},viewport:{once:!0},children:c.jsx(c0,{style:{marginBottom:"var(--spacing-8)"},children:e==="fr"?"Découvrez Votre Style Unique":"Discover Your Unique Style"})}),c.jsx(j4,{children:s?Array.from({length:3}).map((u,d)=>c.jsxs(pf,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:d*.1},children:[c.jsx(u0,{$image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",children:c.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #d13296",borderRadius:"50%",animation:"spin 1s linear infinite"}})})}),c.jsxs(h0,{children:[c.jsx("div",{style:{height:"20px",background:"#f0f0f0",marginBottom:"8px",borderRadius:"4px",animation:"pulse 1.5s ease-in-out infinite"}}),c.jsx("div",{style:{height:"16px",background:"#f0f0f0",marginBottom:"16px",borderRadius:"4px",width:"60%",animation:"pulse 1.5s ease-in-out infinite"}})]})]},`loading-${d}`)):n.map((u,d)=>c.jsxs(pf,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:d*.1},viewport:{once:!0},children:[c.jsx(u0,{$image:u.image,children:c.jsx(T4,{children:c.jsxs(P4,{children:[c.jsx(d0,{onClick:()=>l(u.id),children:c.jsx(or,{size:20})}),c.jsx(d0,{onClick:()=>a(u),children:c.jsx(rc,{size:20})})]})})}),c.jsxs(h0,{children:[c.jsx(R4,{to:`/product/${u.id}`,children:c.jsx(A4,{children:u.title})}),c.jsxs(I4,{children:[c.jsx(O4,{children:[1,2,3,4,5].map(h=>c.jsx($4,{size:16,$filled:h<=u.rating},h))}),c.jsxs("span",{children:["(",u.reviews,")"]})]}),c.jsxs(L4,{to:`/product/${u.id}`,children:[c.jsx(rc,{size:16}),e==="fr"?"Voir le produit":"View product"]})]})]},u.id))})]})})}),c.jsx(D4,{children:c.jsx(je,{children:c.jsxs(M4,{children:[c.jsx(U4,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},children:e==="fr"?"Prêt(e) à Transformer Votre Garde-Robe ?":"Ready to Transform Your Wardrobe?"}),c.jsx(F4,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.2},viewport:{once:!0},children:e==="fr"?c.jsxs(c.Fragment,{children:["Chaque piece que vous choisissez raconte votre histoire. Nos vetements ne sont pas juste des vetements, ce sont des declarations de qui vous etes vraiment. Rejoignez des milliers de personnes qui ont deja trouve leur style unique avec ",c.jsx("span",{className:"bft-title",children:"BFT"}),"."]}):c.jsxs(c.Fragment,{children:["Every piece you choose tells your story. Our clothes aren't just clothes, they're declarations of who you truly are. Join thousands of people who have already found their unique style with ",c.jsx("span",{className:"bft-title",children:"BFT"}),"."]})}),c.jsx(F.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8,delay:.4},viewport:{once:!0},children:c.jsxs(V4,{to:"/products",children:[e==="fr"?"Découvrir Toute la Collection":"Discover the Full Collection",c.jsx(dn,{size:20})]})})]})})}),c.jsx(z4,{children:c.jsx(je,{children:c.jsxs(N4,{children:[c.jsxs(Ia,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[c.jsx(Oa,{children:"15K+"}),c.jsx($a,{children:e==="fr"?"Membres de la communauté":"Community Members"})]}),c.jsxs(Ia,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.1},viewport:{once:!0},children:[c.jsx(Oa,{children:"200+"}),c.jsx($a,{children:e==="fr"?"Designs exclusifs":"Exclusive Designs"})]}),c.jsxs(Ia,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[c.jsx(Oa,{children:"98%"}),c.jsx($a,{children:e==="fr"?"Satisfaction client":"Customer Satisfaction"})]}),c.jsxs(Ia,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.3},viewport:{once:!0},children:[c.jsx(Oa,{children:"24h"}),c.jsx($a,{children:e==="fr"?"Livraison express":"Express Delivery"})]})]})})})]})},Y4="modulepreload",J4=function(e){return"/"+e},f0={},hc=function(t,r,n){if(!r||r.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=J4(s),s in f0)return;f0[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let d=i.length-1;d>=0;d--){const h=i[d];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Y4,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},mk=()=>{const[e,t]=_.useState(!1),[r,n]=_.useState(null),[i,s]=_.useState([]),o=m=>{const x=localStorage.getItem(`upsell_seen_${m}`);if(!x)return!1;const b=new Date(x);return(new Date().getTime()-b.getTime())/(1e3*60*60)<2},a=m=>{localStorage.setItem(`upsell_seen_${m}`,new Date().toISOString())};return{showUpsellModal:e,currentTrigger:r,upsellOffers:i,triggerUpsell:async m=>{var b,v;if(o(m.type))return!1;let x=!1;switch(m.type){case"add_to_cart":(b=m.category)!=null&&b.toLowerCase().includes("tshirt")&&(x=!0);break;case"view_product":x=!0;break;case"cart_page":x=!0;break;case"checkout":x=!0;break}if(x)try{const{productService:g}=await hc(()=>Promise.resolve().then(()=>lc),void 0),k=(v=(await g.getAllProducts()).products)==null?void 0:v.filter(C=>C.variants&&C.variants.some(S=>S.inventoryQuantity>0||S.available));if(k&&k.length>0)return n(m),t(!0),a(m.type),!0}catch(g){console.error("Erreur lors de la vérification des produits disponibles:",g)}return!1},closeUpsell:()=>{t(!1),n(null)},generateUpsellOffers:(m,x)=>{const b=[],v={id:"tshirt-bundle",type:"bundle",title:"Lot de 3 T-shirts",description:"Économisez en achetant le lot complet",products:["upsell-1","upsell-2","upsell-3"],discount:15,originalPrice:74.97,finalPrice:59.99},g={id:"next-purchase-discount",type:"discount",title:"Réduction sur votre prochaine commande",description:"Obtenez 10% de réduction sur votre prochaine commande",products:[],discount:10,originalPrice:0,finalPrice:0};if(x){const w={id:"related-product",type:"individual",title:"Produit complémentaire",description:"Complétez votre look avec ce produit assorti",products:["related-1"],discount:5,originalPrice:29.99,finalPrice:24.99};b.push(w)}return b.push(v,g),b},isEligibleForUpsell:m=>m.some(b=>{var v,g;return((v=b.category)==null?void 0:v.toLowerCase().includes("tshirt"))||((g=b.title)==null?void 0:g.toLowerCase().includes("t-shirt"))}),calculatePotentialSavings:m=>{const x=m.filter(b=>{var v,g;return((v=b.category)==null?void 0:v.toLowerCase().includes("tshirt"))||((g=b.title)==null?void 0:g.toLowerCase().includes("t-shirt"))}).length;return x>=3?25:x>=2?15:10},getPersonalizedRecommendations:async(m,x)=>{try{const{productService:b}=await hc(()=>Promise.resolve().then(()=>lc),void 0),v=await b.getAllProducts();if(v.products&&v.products.length>0)return v.products.filter(w=>w.variants&&w.variants.some(k=>k.inventoryQuantity>0||k.available)).slice(0,3).map(w=>{var k,C,S;return{id:w.id.toString().split("/").pop()||w.id.toString(),title:w.title,price:parseFloat(((k=w.variants[0])==null?void 0:k.price)||"0"),originalPrice:(C=w.variants[0])!=null&&C.compareAtPrice?parseFloat(w.variants[0].compareAtPrice):void 0,image:((S=w.images[0])==null?void 0:S.src)||"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",category:w.productType||"tshirt",reason:"Produit disponible dans notre catalogue"}})}catch(b){console.error("Erreur lors du chargement des recommandations:",b)}return[]},hasSeenUpsellRecently:o}},Q4=mp`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,X4=mp`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`,Z4=mp`
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1.0);
  }
`,ez=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  .spinner {
    animation: ${Q4} 1s linear infinite;
    color: ${e=>e.$color||"#d13296"};
  }
  
  .text {
    font-size: ${e=>{switch(e.$size){case"small":return"var(--font-size-sm)";case"large":return"var(--font-size-lg)";default:return"var(--font-size-base)"}}};
    color: ${e=>e.$color||"var(--gray-600)"};
    font-weight: var(--font-medium);
  }
`,tz=p.div`
  display: flex;
  gap: var(--spacing-1);
`,pd=p.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.color||"#d13296"};
  animation: ${Z4} 1.4s ease-in-out infinite both;
  animation-delay: ${e=>e.$delay}s;
`,rz=p.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  animation: ${X4} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`,ss=({size:e="medium",color:t,text:r,variant:n="spinner",showText:i=!0})=>{const s=()=>{switch(e){case"small":return 16;case"large":return 32;default:return 24}},o=()=>{switch(n){case"dots":return c.jsxs(tz,{children:[c.jsx(pd,{$delay:0,color:t}),c.jsx(pd,{$delay:.16,color:t}),c.jsx(pd,{$delay:.32,color:t})]});case"pulse":return c.jsx(rz,{children:c.jsx(tc,{size:s()-8})});default:return c.jsx(tc,{className:"spinner",size:s()})}};return c.jsxs(ez,{$size:e,$color:t,children:[o(),i&&r&&c.jsx("span",{className:"text",children:r})]})},nz=p(F.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--spacing-4);
`,iz=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  max-width: 400px;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-2xl);
`,sz=p.button`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  background: var(--gray-100);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  z-index: 10;
  
  &:hover {
    background: var(--gray-200);
    transform: scale(1.1);
  }
`,oz=p.div`
  padding: var(--spacing-8) var(--spacing-6) var(--spacing-4);
  text-align: center;
  border-bottom: 1px solid var(--gray-100);
`,az=p.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,lz=p.p`
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-4);
`;p.div`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-weight: var(--font-bold);
  font-size: var(--font-size-sm);
  display: inline-block;
  margin-bottom: var(--spacing-4);
`;const cz=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  padding: var(--spacing-6);
`,uz=p.div`
  background: var(--white);
  border: 2px solid var(--gray-100);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;
  
  &:hover {
    border-color: #d13296;
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,dz=p.div`
  height: 150px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
`,hz=p.div`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-2);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--white);
    transform: scale(1.1);
  }
`,fz=p.div`
  padding: var(--spacing-4);
`,pz=p.h3`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
  line-height: 1.3;
`,gz=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-3);
`,mz=p.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: #d13296;
`,vz=p.span`
  font-size: var(--font-size-sm);
  color: var(--gray-400);
  text-decoration: line-through;
`,yz=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-3);
`,wz=p.div`
  display: flex;
  gap: 1px;
`,xz=p(Ko)`
  color: ${e=>e.$filled?"#FFD700":"var(--gray-300)"};
  fill: ${e=>e.$filled?"#FFD700":"none"};
  width: 14px;
  height: 14px;
`,bz=p.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`,Sz=p.div`
  padding: var(--spacing-6);
  border-top: 1px solid var(--gray-100);
  text-align: center;
`,kz=p.button`
  background: none;
  border: none;
  color: var(--gray-500);
  font-size: var(--font-size-sm);
  cursor: pointer;
  text-decoration: underline;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--gray-700);
  }
`;p.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: var(--radius-xl);
  padding: var(--spacing-4);
  margin: var(--spacing-4);
  text-align: center;
`;p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  color: #92400e;
  margin-bottom: var(--spacing-2);
`;p.p`
  color: #92400e;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-3);
`;p.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-3);
`;p.button`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-bold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;const vk=({isOpen:e,onClose:t,currentProduct:r,cartItems:n=[]})=>{const{language:i}=Pe(),{addToCart:s}=ni(),{showNotification:o}=Vt();_.useState([]);const[a,l]=_.useState([]),[u,d]=_.useState(!0);_.useEffect(()=>{(async()=>{try{d(!0);const{productService:m}=await hc(()=>Promise.resolve().then(()=>lc),void 0),x=await m.getAllProducts();if(x.products&&x.products.length>0){const b=x.products.filter(v=>v.variants&&v.variants.some(g=>g.inventoryQuantity>0||g.available)).slice(0,3).map(v=>{var g,w,k;return{id:v.id.toString().split("/").pop()||v.id.toString(),title:v.title,price:parseFloat(((g=v.variants[0])==null?void 0:g.price)||"0"),originalPrice:(w=v.variants[0])!=null&&w.compareAtPrice?parseFloat(v.variants[0].compareAtPrice):void 0,image:((k=v.images[0])==null?void 0:k.src)||"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",rating:4.5,category:v.productType||"tshirt"}});l(b)}else l([])}catch(m){console.error("Erreur lors du chargement des produits d'upsell:",m),l([])}finally{d(!1)}})()},[i]),a.length>0&&a.reduce((y,m)=>y+m.price,0);const h=async y=>{var m;try{const{productService:x}=await hc(()=>Promise.resolve().then(()=>lc),void 0),v=(m=(await x.getAllProducts()).products)==null?void 0:m.find(w=>w.id.toString()===y.id);if(!v){o({type:"error",title:i==="fr"?"Produit non disponible":"Product not available",message:i==="fr"?"Ce produit n'est plus disponible":"This product is no longer available"});return}const g=v.variants&&v.variants.some(w=>w.inventoryQuantity>0||w.available);if(!g){o({type:"error",title:i==="fr"?"Rupture de stock":"Out of stock",message:i==="fr"?"Ce produit est en rupture de stock":"This product is out of stock"});return}s({id:y.id,title:y.title,description:v.description||"",price:y.price,images:[y.image],category:v.productType||y.category,tags:v.tags||[],variants:v.variants||[],available:g,featured:!1,rating:y.rating,reviewCount:0,likes:0,isLiked:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),o({type:"success",title:i==="fr"?"Ajouté au panier":"Added to cart",message:i==="fr"?`${y.title} a été ajouté au panier`:`${y.title} has been added to cart`})}catch(x){console.error("Erreur lors de l'ajout au panier:",x),o({type:"error",title:i==="fr"?"Erreur":"Error",message:i==="fr"?"Erreur lors de l'ajout au panier":"Error adding to cart"})}},f=y=>c.jsx(wz,{children:[1,2,3,4,5].map(m=>c.jsx(xz,{$filled:m<=y},m))});return c.jsx(bn,{children:e&&!u&&a.length>0&&c.jsx(nz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:c.jsxs(iz,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},onClick:y=>y.stopPropagation(),children:[c.jsx(sz,{onClick:t,children:c.jsx(rr,{size:20})}),c.jsxs(oz,{children:[c.jsx(az,{children:i==="fr"?"Vous aimeriez aussi...":"You might also like..."}),c.jsx(lz,{children:i==="fr"?"Découvrez nos autres t-shirts assortis":"Discover our other matching t-shirts"})]}),u?c.jsx("div",{style:{padding:"var(--spacing-6)",textAlign:"center",color:"var(--gray-500)"},children:i==="fr"?"Chargement des produits...":"Loading products..."}):a.length>0?c.jsx(cz,{children:a.map(y=>c.jsxs(uz,{children:[c.jsx(dz,{$image:y.image,children:c.jsx(hz,{children:c.jsx(or,{size:16})})}),c.jsxs(fz,{children:[c.jsx(pz,{children:y.title}),c.jsxs(gz,{children:[c.jsxs(mz,{children:["€",y.price]}),y.originalPrice&&c.jsxs(vz,{children:["€",y.originalPrice]})]}),c.jsxs(yz,{children:[f(y.rating),c.jsxs("span",{style:{fontSize:"12px",color:"var(--gray-500)"},children:["(",y.rating,")"]})]}),c.jsxs(bz,{onClick:()=>h(y),children:[c.jsx(Go,{size:14}),i==="fr"?"Ajouter":"Add"]})]})]},y.id))}):c.jsx("div",{style:{padding:"var(--spacing-6)",textAlign:"center",color:"var(--gray-500)"},children:i==="fr"?"Aucun produit disponible pour le moment":"No products available at the moment"}),c.jsx(Sz,{children:c.jsx(kz,{onClick:t,children:i==="fr"?"Continuer sans ajouter":"Continue without adding"})})]})})})},p0=p.div`
  padding: var(--spacing-12) 0;
  background: var(--gray-50);
  min-height: 100vh;
`,_z=p.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
  padding: var(--spacing-8) 0;
`,Ez=p.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Cz=p.p`
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,jz=p.div`
  background: var(--white);
  padding: var(--spacing-8);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-10);
  border: 1px solid var(--gray-100);
  
  @media (max-width: 768px) {
    padding: var(--spacing-4);
    margin-bottom: var(--spacing-6);
  }
`,g0=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  &:not(:last-child) {
    margin-bottom: var(--spacing-6);
  }
`,hi=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`,La=p.label`
  font-weight: var(--font-semibold);
  color: var(--gray-800);
  font-size: var(--font-size-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gd=p.select`
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-base);
  background: var(--white);
  transition: all var(--transition-normal);
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`,Tz=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`,m0=p.input`
  flex: 1;
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-base);
  text-align: center;
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
    box-shadow: 0 0 0 3px rgba(209, 50, 150, 0.1);
  }
`,Pz=p.span`
  color: var(--gray-500);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
`,Az=p.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--font-size-base);
  color: var(--gray-700);
  cursor: pointer;
  margin-top: var(--spacing-1);
`,Rz=p.input`
  width: 18px;
  height: 18px;
  accent-color: #d13296;
  cursor: pointer;
  margin: 0;
`,Iz=p.div`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  margin-bottom: var(--spacing-8);
  text-align: center;
  font-weight: var(--font-medium);
  padding: var(--spacing-4);
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
`,Oz=p.div`
  display: grid;
  grid-template-columns: ${e=>e.$viewMode==="grid"?"repeat(4, 1fr)":"1fr"};
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 1200px) {
    grid-template-columns: ${e=>e.$viewMode==="grid"?"repeat(3, 1fr)":"1fr"};
  }
  
  @media (max-width: 900px) {
    grid-template-columns: ${e=>e.$viewMode==="grid"?"repeat(2, 1fr)":"1fr"};
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,tg=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  border: 1px solid var(--gray-100);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: #d13296;
  }
`,$z=p.div`
  position: relative;
  height: 280px;
  overflow: hidden;
`,Lz=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);

  ${tg}:hover & {
    transform: scale(1.1);
  }
`,zz=p.div`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  opacity: 0;
  transition: opacity var(--transition-normal);

  ${tg}:hover & {
    opacity: 1;
  }
`,v0=p.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--white);
    transform: scale(1.15);
    color: #d13296;
    box-shadow: var(--shadow-lg);
  }
`,Nz=p.div`
  position: absolute;
  top: var(--spacing-4);
  left: var(--spacing-4);
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-sm);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-md);
`,Dz=p.div`
  padding: var(--spacing-8);
`,Mz=p.div`
  font-size: var(--font-size-sm);
  color: #d13296;
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Uz=p(vt)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: none;
  }
`,Fz=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
  line-height: 1.3;
  text-decoration: none;
  transition: color var(--transition-fast);
  
  &:hover {
    color: #d13296;
  }
`,Vz=p.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-top: var(--spacing-3);
`;p.button`
  width: 100%;
  padding: var(--spacing-3);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
  }
`;const Bz=p.div`
  text-align: center;
  padding: var(--spacing-12);
`,qz=p.div`
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
`,Hz=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,Wz=p.p`
  color: var(--gray-600);
  max-width: 400px;
  margin: 0 auto;
`,Gz=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  background: var(--gray-50);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-4);
`,Kz=p.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Yz=p(Fp)`
  animation: ${e=>e.$isSpinning?"spin 1s linear infinite":"none"};
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,y0=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--error-light);
  border: 1px solid var(--error);
  border-radius: var(--radius-lg);
  color: var(--error);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
`,Jz=p.div`
  display: flex;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
`,w0=p.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${e=>e.$isActive?"var(--primary-gradient)":"var(--gray-100)"};
  border: 1px solid ${e=>e.$isActive?"var(--primary-gradient)":"var(--gray-200)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  color: ${e=>e.$isActive?"var(--white)":"var(--gray-700)"};
  box-shadow: ${e=>e.$isActive?"var(--shadow-md)":"var(--shadow-sm)"};

  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Qz=()=>{const{language:e}=Pe(),{addToCart:t}=ni(),{addFavorite:r,removeFavorite:n,isFavorite:i}=Xo(),{showNotification:s}=Vt(),o=Ac(),{triggerUpsell:a,closeUpsell:l,showUpsellModal:u}=mk(),[d,h]=_.useState([]),[f,y]=_.useState([]),[m,x]=_.useState(!0),[b,v]=_.useState(null),[g,w]=_.useState("all"),[k,C]=_.useState("all"),[S,E]=_.useState({min:"",max:""}),[j,R]=_.useState("name"),[P,L]=_.useState(!1),[W,re]=_.useState("grid"),[ae,rt]=_.useState(!1),[ce,Ae]=_.useState(null),[$,N]=_.useState(null),V=async()=>{rt(!0),N(null);try{await U(),Ae(new Date)}catch{N(e==="fr"?"Erreur de synchronisation":"Sync error")}finally{rt(!1)}},U=_.useCallback(async()=>{var I,Y,K,ie;try{x(!0),v(null);const G=await Pr.getAllProducts();h(G.products),y(G.products),console.log(`✅ ${G.products.length} produits chargés`)}catch(G){console.error("❌ Erreur lors du chargement des produits:",G);const te=((Y=(I=G.response)==null?void 0:I.data)==null?void 0:Y.message)||((ie=(K=G.response)==null?void 0:K.data)==null?void 0:ie.error)||G.message;v(e==="fr"?`Erreur lors du chargement: ${te}`:`Error loading: ${te}`)}finally{x(!1)}},[e]);_.useEffect(()=>{U()},[U]),_.useEffect(()=>{let I=[...d];g!=="all"&&(I=I.filter(Y=>{const K=(Y.productType||"").toLowerCase(),ie=g.toLowerCase(),G=Y.title.toLowerCase(),te=(Y.tags||[]).join(" ").toLowerCase();return K.includes(ie)||K===ie?!0:ie==="teeshirt"?G.includes("tee")||G.includes("t-shirt")||te.includes("tee")||te.includes("t-shirt"):ie==="sous-vêtement"?G.includes("under")||G.includes("sous-vêtement")||te.includes("under")||te.includes("slip")||te.includes("boxer"):!1})),k!=="all"&&(I=I.filter(Y=>{const K=Y.title.toLowerCase(),ie=(Y.tags||[]).join(" ").toLowerCase(),G=k.toLowerCase();return K.includes(G)||ie.includes(G)})),S.min&&(I=I.filter(Y=>{var K;return(((K=Y.variants[0])==null?void 0:K.price)||0)>=parseFloat(S.min)})),S.max&&(I=I.filter(Y=>{var K;return(((K=Y.variants[0])==null?void 0:K.price)||0)<=parseFloat(S.max)})),P&&(I=I.filter(Y=>{var K;return((K=Y.variants[0])==null?void 0:K.available)||!1})),I.sort((Y,K)=>{var te,Sn;const ie=((te=Y.variants[0])==null?void 0:te.price)||0,G=((Sn=K.variants[0])==null?void 0:Sn.price)||0;switch(j){case"price-asc":return ie-G;case"price-desc":return G-ie;case"name":return Y.title.localeCompare(K.title);case"newest":return new Date(K.createdAt).getTime()-new Date(Y.createdAt).getTime();default:return 0}}),y(I)},[d,g,k,S,j,P]);const X=async I=>{var Y,K,ie;try{const G=fe(I);if(!G.variants||G.variants.length===0)throw new Error("Aucune variante disponible pour ce produit");const te=(K=(Y=I.variants)==null?void 0:Y[0])==null?void 0:K.id;if(!te)throw new Error("Aucune variante disponible pour ce produit");await t(G,1,te),s({type:"success",title:e==="fr"?"Ajoute au panier":"Added to cart",message:e==="fr"?`${I.title} a ete ajoute au panier`:`${I.title} has been added to cart`}),((ie=I.productType)!=null&&ie.toLowerCase().includes("tshirt")||I.title.toLowerCase().includes("t-shirt"))&&a({type:"add_to_cart",productId:I.id,category:I.productType}),setTimeout(()=>{o("/cart")},1e3)}catch(G){console.error("Erreur dans handleAddToCart:",G);const te=G instanceof Error?G.message:"Erreur inconnue";s({type:"error",title:e==="fr"?"Erreur":"Error",message:e==="fr"?`Erreur: ${te}`:`Error: ${te}`})}},A=async I=>{var Y,K;try{i(I.id)?(await n(I.id),s({type:"info",title:e==="fr"?"Retiré des favoris":"Removed from favorites",message:e==="fr"?`${I.title} a été retiré des favoris`:`${I.title} has been removed from favorites`})):(await r({id:I.id.toString(),title:I.title,image:((Y=I.images[0])==null?void 0:Y.src)||"",price:((K=I.variants[0])==null?void 0:K.price.toString())||"0"}),s({type:"success",title:e==="fr"?"Ajouté aux favoris":"Added to favorites",message:e==="fr"?`${I.title} a été ajouté aux favoris`:`${I.title} has been added to favorites`}))}catch{s({type:"error",title:e==="fr"?"Erreur":"Error",message:e==="fr"?"Erreur lors de la gestion des favoris":"Error managing favorites"})}},Z=I=>new Intl.NumberFormat(e==="fr"?"fr-FR":"en-US",{style:"currency",currency:"EUR"}).format(parseFloat(I)),fe=I=>{var K,ie,G,te,Sn;const Y=((K=I.variants)==null?void 0:K.map(Bt=>({id:Bt.id,title:Bt.title,price:Bt.price||0,compareAtPrice:Bt.compareAtPrice||void 0,available:Bt.available,options:Bt.options||[]})))||[];return{id:I.id,title:I.title,description:I.description,price:((ie=I.variants[0])==null?void 0:ie.price)||0,compareAtPrice:((G=I.variants[0])==null?void 0:G.compareAtPrice)||void 0,images:((te=I.images)==null?void 0:te.map(Bt=>Bt.src))||[],category:I.productType,tags:I.tags||[],variants:Y,available:((Sn=I.variants[0])==null?void 0:Sn.available)||!1,featured:!1,rating:4.5,reviewCount:0,likes:0,isLiked:!1,createdAt:I.createdAt,updatedAt:I.updatedAt}},le=I=>I?I.toLocaleTimeString(e==="fr"?"fr-FR":"en-US",{hour:"2-digit",minute:"2-digit"}):e==="fr"?"Jamais":"Never";return m?c.jsx(p0,{children:c.jsx(je,{children:c.jsx(ss,{})})}):c.jsxs(p0,{children:[c.jsxs(je,{children:[c.jsxs(_z,{children:[c.jsx(Ez,{children:e==="fr"?"Nos Produits":"Our Products"}),c.jsx(Cz,{children:e==="fr"?"Découvrez notre collection exclusive de produits de qualité":"Discover our exclusive collection of quality products"})]}),c.jsxs(Gz,{children:[c.jsx(Yz,{size:16,$isSpinning:ae}),c.jsxs("span",{children:[e==="fr"?"Derniere synchronisation":"Last sync",": ",le(ce)]}),c.jsx("span",{style:{marginLeft:"8px",color:"#10b981",fontWeight:"bold"},children:"BigCommerce"}),c.jsxs(Kz,{onClick:V,disabled:ae,title:e==="fr"?"Rafraichir les produits":"Refresh products",children:[c.jsx(Fp,{size:14}),e==="fr"?"Rafraichir":"Refresh"]})]}),$&&c.jsxs(y0,{children:[c.jsx(Eo,{size:16}),$]}),c.jsxs(jz,{children:[c.jsxs(g0,{children:[c.jsxs(hi,{children:[c.jsx(La,{children:e==="fr"?"Catégorie":"Category"}),c.jsxs(gd,{value:g,onChange:I=>w(I.target.value),children:[c.jsx("option",{value:"all",children:e==="fr"?"Toutes les catégories":"All categories"}),c.jsx("option",{value:"vêtements",children:e==="fr"?"Vêtements (Tous)":"Clothing (All)"}),c.jsx("option",{value:"teeshirt",children:"T-shirts"}),c.jsx("option",{value:"sous-vêtement",children:e==="fr"?"Sous-vêtements":"Underwear"}),c.jsx("option",{value:"hauts",children:e==="fr"?"Vêtements : Hauts":"Clothing: Tops"}),c.jsx("option",{value:"bas",children:e==="fr"?"Vêtements : Bas":"Clothing: Bottoms"}),c.jsx("option",{value:"robes",children:e==="fr"?"Vêtements : Robes":"Clothing: Dresses"}),c.jsx("option",{value:"vestes",children:e==="fr"?"Vêtements : Vestes":"Clothing: Jackets"}),c.jsx("option",{value:"accessoires",children:e==="fr"?"Accessoires":"Accessories"}),c.jsx("option",{value:"chaussures",children:e==="fr"?"Chaussures":"Shoes"}),c.jsx("option",{value:"maquillage",children:e==="fr"?"Maquillage":"Makeup"})]})]}),c.jsxs(hi,{children:[c.jsx(La,{children:e==="fr"?"Prix":"Price"}),c.jsxs(Tz,{children:[c.jsx(m0,{type:"number",placeholder:"Min",value:S.min,onChange:I=>E(Y=>({...Y,min:I.target.value}))}),c.jsx(Pz,{children:"-"}),c.jsx(m0,{type:"number",placeholder:"Max",value:S.max,onChange:I=>E(Y=>({...Y,max:I.target.value}))})]})]}),c.jsxs(hi,{children:[c.jsx(La,{children:e==="fr"?"Communauté":"Community"}),c.jsxs(gd,{value:k,onChange:I=>C(I.target.value),children:[c.jsx("option",{value:"all",children:e==="fr"?"Toutes":"All"}),c.jsx("option",{value:"GG",children:"GG (Gay Gamer)"}),c.jsx("option",{value:"LL",children:"LL (Lovely Lady)"}),c.jsx("option",{value:"BFT",children:"BFT (Best F.kers)"})]})]}),c.jsxs(hi,{children:[c.jsx(La,{children:e==="fr"?"Trier par":"Sort by"}),c.jsxs(gd,{value:j,onChange:I=>R(I.target.value),children:[c.jsx("option",{value:"name",children:e==="fr"?"Nom":"Name"}),c.jsx("option",{value:"price-asc",children:e==="fr"?"Prix croissant":"Price ascending"}),c.jsx("option",{value:"price-desc",children:e==="fr"?"Prix décroissant":"Price descending"}),c.jsx("option",{value:"newest",children:e==="fr"?"Plus récent":"Newest"})]})]})]}),c.jsxs(g0,{children:[c.jsx(hi,{children:c.jsxs(Az,{children:[c.jsx(Rz,{type:"checkbox",checked:P,onChange:I=>L(I.target.checked)}),e==="fr"?"En stock uniquement":"In stock only"]})}),c.jsx(hi,{children:c.jsxs(Jz,{children:[c.jsx(w0,{$isActive:W==="grid",onClick:()=>re("grid"),title:e==="fr"?"Vue grille":"Grid view",children:c.jsx(_R,{size:18})}),c.jsx(w0,{$isActive:W==="list",onClick:()=>re("list"),title:e==="fr"?"Vue liste":"List view",children:c.jsx(jR,{size:18})})]})})]})]}),c.jsx(Iz,{children:e==="fr"?`${f.length} produit(s) trouvé(s)`:`${f.length} product(s) found`}),b?c.jsxs(y0,{children:[c.jsx(Eo,{size:16}),b]}):c.jsx(Oz,{$viewMode:W,children:f.map(I=>{var Y,K,ie,G;return c.jsxs(tg,{as:F.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[c.jsxs($z,{children:[c.jsx(Lz,{src:((Y=I.images[0])==null?void 0:Y.src)||"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",alt:I.title,onError:te=>{var Bt;console.log("❌ Erreur de chargement image:",I.title,(Bt=I.images[0])==null?void 0:Bt.src);const Sn=te.target;Sn.src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"},onLoad:()=>{var te;console.log("✅ Image chargée:",I.title,(te=I.images[0])==null?void 0:te.src)}}),c.jsxs(zz,{children:[c.jsx(v0,{onClick:()=>X(I),title:e==="fr"?"Ajouter au panier":"Add to cart",children:c.jsx(Go,{size:20})}),c.jsx(v0,{onClick:()=>A(I),title:e==="fr"?"Ajouter aux favoris":"Add to favorites",children:c.jsx(or,{size:20,fill:i(I.id)?"#d13296":"none",color:i(I.id)?"#d13296":"currentColor"})})]}),!((K=I.variants[0])!=null&&K.available)&&c.jsx(Nz,{children:e==="fr"?"Rupture de stock":"Out of stock"})]}),c.jsxs(Dz,{children:[c.jsx(Mz,{children:I.productType}),c.jsx(Uz,{to:`/product/${I.id.split("/").pop()}`,children:c.jsx(Fz,{children:I.title})}),c.jsx(Vz,{children:Z(((G=(ie=I.variants[0])==null?void 0:ie.price)==null?void 0:G.toString())||"0")})]})]},I.id)})}),f.length===0&&c.jsxs(Bz,{children:[c.jsx(qz,{children:"😔"}),c.jsx(Hz,{children:e==="fr"?"Aucun produit trouvé":"No products found"}),c.jsx(Wz,{children:e==="fr"?"Essayez de modifier vos filtres ou votre recherche":"Try adjusting your filters or search terms"})]})]}),c.jsx(vk,{isOpen:u,onClose:l,cartItems:[]})]})},Xz=()=>{var R;const{productId:e}=S2(),t=Ac(),{language:r}=Pe(),{addToCart:n}=ni(),{showNotification:i}=Vt(),{addFavorite:s,removeFavorite:o,isFavorite:a}=Xo(),[l,u]=_.useState(null),[d,h]=_.useState(!0),[f,y]=_.useState(null),[m,x]=_.useState({}),[b,v]=_.useState(1),[g,w]=_.useState(0);_.useEffect(()=>{(async()=>{if(e)try{h(!0);const L=await Pr.getProductById(e);if(u(L),L.variants.length>0){y(L.variants[0]);const W={};L.options.forEach(re=>{re.values.length>0&&(W[re.name]=re.values[0])}),x(W)}}catch(L){console.error("Erreur lors du chargement du produit:",L),i({type:"error",title:r==="fr"?"Erreur":"Error",message:r==="fr"?"Impossible de charger le produit":"Unable to load product"})}finally{h(!1)}})()},[e,r,i]),_.useEffect(()=>{if(!l)return;const P=l.variants.find(L=>L.options.every(W=>m[W.name]===W.value));P&&y(P)},[m,l]);const k=(P,L)=>{x(W=>({...W,[P]:L}))},C=()=>{if(!l||!f)return;const P={id:l.id.toString().split("/").pop()||l.id.toString(),title:l.title,price:f.price,images:l.images.map(L=>L.src),variants:[{id:f.id,title:f.title,price:f.price,compareAtPrice:f.compareAtPrice||void 0,available:f.available,options:f.options}],description:l.description||"",category:l.productType||"Général",tags:l.tags||[],available:f.available,featured:!1,rating:4.5,reviewCount:Math.floor(Math.random()*100)+10,likes:0,isLiked:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};n(P,b,f.id),i({type:"success",title:r==="fr"?"Ajouté au panier":"Added to cart",message:r==="fr"?`${l.title} a été ajouté au panier`:`${l.title} has been added to cart`})},S=()=>{l&&w(P=>P===l.images.length-1?0:P+1)},E=()=>{l&&w(P=>P===0?l.images.length-1:P-1)};if(d)return c.jsx(md,{children:c.jsx(je,{children:c.jsx(ss,{size:"large",text:r==="fr"?"Chargement du produit...":"Loading product..."})})});if(!l)return c.jsx(md,{children:c.jsx(je,{children:c.jsxs(AN,{children:[c.jsx(RN,{children:"😔"}),c.jsx(IN,{children:r==="fr"?"Produit non trouvé":"Product not found"}),c.jsx(ON,{children:r==="fr"?"Le produit que vous recherchez n'existe pas ou a été supprimé.":"The product you are looking for does not exist or has been removed."})]})})});const j=((R=l.images[g])==null?void 0:R.src)||"";return c.jsx(md,{children:c.jsxs(je,{children:[c.jsxs(Zz,{onClick:()=>t(-1),children:[c.jsx(dS,{size:20}),r==="fr"?"Retour":"Back"]}),c.jsxs(eN,{children:[c.jsxs(tN,{children:[c.jsxs(yk,{children:[c.jsx(rN,{src:j,alt:l.title}),c.jsx(nN,{children:c.jsx(iN,{onClick:async()=>{var W;const P=l.id.toString(),L=f==null?void 0:f.id;a(P,L)?await o(P,L):await s({id:P,variantId:L,title:l.title,variantTitle:f==null?void 0:f.title,image:(W=l.images[0])==null?void 0:W.src,price:f==null?void 0:f.price.toString()})},children:c.jsx(or,{size:24,fill:a(l.id.toString(),f==null?void 0:f.id)?"#d13296":"none"})})}),l.images.length>1&&c.jsxs(c.Fragment,{children:[c.jsx(x0,{onClick:E,$position:"left",children:c.jsx(mR,{size:24})}),c.jsx(x0,{onClick:S,$position:"right",children:c.jsx(vR,{size:24})}),c.jsx(sN,{children:l.images.map((P,L)=>c.jsx(oN,{$isActive:L===g,onClick:()=>w(L)},L))})]})]}),l.images.length>1&&c.jsx(aN,{children:l.images.map((P,L)=>c.jsx(lN,{src:P.src,alt:`${l.title} - Image ${L+1}`,$isActive:L===g,onClick:()=>w(L)},L))})]}),c.jsxs(cN,{children:[c.jsxs(uN,{children:[c.jsx(dN,{children:l.productType||"Général"}),c.jsx(hN,{children:l.title}),c.jsxs(fN,{children:[Array.from({length:5}).map((P,L)=>c.jsx(Ko,{size:18,fill:L<4?"#FFD700":"none",stroke:"#FFD700"},L)),c.jsxs(pN,{children:["(",Math.floor(Math.random()*100)+10," avis)"]})]})]}),c.jsx(gN,{children:l.description?c.jsx("div",{dangerouslySetInnerHTML:{__html:l.description}}):r==="fr"?"Aucune description disponible pour ce produit.":"No description available for this product."}),l.options.map(P=>c.jsxs(mN,{children:[c.jsx(vN,{children:P.name}),c.jsx(yN,{children:P.values.map(L=>c.jsx(wN,{$isSelected:m[P.name]===L,onClick:()=>k(P.name,L),children:L},L))})]},P.id)),c.jsx(xN,{children:f&&c.jsxs(c.Fragment,{children:[c.jsxs(bN,{children:[c.jsxs(SN,{children:["€",f.price.toFixed(2)]}),f.compareAtPrice&&c.jsxs(kN,{children:["€",f.compareAtPrice.toFixed(2)]})]}),c.jsxs(_N,{children:[c.jsx(EN,{children:r==="fr"?"Quantité":"Quantity"}),c.jsxs(CN,{children:[c.jsx(b0,{onClick:()=>v(P=>Math.max(1,P-1)),disabled:b<=1,children:"-"}),c.jsx(jN,{type:"number",value:b,onChange:P=>v(Math.max(1,parseInt(P.target.value)||1)),min:"1"}),c.jsx(b0,{onClick:()=>v(P=>P+1),children:"+"})]})]})]})}),c.jsxs(TN,{onClick:C,disabled:!(f!=null&&f.available),children:[c.jsx(Go,{size:20}),f!=null&&f.available?r==="fr"?"Ajouter au panier":"Add to cart":r==="fr"?"Rupture de stock":"Out of stock"]}),c.jsxs(PN,{children:[c.jsxs(vd,{children:[c.jsx(Bh,{size:20}),c.jsx(yd,{children:r==="fr"?"Livraison gratuite":"Free shipping"})]}),c.jsxs(vd,{children:[c.jsx(DR,{size:20}),c.jsx(yd,{children:r==="fr"?"Livraison rapide":"Fast delivery"})]}),c.jsxs(vd,{children:[c.jsx(LR,{size:20}),c.jsx(yd,{children:r==="fr"?"Garantie 30 jours":"30-day warranty"})]})]})]})]})]})})},md=p.div`
  padding: var(--spacing-8) 0;
  background: var(--gray-50);
  min-height: 100vh;
`,Zz=p.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: none;
  border: none;
  color: var(--gray-600);
  font-size: var(--font-size-base);
  cursor: pointer;
  margin-bottom: var(--spacing-6);
  transition: color var(--transition-fast);
  
  &:hover {
    color: #d13296;
  }
`,eN=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`,tN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,yk=p.div`
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--white);
  box-shadow: var(--shadow-sm);
`,rN=p.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`,nN=p.div`
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
  opacity: 0;
  transition: opacity var(--transition-normal);

  ${yk}:hover & {
    opacity: 1;
  }
`,iN=p.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);

  &:hover {
    background: var(--white);
    transform: scale(1.1);
    color: #d13296;
  }
`,x0=p.button`
  position: absolute;
  top: 50%;
  ${e=>e.$position}: var(--spacing-4);
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  color: var(--gray-700);

  &:hover {
    background: var(--white);
    transform: translateY(-50%) scale(1.1);
    color: #d13296;
  }
`,sN=p.div`
  position: absolute;
  bottom: var(--spacing-4);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-2);
`,oN=p.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${e=>e.$isActive?"#d13296":"rgba(255, 255, 255, 0.6)"};
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background: ${e=>e.$isActive?"#d13296":"rgba(255, 255, 255, 0.8)"};
  }
`,aN=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: var(--spacing-2);
`,lN=p.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  cursor: pointer;
  border: 2px solid ${e=>e.$isActive?"#d13296":"transparent"};
  transition: all var(--transition-fast);

  &:hover {
    border-color: #d13296;
  }
`,cN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`,uN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`,dN=p.div`
  font-size: var(--font-size-sm);
  color: #d13296;
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,hN=p.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  line-height: 1.2;
`,fN=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`,pN=p.span`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
`,gN=p.p`
  font-size: var(--font-size-base);
  color: var(--gray-600);
  line-height: 1.6;
`,mN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`,vN=p.label`
  font-weight: var(--font-semibold);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`,yN=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
`,wN=p.button`
  padding: var(--spacing-2) var(--spacing-4);
  border: 2px solid ${e=>e.$isSelected?"#d13296":"var(--gray-200)"};
  background: ${e=>e.$isSelected?"#d13296":"transparent"};
  color: ${e=>e.$isSelected?"white":"var(--gray-700)"};
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    border-color: #d13296;
    background: ${e=>e.$isSelected?"#d13296":"rgba(209, 50, 150, 0.1)"};
  }
`,xN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,bN=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
`,SN=p.span`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: #d13296;
`,kN=p.span`
  font-size: var(--font-size-xl);
  color: var(--gray-400);
  text-decoration: line-through;
`,_N=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`,EN=p.label`
  font-weight: var(--font-medium);
  color: var(--gray-700);
  font-size: var(--font-size-sm);
`,CN=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  max-width: 150px;
`,b0=p.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--gray-200);
  background: var(--white);
  color: var(--gray-700);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover:not(:disabled) {
    border-color: #d13296;
    color: #d13296;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,jN=p.input`
  flex: 1;
  height: 40px;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  text-align: center;
  font-size: var(--font-size-base);
  font-weight: var(--font-medium);

  &:focus {
    outline: none;
    border-color: #d13296;
  }
`,TN=p.button`
  width: 100%;
  padding: var(--spacing-4);
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    transform: none;
  }
`,PN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  background: var(--gray-50);
  border-radius: var(--radius-lg);
`,vd=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--gray-600);
`,yd=p.span`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
`,AN=p.div`
  text-align: center;
  padding: var(--spacing-12);
`,RN=p.div`
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
`,IN=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
`,ON=p.p`
  color: var(--gray-600);
  max-width: 400px;
  margin: 0 auto;
`,S0=p.div`
  min-height: 100vh;
  background: var(--gray-50);
`,k0=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-12) var(--spacing-4);
`,_0=p.div`
  text-align: center;
  margin-bottom: var(--spacing-16);
  padding: var(--spacing-8) 0;
`,E0=p.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,$N=p.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`,LN=p.div`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`,zN=p(F.div)`
  display: flex;
  gap: var(--spacing-6);
  padding: var(--spacing-6);
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: #d13296;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,NN=p.div`
  width: 120px;
  height: 120px;
  background: url(${e=>e.$image}) center/cover;
  border-radius: var(--radius-xl);
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
`,DN=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,MN=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`,UN=p.div`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  margin-bottom: var(--spacing-2);
  font-style: italic;
`,FN=p.div`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: #d13296;
`,VN=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`,BN=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  background: var(--gray-100);
  border-radius: var(--radius-md);
  padding: var(--spacing-1);
`,C0=p.button`
  background: none;
  border: none;
  color: var(--gray-600);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--gray-200);
    color: var(--gray-900);
  }
`,qN=p.span`
  font-weight: var(--font-medium);
  min-width: 30px;
  text-align: center;
`,HN=p.button`
  background: none;
  border: none;
  color: var(--accent-red);
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background: var(--accent-red);
    color: var(--white);
  }
`,WN=p.div`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  height: fit-content;
  position: sticky;
  top: 100px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`,GN=p.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-8);
`,za=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-6);
    border-top: 2px solid var(--gray-200);
    font-weight: var(--font-bold);
    font-size: var(--font-size-xl);
  }
`,Na=p.span`
  color: var(--gray-700);
  font-weight: var(--font-medium);
`,Da=p.span`
  color: var(--gray-900);
  font-weight: var(--font-semibold);
`,KN=p.button`
  width: 100%;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  border: none;
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-xl);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-6);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,YN=p.div`
  text-align: center;
  padding: var(--spacing-20);
  color: var(--gray-600);
  background: var(--white);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`,JN=p.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-8);
  color: var(--gray-400);
  box-shadow: var(--shadow-lg);
`,QN=p(vt)`
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  color: var(--white);
  text-decoration: none;
  padding: var(--spacing-6) var(--spacing-10);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-3);
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`,XN=()=>{const{language:e}=Pe(),{cart:t,removeFromCart:r,updateQuantity:n,getCheckoutUrl:i}=ni(),{showNotification:s}=Vt();Ac();const[o,a]=_.useState(t),{triggerUpsell:l,closeUpsell:u,showUpsellModal:d}=mk();_.useEffect(()=>{const m=x=>{console.log("🛒 CartPage: Panier mis à jour:",x.detail.cart),a(x.detail.cart)};return window.addEventListener("cartStateChanged",m),()=>window.removeEventListener("cartStateChanged",m)},[]),_.useEffect(()=>{a(t)},[t]);const h=(m,x)=>{x<=0?(r(m),s({type:"info",title:e==="fr"?"Produit retiré":"Product removed",message:e==="fr"?"Produit retiré du panier":"Product removed from cart"})):n(m,x)},f=m=>{r(m),s({type:"info",title:e==="fr"?"Produit retiré":"Product removed",message:e==="fr"?"Produit retiré du panier":"Product removed from cart"})},y=async()=>{try{s({type:"info",title:e==="fr"?"Préparation du paiement":"Preparing checkout",message:e==="fr"?"Redirection vers la page sécurisée...":"Redirecting to secure checkout..."});const m=await i();window.location.href=m}catch(m){console.error("Erreur lors du checkout:",m),s({type:"error",title:e==="fr"?"Erreur":"Error",message:e==="fr"?"Impossible d'accéder à la page de paiement. Veuillez réessayer.":"Unable to reach checkout. Please try again."})}};return o.items.length===0?c.jsx(S0,{children:c.jsxs(k0,{children:[c.jsx(_0,{children:c.jsx(E0,{children:e==="fr"?"Votre Panier":"Your Cart"})}),c.jsxs(YN,{children:[c.jsx(JN,{children:c.jsx(rc,{size:40})}),c.jsx("h3",{children:e==="fr"?"Votre panier est vide":"Your cart is empty"}),c.jsx("p",{children:e==="fr"?"Ajoutez quelques produits pour commencer vos achats":"Add some products to start shopping"}),c.jsxs(QN,{to:"/products",children:[e==="fr"?"Continuer les achats":"Continue shopping",c.jsx(dn,{size:20})]})]})]})}):c.jsxs(S0,{children:[c.jsxs(k0,{children:[c.jsx(_0,{children:c.jsx(E0,{children:e==="fr"?"Votre Panier":"Your Cart"})}),c.jsxs($N,{children:[c.jsx(LN,{children:o.items.map((m,x)=>c.jsxs(zN,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:x*.1},children:[c.jsx(NN,{$image:m.image}),c.jsxs(DN,{children:[c.jsxs("div",{children:[c.jsx(MN,{children:m.title}),m.options&&m.options.length>0&&c.jsx(UN,{children:m.options.map(b=>c.jsxs("span",{children:[b.name,": ",b.value]},b.name)).reduce((b,v,g)=>g===0?[v]:[...b," • ",v],[])}),c.jsxs(FN,{children:["€",m.price]})]}),c.jsxs(VN,{children:[c.jsxs(BN,{children:[c.jsx(C0,{onClick:()=>h(m.id,m.quantity-1),children:c.jsx(AR,{size:16})}),c.jsx(qN,{children:m.quantity}),c.jsx(C0,{onClick:()=>h(m.id,m.quantity+1),children:c.jsx(qh,{size:16})})]}),c.jsx(HN,{onClick:()=>f(m.id),children:c.jsx(jo,{size:20})})]})]})]},m.id))}),c.jsxs(WN,{children:[c.jsx(GN,{children:e==="fr"?"Récapitulatif":"Summary"}),c.jsxs(za,{children:[c.jsx(Na,{children:e==="fr"?"Sous-total TTC":"Subtotal incl. VAT"}),c.jsxs(Da,{children:["€",o.subtotal.toFixed(2)]})]}),c.jsxs(za,{children:[c.jsx(Na,{children:e==="fr"?"Dont TVA (20%)":"Incl. VAT (20%)"}),c.jsxs(Da,{children:["€",o.tax.toFixed(2)]})]}),c.jsxs(za,{children:[c.jsx(Na,{children:e==="fr"?"Livraison":"Shipping"}),c.jsx(Da,{children:o.shipping===0?e==="fr"?"Gratuit":"Free":`€${o.shipping.toFixed(2)}`})]}),c.jsxs(za,{children:[c.jsx(Na,{children:"Total"}),c.jsxs(Da,{children:["€",o.total.toFixed(2)]})]}),c.jsxs(KN,{onClick:y,children:[e==="fr"?"Passer la commande":"Checkout",c.jsx(dn,{size:20})]})]})]})]}),c.jsx(vk,{isOpen:d,onClose:u,cartItems:o.items})]})},j0=p.div`
  min-height: 100vh;
  background: var(--bg-primary);
  padding: var(--spacing-16) 0 var(--spacing-8) 0;
`,T0=p.div`
  text-align: center;
  margin-bottom: var(--spacing-12);
`,P0=p(F.h1)`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
`,A0=p(F.p)`
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`,ZN=p.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`,eD=p.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  height: fit-content;
  border: 1px solid var(--border-primary);
`,tD=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`,rD=p.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`,js=p.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  background: ${e=>e.$isActive?"var(--accent-primary)":"transparent"};
  color: ${e=>e.$isActive?"var(--white)":"var(--text-secondary)"};
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-weight: var(--font-medium);
  
  &:hover {
    background: ${e=>e.$isActive?"var(--accent-primary)":"var(--bg-tertiary)"};
    color: ${e=>e.$isActive?"var(--white)":"var(--text-primary)"};
  }
`,nD=p.div`
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  border: 1px solid var(--border-primary);
`,Ma=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-6);
  padding-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--border-primary);
`,Ua=p.h2`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
`;p.form`
  max-width: 400px;
  margin: 0 auto;
  padding: var(--spacing-8);
`;p.div`
  margin-bottom: var(--spacing-4);
`;p.label`
  display: block;
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
`;p.input`
  width: 100%;
  padding: var(--spacing-3);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;p.div`
  position: relative;
`;p.button`
  position: absolute;
  right: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: var(--spacing-1);
  
  &:hover {
    color: var(--text-primary);
  }
`;p.button`
  width: 100%;
  background: var(--primary-gradient);
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;const iD=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
`,fi=p.div`
  background: var(--bg-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-primary);
`,pi=p.h4`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  color: var(--text-muted);
  margin-bottom: var(--spacing-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gi=p.p`
  font-size: var(--font-size-base);
  color: var(--text-primary);
  font-weight: var(--font-medium);
`,sD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,oD=p.div`
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  transition: all var(--transition-fast);
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
`,aD=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-3);
`,lD=p.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
`,cD=p.span`
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  background: ${e=>{switch(e.$status){case"fulfilled":return"var(--accent-success)";case"pending":return"var(--accent-warning)";case"cancelled":return"var(--accent-error)";default:return"var(--accent-info)"}}};
  color: var(--white);
`,uD=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
`,wd=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`,dD=p.div`
  border-top: 1px solid var(--border-primary);
  padding-top: var(--spacing-3);
`;p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-2) 0;
`;p.div`
  width: 50px;
  height: 50px;
  background: url(${e=>e.$image}) center/cover;
  border-radius: var(--radius-md);
  flex-shrink: 0;
`;p.div`
  flex: 1;
`;p.h5`
  font-size: var(--font-size-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--spacing-1);
`;p.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
`;const xd=p.div`
  text-align: center;
  padding: var(--spacing-12);
  color: var(--text-secondary);
`,bd=p.div`
  font-size: var(--font-size-6xl);
  margin-bottom: var(--spacing-4);
  opacity: 0.5;
`,Sd=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-2);
`,kd=p.p`
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  max-width: 400px;
  margin: 0 auto;
`,hD=()=>{const{language:e}=Pe(),{showNotification:t}=Vt(),[r,n]=_.useState("profile"),[i,s]=_.useState(!1),[o,a]=_.useState(null),[l,u]=_.useState([]);_.useEffect(()=>{(async()=>{const b=localStorage.getItem("bestfkersintown_customer");if(b)try{const v=JSON.parse(b);a(v),s(!0),await d(Number(v.id))}catch(v){console.error("Erreur lors du chargement du client:",v),localStorage.removeItem("bestfkersintown_customer")}})()},[]);const d=async x=>{try{const b=await Yp.getCustomerOrders(x);u(b)}catch(b){console.error("Erreur lors du chargement des commandes:",b)}},h=()=>{a(null),s(!1),u([]),localStorage.removeItem("user"),localStorage.removeItem("bestfkersintown_customer"),t({type:"info",title:e==="fr"?"Déconnexion":"Logout",message:e==="fr"?"Vous avez été déconnecté avec succès":"You have been logged out successfully"})},f=x=>({fr:{pending:"En attente",fulfilled:"Livré",cancelled:"Annulé",processing:"En cours"},en:{pending:"Pending",fulfilled:"Delivered",cancelled:"Cancelled",processing:"Processing"}})[e][x]||x,y=x=>new Date(x).toLocaleDateString(e==="fr"?"fr-FR":"en-US",{year:"numeric",month:"long",day:"numeric"}),m=x=>new Intl.NumberFormat(e==="fr"?"fr-FR":"en-US",{style:"currency",currency:"EUR"}).format(parseFloat(x));return i?c.jsx(j0,{children:c.jsxs(je,{children:[c.jsxs(T0,{children:[c.jsx(P0,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:e==="fr"?"Mon Compte":"My Account"}),c.jsx(A0,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:e==="fr"?`Bienvenue ${o==null?void 0:o.first_name} ! Gérez vos informations, commandes et préférences.`:`Welcome ${o==null?void 0:o.first_name}! Manage your information, orders and preferences.`})]}),c.jsxs(ZN,{children:[c.jsxs(eD,{children:[c.jsxs(tD,{children:[c.jsx(nc,{size:20}),"Navigation"]}),c.jsxs(rD,{children:[c.jsxs(js,{$isActive:r==="profile",onClick:()=>n("profile"),children:[c.jsx(nc,{size:18}),e==="fr"?"Profil":"Profile"]}),c.jsxs(js,{$isActive:r==="orders",onClick:()=>n("orders"),children:[c.jsx(Bh,{size:18}),e==="fr"?"Commandes":"Orders",l.length>0&&c.jsx("span",{style:{background:"var(--accent-primary)",color:"white",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",marginLeft:"auto"},children:l.length})]}),c.jsxs(js,{$isActive:r==="favorites",onClick:()=>n("favorites"),children:[c.jsx(or,{size:18}),e==="fr"?"Favoris":"Favorites"]}),c.jsxs(js,{$isActive:r==="settings",onClick:()=>n("settings"),children:[c.jsx(Vp,{size:18}),e==="fr"?"Paramètres":"Settings"]}),c.jsxs(js,{$isActive:!1,onClick:h,children:[c.jsx(gS,{size:18}),e==="fr"?"Se déconnecter":"Sign out"]})]})]}),c.jsxs(nD,{children:[r==="profile"&&c.jsxs("div",{children:[c.jsx(Ma,{children:c.jsx(Ua,{children:e==="fr"?"Informations du profil":"Profile Information"})}),c.jsxs(iD,{children:[c.jsxs(fi,{children:[c.jsx(pi,{children:e==="fr"?"Nom complet":"Full Name"}),c.jsxs(gi,{children:[o==null?void 0:o.first_name," ",o==null?void 0:o.last_name]})]}),c.jsxs(fi,{children:[c.jsx(pi,{children:"Email"}),c.jsx(gi,{children:o==null?void 0:o.email})]}),c.jsxs(fi,{children:[c.jsx(pi,{children:e==="fr"?"Téléphone":"Phone"}),c.jsx(gi,{children:o!=null&&o.phone||e==="fr"?"Non renseigné":"Not provided"})]}),c.jsxs(fi,{children:[c.jsx(pi,{children:e==="fr"?"Membre depuis":"Member since"}),c.jsx(gi,{children:y((o==null?void 0:o.date_created)||"")})]}),c.jsxs(fi,{children:[c.jsx(pi,{children:e==="fr"?"Commandes":"Orders"}),c.jsx(gi,{children:"0"})]}),c.jsxs(fi,{children:[c.jsx(pi,{children:"Note"}),c.jsx(gi,{children:(o==null?void 0:o.notes)||"-"})]})]})]}),r==="orders"&&c.jsxs("div",{children:[c.jsx(Ma,{children:c.jsx(Ua,{children:e==="fr"?"Mes Commandes":"My Orders"})}),l.length===0?c.jsxs(xd,{children:[c.jsx(bd,{children:"📦"}),c.jsx(Sd,{children:e==="fr"?"Aucune commande":"No orders yet"}),c.jsx(kd,{children:e==="fr"?"Vous n'avez pas encore passé de commande. Découvrez nos produits !":"You haven't placed any orders yet. Discover our products!"})]}):c.jsx(sD,{children:l.map(x=>c.jsxs(oD,{children:[c.jsxs(aD,{children:[c.jsxs(lD,{children:["#",x.id]}),c.jsx(cD,{$status:x.status,children:f(x.status)})]}),c.jsxs(uD,{children:[c.jsxs(wd,{children:[c.jsx(Co,{size:16}),y(x.date_created)]}),c.jsxs(wd,{children:[c.jsx(bR,{size:16}),m(x.total_inc_tax)]}),c.jsxs(wd,{children:[c.jsx(Bh,{size:16}),x.items_total," ",e==="fr"?"articles":"items"]})]}),c.jsx(dD,{children:c.jsx("p",{style:{fontSize:"12px",color:"var(--text-secondary)"},children:e==="fr"?"Détails des articles disponibles dans la confirmation par email.":"Items details available in your email confirmation."})})]},x.id))})]}),r==="favorites"&&c.jsxs("div",{children:[c.jsx(Ma,{children:c.jsx(Ua,{children:e==="fr"?"Mes Favoris":"My Favorites"})}),c.jsxs(xd,{children:[c.jsx(bd,{children:"❤️"}),c.jsx(Sd,{children:e==="fr"?"Aucun favori":"No favorites yet"}),c.jsx(kd,{children:e==="fr"?"Vous n'avez pas encore ajouté de produits à vos favoris.":"You haven't added any products to your favorites yet."})]})]}),r==="settings"&&c.jsxs("div",{children:[c.jsx(Ma,{children:c.jsx(Ua,{children:e==="fr"?"Paramètres":"Settings"})}),c.jsxs(xd,{children:[c.jsx(bd,{children:"⚙️"}),c.jsx(Sd,{children:e==="fr"?"Paramètres en cours":"Settings coming soon"}),c.jsx(kd,{children:e==="fr"?"Les paramètres de votre compte seront bientôt disponibles.":"Your account settings will be available soon."})]})]})]})]})]})}):c.jsx(j0,{children:c.jsxs(je,{children:[c.jsxs(T0,{children:[c.jsx(P0,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:e==="fr"?"Mon Compte":"My Account"}),c.jsx(A0,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:e==="fr"?"Connectez-vous à votre compte pour accéder à vos commandes, favoris et paramètres":"Sign in to your account to access your orders, favorites and settings"})]}),c.jsx("div",{style:{textAlign:"center",padding:"var(--spacing-8)"},children:c.jsx("p",{children:e==="fr"?"L'authentification est gérée via BigCommerce.":"Authentication is managed via BigCommerce."})})]})})},fD=()=>{const{language:e}=Pe();return c.jsxs(mD,{children:[c.jsx(vD,{children:c.jsx(je,{children:c.jsxs(yD,{children:[c.jsx(wD,{children:e==="fr"?"Qui Sommes-Nous ?":"Who Are We?"}),c.jsx(xD,{children:e==="fr"?"Une marque de vêtements inclusive qui célèbre la diversité et l'authenticité":"An inclusive clothing brand that celebrates diversity and authenticity"})]})})}),c.jsxs(je,{children:[c.jsx(bD,{children:c.jsxs(SD,{children:[c.jsxs(kD,{children:[c.jsx(_D,{children:e==="fr"?"Notre Histoire":"Our Story"}),c.jsx(R0,{children:e==="fr"?"Fondée en 2025, BestF.kersinTown est née d'une vision simple : créer des vêtements qui parlent à tous, sans exception. Notre marque est le fruit d'une passion pour l'inclusivité et d'une conviction profonde que la mode doit être accessible à chacun, peu importe son identité, son style ou son corps.":"Founded in 2025, BestF.kersinTown was born from a simple vision: to create clothing that speaks to everyone, without exception. Our brand is the result of a passion for inclusivity and a deep conviction that fashion should be accessible to everyone, regardless of their identity, style, or body."}),c.jsx(R0,{children:e==="fr"?"Nous croyons que chaque personne mérite de se sentir belle, confiante et authentique dans ses vêtements. C'est pourquoi nous créons des pièces qui célèbrent la diversité et encouragent l'expression de soi.":"We believe that every person deserves to feel beautiful, confident, and authentic in their clothes. That's why we create pieces that celebrate diversity and encourage self-expression."})]}),c.jsx(ED,{children:c.jsxs(_d,{children:[c.jsx(vS,{size:60}),c.jsx("span",{children:e==="fr"?"Notre Histoire":"Our Story"})]})})]})}),c.jsx(CD,{children:c.jsxs(jD,{children:[c.jsx(AD,{children:c.jsxs(_d,{children:[c.jsx(or,{size:60}),c.jsx("span",{children:e==="fr"?"Notre Mission":"Our Mission"})]})}),c.jsxs(TD,{children:[c.jsx(PD,{children:e==="fr"?"Notre Mission":"Our Mission"}),c.jsx(I0,{children:e==="fr"?"Notre mission est de révolutionner l'industrie de la mode en créant des vêtements véritablement inclusifs. Nous nous engageons à représenter et célébrer toutes les identités, tous les corps et tous les styles.":"Our mission is to revolutionize the fashion industry by creating truly inclusive clothing. We are committed to representing and celebrating all identities, all bodies, and all styles."}),c.jsx(I0,{children:e==="fr"?"Nous travaillons avec des créateurs, des modèles et des communautés diverses pour nous assurer que nos collections reflètent la richesse et la beauté de notre monde.":"We work with diverse creators, models, and communities to ensure our collections reflect the richness and beauty of our world."})]})]})}),c.jsxs(RD,{children:[c.jsx(ID,{children:e==="fr"?"Nos Valeurs":"Our Values"}),c.jsx(OD,{children:pD.map((t,r)=>c.jsxs($D,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:r*.1},viewport:{once:!0},children:[c.jsx(LD,{children:t.icon}),c.jsx(zD,{children:t.title[e]}),c.jsx(ND,{children:t.description[e]})]},t.title[e]))})]}),c.jsx(DD,{children:c.jsx(MD,{children:gD.map((t,r)=>c.jsxs(UD,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:r*.1},viewport:{once:!0},children:[c.jsx(FD,{children:t.icon}),c.jsx(VD,{children:t.number}),c.jsx(BD,{children:t.label[e]})]},t.label[e]))})}),c.jsx(qD,{children:c.jsxs(HD,{children:[c.jsx(WD,{children:e==="fr"?"Rejoignez Notre Communauté":"Join Our Community"}),c.jsx(GD,{children:e==="fr"?"Nous croyons au pouvoir de la communauté. Rejoignez des milliers de personnes qui partagent nos valeurs d'inclusivité, d'authenticité et d'expression de soi.":"We believe in the power of community. Join thousands of people who share our values of inclusivity, authenticity, and self-expression."}),c.jsx(KD,{children:c.jsxs(_d,{children:[c.jsx(Hc,{size:60}),c.jsx("span",{children:e==="fr"?"Notre Communauté":"Our Community"})]})})]})})]})]})},pD=[{title:{fr:"Inclusivité",en:"Inclusivity"},description:{fr:"Nous créons pour tous, sans exception. Chaque personne mérite de se sentir représentée.",en:"We create for everyone, without exception. Every person deserves to feel represented."},icon:c.jsx(IR,{size:32})},{title:{fr:"Diversité",en:"Diversity"},description:{fr:"Nous célébrons la richesse de nos différences et encourageons l'expression de chaque identité.",en:"We celebrate the richness of our differences and encourage the expression of every identity."},icon:c.jsx(Mp,{size:32})},{title:{fr:"Authenticité",en:"Authenticity"},description:{fr:"Nous encourageons chacun à être fidèle à soi-même et à exprimer sa vraie nature.",en:"We encourage everyone to be true to themselves and express their true nature."},icon:c.jsx(Ko,{size:32})},{title:{fr:"Communauté",en:"Community"},description:{fr:"Nous construisons ensemble un espace sûr où chacun peut s'épanouir et se connecter.",en:"We build together a safe space where everyone can thrive and connect."},icon:c.jsx(Hc,{size:32})}],gD=[{number:"100%",label:{fr:"Inclusif",en:"Inclusive"},icon:c.jsx(or,{size:24})},{number:"2025",label:{fr:"Année de création",en:"Founded"},icon:c.jsx(hS,{size:24})},{number:"∞",label:{fr:"Possibilités",en:"Possibilities"},icon:c.jsx(vS,{size:24})},{number:"❤️",label:{fr:"Amour",en:"Love"},icon:c.jsx(or,{size:24})}],mD=p.div`
  min-height: 100vh;
  background: var(--white);
`,vD=p.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-20) 0 var(--spacing-16) 0;
  text-align: center;
`,yD=p.div`
  max-width: 800px;
  margin: 0 auto;
`,wD=p.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`,xD=p.p`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  line-height: 1.6;
`,bD=p.section`
  padding: var(--spacing-16) 0;
`,SD=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`,kD=p.div``,_D=p.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`,R0=p.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);
`,ED=p.div``,CD=p.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`,jD=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
`,TD=p.div``,PD=p.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`,I0=p.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);
`,AD=p.div``,RD=p.section`
  padding: var(--spacing-16) 0;
`,ID=p.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--spacing-12);
`,OD=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$D=p(F.div)`
  background: var(--white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-100);
  text-align: center;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: #d13296;
  }
`,LD=p.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  color: var(--white);
  box-shadow: var(--shadow-md);
`,zD=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
`,ND=p.p`
  font-size: var(--font-size-base);
  color: var(--gray-600);
  line-height: 1.6;
`,DD=p.section`
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
`,MD=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-8);
`,UD=p(F.div)`
  text-align: center;
  padding: var(--spacing-6);
`,FD=p.div`
  color: #d13296;
  margin-bottom: var(--spacing-4);
`,VD=p.div`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-2);
`,BD=p.div`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  font-weight: var(--font-medium);
`,qD=p.section`
  padding: var(--spacing-16) 0;
`,HD=p.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`,WD=p.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`,GD=p.p`
  font-size: var(--font-size-lg);
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: var(--spacing-8);
`,KD=p.div`
  max-width: 400px;
  margin: 0 auto;
`,_d=p.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  gap: var(--spacing-4);
  box-shadow: var(--shadow-lg);

  span {
    opacity: 0.9;
  }
`,YD=p.div`
  min-height: 100vh;
  background: var(--gray-50);
`,JD=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-12) var(--spacing-4);
`,QD=p.div`
  text-align: center;
  margin-bottom: var(--spacing-16);
  padding: var(--spacing-8) 0;
`,XD=p.h1`
  font-size: var(--font-size-5xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ZD=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-8);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,eM=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-10);
  text-align: center;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: #d13296;
  }
`,tM=p.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-8);
  color: var(--white);
  box-shadow: var(--shadow-lg);
`,rM=p.h3`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
`,nM=p.p`
  color: var(--gray-700);
  line-height: 1.7;
  font-size: var(--font-size-lg);
`,iM=()=>{const{language:e}=Pe(),t=[{icon:c.jsx(pS,{size:32}),title:e==="fr"?"Matériaux Durables":"Sustainable Materials",description:e==="fr"?"Nous utilisons uniquement des matériaux durables et respectueux de l'environnement.":"We use only sustainable and environmentally friendly materials."},{icon:c.jsx(OR,{size:32}),title:e==="fr"?"Recyclage":"Recycling",description:e==="fr"?"95% de nos matériaux sont recyclés et nous encourageons le recyclage de nos produits.":"95% of our materials are recycled and we encourage recycling of our products."},{icon:c.jsx(Hc,{size:32}),title:e==="fr"?"Production Éthique":"Ethical Production",description:e==="fr"?"Nous nous assurons que tous nos partenaires respectent les conditions de travail éthiques.":"We ensure that all our partners respect ethical working conditions."},{icon:c.jsx(Mp,{size:32}),title:e==="fr"?"Impact Environnemental":"Environmental Impact",description:e==="fr"?"Nous réduisons notre empreinte carbone et compensons nos émissions.":"We reduce our carbon footprint and offset our emissions."}];return c.jsx(YD,{children:c.jsxs(JD,{children:[c.jsx(QD,{children:c.jsx(XD,{children:e==="fr"?"Nos Engagements":"Our Commitments"})}),c.jsx(ZD,{children:t.map((r,n)=>c.jsxs(eM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:n*.2},children:[c.jsx(tM,{children:r.icon}),c.jsx(rM,{children:r.title}),c.jsx(nM,{children:r.description})]},n))})]})})},sM=p(F.div)`
  position: fixed;
  top: 100px;
  right: 20px;
  background: ${e=>{switch(e.$type){case"success":return"#10B981";case"error":return"#EF4444";case"warning":return"#F59E0B";case"info":return"#3B82F6";default:return"#10B981"}}};
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-weight: var(--font-semibold);
  max-width: 400px;
  min-width: 300px;
  
  @media (max-width: 768px) {
    right: 10px;
    left: 10px;
    max-width: none;
    min-width: auto;
  }
`,oM=p.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
`,aM=p.span`
  font-size: var(--font-size-sm);
`,lM=p.button`
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: var(--spacing-1);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,cM=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,uM=({type:e,message:t,show:r,onClose:n,duration:i=5e3})=>{ir.useEffect(()=>{if(r&&i>0){const o=setTimeout(()=>{n()},i);return()=>clearTimeout(o)}},[r,i,n]);const s=()=>{switch(e){case"success":return c.jsx(is,{size:20});case"error":return c.jsx(Eo,{size:20});case"warning":return c.jsx(Eo,{size:20});case"info":return c.jsx(Vh,{size:20});default:return c.jsx(is,{size:20})}};return c.jsx(bn,{children:r&&c.jsxs(sM,{$type:e,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{duration:.3,type:"spring",stiffness:300,damping:30},children:[c.jsxs(oM,{children:[c.jsx(cM,{children:s()}),c.jsx(aM,{children:t})]}),c.jsx(lM,{onClick:n,children:c.jsx(rr,{size:16})})]})})},dM=p.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  color: var(--white);
  margin-bottom: var(--spacing-8);
`,hM=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  text-align: center;
`,fM=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6);
`,Fa=p(F.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-3);
`,Va=p.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`,Ba=p.div`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  line-height: 1;
`,qa=p.div`
  font-size: var(--font-size-sm);
  opacity: 0.9;
  font-weight: var(--font-medium);
`,pM=p.div`
  width: 100%;
  margin-top: var(--spacing-4);
`,gM=p.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--spacing-2);
`,mM=p(F.div)`
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  width: ${e=>e.$percentage}%;
  border-radius: var(--radius-full);
`,vM=p.div`
  font-size: var(--font-size-xs);
  opacity: 0.8;
  text-align: center;
`,yM=({totalVotes:e,totalVoters:t,topVotedItem:r,averageVotesPerItem:n,language:i})=>c.jsxs(dM,{children:[c.jsx(hM,{children:i==="fr"?"Statistiques de Vote":"Voting Statistics"}),c.jsxs(fM,{children:[c.jsxs(Fa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[c.jsx(Va,{children:c.jsx(NR,{size:24})}),c.jsx(Ba,{children:e.toLocaleString()}),c.jsx(qa,{children:i==="fr"?"Votes Totaux":"Total Votes"})]}),c.jsxs(Fa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:[c.jsx(Va,{children:c.jsx(Hc,{size:24})}),c.jsx(Ba,{children:t.toLocaleString()}),c.jsx(qa,{children:i==="fr"?"Votants":"Voters"})]}),c.jsxs(Fa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[c.jsx(Va,{children:c.jsx(hS,{size:24})}),c.jsx(Ba,{children:n.toFixed(1)}),c.jsx(qa,{children:i==="fr"?"Moyenne par Item":"Average per Item"})]}),c.jsxs(Fa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[c.jsx(Va,{children:c.jsx(wR,{size:24})}),c.jsx(Ba,{children:r?`${r.percentage}%`:"0%"}),c.jsx(qa,{children:i==="fr"?"Plus Voté":"Most Voted"})]})]}),r&&c.jsxs(pM,{children:[c.jsxs(vM,{children:[i==="fr"?"Item le plus populaire":"Most Popular Item",": ",r.title]}),c.jsx(gM,{children:c.jsx(mM,{$percentage:r.percentage,initial:{width:0},animate:{width:r.percentage},transition:{duration:1,delay:.5}})})]})]}),O0=p.div`
  min-height: 100vh;
  background: var(--white);
`,$0=p.section`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  padding: var(--spacing-20) 0;
  text-align: center;
  color: var(--white);
`,wM=p(F.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
`,xM=p(F.p)`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,bM=p.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-12);
`,L0=p.button`
  background: ${e=>e.$isActive?"var(--white)":"rgba(255, 255, 255, 0.2)"};
  color: ${e=>e.$isActive?"#d13296":"var(--white)"};
  border: none;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background: ${e=>e.$isActive?"var(--white)":"rgba(255, 255, 255, 0.3)"};
    transform: translateY(-2px);
  }
`,SM=p.section`
  padding: var(--spacing-20) 0;
  background: var(--white);
`,kM=p.section`
  padding: var(--spacing-20) 0;
  background: var(--gray-50);
`,z0=p(F.h2)`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  text-align: center;
  margin-bottom: var(--spacing-12);
`,_M=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
  
  @media (max-width: 600px) {
    gap: var(--spacing-4);
  }
`,wk=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
    border-color: rgba(209, 50, 150, 0.2);
  }
`,EM=p.div`
  height: 200px;
  background: url(${e=>e.$image}) center/cover;
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-6);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(209, 50, 150, 0.8), rgba(255, 142, 83, 0.8));
    opacity: 0;
    transition: opacity var(--transition-fast);
  }
  
  ${wk}:hover &::before {
    opacity: 1;
  }
`,CM=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`,jM=p.p`
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
`,TM=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
`,PM=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;
  font-weight: var(--font-semibold);
`,AM=p.button`
  width: 100%;
  background: ${e=>e.$isVoted?"linear-gradient(135deg, #10B981 0%, #059669 100%)":"linear-gradient(135deg, #d13296 0%, #d13296 100%)"};
  color: var(--white);
  border: none;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  cursor: ${e=>e.$isLoading?"not-allowed":"pointer"};
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  position: relative;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${e=>e.$isVoted?"rgba(16, 185, 129, 0.3)":"rgba(209, 50, 150, 0.3)"};
  }
  
  &:disabled {
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
`,RM=p(is)`
  color: var(--accent-success);
`,IM=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-2);
`,OM=p.div`
  flex: 1;
  height: 4px;
  background: var(--gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$percentage}%;
    background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
    border-radius: var(--radius-full);
    transition: width var(--transition-normal);
  }
`,$M=p.div`
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  font-weight: var(--font-medium);
`,LM=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
`,zM=p(F.div)`
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(209, 50, 150, 0.15);
  }
`,NM=p.div`
  height: 250px;
  background: url(${e=>e.$image}) center/cover;
  position: relative;
`,DM=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(209, 50, 150, 0.9), rgba(255, 142, 83, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-bold);
`,MM=p.div`
  padding: var(--spacing-8);
`,UM=p.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`,FM=p.p`
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
`,VM=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: #d13296;
  font-weight: var(--font-semibold);
  margin-bottom: var(--spacing-4);
`,BM=()=>{const{language:e}=Pe(),[t,r]=_.useState("vote"),[n,i]=_.useState([]),[s,o]=_.useState([]),[a,l]=_.useState(!0),[u,d]=_.useState({votedItems:new Set,loadingItems:new Set,totalVotes:0}),[h,f]=_.useState(null),y=_.useCallback(S=>({id:S.id,title:e==="fr"?S.title:S.titleEn||S.title,description:e==="fr"?S.description:S.descriptionEn||S.description,image:S.image,votes:S.votes,category:S.category}),[e]),m=_.useCallback(S=>{const E=new Date(S.releaseDate),j=e==="fr"?E.toLocaleDateString("fr-FR",{month:"long",year:"numeric"}):E.toLocaleDateString("en-US",{month:"long",year:"numeric"});return{id:S.id,title:e==="fr"?S.title:S.titleEn||S.title,description:e==="fr"?S.description:S.descriptionEn||S.description,image:S.image,date:j}},[e]),x=_.useCallback(async()=>{try{l(!0);const[S,E,j]=await Promise.all([lt.getVoteItems(!0),lt.getComingItems(),lt.getUserVotedItemIds()]);i(S.map(y)),o(E.map(m));const R=S.reduce((P,L)=>P+L.votes,0);d(P=>({...P,votedItems:new Set(j),totalVotes:R}))}catch(S){console.error("Error loading vote data:",S)}finally{l(!1)}},[y,m]);_.useEffect(()=>{x()},[x]);const b=(S,E)=>{f({type:S,message:E,show:!0}),setTimeout(()=>f(null),3e3)},v=async S=>{if(!(u.votedItems.has(S)||u.loadingItems.has(S))){d(E=>({...E,loadingItems:new Set([...E.loadingItems,S])}));try{const E=await lt.vote(S);if(E.success)i(j=>j.map(R=>R.id===S?{...R,votes:E.newVoteCount}:R)),d(j=>({...j,votedItems:new Set([...j.votedItems,S]),loadingItems:new Set([...j.loadingItems].filter(R=>R!==S)),totalVotes:j.totalVotes+1})),b("success",e==="fr"?"Vote enregistré avec succès !":"Vote recorded successfully!");else throw new Error("Vote already recorded")}catch{d(j=>({...j,loadingItems:new Set([...j.loadingItems].filter(R=>R!==S))})),b("error",e==="fr"?"Erreur lors du vote. Réessayez.":"Error while voting. Please try again.")}}},g=S=>{var E;return((E=n.find(j=>j.id===S))==null?void 0:E.votes)||0},w=S=>{const E=g(S),j=u.totalVotes||n.reduce((R,P)=>R+P.votes,0);return j>0?Math.round(E/j*100):0},k=S=>u.votedItems.has(S),C=S=>u.loadingItems.has(S);return a?c.jsx(O0,{children:c.jsx($0,{children:c.jsx(je,{children:c.jsx(ss,{size:"large",color:"var(--white)"})})})}):c.jsxs(O0,{children:[c.jsx($0,{children:c.jsxs(je,{children:[c.jsx(wM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:e==="fr"?"Votre Voix Compte !":"Your Voice Matters!"}),c.jsx(xM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:e==="fr"?"Participez à la création de nos prochaines collections. Votre vote façonne l'avenir de BestF.kersinTown !":"Participate in creating our next collections. Your vote shapes the future of BestF.kersinTown!"}),c.jsxs(bM,{children:[c.jsxs(L0,{$isActive:t==="vote",onClick:()=>r("vote"),children:[c.jsx(fl,{size:20}),e==="fr"?"Voter":"Vote"]}),c.jsxs(L0,{$isActive:t==="coming",onClick:()=>r("coming"),children:[c.jsx(Co,{size:20}),e==="fr"?"Prochainement":"Coming Soon"]})]})]})}),t==="vote"&&c.jsx(SM,{children:c.jsxs(je,{children:[c.jsx(z0,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:e==="fr"?"Votez pour les Prochains Designs":"Vote for Next Designs"}),c.jsx(_M,{children:n.map((S,E)=>c.jsxs(wk,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:E*.1},children:[c.jsx(EM,{$image:S.image}),c.jsx(CM,{children:S.title}),c.jsx(jM,{children:S.description}),c.jsxs($M,{children:[w(S.id),"% ",e==="fr"?"des votes":"of votes"]}),c.jsx(IM,{children:c.jsx(OM,{$percentage:w(S.id)})}),c.jsxs(TM,{children:[c.jsxs(PM,{children:[c.jsx(fl,{size:16}),g(S.id).toLocaleString()," ","votes"]}),c.jsx("div",{children:Array.from({length:5}).map((j,R)=>c.jsx(Ko,{size:16,fill:R<4?"#FFD700":"none",stroke:"#FFD700"},R))})]}),c.jsx(AM,{onClick:()=>v(S.id),disabled:k(S.id)||C(S.id),$isVoted:k(S.id),$isLoading:C(S.id),children:C(S.id)?c.jsxs(c.Fragment,{children:[c.jsx(ss,{size:"small",color:"var(--white)",showText:!1,variant:"spinner"}),e==="fr"?"Vote en cours...":"Voting..."]}):k(S.id)?c.jsxs(c.Fragment,{children:[c.jsx(RM,{size:20}),e==="fr"?"Voté !":"Voted!"]}):c.jsxs(c.Fragment,{children:[c.jsx(fl,{size:20}),e==="fr"?"Voter":"Vote"]})})]},S.id))})]})}),t==="coming"&&c.jsx(kM,{children:c.jsxs(je,{children:[c.jsx(z0,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:e==="fr"?"Prochainement":"Coming Soon"}),c.jsx(LM,{children:s.map((S,E)=>c.jsxs(zM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:E*.1},children:[c.jsx(NM,{$image:S.image,children:c.jsx(DM,{children:e==="fr"?"Bientôt":"Soon"})}),c.jsxs(MM,{children:[c.jsx(UM,{children:S.title}),c.jsx(FM,{children:S.description}),c.jsxs(VM,{children:[c.jsx(Co,{size:20}),S.date]})]})]},S.id))})]})}),c.jsx(je,{children:c.jsx(yM,{totalVotes:u.totalVotes||n.reduce((S,E)=>S+E.votes,0),totalVoters:u.votedItems.size,topVotedItem:(()=>{if(n.length===0)return null;const S=n.map(R=>({...R,currentVotes:g(R.id)})),E=S.reduce((R,P)=>P.currentVotes>R.currentVotes?P:R,S[0]),j=S.reduce((R,P)=>R+P.currentVotes,0);return{title:E.title,votes:E.currentVotes,percentage:j>0?Math.round(E.currentVotes/j*100):0}})(),averageVotesPerItem:n.length>0?(u.totalVotes||n.reduce((S,E)=>S+E.votes,0))/n.length:0,language:e})}),c.jsx(uM,{type:(h==null?void 0:h.type)||"success",message:(h==null?void 0:h.message)||"",show:!!h,onClose:()=>f(null),duration:3e3})]})},N0=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-6) var(--spacing-4);
  min-height: calc(100vh - 140px);
`,qM=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: flex-start;
  }
`,HM=p.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
`,WM=p(vt)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--gray-600);
  text-decoration: none;
  font-weight: var(--font-medium);
  transition: all var(--transition-normal);
  
  &:hover {
    color: #d13296;
    transform: translateX(-2px);
  }
`,GM=p.h1`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-2xl);
  }
`,KM=p.div`
  display: flex;
  gap: var(--spacing-3);
`,YM=p.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  border: 1px solid rgba(209, 50, 150, 0.2);
  background: rgba(209, 50, 150, 0.05);
  color: #d13296;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`,JM=p(F.div)`
  text-align: center;
  padding: var(--spacing-12) var(--spacing-4);
`,QM=p.div`
  width: 80px;
  height: 80px;
  background: rgba(209, 50, 150, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-6);
  color: #d13296;
`,XM=p.h2`
  font-size: var(--font-size-xl);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
`,ZM=p.p`
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-6);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`,e6=p(vt)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  background: var(--primary-gradient);
  color: var(--white);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`,t6=p.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-6);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
`,r6=p(F.div)`
  background: var(--white);
  border: 1px solid rgba(209, 50, 150, 0.1);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(209, 50, 150, 0.3);
  }
`,n6=p.div`
  width: 100%;
  height: 200px;
  background: ${e=>`url(${e.$imageUrl}) center/cover`};
  position: relative;
`,i6=p.div`
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  display: flex;
  gap: var(--spacing-2);
`,s6=p.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: var(--gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--white);
    color: #d13296;
    transform: scale(1.1);
  }
`,o6=p.div`
  padding: var(--spacing-4);
`,a6=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-semibold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
  line-height: 1.4;
`,l6=p.div`
  font-size: var(--font-size-xl);
  font-weight: var(--font-bold);
  color: #d13296;
  margin-bottom: var(--spacing-3);
`,c6=p.div`
  display: flex;
  gap: var(--spacing-2);
`,u6=p.button`
  flex: 1;
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid rgba(209, 50, 150, 0.2);
  background: rgba(209, 50, 150, 0.05);
  color: #d13296;
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
  
  &:hover {
    background: rgba(209, 50, 150, 0.1);
    transform: translateY(-1px);
  }
`,d6=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-12);
  color: #d13296;
`,h6=()=>{Zc();const{favorites:e,isLoading:t,removeFavorite:r,clearAllFavorites:n}=Xo(),{language:i}=Pe(),{addToCart:s}=ni(),{showNotification:o}=Vt();_.useEffect(()=>{},[i,o]);const a=async(f,y)=>{try{await r(f,y),o({type:"success",title:i==="fr"?"Succès":"Success",message:i==="fr"?"Produit retiré des favoris":"Product removed from favorites"})}catch{o({type:"error",title:i==="fr"?"Erreur":"Error",message:i==="fr"?"Erreur lors de la suppression":"Error removing favorite"})}},[l,u]=ir.useState({}),d=async f=>{const y=`${f.productId}_${f.variantId||"default"}`;try{u(x=>({...x,[y]:!0}));const m=await Pr.getProductById(f.productId);if(!m)throw new Error(i==="fr"?"Produit introuvable":"Product not found");await s(m,1,f.variantId),o({type:"success",title:i==="fr"?"Succès":"Success",message:i==="fr"?`${f.productTitle||"Produit"} ajouté au panier`:`${f.productTitle||"Product"} added to cart`})}catch(m){console.error("Erreur lors de l'ajout au panier depuis les favoris:",m),o({type:"error",title:i==="fr"?"Erreur":"Error",message:i==="fr"?"Impossible d'ajouter au panier. Veuillez réessayer.":"Could not add to cart. Please try again."})}finally{u(m=>({...m,[y]:!1}))}},h=async()=>{if(window.confirm(i==="fr"?"Êtes-vous sûr de vouloir supprimer tous vos favoris ?":"Are you sure you want to remove all favorites?"))try{await n(),o({type:"success",title:i==="fr"?"Succès":"Success",message:i==="fr"?"Tous les favoris ont été supprimés":"All favorites have been removed"})}catch{o({type:"error",title:i==="fr"?"Erreur":"Error",message:i==="fr"?"Erreur lors de la suppression":"Error removing favorites"})}};return t?c.jsx(N0,{children:c.jsx(d6,{children:c.jsx(ss,{text:i==="fr"?"Chargement...":"Loading..."})})}):c.jsxs(N0,{children:[c.jsxs(qM,{children:[c.jsxs(HM,{children:[c.jsxs(WM,{to:"/",children:[c.jsx(dS,{size:20}),i==="fr"?"Retour":"Back"]}),c.jsxs(GM,{children:[i==="fr"?"Mes favoris":"My favorites",e.length>0&&` (${e.length})`]})]}),e.length>0&&c.jsx(KM,{children:c.jsxs(YM,{onClick:h,children:[c.jsx(jo,{size:16}),i==="fr"?"Tout supprimer":"Clear all"]})})]}),e.length===0?c.jsxs(JM,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[c.jsx(QM,{children:c.jsx(or,{size:40})}),c.jsx(XM,{children:i==="fr"?"Aucun favori":"No favorites"}),c.jsx(ZM,{children:i==="fr"?"Vous n'avez pas encore ajouté de produits à vos favoris. Parcourez notre catalogue pour découvrir des produits incroyables !":"You haven't added any products to your favorites yet. Browse our catalog to discover amazing products!"}),c.jsx(e6,{to:"/products",children:i==="fr"?"Parcourir les produits":"Browse products"})]}):c.jsx(t6,{children:e.map((f,y)=>c.jsxs(r6,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:y*.1},children:[c.jsx(n6,{$imageUrl:f.productImage||"/placeholder-image.jpg",children:c.jsx(i6,{children:c.jsx(s6,{onClick:()=>a(f.productId,f.variantId),title:i==="fr"?"Retirer des favoris":"Remove from favorites",children:c.jsx(jo,{size:16})})})}),c.jsxs(o6,{children:[c.jsx(a6,{children:f.productTitle||(i==="fr"?"Produit BFT":"BFT Product")}),f.variantTitle&&c.jsx("div",{style:{fontSize:"0.875rem",color:"var(--gray-500)",marginBottom:"var(--spacing-2)"},children:f.variantTitle}),c.jsx(l6,{children:f.productPrice?`€${parseFloat(f.productPrice).toFixed(2)}`:"N/A"}),c.jsx(c6,{children:c.jsx(u6,{onClick:()=>d(f),disabled:l[`${f.productId}_${f.variantId||"default"}`],children:l[`${f.productId}_${f.variantId||"default"}`]?c.jsx(ss,{size:"small"}):c.jsxs(c.Fragment,{children:[c.jsx(Go,{size:16}),i==="fr"?"Ajouter au panier":"Add to cart"]})})})]})]},f.id))})]})},f6=()=>{const{language:e}=Pe();return c.jsxs(p6,{children:[c.jsx(g6,{children:c.jsx(je,{children:c.jsxs(m6,{children:[c.jsx(v6,{children:e==="fr"?"Conditions Générales de Vente":"General Terms & Conditions"}),c.jsx(y6,{children:e==="fr"?"Informations légales et conditions d'utilisation de nos services":"Legal information and terms of use for our services"})]})})}),c.jsx(je,{children:c.jsxs(w6,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 1 - Désignation du Vendeur"}),c.jsxs("p",{children:["CASTELLANO VENTURES, Société par actions simplifiée au capital de 10 000 €",c.jsx("br",{}),"Siège social : 18 cours Honoré Cresp, 06130 Grasse",c.jsx("br",{}),"RCS Grasse n° 987 795 846",c.jsx("br",{}),"Téléphone : +33 6 70 25 86 34",c.jsx("br",{}),"Adresse mail : president@castellanoventures.com",c.jsx("br",{}),"Site internet : bestfkersintown.com",c.jsx("br",{}),"Représentée par son Président, Monsieur Michel CASTELLANO"]})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 2 - Champ d'application"}),c.jsx("p",{children:"Les présentes Conditions Générales de Vente s’appliquent, sans restriction ni réserve, à l’ensemble des ventes conclues par CASTELLANO VENTURES auprès de consommateurs et d’acheteurs non professionnels désirant acquérir les produits proposés à la vente sur le site internet bestfkersintown.com."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 3 - Produits proposés à la vente"}),c.jsx("p",{children:"Les Produits proposés à la vente sont tous types de produits distribués sous la marque « BEST F.KERS in TOWN ». Les caractéristiques principales des Produits sont présentées sur le site internet du Vendeur. Le choix et l'achat d'un Produit est de la seule responsabilité du Client."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 4 - Commandes"}),c.jsx("p",{children:"Le Client sélectionne les Produits sur le site internet bestfkersintown.com. La vente n’est définitive qu’après confirmation de la commande par email par le Vendeur, et encaissement du prix."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 5 - Tarifs"}),c.jsx("p",{children:"Les Produits sont fournis aux tarifs en vigueur figurant sur le site internet bestfkersintown.com, exprimés en euros, HT et TTC. Ils ne comprennent pas les frais de livraison, facturés en supplément."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 6 - Conditions de paiement"}),c.jsx("p",{children:"Le prix est payable comptant, en totalité au jour de la commande. Moyens de paiement acceptés : Cartes bancaires (Visa, Mastercard, American Express), PayPal, Virement bancaire."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 7 - Livraison"}),c.jsx("p",{children:"Les Produits commandés seront délivrés en Union européenne, dans un délai de 15 jours à compter de l’expédition par un transporteur indépendant."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 9 - Droit de rétractation"}),c.jsx("p",{children:"Conformément aux dispositions légales en vigueur, le Client dispose d'un délai de quatorze jours à compter de la réception du Produit pour exercer son droit de rétractation auprès du Vendeur, sans avoir à justifier de motifs ni à payer de pénalité."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 10 - Garanties légales"}),c.jsx("p",{children:"Les Produits vendus sur le site Internet sont conformes à la réglementation en vigueur en France et bénéficient de plein droit de la garantie légale de conformité et de la garantie légale contre les vices cachés."})]}),c.jsxs(ur,{children:[c.jsx("h2",{children:"ARTICLE 12 - Protection des données personnelles"}),c.jsx("p",{children:"Les données nominatives demandées au Client sont nécessaires au traitement de sa commande et à l'établissement des factures. Ces données peuvent être communiquées aux éventuels partenaires du Vendeur chargés de l'exécution, du traitement, de la gestion et du paiement des commandes."})]}),c.jsxs(x6,{children:[c.jsxs("h3",{children:[c.jsx(Up,{size:20})," Une question ?"]}),c.jsxs("p",{children:["Pour toute question relative à nos CGV, contactez-nous au ",c.jsx("strong",{children:"+33 6 70 25 86 34"})," ou par mail à ",c.jsx("strong",{children:"president@castellanoventures.com"})]})]})]})})]})},p6=p.div`
  min-height: 100vh;
  background: var(--white);
  padding-bottom: var(--spacing-20);
`,g6=p.div`
  background: linear-gradient(135deg, #d13296 0%, #d13296 100%);
  color: var(--white);
  padding: var(--spacing-24) 0 var(--spacing-16) 0;
  text-align: center;
`,m6=p.div`
  max-width: 800px;
  margin: 0 auto;
`,v6=p.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-6);
`,y6=p.p`
  font-size: var(--font-size-xl);
  opacity: 0.9;
  line-height: 1.6;
`,w6=p(F.div)`
  max-width: 900px;
  margin: var(--spacing-16) auto;
  background: var(--white);
  padding: var(--spacing-12);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--gray-100);
`,ur=p.div`
  margin-bottom: var(--spacing-10);
  
  h2 {
    font-size: var(--font-size-2xl);
    color: var(--gray-900);
    margin-bottom: var(--spacing-4);
    border-bottom: 2px solid #d13296;
    display: inline-block;
    padding-bottom: 4px;
  }
  
  p {
    font-size: var(--font-size-lg);
    color: var(--gray-700);
    line-height: 1.8;
  }
`,x6=p.div`
  margin-top: var(--spacing-12);
  padding: var(--spacing-8);
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  text-align: center;
  
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #d13296;
    margin-bottom: var(--spacing-4);
  }
  
  p {
    color: var(--gray-600);
  }
`,b6={submitLead:async e=>{try{console.log("📦 Envoi du lead vers BigCommerce...",e.email),await Kr.createCustomer({email:e.email,first_name:e.firstName,last_name:e.lastName,phone:e.phone,company:e.community}),console.log("✅ Lead enregistré avec succès dans BigCommerce")}catch(r){console.error("❌ Erreur lors de l'enregistrement dans BigCommerce:",r)}const t={}.VITE_GOOGLE_SHEETS_WEBHOOK_URL;if(!t||t.includes("XXXXXX"))return console.warn("⚠️ Google Sheets Webhook URL non configurée. Backup ignoré."),{success:!0,message:"Enregistré dans BigCommerce"};try{return await fetch(t,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),{success:!0}}catch(r){return console.error("❌ Erreur lors de l'envoi backup Google Sheets:",r),{success:!0,warning:"Backup Google Sheets échoué"}}}},S6=p.div`
  min-height: 100vh;
  background: var(--white);
  padding: var(--spacing-20) 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: var(--spacing-10) 0;
  }
`,k6=p.div`
  display: flex;
  gap: var(--spacing-12);
  margin-top: var(--spacing-12);
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: var(--spacing-16);
  }
`,_6=p(F.div)`
  flex: 1;
`,E6=p(F.div)`
  flex: 1;
  background: linear-gradient(135deg, #d13296 0%, #b02a7a 100%);
  padding: var(--spacing-12);
  border-radius: var(--radius-3xl);
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(209, 50, 150, 0.2);

  @media (max-width: 768px) {
    padding: var(--spacing-8) var(--spacing-6);
  }
`,C6=p(F.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-bold);
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
  text-align: left;
  
  .bft-title {
    color: #d13296;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`,j6=p(F.p)`
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 600px;
  margin-bottom: var(--spacing-10);
  line-height: 1.6;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`,T6=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,P6=p(F.a)`
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-6);
  background: var(--white);
  border-radius: var(--radius-2xl);
  border: 2px solid var(--gray-100);
  text-decoration: none;
  color: var(--gray-900);
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: #d13296;
    transform: translateX(10px);
    box-shadow: var(--shadow-lg);
    
    .icon-box {
      background: rgba(209, 50, 150, 0.1);
      color: #d13296;
      transform: scale(1.1);
    }
  }
`,A6=p.div`
  width: 56px;
  height: 56px;
  background: var(--gray-50);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
  color: var(--gray-700);
`,R6=p.div`
  flex: 1;
`,I6=p.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-bold);
  margin-bottom: 2px;
`,O6=p.p`
  font-size: var(--font-size-sm);
  color: var(--gray-500);
`,$6=p.div`
  position: relative;
  z-index: 2;
`,D0=p.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-4);
  color: var(--white);
`,M0=p.p`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
  line-height: 1.6;
`,L6=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
`,Ts=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  text-align: left;
`,Ps=p.label`
  font-size: var(--font-size-sm);
  font-weight: var(--font-semibold);
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ha=p.input`
  width: 100%;
  padding: var(--spacing-4);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  color: var(--white);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: var(--white);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,z6=p.select`
  width: 100%;
  padding: var(--spacing-4);
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  color: var(--white);
  font-size: var(--font-size-base);
  cursor: pointer;
  
  option {
    background: var(--gray-900);
    color: var(--white);
  }
`,U0=p(F.button)`
  background: var(--white);
  color: #d13296;
  padding: var(--spacing-4);
  border-radius: var(--radius-xl);
  font-weight: var(--font-bold);
  font-size: var(--font-size-lg);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,N6=p(F.div)`
  text-align: center;
  padding: var(--spacing-12) 0;
`,D6=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`,F0=p(F.div)`
  position: absolute;
  background: ${e=>e.$color};
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 50%;
  opacity: 0.15;
`,M6=()=>{const{language:e}=Pe(),[t,r]=_.useState(!1),[n,i]=_.useState(!1),[s,o]=_.useState({firstName:"",lastName:"",phone:"",email:"",community:"GG"}),a=[{icon:c.jsx(fS,{size:28}),title:"Instagram",description:e==="fr"?"Suivez notre univers au quotidien":"Follow our daily universe",url:"https://instagram.com/bestfkersintown"},{icon:c.jsx(zR,{size:28}),title:"TikTok",description:e==="fr"?"Le meilleur de BFT en vidéo":"The best of BFT in video",url:"https://tiktok.com/@bestfkersintown"},{icon:c.jsx(mS,{size:28}),title:"WhatsApp",description:e==="fr"?"Contactez-nous directement":"Contact us directly",url:"https://wa.me/33000000000"}],l=async u=>{u.preventDefault(),r(!0);try{const d={...s,timestamp:new Date().toISOString()};await b6.submitLead(d),i(!0),o({firstName:"",lastName:"",phone:"",email:"",community:"GG"})}catch{alert(e==="fr"?"Une erreur est survenue.":"An error occurred.")}finally{r(!1)}};return c.jsx(S6,{children:c.jsx(je,{children:c.jsxs(k6,{children:[c.jsxs(_6,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},children:[c.jsxs(C6,{children:["Discover ",c.jsx("span",{className:"bft-title papyrus-font",children:"BFT"})]}),c.jsx(j6,{children:e==="fr"?"Plongez dans l'univers BestF.kers in Town. Mode, authenticité et communauté.":"Dive into the BestF.kers in Town universe. Fashion, authenticity, and community."}),c.jsx(T6,{children:a.map((u,d)=>c.jsxs(P6,{href:u.url,target:"_blank",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2+d*.1},children:[c.jsx(A6,{className:"icon-box",children:u.icon}),c.jsxs(R6,{children:[c.jsx(I6,{children:u.title}),c.jsx(O6,{children:u.description})]}),c.jsx(dn,{size:20,className:"arrow"})]},u.title))})]}),c.jsxs(E6,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},children:[c.jsx(bn,{mode:"wait",children:n?c.jsxs(N6,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},children:[c.jsx(is,{size:80,color:"#ffffff",style:{marginBottom:"24px"}}),c.jsx(D0,{children:e==="fr"?"Merci !":"Thank you!"}),c.jsx(M0,{children:e==="fr"?"Votre demande a bien été envoyée. Nous reviendrons vers vous très vite.":"Your request has been sent. We will get back to you very soon."}),c.jsx(U0,{onClick:()=>i(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:e==="fr"?"Retour":"Back"})]},"success"):c.jsxs($6,{children:[c.jsxs(D0,{children:["Become ",c.jsx("span",{className:"papyrus-font",children:"BFT"})]}),c.jsx(M0,{children:e==="fr"?"Rejoignez notre programme d'ambassadeurs et devenez le visage de la mode inclusive.":"Join our ambassador program and become the face of inclusive fashion."}),c.jsxs(L6,{onSubmit:l,children:[c.jsxs(Ts,{children:[c.jsx(Ps,{children:e==="fr"?"Prénom":"First Name"}),c.jsx(Ha,{required:!0,placeholder:e==="fr"?"Votre prénom":"Your first name",value:s.firstName,onChange:u=>o({...s,firstName:u.target.value})})]}),c.jsxs(Ts,{children:[c.jsx(Ps,{children:e==="fr"?"Nom":"Last Name"}),c.jsx(Ha,{required:!0,placeholder:e==="fr"?"Votre nom":"Your last name",value:s.lastName,onChange:u=>o({...s,lastName:u.target.value})})]}),c.jsxs(Ts,{children:[c.jsx(Ps,{children:e==="fr"?"N° de téléphone":"Phone Number"}),c.jsx(Ha,{required:!0,type:"tel",placeholder:"06 00 00 00 00",value:s.phone,onChange:u=>o({...s,phone:u.target.value})})]}),c.jsxs(Ts,{children:[c.jsx(Ps,{children:e==="fr"?"Email":"Email Address"}),c.jsx(Ha,{required:!0,type:"email",placeholder:"hello@example.com",value:s.email,onChange:u=>o({...s,email:u.target.value})})]}),c.jsxs(Ts,{children:[c.jsx(Ps,{children:e==="fr"?"Appartenance":"Community"}),c.jsxs(z6,{value:s.community,onChange:u=>o({...s,community:u.target.value}),children:[c.jsx("option",{value:"GG",children:"GG (Gay Gamer)"}),c.jsx("option",{value:"LL",children:"LL (Lovely Lady)"}),c.jsx("option",{value:"BFT",children:"BFT (Best F.kers)"}),c.jsx("option",{value:"OTHER",children:e==="fr"?"Autre":"Other"})]})]}),c.jsx(U0,{type:"submit",disabled:t,whileHover:{scale:1.02},whileTap:{scale:.98},children:t?c.jsx(tc,{className:"animate-spin"}):c.jsxs(c.Fragment,{children:[e==="fr"?"Rejoindre l'aventure":"Join the adventure",c.jsx(dn,{size:20})]})})]})]},"form")}),c.jsxs(D6,{children:[c.jsx(F0,{$color:"#ffffff",$size:120,style:{top:"-40px",right:"-40px"},animate:{scale:[1,1.2,1],opacity:[.1,.2,.1]},transition:{duration:6,repeat:1/0}}),c.jsx(F0,{$color:"#ffffff",$size:80,style:{bottom:"10%",left:"-20px"},animate:{y:[0,20,0]},transition:{duration:5,repeat:1/0}})]})]})]})})})},Wa={}.VITE_AIRTABLE_API_KEY||"",Ga={}.VITE_AIRTABLE_BASE_ID||"",wt={CUSTOMERS:"Customers",ORDERS:"Orders",PRODUCTS:"Products",ANALYTICS:"Analytics",SUPPORT:"Support"},V0={async createRecord(e,t){var r;try{const n=await fetch(`https://api.airtable.com/v0/${Ga}/${e}`,{method:"POST",headers:{Authorization:`Bearer ${Wa}`,"Content-Type":"application/json"},body:JSON.stringify({fields:t})});if(!n.ok){const i=await n.json();throw new Error(((r=i.error)==null?void 0:r.message)||"Erreur lors de la création du record")}return await n.json()}catch(n){throw console.error("Erreur Airtable:",n),n}},async getRecords(e,t){var r;try{let n=`https://api.airtable.com/v0/${Ga}/${e}`;t&&(n+=`?filterByFormula=${encodeURIComponent(t)}`);const i=await fetch(n,{method:"GET",headers:{Authorization:`Bearer ${Wa}`}});if(!i.ok){const s=await i.json();throw new Error(((r=s.error)==null?void 0:r.message)||"Erreur lors de la récupération des records")}return await i.json()}catch(n){throw console.error("Erreur Airtable:",n),n}},async updateRecord(e,t,r){var n;try{const i=await fetch(`https://api.airtable.com/v0/${Ga}/${e}/${t}`,{method:"PATCH",headers:{Authorization:`Bearer ${Wa}`,"Content-Type":"application/json"},body:JSON.stringify({fields:r})});if(!i.ok){const s=await i.json();throw new Error(((n=s.error)==null?void 0:n.message)||"Erreur lors de la mise à jour du record")}return await i.json()}catch(i){throw console.error("Erreur Airtable:",i),i}},async deleteRecord(e,t){var r;try{const n=await fetch(`https://api.airtable.com/v0/${Ga}/${e}/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${Wa}`}});if(!n.ok){const i=await n.json();throw new Error(((r=i.error)==null?void 0:r.message)||"Erreur lors de la suppression du record")}return await n.json()}catch(n){throw console.error("Erreur Airtable:",n),n}},async createCustomer(e){return await this.createRecord(wt.CUSTOMERS,e.fields)},async getCustomerByEmail(e){const t=`{Email} = '${e}'`;return(await this.getRecords(wt.CUSTOMERS,t)).records[0]||null},async updateCustomer(e,t){return await this.updateRecord(wt.CUSTOMERS,e,t)},async createOrder(e){return await this.createRecord(wt.ORDERS,e.fields)},async getOrdersByCustomer(e){const t=`{Customer Email} = '${e}'`;return await this.getRecords(wt.ORDERS,t)},async updateOrderStatus(e,t){return await this.updateRecord(wt.ORDERS,e,{"Order Status":t})},async createProduct(e){return await this.createRecord(wt.PRODUCTS,e.fields)},async updateProductStock(e,t){return await this.updateRecord(wt.PRODUCTS,e,{"Stock Level":t})},async createAnalyticsRecord(e){return await this.createRecord(wt.ANALYTICS,e.fields)},async getAnalyticsByDateRange(e,t){const r=`AND({Date} >= '${e}', {Date} <= '${t}')`;return await this.getRecords(wt.ANALYTICS,r)},async createSupportTicket(e){return await this.createRecord(wt.SUPPORT,e.fields)},async updateSupportTicket(e,t){return await this.updateRecord(wt.SUPPORT,e,t)},async getSupportTicketsByCustomer(e){const t=`{Customer Email} = '${e}'`;return await this.getRecords(wt.SUPPORT,t)},async syncCustomerFromBigCommerce(e){const t=await this.getCustomerByEmail(e.email),r={Email:e.email,"First Name":e.firstName||"","Last Name":e.lastName||"",Phone:e.phone||"","Total Spent":parseFloat(e.totalSpent||"0"),"Orders Count":e.ordersCount||0,"Last Order Date":e.lastOrderDate||"",Status:"active","Created Date":new Date().toISOString(),"Updated Date":new Date().toISOString()};return t?await this.updateCustomer(t.id,r):await this.createCustomer({fields:r})},async syncOrderFromBigCommerce(e){var r,n,i,s,o,a;const t={"Order ID":e.id,"Customer Email":e.email,"Customer Name":`${((r=e.customer)==null?void 0:r.firstName)||""} ${((n=e.customer)==null?void 0:n.lastName)||""}`.trim(),"Order Date":e.createdAt,"Order Status":this.mapBigCommerceStatusToAirtable(e.fulfillmentStatus),"Total Amount":parseFloat(e.totalPrice||"0"),"Shipping Address":this.formatAddress(e.shippingAddress),"Billing Address":this.formatAddress(e.billingAddress),"Payment Method":((i=e.paymentGatewayNames)==null?void 0:i[0])||"","Payment Status":this.mapBigCommercePaymentStatusToAirtable(e.financialStatus),"Tracking Number":((o=(s=e.fulfillments)==null?void 0:s[0])==null?void 0:o.trackingNumber)||"",Items:((a=e.lineItems)==null?void 0:a.map(l=>`${l.title} (x${l.quantity})`))||[],Notes:e.note||"","Created Date":new Date().toISOString(),"Updated Date":new Date().toISOString()};return await this.createOrder({fields:t})},mapBigCommerceStatusToAirtable(e){return{fulfilled:"shipped",partial:"shipped",unfulfilled:"confirmed",cancelled:"cancelled"}[e]||"pending"},mapBigCommercePaymentStatusToAirtable(e){return{paid:"paid",pending:"pending",failed:"failed",refunded:"refunded"}[e]||"pending"},formatAddress(e){return e?`${e.address1||""} ${e.address2||""}, ${e.city||""} ${e.zip||""}, ${e.country||""}`.trim():""}},Mr={LOW_STOCK:5,OUT_OF_STOCK:0,RESTOCK_NOTIFICATION:10},vr={RETRY_ATTEMPTS:3,RETRY_DELAY:5e3,BATCH_SIZE:10,SYNC_INTERVAL:15,REAL_TIME_SYNC:!0},B0={syncState:{isRunning:!1,lastSync:null,errorCount:0,currentBatch:0,totalProducts:0},async syncProductStock(e,t=0){try{console.log(`🔄 Synchronisation du stock pour le produit ${e} (tentative ${t+1})`);const r=await Pr.getProductById(e),n=[];for(const i of r.variants){const s=i.inventoryQuantity||0,o=await this.getPreviousStockLevel(e,i.id);if(s!==o){const a={productId:e,variantId:i.id,newStockLevel:s,previousStockLevel:o,timestamp:new Date,source:"bigcommerce"};n.push(a),await this.saveStockLevel(e,i.id,s),await this.checkStockAlerts(e,i.id,s),await this.syncToAirtable(e,i.id,s),console.log(`📦 Stock mis à jour: ${e} - ${i.title}: ${o} → ${s}`)}}return t===0&&(this.syncState.errorCount=0),console.log(`✅ Synchronisation terminée pour le produit ${e}: ${n.length} mises à jour`),n}catch(r){if(console.error(`❌ Erreur lors de la synchronisation du stock pour ${e}:`,r),t<vr.RETRY_ATTEMPTS)return console.log(`🔄 Nouvelle tentative dans ${vr.RETRY_DELAY/1e3} secondes...`),await new Promise(n=>setTimeout(n,vr.RETRY_DELAY)),this.syncProductStock(e,t+1);throw this.syncState.errorCount++,r}},async syncAllProductsStock(){try{if(this.syncState.isRunning)return console.log("⚠️ Synchronisation déjà en cours, ignorée"),[];this.syncState.isRunning=!0,console.log("🔄 Début de la synchronisation complète du stock");const e=await Pr.getAllProducts();this.syncState.totalProducts=e.products.length;const t=[];for(let r=0;r<e.products.length;r+=vr.BATCH_SIZE){const n=e.products.slice(r,r+vr.BATCH_SIZE);this.syncState.currentBatch=Math.floor(r/vr.BATCH_SIZE)+1,console.log(`📦 Traitement du batch ${this.syncState.currentBatch}/${Math.ceil(e.products.length/vr.BATCH_SIZE)}`);const i=n.map(async o=>{try{return await this.syncProductStock(o.id)}catch(a){return console.error(`❌ Erreur lors de la synchronisation du produit ${o.id}:`,a),[]}});(await Promise.all(i)).forEach(o=>t.push(...o)),r+vr.BATCH_SIZE<e.products.length&&await new Promise(o=>setTimeout(o,1e3))}return this.syncState.lastSync=new Date,this.syncState.isRunning=!1,console.log(`✅ Synchronisation complète terminée: ${t.length} mises à jour au total`),window.dispatchEvent(new CustomEvent("stockSyncCompleted",{detail:{updates:t,timestamp:this.syncState.lastSync,errorCount:this.syncState.errorCount}})),t}catch(e){throw this.syncState.isRunning=!1,console.error("❌ Erreur lors de la synchronisation complète:",e),e}},async syncProductsInfo(){var e,t,r,n;try{console.log("🔄 Début de la synchronisation des informations produits");const i=await Pr.getAllProducts(),s=[];for(const o of i.products){const a=this.getLocalProduct(o.id);if(a){const l={};a.title!==o.title&&(l.title=o.title),a.price!==(((e=o.variants[0])==null?void 0:e.price)||0)&&(l.price=((t=o.variants[0])==null?void 0:t.price)||0),a.description!==o.description&&(l.description=o.description),JSON.stringify(a.images)!==JSON.stringify(o.images.map(u=>u.src))&&(l.images=o.images.map(u=>u.src)),a.available!==(((r=o.variants[0])==null?void 0:r.available)||!1)&&(l.available=((n=o.variants[0])==null?void 0:n.available)||!1),Object.keys(l).length>0&&(s.push({productId:o.id,changes:l,timestamp:new Date}),console.log(`📝 Produit mis à jour: ${o.title}`,l))}this.saveLocalProduct(o)}return console.log(`✅ Synchronisation des produits terminée: ${s.length} mises à jour`),s}catch(i){throw console.error("❌ Erreur lors de la synchronisation des produits:",i),i}},async startRealTimeSync(){console.log("🔄 Démarrage de la synchronisation en temps réel"),window.addEventListener("cartUpdated",async e=>{const{productId:t,variantId:r}=e.detail;if(t&&r)try{await this.syncProductStock(t),console.log(`🔄 Stock synchronisé en temps réel pour ${t}`)}catch(n){console.error("❌ Erreur lors de la synchronisation en temps réel:",n)}}),window.addEventListener("orderCompleted",async e=>{const{products:t}=e.detail;if(t&&t.length>0)try{console.log("🔄 Synchronisation du stock après commande"),await this.syncAllProductsStock()}catch(r){console.error("❌ Erreur lors de la synchronisation post-commande:",r)}})},async updateStockFromPurchase(e,t,r){try{console.log(`🔄 Mise à jour du stock après achat: ${e} - ${t} - ${r}`);const n=await this.getCurrentStockLevel(e,t),i=Math.max(0,n-r),s={productId:e,variantId:t,newStockLevel:i,previousStockLevel:n,timestamp:new Date,source:"frontend"};return await this.saveStockLevel(e,t,i),await this.checkStockAlerts(e,t,i),window.dispatchEvent(new CustomEvent("cartUpdated",{detail:{productId:e,variantId:t,quantity:r}})),console.log(`✅ Stock mis à jour: ${n} → ${i}`),s}catch(n){throw console.error("❌ Erreur lors de la mise à jour du stock:",n),n}},async checkStockAlerts(e,t,r){const n=[],i=new Date;return r<=Mr.LOW_STOCK&&r>Mr.OUT_OF_STOCK&&(n.push({productId:e,variantId:t,currentStock:r,threshold:Mr.LOW_STOCK,alertType:"low_stock",timestamp:i}),await this.sendLowStockNotification(n[n.length-1])),r<=Mr.OUT_OF_STOCK&&(n.push({productId:e,variantId:t,currentStock:r,threshold:Mr.OUT_OF_STOCK,alertType:"out_of_stock",timestamp:i}),await this.sendOutOfStockNotification(n[n.length-1])),r>=Mr.RESTOCK_NOTIFICATION&&await this.getPreviousStockLevel(e,t)<Mr.RESTOCK_NOTIFICATION&&(n.push({productId:e,variantId:t,currentStock:r,threshold:Mr.RESTOCK_NOTIFICATION,alertType:"restocked",timestamp:i}),await this.sendRestockNotification(n[n.length-1])),n},async getCurrentStockLevel(e,t){const r=`stock_${e}_${t}`,n=localStorage.getItem(r);return n?parseInt(n,10):0},async getPreviousStockLevel(e,t){return this.getCurrentStockLevel(e,t)},async saveStockLevel(e,t,r){const n=`stock_${e}_${t}`;localStorage.setItem(n,r.toString())},getLocalProduct(e){const t=`product_${e}`,r=localStorage.getItem(t);return r?JSON.parse(r):null},saveLocalProduct(e){const t=`product_${e.id}`;localStorage.setItem(t,JSON.stringify(e))},async syncToAirtable(e,t,r){try{if(!{}.VITE_AIRTABLE_API_KEY)return;await V0.updateProductStock(e,r)}catch(n){console.error("❌ Erreur lors de la synchronisation avec Airtable:",n)}},async saveAlertToAirtable(e){try{if(!{}.VITE_AIRTABLE_API_KEY)return;await V0.createRecord("Stock Alerts",{"Product ID":e.productId,"Variant ID":e.variantId,"Current Stock":e.currentStock,Threshold:e.threshold,"Alert Type":e.alertType,Timestamp:e.timestamp.toISOString()})}catch(t){console.error("❌ Erreur lors de la sauvegarde de l'alerte dans Airtable:",t)}},async sendLowStockNotification(e){console.log(`📧 Notification de stock faible envoyée pour ${e.productId}`),await this.saveAlertToAirtable(e)},async sendOutOfStockNotification(e){console.log(`📧 Notification de rupture de stock envoyée pour ${e.productId}`),await this.saveAlertToAirtable(e)},async sendRestockNotification(e){console.log(`📧 Notification de réapprovisionnement envoyée pour ${e.productId}`),await this.saveAlertToAirtable(e)},getSyncState(){return{...this.syncState}},startAutoSync(e=vr.SYNC_INTERVAL){return console.log(`🔄 Démarrage de la synchronisation automatique toutes les ${e} minutes`),this.startRealTimeSync(),this.syncState.isRunning||this.syncAllProductsStock(),setInterval(async()=>{try{if(this.syncState.isRunning){console.log("⚠️ Synchronisation déjà en cours, ignorée");return}console.log("🔄 Synchronisation automatique en cours..."),await this.syncAllProductsStock(),await this.syncProductsInfo(),window.dispatchEvent(new CustomEvent("productsUpdated",{detail:{timestamp:new Date,syncState:this.syncState}}))}catch(r){console.error("❌ Erreur lors de la synchronisation automatique:",r)}},e*60*1e3)},stopAutoSync(e){clearInterval(e),this.syncState.isRunning=!1,console.log("🛑 Synchronisation automatique arrêtée")}},U6=()=>{const{showNewsletterModal:e,closeNewsletterModal:t}=XL();return typeof window<"u"&&new URLSearchParams(window.location.search).get("admin")==="true"&&(localStorage.setItem("adminMode","true"),console.log("🔐 Mode admin activé via URL (synchrone)")),_.useEffect(()=>{new URLSearchParams(window.location.search).get("admin")==="true"&&window.history.replaceState({},document.title,window.location.pathname)},[]),_.useEffect(()=>((async()=>{try{console.log("🔄 Initialisation de la synchronisation du stock...");const n=B0.startAutoSync(15);localStorage.setItem("stockSyncIntervalId",n.toString()),console.log("✅ Synchronisation du stock initialisée");const i=o=>{const{updates:a,timestamp:l,errorCount:u}=o.detail;console.log(`📦 Synchronisation terminée: ${a.length} mises à jour, ${u} erreurs`),a.length>0&&window.dispatchEvent(new CustomEvent("stockUpdated",{detail:{updates:a,timestamp:l,errorCount:u}}))},s=o=>{const{timestamp:a,syncState:l}=o.detail;console.log("📝 Produits mis à jour:",a,l),window.dispatchEvent(new CustomEvent("productsRefreshed",{detail:{timestamp:a,syncState:l}}))};return window.addEventListener("stockSyncCompleted",i),window.addEventListener("productsUpdated",s),()=>{window.removeEventListener("stockSyncCompleted",i),window.removeEventListener("productsUpdated",s)}}catch(n){console.error("❌ Erreur lors de l'initialisation de la synchronisation du stock:",n)}})(),()=>{const n=localStorage.getItem("stockSyncIntervalId");n&&(B0.stopAutoSync(n),localStorage.removeItem("stockSyncIntervalId"),console.log("🛑 Synchronisation du stock arrêtée"))}),[]),c.jsx(Y2,{children:c.jsx(KR,{children:c.jsx(RO,{children:c.jsx(IO,{children:c.jsx(OO,{children:c.jsxs("div",{className:"App",children:[c.jsx(pL,{}),c.jsx("main",{children:c.jsxs(D2,{children:[c.jsx(xt,{path:"/",element:c.jsx(K4,{})}),c.jsx(xt,{path:"/products",element:c.jsx(Qz,{})}),c.jsx(xt,{path:"/product/:productId",element:c.jsx(Xz,{})}),c.jsx(xt,{path:"/cart",element:c.jsx(XN,{})}),c.jsx(xt,{path:"/account",element:c.jsx(hD,{})}),c.jsx(xt,{path:"/about",element:c.jsx(fD,{})}),c.jsx(xt,{path:"/commitments",element:c.jsx(iM,{})}),c.jsx(xt,{path:"/vote",element:c.jsx(BM,{})}),c.jsx(xt,{path:"/favorites",element:c.jsx(h6,{})}),c.jsx(xt,{path:"/cgv",element:c.jsx(f6,{})}),c.jsx(xt,{path:"/discover",element:c.jsx(M6,{})}),c.jsx(xt,{path:"/checkout",element:c.jsx("div",{children:"Checkout (BigCommerce)"})})]})}),c.jsx(kL,{}),c.jsx(FL,{}),c.jsx(VL,{onAccept:()=>{},onDecline:()=>{}}),c.jsx(p4,{isOpen:e,onClose:t})]})})})})})})};Ed.createRoot(document.getElementById("root")).render(c.jsx(ir.StrictMode,{children:c.jsx(H2,{children:c.jsx(U6,{})})}));
