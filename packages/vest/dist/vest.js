'use strict';(function(m,n){"object"===typeof exports&&"undefined"!==typeof module?module.exports=n():"function"===typeof define&&define.amd?define(n):(m=m||self,m.vest=n())})(this,function(){function m(b,a){return a={exports:{}},b(a,a.exports),a.exports}function n(b){"@babel/helpers - typeof";n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};
return n(b)}function p(){p=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var d=arguments[a],e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b};return p.apply(this,arguments)}function v(b,a){if(null==a||a>b.length)a=b.length;for(var d=0,e=Array(a);d<a;d++)e[d]=b[d];return e}function q(b){l.use().ctx?p(l.use().ctx,this):l.use().ctx=this;p(l.use().ctx,b)}function r(b,a,d,e){p(this,{ctx:b,testFn:e,fieldName:a,statement:d,isWarning:!1,failed:!1})}var w="undefined"!==
typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},F=m(function(b,a){!function(a,e){b.exports=e()}(w,function(){var a=function(a){if("function"==typeof a)try{return b(a())}catch(h){return!1}return b(a)},b=function(a){return!!Array.isArray(a)||0!=a&&!!a};return function(){for(var b=arguments.length,e=Array(b),d=0;d<b;d++)e[d]=arguments[d];return e.some(a)}})}),y=m(function(b,a){!function(a,e){b.exports=e()}(w,function(){function a(){return(a=
Object.assign||function(a){for(var B=1;B<arguments.length;B++){var b,g=arguments[B];for(b in g)Object.prototype.hasOwnProperty.call(g,b)&&(a[b]=g[b])}return a}).apply(this,arguments)}function b(a){return!!Array.isArray(a)}function f(a){return"number"==typeof a}function h(a){return"string"==typeof a}function A(a,b){return b instanceof RegExp?b.test(a):"string"==typeof b&&(new RegExp(b)).test(a)}function l(a,b){return!!(Array.isArray(b)&&["string","number","boolean"].includes(n(a))||"string"==typeof b&&
"string"==typeof a)&&b.includes(a)}function k(a,b){return a===b}function c(a){return!(isNaN(parseFloat(a))||isNaN(Number(a))||!isFinite(a))}function g(a,b){return c(a)&&c(b)&&Number(a)===Number(b)}function C(a){return!a||(c(a)?0===a:Object.prototype.hasOwnProperty.call(a,"length")?0===a.length:"object"!=n(a)||0===Object.keys(a).length)}function D(a,b){return c(a)&&c(b)&&Number(a)>Number(b)}function m(a,b){return c(a)&&c(b)&&Number(a)>=Number(b)}function p(a,b){return c(a)&&c(b)&&Number(a)<Number(b)}
function q(a,b){return c(a)&&c(b)&&Number(a)<=Number(b)}function r(a,b){return a.length===b}function t(a){return!!a}function u(a,b){if("function"==typeof a){for(var g=arguments.length,c=Array(2<g?g-2:0),e=2;e<g;e++)c[e-2]=arguments[e];if(!0!==a.apply(void 0,[b].concat(c)))throw Error("[Enforce]: invalid "+n(b)+" value");}}function v(b){void 0===b&&(b={});var g=a({},z,{},b);if("function"==typeof y.Proxy)return function(a){var b=new Proxy(g,{get:function(g,c){if(w(g,c))return function(){for(var e=arguments.length,
d=Array(e),f=0;f<e;f++)d[f]=arguments[f];return u.apply(void 0,[g[c],a].concat(d)),b}}});return b};var c=Object.keys(g);return function(b){return c.reduce(function(c,e){var d;return a(c,a({},w(g,e)&&((d={})[e]=function(){for(var a=arguments.length,d=Array(a),f=0;f<a;f++)d[f]=arguments[f];return u.apply(void 0,[g[e],b].concat(d)),c},d)))},{})}}var w=function(a,b){return(a=Object.prototype.hasOwnProperty.call(a,b)&&"function"==typeof a[b])||function(a){setTimeout(function(){throw Error("[enforce]: "+
a);})}('Rule "'+b+'" was not found in rules object. Make sure you typed it correctly.'),a},y=Function("return this")();b.negativeForm="isNotArray";f.negativeForm="isNotNumber";h.negativeForm="isNotString";A.negativeForm="notMatches";l.negativeForm="notInside";k.negativeForm="notEquals";c.negativeForm="isNotNumeric";g.negativeForm="numberNotEquals";C.negativeForm="isNotEmpty";D.alias="gt";m.alias="gte";p.alias="lt";q.alias="lte";r.negativeForm="lengthNotEquals";t.negativeForm="isFalsy";var z=function(a){var b,
g=function(b){var g=a[b].negativeForm,c=a[b].alias;g&&(a[g]=function(){return!a[b].apply(a,arguments)});c&&(a[c]=a[b])};for(b in a)g(b);return a}({isArray:b,isNumber:f,isString:h,matches:A,inside:l,equals:k,numberEquals:g,isNumeric:c,isEmpty:C,greaterThan:D,greaterThanOrEquals:m,lessThan:p,lessThanOrEquals:q,longerThan:function(a,b){return a.length>b},longerThanOrEquals:function(a,b){return a.length>=b},shorterThan:function(a,b){return a.length<b},shorterThanOrEquals:function(a,b){return a.length<=
b},lengthEquals:r,isOdd:function(a){return!!c(a)&&0!=a%2},isEven:function(a){return!!c(a)&&0==a%2},isTruthy:t}),x=new v;return x.Enforce=v,x})}),t=Function("return this")(),k=function(b){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Error;return setTimeout(function(){throw new a("[Vest]: ".concat(b));})},u=Symbol["for"]("VEST#".concat("1")),G=function(){for(var b=arguments.length,a=Array(b),d=0;d<b;d++)a[d]=arguments[d];k("Multiple versions of Vest detected: (".concat(a.join(),").\n    Most features should work regularly, but for optimal feature compatibility, you should have all running instances use the same version."))},
z=function(){return t[u]},l={use:z,useContext:function(){return z().ctx},register:function(b){var a=t[u];a?a.VERSION!==b.VERSION&&G(b.VERSION,a.VERSION):t[u]=b;return t[u]}};q.prototype.setCurrentTest=function(b){this.currentTest=b};q.prototype.removeCurrentTest=function(){delete this.currentTest};q.clear=function(){l.use().ctx=null};var x=function(b,a){new q(b);b=a();q.clear();return b},E=function(b,a){var d=l.useContext();a&&(d?(d.exclusive=d.exclusive||{},[].concat(a).forEach(function(a){"string"===
typeof a&&(d.exclusive[b]=d.exclusive[b]||{},d.exclusive[b][a]=!0)})):k("".concat(b," ").concat("hook called outside of a running suite.")))};r.prototype.valueOf=function(){return!0!==this.failed};r.prototype.fail=function(){this.ctx.result.markFailure({fieldName:this.fieldName,statement:this.statement,isWarning:this.isWarning});this.failed=!0;return this};r.prototype.warn=function(){this.isWarning=!0;return this};var H=function(b){var a=b.testFn,d=b.statement,e=b.ctx,f=function(){return e.result.markAsDone(b)},
h=function(a){b.statement="string"===typeof a?a:d;b.fail();f()};e.setCurrentTest(b);try{a.then(f,h)}catch(A){h()}e.removeCurrentTest()},I=function(b){var a=[],d=[],e={},f=!1,h=function(b){a=a.filter(function(a){return a!==b})},l=function(b){return a.length?b?a.some(function(a){return a.fieldName===b}):!!a.length:!1},k=function(a){if(!a)return d.forEach(function(a){return a(c)});if(Array.isArray(e[a]))return e[a].forEach(function(a){return a(c)})},m=function(a){var b={},g;for(g in c.tests)c.tests[g]&&
c.tests[g][a]&&(b[g]=c.tests[g][a]);return b},c={name:b,errorCount:0,warnCount:0,testCount:0,tests:{},skipped:[],tested:[]};Object.defineProperties(c,{hasErrors:{value:function(a){return a?!(!c.tests[a]||!c.tests[a].errorCount):!!c.errorCount},writable:!0,configurable:!0,enumerable:!1},hasWarnings:{value:function(a){return a?!(!c.tests[a]||!c.tests[a].warnCount):!!c.warnCount},writable:!0,configurable:!0,enumerable:!1},getErrors:{value:function(a){return a?c.tests[a].errors?c.tests[a].errors:[]:m("errors")},
writable:!0,configurable:!0,enumerable:!1},getWarnings:{value:function(a){return a?c.tests[a].warnings?c.tests[a].warnings:[]:m("warnings")},writable:!0,configurable:!0,enumerable:!1},done:{value:function(){for(var a=arguments.length,b=Array(a),h=0;h<a;h++)b[h]=arguments[h];h=b.length;a=b[h-1];b=b[h-2];if("function"!==typeof a)return c;if(!f||b&&!l(b))return a(c),c;b?(e[b]=e[b]||[],e[b].push(a)):d.push(a);return c},writable:!0,configurable:!0,enumerable:!1},cancel:{value:function(){c.canceled=!0;
return c},writable:!0,configurable:!0,enumerable:!1}});return{markTestRun:function(a){c.tests[a]||(c.tests[a]={testCount:0,errorCount:0,warnCount:0},c.tested.push(a));c.tests[a].testCount++;c.testCount++},markFailure:function(a){var b=a.fieldName,e=a.statement;if(c.tests[b]){if(a.isWarning){a="warnings";var d="warnCount"}else a="errors",d="errorCount";c.tests[b][a]=c.tests[b][a]||[];e&&c.tests[b][a].push(e);c[d]++;c.tests[b][d]++}},setPending:function(b){f=!0;a.push(b)},addToSkipped:function(a){!c.skipped.includes(a)&&
c.skipped.push(a)},markAsDone:function(a){c.canceled||(a&&(h(a),l(a.fieldName)||k(a.fieldName)),l()||k())},pending:a,output:c}};return l.register({Enforce:y.Enforce,VERSION:"1.0.9",any:F,draft:function(){var b=l.useContext();if(b)return b.result.output;k("draft hook called outside of a running suite.")},enforce:y,only:function(b){return E("only",b)},runWithContext:x,skip:function(b){return E("skip",b)},test:function(b){for(var a,d,e=arguments.length,f=Array(1<e?e-1:0),h=1;h<e;h++)f[h-1]=arguments[h];
"string"===typeof f[0]?(a=f[0],d=f[1]):"function"===typeof f[0]&&(d=f[0]);if("function"===typeof d){a=new r(l.useContext(),b,a,d);d=a.ctx;f=a.fieldName;e=!1;if((h=l.useContext())&&h.exclusive&&(h.exclusive.skip&&h.exclusive.skip[f]||h.exclusive.only&&!h.exclusive.only[f]))d.result.addToSkipped(f);else{d.result.markTestRun(f);a.ctx.setCurrentTest(a);try{var k=a.testFn.apply(a)}catch(J){k=!1}a.ctx.removeCurrentTest();!1===k&&a.fail();k&&"function"===typeof k.then&&(e=!0,a.testFn=k);e&&d.result.setPending(a)}return a}},
validate:function(b,a){if("string"!==typeof b)return k("Suite initialization error. Expected name to be a string.",TypeError);if("function"!==typeof a)return k("Suite initialization error. Expected tests to be a function.",TypeError);var d=I(b);x({result:d},function(){a();var b=d.pending;var f=Array.isArray(b)?v(b):void 0;f||(f="undefined"!==typeof Symbol&&Symbol.iterator in Object(b)?Array.from(b):void 0);if(!f)a:{if(b){if("string"===typeof b){f=v(b,void 0);break a}f=Object.prototype.toString.call(b).slice(8,
-1);"Object"===f&&b.constructor&&(f=b.constructor.name);if("Map"===f||"Set"===f){f=Array.from(f);break a}if("Arguments"===f||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)){f=v(b,void 0);break a}}f=void 0}if(!(b=f))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");b.forEach(H)});return d.output},warn:function(){var b=l.useContext();b?b.currentTest?b.currentTest.warn():k("warn hook called outside of a test callback. It won't have an effect."):
k("warn hook called outside of a running suite.")}})})