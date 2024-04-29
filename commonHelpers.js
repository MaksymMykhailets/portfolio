import{a as m,S as p,A as f,i as w}from"./assets/vendor-3641e0b2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const g=document.querySelector(".open-menu-btn"),y=document.querySelectorAll(".header-menu-item"),b=document.querySelector(".header-menu-list");g.addEventListener("click",d);y.forEach(e=>{e.addEventListener("click",d)});function d(){b.classList.toggle("slide")}const h="https://portfolio-js.b.goit.study/api/reviews";async function L(){const{data:e}=await m.get(`${h}`,{headers:{Accept:"application/json"},method:"Get"});return e}function a(e,t){return new p(e,t)}console.log("initSwiper");console.log(a);document.addEventListener("DOMContentLoaded",function(){const e=Array.from(document.querySelectorAll(".accordion-container"));new f(e,{duration:400,openOnInit:[0],showMultiple:!0,beforeOpen:function(t){t.querySelector("use[href]").setAttribute("href","../icons/icon-sprite.svg#icon-arrow-up")},beforeClose:function(t){t.querySelector("use[href]").setAttribute("href","../icons/icon-sprite.svg#icon-arrow-down")}})});const v=a(".about-me-swiper",{loop:!0,spaceBetween:0,slidesPerView:2,direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3,spaceBetween:0},1440:{slidesPerView:6,spaceBetween:0}}}),q=document.querySelector(".about-me-slide-next");q.addEventListener("click",e=>{console.log(e),v.slideNext()});const S={navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,on:{slideChange:function(){r.isEnd?r.navigation.nextEl.classList.add("swiper-button-disabled"):r.navigation.nextEl.classList.remove("swiper-button-disabled"),r.isBeginning?r.navigation.prevEl.classList.add("swiper-button-disabled"):r.navigation.prevEl.classList.remove("swiper-button-disabled")}}},E=document.querySelector(".swiper"),r=a(E,S);document.getElementById("animation");function A(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function u(){let e=document.querySelector(".marquee");A(e)?e.querySelectorAll(".marquee__line").forEach(function(i){i.classList.add("animate-covers")}):e.querySelectorAll(".marquee__line").forEach(function(i){i.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",u);window.addEventListener("scroll",u);const x=document.querySelector(".swiper-wrapper"),B=document.querySelector(".placeholder_text");async function O(){try{const e=await L();x.insertAdjacentHTML("beforeend",_(e))}catch{B.classList.replace("visually-hidden","title_not_found"),w.show({message:"Reviews Not found",backgroundColor:"#ed3b44",messageColor:"#fafafa",position:"topRight",timeout:2e3})}}function _(e){return e.map(({id:t,author:i,avatar_url:s,review:o})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${t}">
    <img class="card_img" src="${s}" alt="photo">
    <h3 class="card_title">${i}</h3>
    <p class="card_text">${o}</p> 
    </li>
    </div>
    `).join("")}O();const C=document.querySelector(".open-modal-btn"),M=document.querySelector(".close-modal-btn"),P=document.querySelectorAll(".modal-item-link"),I=document.querySelector(".modal-window-cont");C.addEventListener("click",l);M.addEventListener("click",l);P.forEach(e=>{e.addEventListener("click",l)});function l(){I.classList.toggle("is-open"),document.body.classList.toggle("menu-is-open")}
//# sourceMappingURL=commonHelpers.js.map
