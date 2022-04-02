(()=>{"use strict";var e={426:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(81),r=o.n(n),a=o(645),c=o.n(a)()(r());c.push([e.id,"header {\n\tborder: 5px solid lightgreen;\n}\n\nmain {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 3fr;\n}\n.projects {\n\tborder: 5px solid lightblue;\n}\n\n.content {\n\tborder: 5px solid salmon;\n}\n\n.yoyo {\n\tcolor: red;\n}\n\n.chosenProject {\n\tborder: 1px solid blue;\n}\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(c[l]=!0)}for(var d=0;d<e.length;d++){var i=[].concat(e[d]);n&&c[i[0]]||(void 0!==a&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=a),o&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=o):i[2]=o),r&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=r):i[4]="".concat(r)),t.push(i))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var a={},c=[],s=0;s<e.length;s++){var l=e[s],d=n.base?l[0]+n.base:l[0],i=a[d]||0,u="".concat(d," ").concat(i);a[d]=i+1;var p=o(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var s=o(a[c]);t[s].references--}for(var l=n(e,r),d=0;d<a.length;d++){var i=o(a[d]);0===t[i].references&&(t[i].updater(),t.splice(i,1))}a=l}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e,t,o)=>({title:e=e,note:t=t,date:o=o,priority:0}),t=t=>{const o=[],n=e=>{o.push(e)};const r=()=>{const t=document.getElementById("newTask");console.log("yo from submit modal");const r=t.elements[0].value,a=t.elements[1].value,c=t.elements[2].value,s=e(r,a,c);n(s),console.log(o)};return{name:t=t,taskArray:o,addTask:n,displaytasks:()=>{for(let e=0;e<o.length;e++){const t=document.createElement("li");t.classList.add("task"),t.textContent=o[e].title,document.querySelector(".content").appendChild(t)}(()=>{const e=document.querySelector("#modal"),t=document.querySelector(".close-modal"),o=document.querySelector(".addTask"),n=document.createElement("button");n.textContent="+",n.classList.add("open-modal"),document.querySelector(".content").appendChild(n),n.addEventListener("click",(()=>{console.log("yo from open modal"),e.showModal()})),t.addEventListener("click",(()=>{console.log("yo from close modal"),e.close()})),o.addEventListener("click",r)})()}}},n=function(){let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild)};var r=o(379),a=o.n(r),c=o(795),s=o.n(c),l=o(569),d=o.n(l),i=o(565),u=o.n(i),p=o(216),m=o.n(p),f=o(589),h=o.n(f),y=o(426),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),a()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const g=e("yo","yo",1),j=e("ayo","yoyo",11),k=t("demo project"),S=t("project 2, demo demi glace");k.addTask(g),k.addTask(g),k.addTask(g),k.addTask(g),k.addTask(g),k.addTask(j),S.addTask(g),S.addTask(j),S.addTask(g);const b=(()=>{let o=0,r=[];const a=e=>{r.push(e)},c=()=>{let e=prompt("name of project?","folder");document.querySelector(".projects");const o=t(e);a(o),localStorage.setItem("projectList",JSON.stringify(r)),function(){let e=document.querySelector(".projects");for(;e.firstChild;)e.removeChild(e.firstChild)}(),l(),console.log("addProjectButton clicked"),console.log(r)},s=()=>{const e=document.querySelector(".projects"),t=document.createElement("button");t.textContent="+",t.addEventListener("click",c),e.appendChild(t)},l=()=>{JSON.parse(localStorage.getItem("projectList")),console.log(r),(()=>{const o=JSON.parse(localStorage.getItem("projectList"));let n=[];for(let r=0;r<o.length;r++){n.push(t(o[r].name));for(let t=0;t<o[r].taskArray.length;t++){let a=o[r].taskArray[t].title,c=o[r].taskArray[t].note,s=o[r].taskArray[t].date;const l=e(a,c,s);n[r].addTask(l)}}console.log("this is the temp PL",n),r=n})(),console.log(r);const a=document.querySelector(".projects");for(let e=0;e<r.length;e++){const t=document.createElement("li"),c=e=>{console.log("project clicked");for(let e=0;e<r.length;e++)a.children[e].classList.remove("chosenProject");t.classList.add("chosenProject"),d(),n(),r[o].displaytasks()};t.addEventListener("click",c),t.textContent=r[e].name,a.appendChild(t)}s()},d=()=>{for(let e=0;e<r.length;e++)console.log("within findChosenProject",e),"chosenProject"==document.querySelector(".projects").children[e].className&&(o=e,console.log("found a chosen one, index at",e))};return{chosenProjectIndex:o,list:r,addProject:a,addProjectListDOM:l,addProjectButt:s}})();b.addProject(k),b.addProject(S),localStorage.getItem("projectList")||localStorage.setItem("projectList",JSON.stringify(b.list)),b.addProjectListDOM(),b.list[0].displaytasks(b)})()})();