(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[103],{5103:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(5032);class n{constructor(){this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}registerEvent(e,t){navigator.presentation.receiver.connectionList.then((s=>{s.connections.forEach((s=>{s.addEventListener(e,t)})),s.addEventListener("connectionavailable",(e=>{t(e.connection)}))}))}setUp(){this.registerEvent("close",(e=>{console.log(e)}))}onChangePage(e){"presentation"===this.apiType?this.registerEvent("message",(t=>{const s=JSON.parse(t.data).page;e(s)})):window.addEventListener("storage",(t=>{if("page"===t.key){const s=JSON.parse(t.newValue).page;e(s)}}))}}var a=s(6267),i=s(9134),o=s(8219);let c=null,l=null,d=null,u=null;const h=(0,r.memo)((()=>{const{state:{currentIndex:e},dispatch:t}=(0,o.re)();c||(window.onload=()=>{c=new n,c.onChangePage((e=>{t((0,o.$L)(e)),l&&d&&s(d)}))});const s=e=>{l&&e&&(e.pause(),l.stopCapturing(e),u.style.opacity=1,l=null,u=null,d=null)},h=async()=>{const e=document.querySelectorAll("#webslides .fusuma-screen");null!==e&&e.forEach((e=>{const[t,r]=e.children;r.addEventListener("click",(async()=>{if(!l){const e=await(async()=>{if(l)throw new Error("Capturing has already run.");return l=new i.u,await l.startCapturing({video:{displaySurface:"monitor"}})})();r.srcObject=e,r.play(),d=r,u=t,u.style.opacity=0,e.getVideoTracks()[0].onended=()=>{s(r)}}}))}))};return(0,r.useEffect)((()=>{h()}),[]),(0,r.useEffect)((()=>{const{swiper:t}=document.querySelector(".swiper-container");t?.slideTo(e)}),[e]),r.createElement("div",{className:"fusuma-presenter-view"},r.createElement(a.B,null))}))},9134:(e,t,s)=>{"use strict";s.d(t,{u:()=>r});class r{constructor(){if(!navigator.mediaDevices.getUserMedia)throw new Error("Not supported");this.url=null,this.finishedProcess=!1}setupRecording(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.handlerRecording)}handlerRecording(e){const t=[];this.stream=e,this.mediaRecorder=new MediaRecorder(e,{}),this.mediaRecorder.addEventListener("dataavailable",(e=>{e.data.size>0&&t.push(e.data)})),this.mediaRecorder.addEventListener("stop",(()=>{this.finishedProcess=!0,this.url=URL.createObjectURL(new Blob(t,{type:"audio/webm"}))}))}startRecording(){this.mediaRecorder.start(),this.finishedProcess=!1,this.url=null}stopRecording(){return new Promise((e=>{this.mediaRecorder.stop();const t=setInterval((()=>{this.finishedProcess&&(clearInterval(t),e(this.url))}),100)}))}disposeRecording(){this.mediaRecorder.stream.getTracks().forEach((e=>e.stop())),this.finishedProcess=!1,this.url=null}async startCapturing(e){let t=null;try{t=await navigator.mediaDevices.getDisplayMedia(e)}catch(e){console.error(e)}return t}stopCapturing(e){e.srcObject.getTracks().forEach((e=>e.stop())),e.srcObject=null}}}}]);