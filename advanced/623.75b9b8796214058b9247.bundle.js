(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[623],{1623:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CommentsList:()=>h});var n=r(9076),a=r(780),c=r(6330),o=r(6062),i=r.n(o),s=r(7686),l={insert:"head",singleton:!1};i()(s.Z,l);s.Z.locals;function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y,b=a.ZP.ul({}),v=a.ZP.li({enter:{opacity:1},exit:{opacity:0}}),g=new c.Z,h=(0,n.memo)((function(){var e=p((0,n.useState)([]),2),t=e[0],r=e[1];return(0,n.useEffect)((function(){y||((y=new WebSocket("ws://".concat(window.location.hostname,":").concat(void 0))).onmessage=function(e){var t=e.data,n=JSON.parse(t);if(Array.isArray(n)&&0!==n.length)if("Rate limit exceeded"===n[0].message);else if("hello:)"===n[0].message);else{var a=n.reverse().map((function(e){return u(u({},e),{},{createdAt:g.format(e.createdAt)})}));r((function(e){return e.concat(a)}))}})}),[]),n.createElement("div",{className:"comments-list"},n.createElement("div",{className:"comments-list-title"},n.createElement("span",null,"Private Mode"),n.createElement("span",{className:"comments-list-total"},t.length," comments")),n.createElement(b,{className:"comments-list-ul"},n.createElement("div",null,t.map((function(e){var t=e.id,r=e.avatar,a=e.text,c=e.screenName,o=e.createdAt;return n.createElement(v,{key:t,className:"comments-list-li"},r&&n.createElement("img",{src:r,className:"comments-list-li-avatar"}),n.createElement("div",{className:"comments-list-li-body"},n.createElement("div",{className:"comments-list-li-body-info"},n.createElement("span",{className:"comments-list-li-screen-name"},"@",c),n.createElement("span",{className:"comments-list-li-time-ago"},o)),n.createElement("span",{className:"comments-list-li-comment"},a)))})))))}))},7686:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(8913),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const c=a}}]);