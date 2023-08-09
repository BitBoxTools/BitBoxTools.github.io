import{r as f,ad as E,ae as z}from"./index-acc90859.js";function P(){if(console&&console.warn){for(var s=arguments.length,e=new Array(s),n=0;n<s;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function x(){for(var s=arguments.length,e=new Array(s),n=0;n<s;n++)e[n]=arguments[n];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),P(...e))}const v=(s,e)=>()=>{if(s.isInitialized)e();else{const n=()=>{setTimeout(()=>{s.off("initialized",n)},0),e()};s.on("initialized",n)}};function T(s,e,n){s.loadNamespaces(e,v(s,n))}function R(s,e,n,d){typeof n=="string"&&(n=[n]),n.forEach(o=>{s.options.ns.indexOf(o)<0&&s.options.ns.push(o)}),s.loadLanguages(e,v(s,d))}function $(s,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const d=e.languages[0],o=e.options?e.options.fallbackLng:!1,t=e.languages[e.languages.length-1];if(d.toLowerCase()==="cimode")return!0;const g=(y,w)=>{const a=e.services.backendConnector.state[`${y}|${w}`];return a===-1||a===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!g(e.isLanguageChangingTo,s)?!1:!!(e.hasResourceBundle(d,s)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||g(d,s)&&(!o||g(t,s)))}function j(s,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(x("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(s,{lng:n.lng,precheck:(o,t)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!t(o.isLanguageChangingTo,s))return!1}}):$(s,e,n)}const k=f.createContext();class A{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const F=(s,e)=>{const n=f.useRef();return f.useEffect(()=>{n.current=e?n.current:s},[s,e]),n.current};function O(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:d,defaultNS:o}=f.useContext(k)||{},t=n||d||E();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new A),!t){x("You will need to pass in an i18next instance by using initReactI18next");const r=(c,i)=>typeof i=="string"?i:i&&typeof i=="object"&&typeof i.defaultValue=="string"?i.defaultValue:Array.isArray(c)?c[c.length-1]:c,u=[r,{},!1];return u.t=r,u.i18n={},u.ready=!1,u}t.options.react&&t.options.react.wait!==void 0&&x("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const g={...z(),...t.options.react,...e},{useSuspense:y,keyPrefix:w}=g;let a=s||o||t.options&&t.options.defaultNS;a=typeof a=="string"?[a]:a||["translation"],t.reportNamespaces.addUsedNamespaces&&t.reportNamespaces.addUsedNamespaces(a);const p=(t.isInitialized||t.initializedStoreOnce)&&a.every(r=>j(r,t,g));function m(){return t.getFixedT(e.lng||null,g.nsMode==="fallback"?a:a[0],w)}const[C,h]=f.useState(m);let N=a.join();e.lng&&(N=`${e.lng}${N}`);const I=F(N),l=f.useRef(!0);f.useEffect(()=>{const{bindI18n:r,bindI18nStore:u}=g;l.current=!0,!p&&!y&&(e.lng?R(t,e.lng,a,()=>{l.current&&h(m)}):T(t,a,()=>{l.current&&h(m)})),p&&I&&I!==N&&l.current&&h(m);function c(){l.current&&h(m)}return r&&t&&t.on(r,c),u&&t&&t.store.on(u,c),()=>{l.current=!1,r&&t&&r.split(" ").forEach(i=>t.off(i,c)),u&&t&&u.split(" ").forEach(i=>t.store.off(i,c))}},[t,N]);const L=f.useRef(!0);f.useEffect(()=>{l.current&&!L.current&&h(m),L.current=!1},[t,w]);const b=[C,t,p];if(b.t=C,b.i18n=t,b.ready=p,p||!p&&!y)return b;throw new Promise(r=>{e.lng?R(t,e.lng,a,()=>r()):T(t,a,()=>r())})}export{O as u};
