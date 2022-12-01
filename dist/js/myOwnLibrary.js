(()=>{"use strict";const t=function(e){return new t.prototype.init(e)};t.prototype.init=function(t){return t.tagName?(this[0]=t,this.length=1,this):t?(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;const e=t;function s(){const t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.append(t);const e=t.offsetWidth-t.clientWidth;return t.remove(),e}e.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="block");return this},e.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},e.prototype.toggleDisplay=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this.show():this.hide());return this},e.prototype.addClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.add(...t);return this},e.prototype.removeClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.remove(...t);return this},e.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&(this[e].classList.contains(t)?this[e].classList.remove(t):this[e].classList.add(t));return this},e.prototype.on=function(t,e){if(!t||!e)return this;for(let s=0;s<this.length;s++)this[s].addEventListener(t,e);return this},e.prototype.off=function(t,e){if(!t||!e)return this;for(let s=0;s<this.length;s++)this[s].removeEventListener(t,e);return this},e.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},e.prototype.html=function(t,e=!1){for(let s=0;s<this.length;s++)if(t&&!1===e)this[s].innerHTML=t;else{if(!t||!0!==e)return this[s].innerHTML;this[s].innerHTML+=t}return this},e.prototype.eq=function(t){return t||t>=0?e(this[t]):this},e.prototype.index=function(){if(1!==this.length)return this;{const t=this[0].parentNode.children;for(let e=0;e<t.length;e++)if(t[e]===this[0])return e}},e.prototype.find=function(t){let e=!1;if(!t)throw new Error("You didn't pass a selector");let s=0,n=0;const o=Object.assign({},this);for(let i=0;i<o.length;i++){const l=o[i].querySelectorAll(t);if(0!==l.length){for(let t=0;t<l.length;t++)this[n++]=l[t],e=!0;s+=l.length}}for(this.length=s;s<Object.keys(this).length;s++)delete this[s];return!1===e&&console.log("Method find. There is no appropriate element for your selector"),this},e.prototype.closest=function(t){let e=0,s=!1;for(let n=0;n<this.length;n++)this[n].closest(t)&&(this[n]=this[n].closest(t),e++,s=!0);for(!1===s&&console.log("Method closest. There is no appropriate element for your selector"),this.length=e;e<Object.keys(this).length;e++)delete this[e];let n=0;for(let t=0;t<this.length;t++)null===this[t]?delete this[t]:n++;return this.length=n,this},e.prototype.siblings=function(){let t=0,e=0;const s=Object.assign({},this);for(let n=0;n<s.length;n++){const o=s[n].parentNode.children;for(let t=0;t<o.length;t++)o[t]!==s[n]&&(this[e++]=o[t]);t+=o.length-1}for(this.length=t;t<Object.keys(this).length;t++)delete this[t];return this},e.prototype.animateOverTime=function(t,e,s){let n;return function o(i){n||(n=i);let l=i-n,r=Math.min(l/t,1);e(r),l<t?requestAnimationFrame(o):"function"==typeof s&&s()}},e.prototype.fadeIn=function(t=300,e,s){for(let n=0;n<this.length;n++){this[n].style.display=e||"block";const o=t=>{this[n].style.opacity=t},i=this.animateOverTime(t,o,s);requestAnimationFrame(i)}return this},e.prototype.fadeOut=function(t=300,e){for(let s=0;s<this.length;s++){const n=t=>{this[s].style.opacity=1-t,1===t&&(this[s].style.display="none")},o=this.animateOverTime(t,n,e);requestAnimationFrame(o)}return this},e.prototype.fadeInDown=function(t=700,e="-50px",s,n){for(let o=0;o<this.length;o++){this[o].style.transform=`translateY(-${e}px)`,this[o].style.display=s||"block";const i=t=>{this[o].style.opacity=t;let s=e-e*t;this[o].style.transform=`translateY(-${s}px)`},l=this.animateOverTime(t,i,n);requestAnimationFrame(l)}return this},e.prototype.fadeInUp=function(t=600,e="50px",s="block",n){for(let o=0;o<this.length;o++){this[o].style.transform=`translateY(${e}px)`,this[o].style.display=s;const i=t=>{this[o].style.opacity=t;let s=e-e*t;this[o].style.transform=`translateY(${s}px)`},l=this.animateOverTime(t,i,n);requestAnimationFrame(l)}return this},e.prototype.fadeToggle=function(t=600,s,n){for(let o=0;o<this.length;o++)"none"===window.getComputedStyle(this[o]).display?e(this[o]).fadeIn(t,s,n):e(this[o]).fadeOut(t,s,n);return this},e.prototype.dropDown=function(){for(let t=0;t<this.length;t++){const s=this[t].getAttribute("data-target");e(this[t]).click((t=>{t.stopPropagation(),e("#"+s).fadeToggle(300)}))}e(".dropdown-item > a").click((function(){setTimeout((()=>{e(this).closest(".dropdown-menu").fadeToggle()}),100)}))},e.prototype.createDropDown=function({id:t=null,name:s=null,buttonsClasses:n,actionLink:o=null}){const i=document.createElement("div"),l=document.createElement("button");i.classList.add("dropdown"),l.classList.add(...n),l.setAttribute("data-toggle","generate-dropdown"),l.setAttribute("data-target",t),l.textContent=s,i.innerHTML=`\n        <ul class="dropdown-menu" id="${t}"></ul>\n    `;for(let t=0;t<this.length;t++)this[t].insertAdjacentElement("afterend",i),i.insertAdjacentElement("afterbegin",l);for(const t in o)e(i).find(".dropdown-menu").html(`\n        <li class="dropdown-item">\n                <a href="${o[t]}">${t}</a>\n            </li>\n        `,!0);e("[data-toggle='generate-dropdown']").dropDown()},e("[data-toggle='dropdown']").dropDown(),e.prototype.modal=function(){for(let t=0;t<this.length;t++){const n=this[t].getAttribute("data-target");e(this[t]).click((t=>{t.preventDefault(),e(n).fadeIn(),document.body.style.marginRight=`${s()}px`,document.body.style.overflow="hidden"})),e(n).find("[data-close]").click((t=>{e(t.target.closest(".modal")).fadeOut(),document.body.style.overflow="",document.body.style.marginRight="0px"})),e(n).closest(".modal").click((function(t){t.target.classList.contains("modal")&&(e(this).fadeOut(),document.body.style.overflow="")}))}},e.prototype.createModal=function({text:t,title:s,btns:n}){for(let o=0;o<this.length;o++){let i=document.createElement("div");const l=this[o].getAttribute("data-target").replace("#",""),r=[];if(!e(`#${l}`).length>=1){i.classList.add("modal"),i.setAttribute("id",l);for(let t=0;t<n.count();t++){let e=document.createElement("button");e.classList.add("button","modal-btn",...n.settings[t][1]),e.textContent=n.settings[t][0],n.settings[t][2]&&e.setAttribute("data-close","true"),e.addEventListener("click",n.settings[t][3]),r[t]=e}i.innerHTML=` \n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="modal-close" data-close>\n                        <span>&times;</span>\n                    </button>\n    \n                    <div class="modal-header">\n                        <div class="modal-title">${s}</div>\n                    </div>\n    \n                    <div class="modal-body">${t}</div>\n                    \n                    <div class="modal-footer">\n                        \n                    </div>\n                </div>\n            </div>`,i.querySelector(".modal-footer").append(...r),document.body.append(i),e(this[o]).modal()}e(this[o]).modal()}},e("[data-toggle='modal']").modal(),e.prototype.tab=function(){for(let t=0;t<this.length;t++)e(this[t]).click((s=>{s.preventDefault(),e(this[t]).addClass("tab-item_active").siblings().removeClass("tab-item_active").closest(".tab").find(".tab-content").removeClass("tab-content_active").eq(e(this[t]).index()).addClass("tab-content_active")}))},e("[data-tabpanel] .tab-item").tab(),e.prototype.accordion=function(t="accordion-content_active",s=20){for(let n=0;n<this.length;n++){const o=e(this[n]).siblings()[0];e(this[n]).click((()=>{e(this[n]).siblings().toggleClass(t),o.classList.contains(t)?o.style.maxHeight=o.scrollHeight+s+"px":o.style.maxHeight="0px"}))}},e.prototype.carousel=function(t=null){for(let s=0;s<this.length;s++){const n=this[s].querySelector(t),o=n.querySelector(".carousel-slides"),i=n.querySelectorAll(".carousel-item"),l=this[s].querySelectorAll(".carousel-indicators li"),r=i.length,a=n.scrollWidth;let c=0,h=0;function d(){e(l[h]).addClass("active").siblings().removeClass("active"),o.style.transform=`translateX(-${c}px)`}o.style.width=100*r+"%",i.forEach((t=>{t.style.width=a+"px"})),this[s].getAttribute("data-slide-auto")&&(console.log(1),setInterval((()=>{n.querySelector(".carousel-next").click()}),5e3)),e(this[s].querySelector(".carousel-next")).click((t=>{t.preventDefault(),c>=a*(r-1)?(c=0,h=0):(c+=a,h++),d()})),e(this[s].querySelector(".carousel-prev")).click((t=>{t.preventDefault(),0===c?(c=a*(r-1),h=r-1):(c-=a,h--),d()})),l.forEach((t=>{e(t).click((t=>{const s=t.target;h=e(s).index(),c=a*h,d()}))}))}},e("[data-toggle='slider']").carousel(".carousel-inner"),e.prototype.get=async function(t,e="json"){let s=await fetch(t);if(!s.ok)throw new Error("Couldn't get "+t+` status:${s.status}`);switch(e){case"json":return s.json();case"text":return s.text();case"blob":return s.blob()}},e.prototype.post=async function(t,e,s,n="json"){let o=await fetch(t,{method:"POST",headers:s,body:e});if(!o.ok)throw new Error("Couldn't get "+t+` status:${o.status}`);switch(n){case"json":return o.json();case"text":return o.text();case"blob":return o.blob()}}})();
//# sourceMappingURL=myOwnLibrary.js.map