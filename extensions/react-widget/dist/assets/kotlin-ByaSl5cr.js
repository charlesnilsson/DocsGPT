import{g as m}from"./index-TA8jW4qE.js";function O(e,a){for(var s=0;s<a.length;s++){const t=a[s];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r="[0-9](_*[0-9])*",E=`\\.(${r})`,b="[0-9a-fA-F](_*[0-9a-fA-F])*",f={className:"number",variants:[{begin:`(\\b(${r})((${E})|\\.)?|(${E}))[eE][+-]?(${r})[fFdD]?\\b`},{begin:`\\b(${r})((${E})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${E})[fFdD]?\\b`},{begin:`\\b(${r})[fFdD]\\b`},{begin:`\\b0[xX]((${b})\\.?|(${b})?\\.(${b}))[pP][+-]?(${r})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${b})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function p(e){const a={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},s={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},t={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"},n={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},i={className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},c={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,n]},{begin:"'",end:"'",illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,i,n]}]};n.contains.push(c);const g={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"},N={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[e.inherit(c,{className:"meta-string"})]}]},u=f,o=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),l={variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},d=l;return d.variants[1].contains=[l],l.variants[1].contains=[d],{name:"Kotlin",aliases:["kt","kts"],keywords:a,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,o,s,t,g,N,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:a,relevance:5,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:a,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[l,e.C_LINE_COMMENT_MODE,o],relevance:0},e.C_LINE_COMMENT_MODE,o,g,N,c,e.C_NUMBER_MODE]},o]},{className:"class",beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,excludeBegin:!0,returnEnd:!0},g,N]},c,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},u]}}var _=p;const D=m(_),R=O({__proto__:null,default:D},[_]);export{R as k};
