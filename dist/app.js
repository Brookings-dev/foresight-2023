!function(){"use strict";function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"null";window.dataLayer.push({event:"Interactive",category:"Interactive",action:e,label:t})}document.addEventListener("readystatechange",(function(){"interactive"===document.readyState&&function(){function t(){return window.matchMedia("(max-width:1024px)").matches}var n,o,c,a,l,r,i,s,d,u,v,m,y,p,f;!function(){var t=document.getElementById("js--chapter"),n=document.getElementById("fa22--nav__chapter-menu"),o=document.querySelectorAll("#fa22--nav__chapter-menu .chapter__item");t.addEventListener("click",(function(){e("dropdown_menu","dropdown"),n.classList.contains("js--open")?n.classList.remove("js--open"):n.classList.add("js--open")}));for(var c=function(t){o[t].addEventListener("click",(function(n){e("dropdown_menu","chapter_0".concat(t+1))}))},a=0;a<o.length;a++)c(a)}(),document.querySelectorAll(".report__buttons button").forEach((function(e){e.addEventListener("click",(function(t){var n=e.parentElement.parentElement,o=n.querySelector(".btn__active"),c=n.querySelector(".js--active-view"),a=e.classList.value.split("btn__")[1];t.target.blur(),o.classList.remove("btn__active"),c.classList.remove("js--active-view"),e.classList.add("btn__active"),n.querySelector(".".concat(a,"__container")).classList.add("js--active-view")}))})),(n=document.getElementById("btn--expand")).addEventListener("click",(function(){var e=document.querySelectorAll(".past__entry.js--hidden");event.target.blur(),e.forEach((function(e){e.classList.remove("js--hidden")})),n.style.display="none"})),t()||document.querySelectorAll("img.js--imgDefer").forEach((function(e){e.setAttribute("src",e.getAttribute("data-src"))})),document.querySelectorAll(".viewpoint__expand button.js--expandable").forEach((function(e){e.addEventListener("click",(function(t){var n=e.parentElement.parentElement.querySelectorAll(".viewpoint__entry");t.target.blur();for(var o=0;o<n.length;o++)n[o].style.display=null;e.parentElement.style.display="none"}))})),t()&&document.querySelectorAll(".fa22--chapters").forEach((function(e){var t=e.querySelectorAll(".viewpoint__entry");if(t.length>2)for(var n=2;n<t.length;n++)t[n].style.display="none";else null!=e.querySelector(".viewpoint__expand")&&(e.querySelector(".viewpoint__expand").style.display="none")})),document.querySelectorAll(".fa22--chapters__viewpoints").forEach((function(e){var t=e.querySelector("h3"),n=e.querySelectorAll(".viewpoint__entry");0==n.length?t.style.display="none":n.length>0&&(t.style=null)})),o=document.getElementById("fa22--event").getAttribute("data-start"),c=new Date,a=(new Date).getTime(),l=Date.parse(o)-a,r=document.getElementById("fa22--event").getAttribute("data-end"),(i=Date.parse(o))<(s=Date.parse(c))?document.getElementById("fa22--event").style.display="none":l<0&&a<r?console.log("currently"):i>s&&console.log("upcoming"),d=document.querySelector("html").offsetTop,u=document.getElementById("fa22--nav"),d>0&&(u.style.top="80px"),v=document.querySelectorAll("#fa22--nav__top-level li a"),m=document.getElementById("fa22--nav__chapter-menu"),v.forEach((function(e){e.addEventListener("click",(function(){m.classList.contains("js--open")&&m.classList.remove("js--open"),window.scrollBy(0,-150)}))})),y=document.getElementById("fa22--report-btn"),p=document.getElementById("event__register"),f=document.getElementById("event__learn-more"),y.addEventListener("click",(function(){e("download","pdf")})),p.addEventListener("click",(function(){e("button_click","event_register")})),f.addEventListener("click",(function(){e("button_click","event_more_details")})),window.addEventListener("scroll",(function(){var e=document.getElementById("fa22--nav"),t=document.querySelector(".fa22--header-container"),n=e.querySelector("#fa22--nav__chapter-menu"),o=t.getBoundingClientRect(),c=document.querySelector(".site-header.not-top");o.bottom<0?(e.style.opacity=1,null!=c&&(e.style.top=c.clientHeight+c.offsetTop+5+"px")):n.classList.contains("js--open")||(e.style.opacity=null)}))}()}),!1)}();