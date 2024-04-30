import{a as v,S as E,A as h,i as c}from"./assets/vendor-f82a5958.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const q=document.querySelector(".open-menu-btn"),S=document.querySelectorAll(".header-menu-item"),k=document.querySelector(".header-menu-list");q.addEventListener("click",L);S.forEach(e=>{e.addEventListener("click",L)});function L(){k.classList.toggle("slide")}const B="https://portfolio-js.b.goit.study/api/reviews";async function p(){const{data:e}=await v.get(`${B}`,{headers:{Accept:"application/json"},method:"Get"});return e}function u(e,t){return new E(e,t)}document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".about-me-accordion-container");new h(e,{duration:400,openOnInit:[0],showMultiple:!0,beforeOpen:function(s){s.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-up")},beforeClose:function(s){s.querySelector("use[href]").setAttribute("href","/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-down")}});const t=u(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}});document.querySelector(".about-me-slide-next-btn").addEventListener("click",s=>{t.slideNext()})});const A={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:{invert:!0},keyboard:{enabled:!0,onlyInViewport:!1},grabCursor:!0,slidesPerView:1,on:{slideChange:function(){i.isEnd?i.navigation.nextEl.classList.add("swiper-button-disabled"):i.navigation.nextEl.classList.remove("swiper-button-disabled"),i.isBeginning?i.navigation.prevEl.classList.add("swiper-button-disabled"):i.navigation.prevEl.classList.remove("swiper-button-disabled")}}},C=document.querySelector(".swiper"),i=u(C,A);document.addEventListener("DOMContentLoaded",()=>{new h(".accordion",{duration:600,showMultiple:!1}),document.querySelectorAll(".ac-expand").forEach(t=>{t.addEventListener("click",()=>{const n=t.closest(".ac-item");n.classList.contains("open")?n.classList.remove("open"):(document.querySelectorAll(".ac-item.open").forEach(s=>{s.classList.remove("open")}),n.classList.add("open"))})}),document.querySelectorAll(".ac-arrow").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("up"),t.classList.toggle("down")})}),document.querySelectorAll(".ac-item.open").forEach(t=>{t.classList.remove("open")})});document.getElementById("animation");function x(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function b(){let e=document.querySelector(".marquee");x(e)?e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.add("animate-covers")}):e.querySelectorAll(".marquee__line").forEach(function(n){n.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",b);window.addEventListener("scroll",b);const _=document.querySelector(".swiper_js"),f=document.querySelector(".swiper_reviews"),w=document.querySelector(".placeholder_text"),M={navigation:{nextEl:".end",prevEl:".start"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},mousewheel:{sensitivity:1}};async function P(){try{const e=await p();f.insertAdjacentHTML("beforeend",g(e))}catch{w.classList.replace("visually-hidden","title_not_found"),c.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}try{const e=await p();f.insertAdjacentHTML("beforeend",g(e)),u(_,M)}catch{w.classList.replace("visually-hidden","title_not_found"),c.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function g(e){return e.map(({id:t,author:n,avatar_url:s,review:o})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${t}">
    <img class="card_img" src="${s}" alt="photo">
    <h3 class="card_title">${n}</h3>
    <p class="card_text">${o}</p> 
    </li>
    </div>
    `).join("")}P();const O=document.querySelector(".footer-form-button"),a=document.querySelector(".modal-backdrop"),d=document.querySelector('input[name="email"]'),y=document.querySelector('input[name="comments"]');O.addEventListener("click",V);async function V(e){e.preventDefault();const t={email:d.value,comment:y.value};d.checkValidity()?v.post("https://portfolio-js.b.goit.study/api/requests",t).then(n=>{a.classList.remove("visually-hidden"),d.value="",y.value=""}).catch(n=>{c.error({title:"Error",message:"Something is wrong, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}):c.error({title:"Error",message:"Invalid data, try again!",maxWidth:300,progressBar:!0,position:"bottomRight",color:"#1c1d20",backgroundColor:"#ed3b44"})}const I=document.querySelector(".modal-close-button");I.addEventListener("click",()=>a.classList.add("visually-hidden"));a.addEventListener("click",()=>{event.target===a&&a.classList.add("visually-hidden")});document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.add("visually-hidden")});const R=document.querySelector(".open-modal-btn"),j=document.querySelector(".close-modal-btn"),N=document.querySelectorAll(".modal-item-link"),D=document.querySelector(".modal-window-cont");R.addEventListener("click",m);j.addEventListener("click",m);N.forEach(e=>{e.addEventListener("click",m)});function m(){D.classList.toggle("is-open"),document.body.classList.toggle("menu-is-open")}
//# sourceMappingURL=commonHelpers.js.map
