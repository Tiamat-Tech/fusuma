(self.webpackChunk_6=self.webpackChunk_6||[]).push([[163],{8163:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Sidebar:()=>b});var r=a(5459),l=a(946),s=a(348),i=a.n(s),n=a(8270),c=a(3669);const o=({children:e,title:t})=>r.createElement("div",{className:"tooltip-container"},r.createElement("span",{className:"tooltip"},t),e);var m=a(7554);const h=e=>`${e}`.padStart(2,"0"),d=({href:e,areaLabel:t,children:a})=>r.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:e,"aria-label":t},a),b=(0,r.memo)((({isOpen:e,onStateChange:t})=>{const{state:{currentIndex:a,slides:s,contentsList:b},dispatch:u}=(0,m.re)(),E=s.length,p="https://hiroppy.github.io/fusuma/syntaxes/7";return r.createElement(l.slide,{isOpen:e,disableAutoFocus:!0,onStateChange:t,outerContainerId:"root"},r.createElement("div",{className:"sidebar-social"},r.createElement(d,{href:`https://twitter.com/intent/tweet?text=slide ${p}`,areaLabel:`slide ${p}`},r.createElement(n.fWC,null)),r.createElement(d,{href:"https://github.com/hiroppy/fusuma.git",areaLabel:"github"},r.createElement(n.hJX,{style:{width:20,height:20}}))),r.createElement("div",{className:"sidebar-control"},r.createElement(c.b2E,{onClick:()=>u((0,m.$L)(0)),className:"sidebar-cursor"}),r.createElement("span",null,`${h(a+1)} / ${h(E)}`),r.createElement(c.cHm,{onClick:()=>u((0,m.$L)(E-1)),className:"sidebar-cursor"})),r.createElement("div",{className:"sidebar-tools"},r.createElement(o,{title:"Presenter"},r.createElement(c.kxx,{onClick:()=>u((0,m.PM)("host")),style:{width:19,height:19,marginTop:3},className:"sidebar-cursor"})),r.createElement(o,{title:"Embed"},r.createElement(c.xoN,{onClick:()=>{navigator.clipboard&&navigator.clipboard.writeText(`<iframe src="${p}" style="width:100%;height:100%;"></iframe>`)},style:{width:26,height:26},className:"sidebar-cursor"})),r.createElement(o,{title:"Fullscreen"},r.createElement(c.Nms,{style:{width:26,height:26},onClick:()=>{i().isEnabled&&i().toggle()},className:"sidebar-cursor"}))),b.length&&r.createElement("ul",{className:"sidebar-contents"},b.map((e=>r.createElement("li",{key:e.title},r.createElement("a",{style:{cursor:"pointer"},onClick:()=>u((0,m.$L)(e.index-1))},e.title))))))}))}}]);