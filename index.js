/* empty css                      */import{a as P,S as q,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M=void 0,B="https://pixabay.com/api/";async function p(o,t){return(await P.get(B,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),m=document.querySelector(".load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:v,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="image-info">
            <p><b>Likes</b><span>${r}</span></p>
            <p><b>Views</b><span>${n}</span></p>
            <p><b>Comments</b><span>${v}</span></p>
            <p><b>Downloads</b><span>${S}</span></p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),E.refresh()}function R(){f.innerHTML=""}function y(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}function d(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}const L=document.querySelector(".form"),$=document.querySelector(".load-more");let u="",a=1;const w=15;c();L.addEventListener("submit",O);$.addEventListener("click",x);async function O(o){if(o.preventDefault(),u=o.currentTarget.elements["search-text"].value.trim(),!!u){a=1,R(),c(),y();try{const t=await p(u,a);if(t.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits);const s=Math.ceil(t.totalHits/w);a<s?d():(c(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}L.reset()}}async function x(){a+=1,c(),y();try{const o=await p(u,a);h(o.hits);const t=Math.ceil(o.totalHits/w),s=document.querySelector(".gallery-item");if(s){const i=s.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}a<t?d():(c(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a-=1,l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{b()}}
//# sourceMappingURL=index.js.map
