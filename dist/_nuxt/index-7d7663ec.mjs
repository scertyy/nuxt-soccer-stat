var V=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var L=(s,t,e)=>t in s?V(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,h=(s,t)=>{for(var e in t||(t={}))D.call(t,e)&&L(s,e,t[e]);if(x)for(var e of x(t))j.call(t,e)&&L(s,e,t[e]);return s},S=(s,t)=>k(s,I(t));import{_ as w}from"./TheH1-752a42e3.mjs";import{_ as f,q as O,o as l,h as d,s as N,v as q,e as i,x as M,c as $,w as v,t as y,b as g,y as U,F,m as T,z,A as P,d as R,u as A,j as E,B as H,C as G,f as J}from"./entry-1ab34492.mjs";import{a as C,T as K,L as Q,_ as W}from"./TheLeagueMeta-4132b16a.mjs";const X={props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"\u041F\u043E\u0438\u0441\u043A"}},emits:["update:modelValue"],setup(s,{expose:t,emit:e}){t();const a=s,o=O({get:()=>a.modelValue,set:n=>e("update:modelValue",n)}),r={props:a,emits:e,value:o,searchIcon:M};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},Y={class:"the-search"},Z=["placeholder"],ee=["src"];function te(s,t,e,a,o,r){return l(),d("div",Y,[N(i("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),type:"text",class:"the-search__input",placeholder:e.placeholder},null,8,Z),[[q,a.value]]),i("img",{class:"the-search__icon",src:a.searchIcon,alt:""},null,8,ee)])}var ae=f(X,[["render",te],["__scopeId","data-v-40702b7f"]]);const se={props:{league:C},setup(s,{expose:t}){t();const e={League:C};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},ne={class:"league-card__logo"},oe=["src"],re={class:"league-card__info"},ie={class:"league-card__name"};function le(s,t,e,a,o,r){const n=K,u=U;return l(),$(u,{to:{name:"leagues-league_id",params:{league_id:e.league.id}},class:"league-card"},{default:v(()=>[i("div",ne,[i("img",{src:e.league.emblemUrl,alt:""},null,8,oe)]),i("div",re,[i("div",ie,y(e.league.name)+" | "+y(e.league.code),1),g(n,{"league-meta":e.league.leagueMeta},null,8,["league-meta"])])]),_:1},8,["to"])}var ue=f(se,[["render",le],["__scopeId","data-v-2c3afb15"]]);const ce={props:{pages:{type:Number,default:0},currentPage:{type:Number,default:0}},emits:["changePage"],setup(s,{expose:t}){t();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},_e={class:"the-pagination"},de=["onClick"];function ge(s,t,e,a,o,r){return l(),d("div",_e,[(l(!0),d(F,null,T(e.pages,n=>(l(),d("div",{key:n,class:z(["the-pagination__button",{"the-pagination__button_active":e.currentPage===n}]),onClick:u=>s.$emit("changePage",n)},y(n),11,de))),128))])}var pe=f(ce,[["render",ge],["__scopeId","data-v-766aeafb"]]);function he(){return{pagination:P({data:[],page:0,pagesCount:0,itemsForPage:0,useFilters:!1,initPagination(t,e=24,a=1,o=!1){this.data=t,this.itemsForPage=e,this.useFilters=o,this.pagesCount=Math.ceil(this.data.length/this.itemsForPage),this.setPage(a)},setPage(t=1){let e=t;this.page!==e&&(e>this.pagesCount&&(e=this.pagesCount),e<=0&&(e=1),this.page=e)},get shownData(){return this.data.slice(this.getStartIndexByPage(this.page),this.getStartIndexByPage(this.page+1))},getStartIndexByPage(t){return this.itemsForPage*(t-1)}})}}function fe(s,t,e="name"){return t.filter(a=>a[e].toUpperCase().indexOf(s.toUpperCase())+1)}function me(){const{pagination:s}=he();return{filters:P({state:{data:[],filters:{}},initData(e){this.state.data=e},updateListByFilters(e){const a=+e.page?+e.page:1;this.state.filters=S(h({},e),{page:a}),s.initPagination(this.filteredData,24,a)},updatePage(e){s.setPage(e),this.state.filters.page=s.page},get filteredData(){let e=this.state.data;return this.state.filters.search&&(e=fe(this.state.filters.search,e)),e},get list(){return s.shownData},get query(){const e={};for(const[a,o]of Object.entries(this.state.filters))o&&(e[a]=o);return e}}),pagination:s}}const ve=R({setup(s,{expose:t}){t();const{getLeaguesList:e,leagues:a,loading:o}=Q(),{filters:r,pagination:n}=me(),u=A(),p=E(),_=P({search:"",page:null});for(const[m,B]of Object.entries(u.query))_[m]=B;e().then(()=>{r.initData(a.value),r.updateListByFilters(h({},_))}),H(()=>r.query,m=>{p.replace({query:m})},{deep:!0});const b={getLeaguesList:e,leagues:a,loading:o,filters:r,pagination:n,route:u,router:p,filtersLocal:_,updateSearch:()=>{G.do(()=>r.updateListByFilters(h({},_)),400)},ThePagination:pe};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}}),ye={class:"leagues"},Pe={class:"leagues__row"},be=J("\u041B\u0438\u0433\u0438"),xe={class:"leagues__main"},Le={class:"leagues__list"};function Se(s,t,e,a,o,r){const n=w,u=ae,p=ue,_=W;return l(),d("div",ye,[i("div",Pe,[g(n,null,{default:v(()=>[be]),_:1}),g(u,{modelValue:a.filtersLocal.search,"onUpdate:modelValue":[t[0]||(t[0]=c=>a.filtersLocal.search=c),a.updateSearch]},null,8,["modelValue"])]),i("div",xe,[g(_,{loading:a.loading},{default:v(()=>[i("div",Le,[(l(!0),d(F,null,T(a.filters.list,c=>(l(),$(p,{key:c.id,league:c},null,8,["league"]))),128))])]),_:1},8,["loading"]),g(a.ThePagination,{class:"leagues__pagination",pages:a.pagination.pagesCount,"current-page":a.pagination.page,onChangePage:t[1]||(t[1]=c=>a.filters.updatePage(c))},null,8,["pages","current-page"])])])}var Be=f(ve,[["render",Se],["__scopeId","data-v-dbd9ad1c"]]);export{Be as default};