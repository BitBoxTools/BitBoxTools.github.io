import{r as l,R as c,u as rt,f as q,j as i}from"./index-f463c1cc.js";import"./save_excel-3a6debef.js";import{a as at}from"./axios-c5ddd14c.js";import{i as it,s as lt,g as st,b as ct,M as dt}from"./index-132f6ce7.js";import{n as G,Y as ut,A as R,_ as S,c as $,g as pt,m as mt,K as A,a3 as ft,r as W,C as N,ah as gt,aj as ht,ap as bt,d as U,U as xt}from"./EditOutlined-63592b3c.js";import{B as yt,Z as D}from"./index-b8b530b0.js";import vt from"./index-cb531391.js";import $t from"./index-0faf510a.js";import St from"./index-a2c70b87.js";import Ct from"./index-176714f3.js";import Bt from"./index-511e1193.js";import{L as Ot}from"./index-0351aee5.js";import"./index-914ca56d.js";import"./index-d5163d2f.js";import"./index-2c358e2e.js";function wt(t){let n;const e=r=>()=>{n=null,t.apply(void 0,ut(r))},o=function(){if(n==null){for(var r=arguments.length,a=new Array(r),d=0;d<r;d++)a[d]=arguments[d];n=G(e(a))}};return o.cancel=()=>{G.cancel(n),n=null},o}var Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const jt=Et;var X=function(n,e){return l.createElement(R,S(S({},n),{},{ref:e,icon:jt}))};X.displayName="VerticalAlignTopOutlined";const Tt=l.forwardRef(X);var Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"};const It=Pt;var K=function(n,e){return l.createElement(R,S(S({},n),{},{ref:e,icon:It}))};K.displayName="FileTextOutlined";const Z=l.forwardRef(K),zt=t=>{const{icon:n,description:e,prefixCls:o,className:r}=t,a=c.createElement("div",{className:`${o}-icon`},c.createElement(Z,null));return c.createElement("div",{onClick:t.onClick,onFocus:t.onFocus,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,className:$(r,`${o}-content`)},n||e?c.createElement(c.Fragment,null,n&&c.createElement("div",{className:`${o}-icon`},n),e&&c.createElement("div",{className:`${o}-description`},e)):a)},Mt=l.memo(zt),Y=c.createContext(void 0),{Provider:Rt}=Y,J=Y,Nt=t=>t===0?0:t-Math.sqrt(Math.pow(t,2)/2),_=Nt,Ft=t=>{const{componentCls:n,floatButtonSize:e,motionDurationSlow:o,motionEaseInOutCirc:r}=t,a=`${n}-group`,d=new A("antFloatButtonMoveDownIn",{"0%":{transform:`translate3d(0, ${e}px, 0)`,transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),u=new A("antFloatButtonMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:`translate3d(0, ${e}px, 0)`,transformOrigin:"0 0",opacity:0}});return[{[`${a}-wrap`]:Object.assign({},ft(`${a}-wrap`,d,u,o,!0))},{[`${a}-wrap`]:{[`
          &${a}-wrap-enter,
          &${a}-wrap-appear
        `]:{opacity:0,animationTimingFunction:r},[`&${a}-wrap-leave`]:{animationTimingFunction:r}}}]},kt=t=>{const{antCls:n,componentCls:e,floatButtonSize:o,margin:r,borderRadiusLG:a,borderRadiusSM:d,badgeOffset:u,floatButtonBodyPadding:m}=t,s=`${e}-group`;return{[s]:Object.assign(Object.assign({},W(t)),{zIndex:99,display:"block",border:"none",position:"fixed",width:o,height:"auto",boxShadow:"none",minHeight:o,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,borderRadius:a,[`${s}-wrap`]:{zIndex:-1,display:"block",position:"relative",marginBottom:r},[`&${s}-rtl`]:{direction:"rtl"},[e]:{position:"static"}}),[`${s}-circle`]:{[`${e}-circle:not(:last-child)`]:{marginBottom:t.margin,[`${e}-body`]:{width:o,height:o,borderRadius:"50%"}}},[`${s}-square`]:{[`${e}-square`]:{borderRadius:0,padding:0,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${n}-badge`]:{[`${n}-badge-count`]:{top:-(m+u),insetInlineEnd:-(m+u)}}},[`${s}-wrap`]:{display:"block",borderRadius:a,boxShadow:t.boxShadowSecondary,[`${e}-square`]:{boxShadow:"none",marginTop:0,borderRadius:0,padding:m,"&:first-child":{borderStartStartRadius:a,borderStartEndRadius:a},"&:last-child":{borderEndStartRadius:a,borderEndEndRadius:a},"&:not(:last-child)":{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`},[`${e}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize}}}},[`${s}-circle-shadow`]:{boxShadow:"none"},[`${s}-square-shadow`]:{boxShadow:t.boxShadowSecondary,[`${e}-square`]:{boxShadow:"none",padding:m,[`${e}-body`]:{width:t.floatButtonBodySize,height:t.floatButtonBodySize,borderRadius:d}}}}},Ht=t=>{const{antCls:n,componentCls:e,floatButtonBodyPadding:o,floatButtonIconSize:r,floatButtonSize:a,borderRadiusLG:d,badgeOffset:u,dotOffsetInSquare:m,dotOffsetInCircle:s}=t;return{[e]:Object.assign(Object.assign({},W(t)),{border:"none",position:"fixed",cursor:"pointer",zIndex:99,display:"block",justifyContent:"center",alignItems:"center",width:a,height:a,insetInlineEnd:t.floatButtonInsetInlineEnd,insetBlockEnd:t.floatButtonInsetBlockEnd,boxShadow:t.boxShadowSecondary,"&-pure":{position:"relative",inset:"auto"},"&:empty":{display:"none"},[`${n}-badge`]:{width:"100%",height:"100%",[`${n}-badge-count`]:{transform:"translate(0, 0)",transformOrigin:"center",top:-u,insetInlineEnd:-u}},[`${e}-body`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",transition:`all ${t.motionDurationMid}`,[`${e}-content`]:{overflow:"hidden",textAlign:"center",minHeight:a,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:`${o/2}px ${o}px`,[`${e}-icon`]:{textAlign:"center",margin:"auto",width:r,fontSize:r,lineHeight:1}}}}),[`${e}-rtl`]:{direction:"rtl"},[`${e}-circle`]:{height:a,borderRadius:"50%",[`${n}-badge`]:{[`${n}-badge-dot`]:{top:s,insetInlineEnd:s}},[`${e}-body`]:{borderRadius:"50%"}},[`${e}-square`]:{height:"auto",minHeight:a,borderRadius:d,[`${n}-badge`]:{[`${n}-badge-dot`]:{top:m,insetInlineEnd:m}},[`${e}-body`]:{height:"auto",borderRadius:d}},[`${e}-default`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,[`${e}-body`]:{backgroundColor:t.floatButtonBackgroundColor,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorFillContent},[`${e}-content`]:{[`${e}-icon`]:{color:t.colorText},[`${e}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorText,fontSize:t.fontSizeSM}}}},[`${e}-primary`]:{backgroundColor:t.colorPrimary,[`${e}-body`]:{backgroundColor:t.colorPrimary,transition:`background-color ${t.motionDurationMid}`,"&:hover":{backgroundColor:t.colorPrimaryHover},[`${e}-content`]:{[`${e}-icon`]:{color:t.colorTextLightSolid},[`${e}-description`]:{display:"flex",alignItems:"center",lineHeight:`${t.fontSizeLG}px`,color:t.colorTextLightSolid,fontSize:t.fontSizeSM}}}}}},H=pt("FloatButton",t=>{const{colorTextLightSolid:n,colorBgElevated:e,controlHeightLG:o,marginXXL:r,marginLG:a,fontSize:d,fontSizeIcon:u,controlItemBgHover:m,paddingXXS:s,borderRadiusLG:b}=t,p=mt(t,{floatButtonBackgroundColor:e,floatButtonColor:n,floatButtonHoverBackgroundColor:m,floatButtonFontSize:d,floatButtonIconSize:u*1.5,floatButtonSize:o,floatButtonInsetBlockEnd:r,floatButtonInsetInlineEnd:a,floatButtonBodySize:o-s*2,floatButtonBodyPadding:s,badgeOffset:s*1.5,dotOffsetInCircle:_(o/2),dotOffsetInSquare:_(b)});return[kt(p),Ht(p),it(t),Ft(p)]});var Lt=globalThis&&globalThis.__rest||function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e};const F="float-btn",Gt=(t,n)=>{const{prefixCls:e,className:o,rootClassName:r,type:a="default",shape:d="circle",icon:u,description:m,tooltip:s,badge:b={}}=t,p=Lt(t,["prefixCls","className","rootClassName","type","shape","icon","description","tooltip","badge"]),{getPrefixCls:I,direction:x}=l.useContext(N),C=l.useContext(J),f=I(F,e),[E,h]=H(f),j=C||d,T=$(h,f,o,r,`${f}-${a}`,`${f}-${j}`,{[`${f}-rtl`]:x==="rtl"}),P=l.useMemo(()=>gt(b,["title","children","status","text"]),[b]),B=l.useMemo(()=>({prefixCls:f,description:m,icon:u,type:a}),[f,m,u,a]),O=c.createElement(ht,{title:s,placement:x==="rtl"?"right":"left"},c.createElement(yt,Object.assign({},P),c.createElement("div",{className:`${f}-body`},c.createElement(Mt,Object.assign({},B)))));return E(t.href?c.createElement("a",Object.assign({ref:n},p,{className:T}),O):c.createElement("button",Object.assign({ref:n},p,{className:T,type:"button"}),O))},At=c.forwardRef(Gt),w=At,Dt=t=>{const{prefixCls:n,className:e,style:o,shape:r="circle",type:a="default",icon:d=c.createElement(Z,null),closeIcon:u=c.createElement(xt,null),description:m,trigger:s,children:b,onOpenChange:p}=t,{direction:I,getPrefixCls:x}=l.useContext(N),C=x(F,n),[f,E]=H(C),h=`${C}-group`,j=$(h,E,e,{[`${h}-rtl`]:I==="rtl",[`${h}-${r}`]:r,[`${h}-${r}-shadow`]:!s}),T=$(E,`${h}-wrap`),[P,B]=bt(!1,{value:t.open}),O=l.useRef(null),M=l.useRef(null),y=l.useMemo(()=>s==="hover"?{onMouseEnter(){B(!0),p==null||p(!0)},onMouseLeave(){B(!1),p==null||p(!1)}}:{},[s]),g=()=>{B(v=>(p==null||p(!v),!v))},L=l.useCallback(v=>{var z,k;if(!((z=O.current)===null||z===void 0)&&z.contains(v.target)){!((k=M.current)===null||k===void 0)&&k.contains(v.target)&&g();return}B(!1),p==null||p(!1)},[s]);return l.useEffect(()=>{if(s==="click")return document.addEventListener("click",L),()=>{document.removeEventListener("click",L)}},[s]),f(c.createElement(Rt,{value:r},c.createElement("div",Object.assign({ref:O,className:j,style:o},y),s&&["click","hover"].includes(s)?c.createElement(c.Fragment,null,c.createElement(U,{visible:P,motionName:`${h}-wrap`},v=>{let{className:z}=v;return c.createElement("div",{className:$(z,T)},b)}),c.createElement(w,{ref:M,type:a,shape:r,icon:P?u:d,description:m})):b)))},Q=l.memo(Dt);var _t=globalThis&&globalThis.__rest||function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e};const Vt=t=>{const{prefixCls:n,className:e,type:o="default",shape:r="circle",visibilityHeight:a=400,icon:d=c.createElement(Tt,null),target:u,onClick:m,duration:s=450}=t,b=_t(t,["prefixCls","className","type","shape","visibilityHeight","icon","target","onClick","duration"]),[p,I]=l.useState(a===0),x=l.useRef(null),C=()=>x.current&&x.current.ownerDocument?x.current.ownerDocument:window,f=wt(y=>{const g=st(y.target,!0);I(g>=a)});l.useEffect(()=>{const g=(u||C)();return f({target:g}),g==null||g.addEventListener("scroll",f),()=>{f.cancel(),g==null||g.removeEventListener("scroll",f)}},[u]);const E=y=>{lt(0,{getContainer:u||C,duration:s}),m==null||m(y)},{getPrefixCls:h}=l.useContext(N),j=h(F,n),T=h(),[P]=H(j),O=l.useContext(J)||r,M=Object.assign({prefixCls:j,icon:d,type:o,shape:O},b);return P(c.createElement(U,{visible:p,motionName:`${T}-fade`},y=>{let{className:g}=y;return c.createElement(w,Object.assign({ref:x},M,{onClick:E,className:$(e,g)}))}))},tt=l.memo(Vt);var et=globalThis&&globalThis.__rest||function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]]);return e};const V=t=>{var{backTop:n}=t,e=et(t,["backTop"]);return n?l.createElement(tt,Object.assign({},e,{visibilityHeight:0})):l.createElement(w,Object.assign({},e))};function qt(t){var{className:n,items:e}=t,o=et(t,["className","items"]);const{prefixCls:r}=o,{getPrefixCls:a}=l.useContext(N),u=`${a(F,r)}-pure`;return e?l.createElement(Q,Object.assign({className:$(n,u)},o),e.map((m,s)=>l.createElement(V,Object.assign({key:s},m)))):l.createElement(V,Object.assign({className:$(n,u)},o))}const Wt=l.memo(qt);w.BackTop=tt;w.Group=Q;w._InternalPanelDoNotUseOrYouWillBeFired=Wt;var Ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const Xt=Ut;var ot=function(n,e){return l.createElement(R,S(S({},n),{},{ref:e,icon:Xt}))};ot.displayName="GithubOutlined";const Kt=l.forwardRef(ot);var Zt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]},name:"twitter",theme:"outlined"};const Yt=Zt;var nt=function(n,e){return l.createElement(R,S(S({},n),{},{ref:e,icon:Yt}))};nt.displayName="TwitterOutlined";const Jt=l.forwardRef(nt),Qt=async()=>{try{const t={method:"GET",url:"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"};return(await at.request(t)).data.USD}catch(t){return console.log(t),"/"}};const te=()=>{const[t,n]=l.useState(null);return l.useEffect(()=>{const e=async()=>{const r=await Qt();n(r)};e();const o=setInterval(e,1e4);return()=>clearInterval(o)},[]),t===null?i.jsx("div",{children:"Loading ETH Price..."}):i.jsxs("div",{children:["ETH Price: $",t]})},ee=()=>{const t=[{label:"zkSync",key:"zksync"},{label:"Stark",key:"stark"},{label:"LayerZero",key:"layer"},{label:"Mirror",key:"mirror"},{label:"Deposit",key:"deposit"},{label:"Coffee",key:"coffee"},{label:i.jsx("a",{href:"https://github.com/wxtsky/MyWalletScan",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Kt,{})}),key:"github"},{label:i.jsx("a",{href:"https://twitter.com/jingluo0",target:"_blank",rel:"noopener noreferrer",children:i.jsx(Jt,{})}),key:"twitter"},{label:i.jsx(te,{}),key:"ethPrice"}],n=rt(),e=q(),[o,r]=l.useState(e.pathname.replace("/","")||"zksync"),a=d=>{r(d.key)};return l.useEffect(()=>{e.pathname.replace("/","")==="twitter"||e.pathname.replace("/","")==="github"||r(e.pathname.replace("/","")||"zksync")},[e.pathname]),l.useEffect(()=>{o==="twitter"||o==="github"||n(`/${o}`)},[o]),i.jsx(ct,{onClick:a,selectedKeys:[o],mode:"horizontal",style:{display:"flex",justifyContent:"center"},className:"custom-menu",items:t})},oe=()=>{const[t,n]=l.useState(!1);return l.useEffect(()=>{n(!0)},[]),i.jsx("div",{children:i.jsxs(dt,{title:"注意事项(2023-05-17)",open:t,onOk:()=>n(!1),onCancel:()=>n(!1),style:{fontFamily:"Arial, sans-serif",top:20},okText:"知道了",children:[i.jsx("h2",{style:{color:"#333",marginBottom:"15px"},children:"Hello,大家好，我是开发者北北"}),i.jsx("p",{style:{color:"#666",marginBottom:"10px"},children:"开发这款工具的初衷是为了方便大家查看自己的钱包信息，一直秉持着免费开源的原则，希望大家喜欢。"}),i.jsx("p",{style:{color:"#666",marginBottom:"10px"},children:"一开始我开发这款工具的时候，是放到自己的国内服务器上供大家使用的，但是，由于政策相关原因，我不得不将他迁移到Github静态页面上。"}),i.jsx("p",{style:{color:"#666",marginBottom:"10px"},children:"为什么要这样做？"}),i.jsxs("ul",{children:[i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"1. 由于服务器和域名原因，每次大家都得输入地址才能访问，不方便。"}),i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"2. 迁移到Github以后，大家可以直接通过域名访问。"}),i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"3. 迁移以后，这款工具依旧是永久免费和永久开源的。永远都不会收费。"}),i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"4. 迁移以后，能够更快的访问网页，不会出现卡顿或者打不开网页的情况。"})]}),i.jsx("p",{style:{color:"#666",marginBottom:"10px"},children:"迁移注意事项"}),i.jsxs("ul",{children:[i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"1. 迁移到新网站以后，原网站（http://150.158.27.95）将逐渐关闭（一周左右），您可以将数据迁移到新的网站。"}),i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"2. 新的网站域名将永远不会改变，您以后可以放心使用。纯前端页面，不会收集任何信息。"}),i.jsx("li",{style:{color:"#666",marginBottom:"10px"},children:"3. 如果您正在使用旧网站，可以将数据手动迁移到新网站，如果您使用的是新网站，可以忽略这条信息。"})]}),i.jsxs("p",{children:["新的网站链接：",i.jsx("a",{href:"https://bitboxtools.github.io",children:"https://bitboxtools.github.io"})]}),i.jsxs("p",{children:["开源地址链接：",i.jsx("a",{href:"https://github.com/wxtsky/MyWalletScan",children:"https://github.com/wxtsky/MyWalletScan"})]})]})})};function xe(){const t=q();return i.jsxs("div",{style:{backgroundColor:"#f0f2f5",minHeight:"100vh"},children:[i.jsx(oe,{}),i.jsxs(Ot,{children:[i.jsx("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1},children:i.jsx(ee,{style:{backgroundColor:"#f0f2f5",borderBottom:"1px solid #e8e8e8",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)"}})}),i.jsx("div",{style:{minHeight:"95vh",backgroundColor:"#fff",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.06)",borderRadius:"4px",marginTop:"45px"},children:i.jsxs("div",{children:[i.jsx(w.BackTop,{type:"primary",style:{right:100,bottom:150}}),t.pathname==="/"&&i.jsx(D,{}),t.pathname==="/zksync"&&i.jsx(D,{}),t.pathname==="/stark"&&i.jsx(vt,{}),t.pathname==="/layer"&&i.jsx($t,{}),t.pathname==="/mirror"&&i.jsx(St,{}),t.pathname==="/coffee"&&i.jsx(Ct,{}),t.pathname==="/deposit"&&i.jsx(Bt,{})]})})]})]})}export{xe as default};
