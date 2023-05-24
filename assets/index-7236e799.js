import{r as a,u as h,f as l,j as e}from"./index-77b23514.js";import"./save_excel-a6d09023.js";import{a as x}from"./axios-33ebf1bd.js";import{b as y}from"./index-d72f0557.js";import{A as p,_ as s}from"./EditOutlined-dcf97aeb.js";import c from"./index-a835130d.js";import b from"./index-dd482d6e.js";import g from"./index-bf074c2a.js";import k from"./index-113099d5.js";import j from"./index-f76c8159.js";import v from"./index-db54abe3.js";import{L as w}from"./index-b9f07d17.js";import"./index-cd958b09.js";import"./index-0273bbb3.js";import"./index-616d4dfd.js";import"./index-a60cae5f.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const S=E;var u=function(n,r){return a.createElement(p,s(s({},n),{},{ref:r,icon:S}))};u.displayName="GithubOutlined";const C=a.forwardRef(u);var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"};const T=O;var m=function(n,r){return a.createElement(p,s(s({},n),{},{ref:r,icon:T}))};m.displayName="TwitterOutlined";const z=a.forwardRef(m),P=async()=>{try{const t={method:"GET",url:"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"};return(await x.request(t)).data.USD}catch(t){return console.log(t),"/"}};const M=()=>{const[t,n]=a.useState(null);return a.useEffect(()=>{const r=async()=>{const i=await P();n(i)};r();const o=setInterval(r,1e4);return()=>clearInterval(o)},[]),t===null?e.jsx("div",{children:"Loading ETH Price..."}):e.jsxs("div",{children:["ETH Price: $",t]})},G=()=>{const t=[{label:"zkSync",key:"zksync"},{label:"Stark",key:"stark"},{label:"LayerZero",key:"layer"},{label:"Mirror",key:"mirror"},{label:"Deposit",key:"deposit"},{label:"Coffee",key:"coffee"},{label:e.jsx("a",{href:"https://github.com/wxtsky/MyWalletScan",target:"_blank",rel:"noopener noreferrer",children:e.jsx(C,{})}),key:"github"},{label:e.jsx("a",{href:"https://twitter.com/jingluo0",target:"_blank",rel:"noopener noreferrer",children:e.jsx(z,{})}),key:"twitter"},{label:e.jsx(M,{}),key:"ethPrice"}],n=h(),r=l(),[o,i]=a.useState(r.pathname.replace("/","")||"zksync"),d=f=>{i(f.key)};return a.useEffect(()=>{r.pathname.replace("/","")==="twitter"||r.pathname.replace("/","")==="github"||i(r.pathname.replace("/","")||"zksync")},[r.pathname]),a.useEffect(()=>{o==="twitter"||o==="github"||n(`/${o}`)},[o]),e.jsx(y,{onClick:d,selectedKeys:[o],mode:"horizontal",style:{display:"flex",justifyContent:"center"},className:"custom-menu",items:t})};function J(){const t=l();return e.jsx("div",{style:{backgroundColor:"#f0f2f5",minHeight:"100vh"},children:e.jsxs(w,{children:[e.jsx("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1},children:e.jsx(G,{style:{backgroundColor:"#f0f2f5",borderBottom:"1px solid #e8e8e8",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)"}})}),e.jsx("div",{style:{minHeight:"85vh",backgroundColor:"#fff",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",borderRadius:"4px",marginTop:"45px"},children:e.jsxs("div",{children:[t.pathname==="/"&&e.jsx(c,{}),t.pathname==="/zksync"&&e.jsx(c,{}),t.pathname==="/stark"&&e.jsx(b,{}),t.pathname==="/layer"&&e.jsx(g,{}),t.pathname==="/mirror"&&e.jsx(k,{}),t.pathname==="/coffee"&&e.jsx(j,{}),t.pathname==="/deposit"&&e.jsx(v,{})]})})]})})}export{J as default};
