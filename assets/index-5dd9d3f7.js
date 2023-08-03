import{r as y,A as Q,f as O,s as P,x as s,S as L,D as se,B as S,E as ie,bI as oe,z as U,y as ce,bJ as le}from"./index-ac424f84.js";import{F as q,M as de,c as _e,U as me,S as V,P as W,d as M,e as ue,I as K,T as D,n as I,h as fe}from"./save_excel-e4e2002e.js";import{a as ge}from"./index-50b19124.js";import{m as he}from"./index-cb965772.js";import{R as pe}from"./ReloadOutlined-5e480228.js";import"./index-8009887e.js";var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const Ce=ye;var Y=function(a,c){return y.createElement(Q,O(O({},a),{},{ref:c,icon:Ce}))};Y.displayName="CheckCircleOutlined";const be=y.forwardRef(Y);var xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const ke=xe;var X=function(a,c){return y.createElement(Q,O(O({},a),{},{ref:c,icon:ke}))};X.displayName="CloseCircleOutlined";const Te=y.forwardRef(X);async function G(o,a,c){const i=await P.post(o,a,{headers:c});let t=[];const n={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return i.data.data.erc20TransferEvents.edges.forEach(l=>{const{transaction_hash:m,from_address:u,transfer_amount_display:d,transfer_from_address:f,transfer_to_address:k,from_erc20_identifier:F,main_call:A,timestamp:B,__typename:N}=l.node;t.push({transaction_hash:m,from_address:u,transfer_amount_display:d,transfer_from_address:f,transfer_to_address:k,from_erc20_identifier:F,timestamp:B,main_call:A,__typename:N,total_value:n.hasOwnProperty(F)?d*n[F]:0})}),{transfers:t,hasNextPage:i.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:i.data.data.erc20TransferEvents.pageInfo.endCursor}}async function ve(o){const a="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:o,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let t=[],n=await G(a,i,c);for(t.push(...n.transfers);n.hasNextPage;)i.variables.after=n.endCursor,n=await G(a,i,c),t.push(...n.transfers);return t}async function J(o,a,c){const i=await P.post(o,a,{headers:c});let t=[];return i.data.data.transactions.edges.forEach(n=>{const{actual_fee_display:l,initiator_address:m,initiator_identifier:u,nonce:d,timestamp:f,transaction_hash:k}=n.node;t.push({actual_fee_display:l,initiator_address:m,initiator_identifier:u,nonce:d,timestamp:f,transaction_hash:k,transfers:[]})}),{transactions:t,hasNextPage:i.data.data.transactions.pageInfo.hasNextPage,endCursor:i.data.data.transactions.pageInfo.endCursor}}async function Se(o){const a="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query TransactionsTableQuery(
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
`,variables:{first:30,after:null,input:{initiator_address:o,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let t=[],n=await J(a,i,c);for(t.push(...n.transactions);n.hasNextPage;)i.variables.after=n.endCursor,n=await J(a,i,c),t.push(...n.transactions);const l=await ve(o);l.forEach(u=>{t.forEach(d=>{u.transaction_hash===d.transaction_hash&&d.transfers.push(u)})});const m=JSON.parse(localStorage.getItem("stark_transactions"));if(m===null)return localStorage.setItem("stark_transactions",JSON.stringify([{address:o,transactions:t}])),t;{const u=m.findIndex(d=>d.address===o);u===-1?m.push({address:o,transactions:t}):m[u].transactions=t,localStorage.setItem("stark_transactions",JSON.stringify(m))}return{transfers:l,transactions:t}}const Z=o=>{const a=new Date(o)*1e3,c=(new Date().getTime()-new Date(a).getTime())/1e3;if(c<60)return Math.round(c)+" 秒前";const i=c/60;if(i<60)return Math.round(i)+" 分前";const t=i/60;if(t<24)return Math.round(t)+" 时前";const n=t/24;return Math.round(n)+" 天前"},we=async o=>{try{if(!o)return{tx:0,lastTime:"无交易",fee:0};let a=0;o.forEach(n=>{a+=parseFloat(n.actual_fee_display)});const c=o[0].nonce,i=o[0].timestamp,t=Z(i)||"无交易";return{tx:c,lastTime:t,fee:Number(a).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function Ie(o){try{const a="https://starkscan.stellate.sh/",c={query:`query ERC20BalancesByOwnerAddressTableQuery(
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
`,variables:{input:{owner_address:o}}},i={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},t=await P.post(a,c,{headers:i});let n={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return t.data.data.erc20BalancesByOwnerAddress.forEach(l=>{l.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?n.ETH=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?n.USDT=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?n.USDC=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?n.DAI=Number(parseFloat(l.balance_display)).toFixed(3):l.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(n.WBTC=Number(parseFloat(l.balance_display)).toFixed(3))}),n}catch(a){return console.log(a),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const Fe=o=>{const a=o.getFullYear(),c=new Date(a,0,1),i=(o.getDay()+6)%7,t=Math.floor((o.getTime()-c.getTime())/864e5),n=Math.floor((t+c.getDay()-i)/7);return`${a}-${n}`},Ee=(o,a)=>{const c=new Set,i=new Set,t=new Set,n=new Set;return a.forEach(l=>{if(l.transfer_from_address.toLowerCase()!==o.toLowerCase())return;const m=new Date(l.timestamp*1e3),u=m.getFullYear(),d=m.getMonth(),f=m.getDate(),k=Fe(m);c.add(`${u}-${d}-${f}`),i.add(`${u}-${k}`),t.add(`${u}-${d}`),n.add(l.transfer_to_address)}),{dayActivity:c.size,weekActivity:i.size,monthActivity:t.size,contractActivity:n.size}};function je(o,a){if(a.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:c,weekActivity:i,monthActivity:t,contractActivity:n}=Ee(o,a);return{dayActivity:c,weekActivity:i,monthActivity:t,contractActivity:n}}const Ae=o=>{let a=0,c=0,i=0,t=0;const n={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return o.forEach(l=>{const m=l.transfer_from_address,u=l.transfer_to_address,d=l.transfer_amount_display,f=l.from_erc20_identifier;m.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(l.main_call?l.main_call.selector_identifier:null)==="handle_deposit"&&(a+=1,i+=parseFloat(d)*n[f]),u.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(l.main_call?l.main_call.selector_identifier:null)==="initiate_withdraw"&&(c+=1,t+=parseFloat(d)*n[f])}),{DepositTx:a,WithdrawTx:c,DepositVolume:Number(i.toFixed(2)),WithdrawVolume:Number(t.toFixed(2))}};async function De(o){const a="https://starkscan.stellate.sh/",c={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:o}}},i={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},t=await P.post(a,c,{headers:i}),n=Z(t.data.data.contract.deployed_at_timestamp),l=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"无";return{deployedTime:n,starkId:l}}function Oe(o){try{let a=0;return o.forEach(c=>{const i=c.transfers.sort((n,l)=>parseInt(l.total_value)-parseInt(n.total_value));if(i.length===0)return;const t=parseFloat(i[0].total_value);a+=t}),{Vol:a.toFixed(3)}}catch(a){return console.log(a),{Vol:"-"}}}const H=async o=>{try{const a=await Se(o),c=a.transactions,i=a.transfers,t=je(o,i),{tx:n,lastTime:l,fee:m}=await we(c),u=await Ie(o),d=Ae(i),f=await De(o),k=Oe(c);return{accountInfo:f,balance:u,tx:n,lastTime:l,fee:m,activity:t,bridge:d,...k,result:"success"}}catch(a){return{result:"error",reason:a.message}}};const{TextArea:Pe}=K,{Content:Be}=ge,Ue=()=>{const[o,a]=y.useState(!1),[c,i]=y.useState(!1),[t,n]=y.useState([]),[l]=q.useForm(),[m,u]=y.useState(!1),[d,f]=y.useState([]),[k,F]=y.useState(!1);let A=t.length;y.useEffect(()=>{F(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{F(!1)},500),e&&n(JSON.parse(e))},[]),y.useEffect(()=>{localStorage.setItem("stark_addresses",JSON.stringify(t))},[t]);const B=[{title:"#",key:"index",align:"center",render:(e,r,C)=>C+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,r)=>r.key===ae?s.jsx(K,{placeholder:"请输入备注",defaultValue:e,onPressEnter:g=>{r.name=g.target.value,n([...t]),localStorage.setItem("stark_addresses",JSON.stringify(t)),R(null)}}):s.jsxs(s.Fragment,{children:[s.jsx(D,{color:"blue",children:e}),s.jsx(S,{shape:"circle",icon:s.jsx(ie,{}),size:"small",onClick:()=>R(r.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,r)=>{const C=()=>{le(e),he.success("地址已复制")};return e?s.jsxs(s.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),s.jsx(S,{type:"text",icon:s.jsx(oe,{}),onClick:C,style:{marginLeft:8}})]}):s.jsx(L,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,r)=>e},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,r)=>e},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,r)=>e},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,r)=>e},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,r)=>e},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,r)=>e},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,r)=>e,sorter:(e,r)=>e.tx-r.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,r)=>s.jsx("a",{href:`https://voyager.online/contract/${r.address}`,target:"_blank",children:e})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,r)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,r)=>e}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,r)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,r)=>e}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,r)=>e},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,r)=>e},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,r)=>e},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,r)=>e},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,r)=>e,sorter:(e,r)=>e.Vol-r.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,r)=>e,sorter:(e,r)=>e.fee-r.fee}]},{title:"状态",key:"result",align:"center",render:(e,r)=>s.jsxs(U,{children:[r.result==="success"?s.jsx(D,{icon:s.jsx(be,{}),color:"success",children:"成功"}):null,r.result==="error"?s.jsx(ce,{title:r.reason,children:s.jsx(D,{icon:s.jsx(Te,{}),color:"error",children:"失败 "})}):null,r.result==="pending"?s.jsx(D,{icon:s.jsx(V,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(e,r)=>s.jsxs(U,{children:[s.jsx(W,{title:"确认删除？",onConfirm:()=>N(r.key),children:s.jsx(S,{icon:s.jsx(M,{})})}),s.jsx(S,{icon:s.jsx(pe,{}),onClick:()=>{z(r.key)}})]})}]}],N=e=>{n(t.filter(r=>r.key!==e)),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(r=>r.key!==e)))},ee=async()=>{try{i(!0),a(!1);const r=(await l.validateFields()).addresses.split(`
`),C=5;let g=0,h=[];const T=()=>{for(;h.length>0&&g<C;){const _=h.shift();g+=1,_().finally(()=>{g-=1,T()})}};for(let _ of r){if(_=_.trim(),_.length!==66&&_.length!==64){I.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}_.startsWith("0x")||(_="0x"+_);const v=()=>new Promise(async(E,$)=>{try{n(w=>{const b=[...w];if(b.findIndex(x=>x.address===_)===-1){const x={key:A.toString(),address:_,result:"pending"};A++,b.push(x)}return b});const j=await H(_);n(w=>{const b=[...w],p=b.findIndex(x=>x.address===_);return p!==-1&&(b[p]={...b[p],...j}),b}),E()}catch(j){$(j)}});h.push(v)}for(T();g>0||h.length>0;)await new Promise(_=>setTimeout(_,100));I.success({message:"成功",description:"批量添加完成",duration:1})}catch(e){I.error({message:"错误",description:e.message,duration:1})}finally{l.resetFields(),f([]),i(!1)}},z=async e=>{const r=e?[e]:d;if(!r.length){I.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}u(!0);try{let g=0,h=[];const T=()=>{for(;h.length>0&&g<5;){const _=h.shift();g+=1,_().finally(()=>{g-=1,T()})}};for(let _ of r){const v=t.findIndex(E=>E.key===_);if(v!==-1){const E=()=>new Promise(async($,j)=>{try{n(b=>{const p=[...b];for(let x in p[v])x!=="address"&&x!=="name"&&x!=="key"&&(x==="result"?p[v][x]="pending":p[v][x]=null);return p});const w=await H(t[v].address);n(b=>{const p=[...b];return p[v]={...p[v],...w},localStorage.setItem("stark_addresses",JSON.stringify(p)),p}),$()}catch(w){j(w)}});h.push(E)}}for(T();g>0||h.length>0;)await new Promise(_=>setTimeout(_,100));I.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(C){I.error({message:"错误",description:C.message,duration:1})}finally{u(!1),e||f([])}},te=()=>{if(!d.length){I.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}n(t.filter(e=>!d.includes(e.key))),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(e=>!d.includes(e.key)))),f([])},ne=()=>{fe(t,"starkInfo")},[ae,R]=y.useState(null),re={selectedRowKeys:d,onChange:e=>{f(e)}};return s.jsx("div",{children:s.jsxs(Be,{children:[s.jsx(de,{title:"批量添加地址",open:o,onOk:ee,onCancel:()=>{a(!1),l.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:s.jsx(q,{form:l,layout:"vertical",children:s.jsx(q.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,r)=>{const C=r.split(`
`);let g=[];for(let h=0;h<C.length;h++){let T=C[h].trim();(!T.startsWith("0x")||T.length!==66&&T.length!==64)&&g.push(h+1)}return g.length?Promise.reject(`行 ${g.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:s.jsx(Pe,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),s.jsx("div",{style:{marginBottom:"50px"},children:s.jsx(L,{spinning:k,size:"large",children:s.jsx(_e,{rowSelection:re,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:B})})}),s.jsx("div",{className:"stark_footer",children:s.jsx(se,{size:"small",style:{width:"100%"},children:s.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[s.jsx(S,{type:"primary",onClick:()=>{a(!0)},size:"large",style:{width:"25%"},icon:s.jsx(me,{}),loading:c,children:c?"添加中...":"添加地址"}),s.jsx(S,{type:"primary",onClick:()=>z(),loading:m,size:"large",style:{width:"25%"},icon:s.jsx(V,{}),children:"刷新选中地址"}),s.jsx(W,{title:"确认删除"+d.length+"个地址？",onConfirm:te,children:s.jsx(S,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:s.jsx(M,{}),children:"删除选中地址"})}),s.jsx(S,{type:"primary",icon:s.jsx(ue,{}),size:"large",style:{width:"8%"},onClick:ne})]})})})]})})};export{Ue as default};
