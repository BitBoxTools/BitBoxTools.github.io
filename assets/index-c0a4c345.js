import{s as A,r as x,x as n,S as _,D as X,B as S,E as Z,bI as ee,z as te,bJ as ne}from"./index-a2d79f92.js";import{F as q,M as ae,c as re,U as se,S as ie,P as R,d as z,e as oe,I as W,T as ce,n as w,h as de}from"./save_excel-026df585.js";import{a as le}from"./index-f153187a.js";import{m as _e}from"./index-c32049e3.js";import"./index-5743b6a0.js";async function L(o,s,d){const i=await A.post(o,s,{headers:d});let t=[];const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return i.data.data.erc20TransferEvents.edges.forEach(c=>{const{transaction_hash:m,from_address:f,transfer_amount_display:l,transfer_from_address:g,transfer_to_address:k,from_erc20_identifier:I,main_call:E,timestamp:P,__typename:B}=c.node;t.push({transaction_hash:m,from_address:f,transfer_amount_display:l,transfer_from_address:g,transfer_to_address:k,from_erc20_identifier:I,timestamp:P,main_call:E,__typename:B,total_value:a.hasOwnProperty(I)?l*a[I]:0})}),{transfers:t,hasNextPage:i.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:i.data.data.erc20TransferEvents.pageInfo.endCursor}}async function me(o){const s="https://starkscan.stellate.sh/",d={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:o,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let t=[],a=await L(s,i,d);for(t.push(...a.transfers);a.hasNextPage;)i.variables.after=a.endCursor,a=await L(s,i,d),t.push(...a.transfers);return t}async function U(o,s,d){const i=await A.post(o,s,{headers:d});let t=[];return i.data.data.transactions.edges.forEach(a=>{const{actual_fee_display:c,initiator_address:m,initiator_identifier:f,nonce:l,timestamp:g,transaction_hash:k}=a.node;t.push({actual_fee_display:c,initiator_address:m,initiator_identifier:f,nonce:l,timestamp:g,transaction_hash:k,transfers:[]})}),{transactions:t,hasNextPage:i.data.data.transactions.pageInfo.hasNextPage,endCursor:i.data.data.transactions.pageInfo.endCursor}}async function fe(o){const s="https://starkscan.stellate.sh/",d={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query TransactionsTableQuery(
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
`,variables:{first:30,after:null,input:{initiator_address:o,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let t=[],a=await U(s,i,d);for(t.push(...a.transactions);a.hasNextPage;)i.variables.after=a.endCursor,a=await U(s,i,d),t.push(...a.transactions);const c=await me(o);c.forEach(f=>{t.forEach(l=>{f.transaction_hash===l.transaction_hash&&l.transfers.push(f)})});const m=JSON.parse(localStorage.getItem("stark_transactions"));if(m===null)return localStorage.setItem("stark_transactions",JSON.stringify([{address:o,transactions:t}])),t;{const f=m.findIndex(l=>l.address===o);f===-1?m.push({address:o,transactions:t}):m[f].transactions=t,localStorage.setItem("stark_transactions",JSON.stringify(m))}return{transfers:c,transactions:t}}const G=o=>{const s=new Date(o)*1e3,d=(new Date().getTime()-new Date(s).getTime())/1e3;if(d<60)return Math.round(d)+" 秒前";const i=d/60;if(i<60)return Math.round(i)+" 分前";const t=i/60;if(t<24)return Math.round(t)+" 时前";const a=t/24;return Math.round(a)+" 天前"},ue=async o=>{try{if(!o)return{tx:0,lastTime:"无交易",fee:0};let s=0;o.forEach(a=>{s+=parseFloat(a.actual_fee_display)});const d=o[0].nonce,i=o[0].timestamp,t=G(i)||"无交易";return{tx:d,lastTime:t,fee:Number(s).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function ge(o){try{const s="https://starkscan.stellate.sh/",d={query:`query ERC20BalancesByOwnerAddressTableQuery(
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
`,variables:{input:{owner_address:o}}},i={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},t=await A.post(s,d,{headers:i});let a={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return t.data.data.erc20BalancesByOwnerAddress.forEach(c=>{c.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?a.ETH=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?a.USDT=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?a.USDC=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?a.DAI=Number(parseFloat(c.balance_display)).toFixed(3):c.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(a.WBTC=Number(parseFloat(c.balance_display)).toFixed(3))}),a}catch(s){return console.log(s),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const he=o=>{const s=o.getFullYear(),d=new Date(s,0,1),i=(o.getDay()+6)%7,t=Math.floor((o.getTime()-d.getTime())/864e5),a=Math.floor((t+d.getDay()-i)/7);return`${s}-${a}`},pe=(o,s)=>{const d=new Set,i=new Set,t=new Set,a=new Set;return s.forEach(c=>{if(c.transfer_from_address.toLowerCase()!==o.toLowerCase())return;const m=new Date(c.timestamp*1e3),f=m.getFullYear(),l=m.getMonth(),g=m.getDate(),k=he(m);d.add(`${f}-${l}-${g}`),i.add(`${f}-${k}`),t.add(`${f}-${l}`),a.add(c.transfer_to_address)}),{dayActivity:d.size,weekActivity:i.size,monthActivity:t.size,contractActivity:a.size}};function ye(o,s){if(s.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:d,weekActivity:i,monthActivity:t,contractActivity:a}=pe(o,s);return{dayActivity:d,weekActivity:i,monthActivity:t,contractActivity:a}}const Ce=o=>{let s=0,d=0,i=0,t=0;const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return o.forEach(c=>{const m=c.transfer_from_address,f=c.transfer_to_address,l=c.transfer_amount_display,g=c.from_erc20_identifier;m.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(c.main_call?c.main_call.selector_identifier:null)==="handle_deposit"&&(s+=1,i+=parseFloat(l)*a[g]),f.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(c.main_call?c.main_call.selector_identifier:null)==="initiate_withdraw"&&(d+=1,t+=parseFloat(l)*a[g])}),{DepositTx:s,WithdrawTx:d,DepositVolume:Number(i.toFixed(2)),WithdrawVolume:Number(t.toFixed(2))}};async function be(o){const s="https://starkscan.stellate.sh/",d={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:o}}},i={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},t=await A.post(s,d,{headers:i}),a=G(t.data.data.contract.deployed_at_timestamp),c=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"无";return{deployedTime:a,starkId:c}}function Te(o){try{let s=0;return o.forEach(d=>{const i=d.transfers.sort((a,c)=>parseInt(c.total_value)-parseInt(a.total_value));if(i.length===0)return;const t=parseFloat(i[0].total_value);s+=t}),{Vol:s.toFixed(3)}}catch(s){return console.log(s),{Vol:"-"}}}const V=async o=>{const s=await fe(o),d=s.transactions,i=s.transfers,t=ye(o,i),{tx:a,lastTime:c,fee:m}=await ue(d),f=await ge(o),l=Ce(i),g=await be(o),k=Te(d);return{accountInfo:g,balance:f,tx:a,lastTime:c,fee:m,activity:t,bridge:l,...k}};const{TextArea:ke}=W,{Content:xe}=le,je=()=>{const[o,s]=x.useState(!1),[d,i]=x.useState(!1),[t,a]=x.useState([]),[c]=q.useForm(),[m,f]=x.useState(!1),[l,g]=x.useState([]),[k,I]=x.useState(!1);let E=t.length;x.useEffect(()=>{I(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{I(!1)},500),e&&a(JSON.parse(e))},[]),x.useEffect(()=>{localStorage.setItem("stark_addresses",JSON.stringify(t))},[t]);const P=[{title:"#",key:"index",align:"center",render:(e,r,p)=>p+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,r)=>r.key===K?n.jsx(W,{placeholder:"请输入备注",defaultValue:e,onPressEnter:y=>{r.name=y.target.value,a([...t]),localStorage.setItem("stark_addresses",JSON.stringify(t)),$(null)}}):n.jsxs(n.Fragment,{children:[n.jsx(ce,{color:"blue",children:e}),n.jsx(S,{shape:"circle",icon:n.jsx(Z,{}),size:"small",onClick:()=>$(r.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,r)=>{const p=()=>{ne(e),_e.success("地址已复制")};return e?n.jsxs(n.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),n.jsx(S,{type:"text",icon:n.jsx(ee,{}),onClick:p,style:{marginLeft:8}})]}):n.jsx(_,{})}},{title:"创建时间",dataIndex:["accountInfo","deployedTime"],key:" deployedTime",align:"center",render:(e,r)=>e||n.jsx(_,{})},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,r)=>e||n.jsx(_,{})},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{}),sorter:(e,r)=>e.tx-r.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,r)=>e||e===0?n.jsx("a",{href:`https://voyager.online/contract/${r.address}`,target:"_blank",children:e}):n.jsx(_,{})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{})},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{}),sorter:(e,r)=>e.Vol-r.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,r)=>e||e===0?e:n.jsx(_,{}),sorter:(e,r)=>e.fee-r.fee}]},{title:"操作",key:"action",align:"center",render:(e,r)=>n.jsx(te,{size:"small",children:n.jsx(R,{title:"确认删除？",onConfirm:()=>B(r.key),children:n.jsx(S,{icon:n.jsx(z,{})})})})}]}],B=e=>{a(t.filter(r=>r.key!==e)),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(r=>r.key!==e)))},J=async()=>{try{i(!0),s(!1);const r=(await c.validateFields()).addresses.split(`
`),p=5;let y=0,h=[];const C=()=>{for(;h.length>0&&y<p;){const u=h.shift();y+=1,u().finally(()=>{y-=1,C()})}};for(let u of r){if(u=u.trim(),u.length!==66&&u.length!==64){w.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}u.startsWith("0x")||(u="0x"+u);const N=()=>new Promise(async(O,F)=>{try{a(T=>{const b=[...T];if(b.findIndex(j=>j.address===u)===-1){const j={key:E.toString(),address:u};E++,b.push(j)}return b});const v=await V(u);a(T=>{const b=[...T],D=b.findIndex(j=>j.address===u);return D!==-1&&(b[D]={...b[D],...v}),b}),O()}catch(v){F(v)}});h.push(N)}for(C();y>0||h.length>0;)await new Promise(u=>setTimeout(u,100));w.success({message:"成功",description:"批量添加成功",duration:1})}catch(e){w.error({message:"错误",description:e.message,duration:1})}finally{c.resetFields(),g([]),i(!1)}},M=async()=>{if(!l.length){w.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}f(!0);try{let r=0,p=[];const y=()=>{for(;p.length>0&&r<5;){const h=p.shift();r+=1,h().finally(()=>{r-=1,y()})}};for(let h of l){const C=t.findIndex(u=>u.key===h);if(C!==-1){const u=()=>new Promise(async(N,O)=>{try{a(v=>{const T=[...v];for(let b in T[C])b!=="address"&&b!=="name"&&b!=="key"&&(T[C][b]=null);return T});const F=await V(t[C].address);a(v=>{const T=[...v];return T[C]={...T[C],...F},localStorage.setItem("stark_addresses",JSON.stringify(T)),T}),N()}catch(F){O(F)}});p.push(u)}}for(y();r>0||p.length>0;)await new Promise(h=>setTimeout(h,100));w.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(e){w.error({message:"错误",description:e.message,duration:1})}finally{f(!1),g([])}},H=()=>{if(!l.length){w.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}a(t.filter(e=>!l.includes(e.key))),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(e=>!l.includes(e.key)))),g([])},Q=()=>{de(t,"starkInfo")},[K,$]=x.useState(null),Y={selectedRowKeys:l,onChange:e=>{g(e)}};return n.jsx("div",{children:n.jsxs(xe,{children:[n.jsx(ae,{title:"批量添加地址",open:o,onOk:J,onCancel:()=>{s(!1),c.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:n.jsx(q,{form:c,layout:"vertical",children:n.jsx(q.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,r)=>{const p=r.split(`
`);let y=[];for(let h=0;h<p.length;h++){let C=p[h].trim();(!C.startsWith("0x")||C.length!==66&&C.length!==64)&&y.push(h+1)}return y.length?Promise.reject(`行 ${y.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:n.jsx(ke,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),n.jsx("div",{style:{marginBottom:"50px"},children:n.jsx(_,{spinning:k,size:"large",children:n.jsx(re,{rowSelection:Y,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:P})})}),n.jsx("div",{className:"stark_footer",children:n.jsx(X,{size:"small",style:{width:"100%"},children:n.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[n.jsx(S,{type:"primary",onClick:()=>{s(!0)},size:"large",style:{width:"25%"},icon:n.jsx(se,{}),loading:d,children:d?"添加中...":"添加地址"}),n.jsx(S,{type:"primary",onClick:M,loading:m,size:"large",style:{width:"25%"},icon:n.jsx(ie,{}),children:"刷新选中地址"}),n.jsx(R,{title:"确认删除"+l.length+"个地址？",onConfirm:H,children:n.jsx(S,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:n.jsx(z,{}),children:"删除选中地址"})}),n.jsx(S,{type:"primary",icon:n.jsx(oe,{}),size:"large",style:{width:"8%"},onClick:Q})]})})})]})})};export{je as default};
