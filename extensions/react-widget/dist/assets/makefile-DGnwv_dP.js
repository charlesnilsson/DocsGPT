import{g as f}from"./index-TA8jW4qE.js";function d(e,t){for(var a=0;a<t.length;a++){const n=t[a];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(n,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){const t={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t]},n={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[t]},r={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},i={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},o={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[t]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,t,a,n,r,i,o]}}var s=l;const c=f(s),m=d({__proto__:null,default:c},[s]);export{m};
