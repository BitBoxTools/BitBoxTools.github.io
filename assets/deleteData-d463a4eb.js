import{B as c,F as e,ab as n,ac as l}from"./index-1bdaea6e.js";const m=async(o,i)=>{try{await c(e);const a=i.map(async s=>{const t=await n(o,s);console.log(t),t&&await l(o,s)});await Promise.all(a)}catch(a){console.log(a)}};export{m as d};