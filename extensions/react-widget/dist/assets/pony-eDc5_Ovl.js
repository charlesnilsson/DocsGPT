import{g as c}from"./index-TA8jW4qE.js";function _(e,a){for(var r=0;r<a.length;r++){const t=a[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const a={keyword:"actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},r={className:"string",begin:'"""',end:'"""',relevance:10},t={className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE]},n={className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE],relevance:0},o={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},i={begin:e.IDENT_RE+"'",relevance:0};return{name:"Pony",keywords:a,contains:[o,r,t,n,i,{className:"number",begin:"(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",relevance:0},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}}var s=l;const E=c(s),b=_({__proto__:null,default:E},[s]);export{b as p};
