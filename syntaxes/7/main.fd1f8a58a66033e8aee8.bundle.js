(self.webpackChunk_6=self.webpackChunk_6||[]).push([[179],{5557:(e,t,n)=>{"use strict";n.d(t,{B:()=>f});var r=n(5459),s=n(6536),a=n.n(s),c=n(1386),o=n(3027),l=n(7875),i=n(9358),u=n(9727),d=n(6955),m=n.n(d);setTimeout(m().highlightAll);var p=n(7554);const h=[c.Z,o.Z];l.Z.use(h);const f=()=>{const{state:{slides:e}}=(0,p.re)(),[t]=function(){const[e,t]=(0,r.useState)(null);return[e]}();return(0,r.useEffect)((()=>{m().highlightAll(),e.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){n.e(49).then(n.bind(n,9049));const{createContext:e,runInNewContext:t}=await n.e(597).then(n.t.bind(n,6597,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((n=>{n.addEventListener("click",(n=>{const r=n.target.nextSibling;"none"===r.style.display&&(r.style.display="block");const s=e({console:{log:(...e)=>{const t=document.createElement("p");t.innerText=`- ${e.join(" ")}`,r.appendChild(t)}}});t(n.target.dataset.value,s)}))}))}()}),[]),r.createElement(i.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{}},e.map((({slide:e,fusumaProps:{classes:t,sectionTitle:n,background:s}},c)=>r.createElement(u.o,{key:c,className:a()(t,n?"section-title":void 0),"data-hash":`slide-${c+1}`},s&&r.createElement("div",{className:"slide-background",style:s}),r.createElement("div",{className:"slide-internal-box"},r.createElement(e,null))))))}},7554:(e,t,n)=>{"use strict";n.d(t,{BP:()=>p,Gw:()=>i,oA:()=>d,PM:()=>l,$L:()=>u,re:()=>m});var r=n(5459);function s({next:e,slides:t,currentIndex:n,timeline:r,currentFragmentSteps:s}){let a=e,c=0;return"+"===e?(a=Math.min(n+1,t.length-1),c=Array.isArray(r[a])?0:Array.isArray(r[n])?s+1:0):"-"===e&&(a=Math.max(n-1,0),c=Array.isArray(r[a])?r[a].length:Array.isArray(r[n])?s-1:0),Array.isArray(r[n])?c<0?{currentIndex:a,currentFragmentSteps:0}:r[n].length>=c?{currentIndex:n,currentFragmentSteps:c}:{currentIndex:a,currentFragmentSteps:0}:{currentIndex:a,currentFragmentSteps:c}}const a={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==e?e[1]-1:0}(),slides:[],contentsList:[],timeline:[],currentFragmentSteps:0},c=(0,r.createContext)(a),o=(e,t)=>{switch(t.type){case"SET_MODE":return{...e,mode:t.payload};case"ADD_SLIDES":return{...e,...t.payload};case"UPDATE_CURRENT_INDEX":return{...e,...s({next:t.payload,...e})};case"RESET_STATE":return{...e,currentIndex:0,currentFragmentSteps:0};case"UPDATE_CURRENT_FRAGMENT_STEPS":return{...e,currentFragmentSteps:"+"===t.payload?e.currentFragmentSteps+1:e.currentFragmentSteps-1};default:return e}},l=e=>({type:"SET_MODE",payload:e}),i=e=>({type:"ADD_SLIDES",payload:e}),u=e=>({type:"UPDATE_CURRENT_INDEX",payload:e}),d=()=>({type:"RESET_STATE"}),m=()=>(0,r.useContext)(c),p=({children:e})=>{const[t,n]=(0,r.useReducer)(o,a);return r.createElement(c.Provider,{value:{state:t,dispatch:n}},e)}},4987:(e,t,n)=>{"use strict";var r=n(5459),s=n(1141),a=n(7554);var c=n(3669),o=n(5557);const l=(0,r.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,a.re)();return(0,r.useEffect)((()=>{const{swiper:t}=document.querySelector(".swiper-container");t?.slideTo(e)}),[e]),(0,r.useEffect)((()=>{const e=({key:e})=>{"ArrowRight"===e?t((0,a.$L)("+")):"ArrowLeft"===e&&t((0,a.$L)("-"))};return window.innerWidth<=768&&(async()=>{const{swipeEvent:e}=await n.e(519).then(n.bind(n,2519));e((e=>{t((0,a.$L)(e))}))})(),document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),r.createElement(o.B,null)}));function i(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{if("common"===e){if("false"!==new URL(window.location.href).searchParams.get("sidebar")||!1){const{Sidebar:e}=await Promise.all([n.e(337),n.e(119),n.e(163)]).then(n.bind(n,8163));s(e)}}else s(null)})()}),[e]),t}const u=({slidesProps:e})=>{const[t,s]=(0,r.useState)(!1),{state:{mode:o},dispatch:u}=(0,a.re)(),d=function(e){const[t,s]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{if("common"===e)s(l);else if("view"===e){const{default:e}=await n.e(446).then(n.bind(n,3446));s(e)}else if("host"===e){const{default:e}=await Promise.all([n.e(337),n.e(744),n.e(116)]).then(n.bind(n,6116));s(e)}else s(null)})()}),[e]),t}(o),m=i(o);return(0,r.useEffect)((()=>{u((0,a.Gw)(e))}),[e]),(0,r.useEffect)((()=>{"common"!==o&&t&&s(!1)}),[o,t]),r.createElement(r.Fragment,null,m&&r.createElement(r.Fragment,null,r.createElement(m,{isOpen:t,onStateChange:({isOpen:e})=>s(e)}),r.createElement(c.xXU,{className:"btn-sidebar",onClick:()=>s(!0)})),d&&r.createElement(d,null))},d=({list:e})=>()=>r.createElement("div",{className:"toc"},r.createElement("ol",null,e.map((({index:e,title:t})=>r.createElement("li",{key:t},r.createElement("a",{href:`#slide-${e}`,title:t},r.createElement("span",{className:"chapter"},t)))))));function m(e){const t=[],n=[],r=[],s=[],a=[],c={};return e.forEach((({slides:e,fusumaProps:c,backgrounds:o,fragmentSteps:l})=>{t.push(...e),n.push(...c),r.push(...o),s.push(l),l&&a.push(...l)})),n.reduce(((e,{sectionTitle:t},n)=>(t&&e.push({title:t,index:n+1}),e)),c.contentsList=[]),c.slides=t.map(((e,t)=>{const s=n[t],a=0===r[t]?null:r[t].includes("/")?{backgroundImage:`url('${r[t]}')`}:{backgroundColor:r[t]};return s.classes&&(s.classes=Array.isArray(s.classes)?s.classes[0].split(","):s.classes.split(",")),{slide:s.contents?d({list:c.contentsList}):e,fusumaProps:{...s,background:a}}})),c.timeline=a,c}var p,h;!function(e=[]){(0,s.hydrate)(r.createElement(a.BP,null,r.createElement(u,{slidesProps:m(e)})),document.getElementById("root"))}((p=n(2884),{id:(h=p).id,slides:h.keys().sort().map((e=>h(e)))}).slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},7720:(e,t,n)=>{"use strict";n.r(t),n.d(t,{slides:()=>c,backgrounds:()=>o,fragmentSteps:()=>l,fusumaProps:()=>i,default:()=>d});var r=n(5459),s=n(7013);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c=[e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("p",null,"This slide has a speaker node, let's change the mode to Presenter!"))],o=[0],l=[0],i=[{note:"This is a speaker note!!\nThis sentence can be seen when using Presenter Mode.\n\n😍"}],u={};function d({components:e,...t}){return(0,s.kt)("wrapper",a({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This slide has a speaker node, let's change the mode to Presenter!"))}d.isMDXComponent=!0},2884:(e,t,n)=>{var r={"./main.md":7720};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=2884}},function(e){"use strict";var t;t=e.x,e.x=()=>{var n=t();return[337,119,163].map(e.E),n}},[[4026,666,736],[4987,666,736]]]);