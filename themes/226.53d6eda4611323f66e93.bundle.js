(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[226],{6226:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var s=n(5032),r=n(4427),i=n.n(r),a=n(2511),o=n(1970);const l={currentIndex:0},c=(0,s.createContext)(l),d=(e,t)=>(t.type,e),m=({children:e})=>{const[t,n]=(0,s.useReducer)(d,l);return s.createElement(c.Provider,{value:{state:t,dispatch:n}},e)};class u{constructor(){this.receiverQuery="?presenter=view",this.apiType="function"==typeof window.PresentationRequest?"presentation":"localStorage",this.windowId=null}openView(){return new Promise(((e,t)=>{"presentation"===this.apiType?(this.presentationRequest=new PresentationRequest([this.receiverQuery]),navigator.presentation.defaultRequest=this.presentationRequest,this.presentationRequest.addEventListener("connectionavailable",(t=>{this.presentationConnection=t.connection,e(t.connection.id)})),this.presentationRequest.start().catch((e=>t(e)))):(this.windowId=window.open(this.receiverQuery,"_blank","width=800,height=600"),e())}))}changePage(e){const t=JSON.stringify({date:Date.now(),page:e});"presentation"===this.apiType&&this.presentationConnection&&this.presentationConnection.send(t),"localStorage"===this.apiType&&window.localStorage.setItem("page",t)}async reconnect(e){return"presentation"===this.apiType?this.presentationRequest.reconnect(e):Promise.resolve()}terminate(){"presentation"===this.apiType&&this.presentationConnection?(this.presentationConnection.terminate(),this.presentationConnection.close(),this.presentationConnection=null):this.windowId&&(this.windowId.close(),this.windowId=null)}}function h(e){const t=Math.floor(e/1e3%60).toString().padStart(2,"0"),n=Math.floor(e/6e4%60).toString().padStart(2,"0");return`${Math.floor(e/36e5%24).toString().padStart(2,"0")}:${n}:${t}`}let p=0,E=null;const v=(0,s.memo)((({start:e,stop:t,reset:n,disabledStart:r,disabledStop:i,disabledReset:o})=>{const[l,c]=(0,s.useState)(!0),[d,m]=(0,s.useState)("00:00:00");return(0,s.useEffect)((()=>()=>{E&&clearInterval(E)}),[]),s.createElement("div",{className:"host-timer"},s.createElement(a.xrw,{onClick:()=>{E&&t(),p=0,m("00:00:00"),n()},className:o?"disabled":void 0}),l?s.createElement(a.gmG,{onClick:()=>{E=setInterval((()=>(p+=1e3,void m(h(p)))),1e3),c(!1),e()},className:r?"disabled":void 0}):s.createElement(a.JuG,{onClick:()=>{clearInterval(E),c(!0),E=null,t()},className:i?"disabled":void 0}),s.createElement("span",null,d))}));var f=n(3749);const g=({items:e,url:t})=>{const n=(0,s.useRef)();return(0,s.useEffect)((()=>{if(n.current){const t=n.current,s=async()=>new Promise((e=>{t.addEventListener("loadedmetadata",(()=>{if(t.duration===1/0){t.currentTime=Number.MAX_SAFE_INTEGER;const n=()=>{t.currentTime=0,t.removeEventListener("timeupdate",n),e()};t.addEventListener("timeupdate",n)}}))})),r=document.querySelectorAll(".ReactModalPortal section > div");s();{let e=!1;t.addEventListener("playing",(()=>{e||(t.currentTime=0,e=!0)}))}t.addEventListener("timeupdate",(()=>{const n=(t=>{let n=0;for(let s=0;s<e.length;s++){const{time:r}=e[s];if(t<=r){n=s;break}}return n})(1e3*t.currentTime);r[n].scrollIntoView()}))}}),[]),s.createElement("div",{className:"host-timeline-container"},t&&s.createElement("div",{className:"host-timeline-audio"},s.createElement("audio",{src:t,controls:!0,ref:n})),s.createElement("div",{className:"host-timeline-body"},s.createElement(f.TY,null,e.map((({title:e,time:t,timeStr:n,Slide:r,color:i,Icon:a})=>s.createElement(f.BJ,{key:t,title:e,createdAt:n,iconColor:i,icon:a},r&&s.createElement(r,null)))))))};class w{constructor(){navigator.mediaDevices.getUserMedia||console.warn("Not supported"),this.url=null,this.finishedProcess=!1}async setupRecording(){const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1});return this.handlerRecording(e),e}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}}const S=({slideUrl:e,slideIndex:t})=>s.createElement("iframe",{src:`${e.replace(/slide-(\d?)/,`slide-${t}`)}`,width:"100%",height:"100%"});let R=[],b=0;const y=()=>{const{state:{slides:e,currentIndex:t,currentFragmentSteps:n},dispatch:r}=(0,o.re)(),[l,c]=(0,s.useState)(null),[d,m]=(0,s.useState)("prepare"),[p,E]=(0,s.useState)(null),[f,y]=(0,s.useState)(null),[N,I]=(0,s.useState)(!1),[k,C]=(0,s.useState)(null),[P,T]=(0,s.useState)(!1),[L,$]=(0,s.useState)(!0),x=(0,s.useRef)(p),q=()=>{try{p&&(p.terminate(),E(null))}catch(e){console.error(e)}finally{r((0,o.PM)("common"))}},M=()=>{0===R.length&&(b=(new Date).getTime());const n=0===R.length?0:(new Date).getTime()-b;R.push({slideNum:t+1,time:n,timeStr:h(n),event:"started",title:`Started from the ${t+1} slide.`,Slide:e[t].slide,color:"#6fba1c",Icon:s.createElement(a.qL$,null)}),N&&(k.startRecording(),y(null)),$(!1),m("start")},D=()=>{k&&(k.disposeRecording(),C(null)),I(!1)};return(0,s.useEffect)((()=>{k?.setupRecording()}),[k]),(0,s.useEffect)((()=>{if(x.current=p,p)(async()=>{try{await(p?.openView())}catch(e){console.error(e)}})();else{const{origin:e,pathname:t}=new URL(window.location);c(`${e}${t}?sidebar=false&reference=false#slide-`),E(new u)}}),[p]),(0,s.useEffect)((()=>{r((0,o.oA)());const e=({key:e})=>{"ArrowLeft"===e?(r((0,o.$L)("-")),x.current.changePage("-")):"ArrowRight"===e&&(r((0,o.$L)("+")),x.current.changePage("+"))};return document.addEventListener("keydown",e,!1),()=>{x.current&&q(),D(),document.removeEventListener("keydown",e)}}),[]),(0,s.useEffect)((()=>{if(p&&p.changePage(t),"start"===d){const n=(new Date).getTime()-b,r=R.slice(-1)[0];R.push({slideNum:t+1,time:n,timeStr:`${h(n)} (+${h(n-r.time)})`,event:"changed",title:`Moved to the ${t+1} slide from the ${t} slide.`,Slide:e[t].slide,color:"#3498db",Icon:s.createElement(a.PS5,{size:"22"})})}}),[t]),s.createElement("div",{className:"host-container"},s.createElement(i(),{isOpen:P,onRequestClose:()=>T(!1)},s.createElement(g,{items:R,url:f})),s.createElement("div",{className:"host-left-box"},s.createElement("div",{className:"host-note"},e&&s.createElement("pre",{dangerouslySetInnerHTML:{__html:e[t].fusumaProps.note}}))),s.createElement("div",{className:"host-right-box"},s.createElement("div",{className:"host-slide-layer"},s.createElement("h2",null,"Current"),l&&s.createElement(S,{slideUrl:l,slideIndex:t+1,fragment:n})),s.createElement("div",{className:"host-slide-layer"},s.createElement("h2",null,"Next"),l&&s.createElement(S,{slideUrl:l,slideIndex:t+2,fragment:n}))),s.createElement("div",{className:"host-bottom-box"},s.createElement(a.aHS,{onClick:q,className:"terminate-button"}),s.createElement("div",{className:"host-bottom-box-info"},s.createElement(v,{start:M,stop:async()=>{const e=(new Date).getTime()-b;R.push({slideNum:t+1,time:e,timeStr:h(e),event:"stopped",title:`Stopped at the ${t+1} slide.`,color:"#e9546b",Icon:s.createElement(a.IkZ,null)}),N&&y(await k.stopRecording()),m("stop")},reset:()=>{y(null),R=[],b=0,m("prepare"),$(!0)},disabledStart:"stop"===d&&N&&!M.isEmptyRecordedTimeline,disabledStop:"stop"===d&&N&&!M.isEmptyRecordedTimeline,disabledReset:"start"===d&&N}),s.createElement("span",{className:"current-slide-num"},`${t+1}`.padStart(2,"0")," / ",`${e.length}`.padStart(2,"0")),s.createElement(a.ceS,{onClick:()=>T(!0),size:18,className:"start"===d&&N||L?"disabled":void 0}),N?s.createElement(a.kOf,{onClick:D,className:"start"!==d&&L?void 0:"disabled",size:20,color:"#6fba1c"}):s.createElement(a.WzD,{onClick:()=>{k||(C(new w),I(!0))},className:"start"!==d&&L?void 0:"disabled",size:20}))))},N=(0,s.memo)((()=>s.createElement(m,null,s.createElement(y,null))))}}]);