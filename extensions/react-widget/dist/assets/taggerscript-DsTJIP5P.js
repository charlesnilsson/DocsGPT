import{g as c}from"./index-TA8jW4qE.js";function i(r,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}function g(r){return{name:"Tagger Script",contains:[{className:"comment",begin:/\$noop\(/,end:/\)/,contains:[{begin:/\(/,end:/\)/,contains:["self",{begin:/\\./}]}],relevance:10},{className:"keyword",begin:/\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,end:/\(/,excludeEnd:!0},{className:"variable",begin:/%[_a-zA-Z0-9:]*/,end:"%"},{className:"symbol",begin:/\\./}]}}var s=g;const l=c(s),f=i({__proto__:null,default:l},[s]);export{f as t};
