// ==UserScript==
// @name            Readmore Userscript
// @version         2.0.6
// @description     Fügt der deutschen eSport-Webseite zusätzliche Funktionen hinzu
// @author          thextor, vntw
// @credits         IllDependence (Extrabuttons)
// @namespace       readmore
// @include         *.readmore.de/*
// ==/UserScript==

/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
			
var RMUS = {

	info: function (message, module) {
		if (!window.console) {
			console = {info: function() {}}
		};

		if (module) {
			module = '[' + module + ']';
		} else {
			module = '';
		}

		console.info('[RMUS]' + module + ' ' + message);
	},

	browser: {
		supportsLocalStorage : function () {
			var mod = 'RMUS';
			try {
				localStorage.setItem(mod, mod);
				localStorage.removeItem(mod);
				return true;
			} catch (e) {
				return false;
			}
		}
	},

	options: {

		version : '2.0.6',
		options : {},

		// Fügt den Link zum öffnen der Optionen ein
		insertOptionsLink : function () {
			$('div.floatl.vcenter.elf.dgray:last').after('<div class="floatl vcenter" style="padding-top:4px;"><img src="http://images.readmore.de/img/header/line.jpg" alt="" style="height:25px; width:2px;"></div><div class="floatl vcenter elf dgray" style="margin:11px 10px;"><a id="openUserscriptOptions" href="#" class="black">Userscript</a></div>');
			return false;
		},

		// Speichert die Optionen im LocalStorage
		saveOptions : function () {
			var userscriptOptions = {},
				response;

			// Alle Checkboxen
			$('input[type=checkbox].userscriptOptions').each(function () {
				var attr = $(this).attr('checked');
				if (attr == true || attr == 'checked') {
					userscriptOptions[$(this).attr('name')] = 'checked';
				}
			});

			// Alle Textfelder
			$('input[type=text].userscriptOptions').each(function () {
				userscriptOptions[$(this).attr('name')] = $(this).val();
			});

			// Alle Selectfelder
			$('select.userscriptOptions').each(function () {
				userscriptOptions[$(this).attr('name')] = $(this).val();
			});

			// Json-Speichern
			if (RMUS.browser.supportsLocalStorage()) {
				localStorage.setItem('userscriptOptions', JSON.stringify(userscriptOptions));
				response = 'Die Optionen wurden erfolgreich gespeichert!';
			} else {
				response = 'Die Optionen konnten nicht gespeichert werden, da dein Browser keinen LocalStorage unterstützt.';
			}

			// Rückmeldung
			alert(response);
		},

		// Optionen laden
		loadOptions : function () {
			if (RMUS.browser.supportsLocalStorage()) {
				var type = '',
					userscriptOptions = JSON.parse(localStorage.getItem('userscriptOptions'));

				if (userscriptOptions != null) {
					$.each(userscriptOptions, function (index, value) {
						type = $('[name=' + index + ']').attr('type');
						if (type == 'checkbox') {
							// Checkboxen setzen
							if (value == 'checked') {
								$('[name=' + index + ']').attr('checked', true);
								return true;
							}
						}

						if (type == 'text') {
							// Textfelder füllen
							$('[name=' + index + ']').val(value);
							return true;
						}

						// Selectboxen auswählen
						if (index.match('rightColumn_forum_hideForum_') != null) {
							$('[name=' + index + ']').val(value);
							return true;
						}
					});
				}
			}

			return false;
		},

		// Optionen auslesen
		readOptions : function () {
			if (RMUS.browser.supportsLocalStorage()) {
				// Json auslesen und in Objekt umwandeln
				RMUS.options.options = JSON.parse(localStorage.getItem('userscriptOptions'));

				if (RMUS.options.options == null) {
					RMUS.options.options = [];
				}
			}

			return false;
		}
	},

	miscellaneous: {
		// Blendet einen Button zum Runterscrollen ein
		buttonScrollDown : function () {
			$('.floatr.m2:first').append('<img onclick="window.scrollTo(0, $(\'td.ten.vtop:last\').offset().top-50);" style="top: 0; height: 13px; padding-right: 2px; cursor: pointer;" alt="scroll down" src="http://thextor.de/readmore-userscript/img/arrow_down_alt1_16x16.png" />');
			return false;
		},

		// Blendet einen Button zum Hochscrollen ein
		buttonScrollUp : function () {
			$('.floatl.m2.elf:last').css('width', '100%');
			$('.floatl.m2.elf:last').append('<img onclick="window.scrollTo(0,0)" style="float: right; height: 13px; padding-right: 10px; cursor: pointer;" alt="scroll up" src="http://thextor.de/readmore-userscript/img/arrow_up_alt1_16x16.png" />');
			return false;
		},

		// Sortiert den Titel um
		reSortTitle : function () {
			var title = $('title').text(),
				pieces = title.split('\u00BB');	// Bei den Doppelpfeilen trennen

			title = pieces[2] + ' ' + '\u00BB' + pieces[1] + '\u00BB' + ' ' + pieces[0];
			$('title').text(title);
			return false;
		},

		// Prüft, ob eine neue Version des Scriptes verfügbar ist
		checkVersion : function () {
			$.ajax({
				type: 'POST',
				async: true,
				cache: true,
				url: 'index.php?cont=forum/thread&threadid=111239&pagenum=1',
				contentType: 'text/html; charset=iso-8859-1;',
				dataType: 'html',
				success: function (data) {
					var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
					if (posts != null) {
						var version = $.trim(posts[0].match(/<span class="i">-(.+?)-<\/span>/)[1]);
						if (version != RMUS.options.version) {
							$('div.floatl.vcenter.elf.dgray:last').append(' <span style="color:#F00"><b>(Update verf&uuml;gbar!)</b></span>');
						}
					}
				}
			});

			return false;
		},

		// Zum letzten Post springen
		lastPageJumpToLastPost : function () {
			var lastpage = document.location.href.match(/pagenum=lastpage/);
			if (lastpage != null) {
				if (lastpage[0] == 'pagenum=lastpage') {
					window.scrollTo(0, $('td.ten.vtop:last').offset().top - 50);
				}
			}
			
			return false;
		},

		createFixedToolbar: function () {
			RMUS.info('Creating fixed toolbar', 'Misc');
			$('body > div.user_band').css({
				'position': 'fixed',
				'width': '100%'
			});
			$('div#wrapper').css('margin-top', '34px');
		},

		// Erweiterung des RM BBCodes um weitere Buttons/Quicklinks
		extrabuttons: {
			// "Nacht durchmachen" aktiv? (0Uhr - 7Uhr)
			isNDM: function () {
				return (new Date()).getHours() < 7;
			},
			getToolbar: function () {
				var form = RMUS.miscellaneous.extrabuttons.getForm(),
					toolbar,
					container;

				if (content.news || content.matches || content.profile) {
					container = form.parent('div.center');

					if ($('div.headline_bg', container).length === 0) {
						toolbar = $('<div class="headline_bg" />');
						toolbar.css('padding', '3px 0px');
						container.prepend(toolbar);
					}

					return $('div.headline_bg', container);
				} else if (content.forum_thread || content.forum_edit || content.forum_newtopic) {
					return $('div.headline_bg', RMUS.miscellaneous.extrabuttons.getForm());
				} else if (content.msg) {
					container = RMUS.miscellaneous.extrabuttons.getCommentBox().parent();

					if ($('div.headline_bg', container).length === 0) {
						toolbar = $('<div class="headline_bg" />');
						toolbar.css('padding', '3px 0px');
						container.prepend(toolbar);
					}

					return $('div.headline_bg', container);
				}

				return null;
			},
			getForm: function () {
				if (content.news || content.matches || content.profile) {
					return $('form[name=form_comment]');
				} else if (content.forum_thread || content.forum_newtopic) {
					return $('form[name=submitpost]');
				} else if (content.forum_edit) {
					return $('form[name=submiteditthread]');
				} else if (content.msg) {
					return $('td.text_h1_j form');
				}

				return null;
			},
			getToolbarExtended: function () {
				return $('div#rmus-toolbar-extended', RMUS.miscellaneous.extrabuttons.getToolbar());
			},
			getCommentBox: function () {
				if (content.profile) {
					return $('textarea[name=comment]', RMUS.miscellaneous.extrabuttons.getForm());
				} else if (content.msg) {
					return $('textarea[name=msg]', RMUS.miscellaneous.extrabuttons.getForm());
				}

				return $('textarea#c_comment', RMUS.miscellaneous.extrabuttons.getForm());
			},
			insertTag: function (tname, attr, endTag) {
				if ('url' === tname) {
					attr = prompt('Bitte gib den gewünschten Link an: ', 'http://');
				}

				var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
					currText = commentBox.value,
					pos1 = commentBox.selectionStart + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0),
					pos2 = commentBox.selectionEnd + tname.length + 2 + (attr != 0 ? (attr.length + 1) : 0) + (endTag ? (tname.length + 3) : 0),
					range = (commentBox.selectionStart != commentBox.selectionEnd);

				commentBox.value = currText.substring(0, commentBox.selectionStart) + '[' + tname + (attr != 0 ? '=' + attr + '' : '') + ']' + (endTag ? currText.substring(commentBox.selectionStart, commentBox.selectionEnd) + '[/' + tname + ']' : '') + currText.substring(commentBox.selectionEnd, currText.length);
				commentBox.focus();

				if (range) {
					commentBox.setSelectionRange(pos2, pos2);
				} else {
					commentBox.setSelectionRange(pos1, pos1);
				}
			},
			insertText: function (text) {
				var commentBox = RMUS.miscellaneous.extrabuttons.getCommentBox().get(0),
					currText = commentBox.value,
					pos = commentBox.selectionStart + text.length;

				commentBox.value = currText.substring(0, commentBox.selectionStart) + text + currText.substring(commentBox.selectionEnd, currText.length);
				commentBox.focus();
				commentBox.setSelectionRange(pos, pos);
			},
			makeTag: function (img, text, tag, attr, endTag) {
				return '<a href="" class="rmus-control-btn" data-btype="tag" data-params="' + tag + ',' + attr + ',' + endTag + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
			},
			makeText: function (img, text, insText) {
				return '<a href="" class="rmus-control-btn" data-btype="txt" data-params="' + text + '"><img style="vertical-align: text-top;" src="' + img + '" alt="' + text + '" title="' + text + '" /></a>';
			},
			toggleToolbar: function () {
				var toolbar = RMUS.miscellaneous.extrabuttons.getToolbarExtended(),
					triggerBtn = $('span#rmus-extend-toolbar'),
					txt = (triggerBtn.text() == '+') ? '-' : '+';

				toolbar.toggle();
				triggerBtn.text(txt);
			},
			colorSet:	[["#ff0000", "http://i.imgur.com/yK4UQ.png"],
						["#ff8000", "http://i.imgur.com/xdj9r.png"],
						["#ffff00", "http://i.imgur.com/cQrl0.png"],
						["#80ff00", "http://i.imgur.com/KTpVX.png"],
						["#00ff00", "http://i.imgur.com/NhpYN.png"],
						["#00ff80", "http://i.imgur.com/D4JCR.png"],
						["#00ffff", "http://i.imgur.com/jA74E.png"],
						["#0080ff", "http://i.imgur.com/cQpDh.png"],
						["#0000ff", "http://i.imgur.com/7DXlk.png"],
						["#8000ff", "http://i.imgur.com/t79Yf.png"],
						["#ff00ff", "http://i.imgur.com/IwKL1.png"],
						["#ff0080", "http://i.imgur.com/cKrre.png"],
						["#000000", "http://i.imgur.com/eeX1k.png"],
						["#333333", "http://i.imgur.com/B4ToQ.png"],
						["#666666", "http://i.imgur.com/OuClO.png"],
						["#999999", "http://i.imgur.com/gc8Za.png"],
						["#cccccc", "http://i.imgur.com/TwNb6.png"],
						["#ffffff", "http://i.imgur.com/uq9mG.png"]],

			toolbarButtonTags:	[["http://images.readmore.de/img/icons/ubb/b.png", "fett", "b", 0, true],
								["http://images.readmore.de/img/icons/ubb/i.png", "kursiv", "i", 0, true],
								["http://images.readmore.de/img/icons/ubb/u.png", "unterstrichen", "u", 0, true],
								["http://images.readmore.de/img/icons/ubb/s.png", "durchgestrichen", "s", 0, true],
								["http://i.imgur.com/yPNsn.png", "zentriert", "center", 0, true],
								["http://i.imgur.com/74lEI.png", "hr", "hr", 0, false],
								["http://images.readmore.de/img/icons/ubb/url2.png", "url", "url", 0, true],
								["http://images.readmore.de/img/icons/ubb/quote.png", "quote", "quote", 0, true],
								["http://images.readmore.de/img/icons/ubb/spoil.png", "spoiler", "spoiler", 0, true],
								["http://images.readmore.de/img/icons/ubb/youtube.png", "youtube", "youtube", 0, true],
								["http://i.imgur.com/ZQ5jN.png", "img", "img", 0, true]],

			toolbarButtonTexts: [["http://i.imgur.com/I16Hg.png", "\x28\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35\x20\u253b\u2501\u253b", "tableflip"],
								["http://i.imgur.com/M92Ll.png", "[youtube]3WzB63CUOtc[/youtube]", "aha bye"],
								["http://i.imgur.com/oOZFn.png", "[image]http://imgur.com/ERRRn[/image]", "mckay outfit"]],

			getToolbarHtml: function () {
				var colorButtons = '',
					btnTags = '',
					btnTexts = '',
					ndm = '';

				$.each(RMUS.miscellaneous.extrabuttons.colorSet, function (index, color) {
					colorButtons += (index > 0 ? '&thinsp;' : '') + RMUS.miscellaneous.extrabuttons.makeTag(color[1], color[0], 'color', color[0], true);
				});

				$.each(RMUS.miscellaneous.extrabuttons.toolbarButtonTags, function (index, btnTag) {
					btnTags += RMUS.miscellaneous.extrabuttons.makeTag(btnTag[0], btnTag[1], btnTag[2], btnTag[3]) + '&nbsp;';
				});

				$.each(RMUS.miscellaneous.extrabuttons.toolbarButtonTexts, function (index, btnText) {
					btnTexts += RMUS.miscellaneous.extrabuttons.makeText(btnText[0], btnText[1], btnText[2]) + '&nbsp;';
				});

				if (RMUS.miscellaneous.extrabuttons.isNDM()) {
					ndm = '<a href="?cont=forum/thread&threadid=99580&pagenum=lastpage" style="color: #ffffff;">ndm!</a> ';
				}

				return '<div id="rmus-container" style="text-align: left; color: #fff; font-weight: bold; padding-left: 5px; font-size: 11px;">Text' +
				'<div id="rmus-toolbar" style="margin-right: 12px; float: right;">' +
				'<div id="rmus-toolbar-main" style="margin-bottom: 1px;text-align:right;">' +

				btnTags + '&emsp;' +
				colorButtons +

				'<span id="rmus-extend-toolbar" style="font-weight:normal; cursor: pointer; width: 15px; display: inline-block;" title="Show Extended Toolbar">+</span>' +
				'</div>' +
				'<div id="rmus-toolbar-extended" style="display:none;">' +
				'<div style="float: left;">' +

				btnTexts +

				'</div>' +
				'<div style="float: right; margin: 0px 0px 2px 0px;">' +
				'&emsp;<span style="font-weight: normal"><span style="color: #ffffff;">-&gt; Quicklinks:</span> ' +

				ndm +

				'<a href="?cont=forum/thread&threadid=73247&pagenum=lastpage" style="color: #ffffff;">kfka</a> ' +
				'<a href="?cont=forum/thread&threadid=108026&pagenum=lastpage" style="color: #ffffff;">csb</a> ' +
				'<a href="?cont=forum/thread&threadid=109737&pagenum=lastpage" style="color: #ffffff;">ssb</a> ' +
				'<a href="?cont=search&selected=forum" style="color: #ffffff;">sufu</a></span>' +
				'</div>' +
				'<div style="clear: both;"></div>' +
				'</div>' +
				'</div>' +
				'<div style="clear: right;"></div></div>';
			},
			init: function () {
				RMUS.info('Initialized...', 'Extrabuttons');

				try {
					RMUS.miscellaneous.extrabuttons.getToolbar().css('height', 'auto').html(RMUS.miscellaneous.extrabuttons.getToolbarHtml());
					RMUS.info('Successfully attached!', 'Extrabuttons');
				} catch (e) {
					RMUS.info('No element found to attach the toolbar', 'Extrabuttons');
				}

				$('a.rmus-control-btn').click(function (e) {
					e.preventDefault();

					var btype = $(this).attr('data-btype'),
						params = $(this).attr('data-params');

					switch(btype) {
						case 'tag':
							params = params.split(',');
							RMUS.miscellaneous.extrabuttons.insertTag(params[0], params[1], params[2]);
							break;
						case 'txt':
							RMUS.miscellaneous.extrabuttons.insertText(params);
							break;
					}
				});
				$('span#rmus-extend-toolbar').click(RMUS.miscellaneous.extrabuttons.toggleToolbar);
			}
		},
		
		reloadMainpageData : {
			mainpageData : '',

			readPage : function() {
				$.ajax({
					type: 'POST',
					async: true,
					cache: false,
					url: 'http://www.readmore.de/',
					contentType: 'text/html; charset=iso-8859-1;', 
					dataType: 'html',
					success: function (data) {
						var pageData = data;
						
						if(pageData != null){
							RMUS.miscellaneous.reloadMainpageData.mainpageData = pageData.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g," ");
						}
					}
				});

				// Prüft auf Fehler beim Laden der Seite
				var error = RMUS.miscellaneous.reloadMainpageData.mainpageData.search('<div class="error">');
				if (error != -1) RMUS.miscellaneous.reloadMainpageData.readPage();
				
				return false;
			}
		},
		
		stopAvatarAnimation : {
			isGifImage : function(i){
				return /^(?!data:).*?\/user.*?\.gif/i.test(i.src);
			},
			
			freeze_gif : function (i) {
				var c = document.createElement('canvas');
				var w = c.width = i.width;
				var h = c.height = i.height;
				c.getContext('2d').drawImage(i, 0, 0, w, h);
				try {
					i.src = c.toDataURL("image/gif");
				} catch(e) {
					for (var j = 0, a; a = i.attributes[j]; j++)
						c.setAttribute(a.name, a.value);
					i.parentNode.replaceChild(c, i);
				}

				return false;
			},
			
			stopAnimation : function (){
				[].slice.apply(document.images).filter(RMUS.miscellaneous.stopAvatarAnimation.isGifImage).map(RMUS.miscellaneous.stopAvatarAnimation.freeze_gif);
				return false;
			}
		}
	},
	
	leftColumn: {

		www : {
			// Wer Wohin Warum ausblenden
			hideWww : function () {
				$('#leftc>div.block:eq(0), div.line2:eq(0), div.line2:eq(1)').css('display', 'none');
				return false;
			}
		},

		streams : {
			// Array in dem die Streams-Images gepusht werden
			streamsToHide : [],

			// Alle Streams ausblenden
			hideStreams : function () {
				$('#leftc>div.block:eq(1), #leftc>div.block:eq(2), .line2:eq(2)').css('display', 'none');			
				return false;
			},

			hideSelectedStreams : function () {			
				// Selector zusammensetzen
				var selector = '';
				$(RMUS.leftColumn.streams.streamsToHide).each(function (index, value) {
					selector += '#leftc>div.block:eq(1)>div>div>img[src="http://images.readmore.de/img/icons/' + value + '"], #leftc>div.block:eq(2)>div>div>img[src="http://images.readmore.de/img/icons/' + value + '"], ';
				});

				// Streams ausblenden, letztes ', ' entfernen
				$(selector.substring(0, selector.length-2)).parent().remove();
				return false;
			},
			
			// Forennavigation neuladen
			reloadStreams : function(){
				var caster = '';
				var user = '';
				
				caster = RMUS.miscellaneous.reloadMainpageData.mainpageData.match(/<a class="headline_bg headline_link block" href="index\.php\?cont=userstream_overview">CASTER LIVE<\/a>.*?<a class="headline_bg headline_link block" href="index\.php\?cont=userstream_overview">USERSTREAMS LIVE<\/a>/)[0].replace('<a class="headline_bg headline_link block" href="index.php?cont=userstream_overview">CASTER LIVE</a> <div id="userstream" class=" p2 lh1 elf">', '').replace('</div></div> <div class="block"> <a class="headline_bg headline_link block" href="index.php?cont=userstream_overview">USERSTREAMS LIVE</a>', '');
				user = RMUS.miscellaneous.reloadMainpageData.mainpageData.match(/<a class="headline_bg headline_link block" href="index\.php\?cont=userstream_overview">USERSTREAMS LIVE<\/a>.*?<\!-- LINE -->/)[0].replace('<a class="headline_bg headline_link block" href="index.php?cont=userstream_overview">USERSTREAMS LIVE</a> <div id="userstream" class=" p2 lh1 elf">', '').replace('</div> <!-- LINE -->', '');
				
				$('div.p2.lh1.elf:first').html(caster);
				$('div.p2.lh1.elf:last').html(user);
				
				RMUS.leftColumn.streams.hideSelectedStreams();				
				return false;
			}
		}
	},

	middleColumn: {

	/************************
	*	FORUM		*
	*************************/
		forum : {

			threadlink : '',
			page : '',	

			// Link zum Thread ohne Seitenzahl ermitteln
			readThreadlink : function () {
				RMUS.middleColumn.forum.threadlink = $(location).attr('href').replace(/\&pagenum=.+$/, '');
				return false;
			},

			// Aktuelle Seite ermitteln
			readPage : function () {
				RMUS.middleColumn.forum.page = parseInt($('div.floatl.m2.elf').html().match(/<b>(.+?)<\/b>/)[1], 10);
				return false;
			},

	/************************
	*	 RELOAD POSTS	*
	*************************/
			reloadPosts : {
				postcount : 0,
				waitUntilReload : 5,
				finishedPages : 0,
				oldLimit : 0,
				markPostColor : '#EEEEEE',                  // Hellgrau
				markPostColorRgb : 'rgb(238, 238, 238)',    // Hellgrau
				oldTitle : '',
				unseenPosts : [],

				// Anzhal der aktuellen Posts ermitteln
				readPostcount : function () {
					RMUS.middleColumn.forum.reloadPosts.postcount = $('[class^=post_]').length;
					return false;
				},

				// Neue Posts nachladen und einfügen
				readNewPosts : function () {
					// Nur wenn wir uns auf der letzten seite befinden
					var lastpage = $.trim($('div.floatl.m2.elf').html());
					
					if (lastpage.substr(lastpage.length-4) == '</b>'){
						// Seiten endlos erweitern
						if (RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage == 'checked') {
							RMUS.middleColumn.forum.reloadPosts.endlessPage();
						} 

						// Der eigentliche Reload
						$.ajax({
							type: 'POST',
							async: true,
							cache: false,
							url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + RMUS.middleColumn.forum.page,
							contentType: 'text/html; charset=iso-8859-1;', 
							dataType: 'html',
							success: function (data) {
								var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
								if (posts != null) {
									var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g),
										oldPosts = (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages),
										postNumber = posts.length + oldPosts,
										userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1],
										i = RMUS.middleColumn.forum.reloadPosts.postcount;

									for (i; i < postNumber; i++) {
										$('table.elf.forum.p2.bogray2').append(posts[i-oldPosts]);
										$('table.elf.forum.p2.bogray2').append(footer[i-oldPosts]);
										
										RMUS.middleColumn.forum.reloadPosts.unseenPosts.push(parseInt($('[class^=post_]:last').offset().top, 10));  // Zum markieren der neuen Posts
										RMUS.middleColumn.forum.reloadPosts.postcount++;
										
										var postuserid = posts[i-oldPosts].match(/href="index.php\?cont=profile&amp;id=(.+?)"/)[1];
										if (postuserid == userid) RMUS.middleColumn.forum.reloadPosts.unseenPosts = [];
									}

									RMUS.middleColumn.forum.reloadPosts.oldLimit = window.pageYOffset + (window.innerHeight * 0.55);
								}
							}
						});

						// Rausfinden ob eine neue Seite existiert
						if (RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage != 'checked') RMUS.middleColumn.forum.reloadPosts.checkForNewPage();
					}
					
					// Edit vorbereiten
					if (RMUS.options.options.middleColumn_forum_editPost == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();				
					return false;
				},

				// Neue Posts markieren
				markNewPosts : function () {
					var numberOfNewPosts = RMUS.middleColumn.forum.reloadPosts.unseenPosts.length,
						i = 1;

					for(i; i <= numberOfNewPosts; i++) {
						// Überprüfen ob der Posts bereits markiert ist, wenn ja die Schleife verlassen
						if ($.trim(($('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color'))) == RMUS.middleColumn.forum.reloadPosts.markPostColorRgb) {
							break;
						}
						$('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - i) + ')').css('background-color', RMUS.middleColumn.forum.reloadPosts.markPostColor);
					}

					// Demarkieren starten
					RMUS.middleColumn.forum.reloadPosts.unmarkNewPosts();
					return false;
				},

				// Entfernt die Markierung von (ehemals) neuen Posts
				unmarkNewPosts : function() {
					var i = 0,
						limit = window.pageYOffset + (window.innerHeight * 0.55),
						deleteArray = [];

					$(RMUS.middleColumn.forum.reloadPosts.unseenPosts).each(function (index, value) {
						// Nur demarkieren, wenn wir das Limit überschritten und uns bewegt / gescrollt haben
						if(value < limit && limit != RMUS.middleColumn.forum.reloadPosts.oldLimit) {
							$('[class^=post_]:eq(' + (RMUS.middleColumn.forum.reloadPosts.postcount - (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) + i) + ')').css('background-color', '#FFF');
							i++;
							deleteArray.push(index);						
						}
					});

					$(deleteArray).each(function (index, value) {
						RMUS.middleColumn.forum.reloadPosts.unseenPosts.splice(value, 1);   // Unmarkierte / Gelesene Posts aus dem Array entfernen
					});

					return false;
				},

				// Anzahl der ungelesenen Posts im Titel / Tab anzeigen
				showNewPostsTitle : function () {
					if (RMUS.middleColumn.forum.reloadPosts.oldTitle == '') {
						RMUS.middleColumn.forum.reloadPosts.oldTitle = $('title').text();
					}

					var title = RMUS.middleColumn.forum.reloadPosts.oldTitle;					
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length) title = '(' + RMUS.middleColumn.forum.reloadPosts.unseenPosts.length + ') ' + title;
					
					$('title').text(title);	
					return false;
				},

				// Ändert das Favicon wenn ungelesene Posts vorhanden sind
				changeFavicon : function () {
					var currentIcon = $('head>link[rel="shortcut icon"]').attr('href');
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0 && currentIcon == '/favicon.ico') {
						$('head>link[rel="shortcut icon"]').remove();
						$('head').append('<link rel="shortcut icon" type="image/png" href="http://thextor.de/readmore-userscript/img/favicon.png">');
					} 
					if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length == 0 && currentIcon == 'http://thextor.de/readmore-userscript/img/favicon.png') {
						$('head>link[rel="shortcut icon"]').remove();
						$('head').append('<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">');
					} 
					return false;
				},

				// Setzt die Zeit zwischen 2 Reloads
				setWaitUntilReload : function () {
					RMUS.middleColumn.forum.reloadPosts.waitUntilReload = parseInt(RMUS.options.options.middleColumn_forum_reloadPosts_waitUntilReload, 10);
					return false;
				},

				// Setzt die Farbe (HEX + GRB) in der die neuen Posts markiert werden
				setMarkPostColor : function () {
					// Nur wenn eine HEX-Zahl eingegeben wurde
					if (RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor[0] == '#' && RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor.length == 7) {
						RMUS.middleColumn.forum.reloadPosts.markPostColor = RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor;
						RMUS.middleColumn.forum.reloadPosts.markPostColorRgb = "rgb(" + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(1, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(3, 2), 16).toString() + ", " + parseInt(RMUS.middleColumn.forum.reloadPosts.markPostColor.substr(5, 2), 16).toString() + ")";
					}
					return false;
				},

				// Ermöglicht das unbegrenzte Erweitern einer Seite
				endlessPage : function () {
					if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages))) {
						RMUS.middleColumn.forum.reloadPosts.finishedPages++;
						RMUS.middleColumn.forum.page++;
					}

					return false;
				},
				
				// Prüft ob eine neue Seite im Forum vorhanden ist
				checkForNewPage : function () {
					if (RMUS.options.options.middleColumn_forum_reloadPosts_checkForNewPage == 'checked'){
						if (RMUS.middleColumn.forum.reloadPosts.postcount == (25 + (25 * RMUS.middleColumn.forum.reloadPosts.finishedPages)) && $('#userscriptNewPage').length < 1) {
							$.ajax({
								type: 'POST',
								async: true,
								cache: false,
								url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1),
								contentType: 'text/html; charset=iso-8859-1;', 
								dataType: 'html',
								success: function (data) {
									var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
									if (posts != null) {
										$('table.elf.forum.p2:last').after('<br/><div id="userscriptNewPage" style="width:520px; height: 23px; background-color: #2B91FF; text-align: right; vertical-align:middle; display:table-cell"><a style="color: #fff; font-weight: bold; padding-right: 10px;" href="' + RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1) + '">Zur n&auml;chsten Seite</a></div>');
									}
								}
							});
						}
					}

					return false;
				},
				
				// Zu neuen Posts scrollen
				jumpToNewPosts :{
					waitUntilNextJump : 5,
					
					setWaitUntilNextJump : function(){
						var timeToWait = parseInt(RMUS.options.options.middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump, 10);
						if (timeToWait > 5){
							RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump = timeToWait;
						}
						return false;
					},
					
					jump : function(){
						if (RMUS.middleColumn.forum.reloadPosts.unseenPosts.length > 0){
							if ($('#userscript_enable_jump').attr('checked') == 'checked'){
								window.scrollTo(0, RMUS.middleColumn.forum.reloadPosts.unseenPosts[0] - (window.innerHeight * 0.55) + 10)
							}
						}
						return false;
					}
				}
			},

			// Vorschau für Forenposts
			preview : {
				userid : 0,
				username : '',
				previewIsEnabled : false,

				// HTML injizieren
				insertPreviewHtml : function () {
					$('<br /><table border="0" id="previewtable" style="display: none"><tr><td valign="top" id="previewleft" style="border: solid 1px #dddddd; border-right: none; width:110px; height:auto; min-height: 150px;"></td><td valign="top" id="preview" style="font-size: 11px; border: solid 1px #dddddd; width:408px; height:auto; min-height: 150px;"></td><td><img style="border: none; marin: 0, padding: 0;" src="http://thextor.de/readmore-userscript/img/minheight150.gif"></img></td></tr><tr><td colspan="2" style="border: solid 1px #dddddd; border-top: none; background-color: #DEDEDE; height: 12px;"></td><td style="border: none;"></td></table>').insertAfter('.center:last');
					$('<input type="button" value="Vorschau ein-/ausblenden" class="form" id="triggerPreview" style="margin-left: 10px;">').appendTo('.center:last');
				},

				// Grundgerüst des Preview (ohne den eigentlichen Post)
				initializePreview : function () {
					var d = new Date(),
						timedata = {};

					timedata.day = d.getDate();
					timedata.month = (d.getMonth() + 1);
					timedata.year = d.getFullYear();
					timedata.hours = d.getHours();
					timedata.minutes = d.getMinutes();

					$.each(timedata, function (key, value) {
						if (String(value).length == 1) {
							timedata[key] = '0' + value;
						}
					});

					RMUS.middleColumn.forum.preview.readUserid();	// User-ID auslesen
					RMUS.middleColumn.forum.preview.readUsername();	// Usernamen auslesen

					var firstRow = '<span style="font-size: 10px;"><a href="javascript:void(0)">#1337</a></span><br>',
						secontRow = '<span style="font-size: 10px;">' + timedata.day + '.' + timedata.month + '.' + timedata.year + ', ' + timedata.hours + ':' + timedata.minutes + '</span><br>',
						thirdRow = '<span style="font-size: 11px;"><img style="height: 11px;" src="http://images.readmore.de/img/icons/online.gif"><img src="http://thextor.de/readmore-userscript/img/space.gif" style="border: none; height: 1px; width: 5px;"><a class="bml" href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '">' + RMUS.middleColumn.forum.preview.username + '</a></span><br><br>',
						fourthRow = '<span style="font-size: 10px;">Beitr&auml;ge: 1337</span><br><br>',
						fifthRow = '<a href="index.php?cont=profile&amp;id=' + RMUS.middleColumn.forum.preview.userid + '" title="' + RMUS.middleColumn.forum.preview.username + '"><img src="' + $('.floatl.vcenter.elf.dgray.vcenter:first').html().match(/src="(.+?)" alt/)[1] + '"></a>';

					$('#previewleft').html(firstRow + secontRow + thirdRow + fourthRow + fifthRow);	
					return false;
				},

				// User-ID auslesen
				readUserid : function () {
					RMUS.middleColumn.forum.preview.userid = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/id=(.+?)"/)[1];
				},

				// Usernamen auslesen
				readUsername : function () {
					RMUS.middleColumn.forum.preview.username = $('div.floatl.vcenter.elf.dgray:eq(1)').html().match(/">(.+?)<\/a>/)[1]
				},

				// Den Post in die Preview umwandeln
				convertToPreview : function (raw_post) {
					var previewTags = {};
					previewTags['\\[b\\]'] = '<b>';
					previewTags['\\[/b\\]'] = '</b>';
					previewTags['\\[i\\]'] = '<i>';
					previewTags['\\[/i\\]'] = '</i>';
					previewTags['\\[u\\]'] = '<u>';
					previewTags['\\[/u\\]'] = '</u>';
					previewTags['\\[s\\]'] = '<s>';
					previewTags['\\[/s\\]'] = '</s>';
					previewTags['\\[hr\\]'] = '<hr style="margin:0; padding:0;">';
					previewTags['\\[center\\]'] = '<center>';
					previewTags['\\[/center\\]'] = '</center>';
					previewTags['\\[spoiler\\]'] = '<div><a href="#" onclick="spoiler(this);return false;" class="spoiler-link" style="background-image: url(http://images.readmore.de/img/icons/plus.jpg);">Spoiler</a><div class="spoiler-cont" style="display: none; ">';
					previewTags['\\[/spoiler\\]'] = '</div></div>';
					previewTags['\\[youtube]'] = '<iframe width="380" height="270" src="http://www.youtube.com/embed/';
					previewTags['\\[/youtube]'] = '" frameborder="0" allowfullscreen></iframe><br>';
					previewTags['\\[img]'] = '<img src="';
					previewTags['\\[/img]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
					previewTags['\\[image]'] = '<img src="';
					previewTags['\\[/image]'] = '" alt="" title="" class="center" style="max-width:98%; border: 1px solid #CDCDCD;">';
					previewTags['\\[url]'] = '<a>';
					previewTags['\\[/url]'] = '</a>';
					previewTags['\\[/color]'] = '</span>';
					previewTags['\\[list]'] = '<ul style="margin: 0; padding: 0; padding-left: 20px;">';
					previewTags['\\[/list]'] = '</ul>';
					previewTags['\\[\\*]'] = '<li style="margin: 0; padding: 0; list-style-image: url(http://images.readmore.de/img/icons/else.png);">';

					var text = raw_post;

					// BB-Code ersetzen
					$.each(previewTags, function (key, value) {
						var regEx = new RegExp(key, 'g');
						text = text.replace(regEx, value);
					});

					// URL mit Link
					var urlPreview = text.match(/\[url=[^\]]+/g);
					if (urlPreview) {
						$.each(urlPreview, function (key) {
							var link = urlPreview[key].replace(/\[url=/, '').replace(/http:\/\//, '').replace(/https:\/\//, ''),
								regEx = new RegExp('\\' + urlPreview[key].replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\?/g, '\\?') + '\\]'); 
							text = text.replace(regEx, '<a href="http://' + link + '">');
						});
					}

					// color
					var colorPreview = text.match(/\[color=[^\]]+/g);
					if (colorPreview) {
						$.each(colorPreview, function (key) {
							var color = text.match(/\[color=(.+?)\]/)[1],
								regEx = new RegExp('\\' + colorPreview[key] + '\\]'); 
							text = text.replace(regEx, '<span style="color: ' + color + ';">');
						});
					}

					// Quote
					var quotes = text.match(/\[quot(.*?)\]/g);

					if (quotes != null) {
						$.each(quotes, function (index, value) {
							var quoteHead = '<div class="bggray2 bogray2 quote_titel">Zitat',
								name = value.match(/\[quote=(.*?)\]/);

							if (name != null) {
								quoteHead = quoteHead + ' von ' + name[1];
							}
							quoteHead = quoteHead + ':</div>';
							text = text.replace(value, quoteHead + '<div class="bogray2 quote">');
						});
					}

					text = text.replace(/\[\/quote\]/g, '</div>');				
					return text;
				},
				
				// Preview darstellen
				showPreview: function(){
					$('#preview').html(RMUS.middleColumn.forum.preview.convertToPreview(String($('#c_comment').val().replace(/(\r\n|\n|\r)/gm, '<br />'))));
				},

				// Preview starten / Ein- und ausblenden
				triggerPreview : function () {
					if(RMUS.middleColumn.forum.preview.previewIsEnabled == true) {
						// Ausblenden
						$('#previewtable').css('display', 'none');
						$('#c_comment').unbind("keyup", RMUS.middleColumn.forum.preview.showPreview);
						$('#c_comment').unbind("focus", RMUS.middleColumn.forum.preview.showPreview);
						RMUS.middleColumn.forum.preview.previewIsEnabled = false;
					} else {
						// Einblenden
						RMUS.middleColumn.forum.preview.initializePreview();
						RMUS.middleColumn.forum.preview.showPreview();

						$('#previewtable').css('display', 'block');
						$('#c_comment').keyup(RMUS.middleColumn.forum.preview.showPreview);
						$('#c_comment').focus(RMUS.middleColumn.forum.preview.showPreview);
						RMUS.middleColumn.forum.preview.previewIsEnabled = true;
					}
				}
			},
			
			replaceSpecialChars : function(text){
				replacePost = {};

				replacePost['%C3%A4'] = '%E4';		// ä
				replacePost['%C3%84'] = '%C4';		// Ä
				replacePost['%C3%B6'] = '%F6';		// ö
				replacePost['%C3%96'] = '%D6';		// Ö
				replacePost['%C3%BC'] = '%FC';		// ü
				replacePost['%C3%9C'] = '%DC';		// Ü
				replacePost['%C3%9F'] = '%DF';		// ß
				replacePost['%C3%9C'] = '%DC';		// <
				replacePost['%C3%9F'] = '%DF';		// >
				replacePost['%C2%B0'] = '%B0';		// °
				replacePost['%C2%B4'] = '%B4';		// ´
				replacePost['%C3%A1'] = '%E1';		// á
				replacePost['%C3%81'] = '%C1';		// Á
				replacePost['%C3%A2'] = '%E2';		// â
				replacePost['%C3%82'] = '%C2';		// Â
				replacePost['%C3%A9'] = '%E9';		// é
				replacePost['%C3%89'] = '%C9';		// É
				replacePost['%C3%AA'] = '%EA';		// ê
				replacePost['%C3%8A'] = '%CA';		// Ê
				replacePost['%C3%AD'] = '%ED';		// í
				replacePost['%C3%8D'] = '%CD';		// Í
				replacePost['%C3%AE'] = '%EE';		// î
				replacePost['%C3%8E'] = '%CE';		// Î
				replacePost['%C3%B3'] = '%F3';		// ó
				replacePost['%C3%93'] = '%D3';		// Ó
				replacePost['%C3%B4'] = '%F4';		// ô
				replacePost['%C3%94'] = '%D4';		// Ô
				replacePost['%C3%BA'] = '%FA';		// ú
				replacePost['%C3%9A'] = '%DA';		// Ú
				replacePost['%C3%BB'] = '%FB';		// û
				replacePost['%C3%9B'] = '%DB';		// Û
				replacePost['%E2%82%AC'] = '%80';	// €

				// Sonderzeichen ersetzen
				$.each(replacePost, function (key, value) {
					var regEx = new RegExp(key, 'g');
						text = text.replace(regEx, value);
				});
				
				return text;
			},

			// Post im Hintergrund
			postPerAjax : function () {
				var post = $('form[name=submitpost]').serialize();
				
				// Sonderzeichen ersetzen
				 post = String(RMUS.middleColumn.forum.replaceSpecialChars(post));
				
				// Während der Wartezeiten den Submit-Knopf ausblenden
				$('.center:last').css('display', 'none');

				// Ist das Automatische neuladen deaktiviert, die nötigen Vorkehrungen dazu treffen
				if(RMUS.middleColumn.forum.reloadPosts.postcount == 0) {
					RMUS.middleColumn.forum.readThreadlink();
					RMUS.middleColumn.forum.readPage();
					RMUS.middleColumn.forum.reloadPosts.readPostcount();
				}

				// Der eigentliche Post
				$.ajax({
					type:'POST', 
					url: '?cont=forum/do_reply', 
					data: post, 
					async: true,
					cache: false,
					contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;', 
					dataType: 'html',

					success: function (response) {
						// Prüft ob der Beitrag lang genug war
						var error = response.match('Dein Beitrag muss aus mindestens 3 Zeichen bestehen.');

						if(error != null) {
							// Fehlermeldung ausgeben
							alert('Dein Beitrag muss aus mindestens 3 Zeichen bestehen!');
						} else {
							// Nachricht aus dem Feld löschen und Posts neuladen
							$('#c_comment').val('');
							RMUS.middleColumn.forum.reloadPosts.readNewPosts();
						}
						
						// Submit-Knopf wieder einblenden
						$('.center:last').css('display', 'block');
					},
					error: function (){
						// Submit-Knopf wieder einblenden
						$('.center:last').css('display', 'block');
					}
				});
								
				return false;
			},
			
			scrollForNewPage : {
				oldPosts : 0,
				insertPosts : function (){
					var limit = parseInt($('#c_comment').offset().top, 10) - 190;
					var position = window.pageYOffset + (window.innerHeight * 0.55);

					if (position >= limit){
						// Der eigentliche Reload
						$.ajax({
							type: 'POST',
							async: true,
							cache: false,
							url: RMUS.middleColumn.forum.threadlink + '&pagenum=' + (RMUS.middleColumn.forum.page + 1),
							contentType: 'text/html; charset=iso-8859-1;', 
							dataType: 'html',
							success: function (data) {
								var posts = data.match(/\<tr class=\"post\_[^"]+\"\>[^]+?\<\/tr\>/g);
								if (posts != null) {
									var postCharLenth = JSON.stringify(posts).length;
									if (postCharLenth !== RMUS.middleColumn.forum.scrollForNewPage.oldPosts){
										RMUS.middleColumn.forum.scrollForNewPage.oldPosts = postCharLenth;
										
										var footer = data.match(/\<tr class=\"cellheadercolor footer\_[^"]+\"\>[^]+?\<\/tr\>/g);
										for (i = 0, k = parseInt(posts.length, 10); i < k; i++) {
											$('table.elf.forum.p2.bogray2').append(posts[i]);
											$('table.elf.forum.p2.bogray2').append(footer[i]);
										}
										
										RMUS.middleColumn.forum.page++;
									}	
									
									if (RMUS.options.options.middleColumn_forum_editPost == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();	
								}
							}
						});
					}
					
					return false;
				}
			},
			
			// Edit ohne Reload
			editPost : {
				
				originalPosts : [],
			
				initializeEvent : function(){
					$('tr[class*=footer_]>td>a[href*=edit]').click(function () {
						var postid = parseInt(String($(this).attr('href')).match(/postid=(.*)/)[1], 10);	
						$(this).attr('href', 'javascript:void(0);');
						
						RMUS.middleColumn.forum.editPost.loadPost(postid);
						RMUS.middleColumn.forum.editPost.showEditMenu(postid);
					});
					
					return false;
				},
				
				loadPost : function(postid){
					var height = $('tr[class=post_' + postid + ']>td:last').css('height');
					RMUS.middleColumn.forum.editPost.originalPosts[postid] = $('tr[class=post_' + postid + ']>td:last').html();
					
					$('tr[class=post_' + postid + ']>td:last').html('');
					$('tr[class=post_' + postid + ']>td:last').append('<textarea style="width: 100%; height: ' + height + '; padding: 0; margin: 0;"></textarea>');
					
					$.ajax({
						type: 'POST',
						async: true,
						cache: false,
						url: 'index.php?cont=forum/edit&postid=' + postid,
						contentType: 'text/html; charset=iso-8859-1;', 
						dataType: 'html',
						success: function (data) {
							$('tr[class=post_' + postid + ']>td:last textarea').val(data.replace(/(\r\n|\n|\r)/gm,'[newline]').match(/<textarea(.*?)>(.*?)<\/textarea>/)[2].replace(/\[newline\]/g, '\r\n'));
						}
					});
					
					return false;
				},
				
				showEditMenu : function(postid){					
					var submit = '<a class="edit_submit_' + postid + '" href="javascript:void(0);" style="margin-right: 4px;">Edit absenden</a>';
					var cancel = '<a class="edit_cancel_' + postid + '"href="javascript:void(0);" style="color: gray;">Edit abrechen</a>&nbsp;|&nbsp;';
					$('tr[class*=footer_' + postid + ']>td').append('<div>' + cancel + submit + '</div>');
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').click(function () {
						RMUS.middleColumn.forum.editPost.cancelEdit(postid);
					});
					
					$('tr[class*=footer_' + postid + ']>td>div>a:last').click(function () {
						RMUS.middleColumn.forum.editPost.submitEdit(postid);
					});
					
					return false;
				},
				
				cancelEdit : function(postid){
					$('tr[class*=footer_' + postid + ']>td>div').remove();
					$('tr[class=post_' + postid + ']>td:last').html('');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);
					
					$('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.editPost.originalPosts[postid]);
					RMUS.middleColumn.forum.editPost.originalPosts[postid] = null;				
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
					$('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');
					RMUS.middleColumn.forum.editPost.initializeEvent();
					return false;
				},
				
				submitEdit : function(postid){	
					var newpost = '';
					var postdata = '';
					
					$.ajax({
						type: 'POST',
						async: false,
						cache: false,
						url: 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid,
						contentType: 'text/html; charset=iso-8859-1;', 
						dataType: 'html',
						success: function (datafirst) {
							var f_uid = $(datafirst).find('input[name="f_uid"]').val();
							var boardid = $(datafirst).find('input[name="thread[boardid]"]').val();
							var threadid = $(datafirst).find('input[name="thread[threadid]"]').val();
							var postidedit = $(datafirst).find('input[name="post[postid]"]').val();
														
							newpost = $('tr[class=post_' + postid + ']>td:last textarea').val();
							postdata = 'f_uid=' + f_uid + '&thread[boardid]=' + boardid + '&thread[threadid]=' + threadid + '&post[postid]=' + postidedit + '&postnew_newposttext=' + encodeURI(newpost).replace(/&amp;/g, '&').replace(/&/g, '%26');
							postdata = RMUS.middleColumn.forum.replaceSpecialChars(postdata);
							
							$.ajax({
								type: 'POST',
								async: false,
								cache: false,
								url: 'http://www.readmore.de/index.php?cont=forum/do_edit',	
								data: postdata,
								contentType: 'application/x-www-form-urlencoded; charset=iso-8859-1;', 
								dataType: 'html',
								success: function (response) {
									var content = $(response).find('#content').html();
									if(content.match(/Fehler/)){
										alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
									}
								},
								error: function (){
									alert('Es ist leider ein Fehler aufgetreten. Bitte lade die Seite neu!');
								}
							});								
						}
					});
					
					$('tr[class*=footer_' + postid + ']>td>div>a:first').off('click');
					$('tr[class*=footer_' + postid + ']>td>div>a:last').off('click');
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').off('click');
					
					$('tr[class*=footer_' + postid + ']>td>div').remove();
					$('tr[class=post_' + postid + ']>td:last').html(RMUS.middleColumn.forum.preview.convertToPreview(newpost.replace(/(\r\n|\n|\r)/gm, '<br />')));
					$('tr[class*=footer_' + postid + ']>td>a:eq(1)').attr('href', 'http://www.readmore.de/index.php?cont=forum/edit&postid=' + postid);					
					RMUS.middleColumn.forum.editPost.initializeEvent();
					
					return false;
				}
			}
		}
	},

	rightColumn: {

	/************************
	*	TICKER		*
	*************************/
		ticker : {
			// Blendet den Ticker komplett aus
			hideTicker : function () {
				$('#tickr, div.line3:eq(0), div.line3:eq(1)').css('display','none');
				return false;
			}
		},

	/************************
	*	HEADLINES	*
	*************************/
		headlines : {
			// Blendet die Schlagzeilen komplett aus
			hideHeadlines : function () {
				$('#headlines, div.line3:eq(2)').css('display','none');

				return false;
			},

			// Blendet Counterstrike aus
			hideCounterstrike : function () {
				var i = 0;
				for (i; i < 8; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			},

			// Blendet Starcraft aus
			hideStarcraft : function () {
				var i = 8;
				for (i; i < 16; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			},

			// Blendet Dota aus
			hideDefenseOfTheAncients : function () {
				var i = 16;
				for (i; i < 23; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			},

			// Blendet LoL aus
			hideLeagueOfLegends : function () {
				var i = 23;
				for (i; i < 29; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			},

			// Blendet Warcraft aus
			hideWarcraft3 : function () {
				var i = 29;
				for (i; i < 34; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			},

			// Blendet Sonstiges aus
			hideSonstiges : function () {
				var i = 34;
				for (i; i < 43; i++) {
					$('div #nav_schlagzeilen>:eq(' + i + ')').css('display','none');
				}
				return false;
			}
		},

	/************************
	*	FORUM		*
	*************************/
		forum : {

			sections : [],
			featuredthreads : '',
			esportforen : '',
			technik : '',
			offtopicforen : '',
			spiele : '',
			diablo : '',

			// Teil die Foren in Sektionen ein
			readSections : function () {
				$('div.cont_box:last>a').each(function (index, element) {
					$('div.cont_box:last>*').each(function (i, e) {
						if (element == e) {
							RMUS.rightColumn.forum.sections[index] = i;
							return false;
						}
					});
				});	

				return false;
			},

			// Setzt den entsprechenden HTML-Code in die Feafured-Threads Variable
			readFeaturedThreads : function () {
				var featuredthreads = '',
					i = RMUS.rightColumn.forum.sections[0];

				for (i; i < RMUS.rightColumn.forum.sections[1]; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[0]) {
						featuredthreads += '<a href="index.php?cont=forum/forum" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						featuredthreads += '<div class="listing">' + html + '</div>';
					}
				}

				RMUS.rightColumn.forum.featuredthreads = featuredthreads;
				return false;
			},

			// Setzt den entsprechenden HTML-Code in die EsportForen Variable
			readEsportForen : function () {
				var esportforen = '',
					i = RMUS.rightColumn.forum.sections[1];

				for (i; i < RMUS.rightColumn.forum.sections[2]; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[1]) {
						esportforen += '<a href="index.php?cont=forum/forum#eSport" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						esportforen += '<div class="listing">' + html + '</div>';
					}
				}  

				RMUS.rightColumn.forum.esportforen = esportforen;
				return false;			
			},

			// Setzt den entsprechenden HTML-Code in die Technik Variable
			readTechnik : function () {
				var technik = '',
					i = RMUS.rightColumn.forum.sections[2];

				for (i; i < RMUS.rightColumn.forum.sections[3]; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[2]) {
						technik += '<a href="index.php?cont=forum/forum#Technik" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						technik += '<div class="listing">' + html + '</div>';
					}
				}  

				RMUS.rightColumn.forum.technik = technik;
				return false;
			},

			// Setzt den entsprechenden HTML-Code in die Offtopic Variable
			readOfftopicForen : function () {
				var offtopicforen = '',
					i = RMUS.rightColumn.forum.sections[3];

				for (i; i < RMUS.rightColumn.forum.sections[4]; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[3]) {
						offtopicforen += '<a href="index.php?cont=forum/forum#Technik" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						offtopicforen += '<div class="listing">' + html + '</div>';
					}
				}  

				RMUS.rightColumn.forum.offtopicforen = offtopicforen;
				return false;
			},

			// Setzt den entsprechenden HTML-Code in die Spiele Variable
			readSpiele : function () {
				var spiele = '',
					i = RMUS.rightColumn.forum.sections[4];

				for (i; i < RMUS.rightColumn.forum.sections[5]; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[4]) {
						spiele += '<a href="index.php?cont=forum/forum#Technik" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						spiele += '<div class="listing">' + html + '</div>';
					}
				}  

				RMUS.rightColumn.forum.spiele = spiele;
				return false;
			},

			// Setzt den entsprechenden HTML-Code in die Diablo Variable
			readDiablo3 : function () {
				var j = $('div.cont_box:last>*').length,
					diablo = '',
					i = RMUS.rightColumn.forum.sections[5];

				for (i; i < j; i++) {
					var html = $('div.cont_box:last>:eq(' + i + ')').html();

					if (i == RMUS.rightColumn.forum.sections[5]) {
						diablo += '<a href="index.php?cont=forum/forum#Technik" class="bml" style="margin-top:10px;">' + html + '</a>';
					} else if (html != '') {
						diablo += '<div class="listing">' + html + '</div>';
					}
				}  

				RMUS.rightColumn.forum.diablo = diablo;
				return false;
			},

			// Startet das umsortieren des Forums
			initializeForum : function () {
				var i = 0,
					html = '';

				sortForum = [];
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_0);
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_1);
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_2);
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_3);
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_4);
				sortForum.push(RMUS.options.options.rightColumn_forum_hideForum_5);

				RMUS.rightColumn.forum.readSections();				
				RMUS.rightColumn.forum.readFeaturedThreads();
				RMUS.rightColumn.forum.readEsportForen();
				RMUS.rightColumn.forum.readTechnik();
				RMUS.rightColumn.forum.readOfftopicForen();
				RMUS.rightColumn.forum.readSpiele();
				RMUS.rightColumn.forum.readDiablo3();

				for (i; i < 6; i++) {
					if (sortForum[i] == 'featuredthreads') {
						html += RMUS.rightColumn.forum.featuredthreads + '<br>';
						continue;
					}
					if (sortForum[i] == 'esportforen') {
						html += RMUS.rightColumn.forum.esportforen + '<br>';
						continue;
					}
					if (sortForum[i] == 'technik') {
						html += RMUS.rightColumn.forum.technik + '<br>';
						continue;
					}
					if (sortForum[i] == 'offtopicforen') {
						html += RMUS.rightColumn.forum.offtopicforen + '<br>';
						continue;
					}
					if (sortForum[i] == 'spiele') {
						html += RMUS.rightColumn.forum.spiele + '<br>';
						continue;
					}
					if (sortForum[i] == 'diablo') {
						html += RMUS.rightColumn.forum.diablo + '<br>';
						continue;
					}
					if (sortForum[i] == '') {
						if (html.substring(html.length-8) == '<br><br>') {
							html = html.substring(0, html.length-4);
						}
						continue;
					}
				};

				$('div.cont_box:last').html(html);
				return false;
			},
			
			// Forennavigation neuladen
			reloadForum : function(){
				var reloadData = '';
				reloadData = RMUS.miscellaneous.reloadMainpageData.mainpageData.match(/<div class="cont_box" style="text-align: left;">.*?<div class="line3">/)[0].replace('<div class="cont_box" style="text-align: left;">', '').replace('<div class="line3">', '');
				
				if (reloadData != false){
					if (reloadData.length > 0){
						$('.cont_box:last').html(reloadData);
						if (RMUS.options.options.rightColumn_forum_sections == 'checked') RMUS.rightColumn.forum.initializeForum();
					}
				}
				
				return false;
			},

			// Blendet das Forum komplett aus
			hideForum : function () {
				$('div.headline_bg:last, div.cont_box:last').css('display','none');			
				return false;
			}
		}
	}

}


