import{g as u}from"./index-TA8jW4qE.js";function m(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function f(e){return e?typeof e=="string"?e:e.source:null}function d(...e){return e.map(t=>f(t)).join("")}function b(e){const r={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},t=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],n=e.COMMENT(/;/,/$/),o={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},a={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},c={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},i={className:"symbol",begin:/%[si]/},l={className:"attribute",begin:d(r.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:r.unexpectedChars,keywords:t,contains:[l,n,o,a,c,i,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}var s=b;const g=u(s),p=m({__proto__:null,default:g},[s]);export{p as a};
