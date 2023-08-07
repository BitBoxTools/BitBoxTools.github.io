import{F as B,G as re,H as se,I as ie,r as T,V as q,M as r,O as oe,a5 as z,U as ce,a6 as de,S,a7 as le,a0 as V,a1 as L,a2 as U,a8 as _e,W as J,a9 as fe,Q as P,X as me,al as ue,Y as W,Z as ge,N as he,$ as pe,a4 as ye,aa as F,ac as Ce,am as be}from"./index-35618935.js";import{d as G}from"./deleteData-c24a06d9.js";import{m as xe}from"./index-7de0fd81.js";async function H(d,s,c){const i=await B.post(d,s,{headers:c});let n=[];const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return i.data.data.erc20TransferEvents.edges.forEach(o=>{const{transaction_hash:f,from_address:m,transfer_amount_display:_,transfer_from_address:u,transfer_to_address:x,from_erc20_identifier:w,main_call:D,timestamp:A,__typename:N}=o.node;n.push({transaction_hash:f,from_address:m,transfer_amount_display:_,transfer_from_address:u,transfer_to_address:x,from_erc20_identifier:w,timestamp:A,main_call:D,__typename:N,total_value:a.hasOwnProperty(w)?_*a[w]:0})}),{transfers:n,hasNextPage:i.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:i.data.data.erc20TransferEvents.pageInfo.endCursor}}async function Te(d){const s="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:100,after:null,input:{transfer_from_or_to_address:d,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let n=[],a=await H(s,i,c);for(n.push(...a.transfers);a.hasNextPage;)i.variables.after=a.endCursor,a=await H(s,i,c),n.push(...a.transfers);return n}async function M(d,s,c){const i=await B.post(d,s,{headers:c});let n=[];return i.data.data.transactions.edges.forEach(a=>{const{actual_fee_display:o,initiator_address:f,initiator_identifier:m,nonce:_,timestamp:u,transaction_hash:x}=a.node;n.push({actual_fee_display:o,initiator_address:f,initiator_identifier:m,nonce:_,timestamp:u,transaction_hash:x,transfers:[]})}),{transactions:n,hasNextPage:i.data.data.transactions.pageInfo.hasNextPage,endCursor:i.data.data.transactions.pageInfo.endCursor}}async function ke(d){const s="https://starkscan.stellate.sh/",c={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},i={query:`query TransactionsTableQuery(
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
`,variables:{first:100,after:null,input:{initiator_address:d,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let n=[],a=await M(s,i,c);for(n.push(...a.transactions);a.hasNextPage;)i.variables.after=a.endCursor,a=await M(s,i,c),n.push(...a.transactions);const o=await Te(d);return o.forEach(f=>{n.forEach(m=>{f.transaction_hash===m.transaction_hash&&m.transfers.push(f)})}),{transfers:o,transactions:n}}const K=d=>{const s=new Date(d)*1e3,c=(new Date().getTime()-new Date(s).getTime())/1e3;if(c<60)return Math.round(c)+" 秒前";const i=c/60;if(i<60)return Math.round(i)+" 分前";const n=i/60;if(n<24)return Math.round(n)+" 时前";const a=n/24;return Math.round(a)+" 天前"},ve=async d=>{try{if(!d)return{tx:0,lastTime:"无交易",fee:0};let s=0;d.forEach(a=>{s+=parseFloat(a.actual_fee_display)});const c=d[0].nonce,i=d[0].timestamp,n=K(i)||"无交易";return{tx:c,lastTime:n,fee:Number(s).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function we(d){try{const s="https://starkscan.stellate.sh/",c={query:`query ERC20BalancesByOwnerAddressTableQuery(
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
`,variables:{input:{owner_address:d}}},i={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},n=await B.post(s,c,{headers:i});let a={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return n.data.data.erc20BalancesByOwnerAddress.forEach(o=>{o.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?a.ETH=Number(parseFloat(o.balance_display)).toFixed(3):o.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?a.USDT=Number(parseFloat(o.balance_display)).toFixed(3):o.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?a.USDC=Number(parseFloat(o.balance_display)).toFixed(3):o.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?a.DAI=Number(parseFloat(o.balance_display)).toFixed(3):o.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(a.WBTC=Number(parseFloat(o.balance_display)).toFixed(3))}),a}catch(s){return console.log(s),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const Se=d=>{const s=d.getFullYear(),c=new Date(s,0,1),i=(d.getDay()+6)%7,n=Math.floor((d.getTime()-c.getTime())/864e5),a=Math.floor((n+c.getDay()-i)/7);return`${s}-${a}`},Ie=(d,s)=>{const c=new Set,i=new Set,n=new Set,a=new Set;return s.forEach(o=>{if(o.transfer_from_address.toLowerCase()!==d.toLowerCase())return;const f=new Date(o.timestamp*1e3),m=f.getFullYear(),_=f.getMonth(),u=f.getDate(),x=Se(f);c.add(`${m}-${_}-${u}`),i.add(`${m}-${x}`),n.add(`${m}-${_}`),a.add(o.transfer_to_address)}),{dayActivity:c.size,weekActivity:i.size,monthActivity:n.size,contractActivity:a.size}};function Fe(d,s){if(s.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:c,weekActivity:i,monthActivity:n,contractActivity:a}=Ie(d,s);return{dayActivity:c,weekActivity:i,monthActivity:n,contractActivity:a}}const Ee=d=>{let s=0,c=0,i=0,n=0;const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return d.forEach(o=>{const f=o.transfer_from_address,m=o.transfer_to_address,_=o.transfer_amount_display,u=o.from_erc20_identifier;f.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(o.main_call?o.main_call.selector_identifier:null)==="handle_deposit"&&(s+=1,i+=parseFloat(_)*a[u]),m.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(o.main_call?o.main_call.selector_identifier:null)==="initiate_withdraw"&&(c+=1,n+=parseFloat(_)*a[u])}),{DepositTx:s,WithdrawTx:c,DepositVolume:Number(i.toFixed(2)),WithdrawVolume:Number(n.toFixed(2))}};async function je(d){const s="https://starkscan.stellate.sh/",c={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:d}}},i={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},n=await B.post(s,c,{headers:i}),a=K(n.data.data.contract.deployed_at_timestamp),o=n.data.data.contract.starknet_id?n.data.data.contract.starknet_id.domain:"无";return{deployedTime:a,starkId:o}}function De(d){try{let s=0;return d.forEach(c=>{const i=c.transfers.sort((a,o)=>parseInt(o.total_value)-parseInt(a.total_value));if(i.length===0)return;const n=parseFloat(i[0].total_value);s+=n}),{Vol:s.toFixed(3)}}catch(s){return console.log(s),{Vol:"-"}}}const Q=async d=>{let s;try{await re(se);const c=await ke(d),i=c.transactions,n=c.transfers,a=Fe(d,n),{tx:o,lastTime:f,fee:m}=await ve(i),_=await we(d),u=Ee(n),x=await je(d),w=De(i);return s={accountInfo:x,balance:_,tx:o,lastTime:f,fee:m,activity:a,bridge:u,...w,result:"success"},await ie("starkTransactions",{address:d,data:JSON.stringify(i)}),s}catch(c){return s={result:"error",reason:c.message},s}};const{TextArea:Ae}=J,{Content:Pe}=fe,qe=()=>{const[d,s]=T.useState(!1),[c,i]=T.useState(!1),[n,a]=T.useState([]),[o]=q.useForm(),[f,m]=T.useState(!1),[_,u]=T.useState([]),[x,w]=T.useState(!1);let D=n.length+1;const[A,N]=T.useState(!1);T.useEffect(()=>{w(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{w(!1)},500),e&&a(JSON.parse(e)),N(!0)},[]),T.useEffect(()=>{A&&localStorage.setItem("stark_addresses",JSON.stringify(n))},[n,A]);const Y=[{title:"#",key:"index",align:"center",render:(e,t,y)=>y+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,t)=>t.key===ne?r.jsx(J,{placeholder:"请输入备注",defaultValue:e,onPressEnter:g=>{t.name=g.target.value,a([...n]),localStorage.setItem("stark_addresses",JSON.stringify(n)),R(null)}}):r.jsxs(r.Fragment,{children:[r.jsx(P,{color:"blue",children:e}),r.jsx(S,{shape:"circle",icon:r.jsx(me,{}),size:"small",onClick:()=>R(t.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,t)=>{const y=()=>{be(e),xe.success("地址已复制")};return e?r.jsxs(r.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),r.jsx(S,{type:"text",icon:r.jsx(ue,{}),onClick:y,style:{marginLeft:8}})]}):r.jsx(z,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,t)=>e},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,t)=>e},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,t)=>e},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,t)=>e},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,t)=>e},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,t)=>e},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.tx-t.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,t)=>r.jsx("a",{href:`https://voyager.online/contract/${t.address}`,target:"_blank",children:e})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,t)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,t)=>e}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,t)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,t)=>e}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,t)=>e},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,t)=>e},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,t)=>e},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,t)=>e},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.Vol-t.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.fee-t.fee}]},{title:"状态",key:"result",align:"center",render:(e,t)=>r.jsxs(W,{children:[t.result==="success"?r.jsx(P,{icon:r.jsx(ge,{}),color:"success",children:"成功"}):null,t.result==="error"?r.jsx(he,{title:t.reason,children:r.jsx(P,{icon:r.jsx(pe,{}),color:"error",children:"失败 "})}):null,t.result==="pending"?r.jsx(P,{icon:r.jsx(V,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(e,t)=>r.jsxs(W,{children:[r.jsx(L,{title:"确认删除？",onConfirm:async()=>{await X(t.address)},children:r.jsx(S,{icon:r.jsx(U,{})})}),r.jsx(S,{icon:r.jsx(ye,{}),onClick:()=>{$(t.key)}})]})}]}],X=async e=>{a(n.filter(t=>t.address!==e)),localStorage.setItem("stark_addresses",JSON.stringify(n.filter(t=>t.address!==e))),await G("starkTransactions",[e])},Z=async()=>{try{i(!0),s(!1);const t=(await o.validateFields()).addresses.split(`
`),y=5;let g=0,h=[];const k=()=>{for(;h.length>0&&g<y;){const l=h.shift();g+=1,l().finally(()=>{g-=1,k()})}};for(let l of t){if(l=l.trim(),l.length!==66&&l.length!==64){F.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}l.startsWith("0x")||(l="0x"+l);const v=()=>new Promise(async(E,O)=>{try{a(I=>{const C=[...I];if(C.findIndex(b=>b.address===l)===-1){const b={key:D.toString(),address:l,result:"pending"};D++,C.push(b)}return C});const j=await Q(l);a(I=>{const C=[...I],p=C.findIndex(b=>b.address===l);return p!==-1&&(C[p]={...C[p],...j}),C}),E()}catch(j){O(j)}});h.push(v)}for(k();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"成功",description:"批量添加完成",duration:1})}catch(e){F.error({message:"错误",description:e.message,duration:1})}finally{o.resetFields(),u([]),i(!1)}},$=async e=>{const t=e?[e]:_;if(!t.length){F.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}m(!0);try{let g=0,h=[];const k=()=>{for(;h.length>0&&g<5;){const l=h.shift();g+=1,l().finally(()=>{g-=1,k()})}};for(let l of t){const v=n.findIndex(E=>E.key===l);if(v!==-1){const E=()=>new Promise(async(O,j)=>{try{a(C=>{const p=[...C];for(let b in p[v])b!=="address"&&b!=="name"&&b!=="key"&&(b==="result"?p[v][b]="pending":p[v][b]=null);return p});const I=await Q(n[v].address);a(C=>{const p=[...C];return p[v]={...p[v],...I},localStorage.setItem("stark_addresses",JSON.stringify(p)),p}),O()}catch(I){j(I)}});h.push(E)}}for(k();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(y){F.error({message:"错误",description:y.message,duration:1})}finally{m(!1),e||u([])}},ee=async()=>{if(!_.length){F.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}const e=n.filter(t=>_.includes(t.key)).map(t=>t.address);await G("starkTransactions",e),a(n.filter(t=>!_.includes(t.key))),localStorage.setItem("stark_addresses",JSON.stringify(n.filter(t=>!_.includes(t.key)))),u([])},te=()=>{Ce(n,"starkInfo")},[ne,R]=T.useState(null),ae={selectedRowKeys:_,onChange:e=>{u(e)}};return r.jsx("div",{children:r.jsxs(Pe,{children:[r.jsx(oe,{title:"批量添加地址",open:d,onOk:Z,onCancel:()=>{s(!1),o.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:r.jsx(q,{form:o,layout:"vertical",children:r.jsx(q.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,t)=>{const y=t.split(`
`);let g=[];for(let h=0;h<y.length;h++){let k=y[h].trim();(!k.startsWith("0x")||k.length!==66&&k.length!==64)&&g.push(h+1)}return g.length?Promise.reject(`行 ${g.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:r.jsx(Ae,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),r.jsx("div",{style:{marginBottom:"50px"},children:r.jsx(z,{spinning:x,size:"large",children:r.jsx(ce,{rowSelection:ae,dataSource:n,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:Y})})}),r.jsx("div",{className:"stark_footer",children:r.jsx(de,{size:"small",style:{width:"100%"},children:r.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[r.jsx(S,{type:"primary",onClick:()=>{s(!0)},size:"large",style:{width:"25%"},icon:r.jsx(le,{}),loading:c,children:c?"添加中...":"添加地址"}),r.jsx(S,{type:"primary",onClick:()=>$(),loading:f,size:"large",style:{width:"25%"},icon:r.jsx(V,{}),children:"刷新选中地址"}),r.jsx(L,{title:"确认删除"+_.length+"个地址？",onConfirm:async()=>{await ee()},children:r.jsx(S,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:r.jsx(U,{}),children:"删除选中地址"})}),r.jsx(S,{type:"primary",icon:r.jsx(_e,{}),size:"large",style:{width:"8%"},onClick:te})]})})})]})})};export{qe as default};