/********************************
*	Funktionen aktivieren	*
*********************************/

// Bereich auf der Readmore.de Seite rausfinden
var cont = '';
var getVars = document.location.search.replace(/[?]/g, '').replace(/[&]/g, '=').split('=');
$.each(getVars, function (index, value) {
	if (value == 'cont') {
		cont = getVars[index+1];
	}
});

var content = {
	mainpage                : false,
	profile			: false,
	groups_new		: false,
	groups_group_list       : false,
	groups_show_group       : false,
	msg                     : false,
	news_archive            : false,
	headlines_overview      : false,
	www                     : false,
	widget_create_ticker    : false,
	guides                  : false,
	articles                : false,
	news                    : false,
	search                  : false,
	match_overview          : false,
	db                      : false,
	coverages               : false,
	demo_overview_pov       : false,
	demo_overview_hltv      : false,
	demo_overview           : false,
	video_overview          : false,
	gallery_sets            : false,
	forum_forum             : false,
	forum_board             : false,
	forum_thread            : false,
	forum_edit              : false,
	forum_newtopic          : false,
	community               : false,
	blog                    : false,
	poll_archive            : false,
	rules                   : false,
	team                    : false,
	imprint                 : false,
	userstream              : false,
	gallery_images          : false,
	matches                 : false
};

