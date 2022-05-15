import{_ as S,o as u,h as i,p,g as M,e as n,b as $,r as O,l as T,i as m,k as f,F as I,m as L,t as v,n as Y,f as k}from"./entry-1ab34492.mjs";const E={},l=a=>(p("data-v-74b44813"),a=a(),M(),a),F={class:"lds-roller"},N=l(()=>n("div",null,null,-1)),x=l(()=>n("div",null,null,-1)),P=l(()=>n("div",null,null,-1)),U=l(()=>n("div",null,null,-1)),A=l(()=>n("div",null,null,-1)),R=l(()=>n("div",null,null,-1)),B=l(()=>n("div",null,null,-1)),C=l(()=>n("div",null,null,-1)),V=[N,x,P,U,A,R,B,C];function H(a,e){return u(),i("div",F,V)}var j=S(E,[["render",H],["__scopeId","data-v-74b44813"]]);const W={props:{loading:{type:Boolean,default:!1}},setup(a,{expose:e}){e();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},q={key:0,class:"preloader"};function z(a,e,t,r,s,g){const o=j;return u(),i("div",null,[t.loading?(u(),i("div",q,[$(o)])):O(a.$slots,"default",{key:1},void 0,!0)])}var se=S(W,[["render",z],["__scopeId","data-v-4f560063"]]);class D{constructor(e={}){this.id=e.id,this.name=e.name||"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",this.shortName=e.shortName||"\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",this.abbr=e.tla||"?",this.crestUrl=e.crestUrl}}class h{constructor(e={}){this.id=e.id,this.startDate=e.startDate,this.endDate=e.endDate,this.currentMatchday=e.currentMatchday||0,this.winner=e.winner?new D(e.winner):new D({})}}const y=["\u044F\u043D\u0432\u0430\u0440\u044F","\u0444\u0435\u0432\u0440\u0430\u043B\u044F","\u043C\u0430\u0440\u0442\u0430","\u0430\u043F\u0440\u0435\u043B\u044F","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F","\u043E\u043A\u0442\u044F\u0431\u0440\u044F","\u043D\u043E\u044F\u0431\u0440\u044F","\u0434\u0435\u043A\u0430\u0431\u0440\u044F"],G=["\u044F\u043D\u0432.","\u0444\u0435\u0432.","\u043C\u0430\u0440.","\u0430\u043F\u0440.","\u043C\u0430\u044F","\u0438\u044E\u043D\u044F","\u0438\u044E\u043B\u044F","\u0430\u0432\u0433.","\u0441\u0435\u043D.","\u043E\u043A\u0442.","\u043D\u043E\u044F\u0431.","\u0434\u0435\u043A."],J=["\u044F\u043D\u0432","\u0444\u0435\u0432","\u043C\u0430\u0440","\u0430\u043F\u0440","\u043C\u0430\u0439","\u0438\u044E\u043D","\u0438\u044E\u043B","\u0430\u0432\u0433","\u0441\u0435\u043D","\u043E\u043A\u0442","\u043D\u043E\u044F\u0431","\u0434\u0435\u043A"];class K{getDdMmYy(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+"."+(t.getMonth()+1).toString().padStart(2,"0")+"."+t.getFullYear().toString().slice(2)}getDdMmYyyy(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+"."+(t.getMonth()+1).toString().padStart(2,"0")+"."+t.getFullYear().toString()}getDdMmm(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+" "+J[t.getMonth()]}getDdMmmm(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+" "+y[t.getMonth()]}getDdMmmmYyyy(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+" "+y[t.getMonth()]+" "+t.getFullYear().toString()}getDdMmmYy(e){const t=new Date(e);return t.getDate().toString().padStart(2,"0")+" "+G[t.getMonth()]+" "+t.getFullYear()}getVerbalDate(e){const t=new Date(e),r=new Date().setHours(0,0,0,0);if(t>r)return"\u0421\u0435\u0433\u043E\u0434\u043D\u044F";const s=(r-t)/(1e3*60*60*24);return s<=1?"\u0412\u0447\u0435\u0440\u0430":s<=2?"\u041F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430":"\u0414\u0430\u0432\u043D\u043E"}getPseudoISOWithoutTime(e){const t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}sortByDates(e){return[...e].sort((r,s)=>new Date(r)>new Date(s)?1:-1)}getHhMm(e){const t=new Date(e);return t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")}}var w=new K;class b{constructor(e={}){this.id=e.id,this.name=e.name,this.plan=e.plan,this.code=e.code||"Unknown league code",this.emblemUrl=e.emblemUrl||T,this.numberOfAvailableSeasons=e.numberOfAvailableSeasons||0,this.area=e.area,this.currentSeason=e.currentSeason?new h(e.currentSeason):new h({}),this.seasons=e.seasons?e.seasons.map(t=>new h(t)):[]}get leagueLevel(){switch(this.plan){case"TIER_ONE":return 1;case"TIER_TWO":return 2;case"TIER_THREE":return 3;case"TIER_FOUR":return 4;default:return"\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E"}}get currentSeasonPeriod(){return`${w.getDdMmYyyy(this.currentSeason.startDate)} - ${w.getDdMmYyyy(this.currentSeason.endDate)}`}get leagueMeta(){return[{label:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043B\u0438\u0433\u0438",value:this.leagueLevel},{label:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0441\u0435\u0437\u043E\u043D\u043E\u0432",value:this.numberOfAvailableSeasons},{label:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0435\u0437\u043E\u043D",value:this.currentSeasonPeriod},{label:"\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u0434\u0435\u043D\u044C",value:this.currentSeason.currentMatchday},{label:"\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u0435\u0437\u043E\u043D\u0430",logo:this.currentSeason.winner.crestUrl,value:this.currentSeason.winner.shortName},{label:"\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",value:`${this.area.name} | ${this.area.countryCode}`}]}}function Q(){const a=m(!1);function e(){a.value=!0}function t(){a.value=!1}return{loading:a,loadingOn:e,loadingOff:t}}function oe(){const{loading:a,loadingOn:e,loadingOff:t}=Q(),r=m([]);function s(c){return e(),f.get("competitions/",c).then(d=>d.data).then(d=>{r.value=d.competitions.map(_=>new b(_))}).finally(()=>{t()})}const g=m({});function o(c,d){return e(),f.get(`competitions/${c}/`,d).then(_=>_.data).then(_=>{g.value=new b(_)}).finally(()=>{t()})}return{getLeaguesList:s,getLeague:o,leagues:r,league:g,loading:a}}const X={props:{leagueMeta:{type:Array,default:()=>[]}},setup(a,{expose:e}){e();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},Z={class:"league-meta"},ee={class:"league-meta__label"},te={class:"league-meta__value"},ae=["src"];function ne(a,e,t,r,s,g){return u(),i("div",Z,[(u(!0),i(I,null,L(t.leagueMeta,(o,c)=>(u(),i("div",{key:c,class:"league-meta__item"},[n("div",ee,v(o.label),1),n("div",te,[o.logo?(u(),i("img",{key:0,class:"league-meta__team-crest",src:o.logo,alt:""},null,8,ae)):Y("",!0),k(" "+v(o.value),1)])]))),128))])}var le=S(X,[["render",ne],["__scopeId","data-v-3bd8285a"]]);export{oe as L,le as T,se as _,b as a};
