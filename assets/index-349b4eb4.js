import{R as A,r as S,k as R}from"./index-97828fac.js";import{C as tt,c as et}from"./index-271e2dc3.js";import{L as x}from"./index-a95f61fe.js";import{S as rt}from"./index-5cc581e0.js";import{B as nt}from"./EditOutlined-7319a85b.js";import{T as ot}from"./index-d82dae6c.js";import{m as st}from"./index-6167d706.js";import"./useFlexGapSupport-b6bda257.js";var it=Object.defineProperty,b=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,z=(h,s,a)=>s in h?it(h,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[s]=a,L=(h,s)=>{for(var a in s||(s={}))U.call(s,a)&&z(h,a,s[a]);if(b)for(var a of b(s))k.call(s,a)&&z(h,a,s[a]);return h},O=(h,s)=>{var a={};for(var i in h)U.call(h,i)&&s.indexOf(i)<0&&(a[i]=h[i]);if(h!=null&&b)for(var i of b(h))s.indexOf(i)<0&&k.call(h,i)&&(a[i]=h[i]);return a};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var y;(h=>{const s=class{constructor(t,e,r,n){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let o=[];for(let l=0;l<this.size;l++)o.push(!1);for(let l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(r);if(this.drawCodewords(c),n==-1){let l=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const f=this.getPenaltyScore();f<l&&(n=g,l=f),this.applyMask(g)}}u(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(t,e){const r=h.QrSegment.makeSegments(t);return s.encodeSegments(r,e)}static encodeBinary(t,e){const r=h.QrSegment.makeBytes(t);return s.encodeSegments([r],e)}static encodeSegments(t,e,r=1,n=40,o=-1,c=!0){if(!(s.MIN_VERSION<=r&&r<=n&&n<=s.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let l,g;for(l=r;;l++){const m=s.getNumDataCodewords(l,e)*8,p=C.getTotalBits(t,l);if(p<=m){g=p;break}if(l>=n)throw new RangeError("Data too long")}for(const m of[s.Ecc.MEDIUM,s.Ecc.QUARTILE,s.Ecc.HIGH])c&&g<=s.getNumDataCodewords(l,m)*8&&(e=m);let f=[];for(const m of t){i(m.mode.modeBits,4,f),i(m.numChars,m.mode.numCharCountBits(l),f);for(const p of m.getData())f.push(p)}u(f.length==g);const _=s.getNumDataCodewords(l,e)*8;u(f.length<=_),i(0,Math.min(4,_-f.length),f),i(0,(8-f.length%8)%8,f),u(f.length%8==0);for(let m=236;f.length<_;m^=253)i(m,8,f);let w=[];for(;w.length*8<f.length;)w.push(0);return f.forEach((m,p)=>w[p>>>3]|=m<<7-(p&7)),new s(l,e,w,o)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let n=0;n<e;n++)r==0&&n==0||r==0&&n==e-1||r==e-1&&n==0||this.drawAlignmentPattern(t[r],t[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const n=(e<<10|r)^21522;u(n>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(n,o));this.setFunctionModule(8,7,E(n,6)),this.setFunctionModule(8,8,E(n,7)),this.setFunctionModule(7,8,E(n,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(n,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(n,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(n,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let r=0;r<18;r++){const n=E(e,r),o=this.size-11+r%3,c=Math.floor(r/3);this.setFunctionModule(o,c,n),this.setFunctionModule(c,o,n)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const o=Math.max(Math.abs(n),Math.abs(r)),c=t+n,l=e+r;0<=c&&c<this.size&&0<=l&&l<this.size&&this.setFunctionModule(c,l,o!=2&&o!=4)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,Math.max(Math.abs(n),Math.abs(r))!=1)}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,r=this.errorCorrectionLevel;if(t.length!=s.getNumDataCodewords(e,r))throw new RangeError("Invalid argument");const n=s.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e],o=s.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e],c=Math.floor(s.getNumRawDataModules(e)/8),l=n-c%n,g=Math.floor(c/n);let f=[];const _=s.reedSolomonComputeDivisor(o);for(let m=0,p=0;m<n;m++){let M=t.slice(p,p+g-o+(m<l?0:1));p+=M.length;const v=s.reedSolomonComputeRemainder(M,_);m<l&&M.push(0),f.push(M.concat(v))}let w=[];for(let m=0;m<f[0].length;m++)f.forEach((p,M)=>{(m!=g-o||M>=l)&&w.push(p[m])});return u(w.length==c),w}drawCodewords(t){if(t.length!=Math.floor(s.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){const c=r-o,g=(r+1&2)==0?this.size-1-n:n;!this.isFunction[g][c]&&e<t.length*8&&(this.modules[g][c]=E(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let n;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[o][f]==c?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,g),c||(t+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[o][f],l=1);t+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size;o++){let c=!1,l=0,g=[0,0,0,0,0,0,0];for(let f=0;f<this.size;f++)this.modules[f][o]==c?(l++,l==5?t+=s.PENALTY_N1:l>5&&t++):(this.finderPenaltyAddHistory(l,g),c||(t+=this.finderPenaltyCountPatterns(g)*s.PENALTY_N3),c=this.modules[f][o],l=1);t+=this.finderPenaltyTerminateAndCount(c,l,g)*s.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let c=0;c<this.size-1;c++){const l=this.modules[o][c];l==this.modules[o][c+1]&&l==this.modules[o+1][c]&&l==this.modules[o+1][c+1]&&(t+=s.PENALTY_N2)}let e=0;for(const o of this.modules)e=o.reduce((c,l)=>c+(l?1:0),e);const r=this.size*this.size,n=Math.ceil(Math.abs(e*20-r*10)/r)-1;return u(0<=n&&n<=9),t+=n*s.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r}}static getNumRawDataModules(t){if(t<s.MIN_VERSION||t>s.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;e-=(25*r-10)*r-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(s.getNumRawDataModules(t)/8)-s.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*s.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let n=0;n<t-1;n++)e.push(0);e.push(1);let r=1;for(let n=0;n<t;n++){for(let o=0;o<e.length;o++)e[o]=s.reedSolomonMultiply(e[o],r),o+1<e.length&&(e[o]^=e[o+1]);r=s.reedSolomonMultiply(r,2)}return e}static reedSolomonComputeRemainder(t,e){let r=e.map(n=>0);for(const n of t){const o=n^r.shift();r.push(0),e.forEach((c,l)=>r[l]^=s.reedSolomonMultiply(c,o))}return r}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(e>>>n&1)*t;return u(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const r=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(r&&t[0]>=e*4&&t[6]>=e?1:0)+(r&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let a=s;a.MIN_VERSION=1,a.MAX_VERSION=40,a.PENALTY_N1=3,a.PENALTY_N2=3,a.PENALTY_N3=40,a.PENALTY_N4=10,a.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],a.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=a;function i(t,e,r){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let n=e-1;n>=0;n--)r.push(t>>>n&1)}function E(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const d=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)i(r,8,e);return new d(d.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!d.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){const n=Math.min(t.length-r,3);i(parseInt(t.substr(r,n),10),n*3+1,e),r+=n}return new d(d.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!d.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],r;for(r=0;r+2<=t.length;r+=2){let n=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;n+=d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),i(n,11,e)}return r<t.length&&i(d.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,e),new d(d.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:d.isNumeric(t)?[d.makeNumeric(t)]:d.isAlphanumeric(t)?[d.makeAlphanumeric(t)]:[d.makeBytes(d.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<1<<7)i(t,8,e);else if(t<1<<14)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new d(d.Mode.ECI,0,e)}static isNumeric(t){return d.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return d.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const n of t){const o=n.mode.numCharCountBits(e);if(n.numChars>=1<<o)return 1/0;r+=4+o+n.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let C=d;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(y||(y={}));(h=>{(s=>{const a=class{constructor(E,u){this.ordinal=E,this.formatBits=u}};let i=a;i.LOW=new a(0,1),i.MEDIUM=new a(1,0),i.QUARTILE=new a(2,3),i.HIGH=new a(3,2),s.Ecc=i})(h.QrCode||(h.QrCode={}))})(y||(y={}));(h=>{(s=>{const a=class{constructor(E,u){this.modeBits=E,this.numBitsCharCount=u}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let i=a;i.NUMERIC=new a(1,[10,12,14]),i.ALPHANUMERIC=new a(2,[9,11,13]),i.BYTE=new a(4,[8,16,16]),i.KANJI=new a(8,[8,10,12]),i.ECI=new a(7,[0,0,0]),s.Mode=i})(h.QrSegment||(h.QrSegment={}))})(y||(y={}));var N=y;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Q={L:N.QrCode.Ecc.LOW,M:N.QrCode.Ecc.MEDIUM,Q:N.QrCode.Ecc.QUARTILE,H:N.QrCode.Ecc.HIGH},H=128,j="L",$="#FFFFFF",Y="#000000",G=!1,F=4,lt=.1;function X(h,s=0){const a=[];return h.forEach(function(i,E){let u=null;i.forEach(function(d,C){if(!d&&u!==null){a.push(`M${u+s} ${E+s}h${C-u}v1H${u+s}z`),u=null;return}if(C===i.length-1){if(!d)return;u===null?a.push(`M${C+s},${E+s} h1v1H${C+s}z`):a.push(`M${u+s},${E+s} h${C+1-u}v1H${u+s}z`);return}d&&u===null&&(u=C)})}),a.join("")}function V(h,s){return h.slice().map((a,i)=>i<s.y||i>=s.y+s.h?a:a.map((E,u)=>u<s.x||u>=s.x+s.w?E:!1))}function K(h,s,a,i){if(i==null)return null;const E=a?F:0,u=h.length+E*2,d=Math.floor(s*lt),C=u/s,t=(i.width||d)*C,e=(i.height||d)*C,r=i.x==null?h.length/2-t/2:i.x*C,n=i.y==null?h.length/2-e/2:i.y*C;let o=null;if(i.excavate){let c=Math.floor(r),l=Math.floor(n),g=Math.ceil(t+r-c),f=Math.ceil(e+n-l);o={x:c,y:l,w:g,h:f}}return{x:r,y:n,h:e,w:t,excavation:o}}var at=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ct(h){const s=h,{value:a,size:i=H,level:E=j,bgColor:u=$,fgColor:d=Y,includeMargin:C=G,style:t,imageSettings:e}=s,r=O(s,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),n=e==null?void 0:e.src,o=S.useRef(null),c=S.useRef(null),[l,g]=S.useState(!1);S.useEffect(()=>{if(o.current!=null){const w=o.current,m=w.getContext("2d");if(!m)return;let p=N.QrCode.encodeText(a,Q[E]).getModules();const M=C?F:0,v=p.length+M*2,P=K(p,i,C,e),I=c.current,T=P!=null&&I!==null&&I.complete&&I.naturalHeight!==0&&I.naturalWidth!==0;T&&P.excavation!=null&&(p=V(p,P.excavation));const B=window.devicePixelRatio||1;w.height=w.width=i*B;const D=i/v*B;m.scale(D,D),m.fillStyle=u,m.fillRect(0,0,v,v),m.fillStyle=d,at?m.fill(new Path2D(X(p,M))):p.forEach(function(W,Z){W.forEach(function(J,q){J&&m.fillRect(q+M,Z+M,1,1)})}),T&&m.drawImage(I,P.x+M,P.y+M,P.w,P.h)}}),S.useEffect(()=>{g(!1)},[n]);const f=L({height:i,width:i},t);let _=null;return n!=null&&(_=A.createElement("img",{src:n,key:n,style:{display:"none"},onLoad:()=>{g(!0)},ref:c})),A.createElement(A.Fragment,null,A.createElement("canvas",L({style:f,height:i,width:i,ref:o},r)),_)}function ht(h){const s=h,{value:a,size:i=H,level:E=j,bgColor:u=$,fgColor:d=Y,includeMargin:C=G,imageSettings:t}=s,e=O(s,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=N.QrCode.encodeText(a,Q[E]).getModules();const n=C?F:0,o=r.length+n*2,c=K(r,i,C,t);let l=null;t!=null&&c!=null&&(c.excavation!=null&&(r=V(r,c.excavation)),l=A.createElement("image",{xlinkHref:t.src,height:c.h,width:c.w,x:c.x+n,y:c.y+n,preserveAspectRatio:"none"}));const g=X(r,n);return A.createElement("svg",L({height:i,width:i,viewBox:`0 0 ${o} ${o}`},e),A.createElement("path",{fill:u,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),A.createElement("path",{fill:d,d:g,shapeRendering:"crispEdges"}),l)}var ut=h=>{const s=h,{renderAs:a}=s,i=O(s,["renderAs"]);return a==="svg"?A.createElement(ht,L({},i)):A.createElement(ct,L({},i))};const{Content:ft}=x,{Title:dt,Text:mt}=ot,_t=()=>{const h="0x88888A8b367cCE8C82C451f37511905c3028ed49",s={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"calc(100vh - 64px)",padding:"20px",backgroundColor:"#F0F2F5"},a={marginTop:"20px",marginBottom:"20px",padding:"20px",backgroundColor:"#fff",borderRadius:"8px"},i={marginBottom:"20px"},E=()=>{et(h),st.success("地址已复制到剪贴板")};return R.jsx(x,{children:R.jsxs(ft,{style:s,children:[R.jsx(dt,{level:3,style:i,children:"捐赠作者一杯咖啡😄"}),R.jsx("div",{style:i,children:R.jsxs(rt,{children:[R.jsxs(mt,{children:[R.jsx("strong",{children:"EVM地址："}),h]}),R.jsx(nt,{icon:R.jsx(tt,{}),onClick:E})]})}),R.jsx("div",{style:a,children:R.jsx(ut,{value:h})})]})})};export{_t as default};