switch (cont) {
	case '':
		content.mainpage = true;
		break;
	case 'profile':
		content.profile = true;
		break;
	case 'forum/thread':
		content.forum_thread = true;
		break;
	case 'forum/forum':
		content.forum_forum = true;
		break;
	case 'forum/board':
		content.forum_board = true;
		break;
	case 'forum/edit':
		content.forum_edit = true;
		break;
	case 'matches':
		content.matches = true;
		break;
	case 'www':
		content.www = true;
		break;
	case 'userstream':
		content.userstream = true;
		break;
	case 'groups/new':
		content.groups_new = true;
		break;
	case 'groups/group_list':
		content.groups_group_list = true;
		break;
	case 'groups/show_group':
		content.groups_show_group = true;
		break;
	case 'msg':
		content.msg = true;
		break;
	case 'news_archive':
		content.news_archive = true;
		break;
	case 'headlines_overview':
		content.headlines_overview = true;
		break;
	case 'widget/create_ticker':
		content.widget_create_ticker = true;
		break;
	case 'guides':
		content.guides = true;
		break;
	case 'articles':
		content.articles = true;
		break;
	case 'news':
		content.news = true;
		break;
	case 'search':
		content.search = true;
		break;
	case 'match_overview':
		content.match_overview = true;
		break;
	case 'db':
		content.db = true;
		break;
	case 'coverages':
		content.coverages = true;
		break;
	case 'demo_overview_pov':
		content.demo_overview_pov = true;
		break;
	case 'demo_overview_hltv':
		content.demo_overview_hltv = true;
		break;
	case 'demo_overview':
		content.demo_overview = true;
		break;
	case 'video_overview':
		content.video_overview = true;
		break;
	case 'gallery_sets':
		content.gallery_sets = true;
		break;
	case 'forum/newtopic':
		content.forum_newtopic = true;
		break;
	case 'community':
		content.community = true;
		break;
	case 'blog':
		content.blog = true;
		break;
	case 'poll_archive':
		content.poll_archive = true;
		break;
	case 'rules':
		content.rules = true;
		break;
	case 'team':
		content.team = true;
		break;
	case 'imprint':
		content.imprint = true;
		break;
	case 'gallery_images':
		content.gallery_images = true;
		break;
	default:
		content.mainpage = true;
		break;
}

