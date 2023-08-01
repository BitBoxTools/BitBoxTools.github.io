import{r as d,k as e}from"./index-97828fac.js";import{F as l,C as P,T as C,M as T,c as L,P as B,d as M}from"./index-0026ce8b.js";import{S as f}from"./index-5cc581e0.js";import{B as m,E as R}from"./EditOutlined-7319a85b.js";import{I as r,S as q}from"./index-dcad913e.js";import{X as J,a as K}from"./useFlexGapSupport-b6bda257.js";import{P as z}from"./row-e765ec9b.js";const Z=()=>{const[i,o]=d.useState([]),[p,u]=d.useState(""),[b,g]=d.useState(!1),[I,y]=d.useState(!1),[n]=l.useForm(),[k,S]=d.useState(!0),[x,F]=d.useState(""),c=t=>t.key===p,V=t=>{S(t.target.checked)};d.useEffect(()=>{y(!0);const t=localStorage.getItem("depositData");setTimeout(()=>{y(!1)},500),t&&o(JSON.parse(t))},[]),d.useEffect(()=>{localStorage.setItem("depositData",JSON.stringify(i))},[i]);const w=t=>{n.setFieldsValue({...t}),u(t.key)},A=async t=>{try{const a=await n.validateFields(),s=[...i],h=s.findIndex(j=>t.key===j.key);if(h>-1){const j=s[h];s.splice(h,1,{...j,...a}),o(s),u("")}else s.push(a),o(s),u("")}catch(a){console.log("Validate Failed:",a)}n.resetFields()},v=()=>{n.validateFields().then(t=>{const a=[...i,{key:Date.now().toString(),...t}];o(a),g(!1),n.resetFields()}).catch(t=>{console.log("Validation failed:",t)})},D=()=>{u("")},E=t=>{o(i.filter(a=>a.key!==t.key))},N=x?i.filter(t=>t.aAddress.toLowerCase().includes(x.toLowerCase())||t.bAddress.toLowerCase().includes(x.toLowerCase())):i,O=[{title:"#",key:"index",render:(t,a,s)=>s+1,align:"center"},{title:"个人地址",dataIndex:"aAddress",key:"aAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"aAddress",style:{margin:0},children:e.jsx(r,{defaultValue:t,onChange:s=>n.setFieldsValue({aAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所地址",dataIndex:"bAddress",key:"bAddress",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"bAddress",style:{margin:0},children:e.jsx(r,{defaultValue:t,onChange:s=>n.setFieldsValue({bAddress:s.target.value})})}):t,align:"center",width:500},{title:"交易所名称",dataIndex:"exchangeName",key:"exchangeName",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"exchangeName",style:{margin:0},children:e.jsx(r,{defaultValue:t,onChange:s=>n.setFieldsValue({exchangeName:s.target.value})})}):t,align:"center"},{title:"备注",dataIndex:"notes",key:"notes",render:(t,a)=>c(a)?e.jsx(l.Item,{name:"notes",style:{margin:0},children:e.jsx(r,{defaultValue:t,onChange:s=>n.setFieldsValue({notes:s.target.value})})}):t,align:"center"},{title:"操作",key:"action",render:(t,a)=>c(a)?e.jsxs(f,{children:[e.jsx(m,{type:"primary",onClick:()=>A(a),icon:e.jsx(J,{})}),e.jsx(m,{onClick:D,icon:e.jsx(K,{})})]}):e.jsxs(f,{children:[e.jsx(m,{type:"primary",disabled:p!=="",onClick:()=>w(a),icon:e.jsx(R,{})}),e.jsx(B,{title:"确定删除吗?",onConfirm:()=>E(a),children:e.jsx(m,{icon:e.jsx(M,{})})})]}),align:"center"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{style:{marginBottom:10},children:[e.jsx(m,{type:"primary",onClick:()=>g(!0),icon:e.jsx(z,{}),shape:"round"}),e.jsx(P,{onChange:V,checked:k,children:"是否分页"}),e.jsxs(C,{color:"magenta",children:["当前共有",i.length,"条记录"]}),e.jsx(C,{color:"magenta",children:"方便管理个人地址和交易所充值地址，做到一一对应，防止女巫"})]}),e.jsx(r.Search,{bordered:!0,allowClear:!0,placeholder:"搜索地址",value:x,onChange:t=>F(t.target.value),style:{marginBottom:10}}),e.jsx(T,{title:"添加记录",open:b,onOk:v,onCancel:()=>g(!1),children:e.jsxs(l,{form:n,layout:"vertical",children:[e.jsx(l.Item,{label:"个人地址",name:"aAddress",rules:[{required:!0,message:"请输入个人地址"}],children:e.jsx(r,{})}),e.jsx(l.Item,{label:"交易所地址",name:"bAddress",rules:[{required:!0,message:"请输入交易所地址"}],children:e.jsx(r,{})}),e.jsx(l.Item,{label:"交易所名称",name:"exchangeName",children:e.jsx(r,{})}),e.jsx(l.Item,{label:"备注",name:"notes",children:e.jsx(r,{})})]})}),e.jsx(q,{spinning:I,children:e.jsx(L,{bordered:!0,columns:O,dataSource:N,className:"centered-table",pagination:k?{defaultPageSize:10}:!1})})]})};export{Z as default};
