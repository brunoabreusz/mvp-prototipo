(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();document.querySelector("#year").textContent=new Date().getFullYear();const a=document.querySelector(".menu-button"),d=document.querySelector(".nav");a.addEventListener("click",()=>{const t=a.getAttribute("aria-expanded")==="true";a.setAttribute("aria-expanded",String(!t)),d.classList.toggle("is-open",!t)});document.querySelectorAll(".nav a").forEach(t=>t.addEventListener("click",()=>{a.setAttribute("aria-expanded","false"),d.classList.remove("is-open")}));const l=document.querySelectorAll("section, .leaders article");l.forEach(t=>t.classList.add("reveal"));const u=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),u.unobserve(r.target))})},{threshold:.12});l.forEach(t=>u.observe(t));const f=document.createElement("style");f.textContent=`
  .hero > div:first-child > * { animation: heroIn .75s both; }
  .hero > div:first-child > :nth-child(2) { animation-delay: .12s; }
  .hero > div:first-child > :nth-child(3) { animation-delay: .24s; }
  .hero > div:first-child > :nth-child(4) { animation-delay: .36s; }
  .result-card { animation: cardIn .9s .15s both, cardFloat 4s 1.2s ease-in-out infinite; transition: transform .2s ease; }
  .result-card::after { animation-duration: 4s; }
  .stats b { animation: statPulse 2s ease-in-out infinite; }
  .stats b:nth-child(2) { animation-delay: .25s; }.stats b:nth-child(3) { animation-delay: .5s; }
  @keyframes heroIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:none; } }
  @keyframes cardIn { from { opacity:0; transform:translateX(55px) rotate(3deg); } to { opacity:1; transform:none; } }
  @keyframes cardFloat { 50% { transform:translateY(-11px) rotate(-.5deg); } }
  @keyframes statPulse { 50% { color:#d9ff39; transform:translateY(-5px); } }
  @media (prefers-reduced-motion: reduce) { .hero > div:first-child > *, .result-card, .result-card::after, .stats b { animation:none !important; } }
`;document.head.append(f);const o=document.querySelector(".result-card");o?.addEventListener("pointermove",t=>{const r=o.getBoundingClientRect(),i=(t.clientX-r.left)/r.width-.5,s=(t.clientY-r.top)/r.height-.5;o.style.transform=`perspective(700px) rotateY(${i*5}deg) rotateX(${s*-5}deg)`});o?.addEventListener("pointerleave",()=>{o.style.transform=""});