// Optionen laden und Link in der Usereiste einfügen
RMUS.options.readOptions();
RMUS.options.insertOptionsLink();

if (RMUS.options.options.miscellaneous_fixedToolbar) {
	RMUS.miscellaneous.createFixedToolbar();
}

// WWW, Streams, Galerie, Ergebnisticker, Schlagzeilen und Forum angezeigt
if (!content.profile && !content.guides) {
	// WWW ausblenden
	if (RMUS.options.options.leftColumn_www_hideWww == 'checked') RMUS.leftColumn.www.hideWww();

	// Streams ausblenden
	if (RMUS.options.options.leftColumn_streams_hideStreams == 'checked') {
		RMUS.leftColumn.streams.hideStreams();
	} else {
		// Damit die Überprüfung nur 1x notwendig ist, wird hier das Array mit den entsprechenden Bildern gefüllt,
		// später werden dann genau diese ausgeblendet
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_bf3 == 'checked') RMUS.leftColumn.streams.streamsToHide.push('bf3.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_cs == 'checked') RMUS.leftColumn.streams.streamsToHide.push('cs.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_csgo == 'checked') RMUS.leftColumn.streams.streamsToHide.push('csgo.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_css == 'checked') RMUS.leftColumn.streams.streamsToHide.push('css.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_dota == 'checked') RMUS.leftColumn.streams.streamsToHide.push('dota.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_dota2 == 'checked') RMUS.leftColumn.streams.streamsToHide.push('dota2.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_d3 == 'checked') RMUS.leftColumn.streams.streamsToHide.push('d3.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_soccer == 'checked') RMUS.leftColumn.streams.streamsToHide.push('soccer.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_hon == 'checked') RMUS.leftColumn.streams.streamsToHide.push('hon.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_lol == 'checked') RMUS.leftColumn.streams.streamsToHide.push('lol.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_ql == 'checked') RMUS.leftColumn.streams.streamsToHide.push('ql.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_sc == 'checked') RMUS.leftColumn.streams.streamsToHide.push('cs.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_sc2 == 'checked') RMUS.leftColumn.streams.streamsToHide.push('sc2.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_wc3 == 'checked') RMUS.leftColumn.streams.streamsToHide.push('wc3.png');
		if (RMUS.options.options.leftColumn_streams_hideSelectedStreams_else == 'checked') RMUS.leftColumn.streams.streamsToHide.push('else.png');

		if (RMUS.leftColumn.streams.streamsToHide.length > 0) RMUS.leftColumn.streams.hideSelectedStreams();
	}

	// Ticker ausblenden
	if (RMUS.options.options.rightColumn_ticker_hideTicker == 'checked') RMUS.rightColumn.ticker.hideTicker();

	// Schlagzeilen ausblenden
	if (RMUS.options.options.rightColumn_headlines_hideHeadlines == 'checked') RMUS.rightColumn.headlines.hideHeadlines();  // Alle
	else{	// Individuell
		if (RMUS.options.options.rightColumn_headlines_hideCounterstrike == 'checked') RMUS.rightColumn.headlines.hideCounterstrike();
		if (RMUS.options.options.rightColumn_headlines_hideStarcraft == 'checked') RMUS.rightColumn.headlines.hideStarcraft();
		if (RMUS.options.options.rightColumn_headlines_hideDefenseOfTheAncients == 'checked') RMUS.rightColumn.headlines.hideDefenseOfTheAncients();
		if (RMUS.options.options.rightColumn_headlines_hideLeagueOfLegends == 'checked') RMUS.rightColumn.headlines.hideLeagueOfLegends();
		if (RMUS.options.options.rightColumn_headlines_hideWarcraft3 == 'checked') RMUS.rightColumn.headlines.hideWarcraft3();
		if (RMUS.options.options.rightColumn_headlines_hideSonstiges == 'checked') RMUS.rightColumn.headlines.hideSonstiges();
	}

	// Forum ausblenden
	if (RMUS.options.options.rightColumn_forum_hideForum == 'checked')	RMUS.rightColumn.forum.hideForum();	// Komplett ausblenden
	else{	// Individuell
		if (RMUS.options.options.rightColumn_forum_sections == 'checked') {
			RMUS.rightColumn.forum.initializeForum();
		}
	}
	
	// Neuladen der Forannavigation beziehungsweise der Streams	
	if (RMUS.options.options.rightColumn_forum_reloadForum == 'checked' || RMUS.options.options.leftColumn_streams_reloadStreams == 'checked'){
		RMUS.miscellaneous.reloadMainpageData.readPage();
		window.setInterval(function () {
			RMUS.miscellaneous.reloadMainpageData.readPage()
		}, 20000);
		
		// Forennavigation
		if (RMUS.options.options.rightColumn_forum_hideForum != 'checked'){
			if(RMUS.options.options.rightColumn_forum_reloadForum == 'checked'){
				window.setInterval(function () {
					RMUS.rightColumn.forum.reloadForum()
				}, 20000);
			}
		}
		
		// Streams
		if(RMUS.options.options.leftColumn_streams_reloadStreams == 'checked'){
			window.setInterval(function () {
				RMUS.leftColumn.streams.reloadStreams()
			}, 20000);
		}
	}	
}
  
