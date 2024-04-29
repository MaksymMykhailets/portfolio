import{a as f,S as y,A as v,i as u}from"./assets/vendor-05c5c2f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const b=document.querySelector(".open-menu-btn"),h=document.querySelectorAll(".header-menu-item"),L=document.querySelector(".header-menu-list");b.addEventListener("click",w);h.forEach(e=>{e.addEventListener("click",w)});function w(){L.classList.toggle("slide")}const q="https://portfolio-js.b.goit.study/api/reviews";async function S(){const{data:e}=await f.get(`${q}`,{headers:{Accept:"application/json"},method:"Get"});return e}function a(e,t){return new y(e,t)}console.log("initSwiper");console.log(a);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new v(e,{duration:400,openOnInit:[0],showMultiple:!0,beforeOpen:function(t){t.querySelector("use[href]").setAttribute("href","../icons/icon-sprite.svg#icon-arrow-up")},beforeClose:function(t){t.querySelector("use[href]").setAttribute("href","../icons/icon-sprite.svg#icon-arrow-down")}})});const E=a(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}}),k=document.querySelector(".about-me-slide-next");k.addEventListener("click",e=>{console.log(e),E.slideNext()});const B={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,slidesPerView:1,on:{slideChange:function(){i.isEnd?i.navigation.nextEl.classList.add("swiper-button-disabled"):i.navigation.nextEl.classList.remove("swiper-button-disabled"),i.isBeginning?i.navigation.prevEl.classList.add("swiper-button-disabled"):i.navigation.prevEl.classList.remove("swiper-button-disabled")}}},x=document.querySelector(".swiper"),i=a(x,B);document.getElementById("animation");function A(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function g(){let e=document.querySelector(".marquee");A(e)?e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.add("animate-covers")}):e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",g);window.addEventListener("scroll",g);const C=document.querySelector(".swiper_js"),P=document.querySelector(".swiper_reviews"),_=document.querySelector(".placeholder_text"),V={navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}};async function O(){try{const e=await S();P.insertAdjacentHTML("beforeend",I(e)),a(C,V)}catch{_.classList.replace("visually-hidden","title_not_found"),u.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function I(e){return e.map(({id:t,author:n,avatar_url:c,review:o})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${t}">
    <img class="card_img" src="${c}" alt="photo">
    <h3 class="card_title">${n}</h3>
    <p class="card_text">${o}</p> 
    </li>
    </div>
    `).join("")}O();const M=document.querySelector(".footer-form-button"),s=document.querySelector(".modal-backdrop"),d=document.querySelector('input[name="email"]'),p=document.querySelector('input[name="comments"]');M.addEventListener("click",j);async function j(e){e.preventDefault();const t={email:d.value,comment:p.value};d.checkValidity()?f.post("https://portfolio-js.b.goit.study/api/requests",t).then(n=>{s.classList.remove("visually-hidden"),d.value="",p.value=""}).catch(n=>{u.error({title:"Error",message:"Something is wrong, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}):u.error({title:"Error",message:"Invalid data, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}const R=document.querySelector(".modal-close-button");R.addEventListener("click",()=>s.classList.add("visually-hidden"));s.addEventListener("click",()=>{event.target===s&&s.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&s.classList.add("visually-hidden")});const N=document.querySelector(".open-modal-btn"),$=document.querySelector(".close-modal-btn"),D=document.querySelectorAll(".modal-item-link"),F=document.querySelector(".modal-window-cont");N.addEventListener("click",m);$.addEventListener("click",m);D.forEach(e=>{e.addEventListener("click",m)});function m(){F.classList.toggle("is-open"),document.body.classList.toggle("menu-is-open")}
//# sourceMappingURL=commonHelpers.js.map
