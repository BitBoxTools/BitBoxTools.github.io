import{i as e,d as c,g as n,r as l}from"./main-d045f560.js";const g=async(o,i)=>{try{await e(c);const a=i.map(async s=>{const t=await n(o,s);console.log(t),t&&await l(o,s)});await Promise.all(a)}catch(a){console.log(a)}};export{g as d};