import{G as i,H as c,ad as n,ae as l}from"./index-f03646fd.js";const m=async(o,e)=>{try{await i(c);const a=e.map(async s=>{const t=await n(o,s);console.log(t),t&&await l(o,s)});await Promise.all(a)}catch(a){console.log(a)}};export{m as d};