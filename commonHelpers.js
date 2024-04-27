import{a,S as l}from"./assets/vendor-95712d29.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://portfolio-js.b.goit.study/api/reviews";async function u(){const{data:r}=await a.get(`${d}`,{headers:{Accept:"application/json"},method:"Get"});return r}const p=document.querySelector(".swiper-container"),f=new l(p,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});console.log(f);function m(){const r=document.querySelector(".content"),o=document.querySelectorAll(".marquee__line");function n(t){t.forEach(i=>{i.isIntersecting?o.forEach(c=>c.classList.add("animate-covers")):o.forEach(c=>c.classList.remove("animate-covers"))})}let s={threshold:[.5]};new IntersectionObserver(n,s).observe(r)}m();const g=document.querySelector(".reviews_swiper_wrapper");async function h(){try{const r=await u();g.insertAdjacentHTML("beforeend",y(r))}catch(r){console.log(r.message)}}function y(r){return r.map(({id:o,author:n,avatar_url:s,review:e})=>`
    <div class="reviews_swiper_slide">
    <li class="card" data-id ="${o}">
    <img class="card_img" src="${s}" alt="photo">
    <h3 class="card_title">${n}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}h();
//# sourceMappingURL=commonHelpers.js.map
