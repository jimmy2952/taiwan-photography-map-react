(this["webpackJsonptaiwan-photography-map-react"]=this["webpackJsonptaiwan-photography-map-react"]||[]).push([[10],{79:function(e,t,a){},81:function(e,t,a){e.exports={Upload:"Upload_Upload__2Rlv3",Container1:"Upload_Container1__Ujj2y",Container2:"Upload_Container2__3avVM"}},97:function(e,t,a){"use strict";a.r(t);var i=a(51),n=a.n(i),c=a(52),r=a(10),s=a(0),o=a(1),l=a(2),p=a(14),j=(a(79),function(e){var t=Object(o.useState)(),a=Object(r.a)(t,2),i=a[0],n=a[1],c=Object(o.useState)(),l=Object(r.a)(c,2),j=l[0],u=l[1],d=Object(o.useState)(!1),m=Object(r.a)(d,2),b=m[0],g=m[1],O=Object(o.useRef)();Object(o.useEffect)((function(){if(i){var e=new FileReader;e.onload=function(){u(e.result)},e.readAsDataURL(i)}}),[i]);return Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"\u4e0a\u50b3\u7167\u7247"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,i=b;t.target.files&&1===t.target.files.length?(a=t.target.files[0],n(a),g(!0),i=!0):(g(!1),i=!1),e.onInput(e.id,a,i)}}),Object(s.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),style:{marginLeft:"0"},children:[Object(s.jsxs)("div",{className:"image-upload__preview",style:{marginLeft:"0"},children:[j&&Object(s.jsx)("img",{src:j,alt:"Preview"}),!j&&Object(s.jsx)("p",{children:"\u9810\u89bd\u7167\u7247"})]}),Object(s.jsx)(p.a,{type:"button",onClick:function(){O.current.click()},children:"\u9078\u64c7\u7167\u7247"})]})]})}),u=a(57),d=a(60),m=a(61),b=a(56),g=a(58),O=a(54),v=a(12),x=a(81),h=a.n(x),f=a(19),y=a(53);t.default=function(e){var t=Object(o.useContext)(v.a),a=Object(O.a)(),i=a.isLoading,x=a.error,C=a.sendRequest,N=a.clearError,L=Object(g.a)({imageTitle:{value:"",isValid:!1},imageDescription:{value:"",isValid:!0},imageCategory:{value:"",isValid:!0},imageCityLocation:{value:"",isValid:!0},imageDistrictLocation:{value:"",isValid:!0},imageScapeName:{value:"",isValid:!1}},!1),w=Object(r.a)(L,3),D=w[0],_=w[1],I=(w[2],Object(l.g)()),S=function(){var e=Object(c.a)(n.a.mark((function e(a){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(i=new FormData).append("imageTitle",D.inputs.imageTitle.value),i.append("imageDescription",D.inputs.imageDescription.value),i.append("imageCategory",D.inputs.imageCategory.value),i.append("imageCityLocation",D.inputs.imageCityLocation.value),i.append("imageDistrictLocation",D.inputs.imageDistrictLocation.value),i.append("imageScapeName",D.inputs.imageScapeName.value),i.append("image",D.inputs.image.value),i.append("creator",t.userId),e.next=13,C("".concat("https://taiwan-photography-map.herokuapp.com","/api/images"),"POST",i,{Authorization:"Bearer "+t.token});case 13:I.push("/discover"),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(1);case 18:console.log(D.inputs);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("section",{className:h.a.Upload,children:[i&&Object(s.jsx)("div",{children:Object(s.jsx)(f.a,{asOverlay:!0})}),Object(s.jsx)(y.a,{error:x,onClear:N}),Object(s.jsxs)("form",{onSubmit:S,children:[Object(s.jsx)("div",{className:h.a.Container1,children:Object(s.jsx)(j,{id:"image",onInput:_,errorText:"\u8acb\u4e0a\u50b3\u7167\u7247"})}),Object(s.jsxs)("div",{className:h.a.Container2,style:{margin:"0 auto"},children:[Object(s.jsx)(u.a,{element:"input",id:"imageTitle",type:"text",label:"\u4f5c\u54c1\u6a19\u984c(\u5fc5\u586b)",validators:[Object(b.e)()],errorText:"\u8acb\u8f38\u5165\u6a19\u984c",onInput:_}),Object(s.jsx)(u.a,{id:"imageDescription",label:"\u4f5c\u54c1\u63cf\u8ff0",initialValid:!0,element:"textarea",validators:[Object(b.c)()],onInput:_}),Object(s.jsxs)(u.a,{id:"imageCategory",label:"\u62cd\u651d\u985e\u5225(\u5fc5\u9078)",element:"select",onInput:_,validators:[Object(b.c)()],children:[Object(s.jsx)("option",{children:"\u8acb\u9078\u64c7\u985e\u5225"}),Object(s.jsx)("option",{children:"\u98a8\u666f"}),Object(s.jsx)("option",{children:"\u4eba\u50cf"})]}),Object(s.jsx)(u.a,{id:"imageCityLocation",label:"\u62cd\u651d\u5730\u9ede(\u5fc5\u9078)",element:"select",onInput:_,validators:[Object(b.c)()],children:m.map((function(e,t){return Object(s.jsx)("option",{value:e.cityName,children:e.cityName},t)}))}),Object(s.jsx)(u.a,{id:"imageDistrictLocation",element:"select",onInput:_,validators:[Object(b.c)()],children:d.map((function(e,t){return e.cityName===D.inputs.imageCityLocation.value&&Object(s.jsx)("option",{value:e.districtName,children:e.districtName},t)}))}),Object(s.jsx)(u.a,{element:"input",id:"imageScapeName",type:"text",label:"\u666f\u9ede\u540d\u7a31(\u5fc5\u586b)",validators:[Object(b.e)()],errorText:"\u8acb\u8f38\u5165\u666f\u9ede\u540d\u7a31",onInput:_}),Object(s.jsx)("div",{children:Object(s.jsx)(p.a,{type:"submit",disabled:!D.isValid,children:"\u4e0a\u50b3"})})]})]})]})}}}]);
//# sourceMappingURL=10.f1048f8a.chunk.js.map