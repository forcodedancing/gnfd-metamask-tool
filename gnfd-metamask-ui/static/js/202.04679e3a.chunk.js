"use strict";(self.webpackChunkxen_ui=self.webpackChunkxen_ui||[]).push([[202],{9202:function(e,n,t){t.r(n),t.d(n,{HomeView:function(){return Z},default:function(){return k}});var r=t(3032),a=t(3430),s=t(4322),i=t.n(s),u=t(7313);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"not valid";if(!e)throw new Error(n)}var o=t(9371),m=t(5512),l=t(551),d=t(56),p=t(7998),f=t(7853),g=t(4531),h=t(9610),v=function(){function e(n){(0,f.Z)(this,e),this.provider=n}return(0,g.Z)(e,[{key:"signMessage",value:function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.getSigner().getAddress();case 2:return t=e.sent,e.next=5,this.provider.send("eth_signTypedData_v4",[t,n]);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getAccountInfo",value:function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,h.Z.post("/account",{address:n});case 4:r=e.sent,t=r.data,console.log("getAccountInfo",t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("getAccountInfo error",e.t0);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()}]),e}();function x(){var e=(0,p.K)().library;return(0,u.useMemo)((function(){if(e)return new v(e)}),[e])}var y=t(9560);function b(e,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(i().mark((function e(n,t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="0x"+y.O$.from(n.chainId).toNumber().toString(16),t=t||window.ethereum){e.next=4;break}throw new Error("No ethereum provider found");case 4:return e.abrupt("return",t.request({method:"wallet_addEthereumChain",params:[{chainId:r,rpcUrls:[n.rpcUrl],chainName:"greenfield-local",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18}}]}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=t(6417),j={types:{Coin:[{name:"denom",type:"string"},{name:"amount",type:"uint256"}],EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"string"},{name:"salt",type:"string"}],Fee:[{name:"amount",type:"Coin[]"},{name:"gas_limit",type:"uint256"},{name:"payer",type:"string"},{name:"granter",type:"string"}],Msg:[{name:"type",type:"string"},{name:"from_address",type:"string"},{name:"to_address",type:"string"},{name:"amount",type:"TypeAmount[]"}],Tx:[{name:"account_number",type:"uint256"},{name:"chain_id",type:"uint256"},{name:"fee",type:"Fee"},{name:"memo",type:"string"},{name:"msg",type:"Msg"},{name:"sequence",type:"uint256"},{name:"timeout_height",type:"uint256"}],TypeAmount:[{name:"denom",type:"string"},{name:"amount",type:"string"}]},primaryType:"Tx",domain:{name:"Greenfield Tx",version:"1.0.0",chainId:"0x2328",verifyingContract:"greenfield",salt:"0"},message:{account_number:"2",chain_id:"9000",fee:{amount:[],gas_limit:"210000",granter:"",payer:"0x94B4dd838ed3a6e3690181285080957F270E8a89"},memo:"",msg:{amount:[{amount:"10",denom:"bnb"}],from_address:"0x94B4dd838ed3a6e3690181285080957F270E8a89",to_address:"0x0000000000000000000000000000000000000001",type:"/cosmos.bank.v1beta1.MsgSend"},sequence:"1",timeout_height:"0"}},Z=function(){var e=function(){var e=x(),n=(0,p.K)().account;return(0,d.useQuery)(["queryGnfd",{account:n}],(0,r.Z)(i().mark((function t(){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(e),c(n),t.next=4,e.getAccountInfo(n);case 4:return a=t.sent,t.abrupt("return",{accountInfo:a,signMessage:function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.signMessage(t).then((function(e){return e})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()});case 7:case"end":return t.stop()}}),t)}))),{enabled:!!e&&!!n})}(),n=e.data,t=(0,p.K)().account,s=(0,u.useState)(JSON.stringify(j,null,2)),f=(0,a.Z)(s,2),g=f[0],v=f[1],y=(0,u.useState)("http://localhost:8545"),w=(0,a.Z)(y,2),Z=w[0],k=w[1],_=(0,u.useState)("0"),I=(0,a.Z)(_,2),S=I[0],C=I[1],A=(0,u.useState)(""),B=(0,a.Z)(A,2),M=B[0],T=B[1],q=(0,u.useState)(""),E=(0,a.Z)(q,2),F=E[0],O=E[1],J=(0,d.useMutation)((0,r.Z)(i().mark((function e(){var r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(n),c(t,"account not valid"+t),e.next=4,n.signMessage(g);case 4:return r=e.sent,T(r),e.next=8,h.Z.post("/tx",{amount:parseInt(S),signature:r});case 8:return a=e.sent,s=a.data,O(s),e.abrupt("return",Promise.resolve(s));case 12:case"end":return e.stop()}}),e)}))),{onSuccess:function(){o.Z.success({message:"success"})},onError:function(e){o.Z.error({message:"sign failed",description:null===e||void 0===e?void 0:e.message})}}),G=J.mutate,D=J.isLoading;return(0,N.jsx)("div",{className:"text-center mx-auto",children:(0,N.jsx)("div",{className:"mt-[5rem] relative flex items-center justify-center h-screen ",children:(0,N.jsxs)("div",{className:"mt-[15%] z-30 mx-auto w-9/12",children:[(0,N.jsxs)("div",{className:"mb-[2rem] mt-[2rem] flex items-center justify-center",children:[(0,N.jsx)(m.Z,{className:"mr-[1rem]",onClick:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({chainId:9e3,rpcUrl:Z});case 2:case"end":return e.stop()}}),e)}))),children:(0,N.jsx)("span",{className:"content",children:"Add GreenField Network"})}),(0,N.jsx)(l.Z,{className:"h-[2rem]",value:Z,onChange:function(e){return k(e.target.value)}})]}),(0,N.jsxs)("div",{className:"mb-[2rem] mt-[2rem] flex items-center justify-center",children:[(0,N.jsx)(m.Z,{loading:D,className:"mr-[1rem]",onClick:function(){return G()},children:(0,N.jsx)("span",{className:"content",children:"Send BNB on GNFD"})}),(0,N.jsx)(l.Z,{className:"h-[2rem]",value:S,onChange:function(e){C(e.target.value),v((function(r){var a=JSON.parse(r);return a.message.msg.amount[0].amount=e.target.value,t&&(a.message.msg.from_address=t,a.message.fee.payer=t),null!==n&&void 0!==n&&n.accountInfo&&null!==n&&void 0!==n&&n.accountInfo.sequence&&(a.message.sequence=n.accountInfo.sequence+"",a.message.account_number=n.accountInfo.accountNumber+""),JSON.stringify(a,null,2)}))}})]}),(0,N.jsx)("div",{className:"mb-[1rem] mt-[2rem] flex items-center justify-between",children:(0,N.jsx)("span",{children:"signature from metamask: "})}),(0,N.jsx)("div",{className:"mb-[2rem] mt-[1rem] flex items-center justify-between",children:(0,N.jsx)("span",{children:M})}),(0,N.jsx)("div",{className:"mb-[1rem] mt-[2rem] flex items-center justify-between",children:(0,N.jsx)("span",{children:"txRawBytesHex: "})}),(0,N.jsx)("div",{className:"mb-[2rem] mt-[1rem] flex items-center justify-between",children:(0,N.jsx)("span",{children:F})}),(0,N.jsx)("div",{className:"mb-[2rem]",children:(0,N.jsx)(l.Z,{className:"h-[5rem]",value:g,onChange:function(e){return v(JSON.stringify(JSON.parse(e.target.value),null,2))}})}),(0,N.jsx)(l.Z.TextArea,{disabled:!0,className:"w-[50rem] text-xl",size:"large",rows:28,cols:64,maxLength:26,value:g})]})})})},k=Z}}]);