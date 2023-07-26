import{r as S,k as t}from"./index-e30e4a01.js";import{U as H,S as R,D as Y,n as I,e as G}from"./save_excel-94817311.js";import{a as b,C as Q}from"./axios-0262b8f8.js";import{g as X}from"./getEthPrice-7ece4dc8.js";import{C as Z,c as ee}from"./index-8ee15074.js";import{F as v,M as N,c as te,P as O,d as A,T as se}from"./index-ca5e99b8.js";import{I as $,S as y,P as ae}from"./index-f199eb6e.js";import{B as T,E as ne}from"./EditOutlined-a7c37afd.js";import{L as re}from"./index-a5c88ad2.js";import{S as oe}from"./index-b97ea49d.js";import{m as ie}from"./index-db024ec4.js";async function le(){const i=await X();try{return{DAI:1,USDC:1,USDT:1,WBTC:3e4,ETH:i}}catch(a){console.log(a)}}async function ce(i){let a=1,r=[];const o=await le();for(;;){const n=`https://voyager.online/api/contract/${i}/transfers?ps=50&p=${a}`,l=await b.get(n),{items:c,lastPage:d}=l.data;if(c.forEach(g=>{const{tx_hash:k,transfer_from:_,transfer_to:p,transfer_value:w,token_symbol:D,token_type:F,token_decimals:C}=g,B={tx_hash:k,transfer_from:_,transfer_to:p,transfer_value:w,token_symbol:D,token_type:F,token_decimals:C,total_value:o.hasOwnProperty(D)?w*o[D]:0};r.push(B)}),d===a)break;a++}return r}async function de(i){try{let a=[],r=1;for(;;){const n=`https://voyager.online/api/txns?to=${i}&ps=50&p=${r}&type=null`,l=await b.get(n),{items:c,lastPage:d}=l.data;if(c.forEach(g=>{const{actual_fee:k,hash:_,timestamp:p}=g,w={actual_fee:Number(k)/10**18,hash:_,timestamp:p,transfer:[]};a.push(w)}),d===r||d===0)break;r++}return(await ce(i)).forEach(n=>{a.forEach(l=>{l.hash===n.tx_hash&&l.transfer.push(n)})}),a}catch{return[]}}const ue=i=>{const a=new Date(i)*1e3,r=(new Date().getTime()-new Date(a).getTime())/1e3;if(r<60)return Math.round(r)+" 秒前";const o=r/60;if(o<60)return Math.round(o)+" 分前";const n=o/60;if(n<24)return Math.round(n)+" 时前";const l=n/24;return Math.round(l)+" 天前"},me=i=>{const a=i.getFullYear(),r=new Date(a,0,1),o=(i.getDay()+6)%7,n=Math.floor((i.getTime()-r.getTime())/864e5),l=Math.floor((n+r.getDay()-o)/7);return`${a}-${l}`},ge=(i,a)=>{let r=0;const o=new Set,n=new Set,l=new Set;return a.forEach(c=>{const d=new Date(c.timestamp*1e3);r+=c.actual_fee;const g=d.getFullYear(),k=d.getMonth();console.log(`year: ${g}, month: ${k}`);const _=d.getDate(),p=me(d);o.add(`${g} -${k} -${_}`),n.add(`${g} -${p}`),l.add(`${g} -${k}`)}),{fee:r.toFixed(3),days:o.size,weeks:n.size,months:l.size}},he=async(i,a)=>{const{fee:r,days:o,weeks:n,months:l}=ge(i,a),c=a[0],d=ue(c.timestamp)||"无交易";return{fee:r,days:o,weeks:n,months:l,lastTransactionTimeAgo:d}};async function ye(){const a=`https://api.coingecko.com/api/v3/simple/price?ids=${["ethereum","dai","tether","usd-coin","wrapped-bitcoin"].join(",")}&vs_currencies=usd`;let r={},o={ethereum:{sym:0,dec:18},dai:{sym:1,dec:18},"usd-coin":{sym:2,dec:6},tether:{sym:3,dec:6},"wrapped-bitcoin":{sym:4,dec:8}};try{const n=await b.get(a);for(const l in n.data)r[o[l].sym]=n.data[l].usd/10**o[l].dec;return r}catch(n){return console.error("Error fetching token prices:",n.message),null}}async function fe(i){try{let a=0,r=0,o=0,n=0,l=1,c=await ye(),d=[];for(;;){const g=await b.get(`https://voyager.online/api/contract/${i}/bridgeTransactions?ps=50&p=${l}`);if(d=[...d,...g.data.items],g.data.lastPage===l||g.data.lastPage===0||g.data.items.length===0)break;l++}return d.forEach(g=>{const{token_id:k,amount:_,type:p}=g;p===0&&(a++,o+=_*c[k]),p===2&&(r++,n+=_*c[k])}),{l1_l2:a,l2_l1:r,l1_l2_amount:Number(o.toFixed(2)),l2_l1_amount:Number(n.toFixed(2))}}catch{return{l1_l2:"-",l2_l1:"-",l1_l2_amount:"-",l2_l1_amount:"-"}}}async function pe(i){try{const a=await b.get(`https://voyager.online/api/contract/${i}`),{classAlias:r,nonce:o}=a.data;return{classAlias:r==="BraavosProxy"?"Braavos":"Argent",nonce:parseInt(o,16)}}catch{return{classAlias:"-",nonce:"-"}}}async function ke(i){try{const a=await b.get(`https://voyager.online/api/contract/${i}/balances`);let r={},o=0;for(const n in a.data){const l=a.data[n].usd.replace("$","");r[a.data[n].symbol]=parseFloat(a.data[n].amount).toFixed(3),o+=Number(l).toFixed(3)}return{...r}}catch{return{ETH:"-",DAI:"-",USDC:"-",USDT:"-",WBTC:"-"}}}const xe=i=>{let a=0;return i.forEach(r=>{const o=r.transfer.sort((l,c)=>parseInt(c.total_value)-parseInt(l.total_value));if(o.length===0)return;const n=parseFloat(o[0].total_value);a+=n}),{volume:a.toFixed(3)}},E=async i=>{let a;try{a=await de(i)}catch{a=[]}const[r,o,n,l]=await Promise.all([he(i,a),fe(i),pe(i),ke(i)]),c=xe(a);return{activity:r,bridge:o,account:n,tokenBalance:l,volume:c}};const{TextArea:_e}=$,{Content:je}=re,$e=()=>{const[i,a]=S.useState(!1),[r,o]=S.useState(!1),[n,l]=S.useState(!1),[c,d]=S.useState([]),[g]=v.useForm(),[k,_]=S.useState(!1),[p,w]=S.useState([]),[D,F]=S.useState(!1),[C]=v.useForm();let B=c.length;S.useEffect(()=>{F(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{F(!1)},500),e&&d(JSON.parse(e))},[]);const P=[{title:"#",key:"index",align:"center",render:(e,s,u)=>u+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,s)=>s.key===q?t.jsx($,{placeholder:"请输入备注",defaultValue:e,onPressEnter:h=>{s.name=h.target.value,d([...c]),localStorage.setItem("stark_addresses",JSON.stringify(c)),L(null)}}):t.jsxs(t.Fragment,{children:[t.jsx(se,{color:"blue",children:e}),t.jsx(T,{shape:"circle",icon:t.jsx(ne,{}),size:"small",onClick:()=>L(s.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,s)=>{const u=()=>{ee(e),ie.success("地址已复制")};return e?t.jsxs(t.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),t.jsx(T,{type:"text",icon:t.jsx(Z,{}),onClick:u,style:{marginLeft:8}})]}):t.jsx(y,{})}},{title:"Type",dataIndex:["account","classAlias"],key:"classAlias",align:"center",render:(e,s)=>e||t.jsx(y,{})},{title:"StarkWare(轻点刷新!不然容易报错)",className:"zksync2",children:[{title:"ETH",dataIndex:["tokenBalance","ETH"],key:"stark_eth_balance",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"USDC",dataIndex:["tokenBalance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"USDT",dataIndex:["tokenBalance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"DAI",dataIndex:["tokenBalance","DAI"],key:"stark_dai_balance",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"WBTC",dataIndex:["tokenBalance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"Tx",dataIndex:["account","nonce"],key:"stark_tx_amount",align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{}),sorter:(e,s)=>e.account.nonce-s.account.nonce},{title:"最后交易",dataIndex:["activity","lastTransactionTimeAgo"],key:"stark_latest_tx",align:"center",render:(e,s)=>e||e===0?t.jsx("a",{href:`https://voyager.online/contract/${s.address}`,target:"_blank",children:e}):t.jsx(y,{})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","l1_l2"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"L2->L1",dataIndex:["bridge","l2_l1"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","l1_l2_amount"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"L2->L1",dataIndex:["bridge","l2_l1_amount"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","days"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"周",dataIndex:["activity","weeks"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"月",dataIndex:["activity","months"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{})},{title:"金额(U)",dataIndex:["volume","volume"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{}),sorter:(e,s)=>e.volume.volume-s.volume.volume},{title:"fee(E)",dataIndex:["activity","fee"],align:"center",render:(e,s)=>e||e===0?e:t.jsx(y,{}),sorter:(e,s)=>e.activity.fee-s.activity.fee}]},{title:"操作",key:"action",align:"center",render:(e,s)=>t.jsx(oe,{size:"small",children:t.jsx(O,{title:"确认删除？",onConfirm:()=>M(s.key),children:t.jsx(T,{icon:t.jsx(A,{})})})})}]}],z=async()=>{try{const e=await C.validateFields();if(e.address.length!==66&&e.address.length!==64){I.error({message:"错误",description:"请输入正确的stark地址(64位)"},1);return}e.address.startsWith("0x")||(e.address="0x"+e.address),a(!1);const s=c.findIndex(u=>u.address===e.address);if(s!==-1)d(c.map((u,h)=>h===s?{...u,name:e.name}:u)),E(e.address).then(u=>{d(h=>{const m=[...h];return m[s]={...m[s],...u},localStorage.setItem("stark_addresses",JSON.stringify(m)),m})});else{const u={key:c.length.toString(),name:e.name,address:e.address};d(h=>[...h,u]),E(e.address).then(h=>{d(m=>{const f=[...m];return f[f.length-1]={...f[f.length-1],...h},localStorage.setItem("stark_addresses",JSON.stringify(f)),f})})}}catch(e){I.error({message:"错误",description:e.message},1)}finally{C.resetFields()}},M=e=>{d(c.filter(s=>s.key!==e)),localStorage.setItem("stark_addresses",JSON.stringify(c.filter(s=>s.key!==e)))},U=async()=>{try{l(!0),o(!1);const s=(await g.validateFields()).addresses.split(`
`);for(let u of s){if(u=u.trim(),u.length!==66&&u.length!==64){I.error({message:"错误",description:"请输入正确的stark地址(64位)"});continue}u.startsWith("0x")||(u="0x"+u);const h=c.findIndex(m=>m.address===u);if(h!==-1){d(f=>{const x=[...f];for(let j in x[h])j!=="address"&&j!=="name"&&j!=="key"&&(x[h][j]=null);return x});const m=await E(u);d(f=>{const x=[...f];return x[h]={...x[h],...m},localStorage.setItem("stark_addresses",JSON.stringify(x)),x})}else{const m={key:B.toString(),address:u};B++,d(x=>[...x,m]);const f=await E(u);d(x=>{const j=[...x];return j[j.length-1]={...j[j.length-1],...f},localStorage.setItem("stark_addresses",JSON.stringify(j)),j})}}}catch(e){I.error({message:"错误",description:e.message})}finally{g.resetFields(),w([]),l(!1)}},J=async()=>{if(!p.length){I.error({message:"错误",description:"请先选择要刷新的地址"},1);return}_(!0);try{for(let e of p){const s=c.findIndex(u=>u.key===e);if(s!==-1){d(h=>{const m=[...h];for(let f in m[s])f!=="address"&&f!=="name"&&f!=="key"&&(m[s][f]=null);return m});const u=await E(c[s].address);d(h=>{const m=[...h];return m[s]={...m[s],...u},localStorage.setItem("stark_addresses",JSON.stringify(m)),m})}}I.success({message:"完成",description:"刷新地址数据完成"},1)}catch(e){I.error({message:"错误",description:e.message},1)}finally{_(!1),w([])}},V=()=>{if(!p.length){I.error({message:"错误",description:"请先选择要删除的地址"},1);return}d(c.filter(e=>!p.includes(e.key))),localStorage.setItem("stark_addresses",JSON.stringify(c.filter(e=>!p.includes(e.key)))),w([])},W=()=>{G(c,"starkInfo")},[q,L]=S.useState(null),K={selectedRowKeys:p,onChange:e=>{w(e)}};return t.jsx("div",{children:t.jsxs(je,{children:[t.jsx(N,{title:"批量添加地址",open:r,onOk:U,onCancel:()=>{o(!1),g.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:t.jsx(v,{form:g,layout:"vertical",children:t.jsx(v.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:t.jsx(_e,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),t.jsx(N,{title:"添加地址",open:i,onOk:z,onCancel:()=>a(!1),okText:"添加地址",cancelText:"取消",width:800,children:t.jsxs(v,{form:C,layout:"vertical",children:[t.jsx(v.Item,{label:"地址",name:"address",rules:[{required:!0}],children:t.jsx($,{placeholder:"请输入地址",style:{width:"100%"}})}),t.jsx(v.Item,{label:"备注",name:"name",children:t.jsx($,{placeholder:"请输入备注",style:{width:"100%"}})})]})}),t.jsx("div",{style:{marginBottom:"50px"},children:t.jsx(y,{spinning:D,size:"large",children:t.jsx(te,{rowSelection:K,dataSource:c,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:P})})}),t.jsx("div",{className:"stark_footer",children:t.jsx(Q,{size:"small",style:{width:"100%"},children:t.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[t.jsx(T,{type:"primary",onClick:()=>{a(!0)},size:"large",style:{width:"20%"},icon:t.jsx(ae,{}),children:"添加地址"}),t.jsx(T,{type:"primary",onClick:()=>{o(!0)},size:"large",style:{width:"20%"},icon:t.jsx(H,{}),loading:n,children:n?"添加中...":"批量添加地址"}),t.jsx(T,{type:"primary",onClick:J,loading:k,size:"large",style:{width:"20%"},icon:t.jsx(R,{}),children:"刷新选中地址"}),t.jsx(O,{title:"确认删除"+p.length+"个地址？",onConfirm:V,children:t.jsx(T,{type:"primary",danger:!0,size:"large",style:{width:"20%"},icon:t.jsx(A,{}),children:"删除选中地址"})}),t.jsx(T,{type:"primary",icon:t.jsx(Y,{}),size:"large",style:{width:"8%"},onClick:W})]})})})]})})};export{$e as default};
