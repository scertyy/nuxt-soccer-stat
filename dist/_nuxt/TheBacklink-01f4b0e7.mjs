import{_ as a,j as c,o as _,h as p,e as u,r as d}from"./entry-1ab34492.mjs";const i={props:{to:{type:String,default:""}},setup(o,{expose:s}){s();const t=o,e=c(),r={props:t,router:e,goBack:()=>{if(t.to.length){e.push(t.to);return}e.go(-1)}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},l={class:"back-link__caption"};function f(o,s,t,e,n,r){return _(),p("div",{class:"back-link",onClick:e.goBack},[u("div",l,[d(o.$slots,"default",{},void 0,!0)])])}var g=a(i,[["render",f],["__scopeId","data-v-6d145c7b"]]);export{g as _};