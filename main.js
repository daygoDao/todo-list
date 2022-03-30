(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"header {\n\tborder: 5px solid lightgreen;\n}\n\nmain {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n.projects {\n\tborder: 5px solid lightblue;\n}\n\n.content {\n\tborder: 5px solid salmon;\n}\n\n.yoyo {\n\tcolor: red;\n}\n\n.chosenProject {\n\tborder: 1px solid blue;\n}\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],s=0;s<e.length;s++){var i=e[s],d=r.base?i[0]+r.base:i[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=n(a[c]);t[s].references--}for(var i=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=e=>{const t=[];return{name:e=e,taskArray:t,addTask:e=>{t.push(e)}}},t=(e,t,n,r)=>({title:e=e,note:t=t,date:n=n,priority:r=r});var r=n(379),o=n.n(r),a=n(795),c=n.n(a),s=n(569),i=n.n(s),d=n(565),l=n.n(d),u=n(216),p=n.n(u),f=n(589),m=n.n(f),h=n(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=t("yo","yo",1,2),g=t("ayo","yoyo",11,32),b=e("name-of-project1"),x=e("name-of-project2");b.addTask(y),b.addTask(g),b.addTask(y),b.addTask(y),b.addTask(y),b.addTask(g),x.addTask(g),x.addTask(g),x.addTask(g);const j=(()=>{const e=[];return{chosenProjectIndex:0,list:e,addProject:t=>{e.push(t)}}})();j.addProject(b),j.addProject(x);const k=document.querySelector(".projects");localStorage.getItem("projectList")||localStorage.setItem("projectList",JSON.stringify(j.list));for(let e=0;e<j.list.length;e++){const t=document.createElement("li"),n=e=>{console.log("project clicked");for(let e=0;e<j.list.length;e++)k.children[e].classList.remove("chosenProject");t.classList.add("chosenProject"),T(),P()};t.addEventListener("click",n),t.textContent=j.list[e].name,k.appendChild(t)}function T(){for(let e=0;e<j.list;e++)"chosenProject"==document.querySelector(".projects").children[e].className&&(console.log("found a chosen one"),j.chosenProjectIndex=e)}let C=document.createElement("button");function P(){for(let e=0;e<j.list[j.chosenProjectIndex].taskArray.length;e++){const t=document.createElement("li");t.classList.add("task"),t.textContent=b.taskArray[e].title,document.querySelector(".content").appendChild(t)}const e=document.createElement("button");e.addEventListener("click",(()=>{console.log("add task button clicked")})),e.textContent="+",document.querySelector(".content").appendChild(e)}C.textContent="+",C.addEventListener("click",(()=>{console.log("addProjectButton clicked")})),k.appendChild(C)})()})();