// Nur im Forum (Threadansicht) aktivieren
if (content.forum_thread) {
	// Wenn Lastpage gesetzt ist, zum letzten Post springen
	if (RMUS.options.options.miscellaneous_lastPageJumpToLastPost == 'checked') RMUS.miscellaneous.lastPageJumpToLastPost();
	
	// Knopf zum hochscrollen
	if (RMUS.options.options.miscellaneous_buttonScrollUp == 'checked') RMUS.miscellaneous.buttonScrollUp();
	
	// Knopf zum runterscrollen
	if (RMUS.options.options.miscellaneous_buttonScrollDown == 'checked') RMUS.miscellaneous.buttonScrollDown();
	
	// Titel umsortieren
	if (RMUS.options.options.miscellaneous_reSortTitle == 'checked') RMUS.miscellaneous.reSortTitle();
	
	// Vorschau
	if (RMUS.options.options.middleColumn_forum_preview == 'checked') {
		RMUS.middleColumn.forum.preview.insertPreviewHtml();
		$('#triggerPreview').click(RMUS.middleColumn.forum.preview.triggerPreview);
	}
	
	// Posten im Hintergrund
	if (RMUS.options.options.middleColumn_forum_postPerAjax == 'checked') {
		$('input[name=submit_thread]').click(function (event) {
			event.preventDefault();
			RMUS.middleColumn.forum.postPerAjax();
		});
	}

	// Posts nachladen
	if (RMUS.options.options.middleColumn_forum_reloadPosts_readNewPosts == 'checked') {
		RMUS.middleColumn.forum.readThreadlink();
		RMUS.middleColumn.forum.readPage();
		RMUS.middleColumn.forum.reloadPosts.readPostcount();

		// Zeit zwischen den Reloads setzen
		if (RMUS.options.options.middleColumn_forum_reloadPosts_waitUntilReload.length > 0) RMUS.middleColumn.forum.reloadPosts.setWaitUntilReload();

		// Ungelesene Posts markieren
		if (RMUS.options.options.middleColumn_forum_reloadPosts_markNewPosts == 'checked') {
			// Farbe zum markieren setzen
			if (RMUS.options.options.middleColumn_forum_reloadPosts_markPostColor.length > 0) RMUS.middleColumn.forum.reloadPosts.setMarkPostColor();

			// 4x die Sekunde (de)-Markieren
			window.setInterval(function () {
				RMUS.middleColumn.forum.reloadPosts.markNewPosts()
			}, 250);

			// Favicon verändern
			if (RMUS.options.options.middleColumn_forum_reloadPosts_changeFavicon == 'checked') window.setInterval(function () {
				RMUS.middleColumn.forum.reloadPosts.changeFavicon()
			}, 1000);

			// Postanzahl im Tab anzeigen
			if (RMUS.options.options.middleColumn_forum_reloadPosts_showNewPostsTitle == 'checked') window.setInterval(function () {
				RMUS.middleColumn.forum.reloadPosts.showNewPostsTitle()
			}, 1000);
		}

		// Den (in den Optionen) eingetragenen Wert im 1000 multiplizieren um auf Sekunden zu kommen
		// Nachladen von Posts aktivieren
		window.setInterval(function () {
			RMUS.middleColumn.forum.reloadPosts.readNewPosts()
		}, parseInt(RMUS.middleColumn.forum.reloadPosts.waitUntilReload, 10) * 1000);
		
		// Zu neuen Posts scrollen, nur wenn die EndloseSeite aktiv ist
		if (RMUS.options.options.middleColumn_forum_reloadPosts_jumpToNewPosts == 'checked' && RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage == 'checked'){
			window.setInterval(function () {
				RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.jump()
			}, parseInt(RMUS.middleColumn.forum.reloadPosts.jumpToNewPosts.waitUntilNextJump, 10) * 1000);			
			$('a.bookmark').after('<input style="margin-left: 2px;" type="checkbox" id="userscript_enable_jump" name="userscript_enable_jump">');		
		}
	}
	
	// Beim ereichen des letzten Posts ggf. die nächste Seite nachladen. Nur wenn wir uns nicht auf der letzten Seite befinden oder die "Endlose-Seite" deaktiv ist!
	if (RMUS.options.options.middleColumn_forum_scrollForNewPage == 'checked' && (RMUS.options.options.middleColumn_forum_reloadPosts_endlessPage != 'checked' || $.trim($('div.floatl.m2.elf').html()).substr($.trim($('div.floatl.m2.elf').html()).length-4) != '</b>')) window.setInterval(function () {
		RMUS.middleColumn.forum.scrollForNewPage.insertPosts()
	}, 1000);
	
	// Edit vorbereiten
	if (RMUS.options.options.middleColumn_forum_editPost == 'checked') RMUS.middleColumn.forum.editPost.initializeEvent();	

	// Avataranimationen stoppen
	if (RMUS.options.options.miscellaneous_stopAvatarAnimation == 'checked') {
		RMUS.miscellaneous.stopAvatarAnimation.stopAnimation();
	}
}

