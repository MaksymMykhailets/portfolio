import{a as n,S as a}from"./assets/vendor-93c6b08c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l="https://portfolio-js.b.goit.study/api/reviews";async function d(){const{data:r}=await n.get(`${l}`,{headers:{Accept:"application/json"},method:"Get"});return r}const u=document.querySelector(".swiper"),p=new a(u);console.log(p);const f=document.querySelector(".reviews_swiper_wrapper");async function m(){try{const r=await d();f.insertAdjacentHTML("beforeend",g(r))}catch(r){console.log(r.message)}}function g(r){return r.map(({id:s,author:i,avatar_url:o,review:e})=>`
    <div class="reviews_swiper_slide">
    <li class="card" data-id ="${s}">
    <img class="card_img" src="${o}" alt="photo">
    <h3 class="card_title">${i}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}m();
//# sourceMappingURL=commonHelpers.js.map
