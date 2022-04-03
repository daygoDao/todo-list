(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"header {\n  border: 5px solid lightgreen;\n  text-align: center;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.projects {\n  border: 5px solid lightblue;\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 1fr 0.25fr;\n}\n\n.content {\n  border: 5px solid salmon;\n}\n\n.yoyo {\n  color: red;\n}\n\n.chosenProject {\n  background-color: yellow;\n}\n\n.task-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-left: 1rem;\n  /* justify-items: center; */\n}\n\n.projectList h2 {\n  padding-left: 1rem;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.content li,\n.projects li {\n  border: 1px dotted lightgray;\n  padding-left: 1rem;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 0.25fr;\n  /* justify-items: center; */\n}\n\nli:hover {\n  background-color: lightblue;\n}\n\n.delProject,\n.delTask {\n  width: 1rem;\n  height: 1rem;\n  display: none;\n}\n\nli.project:hover .delProject,\nli.task:hover .delTask{\n\tdisplay: block;\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var i=[].concat(e[d]);r&&s[i[0]]||(void 0!==a&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=a),n&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=n):i[2]=n),o&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=o):i[4]="".concat(o)),t.push(i))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],i=a[d]||0,u="".concat(d," ").concat(i);a[d]=i+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var i=n(a[d]);0===t[i].references&&(t[i].updater(),t.splice(i,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=e=>{const t=[];return{name:e=e,taskArray:t,addTask:e=>{t.push(e)},displaytasks:()=>{!function(){let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild)}();for(let e=0;e<t.length;e++){const n=document.createElement("li"),r=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");n.classList.add("task"),r.textContent=t[e].title,o.textContent=t[e].note,a.textContent=t[e].date,n.appendChild(r),n.appendChild(o),n.appendChild(a),document.querySelector(".content").appendChild(n)}}}},t=(e,t,n)=>({title:e=e,note:t=t,date:n=n,priority:0});var r=n(379),o=n.n(r),a=n(795),s=n.n(a),c=n(569),l=n.n(c),d=n(565),i=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(426),y={};y.styleTagTransform=f(),y.setAttributes=i(),y.insert=l().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=p(),o()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const v=t("yo","yo","2022-05-07"),g=t("ayo","yoyo","2022-05-07"),k=e("demo project"),j=e("project 2, demo demi glace");k.addTask(v),k.addTask(v),k.addTask(v),k.addTask(v),k.addTask(v),k.addTask(g),j.addTask(v),j.addTask(g),j.addTask(v);const x=(()=>{let n=0,r=[];const o=e=>{r.push(e)},a=()=>{let t=prompt("name of project?","folder");const n=e(t);o(n),localStorage.setItem("projectList",JSON.stringify(r)),function(){let e=document.querySelector(".projects");for(;e.firstChild;)e.removeChild(e.firstChild)}(),l()},s=()=>{const e=document.querySelector(".projects"),t=document.createElement("button");t.textContent="+",t.addEventListener("click",a),e.appendChild(t)},c=()=>{const n=JSON.parse(localStorage.getItem("projectList"));let o=[];for(let r=0;r<n.length;r++){o.push(e(n[r].name));for(let e=0;e<n[r].taskArray.length;e++){let a=n[r].taskArray[e].title,s=n[r].taskArray[e].note,c=n[r].taskArray[e].date;const l=t(a,s,c);o[r].addTask(l)}}r=o},l=()=>{const e=document.querySelector(".projects");c();for(let t=0;t<r.length;t++){const o=document.createElement("li"),a=t=>{for(let t=0;t<r.length;t++)e.children[t].classList.remove("chosenProject");o.classList.add("chosenProject"),d(),r[n].displaytasks(),i()};o.addEventListener("click",a),o.classList.add("project"),o.textContent=r[t].name,e.appendChild(o)}s()},d=()=>{for(let e=0;e<r.length;e++)"chosenProject"==document.querySelector(".projects").children[e].className&&(n=e)};let i=()=>{const e=document.querySelector("#modal"),t=document.querySelector(".close-modal"),n=document.querySelector(".addTask"),r=document.createElement("button");r.textContent="+",r.classList.add("open-modal"),document.querySelector(".content").appendChild(r),r.addEventListener("click",(()=>{e.showModal()})),t.addEventListener("click",(()=>{e.close()})),n.addEventListener("click",u)};const u=()=>{const e=document.getElementById("newTask"),o=e.elements[0].value,a=e.elements[1].value,s=e.elements[2].value,c=t(o,a,s);r[n].addTask(c),localStorage.setItem("projectList",JSON.stringify(r)),r[n].displaytasks(),i(),e.elements[0].value="",e.elements[1].value="",e.elements[2].value="",modal.close()};return{chosenProjectIndex:n,list:r,addProject:o,addProjectListDOM:l,addProjectButt:s,addTaskButt:i,getLocalList:c,initDisplay:()=>{l(),document.querySelector(".projects").children[0].classList.add("chosenProject"),r[0].displaytasks(),r[0],i(),(()=>{const e=document.querySelectorAll(".project");for(let t of e){const e=document.createElement("button");e.classList.add("delProject"),e.textContent="x",t.appendChild(e)}})(),(()=>{const e=document.querySelectorAll(".task");for(let t of e){const e=document.createElement("button");e.classList.add("delTask"),e.textContent="x",t.appendChild(e)}})()}}})();x.addProject(k),x.addProject(j),localStorage.getItem("projectList")||localStorage.setItem("projectList",JSON.stringify(x.list)),x.initDisplay()})()})();