// Extrabuttons in den entsprechenden Seiten initialisieren
if (content.forum_thread || content.forum_newtopic || content.forum_edit || content.matches || content.msg || content.profile) {
	if (RMUS.options.options.miscellaneous_extraButtons == 'checked') {
		RMUS.miscellaneous.extrabuttons.init();
	}
}
	
	
	
// HTML für die Optionen injekten und Eventhandler für das Menu setzen
$('body').append('<style type="text/css">#userscriptOptions.menuwrapper{display:none;position:absolute;height:700px;width:600px;left:50%;margin-left:-300px;top:75px;border:2px solid #00aeed;border-radius:0;border-top-left-radius:20px;border-bottom-left-radius:20px;background-color:#fff;overflow-x:hidden;overflow-y:scroll}#userscriptOptions h1{color:#000;font-size:30px;font-variant:small-caps;padding-left:20px;padding-top:20px;border:0}#userscriptOptions .version{float:right;padding-right:20px}#userscriptOptions>div{padding-left:20px;padding-right:20px;padding-top:20px}#userscriptOptions table{border:0;width:100%}#userscriptOptions .menuparent{background-color:#fff;margin:1000;padding:0}#userscriptOptions .menufirstchild{display:none;background-color:#eee;margin:0;padding:0}#userscriptOptions .menusecondchild{display:none;background-color:#ddd;margin:0;padding:0}#userscriptOptions input[type=checkbox],#userscriptOptions input[type=select],#userscriptOptions input[type=text]{margin:0;padding:0}#userscriptOptions .headline td{color:#fff;font-size:24px;font-variant:small-caps;margin:0;padding:5px;background-color:#00aeed;width:100%}</style> <div id="userscriptOptions" class="menuwrapper"> <h1>Userscript Optionen</h1> <span class="version"><a href="index.php?cont=forum/thread&threadid=111239&pagenum=1">Thread</a> | Version 2.0.6</span> <div> <table> <tr> <td style="width:30px"></td> <td></td> <td style="width:180px"></td> <td style="width:25px"></td> </tr> <tr class="headline"> <td colspan="4"> Funktionen </td> </tr> <tr class="menuparent"> <td align="left"> <img id="toggle_sub_middleColumn_forum_reloadPosts_readNewPosts" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Neue Forenbeitr&auml;ge im Hintergrund nachladen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_readNewPosts"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Beitr&auml;ge im Readmore.de-Froum werden automatisch nachgeladen. Ein Refresh des Threads entf&auml;llt somit."/> </td> </tr> <tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"> <td align="left"> </td> <td align="left"> Zeit zwischen zwei Reloads (in Sekunden) </td> <td align="right"> <input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_waitUntilReload"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Bitte Ganzzahlen eintragen. Werte ab 5 Sekunden werden empfohlen, bei einem k&uuml;rzeren Zeitraum kann es unter gewissen Umst&auml;nden zu (tempor&auml;ren) IP-Bans kommen."/> </td> </tr> <tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"> <td align="left"> </td> <td align="left"> Hinweis bei neuen Seiten einblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_checkForNewPage"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Achtung: Funktioniert nur, wenn \'Seite endlos erweitern\' deaktiv ist. Weist auf eine neue Seite hin." /> </td> </tr> <tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"> <td align="left"> <img id="toggle_sub_middleColumn_forum_reloadPosts_endlessPage" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Seite endlos erweitern </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_endlessPage"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Neue Posts werden einfach eingeblendet. Es muss also nicht mehr auf eine neue Seite gewechselt werden."/> </td> </tr> <tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"> <td align="left"> </td> <td align="left"> Automatisch zu neuen Posts scrollen/springen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Springt zu neuen posts."/> </td> </tr> <tr class="menusecondchild sub_middleColumn_forum_reloadPosts_endlessPage"> <td align="left"> </td> <td align="left"> Zeit zwischen zwei Sprüngen </td> <td align="right"> <input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_jumpToNewPosts_waitUntilNextJump"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Zeit in Sekunden, die zwischen 2 Spr&uuml;ngen mindestens vergehen muss."/> </td> </tr> <tr class="menufirstchild sub_middleColumn_forum_reloadPosts_readNewPosts"> <td align="left"> <img id="toggle_sub_middleColumn_forum_reloadPosts_markNewPosts" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Neue Eintr&auml;ge farblich markieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markNewPosts"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Die neu eingetragenen Posts werden markiert."/> </td> </tr> <tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"> <td align="left"> </td> <td align="left"> Farbe ausw&auml;hlen (HEX-Code) </td> <td align="right"> <input type="text" class="userscriptOptions" name="middleColumn_forum_reloadPosts_markPostColor"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Bitte eine HEX Zahl eingeben. Beispiel: #FFEE11"/> </td> </tr> <tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"> <td align="left"> </td> <td align="left"> Ungelesene Posts im Titel / Tab anzeigen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_showNewPostsTitle"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Anzahl der Ungelesenen Posts im Tab anzeigen."/> </td> </tr> <tr class="menusecondchild sub_middleColumn_forum_reloadPosts_markNewPosts"> <td align="left"> </td> <td align="left"> Favicon ver&auml;ndern </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_reloadPosts_changeFavicon"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Bei ungelesenen Posts das Favicon ver&auml;ndern."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Forennavigation aktualisieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_forum_reloadForum"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Navigation des Forums (unten rechts) im Hintergund."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Streams aktualisieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_reloadStreams"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Aktualisiert die Streams im Hintergund."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Vorschaufunktion aktivieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_preview"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Vorschau f&uuml;r neue Beitr&auml;ge einbinden."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Beitr&auml;ge ohne Reload senden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_postPerAjax"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund gepostet. Ein manueller Refresh der Seite entfällt."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Editieren ohne Reload </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_editPost"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Beitr&auml;ge werden im Hintergrund Editiert. Ein manueller Refresh der Seite entfällt."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Scrollen bis zum Seitenende lädt die Nächste </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="middleColumn_forum_scrollForNewPage"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Beim ereichen des letzten Posts ggf. die n&auml;chste Seite nachladen."/> </td> </tr> <tr> <td colspan="4"> &nbsp; </td> </tr> <tr class="headline"> <td colspan="4"> Optische Ver&auml;nderungen </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Fixierte Toolbar </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_fixedToolbar"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Toolbar wird am oberen Fensterrand fixiert."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Ticker ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_ticker_hideTicker"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Der Ticker wird komplett ausgeblendet."/> </td> </tr> <tr class="menuparent"> <td align="left"> <img id="toggle_sub_rightColumn_headlines_hideHeadlines" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Schlagzeilen ausblenden </td> <td align="right"> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Bestimmte oder alle Schlagzeilen ausblenden"/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> Alle ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideHeadlines"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet alle Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> Counter-Strike ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideCounterstrike"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Counter-Strike Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> Starcraft ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideStarcraft"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Starcraft Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> DotA ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideDefenseOfTheAncients"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die DotA Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> League of Legends ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideLeagueOfLegends"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die League of Legends Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> Warcraft 3 ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideWarcraft3"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Warcraft 3 Schlagzeilen aus."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_headlines_hideHeadlines"> <td align="left"> </td> <td align="left"> Sonstiges ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_headlines_hideSonstiges"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die Sonstigen Schlagzeilen aus."/> </td> </tr> <tr class="menuparent"> <td align="left"> <img id="toggle_sub_rightColumn_forum_hideForum" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Forum ausblenden und umsortieren </td> <td align="right"> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Das Forum ausblenden oder umsortieren."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_forum_hideForum"> <td align="left"> </td> <td align="left"> Komplett ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_forum_hideForum"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Das komplette Forum ausblenden."/> </td> </tr> <tr class="menufirstchild sub_rightColumn_forum_hideForum"> <td align="left"> <img id="toggle_sub_rightColumn_forum_sections" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Foren umsortieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="rightColumn_forum_sections"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Ermöglicht das Umsortieren des Forums."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An erster Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_0"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Erste Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An zweiter Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_1"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Zweite Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An dritter Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_2"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Dritte Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An vierter Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_3"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Viere Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An f&uuml;nfter Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_4"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="F&uuml;nfte Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menusecondchild sub_rightColumn_forum_sections"> <td align="left"> </td> <td align="left"> An sechster Stelle </td> <td align="right"> <select size="1" class="userscriptOptions" name="rightColumn_forum_hideForum_5"> <option value="">Nichts anzeigen</option> <option value="featuredthreads">Featured Threads</option> <option value="esportforen">eSport Foren</option> <option value="technik">Technik</option> <option value="offtopicforen">Offtopic Foren</option> <option value="spiele">Spiele</option> <option value="diablo">Diablo 3</option> </select> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Sechste Stelle bei der Anzeige der Foren."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Wer? Wohin? Warum? ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_www_hideWww"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet die komplette Wer? Wohin? Warum? Sektion aus."/> </td> </tr> <tr class="menuparent"> <td align="left"> <img id="toggle_sub_leftColumn_streams_hideStreams" src="http://thextor.de/readmore-userscript/img/plus_alt_16x16.png" alt="more" title="Weitere Optionen"/> </td> <td align="left"> Streams ausblenden </td> <td align="right"> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Bestimmte oder alle Streams ausblenden"/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Alle Streams ausblenden </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideStreams"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet alle Userstreams und Caster aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Battlefield 3 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_bf3"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Battlefield 3 aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Counterstrike 1.6 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_cs"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Counterstrike 1.6 aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Counterstrike Global Offensive </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_csgo"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Counterstrike Global Offensive aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Counterstrike Source </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_css"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Counterstrike Source aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Defense of the Ancients </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_dota"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Defense of the Ancients aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Defense of the Ancients 2 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_dota2"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Defense of the Ancients 2 aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Diablo 3 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_d3"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Diablo 3 aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Fußball </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_soccer"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Fußball aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Heroes of Newerth </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_hon"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Heroes of Newerth aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Leage of Legends </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_lol"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Leage of Legends aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Quake </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_ql"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Quake aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Starcraft </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_sc"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Starcraft aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Starcraft 2 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_sc2"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Starcraft 2 aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Warcraft 3 </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_wc3"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet Quake aus."/> </td> </tr> <tr class="menufirstchild sub_leftColumn_streams_hideStreams"> <td align="left"> </td> <td align="left"> Sonstiges </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="leftColumn_streams_hideSelectedStreams_else"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Blendet den Rest aus."/> </td> </tr> <tr> <td colspan="4"> &nbsp; </td> </tr> <tr class="headline"> <td colspan="4"> Sonstiges </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Button zum Runterscrollen anzeigen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollDown"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum letzten Post gesprungen."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Button zum Hochscrollen anzeigen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_buttonScrollUp"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Im Forum wird ein Icon eingefügt, beim betätigen wird zum ersten Post gesprungen."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Titel/Tab umsortieren </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_reSortTitle"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Wenn diese Option aktiviert ist, wird der Threadname an den Anfang des Titels gestellt. Offene Tabs können so besser den verschiedenen Threads zugeordnet werden."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Auf Update pr&uuml;fen </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_checkVersion"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Sollte eine neue Version erscheinen, wird der Benutzer darüber informiert. Ein Hinweis erscheint oben in der Userbar."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Last-Page-Pfeil springt zum letzten Post </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_lastPageJumpToLastPost"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Nach dem Bet&auml;tigen des Pfeils (ganz Recht im Forum, hinter den Threads) wird zum aktuellsten Post gesprungen."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Readmore Extrabuttons (IllDepence) </td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_extraButtons"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Mehr Buttons um einen Post im Forum ansehnlicher zu gestalten."/> </td> </tr> <tr class="menuparent"> <td align="left"> </td> <td align="left"> Avataranimationen anhalten</td> <td align="right"> <input type="checkbox" class="userscriptOptions" name="miscellaneous_stopAvatarAnimation"/> </td> <td align="right"> <img src="http://thextor.de/readmore-userscript/img/magnifying_glass_16x16.png" alt="info" title="Die Animation von Avataren stoppen."/> </td> </tr> <tr> <td align="right" colspan="4"> <br/><input style="padding:10px" type="button" id="closeUserscriptOptions" value="Abbrechen / Schlie&szlig;en"/> &nbsp;&nbsp; <input style="padding:10px" type="button" value="Speichern" id="saveUserscriptOptions"/> </td> </tr> </table> </div> </div>');

