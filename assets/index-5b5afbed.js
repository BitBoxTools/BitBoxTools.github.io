import{r as w,k as n}from"./index-d9ff0c93.js";import{F as O,M as X,c as Z,U as ee,S as te,P as q,d as z,e as ne,I as U,T as ae,n as S,h as re}from"./save_excel-628950f5.js";import{b as D,S as l,C as se}from"./axios-c9890a7e.js";import{C as ie,c as oe}from"./index-d9769c13.js";import{B as I,E as ce,S as de}from"./EditOutlined-617fb07a.js";import{a as le}from"./index-a4487b08.js";import{m as _e}from"./index-33e56c2c.js";async function L(d,i,o){const r=await D.post(d,i,{headers:o});let t=[];const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return r.data.data.erc20TransferEvents.edges.forEach(c=>{const{transaction_hash:g,from_address:p,transfer_amount_display:_,transfer_from_address:f,transfer_to_address:T,from_erc20_identifier:F,main_call:j,timestamp:P,__typename:N}=c.node;t.push({transaction_hash:g,from_address:p,transfer_amount_display:_,transfer_from_address:f,transfer_to_address:T,from_erc20_identifier:F,timestamp:P,main_call:j,__typename:N,total_value:a.hasOwnProperty(F)?_*a[F]:0})}),{transfers:t,hasNextPage:r.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:r.data.data.erc20TransferEvents.pageInfo.endCursor}}async function me(d){const i="https://starkscan.stellate.sh/",o={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"},r={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:d,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let t=[],a=await L(i,r,o);for(t.push(...a.transfers);a.hasNextPage;)r.variables.after=a.endCursor,a=await L(i,r,o),t.push(...a.transfers);return t}async function $(d,i,o){const r=await D.post(d,i,{headers:o});let t=[];return r.data.data.transactions.edges.forEach(a=>{const{actual_fee_display:c,initiator_address:g,initiator_identifier:p,nonce:_,timestamp:f,transaction_hash:T}=a.node;t.push({actual_fee_display:c,initiator_address:g,initiator_identifier:p,nonce:_,timestamp:f,transaction_hash:T,transfers:[]})}),{transactions:t,hasNextPage:r.data.data.transactions.pageInfo.hasNextPage,endCursor:r.data.data.transactions.pageInfo.endCursor}}async function fe(d){const i="https://starkscan.stellate.sh/",o={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"},r={query:`query TransactionsTableQuery(
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
`,variables:{first:30,after:null,input:{initiator_address:d,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let t=[],a=await $(i,r,o);for(t.push(...a.transactions);a.hasNextPage;)r.variables.after=a.endCursor,a=await $(i,r,o),t.push(...a.transactions);const c=await me(d);return await ue(d,c,t),{transfers:c,transactions:t}}async function ue(d,i,o){return i.forEach(r=>{o.forEach(t=>{r.transaction_hash===t.transaction_hash&&t.transfers.push(r)})}),o}const V=d=>{const i=new Date(d)*1e3,o=(new Date().getTime()-new Date(i).getTime())/1e3;if(o<60)return Math.round(o)+" 秒前";const r=o/60;if(r<60)return Math.round(r)+" 分前";const t=r/60;if(t<24)return Math.round(t)+" 时前";const a=t/24;return Math.round(a)+" 天前"},ge=async d=>{try{if(!d)return{tx:0,lastTime:"无交易",fee:0};let i=0;d.forEach(a=>{i+=parseFloat(a.actual_fee_display)});const o=d[0].nonce,r=d[0].timestamp,t=V(r)||"无交易";return{tx:o,lastTime:t,fee:Number(i).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function pe(d){try{const i="https://starkscan.stellate.sh/",o={query:`query ERC20BalancesByOwnerAddressTableQuery(
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
`,variables:{input:{owner_address:d}}},r={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"},t=await D.post(i,o,{headers:r});let a={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return t.data.data.erc20BalancesByOwnerAddress.forEach(c=>{c.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?a.ETH=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?a.USDT=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?a.USDC=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?a.DAI=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(a.WBTC=Number(parseFloat(c.balance_display)).toFixed(3))}),a}catch(i){return console.log(i),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const he=d=>{const i=d.getFullYear(),o=new Date(i,0,1),r=(d.getDay()+6)%7,t=Math.floor((d.getTime()-o.getTime())/864e5),a=Math.floor((t+o.getDay()-r)/7);return`${i}-${a}`},ye=(d,i)=>{const o=new Set,r=new Set,t=new Set,a=new Set;return i.forEach(c=>{if(c.transfer_from_address.toLowerCase()!==d.toLowerCase())return;const g=new Date(c.timestamp*1e3),p=g.getFullYear(),_=g.getMonth(),f=g.getDate(),T=he(g);o.add(`${p}-${_}-${f}`),r.add(`${p}-${T}`),t.add(`${p}-${_}`),a.add(c.transfer_to_address)}),{dayActivity:o.size,weekActivity:r.size,monthActivity:t.size,contractActivity:a.size}};function Ce(d,i){if(i.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:o,weekActivity:r,monthActivity:t,contractActivity:a}=ye(d,i);return{dayActivity:o,weekActivity:r,monthActivity:t,contractActivity:a}}const be=d=>{let i=0,o=0,r=0,t=0;const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return d.forEach(c=>{const g=c.transfer_from_address,p=c.transfer_to_address,_=c.transfer_amount_display,f=c.from_erc20_identifier;g.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(c.main_call?c.main_call.selector_identifier:null)==="handle_deposit"&&(i+=1,r+=parseFloat(_)*a[f]),p.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(c.main_call?c.main_call.selector_identifier:null)==="initiate_withdraw"&&(o+=1,t+=parseFloat(_)*a[f])}),{DepositTx:i,WithdrawTx:o,DepositVolume:Number(r.toFixed(2)),WithdrawVolume:Number(t.toFixed(2))}};async function Te(d){const i="https://starkscan.stellate.sh/",o={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:d}}},r={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"},t=await D.post(i,o,{headers:r}),a=V(t.data.data.contract.deployed_at_timestamp),c=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"无";return{deployedTime:a,starkId:c}}function ke(d){try{let i=0;return d.forEach(o=>{const r=o.transfers.sort((a,c)=>parseInt(c.total_value)-parseInt(a.total_value));if(r.length===0)return;const t=parseFloat(r[0].total_value);i+=t}),{Vol:i.toFixed(3)}}catch(i){return console.log(i),{Vol:"-"}}}const R=async d=>{const i=await fe(d),o=i.transactions,r=i.transfers,t=Ce(d,r),{tx:a,lastTime:c,fee:g}=await ge(o),p=await pe(d),_=be(r),f=await Te(d),T=ke(o);return{accountInfo:f,balance:p,tx:a,lastTime:c,fee:g,activity:t,bridge:_,...T}};const{TextArea:xe}=U,{Content:ve}=le,De=()=>{const[d,i]=w.useState(!1),[o,r]=w.useState(!1),[t,a]=w.useState([]),[c]=O.useForm(),[g,p]=w.useState(!1),[_,f]=w.useState([]),[T,F]=w.useState(!1);let j=t.length;w.useEffect(()=>{F(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{F(!1)},500),e&&a(JSON.parse(e))},[]),w.useEffect(()=>{localStorage.setItem("stark_addresses",JSON.stringify(t))},[t]);const P=[{title:"#",key:"index",align:"center",render:(e,s,h)=>h+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,s)=>s.key===Q?n.jsx(U,{placeholder:"请输入备注",defaultValue:e,onPressEnter:y=>{s.name=y.target.value,a([...t]),localStorage.setItem("stark_addresses",JSON.stringify(t)),W(null)}}):n.jsxs(n.Fragment,{children:[n.jsx(ae,{color:"blue",children:e}),n.jsx(I,{shape:"circle",icon:n.jsx(ce,{}),size:"small",onClick:()=>W(s.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,s)=>{const h=()=>{oe(e),_e.success("地址已复制")};return e?n.jsxs(n.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),n.jsx(I,{type:"text",icon:n.jsx(ie,{}),onClick:h,style:{marginLeft:8}})]}):n.jsx(l,{})}},{title:"创建时间",dataIndex:["accountInfo","deployedTime"],key:" deployedTime",align:"center",render:(e,s)=>e||n.jsx(l,{})},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,s)=>e||n.jsx(l,{})},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{}),sorter:(e,s)=>e.tx-s.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,s)=>e||e===0?n.jsx("a",{href:`https://voyager.online/contract/${s.address}`,target:"_blank",children:e}):n.jsx(l,{})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{})},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{}),sorter:(e,s)=>e.Vol-s.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,s)=>e||e===0?e:n.jsx(l,{}),sorter:(e,s)=>e.fee-s.fee}]},{title:"操作",key:"action",align:"center",render:(e,s)=>n.jsx(de,{size:"small",children:n.jsx(q,{title:"确认删除？",onConfirm:()=>N(s.key),children:n.jsx(I,{icon:n.jsx(z,{})})})})}]}],N=e=>{a(t.filter(s=>s.key!==e)),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(s=>s.key!==e)))},M=async()=>{try{r(!0),i(!1);const s=(await c.validateFields()).addresses.split(`
`),h=5;let y=0,u=[];const C=()=>{for(;u.length>0&&y<h;){const b=u.shift();y+=1,b().finally(()=>{y-=1,C()})}};a(b=>{const x=[...b];for(let m of s){if(m=m.trim(),m.length!==66&&m.length!==64){S.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}if(m.startsWith("0x")||(m="0x"+m),x.findIndex(v=>v.address===m)===-1){const v={key:j.toString(),address:m};j++,x.push(v)}}return x});for(let b of s){const x=()=>new Promise(async(m,k)=>{try{const v=await R(b);a(E=>{const A=[...E],B=A.findIndex(Y=>Y.address===b);return B!==-1&&(A[B]={...A[B],...v}),A}),m()}catch(v){k(v)}});u.push(x)}for(C();y>0||u.length>0;)await new Promise(b=>setTimeout(b,100));S.success({message:"成功",description:"批量添加成功",duration:1})}catch(e){S.error({message:"错误",description:e.message,duration:1})}finally{c.resetFields(),f([]),r(!1)}},G=async()=>{if(!_.length){S.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}p(!0);try{let s=0,h=[];const y=()=>{for(;h.length>0&&s<5;){const u=h.shift();s+=1,u().finally(()=>{s-=1,y()})}};for(let u of _){const C=t.findIndex(b=>b.key===u);if(C!==-1){a(x=>{const m=[...x];for(let k in m[C])k!=="address"&&k!=="name"&&k!=="key"&&(m[C][k]=null);return m});const b=()=>new Promise(async(x,m)=>{try{const k=await R(t[C].address);a(v=>{const E=[...v];return E[C]={...E[C],...k},localStorage.setItem("stark_addresses",JSON.stringify(E)),E}),x()}catch(k){m(k)}});h.push(b)}}for(y();s>0||h.length>0;)await new Promise(u=>setTimeout(u,100));S.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(e){S.error({message:"错误",description:e.message,duration:1})}finally{p(!1),f([])}},H=()=>{if(!_.length){S.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}a(t.filter(e=>!_.includes(e.key))),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(e=>!_.includes(e.key)))),f([])},K=()=>{re(t,"starkInfo")},[Q,W]=w.useState(null),J={selectedRowKeys:_,onChange:e=>{f(e)}};return n.jsx("div",{children:n.jsxs(ve,{children:[n.jsx(X,{title:"批量添加地址",open:d,onOk:M,onCancel:()=>{i(!1),c.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:n.jsx(O,{form:c,layout:"vertical",children:n.jsx(O.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,s)=>{const h=s.split(`
`);let y=[];for(let u=0;u<h.length;u++){let C=h[u].trim();(!C.startsWith("0x")||C.length!==66&&C.length!==64)&&y.push(u+1)}return y.length?Promise.reject(`行 ${y.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:n.jsx(xe,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),n.jsx("div",{style:{marginBottom:"50px"},children:n.jsx(l,{spinning:T,size:"large",children:n.jsx(Z,{rowSelection:J,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:P})})}),n.jsx("div",{className:"stark_footer",children:n.jsx(se,{size:"small",style:{width:"100%"},children:n.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[n.jsx(I,{type:"primary",onClick:()=>{i(!0)},size:"large",style:{width:"25%"},icon:n.jsx(ee,{}),loading:o,children:o?"添加中...":"添加地址"}),n.jsx(I,{type:"primary",onClick:G,loading:g,size:"large",style:{width:"25%"},icon:n.jsx(te,{}),children:"刷新选中地址"}),n.jsx(q,{title:"确认删除"+_.length+"个地址？",onConfirm:H,children:n.jsx(I,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:n.jsx(z,{}),children:"删除选中地址"})}),n.jsx(I,{type:"primary",icon:n.jsx(ne,{}),size:"large",style:{width:"8%"},onClick:K})]})})})]})})};export{De as default};
