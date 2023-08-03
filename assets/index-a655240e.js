import{r as y,A as oe,f as O,s as N,x as d,S as Q,D as ye,B as I,E as Ce,bI as be,z as K,y as ke,bJ as xe}from"./index-58449cd4.js";import{F as $,M as Te,c as we,U as ve,S as Y,P as X,d as Z,e as Ie,I as ie,T as A,n as E,h as Se}from"./save_excel-331df664.js";import{a as Fe}from"./index-2f0aaf81.js";import{m as Ee}from"./index-da16c3ef.js";import{R as De}from"./ReloadOutlined-e4ca2f71.js";import"./index-6af35cae.js";var je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const Be=je;var ce=function(t,n){return y.createElement(oe,O(O({},t),{},{ref:n,icon:Be}))};ce.displayName="CheckCircleOutlined";const Ae=y.forwardRef(ce);var Pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const Oe=Pe;var de=function(t,n){return y.createElement(oe,O(O({},t),{},{ref:n,icon:Oe}))};de.displayName="CloseCircleOutlined";const Ne=y.forwardRef(de);async function ee(e,t,n){const o=await N.post(e,t,{headers:n});let r=[];const s={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return o.data.data.erc20TransferEvents.edges.forEach(i=>{const{transaction_hash:f,from_address:l,transfer_amount_display:u,transfer_from_address:_,transfer_to_address:x,from_erc20_identifier:v,main_call:B,timestamp:L,__typename:M}=i.node;r.push({transaction_hash:f,from_address:l,transfer_amount_display:u,transfer_from_address:_,transfer_to_address:x,from_erc20_identifier:v,timestamp:L,main_call:B,__typename:M,total_value:s.hasOwnProperty(v)?u*s[v]:0})}),{transfers:r,hasNextPage:o.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:o.data.data.erc20TransferEvents.pageInfo.endCursor}}async function Le(e){const t="https://starkscan.stellate.sh/",n={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query ERC20TransferEventsTableQuery(
  $first: Int!
  $after: String
  $input: ERC20TransferEventsInput!
) {
  ...ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4
}

fragment ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4 on Query {
  erc20TransferEvents(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...ERC20TransferEventsTableRowFragment_erc20TransferEvent
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ERC20TransferEventsTableRowFragment_erc20TransferEvent on ERC20TransferEvent {
  id
  transaction_hash
  from_address
  from_erc20_identifier
  from_contract {
    is_social_verified
    id
  }
  transfer_from_address
  transfer_from_identifier
  transfer_from_contract {
    is_social_verified
    id
  }
  transfer_to_address
  transfer_to_identifier
  transfer_to_contract {
    is_social_verified
    id
  }
  transfer_amount
  transfer_amount_display
  timestamp
  main_call {
    selector_identifier
    id
  }
}
`,variables:{first:100,after:null,input:{transfer_from_or_to_address:e,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let r=[],s=await ee(t,o,n);for(r.push(...s.transfers);s.hasNextPage;)o.variables.after=s.endCursor,s=await ee(t,o,n),r.push(...s.transfers);return r}async function te(e,t,n){const o=await N.post(e,t,{headers:n});let r=[];return o.data.data.transactions.edges.forEach(s=>{const{actual_fee_display:i,initiator_address:f,initiator_identifier:l,nonce:u,timestamp:_,transaction_hash:x}=s.node;r.push({actual_fee_display:i,initiator_address:f,initiator_identifier:l,nonce:u,timestamp:_,transaction_hash:x,transfers:[]})}),{transactions:r,hasNextPage:o.data.data.transactions.pageInfo.hasNextPage,endCursor:o.data.data.transactions.pageInfo.endCursor}}async function Me(e){const t="https://starkscan.stellate.sh/",n={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query TransactionsTableQuery(
  $first: Int!
  $after: String
  $input: TransactionsInput!
) {
  ...TransactionsTablePaginationFragment_transactions_2DAjA4
}

fragment TransactionsTableExpandedItemFragment_transaction on Transaction {
  entry_point_selector_name
  calldata_decoded
  entry_point_selector
  calldata
  initiator_address
  initiator_identifier
 actual_fee
  actual_fee_display
 main_calls {
    selector
    selector_name
    calldata_decoded
    selector_identifier
    calldata
    contract_address
    contract_identifier
    id
  }
}

fragment TransactionsTablePaginationFragment_transactions_2DAjA4 on Query {
  transactions(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...TransactionsTableRowFragment_transaction
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TransactionsTableRowFragment_transaction on Transaction {
  id
  transaction_hash
  block_number
  transaction_status
  transaction_type
  timestamp
  nonce
 contract_address
  contract_identifier
 sender_address
  sender_identifier
 initiator_address
  initiator_identifier
  initiator {
    is_social_verified
    id
  }
  main_calls {
    selector_identifier
    id
  }
  ...TransactionsTableExpandedItemFragment_transaction
}
`,variables:{first:100,after:null,input:{initiator_address:e,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let r=[],s=await te(t,o,n);for(r.push(...s.transactions);s.hasNextPage;)o.variables.after=s.endCursor,s=await te(t,o,n),r.push(...s.transactions);const i=await Le(e);return i.forEach(f=>{r.forEach(l=>{f.transaction_hash===l.transaction_hash&&l.transfers.push(f)})}),{transfers:i,transactions:r}}const le=e=>{const t=new Date(e)*1e3,n=(new Date().getTime()-new Date(t).getTime())/1e3;if(n<60)return Math.round(n)+" 秒前";const o=n/60;if(o<60)return Math.round(o)+" 分前";const r=o/60;if(r<24)return Math.round(r)+" 时前";const s=r/24;return Math.round(s)+" 天前"},Re=async e=>{try{if(!e)return{tx:0,lastTime:"无交易",fee:0};let t=0;e.forEach(s=>{t+=parseFloat(s.actual_fee_display)});const n=e[0].nonce,o=e[0].timestamp,r=le(o)||"无交易";return{tx:n,lastTime:r,fee:Number(t).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function $e(e){try{const t="https://starkscan.stellate.sh/",n={query:`query ERC20BalancesByOwnerAddressTableQuery(
  $input: ERC20BalancesByOwnerAddressInput!
) {
  erc20BalancesByOwnerAddress(input: $input) {
    id
    ...ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance
  }
}

fragment ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance on ERC20Balance {
  id
  contract_address
  contract_erc20_identifier
  contract_erc20_contract {
    symbol
    is_social_verified
    icon_url
    id
  }
  balance_display
}
`,variables:{input:{owner_address:e}}},o={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},r=await N.post(t,n,{headers:o});let s={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return r.data.data.erc20BalancesByOwnerAddress.forEach(i=>{i.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?s.ETH=Number(parseFloat(i.balance_display)).toFixed(3):i.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?s.USDT=Number(parseFloat(i.balance_display)).toFixed(3):i.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?s.USDC=Number(parseFloat(i.balance_display)).toFixed(3):i.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?s.DAI=Number(parseFloat(i.balance_display)).toFixed(3):i.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(s.WBTC=Number(parseFloat(i.balance_display)).toFixed(3))}),s}catch(t){return console.log(t),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const Ve=e=>{const t=e.getFullYear(),n=new Date(t,0,1),o=(e.getDay()+6)%7,r=Math.floor((e.getTime()-n.getTime())/864e5),s=Math.floor((r+n.getDay()-o)/7);return`${t}-${s}`},ze=(e,t)=>{const n=new Set,o=new Set,r=new Set,s=new Set;return t.forEach(i=>{if(i.transfer_from_address.toLowerCase()!==e.toLowerCase())return;const f=new Date(i.timestamp*1e3),l=f.getFullYear(),u=f.getMonth(),_=f.getDate(),x=Ve(f);n.add(`${l}-${u}-${_}`),o.add(`${l}-${x}`),r.add(`${l}-${u}`),s.add(i.transfer_to_address)}),{dayActivity:n.size,weekActivity:o.size,monthActivity:r.size,contractActivity:s.size}};function qe(e,t){if(t.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:n,weekActivity:o,monthActivity:r,contractActivity:s}=ze(e,t);return{dayActivity:n,weekActivity:o,monthActivity:r,contractActivity:s}}const We=e=>{let t=0,n=0,o=0,r=0;const s={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return e.forEach(i=>{const f=i.transfer_from_address,l=i.transfer_to_address,u=i.transfer_amount_display,_=i.from_erc20_identifier;f.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(i.main_call?i.main_call.selector_identifier:null)==="handle_deposit"&&(t+=1,o+=parseFloat(u)*s[_]),l.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(i.main_call?i.main_call.selector_identifier:null)==="initiate_withdraw"&&(n+=1,r+=parseFloat(u)*s[_])}),{DepositTx:t,WithdrawTx:n,DepositVolume:Number(o.toFixed(2)),WithdrawVolume:Number(r.toFixed(2))}};async function Ue(e){const t="https://starkscan.stellate.sh/",n={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
    ...ContractPageContainerFragment_contract
    ...ContractPageOverviewTabFragment_contract
    ...ContractPageClassCodeHistoryTabFragment_contract
    ...ContractFunctionReadWriteTabFragment_contract
    id
  }
}

fragment ContractFunctionReadCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractFunctionReadWriteTabFragment_contract on Contract {
  contract_address
  starknet_class {
    ...ContractFunctionReadCallsFragment_starknetClass
    ...ContractFunctionWriteCallsFragment_starknetClass
    id
  }
}

fragment ContractFunctionWriteCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractPageClassCodeHistoryTabFragment_contract on Contract {
  contract_address
  starknet_class {
    is_code_verified
    id
  }
  ...ContractPageCodeSubTabFragment_contract
}

fragment ContractPageCodeSubTabFragment_contract on Contract {
  starknet_class {
    class_hash
    ...StarknetClassCodeTabFragment_starknetClass
    id
  }
}

fragment ContractPageContainerFragment_contract on Contract {
  contract_address
  implementation_type
  is_starknet_class_code_verified
  contract_stats {
    number_of_transactions
    number_of_account_calls
    number_of_events
  }
}

fragment ContractPageOverviewTabClassHashPlacedAtItemFragment_contract on Contract {
  deployed_at_transaction_hash
  class_hash_placed_at_transaction_hash
  class_hash_placed_at_timestamp
}

fragment ContractPageOverviewTabEthBalanceItemFragment_contract on Contract {
  eth_balance {
    balance_display
    id
  }
}

fragment ContractPageOverviewTabFragment_contract on Contract {
  contract_address
  class_hash
  name_tag
  is_social_verified
  deployed_by_contract_address
  deployed_by_contract_identifier
  deployed_at_transaction_hash
  deployed_at_timestamp
  ...ContractPageOverviewTabEthBalanceItemFragment_contract
  ...ContractPageOverviewTabTypeItemFragment_contract
  ...ContractPageOverviewTabStarknetIDItemFragment_contract
  starknet_class {
    ...StarknetClassVersionItemFragment_starknetClass
    id
  }
  ...ContractPageOverviewTabClassHashPlacedAtItemFragment_contract
}

fragment ContractPageOverviewTabStarknetIDItemFragment_contract on Contract {
  starknet_id {
    domain
  }
}

fragment ContractPageOverviewTabTypeItemFragment_contract on Contract {
  implementation_type
  starknet_class {
    type
    id
  }
}

fragment StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
  bytecode
  sierra_program
}

fragment StarknetClassCodeTabFragment_starknetClass on StarknetClass {
  ...StarknetClassCodeTabVerifiedItemFragment_starknetClass
  ...StarknetClassCodeTabSourceCodeItemFragment_starknetClass
  ...StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass
}

fragment StarknetClassCodeTabSourceCodeItemFragment_starknetClass on StarknetClass {
  class_hash
  verified {
    source_code
  }
}

fragment StarknetClassCodeTabVerifiedItemFragment_starknetClass on StarknetClass {
  is_code_verified
  verified {
    name
    source_code
    verified_at_timestamp
  }
}

fragment StarknetClassVersionItemFragment_starknetClass on StarknetClass {
  is_cairo_one
}
`,variables:{input:{contract_address:e}}},o={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},r=await N.post(t,n,{headers:o}),s=le(r.data.data.contract.deployed_at_timestamp),i=r.data.data.contract.starknet_id?r.data.data.contract.starknet_id.domain:"无";return{deployedTime:s,starkId:i}}function Ge(e){try{let t=0;return e.forEach(n=>{const o=n.transfers.sort((s,i)=>parseInt(i.total_value)-parseInt(s.total_value));if(o.length===0)return;const r=parseFloat(o[0].total_value);t+=r}),{Vol:t.toFixed(3)}}catch(t){return console.log(t),{Vol:"-"}}}const He=(e,t)=>t.some(n=>e instanceof n);let ne,ae;function Je(){return ne||(ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qe(){return ae||(ae=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ue=new WeakMap,W=new WeakMap,fe=new WeakMap,V=new WeakMap,G=new WeakMap;function Ke(e){const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(S(e.result)),r()},i=()=>{o(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ue.set(n,e)}).catch(()=>{}),G.set(t,e),t}function Ye(e){if(W.has(e))return;const t=new Promise((n,o)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{o(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});W.set(e,t)}let U={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return W.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return S(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xe(e){U=e(U)}function Ze(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const o=e.call(z(this),t,...n);return fe.set(o,t.sort?t.sort():[t]),S(o)}:Qe().includes(e)?function(...t){return e.apply(z(this),t),S(ue.get(this))}:function(...t){return S(e.apply(z(this),t))}}function et(e){return typeof e=="function"?Ze(e):(e instanceof IDBTransaction&&Ye(e),He(e,Je())?new Proxy(e,U):e)}function S(e){if(e instanceof IDBRequest)return Ke(e);if(V.has(e))return V.get(e);const t=et(e);return t!==e&&(V.set(e,t),G.set(t,e)),t}const z=e=>G.get(e);function tt(e,t,{blocked:n,upgrade:o,blocking:r,terminated:s}={}){const i=indexedDB.open(e,t),f=S(i);return o&&i.addEventListener("upgradeneeded",l=>{o(S(i.result),l.oldVersion,l.newVersion,S(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),f.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),f}const nt=["get","getKey","getAll","getAllKeys","count"],at=["put","add","delete","clear"],q=new Map;function re(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(q.get(t))return q.get(t);const n=t.replace(/FromIndex$/,""),o=t!==n,r=at.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(r||nt.includes(n)))return;const s=async function(i,...f){const l=this.transaction(i,r?"readwrite":"readonly");let u=l.store;return o&&(u=u.index(f.shift())),(await Promise.all([u[n](...f),r&&l.done]))[0]};return q.set(t,s),s}Xe(e=>({...e,get:(t,n,o)=>re(t,n)||e.get(t,n,o),has:(t,n)=>!!re(t,n)||e.has(t,n)}));let P=null;const rt=async e=>{try{P=await tt(e.name,e.version,{upgrade(t){e.objectStoresMeta.forEach(n=>{if(!t.objectStoreNames.contains(n.store)){let o=t.createObjectStore(n.store,n.storeConfig);n.storeSchema.forEach(r=>{o.createIndex(r.key,r.value)})}})}})}catch(t){console.error("Failed to open db:",t)}},st=async(e,t)=>{try{return P==null?void 0:P.put(e,t)}catch(n){console.error("Failed to update:",n)}},ot={name:"BitBoxTools",version:1,objectStoresMeta:[{store:"starkTransactions",storeConfig:{keyPath:"address",autoIncrement:!1},storeSchema:[{key:"address",value:"address"},{key:"data",value:"data"}]},{store:"zkTransactions",storeConfig:{keyPath:"address",autoIncrement:!1},storeSchema:[{key:"address",value:"address"},{key:"data",value:"data"}]}]},se=async e=>{let t;try{await rt(ot);const n=await Me(e),o=n.transactions,r=n.transfers,s=qe(e,r),{tx:i,lastTime:f,fee:l}=await Re(o),u=await $e(e),_=We(r),x=await Ue(e),v=Ge(o);return t={accountInfo:x,balance:u,tx:i,lastTime:f,fee:l,activity:s,bridge:_,...v,result:"success"},await st("starkTransactions",{address:e,data:JSON.stringify(o)}),t}catch(n){return t={result:"error",reason:n.message},t}};const{TextArea:it}=ie,{Content:ct}=Fe,gt=()=>{const[e,t]=y.useState(!1),[n,o]=y.useState(!1),[r,s]=y.useState([]),[i]=$.useForm(),[f,l]=y.useState(!1),[u,_]=y.useState([]),[x,v]=y.useState(!1);let B=r.length+1;y.useEffect(()=>{v(!0);const a=localStorage.getItem("stark_addresses");setTimeout(()=>{v(!1)},500),a&&s(JSON.parse(a))},[]),y.useEffect(()=>{localStorage.setItem("stark_addresses",JSON.stringify(r))},[r]),y.useEffect(()=>{localStorage.getItem("stark_transactions")&&localStorage.removeItem("stark_transactions")},[]);const L=[{title:"#",key:"index",align:"center",render:(a,c,C)=>C+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(a,c)=>c.key===he?d.jsx(ie,{placeholder:"请输入备注",defaultValue:a,onPressEnter:g=>{c.name=g.target.value,s([...r]),localStorage.setItem("stark_addresses",JSON.stringify(r)),J(null)}}):d.jsxs(d.Fragment,{children:[d.jsx(A,{color:"blue",children:a}),d.jsx(I,{shape:"circle",icon:d.jsx(Ce,{}),size:"small",onClick:()=>J(c.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(a,c)=>{const C=()=>{xe(a),Ee.success("地址已复制")};return a?d.jsxs(d.Fragment,{children:[a.slice(0,4),"...",a.slice(-4),d.jsx(I,{type:"text",icon:d.jsx(be,{}),onClick:C,style:{marginLeft:8}})]}):d.jsx(Q,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(a,c)=>a},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(a,c)=>a},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(a,c)=>a},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(a,c)=>a},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(a,c)=>a},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(a,c)=>a},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(a,c)=>a,sorter:(a,c)=>a.tx-c.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(a,c)=>d.jsx("a",{href:`https://voyager.online/contract/${c.address}`,target:"_blank",children:a})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(a,c)=>a},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(a,c)=>a}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(a,c)=>a},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(a,c)=>a}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(a,c)=>a},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(a,c)=>a},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(a,c)=>a},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(a,c)=>a},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(a,c)=>a,sorter:(a,c)=>a.Vol-c.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(a,c)=>a,sorter:(a,c)=>a.fee-c.fee}]},{title:"状态",key:"result",align:"center",render:(a,c)=>d.jsxs(K,{children:[c.result==="success"?d.jsx(A,{icon:d.jsx(Ae,{}),color:"success",children:"成功"}):null,c.result==="error"?d.jsx(ke,{title:c.reason,children:d.jsx(A,{icon:d.jsx(Ne,{}),color:"error",children:"失败 "})}):null,c.result==="pending"?d.jsx(A,{icon:d.jsx(Y,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(a,c)=>d.jsxs(K,{children:[d.jsx(X,{title:"确认删除？",onConfirm:()=>M(c.key),children:d.jsx(I,{icon:d.jsx(Z,{})})}),d.jsx(I,{icon:d.jsx(De,{}),onClick:()=>{H(c.key)}})]})}]}],M=a=>{s(r.filter(c=>c.key!==a)),localStorage.setItem("stark_addresses",JSON.stringify(r.filter(c=>c.key!==a)))},me=async()=>{try{o(!0),t(!1);const c=(await i.validateFields()).addresses.split(`
`),C=5;let g=0,h=[];const T=()=>{for(;h.length>0&&g<C;){const m=h.shift();g+=1,m().finally(()=>{g-=1,T()})}};for(let m of c){if(m=m.trim(),m.length!==66&&m.length!==64){E.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}m.startsWith("0x")||(m="0x"+m);const w=()=>new Promise(async(D,R)=>{try{s(F=>{const b=[...F];if(b.findIndex(k=>k.address===m)===-1){const k={key:B.toString(),address:m,result:"pending"};B++,b.push(k)}return b});const j=await se(m);s(F=>{const b=[...F],p=b.findIndex(k=>k.address===m);return p!==-1&&(b[p]={...b[p],...j}),b}),D()}catch(j){R(j)}});h.push(w)}for(T();g>0||h.length>0;)await new Promise(m=>setTimeout(m,100));E.success({message:"成功",description:"批量添加完成",duration:1})}catch(a){E.error({message:"错误",description:a.message,duration:1})}finally{i.resetFields(),_([]),o(!1)}},H=async a=>{const c=a?[a]:u;if(!c.length){E.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}l(!0);try{let g=0,h=[];const T=()=>{for(;h.length>0&&g<5;){const m=h.shift();g+=1,m().finally(()=>{g-=1,T()})}};for(let m of c){const w=r.findIndex(D=>D.key===m);if(w!==-1){const D=()=>new Promise(async(R,j)=>{try{s(b=>{const p=[...b];for(let k in p[w])k!=="address"&&k!=="name"&&k!=="key"&&(k==="result"?p[w][k]="pending":p[w][k]=null);return p});const F=await se(r[w].address);s(b=>{const p=[...b];return p[w]={...p[w],...F},localStorage.setItem("stark_addresses",JSON.stringify(p)),p}),R()}catch(F){j(F)}});h.push(D)}}for(T();g>0||h.length>0;)await new Promise(m=>setTimeout(m,100));E.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(C){E.error({message:"错误",description:C.message,duration:1})}finally{l(!1),a||_([])}},_e=()=>{if(!u.length){E.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}s(r.filter(a=>!u.includes(a.key))),localStorage.setItem("stark_addresses",JSON.stringify(r.filter(a=>!u.includes(a.key)))),_([])},ge=()=>{Se(r,"starkInfo")},[he,J]=y.useState(null),pe={selectedRowKeys:u,onChange:a=>{_(a)}};return d.jsx("div",{children:d.jsxs(ct,{children:[d.jsx(Te,{title:"批量添加地址",open:e,onOk:me,onCancel:()=>{t(!1),i.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:d.jsx($,{form:i,layout:"vertical",children:d.jsx($.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(a,c)=>{const C=c.split(`
`);let g=[];for(let h=0;h<C.length;h++){let T=C[h].trim();(!T.startsWith("0x")||T.length!==66&&T.length!==64)&&g.push(h+1)}return g.length?Promise.reject(`行 ${g.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:d.jsx(it,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),d.jsx("div",{style:{marginBottom:"50px"},children:d.jsx(Q,{spinning:x,size:"large",children:d.jsx(we,{rowSelection:pe,dataSource:r,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:L})})}),d.jsx("div",{className:"stark_footer",children:d.jsx(ye,{size:"small",style:{width:"100%"},children:d.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[d.jsx(I,{type:"primary",onClick:()=>{t(!0)},size:"large",style:{width:"25%"},icon:d.jsx(ve,{}),loading:n,children:n?"添加中...":"添加地址"}),d.jsx(I,{type:"primary",onClick:()=>H(),loading:f,size:"large",style:{width:"25%"},icon:d.jsx(Y,{}),children:"刷新选中地址"}),d.jsx(X,{title:"确认删除"+u.length+"个地址？",onConfirm:_e,children:d.jsx(I,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:d.jsx(Z,{}),children:"删除选中地址"})}),d.jsx(I,{type:"primary",icon:d.jsx(Ie,{}),size:"large",style:{width:"8%"},onClick:ge})]})})})]})})};export{gt as default};
