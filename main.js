(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),a=n(645),l=n.n(a)()(r());l.push([e.id,"header {\n  border: 5px solid lightgreen;\n  text-align: center;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n.projects {\n  border: 5px solid lightblue;\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 1fr 0.25fr;\n}\n\n.content {\n  border: 5px solid salmon;\n}\n\n.chosenProject {\n  background-color: yellow;\n}\n\n.task-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  padding-left: 1rem;\n  /* justify-items: center; */\n}\n\n.projectList h2 {\n  padding-left: 1rem;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n.content li,\n.projects li {\n  border: 1px dotted lightgray;\n  padding-left: 1rem;\n  height: 20px;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 0.25fr;\n  /* justify-items: center; */\n}\n\nli:hover {\n  background-color: lightblue;\n}\n\n/* display delete button on hover */\n.delProject,\n.delTask {\n  width: 1.5rem;\n  height: 1.5.rem;\n  display: none;\n}\nli.project:hover .delProject,\nli.task:hover .delTask {\n  display: block;\n}\n\ninput[type=date] {\n  color: salmon;\n}\n",""]);const s=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(l[c]=!0)}for(var d=0;d<e.length;d++){var i=[].concat(e[d]);o&&l[i[0]]||(void 0!==a&&(void 0===i[5]||(i[1]="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {").concat(i[1],"}")),i[5]=a),n&&(i[2]?(i[1]="@media ".concat(i[2]," {").concat(i[1],"}"),i[2]=n):i[2]=n),r&&(i[4]?(i[1]="@supports (".concat(i[4],") {").concat(i[1],"}"),i[4]=r):i[4]="".concat(r)),t.push(i))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},l=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],i=a[d]||0,u="".concat(d," ").concat(i);a[d]=i+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}l.push(u)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var s=n(a[l]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var i=n(a[d]);0===t[i].references&&(t[i].updater(),t.splice(i,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=e=>{const t=[];return{name:e=e,taskArray:t,addTask:e=>{t.push(e)},displaytasks:()=>{!function(){let e=document.querySelector(".content");for(;e.firstChild;)e.removeChild(e.firstChild)}();for(let e=0;e<t.length;e++){const n=document.createElement("li"),o=document.createElement("span"),r=document.createElement("span"),a=document.createElement("input");o.classList.add("title"),r.classList.add("note"),a.classList.add("date"),a.type="date",n.classList.add("task"),o.textContent=t[e].title,r.textContent=t[e].note,a.value=t[e].date,n.appendChild(o),n.appendChild(r),n.appendChild(a),document.querySelector(".content").appendChild(n)}}}},t=(e,t,n)=>({title:e=e,note:t=t,date:n=n,priority:0}),o=function(){let e=document.querySelector(".projects");for(;e.firstChild;)e.removeChild(e.firstChild)};var r=n(379),a=n.n(r),l=n(795),s=n.n(l),c=n(569),d=n.n(c),i=n(565),u=n.n(i),p=n(216),m=n.n(p),f=n(589),y=n.n(f),h=n(426),g={};g.styleTagTransform=y(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),a()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const v=t("yo","yo","2022-05-07"),k=t("ayo","yoyo","2022-05-07"),S=e("demo project"),j=e("project 2, demo demi glace");S.addTask(v),S.addTask(v),S.addTask(v),S.addTask(v),S.addTask(v),S.addTask(k),j.addTask(v),j.addTask(k),j.addTask(v);const L=(()=>{let n=0,r=[];const a=e=>{r.push(e)},l=()=>{let t=prompt("name of project?","folder");const n=e(t);a(n),localStorage.setItem("projectList",JSON.stringify(r)),o(),d(),f()},s=()=>{const e=document.querySelector(".projects"),t=document.createElement("button");t.textContent="+",t.addEventListener("click",l),e.appendChild(t)},c=()=>{const n=JSON.parse(localStorage.getItem("projectList"));let o=[];for(let r=0;r<n.length;r++){o.push(e(n[r].name));for(let e=0;e<n[r].taskArray.length;e++){let a=n[r].taskArray[e].title,l=n[r].taskArray[e].note,s=n[r].taskArray[e].date;const c=t(a,l,s);o[r].addTask(c)}}r=o},d=()=>{const e=document.querySelector(".projects");c();for(let t=0;t<r.length;t++){const o=document.createElement("li"),a=document.createElement("span"),l=t=>{for(let t=0;t<r.length;t++)e.children[t].classList.remove("chosenProject");o.classList.add("chosenProject"),i(),r[n].displaytasks(),u(),h()};o.addEventListener("click",l),o.classList.add("project"),a.textContent=r[t].name,o.appendChild(a),e.appendChild(o)}s()},i=()=>{for(let e=0;e<r.length;e++)document.querySelector(".projects").children[e].className.includes("chosenProject")&&(n=e)};let u=()=>{const e=document.querySelector("#modal"),t=document.querySelector(".close-modal"),n=document.querySelector(".addTask"),o=document.createElement("button");o.textContent="+",o.classList.add("open-modal"),document.querySelector(".content").appendChild(o),o.addEventListener("click",(()=>{e.showModal()})),t.addEventListener("click",(()=>{e.close()})),n.addEventListener("click",p)};const p=()=>{const e=document.getElementById("newTask"),o=e.elements[0].value,a=e.elements[1].value,l=e.elements[2].value,s=t(o,a,l);r[n].addTask(s),localStorage.setItem("projectList",JSON.stringify(r)),r[n].displaytasks(),u(),h(),e.elements[0].value="",e.elements[1].value="",e.elements[2].value="",modal.close()},m=e=>{const t=document.querySelectorAll(".project");let n=0;for(let a of t)console.log("ayp",a.children[0]),a.children[1]==e.target&&(console.log("in here"),r.splice(n,1),localStorage.setItem("projectList",JSON.stringify(r)),o(),d(),f()),n++},f=()=>{const e=document.querySelectorAll(".project");for(let t of e){const e=document.createElement("button");e.classList.add("delProject"),e.textContent="x",e.addEventListener("click",m),t.appendChild(e)}},y=e=>{const t=document.querySelectorAll(".task");let o=0;for(let a of t)a.children[3]==e.target&&(r[n].taskArray.splice(o,1),localStorage.setItem("projectList",JSON.stringify(r)),r[n].displaytasks(),u(),h()),o++},h=()=>{const e=document.querySelectorAll(".task");for(let t of e){const e=document.createElement("button");e.classList.add("delTask"),e.textContent="x",e.addEventListener("click",y),t.appendChild(e)}},g=e=>{let t=prompt("new name?",e.target.textContent);if(null==t)return"";console.log(t),e.target.textContent=t,r[n].name=t,localStorage.setItem("projectList",JSON.stringify(r))},v=e=>{const t=document.querySelectorAll(".title"),o=document.querySelectorAll(".note");let a=prompt("new info",e.target.textContent);if(null==a)return"";e.target.textContent=a;let l=0;for(let o of t)o==e.target&&(console.log("home run"),console.log(r[n].taskArray[l]),r[n].taskArray[l].title=a),l++;let s=0;for(let t of o)t==e.target&&(console.log("home run"),r[n].taskArray[s].note=a),s++;localStorage.setItem("projectList",JSON.stringify(r))},k=e=>{const t=document.querySelectorAll(".date");let o=e.target.value,a=0;for(let l of t)l==e.target&&(console.log(o),console.log(r[n].taskArray[a]),r[n].taskArray[a].date=o),a++;localStorage.setItem("projectList",JSON.stringify(r))};return{chosenProjectIndex:n,list:r,addProject:a,addProjectListDOM:d,addProjectButt:s,addTaskButt:u,getLocalList:c,initDisplay:()=>{d(),document.querySelector(".projects").children[0].classList.add("chosenProject"),r[0].displaytasks(),u(),f(),h(),(()=>{const e=document.querySelectorAll(".projects span");i();for(let t of e)t.addEventListener("dblclick",g)})(),(()=>{const e=document.querySelectorAll(".title"),t=document.querySelectorAll(".note"),n=document.querySelectorAll(".date");for(let t of e)t.addEventListener("dblclick",v);for(let e of t)e.addEventListener("dblclick",v);for(let e of n)e.addEventListener("change",k)})()}}})();L.addProject(S),L.addProject(j),localStorage.getItem("projectList")||localStorage.setItem("projectList",JSON.stringify(L.list)),L.initDisplay()})()})();