(this["webpackJsonptaiwan-photography-map-react"]=this["webpackJsonptaiwan-photography-map-react"]||[]).push([[12],{83:function(e,t,a){e.exports={SignUp:"SignUp_SignUp__2wB6v"}},91:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a.n(n),s=a(52),i=a(10),p=a(0),o=a(1),c=a(2),l=a(57),u=a(14),d=a(19),j=a(53),b=a(56),m=a(58),h=a(54),O=a(12),x=a(83),v=a.n(x);t.default=function(e){Object(o.useContext)(O.a);var t=Object(c.g)(),a=Object(h.a)(),n=a.isLoading,x=a.error,g=a.sendRequest,w=a.clearError,y=Object(m.a)({email:{value:"",isValid:!1},name:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),f=Object(i.a)(y,3),S=f[0],T=f[1],k=(f[2],function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("https://taiwan-photography-map.herokuapp.com"),e.prev=2,e.next=5,g("".concat("https://taiwan-photography-map.herokuapp.com","/api/users/signup"),"POST",JSON.stringify({name:S.inputs.name.value,email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:e.sent,t.push("/login"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}());return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{asOverlay:!0})}),Object(p.jsx)(j.a,{error:x,onClear:w}),Object(p.jsx)("h1",{style:{textAlign:"center",paddingTop:"2rem"},children:"\u8a3b\u518a\u5e33\u865f"}),Object(p.jsxs)("form",{className:v.a.SignUp,onSubmit:k,children:[Object(p.jsx)(l.a,{element:"input",id:"email",type:"email",label:"E-mail",validators:[Object(b.a)()],errorText:"\u8acb\u8f38\u5165\u6709\u6548\u7684E-mail\u3002",onInput:T}),Object(p.jsx)(l.a,{element:"input",id:"name",type:"text",label:"\u66b1\u7a31",validators:[Object(b.e)()],errorText:"\u66b1\u7a31\u4e0d\u5f97\u70ba\u7a7a\u3002",onInput:T}),Object(p.jsx)(l.a,{element:"input",id:"password",type:"password",label:"\u5bc6\u78bc\uff08\u8acb\u8f38\u51656\u4f4d\u6578\u4ee5\u4e0a\u5bc6\u78bc\uff0c\u4e26\u81f3\u5c11\u5305\u542b\u4e00\u500b\u82f1\u6587\u5b57\u6bcd\u53ca\u963f\u62c9\u4f2f\u6578\u5b57\uff09",validators:[Object(b.d)()],errorText:"\u8acb\u8f38\u5165\u6709\u6548\u5bc6\u78bc\u3002",onInput:T}),Object(p.jsx)(l.a,{element:"input",id:"confirmPassword",type:"password",label:"\u78ba\u8a8d\u5bc6\u78bc",validators:[Object(b.b)(S.inputs.password.value)],errorText:"\u8acb\u78ba\u8a8d\u5bc6\u78bc\uff01",onInput:T}),Object(p.jsx)(u.a,{type:"submit",disabled:!S.isValid,children:"\u8a3b\u518a"})]})]})}}}]);
//# sourceMappingURL=12.50a76d96.chunk.js.map