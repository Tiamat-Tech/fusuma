(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[179],{6267:(e,l,t)=>{"use strict";t.d(l,{B:()=>h});var n=t(5032),r=t(3606),s=t.n(r),o=t(7077),a=t(1447),u=t(3355),M=t(7257),i=t(9644),c=t(8296),z=t(6552),p=t.n(z);t(2101),t(8262),t(8444),t(1114),t(9390),t(1431);setTimeout(p().highlightAll);var d=t(8850);var m=t(1970);const k=[o.Z,a.Z];(0,d.Q)().has("pagination")?"false"!==(0,d.Q)().get("pagination")&&(k.push(u.Z),t.e(652).then(t.bind(t,4652))):(k.push(u.Z),t.e(652).then(t.bind(t,4652))),M.Z.use(k);const h=()=>{const{state:{slides:e}}=(0,m.re)(),[l]=function(){const[e,l]=(0,n.useState)(null);return[e]}();return(0,n.useEffect)((()=>{p().highlightAll(),e.some((({fusumaProps:e})=>!!e.hasExecutableCode))&&async function(){t.e(868).then(t.bind(t,4868));const{createContext:e,runInNewContext:l}=await t.e(104).then(t.t.bind(t,3104,23));Array.from(document.querySelectorAll(".executable-code-button")).forEach((t=>{t.addEventListener("click",(t=>{const n=t.target.nextSibling;"none"===n.style.display&&(n.style.display="block");const r=e({console:{log:(...e)=>{const l=document.createElement("p");l.innerText=`- ${e.join(" ")}`,n.appendChild(l)}}});l(t.target.dataset.value,r)}))}))}()}),[]),n.createElement(i.t,{effect:null,direction:"horizontal",loop:!1,speed:350,allowTouchMove:!1,slidesPerView:1,hashNavigation:{watchState:!0},pagination:{type:"bullets",clickable:!0}},e.map((({slide:e,fusumaProps:{classes:l,sectionTitle:t,background:r}},o)=>n.createElement(c.o,{key:o,className:s()(l,t?"section-title":void 0),"data-hash":`slide-${o+1}`},r&&n.createElement("div",{className:"slide-background",style:r}),n.createElement("div",{className:"slide-internal-box"},n.createElement(e,null))))))}},1970:(e,l,t)=>{"use strict";t.d(l,{BP:()=>p,Gw:()=>M,oA:()=>c,PM:()=>u,$L:()=>i,re:()=>z});var n=t(5032);function r({next:e,slides:l,currentIndex:t,timeline:n,currentFragmentSteps:r}){let s=e,o=0;return"+"===e?(s=Math.min(t+1,l.length-1),o=Array.isArray(n[s])?0:r+1):"-"===e&&(s=Math.max(t-1,0),o=Array.isArray(n[s])?n[s].length:r-1),Array.isArray(n[t])?o<0?{currentIndex:s,currentFragmentSteps:0}:n[t].length>=o?{currentIndex:t,currentFragmentSteps:o}:{currentIndex:s,currentFragmentSteps:0}:{currentIndex:s,currentFragmentSteps:o}}const s={mode:location.search.includes("presenter=host")?"host":location.search.includes("presenter=view")?"view":"common",currentIndex:function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);return null!==e?e[1]-1:0}(),slides:[],contentsList:[],timeline:[],currentFragmentSteps:0},o=(0,n.createContext)(s),a=(e,l)=>{switch(l.type){case"SET_MODE":return{...e,mode:l.payload};case"ADD_SLIDES":return{...e,...l.payload};case"UPDATE_CURRENT_INDEX":return{...e,...r({next:l.payload,...e})};case"RESET_STATE":return{...e,currentIndex:0,currentFragmentSteps:0};case"UPDATE_CURRENT_FRAGMENT_STEPS":return{...e,currentFragmentSteps:"+"===l.payload?e.currentFragmentSteps+1:e.currentFragmentSteps-1};default:return e}},u=e=>({type:"SET_MODE",payload:e}),M=e=>({type:"ADD_SLIDES",payload:e}),i=e=>({type:"UPDATE_CURRENT_INDEX",payload:e}),c=()=>({type:"RESET_STATE"}),z=()=>(0,n.useContext)(o),p=({children:e})=>{const[l,t]=(0,n.useReducer)(a,s);return n.createElement(o.Provider,{value:{state:l,dispatch:t}},e)}},3781:(e,l,t)=>{"use strict";var n=t(5032),r=t(4998),s=t(1970);var o=t(5716),a=t(6267);const u=(0,n.memo)((()=>{const{state:{currentIndex:e},dispatch:l}=(0,s.re)();(0,n.useEffect)((()=>{const{swiper:l}=document.querySelector(".swiper-container");l?.slideTo(e)}),[e]);const r=({key:e})=>{"ArrowRight"===e?l((0,s.$L)("+")):"ArrowLeft"===e&&l((0,s.$L)("-"))};return(0,n.useEffect)((()=>(window.innerWidth<=768&&(async()=>{const{swipeEvent:e}=await t.e(784).then(t.bind(t,9784));e((e=>{l((0,s.$L)(e))}))})(),document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)})),[]),n.createElement(a.B,null)}));var M=t(8850);const i=({slidesProps:e})=>{const[l,r]=(0,n.useState)(!1),{state:{mode:a},dispatch:i}=(0,s.re)(),c=function(e){const[l,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{if("common"===e)r(u);else if("view"===e){const{default:e}=await t.e(103).then(t.bind(t,5103));r(e)}else if("host"===e){const{default:e}=await Promise.all([t.e(426),t.e(399),t.e(91)]).then(t.bind(t,91));r(e)}else r(null)})()}),[e]),l}(a),z=function(e){const[l,r]=(0,n.useState)(null);return(0,n.useEffect)((()=>{(async()=>{if("common"===e){if("false"!==(0,M.Q)().get("sidebar")){const{Sidebar:e}=await Promise.all([t.e(426),t.e(860),t.e(925)]).then(t.bind(t,3925));r(e)}}else r(null)})()}),[e]),l}(a);return(0,n.useEffect)((()=>{i((0,s.Gw)(e))}),[e]),(0,n.useEffect)((()=>{"common"!==a&&l&&r(!1)}),[a,l]),n.createElement(n.Fragment,null,z&&n.createElement(n.Fragment,null,n.createElement(z,{isOpen:l,onStateChange:({isOpen:e})=>r(e)}),n.createElement(o.xXU,{className:"btn-sidebar",onClick:()=>r(!0)})),c&&n.createElement(c,null))},c=({list:e})=>()=>n.createElement("div",{className:"toc"},n.createElement("ol",null,e.map((({index:e,title:l})=>n.createElement("li",{key:l},n.createElement("a",{href:`#slide-${e}`,title:l},n.createElement("span",{className:"chapter"},l)))))));function z(e){const l=[],t=[],n=[],r=[],s=[],o={};return e.forEach((({slides:e,fusumaProps:o,backgrounds:a,fragmentSteps:u})=>{l.push(...e),t.push(...o),n.push(...a),r.push(u),u&&s.push(...u)})),t.reduce(((e,{sectionTitle:l},t)=>(l&&e.push({title:l,index:t+1}),e)),o.contentsList=[]),o.slides=l.map(((e,l)=>{const r=t[l],s=0===n[l]?null:n[l].includes("/")?{backgroundImage:`url('${n[l]}')`}:{backgroundColor:n[l]};return r.classes&&(r.classes=Array.isArray(r.classes)?r.classes[0].split(","):r.classes.split(",")),{slide:r.contents?c({list:o.contentsList}):e,fusumaProps:{...r,background:s}}})),o.timeline=s,o}var p,d;!function(e=[]){(0,r.hydrate)(n.createElement(s.BP,null,n.createElement(i,{slidesProps:z(e)})),document.getElementById("root"))}((p=t(3447),{id:(d=p).id,slides:d.keys().sort().map((e=>d(e)))}).slides),document.addEventListener("click",(e=>{if("A"===e.target.tagName){if(e.target.host===location.host||""===e.target.href)return;e.preventDefault(),window.open(e.target.href,"_blank")}}))},3179:(e,l,t)=>{if("/Users/hiroppy/Programming/fusuma/samples/debug/style.css".match(/\+*.css$/i))try{t(5031)}catch(e){console.error(e)}},8850:(e,l,t)=>{"use strict";function n(){return new URL(window.location.href).searchParams}t.d(l,{Q:()=>n})},8604:()=>{console.log("start")},743:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h1",null,"debug"))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"debug"))}c.isMDXComponent=!0},6135:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),(0,r.kt)("br",null),(0,r.kt)("h1",null,"1")),e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h1",null,"2")),e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h1",null,"3"))],a=[0,0,0],u=[0,0,0],M=[{sectionTitle:"many pages"},{},{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"https://github.com/hiroppy/fusuma/issues/110",rel:"noopener","aria-label":"issue110"},"https://github.com/hiroppy/fusuma/issues/110"),(0,r.kt)("br",null),(0,r.kt)("h1",null,"1"),(0,r.kt)("hr",null),(0,r.kt)("h1",null,"2"),(0,r.kt)("hr",null),(0,r.kt)("h1",null,"3"))}c.isMDXComponent=!0},9084:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h2",null,"file-loader"),(0,r.kt)("div",{className:"grid"},(0,r.kt)("div",{className:"column"},(0,r.kt)("h3",null,"markdown"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2600),style:{width:"150px",height:"150px"},alt:"js"}))),(0,r.kt)("div",{className:"column"},(0,r.kt)("h3",null,"html"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2600),alt:"js",style:{width:150,height:150}})))),(0,r.kt)("h3",null,"font"),(0,r.kt)("p",{className:"file-loader-font"},"font: Stratum"))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"file-loader"),(0,r.kt)("h3",null,"markdown"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2600),style:{width:"150px",height:"150px"},alt:"js"})),(0,r.kt)("h3",null,"html"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2600),alt:"js",style:{width:150,height:150}})),(0,r.kt)("h3",null,"font"),(0,r.kt)("p",{className:"file-loader-font"},"font: Stratum"))}c.isMDXComponent=!0},9123:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h2",null,"Unicode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma/issues/72"},"issue")),(0,r.kt)("p",null,"Here come the evil byte: ->\u2028<-"))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Unicode"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma/issues/72"},"issue")),(0,r.kt)("p",null,"Here come the evil byte: ->\u2028<-"))}c.isMDXComponent=!0},4978:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"a\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789\n")),(0,r.kt)("pre",{"data-line":"4,7"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'line="4,7"',line:'"4,7"'},'#include <iostream>\nusing namespace std;\n\nint main(){\n   for(int i=1; i<=6; i++){\n      cout<<"i is: "<<i<<endl;\n   }\n   return 0;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"test ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," test"))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"a\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'line="4,7"',line:'"4,7"'},'#include <iostream>\nusing namespace std;\n\nint main(){\n   for(int i=1; i<=6; i++){\n      cout<<"i is: "<<i<<endl;\n   }\n   return 0;\n}\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"test ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," test"))}c.isMDXComponent=!0},9602:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma/issues/223"},"issue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(bool(4 == 4))\n")))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hiroppy/fusuma/issues/223"},"issue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(bool(4 == 4))\n")))}c.isMDXComponent=!0},1520:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h2",null,"QR Code"),(0,r.kt)("h3",null,"Specified URL"),(0,r.kt)("br",null),(0,r.kt)("svg",{className:"qr",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"74px",height:"74px",viewBox:"0 0 74 74",preserveAspectRatio:"xMinYMin meet"},(0,r.kt)("rect",{width:"100%",height:"100%",fill:"white",cx:"0",cy:"0"}),(0,r.kt)("path",{d:"M8,8l2,0 0,2 -2,0 0,-2z M10,8l2,0 0,2 -2,0 0,-2z M12,8l2,0 0,2 -2,0 0,-2z M14,8l2,0 0,2 -2,0 0,-2z M16,8l2,0 0,2 -2,0 0,-2z M18,8l2,0 0,2 -2,0 0,-2z M20,8l2,0 0,2 -2,0 0,-2z M24,8l2,0 0,2 -2,0 0,-2z M26,8l2,0 0,2 -2,0 0,-2z M38,8l2,0 0,2 -2,0 0,-2z M40,8l2,0 0,2 -2,0 0,-2z M42,8l2,0 0,2 -2,0 0,-2z M44,8l2,0 0,2 -2,0 0,-2z M46,8l2,0 0,2 -2,0 0,-2z M48,8l2,0 0,2 -2,0 0,-2z M52,8l2,0 0,2 -2,0 0,-2z M54,8l2,0 0,2 -2,0 0,-2z M56,8l2,0 0,2 -2,0 0,-2z M58,8l2,0 0,2 -2,0 0,-2z M60,8l2,0 0,2 -2,0 0,-2z M62,8l2,0 0,2 -2,0 0,-2z M64,8l2,0 0,2 -2,0 0,-2z M8,10l2,0 0,2 -2,0 0,-2z M20,10l2,0 0,2 -2,0 0,-2z M36,10l2,0 0,2 -2,0 0,-2z M38,10l2,0 0,2 -2,0 0,-2z M44,10l2,0 0,2 -2,0 0,-2z M48,10l2,0 0,2 -2,0 0,-2z M52,10l2,0 0,2 -2,0 0,-2z M64,10l2,0 0,2 -2,0 0,-2z M8,12l2,0 0,2 -2,0 0,-2z M12,12l2,0 0,2 -2,0 0,-2z M14,12l2,0 0,2 -2,0 0,-2z M16,12l2,0 0,2 -2,0 0,-2z M20,12l2,0 0,2 -2,0 0,-2z M24,12l2,0 0,2 -2,0 0,-2z M30,12l2,0 0,2 -2,0 0,-2z M32,12l2,0 0,2 -2,0 0,-2z M34,12l2,0 0,2 -2,0 0,-2z M36,12l2,0 0,2 -2,0 0,-2z M38,12l2,0 0,2 -2,0 0,-2z M44,12l2,0 0,2 -2,0 0,-2z M52,12l2,0 0,2 -2,0 0,-2z M56,12l2,0 0,2 -2,0 0,-2z M58,12l2,0 0,2 -2,0 0,-2z M60,12l2,0 0,2 -2,0 0,-2z M64,12l2,0 0,2 -2,0 0,-2z M8,14l2,0 0,2 -2,0 0,-2z M12,14l2,0 0,2 -2,0 0,-2z M14,14l2,0 0,2 -2,0 0,-2z M16,14l2,0 0,2 -2,0 0,-2z M20,14l2,0 0,2 -2,0 0,-2z M24,14l2,0 0,2 -2,0 0,-2z M26,14l2,0 0,2 -2,0 0,-2z M30,14l2,0 0,2 -2,0 0,-2z M40,14l2,0 0,2 -2,0 0,-2z M42,14l2,0 0,2 -2,0 0,-2z M48,14l2,0 0,2 -2,0 0,-2z M52,14l2,0 0,2 -2,0 0,-2z M56,14l2,0 0,2 -2,0 0,-2z M58,14l2,0 0,2 -2,0 0,-2z M60,14l2,0 0,2 -2,0 0,-2z M64,14l2,0 0,2 -2,0 0,-2z M8,16l2,0 0,2 -2,0 0,-2z M12,16l2,0 0,2 -2,0 0,-2z M14,16l2,0 0,2 -2,0 0,-2z M16,16l2,0 0,2 -2,0 0,-2z M20,16l2,0 0,2 -2,0 0,-2z M24,16l2,0 0,2 -2,0 0,-2z M26,16l2,0 0,2 -2,0 0,-2z M28,16l2,0 0,2 -2,0 0,-2z M30,16l2,0 0,2 -2,0 0,-2z M34,16l2,0 0,2 -2,0 0,-2z M42,16l2,0 0,2 -2,0 0,-2z M44,16l2,0 0,2 -2,0 0,-2z M46,16l2,0 0,2 -2,0 0,-2z M52,16l2,0 0,2 -2,0 0,-2z M56,16l2,0 0,2 -2,0 0,-2z M58,16l2,0 0,2 -2,0 0,-2z M60,16l2,0 0,2 -2,0 0,-2z M64,16l2,0 0,2 -2,0 0,-2z M8,18l2,0 0,2 -2,0 0,-2z M20,18l2,0 0,2 -2,0 0,-2z M26,18l2,0 0,2 -2,0 0,-2z M32,18l2,0 0,2 -2,0 0,-2z M36,18l2,0 0,2 -2,0 0,-2z M46,18l2,0 0,2 -2,0 0,-2z M48,18l2,0 0,2 -2,0 0,-2z M52,18l2,0 0,2 -2,0 0,-2z M64,18l2,0 0,2 -2,0 0,-2z M8,20l2,0 0,2 -2,0 0,-2z M10,20l2,0 0,2 -2,0 0,-2z M12,20l2,0 0,2 -2,0 0,-2z M14,20l2,0 0,2 -2,0 0,-2z M16,20l2,0 0,2 -2,0 0,-2z M18,20l2,0 0,2 -2,0 0,-2z M20,20l2,0 0,2 -2,0 0,-2z M24,20l2,0 0,2 -2,0 0,-2z M28,20l2,0 0,2 -2,0 0,-2z M32,20l2,0 0,2 -2,0 0,-2z M36,20l2,0 0,2 -2,0 0,-2z M40,20l2,0 0,2 -2,0 0,-2z M44,20l2,0 0,2 -2,0 0,-2z M48,20l2,0 0,2 -2,0 0,-2z M52,20l2,0 0,2 -2,0 0,-2z M54,20l2,0 0,2 -2,0 0,-2z M56,20l2,0 0,2 -2,0 0,-2z M58,20l2,0 0,2 -2,0 0,-2z M60,20l2,0 0,2 -2,0 0,-2z M62,20l2,0 0,2 -2,0 0,-2z M64,20l2,0 0,2 -2,0 0,-2z M26,22l2,0 0,2 -2,0 0,-2z M30,22l2,0 0,2 -2,0 0,-2z M34,22l2,0 0,2 -2,0 0,-2z M36,22l2,0 0,2 -2,0 0,-2z M42,22l2,0 0,2 -2,0 0,-2z M48,22l2,0 0,2 -2,0 0,-2z M8,24l2,0 0,2 -2,0 0,-2z M10,24l2,0 0,2 -2,0 0,-2z M12,24l2,0 0,2 -2,0 0,-2z M14,24l2,0 0,2 -2,0 0,-2z M20,24l2,0 0,2 -2,0 0,-2z M24,24l2,0 0,2 -2,0 0,-2z M34,24l2,0 0,2 -2,0 0,-2z M36,24l2,0 0,2 -2,0 0,-2z M40,24l2,0 0,2 -2,0 0,-2z M42,24l2,0 0,2 -2,0 0,-2z M44,24l2,0 0,2 -2,0 0,-2z M50,24l2,0 0,2 -2,0 0,-2z M56,24l2,0 0,2 -2,0 0,-2z M58,24l2,0 0,2 -2,0 0,-2z M60,24l2,0 0,2 -2,0 0,-2z M64,24l2,0 0,2 -2,0 0,-2z M10,26l2,0 0,2 -2,0 0,-2z M12,26l2,0 0,2 -2,0 0,-2z M14,26l2,0 0,2 -2,0 0,-2z M16,26l2,0 0,2 -2,0 0,-2z M18,26l2,0 0,2 -2,0 0,-2z M22,26l2,0 0,2 -2,0 0,-2z M24,26l2,0 0,2 -2,0 0,-2z M26,26l2,0 0,2 -2,0 0,-2z M38,26l2,0 0,2 -2,0 0,-2z M40,26l2,0 0,2 -2,0 0,-2z M46,26l2,0 0,2 -2,0 0,-2z M48,26l2,0 0,2 -2,0 0,-2z M52,26l2,0 0,2 -2,0 0,-2z M54,26l2,0 0,2 -2,0 0,-2z M56,26l2,0 0,2 -2,0 0,-2z M64,26l2,0 0,2 -2,0 0,-2z M16,28l2,0 0,2 -2,0 0,-2z M18,28l2,0 0,2 -2,0 0,-2z M20,28l2,0 0,2 -2,0 0,-2z M36,28l2,0 0,2 -2,0 0,-2z M38,28l2,0 0,2 -2,0 0,-2z M42,28l2,0 0,2 -2,0 0,-2z M48,28l2,0 0,2 -2,0 0,-2z M50,28l2,0 0,2 -2,0 0,-2z M54,28l2,0 0,2 -2,0 0,-2z M60,28l2,0 0,2 -2,0 0,-2z M62,28l2,0 0,2 -2,0 0,-2z M16,30l2,0 0,2 -2,0 0,-2z M18,30l2,0 0,2 -2,0 0,-2z M22,30l2,0 0,2 -2,0 0,-2z M24,30l2,0 0,2 -2,0 0,-2z M30,30l2,0 0,2 -2,0 0,-2z M32,30l2,0 0,2 -2,0 0,-2z M34,30l2,0 0,2 -2,0 0,-2z M36,30l2,0 0,2 -2,0 0,-2z M38,30l2,0 0,2 -2,0 0,-2z M46,30l2,0 0,2 -2,0 0,-2z M50,30l2,0 0,2 -2,0 0,-2z M52,30l2,0 0,2 -2,0 0,-2z M56,30l2,0 0,2 -2,0 0,-2z M64,30l2,0 0,2 -2,0 0,-2z M8,32l2,0 0,2 -2,0 0,-2z M10,32l2,0 0,2 -2,0 0,-2z M14,32l2,0 0,2 -2,0 0,-2z M18,32l2,0 0,2 -2,0 0,-2z M20,32l2,0 0,2 -2,0 0,-2z M22,32l2,0 0,2 -2,0 0,-2z M24,32l2,0 0,2 -2,0 0,-2z M26,32l2,0 0,2 -2,0 0,-2z M30,32l2,0 0,2 -2,0 0,-2z M42,32l2,0 0,2 -2,0 0,-2z M46,32l2,0 0,2 -2,0 0,-2z M58,32l2,0 0,2 -2,0 0,-2z M60,32l2,0 0,2 -2,0 0,-2z M8,34l2,0 0,2 -2,0 0,-2z M16,34l2,0 0,2 -2,0 0,-2z M18,34l2,0 0,2 -2,0 0,-2z M26,34l2,0 0,2 -2,0 0,-2z M28,34l2,0 0,2 -2,0 0,-2z M30,34l2,0 0,2 -2,0 0,-2z M34,34l2,0 0,2 -2,0 0,-2z M44,34l2,0 0,2 -2,0 0,-2z M46,34l2,0 0,2 -2,0 0,-2z M52,34l2,0 0,2 -2,0 0,-2z M60,34l2,0 0,2 -2,0 0,-2z M62,34l2,0 0,2 -2,0 0,-2z M64,34l2,0 0,2 -2,0 0,-2z M8,36l2,0 0,2 -2,0 0,-2z M10,36l2,0 0,2 -2,0 0,-2z M14,36l2,0 0,2 -2,0 0,-2z M20,36l2,0 0,2 -2,0 0,-2z M32,36l2,0 0,2 -2,0 0,-2z M36,36l2,0 0,2 -2,0 0,-2z M46,36l2,0 0,2 -2,0 0,-2z M48,36l2,0 0,2 -2,0 0,-2z M52,36l2,0 0,2 -2,0 0,-2z M60,36l2,0 0,2 -2,0 0,-2z M62,36l2,0 0,2 -2,0 0,-2z M64,36l2,0 0,2 -2,0 0,-2z M18,38l2,0 0,2 -2,0 0,-2z M24,38l2,0 0,2 -2,0 0,-2z M26,38l2,0 0,2 -2,0 0,-2z M32,38l2,0 0,2 -2,0 0,-2z M34,38l2,0 0,2 -2,0 0,-2z M38,38l2,0 0,2 -2,0 0,-2z M46,38l2,0 0,2 -2,0 0,-2z M48,38l2,0 0,2 -2,0 0,-2z M50,38l2,0 0,2 -2,0 0,-2z M52,38l2,0 0,2 -2,0 0,-2z M54,38l2,0 0,2 -2,0 0,-2z M56,38l2,0 0,2 -2,0 0,-2z M62,38l2,0 0,2 -2,0 0,-2z M8,40l2,0 0,2 -2,0 0,-2z M10,40l2,0 0,2 -2,0 0,-2z M12,40l2,0 0,2 -2,0 0,-2z M20,40l2,0 0,2 -2,0 0,-2z M22,40l2,0 0,2 -2,0 0,-2z M26,40l2,0 0,2 -2,0 0,-2z M28,40l2,0 0,2 -2,0 0,-2z M30,40l2,0 0,2 -2,0 0,-2z M46,40l2,0 0,2 -2,0 0,-2z M48,40l2,0 0,2 -2,0 0,-2z M56,40l2,0 0,2 -2,0 0,-2z M58,40l2,0 0,2 -2,0 0,-2z M62,40l2,0 0,2 -2,0 0,-2z M10,42l2,0 0,2 -2,0 0,-2z M12,42l2,0 0,2 -2,0 0,-2z M16,42l2,0 0,2 -2,0 0,-2z M22,42l2,0 0,2 -2,0 0,-2z M24,42l2,0 0,2 -2,0 0,-2z M26,42l2,0 0,2 -2,0 0,-2z M32,42l2,0 0,2 -2,0 0,-2z M34,42l2,0 0,2 -2,0 0,-2z M38,42l2,0 0,2 -2,0 0,-2z M42,42l2,0 0,2 -2,0 0,-2z M54,42l2,0 0,2 -2,0 0,-2z M58,42l2,0 0,2 -2,0 0,-2z M60,42l2,0 0,2 -2,0 0,-2z M62,42l2,0 0,2 -2,0 0,-2z M8,44l2,0 0,2 -2,0 0,-2z M18,44l2,0 0,2 -2,0 0,-2z M20,44l2,0 0,2 -2,0 0,-2z M22,44l2,0 0,2 -2,0 0,-2z M26,44l2,0 0,2 -2,0 0,-2z M28,44l2,0 0,2 -2,0 0,-2z M30,44l2,0 0,2 -2,0 0,-2z M32,44l2,0 0,2 -2,0 0,-2z M38,44l2,0 0,2 -2,0 0,-2z M40,44l2,0 0,2 -2,0 0,-2z M42,44l2,0 0,2 -2,0 0,-2z M48,44l2,0 0,2 -2,0 0,-2z M52,44l2,0 0,2 -2,0 0,-2z M54,44l2,0 0,2 -2,0 0,-2z M56,44l2,0 0,2 -2,0 0,-2z M60,44l2,0 0,2 -2,0 0,-2z M18,46l2,0 0,2 -2,0 0,-2z M22,46l2,0 0,2 -2,0 0,-2z M24,46l2,0 0,2 -2,0 0,-2z M32,46l2,0 0,2 -2,0 0,-2z M40,46l2,0 0,2 -2,0 0,-2z M42,46l2,0 0,2 -2,0 0,-2z M44,46l2,0 0,2 -2,0 0,-2z M52,46l2,0 0,2 -2,0 0,-2z M54,46l2,0 0,2 -2,0 0,-2z M56,46l2,0 0,2 -2,0 0,-2z M60,46l2,0 0,2 -2,0 0,-2z M10,48l2,0 0,2 -2,0 0,-2z M14,48l2,0 0,2 -2,0 0,-2z M20,48l2,0 0,2 -2,0 0,-2z M22,48l2,0 0,2 -2,0 0,-2z M28,48l2,0 0,2 -2,0 0,-2z M30,48l2,0 0,2 -2,0 0,-2z M32,48l2,0 0,2 -2,0 0,-2z M34,48l2,0 0,2 -2,0 0,-2z M38,48l2,0 0,2 -2,0 0,-2z M40,48l2,0 0,2 -2,0 0,-2z M42,48l2,0 0,2 -2,0 0,-2z M44,48l2,0 0,2 -2,0 0,-2z M48,48l2,0 0,2 -2,0 0,-2z M50,48l2,0 0,2 -2,0 0,-2z M52,48l2,0 0,2 -2,0 0,-2z M54,48l2,0 0,2 -2,0 0,-2z M56,48l2,0 0,2 -2,0 0,-2z M58,48l2,0 0,2 -2,0 0,-2z M60,48l2,0 0,2 -2,0 0,-2z M24,50l2,0 0,2 -2,0 0,-2z M28,50l2,0 0,2 -2,0 0,-2z M32,50l2,0 0,2 -2,0 0,-2z M34,50l2,0 0,2 -2,0 0,-2z M36,50l2,0 0,2 -2,0 0,-2z M40,50l2,0 0,2 -2,0 0,-2z M44,50l2,0 0,2 -2,0 0,-2z M48,50l2,0 0,2 -2,0 0,-2z M56,50l2,0 0,2 -2,0 0,-2z M58,50l2,0 0,2 -2,0 0,-2z M60,50l2,0 0,2 -2,0 0,-2z M62,50l2,0 0,2 -2,0 0,-2z M64,50l2,0 0,2 -2,0 0,-2z M8,52l2,0 0,2 -2,0 0,-2z M10,52l2,0 0,2 -2,0 0,-2z M12,52l2,0 0,2 -2,0 0,-2z M14,52l2,0 0,2 -2,0 0,-2z M16,52l2,0 0,2 -2,0 0,-2z M18,52l2,0 0,2 -2,0 0,-2z M20,52l2,0 0,2 -2,0 0,-2z M26,52l2,0 0,2 -2,0 0,-2z M28,52l2,0 0,2 -2,0 0,-2z M30,52l2,0 0,2 -2,0 0,-2z M32,52l2,0 0,2 -2,0 0,-2z M34,52l2,0 0,2 -2,0 0,-2z M40,52l2,0 0,2 -2,0 0,-2z M44,52l2,0 0,2 -2,0 0,-2z M46,52l2,0 0,2 -2,0 0,-2z M48,52l2,0 0,2 -2,0 0,-2z M52,52l2,0 0,2 -2,0 0,-2z M56,52l2,0 0,2 -2,0 0,-2z M58,52l2,0 0,2 -2,0 0,-2z M62,52l2,0 0,2 -2,0 0,-2z M8,54l2,0 0,2 -2,0 0,-2z M20,54l2,0 0,2 -2,0 0,-2z M26,54l2,0 0,2 -2,0 0,-2z M28,54l2,0 0,2 -2,0 0,-2z M48,54l2,0 0,2 -2,0 0,-2z M56,54l2,0 0,2 -2,0 0,-2z M58,54l2,0 0,2 -2,0 0,-2z M62,54l2,0 0,2 -2,0 0,-2z M64,54l2,0 0,2 -2,0 0,-2z M8,56l2,0 0,2 -2,0 0,-2z M12,56l2,0 0,2 -2,0 0,-2z M14,56l2,0 0,2 -2,0 0,-2z M16,56l2,0 0,2 -2,0 0,-2z M20,56l2,0 0,2 -2,0 0,-2z M26,56l2,0 0,2 -2,0 0,-2z M32,56l2,0 0,2 -2,0 0,-2z M36,56l2,0 0,2 -2,0 0,-2z M38,56l2,0 0,2 -2,0 0,-2z M40,56l2,0 0,2 -2,0 0,-2z M42,56l2,0 0,2 -2,0 0,-2z M48,56l2,0 0,2 -2,0 0,-2z M50,56l2,0 0,2 -2,0 0,-2z M52,56l2,0 0,2 -2,0 0,-2z M54,56l2,0 0,2 -2,0 0,-2z M56,56l2,0 0,2 -2,0 0,-2z M60,56l2,0 0,2 -2,0 0,-2z M62,56l2,0 0,2 -2,0 0,-2z M8,58l2,0 0,2 -2,0 0,-2z M12,58l2,0 0,2 -2,0 0,-2z M14,58l2,0 0,2 -2,0 0,-2z M16,58l2,0 0,2 -2,0 0,-2z M20,58l2,0 0,2 -2,0 0,-2z M24,58l2,0 0,2 -2,0 0,-2z M26,58l2,0 0,2 -2,0 0,-2z M28,58l2,0 0,2 -2,0 0,-2z M30,58l2,0 0,2 -2,0 0,-2z M32,58l2,0 0,2 -2,0 0,-2z M36,58l2,0 0,2 -2,0 0,-2z M38,58l2,0 0,2 -2,0 0,-2z M40,58l2,0 0,2 -2,0 0,-2z M42,58l2,0 0,2 -2,0 0,-2z M44,58l2,0 0,2 -2,0 0,-2z M46,58l2,0 0,2 -2,0 0,-2z M50,58l2,0 0,2 -2,0 0,-2z M54,58l2,0 0,2 -2,0 0,-2z M56,58l2,0 0,2 -2,0 0,-2z M58,58l2,0 0,2 -2,0 0,-2z M64,58l2,0 0,2 -2,0 0,-2z M8,60l2,0 0,2 -2,0 0,-2z M12,60l2,0 0,2 -2,0 0,-2z M14,60l2,0 0,2 -2,0 0,-2z M16,60l2,0 0,2 -2,0 0,-2z M20,60l2,0 0,2 -2,0 0,-2z M24,60l2,0 0,2 -2,0 0,-2z M26,60l2,0 0,2 -2,0 0,-2z M30,60l2,0 0,2 -2,0 0,-2z M34,60l2,0 0,2 -2,0 0,-2z M44,60l2,0 0,2 -2,0 0,-2z M48,60l2,0 0,2 -2,0 0,-2z M54,60l2,0 0,2 -2,0 0,-2z M60,60l2,0 0,2 -2,0 0,-2z M64,60l2,0 0,2 -2,0 0,-2z M8,62l2,0 0,2 -2,0 0,-2z M20,62l2,0 0,2 -2,0 0,-2z M24,62l2,0 0,2 -2,0 0,-2z M30,62l2,0 0,2 -2,0 0,-2z M36,62l2,0 0,2 -2,0 0,-2z M48,62l2,0 0,2 -2,0 0,-2z M50,62l2,0 0,2 -2,0 0,-2z M54,62l2,0 0,2 -2,0 0,-2z M58,62l2,0 0,2 -2,0 0,-2z M62,62l2,0 0,2 -2,0 0,-2z M8,64l2,0 0,2 -2,0 0,-2z M10,64l2,0 0,2 -2,0 0,-2z M12,64l2,0 0,2 -2,0 0,-2z M14,64l2,0 0,2 -2,0 0,-2z M16,64l2,0 0,2 -2,0 0,-2z M18,64l2,0 0,2 -2,0 0,-2z M20,64l2,0 0,2 -2,0 0,-2z M24,64l2,0 0,2 -2,0 0,-2z M26,64l2,0 0,2 -2,0 0,-2z M28,64l2,0 0,2 -2,0 0,-2z M32,64l2,0 0,2 -2,0 0,-2z M36,64l2,0 0,2 -2,0 0,-2z M40,64l2,0 0,2 -2,0 0,-2z M44,64l2,0 0,2 -2,0 0,-2z M46,64l2,0 0,2 -2,0 0,-2z M48,64l2,0 0,2 -2,0 0,-2z M50,64l2,0 0,2 -2,0 0,-2z M52,64l2,0 0,2 -2,0 0,-2z M62,64l2,0 0,2 -2,0 0,-2z ",stroke:"transparent",fill:"black"})))],a=[0],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"QR Code"),(0,r.kt)("h3",null,"Specified URL"),(0,r.kt)("br",null))}c.isMDXComponent=!0},1489:(e,l,t)=>{"use strict";t.r(l),t.d(l,{backgrounds:()=>M,default:()=>p,fragmentSteps:()=>i,fusumaProps:()=>c,slides:()=>u});var n=t(5032),r=t(3077),s=(t(6267),t(1970));const o=({children:e,id:l})=>{const[t,r]=(0,n.useState)(0),{state:{currentIndex:o,timeline:a,currentFragmentSteps:u}}=(0,s.re)();return(0,n.useEffect)((()=>{Array.isArray(a[o])&&a[o][0]===l&&r(u)}),[o,u]),n.Children.map(e,((e,l)=>n.cloneElement(e,{style:{visibility:l>=t?"hidden":"initial"}})))};function a(){return(a=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const u=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("div",{className:"outer"},(0,r.kt)("p",null,"outer"),(0,r.kt)("div",{className:"middle"},(0,r.kt)("p",null,"middle"),(0,r.kt)("div",{className:"inner"},(0,r.kt)("p",null,"inner")),(0,r.kt)("p",null,"middle")),(0,r.kt)("p",null,"outer"))),e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h3",null,"Fragments"),(0,r.kt)(o,{id:.6214434322022919},(0,r.kt)("p",null,"1"),(0,r.kt)("p",null,"2"),(0,r.kt)("p",null,"3"),(0,r.kt)("p",null,"4")))],M=[0,0],i=[0,[.6214434322022919,.6214434322022919,.6214434322022919,.6214434322022919]],c=[{},{}],z={};function p({components:e,...l}){return(0,r.kt)("wrapper",a({},z,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"outer"),(0,r.kt)("p",null,"middle"),(0,r.kt)("p",null,"inner"),(0,r.kt)("p",null,"middle"),(0,r.kt)("p",null,"outer"),(0,r.kt)("hr",null),(0,r.kt)("h3",null,"Fragments"),(0,r.kt)("p",null,"1"),(0,r.kt)("p",null,"2"),(0,r.kt)("p",null,"3"),(0,r.kt)("p",null,"4"))}p.isMDXComponent=!0},5550:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h2",null,"Execute JavaScript"),(0,r.kt)("div",{className:"executable-code-container"},(0,r.kt)("a",{"data-value":"console.log('yay'); const a = 1;\nconst b = 2; console.log(a + b);",className:"executable-code-button"},"execute"),(0,r.kt)("div",{className:"executable-code-result",style:{display:"none"}})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('yay');\n\nconst a = 1;\nconst b = 2;\n\nconsole.log(a + b);\n"))),e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("div",{className:"executable-code-container"},(0,r.kt)("a",{"data-value":" ((modules) => { const usedModules = {}; function require(moduleId) { if (usedModules[moduleId]) { return usedModules[moduleId].exports; } const module = (usedModules[moduleId] = { exports: {} }); modules[moduleId](module, module.exports, require); return module.exports; } return require(0); \n})({ 0 : function (module, exports, require) { const m = require(1); m('hello world'); }, 1 : function (module, exports, require) { module.exports = function m(txt) { console.log('module', txt); }; },\n});",className:"executable-code-button"},"execute"),(0,r.kt)("div",{className:"executable-code-result",style:{display:"none"}})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 例なのでESM等の対応はないが仕組みは一緒\n// IIFEの引数に全てのモジュールが入ったobjectを渡す\n((modules) => {\n  const usedModules = {};\n\n  function require(moduleId) {\n    if (usedModules[moduleId]) {\n      return usedModules[moduleId].exports;\n    }\n\n    // ModuleId(0, 1, ...)を入れ、最低限必要なexportsを定義し初期化\n    const module = (usedModules[moduleId] = { exports: {} });\n\n    // 自身の関数であるrequireを渡すことにより、それぞれのモジュール内でこの関数を実行し再帰走査する\n    // つまり、それぞれのモジュール内のmodule/requireはここで上書きされる\n    modules[moduleId](module, module.exports, require);\n\n    return module.exports;\n  }\n\n  return require(0); // entry pointである0(index.js)から開始\n})({\n  0 /*index.js*/: function (module, exports, require) {\n    const m = require(1);\n    m('hello world');\n  },\n  1 /* foo.js */: function (module, exports, require) {\n    module.exports = function m(txt) {\n      console.log('module', txt);\n    };\n  },\n});\n")))],a=[0,0],u=[0,0],M=[{hasExecutableCode:"true"},{hasExecutableCode:"true"}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Execute JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log('yay');\n\nconst a = 1;\nconst b = 2;\n\nconsole.log(a + b);\n")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 例なのでESM等の対応はないが仕組みは一緒\n// IIFEの引数に全てのモジュールが入ったobjectを渡す\n((modules) => {\n  const usedModules = {};\n\n  function require(moduleId) {\n    if (usedModules[moduleId]) {\n      return usedModules[moduleId].exports;\n    }\n\n    // ModuleId(0, 1, ...)を入れ、最低限必要なexportsを定義し初期化\n    const module = (usedModules[moduleId] = { exports: {} });\n\n    // 自身の関数であるrequireを渡すことにより、それぞれのモジュール内でこの関数を実行し再帰走査する\n    // つまり、それぞれのモジュール内のmodule/requireはここで上書きされる\n    modules[moduleId](module, module.exports, require);\n\n    return module.exports;\n  }\n\n  return require(0); // entry pointである0(index.js)から開始\n})({\n  0 /*index.js*/: function (module, exports, require) {\n    const m = require(1);\n    m('hello world');\n  },\n  1 /* foo.js */: function (module, exports, require) {\n    module.exports = function m(txt) {\n      console.log('module', txt);\n    };\n  },\n});\n")))}c.isMDXComponent=!0},2965:(e,l,t)=>{"use strict";t.r(l),t.d(l,{backgrounds:()=>u,default:()=>z,fragmentSteps:()=>M,fusumaProps:()=>i,slides:()=>a});var n=t(5032);const r=()=>n.createElement("h3",null,"hello from js");var s=t(3077);function o(){return(o=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const a=[e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("h2",null,"mdx"),(0,s.kt)("br",null),(0,s.kt)(r,{mdxType:"Hello",mdxType:"Hello"})),e=>(0,s.kt)(n.Fragment,null,(0,s.kt)(r,{mdxType:"Hello",mdxType:"Hello"}),(0,s.kt)(r,{mdxType:"Hello",mdxType:"Hello"}),(0,s.kt)(r,{mdxType:"Hello",mdxType:"Hello"}))],u=[0,0],M=[0,0],i=[{},{}],c={};function z({components:e,...l}){return(0,s.kt)("wrapper",o({},c,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",null,"mdx"),(0,s.kt)("br",null),(0,s.kt)(r,{mdxType:"Hello"}),(0,s.kt)("hr",null),(0,s.kt)(r,{mdxType:"Hello"}),(0,s.kt)(r,{mdxType:"Hello"}),(0,s.kt)(r,{mdxType:"Hello"}))}z.isMDXComponent=!0},6500:(e,l,t)=>{"use strict";t.r(l),t.d(l,{slides:()=>o,backgrounds:()=>a,fragmentSteps:()=>u,fusumaProps:()=>M,default:()=>c});var n=t(5032),r=t(3077);function s(){return(s=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o=[e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("h2",null,"background"))],a=["#444"],u=[0],M=[{}],i={};function c({components:e,...l}){return(0,r.kt)("wrapper",s({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"background"))}c.isMDXComponent=!0},2600:(e,l,t)=>{"use strict";e.exports=t.p+"849d825f17fb7df6c13a.webp"},5031:(e,l,t)=>{"use strict";t.r(l)},3447:(e,l,t)=>{var n={"./0-title.md":743,"./01-many-pages.md":6135,"./02-file-loader.md":9084,"./03-unicode.md":9123,"./04-code/0.md":4978,"./04-code/1.md":9602,"./05-qr.md":1520,"./06-blocks.md":1489,"./07-run-js.md":5550,"./08-mdx.mdx":2965,"./09-background.md":6500};function r(e){var l=s(e);return t(l)}function s(e){if(!t.o(n,e)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=3447}},function(e){"use strict";var l;l=e.x,e.x=()=>{var t=l();return[426,860,925].map(e.E),t}},[[757,666,736],[3781,666,736],[8604,666,736],[3179,666,736]]]);