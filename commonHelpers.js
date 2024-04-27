import{a,S as l}from"./assets/vendor-93c6b08c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d="https://portfolio-js.b.goit.study/api/reviews";async function u(){const{data:r}=await a.get(`${d}`,{headers:{Accept:"application/json"},method:"Get"});return r}const f=document.querySelector(".swiper"),p=new l(f);console.log(p);function m(){const r=document.querySelector(".content"),s=document.querySelectorAll(".marquee__line");function c(t){t.forEach(i=>{i.isIntersecting?s.forEach(n=>n.classList.add("animate-covers")):s.forEach(n=>n.classList.remove("animate-covers"))})}let o={threshold:[.5]};new IntersectionObserver(c,o).observe(r)}m();const h=document.querySelector(".reviews_swiper_wrapper");async function y(){try{const r=await u();h.insertAdjacentHTML("beforeend",g(r))}catch(r){console.log(r.message)}}function g(r){return r.map(({id:s,author:c,avatar_url:o,review:e})=>`
    <div class="reviews_swiper_slide">
    <li class="card" data-id ="${s}">
    <img class="card_img" src="${o}" alt="photo">
    <h3 class="card_title">${c}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}y();
//# sourceMappingURL=commonHelpers.js.map