$('#saveUserscriptOptions').click(function () {
	RMUS.options.saveOptions()
});
$('#openUserscriptOptions').click(function () {
	RMUS.options.loadOptions()
});
$('#openUserscriptOptions').click(function () {
	$('#userscriptOptions').toggle()
});
$('#closeUserscriptOptions').click(function () {
	$('#userscriptOptions').toggle()
});

// Auf- und Einklappen von Unterkategorien
$('#toggle_sub_middleColumn_forum_reloadPosts_readNewPosts').click(function () {
	$('.sub_middleColumn_forum_reloadPosts_readNewPosts').toggle()
	$('.sub_middleColumn_forum_reloadPosts_markNewPosts').css('display', 'none');
	$('.sub_middleColumn_forum_reloadPosts_endlessPage').css('display', 'none');
});
$('#toggle_sub_middleColumn_forum_reloadPosts_endlessPage').click(function () {
	$('.sub_middleColumn_forum_reloadPosts_endlessPage').toggle()
});
$('#toggle_sub_middleColumn_forum_reloadPosts_markNewPosts').click(function () {
	$('.sub_middleColumn_forum_reloadPosts_markNewPosts').toggle()
});
$('#toggle_sub_rightColumn_headlines_hideHeadlines').click(function () {
	$('.sub_rightColumn_headlines_hideHeadlines').toggle()
});
$('#toggle_sub_rightColumn_forum_hideForum').click(function () {
	$('.sub_rightColumn_forum_hideForum').toggle()
	$('.sub_rightColumn_forum_sections').css('display', 'none');
});
$('#toggle_sub_rightColumn_forum_sections').click(function () {
	$('.sub_rightColumn_forum_sections').toggle()
});
$('#toggle_sub_leftColumn_streams_hideStreams').click(function () {
	$('.sub_leftColumn_streams_hideStreams').toggle()
});

// Prüfen ob eine neue Version erschienen ist
if (RMUS.options.options.miscellaneous_checkVersion == 'checked') {
	RMUS.miscellaneous.checkVersion();
}