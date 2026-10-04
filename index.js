/* empty css                      */import{a as P,S as q,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M=void 0,B="https://pixabay.com/api/";async function p(o,t){return(await P.get(B,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=document.querySelector(".load-more"),E=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:S,downloads:v})=>`
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
            <p><b>Comments</b><span>${S}</span></p>
            <p><b>Downloads</b><span>${v}</span></p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),E.refresh()}function $(){m.innerHTML=""}function h(){f.classList.add("is-visible")}function L(){f.classList.remove("is-visible")}function u(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}const b=document.querySelector(".form"),O=document.querySelector(".load-more");let l="",a=1;const w=15;d();b.addEventListener("submit",R);O.addEventListener("click",x);async function R(o){if(o.preventDefault(),l=o.currentTarget.elements["search-text"].value.trim(),!!l){a=1,$(),d(),h();try{const t=await p(l,a);if(t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits);const s=Math.ceil(t.totalHits/w);a<s&&u()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L()}b.reset()}}async function x(){a+=1,d(),h();try{const o=await p(l,a);y(o.hits);const t=Math.ceil(o.totalHits/w),s=document.querySelector(".gallery-item");if(s){const i=s.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}a<t?u():(d(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a-=1,c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),u()}finally{L()}}
//# sourceMappingURL=index.js.map
