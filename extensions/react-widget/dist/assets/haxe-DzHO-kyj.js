import{g as i}from"./index-TA8jW4qE.js";function d(e,a){for(var r=0;r<a.length;r++){const n=a[r];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(n,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function l(e){return{name:"Haxe",aliases:["hx"],keywords:{keyword:"break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while "+"Int Float String Bool Dynamic Void Array ",built_in:"trace this",literal:"true false null _"},contains:[{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"},{className:"subst",begin:"\\$",end:/\W\}/}]},e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@:",end:"$"},{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elseif end error"}},{className:"type",begin:":[ 	]*",end:"[^A-Za-z0-9_ 	\\->]",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:":[ 	]*",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"new *",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"class",beginKeywords:"enum",end:"\\{",contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"abstract",end:"[\\{$]",contains:[{className:"type",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"from +",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"to +",end:"\\W",excludeBegin:!0,excludeEnd:!0},e.TITLE_MODE],keywords:{keyword:"abstract from to"}},{className:"class",begin:"\\b(class|interface) +",end:"[\\{$]",excludeEnd:!0,keywords:"class interface",contains:[{className:"keyword",begin:"\\b(extends|implements) +",keywords:"extends implements",contains:[{className:"type",begin:e.IDENT_RE,relevance:0}]},e.TITLE_MODE]},{className:"function",beginKeywords:"function",end:"\\(",excludeEnd:!0,illegal:"\\S",contains:[e.TITLE_MODE]}],illegal:/<\//}}var c=l;const o=i(c),g=d({__proto__:null,default:o},[c]);export{g as h};
