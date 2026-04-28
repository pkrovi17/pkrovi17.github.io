const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["index-CPD5w-YN.js","avc-BEVfBVZY.js","index-C-104lQ3.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function Hf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function E4(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var n=t.default;if(typeof n=="function"){var r=function i(){var s=!1;try{s=this instanceof i}catch{}return s?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),r}var Wu={exports:{}},Tl={};var o0;function Gy(){if(o0)return Tl;o0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(i,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var m in s)m!=="key"&&(c[m]=s[m])}else c=s;return s=c.ref,{$$typeof:t,type:i,key:f,ref:s!==void 0?s:null,props:c}}return Tl.Fragment=n,Tl.jsx=r,Tl.jsxs=r,Tl}var s0;function Py(){return s0||(s0=1,Wu.exports=Gy()),Wu.exports}var h=Py(),Zu={exports:{}},Ue={};var c0;function Hy(){if(c0)return Ue;c0=1;var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),y=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function T(O,I,te){this.props=O,this.context=I,this.refs=A,this.updater=te||w}T.prototype.isReactComponent={},T.prototype.setState=function(O,I){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,I,"setState")},T.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=T.prototype;function M(O,I,te){this.props=O,this.context=I,this.refs=A,this.updater=te||w}var Y=M.prototype=new D;Y.constructor=M,E(Y,T.prototype),Y.isPureReactComponent=!0;var V=Array.isArray;function X(){}var B={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function ne(O,I,te){var ie=te.ref;return{$$typeof:t,type:O,key:I,ref:ie!==void 0?ie:null,props:te}}function ce(O,I){return ne(O.type,I,O.props)}function ye(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function Se(O){var I={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(te){return I[te]})}var ee=/\/+/g;function ge(O,I){return typeof O=="object"&&O!==null&&O.key!=null?Se(""+O.key):I.toString(36)}function he(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(X,X):(O.status="pending",O.then(function(I){O.status==="pending"&&(O.status="fulfilled",O.value=I)},function(I){O.status==="pending"&&(O.status="rejected",O.reason=I)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,I,te,ie,ve){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var Q=!1;if(O===null)Q=!0;else switch(me){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(O.$$typeof){case t:case n:Q=!0;break;case g:return Q=O._init,F(Q(O._payload),I,te,ie,ve)}}if(Q)return ve=ve(O),Q=ie===""?"."+ge(O,0):ie,V(ve)?(te="",Q!=null&&(te=Q.replace(ee,"$&/")+"/"),F(ve,I,te,"",function(Lt){return Lt})):ve!=null&&(ye(ve)&&(ve=ce(ve,te+(ve.key==null||O&&O.key===ve.key?"":(""+ve.key).replace(ee,"$&/")+"/")+Q)),I.push(ve)),1;Q=0;var De=ie===""?".":ie+":";if(V(O))for(var _e=0;_e<O.length;_e++)ie=O[_e],me=De+ge(ie,_e),Q+=F(ie,I,te,me,ve);else if(_e=C(O),typeof _e=="function")for(O=_e.call(O),_e=0;!(ie=O.next()).done;)ie=ie.value,me=De+ge(ie,_e++),Q+=F(ie,I,te,me,ve);else if(me==="object"){if(typeof O.then=="function")return F(he(O),I,te,ie,ve);throw I=String(O),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Q}function $(O,I,te){if(O==null)return O;var ie=[],ve=0;return F(O,ie,"","",function(me){return I.call(te,me,ve++)}),ie}function re(O){if(O._status===-1){var I=O._result;I=I(),I.then(function(te){(O._status===0||O._status===-1)&&(O._status=1,O._result=te)},function(te){(O._status===0||O._status===-1)&&(O._status=2,O._result=te)}),O._status===-1&&(O._status=0,O._result=I)}if(O._status===1)return O._result.default;throw O._result}var oe=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},we={map:$,forEach:function(O,I,te){$(O,function(){I.apply(this,arguments)},te)},count:function(O){var I=0;return $(O,function(){I++}),I},toArray:function(O){return $(O,function(I){return I})||[]},only:function(O){if(!ye(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return Ue.Activity=b,Ue.Children=we,Ue.Component=T,Ue.Fragment=r,Ue.Profiler=s,Ue.PureComponent=M,Ue.StrictMode=i,Ue.Suspense=p,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,Ue.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},Ue.cache=function(O){return function(){return O.apply(null,arguments)}},Ue.cacheSignal=function(){return null},Ue.cloneElement=function(O,I,te){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=E({},O.props),ve=O.key;if(I!=null)for(me in I.key!==void 0&&(ve=""+I.key),I)!G.call(I,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&I.ref===void 0||(ie[me]=I[me]);var me=arguments.length-2;if(me===1)ie.children=te;else if(1<me){for(var Q=Array(me),De=0;De<me;De++)Q[De]=arguments[De+2];ie.children=Q}return ne(O.type,ve,ie)},Ue.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},Ue.createElement=function(O,I,te){var ie,ve={},me=null;if(I!=null)for(ie in I.key!==void 0&&(me=""+I.key),I)G.call(I,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ve[ie]=I[ie]);var Q=arguments.length-2;if(Q===1)ve.children=te;else if(1<Q){for(var De=Array(Q),_e=0;_e<Q;_e++)De[_e]=arguments[_e+2];ve.children=De}if(O&&O.defaultProps)for(ie in Q=O.defaultProps,Q)ve[ie]===void 0&&(ve[ie]=Q[ie]);return ne(O,me,ve)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(O){return{$$typeof:m,render:O}},Ue.isValidElement=ye,Ue.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:re}},Ue.memo=function(O,I){return{$$typeof:v,type:O,compare:I===void 0?null:I}},Ue.startTransition=function(O){var I=B.T,te={};B.T=te;try{var ie=O(),ve=B.S;ve!==null&&ve(te,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(X,oe)}catch(me){oe(me)}finally{I!==null&&te.types!==null&&(I.types=te.types),B.T=I}},Ue.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},Ue.use=function(O){return B.H.use(O)},Ue.useActionState=function(O,I,te){return B.H.useActionState(O,I,te)},Ue.useCallback=function(O,I){return B.H.useCallback(O,I)},Ue.useContext=function(O){return B.H.useContext(O)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(O,I){return B.H.useDeferredValue(O,I)},Ue.useEffect=function(O,I){return B.H.useEffect(O,I)},Ue.useEffectEvent=function(O){return B.H.useEffectEvent(O)},Ue.useId=function(){return B.H.useId()},Ue.useImperativeHandle=function(O,I,te){return B.H.useImperativeHandle(O,I,te)},Ue.useInsertionEffect=function(O,I){return B.H.useInsertionEffect(O,I)},Ue.useLayoutEffect=function(O,I){return B.H.useLayoutEffect(O,I)},Ue.useMemo=function(O,I){return B.H.useMemo(O,I)},Ue.useOptimistic=function(O,I){return B.H.useOptimistic(O,I)},Ue.useReducer=function(O,I,te){return B.H.useReducer(O,I,te)},Ue.useRef=function(O){return B.H.useRef(O)},Ue.useState=function(O){return B.H.useState(O)},Ue.useSyncExternalStore=function(O,I,te){return B.H.useSyncExternalStore(O,I,te)},Ue.useTransition=function(){return B.H.useTransition()},Ue.version="19.2.3",Ue}var u0;function Vf(){return u0||(u0=1,Zu.exports=Hy()),Zu.exports}var k=Vf();const Dl=Hf(k);var Qu={exports:{}},wl={},Ku={exports:{}},Ju={};var f0;function Vy(){return f0||(f0=1,(function(t){function n(F,$){var re=F.length;F.push($);e:for(;0<re;){var oe=re-1>>>1,we=F[oe];if(0<s(we,$))F[oe]=$,F[re]=we,re=oe;else break e}}function r(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var $=F[0],re=F.pop();if(re!==$){F[0]=re;e:for(var oe=0,we=F.length,O=we>>>1;oe<O;){var I=2*(oe+1)-1,te=F[I],ie=I+1,ve=F[ie];if(0>s(te,re))ie<we&&0>s(ve,te)?(F[oe]=ve,F[ie]=re,oe=ie):(F[oe]=te,F[I]=re,oe=I);else if(ie<we&&0>s(ve,re))F[oe]=ve,F[ie]=re,oe=ie;else break e}}return $}function s(F,$){var re=F.sortIndex-$.sortIndex;return re!==0?re:F.id-$.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();t.unstable_now=function(){return f.now()-m}}var p=[],v=[],g=1,b=null,y=3,C=!1,w=!1,E=!1,A=!1,T=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function Y(F){for(var $=r(v);$!==null;){if($.callback===null)i(v);else if($.startTime<=F)i(v),$.sortIndex=$.expirationTime,n(p,$);else break;$=r(v)}}function V(F){if(E=!1,Y(F),!w)if(r(p)!==null)w=!0,X||(X=!0,Se());else{var $=r(v);$!==null&&he(V,$.startTime-F)}}var X=!1,B=-1,G=5,ne=-1;function ce(){return A?!0:!(t.unstable_now()-ne<G)}function ye(){if(A=!1,X){var F=t.unstable_now();ne=F;var $=!0;try{e:{w=!1,E&&(E=!1,D(B),B=-1),C=!0;var re=y;try{t:{for(Y(F),b=r(p);b!==null&&!(b.expirationTime>F&&ce());){var oe=b.callback;if(typeof oe=="function"){b.callback=null,y=b.priorityLevel;var we=oe(b.expirationTime<=F);if(F=t.unstable_now(),typeof we=="function"){b.callback=we,Y(F),$=!0;break t}b===r(p)&&i(p),Y(F)}else i(p);b=r(p)}if(b!==null)$=!0;else{var O=r(v);O!==null&&he(V,O.startTime-F),$=!1}}break e}finally{b=null,y=re,C=!1}$=void 0}}finally{$?Se():X=!1}}}var Se;if(typeof M=="function")Se=function(){M(ye)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ge=ee.port2;ee.port1.onmessage=ye,Se=function(){ge.postMessage(null)}}else Se=function(){T(ye,0)};function he(F,$){B=T(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(F){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var re=y;y=$;try{return F()}finally{y=re}},t.unstable_requestPaint=function(){A=!0},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var re=y;y=F;try{return $()}finally{y=re}},t.unstable_scheduleCallback=function(F,$,re){var oe=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?oe+re:oe):re=oe,F){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=re+we,F={id:g++,callback:$,priorityLevel:F,startTime:re,expirationTime:we,sortIndex:-1},re>oe?(F.sortIndex=re,n(v,F),r(p)===null&&F===r(v)&&(E?(D(B),B=-1):E=!0,he(V,re-oe))):(F.sortIndex=we,n(p,F),w||C||(w=!0,X||(X=!0,Se()))),F},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(F){var $=y;return function(){var re=y;y=$;try{return F.apply(this,arguments)}finally{y=re}}}})(Ju)),Ju}var d0;function qy(){return d0||(d0=1,Ku.exports=Vy()),Ku.exports}var $u={exports:{}},Gt={};var p0;function Yy(){if(p0)return Gt;p0=1;var t=Vf();function n(p){var v="https://react.dev/errors/"+p;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)v+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,v,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:p,containerInfo:v,implementation:g}}var f=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,v){if(p==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Gt.createPortal=function(p,v){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(n(299));return c(p,v,null,g)},Gt.flushSync=function(p){var v=f.T,g=i.p;try{if(f.T=null,i.p=2,p)return p()}finally{f.T=v,i.p=g,i.d.f()}},Gt.preconnect=function(p,v){typeof p=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,i.d.C(p,v))},Gt.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Gt.preinit=function(p,v){if(typeof p=="string"&&v&&typeof v.as=="string"){var g=v.as,b=m(g,v.crossOrigin),y=typeof v.integrity=="string"?v.integrity:void 0,C=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;g==="style"?i.d.S(p,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:y,fetchPriority:C}):g==="script"&&i.d.X(p,{crossOrigin:b,integrity:y,fetchPriority:C,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Gt.preinitModule=function(p,v){if(typeof p=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var g=m(v.as,v.crossOrigin);i.d.M(p,{crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&i.d.M(p)},Gt.preload=function(p,v){if(typeof p=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var g=v.as,b=m(g,v.crossOrigin);i.d.L(p,g,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Gt.preloadModule=function(p,v){if(typeof p=="string")if(v){var g=m(v.as,v.crossOrigin);i.d.m(p,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else i.d.m(p)},Gt.requestFormReset=function(p){i.d.r(p)},Gt.unstable_batchedUpdates=function(p,v){return p(v)},Gt.useFormState=function(p,v,g){return f.H.useFormState(p,v,g)},Gt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Gt.version="19.2.3",Gt}var m0;function Xy(){if(m0)return $u.exports;m0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),$u.exports=Yy(),$u.exports}var h0;function Wy(){if(h0)return wl;h0=1;var t=qy(),n=Vf(),r=Xy();function i(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var a=e,l=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(l=a.return),e=a.return;while(e)}return a.tag===3?l:null}function f(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function m(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(i(188))}function v(e){var a=e.alternate;if(!a){if(a=c(e),a===null)throw Error(i(188));return a!==e?null:e}for(var l=e,o=a;;){var u=l.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){l=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===l)return p(u),e;if(d===o)return p(u),a;d=d.sibling}throw Error(i(188))}if(l.return!==o.return)l=u,o=d;else{for(var x=!1,S=u.child;S;){if(S===l){x=!0,l=u,o=d;break}if(S===o){x=!0,o=u,l=d;break}S=S.sibling}if(!x){for(S=d.child;S;){if(S===l){x=!0,l=d,o=u;break}if(S===o){x=!0,o=d,l=u;break}S=S.sibling}if(!x)throw Error(i(189))}}if(l.alternate!==o)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?e:a}function g(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=g(e),a!==null)return a;e=e.sibling}return null}var b=Object.assign,y=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),M=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case T:return"Profiler";case A:return"StrictMode";case V:return"Suspense";case X:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case M:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case Y:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:ge(e.type)||"Memo";case G:a=e._payload,e=e._init;try{return ge(e(a))}catch{}}return null}var he=Array.isArray,F=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},oe=[],we=-1;function O(e){return{current:e}}function I(e){0>we||(e.current=oe[we],oe[we]=null,we--)}function te(e,a){we++,oe[we]=e.current,e.current=a}var ie=O(null),ve=O(null),me=O(null),Q=O(null);function De(e,a){switch(te(me,a),te(ve,e),te(ie,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Dh(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Dh(a),e=Uh(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(ie),te(ie,e)}function _e(){I(ie),I(ve),I(me)}function Lt(e){e.memoizedState!==null&&te(Q,e);var a=ie.current,l=Uh(a,e.type);a!==l&&(te(ve,e),te(ie,l))}function It(e){ve.current===e&&(I(ie),I(ve)),Q.current===e&&(I(Q),bl._currentValue=re)}var Ot,Ea;function qt(e){if(Ot===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Ot=a&&a[1]||"",Ea=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+e+Ea}var Aa=!1;function Ka(e,a){if(!e||Aa)return"";Aa=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(a){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(P){var N=P}Reflect.construct(e,[],K)}else{try{K.call()}catch(P){N=P}e.call(K.prototype)}}else{try{throw Error()}catch(P){N=P}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(P){if(P&&N&&typeof P.stack=="string")return[P.stack,N.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],S=d[1];if(x&&S){var R=x.split(`
`),j=S.split(`
`);for(u=o=0;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(o===R.length||u===j.length)for(o=R.length-1,u=j.length-1;1<=o&&0<=u&&R[o]!==j[u];)u--;for(;1<=o&&0<=u;o--,u--)if(R[o]!==j[u]){if(o!==1||u!==1)do if(o--,u--,0>u||R[o]!==j[u]){var q=`
`+R[o].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=o&&0<=u);break}}}finally{Aa=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?qt(l):""}function da(e,a){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==a&&a!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ka(e.type,!1);case 11:return Ka(e.type.render,!1);case 1:return Ka(e.type,!0);case 31:return qt("Activity");default:return""}}function ka(e){try{var a="",l=null;do a+=da(e,l),l=e,e=e.return;while(e);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Oa=Object.prototype.hasOwnProperty,Yt=t.unstable_scheduleCallback,or=t.unstable_cancelCallback,Ja=t.unstable_shouldYield,Fr=t.unstable_requestPaint,ae=t.unstable_now,Ce=t.unstable_getCurrentPriorityLevel,tt=t.unstable_ImmediatePriority,it=t.unstable_UserBlockingPriority,xt=t.unstable_NormalPriority,$a=t.unstable_LowPriority,pa=t.unstable_IdlePriority,sr=t.log,cr=t.unstable_setDisableYieldValue,Ra=null,bt=null;function _t(e){if(typeof sr=="function"&&cr(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Ra,e)}catch{}}var At=Math.clz32?Math.clz32:Di,ur=Math.log,Dn=Math.LN2;function Di(e){return e>>>=0,e===0?32:31-(ur(e)/Dn|0)|0}var H=256,ze=262144,be=4194304;function Oe(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,a,l){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var S=o&134217727;return S!==0?(o=S&~d,o!==0?u=Oe(o):(x&=S,x!==0?u=Oe(x):l||(l=S&~e,l!==0&&(u=Oe(l))))):(S=o&~d,S!==0?u=Oe(S):x!==0?u=Oe(x):l||(l=o&~e,l!==0&&(u=Oe(l)))),u===0?0:a!==0&&a!==u&&(a&d)===0&&(d=u&-u,l=a&-a,d>=l||d===32&&(l&4194048)!==0)?a:u}function Rt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Ve(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=be;return be<<=1,(be&62914560)===0&&(be=4194304),e}function en(e){for(var a=[],l=0;31>l;l++)a.push(e);return a}function tn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ht(e,a,l,o,u,d){var x=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var S=e.entanglements,R=e.expirationTimes,j=e.hiddenUpdates;for(l=x&~l;0<l;){var q=31-At(l),K=1<<q;S[q]=0,R[q]=-1;var N=j[q];if(N!==null)for(j[q]=null,q=0;q<N.length;q++){var P=N[q];P!==null&&(P.lane&=-536870913)}l&=~K}o!==0&&Ga(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~a))}function Ga(e,a,l){e.pendingLanes|=a,e.suspendedLanes&=~a;var o=31-At(a);e.entangledLanes|=a,e.entanglements[o]=e.entanglements[o]|1073741824|l&261930}function Da(e,a){var l=e.entangledLanes|=a;for(e=e.entanglements;l;){var o=31-At(l),u=1<<o;u&a|e[o]&a&&(e[o]|=a),l&=~u}}function ct(e,a){var l=a&-a;return l=(l&42)!==0?1:Ui(l),(l&(e.suspendedLanes|a))!==0?0:l}function Ui(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Mi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:e0(e.type))}function Li(e,a){var l=$.p;try{return $.p=e,a()}finally{$.p=l}}var Un=Math.random().toString(36).slice(2),zt="__reactFiber$"+Un,Xt="__reactProps$"+Un,Br="__reactContainer$"+Un,Is="__reactEvents$"+Un,Dx="__reactListeners$"+Un,Ux="__reactHandles$"+Un,gd="__reactResources$"+Un,zi="__reactMarker$"+Un;function _s(e){delete e[zt],delete e[Xt],delete e[Is],delete e[Dx],delete e[Ux]}function Ir(e){var a=e[zt];if(a)return a;for(var l=e.parentNode;l;){if(a=l[Br]||l[zt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(e=Bh(e);e!==null;){if(l=e[zt])return l;e=Bh(e)}return a}e=l,l=e.parentNode}return null}function _r(e){if(e=e[zt]||e[Br]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ji(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(i(33))}function Gr(e){var a=e[gd];return a||(a=e[gd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Dt(e){e[zi]=!0}var xd=new Set,bd={};function fr(e,a){Pr(e,a),Pr(e+"Capture",a)}function Pr(e,a){for(bd[e]=a,e=0;e<a.length;e++)xd.add(a[e])}var Mx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yd={},Sd={};function Lx(e){return Oa.call(Sd,e)?!0:Oa.call(yd,e)?!1:Mx.test(e)?Sd[e]=!0:(yd[e]=!0,!1)}function Wl(e,a,l){if(Lx(a))if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var o=a.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+l)}}function Zl(e,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+l)}}function an(e,a,l,o){if(o===null)e.removeAttribute(l);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(a,l,""+o)}}function ma(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function zx(e,a,l){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return u.call(this)},set:function(x){l=""+x,d.call(this,x)}}),Object.defineProperty(e,a,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(x){l=""+x},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Gs(e){if(!e._valueTracker){var a=Cd(e)?"checked":"value";e._valueTracker=zx(e,a,""+e[a])}}function Td(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var l=a.getValue(),o="";return e&&(o=Cd(e)?e.checked?"true":"false":e.value),e=o,e!==l?(a.setValue(e),!0):!1}function Ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jx=/[\n"\\]/g;function ha(e){return e.replace(jx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ps(e,a,l,o,u,d,x,S){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),a!=null?x==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ma(a)):e.value!==""+ma(a)&&(e.value=""+ma(a)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),a!=null?Hs(e,x,ma(a)):l!=null?Hs(e,x,ma(l)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+ma(S):e.removeAttribute("name")}function wd(e,a,l,o,u,d,x,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),a!=null||l!=null){if(!(d!=="submit"&&d!=="reset"||a!=null)){Gs(e);return}l=l!=null?""+ma(l):"",a=a!=null?""+ma(a):l,S||a===e.value||(e.value=a),e.defaultValue=a}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=S?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Gs(e)}function Hs(e,a,l){a==="number"&&Ql(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Hr(e,a,l,o){if(e=e.options,a){a={};for(var u=0;u<l.length;u++)a["$"+l[u]]=!0;for(l=0;l<e.length;l++)u=a.hasOwnProperty("$"+e[l].value),e[l].selected!==u&&(e[l].selected=u),u&&o&&(e[l].defaultSelected=!0)}else{for(l=""+ma(l),a=null,u=0;u<e.length;u++){if(e[u].value===l){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}a!==null||e[u].disabled||(a=e[u])}a!==null&&(a.selected=!0)}}function Ed(e,a,l){if(a!=null&&(a=""+ma(a),a!==e.value&&(e.value=a),l==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=l!=null?""+ma(l):""}function Ad(e,a,l,o){if(a==null){if(o!=null){if(l!=null)throw Error(i(92));if(he(o)){if(1<o.length)throw Error(i(93));o=o[0]}l=o}l==null&&(l=""),a=l}l=ma(a),e.defaultValue=l,o=e.textContent,o===l&&o!==""&&o!==null&&(e.value=o),Gs(e)}function Vr(e,a){if(a){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=a;return}}e.textContent=a}var Fx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(e,a,l){var o=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?o?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":o?e.setProperty(a,l):typeof l!="number"||l===0||Fx.has(a)?a==="float"?e.cssFloat=l:e[a]=(""+l).trim():e[a]=l+"px"}function Od(e,a,l){if(a!=null&&typeof a!="object")throw Error(i(62));if(e=e.style,l!=null){for(var o in l)!l.hasOwnProperty(o)||a!=null&&a.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in a)o=a[u],a.hasOwnProperty(u)&&l[u]!==o&&kd(e,u,o)}else for(var d in a)a.hasOwnProperty(d)&&kd(e,d,a[d])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var qs=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qr=null,Yr=null;function Rd(e){var a=_r(e);if(a&&(e=a.stateNode)){var l=e[Xt]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ps(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ha(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var o=l[a];if(o!==e&&o.form===e.form){var u=o[Xt]||null;if(!u)throw Error(i(90));Ps(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<l.length;a++)o=l[a],o.form===e.form&&Td(o)}break e;case"textarea":Ed(e,l.value,l.defaultValue);break e;case"select":a=l.value,a!=null&&Hr(e,!!l.multiple,a,!1)}}}var Xs=!1;function Dd(e,a,l){if(Xs)return e(a,l);Xs=!0;try{var o=e(a);return o}finally{if(Xs=!1,(qr!==null||Yr!==null)&&(Io(),qr&&(a=qr,e=Yr,Yr=qr=null,Rd(a),e)))for(a=0;a<e.length;a++)Rd(e[a])}}function Fi(e,a){var l=e.stateNode;if(l===null)return null;var o=l[Xt]||null;if(o===null)return null;l=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(i(231,a,typeof l));return l}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ws=!1;if(rn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Ws=!1}var Mn=null,Zs=null,Jl=null;function Ud(){if(Jl)return Jl;var e,a=Zs,l=a.length,o,u="value"in Mn?Mn.value:Mn.textContent,d=u.length;for(e=0;e<l&&a[e]===u[e];e++);var x=l-e;for(o=1;o<=x&&a[l-o]===u[d-o];o++);return Jl=u.slice(e,1<o?1-o:void 0)}function $l(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function eo(){return!0}function Md(){return!1}function Wt(e){function a(l,o,u,d,x){this._reactName=l,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(l=e[S],this[S]=l?l(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?eo:Md,this.isPropagationStopped=Md,this}return b(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),a}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=Wt(dr),Bi=b({},dr,{view:0,detail:0}),Ix=Wt(Bi),Qs,Ks,Ii,ao=b({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(Qs=e.screenX-Ii.screenX,Ks=e.screenY-Ii.screenY):Ks=Qs=0,Ii=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),Ld=Wt(ao),_x=b({},ao,{dataTransfer:0}),Gx=Wt(_x),Px=b({},Bi,{relatedTarget:0}),Js=Wt(Px),Hx=b({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=Wt(Hx),qx=b({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yx=Wt(qx),Xx=b({},dr,{data:0}),zd=Wt(Xx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Qx[e])?!!a[e]:!1}function $s(){return Kx}var Jx=b({},Bi,{key:function(e){if(e.key){var a=Wx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$x=Wt(Jx),eb=b({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Wt(eb),tb=b({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),ab=Wt(tb),nb=b({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rb=Wt(nb),ib=b({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lb=Wt(ib),ob=b({},dr,{newState:0,oldState:0}),sb=Wt(ob),cb=[9,13,27,32],ec=rn&&"CompositionEvent"in window,_i=null;rn&&"documentMode"in document&&(_i=document.documentMode);var ub=rn&&"TextEvent"in window&&!_i,Fd=rn&&(!ec||_i&&8<_i&&11>=_i),Nd=" ",Bd=!1;function Id(e,a){switch(e){case"keyup":return cb.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xr=!1;function fb(e,a){switch(e){case"compositionend":return _d(a);case"keypress":return a.which!==32?null:(Bd=!0,Nd);case"textInput":return e=a.data,e===Nd&&Bd?null:e;default:return null}}function db(e,a){if(Xr)return e==="compositionend"||!ec&&Id(e,a)?(e=Ud(),Jl=Zs=Mn=null,Xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fd&&a.locale!=="ko"?null:a.data;default:return null}}var pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!pb[e.type]:a==="textarea"}function Pd(e,a,l,o){qr?Yr?Yr.push(o):Yr=[o]:qr=o,a=Yo(a,"onChange"),0<a.length&&(l=new to("onChange","change",null,l,o),e.push({event:l,listeners:a}))}var Gi=null,Pi=null;function mb(e){wh(e,0)}function no(e){var a=ji(e);if(Td(a))return e}function Hd(e,a){if(e==="change")return a}var Vd=!1;if(rn){var tc;if(rn){var ac="oninput"in document;if(!ac){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),ac=typeof qd.oninput=="function"}tc=ac}else tc=!1;Vd=tc&&(!document.documentMode||9<document.documentMode)}function Yd(){Gi&&(Gi.detachEvent("onpropertychange",Xd),Pi=Gi=null)}function Xd(e){if(e.propertyName==="value"&&no(Pi)){var a=[];Pd(a,Pi,e,Ys(e)),Dd(mb,a)}}function hb(e,a,l){e==="focusin"?(Yd(),Gi=a,Pi=l,Gi.attachEvent("onpropertychange",Xd)):e==="focusout"&&Yd()}function vb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Pi)}function gb(e,a){if(e==="click")return no(a)}function xb(e,a){if(e==="input"||e==="change")return no(a)}function bb(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var aa=typeof Object.is=="function"?Object.is:bb;function Hi(e,a){if(aa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var l=Object.keys(e),o=Object.keys(a);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var u=l[o];if(!Oa.call(a,u)||!aa(e[u],a[u]))return!1}return!0}function Wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zd(e,a){var l=Wd(e);e=0;for(var o;l;){if(l.nodeType===3){if(o=e+l.textContent.length,e<=a&&o>=a)return{node:l,offset:a-e};e=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Wd(l)}}function Qd(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Qd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ql(e.document);a instanceof e.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)e=a.contentWindow;else break;a=Ql(e.document)}return a}function nc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var yb=rn&&"documentMode"in document&&11>=document.documentMode,Wr=null,rc=null,Vi=null,ic=!1;function Jd(e,a,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ic||Wr==null||Wr!==Ql(o)||(o=Wr,"selectionStart"in o&&nc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vi&&Hi(Vi,o)||(Vi=o,o=Yo(rc,"onSelect"),0<o.length&&(a=new to("onSelect","select",null,a,l),e.push({event:a,listeners:o}),a.target=Wr)))}function pr(e,a){var l={};return l[e.toLowerCase()]=a.toLowerCase(),l["Webkit"+e]="webkit"+a,l["Moz"+e]="moz"+a,l}var Zr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},lc={},$d={};rn&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function mr(e){if(lc[e])return lc[e];if(!Zr[e])return e;var a=Zr[e],l;for(l in a)if(a.hasOwnProperty(l)&&l in $d)return lc[e]=a[l];return e}var ep=mr("animationend"),tp=mr("animationiteration"),ap=mr("animationstart"),Sb=mr("transitionrun"),Cb=mr("transitionstart"),Tb=mr("transitioncancel"),np=mr("transitionend"),rp=new Map,oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oc.push("scrollEnd");function Ua(e,a){rp.set(e,a),fr(a,[e])}var ro=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},va=[],Qr=0,sc=0;function io(){for(var e=Qr,a=sc=Qr=0;a<e;){var l=va[a];va[a++]=null;var o=va[a];va[a++]=null;var u=va[a];va[a++]=null;var d=va[a];if(va[a++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&ip(l,u,d)}}function lo(e,a,l,o){va[Qr++]=e,va[Qr++]=a,va[Qr++]=l,va[Qr++]=o,sc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function cc(e,a,l,o){return lo(e,a,l,o),oo(e)}function hr(e,a){return lo(e,null,null,a),oo(e)}function ip(e,a,l){e.lanes|=l;var o=e.alternate;o!==null&&(o.lanes|=l);for(var u=!1,d=e.return;d!==null;)d.childLanes|=l,o=d.alternate,o!==null&&(o.childLanes|=l),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&a!==null&&(u=31-At(l),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[a]:o.push(a),a.lane=l|536870912),d):null}function oo(e){if(50<dl)throw dl=0,xu=null,Error(i(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Kr={};function wb(e,a,l,o){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function na(e,a,l,o){return new wb(e,a,l,o)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ln(e,a){var l=e.alternate;return l===null?(l=na(e.tag,a,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=a,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,a=e.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function lp(e,a){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,a=l.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function so(e,a,l,o,u,d){var x=0;if(o=e,typeof e=="function")uc(e)&&(x=1);else if(typeof e=="string")x=Ry(e,l,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=na(31,l,a,u),e.elementType=ne,e.lanes=d,e;case E:return vr(l.children,u,d,a);case A:x=8,u|=24;break;case T:return e=na(12,l,a,u|2),e.elementType=T,e.lanes=d,e;case V:return e=na(13,l,a,u),e.elementType=V,e.lanes=d,e;case X:return e=na(19,l,a,u),e.elementType=X,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:x=10;break e;case D:x=9;break e;case Y:x=11;break e;case B:x=14;break e;case G:x=16,o=null;break e}x=29,l=Error(i(130,e===null?"null":typeof e,"")),o=null}return a=na(x,l,a,u),a.elementType=e,a.type=o,a.lanes=d,a}function vr(e,a,l,o){return e=na(7,e,o,a),e.lanes=l,e}function fc(e,a,l){return e=na(6,e,null,a),e.lanes=l,e}function op(e){var a=na(18,null,null,0);return a.stateNode=e,a}function dc(e,a,l){return a=na(4,e.children!==null?e.children:[],e.key,a),a.lanes=l,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var sp=new WeakMap;function ga(e,a){if(typeof e=="object"&&e!==null){var l=sp.get(e);return l!==void 0?l:(a={value:e,source:a,stack:ka(a)},sp.set(e,a),a)}return{value:e,source:a,stack:ka(a)}}var Jr=[],$r=0,co=null,qi=0,xa=[],ba=0,Ln=null,Pa=1,Ha="";function on(e,a){Jr[$r++]=qi,Jr[$r++]=co,co=e,qi=a}function cp(e,a,l){xa[ba++]=Pa,xa[ba++]=Ha,xa[ba++]=Ln,Ln=e;var o=Pa;e=Ha;var u=32-At(o)-1;o&=~(1<<u),l+=1;var d=32-At(a)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Pa=1<<32-At(a)+u|l<<u|o,Ha=d+e}else Pa=1<<d|l<<u|o,Ha=e}function pc(e){e.return!==null&&(on(e,1),cp(e,1,0))}function mc(e){for(;e===co;)co=Jr[--$r],Jr[$r]=null,qi=Jr[--$r],Jr[$r]=null;for(;e===Ln;)Ln=xa[--ba],xa[ba]=null,Ha=xa[--ba],xa[ba]=null,Pa=xa[--ba],xa[ba]=null}function up(e,a){xa[ba++]=Pa,xa[ba++]=Ha,xa[ba++]=Ln,Pa=a.id,Ha=a.overflow,Ln=e}var jt=null,at=null,Ie=!1,zn=null,ya=!1,hc=Error(i(519));function jn(e){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(ga(a,e)),hc}function fp(e){var a=e.stateNode,l=e.type,o=e.memoizedProps;switch(a[zt]=e,a[Xt]=o,l){case"dialog":Fe("cancel",a),Fe("close",a);break;case"iframe":case"object":case"embed":Fe("load",a);break;case"video":case"audio":for(l=0;l<ml.length;l++)Fe(ml[l],a);break;case"source":Fe("error",a);break;case"img":case"image":case"link":Fe("error",a),Fe("load",a);break;case"details":Fe("toggle",a);break;case"input":Fe("invalid",a),wd(a,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Fe("invalid",a);break;case"textarea":Fe("invalid",a),Ad(a,o.value,o.defaultValue,o.children)}l=o.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||o.suppressHydrationWarning===!0||Oh(a.textContent,l)?(o.popover!=null&&(Fe("beforetoggle",a),Fe("toggle",a)),o.onScroll!=null&&Fe("scroll",a),o.onScrollEnd!=null&&Fe("scrollend",a),o.onClick!=null&&(a.onclick=nn),a=!0):a=!1,a||jn(e,!0)}function dp(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:jt=jt.return}}function ei(e){if(e!==jt)return!1;if(!Ie)return dp(e),Ie=!0,!1;var a=e.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Lu(e.type,e.memoizedProps)),l=!l),l&&at&&jn(e),dp(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));at=Nh(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));at=Nh(e)}else a===27?(a=at,Zn(e.type)?(e=Bu,Bu=null,at=e):at=a):at=jt?Ca(e.stateNode.nextSibling):null;return!0}function gr(){at=jt=null,Ie=!1}function vc(){var e=zn;return e!==null&&(Jt===null?Jt=e:Jt.push.apply(Jt,e),zn=null),e}function Yi(e){zn===null?zn=[e]:zn.push(e)}var gc=O(null),xr=null,sn=null;function Fn(e,a,l){te(gc,a._currentValue),a._currentValue=l}function cn(e){e._currentValue=gc.current,I(gc)}function xc(e,a,l){for(;e!==null;){var o=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),e===l)break;e=e.return}}function bc(e,a,l,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=u;for(var R=0;R<a.length;R++)if(S.context===a[R]){d.lanes|=l,S=d.alternate,S!==null&&(S.lanes|=l),xc(d.return,l,e),o||(x=null);break e}d=S.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(i(341));x.lanes|=l,d=x.alternate,d!==null&&(d.lanes|=l),xc(x,l,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ti(e,a,l,o){e=null;for(var u=a,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var S=u.type;aa(u.pendingProps.value,x.value)||(e!==null?e.push(S):e=[S])}}else if(u===Q.current){if(x=u.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}u=u.return}e!==null&&bc(a,e,l,o),a.flags|=262144}function uo(e){for(e=e.firstContext;e!==null;){if(!aa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function br(e){xr=e,sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ft(e){return pp(xr,e)}function fo(e,a){return xr===null&&br(e),pp(e,a)}function pp(e,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},sn===null){if(e===null)throw Error(i(308));sn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else sn=sn.next=a;return l}var Eb=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(l,o){e.push(o)}};this.abort=function(){a.aborted=!0,e.forEach(function(l){return l()})}},Ab=t.unstable_scheduleCallback,kb=t.unstable_NormalPriority,St={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yc(){return{controller:new Eb,data:new Map,refCount:0}}function Xi(e){e.refCount--,e.refCount===0&&Ab(kb,function(){e.controller.abort()})}var Wi=null,Sc=0,ai=0,ni=null;function Ob(e,a){if(Wi===null){var l=Wi=[];Sc=0,ai=wu(),ni={status:"pending",value:void 0,then:function(o){l.push(o)}}}return Sc++,a.then(mp,mp),a}function mp(){if(--Sc===0&&Wi!==null){ni!==null&&(ni.status="fulfilled");var e=Wi;Wi=null,ai=0,ni=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Rb(e,a){var l=[],o={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return e.then(function(){o.status="fulfilled",o.value=a;for(var u=0;u<l.length;u++)(0,l[u])(a)},function(u){for(o.status="rejected",o.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),o}var hp=F.S;F.S=function(e,a){Jm=ae(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ob(e,a),hp!==null&&hp(e,a)};var yr=O(null);function Cc(){var e=yr.current;return e!==null?e:$e.pooledCache}function po(e,a){a===null?te(yr,yr.current):te(yr,a.pool)}function vp(){var e=Cc();return e===null?null:{parent:St._currentValue,pool:e}}var ri=Error(i(460)),Tc=Error(i(474)),mo=Error(i(542)),ho={then:function(){}};function gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xp(e,a,l){switch(l=e[l],l===void 0?e.push(a):l!==a&&(a.then(nn,nn),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yp(e),e;default:if(typeof a.status=="string")a.then(nn,nn);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=a,e.status="pending",e.then(function(o){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=o}},function(o){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=o}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yp(e),e}throw Cr=a,ri}}function Sr(e){try{var a=e._init;return a(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Cr=l,ri):l}}var Cr=null;function bp(){if(Cr===null)throw Error(i(459));var e=Cr;return Cr=null,e}function yp(e){if(e===ri||e===mo)throw Error(i(483))}var ii=null,Zi=0;function vo(e){var a=Zi;return Zi+=1,ii===null&&(ii=[]),xp(ii,e,a)}function Qi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function go(e,a){throw a.$$typeof===y?Error(i(525)):(e=Object.prototype.toString.call(a),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Sp(e){function a(L,U){if(e){var z=L.deletions;z===null?(L.deletions=[U],L.flags|=16):z.push(U)}}function l(L,U){if(!e)return null;for(;U!==null;)a(L,U),U=U.sibling;return null}function o(L){for(var U=new Map;L!==null;)L.key!==null?U.set(L.key,L):U.set(L.index,L),L=L.sibling;return U}function u(L,U){return L=ln(L,U),L.index=0,L.sibling=null,L}function d(L,U,z){return L.index=z,e?(z=L.alternate,z!==null?(z=z.index,z<U?(L.flags|=67108866,U):z):(L.flags|=67108866,U)):(L.flags|=1048576,U)}function x(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function S(L,U,z,W){return U===null||U.tag!==6?(U=fc(z,L.mode,W),U.return=L,U):(U=u(U,z),U.return=L,U)}function R(L,U,z,W){var xe=z.type;return xe===E?q(L,U,z.props.children,W,z.key):U!==null&&(U.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===G&&Sr(xe)===U.type)?(U=u(U,z.props),Qi(U,z),U.return=L,U):(U=so(z.type,z.key,z.props,null,L.mode,W),Qi(U,z),U.return=L,U)}function j(L,U,z,W){return U===null||U.tag!==4||U.stateNode.containerInfo!==z.containerInfo||U.stateNode.implementation!==z.implementation?(U=dc(z,L.mode,W),U.return=L,U):(U=u(U,z.children||[]),U.return=L,U)}function q(L,U,z,W,xe){return U===null||U.tag!==7?(U=vr(z,L.mode,W,xe),U.return=L,U):(U=u(U,z),U.return=L,U)}function K(L,U,z){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=fc(""+U,L.mode,z),U.return=L,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return z=so(U.type,U.key,U.props,null,L.mode,z),Qi(z,U),z.return=L,z;case w:return U=dc(U,L.mode,z),U.return=L,U;case G:return U=Sr(U),K(L,U,z)}if(he(U)||Se(U))return U=vr(U,L.mode,z,null),U.return=L,U;if(typeof U.then=="function")return K(L,vo(U),z);if(U.$$typeof===M)return K(L,fo(L,U),z);go(L,U)}return null}function N(L,U,z,W){var xe=U!==null?U.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return xe!==null?null:S(L,U,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return z.key===xe?R(L,U,z,W):null;case w:return z.key===xe?j(L,U,z,W):null;case G:return z=Sr(z),N(L,U,z,W)}if(he(z)||Se(z))return xe!==null?null:q(L,U,z,W,null);if(typeof z.then=="function")return N(L,U,vo(z),W);if(z.$$typeof===M)return N(L,U,fo(L,z),W);go(L,z)}return null}function P(L,U,z,W,xe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(z)||null,S(U,L,""+W,xe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case C:return L=L.get(W.key===null?z:W.key)||null,R(U,L,W,xe);case w:return L=L.get(W.key===null?z:W.key)||null,j(U,L,W,xe);case G:return W=Sr(W),P(L,U,z,W,xe)}if(he(W)||Se(W))return L=L.get(z)||null,q(U,L,W,xe,null);if(typeof W.then=="function")return P(L,U,z,vo(W),xe);if(W.$$typeof===M)return P(L,U,z,fo(U,W),xe);go(U,W)}return null}function ue(L,U,z,W){for(var xe=null,Pe=null,pe=U,Le=U=0,Be=null;pe!==null&&Le<z.length;Le++){pe.index>Le?(Be=pe,pe=null):Be=pe.sibling;var He=N(L,pe,z[Le],W);if(He===null){pe===null&&(pe=Be);break}e&&pe&&He.alternate===null&&a(L,pe),U=d(He,U,Le),Pe===null?xe=He:Pe.sibling=He,Pe=He,pe=Be}if(Le===z.length)return l(L,pe),Ie&&on(L,Le),xe;if(pe===null){for(;Le<z.length;Le++)pe=K(L,z[Le],W),pe!==null&&(U=d(pe,U,Le),Pe===null?xe=pe:Pe.sibling=pe,Pe=pe);return Ie&&on(L,Le),xe}for(pe=o(pe);Le<z.length;Le++)Be=P(pe,L,Le,z[Le],W),Be!==null&&(e&&Be.alternate!==null&&pe.delete(Be.key===null?Le:Be.key),U=d(Be,U,Le),Pe===null?xe=Be:Pe.sibling=Be,Pe=Be);return e&&pe.forEach(function(er){return a(L,er)}),Ie&&on(L,Le),xe}function Ee(L,U,z,W){if(z==null)throw Error(i(151));for(var xe=null,Pe=null,pe=U,Le=U=0,Be=null,He=z.next();pe!==null&&!He.done;Le++,He=z.next()){pe.index>Le?(Be=pe,pe=null):Be=pe.sibling;var er=N(L,pe,He.value,W);if(er===null){pe===null&&(pe=Be);break}e&&pe&&er.alternate===null&&a(L,pe),U=d(er,U,Le),Pe===null?xe=er:Pe.sibling=er,Pe=er,pe=Be}if(He.done)return l(L,pe),Ie&&on(L,Le),xe;if(pe===null){for(;!He.done;Le++,He=z.next())He=K(L,He.value,W),He!==null&&(U=d(He,U,Le),Pe===null?xe=He:Pe.sibling=He,Pe=He);return Ie&&on(L,Le),xe}for(pe=o(pe);!He.done;Le++,He=z.next())He=P(pe,L,Le,He.value,W),He!==null&&(e&&He.alternate!==null&&pe.delete(He.key===null?Le:He.key),U=d(He,U,Le),Pe===null?xe=He:Pe.sibling=He,Pe=He);return e&&pe.forEach(function(_y){return a(L,_y)}),Ie&&on(L,Le),xe}function Ke(L,U,z,W){if(typeof z=="object"&&z!==null&&z.type===E&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case C:e:{for(var xe=z.key;U!==null;){if(U.key===xe){if(xe=z.type,xe===E){if(U.tag===7){l(L,U.sibling),W=u(U,z.props.children),W.return=L,L=W;break e}}else if(U.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===G&&Sr(xe)===U.type){l(L,U.sibling),W=u(U,z.props),Qi(W,z),W.return=L,L=W;break e}l(L,U);break}else a(L,U);U=U.sibling}z.type===E?(W=vr(z.props.children,L.mode,W,z.key),W.return=L,L=W):(W=so(z.type,z.key,z.props,null,L.mode,W),Qi(W,z),W.return=L,L=W)}return x(L);case w:e:{for(xe=z.key;U!==null;){if(U.key===xe)if(U.tag===4&&U.stateNode.containerInfo===z.containerInfo&&U.stateNode.implementation===z.implementation){l(L,U.sibling),W=u(U,z.children||[]),W.return=L,L=W;break e}else{l(L,U);break}else a(L,U);U=U.sibling}W=dc(z,L.mode,W),W.return=L,L=W}return x(L);case G:return z=Sr(z),Ke(L,U,z,W)}if(he(z))return ue(L,U,z,W);if(Se(z)){if(xe=Se(z),typeof xe!="function")throw Error(i(150));return z=xe.call(z),Ee(L,U,z,W)}if(typeof z.then=="function")return Ke(L,U,vo(z),W);if(z.$$typeof===M)return Ke(L,U,fo(L,z),W);go(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,U!==null&&U.tag===6?(l(L,U.sibling),W=u(U,z),W.return=L,L=W):(l(L,U),W=fc(z,L.mode,W),W.return=L,L=W),x(L)):l(L,U)}return function(L,U,z,W){try{Zi=0;var xe=Ke(L,U,z,W);return ii=null,xe}catch(pe){if(pe===ri||pe===mo)throw pe;var Pe=na(29,pe,null,L.mode);return Pe.lanes=W,Pe.return=L,Pe}}}var Tr=Sp(!0),Cp=Sp(!1),Nn=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ec(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function In(e,a,l){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(qe&2)!==0){var u=o.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),o.pending=a,a=oo(e),ip(e,null,l),a}return lo(e,o,a,l),oo(e)}function Ki(e,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var o=a.lanes;o&=e.pendingLanes,l|=o,a.lanes=l,Da(e,l)}}function Ac(e,a){var l=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var u=null,d=null;if(l=l.firstBaseUpdate,l!==null){do{var x={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,l=l.next}while(l!==null);d===null?u=d=a:d=d.next=a}else u=d=a;l={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=a:e.next=a,l.lastBaseUpdate=a}var kc=!1;function Ji(){if(kc){var e=ni;if(e!==null)throw e}}function $i(e,a,l,o){kc=!1;var u=e.updateQueue;Nn=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var R=S,j=R.next;R.next=null,x===null?d=j:x.next=j,x=R;var q=e.alternate;q!==null&&(q=q.updateQueue,S=q.lastBaseUpdate,S!==x&&(S===null?q.firstBaseUpdate=j:S.next=j,q.lastBaseUpdate=R))}if(d!==null){var K=u.baseState;x=0,q=j=R=null,S=d;do{var N=S.lane&-536870913,P=N!==S.lane;if(P?(Ne&N)===N:(o&N)===N){N!==0&&N===ai&&(kc=!0),q!==null&&(q=q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ue=e,Ee=S;N=a;var Ke=l;switch(Ee.tag){case 1:if(ue=Ee.payload,typeof ue=="function"){K=ue.call(Ke,K,N);break e}K=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=Ee.payload,N=typeof ue=="function"?ue.call(Ke,K,N):ue,N==null)break e;K=b({},K,N);break e;case 2:Nn=!0}}N=S.callback,N!==null&&(e.flags|=64,P&&(e.flags|=8192),P=u.callbacks,P===null?u.callbacks=[N]:P.push(N))}else P={lane:N,tag:S.tag,payload:S.payload,callback:S.callback,next:null},q===null?(j=q=P,R=K):q=q.next=P,x|=N;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;P=S,S=P.next,P.next=null,u.lastBaseUpdate=P,u.shared.pending=null}}while(!0);q===null&&(R=K),u.baseState=R,u.firstBaseUpdate=j,u.lastBaseUpdate=q,d===null&&(u.shared.lanes=0),Vn|=x,e.lanes=x,e.memoizedState=K}}function Tp(e,a){if(typeof e!="function")throw Error(i(191,e));e.call(a)}function wp(e,a){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Tp(l[e],a)}var li=O(null),xo=O(0);function Ep(e,a){e=xn,te(xo,e),te(li,a),xn=e|a.baseLanes}function Oc(){te(xo,xn),te(li,li.current)}function Rc(){xn=xo.current,I(li),I(xo)}var ra=O(null),Sa=null;function _n(e){var a=e.alternate;te(pt,pt.current&1),te(ra,e),Sa===null&&(a===null||li.current!==null||a.memoizedState!==null)&&(Sa=e)}function Dc(e){te(pt,pt.current),te(ra,e),Sa===null&&(Sa=e)}function Ap(e){e.tag===22?(te(pt,pt.current),te(ra,e),Sa===null&&(Sa=e)):Gn()}function Gn(){te(pt,pt.current),te(ra,ra.current)}function ia(e){I(ra),Sa===e&&(Sa=null),I(pt)}var pt=O(0);function bo(e){for(var a=e;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Fu(l)||Nu(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var un=0,Me=null,Ze=null,Ct=null,yo=!1,oi=!1,wr=!1,So=0,el=0,si=null,Db=0;function ut(){throw Error(i(321))}function Uc(e,a){if(a===null)return!1;for(var l=0;l<a.length&&l<e.length;l++)if(!aa(e[l],a[l]))return!1;return!0}function Mc(e,a,l,o,u,d){return un=d,Me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,F.H=e===null||e.memoizedState===null?cm:Xc,wr=!1,d=l(o,u),wr=!1,oi&&(d=Op(a,l,o,u)),kp(e),d}function kp(e){F.H=nl;var a=Ze!==null&&Ze.next!==null;if(un=0,Ct=Ze=Me=null,yo=!1,el=0,si=null,a)throw Error(i(300));e===null||Tt||(e=e.dependencies,e!==null&&uo(e)&&(Tt=!0))}function Op(e,a,l,o){Me=e;var u=0;do{if(oi&&(si=null),el=0,oi=!1,25<=u)throw Error(i(301));if(u+=1,Ct=Ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=um,d=a(l,o)}while(oi);return d}function Ub(){var e=F.H,a=e.useState()[0];return a=typeof a.then=="function"?tl(a):a,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Me.flags|=1024),a}function Lc(){var e=So!==0;return So=0,e}function zc(e,a,l){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~l}function jc(e){if(yo){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}yo=!1}un=0,Ct=Ze=Me=null,oi=!1,el=So=0,si=null}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Me.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function mt(){if(Ze===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var a=Ct===null?Me.memoizedState:Ct.next;if(a!==null)Ct=a,Ze=e;else{if(e===null)throw Me.alternate===null?Error(i(467)):Error(i(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},Ct===null?Me.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var a=el;return el+=1,si===null&&(si=[]),e=xp(si,e,a),a=Me,(Ct===null?a.memoizedState:Ct.next)===null&&(a=a.alternate,F.H=a===null||a.memoizedState===null?cm:Xc),e}function To(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===M)return Ft(e)}throw Error(i(438,String(e)))}function Fc(e){var a=null,l=Me.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var o=Me.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(a={data:o.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Co(),Me.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(e),o=0;o<e;o++)l[o]=ce;return a.index++,l}function fn(e,a){return typeof a=="function"?a(e):a}function wo(e){var a=mt();return Nc(a,Ze,e)}function Nc(e,a,l){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=l;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}a.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{a=u.next;var S=x=null,R=null,j=a,q=!1;do{var K=j.lane&-536870913;if(K!==j.lane?(Ne&K)===K:(un&K)===K){var N=j.revertLane;if(N===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),K===ai&&(q=!0);else if((un&N)===N){j=j.next,N===ai&&(q=!0);continue}else K={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},R===null?(S=R=K,x=d):R=R.next=K,Me.lanes|=N,Vn|=N;K=j.action,wr&&l(d,K),d=j.hasEagerState?j.eagerState:l(d,K)}else N={lane:K,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},R===null?(S=R=N,x=d):R=R.next=N,Me.lanes|=K,Vn|=K;j=j.next}while(j!==null&&j!==a);if(R===null?x=d:R.next=S,!aa(d,e.memoizedState)&&(Tt=!0,q&&(l=ni,l!==null)))throw l;e.memoizedState=d,e.baseState=x,e.baseQueue=R,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Bc(e){var a=mt(),l=a.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=e;var o=l.dispatch,u=l.pending,d=a.memoizedState;if(u!==null){l.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);aa(d,a.memoizedState)||(Tt=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),l.lastRenderedState=d}return[d,o]}function Rp(e,a,l){var o=Me,u=mt(),d=Ie;if(d){if(l===void 0)throw Error(i(407));l=l()}else l=a();var x=!aa((Ze||u).memoizedState,l);if(x&&(u.memoizedState=l,Tt=!0),u=u.queue,Gc(Mp.bind(null,o,u,e),[e]),u.getSnapshot!==a||x||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,ci(9,{destroy:void 0},Up.bind(null,o,u,l,a),null),$e===null)throw Error(i(349));d||(un&127)!==0||Dp(o,a,l)}return l}function Dp(e,a,l){e.flags|=16384,e={getSnapshot:a,value:l},a=Me.updateQueue,a===null?(a=Co(),Me.updateQueue=a,a.stores=[e]):(l=a.stores,l===null?a.stores=[e]:l.push(e))}function Up(e,a,l,o){a.value=l,a.getSnapshot=o,Lp(a)&&zp(e)}function Mp(e,a,l){return l(function(){Lp(a)&&zp(e)})}function Lp(e){var a=e.getSnapshot;e=e.value;try{var l=a();return!aa(e,l)}catch{return!0}}function zp(e){var a=hr(e,2);a!==null&&$t(a,e,2)}function Ic(e){var a=Vt();if(typeof e=="function"){var l=e;if(e=l(),wr){_t(!0);try{l()}finally{_t(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},a}function jp(e,a,l,o){return e.baseState=l,Nc(e,Ze,typeof o=="function"?o:fn)}function Mb(e,a,l,o,u){if(ko(e))throw Error(i(485));if(e=a.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};F.T!==null?l(!0):d.isTransition=!1,o(d),l=a.pending,l===null?(d.next=a.pending=d,Fp(a,d)):(d.next=l.next,a.pending=l.next=d)}}function Fp(e,a){var l=a.action,o=a.payload,u=e.state;if(a.isTransition){var d=F.T,x={};F.T=x;try{var S=l(u,o),R=F.S;R!==null&&R(x,S),Np(e,a,S)}catch(j){_c(e,a,j)}finally{d!==null&&x.types!==null&&(d.types=x.types),F.T=d}}else try{d=l(u,o),Np(e,a,d)}catch(j){_c(e,a,j)}}function Np(e,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(o){Bp(e,a,o)},function(o){return _c(e,a,o)}):Bp(e,a,l)}function Bp(e,a,l){a.status="fulfilled",a.value=l,Ip(a),e.state=l,a=e.pending,a!==null&&(l=a.next,l===a?e.pending=null:(l=l.next,a.next=l,Fp(e,l)))}function _c(e,a,l){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do a.status="rejected",a.reason=l,Ip(a),a=a.next;while(a!==o)}e.action=null}function Ip(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function _p(e,a){return a}function Gp(e,a){if(Ie){var l=$e.formState;if(l!==null){e:{var o=Me;if(Ie){if(at){t:{for(var u=at,d=ya;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ca(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){at=Ca(u.nextSibling),o=u.data==="F!";break e}}jn(o)}o=!1}o&&(a=l[0])}}return l=Vt(),l.memoizedState=l.baseState=a,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_p,lastRenderedState:a},l.queue=o,l=lm.bind(null,Me,o),o.dispatch=l,o=Ic(!1),d=Yc.bind(null,Me,!1,o.queue),o=Vt(),u={state:a,dispatch:null,action:e,pending:null},o.queue=u,l=Mb.bind(null,Me,u,d,l),u.dispatch=l,o.memoizedState=e,[a,l,!1]}function Pp(e){var a=mt();return Hp(a,Ze,e)}function Hp(e,a,l){if(a=Nc(e,a,_p)[0],e=wo(fn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var o=tl(a)}catch(x){throw x===ri?mo:x}else o=a;a=mt();var u=a.queue,d=u.dispatch;return l!==a.memoizedState&&(Me.flags|=2048,ci(9,{destroy:void 0},Lb.bind(null,u,l),null)),[o,d,e]}function Lb(e,a){e.action=a}function Vp(e){var a=mt(),l=Ze;if(l!==null)return Hp(a,l,e);mt(),a=a.memoizedState,l=mt();var o=l.queue.dispatch;return l.memoizedState=e,[a,o,!1]}function ci(e,a,l,o){return e={tag:e,create:l,deps:o,inst:a,next:null},a=Me.updateQueue,a===null&&(a=Co(),Me.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=e.next=e:(o=l.next,l.next=e,e.next=o,a.lastEffect=e),e}function qp(){return mt().memoizedState}function Eo(e,a,l,o){var u=Vt();Me.flags|=e,u.memoizedState=ci(1|a,{destroy:void 0},l,o===void 0?null:o)}function Ao(e,a,l,o){var u=mt();o=o===void 0?null:o;var d=u.memoizedState.inst;Ze!==null&&o!==null&&Uc(o,Ze.memoizedState.deps)?u.memoizedState=ci(a,d,l,o):(Me.flags|=e,u.memoizedState=ci(1|a,d,l,o))}function Yp(e,a){Eo(8390656,8,e,a)}function Gc(e,a){Ao(2048,8,e,a)}function zb(e){Me.flags|=4;var a=Me.updateQueue;if(a===null)a=Co(),Me.updateQueue=a,a.events=[e];else{var l=a.events;l===null?a.events=[e]:l.push(e)}}function Xp(e){var a=mt().memoizedState;return zb({ref:a,nextImpl:e}),function(){if((qe&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function Wp(e,a){return Ao(4,2,e,a)}function Zp(e,a){return Ao(4,4,e,a)}function Qp(e,a){if(typeof a=="function"){e=e();var l=a(e);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Kp(e,a,l){l=l!=null?l.concat([e]):null,Ao(4,4,Qp.bind(null,a,e),l)}function Pc(){}function Jp(e,a){var l=mt();a=a===void 0?null:a;var o=l.memoizedState;return a!==null&&Uc(a,o[1])?o[0]:(l.memoizedState=[e,a],e)}function $p(e,a){var l=mt();a=a===void 0?null:a;var o=l.memoizedState;if(a!==null&&Uc(a,o[1]))return o[0];if(o=e(),wr){_t(!0);try{e()}finally{_t(!1)}}return l.memoizedState=[o,a],o}function Hc(e,a,l){return l===void 0||(un&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=a:(e.memoizedState=l,e=eh(),Me.lanes|=e,Vn|=e,l)}function em(e,a,l,o){return aa(l,a)?l:li.current!==null?(e=Hc(e,l,o),aa(e,a)||(Tt=!0),e):(un&42)===0||(un&1073741824)!==0&&(Ne&261930)===0?(Tt=!0,e.memoizedState=l):(e=eh(),Me.lanes|=e,Vn|=e,a)}function tm(e,a,l,o,u){var d=$.p;$.p=d!==0&&8>d?d:8;var x=F.T,S={};F.T=S,Yc(e,!1,a,l);try{var R=u(),j=F.S;if(j!==null&&j(S,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var q=Rb(R,o);al(e,a,q,sa(e))}else al(e,a,o,sa(e))}catch(K){al(e,a,{then:function(){},status:"rejected",reason:K},sa())}finally{$.p=d,x!==null&&S.types!==null&&(x.types=S.types),F.T=x}}function jb(){}function Vc(e,a,l,o){if(e.tag!==5)throw Error(i(476));var u=am(e).queue;tm(e,u,a,re,l===null?jb:function(){return nm(e),l(o)})}function am(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:re},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:l},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function nm(e){var a=am(e);a.next===null&&(a=e.alternate.memoizedState),al(e,a.next.queue,{},sa())}function qc(){return Ft(bl)}function rm(){return mt().memoizedState}function im(){return mt().memoizedState}function Fb(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var l=sa();e=Bn(l);var o=In(a,e,l);o!==null&&($t(o,a,l),Ki(o,a,l)),a={cache:yc()},e.payload=a;return}a=a.return}}function Nb(e,a,l){var o=sa();l={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ko(e)?om(a,l):(l=cc(e,a,l,o),l!==null&&($t(l,e,o),sm(l,a,o)))}function lm(e,a,l){var o=sa();al(e,a,l,o)}function al(e,a,l,o){var u={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ko(e))om(a,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var x=a.lastRenderedState,S=d(x,l);if(u.hasEagerState=!0,u.eagerState=S,aa(S,x))return lo(e,a,u,0),$e===null&&io(),!1}catch{}if(l=cc(e,a,u,o),l!==null)return $t(l,e,o),sm(l,a,o),!0}return!1}function Yc(e,a,l,o){if(o={lane:2,revertLane:wu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(a)throw Error(i(479))}else a=cc(e,l,o,2),a!==null&&$t(a,e,2)}function ko(e){var a=e.alternate;return e===Me||a!==null&&a===Me}function om(e,a){oi=yo=!0;var l=e.pending;l===null?a.next=a:(a.next=l.next,l.next=a),e.pending=a}function sm(e,a,l){if((l&4194048)!==0){var o=a.lanes;o&=e.pendingLanes,l|=o,a.lanes=l,Da(e,l)}}var nl={readContext:Ft,use:To,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};nl.useEffectEvent=ut;var cm={readContext:Ft,use:To,useCallback:function(e,a){return Vt().memoizedState=[e,a===void 0?null:a],e},useContext:Ft,useEffect:Yp,useImperativeHandle:function(e,a,l){l=l!=null?l.concat([e]):null,Eo(4194308,4,Qp.bind(null,a,e),l)},useLayoutEffect:function(e,a){return Eo(4194308,4,e,a)},useInsertionEffect:function(e,a){Eo(4,2,e,a)},useMemo:function(e,a){var l=Vt();a=a===void 0?null:a;var o=e();if(wr){_t(!0);try{e()}finally{_t(!1)}}return l.memoizedState=[o,a],o},useReducer:function(e,a,l){var o=Vt();if(l!==void 0){var u=l(a);if(wr){_t(!0);try{l(a)}finally{_t(!1)}}}else u=a;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Nb.bind(null,Me,e),[o.memoizedState,e]},useRef:function(e){var a=Vt();return e={current:e},a.memoizedState=e},useState:function(e){e=Ic(e);var a=e.queue,l=lm.bind(null,Me,a);return a.dispatch=l,[e.memoizedState,l]},useDebugValue:Pc,useDeferredValue:function(e,a){var l=Vt();return Hc(l,e,a)},useTransition:function(){var e=Ic(!1);return e=tm.bind(null,Me,e.queue,!0,!1),Vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,l){var o=Me,u=Vt();if(Ie){if(l===void 0)throw Error(i(407));l=l()}else{if(l=a(),$e===null)throw Error(i(349));(Ne&127)!==0||Dp(o,a,l)}u.memoizedState=l;var d={value:l,getSnapshot:a};return u.queue=d,Yp(Mp.bind(null,o,d,e),[e]),o.flags|=2048,ci(9,{destroy:void 0},Up.bind(null,o,d,l,a),null),l},useId:function(){var e=Vt(),a=$e.identifierPrefix;if(Ie){var l=Ha,o=Pa;l=(o&~(1<<32-At(o)-1)).toString(32)+l,a="_"+a+"R_"+l,l=So++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=Db++,a="_"+a+"r_"+l.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:qc,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var a=Vt();a.memoizedState=a.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=Yc.bind(null,Me,!0,l),l.dispatch=a,[e,a]},useMemoCache:Fc,useCacheRefresh:function(){return Vt().memoizedState=Fb.bind(null,Me)},useEffectEvent:function(e){var a=Vt(),l={impl:e};return a.memoizedState=l,function(){if((qe&2)!==0)throw Error(i(440));return l.impl.apply(void 0,arguments)}}},Xc={readContext:Ft,use:To,useCallback:Jp,useContext:Ft,useEffect:Gc,useImperativeHandle:Kp,useInsertionEffect:Wp,useLayoutEffect:Zp,useMemo:$p,useReducer:wo,useRef:qp,useState:function(){return wo(fn)},useDebugValue:Pc,useDeferredValue:function(e,a){var l=mt();return em(l,Ze.memoizedState,e,a)},useTransition:function(){var e=wo(fn)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:tl(e),a]},useSyncExternalStore:Rp,useId:rm,useHostTransitionStatus:qc,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,a){var l=mt();return jp(l,Ze,e,a)},useMemoCache:Fc,useCacheRefresh:im};Xc.useEffectEvent=Xp;var um={readContext:Ft,use:To,useCallback:Jp,useContext:Ft,useEffect:Gc,useImperativeHandle:Kp,useInsertionEffect:Wp,useLayoutEffect:Zp,useMemo:$p,useReducer:Bc,useRef:qp,useState:function(){return Bc(fn)},useDebugValue:Pc,useDeferredValue:function(e,a){var l=mt();return Ze===null?Hc(l,e,a):em(l,Ze.memoizedState,e,a)},useTransition:function(){var e=Bc(fn)[0],a=mt().memoizedState;return[typeof e=="boolean"?e:tl(e),a]},useSyncExternalStore:Rp,useId:rm,useHostTransitionStatus:qc,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,a){var l=mt();return Ze!==null?jp(l,Ze,e,a):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:im};um.useEffectEvent=Xp;function Wc(e,a,l,o){a=e.memoizedState,l=l(o,a),l=l==null?a:b({},a,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Zc={enqueueSetState:function(e,a,l){e=e._reactInternals;var o=sa(),u=Bn(o);u.payload=a,l!=null&&(u.callback=l),a=In(e,u,o),a!==null&&($t(a,e,o),Ki(a,e,o))},enqueueReplaceState:function(e,a,l){e=e._reactInternals;var o=sa(),u=Bn(o);u.tag=1,u.payload=a,l!=null&&(u.callback=l),a=In(e,u,o),a!==null&&($t(a,e,o),Ki(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var l=sa(),o=Bn(l);o.tag=2,a!=null&&(o.callback=a),a=In(e,o,l),a!==null&&($t(a,e,l),Ki(a,e,l))}};function fm(e,a,l,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):a.prototype&&a.prototype.isPureReactComponent?!Hi(l,o)||!Hi(u,d):!0}function dm(e,a,l,o){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,o),a.state!==e&&Zc.enqueueReplaceState(a,a.state,null)}function Er(e,a){var l=a;if("ref"in a){l={};for(var o in a)o!=="ref"&&(l[o]=a[o])}if(e=e.defaultProps){l===a&&(l=b({},l));for(var u in e)l[u]===void 0&&(l[u]=e[u])}return l}function pm(e){ro(e)}function mm(e){console.error(e)}function hm(e){ro(e)}function Oo(e,a){try{var l=e.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(o){setTimeout(function(){throw o})}}function vm(e,a,l){try{var o=e.onCaughtError;o(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qc(e,a,l){return l=Bn(l),l.tag=3,l.payload={element:null},l.callback=function(){Oo(e,a)},l}function gm(e){return e=Bn(e),e.tag=3,e}function xm(e,a,l,o){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){vm(a,l,o)}}var x=l.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){vm(a,l,o),typeof u!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})})}function Bb(e,a,l,o,u){if(l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(a=l.alternate,a!==null&&ti(a,l,u,!0),l=ra.current,l!==null){switch(l.tag){case 31:case 13:return Sa===null?_o():l.alternate===null&&ft===0&&(ft=3),l.flags&=-257,l.flags|=65536,l.lanes=u,o===ho?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([o]):a.add(o),Su(e,o,u)),!1;case 22:return l.flags|=65536,o===ho?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([o])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([o]):l.add(o)),Su(e,o,u)),!1}throw Error(i(435,l.tag))}return Su(e,o,u),_o(),!1}if(Ie)return a=ra.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=u,o!==hc&&(e=Error(i(422),{cause:o}),Yi(ga(e,l)))):(o!==hc&&(a=Error(i(423),{cause:o}),Yi(ga(a,l))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ga(o,l),u=Qc(e.stateNode,o,u),Ac(e,u),ft!==4&&(ft=2)),!1;var d=Error(i(520),{cause:o});if(d=ga(d,l),fl===null?fl=[d]:fl.push(d),ft!==4&&(ft=2),a===null)return!0;o=ga(o,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,e=u&-u,l.lanes|=e,e=Qc(l.stateNode,o,e),Ac(l,e),!1;case 1:if(a=l.type,d=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qn===null||!qn.has(d))))return l.flags|=65536,u&=-u,l.lanes|=u,u=gm(u),xm(u,e,l,o),Ac(l,u),!1}l=l.return}while(l!==null);return!1}var Kc=Error(i(461)),Tt=!1;function Nt(e,a,l,o){a.child=e===null?Cp(a,null,l,o):Tr(a,e.child,l,o)}function bm(e,a,l,o,u){l=l.render;var d=a.ref;if("ref"in o){var x={};for(var S in o)S!=="ref"&&(x[S]=o[S])}else x=o;return br(a),o=Mc(e,a,l,x,d,u),S=Lc(),e!==null&&!Tt?(zc(e,a,u),dn(e,a,u)):(Ie&&S&&pc(a),a.flags|=1,Nt(e,a,o,u),a.child)}function ym(e,a,l,o,u){if(e===null){var d=l.type;return typeof d=="function"&&!uc(d)&&d.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=d,Sm(e,a,d,o,u)):(e=so(l.type,null,o,a,a.mode,u),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,!iu(e,u)){var x=d.memoizedProps;if(l=l.compare,l=l!==null?l:Hi,l(x,o)&&e.ref===a.ref)return dn(e,a,u)}return a.flags|=1,e=ln(d,o),e.ref=a.ref,e.return=a,a.child=e}function Sm(e,a,l,o,u){if(e!==null){var d=e.memoizedProps;if(Hi(d,o)&&e.ref===a.ref)if(Tt=!1,a.pendingProps=o=d,iu(e,u))(e.flags&131072)!==0&&(Tt=!0);else return a.lanes=e.lanes,dn(e,a,u)}return Jc(e,a,l,o,u)}function Cm(e,a,l,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((a.flags&128)!==0){if(d=d!==null?d.baseLanes|l:l,e!==null){for(o=a.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,a.child=null;return Tm(e,a,d,l,o)}if((l&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&po(a,d!==null?d.cachePool:null),d!==null?Ep(a,d):Oc(),Ap(a);else return o=a.lanes=536870912,Tm(e,a,d!==null?d.baseLanes|l:l,l,o)}else d!==null?(po(a,d.cachePool),Ep(a,d),Gn(),a.memoizedState=null):(e!==null&&po(a,null),Oc(),Gn());return Nt(e,a,u,l),a.child}function rl(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Tm(e,a,l,o,u){var d=Cc();return d=d===null?null:{parent:St._currentValue,pool:d},a.memoizedState={baseLanes:l,cachePool:d},e!==null&&po(a,null),Oc(),Ap(a),e!==null&&ti(e,a,o,!0),a.childLanes=u,null}function Ro(e,a){return a=Uo({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function wm(e,a,l){return Tr(a,e.child,null,l),e=Ro(a,a.pendingProps),e.flags|=2,ia(a),a.memoizedState=null,e}function Ib(e,a,l){var o=a.pendingProps,u=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ie){if(o.mode==="hidden")return e=Ro(a,o),a.lanes=536870912,rl(null,e);if(Dc(a),(e=at)?(e=Fh(e,ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:Pa,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},l=op(e),l.return=a,a.child=l,jt=a,at=null)):e=null,e===null)throw jn(a);return a.lanes=536870912,null}return Ro(a,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Dc(a),u)if(a.flags&256)a.flags&=-257,a=wm(e,a,l);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(i(558));else if(Tt||ti(e,a,l,!1),u=(l&e.childLanes)!==0,Tt||u){if(o=$e,o!==null&&(x=ct(o,l),x!==0&&x!==d.retryLane))throw d.retryLane=x,hr(e,x),$t(o,e,x),Kc;_o(),a=wm(e,a,l)}else e=d.treeContext,at=Ca(x.nextSibling),jt=a,Ie=!0,zn=null,ya=!1,e!==null&&up(a,e),a=Ro(a,o),a.flags|=4096;return a}return e=ln(e.child,{mode:o.mode,children:o.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Do(e,a){var l=a.ref;if(l===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(e===null||e.ref!==l)&&(a.flags|=4194816)}}function Jc(e,a,l,o,u){return br(a),l=Mc(e,a,l,o,void 0,u),o=Lc(),e!==null&&!Tt?(zc(e,a,u),dn(e,a,u)):(Ie&&o&&pc(a),a.flags|=1,Nt(e,a,l,u),a.child)}function Em(e,a,l,o,u,d){return br(a),a.updateQueue=null,l=Op(a,o,l,u),kp(e),o=Lc(),e!==null&&!Tt?(zc(e,a,d),dn(e,a,d)):(Ie&&o&&pc(a),a.flags|=1,Nt(e,a,l,d),a.child)}function Am(e,a,l,o,u){if(br(a),a.stateNode===null){var d=Kr,x=l.contextType;typeof x=="object"&&x!==null&&(d=Ft(x)),d=new l(o,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Zc,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=o,d.state=a.memoizedState,d.refs={},wc(a),x=l.contextType,d.context=typeof x=="object"&&x!==null?Ft(x):Kr,d.state=a.memoizedState,x=l.getDerivedStateFromProps,typeof x=="function"&&(Wc(a,l,x,o),d.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Zc.enqueueReplaceState(d,d.state,null),$i(a,o,d,u),Ji(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),o=!0}else if(e===null){d=a.stateNode;var S=a.memoizedProps,R=Er(l,S);d.props=R;var j=d.context,q=l.contextType;x=Kr,typeof q=="object"&&q!==null&&(x=Ft(q));var K=l.getDerivedStateFromProps;q=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=a.pendingProps!==S,q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||j!==x)&&dm(a,d,o,x),Nn=!1;var N=a.memoizedState;d.state=N,$i(a,o,d,u),Ji(),j=a.memoizedState,S||N!==j||Nn?(typeof K=="function"&&(Wc(a,l,K,o),j=a.memoizedState),(R=Nn||fm(a,l,R,o,N,j,x))?(q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=j),d.props=o,d.state=j,d.context=x,o=R):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{d=a.stateNode,Ec(e,a),x=a.memoizedProps,q=Er(l,x),d.props=q,K=a.pendingProps,N=d.context,j=l.contextType,R=Kr,typeof j=="object"&&j!==null&&(R=Ft(j)),S=l.getDerivedStateFromProps,(j=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==K||N!==R)&&dm(a,d,o,R),Nn=!1,N=a.memoizedState,d.state=N,$i(a,o,d,u),Ji();var P=a.memoizedState;x!==K||N!==P||Nn||e!==null&&e.dependencies!==null&&uo(e.dependencies)?(typeof S=="function"&&(Wc(a,l,S,o),P=a.memoizedState),(q=Nn||fm(a,l,q,o,N,P,R)||e!==null&&e.dependencies!==null&&uo(e.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,P,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,P,R)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=P),d.props=o,d.state=P,d.context=R,o=q):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&N===e.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&N===e.memoizedState||(a.flags|=1024),o=!1)}return d=o,Do(e,a),o=(a.flags&128)!==0,d||o?(d=a.stateNode,l=o&&typeof l.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,e!==null&&o?(a.child=Tr(a,e.child,null,u),a.child=Tr(a,null,l,u)):Nt(e,a,l,u),a.memoizedState=d.state,e=a.child):e=dn(e,a,u),e}function km(e,a,l,o){return gr(),a.flags|=256,Nt(e,a,l,o),a.child}var $c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(e){return{baseLanes:e,cachePool:vp()}}function tu(e,a,l){return e=e!==null?e.childLanes&~l:0,a&&(e|=oa),e}function Om(e,a,l){var o=a.pendingProps,u=!1,d=(a.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(pt.current&2)!==0),x&&(u=!0,a.flags&=-129),x=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ie){if(u?_n(a):Gn(),(e=at)?(e=Fh(e,ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ln!==null?{id:Pa,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},l=op(e),l.return=a,a.child=l,jt=a,at=null)):e=null,e===null)throw jn(a);return Nu(e)?a.lanes=32:a.lanes=536870912,null}var S=o.children;return o=o.fallback,u?(Gn(),u=a.mode,S=Uo({mode:"hidden",children:S},u),o=vr(o,u,l,null),S.return=a,o.return=a,S.sibling=o,a.child=S,o=a.child,o.memoizedState=eu(l),o.childLanes=tu(e,x,l),a.memoizedState=$c,rl(null,o)):(_n(a),au(a,S))}var R=e.memoizedState;if(R!==null&&(S=R.dehydrated,S!==null)){if(d)a.flags&256?(_n(a),a.flags&=-257,a=nu(e,a,l)):a.memoizedState!==null?(Gn(),a.child=e.child,a.flags|=128,a=null):(Gn(),S=o.fallback,u=a.mode,o=Uo({mode:"visible",children:o.children},u),S=vr(S,u,l,null),S.flags|=2,o.return=a,S.return=a,o.sibling=S,a.child=o,Tr(a,e.child,null,l),o=a.child,o.memoizedState=eu(l),o.childLanes=tu(e,x,l),a.memoizedState=$c,a=rl(null,o));else if(_n(a),Nu(S)){if(x=S.nextSibling&&S.nextSibling.dataset,x)var j=x.dgst;x=j,o=Error(i(419)),o.stack="",o.digest=x,Yi({value:o,source:null,stack:null}),a=nu(e,a,l)}else if(Tt||ti(e,a,l,!1),x=(l&e.childLanes)!==0,Tt||x){if(x=$e,x!==null&&(o=ct(x,l),o!==0&&o!==R.retryLane))throw R.retryLane=o,hr(e,o),$t(x,e,o),Kc;Fu(S)||_o(),a=nu(e,a,l)}else Fu(S)?(a.flags|=192,a.child=e.child,a=null):(e=R.treeContext,at=Ca(S.nextSibling),jt=a,Ie=!0,zn=null,ya=!1,e!==null&&up(a,e),a=au(a,o.children),a.flags|=4096);return a}return u?(Gn(),S=o.fallback,u=a.mode,R=e.child,j=R.sibling,o=ln(R,{mode:"hidden",children:o.children}),o.subtreeFlags=R.subtreeFlags&65011712,j!==null?S=ln(j,S):(S=vr(S,u,l,null),S.flags|=2),S.return=a,o.return=a,o.sibling=S,a.child=o,rl(null,o),o=a.child,S=e.child.memoizedState,S===null?S=eu(l):(u=S.cachePool,u!==null?(R=St._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=vp(),S={baseLanes:S.baseLanes|l,cachePool:u}),o.memoizedState=S,o.childLanes=tu(e,x,l),a.memoizedState=$c,rl(e.child,o)):(_n(a),l=e.child,e=l.sibling,l=ln(l,{mode:"visible",children:o.children}),l.return=a,l.sibling=null,e!==null&&(x=a.deletions,x===null?(a.deletions=[e],a.flags|=16):x.push(e)),a.child=l,a.memoizedState=null,l)}function au(e,a){return a=Uo({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Uo(e,a){return e=na(22,e,null,a),e.lanes=0,e}function nu(e,a,l){return Tr(a,e.child,null,l),e=au(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Rm(e,a,l){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a),xc(e.return,a,l)}function ru(e,a,l,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:u,treeForkCount:d}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=l,x.tailMode=u,x.treeForkCount=d)}function Dm(e,a,l){var o=a.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=pt.current,S=(x&2)!==0;if(S?(x=x&1|2,a.flags|=128):x&=1,te(pt,x),Nt(e,a,o,l),o=Ie?qi:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,l,a);else if(e.tag===19)Rm(e,l,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(l=a.child,u=null;l!==null;)e=l.alternate,e!==null&&bo(e)===null&&(u=l),l=l.sibling;l=u,l===null?(u=a.child,a.child=null):(u=l.sibling,l.sibling=null),ru(a,!1,u,l,d,o);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=a.child,a.child=null;u!==null;){if(e=u.alternate,e!==null&&bo(e)===null){a.child=u;break}e=u.sibling,u.sibling=l,l=u,u=e}ru(a,!0,l,null,d,o);break;case"together":ru(a,!1,null,null,void 0,o);break;default:a.memoizedState=null}return a.child}function dn(e,a,l){if(e!==null&&(a.dependencies=e.dependencies),Vn|=a.lanes,(l&a.childLanes)===0)if(e!==null){if(ti(e,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(i(153));if(a.child!==null){for(e=a.child,l=ln(e,e.pendingProps),a.child=l,l.return=a;e.sibling!==null;)e=e.sibling,l=l.sibling=ln(e,e.pendingProps),l.return=a;l.sibling=null}return a.child}function iu(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&uo(e)))}function _b(e,a,l){switch(a.tag){case 3:De(a,a.stateNode.containerInfo),Fn(a,St,e.memoizedState.cache),gr();break;case 27:case 5:Lt(a);break;case 4:De(a,a.stateNode.containerInfo);break;case 10:Fn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Dc(a),null;break;case 13:var o=a.memoizedState;if(o!==null)return o.dehydrated!==null?(_n(a),a.flags|=128,null):(l&a.child.childLanes)!==0?Om(e,a,l):(_n(a),e=dn(e,a,l),e!==null?e.sibling:null);_n(a);break;case 19:var u=(e.flags&128)!==0;if(o=(l&a.childLanes)!==0,o||(ti(e,a,l,!1),o=(l&a.childLanes)!==0),u){if(o)return Dm(e,a,l);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),te(pt,pt.current),o)break;return null;case 22:return a.lanes=0,Cm(e,a,l,a.pendingProps);case 24:Fn(a,St,e.memoizedState.cache)}return dn(e,a,l)}function Um(e,a,l){if(e!==null)if(e.memoizedProps!==a.pendingProps)Tt=!0;else{if(!iu(e,l)&&(a.flags&128)===0)return Tt=!1,_b(e,a,l);Tt=(e.flags&131072)!==0}else Tt=!1,Ie&&(a.flags&1048576)!==0&&cp(a,qi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var o=a.pendingProps;if(e=Sr(a.elementType),a.type=e,typeof e=="function")uc(e)?(o=Er(e,o),a.tag=1,a=Am(null,a,e,o,l)):(a.tag=0,a=Jc(null,a,e,o,l));else{if(e!=null){var u=e.$$typeof;if(u===Y){a.tag=11,a=bm(null,a,e,o,l);break e}else if(u===B){a.tag=14,a=ym(null,a,e,o,l);break e}}throw a=ge(e)||e,Error(i(306,a,""))}}return a;case 0:return Jc(e,a,a.type,a.pendingProps,l);case 1:return o=a.type,u=Er(o,a.pendingProps),Am(e,a,o,u,l);case 3:e:{if(De(a,a.stateNode.containerInfo),e===null)throw Error(i(387));o=a.pendingProps;var d=a.memoizedState;u=d.element,Ec(e,a),$i(a,o,null,l);var x=a.memoizedState;if(o=x.cache,Fn(a,St,o),o!==d.cache&&bc(a,[St],l,!0),Ji(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=km(e,a,o,l);break e}else if(o!==u){u=ga(Error(i(424)),a),Yi(u),a=km(e,a,o,l);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,at=Ca(e.firstChild),jt=a,Ie=!0,zn=null,ya=!0,l=Cp(a,null,o,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(gr(),o===u){a=dn(e,a,l);break e}Nt(e,a,o,l)}a=a.child}return a;case 26:return Do(e,a),e===null?(l=Ph(a.type,null,a.pendingProps,null))?a.memoizedState=l:Ie||(l=a.type,e=a.pendingProps,o=Xo(me.current).createElement(l),o[zt]=a,o[Xt]=e,Bt(o,l,e),Dt(o),a.stateNode=o):a.memoizedState=Ph(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Lt(a),e===null&&Ie&&(o=a.stateNode=Ih(a.type,a.pendingProps,me.current),jt=a,ya=!0,u=at,Zn(a.type)?(Bu=u,at=Ca(o.firstChild)):at=u),Nt(e,a,a.pendingProps.children,l),Do(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ie&&((u=o=at)&&(o=vy(o,a.type,a.pendingProps,ya),o!==null?(a.stateNode=o,jt=a,at=Ca(o.firstChild),ya=!1,u=!0):u=!1),u||jn(a)),Lt(a),u=a.type,d=a.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Lu(u,d)?o=null:x!==null&&Lu(u,x)&&(a.flags|=32),a.memoizedState!==null&&(u=Mc(e,a,Ub,null,null,l),bl._currentValue=u),Do(e,a),Nt(e,a,o,l),a.child;case 6:return e===null&&Ie&&((e=l=at)&&(l=gy(l,a.pendingProps,ya),l!==null?(a.stateNode=l,jt=a,at=null,e=!0):e=!1),e||jn(a)),null;case 13:return Om(e,a,l);case 4:return De(a,a.stateNode.containerInfo),o=a.pendingProps,e===null?a.child=Tr(a,null,o,l):Nt(e,a,o,l),a.child;case 11:return bm(e,a,a.type,a.pendingProps,l);case 7:return Nt(e,a,a.pendingProps,l),a.child;case 8:return Nt(e,a,a.pendingProps.children,l),a.child;case 12:return Nt(e,a,a.pendingProps.children,l),a.child;case 10:return o=a.pendingProps,Fn(a,a.type,o.value),Nt(e,a,o.children,l),a.child;case 9:return u=a.type._context,o=a.pendingProps.children,br(a),u=Ft(u),o=o(u),a.flags|=1,Nt(e,a,o,l),a.child;case 14:return ym(e,a,a.type,a.pendingProps,l);case 15:return Sm(e,a,a.type,a.pendingProps,l);case 19:return Dm(e,a,l);case 31:return Ib(e,a,l);case 22:return Cm(e,a,l,a.pendingProps);case 24:return br(a),o=Ft(St),e===null?(u=Cc(),u===null&&(u=$e,d=yc(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=l),u=d),a.memoizedState={parent:o,cache:u},wc(a),Fn(a,St,u)):((e.lanes&l)!==0&&(Ec(e,a),$i(a,null,null,l),Ji()),u=e.memoizedState,d=a.memoizedState,u.parent!==o?(u={parent:o,cache:o},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),Fn(a,St,o)):(o=d.cache,Fn(a,St,o),o!==u.cache&&bc(a,[St],l,!0))),Nt(e,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function pn(e){e.flags|=4}function lu(e,a,l,o,u){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(rh())e.flags|=8192;else throw Cr=ho,Tc}else e.flags&=-16777217}function Mm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xh(a))if(rh())e.flags|=8192;else throw Cr=ho,Tc}function Mo(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Pt():536870912,e.lanes|=a,pi|=a)}function il(e,a){if(!Ie)switch(e.tailMode){case"hidden":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function nt(e){var a=e.alternate!==null&&e.alternate.child===e.child,l=0,o=0;if(a)for(var u=e.child;u!==null;)l|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)l|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=l,a}function Gb(e,a,l){var o=a.pendingProps;switch(mc(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(a),null;case 1:return nt(a),null;case 3:return l=a.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),cn(St),_e(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ei(a)?pn(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,vc())),nt(a),null;case 26:var u=a.type,d=a.memoizedState;return e===null?(pn(a),d!==null?(nt(a),Mm(a,d)):(nt(a),lu(a,u,null,o,l))):d?d!==e.memoizedState?(pn(a),nt(a),Mm(a,d)):(nt(a),a.flags&=-16777217):(e=e.memoizedProps,e!==o&&pn(a),nt(a),lu(a,u,e,o,l)),null;case 27:if(It(a),l=me.current,u=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==o&&pn(a);else{if(!o){if(a.stateNode===null)throw Error(i(166));return nt(a),null}e=ie.current,ei(a)?fp(a):(e=Ih(u,o,l),a.stateNode=e,pn(a))}return nt(a),null;case 5:if(It(a),u=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==o&&pn(a);else{if(!o){if(a.stateNode===null)throw Error(i(166));return nt(a),null}if(d=ie.current,ei(a))fp(a);else{var x=Xo(me.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[zt]=a,d[Xt]=o;e:for(x=a.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===a)break e;for(;x.sibling===null;){if(x.return===null||x.return===a)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}a.stateNode=d;e:switch(Bt(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pn(a)}}return nt(a),lu(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,l),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==o&&pn(a);else{if(typeof o!="string"&&a.stateNode===null)throw Error(i(166));if(e=me.current,ei(a)){if(e=a.stateNode,l=a.memoizedProps,o=null,u=jt,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[zt]=a,e=!!(e.nodeValue===l||o!==null&&o.suppressHydrationWarning===!0||Oh(e.nodeValue,l)),e||jn(a,!0)}else e=Xo(e).createTextNode(o),e[zt]=a,a.stateNode=e}return nt(a),null;case 31:if(l=a.memoizedState,e===null||e.memoizedState!==null){if(o=ei(a),l!==null){if(e===null){if(!o)throw Error(i(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(557));e[zt]=a}else gr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;nt(a),e=!1}else l=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return a.flags&256?(ia(a),a):(ia(a),null);if((a.flags&128)!==0)throw Error(i(558))}return nt(a),null;case 13:if(o=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ei(a),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(i(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(i(317));u[zt]=a}else gr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;nt(a),u=!1}else u=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(ia(a),a):(ia(a),null)}return ia(a),(a.flags&128)!==0?(a.lanes=l,a):(l=o!==null,e=e!==null&&e.memoizedState!==null,l&&(o=a.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),l!==e&&l&&(a.child.flags|=8192),Mo(a,a.updateQueue),nt(a),null);case 4:return _e(),e===null&&Ou(a.stateNode.containerInfo),nt(a),null;case 10:return cn(a.type),nt(a),null;case 19:if(I(pt),o=a.memoizedState,o===null)return nt(a),null;if(u=(a.flags&128)!==0,d=o.rendering,d===null)if(u)il(o,!1);else{if(ft!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(d=bo(e),d!==null){for(a.flags|=128,il(o,!1),e=d.updateQueue,a.updateQueue=e,Mo(a,e),a.subtreeFlags=0,e=l,l=a.child;l!==null;)lp(l,e),l=l.sibling;return te(pt,pt.current&1|2),Ie&&on(a,o.treeForkCount),a.child}e=e.sibling}o.tail!==null&&ae()>No&&(a.flags|=128,u=!0,il(o,!1),a.lanes=4194304)}else{if(!u)if(e=bo(d),e!==null){if(a.flags|=128,u=!0,e=e.updateQueue,a.updateQueue=e,Mo(a,e),il(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ie)return nt(a),null}else 2*ae()-o.renderingStartTime>No&&l!==536870912&&(a.flags|=128,u=!0,il(o,!1),a.lanes=4194304);o.isBackwards?(d.sibling=a.child,a.child=d):(e=o.last,e!==null?e.sibling=d:a.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ae(),e.sibling=null,l=pt.current,te(pt,u?l&1|2:l&1),Ie&&on(a,o.treeForkCount),e):(nt(a),null);case 22:case 23:return ia(a),Rc(),o=a.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(a.flags|=8192):o&&(a.flags|=8192),o?(l&536870912)!==0&&(a.flags&128)===0&&(nt(a),a.subtreeFlags&6&&(a.flags|=8192)):nt(a),l=a.updateQueue,l!==null&&Mo(a,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==l&&(a.flags|=2048),e!==null&&I(yr),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),cn(St),nt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function Pb(e,a){switch(mc(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return cn(St),_e(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return It(a),null;case 31:if(a.memoizedState!==null){if(ia(a),a.alternate===null)throw Error(i(340));gr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ia(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(i(340));gr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return I(pt),null;case 4:return _e(),null;case 10:return cn(a.type),null;case 22:case 23:return ia(a),Rc(),e!==null&&I(yr),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return cn(St),null;case 25:return null;default:return null}}function Lm(e,a){switch(mc(a),a.tag){case 3:cn(St),_e();break;case 26:case 27:case 5:It(a);break;case 4:_e();break;case 31:a.memoizedState!==null&&ia(a);break;case 13:ia(a);break;case 19:I(pt);break;case 10:cn(a.type);break;case 22:case 23:ia(a),Rc(),e!==null&&I(yr);break;case 24:cn(St)}}function ll(e,a){try{var l=a.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var u=o.next;l=u;do{if((l.tag&e)===e){o=void 0;var d=l.create,x=l.inst;o=d(),x.destroy=o}l=l.next}while(l!==u)}}catch(S){Xe(a,a.return,S)}}function Pn(e,a,l){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,S=x.destroy;if(S!==void 0){x.destroy=void 0,u=a;var R=l,j=S;try{j()}catch(q){Xe(u,R,q)}}}o=o.next}while(o!==d)}}catch(q){Xe(a,a.return,q)}}function zm(e){var a=e.updateQueue;if(a!==null){var l=e.stateNode;try{wp(a,l)}catch(o){Xe(e,e.return,o)}}}function jm(e,a,l){l.props=Er(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(o){Xe(e,a,o)}}function ol(e,a){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof l=="function"?e.refCleanup=l(o):l.current=o}}catch(u){Xe(e,a,u)}}function Va(e,a){var l=e.ref,o=e.refCleanup;if(l!==null)if(typeof o=="function")try{o()}catch(u){Xe(e,a,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Xe(e,a,u)}else l.current=null}function Fm(e){var a=e.type,l=e.memoizedProps,o=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break e;case"img":l.src?o.src=l.src:l.srcSet&&(o.srcset=l.srcSet)}}catch(u){Xe(e,e.return,u)}}function ou(e,a,l){try{var o=e.stateNode;uy(o,e.type,l,a),o[Xt]=a}catch(u){Xe(e,e.return,u)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zn(e.type)||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,a,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(e),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=nn));else if(o!==4&&(o===27&&Zn(e.type)&&(l=e.stateNode,a=null),e=e.child,e!==null))for(cu(e,a,l),e=e.sibling;e!==null;)cu(e,a,l),e=e.sibling}function Lo(e,a,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?l.insertBefore(e,a):l.appendChild(e);else if(o!==4&&(o===27&&Zn(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Lo(e,a,l),e=e.sibling;e!==null;)Lo(e,a,l),e=e.sibling}function Bm(e){var a=e.stateNode,l=e.memoizedProps;try{for(var o=e.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);Bt(a,o,l),a[zt]=e,a[Xt]=l}catch(d){Xe(e,e.return,d)}}var mn=!1,wt=!1,uu=!1,Im=typeof WeakSet=="function"?WeakSet:Set,Ut=null;function Hb(e,a){if(e=e.containerInfo,Uu=es,e=Kd(e),nc(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var x=0,S=-1,R=-1,j=0,q=0,K=e,N=null;t:for(;;){for(var P;K!==l||u!==0&&K.nodeType!==3||(S=x+u),K!==d||o!==0&&K.nodeType!==3||(R=x+o),K.nodeType===3&&(x+=K.nodeValue.length),(P=K.firstChild)!==null;)N=K,K=P;for(;;){if(K===e)break t;if(N===l&&++j===u&&(S=x),N===d&&++q===o&&(R=x),(P=K.nextSibling)!==null)break;K=N,N=K.parentNode}K=P}l=S===-1||R===-1?null:{start:S,end:R}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mu={focusedElem:e,selectionRange:l},es=!1,Ut=a;Ut!==null;)if(a=Ut,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ut=e;else for(;Ut!==null;){switch(a=Ut,d=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)u=e[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,l=a,u=d.memoizedProps,d=d.memoizedState,o=l.stateNode;try{var ue=Er(l.type,u);e=o.getSnapshotBeforeUpdate(ue,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Ee){Xe(l,l.return,Ee)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,l=e.nodeType,l===9)ju(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ju(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=a.sibling,e!==null){e.return=a.return,Ut=e;break}Ut=a.return}}function _m(e,a,l){var o=l.flags;switch(l.tag){case 0:case 11:case 15:vn(e,l),o&4&&ll(5,l);break;case 1:if(vn(e,l),o&4)if(e=l.stateNode,a===null)try{e.componentDidMount()}catch(x){Xe(l,l.return,x)}else{var u=Er(l.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(u,a,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Xe(l,l.return,x)}}o&64&&zm(l),o&512&&ol(l,l.return);break;case 3:if(vn(e,l),o&64&&(e=l.updateQueue,e!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{wp(e,a)}catch(x){Xe(l,l.return,x)}}break;case 27:a===null&&o&4&&Bm(l);case 26:case 5:vn(e,l),a===null&&o&4&&Fm(l),o&512&&ol(l,l.return);break;case 12:vn(e,l);break;case 31:vn(e,l),o&4&&Hm(e,l);break;case 13:vn(e,l),o&4&&Vm(e,l),o&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Jb.bind(null,l),xy(e,l))));break;case 22:if(o=l.memoizedState!==null||mn,!o){a=a!==null&&a.memoizedState!==null||wt,u=mn;var d=wt;mn=o,(wt=a)&&!d?gn(e,l,(l.subtreeFlags&8772)!==0):vn(e,l),mn=u,wt=d}break;case 30:break;default:vn(e,l)}}function Gm(e){var a=e.alternate;a!==null&&(e.alternate=null,Gm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&_s(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Zt=!1;function hn(e,a,l){for(l=l.child;l!==null;)Pm(e,a,l),l=l.sibling}function Pm(e,a,l){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ra,l)}catch{}switch(l.tag){case 26:wt||Va(l,a),hn(e,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:wt||Va(l,a);var o=rt,u=Zt;Zn(l.type)&&(rt=l.stateNode,Zt=!1),hn(e,a,l),vl(l.stateNode),rt=o,Zt=u;break;case 5:wt||Va(l,a);case 6:if(o=rt,u=Zt,rt=null,hn(e,a,l),rt=o,Zt=u,rt!==null)if(Zt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(l.stateNode)}catch(d){Xe(l,a,d)}else try{rt.removeChild(l.stateNode)}catch(d){Xe(l,a,d)}break;case 18:rt!==null&&(Zt?(e=rt,zh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Si(e)):zh(rt,l.stateNode));break;case 4:o=rt,u=Zt,rt=l.stateNode.containerInfo,Zt=!0,hn(e,a,l),rt=o,Zt=u;break;case 0:case 11:case 14:case 15:Pn(2,l,a),wt||Pn(4,l,a),hn(e,a,l);break;case 1:wt||(Va(l,a),o=l.stateNode,typeof o.componentWillUnmount=="function"&&jm(l,a,o)),hn(e,a,l);break;case 21:hn(e,a,l);break;case 22:wt=(o=wt)||l.memoizedState!==null,hn(e,a,l),wt=o;break;default:hn(e,a,l)}}function Hm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Si(e)}catch(l){Xe(a,a.return,l)}}}function Vm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Si(e)}catch(l){Xe(a,a.return,l)}}function Vb(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Im),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Im),a;default:throw Error(i(435,e.tag))}}function zo(e,a){var l=Vb(e);a.forEach(function(o){if(!l.has(o)){l.add(o);var u=$b.bind(null,e,o);o.then(u,u)}})}function Qt(e,a){var l=a.deletions;if(l!==null)for(var o=0;o<l.length;o++){var u=l[o],d=e,x=a,S=x;e:for(;S!==null;){switch(S.tag){case 27:if(Zn(S.type)){rt=S.stateNode,Zt=!1;break e}break;case 5:rt=S.stateNode,Zt=!1;break e;case 3:case 4:rt=S.stateNode.containerInfo,Zt=!0;break e}S=S.return}if(rt===null)throw Error(i(160));Pm(d,x,u),rt=null,Zt=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)qm(a,e),a=a.sibling}var Ma=null;function qm(e,a){var l=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qt(a,e),Kt(e),o&4&&(Pn(3,e,e.return),ll(3,e),Pn(5,e,e.return));break;case 1:Qt(a,e),Kt(e),o&512&&(wt||l===null||Va(l,l.return)),o&64&&mn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?o:l.concat(o))));break;case 26:var u=Ma;if(Qt(a,e),Kt(e),o&512&&(wt||l===null||Va(l,l.return)),o&4){var d=l!==null?l.memoizedState:null;if(o=e.memoizedState,l===null)if(o===null)if(e.stateNode===null){e:{o=e.type,l=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[zi]||d[zt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Bt(d,o,l),d[zt]=e,Dt(d),o=d;break e;case"link":var x=qh("link","href",u).get(o+(l.href||""));if(x){for(var S=0;S<x.length;S++)if(d=x[S],d.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&d.getAttribute("rel")===(l.rel==null?null:l.rel)&&d.getAttribute("title")===(l.title==null?null:l.title)&&d.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){x.splice(S,1);break t}}d=u.createElement(o),Bt(d,o,l),u.head.appendChild(d);break;case"meta":if(x=qh("meta","content",u).get(o+(l.content||""))){for(S=0;S<x.length;S++)if(d=x[S],d.getAttribute("content")===(l.content==null?null:""+l.content)&&d.getAttribute("name")===(l.name==null?null:l.name)&&d.getAttribute("property")===(l.property==null?null:l.property)&&d.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&d.getAttribute("charset")===(l.charSet==null?null:l.charSet)){x.splice(S,1);break t}}d=u.createElement(o),Bt(d,o,l),u.head.appendChild(d);break;default:throw Error(i(468,o))}d[zt]=e,Dt(d),o=d}e.stateNode=o}else Yh(u,e.type,e.stateNode);else e.stateNode=Vh(u,o,e.memoizedProps);else d!==o?(d===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):d.count--,o===null?Yh(u,e.type,e.stateNode):Vh(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ou(e,e.memoizedProps,l.memoizedProps)}break;case 27:Qt(a,e),Kt(e),o&512&&(wt||l===null||Va(l,l.return)),l!==null&&o&4&&ou(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Qt(a,e),Kt(e),o&512&&(wt||l===null||Va(l,l.return)),e.flags&32){u=e.stateNode;try{Vr(u,"")}catch(ue){Xe(e,e.return,ue)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ou(e,u,l!==null?l.memoizedProps:u)),o&1024&&(uu=!0);break;case 6:if(Qt(a,e),Kt(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,l=e.stateNode;try{l.nodeValue=o}catch(ue){Xe(e,e.return,ue)}}break;case 3:if(Qo=null,u=Ma,Ma=Wo(a.containerInfo),Qt(a,e),Ma=u,Kt(e),o&4&&l!==null&&l.memoizedState.isDehydrated)try{Si(a.containerInfo)}catch(ue){Xe(e,e.return,ue)}uu&&(uu=!1,Ym(e));break;case 4:o=Ma,Ma=Wo(e.stateNode.containerInfo),Qt(a,e),Kt(e),Ma=o;break;case 12:Qt(a,e),Kt(e);break;case 31:Qt(a,e),Kt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 13:Qt(a,e),Kt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Fo=ae()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 22:u=e.memoizedState!==null;var R=l!==null&&l.memoizedState!==null,j=mn,q=wt;if(mn=j||u,wt=q||R,Qt(a,e),wt=q,mn=j,Kt(e),o&8192)e:for(a=e.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(l===null||R||mn||wt||Ar(e)),l=null,a=e;;){if(a.tag===5||a.tag===26){if(l===null){R=l=a;try{if(d=R.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{S=R.stateNode;var K=R.memoizedProps.style,N=K!=null&&K.hasOwnProperty("display")?K.display:null;S.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(ue){Xe(R,R.return,ue)}}}else if(a.tag===6){if(l===null){R=a;try{R.stateNode.nodeValue=u?"":R.memoizedProps}catch(ue){Xe(R,R.return,ue)}}}else if(a.tag===18){if(l===null){R=a;try{var P=R.stateNode;u?jh(P,!0):jh(R.stateNode,!1)}catch(ue){Xe(R,R.return,ue)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}o&4&&(o=e.updateQueue,o!==null&&(l=o.retryQueue,l!==null&&(o.retryQueue=null,zo(e,l))));break;case 19:Qt(a,e),Kt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,zo(e,o)));break;case 30:break;case 21:break;default:Qt(a,e),Kt(e)}}function Kt(e){var a=e.flags;if(a&2){try{for(var l,o=e.return;o!==null;){if(Nm(o)){l=o;break}o=o.return}if(l==null)throw Error(i(160));switch(l.tag){case 27:var u=l.stateNode,d=su(e);Lo(e,d,u);break;case 5:var x=l.stateNode;l.flags&32&&(Vr(x,""),l.flags&=-33);var S=su(e);Lo(e,S,x);break;case 3:case 4:var R=l.stateNode.containerInfo,j=su(e);cu(e,j,R);break;default:throw Error(i(161))}}catch(q){Xe(e,e.return,q)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Ym(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function vn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)_m(e,a.alternate,a),a=a.sibling}function Ar(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Pn(4,a,a.return),Ar(a);break;case 1:Va(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&jm(a,a.return,l),Ar(a);break;case 27:vl(a.stateNode);case 26:case 5:Va(a,a.return),Ar(a);break;case 22:a.memoizedState===null&&Ar(a);break;case 30:Ar(a);break;default:Ar(a)}e=e.sibling}}function gn(e,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var o=a.alternate,u=e,d=a,x=d.flags;switch(d.tag){case 0:case 11:case 15:gn(u,d,l),ll(4,d);break;case 1:if(gn(u,d,l),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(j){Xe(o,o.return,j)}if(o=d,u=o.updateQueue,u!==null){var S=o.stateNode;try{var R=u.shared.hiddenCallbacks;if(R!==null)for(u.shared.hiddenCallbacks=null,u=0;u<R.length;u++)Tp(R[u],S)}catch(j){Xe(o,o.return,j)}}l&&x&64&&zm(d),ol(d,d.return);break;case 27:Bm(d);case 26:case 5:gn(u,d,l),l&&o===null&&x&4&&Fm(d),ol(d,d.return);break;case 12:gn(u,d,l);break;case 31:gn(u,d,l),l&&x&4&&Hm(u,d);break;case 13:gn(u,d,l),l&&x&4&&Vm(u,d);break;case 22:d.memoizedState===null&&gn(u,d,l),ol(d,d.return);break;case 30:break;default:gn(u,d,l)}a=a.sibling}}function fu(e,a){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Xi(l))}function du(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Xi(e))}function La(e,a,l,o){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Xm(e,a,l,o),a=a.sibling}function Xm(e,a,l,o){var u=a.flags;switch(a.tag){case 0:case 11:case 15:La(e,a,l,o),u&2048&&ll(9,a);break;case 1:La(e,a,l,o);break;case 3:La(e,a,l,o),u&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Xi(e)));break;case 12:if(u&2048){La(e,a,l,o),e=a.stateNode;try{var d=a.memoizedProps,x=d.id,S=d.onPostCommit;typeof S=="function"&&S(x,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Xe(a,a.return,R)}}else La(e,a,l,o);break;case 31:La(e,a,l,o);break;case 13:La(e,a,l,o);break;case 23:break;case 22:d=a.stateNode,x=a.alternate,a.memoizedState!==null?d._visibility&2?La(e,a,l,o):sl(e,a):d._visibility&2?La(e,a,l,o):(d._visibility|=2,ui(e,a,l,o,(a.subtreeFlags&10256)!==0||!1)),u&2048&&fu(x,a);break;case 24:La(e,a,l,o),u&2048&&du(a.alternate,a);break;default:La(e,a,l,o)}}function ui(e,a,l,o,u){for(u=u&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var d=e,x=a,S=l,R=o,j=x.flags;switch(x.tag){case 0:case 11:case 15:ui(d,x,S,R,u),ll(8,x);break;case 23:break;case 22:var q=x.stateNode;x.memoizedState!==null?q._visibility&2?ui(d,x,S,R,u):sl(d,x):(q._visibility|=2,ui(d,x,S,R,u)),u&&j&2048&&fu(x.alternate,x);break;case 24:ui(d,x,S,R,u),u&&j&2048&&du(x.alternate,x);break;default:ui(d,x,S,R,u)}a=a.sibling}}function sl(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=e,o=a,u=o.flags;switch(o.tag){case 22:sl(l,o),u&2048&&fu(o.alternate,o);break;case 24:sl(l,o),u&2048&&du(o.alternate,o);break;default:sl(l,o)}a=a.sibling}}var cl=8192;function fi(e,a,l){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)Wm(e,a,l),e=e.sibling}function Wm(e,a,l){switch(e.tag){case 26:fi(e,a,l),e.flags&cl&&e.memoizedState!==null&&Dy(l,Ma,e.memoizedState,e.memoizedProps);break;case 5:fi(e,a,l);break;case 3:case 4:var o=Ma;Ma=Wo(e.stateNode.containerInfo),fi(e,a,l),Ma=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=cl,cl=16777216,fi(e,a,l),cl=o):fi(e,a,l));break;default:fi(e,a,l)}}function Zm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ul(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var o=a[l];Ut=o,Km(o,e)}Zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&Pn(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,jo(e)):ul(e);break;default:ul(e)}}function jo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var l=0;l<a.length;l++){var o=a[l];Ut=o,Km(o,e)}Zm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Pn(8,a,a.return),jo(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,jo(a));break;default:jo(a)}e=e.sibling}}function Km(e,a){for(;Ut!==null;){var l=Ut;switch(l.tag){case 0:case 11:case 15:Pn(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var o=l.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xi(l.memoizedState.cache)}if(o=l.child,o!==null)o.return=l,Ut=o;else e:for(l=e;Ut!==null;){o=Ut;var u=o.sibling,d=o.return;if(Gm(o),o===l){Ut=null;break e}if(u!==null){u.return=d,Ut=u;break e}Ut=d}}}var qb={getCacheForType:function(e){var a=Ft(St),l=a.data.get(e);return l===void 0&&(l=e(),a.data.set(e,l)),l},cacheSignal:function(){return Ft(St).controller.signal}},Yb=typeof WeakMap=="function"?WeakMap:Map,qe=0,$e=null,je=null,Ne=0,Ye=0,la=null,Hn=!1,di=!1,pu=!1,xn=0,ft=0,Vn=0,kr=0,mu=0,oa=0,pi=0,fl=null,Jt=null,hu=!1,Fo=0,Jm=0,No=1/0,Bo=null,qn=null,kt=0,Yn=null,mi=null,bn=0,vu=0,gu=null,$m=null,dl=0,xu=null;function sa(){return(qe&2)!==0&&Ne!==0?Ne&-Ne:F.T!==null?wu():Nr()}function eh(){if(oa===0)if((Ne&536870912)===0||Ie){var e=ze;ze<<=1,(ze&3932160)===0&&(ze=262144),oa=e}else oa=536870912;return e=ra.current,e!==null&&(e.flags|=32),oa}function $t(e,a,l){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(hi(e,0),Xn(e,Ne,oa,!1)),tn(e,l),((qe&2)===0||e!==$e)&&(e===$e&&((qe&2)===0&&(kr|=l),ft===4&&Xn(e,Ne,oa,!1)),qa(e))}function th(e,a,l){if((qe&6)!==0)throw Error(i(327));var o=!l&&(a&127)===0&&(a&e.expiredLanes)===0||Rt(e,a),u=o?Zb(e,a):yu(e,a,!0),d=o;do{if(u===0){di&&!o&&Xn(e,a,0,!1);break}else{if(l=e.current.alternate,d&&!Xb(l)){u=yu(e,a,!1),d=!1;continue}if(u===2){if(d=a,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){a=x;e:{var S=e;u=fl;var R=S.current.memoizedState.isDehydrated;if(R&&(hi(S,x).flags|=256),x=yu(S,x,!1),x!==2){if(pu&&!R){S.errorRecoveryDisabledLanes|=d,kr|=d,u=4;break e}d=Jt,Jt=u,d!==null&&(Jt===null?Jt=d:Jt.push.apply(Jt,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){hi(e,0),Xn(e,a,0,!0);break}e:{switch(o=e,d=u,d){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Xn(o,a,oa,!Hn);break e;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(u=Fo+300-ae(),10<u)){if(Xn(o,a,oa,!Hn),yt(o,0,!0)!==0)break e;bn=a,o.timeoutHandle=Mh(ah.bind(null,o,l,Jt,Bo,hu,a,oa,kr,pi,Hn,d,"Throttled",-0,0),u);break e}ah(o,l,Jt,Bo,hu,a,oa,kr,pi,Hn,d,null,-0,0)}}break}while(!0);qa(e)}function ah(e,a,l,o,u,d,x,S,R,j,q,K,N,P){if(e.timeoutHandle=-1,K=a.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Wm(a,d,K);var ue=(d&62914560)===d?Fo-ae():(d&4194048)===d?Jm-ae():0;if(ue=Uy(K,ue),ue!==null){bn=d,e.cancelPendingCommit=ue(uh.bind(null,e,a,d,l,o,u,x,S,R,q,K,null,N,P)),Xn(e,d,x,!j);return}}uh(e,a,d,l,o,u,x,S,R)}function Xb(e){for(var a=e;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var o=0;o<l.length;o++){var u=l[o],d=u.getSnapshot;u=u.value;try{if(!aa(d(),u))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Xn(e,a,l,o){a&=~mu,a&=~kr,e.suspendedLanes|=a,e.pingedLanes&=~a,o&&(e.warmLanes|=a),o=e.expirationTimes;for(var u=a;0<u;){var d=31-At(u),x=1<<d;o[d]=-1,u&=~x}l!==0&&Ga(e,l,a)}function Io(){return(qe&6)===0?(pl(0),!1):!0}function bu(){if(je!==null){if(Ye===0)var e=je.return;else e=je,sn=xr=null,jc(e),ii=null,Zi=0,e=je;for(;e!==null;)Lm(e.alternate,e),e=e.return;je=null}}function hi(e,a){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,py(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),bn=0,bu(),$e=e,je=l=ln(e.current,null),Ne=a,Ye=0,la=null,Hn=!1,di=Rt(e,a),pu=!1,pi=oa=mu=kr=Vn=ft=0,Jt=fl=null,hu=!1,(a&8)!==0&&(a|=a&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=a;0<o;){var u=31-At(o),d=1<<u;a|=e[u],o&=~d}return xn=a,io(),l}function nh(e,a){Me=null,F.H=nl,a===ri||a===mo?(a=bp(),Ye=3):a===Tc?(a=bp(),Ye=4):Ye=a===Kc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,je===null&&(ft=1,Oo(e,ga(a,e.current)))}function rh(){var e=ra.current;return e===null?!0:(Ne&4194048)===Ne?Sa===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Sa:!1}function ih(){var e=F.H;return F.H=nl,e===null?nl:e}function lh(){var e=F.A;return F.A=qb,e}function _o(){ft=4,Hn||(Ne&4194048)!==Ne&&ra.current!==null||(di=!0),(Vn&134217727)===0&&(kr&134217727)===0||$e===null||Xn($e,Ne,oa,!1)}function yu(e,a,l){var o=qe;qe|=2;var u=ih(),d=lh();($e!==e||Ne!==a)&&(Bo=null,hi(e,a)),a=!1;var x=ft;e:do try{if(Ye!==0&&je!==null){var S=je,R=la;switch(Ye){case 8:bu(),x=6;break e;case 3:case 2:case 9:case 6:ra.current===null&&(a=!0);var j=Ye;if(Ye=0,la=null,vi(e,S,R,j),l&&di){x=0;break e}break;default:j=Ye,Ye=0,la=null,vi(e,S,R,j)}}Wb(),x=ft;break}catch(q){nh(e,q)}while(!0);return a&&e.shellSuspendCounter++,sn=xr=null,qe=o,F.H=u,F.A=d,je===null&&($e=null,Ne=0,io()),x}function Wb(){for(;je!==null;)oh(je)}function Zb(e,a){var l=qe;qe|=2;var o=ih(),u=lh();$e!==e||Ne!==a?(Bo=null,No=ae()+500,hi(e,a)):di=Rt(e,a);e:do try{if(Ye!==0&&je!==null){a=je;var d=la;t:switch(Ye){case 1:Ye=0,la=null,vi(e,a,d,1);break;case 2:case 9:if(gp(d)){Ye=0,la=null,sh(a);break}a=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),qa(e)},d.then(a,a);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:gp(d)?(Ye=0,la=null,sh(a)):(Ye=0,la=null,vi(e,a,d,7));break;case 5:var x=null;switch(je.tag){case 26:x=je.memoizedState;case 5:case 27:var S=je;if(x?Xh(x):S.stateNode.complete){Ye=0,la=null;var R=S.sibling;if(R!==null)je=R;else{var j=S.return;j!==null?(je=j,Go(j)):je=null}break t}}Ye=0,la=null,vi(e,a,d,5);break;case 6:Ye=0,la=null,vi(e,a,d,6);break;case 8:bu(),ft=6;break e;default:throw Error(i(462))}}Qb();break}catch(q){nh(e,q)}while(!0);return sn=xr=null,F.H=o,F.A=u,qe=l,je!==null?0:($e=null,Ne=0,io(),ft)}function Qb(){for(;je!==null&&!Ja();)oh(je)}function oh(e){var a=Um(e.alternate,e,xn);e.memoizedProps=e.pendingProps,a===null?Go(e):je=a}function sh(e){var a=e,l=a.alternate;switch(a.tag){case 15:case 0:a=Em(l,a,a.pendingProps,a.type,void 0,Ne);break;case 11:a=Em(l,a,a.pendingProps,a.type.render,a.ref,Ne);break;case 5:jc(a);default:Lm(l,a),a=je=lp(a,xn),a=Um(l,a,xn)}e.memoizedProps=e.pendingProps,a===null?Go(e):je=a}function vi(e,a,l,o){sn=xr=null,jc(a),ii=null,Zi=0;var u=a.return;try{if(Bb(e,u,a,l,Ne)){ft=1,Oo(e,ga(l,e.current)),je=null;return}}catch(d){if(u!==null)throw je=u,d;ft=1,Oo(e,ga(l,e.current)),je=null;return}a.flags&32768?(Ie||o===1?e=!0:di||(Ne&536870912)!==0?e=!1:(Hn=e=!0,(o===2||o===9||o===3||o===6)&&(o=ra.current,o!==null&&o.tag===13&&(o.flags|=16384))),ch(a,e)):Go(a)}function Go(e){var a=e;do{if((a.flags&32768)!==0){ch(a,Hn);return}e=a.return;var l=Gb(a.alternate,a,xn);if(l!==null){je=l;return}if(a=a.sibling,a!==null){je=a;return}je=a=e}while(a!==null);ft===0&&(ft=5)}function ch(e,a){do{var l=Pb(e.alternate,e);if(l!==null){l.flags&=32767,je=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(e=e.sibling,e!==null)){je=e;return}je=e=l}while(e!==null);ft=6,je=null}function uh(e,a,l,o,u,d,x,S,R){e.cancelPendingCommit=null;do Po();while(kt!==0);if((qe&6)!==0)throw Error(i(327));if(a!==null){if(a===e.current)throw Error(i(177));if(d=a.lanes|a.childLanes,d|=sc,Ht(e,l,d,x,S,R),e===$e&&(je=$e=null,Ne=0),mi=a,Yn=e,bn=l,vu=d,gu=u,$m=o,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ey(xt,function(){return hh(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=$.p,$.p=2,x=qe,qe|=4;try{Hb(e,a,l)}finally{qe=x,$.p=u,F.T=o}}kt=1,fh(),dh(),ph()}}function fh(){if(kt===1){kt=0;var e=Yn,a=mi,l=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||l){l=F.T,F.T=null;var o=$.p;$.p=2;var u=qe;qe|=4;try{qm(a,e);var d=Mu,x=Kd(e.containerInfo),S=d.focusedElem,R=d.selectionRange;if(x!==S&&S&&S.ownerDocument&&Qd(S.ownerDocument.documentElement,S)){if(R!==null&&nc(S)){var j=R.start,q=R.end;if(q===void 0&&(q=j),"selectionStart"in S)S.selectionStart=j,S.selectionEnd=Math.min(q,S.value.length);else{var K=S.ownerDocument||document,N=K&&K.defaultView||window;if(N.getSelection){var P=N.getSelection(),ue=S.textContent.length,Ee=Math.min(R.start,ue),Ke=R.end===void 0?Ee:Math.min(R.end,ue);!P.extend&&Ee>Ke&&(x=Ke,Ke=Ee,Ee=x);var L=Zd(S,Ee),U=Zd(S,Ke);if(L&&U&&(P.rangeCount!==1||P.anchorNode!==L.node||P.anchorOffset!==L.offset||P.focusNode!==U.node||P.focusOffset!==U.offset)){var z=K.createRange();z.setStart(L.node,L.offset),P.removeAllRanges(),Ee>Ke?(P.addRange(z),P.extend(U.node,U.offset)):(z.setEnd(U.node,U.offset),P.addRange(z))}}}}for(K=[],P=S;P=P.parentNode;)P.nodeType===1&&K.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<K.length;S++){var W=K[S];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}es=!!Uu,Mu=Uu=null}finally{qe=u,$.p=o,F.T=l}}e.current=a,kt=2}}function dh(){if(kt===2){kt=0;var e=Yn,a=mi,l=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||l){l=F.T,F.T=null;var o=$.p;$.p=2;var u=qe;qe|=4;try{_m(e,a.alternate,a)}finally{qe=u,$.p=o,F.T=l}}kt=3}}function ph(){if(kt===4||kt===3){kt=0,Fr();var e=Yn,a=mi,l=bn,o=$m;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?kt=5:(kt=0,mi=Yn=null,mh(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qn=null),Mi(l),a=a.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ra,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=F.T,u=$.p,$.p=2,F.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var S=o[x];d(S.value,{componentStack:S.stack})}}finally{F.T=a,$.p=u}}(bn&3)!==0&&Po(),qa(e),u=e.pendingLanes,(l&261930)!==0&&(u&42)!==0?e===xu?dl++:(dl=0,xu=e):dl=0,pl(0)}}function mh(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Xi(a)))}function Po(){return fh(),dh(),ph(),hh()}function hh(){if(kt!==5)return!1;var e=Yn,a=vu;vu=0;var l=Mi(bn),o=F.T,u=$.p;try{$.p=32>l?32:l,F.T=null,l=gu,gu=null;var d=Yn,x=bn;if(kt=0,mi=Yn=null,bn=0,(qe&6)!==0)throw Error(i(331));var S=qe;if(qe|=4,Qm(d.current),Xm(d,d.current,x,l),qe=S,pl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ra,d)}catch{}return!0}finally{$.p=u,F.T=o,mh(e,a)}}function vh(e,a,l){a=ga(l,a),a=Qc(e.stateNode,a,2),e=In(e,a,2),e!==null&&(tn(e,2),qa(e))}function Xe(e,a,l){if(e.tag===3)vh(e,e,l);else for(;a!==null;){if(a.tag===3){vh(a,e,l);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qn===null||!qn.has(o))){e=ga(l,e),l=gm(2),o=In(a,l,2),o!==null&&(xm(l,o,a,e),tn(o,2),qa(o));break}}a=a.return}}function Su(e,a,l){var o=e.pingCache;if(o===null){o=e.pingCache=new Yb;var u=new Set;o.set(a,u)}else u=o.get(a),u===void 0&&(u=new Set,o.set(a,u));u.has(l)||(pu=!0,u.add(l),e=Kb.bind(null,e,a,l),a.then(e,e))}function Kb(e,a,l){var o=e.pingCache;o!==null&&o.delete(a),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,$e===e&&(Ne&l)===l&&(ft===4||ft===3&&(Ne&62914560)===Ne&&300>ae()-Fo?(qe&2)===0&&hi(e,0):mu|=l,pi===Ne&&(pi=0)),qa(e)}function gh(e,a){a===0&&(a=Pt()),e=hr(e,a),e!==null&&(tn(e,a),qa(e))}function Jb(e){var a=e.memoizedState,l=0;a!==null&&(l=a.retryLane),gh(e,l)}function $b(e,a){var l=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(l=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(a),gh(e,l)}function ey(e,a){return Yt(e,a)}var Ho=null,gi=null,Cu=!1,Vo=!1,Tu=!1,Wn=0;function qa(e){e!==gi&&e.next===null&&(gi===null?Ho=gi=e:gi=gi.next=e),Vo=!0,Cu||(Cu=!0,ay())}function pl(e,a){if(!Tu&&Vo){Tu=!0;do for(var l=!1,o=Ho;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,S=o.pingedLanes;d=(1<<31-At(42|e)+1)-1,d&=u&~(x&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(l=!0,Sh(o,d))}else d=Ne,d=yt(o,o===$e?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Rt(o,d)||(l=!0,Sh(o,d));o=o.next}while(l);Tu=!1}}function ty(){xh()}function xh(){Vo=Cu=!1;var e=0;Wn!==0&&dy()&&(e=Wn);for(var a=ae(),l=null,o=Ho;o!==null;){var u=o.next,d=bh(o,a);d===0?(o.next=null,l===null?Ho=u:l.next=u,u===null&&(gi=l)):(l=o,(e!==0||(d&3)!==0)&&(Vo=!0)),o=u}kt!==0&&kt!==5||pl(e),Wn!==0&&(Wn=0)}function bh(e,a){for(var l=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-At(d),S=1<<x,R=u[x];R===-1?((S&l)===0||(S&o)!==0)&&(u[x]=Ve(S,a)):R<=a&&(e.expiredLanes|=S),d&=~S}if(a=$e,l=Ne,l=yt(e,e===a?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,l===0||e===a&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&or(o),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Rt(e,l)){if(a=l&-l,a===e.callbackPriority)return a;switch(o!==null&&or(o),Mi(l)){case 2:case 8:l=it;break;case 32:l=xt;break;case 268435456:l=pa;break;default:l=xt}return o=yh.bind(null,e),l=Yt(l,o),e.callbackPriority=a,e.callbackNode=l,a}return o!==null&&o!==null&&or(o),e.callbackPriority=2,e.callbackNode=null,2}function yh(e,a){if(kt!==0&&kt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Po()&&e.callbackNode!==l)return null;var o=Ne;return o=yt(e,e===$e?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(th(e,o,a),bh(e,ae()),e.callbackNode!=null&&e.callbackNode===l?yh.bind(null,e):null)}function Sh(e,a){if(Po())return null;th(e,a,!0)}function ay(){my(function(){(qe&6)!==0?Yt(tt,ty):xh()})}function wu(){if(Wn===0){var e=ai;e===0&&(e=H,H<<=1,(H&261888)===0&&(H=256)),Wn=e}return Wn}function Ch(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(""+e)}function Th(e,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,e.id&&l.setAttribute("form",e.id),a.parentNode.insertBefore(l,a),e=new FormData(e),l.parentNode.removeChild(l),e}function ny(e,a,l,o,u){if(a==="submit"&&l&&l.stateNode===u){var d=Ch((u[Xt]||null).action),x=o.submitter;x&&(a=(a=x[Xt]||null)?Ch(a.formAction):x.getAttribute("formAction"),a!==null&&(d=a,x=null));var S=new to("action","action",null,o,u);e.push({event:S,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wn!==0){var R=x?Th(u,x):new FormData(u);Vc(l,{pending:!0,data:R,method:u.method,action:d},null,R)}}else typeof d=="function"&&(S.preventDefault(),R=x?Th(u,x):new FormData(u),Vc(l,{pending:!0,data:R,method:u.method,action:d},d,R))},currentTarget:u}]})}}for(var Eu=0;Eu<oc.length;Eu++){var Au=oc[Eu],ry=Au.toLowerCase(),iy=Au[0].toUpperCase()+Au.slice(1);Ua(ry,"on"+iy)}Ua(ep,"onAnimationEnd"),Ua(tp,"onAnimationIteration"),Ua(ap,"onAnimationStart"),Ua("dblclick","onDoubleClick"),Ua("focusin","onFocus"),Ua("focusout","onBlur"),Ua(Sb,"onTransitionRun"),Ua(Cb,"onTransitionStart"),Ua(Tb,"onTransitionCancel"),Ua(np,"onTransitionEnd"),Pr("onMouseEnter",["mouseout","mouseover"]),Pr("onMouseLeave",["mouseout","mouseover"]),Pr("onPointerEnter",["pointerout","pointerover"]),Pr("onPointerLeave",["pointerout","pointerover"]),fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fr("onBeforeInput",["compositionend","keypress","textInput","paste"]),fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function wh(e,a){a=(a&4)!==0;for(var l=0;l<e.length;l++){var o=e[l],u=o.event;o=o.listeners;e:{var d=void 0;if(a)for(var x=o.length-1;0<=x;x--){var S=o[x],R=S.instance,j=S.currentTarget;if(S=S.listener,R!==d&&u.isPropagationStopped())break e;d=S,u.currentTarget=j;try{d(u)}catch(q){ro(q)}u.currentTarget=null,d=R}else for(x=0;x<o.length;x++){if(S=o[x],R=S.instance,j=S.currentTarget,S=S.listener,R!==d&&u.isPropagationStopped())break e;d=S,u.currentTarget=j;try{d(u)}catch(q){ro(q)}u.currentTarget=null,d=R}}}}function Fe(e,a){var l=a[Is];l===void 0&&(l=a[Is]=new Set);var o=e+"__bubble";l.has(o)||(Eh(a,e,2,!1),l.add(o))}function ku(e,a,l){var o=0;a&&(o|=4),Eh(l,e,o,a)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[qo]){e[qo]=!0,xd.forEach(function(l){l!=="selectionchange"&&(ly.has(l)||ku(l,!1,e),ku(l,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[qo]||(a[qo]=!0,ku("selectionchange",!1,a))}}function Eh(e,a,l,o){switch(e0(a)){case 2:var u=zy;break;case 8:u=jy;break;default:u=Hu}l=u.bind(null,a,l,e),u=void 0,!Ws||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(a,l,{capture:!0,passive:u}):e.addEventListener(a,l,!0):u!==void 0?e.addEventListener(a,l,{passive:u}):e.addEventListener(a,l,!1)}function Ru(e,a,l,o,u){var d=o;if((a&1)===0&&(a&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var S=o.stateNode.containerInfo;if(S===u)break;if(x===4)for(x=o.return;x!==null;){var R=x.tag;if((R===3||R===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;S!==null;){if(x=Ir(S),x===null)return;if(R=x.tag,R===5||R===6||R===26||R===27){o=d=x;continue e}S=S.parentNode}}o=o.return}Dd(function(){var j=d,q=Ys(l),K=[];e:{var N=rp.get(e);if(N!==void 0){var P=to,ue=e;switch(e){case"keypress":if($l(l)===0)break e;case"keydown":case"keyup":P=$x;break;case"focusin":ue="focus",P=Js;break;case"focusout":ue="blur",P=Js;break;case"beforeblur":case"afterblur":P=Js;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=ab;break;case ep:case tp:case ap:P=Vx;break;case np:P=rb;break;case"scroll":case"scrollend":P=Ix;break;case"wheel":P=lb;break;case"copy":case"cut":case"paste":P=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=jd;break;case"toggle":case"beforetoggle":P=sb}var Ee=(a&4)!==0,Ke=!Ee&&(e==="scroll"||e==="scrollend"),L=Ee?N!==null?N+"Capture":null:N;Ee=[];for(var U=j,z;U!==null;){var W=U;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||L===null||(W=Fi(U,L),W!=null&&Ee.push(hl(U,W,z))),Ke)break;U=U.return}0<Ee.length&&(N=new P(N,ue,null,l,q),K.push({event:N,listeners:Ee}))}}if((a&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",N&&l!==qs&&(ue=l.relatedTarget||l.fromElement)&&(Ir(ue)||ue[Br]))break e;if((P||N)&&(N=q.window===q?q:(N=q.ownerDocument)?N.defaultView||N.parentWindow:window,P?(ue=l.relatedTarget||l.toElement,P=j,ue=ue?Ir(ue):null,ue!==null&&(Ke=c(ue),Ee=ue.tag,ue!==Ke||Ee!==5&&Ee!==27&&Ee!==6)&&(ue=null)):(P=null,ue=j),P!==ue)){if(Ee=Ld,W="onMouseLeave",L="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(Ee=jd,W="onPointerLeave",L="onPointerEnter",U="pointer"),Ke=P==null?N:ji(P),z=ue==null?N:ji(ue),N=new Ee(W,U+"leave",P,l,q),N.target=Ke,N.relatedTarget=z,W=null,Ir(q)===j&&(Ee=new Ee(L,U+"enter",ue,l,q),Ee.target=z,Ee.relatedTarget=Ke,W=Ee),Ke=W,P&&ue)t:{for(Ee=oy,L=P,U=ue,z=0,W=L;W;W=Ee(W))z++;W=0;for(var xe=U;xe;xe=Ee(xe))W++;for(;0<z-W;)L=Ee(L),z--;for(;0<W-z;)U=Ee(U),W--;for(;z--;){if(L===U||U!==null&&L===U.alternate){Ee=L;break t}L=Ee(L),U=Ee(U)}Ee=null}else Ee=null;P!==null&&Ah(K,N,P,Ee,!1),ue!==null&&Ke!==null&&Ah(K,Ke,ue,Ee,!0)}}e:{if(N=j?ji(j):window,P=N.nodeName&&N.nodeName.toLowerCase(),P==="select"||P==="input"&&N.type==="file")var Pe=Hd;else if(Gd(N))if(Vd)Pe=xb;else{Pe=vb;var pe=hb}else P=N.nodeName,!P||P.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&Vs(j.elementType)&&(Pe=Hd):Pe=gb;if(Pe&&(Pe=Pe(e,j))){Pd(K,Pe,l,q);break e}pe&&pe(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&Hs(N,"number",N.value)}switch(pe=j?ji(j):window,e){case"focusin":(Gd(pe)||pe.contentEditable==="true")&&(Wr=pe,rc=j,Vi=null);break;case"focusout":Vi=rc=Wr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Jd(K,l,q);break;case"selectionchange":if(yb)break;case"keydown":case"keyup":Jd(K,l,q)}var Le;if(ec)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else Xr?Id(e,l)&&(Be="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Be="onCompositionStart");Be&&(Fd&&l.locale!=="ko"&&(Xr||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Xr&&(Le=Ud()):(Mn=q,Zs="value"in Mn?Mn.value:Mn.textContent,Xr=!0)),pe=Yo(j,Be),0<pe.length&&(Be=new zd(Be,e,null,l,q),K.push({event:Be,listeners:pe}),Le?Be.data=Le:(Le=_d(l),Le!==null&&(Be.data=Le)))),(Le=ub?fb(e,l):db(e,l))&&(Be=Yo(j,"onBeforeInput"),0<Be.length&&(pe=new zd("onBeforeInput","beforeinput",null,l,q),K.push({event:pe,listeners:Be}),pe.data=Le)),ny(K,e,j,l,q)}wh(K,a)})}function hl(e,a,l){return{instance:e,listener:a,currentTarget:l}}function Yo(e,a){for(var l=a+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fi(e,l),u!=null&&o.unshift(hl(e,u,d)),u=Fi(e,a),u!=null&&o.push(hl(e,u,d))),e.tag===3)return o;e=e.return}return[]}function oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ah(e,a,l,o,u){for(var d=a._reactName,x=[];l!==null&&l!==o;){var S=l,R=S.alternate,j=S.stateNode;if(S=S.tag,R!==null&&R===o)break;S!==5&&S!==26&&S!==27||j===null||(R=j,u?(j=Fi(l,d),j!=null&&x.unshift(hl(l,j,R))):u||(j=Fi(l,d),j!=null&&x.push(hl(l,j,R)))),l=l.return}x.length!==0&&e.push({event:a,listeners:x})}var sy=/\r\n?/g,cy=/\u0000|\uFFFD/g;function kh(e){return(typeof e=="string"?e:""+e).replace(sy,`
`).replace(cy,"")}function Oh(e,a){return a=kh(a),kh(e)===a}function Qe(e,a,l,o,u,d){switch(l){case"children":typeof o=="string"?a==="body"||a==="textarea"&&o===""||Vr(e,o):(typeof o=="number"||typeof o=="bigint")&&a!=="body"&&Vr(e,""+o);break;case"className":Zl(e,"class",o);break;case"tabIndex":Zl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Zl(e,l,o);break;case"style":Od(e,o,d);break;case"data":if(a!=="object"){Zl(e,"data",o);break}case"src":case"href":if(o===""&&(a!=="a"||l!=="href")){e.removeAttribute(l);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(l);break}o=Kl(""+o),e.setAttribute(l,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(l==="formAction"?(a!=="input"&&Qe(e,a,"name",u.name,u,null),Qe(e,a,"formEncType",u.formEncType,u,null),Qe(e,a,"formMethod",u.formMethod,u,null),Qe(e,a,"formTarget",u.formTarget,u,null)):(Qe(e,a,"encType",u.encType,u,null),Qe(e,a,"method",u.method,u,null),Qe(e,a,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(l);break}o=Kl(""+o),e.setAttribute(l,o);break;case"onClick":o!=null&&(e.onclick=nn);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(l=o.__html,l!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=l}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}l=Kl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,""+o):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":o===!0?e.setAttribute(l,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,o):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(l,o):e.removeAttribute(l);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(l):e.setAttribute(l,o);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),Wl(e,"popover",o);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wl(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Nx.get(l)||l,Wl(e,l,o))}}function Du(e,a,l,o,u,d){switch(l){case"style":Od(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(l=o.__html,l!=null){if(u.children!=null)throw Error(i(60));e.innerHTML=l}}break;case"children":typeof o=="string"?Vr(e,o):(typeof o=="number"||typeof o=="bigint")&&Vr(e,""+o);break;case"onScroll":o!=null&&Fe("scroll",e);break;case"onScrollEnd":o!=null&&Fe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bd.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),a=l.slice(2,u?l.length-7:void 0),d=e[Xt]||null,d=d!=null?d[l]:null,typeof d=="function"&&e.removeEventListener(a,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(a,o,u);break e}l in e?e[l]=o:o===!0?e.setAttribute(l,""):Wl(e,l,o)}}}function Bt(e,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var o=!1,u=!1,d;for(d in l)if(l.hasOwnProperty(d)){var x=l[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Qe(e,a,d,x,l,null)}}u&&Qe(e,a,"srcSet",l.srcSet,l,null),o&&Qe(e,a,"src",l.src,l,null);return;case"input":Fe("invalid",e);var S=d=x=u=null,R=null,j=null;for(o in l)if(l.hasOwnProperty(o)){var q=l[o];if(q!=null)switch(o){case"name":u=q;break;case"type":x=q;break;case"checked":R=q;break;case"defaultChecked":j=q;break;case"value":d=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,a));break;default:Qe(e,a,o,q,l,null)}}wd(e,d,S,R,j,x,u,!1);return;case"select":Fe("invalid",e),o=x=d=null;for(u in l)if(l.hasOwnProperty(u)&&(S=l[u],S!=null))switch(u){case"value":d=S;break;case"defaultValue":x=S;break;case"multiple":o=S;default:Qe(e,a,u,S,l,null)}a=d,l=x,e.multiple=!!o,a!=null?Hr(e,!!o,a,!1):l!=null&&Hr(e,!!o,l,!0);return;case"textarea":Fe("invalid",e),d=u=o=null;for(x in l)if(l.hasOwnProperty(x)&&(S=l[x],S!=null))switch(x){case"value":o=S;break;case"defaultValue":u=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:Qe(e,a,x,S,l,null)}Ad(e,o,u,d);return;case"option":for(R in l)l.hasOwnProperty(R)&&(o=l[R],o!=null)&&(R==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Qe(e,a,R,o,l,null));return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(o=0;o<ml.length;o++)Fe(ml[o],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in l)if(l.hasOwnProperty(j)&&(o=l[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Qe(e,a,j,o,l,null)}return;default:if(Vs(a)){for(q in l)l.hasOwnProperty(q)&&(o=l[q],o!==void 0&&Du(e,a,q,o,l,void 0));return}}for(S in l)l.hasOwnProperty(S)&&(o=l[S],o!=null&&Qe(e,a,S,o,l,null))}function uy(e,a,l,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,S=null,R=null,j=null,q=null;for(P in l){var K=l[P];if(l.hasOwnProperty(P)&&K!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":R=K;default:o.hasOwnProperty(P)||Qe(e,a,P,null,o,K)}}for(var N in o){var P=o[N];if(K=l[N],o.hasOwnProperty(N)&&(P!=null||K!=null))switch(N){case"type":d=P;break;case"name":u=P;break;case"checked":j=P;break;case"defaultChecked":q=P;break;case"value":x=P;break;case"defaultValue":S=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,a));break;default:P!==K&&Qe(e,a,N,P,o,K)}}Ps(e,x,S,R,j,q,d,u);return;case"select":P=x=S=N=null;for(d in l)if(R=l[d],l.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":P=R;default:o.hasOwnProperty(d)||Qe(e,a,d,null,o,R)}for(u in o)if(d=o[u],R=l[u],o.hasOwnProperty(u)&&(d!=null||R!=null))switch(u){case"value":N=d;break;case"defaultValue":S=d;break;case"multiple":x=d;default:d!==R&&Qe(e,a,u,d,o,R)}a=S,l=x,o=P,N!=null?Hr(e,!!l,N,!1):!!o!=!!l&&(a!=null?Hr(e,!!l,a,!0):Hr(e,!!l,l?[]:"",!1));return;case"textarea":P=N=null;for(S in l)if(u=l[S],l.hasOwnProperty(S)&&u!=null&&!o.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Qe(e,a,S,null,o,u)}for(x in o)if(u=o[x],d=l[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":N=u;break;case"defaultValue":P=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(i(91));break;default:u!==d&&Qe(e,a,x,u,o,d)}Ed(e,N,P);return;case"option":for(var ue in l)N=l[ue],l.hasOwnProperty(ue)&&N!=null&&!o.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:Qe(e,a,ue,null,o,N));for(R in o)N=o[R],P=l[R],o.hasOwnProperty(R)&&N!==P&&(N!=null||P!=null)&&(R==="selected"?e.selected=N&&typeof N!="function"&&typeof N!="symbol":Qe(e,a,R,N,o,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in l)N=l[Ee],l.hasOwnProperty(Ee)&&N!=null&&!o.hasOwnProperty(Ee)&&Qe(e,a,Ee,null,o,N);for(j in o)if(N=o[j],P=l[j],o.hasOwnProperty(j)&&N!==P&&(N!=null||P!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(i(137,a));break;default:Qe(e,a,j,N,o,P)}return;default:if(Vs(a)){for(var Ke in l)N=l[Ke],l.hasOwnProperty(Ke)&&N!==void 0&&!o.hasOwnProperty(Ke)&&Du(e,a,Ke,void 0,o,N);for(q in o)N=o[q],P=l[q],!o.hasOwnProperty(q)||N===P||N===void 0&&P===void 0||Du(e,a,q,N,o,P);return}}for(var L in l)N=l[L],l.hasOwnProperty(L)&&N!=null&&!o.hasOwnProperty(L)&&Qe(e,a,L,null,o,N);for(K in o)N=o[K],P=l[K],!o.hasOwnProperty(K)||N===P||N==null&&P==null||Qe(e,a,K,N,o,P)}function Rh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,l=performance.getEntriesByType("resource"),o=0;o<l.length;o++){var u=l[o],d=u.transferSize,x=u.initiatorType,S=u.duration;if(d&&S&&Rh(x)){for(x=0,S=u.responseEnd,o+=1;o<l.length;o++){var R=l[o],j=R.startTime;if(j>S)break;var q=R.transferSize,K=R.initiatorType;q&&Rh(K)&&(R=R.responseEnd,x+=q*(R<S?1:(S-j)/(R-j)))}if(--o,a+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uu=null,Mu=null;function Xo(e){return e.nodeType===9?e:e.ownerDocument}function Dh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uh(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Lu(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var zu=null;function dy(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var Mh=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(e){return Lh.resolve(null).then(e).catch(hy)}:Mh;function hy(e){setTimeout(function(){throw e})}function Zn(e){return e==="head"}function zh(e,a){var l=a,o=0;do{var u=l.nextSibling;if(e.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(o===0){e.removeChild(u),Si(a);return}o--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")o++;else if(l==="html")vl(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,vl(l);for(var d=l.firstChild;d;){var x=d.nextSibling,S=d.nodeName;d[zi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=x}}else l==="body"&&vl(e.ownerDocument.body);l=u}while(l);Si(a)}function jh(e,a){var l=e;e=0;do{var o=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=o}while(l)}function ju(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":ju(l),_s(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function vy(e,a,l,o){for(;e.nodeType===1;){var u=l;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[zi])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ca(e.nextSibling),e===null)break}return null}function gy(e,a,l){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ca(e.nextSibling),e===null))return null;return e}function Fh(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ca(e.nextSibling),e===null))return null;return e}function Fu(e){return e.data==="$?"||e.data==="$~"}function Nu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xy(e,a){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||l.readyState!=="loading")a();else{var o=function(){a(),l.removeEventListener("DOMContentLoaded",o)};l.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ca(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Bu=null;function Nh(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(a===0)return Ca(e.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}e=e.nextSibling}return null}function Bh(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return e;a--}else l!=="/$"&&l!=="/&"||a++}e=e.previousSibling}return null}function Ih(e,a,l){switch(a=Xo(l),e){case"html":if(e=a.documentElement,!e)throw Error(i(452));return e;case"head":if(e=a.head,!e)throw Error(i(453));return e;case"body":if(e=a.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vl(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);_s(e)}var Ta=new Map,_h=new Set;function Wo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var yn=$.d;$.d={f:by,r:yy,D:Sy,C:Cy,L:Ty,m:wy,X:Ay,S:Ey,M:ky};function by(){var e=yn.f(),a=Io();return e||a}function yy(e){var a=_r(e);a!==null&&a.tag===5&&a.type==="form"?nm(a):yn.r(e)}var xi=typeof document>"u"?null:document;function Gh(e,a,l){var o=xi;if(o&&typeof a=="string"&&a){var u=ha(a);u='link[rel="'+e+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),_h.has(u)||(_h.add(u),e={rel:e,crossOrigin:l,href:a},o.querySelector(u)===null&&(a=o.createElement("link"),Bt(a,"link",e),Dt(a),o.head.appendChild(a)))}}function Sy(e){yn.D(e),Gh("dns-prefetch",e,null)}function Cy(e,a){yn.C(e,a),Gh("preconnect",e,a)}function Ty(e,a,l){yn.L(e,a,l);var o=xi;if(o&&e&&a){var u='link[rel="preload"][as="'+ha(a)+'"]';a==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+ha(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+ha(l.imageSizes)+'"]')):u+='[href="'+ha(e)+'"]';var d=u;switch(a){case"style":d=bi(e);break;case"script":d=yi(e)}Ta.has(d)||(e=b({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:e,as:a},l),Ta.set(d,e),o.querySelector(u)!==null||a==="style"&&o.querySelector(gl(d))||a==="script"&&o.querySelector(xl(d))||(a=o.createElement("link"),Bt(a,"link",e),Dt(a),o.head.appendChild(a)))}}function wy(e,a){yn.m(e,a);var l=xi;if(l&&e){var o=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+ha(o)+'"][href="'+ha(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yi(e)}if(!Ta.has(d)&&(e=b({rel:"modulepreload",href:e},a),Ta.set(d,e),l.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xl(d)))return}o=l.createElement("link"),Bt(o,"link",e),Dt(o),l.head.appendChild(o)}}}function Ey(e,a,l){yn.S(e,a,l);var o=xi;if(o&&e){var u=Gr(o).hoistableStyles,d=bi(e);a=a||"default";var x=u.get(d);if(!x){var S={loading:0,preload:null};if(x=o.querySelector(gl(d)))S.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":a},l),(l=Ta.get(d))&&Iu(e,l);var R=x=o.createElement("link");Dt(R),Bt(R,"link",e),R._p=new Promise(function(j,q){R.onload=j,R.onerror=q}),R.addEventListener("load",function(){S.loading|=1}),R.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Zo(x,a,o)}x={type:"stylesheet",instance:x,count:1,state:S},u.set(d,x)}}}function Ay(e,a){yn.X(e,a);var l=xi;if(l&&e){var o=Gr(l).hoistableScripts,u=yi(e),d=o.get(u);d||(d=l.querySelector(xl(u)),d||(e=b({src:e,async:!0},a),(a=Ta.get(u))&&_u(e,a),d=l.createElement("script"),Dt(d),Bt(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ky(e,a){yn.M(e,a);var l=xi;if(l&&e){var o=Gr(l).hoistableScripts,u=yi(e),d=o.get(u);d||(d=l.querySelector(xl(u)),d||(e=b({src:e,async:!0,type:"module"},a),(a=Ta.get(u))&&_u(e,a),d=l.createElement("script"),Dt(d),Bt(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ph(e,a,l,o){var u=(u=me.current)?Wo(u):null;if(!u)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=bi(l.href),l=Gr(u).hoistableStyles,o=l.get(a),o||(o={type:"style",instance:null,count:0,state:null},l.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=bi(l.href);var d=Gr(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(gl(e)))&&!d._p&&(x.instance=d,x.state.loading=5),Ta.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ta.set(e,l),d||Oy(u,e,l,x.state))),a&&o===null)throw Error(i(528,""));return x}if(a&&o!==null)throw Error(i(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=yi(l),l=Gr(u).hoistableScripts,o=l.get(a),o||(o={type:"script",instance:null,count:0,state:null},l.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function bi(e){return'href="'+ha(e)+'"'}function gl(e){return'link[rel="stylesheet"]['+e+"]"}function Hh(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Oy(e,a,l,o){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?o.loading=1:(a=e.createElement("link"),o.preload=a,a.addEventListener("load",function(){return o.loading|=1}),a.addEventListener("error",function(){return o.loading|=2}),Bt(a,"link",l),Dt(a),e.head.appendChild(a))}function yi(e){return'[src="'+ha(e)+'"]'}function xl(e){return"script[async]"+e}function Vh(e,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var o=e.querySelector('style[data-href~="'+ha(l.href)+'"]');if(o)return a.instance=o,Dt(o),o;var u=b({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Dt(o),Bt(o,"style",u),Zo(o,l.precedence,e),a.instance=o;case"stylesheet":u=bi(l.href);var d=e.querySelector(gl(u));if(d)return a.state.loading|=4,a.instance=d,Dt(d),d;o=Hh(l),(u=Ta.get(u))&&Iu(o,u),d=(e.ownerDocument||e).createElement("link"),Dt(d);var x=d;return x._p=new Promise(function(S,R){x.onload=S,x.onerror=R}),Bt(d,"link",o),a.state.loading|=4,Zo(d,l.precedence,e),a.instance=d;case"script":return d=yi(l.src),(u=e.querySelector(xl(d)))?(a.instance=u,Dt(u),u):(o=l,(u=Ta.get(d))&&(o=b({},l),_u(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Dt(u),Bt(u,"link",o),e.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(o=a.instance,a.state.loading|=4,Zo(o,l.precedence,e));return a.instance}function Zo(e,a,l){for(var o=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var S=o[x];if(S.dataset.precedence===a)d=S;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(e,a.firstChild))}function Iu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function _u(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Qo=null;function qh(e,a,l){if(Qo===null){var o=new Map,u=Qo=new Map;u.set(l,o)}else u=Qo,o=u.get(l),o||(o=new Map,u.set(l,o));if(o.has(e))return o;for(o.set(e,null),l=l.getElementsByTagName(e),u=0;u<l.length;u++){var d=l[u];if(!(d[zi]||d[zt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(a)||"";x=e+x;var S=o.get(x);S?S.push(d):o.set(x,[d])}}return o}function Yh(e,a,l){e=e.ownerDocument||e,e.head.insertBefore(l,a==="title"?e.querySelector("head > title"):null)}function Ry(e,a,l){if(l===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Xh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dy(e,a,l,o){if(l.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=bi(o.href),d=a.querySelector(gl(u));if(d){a=d._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=Ko.bind(e),a.then(e,e)),l.state.loading|=4,l.instance=d,Dt(d);return}d=a.ownerDocument||a,o=Hh(o),(u=Ta.get(u))&&Iu(o,u),d=d.createElement("link"),Dt(d);var x=d;x._p=new Promise(function(S,R){x.onload=S,x.onerror=R}),Bt(d,"link",o),l.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,a),(a=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ko.bind(e),a.addEventListener("load",l),a.addEventListener("error",l))}}var Gu=0;function Uy(e,a){return e.stylesheets&&e.count===0&&$o(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var o=setTimeout(function(){if(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+a);0<e.imgBytes&&Gu===0&&(Gu=62500*fy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Gu?50:800)+a);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ko(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jo=null;function $o(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jo=new Map,a.forEach(My,e),Jo=null,Ko.call(e))}function My(e,a){if(!(a.state.loading&4)){var l=Jo.get(e);if(l)var o=l.get(null);else{l=new Map,Jo.set(e,l);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(l.set(x.dataset.precedence,x),o=x)}o&&l.set(null,o)}u=a.instance,x=u.getAttribute("data-precedence"),d=l.get(x)||o,d===o&&l.set(null,u),l.set(x,u),this.count++,o=Ko.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),a.state.loading|=4}}var bl={$$typeof:M,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function Ly(e,a,l,o,u,d,x,S,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=en(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=en(0),this.hiddenUpdates=en(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Wh(e,a,l,o,u,d,x,S,R,j,q,K){return e=new Ly(e,a,l,x,R,j,q,K,S),a=1,d===!0&&(a|=24),d=na(3,null,null,a),e.current=d,d.stateNode=e,a=yc(),a.refCount++,e.pooledCache=a,a.refCount++,d.memoizedState={element:o,isDehydrated:l,cache:a},wc(d),e}function Zh(e){return e?(e=Kr,e):Kr}function Qh(e,a,l,o,u,d){u=Zh(u),o.context===null?o.context=u:o.pendingContext=u,o=Bn(a),o.payload={element:l},d=d===void 0?null:d,d!==null&&(o.callback=d),l=In(e,o,a),l!==null&&($t(l,e,a),Ki(l,e,a))}function Kh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<a?l:a}}function Pu(e,a){Kh(e,a),(e=e.alternate)&&Kh(e,a)}function Jh(e){if(e.tag===13||e.tag===31){var a=hr(e,67108864);a!==null&&$t(a,e,67108864),Pu(e,67108864)}}function $h(e){if(e.tag===13||e.tag===31){var a=sa();a=Ui(a);var l=hr(e,a);l!==null&&$t(l,e,a),Pu(e,a)}}var es=!0;function zy(e,a,l,o){var u=F.T;F.T=null;var d=$.p;try{$.p=2,Hu(e,a,l,o)}finally{$.p=d,F.T=u}}function jy(e,a,l,o){var u=F.T;F.T=null;var d=$.p;try{$.p=8,Hu(e,a,l,o)}finally{$.p=d,F.T=u}}function Hu(e,a,l,o){if(es){var u=Vu(o);if(u===null)Ru(e,a,o,ts,l),t0(e,o);else if(Ny(u,e,a,l,o))o.stopPropagation();else if(t0(e,o),a&4&&-1<Fy.indexOf(e)){for(;u!==null;){var d=_r(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Oe(d.pendingLanes);if(x!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;x;){var R=1<<31-At(x);S.entanglements[1]|=R,x&=~R}qa(d),(qe&6)===0&&(No=ae()+500,pl(0))}}break;case 31:case 13:S=hr(d,2),S!==null&&$t(S,d,2),Io(),Pu(d,2)}if(d=Vu(o),d===null&&Ru(e,a,o,ts,l),d===u)break;u=d}u!==null&&o.stopPropagation()}else Ru(e,a,o,null,l)}}function Vu(e){return e=Ys(e),qu(e)}var ts=null;function qu(e){if(ts=null,e=Ir(e),e!==null){var a=c(e);if(a===null)e=null;else{var l=a.tag;if(l===13){if(e=f(a),e!==null)return e;e=null}else if(l===31){if(e=m(a),e!==null)return e;e=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ts=e,null}function e0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ce()){case tt:return 2;case it:return 8;case xt:case $a:return 32;case pa:return 268435456;default:return 32}default:return 32}}var Yu=!1,Qn=null,Kn=null,Jn=null,yl=new Map,Sl=new Map,$n=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(e,a){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":yl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(a.pointerId)}}function Cl(e,a,l,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:l,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},a!==null&&(a=_r(a),a!==null&&Jh(a)),e):(e.eventSystemFlags|=o,a=e.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),e)}function Ny(e,a,l,o,u){switch(a){case"focusin":return Qn=Cl(Qn,e,a,l,o,u),!0;case"dragenter":return Kn=Cl(Kn,e,a,l,o,u),!0;case"mouseover":return Jn=Cl(Jn,e,a,l,o,u),!0;case"pointerover":var d=u.pointerId;return yl.set(d,Cl(yl.get(d)||null,e,a,l,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Sl.set(d,Cl(Sl.get(d)||null,e,a,l,o,u)),!0}return!1}function a0(e){var a=Ir(e.target);if(a!==null){var l=c(a);if(l!==null){if(a=l.tag,a===13){if(a=f(l),a!==null){e.blockedOn=a,Li(e.priority,function(){$h(l)});return}}else if(a===31){if(a=m(l),a!==null){e.blockedOn=a,Li(e.priority,function(){$h(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var l=Vu(e.nativeEvent);if(l===null){l=e.nativeEvent;var o=new l.constructor(l.type,l);qs=o,l.target.dispatchEvent(o),qs=null}else return a=_r(l),a!==null&&Jh(a),e.blockedOn=l,!1;a.shift()}return!0}function n0(e,a,l){as(e)&&l.delete(a)}function By(){Yu=!1,Qn!==null&&as(Qn)&&(Qn=null),Kn!==null&&as(Kn)&&(Kn=null),Jn!==null&&as(Jn)&&(Jn=null),yl.forEach(n0),Sl.forEach(n0)}function ns(e,a){e.blockedOn===a&&(e.blockedOn=null,Yu||(Yu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,By)))}var rs=null;function r0(e){rs!==e&&(rs=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){rs===e&&(rs=null);for(var a=0;a<e.length;a+=3){var l=e[a],o=e[a+1],u=e[a+2];if(typeof o!="function"){if(qu(o||l)===null)continue;break}var d=_r(l);d!==null&&(e.splice(a,3),a-=3,Vc(d,{pending:!0,data:u,method:l.method,action:o},o,u))}}))}function Si(e){function a(R){return ns(R,e)}Qn!==null&&ns(Qn,e),Kn!==null&&ns(Kn,e),Jn!==null&&ns(Jn,e),yl.forEach(a),Sl.forEach(a);for(var l=0;l<$n.length;l++){var o=$n[l];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$n.length&&(l=$n[0],l.blockedOn===null);)a0(l),l.blockedOn===null&&$n.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(o=0;o<l.length;o+=3){var u=l[o],d=l[o+1],x=u[Xt]||null;if(typeof d=="function")x||r0(l);else if(x){var S=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Xt]||null)S=x.formAction;else if(qu(u)!==null)continue}else S=x.action;typeof S=="function"?l[o+1]=S:(l.splice(o,3),o-=3),r0(l)}}}function i0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function a(){u!==null&&(u(),u=null),o||setTimeout(l,20)}function l(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),u!==null&&(u(),u=null)}}}function Xu(e){this._internalRoot=e}is.prototype.render=Xu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(i(409));var l=a.current,o=sa();Qh(l,o,e,a,null,null)},is.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Qh(e.current,2,null,e,null,null),Io(),a[Br]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var a=Nr();e={blockedOn:null,target:e,priority:a};for(var l=0;l<$n.length&&a!==0&&a<$n[l].priority;l++);$n.splice(l,0,e),l===0&&a0(e)}};var l0=n.version;if(l0!=="19.2.3")throw Error(i(527,l0,"19.2.3"));$.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=v(a),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Iy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Ra=ls.inject(Iy),bt=ls}catch{}}return wl.createRoot=function(e,a){if(!s(e))throw Error(i(299));var l=!1,o="",u=pm,d=mm,x=hm;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError)),a=Wh(e,1,!1,null,null,l,o,null,u,d,x,i0),e[Br]=a.current,Ou(e),new Xu(a)},wl.hydrateRoot=function(e,a,l){if(!s(e))throw Error(i(299));var o=!1,u="",d=pm,x=mm,S=hm,R=null;return l!=null&&(l.unstable_strictMode===!0&&(o=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(d=l.onUncaughtError),l.onCaughtError!==void 0&&(x=l.onCaughtError),l.onRecoverableError!==void 0&&(S=l.onRecoverableError),l.formState!==void 0&&(R=l.formState)),a=Wh(e,1,!0,a,l??null,o,u,R,d,x,S,i0),a.context=Zh(null),l=a.current,o=sa(),o=Ui(o),u=Bn(o),u.callback=null,In(l,u,o),l=o,a.current.lanes=l,tn(a,l),qa(a),e[Br]=a.current,Ou(e),new is(a)},wl.version="19.2.3",wl}var v0;function Zy(){if(v0)return Qu.exports;v0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}return t(),Qu.exports=Wy(),Qu.exports}var Qy=Zy();const Ky="modulepreload",Jy=function(t){return"/"+t},g0={},za=function(n,r,i){let s=Promise.resolve();if(r&&r.length>0){let p=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");s=p(r.map(v=>{if(v=Jy(v),v in g0)return;g0[v]=!0;const g=v.endsWith(".css"),b=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${b}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Ky,g||(y.as="script"),y.crossOrigin="",y.href=v,m&&y.setAttribute("nonce",m),document.head.appendChild(y),g)return new Promise((C,w)=>{y.addEventListener("load",C),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return s.then(f=>{for(const m of f||[])m.status==="rejected"&&c(m.reason);return n().catch(c)})};var x0="popstate";function $y(t={}){function n(i,s){let{pathname:c,search:f,hash:m}=i.location;return Tf("",{pathname:c,search:f,hash:m},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Ll(s)}return t1(n,r,null,t)}function st(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function ja(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function e1(){return Math.random().toString(36).substring(2,10)}function b0(t,n){return{usr:t.state,key:t.key,idx:n}}function Tf(t,n,r=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof n=="string"?Ai(n):n,state:r,key:n&&n.key||i||e1()}}function Ll({pathname:t="/",search:n="",hash:r=""}){return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ai(t){let n={};if(t){let r=t.indexOf("#");r>=0&&(n.hash=t.substring(r),t=t.substring(0,r));let i=t.indexOf("?");i>=0&&(n.search=t.substring(i),t=t.substring(0,i)),t&&(n.pathname=t)}return n}function t1(t,n,r,i={}){let{window:s=document.defaultView,v5Compat:c=!1}=i,f=s.history,m="POP",p=null,v=g();v==null&&(v=0,f.replaceState({...f.state,idx:v},""));function g(){return(f.state||{idx:null}).idx}function b(){m="POP";let A=g(),T=A==null?null:A-v;v=A,p&&p({action:m,location:E.location,delta:T})}function y(A,T){m="PUSH";let D=Tf(E.location,A,T);v=g()+1;let M=b0(D,v),Y=E.createHref(D);try{f.pushState(M,"",Y)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(Y)}c&&p&&p({action:m,location:E.location,delta:1})}function C(A,T){m="REPLACE";let D=Tf(E.location,A,T);v=g();let M=b0(D,v),Y=E.createHref(D);f.replaceState(M,"",Y),c&&p&&p({action:m,location:E.location,delta:0})}function w(A){return a1(A)}let E={get action(){return m},get location(){return t(s,f)},listen(A){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(x0,b),p=A,()=>{s.removeEventListener(x0,b),p=null}},createHref(A){return n(s,A)},createURL:w,encodeLocation(A){let T=w(A);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:y,replace:C,go(A){return f.go(A)}};return E}function a1(t,n=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),st(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Ll(t);return i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i),new URL(i,r)}function Hv(t,n,r="/"){return n1(t,n,r,!1)}function n1(t,n,r,i){let s=typeof n=="string"?Ai(n):n,c=kn(s.pathname||"/",r);if(c==null)return null;let f=Vv(t);r1(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let v=h1(c);m=p1(f[p],v,i)}return m}function Vv(t,n=[],r=[],i="",s=!1){let c=(f,m,p=s,v)=>{let g={relativePath:v===void 0?f.path||"":v,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&p)return;st(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let b=En([i,g.relativePath]),y=r.concat(g);f.children&&f.children.length>0&&(st(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Vv(f.children,n,y,b,p)),!(f.path==null&&!f.index)&&n.push({path:b,score:f1(b,f.index),routesMeta:y})};return t.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))c(f,m);else for(let p of qv(f.path))c(f,m,!0,p)}),n}function qv(t){let n=t.split("/");if(n.length===0)return[];let[r,...i]=n,s=r.endsWith("?"),c=r.replace(/\?$/,"");if(i.length===0)return s?[c,""]:[c];let f=qv(i.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),s&&m.push(...f),m.map(p=>t.startsWith("/")&&p===""?"/":p)}function r1(t){t.sort((n,r)=>n.score!==r.score?r.score-n.score:d1(n.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}var i1=/^:[\w-]+$/,l1=3,o1=2,s1=1,c1=10,u1=-2,y0=t=>t==="*";function f1(t,n){let r=t.split("/"),i=r.length;return r.some(y0)&&(i+=u1),n&&(i+=o1),r.filter(s=>!y0(s)).reduce((s,c)=>s+(i1.test(c)?l1:c===""?s1:c1),i)}function d1(t,n){return t.length===n.length&&t.slice(0,-1).every((i,s)=>i===n[s])?t[t.length-1]-n[n.length-1]:0}function p1(t,n,r=!1){let{routesMeta:i}=t,s={},c="/",f=[];for(let m=0;m<i.length;++m){let p=i[m],v=m===i.length-1,g=c==="/"?n:n.slice(c.length)||"/",b=Cs({path:p.relativePath,caseSensitive:p.caseSensitive,end:v},g),y=p.route;if(!b&&v&&r&&!i[i.length-1].route.index&&(b=Cs({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!b)return null;Object.assign(s,b.params),f.push({params:s,pathname:En([c,b.pathname]),pathnameBase:b1(En([c,b.pathnameBase])),route:y}),b.pathnameBase!=="/"&&(c=En([c,b.pathnameBase]))}return f}function Cs(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,i]=m1(t.path,t.caseSensitive,t.end),s=n.match(r);if(!s)return null;let c=s[0],f=c.replace(/(.)\/+$/,"$1"),m=s.slice(1);return{params:i.reduce((v,{paramName:g,isOptional:b},y)=>{if(g==="*"){let w=m[y]||"";f=c.slice(0,c.length-w.length).replace(/(.)\/+$/,"$1")}const C=m[y];return b&&!C?v[g]=void 0:v[g]=(C||"").replace(/%2F/g,"/"),v},{}),pathname:c,pathnameBase:f,pattern:t}}function m1(t,n=!1,r=!0){ja(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(i.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function h1(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ja(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),t}}function kn(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,i=t.charAt(r);return i&&i!=="/"?null:t.slice(r)||"/"}var Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v1=t=>Yv.test(t);function g1(t,n="/"){let{pathname:r,search:i="",hash:s=""}=typeof t=="string"?Ai(t):t,c;if(r)if(v1(r))c=r;else{if(r.includes("//")){let f=r;r=r.replace(/\/\/+/g,"/"),ja(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${r}`)}r.startsWith("/")?c=S0(r.substring(1),"/"):c=S0(r,n)}else c=n;return{pathname:c,search:y1(i),hash:S1(s)}}function S0(t,n){let r=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ef(t,n,r,i){return`Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function x1(t){return t.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function Xv(t){let n=x1(t);return n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase)}function Wv(t,n,r,i=!1){let s;typeof t=="string"?s=Ai(t):(s={...t},st(!s.pathname||!s.pathname.includes("?"),ef("?","pathname","search",s)),st(!s.pathname||!s.pathname.includes("#"),ef("#","pathname","hash",s)),st(!s.search||!s.search.includes("#"),ef("#","search","hash",s)));let c=t===""||s.pathname==="",f=c?"/":s.pathname,m;if(f==null)m=r;else{let b=n.length-1;if(!i&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),b-=1;s.pathname=y.join("/")}m=b>=0?n[b]:"/"}let p=g1(s,m),v=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(v||g)&&(p.pathname+="/"),p}var En=t=>t.join("/").replace(/\/\/+/g,"/"),b1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),y1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,S1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,C1=class{constructor(t,n,r,i=!1){this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function T1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function w1(t){return t.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Qv(t,n){let r=t;if(typeof r!="string"||!Yv.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let i=r,s=!1;if(Zv)try{let c=new URL(window.location.href),f=r.startsWith("//")?new URL(c.protocol+r):new URL(r),m=kn(f.pathname,n);f.origin===c.origin&&m!=null?r=m+f.search+f.hash:s=!0}catch{ja(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kv=["POST","PUT","PATCH","DELETE"];new Set(Kv);var E1=["GET",...Kv];new Set(E1);var ki=k.createContext(null);ki.displayName="DataRouter";var zs=k.createContext(null);zs.displayName="DataRouterState";var A1=k.createContext(!1),Jv=k.createContext({isTransitioning:!1});Jv.displayName="ViewTransition";var k1=k.createContext(new Map);k1.displayName="Fetchers";var O1=k.createContext(null);O1.displayName="Await";var wa=k.createContext(null);wa.displayName="Navigation";var Il=k.createContext(null);Il.displayName="Location";var On=k.createContext({outlet:null,matches:[],isDataRoute:!1});On.displayName="Route";var qf=k.createContext(null);qf.displayName="RouteError";var $v="REACT_ROUTER_ERROR",R1="REDIRECT",D1="ROUTE_ERROR_RESPONSE";function U1(t){if(t.startsWith(`${$v}:${R1}:{`))try{let n=JSON.parse(t.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function M1(t){if(t.startsWith(`${$v}:${D1}:{`))try{let n=JSON.parse(t.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new C1(n.status,n.statusText,n.data)}catch{}}function L1(t,{relative:n}={}){st(_l(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=k.useContext(wa),{hash:s,pathname:c,search:f}=Gl(t,{relative:n}),m=c;return r!=="/"&&(m=c==="/"?r:En([r,c])),i.createHref({pathname:m,search:f,hash:s})}function _l(){return k.useContext(Il)!=null}function Lr(){return st(_l(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Il).location}var eg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tg(t){k.useContext(wa).static||k.useLayoutEffect(t)}function z1(){let{isDataRoute:t}=k.useContext(On);return t?X1():j1()}function j1(){st(_l(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(ki),{basename:n,navigator:r}=k.useContext(wa),{matches:i}=k.useContext(On),{pathname:s}=Lr(),c=JSON.stringify(Xv(i)),f=k.useRef(!1);return tg(()=>{f.current=!0}),k.useCallback((p,v={})=>{if(ja(f.current,eg),!f.current)return;if(typeof p=="number"){r.go(p);return}let g=Wv(p,JSON.parse(c),s,v.relative==="path");t==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:En([n,g.pathname])),(v.replace?r.replace:r.push)(g,v.state,v)},[n,r,c,s,t])}k.createContext(null);function Gl(t,{relative:n}={}){let{matches:r}=k.useContext(On),{pathname:i}=Lr(),s=JSON.stringify(Xv(r));return k.useMemo(()=>Wv(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function F1(t,n){return ag(t,n)}function ag(t,n,r,i,s){st(_l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=k.useContext(wa),{matches:f}=k.useContext(On),m=f[f.length-1],p=m?m.params:{},v=m?m.pathname:"/",g=m?m.pathnameBase:"/",b=m&&m.route;{let D=b&&b.path||"";rg(v,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let y=Lr(),C;if(n){let D=typeof n=="string"?Ai(n):n;st(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),C=D}else C=y;let w=C.pathname||"/",E=w;if(g!=="/"){let D=g.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(D.length).join("/")}let A=Hv(t,{pathname:E});ja(b||A!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),ja(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=G1(A&&A.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:En([g,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:En([g,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,r,i,s);return n&&T?k.createElement(Il.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},T):T}function N1(){let t=Y1(),n=T1(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},c={padding:"2px 4px",backgroundColor:i},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},n),r?k.createElement("pre",{style:s},r):null,f)}var B1=k.createElement(N1,null),ng=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){this.props.onError?this.props.onError(t,n):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=M1(t.digest);r&&(t=r)}let n=t!==void 0?k.createElement(On.Provider,{value:this.props.routeContext},k.createElement(qf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?k.createElement(I1,{error:t},n):n}};ng.contextType=A1;var tf=new WeakMap;function I1({children:t,error:n}){let{basename:r}=k.useContext(wa);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let i=U1(n.digest);if(i){let s=tf.get(n);if(s)throw s;let c=Qv(i.location,r);if(Zv&&!tf.get(n))if(c.isExternal||i.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:i.replace}));throw tf.set(n,f),f}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return t}function _1({routeContext:t,match:n,children:r}){let i=k.useContext(ki);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(On.Provider,{value:t},r)}function G1(t,n=[],r=null,i=null,s=null){if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(n.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,f=r?.errors;if(f!=null){let g=c.findIndex(b=>b.route.id&&f?.[b.route.id]!==void 0);st(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let m=!1,p=-1;if(r)for(let g=0;g<c.length;g++){let b=c[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(p=g),b.route.id){let{loaderData:y,errors:C}=r,w=b.route.loader&&!y.hasOwnProperty(b.route.id)&&(!C||C[b.route.id]===void 0);if(b.route.lazy||w){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}let v=r&&i?(g,b)=>{i(g,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:w1(r.matches),errorInfo:b})}:void 0;return c.reduceRight((g,b,y)=>{let C,w=!1,E=null,A=null;r&&(C=f&&b.route.id?f[b.route.id]:void 0,E=b.route.errorElement||B1,m&&(p<0&&y===0?(rg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):p===y&&(w=!0,A=b.route.hydrateFallbackElement||null)));let T=n.concat(c.slice(0,y+1)),D=()=>{let M;return C?M=E:w?M=A:b.route.Component?M=k.createElement(b.route.Component,null):b.route.element?M=b.route.element:M=g,k.createElement(_1,{match:b,routeContext:{outlet:g,matches:T,isDataRoute:r!=null},children:M})};return r&&(b.route.ErrorBoundary||b.route.errorElement||y===0)?k.createElement(ng,{location:r.location,revalidation:r.revalidation,component:E,error:C,children:D(),routeContext:{outlet:null,matches:T,isDataRoute:!0},onError:v}):D()},null)}function Yf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P1(t){let n=k.useContext(ki);return st(n,Yf(t)),n}function H1(t){let n=k.useContext(zs);return st(n,Yf(t)),n}function V1(t){let n=k.useContext(On);return st(n,Yf(t)),n}function Xf(t){let n=V1(t),r=n.matches[n.matches.length-1];return st(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function q1(){return Xf("useRouteId")}function Y1(){let t=k.useContext(qf),n=H1("useRouteError"),r=Xf("useRouteError");return t!==void 0?t:n.errors?.[r]}function X1(){let{router:t}=P1("useNavigate"),n=Xf("useNavigate"),r=k.useRef(!1);return tg(()=>{r.current=!0}),k.useCallback(async(s,c={})=>{ja(r.current,eg),r.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:n,...c}))},[t,n])}var C0={};function rg(t,n,r){!n&&!C0[t]&&(C0[t]=!0,ja(!1,r))}k.memo(W1);function W1({routes:t,future:n,state:r,onError:i}){return ag(t,void 0,r,i,n)}function gs(t){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Z1({basename:t="/",children:n=null,location:r,navigationType:i="POP",navigator:s,static:c=!1,unstable_useTransitions:f}){st(!_l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=t.replace(/^\/*/,"/"),p=k.useMemo(()=>({basename:m,navigator:s,static:c,unstable_useTransitions:f,future:{}}),[m,s,c,f]);typeof r=="string"&&(r=Ai(r));let{pathname:v="/",search:g="",hash:b="",state:y=null,key:C="default"}=r,w=k.useMemo(()=>{let E=kn(v,m);return E==null?null:{location:{pathname:E,search:g,hash:b,state:y,key:C},navigationType:i}},[m,v,g,b,y,C,i]);return ja(w!=null,`<Router basename="${m}"> is not able to match the URL "${v}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:k.createElement(wa.Provider,{value:p},k.createElement(Il.Provider,{children:n,value:w}))}function Q1({children:t,location:n}){return F1(wf(t),n)}function wf(t,n=[]){let r=[];return k.Children.forEach(t,(i,s)=>{if(!k.isValidElement(i))return;let c=[...n,s];if(i.type===k.Fragment){r.push.apply(r,wf(i.props.children,c));return}st(i.type===gs,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!i.props.index||!i.props.children,"An index route cannot have child routes.");let f={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(f.children=wf(i.props.children,c)),r.push(f)}),r}var xs="get",bs="application/x-www-form-urlencoded";function js(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function K1(t){return js(t)&&t.tagName.toLowerCase()==="button"}function J1(t){return js(t)&&t.tagName.toLowerCase()==="form"}function $1(t){return js(t)&&t.tagName.toLowerCase()==="input"}function e2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function t2(t,n){return t.button===0&&(!n||n==="_self")&&!e2(t)}var os=null;function a2(){if(os===null)try{new FormData(document.createElement("form"),0),os=!1}catch{os=!0}return os}var n2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(t){return t!=null&&!n2.has(t)?(ja(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bs}"`),null):t}function r2(t,n){let r,i,s,c,f;if(J1(t)){let m=t.getAttribute("action");i=m?kn(m,n):null,r=t.getAttribute("method")||xs,s=af(t.getAttribute("enctype"))||bs,c=new FormData(t)}else if(K1(t)||$1(t)&&(t.type==="submit"||t.type==="image")){let m=t.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||m.getAttribute("action");if(i=p?kn(p,n):null,r=t.getAttribute("formmethod")||m.getAttribute("method")||xs,s=af(t.getAttribute("formenctype"))||af(m.getAttribute("enctype"))||bs,c=new FormData(m,t),!a2()){let{name:v,type:g,value:b}=t;if(g==="image"){let y=v?`${v}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else v&&c.append(v,b)}}else{if(js(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=xs,i=null,s=bs,f=t}return c&&s==="text/plain"&&(f=c,c=void 0),{action:i,method:r.toLowerCase(),encType:s,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wf(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function i2(t,n,r,i){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${i}`:s.pathname=`${s.pathname}.${i}`:s.pathname==="/"?s.pathname=`_root.${i}`:n&&kn(s.pathname,n)==="/"?s.pathname=`${n.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function l2(t,n){if(t.id in n)return n[t.id];try{let r=await import(t.module);return n[t.id]=r,r}catch(r){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function o2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function s2(t,n,r){let i=await Promise.all(t.map(async s=>{let c=n.routes[s.route.id];if(c){let f=await l2(c,r);return f.links?f.links():[]}return[]}));return d2(i.flat(1).filter(o2).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function T0(t,n,r,i,s,c){let f=(p,v)=>r[v]?p.route.id!==r[v].route.id:!0,m=(p,v)=>r[v].pathname!==p.pathname||r[v].route.path?.endsWith("*")&&r[v].params["*"]!==p.params["*"];return c==="assets"?n.filter((p,v)=>f(p,v)||m(p,v)):c==="data"?n.filter((p,v)=>{let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,v)||m(p,v))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function c2(t,n,{includeHydrateFallback:r}={}){return u2(t.map(i=>{let s=n.routes[i.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function u2(t){return[...new Set(t)]}function f2(t){let n={},r=Object.keys(t).sort();for(let i of r)n[i]=t[i];return n}function d2(t,n){let r=new Set;return new Set(n),t.reduce((i,s)=>{let c=JSON.stringify(f2(s));return r.has(c)||(r.add(c),i.push({key:c,link:s})),i},[])}function ig(){let t=k.useContext(ki);return Wf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function p2(){let t=k.useContext(zs);return Wf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Zf=k.createContext(void 0);Zf.displayName="FrameworkContext";function lg(){let t=k.useContext(Zf);return Wf(t,"You must render this element inside a <HydratedRouter> element"),t}function m2(t,n){let r=k.useContext(Zf),[i,s]=k.useState(!1),[c,f]=k.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:v,onMouseLeave:g,onTouchStart:b}=n,y=k.useRef(null);k.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let E=T=>{T.forEach(D=>{f(D.isIntersecting)})},A=new IntersectionObserver(E,{threshold:.5});return y.current&&A.observe(y.current),()=>{A.disconnect()}}},[t]),k.useEffect(()=>{if(i){let E=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(E)}}},[i]);let C=()=>{s(!0)},w=()=>{s(!1),f(!1)};return r?t!=="intent"?[c,y,{}]:[c,y,{onFocus:El(m,C),onBlur:El(p,w),onMouseEnter:El(v,C),onMouseLeave:El(g,w),onTouchStart:El(b,C)}]:[!1,y,{}]}function El(t,n){return r=>{t&&t(r),r.defaultPrevented||n(r)}}function h2({page:t,...n}){let{router:r}=ig(),i=k.useMemo(()=>Hv(r.routes,t,r.basename),[r.routes,t,r.basename]);return i?k.createElement(g2,{page:t,matches:i,...n}):null}function v2(t){let{manifest:n,routeModules:r}=lg(),[i,s]=k.useState([]);return k.useEffect(()=>{let c=!1;return s2(t,n,r).then(f=>{c||s(f)}),()=>{c=!0}},[t,n,r]),i}function g2({page:t,matches:n,...r}){let i=Lr(),{future:s,manifest:c,routeModules:f}=lg(),{basename:m}=ig(),{loaderData:p,matches:v}=p2(),g=k.useMemo(()=>T0(t,n,v,c,i,"data"),[t,n,v,c,i]),b=k.useMemo(()=>T0(t,n,v,c,i,"assets"),[t,n,v,c,i]),y=k.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let E=new Set,A=!1;if(n.forEach(D=>{let M=c.routes[D.route.id];!M||!M.hasLoader||(!g.some(Y=>Y.route.id===D.route.id)&&D.route.id in p&&f[D.route.id]?.shouldRevalidate||M.hasClientLoader?A=!0:E.add(D.route.id))}),E.size===0)return[];let T=i2(t,m,s.unstable_trailingSlashAwareDataRequests,"data");return A&&E.size>0&&T.searchParams.set("_routes",n.filter(D=>E.has(D.route.id)).map(D=>D.route.id).join(",")),[T.pathname+T.search]},[m,s.unstable_trailingSlashAwareDataRequests,p,i,c,g,n,t,f]),C=k.useMemo(()=>c2(b,c),[b,c]),w=v2(b);return k.createElement(k.Fragment,null,y.map(E=>k.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...r})),C.map(E=>k.createElement("link",{key:E,rel:"modulepreload",href:E,...r})),w.map(({key:E,link:A})=>k.createElement("link",{key:E,nonce:r.nonce,...A})))}function x2(...t){return n=>{t.forEach(r=>{typeof r=="function"?r(n):r!=null&&(r.current=n)})}}var b2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{b2&&(window.__reactRouterVersion="7.12.0")}catch{}function y2({basename:t,children:n,unstable_useTransitions:r,window:i}){let s=k.useRef();s.current==null&&(s.current=$y({window:i,v5Compat:!0}));let c=s.current,[f,m]=k.useState({action:c.action,location:c.location}),p=k.useCallback(v=>{r===!1?m(v):k.startTransition(()=>m(v))},[r]);return k.useLayoutEffect(()=>c.listen(p),[c,p]),k.createElement(Z1,{basename:t,children:n,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:r})}var og=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fs=k.forwardRef(function({onClick:n,discover:r="render",prefetch:i="none",relative:s,reloadDocument:c,replace:f,state:m,target:p,to:v,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:y,...C},w){let{basename:E,unstable_useTransitions:A}=k.useContext(wa),T=typeof v=="string"&&og.test(v),D=Qv(v,E);v=D.to;let M=L1(v,{relative:s}),[Y,V,X]=m2(i,C),B=w2(v,{replace:f,state:m,target:p,preventScrollReset:g,relative:s,viewTransition:b,unstable_defaultShouldRevalidate:y,unstable_useTransitions:A});function G(ce){n&&n(ce),ce.defaultPrevented||B(ce)}let ne=k.createElement("a",{...C,...X,href:D.absoluteURL||M,onClick:D.isExternal||c?n:G,ref:x2(w,V),target:p,"data-discover":!T&&r==="render"?"true":void 0});return Y&&!T?k.createElement(k.Fragment,null,ne,k.createElement(h2,{page:M})):ne});Fs.displayName="Link";var S2=k.forwardRef(function({"aria-current":n="page",caseSensitive:r=!1,className:i="",end:s=!1,style:c,to:f,viewTransition:m,children:p,...v},g){let b=Gl(f,{relative:v.relative}),y=Lr(),C=k.useContext(zs),{navigator:w,basename:E}=k.useContext(wa),A=C!=null&&R2(b)&&m===!0,T=w.encodeLocation?w.encodeLocation(b).pathname:b.pathname,D=y.pathname,M=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(D=D.toLowerCase(),M=M?M.toLowerCase():null,T=T.toLowerCase()),M&&E&&(M=kn(M,E)||M);const Y=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let V=D===T||!s&&D.startsWith(T)&&D.charAt(Y)==="/",X=M!=null&&(M===T||!s&&M.startsWith(T)&&M.charAt(T.length)==="/"),B={isActive:V,isPending:X,isTransitioning:A},G=V?n:void 0,ne;typeof i=="function"?ne=i(B):ne=[i,V?"active":null,X?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let ce=typeof c=="function"?c(B):c;return k.createElement(Fs,{...v,"aria-current":G,className:ne,ref:g,style:ce,to:f,viewTransition:m},typeof p=="function"?p(B):p)});S2.displayName="NavLink";var C2=k.forwardRef(({discover:t="render",fetcherKey:n,navigate:r,reloadDocument:i,replace:s,state:c,method:f=xs,action:m,onSubmit:p,relative:v,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:y,...C},w)=>{let{unstable_useTransitions:E}=k.useContext(wa),A=k2(),T=O2(m,{relative:v}),D=f.toLowerCase()==="get"?"get":"post",M=typeof m=="string"&&og.test(m),Y=V=>{if(p&&p(V),V.defaultPrevented)return;V.preventDefault();let X=V.nativeEvent.submitter,B=X?.getAttribute("formmethod")||f,G=()=>A(X||V.currentTarget,{fetcherKey:n,method:B,navigate:r,replace:s,state:c,relative:v,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:y});E&&r!==!1?k.startTransition(()=>G()):G()};return k.createElement("form",{ref:w,method:D,action:T,onSubmit:i?p:Y,...C,"data-discover":!M&&t==="render"?"true":void 0})});C2.displayName="Form";function T2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sg(t){let n=k.useContext(ki);return st(n,T2(t)),n}function w2(t,{target:n,replace:r,state:i,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let v=z1(),g=Lr(),b=Gl(t,{relative:c});return k.useCallback(y=>{if(t2(y,n)){y.preventDefault();let C=r!==void 0?r:Ll(g)===Ll(b),w=()=>v(t,{replace:C,state:i,preventScrollReset:s,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:m});p?k.startTransition(()=>w()):w()}},[g,v,b,r,i,n,t,s,c,f,m,p])}var E2=0,A2=()=>`__${String(++E2)}__`;function k2(){let{router:t}=sg("useSubmit"),{basename:n}=k.useContext(wa),r=q1(),i=t.fetch,s=t.navigate;return k.useCallback(async(c,f={})=>{let{action:m,method:p,encType:v,formData:g,body:b}=r2(c,n);if(f.navigate===!1){let y=f.fetcherKey||A2();await i(y,r,f.action||m,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||p,formEncType:f.encType||v,flushSync:f.flushSync})}else await s(f.action||m,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||p,formEncType:f.encType||v,replace:f.replace,state:f.state,fromRouteId:r,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,s,n,r])}function O2(t,{relative:n}={}){let{basename:r}=k.useContext(wa),i=k.useContext(On);st(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),c={...Gl(t||".",{relative:n})},f=Lr();if(t==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(g=>g==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let g=m.toString();c.search=g?`?${g}`:""}}return(!t||t===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:En([r,c.pathname])),Ll(c)}function R2(t,{relative:n}={}){let r=k.useContext(Jv);st(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=sg("useViewTransitionState"),s=Gl(t,{relative:n});if(!r.isTransitioning)return!1;let c=kn(r.currentLocation.pathname,i)||r.currentLocation.pathname,f=kn(r.nextLocation.pathname,i)||r.nextLocation.pathname;return Cs(s.pathname,f)!=null||Cs(s.pathname,c)!=null}const D2={id:"default",name:"Default",colors:{bg:"#0a0a0a",panel:"#0f0f0f",border:"#222222",accent:"#ffffff",accentDim:"#aaaaaa",text:"#888888",textDim:"#555555",textBright:"#cccccc",green:"#888888",yellow:"#888888"},effects:{className:"theme-default"}},U2={id:"vt320",name:"VT320",colors:{bg:"#0a0a08",panel:"#0f0e0a",border:"#332800",accent:"#ffb000",accentDim:"#996a00",text:"#ffb000",textDim:"#664400",textBright:"#ffcc40",green:"#ffb000",yellow:"#ffb000"},effects:{className:"theme-vt320"}},M2={id:"cassette",name:"Cassette",colors:{bg:"#000000",panel:"#001100",border:"#003300",accent:"#00ff41",accentDim:"#00802b",text:"#00ff41",textDim:"#006622",textBright:"#66ff66",green:"#00ff41",yellow:"#ffaa00"},effects:{className:"theme-cassette"}},L2={id:"coldwar",name:"NORAD",colors:{bg:"#0a0a14",panel:"#12121e",border:"#2a2a3a",accent:"#00ff41",accentDim:"#00802b",text:"#00ff41",textDim:"#004d1a",textBright:"#66ff99",green:"#00ff41",yellow:"#ffaa00"},effects:{className:"theme-coldwar"}},Ef={default:D2,vt320:U2,cassette:M2,coldwar:L2},nf=Object.values(Ef),z2=["theme-default","theme-vt320","theme-cassette","theme-coldwar"];function w0(t){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?`${parseInt(n[1],16)},${parseInt(n[2],16)},${parseInt(n[3],16)}`:"255,255,255"}function j2(t){const n=document.documentElement,{colors:r,effects:i}=t;n.style.setProperty("--term-bg",r.bg),n.style.setProperty("--term-panel",r.panel),n.style.setProperty("--term-border",r.border),n.style.setProperty("--term-accent",r.accent),n.style.setProperty("--term-accent-dim",r.accentDim),n.style.setProperty("--term-text",r.text),n.style.setProperty("--term-text-dim",r.textDim),n.style.setProperty("--term-text-bright",r.textBright),n.style.setProperty("--term-green",r.green),n.style.setProperty("--term-yellow",r.yellow),n.style.setProperty("--term-accent-rgb",w0(r.accent)),n.style.setProperty("--term-text-bright-rgb",w0(r.textBright)),z2.forEach(s=>n.classList.remove(s)),n.classList.add(i.className)}function F2(t){const r=(nf.findIndex(i=>i.id===t)+1)%nf.length;return nf[r]}function N2(t){return Ef[t]||Ef.default}const E0=t=>{let n;const r=new Set,i=(v,g)=>{const b=typeof v=="function"?v(n):v;if(!Object.is(b,n)){const y=n;n=g??(typeof b!="object"||b===null)?b:Object.assign({},n,b),r.forEach(C=>C(n,y))}},s=()=>n,m={setState:i,getState:s,getInitialState:()=>p,subscribe:v=>(r.add(v),()=>r.delete(v))},p=n=t(i,s,m);return m},B2=(t=>t?E0(t):E0),I2=t=>t;function _2(t,n=I2){const r=Dl.useSyncExternalStore(t.subscribe,Dl.useCallback(()=>n(t.getState()),[t,n]),Dl.useCallback(()=>n(t.getInitialState()),[t,n]));return Dl.useDebugValue(r),r}const G2=t=>{const n=B2(t),r=i=>_2(n,i);return Object.assign(r,n),r},P2=(t=>G2),H2=t=>(n,r,i)=>{const s=i.subscribe;return i.subscribe=((f,m,p)=>{let v=f;if(m){const g=p?.equalityFn||Object.is;let b=f(i.getState());v=y=>{const C=f(y);if(!g(b,C)){const w=b;m(b=C,w)}},p?.fireImmediately&&m(b,b)}return s(v)}),t(n,r,i)},V2=H2;function Qf(t){return new Promise((n,r)=>{t.oncomplete=t.onsuccess=()=>n(t.result),t.onabort=t.onerror=()=>r(t.error)})}function q2(t,n){let r;const i=()=>{if(r)return r;const s=indexedDB.open(t);return s.onupgradeneeded=()=>s.result.createObjectStore(n),r=Qf(s),r.then(c=>{c.onclose=()=>r=void 0},()=>{}),r};return(s,c)=>i().then(f=>c(f.transaction(n,s).objectStore(n)))}let rf;function cg(){return rf||(rf=q2("keyval-store","keyval")),rf}function Y2(t,n=cg()){return n("readonly",r=>Qf(r.get(t)))}function X2(t,n,r=cg()){return r("readwrite",i=>(i.put(n,t),Qf(i.transaction)))}const ug="grainrad-state",Kf=2;function W2(t){return{panels:t.panels,settingsSections:t.settingsSections,zoom:t.zoom,sidebarCollapsed:t.sidebarCollapsed,theme:t.theme}}async function Z2(t,n,r,i,s){const c={version:Kf,settings:t,effects:n,customPresets:r,ui:W2(i),model3dSettings:s};try{await X2(ug,c)}catch(f){console.error("Failed to save state to IndexedDB:",f)}}async function Q2(){try{const t=await Y2(ug);return t?t.version!==Kf?K2(t):{settings:t.settings,effects:t.effects,customPresets:t.customPresets,ui:t.ui,model3dSettings:t.model3dSettings}:null}catch(t){return console.error("Failed to load state from IndexedDB:",t),null}}function K2(t){return console.warn(`State version mismatch: expected ${Kf}, got ${t.version}. Discarding saved state.`),null}let ss=null;const J2=1e3;function $2(t,n,r,i,s){ss&&clearTimeout(ss),ss=setTimeout(()=>{Z2(t,n,r,i,s),ss=null},J2)}const Ge={character:{scale:2,spacing:0,set:"standard",customChars:" .:+*#@",outputWidth:0},image:{brightness:0,contrast:0,saturation:0,hue:0,sharpness:0,gamma:1,colorMode:"color"},color:{colorMode:"original",custom:"#00ff00",useOriginal:!0,intensity:1,backgroundColor:"#000000"},advanced:{invert:!1,brightnessMapping:1,edgeEnhance:0,blur:0,quantizeColors:0,spatialWeight:0,matchQuality:"fast"},postProcessing:{bloom:{enabled:!1,threshold:.3,softThreshold:.2,intensity:1.5,radius:12},grain:{enabled:!0,intensity:35,size:2,speed:50},chromatic:{enabled:!1,offset:2},scanlines:{enabled:!1,opacity:.1,spacing:4},vignette:{enabled:!1,intensity:.5,radius:.5},crtCurve:{enabled:!1,amount:.1},phosphor:{enabled:!1,color:"green",customColor:"#00ff00"}}},eS={panels:{input:!0,effects:!0,presets:!1,settings:!0,export:!0},settingsSections:{character:!0,image:!0,color:!0,advanced:!0,postProcessing:!0},zoom:1,isFullscreen:!1,isMobile:!1,sidebarCollapsed:!1,theme:"default",isDraggingFile:!1},tS={autoRotate:!0,rotateSpeed:1,ambientIntensity:.6,directionalIntensity:1,wireframe:!1,backgroundColor:"#000000"},aS={baseScale:1,shape:"circle",angle:45,dotScale:1,spacing:8,invert:!1,colorMode:"bw",fgColor:"#ffffff",bgColor:"#000000",brightness:0,contrast:0},nS={baseScale:1,direction:"horizontal",mode:"brightness",threshold:.25,streakLength:100,intensity:.8,randomness:.3,reverse:!1,brightness:0,contrast:0},rS={baseScale:1,lineCount:50,amplitude:20,frequency:1,direction:"horizontal",lineThickness:.4,animate:!0,colorMode:"original",fgColor:"#ffffff",bgColor:"#000000",brightness:0,contrast:0},iS={baseScale:1,method:"bayer8x8",intensity:1,colorMode:"mono",colorLevels:2,matrixSize:4,dotSize:8,dotShape:"round",angle:45,cmykAngles:{cyan:15,magenta:75,yellow:0,black:45},lineWeight:.5,lineSpacing:10,layers:2,brightness:0,contrast:0,gamma:1,sharpen:0,modulation:{enabled:!1,type:"none",frequency:5,amplitude:.1,phase:0},bleed:0,rounding:0,foregroundColor:"#FFFFFF",backgroundColor:"#000000",palette:"gameboy",customPalette:[],paletteSize:2,customColor:"#00ff00",useCustomColor:!1,chromatic:{enabled:!1,maxDisplace:6,redChannel:23,greenChannel:50,blueChannel:80}},lS={baseScale:1,sizeMultiplier:1,spacing:1,shape:"circle",gridType:"square",colorMode:"original",fgColor:"#ffffff",bgColor:"#000000",invert:!1,brightness:0,contrast:0},oS={baseScale:1,levels:8,lineThickness:1,fillMode:"filled",colorMode:"original",lineColor:"#000000",bgColor:"#ffffff",invert:!1,brightness:0,contrast:0},sS={baseScale:1,threshold:.3,lineWidth:1,invert:!1,algorithm:"sobel",edgeColor:"#ffffff",bgColor:"#000000",colorMode:"custom",brightness:0,contrast:0},cS={baseScale:1,density:6,angle:45,layers:3,lineWidth:.15,randomness:0,invert:!1,fgColor:"#000000",bgColor:"#ffffff",brightness:0,contrast:0},uS={baseScale:1,blockSize:8,style:"full",borderWidth:1,borderColor:"#000000",colorMode:"color",brightness:0,contrast:0},fS={baseScale:1,levels:2,dither:!1,thresholdPoint:.5,invert:!1,colorMode:"custom",fgColor:"#ffffff",bgColor:"#000000",brightness:0,contrast:0},dS={baseScale:1,scale:50,intensity:1,speed:1,octaves:4,noiseType:"perlin",animate:!0,distortOnly:!1,brightness:0,contrast:0},pS={baseScale:1,characterSet:"standard",customChars:"ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789",density:1,cellSize:12,spacing:0,speed:1,trailLength:15,rainColor:"#00ff00",bgOpacity:.3,glowIntensity:1,direction:"down",brightness:0,contrast:0,threshold:0},mS={baseScale:1,distortion:.5,noise:.3,colorBleed:.5,scanlines:.3,trackingError:.2,brightness:0,contrast:0},hS={baseScale:1,cellSize:30,edgeWidth:.3,edgeColor:0,colorMode:0,randomize:.8,brightness:0,contrast:0},fg={halftone:aS,pixelSort:nS,waveLines:rS,dithering:iS,dots:lS,contour:oS,edgeDetection:sS,crosshatch:cS,blockify:uS,threshold:fS,noiseField:dS,matrixRain:pS,vhs:mS,voronoi:hS},vS={active:"ascii",available:["ascii","waveLines","dithering","halftone","pixelSort","dots","contour","edgeDetection","crosshatch","blockify","threshold","noiseField","matrixRain","vhs","voronoi"],settings:fg},Te={maxFileSize:500*1024*1024,minCharacterScale:1,maxCharacterScale:20,minSpacing:0,maxSpacing:1,minOutputWidth:0,maxOutputWidth:500,minBrightness:-100,maxBrightness:100,minContrast:-100,maxContrast:100,minSaturation:-100,maxSaturation:100,minHue:0,maxHue:360,minSharpness:0,maxSharpness:100,minGamma:.1,maxGamma:3,minColorIntensity:0,maxColorIntensity:2,minBrightnessMapping:.1,maxBrightnessMapping:2,minSpatialWeight:0,maxSpatialWeight:1,minEdgeEnhance:0,maxEdgeEnhance:100,minBlur:0,maxBlur:10,minQuantizeColors:0,maxQuantizeColors:256,minGrainIntensity:0,maxGrainIntensity:200,minGrainSize:1,maxGrainSize:10,minGrainSpeed:1,maxGrainSpeed:200,minChromaticOffset:0,maxChromaticOffset:50,minScanlineOpacity:0,maxScanlineOpacity:1,minScanlineSpacing:1,maxScanlineSpacing:20,minVignetteIntensity:0,maxVignetteIntensity:1,minVignetteRadius:0,maxVignetteRadius:1,minCrtAmount:0,maxCrtAmount:.5},Jf={"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"],"image/gif":[".gif"],"image/webp":[".webp"],"image/bmp":[".bmp"]},$f={"video/mp4":[".mp4"],"video/webm":[".webm"],"video/quicktime":[".mov"],"video/x-msvideo":[".avi"]},ed={"model/gltf-binary":[".glb"],"model/gltf+json":[".gltf"]},gS={...Jf,...$f,...ed},A0={type:"none",status:"NO_INPUT",source:null,file:null,metadata:null,error:null,gifData:null},xS={builtIn:[],custom:[],activeId:null},k0={isExporting:!1,format:null,progress:0,currentStep:"",error:null,asciiData:null},J=P2()(V2((t,n)=>({input:A0,settings:structuredClone(Ge),effects:structuredClone(vS),presets:xS,export:k0,ui:structuredClone(eS),model3dSettings:structuredClone(tS),videoCurrentTime:0,videoIsPlaying:!0,isHydrated:!1,setInputType:r=>t(i=>({input:{...i.input,type:r}})),setInputStatus:r=>t(i=>({input:{...i.input,status:r}})),setInputSource:r=>t(i=>({input:{...i.input,source:r}})),setInputFile:r=>t(i=>({input:{...i.input,file:r}})),setInputMetadata:r=>t(i=>({input:{...i.input,metadata:r}})),setInputError:r=>t(i=>({input:{...i.input,error:r,status:r?"ERROR":i.input.status}})),setGifData:r=>t(i=>({input:{...i.input,gifData:r}})),clearInput:()=>{const r=n().input.source;r instanceof MediaStream&&r.getTracks().forEach(i=>i.stop()),t({input:{...A0}})},updateCharacterSettings:r=>t(i=>({settings:{...i.settings,character:{...i.settings.character,...r}},presets:{...i.presets,activeId:null}})),updateImageSettings:r=>t(i=>({settings:{...i.settings,image:{...i.settings.image,...r}},presets:{...i.presets,activeId:null}})),updateColorSettings:r=>t(i=>({settings:{...i.settings,color:{...i.settings.color,...r}},presets:{...i.presets,activeId:null}})),updateAdvancedSettings:r=>t(i=>({settings:{...i.settings,advanced:{...i.settings.advanced,...r}},presets:{...i.presets,activeId:null}})),updatePostProcessingSettings:r=>t(i=>({settings:{...i.settings,postProcessing:{bloom:r.bloom?{...i.settings.postProcessing.bloom,...r.bloom}:i.settings.postProcessing.bloom,grain:r.grain?{...i.settings.postProcessing.grain,...r.grain}:i.settings.postProcessing.grain,chromatic:r.chromatic?{...i.settings.postProcessing.chromatic,...r.chromatic}:i.settings.postProcessing.chromatic,scanlines:r.scanlines?{...i.settings.postProcessing.scanlines,...r.scanlines}:i.settings.postProcessing.scanlines,vignette:r.vignette?{...i.settings.postProcessing.vignette,...r.vignette}:i.settings.postProcessing.vignette,crtCurve:r.crtCurve?{...i.settings.postProcessing.crtCurve,...r.crtCurve}:i.settings.postProcessing.crtCurve,phosphor:r.phosphor?{...i.settings.postProcessing.phosphor,...r.phosphor}:i.settings.postProcessing.phosphor}},presets:{...i.presets,activeId:null}})),resetSettings:()=>t({settings:structuredClone(Ge),presets:{...n().presets,activeId:null}}),resetSection:r=>t(i=>({settings:{...i.settings,[r]:structuredClone(Ge[r])},presets:{...i.presets,activeId:null}})),loadSettings:r=>t({settings:r}),setActiveEffect:r=>t(i=>({effects:{...i.effects,active:r}})),updateHalftoneSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,halftone:{...i.effects.settings.halftone,...r}}}})),updatePixelSortSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,pixelSort:{...i.effects.settings.pixelSort,...r}}}})),updateWaveLinesSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,waveLines:{...i.effects.settings.waveLines,...r}}}})),updateDitheringSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,dithering:{...i.effects.settings.dithering,...r}}}})),updateDotsSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,dots:{...i.effects.settings.dots,...r}}}})),updateContourSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,contour:{...i.effects.settings.contour,...r}}}})),updateEdgeDetectionSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,edgeDetection:{...i.effects.settings.edgeDetection,...r}}}})),updateCrosshatchSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,crosshatch:{...i.effects.settings.crosshatch,...r}}}})),updateBlockifySettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,blockify:{...i.effects.settings.blockify,...r}}}})),updateThresholdSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,threshold:{...i.effects.settings.threshold,...r}}}})),updateNoiseFieldSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,noiseField:{...i.effects.settings.noiseField,...r}}}})),updateMatrixRainSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,matrixRain:{...i.effects.settings.matrixRain,...r}}}})),updateVhsSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,vhs:{...i.effects.settings.vhs,...r}}}})),updateVoronoiSettings:r=>t(i=>({effects:{...i.effects,settings:{...i.effects.settings,voronoi:{...i.effects.settings.voronoi,...r}}}})),resetEffectSettings:()=>t(r=>({effects:{...r.effects,settings:structuredClone(fg)}})),setBuiltInPresets:r=>t(i=>({presets:{...i.presets,builtIn:r}})),addCustomPreset:r=>t(i=>({presets:{...i.presets,custom:[...i.presets.custom,r]}})),updateCustomPreset:(r,i)=>t(s=>({presets:{...s.presets,custom:s.presets.custom.map(c=>c.id===r?{...c,...i}:c)}})),deleteCustomPreset:r=>t(i=>({presets:{...i.presets,custom:i.presets.custom.filter(s=>s.id!==r),activeId:i.presets.activeId===r?null:i.presets.activeId}})),setActivePreset:r=>{const i=n(),s=[...i.presets.builtIn,...i.presets.custom].find(c=>c.id===r);t({presets:{...i.presets,activeId:r},...s?{settings:structuredClone(s.settings)}:{}})},loadCustomPresets:r=>t(i=>({presets:{...i.presets,custom:r}})),startExport:r=>t(i=>({export:{...i.export,isExporting:!0,format:r,progress:0,currentStep:"Initializing...",error:null}})),updateExportProgress:(r,i)=>t(s=>({export:{...s.export,progress:r,currentStep:i}})),setExportError:r=>t(i=>({export:{...i.export,error:r,isExporting:!1}})),cancelExport:()=>t({export:{...k0}}),setAsciiData:r=>t(i=>({export:{...i.export,asciiData:r}})),togglePanel:r=>t(i=>({ui:{...i.ui,panels:{...i.ui.panels,[r]:!i.ui.panels[r]}}})),setPanelOpen:(r,i)=>t(s=>({ui:{...s.ui,panels:{...s.ui.panels,[r]:i}}})),toggleSettingsSection:r=>t(i=>({ui:{...i.ui,settingsSections:{...i.ui.settingsSections,[r]:!i.ui.settingsSections[r]}}})),setZoom:r=>t(i=>({ui:{...i.ui,zoom:Math.max(.1,Math.min(5,r))}})),toggleFullscreen:()=>t(r=>({ui:{...r.ui,isFullscreen:!r.ui.isFullscreen}})),setIsMobile:r=>t(i=>({ui:{...i.ui,isMobile:r}})),toggleSidebar:()=>t(r=>({ui:{...r.ui,sidebarCollapsed:!r.ui.sidebarCollapsed}})),setTheme:r=>t(i=>({ui:{...i.ui,theme:r}})),cycleTheme:()=>{const{ui:r}=n(),i=F2(r.theme);t({ui:{...r,theme:i.id}})},setIsDraggingFile:r=>t(i=>({ui:{...i.ui,isDraggingFile:r}})),setVideoCurrentTime:r=>t({videoCurrentTime:r}),setVideoIsPlaying:r=>t({videoIsPlaying:r}),seekVideo:r=>{const{input:i}=n();if(i.type==="video"&&i.source instanceof HTMLVideoElement){const s=i.source;s.currentTime=r,s.pause(),t({videoCurrentTime:r,videoIsPlaying:!1})}},updateModel3DSettings:r=>t(i=>({model3dSettings:{...i.model3dSettings,...r}})),hydrate:r=>t(i=>({settings:r.settings,effects:r.effects,presets:{...i.presets,custom:r.customPresets},ui:{...i.ui,...r.ui},model3dSettings:r.model3dSettings,isHydrated:!0}))})));Q2().then(t=>{t?J.getState().hydrate(t):J.setState({isHydrated:!0})});J.subscribe(t=>({settings:t.settings,effects:t.effects,customPresets:t.presets.custom,ui:t.ui,model3dSettings:t.model3dSettings,isHydrated:t.isHydrated}),t=>{t.isHydrated&&$2(t.settings,t.effects,t.customPresets,t.ui,t.model3dSettings)});const dg=()=>J(t=>t.model3dSettings),pg=()=>J(t=>t.settings.character),bS=()=>J(t=>t.settings.image),yS=()=>J(t=>t.settings.color),SS=()=>J(t=>t.settings.advanced),CS=()=>J(t=>t.settings.postProcessing),TS=()=>J(t=>t.effects.active),ea=()=>J(t=>t.effects.settings);function wS({children:t}){const n=J(r=>r.ui.theme);return k.useEffect(()=>{const r=N2(n);j2(r)},[n]),h.jsx(h.Fragment,{children:t})}const ES=()=>{const t=J(r=>r.ui.theme),n=J(r=>r.cycleTheme);return h.jsxs("div",{className:"min-h-screen bg-term-bg text-term-text flex flex-col",children:[h.jsxs("header",{className:"px-6 py-4 flex justify-between items-center",children:[h.jsx(Fs,{to:"/",className:"text-term-text-dim hover:text-term-text transition-colors text-sm",children:"Back to Grainrad"}),h.jsx("button",{onClick:n,className:"w-7 h-7 flex items-center justify-center border border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim transition-colors",title:`Theme: ${t}`,children:h.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})})]}),h.jsx("main",{className:"flex-1 flex items-center justify-center p-6",children:h.jsxs("article",{className:"max-w-xl space-y-6 text-sm leading-relaxed text-term-text-dim",children:[h.jsx("p",{children:"There was a time when the internet felt different. You needed a tool? You found one, downloaded it and used it. Done."}),h.jsx("p",{children:"No account. No trial countdown. Just software made by people who wanted to solve a problem and share the solution. Sketchy download buttons you had to guess which one was real. Keygens blasting EDM while you waited. Forums where strangers helped others, we shared everything. An internet that felt like a community garage sale more than a shopping mall."}),h.jsx("p",{children:`Things have changed and honestly not all of it is bad. Subscriptions make sense for a lot of things. Ongoing development, support, servers, teams that need to pay rent. I get it. Building sustainable software is hard, and "free" won't keep the lights on.`}),h.jsx("p",{children:"But I also think some tools should just exist. Small utilities, simple fixes. Stuff that solves one problem and doesn't need a login, a pricing tier, or a 14-day reminder email. Not everything needs to be a business."}),h.jsx("p",{className:"text-term-text",children:"So this one's free."}),h.jsxs("p",{className:"pt-4",children:["Made by"," ",h.jsx("a",{href:"https://x.com/almmaasoglu",target:"_blank",rel:"noopener noreferrer",className:"text-term-text-dim hover:text-term-text transition-colors",children:"Alim"})]})]})})]})},AS=()=>{const t=J(r=>r.ui.theme),n=J(r=>r.cycleTheme);return h.jsxs("div",{className:"min-h-screen bg-term-bg text-term-text flex flex-col",children:[h.jsxs("header",{className:"px-6 py-4 flex justify-between items-center",children:[h.jsx(Fs,{to:"/",className:"text-term-text-dim hover:text-term-text transition-colors text-sm",children:"Back to Grainrad"}),h.jsx("button",{onClick:n,className:"w-7 h-7 flex items-center justify-center border border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim transition-colors",title:`Theme: ${t}`,children:h.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})})]}),h.jsx("main",{className:"flex-1 flex items-center justify-center p-6",children:h.jsxs("article",{className:"max-w-xl w-full space-y-8 text-sm leading-relaxed",children:[h.jsx("h1",{className:"text-term-text text-lg",children:"Changelog"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"text-term-text",children:"v1.0.2"}),h.jsx("span",{className:"text-term-text-dim text-xs",children:"Jan 24, 2025"})]}),h.jsxs("ul",{className:"text-term-text-dim space-y-1 pl-4",children:[h.jsx("li",{children:"Fixed GIF playback speed across different browsers"}),h.jsx("li",{children:"Fixed PNG/JPEG export producing black images"}),h.jsx("li",{children:"Fixed video preview not rendering in Firefox"}),h.jsx("li",{children:"Added Firefox support for MP4 video export"}),h.jsx("li",{children:"Disabled ThreeJS export for non-ASCII effects"})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"text-term-text",children:"v1.0.1"}),h.jsx("span",{className:"text-term-text-dim text-xs",children:"Jan 23, 2025"})]}),h.jsxs("ul",{className:"text-term-text-dim space-y-1 pl-4",children:[h.jsx("li",{children:"Fixed Firefox compatibility issues"}),h.jsx("li",{children:"Added Open Graph meta tags for social sharing"})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("span",{className:"text-term-text",children:"v1.0.0"}),h.jsx("span",{className:"text-term-text-dim text-xs",children:"Jan 23, 2025"})]}),h.jsxs("ul",{className:"text-term-text-dim space-y-1 pl-4",children:[h.jsx("li",{children:"Initial release"}),h.jsx("li",{children:"ASCII art generation with customizable characters"}),h.jsx("li",{children:"Multiple effects: dithering, halftone, edge detection, and more"}),h.jsx("li",{children:"Image, video, GIF, and webcam support"}),h.jsx("li",{children:"Export as PNG, JPEG, GIF, MP4, SVG, Text, or ThreeJS"}),h.jsx("li",{children:"Multiple color themes"})]})]})]})]})})]})},kS=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  return textureSample(inputTexture, texSampler, texCoord);
}
`,OS=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

struct AsciiUniforms {
  sourceSize: vec2f,        // offset 0: Source image dimensions
  outputSize: vec2f,        // offset 8: Output canvas dimensions
  cellSize: vec2f,          // offset 16: Size of each ASCII cell in output pixels
  atlasSize: vec2f,         // offset 24: Font atlas dimensions
  atlasCharSize: vec2f,     // offset 32: Size of each character in atlas
  atlasCols: f32,           // offset 40: Number of columns in atlas
  charsetLength: f32,       // offset 44: Number of characters in charset
  brightness: f32,          // offset 48: Brightness adjustment (-100 to 100)
  contrast: f32,            // offset 52: Contrast adjustment (-100 to 100)
  invert: f32,              // offset 56: Invert brightness mapping (0 or 1)
  useOriginalColors: f32,   // offset 60: 0 = custom color, 1 = original colors
  customColorR: f32,        // offset 64: Custom color R (0-1)
  customColorG: f32,        // offset 68: Custom color G (0-1)
  customColorB: f32,        // offset 72: Custom color B (0-1)
  spacing: f32,             // offset 76: Spacing between characters
  saturation: f32,          // offset 80: Saturation adjustment (-100 to 100)
  hue: f32,                 // offset 84: Hue rotation (0 to 360)
  sharpness: f32,           // offset 88: Sharpness (0 to 100)
  gamma: f32,               // offset 92: Gamma correction (0.1 to 3)
  imageColorMode: f32,      // offset 96: 0=color, 1=grayscale, 2=monochrome, 3=sepia
  gridCols: f32,            // offset 100: Number of ASCII grid columns (for matchResult indexing)
  backgroundColorR: f32,    // offset 104: Background color R (0-1)
  backgroundColorG: f32,    // offset 108: Background color G (0-1)
  backgroundColorB: f32,    // offset 112: Background color B (0-1)
  brightnessMapping: f32,   // offset 116: Gamma for character mapping (0.1 to 2)
  edgeEnhance: f32,         // offset 120: Edge enhancement strength (0 to 100)
  blur: f32,                // offset 124: Blur amount (0 to 10)
  quantizeColors: f32,      // offset 128: Color quantization levels (0 = disabled, 2-256)
}

@group(0) @binding(0) var sourceSampler: sampler;
@group(0) @binding(1) var sourceTexture: texture_2d<f32>;
@group(0) @binding(2) var fontAtlas: texture_2d<f32>;
@group(0) @binding(3) var<uniform> uniforms: AsciiUniforms;
@group(0) @binding(4) var<storage, read> matchResult: array<u32>;

// OPTIMIZATION: Precomputed constants
const INV_200: f32 = 0.005;
const INV_100: f32 = 0.01;
const INV_360: f32 = 0.002777778;
const INV_25: f32 = 0.04;
const LUMA_R: f32 = 0.299;
const LUMA_G: f32 = 0.587;
const LUMA_B: f32 = 0.114;
const ONE_THIRD: f32 = 0.333333333;
const TWO_THIRDS: f32 = 0.666666667;
const ONE_SIXTH: f32 = 0.166666667;

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}

// Helper function: RGB to HSL (optimized)
fn rgbToHsl(c: vec3f) -> vec3f {
  let maxC = max(max(c.r, c.g), c.b);
  let minC = min(min(c.r, c.g), c.b);
  let l = (maxC + minC) * 0.5;

  if (maxC == minC) {
    return vec3f(0.0, 0.0, l);
  }

  let d = maxC - minC;
  // OPTIMIZATION: Use select instead of ternary for branchless
  let s = select(d / (2.0 - maxC - minC), d / (maxC + minC), l > 0.5);

  var h: f32;
  if (maxC == c.r) {
    h = (c.g - c.b) / d + select(0.0, 6.0, c.g < c.b);
  } else if (maxC == c.g) {
    h = (c.b - c.r) / d + 2.0;
  } else {
    h = (c.r - c.g) / d + 4.0;
  }
  h = h * ONE_SIXTH;  // OPTIMIZATION: multiply instead of divide by 6

  return vec3f(h, s, l);
}

// Helper function: HSL to RGB (optimized)
fn hslToRgb(hsl: vec3f) -> vec3f {
  if (hsl.y == 0.0) {
    return vec3f(hsl.z);
  }

  // OPTIMIZATION: Use select for branchless
  let q = select(hsl.z + hsl.y - hsl.z * hsl.y, hsl.z * (1.0 + hsl.y), hsl.z < 0.5);
  let p = 2.0 * hsl.z - q;

  return vec3f(
    hueToRgb(p, q, hsl.x + ONE_THIRD),
    hueToRgb(p, q, hsl.x),
    hueToRgb(p, q, hsl.x - ONE_THIRD)
  );
}

fn hueToRgb(p: f32, q: f32, t_in: f32) -> f32 {
  var t = t_in;
  // OPTIMIZATION: branchless wrapping
  t = t - floor(t);  // equivalent to handling <0 and >1 cases

  // Early returns with select for most common paths
  if (t < ONE_SIXTH) { return p + (q - p) * 6.0 * t; }
  if (t < 0.5) { return q; }
  if (t < TWO_THIRDS) { return p + (q - p) * (TWO_THIRDS - t) * 6.0; }
  return p;
}

// Apply image processing to color (optimized)
fn applyImageProcessing(color: vec3f, invGamma: f32, brightnessOffset: f32, contrastFactor: f32, satFactor: f32, colorMode: i32) -> vec3f {
  var c = color;

  // Apply gamma correction (using precomputed inverse)
  c = pow(c, vec3f(invGamma));

  // Apply brightness adjustment (using precomputed offset)
  c = c + brightnessOffset;

  // Apply contrast adjustment (using precomputed factor)
  c = (c - 0.5) * contrastFactor + 0.5;

  // Apply saturation
  // OPTIMIZATION: Inline luma calculation
  let gray = c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
  c = mix(vec3f(gray), c, satFactor);

  // Apply hue rotation only if needed
  if (uniforms.hue > 0.0) {
    let hsl = rgbToHsl(c);
    let newHue = fract(hsl.x + uniforms.hue * INV_360);
    c = hslToRgb(vec3f(newHue, hsl.y, hsl.z));
  }

  // Apply color mode transformations using integer comparison
  // OPTIMIZATION: Use integer switch instead of float comparisons
  if (colorMode == 1) {
    // Grayscale
    let grayVal = c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
    c = vec3f(grayVal);
  } else if (colorMode == 2) {
    // Monochrome (high contrast black/white) - branchless
    let grayVal = c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
    c = select(vec3f(0.0), vec3f(1.0), grayVal > 0.5);
  } else if (colorMode == 3) {
    // Sepia
    let grayVal = c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
    c = vec3f(grayVal * 1.2, grayVal, grayVal * 0.8);
  }

  return clamp(c, vec3f(0.0), vec3f(1.0));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // OPTIMIZATION: Precompute frequently used values once
  let invCellSize = 1.0 / uniforms.cellSize;
  let invOutputSize = 1.0 / uniforms.outputSize;
  let invAtlasSize = 1.0 / uniforms.atlasSize;
  let texelSize = 1.0 / uniforms.sourceSize;

  // Precompute image processing parameters
  let invGamma = 1.0 / uniforms.gamma;
  let brightnessOffset = uniforms.brightness * INV_200;
  let contrastFactor = (uniforms.contrast + 100.0) * INV_100;
  let satFactor = (uniforms.saturation + 100.0) * INV_100;
  let colorMode = i32(uniforms.imageColorMode + 0.5);

  // Current pixel position in output
  let pixelPos = texCoord * uniforms.outputSize;

  // Which ASCII cell are we in?
  let cellPos = floor(pixelPos * invCellSize);

  // Position within the cell (0-1)
  let cellUV = fract(pixelPos * invCellSize);

  // Apply spacing - shrink the character area and add gaps
  let gapRatio = uniforms.spacing * 0.5;
  let charArea = 1.0 - gapRatio;
  let halfGap = gapRatio * 0.5;

  // OPTIMIZATION: Branchless gap check
  let inGapX = cellUV.x < halfGap || cellUV.x > (1.0 - halfGap);
  let inGapY = cellUV.y < halfGap || cellUV.y > (1.0 - halfGap);
  let inGap = inGapX || inGapY;

  // Remap cellUV to the character area
  // OPTIMIZATION: Precompute inverse charArea
  let invCharArea = 1.0 / charArea;
  let remappedUV = (cellUV - halfGap) * invCharArea;
  let clampedCellUV = saturate(remappedUV);  // OPTIMIZATION: saturate instead of clamp(x, 0, 1)

  // Calculate number of cells
  let numCells = floor(uniforms.outputSize * invCellSize);
  let invNumCells = 1.0 / numCells;

  // Sample the source image - map cell position directly to source UV
  let sourceUV = (cellPos + 0.5) * invNumCells;
  let clampedSourceUV = saturate(sourceUV);

  var sourceColor = textureSample(sourceTexture, sourceSampler, clampedSourceUV);

  // Apply blur (box blur) - only if enabled
  if (uniforms.blur > 0.0) {
    let blurRadius = uniforms.blur;
    var blurredColor = vec3f(0.0);
    // OPTIMIZATION: Unroll 5x5 kernel with precomputed reciprocal
    for (var dy = -2; dy <= 2; dy++) {
      for (var dx = -2; dx <= 2; dx++) {
        let offset = vec2f(f32(dx), f32(dy)) * texelSize * blurRadius;
        blurredColor += textureSample(sourceTexture, sourceSampler, clampedSourceUV + offset).rgb;
      }
    }
    sourceColor = vec4f(blurredColor * INV_25, sourceColor.a);  // OPTIMIZATION: multiply by 1/25
  }

  // Apply edge enhancement (Laplacian-based) - only if enabled
  if (uniforms.edgeEnhance > 0.0) {
    let center = sourceColor.rgb;
    let left = textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(-texelSize.x, 0.0)).rgb;
    let right = textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(texelSize.x, 0.0)).rgb;
    let top = textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(0.0, -texelSize.y)).rgb;
    let bottom = textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(0.0, texelSize.y)).rgb;
    let laplacian = center * 4.0 - left - right - top - bottom;
    let edgeAmount = uniforms.edgeEnhance * INV_100;
    sourceColor = vec4f(center + laplacian * edgeAmount, sourceColor.a);
  }

  // Apply sharpness (unsharp mask) - only if enabled
  if (uniforms.sharpness > 0.0) {
    let blurSample = (
      textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(-texelSize.x, 0.0)).rgb +
      textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(texelSize.x, 0.0)).rgb +
      textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(0.0, -texelSize.y)).rgb +
      textureSample(sourceTexture, sourceSampler, clampedSourceUV + vec2f(0.0, texelSize.y)).rgb
    ) * 0.25;  // OPTIMIZATION: multiply instead of divide
    let sharpAmount = uniforms.sharpness * INV_100;
    sourceColor = vec4f(sourceColor.rgb + (sourceColor.rgb - blurSample) * sharpAmount, sourceColor.a);
  }

  // Apply color quantization (posterization) - only if enabled
  var processedRgb = sourceColor.rgb;
  if (uniforms.quantizeColors > 1.0) {
    let levels = uniforms.quantizeColors;
    let invLevelsMinus1 = 1.0 / (levels - 1.0);
    processedRgb = floor(processedRgb * levels) * invLevelsMinus1;
  }

  // Apply image processing with precomputed parameters
  let processedColor = applyImageProcessing(processedRgb, invGamma, brightnessOffset, contrastFactor, satFactor, colorMode);

  // Get character index from compute shader result
  let gridCols = u32(uniforms.gridCols);
  let cellIndex = u32(cellPos.y) * gridCols + u32(cellPos.x);
  let charIndex = matchResult[cellIndex];

  // Calculate atlas UV for this character
  let atlasColsU = u32(uniforms.atlasCols);
  let atlasCol = f32(charIndex % atlasColsU);
  let atlasRow = f32(charIndex / atlasColsU);

  // UV within the character cell in the atlas
  let atlasCharUV = vec2f(
    (atlasCol + clampedCellUV.x) * uniforms.atlasCharSize.x,
    (atlasRow + clampedCellUV.y) * uniforms.atlasCharSize.y
  ) * invAtlasSize;

  // Sample the font atlas
  let atlasColor = textureSample(fontAtlas, sourceSampler, atlasCharUV);

  // Character intensity (white = character, black = background)
  // OPTIMIZATION: Branchless gap handling using select
  let charIntensity = select(atlasColor.r, 0.0, inGap && uniforms.spacing > 0.01);

  // Determine final color using select (branchless)
  let customColor = vec3f(uniforms.customColorR, uniforms.customColorG, uniforms.customColorB);
  let finalColor = select(customColor, processedColor, uniforms.useOriginalColors > 0.5);

  // Apply character mask with background color
  let backgroundColor = vec3f(uniforms.backgroundColorR, uniforms.backgroundColorG, uniforms.backgroundColorB);
  let outputColor = mix(backgroundColor, finalColor, charIntensity);

  return vec4f(outputColor, 1.0);
}
`,RS=`
struct MatchUniforms {
  sourceSize: vec2f,        // offset 0: Source image dimensions
  cellSize: vec2f,          // offset 8: Size of each cell in source pixels
  gridSize: vec2u,          // offset 16: Number of cells (cols, rows)
  atlasSize: vec2f,         // offset 24: Font atlas dimensions
  atlasCharSize: vec2f,     // offset 32: Size of each character in atlas
  atlasCols: u32,           // offset 40: Number of columns in atlas
  charsetLength: u32,       // offset 44: Number of characters
  brightnessWeight: f32,    // offset 48: Weight for brightness matching (0-1)
  invert: f32,              // offset 52: Invert brightness (0 or 1)
  brightnessMapping: f32,   // offset 56: Gamma for brightness mapping
  imageBrightness: f32,     // offset 60: Image brightness adjustment (-100 to 100)
  imageContrast: f32,       // offset 64: Image contrast adjustment (-100 to 100)
  imageGamma: f32,          // offset 68: Image gamma (0.1 to 3)
  samplesPerAxis: u32,      // offset 72: Sample grid size (2, 3, or 4)
  _pad2: f32,               // offset 76: padding
}

@group(0) @binding(0) var sourceSampler: sampler;
@group(0) @binding(1) var sourceTexture: texture_2d<f32>;
@group(0) @binding(2) var fontAtlas: texture_2d<f32>;
@group(0) @binding(3) var<storage, read_write> matchResult: array<u32>;
@group(0) @binding(4) var<uniform> uniforms: MatchUniforms;

// Precomputed constants (avoid division in hot paths)
const INV_200: f32 = 0.005;
const INV_100: f32 = 0.01;
const LUMA_R: f32 = 0.299;
const LUMA_G: f32 = 0.587;
const LUMA_B: f32 = 0.114;

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) id: vec3u) {
  let cellX = id.x;
  let cellY = id.y;

  // Bounds check
  if (cellX >= uniforms.gridSize.x || cellY >= uniforms.gridSize.y) {
    return;
  }

  // Get sample count from uniforms (2, 3, or 4)
  let samplesPerAxis = uniforms.samplesPerAxis;
  let totalSamples = samplesPerAxis * samplesPerAxis;

  // OPTIMIZATION: Precompute reciprocals and invariants ONCE before loops
  let invTotalSamples = 1.0 / f32(totalSamples);
  let invSamplesPerAxis = 1.0 / f32(samplesPerAxis);
  let invGamma = 1.0 / uniforms.imageGamma;
  let contrastFactor = (uniforms.imageContrast + 100.0) * INV_100;
  let brightnessOffset = uniforms.imageBrightness * INV_200;
  let invSourceSize = 1.0 / uniforms.sourceSize;
  let doInvert = uniforms.invert > 0.5;

  // Calculate UV coordinates for this cell in the source image
  let cellUVStart = vec2f(f32(cellX), f32(cellY)) * uniforms.cellSize * invSourceSize;
  let cellUVSize = uniforms.cellSize * invSourceSize;

  // Sample source image at multiple points within the cell
  var sourceBrightness = 0.0;
  var sourceSamples: array<f32, 16>;  // Max 4x4 sample grid

  for (var sy = 0u; sy < samplesPerAxis; sy++) {
    for (var sx = 0u; sx < samplesPerAxis; sx++) {
      let sampleUV = cellUVStart + cellUVSize * vec2f(
        (f32(sx) + 0.5) * invSamplesPerAxis,
        (f32(sy) + 0.5) * invSamplesPerAxis
      );
      let color = textureSampleLevel(sourceTexture, sourceSampler, sampleUV, 0.0);

      // OPTIMIZATION: Inline luma calculation (avoid vec3f construction)
      var brightness = color.r * LUMA_R + color.g * LUMA_G + color.b * LUMA_B;

      // Apply image gamma (using precomputed inverse)
      brightness = pow(brightness, invGamma);

      // Apply image brightness adjustment (using precomputed offset)
      brightness = brightness + brightnessOffset;

      // Apply image contrast adjustment (using precomputed factor)
      brightness = (brightness - 0.5) * contrastFactor + 0.5;

      // Apply brightness mapping (gamma for character selection curve)
      brightness = pow(clamp(brightness, 0.0, 1.0), uniforms.brightnessMapping);

      // OPTIMIZATION: Branchless invert using select()
      brightness = select(brightness, 1.0 - brightness, doInvert);

      // Clamp final brightness
      brightness = clamp(brightness, 0.0, 1.0);

      sourceSamples[sy * samplesPerAxis + sx] = brightness;
      sourceBrightness += brightness;
    }
  }
  // OPTIMIZATION: Multiply by precomputed reciprocal instead of divide
  sourceBrightness *= invTotalSamples;

  // For pure brightness mapping (brightnessWeight = 1.0), map brightness directly to character index
  let indexBasedMatch = u32(clamp(sourceBrightness, 0.0, 0.9999) * f32(uniforms.charsetLength));

  // If brightnessWeight is 1.0, just use the index-based approach (original behavior)
  if (uniforms.brightnessWeight >= 0.99) {
    let cellIndex = cellY * uniforms.gridSize.x + cellX;
    matchResult[cellIndex] = indexBasedMatch;
    return;
  }

  // Compare against each character to find best match using spatial similarity
  var bestMatch = 0u;
  var bestScore = 999999.0;

  // OPTIMIZATION: Hoist texture dimensions and precompute outside character loop
  let atlasTexSize = vec2f(textureDimensions(fontAtlas));
  let invAtlasTexSize = 1.0 / atlasTexSize;
  let charsetLenF = f32(uniforms.charsetLength);
  let charsetLenMinus1F = f32(uniforms.charsetLength - 1u);
  let invCharsetLen = 1.0 / charsetLenF;
  let expectedIndex = sourceBrightness * charsetLenMinus1F;
  let spatialWeight = 1.0 - uniforms.brightnessWeight;

  for (var charIdx = 0u; charIdx < uniforms.charsetLength; charIdx++) {
    // Index-based distance (using precomputed values)
    let indexDist = abs(f32(charIdx) - expectedIndex) * invCharsetLen;

    // Spatial distance (how similar is the pattern)
    var spatialDistSq = 0.0;  // OPTIMIZATION: Keep squared, avoid sqrt
    let atlasCol = charIdx % uniforms.atlasCols;
    let atlasRow = charIdx / uniforms.atlasCols;
    let atlasCharStart = vec2f(f32(atlasCol), f32(atlasRow)) * uniforms.atlasCharSize;

    for (var sy = 0u; sy < samplesPerAxis; sy++) {
      for (var sx = 0u; sx < samplesPerAxis; sx++) {
        // Sample the character from the atlas at corresponding position
        let atlasUV = (atlasCharStart + uniforms.atlasCharSize * vec2f(
          (f32(sx) + 0.5) * invSamplesPerAxis,
          (f32(sy) + 0.5) * invSamplesPerAxis
        )) * invAtlasTexSize;

        let atlasBrightness = textureSampleLevel(fontAtlas, sourceSampler, atlasUV, 0.0).r;
        let sourceSample = sourceSamples[sy * samplesPerAxis + sx];

        // Squared difference (accumulate squared distance)
        let diff = sourceSample - atlasBrightness;
        spatialDistSq += diff * diff;
      }
    }

    // OPTIMIZATION: Skip sqrt - compare squared distances directly
    // Scale spatialDistSq to match indexDist range (both 0-1 roughly)
    // Mean squared error is already normalized by sample count conceptually
    let spatialDist = spatialDistSq * invTotalSamples;

    // Combined score: weighted sum of index-based distance and spatial distance
    let score = indexDist * uniforms.brightnessWeight + spatialDist * spatialWeight;

    if (score < bestScore) {
      bestScore = score;
      bestMatch = charIdx;
    }
  }

  // Write the best matching character index to the result buffer
  let cellIndex = cellY * uniforms.gridSize.x + cellX;
  matchResult[cellIndex] = bestMatch;
}
`,DS=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

struct PostProcessUniforms {
  resolution: vec2f,        // offset 0
  time: f32,                // offset 8
  bloomEnabled: u32,        // offset 12
  bloomIntensity: f32,      // offset 16
  _bloomPad: f32,           // offset 20 (was glowRadius, now unused in shader)
  grainEnabled: u32,        // offset 24
  grainIntensity: f32,      // offset 28
  grainSize: f32,           // offset 32
  grainSpeed: f32,          // offset 36
  chromaticEnabled: u32,    // offset 40
  chromaticOffset: f32,     // offset 44
  scanlinesEnabled: u32,    // offset 48
  scanlinesOpacity: f32,    // offset 52
  scanlinesSpacing: f32,    // offset 56
  vignetteEnabled: u32,     // offset 60
  vignetteIntensity: f32,   // offset 64
  vignetteRadius: f32,      // offset 68
  crtEnabled: u32,          // offset 72
  crtAmount: f32,           // offset 76
  phosphorEnabled: u32,     // offset 80
  _padding1: f32,           // offset 84
  phosphorColorR: f32,      // offset 88
  phosphorColorG: f32,      // offset 92
  phosphorColorB: f32,      // offset 96
  _padding2: f32,           // offset 100
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: PostProcessUniforms;
@group(0) @binding(3) var bloomTexture: texture_2d<f32>;

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}

fn hash(p: vec2f) -> f32 {
  var p3 = fract(vec3f(p.x, p.y, p.x) * 0.1031);
  p3 = p3 + dot(p3, vec3f(p3.y + 33.33, p3.z + 33.33, p3.x + 33.33));
  return fract((p3.x + p3.y) * p3.z);
}

// CRT barrel distortion
fn crtDistort(uv: vec2f, amount: f32) -> vec2f {
  let centered = uv - 0.5;
  let dist = dot(centered, centered);
  let distorted = centered * (1.0 + dist * amount);
  return distorted + 0.5;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let pixelSize = 1.0 / uniforms.resolution;

  // Apply CRT barrel distortion first (affects UV coordinates)
  // Use select() to avoid non-uniform control flow before textureSample
  let crtActive = uniforms.crtEnabled == 1u && uniforms.crtAmount > 0.0;
  let distortedUV = crtDistort(texCoord, uniforms.crtAmount);
  let uv = select(texCoord, distortedUV, crtActive);

  // Check if UV is out of bounds (for CRT corners)
  let outOfBounds = crtActive && (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0);

  var color = textureSample(inputTexture, texSampler, clamp(uv, vec2f(0.0), vec2f(1.0)));

  // Chromatic aberration
  let chromaticOffset = uniforms.chromaticOffset * pixelSize.x * f32(uniforms.chromaticEnabled);
  let rShift = textureSample(inputTexture, texSampler, vec2f(uv.x - chromaticOffset, uv.y)).r;
  let bShift = textureSample(inputTexture, texSampler, vec2f(uv.x + chromaticOffset, uv.y)).b;
  color.r = select(color.r, rShift, uniforms.chromaticEnabled == 1u && uniforms.chromaticOffset > 0.0);
  color.b = select(color.b, bShift, uniforms.chromaticEnabled == 1u && uniforms.chromaticOffset > 0.0);

  // Bloom effect (multi-pass bloom blended from separate texture)
  if (uniforms.bloomEnabled == 1u) {
    let bloom = textureSample(bloomTexture, texSampler, uv);
    color = vec4f(color.rgb + bloom.rgb * uniforms.bloomIntensity, color.a);
  }

  // Scanlines
  let fragY = uv.y * uniforms.resolution.y;
  let scanline = fragY % (uniforms.scanlinesSpacing * 2.0);
  let scanlineActive = f32(uniforms.scanlinesEnabled == 1u && scanline < uniforms.scanlinesSpacing);
  color = vec4f(color.rgb * (1.0 - uniforms.scanlinesOpacity * scanlineActive), color.a);

  // Film grain
  let grainUV = floor(uv * uniforms.resolution / max(uniforms.grainSize, 1.0)) * max(uniforms.grainSize, 1.0);
  let noise = hash(grainUV + uniforms.time * uniforms.grainSpeed) - 0.5;
  let grainAmount = noise * (uniforms.grainIntensity / 100.0) * f32(uniforms.grainEnabled);
  color = vec4f(color.rgb + grainAmount, color.a);

  // Phosphor color tint (terminal color effect)
  if (uniforms.phosphorEnabled == 1u) {
    let luminance = dot(color.rgb, vec3f(0.299, 0.587, 0.114));
    let phosphorColor = vec3f(uniforms.phosphorColorR, uniforms.phosphorColorG, uniforms.phosphorColorB);
    color = vec4f(phosphorColor * luminance, color.a);
  }

  // Vignette (darken edges)
  if (uniforms.vignetteEnabled == 1u) {
    let centered = uv - 0.5;
    let dist = length(centered) * 2.0; // 0 at center, ~1.4 at corners
    let vignette = 1.0 - smoothstep(uniforms.vignetteRadius, 1.0, dist) * uniforms.vignetteIntensity;
    color = vec4f(color.rgb * vignette, color.a);
  }

  // Apply CRT out-of-bounds masking (black corners)
  let finalColor = select(color, vec4f(0.0, 0.0, 0.0, 1.0), outOfBounds);

  return clamp(finalColor, vec4f(0.0), vec4f(1.0));
}
`,US=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

struct ThresholdUniforms {
  threshold: f32,
  softThreshold: f32,
  _padding: vec2f,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: ThresholdUniforms;

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let color = textureSample(inputTexture, texSampler, texCoord);

  // Calculate luminance
  let luminance = dot(color.rgb, vec3f(0.2126, 0.7152, 0.0722));

  // Simple soft threshold: smoothstep from threshold to threshold + softThreshold
  let t = uniforms.threshold;
  let softRange = uniforms.softThreshold;

  // How much this pixel exceeds the threshold (0 = at threshold, 1 = way above)
  let brightness = smoothstep(t - softRange, t + softRange, luminance);

  // Output the original color scaled by how much it exceeds threshold
  // This preserves color while extracting only bright areas
  return vec4f(color.rgb * brightness, 1.0);
}
`,MS=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

struct BlurUniforms {
  direction: vec2f,    // (1,0) for horizontal, (0,1) for vertical
  resolution: vec2f,
  radius: f32,
  _pad1: f32,
  _pad2: f32,
  _pad3: f32,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: BlurUniforms;

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}

// Gaussian weight function
fn gaussian(x: f32, sigma: f32) -> f32 {
  return exp(-(x * x) / (2.0 * sigma * sigma));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // Pixel size in UV space (0-1)
  let pixelSize = 1.0 / uniforms.resolution;

  // Direction scaled by pixel size - this gives us one pixel step
  let pixelStep = uniforms.direction * pixelSize;

  // Sigma for gaussian - radius is in pixels
  let sigma = max(uniforms.radius * 0.5, 1.0);

  var color = vec4f(0.0);
  var totalWeight = 0.0;

  // 13-tap Gaussian blur for quality
  // Sample from -6 to +6 pixel offsets, scaled by radius
  for (var i = -6; i <= 6; i++) {
    // Offset in pixels, spread across the radius
    let pixelOffset = f32(i) * (uniforms.radius / 6.0);

    // Gaussian weight based on distance
    let weight = gaussian(f32(i), sigma / (uniforms.radius / 6.0));

    // Sample position in UV space
    let sampleUV = texCoord + pixelStep * pixelOffset;

    // Clamp to valid UV range
    let clampedUV = clamp(sampleUV, vec2f(0.0), vec2f(1.0));

    color += textureSample(inputTexture, texSampler, clampedUV) * weight;
    totalWeight += weight;
  }

  return color / totalWeight;
}
`,ta=`
struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) texCoord: vec2f,
}

@vertex
fn vertexMain(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
  var pos = array<vec2f, 3>(
    vec2f(-1.0, -1.0),
    vec2f(3.0, -1.0),
    vec2f(-1.0, 3.0)
  );

  var uv = array<vec2f, 3>(
    vec2f(0.0, 1.0),
    vec2f(2.0, 1.0),
    vec2f(0.0, -1.0)
  );

  var output: VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.texCoord = uv[vertexIndex];
  return output;
}
`,LS=`
${ta}

struct DitheringUniforms {
  resolution: vec2f,         // 0: Screen resolution
  intensity: f32,            // 8: Overall effect intensity / grid size multiplier
  colorLevels: f32,          // 12: Number of color levels for quantization

  method: f32,               // 16: Dithering method ID
  matrixSize: f32,           // 20: Matrix size for ordered dithering
  brightness: f32,           // 24: Brightness adjustment
  contrast: f32,             // 28: Contrast adjustment

  colorMode: f32,            // 32: Color mode (0=mono, 1=tonal, 2=indexed, 3=rgb)
  gamma: f32,                // 36: Gamma correction
  sharpen: f32,              // 40: Sharpen/blur (-1 to 1)
  dotSize: f32,              // 44: Halftone dot size

  angle: f32,                // 48: Halftone angle in degrees
  lineWeight: f32,           // 52: Line weight for crosshatch/engraving
  lineSpacing: f32,          // 56: Line spacing
  layers: f32,               // 60: Number of crosshatch layers

  modEnabled: f32,           // 64: Modulation enabled (0 or 1)
  modType: f32,              // 68: Modulation type (0=wave, 1=grid, 2=horizontal, 3=radial)
  modFreq: f32,              // 72: Modulation frequency
  modAmp: f32,               // 76: Modulation amplitude

  modPhase: f32,             // 80: Modulation phase
  bleed: f32,                // 84: Color bleed amount
  rounding: f32,             // 88: Edge rounding/softening
  paletteSize: f32,          // 92: Number of colors in palette

  fgColorR: f32,             // 96: Foreground color R
  fgColorG: f32,             // 100: Foreground color G
  fgColorB: f32,             // 104: Foreground color B
  bgColorR: f32,             // 108: Background color R

  bgColorG: f32,             // 112: Background color G
  bgColorB: f32,             // 116: Background color B
  cmykAngleC: f32,           // 120: CMYK cyan angle
  cmykAngleM: f32,           // 124: CMYK magenta angle

  cmykAngleY: f32,           // 128: CMYK yellow angle
  cmykAngleK: f32,           // 132: CMYK black angle
  time: f32,                 // 136: Time for animation
  brightnessMapping: f32,    // 140: Brightness mapping (gamma for luminance)

  edgeEnhance: f32,          // 144: Edge enhancement strength (0-100)
  blur: f32,                 // 148: Blur amount (0-10)
  quantizeColors: f32,       // 152: Color quantization levels (0=disabled)
  _pad: f32,                 // 156: Padding

  // Palette colors (16 colors max, vec4 for alignment) - starts at byte 160
  palette0: vec4f,           // 160: Palette color 0 (RGB + unused)
  palette1: vec4f,           // 176: Palette color 1
  palette2: vec4f,           // 192: Palette color 2
  palette3: vec4f,           // 208: Palette color 3
  palette4: vec4f,           // 224: Palette color 4
  palette5: vec4f,           // 240: Palette color 5
  palette6: vec4f,           // 256: Palette color 6
  palette7: vec4f,           // 272: Palette color 7
  palette8: vec4f,           // 288: Palette color 8
  palette9: vec4f,           // 304: Palette color 9
  palette10: vec4f,          // 320: Palette color 10
  palette11: vec4f,          // 336: Palette color 11
  palette12: vec4f,          // 352: Palette color 12
  palette13: vec4f,          // 368: Palette color 13
  palette14: vec4f,          // 384: Palette color 14
  palette15: vec4f,          // 400: Palette color 15

  // Epsilon Glow settings (416-455)
  epsilonGlowEnabled: f32,   // 416: Epsilon glow enabled
  epsilonThreshold: f32,     // 420: Threshold for glow
  epsilonThresholdSmooth: f32, // 424: Threshold smoothing
  epsilonRadius: f32,        // 428: Glow radius

  epsilonIntensity: f32,     // 432: Glow intensity
  epsilonAspectRatio: f32,   // 436: Aspect ratio
  epsilonDirection: f32,     // 440: Direction in degrees
  epsilonFalloff: f32,       // 444: Falloff exponent

  epsilonEpsilon: f32,       // 448: Epsilon value
  epsilonDistanceScale: f32, // 452: Distance scale

  // JPEG Glitch settings (456-479)
  jpegBlockShift: f32,       // 456: Block shift amount
  jpegBlockShiftEnabled: f32, // 460: Block shift enabled
  jpegChannelSwap: f32,      // 464: Channel swap amount
  jpegChannelSwapEnabled: f32, // 468: Channel swap enabled

  jpegScanlineOffset: f32,   // 472: Scanline offset
  jpegScanlineEnabled: f32,  // 476: Scanline offset enabled
  jpegBlockScramble: f32,    // 480: Block scramble amount
  jpegBlockScrambleEnabled: f32, // 484: Block scramble enabled

  jpegInterlace: f32,        // 488: Interlace corruption
  jpegInterlaceEnabled: f32, // 492: Interlace enabled

  // Chromatic effect settings (496-511)
  chromaticEnabled: f32,     // 496: Chromatic enabled
  chromaticMaxDisplace: f32, // 500: Max displacement
  chromaticRed: f32,         // 504: Red channel offset
  chromaticGreen: f32,       // 508: Green channel offset

  chromaticBlue: f32,        // 512: Blue channel offset
  _pad2: f32,                // 516: Padding
  _pad3: f32,                // 520: Padding
  _pad4: f32,                // 524: Padding
  // Total size: 528 bytes (must be multiple of 16)
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: DitheringUniforms;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const PI: f32 = 3.14159265359;

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

// Compute adaptive darkness that spreads out values better for dark images
// Uses the brightnessMapping uniform as a gamma curve
// Values < 1 = expand dark range (good for dark images)
// Values > 1 = expand bright range (good for bright images)
fn getAdaptiveDarkness(lum: f32, gamma: f32) -> f32 {
  // Apply gamma to luminance first to spread out values
  let adjustedLum = pow(max(lum, 0.001), gamma);
  return 1.0 - adjustedLum;
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

fn applyGamma(color: vec3f, gamma: f32) -> vec3f {
  if (gamma == 1.0) { return color; }
  let g = 1.0 / max(gamma, 0.01);
  return pow(max(color, vec3f(0.001)), vec3f(g));
}

fn rotate2D(p: vec2f, angle: f32) -> vec2f {
  let s = sin(angle);
  let c = cos(angle);
  return vec2f(p.x * c - p.y * s, p.x * s + p.y * c);
}

// Simple hash for procedural noise
fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(12.9898, 78.233))) * 43758.5453);
}

fn hash2(p: vec2f) -> vec2f {
  return vec2f(
    fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453),
    fract(sin(dot(p, vec2f(269.5, 183.3))) * 43758.5453)
  );
}

// ============================================================================
// PROCESSING FUNCTIONS (Blur, Edge Enhance, Quantize)
// ============================================================================

// 3x3 Gaussian blur
fn applyBlur(uv: vec2f, amount: f32) -> vec3f {
  if (amount < 0.01) {
    return textureSample(inputTexture, texSampler, uv).rgb;
  }

  let texelSize = 1.0 / uniforms.resolution;
  let blurSize = amount * texelSize;

  // 3x3 Gaussian kernel weights
  let w0 = 0.0625; // corners
  let w1 = 0.125;  // edges
  let w2 = 0.25;   // center

  var color = vec3f(0.0);
  color += textureSample(inputTexture, texSampler, uv + vec2f(-1.0, -1.0) * blurSize).rgb * w0;
  color += textureSample(inputTexture, texSampler, uv + vec2f( 0.0, -1.0) * blurSize).rgb * w1;
  color += textureSample(inputTexture, texSampler, uv + vec2f( 1.0, -1.0) * blurSize).rgb * w0;
  color += textureSample(inputTexture, texSampler, uv + vec2f(-1.0,  0.0) * blurSize).rgb * w1;
  color += textureSample(inputTexture, texSampler, uv).rgb * w2;
  color += textureSample(inputTexture, texSampler, uv + vec2f( 1.0,  0.0) * blurSize).rgb * w1;
  color += textureSample(inputTexture, texSampler, uv + vec2f(-1.0,  1.0) * blurSize).rgb * w0;
  color += textureSample(inputTexture, texSampler, uv + vec2f( 0.0,  1.0) * blurSize).rgb * w1;
  color += textureSample(inputTexture, texSampler, uv + vec2f( 1.0,  1.0) * blurSize).rgb * w0;

  return color;
}

// Sobel edge detection
fn detectEdges(uv: vec2f) -> f32 {
  let texelSize = 1.0 / uniforms.resolution;

  // Sample 3x3 neighborhood luminances
  let tl = luminance(textureSample(inputTexture, texSampler, uv + vec2f(-1.0, -1.0) * texelSize).rgb);
  let tc = luminance(textureSample(inputTexture, texSampler, uv + vec2f( 0.0, -1.0) * texelSize).rgb);
  let tr = luminance(textureSample(inputTexture, texSampler, uv + vec2f( 1.0, -1.0) * texelSize).rgb);
  let ml = luminance(textureSample(inputTexture, texSampler, uv + vec2f(-1.0,  0.0) * texelSize).rgb);
  let mr = luminance(textureSample(inputTexture, texSampler, uv + vec2f( 1.0,  0.0) * texelSize).rgb);
  let bl = luminance(textureSample(inputTexture, texSampler, uv + vec2f(-1.0,  1.0) * texelSize).rgb);
  let bc = luminance(textureSample(inputTexture, texSampler, uv + vec2f( 0.0,  1.0) * texelSize).rgb);
  let br = luminance(textureSample(inputTexture, texSampler, uv + vec2f( 1.0,  1.0) * texelSize).rgb);

  // Sobel operators
  let gx = -tl - 2.0*ml - bl + tr + 2.0*mr + br;
  let gy = -tl - 2.0*tc - tr + bl + 2.0*bc + br;

  return sqrt(gx*gx + gy*gy);
}

// Apply edge enhancement to color
fn applyEdgeEnhance(color: vec3f, uv: vec2f, amount: f32) -> vec3f {
  if (amount < 0.01) { return color; }

  let edge = detectEdges(uv);
  let edgeAmount = amount / 100.0;

  // Darken edges (subtract edge from color)
  return clamp(color - vec3f(edge * edgeAmount), vec3f(0.0), vec3f(1.0));
}

// Apply color quantization
fn applyQuantize(color: vec3f, levels: f32) -> vec3f {
  if (levels < 2.0) { return color; }

  let l = levels - 1.0;
  return floor(color * l + 0.5) / l;
}

// Apply sharpening (unsharp mask style) - works as pre-processing
fn applySharpen(color: vec3f, uv: vec2f, amount: f32) -> vec3f {
  if (abs(amount) < 0.01) { return color; }

  let texelSize = 1.0 / uniforms.resolution;

  // Sample neighbors for Laplacian
  let n = textureSample(inputTexture, texSampler, uv + vec2f(0.0, -1.0) * texelSize).rgb;
  let s = textureSample(inputTexture, texSampler, uv + vec2f(0.0, 1.0) * texelSize).rgb;
  let e = textureSample(inputTexture, texSampler, uv + vec2f(1.0, 0.0) * texelSize).rgb;
  let w = textureSample(inputTexture, texSampler, uv + vec2f(-1.0, 0.0) * texelSize).rgb;

  // Laplacian = center * 4 - neighbors
  let laplacian = color * 4.0 - n - s - e - w;

  // Positive amount = sharpen, negative = soften
  return clamp(color + laplacian * amount * 0.5, vec3f(0.0), vec3f(1.0));
}

// ============================================================================
// PALETTE FUNCTIONS
// ============================================================================

// Get palette color by index (0-15)
fn getPaletteColor(idx: u32) -> vec3f {
  switch (idx) {
    case 0u: { return uniforms.palette0.rgb; }
    case 1u: { return uniforms.palette1.rgb; }
    case 2u: { return uniforms.palette2.rgb; }
    case 3u: { return uniforms.palette3.rgb; }
    case 4u: { return uniforms.palette4.rgb; }
    case 5u: { return uniforms.palette5.rgb; }
    case 6u: { return uniforms.palette6.rgb; }
    case 7u: { return uniforms.palette7.rgb; }
    case 8u: { return uniforms.palette8.rgb; }
    case 9u: { return uniforms.palette9.rgb; }
    case 10u: { return uniforms.palette10.rgb; }
    case 11u: { return uniforms.palette11.rgb; }
    case 12u: { return uniforms.palette12.rgb; }
    case 13u: { return uniforms.palette13.rgb; }
    case 14u: { return uniforms.palette14.rgb; }
    case 15u: { return uniforms.palette15.rgb; }
    default: { return vec3f(0.0); }
  }
}

// Find nearest palette color using Euclidean distance in RGB space
fn findNearestPaletteColor(color: vec3f, paletteSize: u32) -> vec3f {
  var bestColor = getPaletteColor(0u);
  var bestDist = 999999.0;

  let size = min(paletteSize, 16u);
  for (var i = 0u; i < size; i = i + 1u) {
    let palColor = getPaletteColor(i);
    let diff = color - palColor;
    let dist = dot(diff, diff); // squared distance
    if (dist < bestDist) {
      bestDist = dist;
      bestColor = palColor;
    }
  }

  return bestColor;
}

// Find two nearest palette colors for dithering between them
fn findTwoNearestPaletteColors(color: vec3f, paletteSize: u32) -> array<vec3f, 2> {
  var best1 = getPaletteColor(0u);
  var best2 = getPaletteColor(1u);
  var dist1 = 999999.0;
  var dist2 = 999999.0;

  let size = min(paletteSize, 16u);
  for (var i = 0u; i < size; i = i + 1u) {
    let palColor = getPaletteColor(i);
    let diff = color - palColor;
    let dist = dot(diff, diff);

    if (dist < dist1) {
      dist2 = dist1;
      best2 = best1;
      dist1 = dist;
      best1 = palColor;
    } else if (dist < dist2) {
      dist2 = dist;
      best2 = palColor;
    }
  }

  return array<vec3f, 2>(best1, best2);
}

// Dither between two palette colors based on threshold
fn ditherPaletteColor(color: vec3f, threshold: f32, paletteSize: u32) -> vec3f {
  let nearest = findTwoNearestPaletteColors(color, paletteSize);
  let color1 = nearest[0];
  let color2 = nearest[1];

  // Calculate blend factor based on distance to both colors
  let diff1 = color - color1;
  let diff2 = color - color2;
  let dist1 = length(diff1);
  let dist2 = length(diff2);
  let totalDist = dist1 + dist2;

  if (totalDist < 0.001) {
    return color1;
  }

  // Blend factor: 0 = color1, 1 = color2
  let blend = dist1 / totalDist;

  // Use threshold for dithering decision
  if (threshold < blend) {
    return color1;
  } else {
    return color2;
  }
}

// ============================================================================
// BAYER MATRICES
// ============================================================================

// 2x2 Bayer matrix
fn bayer2(pos: vec2u) -> f32 {
  let m = array<f32, 4>(0.0, 2.0, 3.0, 1.0);
  let idx = (pos.x % 2u) + (pos.y % 2u) * 2u;
  return m[idx] / 4.0;
}

// 4x4 Bayer matrix
fn bayer4(pos: vec2u) -> f32 {
  let m = array<f32, 16>(
    0.0, 8.0, 2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0, 9.0,
    15.0, 7.0, 13.0, 5.0
  );
  let idx = (pos.x % 4u) + (pos.y % 4u) * 4u;
  return m[idx] / 16.0;
}

// 8x8 Bayer matrix
fn bayer8(pos: vec2u) -> f32 {
  let m = array<f32, 64>(
    0.0, 32.0, 8.0, 40.0, 2.0, 34.0, 10.0, 42.0,
    48.0, 16.0, 56.0, 24.0, 50.0, 18.0, 58.0, 26.0,
    12.0, 44.0, 4.0, 36.0, 14.0, 46.0, 6.0, 38.0,
    60.0, 28.0, 52.0, 20.0, 62.0, 30.0, 54.0, 22.0,
    3.0, 35.0, 11.0, 43.0, 1.0, 33.0, 9.0, 41.0,
    51.0, 19.0, 59.0, 27.0, 49.0, 17.0, 57.0, 25.0,
    15.0, 47.0, 7.0, 39.0, 13.0, 45.0, 5.0, 37.0,
    63.0, 31.0, 55.0, 23.0, 61.0, 29.0, 53.0, 21.0
  );
  let idx = (pos.x % 8u) + (pos.y % 8u) * 8u;
  return m[idx] / 64.0;
}

// 16x16 Bayer matrix (computed from 8x8 using recursive formula)
fn bayer16(pos: vec2u) -> f32 {
  let px = pos.x % 16u;
  let py = pos.y % 16u;

  // Bayer(n) recursive: use 8x8 as base
  let bx = px % 8u;
  let by = py % 8u;
  let qx = px / 8u;
  let qy = py / 8u;

  let base = bayer8(vec2u(bx, by));
  let offset = f32(qx + qy * 2u) / 4.0;

  return (base + offset) / 4.0 + base * 0.75;
}

// Clustered dot pattern (halftone-style) - threshold version for legacy
fn clusteredDot(pos: vec2u) -> f32 {
  let m = array<f32, 64>(
    24.0, 10.0, 12.0, 26.0, 35.0, 47.0, 49.0, 37.0,
    8.0, 0.0, 2.0, 14.0, 45.0, 59.0, 61.0, 51.0,
    22.0, 6.0, 4.0, 16.0, 43.0, 57.0, 63.0, 53.0,
    30.0, 20.0, 18.0, 28.0, 33.0, 41.0, 55.0, 39.0,
    34.0, 46.0, 48.0, 36.0, 25.0, 11.0, 13.0, 27.0,
    44.0, 58.0, 60.0, 50.0, 9.0, 1.0, 3.0, 15.0,
    42.0, 56.0, 62.0, 52.0, 23.0, 7.0, 5.0, 17.0,
    32.0, 40.0, 54.0, 38.0, 31.0, 21.0, 19.0, 29.0
  );
  let idx = (pos.x % 8u) + (pos.y % 8u) * 8u;
  return m[idx] / 64.0;
}

// Clustered dot - adaptive version with dots that grow in dark areas
// Uses threshold-based approach similar to traditional clusteredDot but with luminance-adaptive dot sizes
fn clusteredDotAdaptive(pos: vec2f, lum: f32, gridSize: f32) -> f32 {
  // Use pixel position to create consistent cell pattern
  let cellSize = gridSize * 2.0; // Each cell is 2x gridSize pixels
  let cellPos = floor(pos / cellSize);
  let localPos = (pos - cellPos * cellSize) / cellSize; // 0-1 within cell

  // Single dot center per cell
  let center = vec2f(0.5, 0.5);
  let dist = length(localPos - center);

  // Darkness determines dot radius
  let darkness = 1.0 - lum;
  let maxRadius = 0.48; // Slightly less than 0.5 to prevent overlap
  let dotRadius = darkness * maxRadius;

  // Return 1 (background) if outside dot, 0 (foreground) if inside
  return 1.0 - step(dist, dotRadius);
}

// Diagonal line pattern - adaptive with lines that thicken in dark areas
fn diagonalAdaptive(pos: vec2f, lum: f32, gridSize: f32) -> f32 {
  // Use pixel position for consistent line spacing
  let lineSpacing = gridSize * 2.0;
  // Diagonal lines at 45 degrees
  let diagonalPos = (pos.x + pos.y) / lineSpacing;
  let linePos = fract(diagonalPos);
  let distFromLine = abs(linePos - 0.5);

  let darkness = 1.0 - lum;
  let maxThickness = 0.45;
  let lineThickness = darkness * maxThickness;

  return 1.0 - step(distFromLine, lineThickness);
}

// Checker pattern - adaptive with squares that grow in dark areas
fn checkerAdaptive(pos: vec2f, lum: f32, gridSize: f32) -> f32 {
  // Use pixel position for consistent cell sizing
  let cellSize = gridSize * 2.0;
  let cellPos = floor(pos / cellSize);
  let localPos = (pos - cellPos * cellSize) / cellSize - 0.5; // -0.5 to 0.5 within cell

  // Checkerboard: alternate cells
  let isBlackCell = (i32(cellPos.x) + i32(cellPos.y)) % 2 == 0;

  let darkness = 1.0 - lum;

  // In "black" cells, show foreground based on darkness
  // Square grows from center based on darkness
  let dist = max(abs(localPos.x), abs(localPos.y));
  let maxSize = 0.5;
  let squareSize = darkness * maxSize;

  if (isBlackCell) {
    return 1.0 - step(dist, squareSize);
  } else {
    // White cells: inverse - shrink the white as darkness increases
    return step(dist, 0.5 - squareSize);
  }
}

// ============================================================================
// BLUE NOISE (Procedural)
// ============================================================================

// Interleaved Gradient Noise (procedural blue noise approximation)
// From Jorge Jimenez, optimized for TAA - high quality blue noise without textures
fn interleavedGradientNoise(pos: vec2f) -> f32 {
  let magic = vec3f(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(pos, magic.xy)));
}

// Enhanced blue noise approximation using multiple octaves
fn blueNoiseApprox(pos: vec2f) -> f32 {
  let n1 = interleavedGradientNoise(pos);
  let n2 = interleavedGradientNoise(pos * 1.5 + vec2f(17.0, 31.0));
  let n3 = interleavedGradientNoise(pos * 2.3 + vec2f(53.0, 97.0));
  return fract(n1 + n2 * 0.5 + n3 * 0.25);
}

// Temporal blue noise (different slice per frame)
fn temporalBlueNoise(pos: vec2f, time: f32) -> f32 {
  let base = blueNoiseApprox(pos);
  let offset = fract(time * 0.1);
  return fract(base + offset);
}

// ============================================================================
// ERROR DIFFUSION APPROXIMATIONS
// ============================================================================

// These approximate error diffusion using procedural blue noise as threshold
// True error diffusion requires sequential processing, but blue noise
// produces visually similar results that are GPU-friendly
//
// These functions return a THRESHOLD value (0-1), not a final result.
// The threshold is then compared with luminance in the main shader.

// Error diffusion threshold with configurable spread
fn errorDiffusionThreshold(pos: vec2f, spread: f32) -> f32 {
  let noise = blueNoiseApprox(pos);
  // Return threshold centered at 0.5, spread by noise
  return 0.5 + (noise - 0.5) * spread;
}

// Floyd-Steinberg approximation (moderate spread)
fn floydSteinbergThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.5);
}

// Atkinson approximation (higher contrast, less spread - 75% error)
fn atkinsonThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.35);
}

// JJN approximation (smoother, more spread)
fn jjnThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.65);
}

// Stucki approximation
fn stuckiThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.6);
}

// Burkes approximation
fn burkesThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.55);
}

// Sierra approximation
fn sierraThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.58);
}

// Sierra Two-Row approximation
fn sierraTwoRowThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.52);
}

// Sierra Lite approximation (fastest, least spread)
fn sierraLiteThreshold(pos: vec2f) -> f32 {
  return errorDiffusionThreshold(pos, 0.4);
}

// ============================================================================
// ARTISTIC PATTERNS (Luminance-Adaptive)
// ============================================================================

// Crosshatch pattern - lines thicken in dark areas, more layers appear progressively
fn crosshatchAdaptive(uv: vec2f, lum: f32, lineWeight: f32, spacing: f32, maxLayers: u32) -> f32 {
  let scaledUv = uv * spacing * 5.0;
  let darkness = 1.0 - lum;

  // Base line thickness varies with darkness
  let baseThickness = lineWeight * 0.15 * (0.5 + darkness * 1.5);

  // Determine how many layers to show based on darkness
  // Bright areas: 0-1 layers, dark areas: up to maxLayers
  let layerThreshold1 = 0.15;  // First layer appears at 15% darkness
  let layerThreshold2 = 0.35;  // Second layer at 35%
  let layerThreshold3 = 0.55;  // Third layer at 55%
  let layerThreshold4 = 0.75;  // Fourth layer at 75%

  var result = 1.0;  // Start with background

  // Layer 1: Horizontal lines (appears first in slightly dark areas)
  if (maxLayers >= 1u && darkness > layerThreshold1) {
    let linePos = fract(scaledUv.y);
    let distFromLine = abs(linePos - 0.5);
    let layerStrength = smoothstep(layerThreshold1, layerThreshold1 + 0.1, darkness);
    let thickness = baseThickness * layerStrength;
    if (distFromLine < thickness) {
      result = 0.0;
    }
  }

  // Layer 2: Diagonal 45° (appears in medium-dark areas)
  if (maxLayers >= 2u && darkness > layerThreshold2) {
    let rotUv = rotate2D(scaledUv, PI / 4.0);
    let linePos = fract(rotUv.y);
    let distFromLine = abs(linePos - 0.5);
    let layerStrength = smoothstep(layerThreshold2, layerThreshold2 + 0.1, darkness);
    let thickness = baseThickness * layerStrength;
    if (distFromLine < thickness) {
      result = 0.0;
    }
  }

  // Layer 3: Vertical lines (appears in darker areas)
  if (maxLayers >= 3u && darkness > layerThreshold3) {
    let linePos = fract(scaledUv.x);
    let distFromLine = abs(linePos - 0.5);
    let layerStrength = smoothstep(layerThreshold3, layerThreshold3 + 0.1, darkness);
    let thickness = baseThickness * layerStrength;
    if (distFromLine < thickness) {
      result = 0.0;
    }
  }

  // Layer 4: Diagonal -45° (appears in darkest areas)
  if (maxLayers >= 4u && darkness > layerThreshold4) {
    let rotUv = rotate2D(scaledUv, -PI / 4.0);
    let linePos = fract(rotUv.y);
    let distFromLine = abs(linePos - 0.5);
    let layerStrength = smoothstep(layerThreshold4, layerThreshold4 + 0.1, darkness);
    let thickness = baseThickness * layerStrength;
    if (distFromLine < thickness) {
      result = 0.0;
    }
  }

  return result;
}

// Stipple pattern - dot density and size vary with luminance
fn stippleAdaptive(uv: vec2f, lum: f32, pos: vec2f, density: f32) -> f32 {
  let darkness = 1.0 - lum;

  // Create a grid of potential dot positions
  let gridScale = density * 0.5;
  let gridUV = uv * gridScale;
  let cellID = floor(gridUV);
  let cellUV = fract(gridUV) - 0.5;

  // Random offset for each cell (jittered grid)
  let randomOffset = hash2(cellID) - 0.5;
  let jitteredPos = cellUV - randomOffset * 0.4;

  // Distance from dot center
  let dist = length(jitteredPos);

  // Dot appears based on darkness threshold with some randomness
  let cellRandom = hash(cellID + vec2f(17.3, 31.7));
  let dotThreshold = cellRandom;

  // Dot size based on darkness
  let maxDotSize = 0.35;
  let dotSize = darkness * maxDotSize;

  // Show dot if darkness exceeds random threshold AND we're inside dot radius
  if (darkness > dotThreshold && dist < dotSize) {
    return 0.0;  // Foreground (dot)
  }
  return 1.0;  // Background
}

// Engraving pattern - horizontal lines that swell in dark areas (like banknote engraving)
fn engravingAdaptive(uv: vec2f, lum: f32, lineWeight: f32, spacing: f32) -> f32 {
  let scaledY = uv.y * spacing * 10.0;
  let linePos = fract(scaledY);
  let distFromLine = abs(linePos - 0.5);

  let darkness = 1.0 - lum;

  // Line thickness varies with darkness
  // Dark areas = thick lines, bright areas = thin/no lines
  let minThickness = 0.02;  // Minimum line presence
  let maxThickness = 0.45;  // Maximum line can almost touch neighbors
  let thickness = mix(minThickness, maxThickness, darkness) * lineWeight;

  // Add slight waviness based on x position for more organic feel
  let waveOffset = sin(uv.x * spacing * 20.0) * 0.02 * darkness;
  let adjustedDist = distFromLine + waveOffset;

  // Inside line = foreground (0), outside = background (1)
  return 1.0 - step(adjustedDist, thickness);
}

// White noise - fully random dithering
fn noiseAdaptive(pos: vec2f, lum: f32) -> f32 {
  let noise = hash(pos);
  let darkness = 1.0 - lum;
  // Show foreground (0) if noise < darkness
  return 1.0 - step(noise, darkness);
}

// Film grain effect - adds noise to luminance
fn grainPattern(lum: f32, pos: vec2f, intensity: f32, time: f32) -> f32 {
  let noise = hash(pos + vec2f(time * 100.0));
  let grain = (noise - 0.5) * intensity;
  return clamp(lum + grain, 0.0, 1.0);
}

// ============================================================================
// WAVE/OSCILLATING PATTERNS
// ============================================================================

// Calculate local contrast/variance at a UV position
// This measures how much the luminance varies in a small neighborhood
// High values = edges/features, Low values = uniform areas (backgrounds)
fn getLocalContrast(uv: vec2f) -> f32 {
  let texelSize = 1.0 / uniforms.resolution;
  let sampleRadius = 3.0; // Sample in a 3-pixel radius

  // Sample center and neighbors
  let center = luminance(textureSample(inputTexture, texSampler, uv).rgb);
  let left = luminance(textureSample(inputTexture, texSampler, uv + vec2f(-sampleRadius * texelSize.x, 0.0)).rgb);
  let right = luminance(textureSample(inputTexture, texSampler, uv + vec2f(sampleRadius * texelSize.x, 0.0)).rgb);
  let up = luminance(textureSample(inputTexture, texSampler, uv + vec2f(0.0, -sampleRadius * texelSize.y)).rgb);
  let down = luminance(textureSample(inputTexture, texSampler, uv + vec2f(0.0, sampleRadius * texelSize.y)).rgb);

  // Calculate variance (difference from center)
  let diffH = abs(left - right);
  let diffV = abs(up - down);
  let diffC = abs(center - (left + right + up + down) * 0.25);

  // Return combined contrast measure (0 = uniform, 1 = high contrast)
  return clamp((diffH + diffV + diffC) * 2.0, 0.0, 1.0);
}

// Apply S-curve contrast to luminance for wave patterns
// This is the key to DitherBoy-style contrast control:
// - contrastAmount > 0: Steepen the S-curve, making mid-tones snap to black/white faster
// - contrastAmount < 0: Flatten the curve, compressing tonal range
// This affects how lines "read" the luminance - high contrast means sharper transitions
fn applyWaveContrast(lum: f32, contrastAmount: f32) -> f32 {
  // Use a sigmoid-based S-curve for natural contrast adjustment
  // Center the contrast around mid-gray (0.5)
  let centered = lum - 0.5;

  // Calculate contrast multiplier (contrast uniform is -1 to 1, but can exceed)
  // Map to a useful range for the S-curve steepness
  let steepness = 1.0 + contrastAmount * 3.0; // Range roughly 0.25 to 4.0

  // Apply S-curve: tanh-like function centered at 0.5
  // For positive contrast: push values away from mid-gray
  // For negative contrast: push values toward mid-gray
  var result: f32;
  if (steepness > 0.01) {
    // Use power curve for contrast
    let sign = select(-1.0, 1.0, centered >= 0.0);
    let magnitude = abs(centered) * 2.0; // 0 to 1 range
    let curved = pow(magnitude, 1.0 / steepness);
    result = 0.5 + sign * curved * 0.5;
  } else {
    result = 0.5; // Extreme negative contrast = all mid-gray
  }

  return clamp(result, 0.0, 1.0);
}

// Waveform Line Effect - Proper Implementation
//
// This effect creates horizontal parallel lines where each line's vertical position
// is displaced based on the image luminance at that horizontal coordinate.
// This creates the characteristic "waveform monitor" or "oscilloscope" aesthetic
// where bright areas push lines up and dark areas push lines down.
//
// The algorithm:
// 1. For each pixel, determine which "base line" it belongs to (fixed Y intervals)
// 2. Sample the image luminance at the current X position
// 3. Calculate where the line should be displaced to based on luminance
// 4. Determine if the current pixel is on/near the displaced line
// 5. Modulate line thickness based on local luminance for tonal representation
// 6. Optionally fade lines in uniform/background areas using local contrast
//
// Key insight: The line displacement is a function of X position only (for horizontal lines),
// creating smooth, continuous wave patterns that follow the image's brightness profile.
//
// Contrast Control (like DitherBoy):
// The contrast uniform specifically controls how luminance values are interpreted:
// - Higher contrast: Lines appear only at extreme bright/dark transitions
// - Lower contrast: More gradual line response across the tonal range
// This is applied BEFORE displacement and thickness calculations.

fn waveformPattern(uv: vec2f, lum: f32, freq: f32, amplitude: f32, lineWeight: f32, angle: f32) -> f32 {
  // Apply rotation if angle is not 0 (allows vertical or diagonal lines)
  let rotUV = rotate2D(uv, angle * PI / 180.0);

  // Line spacing - distance between each parallel line
  // freq controls density: higher freq = more lines = smaller spacing
  let lineSpacing = 1.0 / max(freq * 2.0, 0.5);

  // Calculate the base line index this pixel would belong to (before displacement)
  // This creates evenly spaced horizontal lines
  let baseLineIndex = floor(rotUV.y / lineSpacing);

  // Sample luminance at this X position for the displacement amount
  // The luminance determines how much this line is pushed up or down
  // We sample at the base line's Y position to ensure continuity along the line
  let sampleY = (baseLineIndex + 0.5) * lineSpacing;
  let sampleUV = vec2f(uv.x, clamp(sampleY, 0.0, 1.0));

  // Sample the original (unrotated) image at this position
  let sampleColor = textureSample(inputTexture, texSampler, sampleUV).rgb;
  let sampleLum = luminance(sampleColor);

  // Apply brightness adjustment first
  let brightnessAdjusted = clamp(sampleLum + uniforms.brightness, 0.0, 1.0);

  // Apply WAVE-SPECIFIC contrast (like DitherBoy's Contrast slider)
  // This is the S-curve that controls how lines respond to different tonal values
  // Higher contrast = sharper transitions, lines cluster at extreme values
  // Lower contrast = smoother transitions, more even line distribution
  let adjustedLum = applyWaveContrast(brightnessAdjusted, uniforms.contrast);

  // Calculate displacement: luminance 0.5 = no displacement, 0 = down, 1 = up
  // The amplitude parameter controls the maximum displacement range
  let maxDisplacement = amplitude * lineSpacing * 2.0;
  let displacement = (adjustedLum - 0.5) * maxDisplacement;

  // The actual Y position of this line after displacement
  let lineY = (baseLineIndex + 0.5) * lineSpacing + displacement;

  // Distance from the current pixel to the displaced line
  let distToLine = abs(rotUV.y - lineY);

  // Line thickness varies with sampled luminance along the line for tonal representation
  // Brighter areas = thicker/more visible lines, darker areas = thinner/fading lines
  let baseThickness = lineWeight * lineSpacing * 0.12;
  let thickness = baseThickness * (0.2 + adjustedLum * 1.6);

  // Anti-aliased line rendering using smoothstep
  let edgeSoftness = lineSpacing * 0.015;
  let lineValue = 1.0 - smoothstep(thickness - edgeSoftness, thickness + edgeSoftness, distToLine);

  // Check adjacent lines as well (for when displacement causes overlap)
  // This prevents gaps when lines are displaced significantly
  let prevLineY = (baseLineIndex - 0.5) * lineSpacing + displacement;
  let nextLineY = (baseLineIndex + 1.5) * lineSpacing + displacement;
  let distToPrev = abs(rotUV.y - prevLineY);
  let distToNext = abs(rotUV.y - nextLineY);

  let prevLineValue = 1.0 - smoothstep(thickness - edgeSoftness, thickness + edgeSoftness, distToPrev);
  let nextLineValue = 1.0 - smoothstep(thickness - edgeSoftness, thickness + edgeSoftness, distToNext);

  // Combine all line contributions
  let combinedLine = max(lineValue, max(prevLineValue, nextLineValue));

  // LUMINANCE THRESHOLD: Lines fade out in dark areas (like DitherBoy)
  // This creates the effect where dark backgrounds have no/few lines
  // and bright areas have dense, visible lines
  // Use "intensity" uniform as the luminance threshold control:
  // intensity = 0.1 = lines only in very bright areas
  // intensity = 1.0 = lines in mid-bright areas
  // intensity = 2.0 = lines appear even in darker areas
  let lumThreshold = 1.0 - uniforms.intensity * 0.5; // Maps intensity 0.1-2.0 to threshold 0.95-0.0
  let lumMask = smoothstep(lumThreshold, lumThreshold + 0.3, adjustedLum);

  var finalLine = combinedLine * lumMask;

  // Apply edge-based masking if edgeEnhance is enabled
  // This provides additional control to show lines only near edges/features
  if (uniforms.edgeEnhance > 0.1) {
    let localContrast = getLocalContrast(uv);
    let contrastThreshold = uniforms.edgeEnhance / 100.0;
    let edgeMask = smoothstep(contrastThreshold * 0.05, contrastThreshold * 0.3, localContrast);
    finalLine = finalLine * edgeMask;
  }

  // Return: 0 = foreground (line), 1 = background
  return 1.0 - finalLine;
}

// Wave Dots - dots positioned along wave-displaced paths
// Same algorithm as waveform but renders dots instead of continuous lines
fn waveDotsPattern(uv: vec2f, lum: f32, freq: f32, amplitude: f32, dotSize: f32, angle: f32) -> f32 {
  let rotUV = rotate2D(uv, angle * PI / 180.0);

  // Line spacing for the wave paths
  let lineSpacing = 1.0 / max(freq * 2.0, 0.5);

  // Dot spacing along the X axis
  let dotSpacing = dotSize * 0.008;

  // Calculate the base line index and dot index
  let baseLineIndex = floor(rotUV.y / lineSpacing);
  let dotIndex = floor(rotUV.x / dotSpacing);

  // Sample luminance at this X position for displacement (same as waveform)
  let sampleY = (baseLineIndex + 0.5) * lineSpacing;
  let sampleUV = vec2f(uv.x, clamp(sampleY, 0.0, 1.0));
  let sampleColor = textureSample(inputTexture, texSampler, sampleUV).rgb;
  let sampleLum = luminance(sampleColor);

  // Apply brightness and wave-specific contrast (like DitherBoy)
  let brightnessAdjusted = clamp(sampleLum + uniforms.brightness, 0.0, 1.0);
  let adjustedLum = applyWaveContrast(brightnessAdjusted, uniforms.contrast);

  // Calculate displacement
  let maxDisplacement = amplitude * lineSpacing * 2.0;
  let displacement = (adjustedLum - 0.5) * maxDisplacement;

  // The Y position of this dot row after displacement
  let lineY = (baseLineIndex + 0.5) * lineSpacing + displacement;

  // The X position of the nearest dot center
  let dotX = (dotIndex + 0.5) * dotSpacing;

  // Distance from current pixel to the dot center
  let distToDot = length(vec2f(rotUV.x - dotX, rotUV.y - lineY));

  // Dot radius varies with sampled luminance - brighter = bigger dots, darker = smaller/no dots
  let minRadius = dotSpacing * 0.1;
  let maxRadius = dotSpacing * 0.45;
  let radius = mix(minRadius, maxRadius, adjustedLum);

  // Anti-aliased dot rendering
  let edgeSoftness = radius * 0.15;
  let dotValue = 1.0 - smoothstep(radius - edgeSoftness, radius + edgeSoftness, distToDot);

  // Check adjacent lines for continuity
  let prevLineY = (baseLineIndex - 0.5) * lineSpacing + displacement;
  let nextLineY = (baseLineIndex + 1.5) * lineSpacing + displacement;
  let distToPrevDot = length(vec2f(rotUV.x - dotX, rotUV.y - prevLineY));
  let distToNextDot = length(vec2f(rotUV.x - dotX, rotUV.y - nextLineY));
  let prevDotValue = 1.0 - smoothstep(radius - edgeSoftness, radius + edgeSoftness, distToPrevDot);
  let nextDotValue = 1.0 - smoothstep(radius - edgeSoftness, radius + edgeSoftness, distToNextDot);

  let combinedDot = max(dotValue, max(prevDotValue, nextDotValue));

  // LUMINANCE THRESHOLD: Dots fade out in dark areas
  let lumThreshold = 1.0 - uniforms.intensity * 0.5;
  let lumMask = smoothstep(lumThreshold, lumThreshold + 0.3, adjustedLum);

  var finalDot = combinedDot * lumMask;

  // Apply edge-based masking if edgeEnhance is enabled
  if (uniforms.edgeEnhance > 0.1) {
    let localContrast = getLocalContrast(uv);
    let contrastThreshold = uniforms.edgeEnhance / 100.0;
    let edgeMask = smoothstep(contrastThreshold * 0.05, contrastThreshold * 0.3, localContrast);
    finalDot = finalDot * edgeMask;
  }

  // Return: 0 = foreground (dot), 1 = background
  return 1.0 - finalDot;
}

// Oscillating Halftone - halftone grid with wave-based displacement
// The halftone grid is displaced based on image luminance, creating an oscillating pattern
fn oscillatingHalftonePattern(uv: vec2f, lum: f32, freq: f32, amplitude: f32, dotSize: f32, angle: f32) -> f32 {
  let rotUV = rotate2D(uv, angle * PI / 180.0);

  // Grid size for halftone cells
  let gridSize = dotSize * 0.008;

  // Calculate which grid cell we're in
  let cellIndex = floor(rotUV / gridSize);
  let cellCenter = (cellIndex + 0.5) * gridSize;

  // Sample luminance at the cell center for displacement calculation
  let sampleUV = clamp(cellCenter, vec2f(0.0), vec2f(1.0));
  let sampleColor = textureSample(inputTexture, texSampler, sampleUV).rgb;
  let sampleLum = luminance(sampleColor);

  // Apply brightness and wave-specific contrast (like DitherBoy)
  let brightnessAdjusted = clamp(sampleLum + uniforms.brightness, 0.0, 1.0);
  let adjustedLum = applyWaveContrast(brightnessAdjusted, uniforms.contrast);

  // Create wave displacement based on luminance deviation from mid-gray
  // Areas that differ from mid-gray get more wave displacement
  let lumDeviation = abs(adjustedLum - 0.5) * 2.0;
  let wavePhaseX = rotUV.y * freq * 20.0;
  let wavePhaseY = rotUV.x * freq * 20.0;
  let waveX = sin(wavePhaseX) * amplitude * 0.03 * lumDeviation;
  let waveY = sin(wavePhaseY) * amplitude * 0.03 * lumDeviation;

  // Apply displacement to get the actual dot center
  let displacedCenter = cellCenter + vec2f(waveX, waveY);

  // Distance from current pixel to displaced dot center
  let distToDot = length(rotUV - displacedCenter);

  // Dot radius based on sampled luminance - brighter = bigger dots
  let minRadius = gridSize * 0.1;
  let maxRadius = gridSize * 0.48;
  let radius = mix(minRadius, maxRadius, adjustedLum);

  // Anti-aliased dot rendering
  let edgeSoftness = gridSize * 0.03;
  let dotValue = 1.0 - smoothstep(radius - edgeSoftness, radius + edgeSoftness, distToDot);

  // LUMINANCE THRESHOLD: Dots fade out in dark areas
  let lumThreshold = 1.0 - uniforms.intensity * 0.5;
  let lumMask = smoothstep(lumThreshold, lumThreshold + 0.3, adjustedLum);

  var finalDot = dotValue * lumMask;

  // Apply edge-based masking if edgeEnhance is enabled
  if (uniforms.edgeEnhance > 0.1) {
    let localContrast = getLocalContrast(uv);
    let contrastThreshold = uniforms.edgeEnhance / 100.0;
    let edgeMask = smoothstep(contrastThreshold * 0.05, contrastThreshold * 0.3, localContrast);
    finalDot = finalDot * edgeMask;
  }

  // Return: 0 = foreground (dot), 1 = background
  return 1.0 - finalDot;
}

// Neon Wave - glowing lines with wave displacement for neon aesthetic
// Uses the same proper waveform algorithm but with glow rendering
fn neonWavePattern(uv: vec2f, lum: f32, freq: f32, amplitude: f32, dotSize: f32, angle: f32, time: f32) -> f32 {
  let rotUV = rotate2D(uv, angle * PI / 180.0);

  // Line spacing
  let lineSpacing = 1.0 / max(freq * 2.0, 0.5);

  // Calculate the base line index
  let baseLineIndex = floor(rotUV.y / lineSpacing);

  // Sample luminance at this X position for displacement
  let sampleY = (baseLineIndex + 0.5) * lineSpacing;
  let sampleUV = vec2f(uv.x, clamp(sampleY, 0.0, 1.0));
  let sampleColor = textureSample(inputTexture, texSampler, sampleUV).rgb;
  let sampleLum = luminance(sampleColor);

  // Apply brightness and wave-specific contrast (like DitherBoy)
  let brightnessAdjusted = clamp(sampleLum + uniforms.brightness, 0.0, 1.0);
  let adjustedLum = applyWaveContrast(brightnessAdjusted, uniforms.contrast);

  // Calculate displacement with subtle time-based animation
  let maxDisplacement = amplitude * lineSpacing * 2.5;
  let animOffset = sin(time * 0.5 + rotUV.x * 8.0) * 0.01 * lineSpacing;
  let displacement = (adjustedLum - 0.5) * maxDisplacement + animOffset;

  // The Y position of this line after displacement
  let lineY = (baseLineIndex + 0.5) * lineSpacing + displacement;

  // Distance from current pixel to the line
  let distToLine = abs(rotUV.y - lineY);

  // Glow effect parameters - size varies with sampled luminance (brighter = bigger glow)
  let coreSize = dotSize * lineSpacing * 0.02 * (0.3 + adjustedLum * 1.0);
  let glowSize = dotSize * lineSpacing * 0.08 * (0.3 + adjustedLum * 1.0);

  // Create glow: bright core with falloff
  let core = smoothstep(coreSize, 0.0, distToLine);
  let glow = smoothstep(glowSize, coreSize, distToLine) * 0.4;
  let neonValue = core + glow;

  // Check adjacent lines
  let prevLineY = (baseLineIndex - 0.5) * lineSpacing + displacement;
  let nextLineY = (baseLineIndex + 1.5) * lineSpacing + displacement;
  let distToPrev = abs(rotUV.y - prevLineY);
  let distToNext = abs(rotUV.y - nextLineY);

  let prevCore = smoothstep(coreSize, 0.0, distToPrev);
  let prevGlow = smoothstep(glowSize, coreSize, distToPrev) * 0.4;
  let nextCore = smoothstep(coreSize, 0.0, distToNext);
  let nextGlow = smoothstep(glowSize, coreSize, distToNext) * 0.4;

  let combinedNeon = max(neonValue, max(prevCore + prevGlow, nextCore + nextGlow));

  // LUMINANCE THRESHOLD: Neon lines fade out in dark areas
  let lumThreshold = 1.0 - uniforms.intensity * 0.5;
  let lumMask = smoothstep(lumThreshold, lumThreshold + 0.3, adjustedLum);

  var finalNeon = combinedNeon * lumMask;

  // Apply edge-based masking if edgeEnhance is enabled
  if (uniforms.edgeEnhance > 0.1) {
    let localContrast = getLocalContrast(uv);
    let contrastThreshold = uniforms.edgeEnhance / 100.0;
    let edgeMask = smoothstep(contrastThreshold * 0.05, contrastThreshold * 0.3, localContrast);
    finalNeon = finalNeon * edgeMask;
  }

  // Return: 0 = foreground (neon line), 1 = background
  return 1.0 - finalNeon;
}

// ============================================================================
// MODULATION EFFECTS
// ============================================================================

// Get UV displacement for modulation effects
fn getModulationDisplacement(uv: vec2f, modType: u32, freq: f32, amp: f32, phase: f32) -> vec2f {
  let scaledAmp = amp * 0.05; // Scale amplitude for UV displacement

  switch (modType) {
    case 0u: { // Wave (vertical displacement based on x)
      let offset = sin(uv.x * freq * PI * 2.0 + phase) * scaledAmp;
      return vec2f(0.0, offset);
    }
    case 1u: { // Grid (both x and y displacement)
      let offsetX = sin(uv.y * freq * PI * 2.0 + phase) * scaledAmp;
      let offsetY = sin(uv.x * freq * PI * 2.0 + phase) * scaledAmp;
      return vec2f(offsetX, offsetY);
    }
    case 2u: { // Horizontal (horizontal displacement based on y)
      let offset = sin(uv.y * freq * PI * 2.0 + phase) * scaledAmp;
      return vec2f(offset, 0.0);
    }
    case 3u: { // Radial (displacement outward from center)
      let center = vec2f(0.5, 0.5);
      let toCenter = uv - center;
      let dist = length(toCenter);
      let dir = normalize(toCenter + vec2f(0.0001)); // Avoid div by zero
      let offset = sin(dist * freq * PI * 4.0 + phase) * scaledAmp;
      return dir * offset;
    }
    case 4u: { // RGB Split - handled specially in applyRGBModulation
      return vec2f(0.0);
    }
    default: {
      return vec2f(0.0);
    }
  }
}

// Get threshold modulation offset (for dither pattern modulation)
fn getThresholdModulationOffset(uv: vec2f, modType: u32, freq: f32, amp: f32, phase: f32) -> f32 {
  switch (modType) {
    case 0u: { // Wave
      return sin(uv.x * freq * PI * 2.0 + phase) * amp;
    }
    case 1u: { // Grid
      return sin(uv.x * freq * PI * 2.0) * sin(uv.y * freq * PI * 2.0) * amp;
    }
    case 2u: { // Horizontal
      return sin(uv.y * freq * PI * 2.0 + phase) * amp;
    }
    case 3u: { // Radial
      let center = vec2f(0.5, 0.5);
      let dist = length(uv - center);
      return sin(dist * freq * PI * 4.0 + phase) * amp;
    }
    case 4u: { // RGB Split - no threshold modulation
      return 0.0;
    }
    default: {
      return 0.0;
    }
  }
}

// ============================================================================
// MAIN DITHERING FUNCTION
// ============================================================================

// Returns true if this method is adaptive (returns direct 0/1, not threshold)
fn isAdaptiveMethod(methodId: u32) -> bool {
  // Adaptive methods: 14-16 (clustered, diagonal, checker), 20 (crosshatch)
  return (methodId >= 14u && methodId <= 16u) || methodId == 20u;
}

// Get adaptive pattern result (returns direct 0/1 value based on luminance)
fn getAdaptivePattern(methodId: u32, pos: vec2f, uv: vec2f, lum: f32, gridSize: f32) -> f32 {
  // Apply brightness mapping gamma to spread out tonal values
  // This is crucial for dark images where most values cluster near 0
  // gamma < 1 = expand dark range (good for dark images)
  // gamma > 1 = expand bright range
  let gamma = uniforms.brightnessMapping;
  let adjustedLum = pow(max(lum, 0.001), gamma);

  switch (methodId) {
    // Ordered Adaptive (14-16) - use pixel position for pattern
    case 14u: { return clusteredDotAdaptive(pos, adjustedLum, gridSize); }
    case 15u: { return diagonalAdaptive(pos, adjustedLum, gridSize); }
    case 16u: { return checkerAdaptive(pos, adjustedLum, gridSize); }

    // Artistic Adaptive (20-24)
    case 20u: { return crosshatchAdaptive(uv, adjustedLum, uniforms.lineWeight, uniforms.lineSpacing, u32(uniforms.layers)); }

    default: { return 0.5; }
  }
}

// Get threshold for non-adaptive methods (traditional dithering)
fn getThreshold(methodId: u32, pos: vec2f, posU: vec2u, uv: vec2f, lum: f32, gridSize: f32) -> f32 {
  var threshold: f32 = 0.5;

  switch (methodId) {
    // Error Diffusion (0-7) - return threshold values
    case 0u: { threshold = floydSteinbergThreshold(pos); }
    case 1u: { threshold = atkinsonThreshold(pos); }
    case 2u: { threshold = jjnThreshold(pos); }
    case 3u: { threshold = stuckiThreshold(pos); }
    case 4u: { threshold = burkesThreshold(pos); }
    case 5u: { threshold = sierraThreshold(pos); }
    case 6u: { threshold = sierraTwoRowThreshold(pos); }
    case 7u: { threshold = sierraLiteThreshold(pos); }

    // Ordered Dithering (8-13) - Bayer matrices return thresholds
    case 8u: { threshold = bayer2(posU); }
    case 9u: { threshold = bayer4(posU); }
    case 10u: { threshold = bayer8(posU); }
    case 11u: { threshold = bayer16(posU); }
    case 12u: { threshold = bayer8(posU); } // "ordered" alias
    case 13u: { threshold = bayer4(posU); } // "bayer" alias

    // Blue Noise (17-19) - return thresholds
    case 17u: { threshold = blueNoiseApprox(pos); }
    case 18u: { threshold = temporalBlueNoise(pos, uniforms.time); }
    case 19u: { threshold = interleavedGradientNoise(pos); }

    // Grain (31) - special case, returns continuous value
    case 31u: { return grainPattern(lum, pos, uniforms.intensity, uniforms.time); }

    default: { threshold = bayer8(posU); }
  }

  return threshold;
}

// ============================================================================
// ADVANCED POST-PROCESSING EFFECTS
// ============================================================================

// Epsilon Glow Effect - creates a glowing halo around bright areas
// Based on distance field techniques for soft, adjustable glow
fn applyEpsilonGlow(color: vec3f, uv: vec2f) -> vec3f {
  if (uniforms.epsilonGlowEnabled < 0.5) {
    return color;
  }

  let threshold = uniforms.epsilonThreshold / 100.0;
  let smoothing = uniforms.epsilonThresholdSmooth / 100.0;
  let radius = uniforms.epsilonRadius;
  let intensity = uniforms.epsilonIntensity / 100.0;
  let aspectRatio = uniforms.epsilonAspectRatio / 100.0;
  let direction = uniforms.epsilonDirection * PI / 180.0;
  let falloff = uniforms.epsilonFalloff;
  let eps = uniforms.epsilonEpsilon / 100.0;
  let distScale = uniforms.epsilonDistanceScale / 100.0;

  let texelSize = 1.0 / uniforms.resolution;
  var glowAccum = vec3f(0.0);
  var totalWeight = 0.0;

  // Direction vector for anisotropic glow
  let dirVec = vec2f(cos(direction), sin(direction));

  // Sample in a circular/elliptical pattern around the pixel
  let sampleCount = i32(radius);
  for (var i = -sampleCount; i <= sampleCount; i++) {
    for (var j = -sampleCount; j <= sampleCount; j++) {
      let offset = vec2f(f32(i), f32(j));

      // Apply aspect ratio and direction
      let rotatedOffset = vec2f(
        offset.x * cos(direction) - offset.y * sin(direction),
        offset.x * sin(direction) + offset.y * cos(direction)
      );
      let scaledOffset = vec2f(rotatedOffset.x, rotatedOffset.y * aspectRatio);

      let dist = length(scaledOffset);
      if (dist > f32(sampleCount)) { continue; }

      let sampleUV = uv + scaledOffset * texelSize * distScale;
      let sampleColor = textureSample(inputTexture, texSampler, clamp(sampleUV, vec2f(0.0), vec2f(1.0))).rgb;
      let sampleLum = luminance(sampleColor);

      // Only accumulate from bright areas above threshold
      let brightnessMask = smoothstep(threshold - smoothing, threshold + smoothing, sampleLum);

      // Distance-based falloff
      let weight = pow(1.0 - dist / f32(sampleCount + 1), falloff) * brightnessMask;

      glowAccum += sampleColor * weight;
      totalWeight += weight;
    }
  }

  if (totalWeight > eps) {
    glowAccum /= totalWeight;
  }

  // Add glow to original color
  return color + glowAccum * intensity;
}

// JPEG Glitch Effects - these compute UV/coordinate offsets that affect sampling
// They return modified coordinates that will be used to sample the source image

// Get block shift offset for a given coordinate
fn getBlockShiftOffset(fragCoord: vec2f) -> vec2f {
  if (uniforms.jpegBlockShiftEnabled < 0.5 || uniforms.jpegBlockShift < 0.5) {
    return vec2f(0.0);
  }

  let blockSize = 8.0;
  let blockY = floor(fragCoord.y / blockSize);
  let randVal = hash(vec2f(blockY, floor(uniforms.time * 2.0)));

  // Shift entire rows of blocks horizontally
  let shiftAmount = (randVal - 0.5) * uniforms.jpegBlockShift * 2.0;
  return vec2f(shiftAmount, 0.0);
}

// Get scanline offset for a given coordinate
fn getScanlineOffset(fragCoord: vec2f) -> vec2f {
  if (uniforms.jpegScanlineEnabled < 0.5 || uniforms.jpegScanlineOffset < 0.5) {
    return vec2f(0.0);
  }

  let lineInterval = max(uniforms.jpegScanlineOffset, 1.0);
  let lineY = floor(fragCoord.y);

  // Only offset every Nth line
  if (u32(lineY) % u32(lineInterval) != 0u) {
    return vec2f(0.0);
  }

  let randVal = hash(vec2f(lineY, floor(uniforms.time * 3.0)));
  let offset = (randVal - 0.5) * 20.0; // Horizontal pixel offset
  return vec2f(offset, 0.0);
}

// Get block scramble offset - moves blocks to different positions
fn getBlockScrambleOffset(fragCoord: vec2f) -> vec2f {
  if (uniforms.jpegBlockScrambleEnabled < 0.5 || uniforms.jpegBlockScramble < 0.5) {
    return vec2f(0.0);
  }

  let blockSize = 8.0 + uniforms.jpegBlockScramble * 0.2;
  let blockCoord = floor(fragCoord / blockSize);

  let randVal = hash(blockCoord + vec2f(floor(uniforms.time * 0.5), 0.0));
  let scrambleAmount = uniforms.jpegBlockScramble / 50.0;

  // Only scramble some blocks
  if (randVal > scrambleAmount) {
    return vec2f(0.0);
  }

  let randOffset = hash2(blockCoord + vec2f(floor(uniforms.time), 0.0));
  return (randOffset - 0.5) * uniforms.jpegBlockScramble * 2.0;
}

// Get interlace offset - shifts alternating lines
fn getInterlaceOffset(fragCoord: vec2f) -> vec2f {
  if (uniforms.jpegInterlaceEnabled < 0.5 || uniforms.jpegInterlace < 0.5) {
    return vec2f(0.0);
  }

  let lineY = u32(fragCoord.y);

  // Only affect even lines
  if (lineY % 2u != 0u) {
    return vec2f(0.0);
  }

  let intensity = uniforms.jpegInterlace / 100.0;
  let randVal = hash(vec2f(f32(lineY), floor(uniforms.time * 2.0)));

  if (randVal > intensity) {
    return vec2f(0.0);
  }

  return vec2f((randVal - 0.5) * 10.0 * intensity, 0.0);
}

// Combined glitch offset - returns total UV displacement
fn getGlitchOffset(fragCoord: vec2f) -> vec2f {
  var offset = vec2f(0.0);
  offset += getBlockShiftOffset(fragCoord);
  offset += getScanlineOffset(fragCoord);
  offset += getBlockScrambleOffset(fragCoord);
  offset += getInterlaceOffset(fragCoord);
  return offset;
}

// Apply channel swap to already-sampled color
fn applyChannelSwap(color: vec3f, fragCoord: vec2f) -> vec3f {
  if (uniforms.jpegChannelSwapEnabled < 0.5 || uniforms.jpegChannelSwap < 0.5) {
    return color;
  }

  let blockSize = 16.0;
  let intensity = uniforms.jpegChannelSwap / 100.0;

  let blockId = floor(fragCoord / blockSize);
  let randVal = hash(blockId + vec2f(floor(uniforms.time * 0.5), 0.0));

  if (randVal > intensity) { return color; }

  // Determine swap type based on random value
  let swapType = u32(randVal * 6.0);
  switch (swapType) {
    case 0u: { return color.rbg; }
    case 1u: { return color.grb; }
    case 2u: { return color.gbr; }
    case 3u: { return color.brg; }
    case 4u: { return color.bgr; }
    default: { return color; }
  }
}

// Check if any glitch effects are enabled
fn hasGlitchEffects() -> bool {
  return (uniforms.jpegBlockShiftEnabled > 0.5 && uniforms.jpegBlockShift > 0.5) ||
         (uniforms.jpegScanlineEnabled > 0.5 && uniforms.jpegScanlineOffset > 0.5) ||
         (uniforms.jpegBlockScrambleEnabled > 0.5 && uniforms.jpegBlockScramble > 0.5) ||
         (uniforms.jpegInterlaceEnabled > 0.5 && uniforms.jpegInterlace > 0.5);
}

// ============================================================================
// POST-DITHERING EFFECTS - Applied to dithered output
// These effects work on any color mode by operating on the actual output colors
// ============================================================================

// Apply chromatic aberration effect
// Creates RGB color separation/fringing based on screen position
fn applyChromaticEffect(color: vec3f, fragCoord: vec2f, uv: vec2f) -> vec3f {
  if (uniforms.chromaticEnabled < 0.5) {
    return color;
  }

  let maxDisplace = uniforms.chromaticMaxDisplace;
  let redAngle = uniforms.chromaticRed * PI / 180.0;
  let greenAngle = uniforms.chromaticGreen * PI / 180.0;
  let blueAngle = uniforms.chromaticBlue * PI / 180.0;

  // Calculate offset directions for each channel
  let redOffset = vec2f(cos(redAngle), sin(redAngle)) * maxDisplace / uniforms.resolution;
  let greenOffset = vec2f(cos(greenAngle), sin(greenAngle)) * maxDisplace / uniforms.resolution;
  let blueOffset = vec2f(cos(blueAngle), sin(blueAngle)) * maxDisplace / uniforms.resolution;

  // Sample each channel from slightly different positions
  let redSample = textureSample(inputTexture, texSampler, clamp(uv + redOffset, vec2f(0.0), vec2f(1.0))).r;
  let greenSample = textureSample(inputTexture, texSampler, clamp(uv + greenOffset, vec2f(0.0), vec2f(1.0))).g;
  let blueSample = textureSample(inputTexture, texSampler, clamp(uv + blueOffset, vec2f(0.0), vec2f(1.0))).b;

  // Mix the chromatic offset with the original color
  let chromaticColor = vec3f(redSample, greenSample, blueSample);
  let intensity = maxDisplace / 100.0;
  return mix(color, chromaticColor, clamp(intensity, 0.0, 1.0));
}

// Apply JPEG glitch effects to the output
// Works on any color mode by manipulating the actual output colors
fn applyGlitchEffect(color: vec3f, fragCoord: vec2f) -> vec3f {
  var result = color;

  // Block shift - shifts entire rows of blocks
  if (uniforms.jpegBlockShiftEnabled > 0.5 && uniforms.jpegBlockShift > 0.5) {
    let blockSize = 8.0;
    let blockY = floor(fragCoord.y / blockSize);
    let randVal = hash(vec2f(blockY, floor(uniforms.time * 2.0)));
    let shiftChance = uniforms.jpegBlockShift / 100.0;

    if (randVal < shiftChance) {
      // Swap color channels for glitch effect
      result = mix(result, result.gbr, randVal * 0.8);
    }
  }

  // Scanline effect - color shift on specific lines
  if (uniforms.jpegScanlineEnabled > 0.5 && uniforms.jpegScanlineOffset > 0.5) {
    let lineInterval = max(uniforms.jpegScanlineOffset, 1.0);
    let lineY = floor(fragCoord.y);

    if (u32(lineY) % u32(lineInterval) == 0u) {
      let randVal = hash(vec2f(lineY, floor(uniforms.time * 3.0)));
      // Apply RGB channel shift on affected scanlines
      result = mix(result, result.brg, randVal * 0.5);
    }
  }

  // Block scramble - corrupt colors in random blocks
  if (uniforms.jpegBlockScrambleEnabled > 0.5 && uniforms.jpegBlockScramble > 0.5) {
    let blockSize = 8.0 + uniforms.jpegBlockScramble * 0.2;
    let blockCoord = floor(fragCoord / blockSize);
    let randVal = hash(blockCoord + vec2f(floor(uniforms.time * 0.5), 0.0));
    let scrambleAmount = uniforms.jpegBlockScramble / 100.0;

    if (randVal < scrambleAmount) {
      // Corrupt this block - scramble color channels
      let corruption = hash2(blockCoord);
      result = mix(result, result.bgr, corruption.x * scrambleAmount);
    }
  }

  // Interlace effect - affect alternating lines
  if (uniforms.jpegInterlaceEnabled > 0.5 && uniforms.jpegInterlace > 0.5) {
    let lineY = u32(fragCoord.y);
    let intensity = uniforms.jpegInterlace / 100.0;

    if (lineY % 2u == 0u) {
      let randVal = hash(vec2f(f32(lineY), floor(uniforms.time * 2.0)));
      if (randVal < intensity) {
        result = mix(result, result.brg, intensity * 0.5);
      }
    }
  }

  return result;
}

// Apply channel swap effect
// Randomly swaps RGB channels in blocks
fn applyChannelSwapEffect(color: vec3f, fragCoord: vec2f) -> vec3f {
  if (uniforms.jpegChannelSwapEnabled < 0.5 || uniforms.jpegChannelSwap < 0.5) {
    return color;
  }

  let blockSize = 16.0;
  let intensity = uniforms.jpegChannelSwap / 100.0;

  let blockId = floor(fragCoord / blockSize);
  let randVal = hash(blockId + vec2f(floor(uniforms.time * 0.5), 0.0));

  if (randVal > intensity) { return color; }

  let swapType = u32(randVal * 6.0);
  switch (swapType) {
    case 0u: { return color.rbg; }
    case 1u: { return color.grb; }
    case 2u: { return color.gbr; }
    case 3u: { return color.brg; }
    case 4u: { return color.bgr; }
    default: { return color; }
  }
}

// Epsilon Glow / Bloom effect for dithered output
// Since we can't sample our own output in a single pass, this creates a glow
// effect based on the current pixel's brightness - bright dithered pixels will glow
fn applyEpsilonGlowEffect(color: vec3f, uv: vec2f) -> vec3f {
  if (uniforms.epsilonGlowEnabled < 0.5) {
    return color;
  }

  // Glow parameters
  let threshold = uniforms.epsilonThreshold / 100.0;
  let smoothing = uniforms.epsilonThresholdSmooth / 100.0;
  let intensity = uniforms.epsilonIntensity / 100.0;
  let saturationBoost = 1.0 + uniforms.epsilonEpsilon / 50.0;
  let spread = uniforms.epsilonDistanceScale / 100.0;
  let falloff = uniforms.epsilonFalloff;

  // Check if current pixel is bright enough to glow
  let pixelLum = luminance(color);
  let glowMask = smoothstep(threshold - smoothing, threshold + smoothing, pixelLum);

  if (glowMask < 0.01) {
    return color;
  }

  // Boost saturation of the glow color
  let maxC = max(color.r, max(color.g, color.b));
  var glowColor = select(color, mix(vec3f(maxC), color, saturationBoost), maxC > 0.01);

  // Create the glow effect - brighten and spread the color
  // Inner glow: strong, close to the original color
  let innerGlow = glowColor * intensity * 2.0 * glowMask;

  // Outer glow: softer halo effect by boosting overall brightness
  let outerGlow = glowColor * intensity * spread * glowMask * 0.5;

  // Combine: add glow on top of original
  var result = color + innerGlow + outerGlow;

  // HDR tonemapping to prevent washout
  result = result / (1.0 + result * 0.2);

  return result;
}

// Combined post-processing for dithered output
// Works on any color mode - effects apply to the entire dithered image
fn applyPostProcessing(color: vec3f, fragCoord: vec2f, uv: vec2f) -> vec3f {
  var result = color;

  // Apply all effects to the dithered output
  result = applyChromaticEffect(result, fragCoord, uv);
  result = applyGlitchEffect(result, fragCoord);
  result = applyChannelSwapEffect(result, fragCoord);
  result = applyEpsilonGlowEffect(result, uv);

  return result;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let fragCoord = texCoord * uniforms.resolution;

  // Grid size for pixelation (matrixSize only, intensity controls threshold bias)
  let gridSize = max(uniforms.matrixSize, 1.0);

  // Pixelate UV coordinates
  let pixelatedUV = floor(fragCoord / gridSize) * gridSize / uniforms.resolution;
  let pixelPos = floor(fragCoord / gridSize) * gridSize;
  let pixelPosU = vec2u(floor(fragCoord / gridSize));

  // Sample input
  var baseColor: vec3f;
  let modType = u32(uniforms.modType);

  if (uniforms.modEnabled > 0.5 && modType == 4u) {
    // RGB Split mode - sample each channel with different UV offsets
    let rgbAmp = uniforms.modAmp * 0.02;
    let rgbFreq = uniforms.modFreq;
    let phase = uniforms.modPhase;

    // Create wave-based RGB separation
    let waveR = sin(texCoord.y * rgbFreq * PI * 2.0 + phase) * rgbAmp;
    let waveG = sin(texCoord.y * rgbFreq * PI * 2.0 + phase + PI * 0.666) * rgbAmp;
    let waveB = sin(texCoord.y * rgbFreq * PI * 2.0 + phase + PI * 1.333) * rgbAmp;

    let uvR = floor((fragCoord + vec2f(waveR * uniforms.resolution.x, 0.0)) / gridSize) * gridSize / uniforms.resolution;
    let uvG = floor((fragCoord + vec2f(waveG * uniforms.resolution.x, 0.0)) / gridSize) * gridSize / uniforms.resolution;
    let uvB = floor((fragCoord + vec2f(waveB * uniforms.resolution.x, 0.0)) / gridSize) * gridSize / uniforms.resolution;

    baseColor = vec3f(
      textureSample(inputTexture, texSampler, uvR).r,
      textureSample(inputTexture, texSampler, uvG).g,
      textureSample(inputTexture, texSampler, uvB).b
    );
  } else if (uniforms.modEnabled > 0.5) {
    // UV displacement modulation - distort the sampling coordinates
    let displacement = getModulationDisplacement(
      texCoord,
      modType,
      uniforms.modFreq,
      uniforms.modAmp,
      uniforms.modPhase
    );
    let displacedUV = floor((fragCoord + displacement * uniforms.resolution) / gridSize) * gridSize / uniforms.resolution;
    baseColor = textureSample(inputTexture, texSampler, displacedUV).rgb;
  } else {
    // Apply blur if enabled (sample with blur instead of direct)
    if (uniforms.blur > 0.01) {
      baseColor = applyBlur(pixelatedUV, uniforms.blur);
    } else {
      baseColor = textureSample(inputTexture, texSampler, pixelatedUV).rgb;
    }
  }

  // Store original color BEFORE adjustments (for palette matching in indexed mode)
  let originalColor = baseColor;

  // Apply edge enhancement (before other adjustments for better detection)
  baseColor = applyEdgeEnhance(baseColor, pixelatedUV, uniforms.edgeEnhance);

  // Apply sharpening (from dithering settings)
  baseColor = applySharpen(baseColor, pixelatedUV, uniforms.sharpen);

  // Apply adjustments - these affect WHERE dithering appears, not the final colors
  var adjustedColor = applyBrightnessContrast(baseColor, uniforms.brightness, uniforms.contrast);
  adjustedColor = applyGamma(adjustedColor, uniforms.gamma);

  // Apply brightness mapping (gamma curve on luminance)
  if (uniforms.brightnessMapping != 1.0) {
    let lum_orig = luminance(adjustedColor);
    if (lum_orig > 0.001) {
      let lum_mapped = pow(lum_orig, uniforms.brightnessMapping);
      adjustedColor = adjustedColor * (lum_mapped / lum_orig);
      adjustedColor = clamp(adjustedColor, vec3f(0.0), vec3f(1.0));
    }
  }

  // Apply color quantization (before dithering)
  adjustedColor = applyQuantize(adjustedColor, uniforms.quantizeColors);

  // Use adjusted luminance for dithering pattern decisions
  let lum = luminance(adjustedColor);
  let methodId = u32(uniforms.method + 0.5);
  let colorModeId = u32(uniforms.colorMode + 0.5);

  // Get foreground and background colors
  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);
  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);

  var outputColor: vec3f;

  // Special handling for grain (returns continuous values)
  if (methodId == 24u) {
    let grainedLum = grainPattern(lum, pixelPos, uniforms.intensity * 0.3, uniforms.time);
    if (colorModeId == 0u || colorModeId == 4u) { // mono/bw
      outputColor = mix(bgColor, fgColor, grainedLum);
    } else {
      outputColor = baseColor * (0.7 + grainedLum * 0.3);
    }
    // Grain is continuous, use luminance as foreground indicator
    let isForeground = grainedLum;
    outputColor = applyPostProcessing(outputColor, fragCoord, texCoord);
    return vec4f(outputColor, 1.0);
  }

  // Handle adaptive methods - these return direct 0/1 values based on luminance
  // Includes: halftone (20-25), artistic (27-30), wave (32-35), and some ordered (14-16)
  if (isAdaptiveMethod(methodId)) {
    // Apply intensity to luminance for adaptive patterns
    let intensityBias = (uniforms.intensity - 1.0) * 0.3;
    let adjustedLumForPattern = clamp(lum + intensityBias, 0.0, 1.0);
    let patternResult = getAdaptivePattern(methodId, pixelPos, texCoord, adjustedLumForPattern, gridSize);
    // patternResult is 0.0 (foreground) or 1.0 (background)
    // isForeground = 1.0 when patternResult = 0.0 (on the pattern)
    var isForeground = 1.0 - patternResult;

    if (colorModeId == 2u) { // indexed (palette)
      // Use adjusted color for palette matching so brightness/contrast/gamma affect output
      let palSize = u32(max(uniforms.paletteSize, 2.0));
      // Use patternResult as threshold for dithering between two nearest palette colors
      outputColor = ditherPaletteColor(adjustedColor, patternResult, palSize);
    } else if (colorModeId == 6u) { // original colors
      // Use original unadjusted color
      outputColor = mix(originalColor, bgColor, patternResult);
    } else if (colorModeId == 3u || colorModeId == 5u) { // rgb/color - use original colors
      outputColor = mix(originalColor, bgColor, patternResult);
    } else if (colorModeId == 1u) { // tonal - blend between fg and bg based on luminance
      let tonalColor = mix(bgColor, fgColor, lum);
      outputColor = mix(tonalColor, bgColor, patternResult);
    } else { // mono, bw - use fg/bg colors
      outputColor = mix(fgColor, bgColor, patternResult);
    }
    // Apply post-processing effects only to foreground pixels
    outputColor = applyPostProcessing(outputColor, fragCoord, texCoord);
    return vec4f(outputColor, 1.0);
  }

  // Get threshold for non-adaptive methods (error diffusion, bayer, blue noise)
  var threshold = getThreshold(methodId, pixelPos, pixelPosU, texCoord, lum, gridSize);

  // Apply modulation to threshold if enabled (creates patterns in dithering)
  if (uniforms.modEnabled > 0.5) {
    let modOffset = getThresholdModulationOffset(
      texCoord,
      u32(uniforms.modType),
      uniforms.modFreq,
      uniforms.modAmp,
      uniforms.modPhase
    );
    threshold = threshold + modOffset;
  }

  // Apply intensity as threshold bias (controls black/white balance)
  // intensity > 1 = more white/foreground (eliminates dark background dots)
  // intensity < 1 = more black/background (eliminates bright foreground dots)
  // Range 0.1-2.0 maps to strong effect for eliminating unwanted dithering
  let intensityBias = (uniforms.intensity - 1.0);

  // Calculate black/white point cutoffs from intensity
  // At intensity > 1: create a black point floor (pixels darker than this = pure black)
  // At intensity < 1: create a white point ceiling (pixels brighter than this = pure white)
  let blackPoint = max(0.0, (uniforms.intensity - 1.0) * 0.5);
  let whitePoint = min(1.0, 1.0 + (uniforms.intensity - 1.0) * 0.5);

  // Track whether each pixel is foreground or background for post-processing
  var isForeground: f32 = 0.0;

  // Apply dithering based on color mode
  switch (colorModeId) {
    case 0u, 4u: { // mono, bw
      // If luminance is below black point, force pure background (no dithering)
      // If luminance is above white point, force pure foreground (no dithering)
      if (lum < blackPoint) {
        outputColor = bgColor;
        isForeground = 0.0;
      } else if (lum > whitePoint) {
        outputColor = fgColor;
        isForeground = 1.0;
      } else {
        // Remap luminance to 0-1 range within black/white points
        let remappedLum = (lum - blackPoint) / max(whitePoint - blackPoint, 0.001);
        let dithered = step(threshold, remappedLum);
        outputColor = mix(bgColor, fgColor, dithered);
        isForeground = dithered;
      }
    }
    case 1u: { // tonal (grayscale with custom colors)
      if (lum < blackPoint) {
        outputColor = bgColor;
        isForeground = 0.0;
      } else if (lum > whitePoint) {
        outputColor = fgColor;
        isForeground = 1.0;
      } else {
        let remappedLum = (lum - blackPoint) / max(whitePoint - blackPoint, 0.001);
        let levels = max(uniforms.colorLevels, 2.0);
        let quantized = floor((remappedLum + (threshold - 0.5) * 0.5 / levels) * levels) / (levels - 1.0);
        outputColor = mix(bgColor, fgColor, clamp(quantized, 0.0, 1.0));
        // For tonal, use quantized value as foreground indicator
        isForeground = clamp(quantized, 0.0, 1.0);
      }
    }
    case 2u: { // indexed (palette) - use actual palette colors with dithering
      let palSize = u32(max(uniforms.paletteSize, 2.0));
      // Apply intensity to threshold for palette dithering
      // Intensity > 1 biases toward first color, < 1 biases toward second color
      let adjustedThreshold = clamp(threshold + intensityBias * 0.3, 0.0, 1.0);
      // Use adjusted color for palette matching so brightness/contrast/gamma affect output
      outputColor = ditherPaletteColor(adjustedColor, adjustedThreshold, palSize);
    }
    case 3u, 5u: { // rgb, color
      let levels = max(uniforms.colorLevels, 2.0);
      let ditherOffset = (threshold - 0.5) * 0.5 / levels;
      // Use original color for quantization (keeps colors pure)
      let quantized = floor((originalColor + vec3f(ditherOffset)) * (levels - 1.0) + 0.5) / (levels - 1.0);
      outputColor = clamp(quantized, vec3f(0.0), vec3f(1.0));
    }
    case 6u: { // original - keep original colors, use dithering as intensity mask
      // Dither between background and original color
      let dithered = step(threshold, lum);
      outputColor = mix(bgColor, originalColor, dithered);
    }
    default: {
      outputColor = originalColor;
    }
  }

  // Apply rounding/softening to dithered edges
  // This works by blending the dithered output with a softened version
  if (uniforms.rounding > 0.001) {
    // Since we can't re-sample our output, we blend toward the original luminance
    let softened = mix(outputColor, baseColor, uniforms.rounding * 0.5);
    outputColor = softened;
  }

  // Apply bleed effect
  if (uniforms.bleed > 0.001) {
    let offset = 1.0 / uniforms.resolution;
    let neighbor1 = textureSample(inputTexture, texSampler, pixelatedUV + vec2f(offset.x, 0.0)).rgb;
    let neighbor2 = textureSample(inputTexture, texSampler, pixelatedUV - vec2f(offset.x, 0.0)).rgb;
    let neighbor3 = textureSample(inputTexture, texSampler, pixelatedUV + vec2f(0.0, offset.y)).rgb;
    let neighbor4 = textureSample(inputTexture, texSampler, pixelatedUV - vec2f(0.0, offset.y)).rgb;
    let bleedColor = (neighbor1 + neighbor2 + neighbor3 + neighbor4) * 0.25;
    outputColor = mix(outputColor, bleedColor, uniforms.bleed);
  }

  // Apply post-processing effects to the dithered output
  outputColor = applyPostProcessing(outputColor, fragCoord, texCoord);

  return vec4f(outputColor, 1.0);
}
`,zS=`
${ta}

struct HalftoneUniforms {
  resolution: vec2f,       // offset 0
  dotScale: f32,           // offset 8: 0.5 - 2.0, multiplier for dot size
  angle: f32,              // offset 12: rotation angle in radians (base offset)
  shape: f32,              // offset 16: 0 = circle, 1 = square, 2 = diamond, 3 = line
  spacing: f32,            // offset 20: 4 - 20, distance between dots
  invert: f32,             // offset 24: 0 or 1
  colorMode: f32,          // offset 28: 0 = bw, 1 = color, 2 = cmyk
  bgColorR: f32,           // offset 32
  bgColorG: f32,           // offset 36
  bgColorB: f32,           // offset 40
  fgColorR: f32,           // offset 44
  fgColorG: f32,           // offset 48
  fgColorB: f32,           // offset 52
  brightness: f32,         // offset 56
  contrast: f32,           // offset 60
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: HalftoneUniforms;

const PI: f32 = 3.14159265359;

// ============================================
// Simplex noise for paper texture (Ian McEwan, Ashima Arts)
// ============================================
fn mod289_3(x: vec3f) -> vec3f {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

fn mod289_2(x: vec2f) -> vec2f {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

fn permute(x: vec3f) -> vec3f {
  return mod289_3(((x * 34.0) + 1.0) * x);
}

fn snoise(v: vec2f) -> f32 {
  let C = vec4f(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);

  var i = floor(v + dot(v, C.yy));
  let x0 = v - i + dot(i, C.xx);

  var i1: vec2f;
  if (x0.x > x0.y) {
    i1 = vec2f(1.0, 0.0);
  } else {
    i1 = vec2f(0.0, 1.0);
  }

  var x12 = x0.xyxy + C.xxzz;
  x12 = vec4f(x12.xy - i1, x12.zw);

  i = mod289_2(i);
  let p = permute(permute(i.y + vec3f(0.0, i1.y, 1.0)) + i.x + vec3f(0.0, i1.x, 1.0));

  var m = max(vec3f(0.5) - vec3f(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3f(0.0));
  m = m * m;
  m = m * m;

  let x = 2.0 * fract(p * C.www) - 1.0;
  let h = abs(x) - 0.5;
  let ox = floor(x + 0.5);
  let a0 = x - ox;

  m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));

  let g0 = a0.x * x0.x + h.x * x0.y;
  let g1 = a0.y * x12.x + h.y * x12.y;
  let g2 = a0.z * x12.z + h.z * x12.w;

  return 130.0 * dot(m, vec3f(g0, g1, g2));
}

// ============================================
// Anti-aliased step function using derivatives
// Based on Stefan Gustavson's aastep
// ============================================
fn aastep(threshold: f32, value: f32) -> f32 {
  // Attempt to approximate screen-space derivatives
  // In WebGPU we use fwidth-like approach
  let afwidth = 0.7 * length(vec2f(dpdx(value), dpdy(value)));
  return smoothstep(threshold - afwidth, threshold + afwidth, value);
}

// OPTIMIZATION: Precomputed constants
const LUMA_R: f32 = 0.299;
const LUMA_G: f32 = 0.587;
const LUMA_B: f32 = 0.114;
const INV_289: f32 = 0.00346020761;  // 1/289

fn luminance(c: vec3f) -> f32 {
  return c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
}

fn applyBrightnessContrast(color: vec3f, brightnessOffset: f32, contrastFactor: f32) -> vec3f {
  // OPTIMIZATION: Precompute contrastFactor in caller
  let result = (color + brightnessOffset - 0.5) * contrastFactor + 0.5;
  return saturate(result);  // OPTIMIZATION: saturate instead of clamp
}

// ============================================
// Halftone pattern for a single channel
// Returns the "ink coverage" (0 = no ink, 1 = full ink)
// ============================================
fn halftonePattern(fragCoord: vec2f, frequency: f32, angle: f32, value: f32, shape: i32) -> f32 {
  // Rotate coordinates by screen angle
  let s = sin(angle);
  let c = cos(angle);
  let rotated = vec2f(
    fragCoord.x * c - fragCoord.y * s,
    fragCoord.x * s + fragCoord.y * c
  );

  // Scale to grid frequency
  let scaled = rotated * frequency;

  // Distance to nearest grid point
  let nearest = scaled - floor(scaled) - 0.5;

  // Calculate distance based on shape
  var dist: f32;
  if (shape == 0) {
    // Circle
    dist = length(nearest);
  } else if (shape == 1) {
    // Square
    dist = max(abs(nearest.x), abs(nearest.y));
  } else if (shape == 2) {
    // Diamond
    dist = abs(nearest.x) + abs(nearest.y);
  } else {
    // Line
    dist = abs(nearest.y);
  }

  // The threshold is based on the ink value
  // Darker values (more ink) = larger dots = higher threshold
  // We use sqrt for perceptual linearity
  let radius = sqrt(value) * 0.5;

  // Anti-aliased comparison
  return aastep(radius, dist);
}

// ============================================
// RGB to CMYK conversion
// ============================================
fn rgbToCmyk(rgb: vec3f) -> vec4f {
  // CMY = 1 - RGB
  var cmy = vec3f(1.0) - rgb;

  // K (black) = minimum of CMY
  let k = min(min(cmy.r, cmy.g), cmy.b);

  // Grey component replacement - subtract black from CMY
  if (k < 1.0) {
    cmy = (cmy - k) / (1.0 - k);
  } else {
    cmy = vec3f(0.0);
  }

  return vec4f(cmy, k);
}

// ============================================
// CMYK to RGB conversion
// ============================================
fn cmykToRgb(cmyk: vec4f) -> vec3f {
  let cmy = cmyk.rgb * (1.0 - cmyk.a) + cmyk.a;
  return vec3f(1.0) - cmy;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // OPTIMIZATION: Precompute values used multiple times
  let contrastFactor = (1.0 + uniforms.contrast) / (1.0 - uniforms.contrast * 0.99);
  let frequency = 1.0 / uniforms.spacing;
  let shapeInt = i32(uniforms.shape + 0.5);
  let doInvert = uniforms.invert > 0.5;
  let isCmykMode = uniforms.colorMode > 1.5;
  let isColorMode = uniforms.colorMode > 0.5;

  var color = textureSample(inputTexture, texSampler, texCoord).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, contrastFactor);

  let fragCoord = texCoord * uniforms.resolution;

  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);
  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);

  // Add paper texture using simplex noise (3 octaves)
  // OPTIMIZATION: Precompute scaled coordinates
  let paperNoise = (snoise(fragCoord * 0.1) * 0.5 +
                    snoise(fragCoord * 0.2) * 0.25 +
                    snoise(fragCoord * 0.4) * 0.125) * 0.02 * uniforms.dotScale;

  // CMYK mode - full color separation with proper screen angles
  if (isCmykMode) {
    let cmyk = rgbToCmyk(color);

    // OPTIMIZATION: Precompute angles once (radians are compile-time constants)
    let cAngle = uniforms.angle + 0.2617994;  // radians(15)
    let mAngle = uniforms.angle + 1.3089969;  // radians(75)
    let yAngle = uniforms.angle;              // radians(0) = 0
    let kAngle = uniforms.angle + 0.7853982;  // radians(45)

    // Apply halftone to each channel
    let cPattern = halftonePattern(fragCoord, frequency, cAngle, cmyk.x + paperNoise, shapeInt);
    let mPattern = halftonePattern(fragCoord, frequency, mAngle, cmyk.y + paperNoise, shapeInt);
    let yPattern = halftonePattern(fragCoord, frequency, yAngle, cmyk.z + paperNoise, shapeInt);
    let kPattern = halftonePattern(fragCoord, frequency * 1.1, kAngle, cmyk.w + paperNoise, shapeInt);

    // OPTIMIZATION: Branchless invert using select
    let patterns = vec4f(cPattern, mPattern, yPattern, kPattern);
    let finalCmyk = select(vec4f(1.0) - patterns, patterns, doInvert);

    let result = cmykToRgb(finalCmyk);
    return vec4f(result, 1.0);
  }

  // Standard monochrome or color halftone
  var lum = luminance(color);

  // OPTIMIZATION: Branchless invert
  lum = select(lum, 1.0 - lum, doInvert);

  // Apply halftone pattern
  let pattern = halftonePattern(fragCoord, frequency, uniforms.angle, lum + paperNoise, shapeInt);

  // OPTIMIZATION: Branchless color selection
  // pattern = 1 means paper (background), pattern = 0 means ink (foreground)
  let colorModeResult = mix(color, bgColor, pattern);
  let bwModeResult = mix(fgColor, bgColor, pattern);
  let finalColor = select(bwModeResult, colorModeResult, isColorMode);

  return vec4f(finalColor, 1.0);
}
`,jS=`
${ta}

struct ThresholdUniforms {
  resolution: vec2f,       // offset 0
  levels: f32,             // offset 8: 2 - 8, number of posterization levels
  dither: f32,             // offset 12: 0 = no dither, 1 = add subtle dither
  thresholdPoint: f32,     // offset 16: 0 - 1, where the cutoff happens (for 2-level)
  brightness: f32,         // offset 20
  contrast: f32,           // offset 24
  invert: f32,             // offset 28: 0 or 1
  fgColorR: f32,           // offset 32
  fgColorG: f32,           // offset 36
  fgColorB: f32,           // offset 40
  bgColorR: f32,           // offset 44
  bgColorG: f32,           // offset 48
  bgColorB: f32,           // offset 52
  colorMode: f32,          // offset 56: 0 = custom colors, 1 = preserve colors
  _pad: vec3f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: ThresholdUniforms;

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

fn bayer4(p: vec2u) -> f32 {
  let m = array<f32, 16>(
    0.0, 8.0, 2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0, 9.0,
    15.0, 7.0, 13.0, 5.0
  );
  return m[p.x + p.y * 4u] / 16.0;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  var color = textureSample(inputTexture, texSampler, texCoord).rgb;
  let pixelPos = vec2u(texCoord * uniforms.resolution);

  // Apply brightness and contrast
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  var adjusted = color;

  // Add dither if enabled
  if (uniforms.dither > 0.5) {
    let ditherVal = (bayer4(pixelPos % 4u) - 0.5) * 0.1;
    adjusted = adjusted + vec3f(ditherVal);
  }

  let levels = max(uniforms.levels, 2.0);
  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);
  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);

  if (levels <= 2.0) {
    // Pure black and white / two-color mode
    let brightness = luminance(adjusted);
    var isLight = brightness > uniforms.thresholdPoint;

    if (uniforms.invert > 0.5) {
      isLight = !isLight;
    }

    if (uniforms.colorMode > 0.5) {
      // Preserve colors mode - show original or black
      if (isLight) {
        return vec4f(color, 1.0);
      } else {
        return vec4f(vec3f(0.0), 1.0);
      }
    } else {
      // Custom colors mode
      if (isLight) {
        return vec4f(fgColor, 1.0);
      } else {
        return vec4f(bgColor, 1.0);
      }
    }
  } else {
    // Posterization with multiple levels
    var posterized = floor(adjusted * (levels - 1.0) + 0.5) / (levels - 1.0);

    if (uniforms.invert > 0.5) {
      posterized = vec3f(1.0) - posterized;
    }

    if (uniforms.colorMode > 0.5) {
      // Preserve colors
      return vec4f(clamp(posterized, vec3f(0.0), vec3f(1.0)), 1.0);
    } else {
      // Apply color tint based on brightness
      let brightness = luminance(posterized);
      let tintedColor = mix(bgColor, fgColor, brightness);
      return vec4f(tintedColor, 1.0);
    }
  }
}
`,FS=`
${ta}

struct EdgeUniforms {
  resolution: vec2f,       // offset 0
  threshold: f32,          // offset 8: 0.1 - 0.8, sensitivity
  lineWidth: f32,          // offset 12: 0.5 - 4.0, edge thickness
  invert: f32,             // offset 16: 0 or 1
  algorithm: f32,          // offset 20: 0 = sobel, 1 = prewitt, 2 = laplacian
  brightness: f32,         // offset 24
  contrast: f32,           // offset 28
  edgeColorR: f32,         // offset 32
  edgeColorG: f32,         // offset 36
  edgeColorB: f32,         // offset 40
  bgColorR: f32,           // offset 44
  bgColorG: f32,           // offset 48
  bgColorB: f32,           // offset 52
  colorMode: f32,          // offset 56: 0 = custom, 1 = original color edges
  _pad: vec3f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: EdgeUniforms;

// OPTIMIZATION: Precomputed constants
const LUMA_R: f32 = 0.299;
const LUMA_G: f32 = 0.587;
const LUMA_B: f32 = 0.114;

fn luminance(c: vec3f) -> f32 {
  return c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
}

fn applyBrightnessContrast(color: vec3f, brightnessOffset: f32, contrastFactor: f32) -> vec3f {
  // OPTIMIZATION: Precompute contrastFactor in caller
  let result = (color + brightnessOffset - 0.5) * contrastFactor + 0.5;
  return saturate(result);  // OPTIMIZATION: saturate instead of clamp
}

fn sampleLuminance(uv: vec2f, brightnessOffset: f32, contrastFactor: f32) -> f32 {
  let color = textureSample(inputTexture, texSampler, uv).rgb;
  return luminance(applyBrightnessContrast(color, brightnessOffset, contrastFactor));
}

// OPTIMIZATION: Precomputed Gaussian kernel weights (sigma ≈ 0.85)
const GAUSS_CORNER: f32 = 0.0625;
const GAUSS_EDGE: f32 = 0.125;
const GAUSS_CENTER: f32 = 0.25;

// Gaussian blur for noise reduction (Canny-inspired pre-processing)
fn gaussianBlurLuminance(uv: vec2f, pixelSize: vec2f, brightnessOffset: f32, contrastFactor: f32) -> f32 {
  // OPTIMIZATION: Precompute all offsets
  let nps = -pixelSize;
  let pps = pixelSize;

  return sampleLuminance(uv + vec2f(nps.x, nps.y), brightnessOffset, contrastFactor) * GAUSS_CORNER +
         sampleLuminance(uv + vec2f(0.0, nps.y), brightnessOffset, contrastFactor) * GAUSS_EDGE +
         sampleLuminance(uv + vec2f(pps.x, nps.y), brightnessOffset, contrastFactor) * GAUSS_CORNER +
         sampleLuminance(uv + vec2f(nps.x, 0.0), brightnessOffset, contrastFactor) * GAUSS_EDGE +
         sampleLuminance(uv, brightnessOffset, contrastFactor) * GAUSS_CENTER +
         sampleLuminance(uv + vec2f(pps.x, 0.0), brightnessOffset, contrastFactor) * GAUSS_EDGE +
         sampleLuminance(uv + vec2f(nps.x, pps.y), brightnessOffset, contrastFactor) * GAUSS_CORNER +
         sampleLuminance(uv + vec2f(0.0, pps.y), brightnessOffset, contrastFactor) * GAUSS_EDGE +
         sampleLuminance(uv + vec2f(pps.x, pps.y), brightnessOffset, contrastFactor) * GAUSS_CORNER;
}

// Sample blurred luminance for edge detection
fn sampleBlurred(uv: vec2f, pixelSize: vec2f, brightnessOffset: f32, contrastFactor: f32) -> f32 {
  return gaussianBlurLuminance(uv, pixelSize, brightnessOffset, contrastFactor);
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // OPTIMIZATION: Precompute values used multiple times
  let contrastFactor = (1.0 + uniforms.contrast) / (1.0 - uniforms.contrast * 0.99);
  let brightnessOffset = uniforms.brightness;
  let pixelSize = uniforms.lineWidth / uniforms.resolution;
  let algoInt = i32(uniforms.algorithm + 0.5);
  let doInvert = uniforms.invert > 0.5;
  let useOriginalColor = uniforms.colorMode > 0.5;

  let originalColor = textureSample(inputTexture, texSampler, texCoord).rgb;

  // OPTIMIZATION: Precompute offsets
  let nps = -pixelSize;
  let pps = pixelSize;

  // Sample 3x3 neighborhood with Gaussian pre-blur for noise reduction
  let tl = sampleBlurred(texCoord + vec2f(nps.x, nps.y), pixelSize, brightnessOffset, contrastFactor);
  let tc = sampleBlurred(texCoord + vec2f(0.0, nps.y), pixelSize, brightnessOffset, contrastFactor);
  let tr = sampleBlurred(texCoord + vec2f(pps.x, nps.y), pixelSize, brightnessOffset, contrastFactor);
  let ml = sampleBlurred(texCoord + vec2f(nps.x, 0.0), pixelSize, brightnessOffset, contrastFactor);
  let mc = sampleBlurred(texCoord, pixelSize, brightnessOffset, contrastFactor);
  let mr = sampleBlurred(texCoord + vec2f(pps.x, 0.0), pixelSize, brightnessOffset, contrastFactor);
  let bl = sampleBlurred(texCoord + vec2f(nps.x, pps.y), pixelSize, brightnessOffset, contrastFactor);
  let bc = sampleBlurred(texCoord + vec2f(0.0, pps.y), pixelSize, brightnessOffset, contrastFactor);
  let br = sampleBlurred(texCoord + vec2f(pps.x, pps.y), pixelSize, brightnessOffset, contrastFactor);

  var gx: f32;
  var gy: f32;
  var edge: f32;

  if (algoInt == 1) {
    // Prewitt operator - equal weighting
    gx = -tl - ml - bl + tr + mr + br;
    gy = -tl - tc - tr + bl + bc + br;
    // OPTIMIZATION: Could skip sqrt for relative comparisons, but we need actual magnitude
    edge = sqrt(gx * gx + gy * gy);
  } else if (algoInt == 2) {
    // Laplacian of Gaussian (LoG approximation)
    let center = mc * 8.0;
    let neighbors = tl + tc + tr + ml + mr + bl + bc + br;
    edge = abs(center - neighbors);
  } else {
    // Sobel operator (default)
    gx = -tl - 2.0 * ml - bl + tr + 2.0 * mr + br;
    gy = -tl - 2.0 * tc - tr + bl + 2.0 * bc + br;
    edge = sqrt(gx * gx + gy * gy);
  }

  // Multi-scale edge detection - combine fine and coarse scales
  let finePixelSize = pixelSize * 0.5;
  let fnps = -finePixelSize;
  let fpps = finePixelSize;

  let fineTl = sampleBlurred(texCoord + vec2f(fnps.x, fnps.y), finePixelSize, brightnessOffset, contrastFactor);
  let fineTc = sampleBlurred(texCoord + vec2f(0.0, fnps.y), finePixelSize, brightnessOffset, contrastFactor);
  let fineTr = sampleBlurred(texCoord + vec2f(fpps.x, fnps.y), finePixelSize, brightnessOffset, contrastFactor);
  let fineMl = sampleBlurred(texCoord + vec2f(fnps.x, 0.0), finePixelSize, brightnessOffset, contrastFactor);
  let fineMr = sampleBlurred(texCoord + vec2f(fpps.x, 0.0), finePixelSize, brightnessOffset, contrastFactor);
  let fineBl = sampleBlurred(texCoord + vec2f(fnps.x, fpps.y), finePixelSize, brightnessOffset, contrastFactor);
  let fineBc = sampleBlurred(texCoord + vec2f(0.0, fpps.y), finePixelSize, brightnessOffset, contrastFactor);
  let fineBr = sampleBlurred(texCoord + vec2f(fpps.x, fpps.y), finePixelSize, brightnessOffset, contrastFactor);

  var fineEdge: f32;
  if (algoInt == 2) {
    let fineMc = sampleBlurred(texCoord, finePixelSize, brightnessOffset, contrastFactor);
    let fineCenter = fineMc * 8.0;
    let fineNeighbors = fineTl + fineTc + fineTr + fineMl + fineMr + fineBl + fineBc + fineBr;
    fineEdge = abs(fineCenter - fineNeighbors);
  } else {
    let fineGx = -fineTl - 2.0 * fineMl - fineBl + fineTr + 2.0 * fineMr + fineBr;
    let fineGy = -fineTl - 2.0 * fineTc - fineTr + fineBl + 2.0 * fineBc + fineBr;
    fineEdge = sqrt(fineGx * fineGx + fineGy * fineGy);
  }

  // Combine multi-scale edges
  let combinedEdge = max(edge, fineEdge * 0.7);

  // Anti-aliased edge thresholding using smoothstep
  let edgeSoftness = uniforms.threshold * 0.3;
  let edgeIntensity = smoothstep(uniforms.threshold - edgeSoftness, uniforms.threshold + edgeSoftness, combinedEdge);

  // OPTIMIZATION: Branchless inversion using select
  let finalIntensity = select(edgeIntensity, 1.0 - edgeIntensity, doInvert);

  let edgeColor = vec3f(uniforms.edgeColorR, uniforms.edgeColorG, uniforms.edgeColorB);
  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);

  // OPTIMIZATION: Branchless color selection
  let processedOriginal = applyBrightnessContrast(originalColor, brightnessOffset, contrastFactor);
  let originalColorResult = mix(bgColor, processedOriginal, finalIntensity);
  let customColorResult = mix(bgColor, edgeColor, finalIntensity);
  let finalColor = select(customColorResult, originalColorResult, useOriginalColor);

  return vec4f(finalColor, 1.0);
}
`,NS=`
${ta}

struct DotsUniforms {
  resolution: vec2f,       // offset 0
  sizeMultiplier: f32,     // offset 8: 0.5 - 2.0
  spacing: f32,            // offset 12: 0.5 - 2.0
  shape: f32,              // offset 16: 0 = circle, 1 = square, 2 = diamond
  gridType: f32,           // offset 20: 0 = square grid, 1 = hex grid
  brightness: f32,         // offset 24
  contrast: f32,           // offset 28
  bgColorR: f32,           // offset 32
  bgColorG: f32,           // offset 36
  bgColorB: f32,           // offset 40
  colorMode: f32,          // offset 44: 0 = original colors, 1 = grayscale, 2 = custom
  fgColorR: f32,           // offset 48
  fgColorG: f32,           // offset 52
  fgColorB: f32,           // offset 56
  invert: f32,             // offset 60
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: DotsUniforms;

// OPTIMIZATION: Precomputed constants
const LUMA_R: f32 = 0.299;
const LUMA_G: f32 = 0.587;
const LUMA_B: f32 = 0.114;
const HEX_RATIO: f32 = 0.866;  // sqrt(3)/2 for hex grid
const DIAMOND_SCALE: f32 = 1.4;

fn luminance(c: vec3f) -> f32 {
  return c.r * LUMA_R + c.g * LUMA_G + c.b * LUMA_B;
}

fn applyBrightnessContrast(color: vec3f, brightnessOffset: f32, contrastFactor: f32) -> vec3f {
  // OPTIMIZATION: Precompute contrastFactor in caller, remove division
  let result = (color + brightnessOffset - 0.5) * contrastFactor + 0.5;
  return saturate(result);  // OPTIMIZATION: saturate instead of clamp(x, 0, 1)
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // OPTIMIZATION: Precompute values used multiple times
  let baseSpacing = 8.0 * uniforms.spacing;
  let invBaseSpacing = 1.0 / baseSpacing;
  let dotRadius = baseSpacing * 0.4 * uniforms.sizeMultiplier;
  let invResolution = 1.0 / uniforms.resolution;

  // OPTIMIZATION: Precompute contrast factor once
  let contrastFactor = (1.0 + uniforms.contrast) / (1.0 - uniforms.contrast * 0.99);

  // OPTIMIZATION: Precompute boolean flags as f32 for branchless ops
  let isHexGrid = uniforms.gridType > 0.5;
  let doInvert = uniforms.invert > 0.5;
  let shapeInt = i32(uniforms.shape + 0.5);
  let colorModeInt = i32(uniforms.colorMode + 0.5);

  let pixelPos = texCoord * uniforms.resolution;

  var cellCenter: vec2f;

  if (isHexGrid) {
    // Hex grid - OPTIMIZATION: precompute hex constants
    let hexSpacingY = baseSpacing * HEX_RATIO;
    let invHexSpacingY = 1.0 / hexSpacingY;
    let row = floor(pixelPos.y * invHexSpacingY);
    let isOddRow = (i32(row) & 1) == 1;  // OPTIMIZATION: bitwise AND instead of modulo
    let xOffset = select(0.0, baseSpacing * 0.5, isOddRow);
    let cellX = floor((pixelPos.x - xOffset) * invBaseSpacing);
    cellCenter = vec2f(
      (cellX + 0.5) * baseSpacing + xOffset,
      (row + 0.5) * hexSpacingY
    );
  } else {
    // Square grid
    let cellPos = floor(pixelPos * invBaseSpacing);
    cellCenter = (cellPos + 0.5) * baseSpacing;
  }

  let cellUV = cellCenter * invResolution;

  // Sample color at cell center
  var color = textureSample(inputTexture, texSampler, cellUV).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, contrastFactor);

  var luma = luminance(color);

  // OPTIMIZATION: Branchless invert using select
  luma = select(luma, 1.0 - luma, doInvert);

  // Distance from cell center (for circle check)
  let localPos = pixelPos - cellCenter;
  let absLocalX = abs(localPos.x);
  let absLocalY = abs(localPos.y);

  // Size varies by brightness
  let radius = dotRadius * (0.2 + luma * 0.8);
  let radiusSq = radius * radius;  // OPTIMIZATION: For circle, compare squared distances

  // OPTIMIZATION: Branchless shape check using select chains
  // Circle: distSq < radiusSq
  // Square: max(absX, absY) < radius
  // Diamond: (absX + absY) < radius * 1.4
  let distSq = localPos.x * localPos.x + localPos.y * localPos.y;
  let circleCheck = distSq < radiusSq;
  let squareCheck = max(absLocalX, absLocalY) < radius;
  let diamondCheck = (absLocalX + absLocalY) < radius * DIAMOND_SCALE;

  // OPTIMIZATION: Branchless shape selection
  let inShape = select(
    select(circleCheck, squareCheck, shapeInt == 1),
    diamondCheck,
    shapeInt == 2
  );

  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);
  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);

  // OPTIMIZATION: Branchless final color selection
  // Compute all possible colors, then select based on conditions
  let grayscaleColor = vec3f(luma);
  let customColor = fgColor * luma;

  // Select dot color based on mode
  let dotColor = select(
    select(color, grayscaleColor, colorModeInt == 1),
    customColor,
    colorModeInt == 2
  );

  // Select between background and dot color
  let finalColor = select(bgColor, dotColor, inShape);

  return vec4f(finalColor, 1.0);
}
`,BS=`
${ta}

struct BlockifyUniforms {
  resolution: vec2f,       // offset 0
  blockSize: f32,          // offset 8: 4 - 32 pixels
  style: f32,              // offset 12: 0 = full, 1 = shaded, 2 = outline
  borderWidth: f32,        // offset 16: 1 - 4 for outline mode
  brightness: f32,         // offset 20
  contrast: f32,           // offset 24
  borderColorR: f32,       // offset 28
  borderColorG: f32,       // offset 32
  borderColorB: f32,       // offset 36
  colorMode: f32,          // offset 40: 0 = average, 1 = grayscale
  _pad: vec3f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: BlockifyUniforms;

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let pixelPos = texCoord * uniforms.resolution;
  let blockPos = floor(pixelPos / uniforms.blockSize);
  let blockCenter = (blockPos + 0.5) * uniforms.blockSize;
  let blockUV = blockCenter / uniforms.resolution;

  var color = textureSample(inputTexture, texSampler, blockUV).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  // Apply grayscale if needed
  if (uniforms.colorMode > 0.5) {
    let gray = luminance(color);
    color = vec3f(gray);
  }

  let styleInt = i32(uniforms.style + 0.5);

  if (styleInt == 0) {
    // Full blocks - just return the color
    return vec4f(color, 1.0);
  } else if (styleInt == 1) {
    // Shaded - add slight gradient within block
    let localPos = (pixelPos - blockPos * uniforms.blockSize) / uniforms.blockSize;
    let shade = 0.9 + 0.1 * (1.0 - length(localPos - 0.5) * 1.4);
    return vec4f(color * shade, 1.0);
  } else {
    // Outline - draw border around blocks
    let localPos = pixelPos - blockPos * uniforms.blockSize;
    let borderWidth = uniforms.borderWidth;
    let isEdge = localPos.x < borderWidth || localPos.x > uniforms.blockSize - borderWidth ||
                 localPos.y < borderWidth || localPos.y > uniforms.blockSize - borderWidth;
    if (isEdge) {
      let borderColor = vec3f(uniforms.borderColorR, uniforms.borderColorG, uniforms.borderColorB);
      return vec4f(borderColor, 1.0);
    }
    return vec4f(color, 1.0);
  }
}
`,IS=`
${ta}

struct CrosshatchUniforms {
  resolution: vec2f,       // offset 0
  density: f32,            // offset 8: 2 - 12, line spacing
  angle: f32,              // offset 12: 0 - 90 degrees (radians)
  layers: f32,             // offset 16: 1 - 4, number of hatch directions
  lineWidth: f32,          // offset 20: 0.05 - 0.3
  brightness: f32,         // offset 24
  contrast: f32,           // offset 28
  invert: f32,             // offset 32: 0 or 1
  fgColorR: f32,           // offset 36
  fgColorG: f32,           // offset 40
  fgColorB: f32,           // offset 44
  bgColorR: f32,           // offset 48
  bgColorG: f32,           // offset 52
  bgColorB: f32,           // offset 56
  randomness: f32,         // offset 60: 0 - 1, adds organic variation
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: CrosshatchUniforms;

const PI: f32 = 3.14159265359;

fn luminance(c: vec3f) -> f32 {
  // Using standard luminosity coefficients (matches TAM paper)
  return dot(c, vec3f(0.2326, 0.7152, 0.0722));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

// ============================================
// Hash functions for organic variation
// ============================================
fn hash21(p: vec2f) -> f32 {
  var p3 = fract(vec3f(p.x, p.y, p.x) * 0.1031);
  p3 = p3 + dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn valueNoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash21(i), hash21(i + vec2f(1.0, 0.0)), u.x),
    mix(hash21(i + vec2f(0.0, 1.0)), hash21(i + vec2f(1.0, 1.0)), u.x),
    u.y
  );
}

// ============================================
// Procedural hatch pattern generator
// Each level adds more strokes (TAM principle: darker = more strokes)
// ============================================
fn hatchPattern(uv: vec2f, angle: f32, spacing: f32, width: f32, seed: f32) -> f32 {
  let s = sin(angle);
  let c = cos(angle);

  // Rotate coordinates
  let rotatedX = uv.x * c - uv.y * s;
  let rotatedY = uv.x * s + uv.y * c;

  // Scale to line frequency
  let scaledX = rotatedX * uniforms.resolution.x / spacing;

  // Add organic wobble
  var wobble = 0.0;
  if (uniforms.randomness > 0.0) {
    let noiseCoord = vec2f(floor(scaledX) * 0.1 + seed * 7.0, rotatedY * 0.02);
    wobble = (valueNoise(noiseCoord * 3.0) - 0.5) * uniforms.randomness * 0.4;
  }

  // Calculate distance to nearest line
  let linePos = fract(scaledX + wobble);
  let distToLine = abs(linePos - 0.5);

  // Anti-aliased line using smoothstep
  let halfWidth = width * 0.5;
  let aa = 1.5 / uniforms.resolution.x;

  // Line intensity (1.0 = on line, 0.0 = off line)
  return 1.0 - smoothstep(halfWidth - aa, halfWidth + aa, distToLine);
}

// ============================================
// TAM-style weight calculation
// Based on Kyle Halladay's technique: multiply intensity by 6,
// then calculate weights that smoothly blend between adjacent levels
// This avoids GPU-unfriendly branching
// ============================================
fn calculateTamWeights(intensity: f32) -> array<f32, 6> {
  var weights: array<f32, 6>;

  // Scale intensity to 0-6 range
  let i = intensity * 6.0;

  // Calculate raw weights (how much each level contributes)
  // Each weight peaks at its corresponding integer value
  let w0 = saturate(i);
  let w1 = saturate(i - 1.0);
  let w2 = saturate(i - 2.0);
  let w3 = saturate(i - 3.0);
  let w4 = saturate(i - 4.0);
  let w5 = saturate(i - 5.0);

  // Convert to individual level weights
  // Level 0 is active from intensity 0-1, level 1 from 1-2, etc.
  weights[0] = w0 - w1;  // Active 0-1
  weights[1] = w1 - w2;  // Active 1-2
  weights[2] = w2 - w3;  // Active 2-3
  weights[3] = w3 - w4;  // Active 3-4
  weights[4] = w4 - w5;  // Active 4-5
  weights[5] = w5;       // Active 5-6

  return weights;
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  var color = textureSample(inputTexture, texSampler, texCoord).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  var lum = luminance(color);

  if (uniforms.invert > 0.5) {
    lum = 1.0 - lum;
  }

  // Darkness = how much hatching we need (0 = white/no hatch, 1 = black/full hatch)
  let darkness = 1.0 - lum;

  let spacing = uniforms.density;
  let width = uniforms.lineWidth;
  let baseAngle = uniforms.angle;

  // ============================================
  // Generate 6 TAM levels with progressive hatching
  // Each level includes all strokes from previous levels plus new ones
  // ============================================

  // Level 0: Lightest - single direction, sparse
  let hatch0 = hatchPattern(texCoord, baseAngle, spacing * 1.5, width * 0.7, 0.0);

  // Level 1: Add perpendicular direction
  let hatch1_new = hatchPattern(texCoord, baseAngle + PI * 0.5, spacing * 1.5, width * 0.7, 1.0);
  let hatch1 = max(hatch0, hatch1_new);

  // Level 2: Tighten spacing on primary direction
  let hatch2_new = hatchPattern(texCoord, baseAngle, spacing, width * 0.8, 2.0);
  let hatch2 = max(hatch1, hatch2_new);

  // Level 3: Tighten spacing on secondary direction
  let hatch3_new = hatchPattern(texCoord, baseAngle + PI * 0.5, spacing, width * 0.8, 3.0);
  let hatch3 = max(hatch2, hatch3_new);

  // Level 4: Add diagonal hatching
  let hatch4_new = hatchPattern(texCoord, baseAngle + PI * 0.25, spacing * 0.85, width * 0.9, 4.0);
  let hatch4 = max(hatch3, hatch4_new);

  // Level 5: Densest - add opposite diagonal
  let hatch5_new = hatchPattern(texCoord, baseAngle + PI * 0.75, spacing * 0.85, width * 0.9, 5.0);
  let hatch5 = max(hatch4, hatch5_new);

  // Apply layer limit from uniforms
  var level0 = hatch0;
  var level1 = hatch1;
  var level2 = hatch2;
  var level3 = hatch3;
  var level4 = hatch4;
  var level5 = hatch5;

  if (uniforms.layers < 2.0) {
    // Only primary direction
    level1 = level0;
    level2 = level0;
    level3 = level0;
    level4 = level0;
    level5 = level0;
  } else if (uniforms.layers < 3.0) {
    // Primary + perpendicular
    level4 = level3;
    level5 = level3;
  } else if (uniforms.layers < 4.0) {
    // Primary + perpendicular + one diagonal
    level5 = level4;
  }

  // ============================================
  // TAM-style blending using weights
  // ============================================
  let weights = calculateTamWeights(darkness);

  // Blend hatch levels based on weights
  var hatchValue = 0.0;
  hatchValue += level0 * weights[0];
  hatchValue += level1 * weights[1];
  hatchValue += level2 * weights[2];
  hatchValue += level3 * weights[3];
  hatchValue += level4 * weights[4];
  hatchValue += level5 * weights[5];

  // Very dark areas get solid fill
  let solidFill = smoothstep(0.92, 1.0, darkness);
  hatchValue = max(hatchValue, solidFill);

  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);
  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);

  // Final output
  let finalColor = mix(bgColor, fgColor, hatchValue);
  return vec4f(finalColor, 1.0);
}
`,_S=`
${ta}

struct WaveLinesUniforms {
  resolution: vec2f,       // offset 0
  lineCount: f32,          // offset 8: 10 - 150
  amplitude: f32,          // offset 12: 5 - 50 pixels
  frequency: f32,          // offset 16: 0.5 - 3.0
  time: f32,               // offset 20: Animation time
  direction: f32,          // offset 24: 0 = horizontal, 1 = vertical
  lineThickness: f32,      // offset 28: 0.2 - 1.0
  brightness: f32,         // offset 32
  contrast: f32,           // offset 36
  colorMode: f32,          // offset 40: 0 = original, 1 = bw, 2 = custom
  fgColorR: f32,           // offset 44
  fgColorG: f32,           // offset 48
  fgColorB: f32,           // offset 52
  bgColorR: f32,           // offset 56
  bgColorG: f32,           // offset 60
  bgColorB: f32,           // offset 64
  animate: f32,            // offset 68: 0 or 1
  _pad: vec3f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: WaveLinesUniforms;

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  var color = textureSample(inputTexture, texSampler, texCoord).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  let brightness = luminance(color);
  let pixelPos = texCoord * uniforms.resolution;

  // Animation time (0 if animation disabled)
  var animTime = 0.0;
  if (uniforms.animate > 0.5) {
    animTime = uniforms.time;
  }

  var lineSpacing: f32;
  var lineIndex: f32;
  var wavePhase: f32;
  var waveOffset: f32;
  var lineY: f32;
  var distFromLine: f32;
  var lineThickness: f32;

  if (uniforms.direction < 0.5) {
    // Horizontal lines
    lineSpacing = uniforms.resolution.y / uniforms.lineCount;
    lineIndex = floor(pixelPos.y / lineSpacing);
    wavePhase = (pixelPos.x / uniforms.resolution.x) * 6.28318 * uniforms.frequency;
    waveOffset = sin(wavePhase + animTime) * uniforms.amplitude * brightness;
    lineY = (lineIndex + 0.5) * lineSpacing + waveOffset;
    distFromLine = abs(pixelPos.y - lineY);
    lineThickness = lineSpacing * uniforms.lineThickness * brightness;
  } else {
    // Vertical lines
    lineSpacing = uniforms.resolution.x / uniforms.lineCount;
    lineIndex = floor(pixelPos.x / lineSpacing);
    wavePhase = (pixelPos.y / uniforms.resolution.y) * 6.28318 * uniforms.frequency;
    waveOffset = sin(wavePhase + animTime) * uniforms.amplitude * brightness;
    let lineX = (lineIndex + 0.5) * lineSpacing + waveOffset;
    distFromLine = abs(pixelPos.x - lineX);
    lineThickness = lineSpacing * uniforms.lineThickness * brightness;
  }

  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);
  let fgColor = vec3f(uniforms.fgColorR, uniforms.fgColorG, uniforms.fgColorB);

  if (distFromLine < lineThickness) {
    // Inside line
    let colorModeInt = i32(uniforms.colorMode + 0.5);
    if (colorModeInt == 1) {
      // B&W
      return vec4f(vec3f(brightness), 1.0);
    } else if (colorModeInt == 2) {
      // Custom color
      return vec4f(fgColor, 1.0);
    } else {
      // Original color
      return vec4f(color, 1.0);
    }
  }

  return vec4f(bgColor, 1.0);
}
`,GS=`
${ta}

struct PixelSortUniforms {
  resolution: vec2f,
  threshold: f32,        // Threshold value for span detection (0-1)
  direction: f32,        // 0=horizontal, 1=vertical, 2=diagonal
  mode: f32,             // 0=black, 1=white, 2=bright, 3=dark (Kim Asendorf modes)
  streakLength: f32,     // Maximum streak length in pixels
  intensity: f32,        // Blend with original (0-1)
  randomness: f32,       // Per-line variation (0-1)
  reverse: f32,          // Reverse sort direction (0 or 1)
  brightness: f32,
  contrast: f32,
  _pad: vec3f,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: PixelSortUniforms;

const SAMPLE_COUNT: u32 = 24u;

// ============================================
// Utility functions
// ============================================
fn hash11(p: f32) -> f32 {
  var p2 = fract(p * 0.1031);
  p2 = p2 * (p2 + 33.33);
  return fract(p2 * (p2 + p2));
}

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn brightness(c: vec3f) -> f32 {
  // Kim Asendorf uses max of RGB for brightness
  return max(max(c.r, c.g), c.b);
}

fn applyBrightnessContrast(color: vec3f, brt: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brt);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

// ============================================
// Kim Asendorf's span detection modes
// Returns true if pixel should START a span (is "not X" in his terminology)
// ============================================
fn isSpanStart(color: vec3f, threshold: f32, mode: f32) -> bool {
  let modeInt = i32(mode + 0.5);

  if (modeInt == 0) {
    // Mode 0: Black mode - span starts when pixel is NOT black
    // "getFirstNotBlackX" - finds first pixel brighter than black threshold
    let blackThreshold = threshold * 0.25; // Black is typically very dark
    return luminance(color) > blackThreshold;
  } else if (modeInt == 1) {
    // Mode 1: White mode - span starts when pixel is NOT white
    // "getFirstNotWhiteX" - finds first pixel darker than white threshold
    let whiteThreshold = 1.0 - threshold * 0.25;
    return luminance(color) < whiteThreshold;
  } else if (modeInt == 2) {
    // Mode 2: Bright mode - span starts when pixel IS bright enough
    // "getFirstBrightX" - finds first bright pixel
    return brightness(color) > threshold;
  } else {
    // Mode 3: Dark mode - span starts when pixel IS dark enough
    // "getFirstDarkX" - finds first dark pixel
    return brightness(color) < threshold;
  }
}

// Returns true if pixel should END a span
fn isSpanEnd(color: vec3f, threshold: f32, mode: f32) -> bool {
  let modeInt = i32(mode + 0.5);

  if (modeInt == 0) {
    // Mode 0: Black mode - span ends when we hit black
    let blackThreshold = threshold * 0.25;
    return luminance(color) <= blackThreshold;
  } else if (modeInt == 1) {
    // Mode 1: White mode - span ends when we hit white
    let whiteThreshold = 1.0 - threshold * 0.25;
    return luminance(color) >= whiteThreshold;
  } else if (modeInt == 2) {
    // Mode 2: Bright mode - span ends when pixel is NOT bright
    return brightness(color) <= threshold;
  } else {
    // Mode 3: Dark mode - span ends when pixel is NOT dark
    return brightness(color) >= threshold;
  }
}

// Get the sort value for a pixel (luminance-based)
fn getSortValue(color: vec3f) -> f32 {
  return luminance(color);
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let pixelSize = 1.0 / uniforms.resolution;
  let pixel = texCoord * uniforms.resolution;

  // Direction setup (matching Kim Asendorf's row/column approach)
  var dir: vec2f;
  var lineCoord: f32;

  if (uniforms.direction > 1.5) {
    // Diagonal
    dir = normalize(vec2f(1.0, 1.0));
    lineCoord = floor(pixel.x - pixel.y);
  } else if (uniforms.direction > 0.5) {
    // Vertical (column sorting)
    dir = vec2f(0.0, 1.0);
    lineCoord = floor(pixel.x);
  } else {
    // Horizontal (row sorting)
    dir = vec2f(1.0, 0.0);
    lineCoord = floor(pixel.y);
  }

  // Per-line randomization for organic variation
  let lineRand = hash11(lineCoord * 0.173);
  let thresholdVar = uniforms.threshold * (1.0 + (lineRand - 0.5) * uniforms.randomness * 0.5);

  // Sample current pixel
  let currentColor = textureSampleLevel(inputTexture, texSampler, texCoord, 0.0).rgb;

  // Check if current pixel is within a sortable span
  if (!isSpanStart(currentColor, thresholdVar, uniforms.mode)) {
    // Not in a span - return original
    return vec4f(applyBrightnessContrast(currentColor, uniforms.brightness, uniforms.contrast), 1.0);
  }

  let dirNorm = dir * pixelSize;
  let maxSteps = i32(uniforms.streakLength);

  // ============================================
  // Find span boundaries (Kim Asendorf's approach)
  // Search backward for span start
  // ============================================
  var spanStartDist: i32 = 0;
  for (var i = 1; i <= maxSteps; i = i + 1) {
    let checkUV = texCoord - dirNorm * f32(i);

    // Check bounds
    if (checkUV.x < 0.0 || checkUV.x > 1.0 || checkUV.y < 0.0 || checkUV.y > 1.0) {
      spanStartDist = i;
      break;
    }

    let checkColor = textureSampleLevel(inputTexture, texSampler, checkUV, 0.0).rgb;

    // If this pixel would NOT be in span, previous pixel was span start
    if (!isSpanStart(checkColor, thresholdVar, uniforms.mode)) {
      spanStartDist = i;
      break;
    }

    // Check for span end condition (different from span start)
    if (isSpanEnd(checkColor, thresholdVar, uniforms.mode)) {
      spanStartDist = i;
      break;
    }

    spanStartDist = i;
  }

  // ============================================
  // Search forward for span end
  // ============================================
  var spanEndDist: i32 = 0;
  for (var i = 1; i <= maxSteps; i = i + 1) {
    let checkUV = texCoord + dirNorm * f32(i);

    // Check bounds
    if (checkUV.x < 0.0 || checkUV.x > 1.0 || checkUV.y < 0.0 || checkUV.y > 1.0) {
      spanEndDist = i;
      break;
    }

    let checkColor = textureSampleLevel(inputTexture, texSampler, checkUV, 0.0).rgb;

    // If this pixel is span end or not in span
    if (isSpanEnd(checkColor, thresholdVar, uniforms.mode) || !isSpanStart(checkColor, thresholdVar, uniforms.mode)) {
      spanEndDist = i;
      break;
    }

    spanEndDist = i;
  }

  let spanSize = spanStartDist + spanEndDist;

  // Too small span - return original
  if (spanSize < 3) {
    return vec4f(applyBrightnessContrast(currentColor, uniforms.brightness, uniforms.contrast), 1.0);
  }

  // ============================================
  // Collect pixels in span and sort
  // ============================================
  var colors: array<vec3f, SAMPLE_COUNT>;
  var sortValues: array<f32, SAMPLE_COUNT>;

  let actualSamples = min(u32(spanSize), SAMPLE_COUNT);

  // Sample pixels across the span
  for (var i = 0u; i < actualSamples; i = i + 1u) {
    let t = f32(i) / f32(actualSamples - 1u);
    let sampleOffset = f32(-spanStartDist) + t * f32(spanSize);
    let sampleUV = texCoord + dirNorm * sampleOffset;
    let clampedUV = clamp(sampleUV, vec2f(0.001), vec2f(0.999));

    let color = textureSampleLevel(inputTexture, texSampler, clampedUV, 0.0).rgb;
    colors[i] = color;
    sortValues[i] = getSortValue(color);
  }

  // Fill remaining slots if span is smaller than SAMPLE_COUNT
  for (var i = actualSamples; i < SAMPLE_COUNT; i = i + 1u) {
    colors[i] = currentColor;
    sortValues[i] = getSortValue(currentColor);
  }

  // ============================================
  // Bubble sort (Kim Asendorf uses Java's built-in sort,
  // but bubble sort works for small arrays on GPU)
  // ============================================
  for (var sortPass = 0u; sortPass < actualSamples - 1u; sortPass = sortPass + 1u) {
    for (var i = 0u; i < actualSamples - 1u - sortPass; i = i + 1u) {
      var shouldSwap: bool;
      if (uniforms.reverse > 0.5) {
        shouldSwap = sortValues[i] < sortValues[i + 1u];
      } else {
        shouldSwap = sortValues[i] > sortValues[i + 1u];
      }

      if (shouldSwap) {
        let tempColor = colors[i];
        colors[i] = colors[i + 1u];
        colors[i + 1u] = tempColor;

        let tempVal = sortValues[i];
        sortValues[i] = sortValues[i + 1u];
        sortValues[i + 1u] = tempVal;
      }
    }
  }

  // ============================================
  // Find where current pixel maps in sorted array
  // ============================================
  let posInSpan = f32(spanStartDist) / f32(spanSize);
  let sortedIdx = posInSpan * f32(actualSamples - 1u);
  let idxLow = u32(floor(sortedIdx));
  let idxHigh = min(idxLow + 1u, actualSamples - 1u);
  let frac = fract(sortedIdx);

  // Interpolate for smoother result
  let sortedColor = mix(colors[idxLow], colors[idxHigh], frac);

  // Blend with original based on intensity
  let finalColor = mix(currentColor, sortedColor, uniforms.intensity);

  return vec4f(applyBrightnessContrast(finalColor, uniforms.brightness, uniforms.contrast), 1.0);
}
`,PS=`
${ta}

struct ContourUniforms {
  resolution: vec2f,       // offset 0
  levels: f32,             // offset 8: 3 - 20, number of contour levels
  lineThickness: f32,      // offset 12: 0.5 - 3.0
  fillMode: f32,           // offset 16: 0 = filled bands, 1 = lines only
  brightness: f32,         // offset 20
  contrast: f32,           // offset 24
  lineColorR: f32,         // offset 28
  lineColorG: f32,         // offset 32
  lineColorB: f32,         // offset 36
  bgColorR: f32,           // offset 40
  bgColorG: f32,           // offset 44
  bgColorB: f32,           // offset 48
  colorMode: f32,          // offset 52: 0 = grayscale fills, 1 = original color fills, 2 = custom
  invert: f32,             // offset 56
  _pad: vec3f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: ContourUniforms;

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

fn sampleBrightness(uv: vec2f) -> f32 {
  let color = textureSample(inputTexture, texSampler, uv).rgb;
  let adjusted = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);
  return luminance(adjusted);
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  var color = textureSample(inputTexture, texSampler, texCoord).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  var brightness = luminance(color);

  if (uniforms.invert > 0.5) {
    brightness = 1.0 - brightness;
  }

  // Quantize brightness to levels
  let quantized = floor(brightness * uniforms.levels) / uniforms.levels;
  let quantizedBrightness = quantized + 0.5 / uniforms.levels;

  // Sample neighbors to detect level boundaries
  let pixelSize = uniforms.lineThickness / uniforms.resolution;

  let left = sampleBrightness(texCoord + vec2f(-pixelSize.x, 0.0));
  let right = sampleBrightness(texCoord + vec2f(pixelSize.x, 0.0));
  let top = sampleBrightness(texCoord + vec2f(0.0, -pixelSize.y));
  let bottom = sampleBrightness(texCoord + vec2f(0.0, pixelSize.y));

  if (uniforms.invert > 0.5) {
    // Already inverted center, need to invert neighbors too for comparison
  }

  let leftQ = floor(left * uniforms.levels);
  let rightQ = floor(right * uniforms.levels);
  let topQ = floor(top * uniforms.levels);
  let bottomQ = floor(bottom * uniforms.levels);
  let centerQ = floor(brightness * uniforms.levels);

  // Draw line if we're at a level boundary
  let isContour = (leftQ != centerQ) || (rightQ != centerQ) || (topQ != centerQ) || (bottomQ != centerQ);

  let lineColor = vec3f(uniforms.lineColorR, uniforms.lineColorG, uniforms.lineColorB);
  let bgColor = vec3f(uniforms.bgColorR, uniforms.bgColorG, uniforms.bgColorB);

  if (isContour) {
    return vec4f(lineColor, 1.0);
  }

  // Fill mode
  let fillModeInt = i32(uniforms.fillMode + 0.5);
  if (fillModeInt == 1) {
    // Lines only mode - show background where not a contour
    return vec4f(bgColor, 1.0);
  }

  // Filled bands mode
  let colorModeInt = i32(uniforms.colorMode + 0.5);
  if (colorModeInt == 1) {
    // Original colors, quantized
    let quantizedColor = floor(color * uniforms.levels) / uniforms.levels + 0.5 / uniforms.levels;
    return vec4f(quantizedColor, 1.0);
  } else if (colorModeInt == 2) {
    // Custom - blend between bg and line color based on brightness
    let blendColor = mix(bgColor, lineColor, quantizedBrightness);
    return vec4f(blendColor, 1.0);
  } else {
    // Grayscale fills (default)
    return vec4f(vec3f(quantizedBrightness), 1.0);
  }
}
`,HS=`
${ta}

struct NoiseFieldUniforms {
  resolution: vec2f,       // offset 0
  scale: f32,              // offset 8: 10 - 100
  intensity: f32,          // offset 12: 0.5 - 3.0
  speed: f32,              // offset 16: 0.1 - 3.0
  time: f32,               // offset 20
  octaves: f32,            // offset 24: 1 - 6
  animate: f32,            // offset 28: 0 or 1
  brightness: f32,         // offset 32
  contrast: f32,           // offset 36
  noiseType: f32,          // offset 40: 0 = perlin, 1 = simplex approx, 2 = worley
  distortOnly: f32,        // offset 44: 0 = distort + overlay, 1 = distort only
  _pad: vec2f,             // padding
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: NoiseFieldUniforms;

fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn hash2(p: vec2f) -> vec2f {
  return vec2f(
    fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453),
    fract(sin(dot(p, vec2f(269.5, 183.3))) * 43758.5453)
  );
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i + vec2f(0.0, 0.0)), hash(i + vec2f(1.0, 0.0)), u.x),
    mix(hash(i + vec2f(0.0, 1.0)), hash(i + vec2f(1.0, 1.0)), u.x),
    u.y
  );
}

// Simplex-like noise approximation
fn simplexNoise(p: vec2f) -> f32 {
  let K1 = 0.366025404; // (sqrt(3)-1)/2
  let K2 = 0.211324865; // (3-sqrt(3))/6

  let i = floor(p + (p.x + p.y) * K1);
  let a = p - i + (i.x + i.y) * K2;
  let o = step(a.yx, a.xy);
  let b = a - o + K2;
  let c = a - 1.0 + 2.0 * K2;

  let h = max(0.5 - vec3f(dot(a, a), dot(b, b), dot(c, c)), vec3f(0.0));
  let n = h * h * h * h * vec3f(dot(a, hash2(i) - 0.5), dot(b, hash2(i + o) - 0.5), dot(c, hash2(i + 1.0) - 0.5));

  return dot(n, vec3f(70.0));
}

// Worley (cellular) noise
fn worleyNoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);

  var minDist = 1.0;
  for (var y = -1; y <= 1; y = y + 1) {
    for (var x = -1; x <= 1; x = x + 1) {
      let neighbor = vec2f(f32(x), f32(y));
      let point = hash2(i + neighbor);
      let diff = neighbor + point - f;
      let dist = length(diff);
      minDist = min(minDist, dist);
    }
  }

  return minDist;
}

fn getNoise(p: vec2f, noiseType: f32) -> f32 {
  let typeInt = i32(noiseType + 0.5);
  if (typeInt == 1) {
    return simplexNoise(p) * 0.5 + 0.5;
  } else if (typeInt == 2) {
    return worleyNoise(p);
  } else {
    return noise(p);
  }
}

fn fbm(p: vec2f, octaves: i32, noiseType: f32) -> f32 {
  var value = 0.0;
  var amplitude = 0.5;
  var pos = p;

  for (var i = 0; i < octaves; i = i + 1) {
    value = value + amplitude * getNoise(pos, noiseType);
    pos = pos * 2.0;
    amplitude = amplitude * 0.5;
  }

  return value;
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let noiseScale = uniforms.scale;

  var animatedTime = 0.0;
  if (uniforms.animate > 0.5) {
    animatedTime = uniforms.time * uniforms.speed;
  }

  let octaves = i32(uniforms.octaves + 0.5);

  // Generate noise-based displacement
  let noisePos = texCoord * noiseScale + vec2f(animatedTime * 0.1);
  let noiseVal = fbm(noisePos, octaves, uniforms.noiseType);
  let noiseVal2 = fbm(noisePos + vec2f(100.0, 100.0), octaves, uniforms.noiseType);

  // Displace UV coordinates
  let displacement = (vec2f(noiseVal, noiseVal2) - 0.5) * 2.0 * uniforms.intensity * 0.02;
  let displacedUV = texCoord + displacement;

  var color = textureSample(inputTexture, texSampler, clamp(displacedUV, vec2f(0.0), vec2f(1.0))).rgb;
  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);

  if (uniforms.distortOnly < 0.5) {
    // Add subtle noise overlay
    let overlayNoise = fbm(texCoord * noiseScale * 2.0 + animatedTime, octaves, uniforms.noiseType) * 0.1;
    color = color + vec3f(overlayNoise * uniforms.intensity * 0.3);
  }

  return vec4f(clamp(color, vec3f(0.0), vec3f(1.0)), 1.0);
}
`,VS=`
${ta}

struct MatrixRainUniforms {
  resolution: vec2f,       // offset 0
  cellSize: f32,           // offset 8: base cell size in pixels (4-32)
  speed: f32,              // offset 12: 0.5 - 3.0
  trailLength: f32,        // offset 16: 5 - 30
  time: f32,               // offset 20
  rainColorR: f32,         // offset 24
  rainColorG: f32,         // offset 28
  rainColorB: f32,         // offset 32
  bgOpacity: f32,          // offset 36: 0 - 1, how much original shows through
  glowIntensity: f32,      // offset 40: 0 - 2
  direction: f32,          // offset 44: 0 = down, 1 = up, 2 = left, 3 = right
  brightness: f32,         // offset 48
  contrast: f32,           // offset 52
  threshold: f32,          // offset 56: black point threshold (0-1)
  spacing: f32,            // offset 60: gap between characters (0-1)
  // Font atlas metadata
  atlasSize: vec2f,        // offset 64: total atlas dimensions
  atlasCharSize: vec2f,    // offset 72: size of each character in atlas
  atlasCols: f32,          // offset 80: number of columns in atlas
  charsetLength: f32,      // offset 84: number of characters
  _pad: vec2f,             // offset 88: padding to 96 bytes
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: MatrixRainUniforms;
@group(0) @binding(3) var fontAtlas: texture_2d<f32>;

// Hash functions for randomness
fn hash11(p: f32) -> f32 {
  var p2 = fract(p * 0.1031);
  p2 *= p2 + 33.33;
  p2 *= p2 + p2;
  return fract(p2);
}

fn hash21(p: vec2f) -> f32 {
  var p3 = fract(vec3f(p.x, p.y, p.x) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

fn luminance(c: vec3f) -> f32 {
  return dot(c, vec3f(0.299, 0.587, 0.114));
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

// Sample character from font atlas
fn sampleFontAtlas(cellUV: vec2f, charIndex: u32, spacing: f32) -> f32 {
  // Add margin around the character
  let margin = 0.05 + spacing * 0.15;

  // Check if we're in the margin area (will mask result later)
  let inMargin = cellUV.x < margin || cellUV.x > 1.0 - margin ||
                 cellUV.y < margin || cellUV.y > 1.0 - margin;

  // Normalize to inner area (clamp to avoid sampling outside)
  let innerUV = clamp((cellUV - margin) / (1.0 - 2.0 * margin), vec2f(0.0), vec2f(1.0));

  // Calculate position in atlas
  let atlasColsU = u32(uniforms.atlasCols);
  let atlasCol = f32(charIndex % atlasColsU);
  let atlasRow = f32(charIndex / atlasColsU);

  // Calculate UV in atlas (0-1 range)
  let charUVWidth = uniforms.atlasCharSize.x / uniforms.atlasSize.x;
  let charUVHeight = uniforms.atlasCharSize.y / uniforms.atlasSize.y;

  let atlasUV = vec2f(
    (atlasCol + innerUV.x) * charUVWidth,
    (atlasRow + innerUV.y) * charUVHeight
  );

  // Sample the font atlas (must be outside conditional for uniform control flow)
  let atlasColor = textureSample(fontAtlas, texSampler, atlasUV);

  // Return 0 if in margin, otherwise return sampled value
  return select(atlasColor.r, 0.0, inMargin);
}

// Calculate rain intensity for a column at a given position
fn getRainIntensity(columnIndex: f32, rowPos: f32, time: f32, speed: f32, trailLen: f32, direction: f32) -> vec2f {
  // Multiple drops per column
  let numDrops = 3;
  var maxIntensity = 0.0;
  var isHead = 0.0;

  for (var i = 0; i < numDrops; i++) {
    let dropSeed = columnIndex * 73.156 + f32(i) * 31.71;
    let dropSpeed = 0.5 + hash11(dropSeed) * 0.5;
    let dropPhase = hash11(dropSeed + 17.3);
    let dropLength = trailLen * (0.7 + hash11(dropSeed + 41.7) * 0.6);

    // Drop head position (wraps 0-1)
    let headPos = fract(time * speed * dropSpeed * 0.15 + dropPhase);

    // Distance from head depends on direction
    var distFromHead: f32;
    if (direction < 0.5 || direction > 2.5) {
      // Down or Right: head at headPos, trail behind
      distFromHead = headPos - rowPos;
      if (distFromHead < 0.0) {
        distFromHead += 1.0;
      }
    } else {
      // Up or Left: head at (1-headPos), trail behind
      let invertedHead = 1.0 - headPos;
      distFromHead = rowPos - invertedHead;
      if (distFromHead < 0.0) {
        distFromHead += 1.0;
      }
    }

    // Trail fades out behind head
    if (distFromHead < dropLength) {
      let trailIntensity = 1.0 - (distFromHead / dropLength);
      maxIntensity = max(maxIntensity, trailIntensity * trailIntensity);

      // Check if this is the head
      if (distFromHead < 0.02) {
        isHead = 1.0;
      }
    }
  }

  return vec2f(maxIntensity, isHead);
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  // Sample the source image
  var srcColor = textureSample(inputTexture, texSampler, texCoord).rgb;
  srcColor = applyBrightnessContrast(srcColor, uniforms.brightness, uniforms.contrast);
  let srcBrightness = luminance(srcColor);

  let rainColor = vec3f(uniforms.rainColorR, uniforms.rainColorG, uniforms.rainColorB);
  let direction = uniforms.direction;

  // Cell/character size - use cellSize directly, with spacing gap
  let baseCellSize = max(uniforms.cellSize, 4.0);
  let spacingGap = baseCellSize * uniforms.spacing;
  let totalCellSize = baseCellSize + spacingGap;
  let cellsX = uniforms.resolution.x / totalCellSize;
  let cellsY = uniforms.resolution.y / totalCellSize;

  // Which cell are we in?
  let cellX = floor(texCoord.x * cellsX);
  let cellY = floor(texCoord.y * cellsY);

  // Position within cell (0-1)
  // For horizontal directions, rotate the cell UV 90 degrees
  var cellUV: vec2f;
  if (direction > 1.5) {
    // Left (2) or Right (3): horizontal flow - rotate characters
    cellUV = vec2f(
      fract(texCoord.y * cellsY),
      fract(texCoord.x * cellsX)
    );
  } else {
    // Down (0) or Up (1): vertical flow
    cellUV = vec2f(
      fract(texCoord.x * cellsX),
      fract(texCoord.y * cellsY)
    );
  }

  // Column and row position for rain calculation
  var columnIndex: f32;
  var rowPos: f32;
  if (direction > 1.5) {
    // Left (2) or Right (3): horizontal flow
    columnIndex = cellY;
    rowPos = texCoord.x;
  } else {
    // Down (0) or Up (1): vertical flow
    columnIndex = cellX;
    rowPos = texCoord.y;
  }

  // Normalized trail length
  let trailLen = uniforms.trailLength / 50.0;

  // Get rain intensity and head status
  let rainData = getRainIntensity(columnIndex, rowPos, uniforms.time, uniforms.speed, trailLen, direction);
  let rainIntensity = rainData.x;
  let isHead = rainData.y;

  // Sample the source at cell center for character brightness
  let cellCenterUV = (vec2f(cellX, cellY) + 0.5) / vec2f(cellsX, cellsY);
  let cellColor = textureSample(inputTexture, texSampler, cellCenterUV).rgb;
  let cellBrightness = luminance(cellColor);

  // Character selection: animate through characters based on time and position
  let charSeed = hash21(vec2f(cellX, cellY));
  let charAnimIndex = floor(charSeed * 50.0 + uniforms.time * 2.0);
  let charsetLen = max(uniforms.charsetLength, 1.0);
  let charIndex = u32(floor(hash11(charAnimIndex) * charsetLen)) % u32(charsetLen);

  // Get character pattern from font atlas
  let charPattern = sampleFontAtlas(cellUV, charIndex, uniforms.spacing);

  // Calculate local edge strength for more interest in detailed areas
  let edgeSampleOffset = 1.0 / max(cellsX, cellsY);
  let leftBright = luminance(textureSample(inputTexture, texSampler, texCoord + vec2f(-edgeSampleOffset, 0.0)).rgb);
  let rightBright = luminance(textureSample(inputTexture, texSampler, texCoord + vec2f(edgeSampleOffset, 0.0)).rgb);
  let topBright = luminance(textureSample(inputTexture, texSampler, texCoord + vec2f(0.0, -edgeSampleOffset)).rgb);
  let bottomBright = luminance(textureSample(inputTexture, texSampler, texCoord + vec2f(0.0, edgeSampleOffset)).rgb);
  let edgeStrength = abs(leftBright - rightBright) + abs(topBright - bottomBright);

  // Source influence: characters are more active/visible where source is brighter or has edges
  let sourceInfluence = cellBrightness * 0.7 + edgeStrength * 0.5;

  // Apply threshold - pixels darker than threshold show no characters
  let thresholdCutoff = uniforms.threshold;
  let aboveThreshold = step(thresholdCutoff, cellBrightness);
  let thresholdedInfluence = sourceInfluence * aboveThreshold;

  // Combine rain intensity with source influence
  let effectiveRain = rainIntensity * aboveThreshold + thresholdedInfluence * 0.4 * (1.0 - rainIntensity);

  // Character visibility - brighter areas and edges show more (only above threshold)
  let charVisibility = charPattern * (0.15 + thresholdedInfluence * 0.85) * aboveThreshold;

  // Background: dark with hint of source
  let bgColor = srcColor * uniforms.bgOpacity * 0.1;

  // Rain color modulated by intensity and character pattern
  let tintedRain = mix(rainColor, rainColor * (0.5 + cellBrightness * 0.5), 0.3);
  var charColor = tintedRain * effectiveRain * charVisibility;

  // Head glow - bright white/green at the leading edge
  if (isHead > 0.5 && charPattern > 0.5) {
    let headBrightness = 0.7 + edgeStrength * 0.5;
    let headColor = mix(rainColor, vec3f(1.0, 1.0, 1.0), headBrightness);
    charColor = max(charColor, headColor * charVisibility * uniforms.glowIntensity);
  }

  // Static characters in bright/edge areas even without rain (reveals the image)
  let staticIntensity = 0.2 * thresholdedInfluence * (1.0 - rainIntensity * 0.5) * aboveThreshold;
  let staticChars = rainColor * staticIntensity * charVisibility;

  // Final composition
  let result = bgColor + charColor + staticChars;

  return vec4f(clamp(result, vec3f(0.0), vec3f(1.0)), 1.0);
}
`,qS=`
${ta}

struct VhsUniforms {
  resolution: vec2f,
  time: f32,             // offset 8
  distortion: f32,       // offset 12: tape warp amount (0-1)
  noise: f32,            // offset 16: static noise amount (0-1)
  colorBleed: f32,       // offset 20: RGB separation (0-1)
  scanlines: f32,        // offset 24: scanline intensity (0-1)
  trackingError: f32,    // offset 28: horizontal displacement (0-1)
  brightness: f32,       // offset 32
  contrast: f32,         // offset 36
  _pad: vec3f,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: VhsUniforms;

fn hash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn noise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = fract(p);
  let u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i), hash(i + vec2f(1.0, 0.0)), u.x),
    mix(hash(i + vec2f(0.0, 1.0)), hash(i + vec2f(1.0, 1.0)), u.x),
    u.y
  );
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  var uv = texCoord;
  let time = uniforms.time;

  // === TRACKING ERROR - Horizontal displacement that jumps ===
  if (uniforms.trackingError > 0.01) {
    let trackNoise = noise(vec2f(floor(uv.y * 20.0), floor(time * 2.0)));
    let trackOffset = (trackNoise - 0.5) * 0.1 * uniforms.trackingError;

    // Occasional big jumps
    let jumpNoise = noise(vec2f(time * 0.5, 0.0));
    let bigJump = step(0.92, jumpNoise) * (noise(vec2f(uv.y * 5.0, time)) - 0.5) * 0.3;

    uv.x = uv.x + trackOffset + bigJump * uniforms.trackingError;
  }

  // === TAPE WARP - Wavy distortion ===
  if (uniforms.distortion > 0.01) {
    let warpFreq = 3.0 + noise(vec2f(time * 0.1, 0.0)) * 5.0;
    let warpAmp = uniforms.distortion * 0.02;

    // Vertical wobble
    uv.x = uv.x + sin(uv.y * warpFreq * 6.28 + time * 2.0) * warpAmp;

    // Horizontal shake
    let shake = noise(vec2f(time * 10.0, 0.0)) - 0.5;
    uv.x = uv.x + shake * uniforms.distortion * 0.01;

    // Edge distortion (worse at top/bottom)
    let edgeDist = abs(uv.y - 0.5) * 2.0;
    let edgeWarp = pow(edgeDist, 3.0) * uniforms.distortion * 0.1;
    uv.x = uv.x + sin(time * 3.0 + uv.y * 10.0) * edgeWarp;
  }

  // Clamp UV
  uv = clamp(uv, vec2f(0.0), vec2f(1.0));

  // === COLOR BLEED / CHROMA SMEAR ===
  var color: vec3f;
  if (uniforms.colorBleed > 0.01) {
    let bleedAmount = uniforms.colorBleed * 0.01;

    // Sample R, G, B at slightly different positions (horizontal smear)
    let r = textureSampleLevel(inputTexture, texSampler, uv + vec2f(bleedAmount * 2.0, 0.0), 0.0).r;
    let g = textureSampleLevel(inputTexture, texSampler, uv, 0.0).g;
    let b = textureSampleLevel(inputTexture, texSampler, uv - vec2f(bleedAmount * 2.0, 0.0), 0.0).b;

    // Additional blur on chroma
    var chromaBlur = vec3f(0.0);
    for (var i = -2; i <= 2; i = i + 1) {
      let offset = f32(i) * bleedAmount;
      chromaBlur = chromaBlur + textureSampleLevel(inputTexture, texSampler, uv + vec2f(offset, 0.0), 0.0).rgb;
    }
    chromaBlur = chromaBlur / 5.0;

    color = vec3f(r, g, b);
    color = mix(color, chromaBlur, 0.3);
  } else {
    color = textureSampleLevel(inputTexture, texSampler, uv, 0.0).rgb;
  }

  // === SCANLINES ===
  if (uniforms.scanlines > 0.01) {
    let scanline = sin(uv.y * uniforms.resolution.y * 3.14159) * 0.5 + 0.5;
    let scanlineIntensity = mix(1.0, scanline, uniforms.scanlines * 0.5);
    color = color * scanlineIntensity;

    // Subtle scanline color variation
    let scanlinePhase = floor(uv.y * uniforms.resolution.y);
    color.r = color.r * (1.0 - uniforms.scanlines * 0.1 * step(0.5, fract(scanlinePhase * 0.5)));
  }

  // === STATIC NOISE ===
  if (uniforms.noise > 0.01) {
    // Fine grain noise
    let grain = hash(uv * uniforms.resolution + vec2f(time * 1000.0)) - 0.5;
    color = color + vec3f(grain * uniforms.noise * 0.3);

    // Occasional noise bands
    let bandNoise = noise(vec2f(uv.y * 100.0, time * 5.0));
    let band = step(0.97, bandNoise) * (hash(vec2f(uv.x * 100.0, time)) - 0.5);
    color = color + vec3f(band * uniforms.noise);

    // Rolling static bars
    let barY = fract(time * 0.3);
    let barDist = abs(uv.y - barY);
    let inBar = step(barDist, 0.02);
    let barNoise = hash(vec2f(uv.x * 500.0, floor(time * 60.0))) - 0.5;
    color = color + vec3f(barNoise * inBar * uniforms.noise * 0.5);
  }

  // === VHS COLOR CHARACTERISTICS ===
  // Slight color degradation
  color = mix(color, vec3f(dot(color, vec3f(0.299, 0.587, 0.114))), 0.1);

  // Boost certain colors typical of VHS
  color.r = color.r * 1.1;
  color.b = color.b * 0.9;

  // Slight vignette
  let vignette = 1.0 - length((uv - 0.5) * vec2f(0.5, 0.7)) * 0.5;
  color = color * vignette;

  color = applyBrightnessContrast(color, uniforms.brightness, uniforms.contrast);
  return vec4f(clamp(color, vec3f(0.0), vec3f(1.0)), 1.0);
}
`,YS=`
${ta}

struct VoronoiUniforms {
  resolution: vec2f,
  cellSize: f32,         // offset 8: size of cells (10-100)
  edgeWidth: f32,        // offset 12: border thickness (0-1)
  edgeColor: f32,        // offset 16: 0=black, 1=white, 2=original
  colorMode: f32,        // offset 20: 0=cell average, 1=center sample, 2=gradient
  randomize: f32,        // offset 24: cell point randomness (0-1)
  brightness: f32,       // offset 28
  contrast: f32,         // offset 32
  _pad: vec3f,
}

@group(0) @binding(0) var texSampler: sampler;
@group(0) @binding(1) var inputTexture: texture_2d<f32>;
@group(0) @binding(2) var<uniform> uniforms: VoronoiUniforms;

fn hash2(p: vec2f) -> vec2f {
  let k = vec2f(0.3183099, 0.3678794);
  var pp = p * k + k.yx;
  return fract(16.0 * k * fract(pp.x * pp.y * (pp.x + pp.y))) * 2.0 - 1.0;
}

fn applyBrightnessContrast(color: vec3f, brightness: f32, contrast: f32) -> vec3f {
  var result = color + vec3f(brightness);
  let contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3f(0.0), vec3f(1.0));
}

// Returns: xy = closest cell center, z = distance to closest, w = distance to second closest
fn voronoi(p: vec2f, randomness: f32) -> vec4f {
  let cellP = floor(p);
  let fractP = fract(p);

  var minDist = 8.0;
  var minDist2 = 8.0;
  var closestCell = vec2f(0.0);

  // Check 3x3 neighborhood
  for (var y = -1; y <= 1; y = y + 1) {
    for (var x = -1; x <= 1; x = x + 1) {
      let neighbor = vec2f(f32(x), f32(y));
      let cellCenter = cellP + neighbor;

      // Random offset for cell point
      let randOffset = hash2(cellCenter) * randomness * 0.5;
      let point = neighbor + 0.5 + randOffset;

      let dist = length(point - fractP);

      if (dist < minDist) {
        minDist2 = minDist;
        minDist = dist;
        closestCell = cellCenter;
      } else if (dist < minDist2) {
        minDist2 = dist;
      }
    }
  }

  return vec4f(closestCell, minDist, minDist2);
}

@fragment
fn fragmentMain(@location(0) texCoord: vec2f) -> @location(0) vec4f {
  let pixel = texCoord * uniforms.resolution;
  let cellScale = uniforms.cellSize;
  let scaledP = pixel / cellScale;

  let vor = voronoi(scaledP, uniforms.randomize);
  let closestCell = vor.xy;
  let minDist = vor.z;
  let minDist2 = vor.w;

  // Edge detection (distance to cell boundary)
  let edgeDist = minDist2 - minDist;
  let edge = smoothstep(0.0, uniforms.edgeWidth * 0.3, edgeDist);

  // Sample color based on mode
  var cellColor: vec3f;

  if (uniforms.colorMode < 0.5) {
    // Mode 0: Average color in cell region
    var avgColor = vec3f(0.0);
    var samples = 0.0;

    // Sample multiple points within the cell
    for (var dy = -2; dy <= 2; dy = dy + 1) {
      for (var dx = -2; dx <= 2; dx = dx + 1) {
        let sampleOffset = vec2f(f32(dx), f32(dy)) * 0.2;
        let sampleUV = (closestCell + 0.5 + sampleOffset) * cellScale / uniforms.resolution;
        let clampedUV = clamp(sampleUV, vec2f(0.0), vec2f(1.0));
        avgColor = avgColor + textureSampleLevel(inputTexture, texSampler, clampedUV, 0.0).rgb;
        samples = samples + 1.0;
      }
    }
    cellColor = avgColor / samples;
  } else if (uniforms.colorMode < 1.5) {
    // Mode 1: Sample at cell center
    let centerUV = (closestCell + 0.5) * cellScale / uniforms.resolution;
    let clampedUV = clamp(centerUV, vec2f(0.0), vec2f(1.0));
    cellColor = textureSampleLevel(inputTexture, texSampler, clampedUV, 0.0).rgb;
  } else {
    // Mode 2: Gradient based on distance within cell
    let centerUV = (closestCell + 0.5) * cellScale / uniforms.resolution;
    let currentColor = textureSampleLevel(inputTexture, texSampler, texCoord, 0.0).rgb;
    let centerColor = textureSampleLevel(inputTexture, texSampler, clamp(centerUV, vec2f(0.0), vec2f(1.0)), 0.0).rgb;

    // Blend from center color to edge color based on distance
    let gradientT = smoothstep(0.0, 0.7, minDist);
    cellColor = mix(centerColor, currentColor, gradientT * 0.5);
  }

  // Edge color
  var edgeCol: vec3f;
  if (uniforms.edgeColor < 0.5) {
    edgeCol = vec3f(0.0); // Black
  } else if (uniforms.edgeColor < 1.5) {
    edgeCol = vec3f(1.0); // White
  } else {
    // Original color (darkened)
    edgeCol = cellColor * 0.3;
  }

  // Combine cell and edge
  var finalColor = mix(edgeCol, cellColor, edge);

  finalColor = applyBrightnessContrast(finalColor, uniforms.brightness, uniforms.contrast);
  return vec4f(finalColor, 1.0);
}
`,mg={ascii:OS,passthrough:kS,characterMatch:RS,postprocess:DS,bloomThreshold:US,bloomBlur:MS,dithering:LS,halftone:zS,threshold:jS,edgeDetection:FS,dots:NS,blockify:BS,crosshatch:IS,waveLines:_S,pixelSort:GS,contour:PS,noiseField:HS,matrixRain:VS,vhs:qS,voronoi:YS};async function XS(){return mg}function A4(t){const n=mg[t];if(!n)throw new Error(`Shader "${t}" not found`);return n}function WS(){return!0}const ZS=({leftSidebar:t,rightSidebar:n,preview:r,floatingActions:i,inputPanel:s,effectsPanel:c,presetsPanel:f,exportPanel:m,settingsPanel:p,advancedPanel:v,postProcessingPanel:g})=>{const b=J(D=>D.setIsMobile),y=J(D=>D.ui.isMobile),C=J(D=>D.ui.isDraggingFile),[w,E]=k.useState("input"),[A,T]=k.useState(!1);if(k.useEffect(()=>{const D=()=>{b(window.innerWidth<1024)};return D(),window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[b]),y){const D=[{id:"input",label:"Input",icon:h.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})},{id:"effects",label:"Effects",icon:h.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})})},{id:"presets",label:"Presets",icon:h.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"})})},{id:"export",label:"Export",icon:h.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})})}],M=()=>{switch(w){case"input":return s;case"effects":return c;case"presets":return f;case"export":return m;default:return null}};return h.jsxs("div",{className:"h-[100dvh] bg-term-bg flex flex-col overflow-hidden",children:[h.jsx("header",{className:"flex-shrink-0 flex items-center justify-between px-3 py-2 border-b border-term-border bg-term-panel",children:h.jsx("span",{className:"text-sm text-term-text-bright",children:"Grainrad"})}),h.jsxs("main",{className:"flex-1 relative overflow-hidden min-h-0",children:[r,i]}),h.jsx("div",{className:"flex-shrink-0 max-h-[40vh] overflow-y-auto border-t border-term-border bg-term-panel",children:M()}),h.jsx("nav",{className:"flex-shrink-0 flex items-center justify-around border-t border-term-border bg-term-panel px-2 py-1 safe-area-bottom",children:D.map(Y=>h.jsxs("button",{onClick:()=>E(Y.id),className:`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded transition-colors ${w===Y.id?"text-term-text-bright":"text-term-text-dim"}`,children:[Y.icon,h.jsx("span",{className:"text-[10px]",children:Y.label})]},Y.id))}),h.jsx("button",{onClick:()=>T(!0),className:"fixed bottom-20 right-4 w-12 h-12 rounded-full bg-term-text-bright text-term-bg flex items-center justify-center shadow-lg z-30 active:scale-95 transition-transform",children:h.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),A&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed inset-0 bg-black/60 z-40",onClick:()=>T(!1)}),h.jsxs("div",{className:"fixed inset-x-0 bottom-0 max-h-[85vh] bg-term-panel z-50 rounded-t-2xl overflow-hidden flex flex-col animate-slide-up",children:[h.jsx("div",{className:"flex-shrink-0 flex justify-center py-2",children:h.jsx("div",{className:"w-10 h-1 rounded-full bg-term-border"})}),h.jsxs("div",{className:"flex-shrink-0 flex items-center justify-between px-4 pb-2 border-b border-term-border",children:[h.jsx("span",{className:"text-sm text-term-text-bright",children:"Settings"}),h.jsx("button",{onClick:()=>T(!1),className:"p-1 text-term-text-dim hover:text-term-text",children:h.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 18L18 6M6 6l12 12"})})})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto",children:[p,v,g]})]})]})]})}return h.jsxs("div",{className:"min-h-screen bg-term-bg flex",children:[h.jsxs("aside",{className:`w-72 flex-shrink-0 bg-term-panel border-r overflow-y-auto max-h-screen flex flex-col transition-colors duration-150 ${C?"border-term-accent":"border-term-border"}`,children:[h.jsx("div",{className:"px-4 py-3 border-b border-term-border",children:h.jsx("div",{className:"flex items-center justify-between",children:h.jsx("span",{className:"text-sm text-term-text-bright",children:"Grainrad"})})}),h.jsx("div",{className:"flex-1",children:t}),h.jsxs("div",{className:"px-4 py-3 border-t border-term-border text-xs text-term-text-dim flex items-center gap-4",children:[h.jsx("a",{href:"https://x.com/grainrad",target:"_blank",rel:"noopener noreferrer",className:"text-term-text-dim hover:text-term-text-bright transition-colors",children:"Follow"}),h.jsx("a",{href:"/about",className:"text-term-text-dim hover:text-term-text-bright transition-colors",children:"About"}),h.jsx("a",{href:"/changelog",className:"text-term-text-dim hover:text-term-text-bright transition-colors",children:"Changelog"})]})]}),h.jsxs("main",{className:`flex-1 relative overflow-hidden bg-term-bg border-t border-b transition-colors duration-150 ${C?"border-term-accent":"border-transparent"}`,children:[r,i]}),h.jsx("aside",{className:`w-[22rem] flex-shrink-0 bg-term-panel border-l overflow-y-auto max-h-screen transition-colors duration-150 ${C?"border-term-accent":"border-term-border"}`,children:h.jsx("div",{children:n})})]})};var lf={exports:{}},of,O0;function QS(){if(O0)return of;O0=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return of=t,of}var sf,R0;function KS(){if(R0)return sf;R0=1;var t=QS();function n(){}function r(){}return r.resetWarningCache=n,sf=function(){function i(f,m,p,v,g,b){if(b!==t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}i.isRequired=i;function s(){return i}var c={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:s,element:i,elementType:i,instanceOf:s,node:i,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:n};return c.PropTypes=c,c},sf}var D0;function JS(){return D0||(D0=1,lf.exports=KS()()),lf.exports}var $S=JS();const et=Hf($S);function zr(t,n,r,i){function s(c){return c instanceof r?c:new r(function(f){f(c)})}return new(r||(r=Promise))(function(c,f){function m(g){try{v(i.next(g))}catch(b){f(b)}}function p(g){try{v(i.throw(g))}catch(b){f(b)}}function v(g){g.done?c(g.value):s(g.value).then(m,p)}v((i=i.apply(t,n||[])).next())})}const eC=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function wi(t,n,r){const i=tC(t),{webkitRelativePath:s}=t,c=typeof n=="string"?n:typeof s=="string"&&s.length>0?s:`./${t.name}`;return typeof i.path!="string"&&U0(i,"path",c),U0(i,"relativePath",c),i}function tC(t){const{name:n}=t;if(n&&n.lastIndexOf(".")!==-1&&!t.type){const i=n.split(".").pop().toLowerCase(),s=eC.get(i);s&&Object.defineProperty(t,"type",{value:s,writable:!1,configurable:!1,enumerable:!0})}return t}function U0(t,n,r){Object.defineProperty(t,n,{value:r,writable:!1,configurable:!1,enumerable:!0})}const aC=[".DS_Store","Thumbs.db"];function nC(t){return zr(this,void 0,void 0,function*(){return Ts(t)&&rC(t.dataTransfer)?sC(t.dataTransfer,t.type):iC(t)?lC(t):Array.isArray(t)&&t.every(n=>"getFile"in n&&typeof n.getFile=="function")?oC(t):[]})}function rC(t){return Ts(t)}function iC(t){return Ts(t)&&Ts(t.target)}function Ts(t){return typeof t=="object"&&t!==null}function lC(t){return Af(t.target.files).map(n=>wi(n))}function oC(t){return zr(this,void 0,void 0,function*(){return(yield Promise.all(t.map(r=>r.getFile()))).map(r=>wi(r))})}function sC(t,n){return zr(this,void 0,void 0,function*(){if(t.items){const r=Af(t.items).filter(s=>s.kind==="file");if(n!=="drop")return r;const i=yield Promise.all(r.map(cC));return M0(hg(i))}return M0(Af(t.files).map(r=>wi(r)))})}function M0(t){return t.filter(n=>aC.indexOf(n.name)===-1)}function Af(t){if(t===null)return[];const n=[];for(let r=0;r<t.length;r++){const i=t[r];n.push(i)}return n}function cC(t){if(typeof t.webkitGetAsEntry!="function")return L0(t);const n=t.webkitGetAsEntry();return n&&n.isDirectory?vg(n):L0(t,n)}function hg(t){return t.reduce((n,r)=>[...n,...Array.isArray(r)?hg(r):[r]],[])}function L0(t,n){return zr(this,void 0,void 0,function*(){var r;if(globalThis.isSecureContext&&typeof t.getAsFileSystemHandle=="function"){const c=yield t.getAsFileSystemHandle();if(c===null)throw new Error(`${t} is not a File`);if(c!==void 0){const f=yield c.getFile();return f.handle=c,wi(f)}}const i=t.getAsFile();if(!i)throw new Error(`${t} is not a File`);return wi(i,(r=n?.fullPath)!==null&&r!==void 0?r:void 0)})}function uC(t){return zr(this,void 0,void 0,function*(){return t.isDirectory?vg(t):fC(t)})}function vg(t){const n=t.createReader();return new Promise((r,i)=>{const s=[];function c(){n.readEntries(f=>zr(this,void 0,void 0,function*(){if(f.length){const m=Promise.all(f.map(uC));s.push(m),c()}else try{const m=yield Promise.all(s);r(m)}catch(m){i(m)}}),f=>{i(f)})}c()})}function fC(t){return zr(this,void 0,void 0,function*(){return new Promise((n,r)=>{t.file(i=>{const s=wi(i,t.fullPath);n(s)},i=>{r(i)})})})}var cs={},z0;function dC(){return z0||(z0=1,cs.__esModule=!0,cs.default=function(t,n){if(t&&n){var r=Array.isArray(n)?n:n.split(",");if(r.length===0)return!0;var i=t.name||"",s=(t.type||"").toLowerCase(),c=s.replace(/\/.*$/,"");return r.some(function(f){var m=f.trim().toLowerCase();return m.charAt(0)==="."?i.toLowerCase().endsWith(m):m.endsWith("/*")?c===m.replace(/\/.*$/,""):s===m})}return!0}),cs}var pC=dC();const cf=Hf(pC);function j0(t){return vC(t)||hC(t)||xg(t)||mC()}function mC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vC(t){if(Array.isArray(t))return kf(t)}function F0(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function N0(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?F0(Object(r),!0).forEach(function(i){gg(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F0(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function gg(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function zl(t,n){return bC(t)||xC(t,n)||xg(t,n)||gC()}function gC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xg(t,n){if(t){if(typeof t=="string")return kf(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return kf(t,n)}}function kf(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function xC(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i=[],s=!0,c=!1,f,m;try{for(r=r.call(t);!(s=(f=r.next()).done)&&(i.push(f.value),!(n&&i.length===n));s=!0);}catch(p){c=!0,m=p}finally{try{!s&&r.return!=null&&r.return()}finally{if(c)throw m}}return i}}function bC(t){if(Array.isArray(t))return t}var yC=typeof cf=="function"?cf:cf.default,SC="file-invalid-type",CC="file-too-large",TC="file-too-small",wC="too-many-files",EC=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=n.split(","),i=r.length>1?"one of ".concat(r.join(", ")):r[0];return{code:SC,message:"File type must be ".concat(i)}},B0=function(n){return{code:CC,message:"File is larger than ".concat(n," ").concat(n===1?"byte":"bytes")}},I0=function(n){return{code:TC,message:"File is smaller than ".concat(n," ").concat(n===1?"byte":"bytes")}},AC={code:wC,message:"Too many files"};function bg(t,n){var r=t.type==="application/x-moz-file"||yC(t,n);return[r,r?null:EC(n)]}function yg(t,n,r){if(Rr(t.size))if(Rr(n)&&Rr(r)){if(t.size>r)return[!1,B0(r)];if(t.size<n)return[!1,I0(n)]}else{if(Rr(n)&&t.size<n)return[!1,I0(n)];if(Rr(r)&&t.size>r)return[!1,B0(r)]}return[!0,null]}function Rr(t){return t!=null}function kC(t){var n=t.files,r=t.accept,i=t.minSize,s=t.maxSize,c=t.multiple,f=t.maxFiles,m=t.validator;return!c&&n.length>1||c&&f>=1&&n.length>f?!1:n.every(function(p){var v=bg(p,r),g=zl(v,1),b=g[0],y=yg(p,i,s),C=zl(y,1),w=C[0],E=m?m(p):null;return b&&w&&!E})}function ws(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function us(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(n){return n==="Files"||n==="application/x-moz-file"}):!!t.target&&!!t.target.files}function _0(t){t.preventDefault()}function OC(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function RC(t){return t.indexOf("Edge/")!==-1}function DC(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return OC(t)||RC(t)}function Ya(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){for(var s=arguments.length,c=new Array(s>1?s-1:0),f=1;f<s;f++)c[f-1]=arguments[f];return n.some(function(m){return!ws(i)&&m&&m.apply(void 0,[i].concat(c)),ws(i)})}}function UC(){return"showOpenFilePicker"in window}function MC(t){if(Rr(t)){var n=Object.entries(t).filter(function(r){var i=zl(r,2),s=i[0],c=i[1],f=!0;return Sg(s)||(console.warn('Skipped "'.concat(s,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),f=!1),(!Array.isArray(c)||!c.every(Cg))&&(console.warn('Skipped "'.concat(s,'" because an invalid file extension was provided.')),f=!1),f}).reduce(function(r,i){var s=zl(i,2),c=s[0],f=s[1];return N0(N0({},r),{},gg({},c,f))},{});return[{description:"Files",accept:n}]}return t}function LC(t){if(Rr(t))return Object.entries(t).reduce(function(n,r){var i=zl(r,2),s=i[0],c=i[1];return[].concat(j0(n),[s],j0(c))},[]).filter(function(n){return Sg(n)||Cg(n)}).join(",")}function zC(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function jC(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function Sg(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||t==="application/*"||/\w+\/[-+.\w]+/g.test(t)}function Cg(t){return/^.*\.[\w]+$/.test(t)}var FC=["children"],NC=["open"],BC=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],IC=["refKey","onChange","onClick"];function _C(t){return HC(t)||PC(t)||Tg(t)||GC()}function GC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function HC(t){if(Array.isArray(t))return Of(t)}function uf(t,n){return YC(t)||qC(t,n)||Tg(t,n)||VC()}function VC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tg(t,n){if(t){if(typeof t=="string")return Of(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Of(t,n)}}function Of(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=t[r];return i}function qC(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var i=[],s=!0,c=!1,f,m;try{for(r=r.call(t);!(s=(f=r.next()).done)&&(i.push(f.value),!(n&&i.length===n));s=!0);}catch(p){c=!0,m=p}finally{try{!s&&r.return!=null&&r.return()}finally{if(c)throw m}}return i}}function YC(t){if(Array.isArray(t))return t}function G0(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function lt(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?G0(Object(r),!0).forEach(function(i){Rf(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G0(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Rf(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function Es(t,n){if(t==null)return{};var r=XC(t,n),i,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(s=0;s<c.length;s++)i=c[s],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function XC(t,n){if(t==null)return{};var r={},i=Object.keys(t),s,c;for(c=0;c<i.length;c++)s=i[c],!(n.indexOf(s)>=0)&&(r[s]=t[s]);return r}var td=k.forwardRef(function(t,n){var r=t.children,i=Es(t,FC),s=Eg(i),c=s.open,f=Es(s,NC);return k.useImperativeHandle(n,function(){return{open:c}},[c]),Dl.createElement(k.Fragment,null,r(lt(lt({},f),{},{open:c})))});td.displayName="Dropzone";var wg={disabled:!1,getFilesFromEvent:nC,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};td.defaultProps=wg;td.propTypes={children:et.func,accept:et.objectOf(et.arrayOf(et.string)),multiple:et.bool,preventDropOnDocument:et.bool,noClick:et.bool,noKeyboard:et.bool,noDrag:et.bool,noDragEventsBubbling:et.bool,minSize:et.number,maxSize:et.number,maxFiles:et.number,disabled:et.bool,getFilesFromEvent:et.func,onFileDialogCancel:et.func,onFileDialogOpen:et.func,useFsAccessApi:et.bool,autoFocus:et.bool,onDragEnter:et.func,onDragLeave:et.func,onDragOver:et.func,onDrop:et.func,onDropAccepted:et.func,onDropRejected:et.func,onError:et.func,validator:et.func};var Df={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Eg(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=lt(lt({},wg),t),r=n.accept,i=n.disabled,s=n.getFilesFromEvent,c=n.maxSize,f=n.minSize,m=n.multiple,p=n.maxFiles,v=n.onDragEnter,g=n.onDragLeave,b=n.onDragOver,y=n.onDrop,C=n.onDropAccepted,w=n.onDropRejected,E=n.onFileDialogCancel,A=n.onFileDialogOpen,T=n.useFsAccessApi,D=n.autoFocus,M=n.preventDropOnDocument,Y=n.noClick,V=n.noKeyboard,X=n.noDrag,B=n.noDragEventsBubbling,G=n.onError,ne=n.validator,ce=k.useMemo(function(){return LC(r)},[r]),ye=k.useMemo(function(){return MC(r)},[r]),Se=k.useMemo(function(){return typeof A=="function"?A:P0},[A]),ee=k.useMemo(function(){return typeof E=="function"?E:P0},[E]),ge=k.useRef(null),he=k.useRef(null),F=k.useReducer(WC,Df),$=uf(F,2),re=$[0],oe=$[1],we=re.isFocused,O=re.isFileDialogActive,I=k.useRef(typeof window<"u"&&window.isSecureContext&&T&&UC()),te=function(){!I.current&&O&&setTimeout(function(){if(he.current){var Ce=he.current.files;Ce.length||(oe({type:"closeDialog"}),ee())}},300)};k.useEffect(function(){return window.addEventListener("focus",te,!1),function(){window.removeEventListener("focus",te,!1)}},[he,O,ee,I]);var ie=k.useRef([]),ve=function(Ce){ge.current&&ge.current.contains(Ce.target)||(Ce.preventDefault(),ie.current=[])};k.useEffect(function(){return M&&(document.addEventListener("dragover",_0,!1),document.addEventListener("drop",ve,!1)),function(){M&&(document.removeEventListener("dragover",_0),document.removeEventListener("drop",ve))}},[ge,M]),k.useEffect(function(){return!i&&D&&ge.current&&ge.current.focus(),function(){}},[ge,D,i]);var me=k.useCallback(function(ae){G?G(ae):console.error(ae)},[G]),Q=k.useCallback(function(ae){ae.preventDefault(),ae.persist(),Yt(ae),ie.current=[].concat(_C(ie.current),[ae.target]),us(ae)&&Promise.resolve(s(ae)).then(function(Ce){if(!(ws(ae)&&!B)){var tt=Ce.length,it=tt>0&&kC({files:Ce,accept:ce,minSize:f,maxSize:c,multiple:m,maxFiles:p,validator:ne}),xt=tt>0&&!it;oe({isDragAccept:it,isDragReject:xt,isDragActive:!0,type:"setDraggedFiles"}),v&&v(ae)}}).catch(function(Ce){return me(Ce)})},[s,v,me,B,ce,f,c,m,p,ne]),De=k.useCallback(function(ae){ae.preventDefault(),ae.persist(),Yt(ae);var Ce=us(ae);if(Ce&&ae.dataTransfer)try{ae.dataTransfer.dropEffect="copy"}catch{}return Ce&&b&&b(ae),!1},[b,B]),_e=k.useCallback(function(ae){ae.preventDefault(),ae.persist(),Yt(ae);var Ce=ie.current.filter(function(it){return ge.current&&ge.current.contains(it)}),tt=Ce.indexOf(ae.target);tt!==-1&&Ce.splice(tt,1),ie.current=Ce,!(Ce.length>0)&&(oe({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),us(ae)&&g&&g(ae))},[ge,g,B]),Lt=k.useCallback(function(ae,Ce){var tt=[],it=[];ae.forEach(function(xt){var $a=bg(xt,ce),pa=uf($a,2),sr=pa[0],cr=pa[1],Ra=yg(xt,f,c),bt=uf(Ra,2),_t=bt[0],At=bt[1],ur=ne?ne(xt):null;if(sr&&_t&&!ur)tt.push(xt);else{var Dn=[cr,At];ur&&(Dn=Dn.concat(ur)),it.push({file:xt,errors:Dn.filter(function(Di){return Di})})}}),(!m&&tt.length>1||m&&p>=1&&tt.length>p)&&(tt.forEach(function(xt){it.push({file:xt,errors:[AC]})}),tt.splice(0)),oe({acceptedFiles:tt,fileRejections:it,isDragReject:it.length>0,type:"setFiles"}),y&&y(tt,it,Ce),it.length>0&&w&&w(it,Ce),tt.length>0&&C&&C(tt,Ce)},[oe,m,ce,f,c,p,y,C,w,ne]),It=k.useCallback(function(ae){ae.preventDefault(),ae.persist(),Yt(ae),ie.current=[],us(ae)&&Promise.resolve(s(ae)).then(function(Ce){ws(ae)&&!B||Lt(Ce,ae)}).catch(function(Ce){return me(Ce)}),oe({type:"reset"})},[s,Lt,me,B]),Ot=k.useCallback(function(){if(I.current){oe({type:"openDialog"}),Se();var ae={multiple:m,types:ye};window.showOpenFilePicker(ae).then(function(Ce){return s(Ce)}).then(function(Ce){Lt(Ce,null),oe({type:"closeDialog"})}).catch(function(Ce){zC(Ce)?(ee(Ce),oe({type:"closeDialog"})):jC(Ce)?(I.current=!1,he.current?(he.current.value=null,he.current.click()):me(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):me(Ce)});return}he.current&&(oe({type:"openDialog"}),Se(),he.current.value=null,he.current.click())},[oe,Se,ee,T,Lt,me,ye,m]),Ea=k.useCallback(function(ae){!ge.current||!ge.current.isEqualNode(ae.target)||(ae.key===" "||ae.key==="Enter"||ae.keyCode===32||ae.keyCode===13)&&(ae.preventDefault(),Ot())},[ge,Ot]),qt=k.useCallback(function(){oe({type:"focus"})},[]),Aa=k.useCallback(function(){oe({type:"blur"})},[]),Ka=k.useCallback(function(){Y||(DC()?setTimeout(Ot,0):Ot())},[Y,Ot]),da=function(Ce){return i?null:Ce},ka=function(Ce){return V?null:da(Ce)},Oa=function(Ce){return X?null:da(Ce)},Yt=function(Ce){B&&Ce.stopPropagation()},or=k.useMemo(function(){return function(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Ce=ae.refKey,tt=Ce===void 0?"ref":Ce,it=ae.role,xt=ae.onKeyDown,$a=ae.onFocus,pa=ae.onBlur,sr=ae.onClick,cr=ae.onDragEnter,Ra=ae.onDragOver,bt=ae.onDragLeave,_t=ae.onDrop,At=Es(ae,BC);return lt(lt(Rf({onKeyDown:ka(Ya(xt,Ea)),onFocus:ka(Ya($a,qt)),onBlur:ka(Ya(pa,Aa)),onClick:da(Ya(sr,Ka)),onDragEnter:Oa(Ya(cr,Q)),onDragOver:Oa(Ya(Ra,De)),onDragLeave:Oa(Ya(bt,_e)),onDrop:Oa(Ya(_t,It)),role:typeof it=="string"&&it!==""?it:"presentation"},tt,ge),!i&&!V?{tabIndex:0}:{}),At)}},[ge,Ea,qt,Aa,Ka,Q,De,_e,It,V,X,i]),Ja=k.useCallback(function(ae){ae.stopPropagation()},[]),Fr=k.useMemo(function(){return function(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Ce=ae.refKey,tt=Ce===void 0?"ref":Ce,it=ae.onChange,xt=ae.onClick,$a=Es(ae,IC),pa=Rf({accept:ce,multiple:m,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:da(Ya(it,It)),onClick:da(Ya(xt,Ja)),tabIndex:-1},tt,he);return lt(lt({},pa),$a)}},[he,r,m,It,i]);return lt(lt({},re),{},{isFocused:we&&!i,getRootProps:or,getInputProps:Fr,rootRef:ge,inputRef:he,open:da(Ot)})}function WC(t,n){switch(n.type){case"focus":return lt(lt({},t),{},{isFocused:!0});case"blur":return lt(lt({},t),{},{isFocused:!1});case"openDialog":return lt(lt({},Df),{},{isFileDialogActive:!0});case"closeDialog":return lt(lt({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return lt(lt({},t),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return lt(lt({},t),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections,isDragReject:n.isDragReject});case"reset":return lt({},Df);default:return t}}function P0(){}const Ul=({children:t,onClick:n,variant:r="secondary",size:i="md",disabled:s=!1,fullWidth:c=!1,active:f=!1,className:m="",type:p="button"})=>{const v=`
    font-mono
    border transition-colors duration-150
    focus:outline-none
    disabled:opacity-30 disabled:cursor-not-allowed
  `,g={sm:"text-xs px-2 py-1",md:"text-xs px-3 py-1.5",lg:"text-sm px-4 py-2"},b={primary:`
      border-term-text-bright bg-term-text-bright text-term-bg
      hover:bg-term-text hover:border-term-text
      ${f?"bg-term-text border-term-text":""}
    `,secondary:`
      border-term-border bg-transparent text-term-text
      hover:border-term-text-dim hover:text-term-text-bright
      ${f?"border-term-text-dim text-term-text-bright":""}
    `,ghost:`
      border-transparent bg-transparent text-term-text-dim
      hover:text-term-text
      ${f?"text-term-text":""}
    `,danger:`
      border-term-border bg-transparent text-red-400
      hover:border-red-400
    `};return h.jsx("button",{type:p,onClick:n,disabled:s,className:`
        ${v}
        ${g[i]}
        ${b[r]}
        ${c?"w-full":""}
        ${m}
      `,children:t})},Z=({label:t,value:n,min:r,max:i,step:s=1,onChange:c,showValue:f=!0,showReset:m=!1,defaultValue:p,unit:v="",disabled:g=!1,className:b="",debounceMs:y=0})=>{const[C,w]=k.useState(n),E=k.useRef(null),A=k.useRef(!1);k.useEffect(()=>{A.current||w(n)},[n]),k.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const T=k.useCallback(X=>{w(X),A.current=!0,E.current&&clearTimeout(E.current),y===0?(c(X),A.current=!1):E.current=setTimeout(()=>{c(X),A.current=!1,E.current=null},y)},[c,y]),D=k.useCallback(()=>{p!==void 0&&(w(p),c(p))},[p,c]),{percentage:M,isModified:Y,displayValue:V}=k.useMemo(()=>{const X=(C-r)/(i-r)*100,B=m&&p!==void 0&&C!==p,G=Number.isInteger(s)?String(C):C.toFixed(1);return{percentage:X,isModified:B,displayValue:G}},[C,r,i,s,m,p]);return h.jsxs("div",{className:`flex items-center h-7 ${g?"opacity-40":""} ${b}`,children:[h.jsx("label",{className:"text-term-text-dim text-xs w-28 shrink-0",children:t}),f&&h.jsxs("span",{className:"text-term-text text-xs font-mono tabular-nums w-14 shrink-0",children:[V,v]}),h.jsxs("div",{className:"relative h-4 flex-1 flex items-center mx-2",children:[h.jsx("div",{className:"absolute inset-x-0 h-px bg-term-border"}),h.jsx("div",{className:"absolute left-0 h-px bg-term-text-dim",style:{width:`${M}%`}}),h.jsx("input",{type:"range",min:r,max:i,step:s,value:C,onChange:X=>T(parseFloat(X.target.value)),disabled:g,className:`absolute inset-0 w-full opacity-0 ${g?"cursor-not-allowed":"cursor-pointer"}`}),h.jsx("div",{className:"absolute w-2 h-2 rounded-full bg-term-text-bright pointer-events-none",style:{left:`calc(${M}% - 4px)`}})]}),m&&h.jsx("button",{onClick:D,disabled:!Y||g,className:`text-xs w-10 text-right shrink-0 transition-colors ${Y&&!g?"text-term-text-dim hover:text-term-text cursor-pointer":"text-transparent cursor-default"}`,children:"reset"})]})},ot=({label:t,checked:n,onChange:r,disabled:i=!1,className:s=""})=>h.jsxs("div",{className:`flex items-center h-7 ${s}`,onClick:()=>!i&&r(!n),children:[h.jsx("label",{className:"text-term-text-dim text-xs w-28 shrink-0 cursor-pointer",children:t}),h.jsx("div",{className:`
          w-3.5 h-3.5 border cursor-pointer transition-colors
          flex items-center justify-center
          ${i?"opacity-50 cursor-not-allowed":""}
          ${n?"border-term-text-bright bg-term-text-bright":"border-term-border"}
        `,children:n&&h.jsx("svg",{className:"w-2.5 h-2.5 text-term-bg",viewBox:"0 0 12 12",fill:"none",children:h.jsx("path",{d:"M2 6l3 3 5-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]});function Ag(t){return t.length>0&&"options"in t[0]}function ZC(t){return Ag(t)?t.flatMap(n=>n.options):t}const We=({label:t,value:n,options:r,onChange:i,disabled:s=!1,className:c=""})=>{const[f,m]=k.useState(!1),p=k.useRef(null),v=k.useRef(null),b=ZC(r).find(w=>w.value===n);k.useEffect(()=>{const w=E=>{p.current&&!p.current.contains(E.target)&&m(!1)};return f&&document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[f]),k.useEffect(()=>{const w=E=>{f&&E.key==="Escape"&&m(!1)};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[f]),k.useEffect(()=>{if(f&&v.current){const w=v.current.querySelector('[data-selected="true"]');w&&w.scrollIntoView({block:"nearest"})}},[f]);const y=w=>h.jsxs("button",{type:"button","data-selected":w.value===n,onClick:()=>{i(w.value),m(!1)},className:`
        w-full px-2 py-1.5 text-left text-xs transition-colors flex items-center gap-2
        ${w.value===n?"bg-term-text-bright/20 text-term-text-bright":"text-term-text hover:bg-term-border/50 hover:text-term-text-bright"}
      `,children:[h.jsx("span",{className:"w-3 text-term-text-bright",children:w.value===n?"✓":""}),w.label]},w.value),C=()=>Ag(r)?r.map((w,E)=>h.jsxs("div",{children:[E>0&&h.jsx("div",{className:"border-t border-term-border my-1"}),h.jsx("div",{className:"px-2 py-1 text-[10px] text-term-text-dim uppercase tracking-wide",children:w.label}),w.options.map(y)]},w.label)):r.map(y);return h.jsxs("div",{className:`flex items-center h-7 ${c}`,ref:p,children:[h.jsx("label",{className:"text-term-text-dim text-xs w-28 shrink-0",children:t}),h.jsxs("div",{className:"relative flex-1",children:[h.jsx("button",{type:"button",onClick:()=>!s&&m(!f),disabled:s,className:`
            w-full bg-term-bg border border-term-border
            text-term-text text-xs px-2 py-1.5 pr-7 text-left
            focus:outline-none focus:border-term-text-dim
            disabled:opacity-50 disabled:cursor-not-allowed
            ${s?"":"cursor-pointer hover:border-term-text-dim"}
          `,children:b?.label||"Select..."}),h.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-term-text-dim",children:h.jsx("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",className:`transition-transform ${f?"rotate-180":""}`,children:h.jsx("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),f&&h.jsx("div",{ref:v,className:"absolute z-50 top-full left-0 right-0 mt-px bg-term-bg border border-term-border max-h-64 overflow-y-auto",children:C()})]})]})},jr=({title:t,defaultExpanded:n=!0,expanded:r,onToggle:i,headerRight:s,children:c,className:f=""})=>{const[m,p]=k.useState(n),v=r!==void 0,g=v?r:m,b=k.useCallback(()=>{v&&i?i(!r):p(!m)},[v,r,m,i]);return h.jsxs("div",{className:`border-b border-term-border ${f}`,children:[h.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[h.jsxs("button",{onClick:b,className:"flex items-center gap-2 hover:text-term-text-bright transition-colors focus:outline-none",children:[h.jsx("span",{className:"text-term-text-dim text-xs",children:g?"−":"+"}),h.jsx("span",{className:"text-sm text-term-text-bright font-medium",children:t})]}),h.jsx("div",{className:"flex items-center gap-2",children:s})]}),g&&h.jsx("div",{className:"px-4 pb-4",children:c})]})},Ae=({title:t,children:n,className:r="",collapsible:i=!1,defaultCollapsed:s=!1})=>{const[c,f]=k.useState(s),m=()=>{i&&f(!c)};return h.jsxs("div",{className:`space-y-3 ${r}`,children:[h.jsxs("div",{className:`flex items-center gap-1 ${i?"cursor-pointer hover:text-term-text-bright":""}`,onClick:m,children:[i&&h.jsx("span",{className:"text-term-text-dim text-xs",children:c?"+":"−"}),h.jsx("span",{className:"text-xs text-term-text font-medium",children:t})]}),(!i||!c)&&h.jsx("div",{className:"space-y-1",children:n})]})},gt=({label:t,value:n,onChange:r,className:i=""})=>h.jsxs("div",{className:`flex items-center h-7 ${i}`,children:[h.jsx("label",{className:"text-term-text-dim text-xs w-28 shrink-0",children:t}),h.jsx("div",{className:"relative w-7 h-7 border border-term-border shrink-0",style:{backgroundColor:n},children:h.jsx("input",{type:"color",value:n,onChange:s=>r(s.target.value),className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer"})}),h.jsx("input",{type:"text",value:n.toUpperCase(),onChange:s=>{const c=s.target.value;/^#[0-9A-Fa-f]{0,6}$/.test(c)&&r(c)},className:`
          flex-1 -ml-px bg-term-bg border border-term-border
          text-term-text font-mono text-xs px-2 h-7
          focus:outline-none focus:border-term-text-dim
          uppercase
        `,maxLength:7})]}),ad=({label:t,value:n,onChange:r,placeholder:i="",type:s="text",disabled:c=!1,className:f=""})=>h.jsxs("div",{className:`flex items-center h-7 ${f}`,children:[h.jsx("label",{className:"text-term-text-dim text-xs w-28 shrink-0",children:t}),h.jsx("input",{type:s,value:n,onChange:m=>r(m.target.value),placeholder:i,disabled:c,className:`
          flex-1 min-w-0 bg-term-bg border border-term-border
          text-term-text text-xs px-2 py-1.5
          focus:outline-none focus:border-term-text-dim
          placeholder-term-text-dim
          disabled:opacity-50 disabled:cursor-not-allowed
        `})]}),As={gameboy:{name:"GameBoy",colors:["#0F380F","#306230","#8BAC0F","#9BBC0F"],category:"retro",description:"Original DMG-01 4-shade green LCD"},cga:{name:"CGA",colors:["#000000","#0000AA","#00AA00","#00AAAA","#AA0000","#AA00AA","#AA5500","#AAAAAA","#555555","#5555FF","#55FF55","#55FFFF","#FF5555","#FF55FF","#FFFF55","#FFFFFF"],category:"retro",description:"IBM CGA 16-color palette"},ega:{name:"EGA",colors:["#000000","#0000AA","#00AA00","#00AAAA","#AA0000","#AA00AA","#AA5500","#AAAAAA","#555555","#5555FF","#55FF55","#55FFFF","#FF5555","#FF55FF","#FFFF55","#FFFFFF"],category:"retro",description:"EGA default 16 colors (CGA compatible)"},nes:{name:"NES",colors:["#000000","#FCFCFC","#F8F8F8","#BCBCBC","#7C7C7C","#A4E4FC","#3CBCFC","#0078F8","#0000FC","#B8B8F8","#6888FC","#0058F8","#0000BC","#D8B8F8","#9878F8","#6844FC","#4428BC","#F8B8F8","#F878F8","#D800CC","#940084","#F8A4C0","#F85898","#E40058","#A80020","#F0D0B0","#F87858","#F83800","#A81000","#FCE0A8","#FCA044","#E45C10","#881400","#F8D878","#F8B800","#AC7C00","#503000","#D8F878","#B8F818","#00B800","#007800","#B8F8B8","#58D854","#00A800","#006800","#B8F8D8","#58F898","#00A844","#005800","#00FCFC","#00E8D8","#008888","#004058","#787878"],category:"retro",description:"NES PPU 54-color palette"},pico8:{name:"PICO-8",colors:["#000000","#1D2B53","#7E2553","#008751","#AB5236","#5F574F","#C2C3C7","#FFF1E8","#FF004D","#FFA300","#FFEC27","#00E436","#29ADFF","#83769C","#FF77A8","#FFCCAA"],category:"retro",description:"PICO-8 fantasy console 16 colors"},c64:{name:"Commodore 64",colors:["#000000","#FFFFFF","#68372B","#70A4B2","#6F3D86","#588D43","#352879","#B8C76F","#6F4F25","#433900","#9A6759","#444444","#6C6C6C","#9AD284","#6C5EB5","#959595"],category:"retro",description:"Pepto's C64 palette (VIC-II accurate)"},appleII:{name:"Apple II",colors:["#000000","#E31E60","#604EBD","#FF44FD","#00A360","#9C9C9C","#14CFFD","#D0C3FF","#607203","#FF6A3C","#9C9C9C","#FFA0D0","#14F53C","#D0DD8D","#72FFD0","#FFFFFF"],category:"retro",description:"Apple II Lo-res 16 colors"},macintosh:{name:"Macintosh",colors:["#FFFFFF","#FCF305","#FF6402","#DD0806","#F20884","#4600A5","#0000D4","#02ABEA","#1FB714","#006411","#562C05","#90713A","#C0C0C0","#808080","#404040","#000000"],category:"retro",description:"Classic Mac OS System 16 colors"},sepia:{name:"Sepia",colors:["#704214","#8B6914","#C19A6B","#EFDCC3","#FFF8DC"],category:"artistic",description:"Vintage sepia tones"},cyberpunk:{name:"Cyberpunk",colors:["#0D0221","#0F084B","#26081C","#FF2A6D","#05D9E8","#D1F7FF"],category:"artistic",description:"Neon cyberpunk aesthetic"},newspaper:{name:"Newspaper",colors:["#1A1A1A","#FFFEF0"],category:"print",description:"Classic black ink on newsprint"},risograph:{name:"Risograph",colors:["#000000","#FF6B6B","#00A878","#FFE66D","#0A2463"],category:"print",description:"Risograph print style"},custom:{name:"Custom",colors:["#000000","#FFFFFF"],category:"custom",description:"User-defined palette"}};function k4(t){return As[t]||As.custom}function O4(t){const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:[0,0,0]}Object.entries(As).map(([t,n])=>({preset:t,name:n.name,colorCount:n.colors.length}));const QC=k.memo(({color:t,size:n=10})=>h.jsx("div",{className:"border border-term-border/50",style:{backgroundColor:t,width:n,height:n,minWidth:n}})),KC=k.memo(({colors:t,maxColors:n=16})=>{const r=t.slice(0,n);return h.jsxs("div",{className:"flex gap-0.5 flex-wrap",children:[r.map((i,s)=>h.jsx(QC,{color:i,size:10},s)),t.length>n&&h.jsxs("span",{className:"text-term-text-dim text-[9px] ml-1",children:["+",t.length-n]})]})}),JC=[{label:"Retro Gaming",options:[{value:"gameboy",label:"GameBoy (4)"},{value:"cga",label:"CGA (16)"},{value:"nes",label:"NES (54)"},{value:"pico8",label:"PICO-8 (16)"},{value:"c64",label:"C64 (16)"},{value:"appleII",label:"Apple II (16)"},{value:"macintosh",label:"Macintosh (16)"}]},{label:"Artistic",options:[{value:"sepia",label:"Sepia (5)"},{value:"cyberpunk",label:"Cyberpunk (6)"}]},{label:"Print",options:[{value:"newspaper",label:"Newspaper (2)"},{value:"risograph",label:"Risograph (5)"}]},{label:"Custom",options:[{value:"custom",label:"Custom..."}]}],kg=k.memo(({value:t,onChange:n,customPalette:r=[],onCustomPaletteChange:i})=>{const s=t==="custom"?r:As[t]?.colors||[];return h.jsxs("div",{className:"space-y-1.5",children:[h.jsx(We,{label:"Palette",value:t,options:JC,onChange:c=>n(c)}),h.jsxs("div",{className:"flex items-center h-7",children:[h.jsx("div",{className:"w-28 shrink-0"}),h.jsx(KC,{colors:s,maxColors:16})]}),t==="custom"&&i&&h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"w-28 shrink-0"}),h.jsxs("div",{className:"flex-1 space-y-1.5",children:[h.jsxs("div",{className:"flex flex-wrap gap-1",children:[r.map((c,f)=>h.jsxs("div",{className:"relative group",children:[h.jsx("input",{type:"color",value:c,onChange:m=>{const p=[...r];p[f]=m.target.value,i(p)},className:"w-5 h-5 border border-term-border cursor-pointer bg-transparent",style:{padding:0}}),h.jsx("button",{onClick:()=>{const m=r.filter((p,v)=>v!==f);i(m)},className:"absolute -top-1 -right-1 w-3 h-3 bg-term-bg border border-term-border text-[8px] text-term-text-dim hover:text-term-text hidden group-hover:flex items-center justify-center",children:"×"})]},f)),r.length<64&&h.jsx("button",{onClick:()=>i([...r,"#808080"]),className:"w-5 h-5 border border-term-border border-dashed text-term-text-dim hover:text-term-text hover:border-term-text text-xs flex items-center justify-center",children:"+"})]}),h.jsxs("p",{className:"text-[10px] text-term-text-dim",children:[r.length,"/64 colors"]})]})]})]})});kg.displayName="PaletteSelector";var Sn={},ff={},Cn={},H0;function Og(){if(H0)return Cn;H0=1,Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.loop=Cn.conditional=Cn.parse=void 0;var t=function i(s,c){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f;if(Array.isArray(c))c.forEach(function(v){return i(s,v,f,m)});else if(typeof c=="function")c(s,f,m,i);else{var p=Object.keys(c)[0];Array.isArray(c[p])?(m[p]={},i(s,c[p],f,m[p])):m[p]=c[p](s,f,m,i)}return f};Cn.parse=t;var n=function(s,c){return function(f,m,p,v){c(f,m,p)&&v(f,s,m,p)}};Cn.conditional=n;var r=function(s,c){return function(f,m,p,v){for(var g=[],b=f.pos;c(f,m,p);){var y={};if(v(f,s,m,y),f.pos===b)break;b=f.pos,g.push(y)}return g}};return Cn.loop=r,Cn}var ht={},V0;function Rg(){if(V0)return ht;V0=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.readBits=ht.readArray=ht.readUnsigned=ht.readString=ht.peekBytes=ht.readBytes=ht.peekByte=ht.readByte=ht.buildStream=void 0;var t=function(b){return{data:b,pos:0}};ht.buildStream=t;var n=function(){return function(b){return b.data[b.pos++]}};ht.readByte=n;var r=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(y){return y.data[y.pos+b]}};ht.peekByte=r;var i=function(b){return function(y){return y.data.subarray(y.pos,y.pos+=b)}};ht.readBytes=i;var s=function(b){return function(y){return y.data.subarray(y.pos,y.pos+b)}};ht.peekBytes=s;var c=function(b){return function(y){return Array.from(i(b)(y)).map(function(C){return String.fromCharCode(C)}).join("")}};ht.readString=c;var f=function(b){return function(y){var C=i(2)(y);return b?(C[1]<<8)+C[0]:(C[0]<<8)+C[1]}};ht.readUnsigned=f;var m=function(b,y){return function(C,w,E){for(var A=typeof y=="function"?y(C,w,E):y,T=i(b),D=new Array(A),M=0;M<A;M++)D[M]=T(C);return D}};ht.readArray=m;var p=function(b,y,C){for(var w=0,E=0;E<C;E++)w+=b[y+E]&&Math.pow(2,C-E-1);return w},v=function(b){return function(y){for(var C=n()(y),w=new Array(8),E=0;E<8;E++)w[7-E]=!!(C&1<<E);return Object.keys(b).reduce(function(A,T){var D=b[T];return D.length?A[T]=p(w,D.index,D.length):A[T]=w[D.index],A},{})}};return ht.readBits=v,ht}var q0;function $C(){return q0||(q0=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=Og(),r=Rg(),i={blocks:function(y){for(var C=0,w=[],E=y.data.length,A=0,T=(0,r.readByte)()(y);T!==C&&T;T=(0,r.readByte)()(y)){if(y.pos+T>=E){var D=E-y.pos;w.push((0,r.readBytes)(D)(y)),A+=D;break}w.push((0,r.readBytes)(T)(y)),A+=T}for(var M=new Uint8Array(A),Y=0,V=0;V<w.length;V++)M.set(w[V],Y),Y+=w[V].length;return M}},s=(0,n.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},function(b){var y=(0,r.peekBytes)(2)(b);return y[0]===33&&y[1]===249}),c=(0,n.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,n.conditional)({lct:(0,r.readArray)(3,function(b,y,C){return Math.pow(2,C.descriptor.lct.size+1)})},function(b,y,C){return C.descriptor.lct.exists}),{data:[{minCodeSize:(0,r.readByte)()},i]}]},function(b){return(0,r.peekByte)()(b)===44}),f=(0,n.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(y,C,w){return(0,r.readBytes)(w.text.blockSize)(y)}},i]},function(b){var y=(0,r.peekBytes)(2)(b);return y[0]===33&&y[1]===1}),m=(0,n.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(y,C,w){return(0,r.readString)(w.blockSize)(y)}},i]},function(b){var y=(0,r.peekBytes)(2)(b);return y[0]===33&&y[1]===255}),p=(0,n.conditional)({comment:[{codes:(0,r.readBytes)(2)},i]},function(b){var y=(0,r.peekBytes)(2)(b);return y[0]===33&&y[1]===254}),v=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,n.conditional)({gct:(0,r.readArray)(3,function(b,y){return Math.pow(2,y.lsd.gct.size+1)})},function(b,y){return y.lsd.gct.exists}),{frames:(0,n.loop)([s,m,p,c,f],function(b){var y=(0,r.peekByte)()(b);return y===33||y===44})}],g=v;t.default=g})(ff)),ff}var Al={},Y0;function e3(){if(Y0)return Al;Y0=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.deinterlace=void 0;var t=function(r,i){for(var s=new Array(r.length),c=r.length/i,f=function(C,w){var E=r.slice(w*i,(w+1)*i);s.splice.apply(s,[C*i,i].concat(E))},m=[0,4,2,1],p=[8,8,4,2],v=0,g=0;g<4;g++)for(var b=m[g];b<c;b+=p[g])f(b,v),v++;return s};return Al.deinterlace=t,Al}var kl={},X0;function t3(){if(X0)return kl;X0=1,Object.defineProperty(kl,"__esModule",{value:!0}),kl.lzw=void 0;var t=function(r,i,s){var c=4096,f=-1,m=s,p,v,g,b,y,C,w,B,E,A,X,T,G,ne,ye,ce,D=new Array(s),M=new Array(c),Y=new Array(c),V=new Array(c+1);for(T=r,v=1<<T,y=v+1,p=v+2,w=f,b=T+1,g=(1<<b)-1,E=0;E<v;E++)M[E]=0,Y[E]=E;var X,B,G,ne,ce,ye;for(X=B=G=ne=ce=ye=0,A=0;A<m;){if(ne===0){if(B<b){X+=i[ye]<<B,B+=8,ye++;continue}if(E=X&g,X>>=b,B-=b,E>p||E==y)break;if(E==v){b=T+1,g=(1<<b)-1,p=v+2,w=f;continue}if(w==f){V[ne++]=Y[E],w=E,G=E;continue}for(C=E,E==p&&(V[ne++]=G,E=w);E>v;)V[ne++]=Y[E],E=M[E];G=Y[E]&255,V[ne++]=G,p<c&&(M[p]=w,Y[p]=G,p++,(p&g)===0&&p<c&&(b++,g+=p)),w=C}ne--,D[ce++]=V[ne],A++}for(A=ce;A<m;A++)D[A]=0;return D};return kl.lzw=t,kl}var W0;function a3(){if(W0)return Sn;W0=1,Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.decompressFrames=Sn.decompressFrame=Sn.parseGIF=void 0;var t=c($C()),n=Og(),r=Rg(),i=e3(),s=t3();function c(g){return g&&g.__esModule?g:{default:g}}var f=function(b){var y=new Uint8Array(b);return(0,n.parse)((0,r.buildStream)(y),t.default)};Sn.parseGIF=f;var m=function(b){for(var y=b.pixels.length,C=new Uint8ClampedArray(y*4),w=0;w<y;w++){var E=w*4,A=b.pixels[w],T=b.colorTable[A]||[0,0,0];C[E]=T[0],C[E+1]=T[1],C[E+2]=T[2],C[E+3]=A!==b.transparentIndex?255:0}return C},p=function(b,y,C){if(!b.image){console.warn("gif frame does not have associated image.");return}var w=b.image,E=w.descriptor.width*w.descriptor.height,A=(0,s.lzw)(w.data.minCodeSize,w.data.blocks,E);w.descriptor.lct.interlaced&&(A=(0,i.deinterlace)(A,w.descriptor.width));var T={pixels:A,dims:{top:b.image.descriptor.top,left:b.image.descriptor.left,width:b.image.descriptor.width,height:b.image.descriptor.height}};return w.descriptor.lct&&w.descriptor.lct.exists?T.colorTable=w.lct:T.colorTable=y,b.gce&&(T.delay=(b.gce.delay||10)*10,T.disposalType=b.gce.extras.disposal,b.gce.extras.transparentColorGiven&&(T.transparentIndex=b.gce.transparentColorIndex)),C&&(T.patch=m(T)),T};Sn.decompressFrame=p;var v=function(b,y){return b.frames.filter(function(C){return C.image}).map(function(C){return p(C,b.gct,y)})};return Sn.decompressFrames=v,Sn}var ks=a3();async function Dg(t){const n=await t.arrayBuffer(),r=ks.parseGIF(n),i=ks.decompressFrames(r,!0);if(i.length===0)throw new Error("No frames found in GIF");const s=r.lsd.width,c=r.lsd.height,m=new OffscreenCanvas(s,c).getContext("2d"),p=[];let v=0;for(const g of i){const b=new ImageData(new Uint8ClampedArray(g.patch),g.dims.width,g.dims.height),y=new OffscreenCanvas(g.dims.width,g.dims.height);y.getContext("2d").putImageData(b,0,0),m.drawImage(y,g.dims.left,g.dims.top);const w=m.getImageData(0,0,s,c),E=Math.max(g.delay||100,20);v+=E,p.push({imageData:w,delay:E}),g.disposalType===2&&m.clearRect(g.dims.left,g.dims.top,g.dims.width,g.dims.height)}return{frames:p,width:s,height:c,totalDuration:v}}async function Ug(t){try{const n=await t.arrayBuffer(),r=ks.parseGIF(n);return ks.decompressFrames(r,!0).length>1}catch{return!1}}let Z0=!1;const n3=()=>{Z0||(Z0=!0,za(()=>import("./index-DKljlg_S.js"),[]))},r3=({status:t})=>{const r={NO_INPUT:{color:"text-term-text-dim",text:"Standby"},IMAGE_LOADED:{color:"text-term-text",text:"Image loaded"},VIDEO_LOADED:{color:"text-term-text",text:"Video loaded"},GIF_LOADED:{color:"text-term-text",text:"GIF loaded"},WEBCAM_ACTIVE:{color:"text-term-text",text:"Webcam active"},MODEL3D_LOADED:{color:"text-term-text",text:"3D model loaded"},PROCESSING:{color:"text-term-text-dim",text:"Processing..."},ERROR:{color:"text-red-400",text:"Error"}}[t];return h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:`text-xs ${r.color}`,children:r.text})})},Q0=()=>{const t=J(T=>T.input),n=J(T=>T.setInputType),r=J(T=>T.setInputStatus),i=J(T=>T.setInputSource),s=J(T=>T.setInputFile),c=J(T=>T.setInputMetadata),f=J(T=>T.setInputError),m=J(T=>T.setGifData),p=J(T=>T.clearInput),v=J(T=>T.setVideoCurrentTime),g=J(T=>T.setVideoIsPlaying),b=dg(),y=J(T=>T.updateModel3DSettings),C=k.useCallback(async T=>{if(T.length===0)return;const D=T[0];if(D.size>Te.maxFileSize){f(`File exceeds ${Te.maxFileSize/1024/1024}MB limit`);return}r("PROCESSING"),s(D);const M=Object.keys(Jf).includes(D.type),Y=Object.keys($f).includes(D.type),V=Object.keys(ed).includes(D.type)||D.name.endsWith(".glb")||D.name.endsWith(".gltf");try{if(V){const X=URL.createObjectURL(D);n("model3d"),i(X),c({width:0,height:0,fileName:D.name,fileSize:D.size}),r("MODEL3D_LOADED")}else if(M){if(D.type==="image/gif"&&await Ug(D)){try{const ce=await Dg(D),ye=document.createElement("canvas");ye.width=ce.width,ye.height=ce.height,ye.getContext("2d").putImageData(ce.frames[0].imageData,0,0);const ee=new Image;ee.onload=()=>{n("gif"),i(ee),m(ce),c({width:ce.width,height:ce.height,frameCount:ce.frames.length,duration:ce.totalDuration/1e3,fileName:D.name,fileSize:D.size}),r("GIF_LOADED")},ee.src=ye.toDataURL()}catch(ce){console.error("Failed to decode GIF:",ce),f("Failed to decode animated GIF")}return}const B=new Image,G=URL.createObjectURL(D);B.onload=()=>{n("image"),i(B),m(null),c({width:B.naturalWidth,height:B.naturalHeight,fileName:D.name,fileSize:D.size}),r("IMAGE_LOADED")},B.onerror=()=>{URL.revokeObjectURL(G),f("Failed to load image")},B.src=G}else if(Y){const X=document.createElement("video"),B=URL.createObjectURL(D);X.onloadeddata=()=>{n("video"),i(X),c({width:X.videoWidth,height:X.videoHeight,duration:X.duration,fileName:D.name,fileSize:D.size}),r("VIDEO_LOADED"),X.muted=!0,X.loop=!0,X.play().catch(()=>{})},X.ontimeupdate=()=>{v(X.currentTime)},X.onplay=()=>{g(!0)},X.onpause=()=>{g(!1)},X.onerror=()=>{URL.revokeObjectURL(B),f("Failed to load video")},X.src=B,X.playsInline=!0,X.muted=!0,X.autoplay=!0,X.load()}}catch{f("Failed to process file")}},[n,r,i,s,c,f,m,v,g]),{getRootProps:w,getInputProps:E,isDragActive:A}=Eg({onDrop:C,accept:gS,maxFiles:1,multiple:!1});return h.jsx(jr,{title:"Input",children:h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx(r3,{status:t.status}),t.type!=="none"&&h.jsx("button",{onClick:p,className:"text-term-text-dim hover:text-red-400 text-xs transition-colors",children:"Clear"})]}),t.metadata&&h.jsxs("div",{className:"text-xs space-y-1",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-term-text-dim",children:"Resolution"}),h.jsxs("span",{className:"text-term-text font-mono",children:[t.metadata.width," x ",t.metadata.height]})]}),t.metadata.duration&&h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-term-text-dim",children:"Duration"}),h.jsxs("span",{className:"text-term-text font-mono",children:[t.metadata.duration.toFixed(1),"s"]})]}),t.metadata.fileName&&h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-term-text-dim",children:"File"}),h.jsx("span",{className:"text-term-text truncate max-w-[120px]",title:t.metadata.fileName,children:t.metadata.fileName})]})]}),t.error&&h.jsx("div",{className:"text-red-400 text-xs",children:t.error}),t.type==="model3d"&&h.jsxs("div",{className:"space-y-1 pt-2 border-t border-term-border",children:[h.jsx("p",{className:"text-term-text-dim text-xs mb-2",children:"Model Settings"}),h.jsx(ot,{label:"Auto Rotate",checked:b.autoRotate,onChange:T=>y({autoRotate:T})}),h.jsx(Z,{label:"Rotate Speed",value:b.rotateSpeed,min:0,max:3,step:.1,onChange:T=>y({rotateSpeed:T})}),h.jsx(Z,{label:"Ambient Light",value:b.ambientIntensity,min:0,max:2,step:.1,onChange:T=>y({ambientIntensity:T})}),h.jsx(Z,{label:"Direct Light",value:b.directionalIntensity,min:0,max:3,step:.1,onChange:T=>y({directionalIntensity:T})}),h.jsx(ot,{label:"Wireframe",checked:b.wireframe,onChange:T=>y({wireframe:T})})]}),h.jsxs("div",{...w(),onMouseEnter:n3,className:`
            border border-dashed p-4 text-center cursor-pointer transition-colors
            ${A?"border-term-text-dim bg-term-panel":"border-term-border hover:border-term-text-dim"}
          `,children:[h.jsx("input",{...E()}),h.jsxs("div",{className:"space-y-1",children:[h.jsx("p",{className:"text-term-text-dim text-xs",children:A?"Drop file here":"Drop file or click to browse"}),h.jsx("p",{className:"text-term-text-dim text-xs opacity-50",children:"PNG, JPG, GIF, MP4, WebM, GLB"})]})]})]})})},i3=[{id:"ascii",name:"ASCII"},{id:"dithering",name:"Dithering"},{id:"halftone",name:"Halftone"},{id:"matrixRain",name:"Matrix Rain"},{id:"dots",name:"Dots"},{id:"contour",name:"Contour"},{id:"pixelSort",name:"Pixel Sort"},{id:"blockify",name:"Blockify"},{id:"threshold",name:"Threshold"},{id:"edgeDetection",name:"Edge Detection"},{id:"crosshatch",name:"Crosshatch"},{id:"waveLines",name:"Wave Lines"},{id:"noiseField",name:"Noise Field"},{id:"voronoi",name:"Voronoi"},{id:"vhs",name:"VHS"}],K0=()=>{const t=J(r=>r.effects.active),n=J(r=>r.setActiveEffect);return h.jsx(jr,{title:"Effects",children:h.jsx("div",{className:"space-y-0.5",children:i3.map(r=>{const i=t===r.id;return h.jsxs("button",{onClick:()=>n(r.id),className:`
                w-full flex items-center gap-2 px-2 py-1.5
                transition-colors text-left text-xs leading-none
                ${i?"text-term-text-bright bg-term-panel":"text-term-text-dim hover:text-term-text"}
              `,children:[h.jsx("span",{className:"w-4 text-center opacity-50 text-[10px]",children:i?"●":"○"}),h.jsx("span",{className:"leading-none",children:r.name})]},r.id)})})})},Uf=k.memo(()=>{const[t,n]=k.useState(""),[r,i]=k.useState(!1),s=J(A=>A.settings),c=J(A=>A.presets),f=J(A=>A.presets.activeId),m=J(A=>A.loadSettings),p=J(A=>A.setActivePreset),v=J(A=>A.addCustomPreset),g=J(A=>A.deleteCustomPreset),b=()=>{if(t.trim()){const A={id:`custom-${Date.now()}`,name:t.trim(),settings:{...s},isBuiltIn:!1,createdAt:Date.now()};v(A),n(""),i(!1)}},y=A=>{m(A.settings),p(A.id)},C=()=>{const A=JSON.stringify(c.custom,null,2),T=new Blob([A],{type:"application/json"}),D=URL.createObjectURL(T),M=document.createElement("a");M.href=D,M.download="ascii-presets.json",M.click(),URL.revokeObjectURL(D)},w=A=>{const T=A.target.files?.[0];if(!T)return;const D=new FileReader;D.onload=M=>{try{JSON.parse(M.target?.result).forEach(V=>{const X={id:`custom-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:V.name,settings:V.settings,isBuiltIn:!1,createdAt:Date.now()};v(X)})}catch{console.error("Failed to import presets")}},D.readAsText(T),A.target.value=""},E=({preset:A,isBuiltIn:T})=>{const D=f===A.id;return h.jsxs("div",{className:`
          flex items-center justify-between px-2 py-1.5 transition-colors
          ${D?"text-term-text-bright":"text-term-text-dim hover:text-term-text"}
        `,children:[h.jsxs("button",{onClick:()=>y(A),className:"flex-1 text-left flex items-center gap-2",children:[h.jsx("span",{className:"opacity-50",children:D?"●":"○"}),h.jsx("span",{className:"text-xs",children:A.name}),T&&h.jsx("span",{className:"text-xs text-term-text-dim opacity-50",children:"(built-in)"})]}),!T&&h.jsx("button",{onClick:()=>g(A.id),className:"text-term-text-dim hover:text-red-400 text-sm ml-2 transition-colors",children:"×"})]})};return h.jsx(jr,{title:"Presets",defaultExpanded:!1,children:h.jsxs("div",{className:"space-y-4",children:[h.jsx(Ae,{title:"Built-in",children:h.jsx("div",{className:"space-y-0.5",children:c.builtIn.map(A=>h.jsx(E,{preset:A,isBuiltIn:!0},A.id))})}),h.jsx(Ae,{title:"Custom",children:c.custom.length===0?h.jsx("p",{className:"text-term-text-dim text-xs py-2",children:"No custom presets saved"}):h.jsx("div",{className:"space-y-0.5",children:c.custom.map(A=>h.jsx(E,{preset:A,isBuiltIn:!1},A.id))})}),r?h.jsxs("div",{className:"space-y-3 pt-3 border-t border-term-border",children:[h.jsx(ad,{label:"Name",value:t,onChange:n,placeholder:"Enter name..."}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx(Ul,{size:"sm",variant:"primary",onClick:b,fullWidth:!0,children:"Save"}),h.jsx(Ul,{size:"sm",variant:"ghost",onClick:()=>i(!1),fullWidth:!0,children:"Cancel"})]})]}):h.jsx(Ul,{size:"sm",variant:"secondary",onClick:()=>i(!0),fullWidth:!0,children:"Save Current Settings"}),h.jsxs("div",{className:"flex gap-2 pt-3 border-t border-term-border",children:[h.jsx(Ul,{size:"sm",variant:"ghost",onClick:C,fullWidth:!0,children:"Export"}),h.jsxs("label",{className:"flex-1 cursor-pointer",children:[h.jsx("span",{className:"block w-full px-2 py-1 text-xs text-center border border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim transition-colors",children:"Import"}),h.jsx("input",{type:"file",accept:".json",onChange:w,className:"hidden"})]})]})]})})});Uf.displayName="PresetsPanel";const Tn={standard:" .:-=+*#%@",blocks:" ░▒▓█",binary:" 01",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",minimal:" .:#",alphabetic:" .icotCOXWM",numeric:" 1234567890",math:" .-+×÷=≠<>≤≥∞∑∏√∫",emoji:" ·•○◎●◐◑◒◓◔◕◖◗",custom:" .:+*#@"},Mg={standard:"STANDARD",blocks:"BLOCKS",binary:"BINARY",detailed:"DETAILED",minimal:"MINIMAL",alphabetic:"ALPHABETIC",numeric:"NUMERIC",math:"MATH",emoji:"SYMBOLS",custom:"CUSTOM"},l3=Object.entries(Mg).map(([t,n])=>({value:t,label:n})),o3=()=>{const t=pg(),n=bS(),r=yS(),i=J(f=>f.updateCharacterSettings),s=J(f=>f.updateImageSettings),c=J(f=>f.updateColorSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"ASCII",children:[h.jsx(Z,{label:"Scale",value:t.scale,min:Te.minCharacterScale,max:Te.maxCharacterScale,step:1,onChange:f=>i({scale:f})}),h.jsx(Z,{label:"Spacing",value:t.spacing,min:Te.minSpacing,max:Te.maxSpacing,step:.05,onChange:f=>i({spacing:f})}),h.jsx(Z,{label:"Output Width",value:t.outputWidth,min:Te.minOutputWidth,max:Te.maxOutputWidth,step:10,showReset:!0,defaultValue:Ge.character.outputWidth,onChange:f=>i({outputWidth:f})}),h.jsx(We,{label:"Character Set",value:t.set,options:l3,onChange:f=>i({set:f})}),t.set==="custom"&&h.jsx(ad,{label:"Custom Chars",value:t.customChars,onChange:f=>i({customChars:f}),placeholder:" .:+*#@"})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:n.brightness,min:Te.minBrightness,max:Te.maxBrightness,step:1,showReset:!0,defaultValue:Ge.image.brightness,onChange:f=>s({brightness:f})}),h.jsx(Z,{label:"Contrast",value:n.contrast,min:Te.minContrast,max:Te.maxContrast,step:1,showReset:!0,defaultValue:Ge.image.contrast,onChange:f=>s({contrast:f})}),h.jsx(Z,{label:"Saturation",value:n.saturation,min:Te.minSaturation,max:Te.maxSaturation,step:1,showReset:!0,defaultValue:Ge.image.saturation,onChange:f=>s({saturation:f})}),h.jsx(Z,{label:"Hue Rotation",value:n.hue,min:Te.minHue,max:Te.maxHue,step:1,showReset:!0,defaultValue:Ge.image.hue,onChange:f=>s({hue:f}),unit:"°"}),h.jsx(Z,{label:"Sharpness",value:n.sharpness,min:Te.minSharpness,max:Te.maxSharpness,step:1,showReset:!0,defaultValue:Ge.image.sharpness,onChange:f=>s({sharpness:f})}),h.jsx(Z,{label:"Gamma",value:n.gamma,min:Te.minGamma,max:Te.maxGamma,step:.1,showReset:!0,defaultValue:Ge.image.gamma,onChange:f=>s({gamma:f})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:r.colorMode,options:[{value:"mono",label:"Mono"},{value:"original",label:"Original"}],onChange:f=>c({colorMode:f,useOriginal:f==="original"})}),r.colorMode==="mono"&&h.jsx(gt,{label:"Character Color",value:r.custom,onChange:f=>c({custom:f})}),h.jsx(gt,{label:"Background",value:r.backgroundColor,onChange:f=>c({backgroundColor:f})}),h.jsx(Z,{label:"Intensity",value:r.intensity,min:Te.minColorIntensity,max:Te.maxColorIntensity,step:.1,onChange:f=>c({intensity:f})})]})]})},s3=()=>{const t=ea(),n=J(r=>r.updateHalftoneSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Halftone",children:[h.jsx(We,{label:"Shape",value:t.halftone.shape,options:[{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"diamond",label:"Diamond"},{value:"line",label:"Line"}],onChange:r=>n({shape:r})}),h.jsx(Z,{label:"Dot Scale",value:t.halftone.dotScale,min:.5,max:2,step:.1,onChange:r=>n({dotScale:r})}),h.jsx(Z,{label:"Spacing",value:t.halftone.spacing,min:1,max:20,step:1,onChange:r=>n({spacing:r})}),h.jsx(Z,{label:"Angle",value:t.halftone.angle,min:0,max:90,step:5,onChange:r=>n({angle:r}),unit:"°"}),h.jsx(ot,{label:"Invert",checked:t.halftone.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.halftone.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.halftone.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.halftone.colorMode,options:[{value:"bw",label:"Mono"},{value:"color",label:"Original"}],onChange:r=>n({colorMode:r})}),t.halftone.colorMode==="bw"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Foreground",value:t.halftone.fgColor,onChange:r=>n({fgColor:r})}),h.jsx(gt,{label:"Background",value:t.halftone.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},c3=()=>{const t=ea(),n=J(r=>r.updatePixelSortSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Pixel Sort",children:[h.jsx(We,{label:"Direction",value:t.pixelSort.direction,options:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"},{value:"diagonal",label:"Diagonal"}],onChange:r=>n({direction:r})}),h.jsx(We,{label:"Sort Mode",value:t.pixelSort.mode,options:[{value:"brightness",label:"Brightness"},{value:"hue",label:"Hue"},{value:"saturation",label:"Saturation"}],onChange:r=>n({mode:r})}),h.jsx(Z,{label:"Threshold",value:t.pixelSort.threshold,min:0,max:.5,step:.05,onChange:r=>n({threshold:r})}),h.jsx(Z,{label:"Streak Length",value:t.pixelSort.streakLength,min:10,max:300,step:10,onChange:r=>n({streakLength:r})}),h.jsx(Z,{label:"Intensity",value:t.pixelSort.intensity,min:0,max:1,step:.05,onChange:r=>n({intensity:r})}),h.jsx(Z,{label:"Randomness",value:t.pixelSort.randomness,min:0,max:1,step:.05,onChange:r=>n({randomness:r})}),h.jsx(ot,{label:"Reverse",checked:t.pixelSort.reverse,onChange:r=>n({reverse:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.pixelSort.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.pixelSort.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]})]})},u3=()=>{const t=ea(),n=J(r=>r.updateWaveLinesSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Wave Lines",children:[h.jsx(Z,{label:"Line Count",value:t.waveLines.lineCount,min:10,max:150,step:5,onChange:r=>n({lineCount:r})}),h.jsx(Z,{label:"Amplitude",value:t.waveLines.amplitude,min:5,max:50,step:1,onChange:r=>n({amplitude:r})}),h.jsx(Z,{label:"Frequency",value:t.waveLines.frequency,min:.5,max:3,step:.1,onChange:r=>n({frequency:r})}),h.jsx(Z,{label:"Line Thickness",value:t.waveLines.lineThickness,min:.5,max:3,step:.1,onChange:r=>n({lineThickness:r})}),h.jsx(We,{label:"Direction",value:t.waveLines.direction,options:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}],onChange:r=>n({direction:r})}),h.jsx(ot,{label:"Animate",checked:t.waveLines.animate,onChange:r=>n({animate:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.waveLines.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.waveLines.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.waveLines.colorMode,options:[{value:"custom",label:"Mono"},{value:"original",label:"Original"}],onChange:r=>n({colorMode:r})}),t.waveLines.colorMode==="custom"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Line Color",value:t.waveLines.fgColor,onChange:r=>n({fgColor:r})}),h.jsx(gt,{label:"Background",value:t.waveLines.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},f3=()=>{const t=ea(),n=J(i=>i.updateDitheringSettings),{dithering:r}=t;return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Dithering",children:[h.jsx(We,{label:"Algorithm",value:r.method,options:[{value:"floydSteinberg",label:"Floyd-Steinberg"},{value:"atkinson",label:"Atkinson"},{value:"jarvisJudiceNinke",label:"Jarvis-Judice-Ninke"},{value:"stucki",label:"Stucki"},{value:"burkes",label:"Burkes"},{value:"sierra",label:"Sierra"},{value:"sierraTwoRow",label:"Sierra Two-Row"},{value:"sierraLite",label:"Sierra Lite"},{value:"bayer2x2",label:"Bayer 2x2"},{value:"bayer4x4",label:"Bayer 4x4"},{value:"bayer8x8",label:"Bayer 8x8"},{value:"bayer16x16",label:"Bayer 16x16"},{value:"clusteredDot",label:"Clustered Dot"},{value:"blueNoise",label:"Blue Noise"},{value:"interleavedGradient",label:"Interleaved Gradient"},{value:"crosshatch",label:"Crosshatch"}],onChange:i=>n({method:i})}),h.jsx(Z,{label:"Intensity",value:r.intensity,min:.1,max:2,step:.05,onChange:i=>n({intensity:i})}),(r.colorMode==="tonal"||r.colorMode==="rgb")&&h.jsx(Z,{label:"Levels",value:r.colorLevels,min:2,max:32,step:1,onChange:i=>n({colorLevels:i})}),(r.method.startsWith("bayer")||r.method==="ordered"||r.method==="clusteredDot")&&h.jsx(We,{label:"Matrix Size",value:String(r.matrixSize),options:[{value:"2",label:"2x2 (Coarse)"},{value:"4",label:"4x4 (Medium)"},{value:"8",label:"8x8 (Fine)"},{value:"16",label:"16x16 (Very Fine)"}],onChange:i=>n({matrixSize:Number(i)})}),r.method==="crosshatch"&&h.jsxs(h.Fragment,{children:[h.jsx(Z,{label:"Line Weight",value:r.lineWeight,min:.1,max:1,step:.05,onChange:i=>n({lineWeight:i})}),h.jsx(Z,{label:"Line Spacing",value:r.lineSpacing,min:1,max:50,step:1,onChange:i=>n({lineSpacing:i})}),h.jsx(Z,{label:"Layers",value:r.layers,min:1,max:4,step:1,onChange:i=>n({layers:i})})]}),h.jsx(ot,{label:"Modulation",checked:r.modulation.enabled,onChange:i=>n({modulation:{...r.modulation,enabled:i}})}),r.modulation.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(We,{label:"Mod Type",value:r.modulation.type,options:[{value:"wave",label:"Wave"},{value:"grid",label:"Grid"},{value:"radial",label:"Radial"},{value:"horizontal",label:"Horizontal"},{value:"rgbSplit",label:"RGB Split"}],onChange:i=>n({modulation:{...r.modulation,type:i}})}),h.jsx(Z,{label:"Mod Frequency",value:r.modulation.frequency,min:1,max:20,step:1,onChange:i=>n({modulation:{...r.modulation,frequency:i}})}),h.jsx(Z,{label:"Mod Amplitude",value:r.modulation.amplitude,min:0,max:10,step:.1,onChange:i=>n({modulation:{...r.modulation,amplitude:i}})})]})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:r.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:i=>n({brightness:i})}),h.jsx(Z,{label:"Contrast",value:r.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:i=>n({contrast:i})}),h.jsx(Z,{label:"Gamma",value:r.gamma,min:.5,max:2,step:.05,showReset:!0,defaultValue:1,onChange:i=>n({gamma:i})}),h.jsx(Z,{label:"Sharpen",value:r.sharpen,min:-1,max:1,step:.1,showReset:!0,defaultValue:0,onChange:i=>n({sharpen:i})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:r.colorMode,options:[{value:"mono",label:"Mono"},{value:"tonal",label:"Tonal"},{value:"indexed",label:"Palette"},{value:"rgb",label:"RGB"},{value:"original",label:"Original"}],onChange:i=>n({colorMode:i})}),r.colorMode==="indexed"&&h.jsx(kg,{value:r.palette,onChange:i=>n({palette:i}),customPalette:r.customPalette,onCustomPaletteChange:i=>n({customPalette:i})}),(r.colorMode==="mono"||r.colorMode==="tonal")&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Foreground",value:r.foregroundColor,onChange:i=>n({foregroundColor:i})}),h.jsx(gt,{label:"Background",value:r.backgroundColor,onChange:i=>n({backgroundColor:i})})]}),r.colorMode==="original"&&h.jsx(gt,{label:"Background",value:r.backgroundColor,onChange:i=>n({backgroundColor:i})}),r.colorMode==="rgb"&&h.jsx(Z,{label:"Color Depth",value:r.paletteSize,min:2,max:64,step:1,onChange:i=>n({paletteSize:i})})]}),h.jsxs(Ae,{title:"Chromatic Effects",children:[h.jsx(ot,{label:"Enabled",checked:r.chromatic?.enabled??!1,onChange:i=>n({chromatic:{...r.chromatic,enabled:i}})}),h.jsx(Z,{label:"Max Displace",value:r.chromatic?.maxDisplace??6,min:0,max:50,step:1,unit:"px",onChange:i=>n({chromatic:{...r.chromatic,maxDisplace:i}})}),h.jsx(Z,{label:"Red Channel",value:r.chromatic?.redChannel??23,min:0,max:360,step:1,onChange:i=>n({chromatic:{...r.chromatic,redChannel:i}})}),h.jsx(Z,{label:"Green Channel",value:r.chromatic?.greenChannel??50,min:0,max:360,step:1,onChange:i=>n({chromatic:{...r.chromatic,greenChannel:i}})}),h.jsx(Z,{label:"Blue Channel",value:r.chromatic?.blueChannel??80,min:0,max:360,step:1,onChange:i=>n({chromatic:{...r.chromatic,blueChannel:i}})}),h.jsx("button",{onClick:()=>n({chromatic:{enabled:!1,maxDisplace:6,redChannel:23,greenChannel:50,blueChannel:80}}),className:"text-term-text-dim hover:text-term-text text-xs transition-colors",children:"Reset"})]})]})},d3=()=>{const t=ea(),n=J(r=>r.updateDotsSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Dots",children:[h.jsx(We,{label:"Shape",value:t.dots.shape,options:[{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"diamond",label:"Diamond"}],onChange:r=>n({shape:r})}),h.jsx(We,{label:"Grid Type",value:t.dots.gridType,options:[{value:"square",label:"Square Grid"},{value:"hex",label:"Hexagonal Grid"}],onChange:r=>n({gridType:r})}),h.jsx(Z,{label:"Size",value:t.dots.sizeMultiplier,min:.5,max:2,step:.1,onChange:r=>n({sizeMultiplier:r})}),h.jsx(Z,{label:"Spacing",value:t.dots.spacing,min:.5,max:2,step:.1,onChange:r=>n({spacing:r})}),h.jsx(ot,{label:"Invert",checked:t.dots.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.dots.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.dots.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.dots.colorMode,options:[{value:"custom",label:"Mono"},{value:"original",label:"Original"}],onChange:r=>n({colorMode:r})}),t.dots.colorMode==="custom"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Dot Color",value:t.dots.fgColor,onChange:r=>n({fgColor:r})}),h.jsx(gt,{label:"Background",value:t.dots.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},p3=()=>{const t=ea(),n=J(r=>r.updateContourSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Contour",children:[h.jsx(We,{label:"Fill Mode",value:t.contour.fillMode,options:[{value:"filled",label:"Filled Bands"},{value:"lines",label:"Lines Only"}],onChange:r=>n({fillMode:r})}),h.jsx(Z,{label:"Levels",value:t.contour.levels,min:3,max:20,step:1,onChange:r=>n({levels:r})}),h.jsx(Z,{label:"Line Thickness",value:t.contour.lineThickness,min:.5,max:3,step:.25,onChange:r=>n({lineThickness:r})}),h.jsx(ot,{label:"Invert",checked:t.contour.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.contour.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.contour.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.contour.colorMode,options:[{value:"custom",label:"Mono"},{value:"original",label:"Original"}],onChange:r=>n({colorMode:r})}),t.contour.colorMode==="custom"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Line Color",value:t.contour.lineColor,onChange:r=>n({lineColor:r})}),h.jsx(gt,{label:"Background",value:t.contour.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},m3=()=>{const t=ea(),n=J(r=>r.updateEdgeDetectionSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Edge Detection",children:[h.jsx(We,{label:"Algorithm",value:t.edgeDetection.algorithm,options:[{value:"sobel",label:"Sobel"},{value:"prewitt",label:"Prewitt"},{value:"laplacian",label:"Laplacian"}],onChange:r=>n({algorithm:r})}),h.jsx(Z,{label:"Threshold",value:t.edgeDetection.threshold,min:.1,max:.8,step:.05,onChange:r=>n({threshold:r})}),h.jsx(Z,{label:"Line Width",value:t.edgeDetection.lineWidth,min:.5,max:4,step:.5,onChange:r=>n({lineWidth:r})}),h.jsx(ot,{label:"Invert",checked:t.edgeDetection.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.edgeDetection.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.edgeDetection.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.edgeDetection.colorMode,options:[{value:"custom",label:"Mono"},{value:"original",label:"Original"}],onChange:r=>n({colorMode:r})}),t.edgeDetection.colorMode==="custom"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Edge Color",value:t.edgeDetection.edgeColor,onChange:r=>n({edgeColor:r})}),h.jsx(gt,{label:"Background",value:t.edgeDetection.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},h3=()=>{const t=ea(),n=J(r=>r.updateCrosshatchSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Crosshatch",children:[h.jsx(Z,{label:"Density",value:t.crosshatch.density,min:2,max:12,step:1,onChange:r=>n({density:r})}),h.jsx(Z,{label:"Layers",value:t.crosshatch.layers,min:1,max:4,step:1,onChange:r=>n({layers:r})}),h.jsx(Z,{label:"Angle",value:t.crosshatch.angle,min:0,max:90,step:5,onChange:r=>n({angle:r}),unit:"°"}),h.jsx(Z,{label:"Line Width",value:t.crosshatch.lineWidth,min:.5,max:3,step:.25,onChange:r=>n({lineWidth:r})}),h.jsx(Z,{label:"Randomness",value:t.crosshatch.randomness,min:0,max:1,step:.05,onChange:r=>n({randomness:r})}),h.jsx(ot,{label:"Invert",checked:t.crosshatch.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.crosshatch.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.crosshatch.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(gt,{label:"Line Color",value:t.crosshatch.fgColor,onChange:r=>n({fgColor:r})}),h.jsx(gt,{label:"Background",value:t.crosshatch.bgColor,onChange:r=>n({bgColor:r})})]})]})},v3=()=>{const t=ea(),n=J(r=>r.updateBlockifySettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Blockify",children:[h.jsx(We,{label:"Style",value:t.blockify.style,options:[{value:"full",label:"Full Blocks"},{value:"shaded",label:"Shaded"},{value:"outline",label:"Outline"}],onChange:r=>n({style:r})}),h.jsx(Z,{label:"Block Size",value:t.blockify.blockSize,min:4,max:20,step:1,onChange:r=>n({blockSize:r})}),h.jsx(Z,{label:"Border Width",value:t.blockify.borderWidth,min:0,max:3,step:.5,onChange:r=>n({borderWidth:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.blockify.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.blockify.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.blockify.colorMode,options:[{value:"color",label:"Preserve Colors"},{value:"grayscale",label:"Grayscale"}],onChange:r=>n({colorMode:r})}),t.blockify.borderWidth>0&&h.jsx(gt,{label:"Border Color",value:t.blockify.borderColor,onChange:r=>n({borderColor:r})})]})]})},g3=()=>{const t=ea(),n=J(r=>r.updateThresholdSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Threshold",children:[h.jsx(Z,{label:"Levels",value:t.threshold.levels,min:2,max:8,step:1,onChange:r=>n({levels:r})}),h.jsx(Z,{label:"Threshold Point",value:t.threshold.thresholdPoint,min:.1,max:.9,step:.05,onChange:r=>n({thresholdPoint:r})}),h.jsx(ot,{label:"Dither",checked:t.threshold.dither,onChange:r=>n({dither:r})}),h.jsx(ot,{label:"Invert",checked:t.threshold.invert,onChange:r=>n({invert:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.threshold.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.threshold.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]}),h.jsxs(Ae,{title:"Color",children:[h.jsx(We,{label:"Mode",value:t.threshold.colorMode,options:[{value:"custom",label:"Mono"},{value:"color",label:"Original"}],onChange:r=>n({colorMode:r})}),t.threshold.colorMode==="custom"&&h.jsxs(h.Fragment,{children:[h.jsx(gt,{label:"Foreground",value:t.threshold.fgColor,onChange:r=>n({fgColor:r})}),h.jsx(gt,{label:"Background",value:t.threshold.bgColor,onChange:r=>n({bgColor:r})})]})]})]})},x3=()=>{const t=ea(),n=J(r=>r.updateNoiseFieldSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Noise Field",children:[h.jsx(We,{label:"Noise Type",value:t.noiseField.noiseType,options:[{value:"perlin",label:"Perlin"},{value:"simplex",label:"Simplex"},{value:"worley",label:"Worley"}],onChange:r=>n({noiseType:r})}),h.jsx(Z,{label:"Scale",value:t.noiseField.scale,min:10,max:100,step:5,onChange:r=>n({scale:r})}),h.jsx(Z,{label:"Intensity",value:t.noiseField.intensity,min:.5,max:3,step:.1,onChange:r=>n({intensity:r})}),h.jsx(Z,{label:"Octaves",value:t.noiseField.octaves,min:1,max:8,step:1,onChange:r=>n({octaves:r})}),h.jsx(Z,{label:"Speed",value:t.noiseField.speed,min:.1,max:3,step:.1,onChange:r=>n({speed:r})}),h.jsx(ot,{label:"Animate",checked:t.noiseField.animate,onChange:r=>n({animate:r})}),h.jsx(ot,{label:"Distort Only",checked:t.noiseField.distortOnly,onChange:r=>n({distortOnly:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.noiseField.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.noiseField.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]})]})},b3=Object.entries(Mg).map(([t,n])=>({value:t,label:n})),y3=()=>{const t=ea(),n=J(r=>r.updateMatrixRainSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Matrix Rain",children:[h.jsx(We,{label:"Character Set",value:t.matrixRain.characterSet,options:b3,onChange:r=>n({characterSet:r})}),t.matrixRain.characterSet==="custom"&&h.jsx(ad,{label:"Custom Chars",value:t.matrixRain.customChars,onChange:r=>n({customChars:r}),placeholder:"Enter characters..."}),h.jsx(Z,{label:"Cell Size",value:t.matrixRain.cellSize,min:4,max:32,step:1,onChange:r=>n({cellSize:r})}),h.jsx(Z,{label:"Spacing",value:t.matrixRain.spacing,min:0,max:1,step:.05,onChange:r=>n({spacing:r})}),h.jsx(Z,{label:"Speed",value:t.matrixRain.speed,min:.5,max:3,step:.1,onChange:r=>n({speed:r})}),h.jsx(Z,{label:"Trail Length",value:t.matrixRain.trailLength,min:5,max:30,step:1,onChange:r=>n({trailLength:r})}),h.jsx(We,{label:"Direction",value:t.matrixRain.direction,options:[{value:"down",label:"Down"},{value:"up",label:"Up"},{value:"left",label:"Left"},{value:"right",label:"Right"}],onChange:r=>n({direction:r})}),h.jsx(Z,{label:"Glow",value:t.matrixRain.glowIntensity,min:0,max:2,step:.1,onChange:r=>n({glowIntensity:r})}),h.jsx(Z,{label:"BG Opacity",value:t.matrixRain.bgOpacity,min:0,max:1,step:.05,onChange:r=>n({bgOpacity:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.matrixRain.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.matrixRain.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})}),h.jsx(Z,{label:"Threshold",value:t.matrixRain.threshold,min:0,max:.5,step:.01,showReset:!0,defaultValue:0,onChange:r=>n({threshold:r})})]}),h.jsx(Ae,{title:"Color",children:h.jsx(gt,{label:"Rain Color",value:t.matrixRain.rainColor,onChange:r=>n({rainColor:r})})})]})},S3=()=>{const t=ea(),n=J(r=>r.updateVhsSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"VHS",children:[h.jsx(Z,{label:"Distortion",value:t.vhs.distortion,min:0,max:1,step:.05,onChange:r=>n({distortion:r})}),h.jsx(Z,{label:"Noise",value:t.vhs.noise,min:0,max:1,step:.05,onChange:r=>n({noise:r})}),h.jsx(Z,{label:"Color Bleed",value:t.vhs.colorBleed,min:0,max:1,step:.05,onChange:r=>n({colorBleed:r})}),h.jsx(Z,{label:"Scanlines",value:t.vhs.scanlines,min:0,max:1,step:.05,onChange:r=>n({scanlines:r})}),h.jsx(Z,{label:"Tracking Error",value:t.vhs.trackingError,min:0,max:1,step:.05,onChange:r=>n({trackingError:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.vhs.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.vhs.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]})]})},C3=()=>{const t=ea(),n=J(r=>r.updateVoronoiSettings);return h.jsxs(h.Fragment,{children:[h.jsxs(Ae,{title:"Voronoi",children:[h.jsx(Z,{label:"Cell Size",value:t.voronoi.cellSize,min:10,max:100,step:5,onChange:r=>n({cellSize:r})}),h.jsx(Z,{label:"Edge Width",value:t.voronoi.edgeWidth,min:0,max:1,step:.05,onChange:r=>n({edgeWidth:r})}),h.jsx(We,{label:"Edge Color",value:String(t.voronoi.edgeColor),options:[{value:"0",label:"Black"},{value:"1",label:"White"},{value:"2",label:"Darkened"}],onChange:r=>n({edgeColor:Number(r)})}),h.jsx(We,{label:"Color Mode",value:String(t.voronoi.colorMode),options:[{value:"0",label:"Cell Average"},{value:"1",label:"Center Sample"},{value:"2",label:"Gradient"}],onChange:r=>n({colorMode:Number(r)})}),h.jsx(Z,{label:"Randomize",value:t.voronoi.randomize,min:0,max:1,step:.05,onChange:r=>n({randomize:r})})]}),h.jsxs(Ae,{title:"Adjustments",children:[h.jsx(Z,{label:"Brightness",value:t.voronoi.brightness,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({brightness:r})}),h.jsx(Z,{label:"Contrast",value:t.voronoi.contrast,min:-100,max:100,step:1,showReset:!0,defaultValue:0,onChange:r=>n({contrast:r})})]})]})},T3={ascii:o3,halftone:s3,pixelSort:c3,waveLines:u3,dithering:f3,dots:d3,contour:p3,edgeDetection:m3,crosshatch:h3,blockify:v3,threshold:g3,noiseField:x3,matrixRain:y3,vhs:S3,voronoi:C3},Mf=k.memo(()=>{const t=TS(),n=J(c=>c.resetSettings),r=J(c=>c.resetEffectSettings),i=()=>{t==="ascii"?n():r()},s=T3[t];return h.jsx(jr,{title:"Settings",headerRight:h.jsx("button",{onClick:i,className:"text-term-text-dim hover:text-term-text text-xs transition-colors",children:"Reset"}),children:h.jsx("div",{className:"space-y-4",children:h.jsx(s,{})})})});Mf.displayName="SettingsPanel";const J0=()=>{const t=SS(),n=J(r=>r.updateAdvancedSettings);return h.jsx(jr,{title:"Processing",defaultExpanded:!1,children:h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Invert",checked:t.invert,onChange:r=>n({invert:r})}),h.jsx(Z,{label:"Brightness Map",value:t.brightnessMapping,min:Te.minBrightnessMapping,max:Te.maxBrightnessMapping,step:.05,onChange:r=>n({brightnessMapping:r})}),h.jsx(Z,{label:"Edge Enhance",value:t.edgeEnhance,min:Te.minEdgeEnhance,max:Te.maxEdgeEnhance,step:1,onChange:r=>n({edgeEnhance:r})}),h.jsx(Z,{label:"Blur",value:t.blur,min:Te.minBlur,max:Te.maxBlur,step:.5,onChange:r=>n({blur:r})}),h.jsx(Z,{label:"Quantize Colors",value:t.quantizeColors,min:Te.minQuantizeColors,max:Te.maxQuantizeColors,step:1,onChange:r=>n({quantizeColors:r})}),h.jsx(Z,{label:"Shape Matching",value:t.spatialWeight,min:Te.minSpatialWeight,max:Te.maxSpatialWeight,step:.05,onChange:r=>n({spatialWeight:r})})]})})},w3=[{value:"green",label:"Green"},{value:"amber",label:"Amber"},{value:"white",label:"White"},{value:"custom",label:"Custom"}],Lf=k.memo(()=>{const t=CS(),n=J(r=>r.updatePostProcessingSettings);return h.jsx(jr,{title:"Post-Processing",defaultExpanded:!1,children:h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Bloom",checked:t.bloom.enabled,onChange:r=>n({bloom:{...t.bloom,enabled:r}})}),t.bloom.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(Z,{label:"Threshold",value:t.bloom.threshold,min:0,max:1,step:.05,onChange:r=>n({bloom:{...t.bloom,threshold:r}})}),h.jsx(Z,{label:"Soft Threshold",value:t.bloom.softThreshold,min:0,max:1,step:.05,onChange:r=>n({bloom:{...t.bloom,softThreshold:r}})}),h.jsx(Z,{label:"Intensity",value:t.bloom.intensity,min:0,max:2,step:.1,onChange:r=>n({bloom:{...t.bloom,intensity:r}})}),h.jsx(Z,{label:"Radius",value:t.bloom.radius,min:1,max:20,step:1,onChange:r=>n({bloom:{...t.bloom,radius:r}})})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Grain",checked:t.grain.enabled,onChange:r=>n({grain:{...t.grain,enabled:r}})}),t.grain.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(Z,{label:"Intensity",value:t.grain.intensity,min:Te.minGrainIntensity,max:Te.maxGrainIntensity,step:1,onChange:r=>n({grain:{...t.grain,intensity:r}})}),h.jsx(Z,{label:"Size",value:t.grain.size,min:Te.minGrainSize,max:Te.maxGrainSize,step:1,onChange:r=>n({grain:{...t.grain,size:r}})}),h.jsx(Z,{label:"Speed",value:t.grain.speed,min:Te.minGrainSpeed,max:Te.maxGrainSpeed,step:1,onChange:r=>n({grain:{...t.grain,speed:r}})})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Chromatic",checked:t.chromatic.enabled,onChange:r=>n({chromatic:{...t.chromatic,enabled:r}})}),t.chromatic.enabled&&h.jsx(Z,{label:"Offset",value:t.chromatic.offset,min:Te.minChromaticOffset,max:Te.maxChromaticOffset,step:1,onChange:r=>n({chromatic:{...t.chromatic,offset:r}})})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Scanlines",checked:t.scanlines.enabled,onChange:r=>n({scanlines:{...t.scanlines,enabled:r}})}),t.scanlines.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(Z,{label:"Opacity",value:t.scanlines.opacity,min:Te.minScanlineOpacity,max:Te.maxScanlineOpacity,step:.05,onChange:r=>n({scanlines:{...t.scanlines,opacity:r}})}),h.jsx(Z,{label:"Spacing",value:t.scanlines.spacing,min:Te.minScanlineSpacing,max:Te.maxScanlineSpacing,step:1,onChange:r=>n({scanlines:{...t.scanlines,spacing:r}})})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Vignette",checked:t.vignette.enabled,onChange:r=>n({vignette:{...t.vignette,enabled:r}})}),t.vignette.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(Z,{label:"Intensity",value:t.vignette.intensity,min:Te.minVignetteIntensity,max:Te.maxVignetteIntensity,step:.05,onChange:r=>n({vignette:{...t.vignette,intensity:r}})}),h.jsx(Z,{label:"Radius",value:t.vignette.radius,min:Te.minVignetteRadius,max:Te.maxVignetteRadius,step:.05,onChange:r=>n({vignette:{...t.vignette,radius:r}})})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"CRT Curve",checked:t.crtCurve.enabled,onChange:r=>n({crtCurve:{...t.crtCurve,enabled:r}})}),t.crtCurve.enabled&&h.jsx(Z,{label:"Amount",value:t.crtCurve.amount,min:Te.minCrtAmount,max:Te.maxCrtAmount,step:.01,onChange:r=>n({crtCurve:{...t.crtCurve,amount:r}})})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(ot,{label:"Phosphor",checked:t.phosphor.enabled,onChange:r=>n({phosphor:{...t.phosphor,enabled:r}})}),t.phosphor.enabled&&h.jsxs(h.Fragment,{children:[h.jsx(We,{label:"Color",value:t.phosphor.color,options:w3,onChange:r=>n({phosphor:{...t.phosphor,color:r}})}),t.phosphor.color==="custom"&&h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("label",{className:"text-xs text-term-text-dim flex-shrink-0",children:"Custom"}),h.jsx("input",{type:"color",value:t.phosphor.customColor,onChange:r=>n({phosphor:{...t.phosphor,customColor:r.target.value}}),className:"w-8 h-6 border border-term-border bg-transparent cursor-pointer"})]})]})]})]})})});Lf.displayName="PostProcessingPanel";function E3(t){return t.grid.map(n=>n.map(r=>r.char).join("")).join(`
`)}function A3(t,n="ascii-art.txt"){const r=E3(t),i=new Blob([r],{type:"text/plain;charset=utf-8"});Pl(i,n)}function Pl(t,n){const r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}class k3{static detectAvailableRenderers(){const n=[];return typeof document<"u"&&document.createElement("canvas").getContext("webgl2")&&n.push("webgl2"),n.push("cpu"),n}static async create(n,r="webgpu"){const i=this.detectAvailableRenderers(),s=[];if(r!=="none"){i.includes(r)&&s.push(r);for(const c of i)s.includes(c)||s.push(c)}for(const c of s){const f=await this.tryCreateRenderer(n,c);if(f)return f}return console.error("No suitable renderer available"),null}static async tryCreateRenderer(n,r){try{let i;switch(r){case"webgpu":{WS();const{WebGPURenderer:s}=await za(async()=>{const{WebGPURenderer:m}=await import("./index-DWlNRnaQ.js");return{WebGPURenderer:m}},[]),c=new s(n);if(!await c.init())return console.warn("WebGPU renderer initialization failed"),null;i=c;break}case"webgl2":{const{WebGL2Renderer:s}=await za(async()=>{const{WebGL2Renderer:m}=await import("./index-D4g1FOHw.js");return{WebGL2Renderer:m}},[]),c=new s(n);if(!await c.init())return console.warn("WebGL2 renderer initialization failed"),null;i=c;break}case"cpu":return null;default:return null}return{renderer:i,type:r}}catch(i){return console.error(`Failed to create ${r} renderer:`,i),null}}static getRendererSupport(){const n=this.detectAvailableRenderers();return{webgpu:n.includes("webgpu"),webgl2:n.includes("webgl2"),cpu:!0,recommended:n[0]||"none"}}}let Lg=null;function O3(t){Lg=t}function nd(){return Lg}async function $0(t,n){const r=nd();if(!r)return null;const i=r.getCurrentSource(),s=r.getSourceDimensions();if(!i||s.width===0||s.height===0)return null;const c=document.createElement("canvas");c.width=s.width,c.height=s.height;const f=c.getContext("2d",{willReadFrequently:!0});if(!f)return null;try{f.drawImage(i,0,0,s.width,s.height)}catch(T){return console.warn("[generateAsciiFromSourceImage] Failed to draw source:",T),null}const m=f.getImageData(0,0,s.width,s.height),v=t.character.scale*8*.6,g=t.character.scale*8,b=Math.floor(s.width/v),y=Math.floor(s.height/g);if(b===0||y===0)return console.warn("[generateAsciiFromSourceImage] Grid dimensions are 0"),null;const C=jg(t.color.custom||"#FFFFFF"),w=t.color.useOriginal,E=t.color.intensity,A=[];for(let T=0;T<y;T++){A[T]=[];for(let D=0;D<b;D++){const M=Math.floor(D*v+v/2),Y=Math.floor(T*g+g/2),V=zg(m.data,s.width,s.height,M,Y),X=R3(V.brightness,n,t);let B;w?B={r:Math.min(255,Math.round(V.color.r*E)),g:Math.min(255,Math.round(V.color.g*E)),b:Math.min(255,Math.round(V.color.b*E))}:B=C,A[T][D]={char:X,color:B,brightness:V.brightness}}}return{grid:A,width:b,height:y,charWidth:Math.round(v),charHeight:Math.round(g)}}async function ev(t,n,r){const i=nd();if(!i)return $0(n,r);const s=await i.getCharacterIndices();if(!s||s.indices.length===0)return $0(n,r);const{cols:c,rows:f,indices:m}=s,p=i.getCurrentSource(),v=i.getSourceDimensions();let g=null,b=v.width||1,y=v.height||1;if(p&&v.width>0&&v.height>0){const B=document.createElement("canvas");B.width=v.width,B.height=v.height;const G=B.getContext("2d",{willReadFrequently:!0});if(G)try{G.drawImage(p,0,0,v.width,v.height),g=G.getImageData(0,0,v.width,v.height),b=v.width,y=v.height}catch(ne){console.warn("Failed to read source image colors:",ne)}}const w=n.character.scale*8*.6,E=n.character.scale*8,A=c*w||1,T=f*E||1,D=b/A,M=y/T,Y=jg(n.color.custom||"#FFFFFF"),V=n.color.useOriginal,X=[];for(let B=0;B<f;B++){X[B]=[];for(let G=0;G<c;G++){const ne=B*c+G,ce=m[ne],ye=ce<r.length?r[ce]:" ";let Se=0,ee={r:128,g:128,b:128};if(g){const he=Math.floor((G+.5)*w*D),F=Math.floor((B+.5)*E*M),$=zg(g.data,g.width,g.height,he,F);Se=$.brightness,ee=$.color}let ge;if(V){const he=n.color.intensity;ge={r:Math.min(255,Math.round(ee.r*he)),g:Math.min(255,Math.round(ee.g*he)),b:Math.min(255,Math.round(ee.b*he))}}else ge=Y;X[B][G]={char:ye,color:ge,brightness:Se}}}return{grid:X,width:c,height:f,charWidth:Math.round(w),charHeight:Math.round(E)}}function zg(t,n,r,i,s){let c=0,f=0,m=0,p=0;for(let C=-1;C<=1;C++)for(let w=-1;w<=1;w++){const E=i+w,A=s+C;if(E<0||E>=n||A<0||A>=r)continue;const T=(A*n+E)*4;if(T>=t.length-3||T<0)continue;const D=t[T],M=t[T+1],Y=t[T+2];c+=D,f+=M,m+=Y,p++}if(p===0)return{brightness:0,color:{r:0,g:0,b:0}};const v=c/p,g=f/p,b=m/p;return{brightness:(.299*v+.587*g+.114*b)/255,color:{r:Math.round(v),g:Math.round(g),b:Math.round(b)}}}function R3(t,n,r){let i=Math.pow(t,r.advanced.brightnessMapping);r.advanced.invert&&(i=1-i),i=Math.max(0,Math.min(1,i));const s=Math.min(n.length-1,Math.floor(i*n.length));return n[s]||" "}function jg(t){const n=t.replace("#",""),r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),s=parseInt(n.slice(4,6),16);return{r:isNaN(r)?255:r,g:isNaN(i)?255:i,b:isNaN(s)?255:s}}String.prototype.codePointAt||(function(){var t=(function(){try{var r={},i=Object.defineProperty,s=i(r,r,r)&&i}catch{}return s})(),n=function(r){if(this==null)throw TypeError();var i=String(this),s=i.length,c=r?Number(r):0;if(c!=c&&(c=0),!(c<0||c>=s)){var f=i.charCodeAt(c),m;return f>=55296&&f<=56319&&s>c+1&&(m=i.charCodeAt(c+1),m>=56320&&m<=57343)?(f-55296)*1024+m-56320+65536:f}};t?t(String.prototype,"codePointAt",{value:n,configurable:!0,writable:!0}):String.prototype.codePointAt=n})();var rd=0,Fg=-3;function jl(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function D3(t,n){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=n,this.destLen=0,this.ltree=new jl,this.dtree=new jl}var Ng=new jl,Bg=new jl,id=new Uint8Array(30),ld=new Uint16Array(30),Ig=new Uint8Array(30),_g=new Uint16Array(30),U3=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tv=new jl,Xa=new Uint8Array(320);function Gg(t,n,r,i){var s,c;for(s=0;s<r;++s)t[s]=0;for(s=0;s<30-r;++s)t[s+r]=s/r|0;for(c=i,s=0;s<30;++s)n[s]=c,c+=1<<t[s]}function M3(t,n){var r;for(r=0;r<7;++r)t.table[r]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,r=0;r<24;++r)t.trans[r]=256+r;for(r=0;r<144;++r)t.trans[24+r]=r;for(r=0;r<8;++r)t.trans[168+r]=280+r;for(r=0;r<112;++r)t.trans[176+r]=144+r;for(r=0;r<5;++r)n.table[r]=0;for(n.table[5]=32,r=0;r<32;++r)n.trans[r]=r}var av=new Uint16Array(16);function df(t,n,r,i){var s,c;for(s=0;s<16;++s)t.table[s]=0;for(s=0;s<i;++s)t.table[n[r+s]]++;for(t.table[0]=0,c=0,s=0;s<16;++s)av[s]=c,c+=t.table[s];for(s=0;s<i;++s)n[r+s]&&(t.trans[av[n[r+s]]++]=s)}function L3(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var n=t.tag&1;return t.tag>>>=1,n}function Wa(t,n,r){if(!n)return r;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var i=t.tag&65535>>>16-n;return t.tag>>>=n,t.bitcount-=n,i+r}function zf(t,n){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=0,i=0,s=0,c=t.tag;do i=2*i+(c&1),c>>>=1,++s,r+=n.table[s],i-=n.table[s];while(i>=0);return t.tag=c,t.bitcount-=s,n.trans[r+i]}function z3(t,n,r){var i,s,c,f,m,p;for(i=Wa(t,5,257),s=Wa(t,5,1),c=Wa(t,4,4),f=0;f<19;++f)Xa[f]=0;for(f=0;f<c;++f){var v=Wa(t,3,0);Xa[U3[f]]=v}for(df(tv,Xa,0,19),m=0;m<i+s;){var g=zf(t,tv);switch(g){case 16:var b=Xa[m-1];for(p=Wa(t,2,3);p;--p)Xa[m++]=b;break;case 17:for(p=Wa(t,3,3);p;--p)Xa[m++]=0;break;case 18:for(p=Wa(t,7,11);p;--p)Xa[m++]=0;break;default:Xa[m++]=g;break}}df(n,Xa,0,i),df(r,Xa,i,s)}function nv(t,n,r){for(;;){var i=zf(t,n);if(i===256)return rd;if(i<256)t.dest[t.destLen++]=i;else{var s,c,f,m;for(i-=257,s=Wa(t,id[i],ld[i]),c=zf(t,r),f=t.destLen-Wa(t,Ig[c],_g[c]),m=f;m<f+s;++m)t.dest[t.destLen++]=t.dest[m]}}}function j3(t){for(var n,r,i;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(n=t.source[t.sourceIndex+1],n=256*n+t.source[t.sourceIndex],r=t.source[t.sourceIndex+3],r=256*r+t.source[t.sourceIndex+2],n!==(~r&65535))return Fg;for(t.sourceIndex+=4,i=n;i;--i)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,rd}function F3(t,n){var r=new D3(t,n),i,s,c;do{switch(i=L3(r),s=Wa(r,2,0),s){case 0:c=j3(r);break;case 1:c=nv(r,Ng,Bg);break;case 2:z3(r,r.ltree,r.dtree),c=nv(r,r.ltree,r.dtree);break;default:c=Fg}if(c!==rd)throw new Error("Data error")}while(!i);return r.destLen<r.dest.length?typeof r.dest.slice=="function"?r.dest.slice(0,r.destLen):r.dest.subarray(0,r.destLen):r.dest}M3(Ng,Bg);Gg(id,ld,4,3);Gg(Ig,_g,2,1);id[28]=0;ld[28]=258;var N3=F3;function Ci(t,n,r,i,s){return Math.pow(1-s,3)*t+3*Math.pow(1-s,2)*s*n+3*(1-s)*Math.pow(s,2)*r+Math.pow(s,3)*i}function Rn(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}Rn.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};Rn.prototype.addPoint=function(t,n){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof n=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=n,this.y2=n),n<this.y1&&(this.y1=n),n>this.y2&&(this.y2=n))};Rn.prototype.addX=function(t){this.addPoint(t,null)};Rn.prototype.addY=function(t){this.addPoint(null,t)};Rn.prototype.addBezier=function(t,n,r,i,s,c,f,m){var p=[t,n],v=[r,i],g=[s,c],b=[f,m];this.addPoint(t,n),this.addPoint(f,m);for(var y=0;y<=1;y++){var C=6*p[y]-12*v[y]+6*g[y],w=-3*p[y]+9*v[y]-9*g[y]+3*b[y],E=3*v[y]-3*p[y];if(w===0){if(C===0)continue;var A=-E/C;0<A&&A<1&&(y===0&&this.addX(Ci(p[y],v[y],g[y],b[y],A)),y===1&&this.addY(Ci(p[y],v[y],g[y],b[y],A)));continue}var T=Math.pow(C,2)-4*E*w;if(!(T<0)){var D=(-C+Math.sqrt(T))/(2*w);0<D&&D<1&&(y===0&&this.addX(Ci(p[y],v[y],g[y],b[y],D)),y===1&&this.addY(Ci(p[y],v[y],g[y],b[y],D)));var M=(-C-Math.sqrt(T))/(2*w);0<M&&M<1&&(y===0&&this.addX(Ci(p[y],v[y],g[y],b[y],M)),y===1&&this.addY(Ci(p[y],v[y],g[y],b[y],M)))}}};Rn.prototype.addQuad=function(t,n,r,i,s,c){var f=t+.6666666666666666*(r-t),m=n+2/3*(i-n),p=f+1/3*(s-t),v=m+1/3*(c-n);this.addBezier(t,n,f,m,p,v,s,c)};function Et(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Et.prototype.moveTo=function(t,n){this.commands.push({type:"M",x:t,y:n})};Et.prototype.lineTo=function(t,n){this.commands.push({type:"L",x:t,y:n})};Et.prototype.curveTo=Et.prototype.bezierCurveTo=function(t,n,r,i,s,c){this.commands.push({type:"C",x1:t,y1:n,x2:r,y2:i,x:s,y:c})};Et.prototype.quadTo=Et.prototype.quadraticCurveTo=function(t,n,r,i){this.commands.push({type:"Q",x1:t,y1:n,x:r,y:i})};Et.prototype.close=Et.prototype.closePath=function(){this.commands.push({type:"Z"})};Et.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof Rn){var n=t;this.moveTo(n.x1,n.y1),this.lineTo(n.x2,n.y1),this.lineTo(n.x2,n.y2),this.lineTo(n.x1,n.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Et.prototype.getBoundingBox=function(){for(var t=new Rn,n=0,r=0,i=0,s=0,c=0;c<this.commands.length;c++){var f=this.commands[c];switch(f.type){case"M":t.addPoint(f.x,f.y),n=i=f.x,r=s=f.y;break;case"L":t.addPoint(f.x,f.y),i=f.x,s=f.y;break;case"Q":t.addQuad(i,s,f.x1,f.y1,f.x,f.y),i=f.x,s=f.y;break;case"C":t.addBezier(i,s,f.x1,f.y1,f.x2,f.y2,f.x,f.y),i=f.x,s=f.y;break;case"Z":i=n,s=r;break;default:throw new Error("Unexpected path command "+f.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Et.prototype.draw=function(t){t.beginPath();for(var n=0;n<this.commands.length;n+=1){var r=this.commands[n];r.type==="M"?t.moveTo(r.x,r.y):r.type==="L"?t.lineTo(r.x,r.y):r.type==="C"?t.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):r.type==="Q"?t.quadraticCurveTo(r.x1,r.y1,r.x,r.y):r.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Et.prototype.toPathData=function(t){t=t!==void 0?t:2;function n(f){return Math.round(f)===f?""+Math.round(f):f.toFixed(t)}function r(){for(var f=arguments,m="",p=0;p<arguments.length;p+=1){var v=f[p];v>=0&&p>0&&(m+=" "),m+=n(v)}return m}for(var i="",s=0;s<this.commands.length;s+=1){var c=this.commands[s];c.type==="M"?i+="M"+r(c.x,c.y):c.type==="L"?i+="L"+r(c.x,c.y):c.type==="C"?i+="C"+r(c.x1,c.y1,c.x2,c.y2,c.x,c.y):c.type==="Q"?i+="Q"+r(c.x1,c.y1,c.x,c.y):c.type==="Z"&&(i+="Z")}return i};Et.prototype.toSVG=function(t){var n='<path d="';return n+=this.toPathData(t),n+='"',this.fill&&this.fill!=="black"&&(this.fill===null?n+=' fill="none"':n+=' fill="'+this.fill+'"'),this.stroke&&(n+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),n+="/>",n};Et.prototype.toDOMElement=function(t){var n=this.toPathData(t),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",n),r};function Pg(t){throw new Error(t)}function rv(t,n){t||Pg(n)}var ke={fail:Pg,argument:rv,assert:rv},iv=32768,lv=2147483648,Ei={},le={},Re={};function Ia(t){return function(){return t}}le.BYTE=function(t){return ke.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};Re.BYTE=Ia(1);le.CHAR=function(t){return[t.charCodeAt(0)]};Re.CHAR=Ia(1);le.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var n=[],r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n};Re.CHARARRAY=function(t){return typeof t>"u"?0:t.length};le.USHORT=function(t){return[t>>8&255,t&255]};Re.USHORT=Ia(2);le.SHORT=function(t){return t>=iv&&(t=-(2*iv-t)),[t>>8&255,t&255]};Re.SHORT=Ia(2);le.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};Re.UINT24=Ia(3);le.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};Re.ULONG=Ia(4);le.LONG=function(t){return t>=lv&&(t=-(2*lv-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};Re.LONG=Ia(4);le.FIXED=le.ULONG;Re.FIXED=Re.ULONG;le.FWORD=le.SHORT;Re.FWORD=Re.SHORT;le.UFWORD=le.USHORT;Re.UFWORD=Re.USHORT;le.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};Re.LONGDATETIME=Ia(8);le.TAG=function(t){return ke.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};Re.TAG=Ia(4);le.Card8=le.BYTE;Re.Card8=Re.BYTE;le.Card16=le.USHORT;Re.Card16=Re.USHORT;le.OffSize=le.BYTE;Re.OffSize=Re.BYTE;le.SID=le.USHORT;Re.SID=Re.USHORT;le.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?le.NUMBER16(t):le.NUMBER32(t)};Re.NUMBER=function(t){return le.NUMBER(t).length};le.NUMBER16=function(t){return[28,t>>8&255,t&255]};Re.NUMBER16=Ia(3);le.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};Re.NUMBER32=Ia(5);le.REAL=function(t){var n=t.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(n);if(r){var i=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));n=(Math.round(t*i)/i).toString()}for(var s="",c=0,f=n.length;c<f;c+=1){var m=n[c];m==="e"?s+=n[++c]==="-"?"c":"b":m==="."?s+="a":m==="-"?s+="e":s+=m}s+=s.length&1?"f":"ff";for(var p=[30],v=0,g=s.length;v<g;v+=2)p.push(parseInt(s.substr(v,2),16));return p};Re.REAL=function(t){return le.REAL(t).length};le.NAME=le.CHARARRAY;Re.NAME=Re.CHARARRAY;le.STRING=le.CHARARRAY;Re.STRING=Re.CHARARRAY;Ei.UTF8=function(t,n,r){for(var i=[],s=r,c=0;c<s;c++,n+=1)i[c]=t.getUint8(n);return String.fromCharCode.apply(null,i)};Ei.UTF16=function(t,n,r){for(var i=[],s=r/2,c=0;c<s;c++,n+=2)i[c]=t.getUint16(n);return String.fromCharCode.apply(null,i)};le.UTF16=function(t){for(var n=[],r=0;r<t.length;r+=1){var i=t.charCodeAt(r);n[n.length]=i>>8&255,n[n.length]=i&255}return n};Re.UTF16=function(t){return t.length*2};var jf={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};Ei.MACSTRING=function(t,n,r,i){var s=jf[i];if(s!==void 0){for(var c="",f=0;f<r;f++){var m=t.getUint8(n+f);m<=127?c+=String.fromCharCode(m):c+=s[m&127]}return c}};var fs=typeof WeakMap=="function"&&new WeakMap,ds,B3=function(t){if(!ds){ds={};for(var n in jf)ds[n]=new String(n)}var r=ds[t];if(r!==void 0){if(fs){var i=fs.get(r);if(i!==void 0)return i}var s=jf[t];if(s!==void 0){for(var c={},f=0;f<s.length;f++)c[s.charCodeAt(f)]=f+128;return fs&&fs.set(r,c),c}}};le.MACSTRING=function(t,n){var r=B3(n);if(r!==void 0){for(var i=[],s=0;s<t.length;s++){var c=t.charCodeAt(s);if(c>=128&&(c=r[c],c===void 0))return;i[s]=c}return i}};Re.MACSTRING=function(t,n){var r=le.MACSTRING(t,n);return r!==void 0?r.length:0};function Ff(t){return t>=-128&&t<=127}function I3(t,n,r){for(var i=0,s=t.length;n<s&&i<64&&t[n]===0;)++n,++i;return r.push(128|i-1),n}function _3(t,n,r){for(var i=0,s=t.length,c=n;c<s&&i<64;){var f=t[c];if(!Ff(f)||f===0&&c+1<s&&t[c+1]===0)break;++c,++i}r.push(i-1);for(var m=n;m<c;++m)r.push(t[m]+256&255);return c}function G3(t,n,r){for(var i=0,s=t.length,c=n;c<s&&i<64;){var f=t[c];if(f===0||Ff(f)&&c+1<s&&Ff(t[c+1]))break;++c,++i}r.push(64|i-1);for(var m=n;m<c;++m){var p=t[m];r.push(p+65536>>8&255,p+256&255)}return c}le.VARDELTAS=function(t){for(var n=0,r=[];n<t.length;){var i=t[n];i===0?n=I3(t,n,r):i>=-128&&i<=127?n=_3(t,n,r):n=G3(t,n,r)}return r};le.INDEX=function(t){for(var n=1,r=[n],i=[],s=0;s<t.length;s+=1){var c=le.OBJECT(t[s]);Array.prototype.push.apply(i,c),n+=c.length,r.push(n)}if(i.length===0)return[0,0];for(var f=[],m=1+Math.floor(Math.log(n)/Math.log(2))/8|0,p=[void 0,le.BYTE,le.USHORT,le.UINT24,le.ULONG][m],v=0;v<r.length;v+=1){var g=p(r[v]);Array.prototype.push.apply(f,g)}return Array.prototype.concat(le.Card16(t.length),le.OffSize(m),f,i)};Re.INDEX=function(t){return le.INDEX(t).length};le.DICT=function(t){for(var n=[],r=Object.keys(t),i=r.length,s=0;s<i;s+=1){var c=parseInt(r[s],0),f=t[c];n=n.concat(le.OPERAND(f.value,f.type)),n=n.concat(le.OPERATOR(c))}return n};Re.DICT=function(t){return le.DICT(t).length};le.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};le.OPERAND=function(t,n){var r=[];if(Array.isArray(n))for(var i=0;i<n.length;i+=1)ke.argument(t.length===n.length,"Not enough arguments given for type"+n),r=r.concat(le.OPERAND(t[i],n[i]));else if(n==="SID")r=r.concat(le.NUMBER(t));else if(n==="offset")r=r.concat(le.NUMBER32(t));else if(n==="number")r=r.concat(le.NUMBER(t));else if(n==="real")r=r.concat(le.REAL(t));else throw new Error("Unknown operand type "+n);return r};le.OP=le.BYTE;Re.OP=Re.BYTE;var ps=typeof WeakMap=="function"&&new WeakMap;le.CHARSTRING=function(t){if(ps){var n=ps.get(t);if(n!==void 0)return n}for(var r=[],i=t.length,s=0;s<i;s+=1){var c=t[s];r=r.concat(le[c.type](c.value))}return ps&&ps.set(t,r),r};Re.CHARSTRING=function(t){return le.CHARSTRING(t).length};le.OBJECT=function(t){var n=le[t.type];return ke.argument(n!==void 0,"No encoding function for type "+t.type),n(t.value)};Re.OBJECT=function(t){var n=Re[t.type];return ke.argument(n!==void 0,"No sizeOf function for type "+t.type),n(t.value)};le.TABLE=function(t){for(var n=[],r=t.fields.length,i=[],s=[],c=0;c<r;c+=1){var f=t.fields[c],m=le[f.type];ke.argument(m!==void 0,"No encoding function for field type "+f.type+" ("+f.name+")");var p=t[f.name];p===void 0&&(p=f.value);var v=m(p);f.type==="TABLE"?(s.push(n.length),n=n.concat([0,0]),i.push(v)):n=n.concat(v)}for(var g=0;g<i.length;g+=1){var b=s[g],y=n.length;ke.argument(y<65536,"Table "+t.tableName+" too big."),n[b]=y>>8,n[b+1]=y&255,n=n.concat(i[g])}return n};Re.TABLE=function(t){for(var n=0,r=t.fields.length,i=0;i<r;i+=1){var s=t.fields[i],c=Re[s.type];ke.argument(c!==void 0,"No sizeOf function for field type "+s.type+" ("+s.name+")");var f=t[s.name];f===void 0&&(f=s.value),n+=c(f),s.type==="TABLE"&&(n+=2)}return n};le.RECORD=le.TABLE;Re.RECORD=Re.TABLE;le.LITERAL=function(t){return t};Re.LITERAL=function(t){return t.length};function Mt(t,n,r){if(n.length&&(n[0].name!=="coverageFormat"||n[0].value===1))for(var i=0;i<n.length;i+=1){var s=n[i];this[s.name]=s.value}if(this.tableName=t,this.fields=n,r)for(var c=Object.keys(r),f=0;f<c.length;f+=1){var m=c[f],p=r[m];this[m]!==void 0&&(this[m]=p)}}Mt.prototype.encode=function(){return le.TABLE(this)};Mt.prototype.sizeOf=function(){return Re.TABLE(this)};function Fl(t,n,r){r===void 0&&(r=n.length);var i=new Array(n.length+1);i[0]={name:t+"Count",type:"USHORT",value:r};for(var s=0;s<n.length;s++)i[s+1]={name:t+s,type:"USHORT",value:n[s]};return i}function Nf(t,n,r){var i=n.length,s=new Array(i+1);s[0]={name:t+"Count",type:"USHORT",value:i};for(var c=0;c<i;c++)s[c+1]={name:t+c,type:"TABLE",value:r(n[c],c)};return s}function Nl(t,n,r){var i=n.length,s=[];s[0]={name:t+"Count",type:"USHORT",value:i};for(var c=0;c<i;c++)s=s.concat(r(n[c],c));return s}function Os(t){t.format===1?Mt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Fl("glyph",t.glyphs))):t.format===2?Mt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Nl("rangeRecord",t.ranges,function(n){return[{name:"startGlyphID",type:"USHORT",value:n.start},{name:"endGlyphID",type:"USHORT",value:n.end},{name:"startCoverageIndex",type:"USHORT",value:n.index}]}))):ke.assert(!1,"Coverage format must be 1 or 2.")}Os.prototype=Object.create(Mt.prototype);Os.prototype.constructor=Os;function Rs(t){Mt.call(this,"scriptListTable",Nl("scriptRecord",t,function(n,r){var i=n.script,s=i.defaultLangSys;return ke.assert(!!s,"Unable to write GSUB: script "+n.tag+" has no default language system."),[{name:"scriptTag"+r,type:"TAG",value:n.tag},{name:"script"+r,type:"TABLE",value:new Mt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new Mt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:s.reqFeatureIndex}].concat(Fl("featureIndex",s.featureIndexes)))}].concat(Nl("langSys",i.langSysRecords,function(c,f){var m=c.langSys;return[{name:"langSysTag"+f,type:"TAG",value:c.tag},{name:"langSys"+f,type:"TABLE",value:new Mt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:m.reqFeatureIndex}].concat(Fl("featureIndex",m.featureIndexes)))}]})))}]}))}Rs.prototype=Object.create(Mt.prototype);Rs.prototype.constructor=Rs;function Ds(t){Mt.call(this,"featureListTable",Nl("featureRecord",t,function(n,r){var i=n.feature;return[{name:"featureTag"+r,type:"TAG",value:n.tag},{name:"feature"+r,type:"TABLE",value:new Mt("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(Fl("lookupListIndex",i.lookupListIndexes)))}]}))}Ds.prototype=Object.create(Mt.prototype);Ds.prototype.constructor=Ds;function Us(t,n){Mt.call(this,"lookupListTable",Nf("lookup",t,function(r){var i=n[r.lookupType];return ke.assert(!!i,"Unable to write GSUB lookup type "+r.lookupType+" tables."),new Mt("lookupTable",[{name:"lookupType",type:"USHORT",value:r.lookupType},{name:"lookupFlag",type:"USHORT",value:r.lookupFlag}].concat(Nf("subtable",r.subtables,i)))}))}Us.prototype=Object.create(Mt.prototype);Us.prototype.constructor=Us;var se={Table:Mt,Record:Mt,Coverage:Os,ScriptList:Rs,FeatureList:Ds,LookupList:Us,ushortList:Fl,tableList:Nf,recordList:Nl};function ov(t,n){return t.getUint8(n)}function Ms(t,n){return t.getUint16(n,!1)}function P3(t,n){return t.getInt16(n,!1)}function od(t,n){return t.getUint32(n,!1)}function Hg(t,n){var r=t.getInt16(n,!1),i=t.getUint16(n+2,!1);return r+i/65535}function H3(t,n){for(var r="",i=n;i<n+4;i+=1)r+=String.fromCharCode(t.getInt8(i));return r}function V3(t,n,r){for(var i=0,s=0;s<r;s+=1)i<<=8,i+=t.getUint8(n+s);return i}function q3(t,n,r){for(var i=[],s=n;s<r;s+=1)i.push(t.getUint8(s));return i}function Y3(t){for(var n="",r=0;r<t.length;r+=1)n+=String.fromCharCode(t[r]);return n}var X3={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function _(t,n){this.data=t,this.offset=n,this.relativeOffset=0}_.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};_.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};_.prototype.parseCard8=_.prototype.parseByte;_.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};_.prototype.parseCard16=_.prototype.parseUShort;_.prototype.parseSID=_.prototype.parseUShort;_.prototype.parseOffset16=_.prototype.parseUShort;_.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};_.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};_.prototype.parseULong=function(){var t=od(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};_.prototype.parseOffset32=_.prototype.parseULong;_.prototype.parseFixed=function(){var t=Hg(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};_.prototype.parseString=function(t){var n=this.data,r=this.offset+this.relativeOffset,i="";this.relativeOffset+=t;for(var s=0;s<t;s++)i+=String.fromCharCode(n.getUint8(r+s));return i};_.prototype.parseTag=function(){return this.parseString(4)};_.prototype.parseLongDateTime=function(){var t=od(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};_.prototype.parseVersion=function(t){var n=Ms(this.data,this.offset+this.relativeOffset),r=Ms(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),n+r/t/10};_.prototype.skip=function(t,n){n===void 0&&(n=1),this.relativeOffset+=X3[t]*n};_.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var n=new Array(t),r=this.data,i=this.offset+this.relativeOffset,s=0;s<t;s++)n[s]=r.getUint32(i),i+=4;return this.relativeOffset+=t*4,n};_.prototype.parseOffset16List=_.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var n=new Array(t),r=this.data,i=this.offset+this.relativeOffset,s=0;s<t;s++)n[s]=r.getUint16(i),i+=2;return this.relativeOffset+=t*2,n};_.prototype.parseShortList=function(t){for(var n=new Array(t),r=this.data,i=this.offset+this.relativeOffset,s=0;s<t;s++)n[s]=r.getInt16(i),i+=2;return this.relativeOffset+=t*2,n};_.prototype.parseByteList=function(t){for(var n=new Array(t),r=this.data,i=this.offset+this.relativeOffset,s=0;s<t;s++)n[s]=r.getUint8(i++);return this.relativeOffset+=t,n};_.prototype.parseList=function(t,n){n||(n=t,t=this.parseUShort());for(var r=new Array(t),i=0;i<t;i++)r[i]=n.call(this);return r};_.prototype.parseList32=function(t,n){n||(n=t,t=this.parseULong());for(var r=new Array(t),i=0;i<t;i++)r[i]=n.call(this);return r};_.prototype.parseRecordList=function(t,n){n||(n=t,t=this.parseUShort());for(var r=new Array(t),i=Object.keys(n),s=0;s<t;s++){for(var c={},f=0;f<i.length;f++){var m=i[f],p=n[m];c[m]=p.call(this)}r[s]=c}return r};_.prototype.parseRecordList32=function(t,n){n||(n=t,t=this.parseULong());for(var r=new Array(t),i=Object.keys(n),s=0;s<t;s++){for(var c={},f=0;f<i.length;f++){var m=i[f],p=n[m];c[m]=p.call(this)}r[s]=c}return r};_.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var n=Object.keys(t),r={},i=0;i<n.length;i++){var s=n[i],c=t[s];r[s]=c.call(this)}return r};_.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var n={};return t&1&&(n.xPlacement=this.parseShort()),t&2&&(n.yPlacement=this.parseShort()),t&4&&(n.xAdvance=this.parseShort()),t&8&&(n.yAdvance=this.parseShort()),t&16&&(n.xPlaDevice=void 0,this.parseShort()),t&32&&(n.yPlaDevice=void 0,this.parseShort()),t&64&&(n.xAdvDevice=void 0,this.parseShort()),t&128&&(n.yAdvDevice=void 0,this.parseShort()),n}};_.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),n=this.parseUShort(),r=new Array(n),i=0;i<n;i++)r[i]=this.parseValueRecord(t);return r};_.prototype.parsePointer=function(t){var n=this.parseOffset16();if(n>0)return new _(this.data,this.offset+n).parseStruct(t)};_.prototype.parsePointer32=function(t){var n=this.parseOffset32();if(n>0)return new _(this.data,this.offset+n).parseStruct(t)};_.prototype.parseListOfLists=function(t){for(var n=this.parseOffset16List(),r=n.length,i=this.relativeOffset,s=new Array(r),c=0;c<r;c++){var f=n[c];if(f===0){s[c]=void 0;continue}if(this.relativeOffset=f,t){for(var m=this.parseOffset16List(),p=new Array(m.length),v=0;v<m.length;v++)this.relativeOffset=f+m[v],p[v]=t.call(this);s[c]=p}else s[c]=this.parseUShortList()}return this.relativeOffset=i,s};_.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,n=this.parseUShort(),r=this.parseUShort();if(n===1)return{format:1,glyphs:this.parseUShortList(r)};if(n===2){for(var i=new Array(r),s=0;s<r;s++)i[s]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};_.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(n===2)return{format:2,ranges:this.parseRecordList({start:_.uShort,end:_.uShort,classId:_.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};_.list=function(t,n){return function(){return this.parseList(t,n)}};_.list32=function(t,n){return function(){return this.parseList32(t,n)}};_.recordList=function(t,n){return function(){return this.parseRecordList(t,n)}};_.recordList32=function(t,n){return function(){return this.parseRecordList32(t,n)}};_.pointer=function(t){return function(){return this.parsePointer(t)}};_.pointer32=function(t){return function(){return this.parsePointer32(t)}};_.tag=_.prototype.parseTag;_.byte=_.prototype.parseByte;_.uShort=_.offset16=_.prototype.parseUShort;_.uShortList=_.prototype.parseUShortList;_.uLong=_.offset32=_.prototype.parseULong;_.uLongList=_.prototype.parseULongList;_.struct=_.prototype.parseStruct;_.coverage=_.prototype.parseCoverage;_.classDef=_.prototype.parseClassDef;var sv={reserved:_.uShort,reqFeatureIndex:_.uShort,featureIndexes:_.uShortList};_.prototype.parseScriptList=function(){return this.parsePointer(_.recordList({tag:_.tag,script:_.pointer({defaultLangSys:_.pointer(sv),langSysRecords:_.recordList({tag:_.tag,langSys:_.pointer(sv)})})}))||[]};_.prototype.parseFeatureList=function(){return this.parsePointer(_.recordList({tag:_.tag,feature:_.pointer({featureParams:_.offset16,lookupListIndexes:_.uShortList})}))||[]};_.prototype.parseLookupList=function(t){return this.parsePointer(_.list(_.pointer(function(){var n=this.parseUShort();ke.argument(1<=n&&n<=9,"GPOS/GSUB lookup type "+n+" unknown.");var r=this.parseUShort(),i=r&16;return{lookupType:n,lookupFlag:r,subtables:this.parseList(_.pointer(t[n])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};_.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),n=this.parseUShort();ke.argument(t===1&&n<1,"GPOS/GSUB feature variations table unknown.");var r=this.parseRecordList32({conditionSetOffset:_.offset32,featureTableSubstitutionOffset:_.offset32});return r})||[]};var de={getByte:ov,getCard8:ov,getUShort:Ms,getCard16:Ms,getShort:P3,getULong:od,getFixed:Hg,getTag:H3,getOffset:V3,getBytes:q3,bytesToString:Y3,Parser:_};function W3(t,n){n.parseUShort(),t.length=n.parseULong(),t.language=n.parseULong();var r;t.groupCount=r=n.parseULong(),t.glyphIndexMap={};for(var i=0;i<r;i+=1)for(var s=n.parseULong(),c=n.parseULong(),f=n.parseULong(),m=s;m<=c;m+=1)t.glyphIndexMap[m]=f,f++}function Z3(t,n,r,i,s){t.length=n.parseUShort(),t.language=n.parseUShort();var c;t.segCount=c=n.parseUShort()>>1,n.skip("uShort",3),t.glyphIndexMap={};for(var f=new de.Parser(r,i+s+14),m=new de.Parser(r,i+s+16+c*2),p=new de.Parser(r,i+s+16+c*4),v=new de.Parser(r,i+s+16+c*6),g=i+s+16+c*8,b=0;b<c-1;b+=1)for(var y=void 0,C=f.parseUShort(),w=m.parseUShort(),E=p.parseShort(),A=v.parseUShort(),T=w;T<=C;T+=1)A!==0?(g=v.offset+v.relativeOffset-2,g+=A,g+=(T-w)*2,y=de.getUShort(r,g),y!==0&&(y=y+E&65535)):y=T+E&65535,t.glyphIndexMap[T]=y}function Q3(t,n){var r={};r.version=de.getUShort(t,n),ke.argument(r.version===0,"cmap table version should be 0."),r.numTables=de.getUShort(t,n+2);for(var i=-1,s=r.numTables-1;s>=0;s-=1){var c=de.getUShort(t,n+4+s*8),f=de.getUShort(t,n+4+s*8+2);if(c===3&&(f===0||f===1||f===10)||c===0&&(f===0||f===1||f===2||f===3||f===4)){i=de.getULong(t,n+4+s*8+4);break}}if(i===-1)throw new Error("No valid cmap sub-tables found.");var m=new de.Parser(t,n+i);if(r.format=m.parseUShort(),r.format===12)W3(r,m);else if(r.format===4)Z3(r,m,t,n,i);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r}function K3(t,n,r){t.segments.push({end:n,start:n,delta:-(n-r),offset:0,glyphIndex:r})}function J3(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function $3(t){var n=!0,r;for(r=t.length-1;r>0;r-=1){var i=t.get(r);if(i.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),n=!1;break}}var s=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:n?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:n?12:20}];n||(s=s.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),s=s.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var c=new se.Table("cmap",s);for(c.segments=[],r=0;r<t.length;r+=1){for(var f=t.get(r),m=0;m<f.unicodes.length;m+=1)K3(c,f.unicodes[m],r);c.segments=c.segments.sort(function(D,M){return D.start-M.start})}J3(c);var p=c.segments.length,v=0,g=[],b=[],y=[],C=[],w=[],E=[];for(r=0;r<p;r+=1){var A=c.segments[r];A.end<=65535&&A.start<=65535?(g=g.concat({name:"end_"+r,type:"USHORT",value:A.end}),b=b.concat({name:"start_"+r,type:"USHORT",value:A.start}),y=y.concat({name:"idDelta_"+r,type:"SHORT",value:A.delta}),C=C.concat({name:"idRangeOffset_"+r,type:"USHORT",value:A.offset}),A.glyphId!==void 0&&(w=w.concat({name:"glyph_"+r,type:"USHORT",value:A.glyphId}))):v+=1,!n&&A.glyphIndex!==void 0&&(E=E.concat({name:"cmap12Start_"+r,type:"ULONG",value:A.start}),E=E.concat({name:"cmap12End_"+r,type:"ULONG",value:A.end}),E=E.concat({name:"cmap12Glyph_"+r,type:"ULONG",value:A.glyphIndex}))}if(c.segCountX2=(p-v)*2,c.searchRange=Math.pow(2,Math.floor(Math.log(p-v)/Math.log(2)))*2,c.entrySelector=Math.log(c.searchRange/2)/Math.log(2),c.rangeShift=c.segCountX2-c.searchRange,c.fields=c.fields.concat(g),c.fields.push({name:"reservedPad",type:"USHORT",value:0}),c.fields=c.fields.concat(b),c.fields=c.fields.concat(y),c.fields=c.fields.concat(C),c.fields=c.fields.concat(w),c.cmap4Length=14+g.length*2+2+b.length*2+y.length*2+C.length*2+w.length*2,!n){var T=16+E.length*4;c.cmap12Offset=20+c.cmap4Length,c.fields=c.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:T},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:E.length/3}]),c.fields=c.fields.concat(E)}return c}var Vg={parse:Q3,make:$3},ys=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],eT=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],tT=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Dr=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function qg(t){this.font=t}qg.prototype.charToGlyphIndex=function(t){var n=t.codePointAt(0),r=this.font.glyphs;if(r){for(var i=0;i<r.length;i+=1)for(var s=r.get(i),c=0;c<s.unicodes.length;c+=1)if(s.unicodes[c]===n)return i}return null};function Yg(t){this.cmap=t}Yg.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function Ls(t,n){this.encoding=t,this.charset=n}Ls.prototype.charToGlyphIndex=function(t){var n=t.codePointAt(0),r=this.encoding[n];return this.charset.indexOf(r)};function sd(t){switch(t.version){case 1:this.names=Dr.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var n=0;n<t.numberOfGlyphs;n++)t.glyphNameIndex[n]<Dr.length?this.names[n]=Dr[t.glyphNameIndex[n]]:this.names[n]=t.names[t.glyphNameIndex[n]-Dr.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)this.names[r]=Dr[r+t.glyphNameIndex[r]];break;case 3:this.names=[];break;default:this.names=[];break}}sd.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};sd.prototype.glyphIndexToName=function(t){return this.names[t]};function aT(t){for(var n,r=t.tables.cmap.glyphIndexMap,i=Object.keys(r),s=0;s<i.length;s+=1){var c=i[s],f=r[c];n=t.glyphs.get(f),n.addUnicode(parseInt(c))}for(var m=0;m<t.glyphs.length;m+=1)n=t.glyphs.get(m),t.cffEncoding?t.isCIDFont?n.name="gid"+m:n.name=t.cffEncoding.charset[m]:t.glyphNames.names&&(n.name=t.glyphNames.glyphIndexToName(m))}function nT(t){t._IndexToUnicodeMap={};for(var n=t.tables.cmap.glyphIndexMap,r=Object.keys(n),i=0;i<r.length;i+=1){var s=r[i],c=n[s];t._IndexToUnicodeMap[c]===void 0?t._IndexToUnicodeMap[c]={unicodes:[parseInt(s)]}:t._IndexToUnicodeMap[c].unicodes.push(parseInt(s))}}function rT(t,n){n.lowMemory?nT(t):aT(t)}function iT(t,n,r,i,s){t.beginPath(),t.moveTo(n,r),t.lineTo(i,s),t.stroke()}var Or={line:iT};function lT(t,n){var r=n||new Et;return{configurable:!0,get:function(){return typeof r=="function"&&(r=r()),r},set:function(i){r=i}}}function ca(t){this.bindConstructorValues(t)}ca.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",lT(this,t.path))};ca.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};ca.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};ca.prototype.getPath=function(t,n,r,i,s){t=t!==void 0?t:0,n=n!==void 0?n:0,r=r!==void 0?r:72;var c,f;i||(i={});var m=i.xScale,p=i.yScale;if(i.hinting&&s&&s.hinting&&(f=this.path&&s.hinting.exec(this,r)),f)c=s.hinting.getCommands(f),t=Math.round(t),n=Math.round(n),m=p=1;else{c=this.path.commands;var v=1/(this.path.unitsPerEm||1e3)*r;m===void 0&&(m=v),p===void 0&&(p=v)}for(var g=new Et,b=0;b<c.length;b+=1){var y=c[b];y.type==="M"?g.moveTo(t+y.x*m,n+-y.y*p):y.type==="L"?g.lineTo(t+y.x*m,n+-y.y*p):y.type==="Q"?g.quadraticCurveTo(t+y.x1*m,n+-y.y1*p,t+y.x*m,n+-y.y*p):y.type==="C"?g.curveTo(t+y.x1*m,n+-y.y1*p,t+y.x2*m,n+-y.y2*p,t+y.x*m,n+-y.y*p):y.type==="Z"&&g.closePath()}return g};ca.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],n=[],r=0;r<this.points.length;r+=1){var i=this.points[r];n.push(i),i.lastPointOfContour&&(t.push(n),n=[])}return ke.argument(n.length===0,"There are still points left in the current contour."),t};ca.prototype.getMetrics=function(){for(var t=this.path.commands,n=[],r=[],i=0;i<t.length;i+=1){var s=t[i];s.type!=="Z"&&(n.push(s.x),r.push(s.y)),(s.type==="Q"||s.type==="C")&&(n.push(s.x1),r.push(s.y1)),s.type==="C"&&(n.push(s.x2),r.push(s.y2))}var c={xMin:Math.min.apply(null,n),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(c.xMin)||(c.xMin=0),isFinite(c.xMax)||(c.xMax=this.advanceWidth),isFinite(c.yMin)||(c.yMin=0),isFinite(c.yMax)||(c.yMax=0),c.rightSideBearing=this.advanceWidth-c.leftSideBearing-(c.xMax-c.xMin),c};ca.prototype.draw=function(t,n,r,i,s){this.getPath(n,r,i,s).draw(t)};ca.prototype.drawPoints=function(t,n,r,i){function s(b,y,C,w){t.beginPath();for(var E=0;E<b.length;E+=1)t.moveTo(y+b[E].x*w,C+b[E].y*w),t.arc(y+b[E].x*w,C+b[E].y*w,2,0,Math.PI*2,!1);t.closePath(),t.fill()}n=n!==void 0?n:0,r=r!==void 0?r:0,i=i!==void 0?i:24;for(var c=1/this.path.unitsPerEm*i,f=[],m=[],p=this.path,v=0;v<p.commands.length;v+=1){var g=p.commands[v];g.x!==void 0&&f.push({x:g.x,y:-g.y}),g.x1!==void 0&&m.push({x:g.x1,y:-g.y1}),g.x2!==void 0&&m.push({x:g.x2,y:-g.y2})}t.fillStyle="blue",s(f,n,r,c),t.fillStyle="red",s(m,n,r,c)};ca.prototype.drawMetrics=function(t,n,r,i){var s;n=n!==void 0?n:0,r=r!==void 0?r:0,i=i!==void 0?i:24,s=1/this.path.unitsPerEm*i,t.lineWidth=1,t.strokeStyle="black",Or.line(t,n,-1e4,n,1e4),Or.line(t,-1e4,r,1e4,r);var c=this.xMin||0,f=this.yMin||0,m=this.xMax||0,p=this.yMax||0,v=this.advanceWidth||0;t.strokeStyle="blue",Or.line(t,n+c*s,-1e4,n+c*s,1e4),Or.line(t,n+m*s,-1e4,n+m*s,1e4),Or.line(t,-1e4,r+-f*s,1e4,r+-f*s),Or.line(t,-1e4,r+-p*s,1e4,r+-p*s),t.strokeStyle="green",Or.line(t,n+v*s,-1e4,n+v*s,1e4)};function ms(t,n,r){Object.defineProperty(t,n,{get:function(){return t.path,t[r]},set:function(i){t[r]=i},enumerable:!0,configurable:!0})}function cd(t,n){if(this.font=t,this.glyphs={},Array.isArray(n))for(var r=0;r<n.length;r++){var i=n[r];i.path.unitsPerEm=t.unitsPerEm,this.glyphs[r]=i}this.length=n&&n.length||0}cd.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var n=this.glyphs[t],r=this.font._IndexToUnicodeMap[t];if(r)for(var i=0;i<r.unicodes.length;i++)n.addUnicode(r.unicodes[i]);this.font.cffEncoding?this.font.isCIDFont?n.name="gid"+t:n.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(n.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};cd.prototype.push=function(t,n){this.glyphs[t]=n,this.length++};function oT(t,n){return new ca({index:n,font:t})}function sT(t,n,r,i,s,c){return function(){var f=new ca({index:n,font:t});return f.path=function(){r(f,i,s);var m=c(t.glyphs,f);return m.unitsPerEm=t.unitsPerEm,m},ms(f,"xMin","_xMin"),ms(f,"xMax","_xMax"),ms(f,"yMin","_yMin"),ms(f,"yMax","_yMax"),f}}function cT(t,n,r,i){return function(){var s=new ca({index:n,font:t});return s.path=function(){var c=r(t,s,i);return c.unitsPerEm=t.unitsPerEm,c},s}}var Qa={GlyphSet:cd,glyphLoader:oT,ttfGlyphLoader:sT,cffGlyphLoader:cT};function Xg(t,n){if(t===n)return!0;if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;for(var r=0;r<t.length;r+=1)if(!Xg(t[r],n[r]))return!1;return!0}else return!1}function Bf(t){var n;return t.length<1240?n=107:t.length<33900?n=1131:n=32768,n}function nr(t,n,r){var i=[],s=[],c=de.getCard16(t,n),f,m;if(c!==0){var p=de.getByte(t,n+2);f=n+(c+1)*p+2;for(var v=n+3,g=0;g<c+1;g+=1)i.push(de.getOffset(t,v,p)),v+=p;m=f+i[c]}else m=n+2;for(var b=0;b<i.length-1;b+=1){var y=de.getBytes(t,f+i[b],f+i[b+1]);r&&(y=r(y)),s.push(y)}return{objects:s,startOffset:n,endOffset:m}}function uT(t,n){var r=[],i=de.getCard16(t,n),s,c;if(i!==0){var f=de.getByte(t,n+2);s=n+(i+1)*f+2;for(var m=n+3,p=0;p<i+1;p+=1)r.push(de.getOffset(t,m,f)),m+=f;c=s+r[i]}else c=n+2;return{offsets:r,startOffset:n,endOffset:c}}function fT(t,n,r,i,s){var c=de.getCard16(r,i),f=0;if(c!==0){var m=de.getByte(r,i+2);f=i+(c+1)*m+2}var p=de.getBytes(r,f+n[t],f+n[t+1]);return p}function dT(t){for(var n="",r=15,i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var s=t.parseByte(),c=s>>4,f=s&15;if(c===r||(n+=i[c],f===r))break;n+=i[f]}return parseFloat(n)}function pT(t,n){var r,i,s,c;if(n===28)return r=t.parseByte(),i=t.parseByte(),r<<8|i;if(n===29)return r=t.parseByte(),i=t.parseByte(),s=t.parseByte(),c=t.parseByte(),r<<24|i<<16|s<<8|c;if(n===30)return dT(t);if(n>=32&&n<=246)return n-139;if(n>=247&&n<=250)return r=t.parseByte(),(n-247)*256+r+108;if(n>=251&&n<=254)return r=t.parseByte(),-(n-251)*256-r-108;throw new Error("Invalid b0 "+n)}function mT(t){for(var n={},r=0;r<t.length;r+=1){var i=t[r][0],s=t[r][1],c=void 0;if(s.length===1?c=s[0]:c=s,n.hasOwnProperty(i)&&!isNaN(n[i]))throw new Error("Object "+n+" already has key "+i);n[i]=c}return n}function Wg(t,n,r){n=n!==void 0?n:0;var i=new de.Parser(t,n),s=[],c=[];for(r=r!==void 0?r:t.length;i.relativeOffset<r;){var f=i.parseByte();f<=21?(f===12&&(f=1200+i.parseByte()),s.push([f,c]),c=[]):c.push(pT(i,f))}return mT(s)}function Ml(t,n){return n<=390?n=ys[n]:n=t[n-391],n}function Zg(t,n,r){for(var i={},s,c=0;c<n.length;c+=1){var f=n[c];if(Array.isArray(f.type)){var m=[];m.length=f.type.length;for(var p=0;p<f.type.length;p++)s=t[f.op]!==void 0?t[f.op][p]:void 0,s===void 0&&(s=f.value!==void 0&&f.value[p]!==void 0?f.value[p]:null),f.type[p]==="SID"&&(s=Ml(r,s)),m[p]=s;i[f.name]=m}else s=t[f.op],s===void 0&&(s=f.value!==void 0?f.value:null),f.type==="SID"&&(s=Ml(r,s)),i[f.name]=s}return i}function hT(t,n){var r={};return r.formatMajor=de.getCard8(t,n),r.formatMinor=de.getCard8(t,n+1),r.size=de.getCard8(t,n+2),r.offsetSize=de.getCard8(t,n+3),r.startOffset=n,r.endOffset=n+4,r}var Qg=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Kg=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function vT(t,n){var r=Wg(t,0,t.byteLength);return Zg(r,Qg,n)}function Jg(t,n,r,i){var s=Wg(t,n,r);return Zg(s,Kg,i)}function cv(t,n,r,i){for(var s=[],c=0;c<r.length;c+=1){var f=new DataView(new Uint8Array(r[c]).buffer),m=vT(f,i);m._subrs=[],m._subrsBias=0,m._defaultWidthX=0,m._nominalWidthX=0;var p=m.private[0],v=m.private[1];if(p!==0&&v!==0){var g=Jg(t,v+n,p,i);if(m._defaultWidthX=g.defaultWidthX,m._nominalWidthX=g.nominalWidthX,g.subrs!==0){var b=v+g.subrs,y=nr(t,b+n);m._subrs=y.objects,m._subrsBias=Bf(m._subrs)}m._privateDict=g}s.push(m)}return s}function gT(t,n,r,i){var s,c,f=new de.Parser(t,n);r-=1;var m=[".notdef"],p=f.parseCard8();if(p===0)for(var v=0;v<r;v+=1)s=f.parseSID(),m.push(Ml(i,s));else if(p===1)for(;m.length<=r;){s=f.parseSID(),c=f.parseCard8();for(var g=0;g<=c;g+=1)m.push(Ml(i,s)),s+=1}else if(p===2)for(;m.length<=r;){s=f.parseSID(),c=f.parseCard16();for(var b=0;b<=c;b+=1)m.push(Ml(i,s)),s+=1}else throw new Error("Unknown charset format "+p);return m}function xT(t,n,r){var i,s={},c=new de.Parser(t,n),f=c.parseCard8();if(f===0)for(var m=c.parseCard8(),p=0;p<m;p+=1)i=c.parseCard8(),s[i]=p;else if(f===1){var v=c.parseCard8();i=1;for(var g=0;g<v;g+=1)for(var b=c.parseCard8(),y=c.parseCard8(),C=b;C<=b+y;C+=1)s[C]=i,i+=1}else throw new Error("Unknown encoding format "+f);return new Ls(s,r)}function uv(t,n,r){var i,s,c,f,m=new Et,p=[],v=0,g=!1,b=!1,y=0,C=0,w,E,A,T;if(t.isCIDFont){var D=t.tables.cff.topDict._fdSelect[n.index],M=t.tables.cff.topDict._fdArray[D];w=M._subrs,E=M._subrsBias,A=M._defaultWidthX,T=M._nominalWidthX}else w=t.tables.cff.topDict._subrs,E=t.tables.cff.topDict._subrsBias,A=t.tables.cff.topDict._defaultWidthX,T=t.tables.cff.topDict._nominalWidthX;var Y=A;function V(G,ne){b&&m.closePath(),m.moveTo(G,ne),b=!0}function X(){var G;G=p.length%2!==0,G&&!g&&(Y=p.shift()+T),v+=p.length>>1,p.length=0,g=!0}function B(G){for(var ne,ce,ye,Se,ee,ge,he,F,$,re,oe,we,O=0;O<G.length;){var I=G[O];switch(O+=1,I){case 1:X();break;case 3:X();break;case 4:p.length>1&&!g&&(Y=p.shift()+T,g=!0),C+=p.pop(),V(y,C);break;case 5:for(;p.length>0;)y+=p.shift(),C+=p.shift(),m.lineTo(y,C);break;case 6:for(;p.length>0&&(y+=p.shift(),m.lineTo(y,C),p.length!==0);)C+=p.shift(),m.lineTo(y,C);break;case 7:for(;p.length>0&&(C+=p.shift(),m.lineTo(y,C),p.length!==0);)y+=p.shift(),m.lineTo(y,C);break;case 8:for(;p.length>0;)i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f+p.shift(),m.curveTo(i,s,c,f,y,C);break;case 10:ee=p.pop()+E,ge=w[ee],ge&&B(ge);break;case 11:return;case 12:switch(I=G[O],O+=1,I){case 35:i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),he=c+p.shift(),F=f+p.shift(),$=he+p.shift(),re=F+p.shift(),oe=$+p.shift(),we=re+p.shift(),y=oe+p.shift(),C=we+p.shift(),p.shift(),m.curveTo(i,s,c,f,he,F),m.curveTo($,re,oe,we,y,C);break;case 34:i=y+p.shift(),s=C,c=i+p.shift(),f=s+p.shift(),he=c+p.shift(),F=f,$=he+p.shift(),re=f,oe=$+p.shift(),we=C,y=oe+p.shift(),m.curveTo(i,s,c,f,he,F),m.curveTo($,re,oe,we,y,C);break;case 36:i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),he=c+p.shift(),F=f,$=he+p.shift(),re=f,oe=$+p.shift(),we=re+p.shift(),y=oe+p.shift(),m.curveTo(i,s,c,f,he,F),m.curveTo($,re,oe,we,y,C);break;case 37:i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),he=c+p.shift(),F=f+p.shift(),$=he+p.shift(),re=F+p.shift(),oe=$+p.shift(),we=re+p.shift(),Math.abs(oe-y)>Math.abs(we-C)?y=oe+p.shift():C=we+p.shift(),m.curveTo(i,s,c,f,he,F),m.curveTo($,re,oe,we,y,C);break;default:console.log("Glyph "+n.index+": unknown operator 1200"+I),p.length=0}break;case 14:p.length>0&&!g&&(Y=p.shift()+T,g=!0),b&&(m.closePath(),b=!1);break;case 18:X();break;case 19:case 20:X(),O+=v+7>>3;break;case 21:p.length>2&&!g&&(Y=p.shift()+T,g=!0),C+=p.pop(),y+=p.pop(),V(y,C);break;case 22:p.length>1&&!g&&(Y=p.shift()+T,g=!0),y+=p.pop(),V(y,C);break;case 23:X();break;case 24:for(;p.length>2;)i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f+p.shift(),m.curveTo(i,s,c,f,y,C);y+=p.shift(),C+=p.shift(),m.lineTo(y,C);break;case 25:for(;p.length>6;)y+=p.shift(),C+=p.shift(),m.lineTo(y,C);i=y+p.shift(),s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f+p.shift(),m.curveTo(i,s,c,f,y,C);break;case 26:for(p.length%2&&(y+=p.shift());p.length>0;)i=y,s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c,C=f+p.shift(),m.curveTo(i,s,c,f,y,C);break;case 27:for(p.length%2&&(C+=p.shift());p.length>0;)i=y+p.shift(),s=C,c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f,m.curveTo(i,s,c,f,y,C);break;case 28:ne=G[O],ce=G[O+1],p.push((ne<<24|ce<<16)>>16),O+=2;break;case 29:ee=p.pop()+t.gsubrsBias,ge=t.gsubrs[ee],ge&&B(ge);break;case 30:for(;p.length>0&&(i=y,s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f+(p.length===1?p.shift():0),m.curveTo(i,s,c,f,y,C),p.length!==0);)i=y+p.shift(),s=C,c=i+p.shift(),f=s+p.shift(),C=f+p.shift(),y=c+(p.length===1?p.shift():0),m.curveTo(i,s,c,f,y,C);break;case 31:for(;p.length>0&&(i=y+p.shift(),s=C,c=i+p.shift(),f=s+p.shift(),C=f+p.shift(),y=c+(p.length===1?p.shift():0),m.curveTo(i,s,c,f,y,C),p.length!==0);)i=y,s=C+p.shift(),c=i+p.shift(),f=s+p.shift(),y=c+p.shift(),C=f+(p.length===1?p.shift():0),m.curveTo(i,s,c,f,y,C);break;default:I<32?console.log("Glyph "+n.index+": unknown operator "+I):I<247?p.push(I-139):I<251?(ne=G[O],O+=1,p.push((I-247)*256+ne+108)):I<255?(ne=G[O],O+=1,p.push(-(I-251)*256-ne-108)):(ne=G[O],ce=G[O+1],ye=G[O+2],Se=G[O+3],O+=4,p.push((ne<<24|ce<<16|ye<<8|Se)/65536))}}}return B(r),n.advanceWidth=Y,m}function bT(t,n,r,i){var s=[],c,f=new de.Parser(t,n),m=f.parseCard8();if(m===0)for(var p=0;p<r;p++){if(c=f.parseCard8(),c>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+c+" (FD count "+i+")");s.push(c)}else if(m===3){var v=f.parseCard16(),g=f.parseCard16();if(g!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+g);for(var b,y=0;y<v;y++){if(c=f.parseCard8(),b=f.parseCard16(),c>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+c+" (FD count "+i+")");if(b>r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+b);for(;g<b;g++)s.push(c);g=b}if(b!==r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+b)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+m);return s}function yT(t,n,r,i){r.tables.cff={};var s=hT(t,n),c=nr(t,s.endOffset,de.bytesToString),f=nr(t,c.endOffset),m=nr(t,f.endOffset,de.bytesToString),p=nr(t,m.endOffset);r.gsubrs=p.objects,r.gsubrsBias=Bf(r.gsubrs);var v=cv(t,n,f.objects,m.objects);if(v.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+v.length);var g=v[0];if(r.tables.cff.topDict=g,g._privateDict&&(r.defaultWidthX=g._privateDict.defaultWidthX,r.nominalWidthX=g._privateDict.nominalWidthX),g.ros[0]!==void 0&&g.ros[1]!==void 0&&(r.isCIDFont=!0),r.isCIDFont){var b=g.fdArray,y=g.fdSelect;if(b===0||y===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");b+=n;var C=nr(t,b),w=cv(t,n,C.objects,m.objects);g._fdArray=w,y+=n,g._fdSelect=bT(t,y,r.numGlyphs,w.length)}var E=n+g.private[1],A=Jg(t,E,g.private[0],m.objects);if(r.defaultWidthX=A.defaultWidthX,r.nominalWidthX=A.nominalWidthX,A.subrs!==0){var T=E+A.subrs,D=nr(t,T);r.subrs=D.objects,r.subrsBias=Bf(r.subrs)}else r.subrs=[],r.subrsBias=0;var M;i.lowMemory?(M=uT(t,n+g.charStrings),r.nGlyphs=M.offsets.length):(M=nr(t,n+g.charStrings),r.nGlyphs=M.objects.length);var Y=gT(t,n+g.charset,r.nGlyphs,m.objects);if(g.encoding===0?r.cffEncoding=new Ls(eT,Y):g.encoding===1?r.cffEncoding=new Ls(tT,Y):r.cffEncoding=xT(t,n+g.encoding,Y),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new Qa.GlyphSet(r),i.lowMemory)r._push=function(B){var G=fT(B,M.offsets,t,n+g.charStrings);r.glyphs.push(B,Qa.cffGlyphLoader(r,B,uv,G))};else for(var V=0;V<r.nGlyphs;V+=1){var X=M.objects[V];r.glyphs.push(V,Qa.cffGlyphLoader(r,V,uv,X))}}function $g(t,n){var r,i=ys.indexOf(t);return i>=0&&(r=i),i=n.indexOf(t),i>=0?r=i+ys.length:(r=ys.length+n.length,n.push(t)),r}function ST(){return new se.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function CT(t){var n=new se.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);n.names=[];for(var r=0;r<t.length;r+=1)n.names.push({name:"name_"+r,type:"NAME",value:t[r]});return n}function ex(t,n,r){for(var i={},s=0;s<t.length;s+=1){var c=t[s],f=n[c.name];f!==void 0&&!Xg(f,c.value)&&(c.type==="SID"&&(f=$g(f,r)),i[c.op]={name:c.name,type:c.type,value:f})}return i}function fv(t,n){var r=new se.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ex(Qg,t,n),r}function dv(t){var n=new se.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return n.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],n}function TT(t){var n=new se.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);n.strings=[];for(var r=0;r<t.length;r+=1)n.strings.push({name:"string_"+r,type:"STRING",value:t[r]});return n}function wT(){return new se.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function ET(t,n){for(var r=new se.Record("Charsets",[{name:"format",type:"Card8",value:0}]),i=0;i<t.length;i+=1){var s=t[i],c=$g(s,n);r.fields.push({name:"glyph_"+i,type:"SID",value:c})}return r}function AT(t){var n=[],r=t.path;n.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var i=0,s=0,c=0;c<r.commands.length;c+=1){var f=void 0,m=void 0,p=r.commands[c];if(p.type==="Q"){var v=.3333333333333333,g=2/3;p={type:"C",x:p.x,y:p.y,x1:Math.round(v*i+g*p.x1),y1:Math.round(v*s+g*p.y1),x2:Math.round(v*p.x+g*p.x1),y2:Math.round(v*p.y+g*p.y1)}}if(p.type==="M")f=Math.round(p.x-i),m=Math.round(p.y-s),n.push({name:"dx",type:"NUMBER",value:f}),n.push({name:"dy",type:"NUMBER",value:m}),n.push({name:"rmoveto",type:"OP",value:21}),i=Math.round(p.x),s=Math.round(p.y);else if(p.type==="L")f=Math.round(p.x-i),m=Math.round(p.y-s),n.push({name:"dx",type:"NUMBER",value:f}),n.push({name:"dy",type:"NUMBER",value:m}),n.push({name:"rlineto",type:"OP",value:5}),i=Math.round(p.x),s=Math.round(p.y);else if(p.type==="C"){var b=Math.round(p.x1-i),y=Math.round(p.y1-s),C=Math.round(p.x2-p.x1),w=Math.round(p.y2-p.y1);f=Math.round(p.x-p.x2),m=Math.round(p.y-p.y2),n.push({name:"dx1",type:"NUMBER",value:b}),n.push({name:"dy1",type:"NUMBER",value:y}),n.push({name:"dx2",type:"NUMBER",value:C}),n.push({name:"dy2",type:"NUMBER",value:w}),n.push({name:"dx",type:"NUMBER",value:f}),n.push({name:"dy",type:"NUMBER",value:m}),n.push({name:"rrcurveto",type:"OP",value:8}),i=Math.round(p.x),s=Math.round(p.y)}}return n.push({name:"endchar",type:"OP",value:14}),n}function kT(t){for(var n=new se.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<t.length;r+=1){var i=t.get(r),s=AT(i);n.charStrings.push({name:i.name,type:"CHARSTRING",value:s})}return n}function OT(t,n){var r=new se.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ex(Kg,t,n),r}function RT(t,n){for(var r=new se.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/n.unitsPerEm,s={version:n.version,fullName:n.fullName,familyName:n.familyName,weight:n.weightName,fontBBox:n.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},c={},f=[],m,p=1;p<t.length;p+=1)m=t.get(p),f.push(m.name);var v=[];r.header=ST(),r.nameIndex=CT([n.postScriptName]);var g=fv(s,v);r.topDictIndex=dv(g),r.globalSubrIndex=wT(),r.charsets=ET(f,v),r.charStringsIndex=kT(t),r.privateDict=OT(c,v),r.stringIndex=TT(v);var b=r.header.sizeOf()+r.nameIndex.sizeOf()+r.topDictIndex.sizeOf()+r.stringIndex.sizeOf()+r.globalSubrIndex.sizeOf();return s.charset=b,s.encoding=0,s.charStrings=s.charset+r.charsets.sizeOf(),s.private[1]=s.charStrings+r.charStringsIndex.sizeOf(),g=fv(s,v),r.topDictIndex=dv(g),r}var tx={parse:yT,make:RT};function DT(t,n){var r={},i=new de.Parser(t,n);return r.version=i.parseVersion(),r.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,r.checkSumAdjustment=i.parseULong(),r.magicNumber=i.parseULong(),ke.argument(r.magicNumber===1594834165,"Font header has wrong magic number."),r.flags=i.parseUShort(),r.unitsPerEm=i.parseUShort(),r.created=i.parseLongDateTime(),r.modified=i.parseLongDateTime(),r.xMin=i.parseShort(),r.yMin=i.parseShort(),r.xMax=i.parseShort(),r.yMax=i.parseShort(),r.macStyle=i.parseUShort(),r.lowestRecPPEM=i.parseUShort(),r.fontDirectionHint=i.parseShort(),r.indexToLocFormat=i.parseShort(),r.glyphDataFormat=i.parseShort(),r}function UT(t){var n=Math.round(new Date().getTime()/1e3)+2082844800,r=n;return t.createdTimestamp&&(r=t.createdTimestamp+2082844800),new se.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:n},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var ax={parse:DT,make:UT};function MT(t,n){var r={},i=new de.Parser(t,n);return r.version=i.parseVersion(),r.ascender=i.parseShort(),r.descender=i.parseShort(),r.lineGap=i.parseShort(),r.advanceWidthMax=i.parseUShort(),r.minLeftSideBearing=i.parseShort(),r.minRightSideBearing=i.parseShort(),r.xMaxExtent=i.parseShort(),r.caretSlopeRise=i.parseShort(),r.caretSlopeRun=i.parseShort(),r.caretOffset=i.parseShort(),i.relativeOffset+=8,r.metricDataFormat=i.parseShort(),r.numberOfHMetrics=i.parseUShort(),r}function LT(t){return new se.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var nx={parse:MT,make:LT};function zT(t,n,r,i,s){for(var c,f,m=new de.Parser(t,n),p=0;p<i;p+=1){p<r&&(c=m.parseUShort(),f=m.parseShort());var v=s.get(p);v.advanceWidth=c,v.leftSideBearing=f}}function jT(t,n,r,i,s){t._hmtxTableData={};for(var c,f,m=new de.Parser(n,r),p=0;p<s;p+=1)p<i&&(c=m.parseUShort(),f=m.parseShort()),t._hmtxTableData[p]={advanceWidth:c,leftSideBearing:f}}function FT(t,n,r,i,s,c,f){f.lowMemory?jT(t,n,r,i,s):zT(n,r,i,s,c)}function NT(t){for(var n=new se.Table("hmtx",[]),r=0;r<t.length;r+=1){var i=t.get(r),s=i.advanceWidth||0,c=i.leftSideBearing||0;n.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:s}),n.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:c})}return n}var rx={parse:FT,make:NT};function BT(t){for(var n=new se.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),r="",i=12+t.length*4,s=0;s<t.length;++s){var c=r.indexOf(t[s]);c<0&&(c=r.length,r+=t[s]),n.fields.push({name:"offset "+s,type:"USHORT",value:i+c}),n.fields.push({name:"length "+s,type:"USHORT",value:t[s].length})}return n.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),n}function IT(t,n){var r=new de.Parser(t,n),i=r.parseULong();ke.argument(i===1,"Unsupported ltag table version."),r.skip("uLong",1);for(var s=r.parseULong(),c=[],f=0;f<s;f++){for(var m="",p=n+r.parseUShort(),v=r.parseUShort(),g=p;g<p+v;++g)m+=String.fromCharCode(t.getInt8(g));c.push(m)}return c}var ix={make:BT,parse:IT};function _T(t,n){var r={},i=new de.Parser(t,n);return r.version=i.parseVersion(),r.numGlyphs=i.parseUShort(),r.version===1&&(r.maxPoints=i.parseUShort(),r.maxContours=i.parseUShort(),r.maxCompositePoints=i.parseUShort(),r.maxCompositeContours=i.parseUShort(),r.maxZones=i.parseUShort(),r.maxTwilightPoints=i.parseUShort(),r.maxStorage=i.parseUShort(),r.maxFunctionDefs=i.parseUShort(),r.maxInstructionDefs=i.parseUShort(),r.maxStackElements=i.parseUShort(),r.maxSizeOfInstructions=i.parseUShort(),r.maxComponentElements=i.parseUShort(),r.maxComponentDepth=i.parseUShort()),r}function GT(t){return new se.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var lx={parse:_T,make:GT},ox=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],sx={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},PT={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},cx={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function HT(t,n,r){switch(t){case 0:if(n===65535)return"und";if(r)return r[n];break;case 1:return sx[n];case 3:return cx[n]}}var If="utf-16",VT={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},qT={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function ux(t,n,r){switch(t){case 0:return If;case 1:return qT[r]||VT[n];case 3:if(n===1||n===10)return If;break}}function YT(t,n,r){for(var i={},s=new de.Parser(t,n),c=s.parseUShort(),f=s.parseUShort(),m=s.offset+s.parseUShort(),p=0;p<f;p++){var v=s.parseUShort(),g=s.parseUShort(),b=s.parseUShort(),y=s.parseUShort(),C=ox[y]||y,w=s.parseUShort(),E=s.parseUShort(),A=HT(v,b,r),T=ux(v,g,b);if(T!==void 0&&A!==void 0){var D=void 0;if(T===If?D=Ei.UTF16(t,m+E,w):D=Ei.MACSTRING(t,m+E,w,T),D){var M=i[C];M===void 0&&(M=i[C]={}),M[A]=D}}}return c===1&&s.parseUShort(),i}function pf(t){var n={};for(var r in t)n[t[r]]=parseInt(r);return n}function pv(t,n,r,i,s,c){return new se.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:n},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:s},{name:"offset",type:"USHORT",value:c}])}function XT(t,n){var r=t.length,i=n.length-r+1;e:for(var s=0;s<i;s++)for(;s<i;s++){for(var c=0;c<r;c++)if(n[s+c]!==t[c])continue e;return s}return-1}function mv(t,n){var r=XT(t,n);if(r<0){r=n.length;for(var i=0,s=t.length;i<s;++i)n.push(t[i])}return r}function WT(t,n){var r,i=[],s={},c=pf(ox);for(var f in t){var m=c[f];if(m===void 0&&(m=f),r=parseInt(m),isNaN(r))throw new Error('Name table entry "'+f+'" does not exist, see nameTableNames for complete list.');s[r]=t[f],i.push(r)}for(var p=pf(sx),v=pf(cx),g=[],b=[],y=0;y<i.length;y++){r=i[y];var C=s[r];for(var w in C){var E=C[w],A=1,T=p[w],D=PT[T],M=ux(A,D,T),Y=le.MACSTRING(E,M);Y===void 0&&(A=0,T=n.indexOf(w),T<0&&(T=n.length,n.push(w)),D=4,Y=le.UTF16(E));var V=mv(Y,b);g.push(pv(A,D,T,r,Y.length,V));var X=v[w];if(X!==void 0){var B=le.UTF16(E),G=mv(B,b);g.push(pv(3,1,X,r,B.length,G))}}}g.sort(function(ye,Se){return ye.platformID-Se.platformID||ye.encodingID-Se.encodingID||ye.languageID-Se.languageID||ye.nameID-Se.nameID});for(var ne=new se.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:g.length},{name:"stringOffset",type:"USHORT",value:6+g.length*12}]),ce=0;ce<g.length;ce++)ne.fields.push({name:"record_"+ce,type:"RECORD",value:g[ce]});return ne.fields.push({name:"strings",type:"LITERAL",value:b}),ne}var fx={parse:YT,make:WT},_f=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function ZT(t){for(var n=0;n<_f.length;n+=1){var r=_f[n];if(t>=r.begin&&t<r.end)return n}return-1}function QT(t,n){var r={},i=new de.Parser(t,n);r.version=i.parseUShort(),r.xAvgCharWidth=i.parseShort(),r.usWeightClass=i.parseUShort(),r.usWidthClass=i.parseUShort(),r.fsType=i.parseUShort(),r.ySubscriptXSize=i.parseShort(),r.ySubscriptYSize=i.parseShort(),r.ySubscriptXOffset=i.parseShort(),r.ySubscriptYOffset=i.parseShort(),r.ySuperscriptXSize=i.parseShort(),r.ySuperscriptYSize=i.parseShort(),r.ySuperscriptXOffset=i.parseShort(),r.ySuperscriptYOffset=i.parseShort(),r.yStrikeoutSize=i.parseShort(),r.yStrikeoutPosition=i.parseShort(),r.sFamilyClass=i.parseShort(),r.panose=[];for(var s=0;s<10;s++)r.panose[s]=i.parseByte();return r.ulUnicodeRange1=i.parseULong(),r.ulUnicodeRange2=i.parseULong(),r.ulUnicodeRange3=i.parseULong(),r.ulUnicodeRange4=i.parseULong(),r.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),r.fsSelection=i.parseUShort(),r.usFirstCharIndex=i.parseUShort(),r.usLastCharIndex=i.parseUShort(),r.sTypoAscender=i.parseShort(),r.sTypoDescender=i.parseShort(),r.sTypoLineGap=i.parseShort(),r.usWinAscent=i.parseUShort(),r.usWinDescent=i.parseUShort(),r.version>=1&&(r.ulCodePageRange1=i.parseULong(),r.ulCodePageRange2=i.parseULong()),r.version>=2&&(r.sxHeight=i.parseShort(),r.sCapHeight=i.parseShort(),r.usDefaultChar=i.parseUShort(),r.usBreakChar=i.parseUShort(),r.usMaxContent=i.parseUShort()),r}function KT(t){return new se.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var Gf={parse:QT,make:KT,unicodeRanges:_f,getUnicodeRange:ZT};function JT(t,n){var r={},i=new de.Parser(t,n);switch(r.version=i.parseVersion(),r.italicAngle=i.parseFixed(),r.underlinePosition=i.parseShort(),r.underlineThickness=i.parseShort(),r.isFixedPitch=i.parseULong(),r.minMemType42=i.parseULong(),r.maxMemType42=i.parseULong(),r.minMemType1=i.parseULong(),r.maxMemType1=i.parseULong(),r.version){case 1:r.names=Dr.slice();break;case 2:r.numberOfGlyphs=i.parseUShort(),r.glyphNameIndex=new Array(r.numberOfGlyphs);for(var s=0;s<r.numberOfGlyphs;s++)r.glyphNameIndex[s]=i.parseUShort();r.names=[];for(var c=0;c<r.numberOfGlyphs;c++)if(r.glyphNameIndex[c]>=Dr.length){var f=i.parseChar();r.names.push(i.parseString(f))}break;case 2.5:r.numberOfGlyphs=i.parseUShort(),r.offset=new Array(r.numberOfGlyphs);for(var m=0;m<r.numberOfGlyphs;m++)r.offset[m]=i.parseChar();break}return r}function $T(){return new se.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var dx={parse:JT,make:$T},Fa=new Array(9);Fa[1]=function(){var n=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(_.coverage),deltaGlyphId:this.parseUShort()};if(r===2)return{substFormat:2,coverage:this.parsePointer(_.coverage),substitute:this.parseOffset16List()};ke.assert(!1,"0x"+n.toString(16)+": lookup type 1 format must be 1 or 2.")};Fa[2]=function(){var n=this.parseUShort();return ke.argument(n===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(_.coverage),sequences:this.parseListOfLists()}};Fa[3]=function(){var n=this.parseUShort();return ke.argument(n===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(_.coverage),alternateSets:this.parseListOfLists()}};Fa[4]=function(){var n=this.parseUShort();return ke.argument(n===1,"GSUB ligature table identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(_.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var Ti={sequenceIndex:_.uShort,lookupListIndex:_.uShort};Fa[5]=function(){var n=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:r,coverage:this.parsePointer(_.coverage),ruleSets:this.parseListOfLists(function(){var c=this.parseUShort(),f=this.parseUShort();return{input:this.parseUShortList(c-1),lookupRecords:this.parseRecordList(f,Ti)}})};if(r===2)return{substFormat:r,coverage:this.parsePointer(_.coverage),classDef:this.parsePointer(_.classDef),classSets:this.parseListOfLists(function(){var c=this.parseUShort(),f=this.parseUShort();return{classes:this.parseUShortList(c-1),lookupRecords:this.parseRecordList(f,Ti)}})};if(r===3){var i=this.parseUShort(),s=this.parseUShort();return{substFormat:r,coverages:this.parseList(i,_.pointer(_.coverage)),lookupRecords:this.parseRecordList(s,Ti)}}ke.assert(!1,"0x"+n.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};Fa[6]=function(){var n=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(_.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Ti)}})};if(r===2)return{substFormat:2,coverage:this.parsePointer(_.coverage),backtrackClassDef:this.parsePointer(_.classDef),inputClassDef:this.parsePointer(_.classDef),lookaheadClassDef:this.parsePointer(_.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(Ti)}})};if(r===3)return{substFormat:3,backtrackCoverage:this.parseList(_.pointer(_.coverage)),inputCoverage:this.parseList(_.pointer(_.coverage)),lookaheadCoverage:this.parseList(_.pointer(_.coverage)),lookupRecords:this.parseRecordList(Ti)};ke.assert(!1,"0x"+n.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};Fa[7]=function(){var n=this.parseUShort();ke.argument(n===1,"GSUB Extension Substitution subtable identifier-format must be 1");var r=this.parseUShort(),i=new _(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:r,extension:Fa[r].call(i)}};Fa[8]=function(){var n=this.parseUShort();return ke.argument(n===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(_.coverage),backtrackCoverage:this.parseList(_.pointer(_.coverage)),lookaheadCoverage:this.parseList(_.pointer(_.coverage)),substitutes:this.parseUShortList()}};function ew(t,n){n=n||0;var r=new _(t,n),i=r.parseVersion(1);return ke.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Fa)}:{version:i,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Fa),variations:r.parseFeatureVariationsList()}}var Oi=new Array(9);Oi[1]=function(n){return n.substFormat===1?new se.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)},{name:"deltaGlyphID",type:"USHORT",value:n.deltaGlyphId}]):new se.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)}].concat(se.ushortList("substitute",n.substitute)))};Oi[2]=function(n){return ke.assert(n.substFormat===1,"Lookup type 2 substFormat must be 1."),new se.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)}].concat(se.tableList("seqSet",n.sequences,function(r){return new se.Table("sequenceSetTable",se.ushortList("sequence",r))})))};Oi[3]=function(n){return ke.assert(n.substFormat===1,"Lookup type 3 substFormat must be 1."),new se.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)}].concat(se.tableList("altSet",n.alternateSets,function(r){return new se.Table("alternateSetTable",se.ushortList("alternate",r))})))};Oi[4]=function(n){return ke.assert(n.substFormat===1,"Lookup type 4 substFormat must be 1."),new se.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)}].concat(se.tableList("ligSet",n.ligatureSets,function(r){return new se.Table("ligatureSetTable",se.tableList("ligature",r,function(i){return new se.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(se.ushortList("component",i.components,i.components.length+1)))}))})))};Oi[6]=function(n){if(n.substFormat===1){var r=new se.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:n.substFormat},{name:"coverage",type:"TABLE",value:new se.Coverage(n.coverage)}].concat(se.tableList("chainRuleSet",n.chainRuleSets,function(c){return new se.Table("chainRuleSetTable",se.tableList("chainRule",c,function(f){var m=se.ushortList("backtrackGlyph",f.backtrack,f.backtrack.length).concat(se.ushortList("inputGlyph",f.input,f.input.length+1)).concat(se.ushortList("lookaheadGlyph",f.lookahead,f.lookahead.length)).concat(se.ushortList("substitution",[],f.lookupRecords.length));return f.lookupRecords.forEach(function(p,v){m=m.concat({name:"sequenceIndex"+v,type:"USHORT",value:p.sequenceIndex}).concat({name:"lookupListIndex"+v,type:"USHORT",value:p.lookupListIndex})}),new se.Table("chainRuleTable",m)}))})));return r}else if(n.substFormat===2)ke.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(n.substFormat===3){var i=[{name:"substFormat",type:"USHORT",value:n.substFormat}];i.push({name:"backtrackGlyphCount",type:"USHORT",value:n.backtrackCoverage.length}),n.backtrackCoverage.forEach(function(c,f){i.push({name:"backtrackCoverage"+f,type:"TABLE",value:new se.Coverage(c)})}),i.push({name:"inputGlyphCount",type:"USHORT",value:n.inputCoverage.length}),n.inputCoverage.forEach(function(c,f){i.push({name:"inputCoverage"+f,type:"TABLE",value:new se.Coverage(c)})}),i.push({name:"lookaheadGlyphCount",type:"USHORT",value:n.lookaheadCoverage.length}),n.lookaheadCoverage.forEach(function(c,f){i.push({name:"lookaheadCoverage"+f,type:"TABLE",value:new se.Coverage(c)})}),i.push({name:"substitutionCount",type:"USHORT",value:n.lookupRecords.length}),n.lookupRecords.forEach(function(c,f){i=i.concat({name:"sequenceIndex"+f,type:"USHORT",value:c.sequenceIndex}).concat({name:"lookupListIndex"+f,type:"USHORT",value:c.lookupListIndex})});var s=new se.Table("chainContextTable",i);return s}ke.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function tw(t){return new se.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new se.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new se.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new se.LookupList(t.lookups,Oi)}])}var px={parse:ew,make:tw};function aw(t,n){var r=new de.Parser(t,n),i=r.parseULong();ke.argument(i===1,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var s=r.parseULong(),c={},f=0;f<s;f++){var m=r.parseTag(),p=r.parseULong(),v=r.parseULong(),g=Ei.UTF8(t,n+p,v);c[m]=g}return c}function nw(t){var n=Object.keys(t).length,r="",i=16+n*12,s=new se.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:n}]);for(var c in t){var f=r.length;r+=t[c],s.fields.push({name:"tag "+c,type:"TAG",value:c}),s.fields.push({name:"offset "+c,type:"ULONG",value:i+f}),s.fields.push({name:"length "+c,type:"ULONG",value:t[c].length})}return s.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),s}var mx={parse:aw,make:nw};function hv(t){return Math.log(t)/Math.log(2)|0}function ud(t){for(;t.length%4!==0;)t.push(0);for(var n=0,r=0;r<t.length;r+=4)n+=(t[r]<<24)+(t[r+1]<<16)+(t[r+2]<<8)+t[r+3];return n%=Math.pow(2,32),n}function vv(t,n,r,i){return new se.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:n!==void 0?n:0},{name:"offset",type:"ULONG",value:r!==void 0?r:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function hx(t){var n=new se.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);n.tables=t,n.numTables=t.length;var r=Math.pow(2,hv(n.numTables));n.searchRange=16*r,n.entrySelector=hv(r),n.rangeShift=n.numTables*16-n.searchRange;for(var i=[],s=[],c=n.sizeOf()+vv().sizeOf()*n.numTables;c%4!==0;)c+=1,s.push({name:"padding",type:"BYTE",value:0});for(var f=0;f<t.length;f+=1){var m=t[f];ke.argument(m.tableName.length===4,"Table name"+m.tableName+" is invalid.");var p=m.sizeOf(),v=vv(m.tableName,ud(m.encode()),c,p);for(i.push({name:v.tag+" Table Record",type:"RECORD",value:v}),s.push({name:m.tableName+" table",type:"RECORD",value:m}),c+=p,ke.argument(!isNaN(c),"Something went wrong calculating the offset.");c%4!==0;)c+=1,s.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(g,b){return g.value.tag>b.value.tag?1:-1}),n.fields=n.fields.concat(i),n.fields=n.fields.concat(s),n}function gv(t,n,r){for(var i=0;i<n.length;i+=1){var s=t.charToGlyphIndex(n[i]);if(s>0){var c=t.glyphs.get(s);return c.getMetrics()}}return r}function rw(t){for(var n=0,r=0;r<t.length;r+=1)n+=t[r];return n/t.length}function iw(t){for(var n=[],r=[],i=[],s=[],c=[],f=[],m=[],p,v=0,g=0,b=0,y=0,C=0,w=0;w<t.glyphs.length;w+=1){var E=t.glyphs.get(w),A=E.unicode|0;if(isNaN(E.advanceWidth))throw new Error("Glyph "+E.name+" ("+w+"): advanceWidth is not a number.");(p>A||p===void 0)&&A>0&&(p=A),v<A&&(v=A);var T=Gf.getUnicodeRange(A);if(T<32)g|=1<<T;else if(T<64)b|=1<<T-32;else if(T<96)y|=1<<T-64;else if(T<123)C|=1<<T-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(E.name!==".notdef"){var D=E.getMetrics();n.push(D.xMin),r.push(D.yMin),i.push(D.xMax),s.push(D.yMax),f.push(D.leftSideBearing),m.push(D.rightSideBearing),c.push(E.advanceWidth)}}var M={xMin:Math.min.apply(null,n),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,s),advanceWidthMax:Math.max.apply(null,c),advanceWidthAvg:rw(c),minLeftSideBearing:Math.min.apply(null,f),maxLeftSideBearing:Math.max.apply(null,f),minRightSideBearing:Math.min.apply(null,m)};M.ascender=t.ascender,M.descender=t.descender;var Y=ax.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:M.xMin,yMin:M.yMin,xMax:M.xMax,yMax:M.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),V=nx.make({ascender:M.ascender,descender:M.descender,advanceWidthMax:M.advanceWidthMax,minLeftSideBearing:M.minLeftSideBearing,minRightSideBearing:M.minRightSideBearing,xMaxExtent:M.maxLeftSideBearing+(M.xMax-M.xMin),numberOfHMetrics:t.glyphs.length}),X=lx.make(t.glyphs.length),B=Gf.make(Object.assign({xAvgCharWidth:Math.round(M.advanceWidthAvg),usFirstCharIndex:p,usLastCharIndex:v,ulUnicodeRange1:g,ulUnicodeRange2:b,ulUnicodeRange3:y,ulUnicodeRange4:C,sTypoAscender:M.ascender,sTypoDescender:M.descender,sTypoLineGap:0,usWinAscent:M.yMax,usWinDescent:Math.abs(M.yMin),ulCodePageRange1:1,sxHeight:gv(t,"xyvw",{yMax:Math.round(M.ascender/2)}).yMax,sCapHeight:gv(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",M).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),G=rx.make(t.glyphs),ne=Vg.make(t.glyphs),ce=t.getEnglishName("fontFamily"),ye=t.getEnglishName("fontSubfamily"),Se=ce+" "+ye,ee=t.getEnglishName("postScriptName");ee||(ee=ce.replace(/\s/g,"")+"-"+ye);var ge={};for(var he in t.names)ge[he]=t.names[he];ge.uniqueID||(ge.uniqueID={en:t.getEnglishName("manufacturer")+":"+Se}),ge.postScriptName||(ge.postScriptName={en:ee}),ge.preferredFamily||(ge.preferredFamily=t.names.fontFamily),ge.preferredSubfamily||(ge.preferredSubfamily=t.names.fontSubfamily);var F=[],$=fx.make(ge,F),re=F.length>0?ix.make(F):void 0,oe=dx.make(),we=tx.make(t.glyphs,{version:t.getEnglishName("version"),fullName:Se,familyName:ce,weightName:ye,postScriptName:ee,unitsPerEm:t.unitsPerEm,fontBBox:[0,M.yMin,M.ascender,M.advanceWidthMax]}),O=t.metas&&Object.keys(t.metas).length>0?mx.make(t.metas):void 0,I=[Y,V,X,B,$,ne,oe,we,G];re&&I.push(re),t.tables.gsub&&I.push(px.make(t.tables.gsub)),O&&I.push(O);for(var te=hx(I),ie=te.encode(),ve=ud(ie),me=te.fields,Q=!1,De=0;De<me.length;De+=1)if(me[De].name==="head table"){me[De].value.checkSumAdjustment=2981146554-ve,Q=!0;break}if(!Q)throw new Error("Could not find head table with checkSum to adjust.");return te}var lw={make:hx,fontToTable:iw,computeCheckSum:ud};function mf(t,n){for(var r=0,i=t.length-1;r<=i;){var s=r+i>>>1,c=t[s].tag;if(c===n)return s;c<n?r=s+1:i=s-1}return-r-1}function xv(t,n){for(var r=0,i=t.length-1;r<=i;){var s=r+i>>>1,c=t[s];if(c===n)return s;c<n?r=s+1:i=s-1}return-r-1}function bv(t,n){for(var r,i=0,s=t.length-1;i<=s;){var c=i+s>>>1;r=t[c];var f=r.start;if(f===n)return r;f<n?i=c+1:s=c-1}if(i>0)return r=t[i-1],n>r.end?0:r}function Hl(t,n){this.font=t,this.tableName=n}Hl.prototype={searchTag:mf,binSearch:xv,getTable:function(t){var n=this.font.tables[this.tableName];return!n&&t&&(n=this.font.tables[this.tableName]=this.createDefaultTable()),n},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(n){return n.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var n=!1,r=0;r<t.scripts.length;r++){var i=t.scripts[r].tag;if(i==="DFLT")return i;i==="latn"&&(n=!0)}if(n)return"latn"}},getScriptTable:function(t,n){var r=this.getTable(n);if(r){t=t||"DFLT";var i=r.scripts,s=mf(r.scripts,t);if(s>=0)return i[s].script;if(n){var c={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-s,0,c),c.script}}},getLangSysTable:function(t,n,r){var i=this.getScriptTable(t,r);if(i){if(!n||n==="dflt"||n==="DFLT")return i.defaultLangSys;var s=mf(i.langSysRecords,n);if(s>=0)return i.langSysRecords[s].langSys;if(r){var c={tag:n,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-s,0,c),c.langSys}}},getFeatureTable:function(t,n,r,i){var s=this.getLangSysTable(t,n,i);if(s){for(var c,f=s.featureIndexes,m=this.font.tables[this.tableName].features,p=0;p<f.length;p++)if(c=m[f[p]],c.tag===r)return c.feature;if(i){var v=m.length;return ke.assert(v===0||r>=m[v-1].tag,"Features must be added in alphabetical order."),c={tag:r,feature:{params:0,lookupListIndexes:[]}},m.push(c),f.push(v),c.feature}}},getLookupTables:function(t,n,r,i,s){var c=this.getFeatureTable(t,n,r,s),f=[];if(c){for(var m,p=c.lookupListIndexes,v=this.font.tables[this.tableName].lookups,g=0;g<p.length;g++)m=v[p[g]],m.lookupType===i&&f.push(m);if(f.length===0&&s){m={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};var b=v.length;return v.push(m),p.push(b),[m]}}return f},getGlyphClass:function(t,n){switch(t.format){case 1:return t.startGlyph<=n&&n<t.startGlyph+t.classes.length?t.classes[n-t.startGlyph]:0;case 2:var r=bv(t.ranges,n);return r?r.classId:0}},getCoverageIndex:function(t,n){switch(t.format){case 1:var r=xv(t.glyphs,n);return r>=0?r:-1;case 2:var i=bv(t.ranges,n);return i?i.index+n-i.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var n=[],r=t.ranges,i=0;i<r.length;i++)for(var s=r[i],c=s.start,f=s.end,m=c;m<=f;m++)n.push(m);return n}};function Vl(t){Hl.call(this,t,"gpos")}Vl.prototype=Hl.prototype;Vl.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};Vl.prototype.getKerningValue=function(t,n,r){for(var i=0;i<t.length;i++)for(var s=t[i].subtables,c=0;c<s.length;c++){var f=s[c],m=this.getCoverageIndex(f.coverage,n);if(!(m<0))switch(f.posFormat){case 1:for(var p=f.pairSets[m],v=0;v<p.length;v++){var g=p[v];if(g.secondGlyph===r)return g.value1&&g.value1.xAdvance||0}break;case 2:var b=this.getGlyphClass(f.classDef1,n),y=this.getGlyphClass(f.classDef2,r),C=f.classRecords[b][y];return C.value1&&C.value1.xAdvance||0}}return 0};Vl.prototype.getKerningTables=function(t,n){if(this.font.tables.gpos)return this.getLookupTables(t,n,"kern",2)};function ua(t){Hl.call(this,t,"gsub")}function ow(t,n){var r=t.length;if(r!==n.length)return!1;for(var i=0;i<r;i++)if(t[i]!==n[i])return!1;return!0}function fd(t,n,r){for(var i=t.subtables,s=0;s<i.length;s++){var c=i[s];if(c.substFormat===n)return c}if(r)return i.push(r),r}ua.prototype=Hl.prototype;ua.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};ua.prototype.getSingle=function(t,n,r){for(var i=[],s=this.getLookupTables(n,r,t,1),c=0;c<s.length;c++)for(var f=s[c].subtables,m=0;m<f.length;m++){var p=f[m],v=this.expandCoverage(p.coverage),g=void 0;if(p.substFormat===1){var b=p.deltaGlyphId;for(g=0;g<v.length;g++){var y=v[g];i.push({sub:y,by:y+b})}}else{var C=p.substitute;for(g=0;g<v.length;g++)i.push({sub:v[g],by:C[g]})}}return i};ua.prototype.getMultiple=function(t,n,r){for(var i=[],s=this.getLookupTables(n,r,t,2),c=0;c<s.length;c++)for(var f=s[c].subtables,m=0;m<f.length;m++){var p=f[m],v=this.expandCoverage(p.coverage),g=void 0;for(g=0;g<v.length;g++){var b=v[g],y=p.sequences[g];i.push({sub:b,by:y})}}return i};ua.prototype.getAlternates=function(t,n,r){for(var i=[],s=this.getLookupTables(n,r,t,3),c=0;c<s.length;c++)for(var f=s[c].subtables,m=0;m<f.length;m++)for(var p=f[m],v=this.expandCoverage(p.coverage),g=p.alternateSets,b=0;b<v.length;b++)i.push({sub:v[b],by:g[b]});return i};ua.prototype.getLigatures=function(t,n,r){for(var i=[],s=this.getLookupTables(n,r,t,4),c=0;c<s.length;c++)for(var f=s[c].subtables,m=0;m<f.length;m++)for(var p=f[m],v=this.expandCoverage(p.coverage),g=p.ligatureSets,b=0;b<v.length;b++)for(var y=v[b],C=g[b],w=0;w<C.length;w++){var E=C[w];i.push({sub:[y].concat(E.components),by:E.ligGlyph})}return i};ua.prototype.addSingle=function(t,n,r,i){var s=this.getLookupTables(r,i,t,1,!0)[0],c=fd(s,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});ke.assert(c.coverage.format===1,"Single: unable to modify coverage table format "+c.coverage.format);var f=n.sub,m=this.binSearch(c.coverage.glyphs,f);m<0&&(m=-1-m,c.coverage.glyphs.splice(m,0,f),c.substitute.splice(m,0,0)),c.substitute[m]=n.by};ua.prototype.addMultiple=function(t,n,r,i){ke.assert(n.by instanceof Array&&n.by.length>1,'Multiple: "by" must be an array of two or more ids');var s=this.getLookupTables(r,i,t,2,!0)[0],c=fd(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});ke.assert(c.coverage.format===1,"Multiple: unable to modify coverage table format "+c.coverage.format);var f=n.sub,m=this.binSearch(c.coverage.glyphs,f);m<0&&(m=-1-m,c.coverage.glyphs.splice(m,0,f),c.sequences.splice(m,0,0)),c.sequences[m]=n.by};ua.prototype.addAlternate=function(t,n,r,i){var s=this.getLookupTables(r,i,t,3,!0)[0],c=fd(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});ke.assert(c.coverage.format===1,"Alternate: unable to modify coverage table format "+c.coverage.format);var f=n.sub,m=this.binSearch(c.coverage.glyphs,f);m<0&&(m=-1-m,c.coverage.glyphs.splice(m,0,f),c.alternateSets.splice(m,0,0)),c.alternateSets[m]=n.by};ua.prototype.addLigature=function(t,n,r,i){var s=this.getLookupTables(r,i,t,4,!0)[0],c=s.subtables[0];c||(c={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},s.subtables[0]=c),ke.assert(c.coverage.format===1,"Ligature: unable to modify coverage table format "+c.coverage.format);var f=n.sub[0],m=n.sub.slice(1),p={ligGlyph:n.by,components:m},v=this.binSearch(c.coverage.glyphs,f);if(v>=0){for(var g=c.ligatureSets[v],b=0;b<g.length;b++)if(ow(g[b].components,m))return;g.push(p)}else v=-1-v,c.coverage.glyphs.splice(v,0,f),c.ligatureSets.splice(v,0,[p])};ua.prototype.getFeature=function(t,n,r){if(/ss\d\d/.test(t))return this.getSingle(t,n,r);switch(t){case"aalt":case"salt":return this.getSingle(t,n,r).concat(this.getAlternates(t,n,r));case"dlig":case"liga":case"rlig":return this.getLigatures(t,n,r);case"ccmp":return this.getMultiple(t,n,r).concat(this.getLigatures(t,n,r));case"stch":return this.getMultiple(t,n,r)}};ua.prototype.add=function(t,n,r,i){if(/ss\d\d/.test(t))return this.addSingle(t,n,r,i);switch(t){case"aalt":case"salt":return typeof n.by=="number"?this.addSingle(t,n,r,i):this.addAlternate(t,n,r,i);case"dlig":case"liga":case"rlig":return this.addLigature(t,n,r,i);case"ccmp":return n.by instanceof Array?this.addMultiple(t,n,r,i):this.addLigature(t,n,r,i)}};function sw(){return typeof window<"u"}function vx(t){for(var n=new ArrayBuffer(t.length),r=new Uint8Array(n),i=0;i<t.length;++i)r[i]=t[i];return n}function cw(t){for(var n=new Buffer(t.byteLength),r=new Uint8Array(t),i=0;i<n.length;++i)n[i]=r[i];return n}function Ol(t,n){if(!t)throw n}function yv(t,n,r,i,s){var c;return(n&i)>0?(c=t.parseByte(),(n&s)===0&&(c=-c),c=r+c):(n&s)>0?c=r:c=r+t.parseShort(),c}function gx(t,n,r){var i=new de.Parser(n,r);t.numberOfContours=i.parseShort(),t._xMin=i.parseShort(),t._yMin=i.parseShort(),t._xMax=i.parseShort(),t._yMax=i.parseShort();var s,c;if(t.numberOfContours>0){for(var f=t.endPointIndices=[],m=0;m<t.numberOfContours;m+=1)f.push(i.parseUShort());t.instructionLength=i.parseUShort(),t.instructions=[];for(var p=0;p<t.instructionLength;p+=1)t.instructions.push(i.parseByte());var v=f[f.length-1]+1;s=[];for(var g=0;g<v;g+=1)if(c=i.parseByte(),s.push(c),(c&8)>0)for(var b=i.parseByte(),y=0;y<b;y+=1)s.push(c),g+=1;if(ke.argument(s.length===v,"Bad flags."),f.length>0){var C=[],w;if(v>0){for(var E=0;E<v;E+=1)c=s[E],w={},w.onCurve=!!(c&1),w.lastPointOfContour=f.indexOf(E)>=0,C.push(w);for(var A=0,T=0;T<v;T+=1)c=s[T],w=C[T],w.x=yv(i,c,A,2,16),A=w.x;for(var D=0,M=0;M<v;M+=1)c=s[M],w=C[M],w.y=yv(i,c,D,4,32),D=w.y}t.points=C}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var Y=!0;Y;){s=i.parseUShort();var V={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(s&1)>0?(s&2)>0?(V.dx=i.parseShort(),V.dy=i.parseShort()):V.matchedPoints=[i.parseUShort(),i.parseUShort()]:(s&2)>0?(V.dx=i.parseChar(),V.dy=i.parseChar()):V.matchedPoints=[i.parseByte(),i.parseByte()],(s&8)>0?V.xScale=V.yScale=i.parseF2Dot14():(s&64)>0?(V.xScale=i.parseF2Dot14(),V.yScale=i.parseF2Dot14()):(s&128)>0&&(V.xScale=i.parseF2Dot14(),V.scale01=i.parseF2Dot14(),V.scale10=i.parseF2Dot14(),V.yScale=i.parseF2Dot14()),t.components.push(V),Y=!!(s&32)}if(s&256){t.instructionLength=i.parseUShort(),t.instructions=[];for(var X=0;X<t.instructionLength;X+=1)t.instructions.push(i.parseByte())}}}function hf(t,n){for(var r=[],i=0;i<t.length;i+=1){var s=t[i],c={x:n.xScale*s.x+n.scale01*s.y+n.dx,y:n.scale10*s.x+n.yScale*s.y+n.dy,onCurve:s.onCurve,lastPointOfContour:s.lastPointOfContour};r.push(c)}return r}function uw(t){for(var n=[],r=[],i=0;i<t.length;i+=1){var s=t[i];r.push(s),s.lastPointOfContour&&(n.push(r),r=[])}return ke.argument(r.length===0,"There are still points left in the current contour."),n}function xx(t){var n=new Et;if(!t)return n;for(var r=uw(t),i=0;i<r.length;++i){var s=r[i],c=null,f=s[s.length-1],m=s[0];if(f.onCurve)n.moveTo(f.x,f.y);else if(m.onCurve)n.moveTo(m.x,m.y);else{var p={x:(f.x+m.x)*.5,y:(f.y+m.y)*.5};n.moveTo(p.x,p.y)}for(var v=0;v<s.length;++v)if(c=f,f=m,m=s[(v+1)%s.length],f.onCurve)n.lineTo(f.x,f.y);else{var g=m;c.onCurve||((f.x+c.x)*.5,(f.y+c.y)*.5),m.onCurve||(g={x:(f.x+m.x)*.5,y:(f.y+m.y)*.5}),n.quadraticCurveTo(f.x,f.y,g.x,g.y)}n.closePath()}return n}function bx(t,n){if(n.isComposite)for(var r=0;r<n.components.length;r+=1){var i=n.components[r],s=t.get(i.glyphIndex);if(s.getPath(),s.points){var c=void 0;if(i.matchedPoints===void 0)c=hf(s.points,i);else{if(i.matchedPoints[0]>n.points.length-1||i.matchedPoints[1]>s.points.length-1)throw Error("Matched points out of range in "+n.name);var f=n.points[i.matchedPoints[0]],m=s.points[i.matchedPoints[1]],p={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};m=hf([m],p)[0],p.dx=f.x-m.x,p.dy=f.y-m.y,c=hf(s.points,p)}n.points=n.points.concat(c)}}return xx(n.points)}function fw(t,n,r,i){for(var s=new Qa.GlyphSet(i),c=0;c<r.length-1;c+=1){var f=r[c],m=r[c+1];f!==m?s.push(c,Qa.ttfGlyphLoader(i,c,gx,t,n+f,bx)):s.push(c,Qa.glyphLoader(i,c))}return s}function dw(t,n,r,i){var s=new Qa.GlyphSet(i);return i._push=function(c){var f=r[c],m=r[c+1];f!==m?s.push(c,Qa.ttfGlyphLoader(i,c,gx,t,n+f,bx)):s.push(c,Qa.glyphLoader(i,c))},s}function pw(t,n,r,i,s){return s.lowMemory?dw(t,n,r,i):fw(t,n,r,i)}var yx={getPath:xx,parse:pw},Sx,Mr,Cx,Pf;function Tx(t){this.font=t,this.getCommands=function(n){return yx.getPath(n).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function mw(t){return t}function wx(t){return Math.sign(t)*Math.round(Math.abs(t))}function hw(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function vw(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function gw(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function xw(t){return Math.sign(t)*Math.floor(Math.abs(t))}var Ex=function(t){var n=this.srPeriod,r=this.srPhase,i=this.srThreshold,s=1;return t<0&&(t=-t,s=-1),t+=i-r,t=Math.trunc(t/n)*n,t+=r,t<0?r*s:t*s},Za={x:1,y:0,axis:"x",distance:function(t,n,r,i){return(r?t.xo:t.x)-(i?n.xo:n.x)},interpolate:function(t,n,r,i){var s,c,f,m,p,v,g;if(!i||i===this){if(s=t.xo-n.xo,c=t.xo-r.xo,p=n.x-n.xo,v=r.x-r.xo,f=Math.abs(s),m=Math.abs(c),g=f+m,g===0){t.x=t.xo+(p+v)/2;return}t.x=t.xo+(p*m+v*f)/g;return}if(s=i.distance(t,n,!0,!0),c=i.distance(t,r,!0,!0),p=i.distance(n,n,!1,!0),v=i.distance(r,r,!1,!0),f=Math.abs(s),m=Math.abs(c),g=f+m,g===0){Za.setRelative(t,t,(p+v)/2,i,!0);return}Za.setRelative(t,t,(p*m+v*f)/g,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,n,r,i,s){if(!i||i===this){t.x=(s?n.xo:n.x)+r;return}var c=s?n.xo:n.x,f=s?n.yo:n.y,m=c+r*i.x,p=f+r*i.y;t.x=m+(t.y-p)/i.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},wn={x:0,y:1,axis:"y",distance:function(t,n,r,i){return(r?t.yo:t.y)-(i?n.yo:n.y)},interpolate:function(t,n,r,i){var s,c,f,m,p,v,g;if(!i||i===this){if(s=t.yo-n.yo,c=t.yo-r.yo,p=n.y-n.yo,v=r.y-r.yo,f=Math.abs(s),m=Math.abs(c),g=f+m,g===0){t.y=t.yo+(p+v)/2;return}t.y=t.yo+(p*m+v*f)/g;return}if(s=i.distance(t,n,!0,!0),c=i.distance(t,r,!0,!0),p=i.distance(n,n,!1,!0),v=i.distance(r,r,!1,!0),f=Math.abs(s),m=Math.abs(c),g=f+m,g===0){wn.setRelative(t,t,(p+v)/2,i,!0);return}wn.setRelative(t,t,(p*m+v*f)/g,i,!0)},normalSlope:0,setRelative:function(t,n,r,i,s){if(!i||i===this){t.y=(s?n.yo:n.y)+r;return}var c=s?n.xo:n.x,f=s?n.yo:n.y,m=c+r*i.x,p=f+r*i.y;t.y=p+i.normalSlope*(t.x-m)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(Za);Object.freeze(wn);function ql(t,n){this.x=t,this.y=n,this.axis=void 0,this.slope=n/t,this.normalSlope=-t/n,Object.freeze(this)}ql.prototype.distance=function(t,n,r,i){return this.x*Za.distance(t,n,r,i)+this.y*wn.distance(t,n,r,i)};ql.prototype.interpolate=function(t,n,r,i){var s,c,f,m,p,v,g;if(f=i.distance(t,n,!0,!0),m=i.distance(t,r,!0,!0),s=i.distance(n,n,!1,!0),c=i.distance(r,r,!1,!0),p=Math.abs(f),v=Math.abs(m),g=p+v,g===0){this.setRelative(t,t,(s+c)/2,i,!0);return}this.setRelative(t,t,(s*v+c*p)/g,i,!0)};ql.prototype.setRelative=function(t,n,r,i,s){i=i||this;var c=s?n.xo:n.x,f=s?n.yo:n.y,m=c+r*i.x,p=f+r*i.y,v=i.normalSlope,g=this.slope,b=t.x,y=t.y;t.x=(g*b-v*m+p-y)/(g-v),t.y=g*(t.x-b)+y};ql.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function Yl(t,n){var r=Math.sqrt(t*t+n*n);return t/=r,n/=r,t===1&&n===0?Za:t===0&&n===1?wn:new ql(t,n)}function An(t,n,r,i){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(n*64)/64,this.lastPointOfContour=r,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}An.prototype.nextTouched=function(t){for(var n=this.nextPointOnContour;!t.touched(n)&&n!==this;)n=n.nextPointOnContour;return n};An.prototype.prevTouched=function(t){for(var n=this.prevPointOnContour;!t.touched(n)&&n!==this;)n=n.prevPointOnContour;return n};var Bl=Object.freeze(new An(0,0)),bw={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function rr(t,n){switch(this.env=t,this.stack=[],this.prog=n,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Za,this.round=wx}}Tx.prototype.exec=function(t,n){if(typeof n!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,i=this._prepState;if(!i||i.ppem!==n){var s=this._fpgmState;if(!s){rr.prototype=bw,s=this._fpgmState=new rr("fpgm",r.tables.fpgm),s.funcs=[],s.font=r,exports.DEBUG&&(console.log("---EXEC FPGM---"),s.step=-1);try{Mr(s)}catch(v){console.log("Hinting error in FPGM:"+v),this._errorState=3;return}}rr.prototype=s,i=this._prepState=new rr("prep",r.tables.prep),i.ppem=n;var c=r.tables.cvt;if(c)for(var f=i.cvt=new Array(c.length),m=n/r.unitsPerEm,p=0;p<c.length;p++)f[p]=c[p]*m;else i.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),i.step=-1);try{Mr(i)}catch(v){this._errorState<2&&console.log("Hinting error in PREP:"+v),this._errorState=2}}if(!(this._errorState>1))try{return Cx(t,i)}catch(v){this._errorState<1&&(console.log("Hinting error:"+v),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};Cx=function(t,n){var r=n.ppem/n.font.unitsPerEm,i=r,s=t.components,c,f,m;if(rr.prototype=n,!s)m=new rr("glyf",t.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),m.step=-1),Pf(t,m,r,i),f=m.gZone;else{var p=n.font;f=[],c=[];for(var v=0;v<s.length;v++){var g=s[v],b=p.glyphs.get(g.glyphIndex);m=new rr("glyf",b.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+v+"---"),m.step=-1),Pf(b,m,r,i);for(var y=Math.round(g.dx*r),C=Math.round(g.dy*i),w=m.gZone,E=m.contours,A=0;A<w.length;A++){var T=w[A];T.xTouched=T.yTouched=!1,T.xo=T.x=T.x+y,T.yo=T.y=T.y+C}var D=f.length;f.push.apply(f,w);for(var M=0;M<E.length;M++)c.push(E[M]+D)}t.instructions&&!m.inhibitGridFit&&(m=new rr("glyf",t.instructions),m.gZone=m.z0=m.z1=m.z2=f,m.contours=c,f.push(new An(0,0),new An(Math.round(t.advanceWidth*r),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),m.step=-1),Mr(m),f.length-=2)}return f};Pf=function(t,n,r,i){for(var s=t.points||[],c=s.length,f=n.gZone=n.z0=n.z1=n.z2=[],m=n.contours=[],p,v=0;v<c;v++)p=s[v],f[v]=new An(p.x*r,p.y*i,p.lastPointOfContour,p.onCurve);for(var g,b,y=0;y<c;y++)p=f[y],g||(g=p,m.push(y)),p.lastPointOfContour?(p.nextPointOnContour=g,g.prevPointOnContour=p,g=void 0):(b=f[y+1],p.nextPointOnContour=b,b.prevPointOnContour=p);if(!n.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",n.stack);for(var C=0;C<c;C++)console.log(C,f[C].x,f[C].y)}if(f.push(new An(0,0),new An(Math.round(t.advanceWidth*r),0)),Mr(n),f.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",n.stack);for(var w=0;w<c;w++)console.log(w,f[w].x,f[w].y)}}};Mr=function(t){var n=t.prog;if(n){var r=n.length,i;for(t.ip=0;t.ip<r;t.ip++){if(exports.DEBUG&&t.step++,i=Sx[n[t.ip]],!i)throw new Error("unknown instruction: 0x"+Number(n[t.ip]).toString(16));i(t)}}};function Ns(t){for(var n=t.tZone=new Array(t.gZone.length),r=0;r<n.length;r++)n[r]=new An(0,0)}function Ax(t,n){var r=t.prog,i=t.ip,s=1,c;do if(c=r[++i],c===88)s++;else if(c===89)s--;else if(c===64)i+=r[i+1]+1;else if(c===65)i+=2*r[i+1]+1;else if(c>=176&&c<=183)i+=c-176+1;else if(c>=184&&c<=191)i+=(c-184+1)*2;else if(n&&s===1&&c===27)break;while(s>0);t.ip=i}function Sv(t,n){exports.DEBUG&&console.log(n.step,"SVTCA["+t.axis+"]"),n.fv=n.pv=n.dpv=t}function Cv(t,n){exports.DEBUG&&console.log(n.step,"SPVTCA["+t.axis+"]"),n.pv=n.dpv=t}function Tv(t,n){exports.DEBUG&&console.log(n.step,"SFVTCA["+t.axis+"]"),n.fv=t}function wv(t,n){var r=n.stack,i=r.pop(),s=r.pop(),c=n.z2[i],f=n.z1[s];exports.DEBUG&&console.log("SPVTL["+t+"]",i,s);var m,p;t?(m=c.y-f.y,p=f.x-c.x):(m=f.x-c.x,p=f.y-c.y),n.pv=n.dpv=Yl(m,p)}function Ev(t,n){var r=n.stack,i=r.pop(),s=r.pop(),c=n.z2[i],f=n.z1[s];exports.DEBUG&&console.log("SFVTL["+t+"]",i,s);var m,p;t?(m=c.y-f.y,p=f.x-c.x):(m=f.x-c.x,p=f.y-c.y),n.fv=Yl(m,p)}function yw(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"SPVFS[]",r,i),t.pv=t.dpv=Yl(i,r)}function Sw(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"SPVFS[]",r,i),t.fv=Yl(i,r)}function Cw(t){var n=t.stack,r=t.pv;exports.DEBUG&&console.log(t.step,"GPV[]"),n.push(r.x*16384),n.push(r.y*16384)}function Tw(t){var n=t.stack,r=t.fv;exports.DEBUG&&console.log(t.step,"GFV[]"),n.push(r.x*16384),n.push(r.y*16384)}function ww(t){t.fv=t.pv,exports.DEBUG&&console.log(t.step,"SFVTPV[]")}function Ew(t){var n=t.stack,r=n.pop(),i=n.pop(),s=n.pop(),c=n.pop(),f=n.pop(),m=t.z0,p=t.z1,v=m[r],g=m[i],b=p[s],y=p[c],C=t.z2[f];exports.DEBUG&&console.log("ISECT[], ",r,i,s,c,f);var w=v.x,E=v.y,A=g.x,T=g.y,D=b.x,M=b.y,Y=y.x,V=y.y,X=(w-A)*(M-V)-(E-T)*(D-Y),B=w*T-E*A,G=D*V-M*Y;C.x=(B*(D-Y)-G*(w-A))/X,C.y=(B*(M-V)-G*(E-T))/X}function Aw(t){t.rp0=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function kw(t){t.rp1=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function Ow(t){t.rp2=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function Rw(t){var n=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP0[]",n),t.zp0=n,n){case 0:t.tZone||Ns(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Dw(t){var n=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP1[]",n),t.zp1=n,n){case 0:t.tZone||Ns(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Uw(t){var n=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZP2[]",n),t.zp2=n,n){case 0:t.tZone||Ns(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Mw(t){var n=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"SZPS[]",n),t.zp0=t.zp1=t.zp2=n,n){case 0:t.tZone||Ns(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Lw(t){t.loop=t.stack.pop(),exports.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function zw(t){exports.DEBUG&&console.log(t.step,"RTG[]"),t.round=wx}function jw(t){exports.DEBUG&&console.log(t.step,"RTHG[]"),t.round=vw}function Fw(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"SMD[]",n),t.minDis=n/64}function Nw(t){exports.DEBUG&&console.log(t.step,"ELSE[]"),Ax(t,!1)}function Bw(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"JMPR[]",n),t.ip+=n-1}function Iw(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCVTCI[]",n),t.cvCutIn=n/64}function _w(t){var n=t.stack;exports.DEBUG&&console.log(t.step,"DUP[]"),n.push(n[n.length-1])}function vf(t){exports.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function Gw(t){exports.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function Pw(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"SWAP[]"),n.push(r),n.push(i)}function Hw(t){var n=t.stack;exports.DEBUG&&console.log(t.step,"DEPTH[]"),n.push(n.length)}function Vw(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"LOOPCALL[]",r,i);var s=t.ip,c=t.prog;t.prog=t.funcs[r];for(var f=0;f<i;f++)Mr(t),exports.DEBUG&&console.log(++t.step,f+1<i?"next loopcall":"done loopcall",f);t.ip=s,t.prog=c}function qw(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"CALL[]",n);var r=t.ip,i=t.prog;t.prog=t.funcs[n],Mr(t),t.ip=r,t.prog=i,exports.DEBUG&&console.log(++t.step,"returning from",n)}function Yw(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"CINDEX[]",r),n.push(n[n.length-r])}function Xw(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"MINDEX[]",r),n.push(n.splice(n.length-r,1)[0])}function Ww(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var n=t.stack,r=t.prog,i=t.ip,s=n.pop(),c=i;for(exports.DEBUG&&console.log(t.step,"FDEF[]",s);r[++i]!==45;);t.ip=i,t.funcs[s]=r.slice(c+1,i)}function Av(t,n){var r=n.stack.pop(),i=n.z0[r],s=n.fv,c=n.pv;exports.DEBUG&&console.log(n.step,"MDAP["+t+"]",r);var f=c.distance(i,Bl);t&&(f=n.round(f)),s.setRelative(i,Bl,f,c),s.touch(i),n.rp0=n.rp1=r}function kv(t,n){var r=n.z2,i=r.length-2,s,c,f;exports.DEBUG&&console.log(n.step,"IUP["+t.axis+"]");for(var m=0;m<i;m++)s=r[m],!t.touched(s)&&(c=s.prevTouched(t),c!==s&&(f=s.nextTouched(t),c===f&&t.setRelative(s,s,t.distance(c,c,!1,!0),t,!0),t.interpolate(s,c,f,t)))}function Ov(t,n){for(var r=n.stack,i=t?n.rp1:n.rp2,s=(t?n.z0:n.z1)[i],c=n.fv,f=n.pv,m=n.loop,p=n.z2;m--;){var v=r.pop(),g=p[v],b=f.distance(s,s,!1,!0);c.setRelative(g,g,b,f),c.touch(g),exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-m)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",v)}n.loop=1}function Rv(t,n){var r=n.stack,i=t?n.rp1:n.rp2,s=(t?n.z0:n.z1)[i],c=n.fv,f=n.pv,m=r.pop(),p=n.z2[n.contours[m]],v=p;exports.DEBUG&&console.log(n.step,"SHC["+t+"]",m);var g=f.distance(s,s,!1,!0);do v!==s&&c.setRelative(v,v,g,f),v=v.nextPointOnContour;while(v!==p)}function Dv(t,n){var r=n.stack,i=t?n.rp1:n.rp2,s=(t?n.z0:n.z1)[i],c=n.fv,f=n.pv,m=r.pop();exports.DEBUG&&console.log(n.step,"SHZ["+t+"]",m);var p;switch(m){case 0:p=n.tZone;break;case 1:p=n.gZone;break;default:throw new Error("Invalid zone")}for(var v,g=f.distance(s,s,!1,!0),b=p.length-2,y=0;y<b;y++)v=p[y],c.setRelative(v,v,g,f)}function Zw(t){for(var n=t.stack,r=t.loop,i=t.fv,s=n.pop()/64,c=t.z2;r--;){var f=n.pop(),m=c[f];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-r)+": ":"")+"SHPIX[]",f,s),i.setRelative(m,m,s),i.touch(m)}t.loop=1}function Qw(t){for(var n=t.stack,r=t.rp1,i=t.rp2,s=t.loop,c=t.z0[r],f=t.z1[i],m=t.fv,p=t.dpv,v=t.z2;s--;){var g=n.pop(),b=v[g];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-s)+": ":"")+"IP[]",g,r,"<->",i),m.interpolate(b,c,f,p),m.touch(b)}t.loop=1}function Uv(t,n){var r=n.stack,i=r.pop()/64,s=r.pop(),c=n.z1[s],f=n.z0[n.rp0],m=n.fv,p=n.pv;m.setRelative(c,f,i,p),m.touch(c),exports.DEBUG&&console.log(n.step,"MSIRP["+t+"]",i,s),n.rp1=n.rp0,n.rp2=s,t&&(n.rp0=s)}function Kw(t){for(var n=t.stack,r=t.rp0,i=t.z0[r],s=t.loop,c=t.fv,f=t.pv,m=t.z1;s--;){var p=n.pop(),v=m[p];exports.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-s)+": ":"")+"ALIGNRP[]",p),c.setRelative(v,i,0,f),c.touch(v)}t.loop=1}function Jw(t){exports.DEBUG&&console.log(t.step,"RTDG[]"),t.round=hw}function Mv(t,n){var r=n.stack,i=r.pop(),s=r.pop(),c=n.z0[s],f=n.fv,m=n.pv,p=n.cvt[i];exports.DEBUG&&console.log(n.step,"MIAP["+t+"]",i,"(",p,")",s);var v=m.distance(c,Bl);t&&(Math.abs(v-p)<n.cvCutIn&&(v=p),v=n.round(v)),f.setRelative(c,Bl,v,m),n.zp0===0&&(c.xo=c.x,c.yo=c.y),f.touch(c),n.rp0=n.rp1=s}function $w(t){var n=t.prog,r=t.ip,i=t.stack,s=n[++r];exports.DEBUG&&console.log(t.step,"NPUSHB[]",s);for(var c=0;c<s;c++)i.push(n[++r]);t.ip=r}function eE(t){var n=t.ip,r=t.prog,i=t.stack,s=r[++n];exports.DEBUG&&console.log(t.step,"NPUSHW[]",s);for(var c=0;c<s;c++){var f=r[++n]<<8|r[++n];f&32768&&(f=-((f^65535)+1)),i.push(f)}t.ip=n}function tE(t){var n=t.stack,r=t.store;r||(r=t.store=[]);var i=n.pop(),s=n.pop();exports.DEBUG&&console.log(t.step,"WS",i,s),r[s]=i}function aE(t){var n=t.stack,r=t.store,i=n.pop();exports.DEBUG&&console.log(t.step,"RS",i);var s=r&&r[i]||0;n.push(s)}function nE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"WCVTP",r,i),t.cvt[i]=r/64}function rE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"RCVT",r),n.push(t.cvt[r]*64)}function Lv(t,n){var r=n.stack,i=r.pop(),s=n.z2[i];exports.DEBUG&&console.log(n.step,"GC["+t+"]",i),r.push(n.dpv.distance(s,Bl,t,!1)*64)}function zv(t,n){var r=n.stack,i=r.pop(),s=r.pop(),c=n.z1[i],f=n.z0[s],m=n.dpv.distance(f,c,t,t);exports.DEBUG&&console.log(n.step,"MD["+t+"]",i,s,"->",m),n.stack.push(Math.round(m*64))}function iE(t){exports.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function lE(t){exports.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function oE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"LT[]",r,i),n.push(i<r?1:0)}function sE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"LTEQ[]",r,i),n.push(i<=r?1:0)}function cE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"GT[]",r,i),n.push(i>r?1:0)}function uE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"GTEQ[]",r,i),n.push(i>=r?1:0)}function fE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"EQ[]",r,i),n.push(r===i?1:0)}function dE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"NEQ[]",r,i),n.push(r!==i?1:0)}function pE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"ODD[]",r),n.push(Math.trunc(r)%2?1:0)}function mE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"EVEN[]",r),n.push(Math.trunc(r)%2?0:1)}function hE(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"IF[]",n),n||(Ax(t,!0),exports.DEBUG&&console.log(t.step,"EIF[]"))}function vE(t){exports.DEBUG&&console.log(t.step,"EIF[]")}function gE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"AND[]",r,i),n.push(r&&i?1:0)}function xE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"OR[]",r,i),n.push(r||i?1:0)}function bE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"NOT[]",r),n.push(r?0:1)}function gf(t,n){var r=n.stack,i=r.pop(),s=n.fv,c=n.pv,f=n.ppem,m=n.deltaBase+(t-1)*16,p=n.deltaShift,v=n.z0;exports.DEBUG&&console.log(n.step,"DELTAP["+t+"]",i,r);for(var g=0;g<i;g++){var b=r.pop(),y=r.pop(),C=m+((y&240)>>4);if(C===f){var w=(y&15)-8;w>=0&&w++,exports.DEBUG&&console.log(n.step,"DELTAPFIX",b,"by",w*p);var E=v[b];s.setRelative(E,E,w*p,c)}}}function yE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"SDB[]",r),t.deltaBase=r}function SE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"SDS[]",r),t.deltaShift=Math.pow(.5,r)}function CE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"ADD[]",r,i),n.push(i+r)}function TE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"SUB[]",r,i),n.push(i-r)}function wE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"DIV[]",r,i),n.push(i*64/r)}function EE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"MUL[]",r,i),n.push(i*r/64)}function AE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"ABS[]",r),n.push(Math.abs(r))}function kE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"NEG[]",r),n.push(-r)}function OE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"FLOOR[]",r),n.push(Math.floor(r/64)*64)}function RE(t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,"CEILING[]",r),n.push(Math.ceil(r/64)*64)}function hs(t,n){var r=n.stack,i=r.pop();exports.DEBUG&&console.log(n.step,"ROUND[]"),r.push(n.round(i/64)*64)}function DE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"WCVTF[]",r,i),t.cvt[i]=r*t.ppem/t.font.unitsPerEm}function xf(t,n){var r=n.stack,i=r.pop(),s=n.ppem,c=n.deltaBase+(t-1)*16,f=n.deltaShift;exports.DEBUG&&console.log(n.step,"DELTAC["+t+"]",i,r);for(var m=0;m<i;m++){var p=r.pop(),v=r.pop(),g=c+((v&240)>>4);if(g===s){var b=(v&15)-8;b>=0&&b++;var y=b*f;exports.DEBUG&&console.log(n.step,"DELTACFIX",p,"by",y),n.cvt[p]+=y}}}function UE(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"SROUND[]",n),t.round=Ex;var r;switch(n&192){case 0:r=.5;break;case 64:r=1;break;case 128:r=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=r,n&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid SROUND value")}n&=15,n===0?t.srThreshold=0:t.srThreshold=(n/8-.5)*r}function ME(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"S45ROUND[]",n),t.round=Ex;var r;switch(n&192){case 0:r=Math.sqrt(2)/2;break;case 64:r=Math.sqrt(2);break;case 128:r=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=r,n&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid S45ROUND value")}n&=15,n===0?t.srThreshold=0:t.srThreshold=(n/8-.5)*r}function LE(t){exports.DEBUG&&console.log(t.step,"ROFF[]"),t.round=mw}function zE(t){exports.DEBUG&&console.log(t.step,"RUTG[]"),t.round=gw}function jE(t){exports.DEBUG&&console.log(t.step,"RDTG[]"),t.round=xw}function FE(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCANCTRL[]",n)}function jv(t,n){var r=n.stack,i=r.pop(),s=r.pop(),c=n.z2[i],f=n.z1[s];exports.DEBUG&&console.log(n.step,"SDPVTL["+t+"]",i,s);var m,p;t?(m=c.y-f.y,p=f.x-c.x):(m=f.x-c.x,p=f.y-c.y),n.dpv=Yl(m,p)}function NE(t){var n=t.stack,r=n.pop(),i=0;exports.DEBUG&&console.log(t.step,"GETINFO[]",r),r&1&&(i=35),r&32&&(i|=4096),n.push(i)}function BE(t){var n=t.stack,r=n.pop(),i=n.pop(),s=n.pop();exports.DEBUG&&console.log(t.step,"ROLL[]"),n.push(i),n.push(r),n.push(s)}function IE(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"MAX[]",r,i),n.push(Math.max(i,r))}function _E(t){var n=t.stack,r=n.pop(),i=n.pop();exports.DEBUG&&console.log(t.step,"MIN[]",r,i),n.push(Math.min(i,r))}function GE(t){var n=t.stack.pop();exports.DEBUG&&console.log(t.step,"SCANTYPE[]",n)}function PE(t){var n=t.stack.pop(),r=t.stack.pop();switch(exports.DEBUG&&console.log(t.step,"INSTCTRL[]",n,r),n){case 1:t.inhibitGridFit=!!r;return;case 2:t.ignoreCvt=!!r;return;default:throw new Error("invalid INSTCTRL[] selector")}}function tr(t,n){var r=n.stack,i=n.prog,s=n.ip;exports.DEBUG&&console.log(n.step,"PUSHB["+t+"]");for(var c=0;c<t;c++)r.push(i[++s]);n.ip=s}function ar(t,n){var r=n.ip,i=n.prog,s=n.stack;exports.DEBUG&&console.log(n.ip,"PUSHW["+t+"]");for(var c=0;c<t;c++){var f=i[++r]<<8|i[++r];f&32768&&(f=-((f^65535)+1)),s.push(f)}n.ip=r}function fe(t,n,r,i,s,c){var f=c.stack,m=t&&f.pop(),p=f.pop(),v=c.rp0,g=c.z0[v],b=c.z1[p],y=c.minDis,C=c.fv,w=c.dpv,E,A,T,D;A=E=w.distance(b,g,!0,!0),T=A>=0?1:-1,A=Math.abs(A),t&&(D=c.cvt[m],i&&Math.abs(A-D)<c.cvCutIn&&(A=D)),r&&A<y&&(A=y),i&&(A=c.round(A)),C.setRelative(b,g,T*A,w),C.touch(b),exports.DEBUG&&console.log(c.step,(t?"MIRP[":"MDRP[")+(n?"M":"m")+(r?">":"_")+(i?"R":"_")+(s===0?"Gr":s===1?"Bl":s===2?"Wh":"")+"]",t?m+"("+c.cvt[m]+","+D+")":"",p,"(d =",E,"->",T*A,")"),c.rp1=c.rp0,c.rp2=p,n&&(c.rp0=p)}Sx=[Sv.bind(void 0,wn),Sv.bind(void 0,Za),Cv.bind(void 0,wn),Cv.bind(void 0,Za),Tv.bind(void 0,wn),Tv.bind(void 0,Za),wv.bind(void 0,0),wv.bind(void 0,1),Ev.bind(void 0,0),Ev.bind(void 0,1),yw,Sw,Cw,Tw,ww,Ew,Aw,kw,Ow,Rw,Dw,Uw,Mw,Lw,zw,jw,Fw,Nw,Bw,Iw,void 0,void 0,_w,vf,Gw,Pw,Hw,Yw,Xw,void 0,void 0,void 0,Vw,qw,Ww,void 0,Av.bind(void 0,0),Av.bind(void 0,1),kv.bind(void 0,wn),kv.bind(void 0,Za),Ov.bind(void 0,0),Ov.bind(void 0,1),Rv.bind(void 0,0),Rv.bind(void 0,1),Dv.bind(void 0,0),Dv.bind(void 0,1),Zw,Qw,Uv.bind(void 0,0),Uv.bind(void 0,1),Kw,Jw,Mv.bind(void 0,0),Mv.bind(void 0,1),$w,eE,tE,aE,nE,rE,Lv.bind(void 0,0),Lv.bind(void 0,1),void 0,zv.bind(void 0,0),zv.bind(void 0,1),iE,void 0,lE,void 0,void 0,oE,sE,cE,uE,fE,dE,pE,mE,hE,vE,gE,xE,bE,gf.bind(void 0,1),yE,SE,CE,TE,wE,EE,AE,kE,OE,RE,hs.bind(void 0,0),hs.bind(void 0,1),hs.bind(void 0,2),hs.bind(void 0,3),void 0,void 0,void 0,void 0,DE,gf.bind(void 0,2),gf.bind(void 0,3),xf.bind(void 0,1),xf.bind(void 0,2),xf.bind(void 0,3),UE,ME,void 0,void 0,LE,void 0,zE,jE,vf,vf,void 0,void 0,void 0,void 0,void 0,FE,jv.bind(void 0,0),jv.bind(void 0,1),NE,void 0,BE,IE,_E,GE,PE,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,tr.bind(void 0,1),tr.bind(void 0,2),tr.bind(void 0,3),tr.bind(void 0,4),tr.bind(void 0,5),tr.bind(void 0,6),tr.bind(void 0,7),tr.bind(void 0,8),ar.bind(void 0,1),ar.bind(void 0,2),ar.bind(void 0,3),ar.bind(void 0,4),ar.bind(void 0,5),ar.bind(void 0,6),ar.bind(void 0,7),ar.bind(void 0,8),fe.bind(void 0,0,0,0,0,0),fe.bind(void 0,0,0,0,0,1),fe.bind(void 0,0,0,0,0,2),fe.bind(void 0,0,0,0,0,3),fe.bind(void 0,0,0,0,1,0),fe.bind(void 0,0,0,0,1,1),fe.bind(void 0,0,0,0,1,2),fe.bind(void 0,0,0,0,1,3),fe.bind(void 0,0,0,1,0,0),fe.bind(void 0,0,0,1,0,1),fe.bind(void 0,0,0,1,0,2),fe.bind(void 0,0,0,1,0,3),fe.bind(void 0,0,0,1,1,0),fe.bind(void 0,0,0,1,1,1),fe.bind(void 0,0,0,1,1,2),fe.bind(void 0,0,0,1,1,3),fe.bind(void 0,0,1,0,0,0),fe.bind(void 0,0,1,0,0,1),fe.bind(void 0,0,1,0,0,2),fe.bind(void 0,0,1,0,0,3),fe.bind(void 0,0,1,0,1,0),fe.bind(void 0,0,1,0,1,1),fe.bind(void 0,0,1,0,1,2),fe.bind(void 0,0,1,0,1,3),fe.bind(void 0,0,1,1,0,0),fe.bind(void 0,0,1,1,0,1),fe.bind(void 0,0,1,1,0,2),fe.bind(void 0,0,1,1,0,3),fe.bind(void 0,0,1,1,1,0),fe.bind(void 0,0,1,1,1,1),fe.bind(void 0,0,1,1,1,2),fe.bind(void 0,0,1,1,1,3),fe.bind(void 0,1,0,0,0,0),fe.bind(void 0,1,0,0,0,1),fe.bind(void 0,1,0,0,0,2),fe.bind(void 0,1,0,0,0,3),fe.bind(void 0,1,0,0,1,0),fe.bind(void 0,1,0,0,1,1),fe.bind(void 0,1,0,0,1,2),fe.bind(void 0,1,0,0,1,3),fe.bind(void 0,1,0,1,0,0),fe.bind(void 0,1,0,1,0,1),fe.bind(void 0,1,0,1,0,2),fe.bind(void 0,1,0,1,0,3),fe.bind(void 0,1,0,1,1,0),fe.bind(void 0,1,0,1,1,1),fe.bind(void 0,1,0,1,1,2),fe.bind(void 0,1,0,1,1,3),fe.bind(void 0,1,1,0,0,0),fe.bind(void 0,1,1,0,0,1),fe.bind(void 0,1,1,0,0,2),fe.bind(void 0,1,1,0,0,3),fe.bind(void 0,1,1,0,1,0),fe.bind(void 0,1,1,0,1,1),fe.bind(void 0,1,1,0,1,2),fe.bind(void 0,1,1,0,1,3),fe.bind(void 0,1,1,1,0,0),fe.bind(void 0,1,1,1,0,1),fe.bind(void 0,1,1,1,0,2),fe.bind(void 0,1,1,1,0,3),fe.bind(void 0,1,1,1,1,0),fe.bind(void 0,1,1,1,1,1),fe.bind(void 0,1,1,1,1,2),fe.bind(void 0,1,1,1,1,3)];function Ri(t){this.char=t,this.state={},this.activeState=null}function dd(t,n,r){this.contextName=r,this.startIndex=t,this.endOffset=n}function HE(t,n,r){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=n,this.checkEnd=r}function Na(t,n){this.context=t,this.index=n,this.length=t.length,this.current=t[n],this.backtrack=t.slice(0,n),this.lookahead=t.slice(n+1)}function Bs(t){this.eventId=t,this.subscribers=[]}function VE(t){var n=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(s){Object.defineProperty(n.events,s,{value:new Bs(s)})}),t&&r.forEach(function(s){var c=t[s];typeof c=="function"&&n.events[s].subscribe(c)});var i=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];i.forEach(function(s){n.events[s].subscribe(n.updateContextsRanges)})}function dt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],VE.call(this,t)}Ri.prototype.setState=function(t,n){return this.state[t]=n,this.activeState={key:t,value:this.state[t]},this.activeState};Ri.prototype.getState=function(t){return this.state[t]||null};dt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};dt.prototype.composeRUD=function(t){var n=this,r=!0,i=t.map(function(c){return n[c[0]].apply(n,c.slice(1).concat(r))}),s=function(c){return typeof c=="object"&&c.hasOwnProperty("FAIL")};if(i.every(s))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:i.filter(s)};this.dispatch("composeRUD",[i.filter(function(c){return!s(c)})])};dt.prototype.replaceRange=function(t,n,r,i){n=n!==null?n:this.tokens.length;var s=r.every(function(f){return f instanceof Ri});if(!isNaN(t)&&this.inboundIndex(t)&&s){var c=this.tokens.splice.apply(this.tokens,[t,n].concat(r));return i||this.dispatch("replaceToken",[t,n,r]),[c,r]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};dt.prototype.replaceToken=function(t,n,r){if(!isNaN(t)&&this.inboundIndex(t)&&n instanceof Ri){var i=this.tokens.splice(t,1,n);return r||this.dispatch("replaceToken",[t,n]),[i[0],n]}else return{FAIL:"replaceToken: invalid token or index."}};dt.prototype.removeRange=function(t,n,r){n=isNaN(n)?this.tokens.length:n;var i=this.tokens.splice(t,n);return r||this.dispatch("removeRange",[i,t,n]),i};dt.prototype.removeToken=function(t,n){if(!isNaN(t)&&this.inboundIndex(t)){var r=this.tokens.splice(t,1);return n||this.dispatch("removeToken",[r,t]),r}else return{FAIL:"removeToken: invalid token index."}};dt.prototype.insertToken=function(t,n,r){var i=t.every(function(s){return s instanceof Ri});return i?(this.tokens.splice.apply(this.tokens,[n,0].concat(t)),r||this.dispatch("insertToken",[t,n]),t):{FAIL:"insertToken: invalid token(s)."}};dt.prototype.registerModifier=function(t,n,r){this.events.newToken.subscribe(function(i,s){var c=[i,s],f=n===null||n.apply(this,c)===!0,m=[i,s];if(f){var p=r.apply(this,m);i.setState(t,p)}}),this.registeredModifiers.push(t)};Bs.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};Bs.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};Na.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};Na.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};dt.prototype.rangeToText=function(t){if(t instanceof dd)return this.getRangeTokens(t).map(function(n){return n.char}).join("")};dt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};dt.prototype.getContext=function(t){var n=this.registeredContexts[t];return n||null};dt.prototype.on=function(t,n){var r=this.events[t];return r?r.subscribe(n):null};dt.prototype.dispatch=function(t,n){var r=this,i=this.events[t];i instanceof Bs&&i.subscribers.forEach(function(s){s.apply(r,n||[])})};dt.prototype.registerContextChecker=function(t,n,r){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof n!="function")return{FAIL:"missing context start check."};if(typeof r!="function")return{FAIL:"missing context end check."};var i=new HE(t,n,r);return this.registeredContexts[t]=i,this.contextCheckers.push(i),i};dt.prototype.getRangeTokens=function(t){var n=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,n))};dt.prototype.getContextRanges=function(t){var n=this.getContext(t);return n?n.ranges:{FAIL:"context checker '"+t+"' is not registered."}};dt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];r.ranges=[]}};dt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(i){return i.char}),n=0;n<t.length;n++){var r=new Na(t,n);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])};dt.prototype.setEndOffset=function(t,n){var r=this.getContext(n).openRange.startIndex,i=new dd(r,t,n),s=this.getContext(n).ranges;return i.rangeId=n+"."+s.length,s.push(i),this.getContext(n).openRange=null,i};dt.prototype.runContextCheck=function(t){var n=this,r=t.index;this.contextCheckers.forEach(function(i){var s=i.contextName,c=n.getContext(s).openRange;if(!c&&i.checkStart(t)&&(c=new dd(r,null,s),n.getContext(s).openRange=c,n.dispatch("contextStart",[s,r])),c&&i.checkEnd(t)){var f=r-c.startIndex+1,m=n.setEndOffset(f,s);n.dispatch("contextEnd",[s,m])}})};dt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var n=Array.from(t);this.dispatch("start");for(var r=0;r<n.length;r++){var i=n[r],s=new Na(n,r);this.dispatch("next",[s]),this.runContextCheck(s);var c=new Ri(i);this.tokens.push(c),this.dispatch("newToken",[c,s])}return this.dispatch("end",[this.tokens]),this.tokens};function ir(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function kx(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function lr(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function Ss(t){return/[A-z]/.test(t)}function qE(t){return/\s/.test(t)}function fa(t){this.font=t,this.features={}}function Ur(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function Xl(t,n){if(!t)return-1;switch(n.format){case 1:return n.glyphs.indexOf(t);case 2:for(var r=n.ranges,i=0;i<r.length;i++){var s=r[i];if(t>=s.start&&t<=s.end){var c=t-s.start;return s.index+c}}break;default:return-1}return-1}function YE(t,n){var r=Xl(t,n.coverage);return r===-1?null:t+n.deltaGlyphId}function XE(t,n){var r=Xl(t,n.coverage);return r===-1?null:n.substitute[r]}function bf(t,n){for(var r=[],i=0;i<t.length;i++){var s=t[i],c=n.current;c=Array.isArray(c)?c[0]:c;var f=Xl(c,s);f!==-1&&r.push(f)}return r.length!==t.length?-1:r}function WE(t,n){var r=n.inputCoverage.length+n.lookaheadCoverage.length+n.backtrackCoverage.length;if(t.context.length<r)return[];var i=bf(n.inputCoverage,t);if(i===-1)return[];var s=n.inputCoverage.length-1;if(t.lookahead.length<n.lookaheadCoverage.length)return[];for(var c=t.lookahead.slice(s);c.length&&lr(c[0].char);)c.shift();var f=new Na(c,0),m=bf(n.lookaheadCoverage,f),p=[].concat(t.backtrack);for(p.reverse();p.length&&lr(p[0].char);)p.shift();if(p.length<n.backtrackCoverage.length)return[];var v=new Na(p,0),g=bf(n.backtrackCoverage,v),b=i.length===n.inputCoverage.length&&m.length===n.lookaheadCoverage.length&&g.length===n.backtrackCoverage.length,y=[];if(b)for(var C=0;C<n.lookupRecords.length;C++)for(var w=n.lookupRecords[C],E=w.lookupListIndex,A=this.getLookupByIndex(E),T=0;T<A.subtables.length;T++){var D=A.subtables[T],M=this.getLookupMethod(A,D),Y=this.getSubstitutionType(A,D);if(Y==="12")for(var V=0;V<i.length;V++){var X=t.get(V),B=M(X);B&&y.push(B)}}return y}function ZE(t,n){var r=t.current,i=Xl(r,n.coverage);if(i===-1)return null;for(var s,c=n.ligatureSets[i],f=0;f<c.length;f++){s=c[f];for(var m=0;m<s.components.length;m++){var p=t.lookahead[m],v=s.components[m];if(p!==v)break;if(m===s.components.length-1)return s}}return null}function QE(t,n){var r=Xl(t,n.coverage);return r===-1?null:n.sequences[r]}fa.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,n=0;n<t.length;n++){var r=t[n];if(r.tag==="DFLT")return r.script.defaultLangSys.featureIndexes}return[]};fa.prototype.getScriptFeaturesIndexes=function(t){var n=this.font.tables;if(!n.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var r=this.font.tables.gsub.scripts,i=0;i<r.length;i++){var s=r[i];if(s.tag===t&&s.script.defaultLangSys)return s.script.defaultLangSys.featureIndexes;var c=s.langSysRecords;if(c)for(var f=0;f<c.length;f++){var m=c[f];if(m.tag===t){var p=m.langSys;return p.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};fa.prototype.mapTagsToFeatures=function(t,n){for(var r={},i=0;i<t.length;i++){var s=t[i].tag,c=t[i].feature;r[s]=c}this.features[n].tags=r};fa.prototype.getScriptFeatures=function(t){var n=this.features[t];if(this.features.hasOwnProperty(t))return n;var r=this.getScriptFeaturesIndexes(t);if(!r)return null;var i=this.font.tables.gsub;return n=r.map(function(s){return i.features[s]}),this.features[t]=n,this.mapTagsToFeatures(n,t),n};fa.prototype.getSubstitutionType=function(t,n){var r=t.lookupType.toString(),i=n.substFormat.toString();return r+i};fa.prototype.getLookupMethod=function(t,n){var r=this,i=this.getSubstitutionType(t,n);switch(i){case"11":return function(s){return YE.apply(r,[s,n])};case"12":return function(s){return XE.apply(r,[s,n])};case"63":return function(s){return WE.apply(r,[s,n])};case"41":return function(s){return ZE.apply(r,[s,n])};case"21":return function(s){return QE.apply(r,[s,n])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+n.substFormat+" is not yet supported")}};fa.prototype.lookupFeature=function(t){var n=t.contextParams,r=n.index,i=this.getFeature({tag:t.tag,script:t.script});if(!i)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var s=this.getFeatureLookups(i),c=[].concat(n.context),f=0;f<s.length;f++)for(var m=s[f],p=this.getLookupSubtables(m),v=0;v<p.length;v++){var g=p[v],b=this.getSubstitutionType(m,g),y=this.getLookupMethod(m,g),C=void 0;switch(b){case"11":C=y(n.current),C&&c.splice(r,1,new Ur({id:11,tag:t.tag,substitution:C}));break;case"12":C=y(n.current),C&&c.splice(r,1,new Ur({id:12,tag:t.tag,substitution:C}));break;case"63":C=y(n),Array.isArray(C)&&C.length&&c.splice(r,1,new Ur({id:63,tag:t.tag,substitution:C}));break;case"41":C=y(n),C&&c.splice(r,1,new Ur({id:41,tag:t.tag,substitution:C}));break;case"21":C=y(n.current),C&&c.splice(r,1,new Ur({id:21,tag:t.tag,substitution:C}));break}n=new Na(c,r),!(Array.isArray(C)&&!C.length)&&(C=null)}return c.length?c:null};fa.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var n=this.features.hasOwnProperty(t.script);if(!t.tag)return n;var r=this.features[t.script].some(function(i){return i.tag===t.tag});return n&&r};fa.prototype.getLookupSubtables=function(t){return t.subtables||null};fa.prototype.getLookupByIndex=function(t){var n=this.font.tables.gsub.lookups;return n[t]||null};fa.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};fa.prototype.getFeature=function(n){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(n.script)||this.getScriptFeatures(n.script);var r=this.features[n.script];return r?r.tags[n.tag]?this.features[n.script].tags[n.tag]:null:{FAIL:"No feature for script "+n.script}};function KE(t){var n=t.current,r=t.get(-1);return r===null&&ir(n)||!ir(r)&&ir(n)}function JE(t){var n=t.get(1);return n===null||!ir(n)}var $E={startCheck:KE,endCheck:JE};function eA(t){var n=t.current,r=t.get(-1);return(ir(n)||lr(n))&&!ir(r)}function tA(t){var n=t.get(1);switch(!0){case n===null:return!0;case(!ir(n)&&!lr(n)):var r=qE(n);if(!r)return!0;if(r){var i=!1;if(i=t.lookahead.some(function(s){return ir(s)||lr(s)}),!i)return!0}break;default:return!1}}var aA={startCheck:eA,endCheck:tA};function nA(t,n,r){n[r].setState(t.tag,t.substitution)}function rA(t,n,r){n[r].setState(t.tag,t.substitution)}function iA(t,n,r){t.substitution.forEach(function(i,s){var c=n[r+s];c.setState(t.tag,i)})}function lA(t,n,r){var i=n[r];i.setState(t.tag,t.substitution.ligGlyph);for(var s=t.substitution.components.length,c=0;c<s;c++)i=n[r+c+1],i.setState("deleted",!0)}var Fv={11:nA,12:rA,63:iA,41:lA};function pd(t,n,r){t instanceof Ur&&Fv[t.id]&&Fv[t.id](t,n,r)}function oA(t){for(var n=[].concat(t.backtrack),r=n.length-1;r>=0;r--){var i=n[r],s=kx(i),c=lr(i);if(!s&&!c)return!0;if(s)return!1}return!1}function sA(t){if(kx(t.current))return!1;for(var n=0;n<t.lookahead.length;n++){var r=t.lookahead[n],i=lr(r);if(!i)return!0}return!1}function cA(t){var n=this,r="arab",i=this.featuresTags[r],s=this.tokenizer.getRangeTokens(t);if(s.length!==1){var c=new Na(s.map(function(m){return m.getState("glyphIndex")}),0),f=new Na(s.map(function(m){return m.char}),0);s.forEach(function(m,p){if(!lr(m.char)){c.setCurrentIndex(p),f.setCurrentIndex(p);var v=0;oA(f)&&(v|=1),sA(f)&&(v|=2);var g;switch(v){case 1:g="fina";break;case 2:g="init";break;case 3:g="medi";break}if(i.indexOf(g)!==-1){var b=n.query.lookupFeature({tag:g,script:r,contextParams:c});if(b instanceof Error)return console.info(b.message);b.forEach(function(y,C){y instanceof Ur&&(pd(y,s,C),c.context[C]=y.substitution)})}}})}}function Nv(t,n){var r=t.map(function(i){return i.activeState.value});return new Na(r,0)}function uA(t){var n=this,r="arab",i=this.tokenizer.getRangeTokens(t),s=Nv(i);s.context.forEach(function(c,f){s.setCurrentIndex(f);var m=n.query.lookupFeature({tag:"rlig",script:r,contextParams:s});m.length&&(m.forEach(function(p){return pd(p,i,f)}),s=Nv(i))})}function fA(t){var n=t.current,r=t.get(-1);return r===null&&Ss(n)||!Ss(r)&&Ss(n)}function dA(t){var n=t.get(1);return n===null||!Ss(n)}var pA={startCheck:fA,endCheck:dA};function Bv(t,n){var r=t.map(function(i){return i.activeState.value});return new Na(r,0)}function mA(t){var n=this,r="latn",i=this.tokenizer.getRangeTokens(t),s=Bv(i);s.context.forEach(function(c,f){s.setCurrentIndex(f);var m=n.query.lookupFeature({tag:"liga",script:r,contextParams:s});m.length&&(m.forEach(function(p){return pd(p,i,f)}),s=Bv(i))})}function _a(t){this.baseDir=t||"ltr",this.tokenizer=new dt,this.featuresTags={}}_a.prototype.setText=function(t){this.text=t};_a.prototype.contextChecks={latinWordCheck:pA,arabicWordCheck:$E,arabicSentenceCheck:aA};function yf(t){var n=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,n.startCheck,n.endCheck)}function hA(){return yf.call(this,"latinWord"),yf.call(this,"arabicWord"),yf.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function vA(){var t=this,n=this.tokenizer.getContextRanges("arabicSentence");n.forEach(function(r){var i=t.tokenizer.getRangeTokens(r);t.tokenizer.replaceRange(r.startIndex,r.endOffset,i.reverse())})}_a.prototype.registerFeatures=function(t,n){var r=this,i=n.filter(function(s){return r.query.supports({script:t,tag:s})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(i):this.featuresTags[t]=i};_a.prototype.applyFeatures=function(t,n){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new fa(t));for(var r=0;r<n.length;r++){var i=n[r];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};_a.prototype.registerModifier=function(t,n,r){this.tokenizer.registerModifier(t,n,r)};function md(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function gA(){var t=this,n="arab";if(this.featuresTags.hasOwnProperty(n)){md.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(i){cA.call(t,i)})}}function xA(){var t=this,n="arab";if(this.featuresTags.hasOwnProperty(n)){var r=this.featuresTags[n];if(r.indexOf("rlig")!==-1){md.call(this);var i=this.tokenizer.getContextRanges("arabicWord");i.forEach(function(s){uA.call(t,s)})}}}function bA(){var t=this,n="latn";if(this.featuresTags.hasOwnProperty(n)){var r=this.featuresTags[n];if(r.indexOf("liga")!==-1){md.call(this);var i=this.tokenizer.getContextRanges("latinWord");i.forEach(function(s){mA.call(t,s)})}}}_a.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};_a.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(gA.call(this),xA.call(this)),this.checkContextReady("latinWord")&&bA.call(this),this.checkContextReady("arabicSentence")&&vA.call(this)};_a.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),hA.call(this),this.applyFeaturesToContexts())};_a.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};_a.prototype.getTextGlyphs=function(t){this.processText(t);for(var n=[],r=0;r<this.tokenizer.tokens.length;r++){var i=this.tokenizer.tokens[r];if(!i.state.deleted){var s=i.activeState.value;n.push(Array.isArray(s)?s[0]:s)}}return n};function Je(t){t=t||{},t.tables=t.tables||{},t.empty||(Ol(t.familyName,"When creating a new Font object, familyName is required."),Ol(t.styleName,"When creating a new Font object, styleName is required."),Ol(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Ol(t.ascender,"When creating a new Font object, ascender is required."),Ol(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new Qa.GlyphSet(this,t.glyphs||[]),this.encoding=new qg(this),this.position=new Vl(this),this.substitution=new ua(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Tx(this)}})}Je.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};Je.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};Je.prototype.charToGlyph=function(t){var n=this.charToGlyphIndex(t),r=this.glyphs.get(n);return r||(r=this.glyphs.get(0)),r};Je.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(n){return n.script==="latn"?{script:"latn",tags:n.tags.filter(function(r){return t[r]})}:n})};Je.prototype.stringToGlyphs=function(t,n){var r=this,i=new _a,s=function(b){return r.charToGlyphIndex(b.char)};i.registerModifier("glyphIndex",null,s);var c=n?this.updateFeatures(n.features):this.defaultRenderOptions.features;i.applyFeatures(this,c);for(var f=i.getTextGlyphs(t),m=f.length,p=new Array(m),v=this.glyphs.get(0),g=0;g<m;g+=1)p[g]=this.glyphs.get(f[g])||v;return p};Je.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};Je.prototype.nameToGlyph=function(t){var n=this.nameToGlyphIndex(t),r=this.glyphs.get(n);return r||(r=this.glyphs.get(0)),r};Je.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};Je.prototype.getKerningValue=function(t,n){t=t.index||t,n=n.index||n;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,t,n):this.kerningPairs[t+","+n]||0};Je.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};Je.prototype.forEachGlyph=function(t,n,r,i,s,c){n=n!==void 0?n:0,r=r!==void 0?r:0,i=i!==void 0?i:72,s=Object.assign({},this.defaultRenderOptions,s);var f=1/this.unitsPerEm*i,m=this.stringToGlyphs(t,s),p;if(s.kerning){var v=s.script||this.position.getDefaultScriptName();p=this.position.getKerningTables(v,s.language)}for(var g=0;g<m.length;g+=1){var b=m[g];if(c.call(this,b,n,r,i,s),b.advanceWidth&&(n+=b.advanceWidth*f),s.kerning&&g<m.length-1){var y=p?this.position.getKerningValue(p,b.index,m[g+1].index):this.getKerningValue(b,m[g+1]);n+=y*f}s.letterSpacing?n+=s.letterSpacing*i:s.tracking&&(n+=s.tracking/1e3*i)}return n};Je.prototype.getPath=function(t,n,r,i,s){var c=new Et;return this.forEachGlyph(t,n,r,i,s,function(f,m,p,v){var g=f.getPath(m,p,v,s,this);c.extend(g)}),c};Je.prototype.getPaths=function(t,n,r,i,s){var c=[];return this.forEachGlyph(t,n,r,i,s,function(f,m,p,v){var g=f.getPath(m,p,v,s,this);c.push(g)}),c};Je.prototype.getAdvanceWidth=function(t,n,r){return this.forEachGlyph(t,0,0,n,r,function(){})};Je.prototype.draw=function(t,n,r,i,s,c){this.getPath(n,r,i,s,c).draw(t)};Je.prototype.drawPoints=function(t,n,r,i,s,c){this.forEachGlyph(n,r,i,s,c,function(f,m,p,v){f.drawPoints(t,m,p,v)})};Je.prototype.drawMetrics=function(t,n,r,i,s,c){this.forEachGlyph(n,r,i,s,c,function(f,m,p,v){f.drawMetrics(t,m,p,v)})};Je.prototype.getEnglishName=function(t){var n=this.names[t];if(n)return n.en};Je.prototype.validate=function(){var t=this;function n(i,s){}function r(i){var s=t.getEnglishName(i);s&&s.trim().length>0}r("fontFamily"),r("weightName"),r("manufacturer"),r("copyright"),r("version"),this.unitsPerEm>0};Je.prototype.toTables=function(){return lw.fontToTable(this)};Je.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};Je.prototype.toArrayBuffer=function(){for(var t=this.toTables(),n=t.encode(),r=new ArrayBuffer(n.length),i=new Uint8Array(r),s=0;s<n.length;s++)i[s]=n[s];return r};Je.prototype.download=function(t){var n=this.getEnglishName("fontFamily"),r=this.getEnglishName("fontSubfamily");t=t||n.replace(/\s/g,"")+"-"+r+".otf";var i=this.toArrayBuffer();if(sw())if(window.URL=window.URL||window.webkitURL,window.URL){var s=new DataView(i),c=new Blob([s],{type:"font/opentype"}),f=document.createElement("a");f.href=window.URL.createObjectURL(c),f.download=t;var m=document.createEvent("MouseEvents");m.initEvent("click",!0,!1),f.dispatchEvent(m)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var p=require("fs"),v=cw(i);p.writeFileSync(t,v)}};Je.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};Je.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};Je.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function Ox(t,n){var r=JSON.stringify(t),i=256;for(var s in n){var c=parseInt(s);if(!(!c||c<256)){if(JSON.stringify(n[s])===r)return c;i<=c&&(i=c+1)}}return n[i]=t,i}function yA(t,n,r){var i=Ox(n.name,r);return[{name:"tag_"+t,type:"TAG",value:n.tag},{name:"minValue_"+t,type:"FIXED",value:n.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:n.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:n.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:i}]}function SA(t,n,r){var i={},s=new de.Parser(t,n);return i.tag=s.parseTag(),i.minValue=s.parseFixed(),i.defaultValue=s.parseFixed(),i.maxValue=s.parseFixed(),s.skip("uShort",1),i.name=r[s.parseUShort()]||{},i}function CA(t,n,r,i){for(var s=Ox(n.name,i),c=[{name:"nameID_"+t,type:"USHORT",value:s},{name:"flags_"+t,type:"USHORT",value:0}],f=0;f<r.length;++f){var m=r[f].tag;c.push({name:"axis_"+t+" "+m,type:"FIXED",value:n.coordinates[m]<<16})}return c}function TA(t,n,r,i){var s={},c=new de.Parser(t,n);s.name=i[c.parseUShort()]||{},c.skip("uShort",1),s.coordinates={};for(var f=0;f<r.length;++f)s.coordinates[r[f].tag]=c.parseFixed();return s}function wA(t,n){var r=new se.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);r.offsetToData=r.sizeOf();for(var i=0;i<t.axes.length;i++)r.fields=r.fields.concat(yA(i,t.axes[i],n));for(var s=0;s<t.instances.length;s++)r.fields=r.fields.concat(CA(s,t.instances[s],t.axes,n));return r}function EA(t,n,r){var i=new de.Parser(t,n),s=i.parseULong();ke.argument(s===65536,"Unsupported fvar table version.");var c=i.parseOffset16();i.skip("uShort",1);for(var f=i.parseUShort(),m=i.parseUShort(),p=i.parseUShort(),v=i.parseUShort(),g=[],b=0;b<f;b++)g.push(SA(t,n+c+b*m,r));for(var y=[],C=n+c+f*m,w=0;w<p;w++)y.push(TA(t,C+w*v,g,r));return{axes:g,instances:y}}var AA={make:wA,parse:EA},kA=function(){return{coverage:this.parsePointer(_.coverage),attachPoints:this.parseList(_.pointer(_.uShortList))}},OA=function(){var t=this.parseUShort();if(ke.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},RA=function(){return this.parseList(_.pointer(OA))},DA=function(){return{coverage:this.parsePointer(_.coverage),ligGlyphs:this.parseList(_.pointer(RA))}},UA=function(){return this.parseUShort(),this.parseList(_.pointer(_.coverage))};function MA(t,n){n=n||0;var r=new _(t,n),i=r.parseVersion(1);ke.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var s={version:i,classDef:r.parsePointer(_.classDef),attachList:r.parsePointer(kA),ligCaretList:r.parsePointer(DA),markAttachClassDef:r.parsePointer(_.classDef)};return i>=1.2&&(s.markGlyphSets=r.parsePointer(UA)),s}var LA={parse:MA},Ba=new Array(10);Ba[1]=function(){var n=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{posFormat:1,coverage:this.parsePointer(_.coverage),value:this.parseValueRecord()};if(r===2)return{posFormat:2,coverage:this.parsePointer(_.coverage),values:this.parseValueRecordList()};ke.assert(!1,"0x"+n.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Ba[2]=function(){var n=this.offset+this.relativeOffset,r=this.parseUShort();ke.assert(r===1||r===2,"0x"+n.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var i=this.parsePointer(_.coverage),s=this.parseUShort(),c=this.parseUShort();if(r===1)return{posFormat:r,coverage:i,valueFormat1:s,valueFormat2:c,pairSets:this.parseList(_.pointer(_.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(s),value2:this.parseValueRecord(c)}})))};if(r===2){var f=this.parsePointer(_.classDef),m=this.parsePointer(_.classDef),p=this.parseUShort(),v=this.parseUShort();return{posFormat:r,coverage:i,valueFormat1:s,valueFormat2:c,classDef1:f,classDef2:m,class1Count:p,class2Count:v,classRecords:this.parseList(p,_.list(v,function(){return{value1:this.parseValueRecord(s),value2:this.parseValueRecord(c)}}))}}};Ba[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Ba[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Ba[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Ba[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Ba[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Ba[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Ba[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function zA(t,n){n=n||0;var r=new _(t,n),i=r.parseVersion(1);return ke.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Ba)}:{version:i,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Ba),variations:r.parseFeatureVariationsList()}}var jA=new Array(10);function FA(t){return new se.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new se.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new se.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new se.LookupList(t.lookups,jA)}])}var NA={parse:zA,make:FA};function BA(t){var n={};t.skip("uShort");var r=t.parseUShort();ke.argument(r===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var i=t.parseUShort();t.skip("uShort",3);for(var s=0;s<i;s+=1){var c=t.parseUShort(),f=t.parseUShort(),m=t.parseShort();n[c+","+f]=m}return n}function IA(t){var n={};t.skip("uShort");var r=t.parseULong();r>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var i=t.parseUShort(),s=i&255;if(t.skip("uShort"),s===0){var c=t.parseUShort();t.skip("uShort",3);for(var f=0;f<c;f+=1){var m=t.parseUShort(),p=t.parseUShort(),v=t.parseShort();n[m+","+p]=v}}return n}function _A(t,n){var r=new de.Parser(t,n),i=r.parseUShort();if(i===0)return BA(r);if(i===1)return IA(r);throw new Error("Unsupported kern table version ("+i+").")}var GA={parse:_A};function PA(t,n,r,i){for(var s=new de.Parser(t,n),c=i?s.parseUShort:s.parseULong,f=[],m=0;m<r+1;m+=1){var p=c.call(s);i&&(p*=2),f.push(p)}return f}var HA={parse:PA};function VA(t,n){var r=require("fs");r.readFile(t,function(i,s){if(i)return n(i.message);n(null,vx(s))})}function qA(t,n){var r=new XMLHttpRequest;r.open("get",t,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?n(null,r.response):n("Font could not be loaded: "+r.statusText)},r.onerror=function(){n("Font could not be loaded")},r.send()}function Iv(t,n){for(var r=[],i=12,s=0;s<n;s+=1){var c=de.getTag(t,i),f=de.getULong(t,i+4),m=de.getULong(t,i+8),p=de.getULong(t,i+12);r.push({tag:c,checksum:f,offset:m,length:p,compression:!1}),i+=16}return r}function YA(t,n){for(var r=[],i=44,s=0;s<n;s+=1){var c=de.getTag(t,i),f=de.getULong(t,i+4),m=de.getULong(t,i+8),p=de.getULong(t,i+12),v=void 0;m<p?v="WOFF":v=!1,r.push({tag:c,offset:f,compression:v,compressedLength:m,length:p}),i+=20}return r}function vt(t,n){if(n.compression==="WOFF"){var r=new Uint8Array(t.buffer,n.offset+2,n.compressedLength-2),i=new Uint8Array(n.length);if(N3(r,i),i.byteLength!==n.length)throw new Error("Decompression error: "+n.tag+" decompressed length doesn't match recorded length");var s=new DataView(i.buffer,0);return{data:s,offset:0}}else return{data:t,offset:n.offset}}function hd(t,n){n=n??{};var r,i,s=new Je({empty:!0}),c=new DataView(t,0),f,m=[],p=de.getTag(c,0);if(p==="\0\0\0"||p==="true"||p==="typ1")s.outlinesFormat="truetype",f=de.getUShort(c,4),m=Iv(c,f);else if(p==="OTTO")s.outlinesFormat="cff",f=de.getUShort(c,4),m=Iv(c,f);else if(p==="wOFF"){var v=de.getTag(c,4);if(v==="\0\0\0")s.outlinesFormat="truetype";else if(v==="OTTO")s.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+p);f=de.getUShort(c,12),m=YA(c,f)}else throw new Error("Unsupported OpenType signature "+p);for(var g,b,y,C,w,E,A,T,D,M,Y,V,X=0;X<f;X+=1){var B=m[X],G=void 0;switch(B.tag){case"cmap":G=vt(c,B),s.tables.cmap=Vg.parse(G.data,G.offset),s.encoding=new Yg(s.tables.cmap);break;case"cvt ":G=vt(c,B),V=new de.Parser(G.data,G.offset),s.tables.cvt=V.parseShortList(B.length/2);break;case"fvar":b=B;break;case"fpgm":G=vt(c,B),V=new de.Parser(G.data,G.offset),s.tables.fpgm=V.parseByteList(B.length);break;case"head":G=vt(c,B),s.tables.head=ax.parse(G.data,G.offset),s.unitsPerEm=s.tables.head.unitsPerEm,r=s.tables.head.indexToLocFormat;break;case"hhea":G=vt(c,B),s.tables.hhea=nx.parse(G.data,G.offset),s.ascender=s.tables.hhea.ascender,s.descender=s.tables.hhea.descender,s.numberOfHMetrics=s.tables.hhea.numberOfHMetrics;break;case"hmtx":A=B;break;case"ltag":G=vt(c,B),i=ix.parse(G.data,G.offset);break;case"maxp":G=vt(c,B),s.tables.maxp=lx.parse(G.data,G.offset),s.numGlyphs=s.tables.maxp.numGlyphs;break;case"name":M=B;break;case"OS/2":G=vt(c,B),s.tables.os2=Gf.parse(G.data,G.offset);break;case"post":G=vt(c,B),s.tables.post=dx.parse(G.data,G.offset),s.glyphNames=new sd(s.tables.post);break;case"prep":G=vt(c,B),V=new de.Parser(G.data,G.offset),s.tables.prep=V.parseByteList(B.length);break;case"glyf":y=B;break;case"loca":D=B;break;case"CFF ":g=B;break;case"kern":T=B;break;case"GDEF":C=B;break;case"GPOS":w=B;break;case"GSUB":E=B;break;case"meta":Y=B;break}}var ne=vt(c,M);if(s.tables.name=fx.parse(ne.data,ne.offset,i),s.names=s.tables.name,y&&D){var ce=r===0,ye=vt(c,D),Se=HA.parse(ye.data,ye.offset,s.numGlyphs,ce),ee=vt(c,y);s.glyphs=yx.parse(ee.data,ee.offset,Se,s,n)}else if(g){var ge=vt(c,g);tx.parse(ge.data,ge.offset,s,n)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var he=vt(c,A);if(rx.parse(s,he.data,he.offset,s.numberOfHMetrics,s.numGlyphs,s.glyphs,n),rT(s,n),T){var F=vt(c,T);s.kerningPairs=GA.parse(F.data,F.offset)}else s.kerningPairs={};if(C){var $=vt(c,C);s.tables.gdef=LA.parse($.data,$.offset)}if(w){var re=vt(c,w);s.tables.gpos=NA.parse(re.data,re.offset),s.position.init()}if(E){var oe=vt(c,E);s.tables.gsub=px.parse(oe.data,oe.offset)}if(b){var we=vt(c,b);s.tables.fvar=AA.parse(we.data,we.offset,s.names)}if(Y){var O=vt(c,Y);s.tables.meta=mx.parse(O.data,O.offset),s.metas=s.tables.meta}return s}function XA(t,n,r){r=r??{};var i=typeof window>"u",s=i&&!r.isUrl?VA:qA;return new Promise(function(c,f){s(t,function(m,p){if(m){if(n)return n(m);f(m)}var v;try{v=hd(p,r)}catch(g){if(n)return n(g,null);f(g)}if(n)return n(null,v);c(v)})})}function WA(t,n){var r=require("fs"),i=r.readFileSync(t);return hd(vx(i),n)}var ZA=Object.freeze({__proto__:null,Font:Je,Glyph:ca,Path:Et,BoundingBox:Rn,_parse:de,parse:hd,load:XA,loadSync:WA});const QA="https://fonts.gstatic.com/s/sharetechmono/v16/J7aHnp1uDWRBEqV98dVQztYldFc7pA.ttf";let vs=null;async function Rx(){if(vs)return vs;const n=await(await fetch(QA)).arrayBuffer();return vs=ZA.parse(n),vs}function KA(t,n,r="#0a0a0a"){const i=n.character.scale*8,s=i*.6,c=n.character.spacing||1,f=i*c,m=t.width*s,p=t.height*f;let v=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${p}" viewBox="0 0 ${m} ${p}">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono');
    text { font-family: 'Share Tech Mono', monospace; font-size: ${i}px; }
  </style>
  <rect width="100%" height="100%" fill="${r}"/>
  <g>`;return t.grid.forEach((g,b)=>{g.forEach((y,C)=>{if(y.char===" ")return;const w=C*s,E=b*f+i*.8;let A;if(n.color.useOriginal){const{r:D,g:M,b:Y}=y.color,V=n.color.intensity;A=`rgb(${Math.min(255,Math.round(D*V))},${Math.min(255,Math.round(M*V))},${Math.min(255,Math.round(Y*V))})`}else A=n.color.custom;const T=y.char.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");v+=`
    <text x="${w}" y="${E}" fill="${A}">${T}</text>`})}),v+=`
  </g>
</svg>`,v}async function JA(t,n,r="#0a0a0a",i){const s=n.character.scale*8,c=s*.6,f=n.character.spacing||1,m=s*f;if(t.width*t.height<1e4)return KA(t,n,r);const v=new Worker(new URL("./svg.worker-4qfU-ukz.js",import.meta.url),{type:"module"});return new Promise((g,b)=>{v.onmessage=C=>{const{type:w,progress:E,message:A,svg:T,error:D}=C.data;w==="progress"&&i&&E!==void 0?i(E,A||"Generating SVG..."):w==="complete"&&T?(v.terminate(),g(T)):w==="error"&&(v.terminate(),b(new Error(D||"SVG worker error")))},v.onerror=C=>{v.terminate(),b(C)};const y=t.grid.map(C=>C.map(w=>({char:w.char,color:{r:w.color.r,g:w.color.g,b:w.color.b}})));v.postMessage({type:"generate",grid:y,width:t.width,height:t.height,fontSize:s,charWidth:c,lineHeight:m,backgroundColor:r,useOriginalColor:n.color.useOriginal,colorIntensity:n.color.intensity,customColor:n.color.custom})})}async function $A(t,n,r,i){i?.(5,"Loading font...");const s=await Rx(),c=n.character.scale*8,f=c*.6,m=n.character.spacing||1,p=c*m,v=t.width*f,g=t.height*p;i?.(10,"Converting characters to paths...");let b="";const y=t.grid.length;for(let w=0;w<y;w++){const E=t.grid[w];for(let A=0;A<E.length;A++){const T=E[A];if(T.char===" ")continue;const D=A*f,M=w*p+c*.8;let Y;if(n.color.useOriginal){const{r:B,g:G,b:ne}=T.color,ce=n.color.intensity;Y=`rgb(${Math.min(255,Math.round(B*ce))},${Math.min(255,Math.round(G*ce))},${Math.min(255,Math.round(ne*ce))})`}else Y=n.color.custom;const X=s.getPath(T.char,D,M,c).toPathData(2);X&&(b+=`
    <path fill="${Y}" d="${X}"/>`)}w%20===0&&i?.(10+w/y*85,`Converting row ${w+1}/${y}...`)}i?.(95,"Building SVG...");const C=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${g}" viewBox="0 0 ${v} ${g}">
  <rect width="100%" height="100%" fill="${r}"/>
  <g>${b}
  </g>
</svg>`;return i?.(100,"Complete!"),C}async function e4(t,n,r,i){i?.(5,"Loading font...");const s=await Rx(),c=n.character.scale*8,f=c*.6,m=n.character.spacing||1,p=c*m,v=t.width*f,g=t.height*p;i?.(10,"Converting characters to paths...");const b=new Map,y=t.grid.length;for(let w=0;w<y;w++){const E=t.grid[w];for(let A=0;A<E.length;A++){const T=E[A];if(T.char===" ")continue;const D=A*f,M=w*p+c*.8;let Y;if(n.color.useOriginal){const{r:B,g:G,b:ne}=T.color,ce=n.color.intensity;Y=`rgb(${Math.min(255,Math.round(B*ce))},${Math.min(255,Math.round(G*ce))},${Math.min(255,Math.round(ne*ce))})`}else Y=n.color.custom;const X=s.getPath(T.char,D,M,c).toPathData(2);X&&(b.has(Y)||b.set(Y,[]),b.get(Y).push(X))}w%20===0&&i?.(10+w/y*80,`Converting row ${w+1}/${y}...`)}i?.(90,"Building SVG...");let C=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${g}" viewBox="0 0 ${v} ${g}">
  <rect width="100%" height="100%" fill="${r}"/>
  <g>`;for(const[w,E]of b)C+=`
    <path fill="${w}" d="${E.join(" ")}"/>`;return C+=`
  </g>
</svg>`,i?.(100,"Complete!"),C}async function t4(t,n,r="ascii-art.svg",i,s="editable"){const c=n.color.backgroundColor||"#0a0a0a";let f;s==="flattened"?f=await e4(t,n,c,i):s==="outlined"?f=await $A(t,n,c,i):f=await JA(t,n,c,i);const m=new Blob([f],{type:"image/svg+xml;charset=utf-8"});Pl(m,r)}async function a4(t,n){return new Promise((r,i)=>{t.toBlob(s=>{s?r(s):i(new Error("Failed to create image blob"))},n.format==="jpeg"?"image/jpeg":"image/png",n.quality)})}async function n4(t,n,r){const i=await a4(t,n),s=n.format==="jpeg"?"jpg":"png";Pl(i,r||`ascii-art.${s}`)}function Rl(){return document.querySelector("canvas")}async function r4(t){const n=t.toDataURL("image/png"),r=await new Promise((f,m)=>{const p=new Image;p.onload=()=>f(p),p.onerror=m,p.src=n}),i=document.createElement("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");if(!s)throw new Error("Could not get canvas context");s.drawImage(r,0,0);const c=s.getImageData(0,0,t.width,t.height);return new Uint8Array(c.data.buffer)}async function i4(t,n,r,i,s,c){const f=new Worker(new URL("./gif.worker-B7Da-SLn.js",import.meta.url),{type:"module"});return new Promise((m,p)=>{f.onmessage=g=>{const{type:b,progress:y,message:C,blob:w,error:E}=g.data;b==="progress"&&c&&y!==void 0?c(y,C||"Encoding..."):b==="complete"&&w?(f.terminate(),m(new Blob([w],{type:"image/gif"}))):b==="error"&&(f.terminate(),p(new Error(E||"Worker error")))},f.onerror=g=>{f.terminate(),p(g)};const v=t.map(g=>g.buffer);f.postMessage({type:"encode",frames:v,width:n,height:r,fps:i,quality:s},v)})}class l4{width;height;fps;quality;frames=[];constructor(n){this.width=n.width,this.height=n.height,n.fps?this.fps=n.fps:n.delay?this.fps=Math.round(1e3/n.delay):this.fps=10,this.quality=n.quality??80}addFrame(n){this.frames.push(n)}async addFrameFromCanvas(n){const r=await r4(n);this.addFrame(r)}async render(n){if(this.frames.length===0)throw new Error("No frames to encode");return i4(this.frames,this.width,this.height,this.fps,this.quality,n)}clear(){this.frames=[]}}function o4(){return typeof VideoEncoder<"u"}function s4(t){if(!t)throw new Error("Recorder returned no data");if(t instanceof Blob)return t;if(Array.isArray(t))return new Blob(t,{type:"video/mp4"});if(t instanceof ArrayBuffer)return new Blob([t],{type:"video/mp4"});if(t instanceof Uint8Array){const n=new Uint8Array(t);return new Blob([n],{type:"video/mp4"})}if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.byteLength);return n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),new Blob([n],{type:"video/mp4"})}throw new Error(`Unexpected result type from recorder: ${typeof t}`)}async function c4(t,n,r={},i){const{Recorder:s,Encoders:c}=await za(async()=>{const{Recorder:T,Encoders:D}=await import("./index-CPD5w-YN.js");return{Recorder:T,Encoders:D}},__vite__mapDeps([0,1])),{AVC:f}=await za(async()=>{const{AVC:T}=await import("./index-C-104lQ3.js");return{AVC:T}},__vite__mapDeps([2,1])),m=o4(),p=r.fps??30,v=Math.ceil(n/1e3*p);let g=t.width,b=t.height;const y=1920;if(g>y||b>y){const T=y/Math.max(g,b);g=Math.floor(g*T),b=Math.floor(b*T)}g=g%2===0?g:g-1,b=b%2===0?b:b-1;const C=r.bitrate??8e6,w=document.createElement("canvas");w.width=g,w.height=b;const E=w.getContext("2d"),A=m?new s(E,{name:"ascii-art",frameRate:p,download:!1,encoder:new c.WebCodecsEncoder,encoderOptions:{codec:f.getCodec({profile:"High",level:"5.1"}),width:g,height:b,bitrate:C}}):new s(E,{name:"ascii-art",frameRate:p,download:!1,encoder:new c.H264MP4Encoder,encoderOptions:{width:g,height:b,bitrate:C}});try{await A.start();const T=1e3/p,D=Date.now();for(let V=0;V<v;V++){const X=D+V*T,B=Date.now();X>B&&await new Promise(G=>setTimeout(G,X-B)),await new Promise(G=>requestAnimationFrame(G)),E.drawImage(t,0,0,g,b),await A.step(),i&&i({currentFrame:V+1,totalFrames:v,percent:(V+1)/v*90,stage:"recording"})}i&&i({currentFrame:v,totalFrames:v,percent:95,stage:"encoding"});const M=await A.stop();return i&&i({currentFrame:v,totalFrames:v,percent:100,stage:"encoding"}),s4(M)}catch(T){try{await A.stop()}catch{}throw T}}async function u4(t,n,r={},i,s){const c=await c4(t,n,r,s);Pl(c,i)}const vd={depthStyle:"layered",depthScale:1,includeColors:!0,includeControls:!0,backgroundColor:"#000000",bloom:{enabled:!1,strength:1.5,radius:.4,threshold:.5}};function f4(t,n){const r=[],{grid:i,width:s,height:c}=t,f=.6,m=s*f/2,p=c/2;for(let v=0;v<i.length;v++)for(let g=0;g<i[v].length;g++){const b=i[v][g];if(b.char===" ")continue;const y=b.brightness;r.push({char:b.char,x:g*f-m,y:-(v-p),z:y*n.depthScale,color:b.color})}return r}function d4(t,n=vd){const r=f4(t,n);if(r.length>0){console.log("[ThreeJsExporterESM] First instance color:",r[0].color);const b=`#${r[0].color.r.toString(16).padStart(2,"0")}${r[0].color.g.toString(16).padStart(2,"0")}${r[0].color.b.toString(16).padStart(2,"0")}`;console.log("[ThreeJsExporterESM] First instance hex:",b)}const i=new Map;for(const b of r)i.has(b.char)||i.set(b.char,[]),i.get(b.char).push(b);const s=Array.from(i.entries()).map(([b,y])=>({char:b,instances:y.map(C=>({x:Number(C.x.toFixed(2)),y:Number(C.y.toFixed(2)),z:Number(C.z.toFixed(2)),color:n.includeColors?`#${C.color.r.toString(16).padStart(2,"0")}${C.color.g.toString(16).padStart(2,"0")}${C.color.b.toString(16).padStart(2,"0")}`:null}))})),c=n.bloom.enabled?`import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';`:"",f=n.bloom.enabled?`
  // Post-processing with bloom
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  console.log('Setting up bloom effect...');
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth, container.clientHeight),
    ${n.bloom.strength},  // strength
    ${n.bloom.radius},    // radius
    ${n.bloom.threshold}  // threshold
  );
  composer.addPass(bloomPass);
  console.log('Bloom pass added with strength=${n.bloom.strength}');
`:"",m=n.bloom.enabled?"    composer.setSize(container.clientWidth, container.clientHeight);":"",p=n.bloom.enabled?"composer.render();":"renderer.render(scene, camera);",v=n.bloom.enabled?`    composer.dispose();
    bloomPass.dispose();`:"";return`import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
${c}

/**
 * ASCII Art Three.js Scene
 * Generated by Grainrad ASCII Generator
 */

// ASCII Data - ${r.length} characters
const asciiData = {
  dimensions: { width: ${t.width}, height: ${t.height} },
  depthScale: ${n.depthScale},
  backgroundColor: "${n.backgroundColor}",
  groups: ${JSON.stringify(s,null,2)}
};

/**
 * Create the ASCII 3D scene
 * @param {HTMLElement} container - DOM element to render into
 */
function createAsciiScene(container) {
  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(asciiData.backgroundColor);

  // Camera setup - use perspective for better 3D effect
  const aspect = container.clientWidth / container.clientHeight;
  const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 2000);

  // Position camera to see the whole scene
  const maxDim = Math.max(asciiData.dimensions.width, asciiData.dimensions.height);
  camera.position.set(0, 0, maxDim * 1.5);
  camera.lookAt(0, 0, 0);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
${f}
  const textMeshes = [];

  // Load font and create text meshes
  const fontLoader = new FontLoader();
  fontLoader.load(
    'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/fonts/helvetiker_regular.typeface.json',
    function(font) {
      const charHeight = 1.0;  // Base character height
      const charAspect = 0.6;  // Width/height ratio for monospace look

      asciiData.groups.forEach(group => {
        group.instances.forEach(inst => {
          const textGeometry = new TextGeometry(group.char, {
            font: font,
            size: charHeight,
            height: 0.02,  // Very thin depth
            curveSegments: 2,
          });
          textGeometry.center();

          // Scale X to make characters narrower (monospace aspect ratio)
          textGeometry.scale(charAspect, 1, 1);

          const material = new THREE.MeshBasicMaterial({
            color: inst.color || '#ffffff'
          });

          const mesh = new THREE.Mesh(textGeometry, material);
          mesh.position.set(inst.x, inst.y, inst.z * 10);  // Scale up depth for visibility
          scene.add(mesh);
          textMeshes.push(mesh);
        });
      });
    }
  );

${n.includeControls?`  // Orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = true;
`:""}
  // Handle resize
  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
${m}
  }
  window.addEventListener('resize', onWindowResize);

  // Animation loop
  let animationId = null;
  function animate() {
    animationId = requestAnimationFrame(animate);
${n.includeControls?"    controls.update();":""}
    ${p}
  }
  console.log('Animation loop created, bloom enabled: ${n.bloom.enabled}');

  // Cleanup
  function dispose() {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onWindowResize);
    textMeshes.forEach(mesh => {
      mesh.geometry.dispose();
      mesh.material.dispose();
      scene.remove(mesh);
    });
${v}
    renderer.dispose();
    container.removeChild(renderer.domElement);
${n.includeControls?"    controls.dispose();":""}
  }

  return { scene, camera, renderer, animate, dispose };
}

// Auto-initialize
const container = document.getElementById('ascii-scene');
if (container) {
  const { animate } = createAsciiScene(container);
  animate();
}
`}function p4(t,n=vd){const r=d4(t,n);return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASCII Art 3D Scene</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      overflow: hidden;
      background: ${n.backgroundColor};
      font-family: monospace;
    }
    #ascii-scene {
      width: 100vw;
      height: 100vh;
    }
    #info {
      position: absolute;
      top: 10px;
      left: 10px;
      color: #666;
      font-size: 12px;
      pointer-events: none;
    }
  </style>
  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
    }
  }
  <\/script>
</head>
<body>
  <div id="ascii-scene"></div>
  <div id="info">Drag to rotate | Scroll to zoom</div>

  <script type="module">
${r}
  <\/script>
</body>
</html>`}function m4(t,n=vd,r="ascii-scene.html"){const i=p4(t,n),s=new Blob([i],{type:"text/html"}),c=URL.createObjectURL(s),f=document.createElement("a");f.href=c,f.download=r,f.style.display="none",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(c)}function h4(){const t=J(v=>v.export),n=J(v=>v.settings),r=J(v=>v.export.asciiData),i=J(v=>v.startExport),s=J(v=>v.updateExportProgress),c=J(v=>v.setExportError),f=J(v=>v.cancelExport),m=k.useCallback(async(v,g,b,y,C,w,E)=>{try{if(i(v),v==="png"||v==="jpeg"){s(30,"Capturing canvas...");const T=Rl();if(!T){c("No canvas found");return}const D=nd(),Y=J.getState().input.source;let V=T;if(D&&D.isReady()&&Y&&(Y instanceof HTMLImageElement||Y instanceof HTMLVideoElement||Y instanceof HTMLCanvasElement)){const X=J.getState().settings,B=J.getState().effects;if(D.render(Y,X,performance.now()/1e3,B.active,B),D.type==="webgpu"){const G=document.createElement("canvas");G.width=T.width,G.height=T.height;const ne=G.getContext("2d");ne&&(ne.drawImage(T,0,0),V=G)}}await n4(V,{format:v,quality:v==="jpeg"?.9:void 0},`ascii-art.${v==="jpeg"?"jpg":"png"}`),s(100,"Complete!"),setTimeout(()=>{f()},1e3);return}let A=g;if(!A&&(v==="text"||v==="svg")){s(20,"Reading ASCII data from GPU...");const T=Rl();if(!T){c("No canvas found");return}const D=b.character.set==="custom"?b.character.customChars||Tn.standard:Tn[b.character.set];if(A=await ev(T,b,D),!A){c("Failed to generate ASCII data");return}}switch(v){case"text":s(50,"Generating text..."),await new Promise(T=>setTimeout(T,100)),A3(A,"ascii-art.txt"),s(100,"Complete!");break;case"svg":s(10,"Generating SVG..."),await t4(A,b,"ascii-art.svg",(T,D)=>{s(10+T*.89,D)},E?.mode??"editable"),s(100,"Complete!");break;case"gif":{const T=Rl();if(!T){c("No canvas found");return}const D=w?.fps??10,M=w?.duration??2,Y=Math.ceil(D*M),V=Math.round(1e3/D),X=new l4({width:T.width,height:T.height,delay:V});for(let G=0;G<Y;G++)await new Promise(ne=>requestAnimationFrame(ne)),await X.addFrameFromCanvas(T),s(G/Y*70,`Capturing frame ${G+1}/${Y}...`),G%3===0&&await new Promise(ne=>setTimeout(ne,0));s(70,"Encoding GIF...");const B=await X.render((G,ne)=>{const ce=Math.min(G,100);s(70+ce*.29,ne)});X.clear(),await new Promise(G=>setTimeout(G,50)),Pl(B,"ascii-art.gif"),s(100,"Complete!");break}case"video":{const T=Rl();if(!T){c("No canvas found");return}const D=y?.fps??30,M=y?.duration??3e3,Y=y?.bitrate??8e6;s(2,"Starting recording..."),await u4(T,M,{fps:D,bitrate:Y},"ascii-art.mp4",V=>{const X=V.stage==="recording"?`Recording frame ${V.currentFrame}/${V.totalFrames}...`:`Encoding MP4... ${Math.round(V.percent)}%`;s(V.percent,X)}),s(100,"Complete!");break}case"threejs":{console.log("[ThreeJS Export] Starting..."),s(20,"Reading GPU character data...");const T=Rl();if(!T){console.error("[ThreeJS Export] No canvas found"),c("No canvas found");return}console.log("[ThreeJS Export] Canvas found:",T.width,"x",T.height);const D=b.character.set==="custom"?b.character.customChars||Tn.standard:Tn[b.character.set];console.log("[ThreeJS Export] Charset:",D),console.log("[ThreeJS Export] Calling generateAsciiFromGPU...");const M=await ev(T,b,D);if(console.log("[ThreeJS Export] ASCII data:",M),!M){console.error("[ThreeJS Export] Failed to generate ASCII data"),c("Failed to generate ASCII data");return}console.log("[ThreeJS Export] Grid size:",M.width,"x",M.height),s(60,"Generating Three.js scene...");const Y=b.color.backgroundColor||"#000000",V={flat:0,layered:1,extreme:3},X=C?.depthStyle||"layered",B=V[X]??1,G={depthStyle:X,depthScale:B,includeColors:!0,includeControls:!0,backgroundColor:Y,bloom:{enabled:C?.bloomEnabled??!1,strength:C?.bloomStrength??1.5,radius:.8,threshold:0}};console.log("[ThreeJS Export] Export options:",G),console.log("[ThreeJS Export] threeJsOptions received:",C),m4(M,G,"ascii-scene.html"),console.log("[ThreeJS Export] Download triggered"),s(100,"Complete!");break}default:c(`Unknown format: ${v}`);return}setTimeout(()=>{f()},1e3)}catch(A){c(A instanceof Error?A.message:"Export failed")}},[i,s,c,f]),p=k.useCallback(async(v,g,b,y,C)=>{await m(v,r,n,g,b,y,C)},[r,n,m]);return{exportAscii:m,exportAs:p,isExporting:t.isExporting,progress:t.progress,error:t.error}}let _v=!1;const v4=()=>{_v||(_v=!0,za(()=>import("./index-CPD5w-YN.js"),__vite__mapDeps([0,1])),za(()=>import("./index-C-104lQ3.js"),__vite__mapDeps([2,1])))},g4=[{id:"editable",label:"Editable",description:"Text elements"},{id:"outlined",label:"Outlined",description:"Individual vectors"},{id:"flattened",label:"Flattened",description:"Single vector"}],x4=[{id:"flat",label:"Flat",description:"No depth (2D)"},{id:"layered",label:"Layered",description:"Subtle 3D depth"},{id:"extreme",label:"Extreme",description:"Dramatic depth"}],Sf=[{id:"lossless",label:"Lossless",fps:60,bitrate:32e6,description:"60fps, 32Mbps"},{id:"high",label:"High",fps:60,bitrate:16e6,description:"60fps, 16Mbps"},{id:"medium",label:"Medium",fps:30,bitrate:8e6,description:"30fps, 8Mbps"},{id:"low",label:"Low",fps:24,bitrate:4e6,description:"24fps, 4Mbps"}],Cf=[{id:"lossless",label:"Lossless",fps:30,duration:0,description:"30fps"},{id:"high",label:"High",fps:24,duration:0,description:"24fps"},{id:"medium",label:"Medium",fps:15,duration:0,description:"15fps"},{id:"low",label:"Low",fps:10,duration:0,description:"10fps"}],b4=(t,n)=>[{format:"png",label:"PNG",ext:".png",available:!0,description:"High quality image"},{format:"jpeg",label:"JPEG",ext:".jpg",available:!0,description:"Compressed image"},{format:"gif",label:"GIF",ext:".gif",available:!0,description:"2s animation"},{format:"video",label:"Video",ext:".mp4",available:!0,description:"MP4 recording"},{format:"svg",label:"SVG",ext:".svg",available:!t,description:t?"Not available for video":"Vector format"},{format:"text",label:"Text",ext:".txt",available:!t,description:t?"Not available for video":"ASCII text"},{format:"threejs",label:"Three.js",ext:".html",available:!n,description:n?"ASCII only":"3D scene"}],Gv=()=>{const t=J(Q=>Q.export),n=J(Q=>Q.input),r=J(Q=>Q.effects.active),i=J(Q=>Q.videoCurrentTime),s=J(Q=>Q.seekVideo),c=J(Q=>Q.setVideoIsPlaying),{exportAs:f}=h4(),[m,p]=k.useState("png"),[v,g]=k.useState("medium"),[b,y]=k.useState("medium"),[C,w]=k.useState(2),[E,A]=k.useState(0),[T,D]=k.useState("editable"),[M,Y]=k.useState({depthStyle:"layered",bloomEnabled:!1,bloomStrength:1.5}),[V,X]=k.useState(!1),B=n.type!=="none"&&n.status!=="ERROR",G=n.metadata?.duration??5,ne=n.metadata?.frameRate??30,ce=1/ne,ye=Math.floor(G*ne),Se=n.type==="video",ee=Se&&(m==="png"||m==="jpeg");k.useEffect(()=>{Se&&!V&&A(i)},[i,Se,V]);const ge=k.useCallback(()=>{X(!0),n.type==="video"&&n.source instanceof HTMLVideoElement&&(n.source.pause(),c(!1))},[n,c]),he=k.useCallback(()=>{X(!1)},[]),F=k.useCallback(Q=>{const De=parseFloat(Q.target.value);A(De),s(De)},[s]),$=k.useCallback(()=>{n.type==="video"&&n.source instanceof HTMLVideoElement&&(n.source.play(),c(!0))},[n,c]),re=Q=>{const De=Math.floor(Q/60),_e=Math.floor(Q%60),Lt=Math.floor(Q%1*100);return`${De}:${_e.toString().padStart(2,"0")}.${Lt.toString().padStart(2,"0")}`},oe=Math.round(E*ne),we=async()=>{if(!B)return;const Q=Sf.find(It=>It.id===v),De=Cf.find(It=>It.id===b),_e=De?{...De,duration:C}:void 0,Lt=Se?Math.ceil(G*1e3):5e3;await f(m,Q?{...Q,duration:Lt}:void 0,m==="threejs"?M:void 0,m==="gif"?_e:void 0,m==="svg"?{mode:T}:void 0)},O=r===null||r==="ascii",I=b4(Se,!O),te=I.find(Q=>Q.format===m);k.useEffect(()=>{const Q=I.find(De=>De.format===m);Q&&!Q.available&&p("png")},[Se,m,I,O]);const ie=Sf.find(Q=>Q.id===v),ve=Cf.find(Q=>Q.id===b),me=Q=>{if(Q<60)return`${Q.toFixed(1)}s`;const De=Math.floor(Q/60),_e=Math.round(Q%60);return`${De}m ${_e}s`};return h.jsx(jr,{title:"Export",children:h.jsxs("div",{className:"space-y-4",children:[t.isExporting&&h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-term-text-dim",children:t.currentStep}),h.jsxs("span",{className:"text-term-text font-mono",children:[Math.round(t.progress),"%"]})]}),h.jsx("div",{className:"h-px bg-term-border relative",children:h.jsx("div",{className:"absolute h-full bg-term-text-bright transition-all duration-300",style:{width:`${t.progress}%`}})})]}),t.error&&h.jsx("div",{className:"text-red-400 text-xs",children:t.error}),h.jsx(Ae,{title:"Format",children:h.jsx("div",{className:"grid grid-cols-2 gap-1",children:I.map(Q=>h.jsxs("button",{onClick:()=>Q.available&&p(Q.format),onMouseEnter:Q.format==="video"?v4:void 0,disabled:!Q.available,className:`
                  px-2 py-2 text-left transition-colors border
                  ${Q.available?m===Q.format?"border-term-text-bright text-term-text-bright bg-term-text-bright/10":"border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright":"border-transparent bg-term-bg text-term-text-dim/40 cursor-not-allowed opacity-40"}
                `,children:[h.jsx("div",{className:"text-xs font-medium",children:Q.label}),h.jsx("div",{className:`text-xs ${Q.available?"text-term-text-dim":"text-term-text-dim/30"}`,children:Q.ext})]},Q.format))})}),ee&&h.jsx(Ae,{title:"Select Frame",children:h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-term-text-dim",children:"Frame"}),h.jsxs("span",{className:"text-term-text font-mono",children:[oe," / ",ye]})]}),h.jsx("input",{type:"range",min:0,max:G,step:ce,value:E,onChange:F,onMouseDown:ge,onMouseUp:he,onTouchStart:ge,onTouchEnd:he,className:`w-full h-1 bg-term-border rounded-none appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-term-text-bright
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-3
                  [&::-moz-range-thumb]:h-3
                  [&::-moz-range-thumb]:bg-term-text-bright
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer`}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-term-text-dim",children:[h.jsx("span",{children:re(0)}),h.jsx("span",{children:re(G)})]}),h.jsx("button",{onClick:$,className:"w-full px-2 py-1 text-xs border border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright transition-colors",children:"Resume Playback"})]})}),m==="video"&&h.jsx(Ae,{title:"Quality",children:h.jsx("div",{className:"space-y-1",children:Sf.map(Q=>h.jsx("button",{onClick:()=>g(Q.id),className:`
                    w-full px-2 py-1.5 text-left transition-colors border
                    ${v===Q.id?"border-term-text-bright text-term-text-bright bg-term-text-bright/10":"border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright"}
                  `,children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-xs font-medium",children:Q.label}),h.jsx("span",{className:"text-xs text-term-text-dim",children:Q.description})]})},Q.id))})}),m==="gif"&&h.jsx(Ae,{title:"Quality",children:h.jsxs("div",{className:"space-y-3",children:[h.jsx("div",{className:"space-y-1",children:Cf.map(Q=>h.jsx("button",{onClick:()=>y(Q.id),className:`
                      w-full px-2 py-1.5 text-left transition-colors border
                      ${b===Q.id?"border-term-text-bright text-term-text-bright bg-term-text-bright/10":"border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright"}
                    `,children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-xs font-medium",children:Q.label}),h.jsx("span",{className:"text-xs text-term-text-dim",children:Q.description})]})},Q.id))}),h.jsxs("div",{className:"space-y-1 pt-2 border-t border-term-border",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-term-text-dim",children:"Duration"}),h.jsxs("span",{className:"text-term-text font-mono",children:[C,"s"]})]}),h.jsx("input",{type:"range",min:1,max:Se?Math.min(Math.ceil(G),20):20,step:1,value:C,onChange:Q=>w(parseInt(Q.target.value)),className:`w-full h-1 bg-term-border rounded-none appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:bg-term-text-bright
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-3
                    [&::-moz-range-thumb]:h-3
                    [&::-moz-range-thumb]:bg-term-text-bright
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer`}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-term-text-dim",children:[h.jsx("span",{children:"1s"}),h.jsxs("span",{children:[Se?Math.min(Math.ceil(G),20):20,"s"]})]})]})]})}),m==="svg"&&h.jsx(Ae,{title:"Mode",children:h.jsx("div",{className:"space-y-1",children:g4.map(Q=>h.jsx("button",{onClick:()=>D(Q.id),className:`
                    w-full px-2 py-1.5 text-left transition-colors border
                    ${T===Q.id?"border-term-text-bright text-term-text-bright bg-term-text-bright/10":"border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright"}
                  `,children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-xs font-medium",children:Q.label}),h.jsx("span",{className:"text-xs text-term-text-dim",children:Q.description})]})},Q.id))})}),m==="threejs"&&h.jsxs(h.Fragment,{children:[h.jsx(Ae,{title:"Depth Style",children:h.jsx("div",{className:"space-y-1",children:x4.map(Q=>h.jsx("button",{onClick:()=>Y(De=>({...De,depthStyle:Q.id})),className:`
                      w-full px-2 py-1.5 text-left transition-colors border
                      ${M.depthStyle===Q.id?"border-term-text-bright text-term-text-bright bg-term-text-bright/10":"border-term-border text-term-text hover:border-term-text-dim hover:text-term-text-bright"}
                    `,children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-xs font-medium",children:Q.label}),h.jsx("span",{className:"text-xs text-term-text-dim",children:Q.description})]})},Q.id))})}),h.jsx(Ae,{title:"Effects",children:h.jsxs("div",{className:"space-y-3",children:[h.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[h.jsx("span",{className:"text-xs text-term-text",children:"Bloom"}),h.jsx("input",{type:"checkbox",checked:M.bloomEnabled,onChange:Q=>Y(De=>({...De,bloomEnabled:Q.target.checked})),className:"w-4 h-4 accent-term-text-bright"})]}),M.bloomEnabled&&h.jsxs("div",{className:"space-y-1",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:"text-term-text-dim",children:"Strength"}),h.jsx("span",{className:"text-term-text font-mono",children:M.bloomStrength.toFixed(1)})]}),h.jsx("input",{type:"range",min:0,max:3,step:.1,value:M.bloomStrength,onChange:Q=>Y(De=>({...De,bloomStrength:parseFloat(Q.target.value)})),className:`w-full h-1 bg-term-border rounded-none appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:w-3
                        [&::-webkit-slider-thumb]:h-3
                        [&::-webkit-slider-thumb]:bg-term-text-bright
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:w-3
                        [&::-moz-range-thumb]:h-3
                        [&::-moz-range-thumb]:bg-term-text-bright
                        [&::-moz-range-thumb]:border-0
                        [&::-moz-range-thumb]:cursor-pointer`})]})]})})]}),h.jsxs("div",{className:"pt-3 border-t border-term-border space-y-2",children:[m==="video"&&ie?h.jsxs("p",{className:"text-term-text-dim text-xs",children:[ie.fps,"fps,"," ",Se?me(G):"5s"," duration"]}):m==="gif"&&ve?h.jsxs("p",{className:"text-term-text-dim text-xs",children:[ve.fps,"fps, ",C,"s duration"]}):te?.description?h.jsx("p",{className:"text-term-text-dim text-xs",children:te.description}):null,h.jsx(Ul,{variant:"primary",size:"md",fullWidth:!0,disabled:!B||t.isExporting,onClick:we,children:t.isExporting?"Exporting...":`Export ${te?.label||"PNG"}`})]})]})})},y4=()=>{const t=navigator.userAgent;return/Safari/.test(t)&&!/Chrome/.test(t)&&!/Chromium/.test(t)};let Pv=!1;const S4=()=>{const t=k.useRef(null),n=k.useRef(null),r=k.useRef(null),i=k.useRef(null),s=k.useRef(null),c=k.useRef(null),f=k.useRef(0),m=k.useRef(0),[p,v]=k.useState(!1),[g,b]=k.useState("none"),[y,C]=k.useState(null),[w,E]=k.useState(!1),[A,T]=k.useState(!1),[D,M]=k.useState(!0),Y=k.useRef(0),[V,X]=k.useState({x:0,y:0}),[B,G]=k.useState(!1),ne=k.useRef({x:0,y:0}),ce=J(H=>H.ui.isDraggingFile),ye=J(H=>H.setIsDraggingFile),Se=k.useRef(0),ee=J(H=>H.input),ge=J(H=>H.ui.isMobile),he=pg(),F=J(H=>H.effects),$=F.active,re=J(H=>H.ui.zoom),oe=J(H=>H.setZoom),we=dg(),O=J(H=>H.setInputType),I=J(H=>H.setInputStatus),te=J(H=>H.setInputSource),ie=J(H=>H.setInputFile),ve=J(H=>H.setInputMetadata),me=J(H=>H.setInputError),Q=J(H=>H.setGifData),De=J(H=>H.setVideoCurrentTime),_e=J(H=>H.setVideoIsPlaying),Lt=he.set==="custom"?he.customChars||Tn.standard:Tn[he.set];k.useEffect(()=>{const H=t.current;if(!H)return;if(r.current){p||(v(!0),E(!0));return}return Pv?void 0:(Pv=!0,(async()=>{try{const be=Tn.standard,Oe=await k3.create({canvas:H,charset:be});Oe?(r.current=Oe.renderer,O3(Oe.renderer),b(Oe.type),v(!0),C(null),E(!0)):(b("none"),C("No compatible renderer available"),E(!0))}catch(be){b("none"),C(be instanceof Error?be.message:String(be)),E(!0)}})(),()=>{})},[p]),k.useEffect(()=>{const H=r.current;H&&H.updateCharset(Lt,he.scale).then(()=>{ee.type==="image"&&ee.source instanceof HTMLImageElement&&(Aa.current+=1,H.render(ee.source,J.getState().settings,Y.current,Ot.current,Ea.current))})},[Lt,he.scale,ee.type,ee.source]);const It=k.useMemo(()=>{const H=F.settings.matrixRain;return H.characterSet==="custom"?H.customChars||Tn.standard:Tn[H.characterSet]},[F.settings.matrixRain.characterSet,F.settings.matrixRain.customChars]);k.useEffect(()=>{p&&r.current?.updateMatrixRainCharset(It)},[It,p]);const Ot=k.useRef($);Ot.current=$;const Ea=k.useRef(F);Ea.current=F;const qt=k.useRef(we);qt.current=we,k.useEffect(()=>{if(ee.type==="webcam"&&ee.source instanceof MediaStream){const H=document.createElement("video");return H.srcObject=ee.source,H.playsInline=!0,H.muted=!0,H.autoplay=!0,H.onloadedmetadata=()=>{H.play().catch(console.error)},s.current=H,()=>{H.pause(),H.srcObject=null,s.current=null}}else s.current=null},[ee.type,ee.source]),k.useEffect(()=>{if(ee.type==="video"&&ee.source instanceof HTMLVideoElement){const H=ee.source;H.muted=!0,H.loop=!0,H.playsInline=!0,H.paused&&H.play().catch(console.error)}},[ee.type,ee.source]),k.useEffect(()=>{if(ee.type==="gif"&&ee.gifData){const{width:H,height:ze}=ee.gifData;(!c.current||c.current.width!==H||c.current.height!==ze)&&(c.current=document.createElement("canvas"),c.current.width=H,c.current.height=ze),f.current=0,m.current=0;const be=c.current.getContext("2d");return be&&be.putImageData(ee.gifData.frames[0].imageData,0,0),()=>{c.current=null}}else c.current=null},[ee.type,ee.gifData]),k.useEffect(()=>{if(ee.type==="model3d"&&typeof ee.source=="string"){const H=ee.source;let ze=!1;return(async()=>{T(!0);try{if(!i.current){const{ThreeRenderer:Oe}=await za(async()=>{const{ThreeRenderer:Rt}=await import("./index-DKljlg_S.js");return{ThreeRenderer:Rt}},[]);if(ze)return;const yt=800;i.current=new Oe(yt,yt)}if(await i.current.loadModel(H),!ze){T(!1);const Oe=i.current.getCanvas();ve({width:Oe.width,height:Oe.height,fileName:ee.metadata?.fileName,fileSize:ee.metadata?.fileSize})}}catch(Oe){console.error("[PreviewCanvas] Failed to load 3D model:",Oe),ze||T(!1)}})(),()=>{ze=!0}}else ee.type!=="model3d"&&i.current&&(i.current.dispose(),i.current=null)},[ee.type,ee.source]);const Aa=k.useRef(0),Ka=k.useRef(-1),da=k.useRef(null),ka=k.useRef(!1),Oa=["matrixRain","noiseField","waveLines","vhs"];k.useEffect(()=>{if(!p)return;const H=(tn=!1)=>{Aa.current+=1;const Oe=ee.type==="image",yt=Ot.current,Rt=Oa.includes(yt||"");(tn||Oe&&!Rt&&!ka.current)&&da.current===null&&(da.current=requestAnimationFrame(()=>{da.current=null;const Ve=r.current;!Ve||!Ve.isReady()||!ee.source||ee.source instanceof HTMLImageElement&&(window.dispatchEvent(new CustomEvent("dithershop:process-busy",{detail:{label:"RENDERING",duration:600}})),Ve.render(ee.source,J.getState().settings,Y.current,Ot.current,Ea.current.settings?.[Ot.current]??Ea.current),Ka.current=Aa.current)}))},ze=J.subscribe(Oe=>Oe.settings,H),be=J.subscribe(Oe=>Oe.effects.settings,H),ce=J.subscribe(Oe=>Oe.effects.active,H),dsRefresh=()=>H(!0);return window.addEventListener("dithershop:refresh-preview",dsRefresh),H(),()=>{ze(),be(),ce(),window.removeEventListener("dithershop:refresh-preview",dsRefresh)}},[p,$,F,ee.type,ee.source]),k.useEffect(()=>{if(!p||!ee.source)return;const H=r.current;if(!H||!H.isReady())return;const ze=ee.type==="image",be=ee.type==="gif"&&ee.gifData!==null,Oe=Ot.current,yt=Oa.includes(Oe||""),Rt=!ze||yt||be;let Ve,Pt=performance.now(),en=!0;if(Rt){ka.current=!0;const tn=()=>{if(!en)return;const Ht=performance.now(),Ga=(Ht-Pt)/1e3;Pt=Ht,Y.current+=Ga;let Da=null;if(ee.type==="image"&&ee.source instanceof HTMLImageElement)Da=ee.source;else if(ee.type==="gif"&&ee.gifData&&c.current){const ct=ee.gifData,Ui=Ga*1e3;m.current+=Ui;const Mi=f.current;let Nr=ct.frames[f.current];for(;m.current>=Nr.delay;)m.current-=Nr.delay,f.current=(f.current+1)%ct.frames.length,Nr=ct.frames[f.current];if(f.current!==Mi){const Li=c.current.getContext("2d");Li&&Li.putImageData(ct.frames[f.current].imageData,0,0)}Da=c.current}else if(ee.type==="video"&&ee.source instanceof HTMLVideoElement){const ct=ee.source;ct.readyState>=2&&ct.videoWidth>0&&(Da=ct)}else if(ee.type==="webcam"&&s.current){const ct=s.current;ct.readyState>=2&&ct.videoWidth>0&&(Da=ct)}else if(ee.type==="model3d"&&i.current&&!A){const ct=i.current;ct.updateSettings(qt.current),Da=ct.render(qt.current)}Da&&H.render(Da,J.getState().settings,Y.current,Ot.current,Ea.current.settings?.[Ot.current]??Ea.current),Ve=requestAnimationFrame(tn)};tn()}else ka.current=!1,ee.source instanceof HTMLImageElement&&(H.render(ee.source,J.getState().settings,Y.current,Ot.current,Ea.current),Ka.current=Aa.current);return()=>{en=!1,ka.current=!1,Ve&&cancelAnimationFrame(Ve)}},[p,ee.source,ee.type,ee.gifData,$,A]);const[Yt,or]=k.useState({width:0,height:0}),[Ja,Fr]=k.useState({width:0,height:0});k.useEffect(()=>{const H=n.current;if(!H)return;const ze=new ResizeObserver(be=>{for(const Oe of be)or({width:Oe.contentRect.width,height:Oe.contentRect.height})});return ze.observe(H),()=>ze.disconnect()},[]);const ae=k.useRef({width:0,height:0});k.useEffect(()=>{const H=t.current;if(!H)return;const ze=new MutationObserver(()=>{H.width>0&&H.height>0&&Fr({width:H.width,height:H.height})});let be,Oe;const yt=()=>{if(H.width>0&&H.height>0){const Rt=ae.current;(Rt.width!==H.width||Rt.height!==H.height)&&(Rt.width=H.width,Rt.height=H.height,Fr({width:H.width,height:H.height}))}"requestIdleCallback"in window?be=requestIdleCallback(yt,{timeout:200}):Oe=setTimeout(yt,100)};return"requestIdleCallback"in window?be=requestIdleCallback(yt,{timeout:200}):Oe=setTimeout(yt,100),ze.observe(H,{attributes:!0}),()=>{ze.disconnect(),be!==void 0&&"cancelIdleCallback"in window&&cancelIdleCallback(be),Oe!==void 0&&clearTimeout(Oe)}},[]);const Ce=k.useMemo(()=>{if(Yt.width===0||Yt.height===0||Ja.width===0||Ja.height===0)return 1;const H=40,ze=Yt.width-H,be=Yt.height-H,Oe=ze/Ja.width,yt=be/Ja.height;return Math.min(Oe,yt,1)},[Yt,Ja]),tt=Ce*re,it=k.useCallback(H=>{if(H.preventDefault(),H.ctrlKey||H.metaKey){const ze=H.deltaY>0?-.1:.1;oe(Math.max(.1,Math.min(5,re+ze)))}else X(ze=>({x:ze.x-H.deltaX,y:ze.y-H.deltaY}))},[re,oe]),xt=k.useCallback(H=>{(H.button===1||H.button===0&&H.altKey)&&(H.preventDefault(),G(!0),ne.current={x:H.clientX,y:H.clientY})},[]),$a=k.useCallback(H=>{if(!B)return;const ze=H.clientX-ne.current.x,be=H.clientY-ne.current.y;ne.current={x:H.clientX,y:H.clientY},X(Oe=>({x:Oe.x+ze,y:Oe.y+be}))},[B]),pa=k.useCallback(()=>{G(!1)},[]),sr=k.useCallback(H=>{H.preventDefault(),H.stopPropagation(),Se.current++,H.dataTransfer.types.includes("Files")&&ye(!0)},[ye]),cr=k.useCallback(H=>{H.preventDefault(),H.stopPropagation(),Se.current--,Se.current===0&&ye(!1)},[ye]),Ra=k.useCallback(H=>{H.preventDefault(),H.stopPropagation()},[]);k.useEffect(()=>{const H=()=>{Se.current=0,ye(!1)},ze=Oe=>{Oe.relatedTarget===null&&Oe.clientX===0&&Oe.clientY===0&&(Se.current=0,ye(!1))},be=Oe=>{Oe.key==="Escape"&&(Se.current=0,ye(!1))};return window.addEventListener("dragend",H),window.addEventListener("dragleave",ze),window.addEventListener("keydown",be),document.addEventListener("drop",H),()=>{window.removeEventListener("dragend",H),window.removeEventListener("dragleave",ze),window.removeEventListener("keydown",be),document.removeEventListener("drop",H)}},[ye]);const bt=k.useCallback(async H=>{H.preventDefault(),H.stopPropagation(),Se.current=0,ye(!1);const ze=Array.from(H.dataTransfer.files);if(ze.length===0)return;const be=ze[0];if(be.size>Te.maxFileSize){me(`File exceeds ${Te.maxFileSize/1024/1024}MB limit`);return}I("PROCESSING"),ie(be);const Oe=Object.keys(Jf).includes(be.type),yt=Object.keys($f).includes(be.type),Rt=Object.keys(ed).includes(be.type)||be.name.endsWith(".glb")||be.name.endsWith(".gltf");try{if(Rt){const Ve=URL.createObjectURL(be);O("model3d"),te(Ve),ve({width:0,height:0,fileName:be.name,fileSize:be.size}),I("MODEL3D_LOADED")}else if(Oe){if(be.type==="image/gif"&&await Ug(be)){try{const Ht=await Dg(be),Ga=document.createElement("canvas");Ga.width=Ht.width,Ga.height=Ht.height,Ga.getContext("2d").putImageData(Ht.frames[0].imageData,0,0);const ct=new Image;ct.onload=()=>{O("gif"),te(ct),Q(Ht),ve({width:Ht.width,height:Ht.height,frameCount:Ht.frames.length,duration:Ht.totalDuration/1e3,fileName:be.name,fileSize:be.size}),I("GIF_LOADED")},ct.src=Ga.toDataURL()}catch(Ht){console.error("Failed to decode GIF:",Ht),me("Failed to decode animated GIF")}return}const Pt=new Image,en=URL.createObjectURL(be);Pt.onload=()=>{O("image"),te(Pt),Q(null),ve({width:Pt.naturalWidth,height:Pt.naturalHeight,fileName:be.name,fileSize:be.size}),I("IMAGE_LOADED")},Pt.onerror=()=>{URL.revokeObjectURL(en),me("Failed to load image")},Pt.src=en}else if(yt){const Ve=document.createElement("video"),Pt=URL.createObjectURL(be);Ve.onloadeddata=()=>{O("video"),te(Ve),ve({width:Ve.videoWidth,height:Ve.videoHeight,duration:Ve.duration,fileName:be.name,fileSize:be.size}),I("VIDEO_LOADED"),Ve.muted=!0,Ve.loop=!0,Ve.play().catch(()=>{})},Ve.ontimeupdate=()=>{De(Ve.currentTime)},Ve.onplay=()=>{_e(!0)},Ve.onpause=()=>{_e(!1)},Ve.onerror=()=>{URL.revokeObjectURL(Pt),me("Failed to load video")},Ve.src=Pt,Ve.playsInline=!0,Ve.muted=!0,Ve.autoplay=!0,Ve.load()}else me("Unsupported file type"),I("ERROR")}catch{me("Failed to process file")}},[O,I,te,ie,ve,me,Q,De,_e,ye]),_t=ee.type!=="none"&&ee.status!=="ERROR"&&ee.status!=="NO_INPUT",At=!_t,ur=_t&&w&&g==="none",Dn=_t&&(g==="webgpu"||g==="webgl2"),Di=ee.type==="model3d"&&A;return h.jsxs("div",{ref:n,className:"w-full h-full bg-term-bg relative overflow-hidden",style:{cursor:B?"grabbing":"default"},onWheel:it,onMouseDown:xt,onMouseMove:$a,onMouseUp:pa,onMouseLeave:pa,onDragEnter:sr,onDragLeave:cr,onDragOver:Ra,onDrop:bt,children:[h.jsx("div",{className:"absolute inset-0 flex items-center justify-center canvas-pixelated",style:{display:Dn?"flex":"none"},children:h.jsx("div",{className:"canvas-pixelated",style:{transform:`translate3d(${V.x}px, ${V.y}px, 0) scale(${tt})`,transformOrigin:"center center",willChange:"transform",backfaceVisibility:"hidden"},children:h.jsx("canvas",{ref:t,className:"max-w-none block canvas-pixelated"})})}),At&&!ce&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsxs("div",{className:"text-center p-8",children:[h.jsx("p",{className:"text-term-text-dim text-sm",children:"Awaiting input"}),h.jsx("p",{className:"text-term-text-dim opacity-50 text-xs mt-2",children:"Drop a file or select a source"})]})}),ur&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsxs("div",{className:"text-center p-8",children:[h.jsx("p",{className:"text-term-text text-sm",children:"WebGPU not available"}),h.jsx("p",{className:"text-term-text-dim opacity-50 text-xs mt-2",children:y||"Please use a browser with WebGPU support"})]})}),Di&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-term-bg/80 z-10",children:h.jsx("div",{className:"text-center p-8",children:h.jsx("p",{className:"text-term-text text-sm",children:"Loading 3D model..."})})}),h.jsxs("div",{className:"absolute bottom-4 right-4 flex items-center gap-2 text-term-text-dim text-xs bg-term-bg/80 backdrop-blur-sm px-2 py-1 rounded",children:[h.jsx("button",{onClick:()=>oe(Math.max(.1,re-.25)),className:"w-6 h-6 flex items-center justify-center hover:text-term-text transition-colors",children:"-"}),h.jsxs("span",{className:"text-term-text font-mono min-w-[3rem] text-center",children:[Math.round(tt*100),"%"]}),h.jsx("button",{onClick:()=>oe(Math.min(5,re+.25)),className:"w-6 h-6 flex items-center justify-center hover:text-term-text transition-colors",children:"+"}),h.jsx("div",{className:"w-px h-3 bg-term-border mx-1"}),h.jsx("button",{onClick:()=>{X({x:0,y:0}),oe(1)},className:"hover:text-term-text transition-colors px-1",children:"Reset"}),h.jsx("button",{onClick:()=>{X({x:0,y:0}),oe(1/Ce)},className:"hover:text-term-text transition-colors px-1",children:"100%"})]}),Dn&&h.jsx("div",{className:"absolute bottom-4 left-4 text-term-text-dim text-xs bg-term-bg/80 backdrop-blur-sm px-2 py-1 rounded",children:"Scroll to pan · Ctrl+Scroll to zoom · Alt+Drag to pan"}),g!=="none"&&!ge&&h.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-term-text-bright flex-shrink-0"}),h.jsx("span",{className:"text-term-text capitalize",children:$?$.replace(/([A-Z])/g," $1").trim():"ASCII"}),h.jsxs("span",{className:"text-term-text-dim ml-2",children:["[",g.toUpperCase(),"]"]})]}),g==="webgl2"&&y4()&&D&&h.jsxs("div",{className:"absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs bg-term-bg-alt border border-term-border px-3 py-2 rounded shadow-lg max-w-md",children:[h.jsx("span",{className:"text-term-text-dim",children:"Tip: Enable WebGPU in Safari for faster rendering → Develop → Experimental Features → WebGPU"}),h.jsx("button",{onClick:()=>M(!1),className:"text-term-text-dim hover:text-term-text ml-2 flex-shrink-0",title:"Dismiss",children:"✕"})]})]})},C4=[{id:"classic-terminal",name:"Classic Terminal",description:"Green monochrome with subtle glow",isBuiltIn:!0,createdAt:0,settings:{...Ge,color:{...Ge.color,custom:"#00ff00",useOriginal:!1,intensity:1},postProcessing:{...Ge.postProcessing,bloom:{enabled:!0,threshold:.6,softThreshold:.5,intensity:.8,radius:8},grain:{enabled:!0,intensity:20,size:2,speed:50},chromatic:{enabled:!1,offset:2},scanlines:{enabled:!0,opacity:.05,spacing:4},phosphor:{enabled:!0,color:"green",customColor:"#00ff00"}}}},{id:"matrix",name:"Matrix",description:"Bright green, high contrast, animated grain",isBuiltIn:!0,createdAt:0,settings:{...Ge,character:{...Ge.character,scale:2,spacing:1,set:"standard",customChars:" .:+*#@"},image:{...Ge.image,brightness:10,contrast:30},color:{...Ge.color,custom:"#00ff00",useOriginal:!1,intensity:1.2},postProcessing:{...Ge.postProcessing,bloom:{enabled:!0,threshold:.5,softThreshold:.5,intensity:1,radius:10},grain:{enabled:!0,intensity:40,size:1,speed:100},chromatic:{enabled:!1,offset:2},scanlines:{enabled:!1,opacity:.1,spacing:4},phosphor:{enabled:!0,color:"green",customColor:"#00ff00"}}}},{id:"retro-crt",name:"Retro CRT",description:"Amber color, scanlines, chromatic aberration",isBuiltIn:!0,createdAt:0,settings:{...Ge,color:{...Ge.color,custom:"#ffbf00",useOriginal:!1,intensity:1},postProcessing:{...Ge.postProcessing,bloom:{enabled:!0,threshold:.7,softThreshold:.5,intensity:.6,radius:6},grain:{enabled:!0,intensity:30,size:2,speed:75},chromatic:{enabled:!0,offset:3},scanlines:{enabled:!0,opacity:.15,spacing:3},crtCurve:{enabled:!0,amount:.15},phosphor:{enabled:!0,color:"amber",customColor:"#ffbf00"}}}},{id:"high-detail",name:"High Detail",description:"Small characters, extended character set",isBuiltIn:!0,createdAt:0,settings:{...Ge,character:{...Ge.character,scale:1,spacing:.8,set:"detailed",customChars:" .:+*#@"},color:{...Ge.color,custom:"#00ff00",useOriginal:!0,intensity:1.1},postProcessing:{...Ge.postProcessing,bloom:{enabled:!1,threshold:.6,softThreshold:.5,intensity:.6,radius:7},grain:{enabled:!1,intensity:35,size:2,speed:50},chromatic:{enabled:!1,offset:2},scanlines:{enabled:!1,opacity:.1,spacing:4}}}},{id:"minimal",name:"Minimal",description:"Large characters, simple charset, bold look",isBuiltIn:!0,createdAt:0,settings:{...Ge,character:{...Ge.character,scale:6,spacing:1.2,set:"minimal",customChars:" .:+*#@"},image:{...Ge.image,brightness:0,contrast:20},color:{...Ge.color,custom:"#00ff00",useOriginal:!1,intensity:1},postProcessing:{...Ge.postProcessing,bloom:{enabled:!0,threshold:.5,softThreshold:.5,intensity:.9,radius:12},grain:{enabled:!1,intensity:35,size:2,speed:50},chromatic:{enabled:!1,offset:2},scanlines:{enabled:!1,opacity:.1,spacing:4},vignette:{enabled:!0,intensity:.3,radius:.6}}}},{id:"cyberpunk",name:"Cyberpunk",description:"Cyan and magenta, heavy chromatic aberration",isBuiltIn:!0,createdAt:0,settings:{...Ge,character:{...Ge.character,scale:2,spacing:1,set:"standard",customChars:" .:+*#@"},color:{...Ge.color,custom:"#00ffff",useOriginal:!1,intensity:1.3},postProcessing:{...Ge.postProcessing,bloom:{enabled:!0,threshold:.4,softThreshold:.5,intensity:1.2,radius:15},grain:{enabled:!0,intensity:25,size:1,speed:80},chromatic:{enabled:!0,offset:6},scanlines:{enabled:!0,opacity:.08,spacing:2},vignette:{enabled:!0,intensity:.4,radius:.5}}}}];XS();const T4=()=>{"requestIdleCallback"in window&&requestIdleCallback(()=>{za(()=>import("./index-DKljlg_S.js"),[]),za(()=>import("./index-CPD5w-YN.js"),__vite__mapDeps([0,1])),za(()=>import("./index-C-104lQ3.js"),__vite__mapDeps([2,1]))},{timeout:1e4})};function w4(){const t=J(E=>E.setBuiltInPresets),n=J(E=>E.input),r=J(E=>E.ui.theme),i=J(E=>E.cycleTheme),s=J(E=>E.setInputType),c=J(E=>E.setInputStatus),f=J(E=>E.setInputSource),m=J(E=>E.setInputMetadata),p=J(E=>E.setInputError);k.useEffect(()=>{t(C4)},[t]),k.useEffect(()=>{T4()},[]);const v=k.useCallback(async()=>{try{c("PROCESSING");const E=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}}),T=E.getVideoTracks()[0].getSettings();s("webcam"),f(E),m({width:T.width||1280,height:T.height||720,frameRate:T.frameRate||30}),c("WEBCAM_ACTIVE")}catch(E){E instanceof Error?E.name==="NotAllowedError"?p("Camera access denied"):E.name==="NotFoundError"?p("No camera found"):p("Camera error: "+E.message):p("Camera access failed")}},[s,c,f,m,p]),g=k.useCallback(()=>{n.source instanceof MediaStream&&n.source.getTracks().forEach(E=>E.stop()),s("none"),f(null),c("NO_INPUT")},[n.source,s,f,c]),b=h.jsxs(h.Fragment,{children:[h.jsx(K0,{}),h.jsx(Uf,{})]}),y=h.jsxs(h.Fragment,{children:[h.jsx(Mf,{}),h.jsx(J0,{}),h.jsx(Lf,{})]}),C=h.jsxs("div",{className:"absolute top-4 right-4 flex gap-2 z-20",children:[h.jsx("button",{onClick:i,className:"w-7 h-7 flex items-center justify-center border border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim transition-colors",title:`Theme: ${r}`,children:h.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),h.jsx("button",{onClick:n.type==="webcam"?g:v,className:`w-7 h-7 flex items-center justify-center border transition-colors group ${n.type==="webcam"?"border-term-text-dim text-term-text bg-term-panel":"border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim"}`,title:n.type==="webcam"?"Stop Webcam":"Start Webcam",children:n.type==="webcam"?h.jsxs(h.Fragment,{children:[h.jsxs("span",{className:"group-hover:hidden relative flex items-center justify-center",children:[h.jsx("span",{className:"absolute w-3 h-3 rounded-full bg-green-500/30 animate-pulse"}),h.jsx("span",{className:"relative w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"})]}),h.jsxs("svg",{className:"w-3.5 h-3.5 hidden group-hover:block text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}),h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3 3l18 18"})]})]}):h.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"})})}),h.jsx("button",{onClick:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},className:"w-7 h-7 flex items-center justify-center border border-term-border text-term-text-dim hover:text-term-text hover:border-term-text-dim transition-colors",title:"Fullscreen",children:h.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})})})]}),w=h.jsx(ZS,{leftSidebar:h.jsxs(h.Fragment,{children:[h.jsx(Q0,{}),b]}),rightSidebar:h.jsxs(h.Fragment,{children:[y,h.jsx(Gv,{})]}),preview:h.jsx(S4,{}),floatingActions:C,inputPanel:h.jsx(Q0,{}),effectsPanel:h.jsx(K0,{}),presetsPanel:h.jsx(Uf,{}),exportPanel:h.jsx(Gv,{}),settingsPanel:h.jsx(Mf,{}),advancedPanel:h.jsx(J0,{}),postProcessingPanel:h.jsx(Lf,{})});return h.jsx(y2,{basename:"/dithering",children:h.jsx(wS,{children:h.jsxs(Q1,{children:[h.jsx(gs,{path:"/",element:w}),h.jsx(gs,{path:"/about",element:h.jsx(ES,{})}),h.jsx(gs,{path:"/changelog",element:h.jsx(AS,{})})]})})})}Qy.createRoot(document.getElementById("root")).render(h.jsx(k.StrictMode,{children:h.jsx(w4,{})}));export{OS as A,US as B,RS as C,LS as D,FS as E,zS as H,VS as M,HS as N,kS as P,jS as T,qS as V,_S as W,E4 as a,Y2 as b,A4 as c,k4 as d,DS as e,MS as f,Hf as g,O4 as h,NS as i,BS as j,IS as k,GS as l,PS as m,YS as n,ta as o,X2 as s};
