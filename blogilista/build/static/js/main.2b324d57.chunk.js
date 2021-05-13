(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(16),a=n.n(o),s=n(4),i=n.n(s),l=n(5),u=n(2),j=n(0),b=function(e){var t=e.blog,n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],a=c[1],s={display:o?"none":""},i={display:o?"":"none"},l=function(){a(!o)};return Object(j.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(j.jsxs)("div",{style:s,children:[t.title," ",Object(j.jsx)("button",{onClick:l,children:"view"})]}),Object(j.jsxs)("div",{style:i,children:[Object(j.jsxs)("div",{children:[t.title," ",Object(j.jsx)("button",{onClick:l,children:"hide"})]}),Object(j.jsx)("div",{children:t.url}),Object(j.jsxs)("div",{children:[t.likes," ",Object(j.jsx)("button",{onClick:function(){console.log("aaa")},children:"like"})]}),Object(j.jsx)("div",{children:t.author})]})]})},d=function(e){var t=e.handleLogin,n=e.username,r=e.password,c=e.setUsername,o=e.setPassword;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Login to application"}),Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{children:["username",Object(j.jsx)("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(j.jsxs)("div",{children:["password",Object(j.jsx)("input",{type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"login"})]})]})},O=function(e){var t=e.notification,n=e.tone;return Object(j.jsx)("h2",{className:n,children:t})},g=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(u.a)(n,2),o=c[0],a=c[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),l=i[0],b=i[1],d=Object(r.useState)(""),O=Object(u.a)(d,2),g=O[0],h=O[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"create new"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:o,author:l,url:g}),a(""),b(""),h("")},children:[Object(j.jsxs)("div",{children:["title",Object(j.jsx)("input",{type:"text",value:o,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(j.jsxs)("div",{children:["author",Object(j.jsx)("input",{type:"text",value:l,name:"author",onChange:function(e){var t=e.target;return b(t.value)}})]}),Object(j.jsxs)("div",{children:["url",Object(j.jsx)("input",{type:"text",value:g,name:"url",onChange:function(e){var t=e.target;return h(t.value)}})]}),Object(j.jsx)("button",{type:"submit",children:"create"})]})]})},h=n(6),p=n.n(h),f="/api/blogs",v=null,x={getAll:function(){var e={headers:{Authorization:v}};return p.a.get(f,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,p.a.post(f,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e)}},m={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(u.a)(n,2),o=c[0],a=c[1],s={display:o?"none":""},i={display:o?"":"none"},l=function(){a(!o)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:s,children:Object(j.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(j.jsxs)("div",{style:i,children:[e.children,Object(j.jsx)("button",{onClick:l,children:"cancel"})]})]})})),y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),a=Object(u.a)(o,2),s=a[0],h=a[1],p=Object(r.useState)(""),f=Object(u.a)(p,2),v=f[0],y=f[1],S=Object(r.useState)(null),k=Object(u.a)(S,2),C=k[0],L=k[1],U=Object(r.useState)(""),B=Object(u.a)(U,2),A=B[0],I=B[1],T=Object(r.useState)(""),E=Object(u.a)(T,2),J=E[0],N=E[1];Object(r.useEffect)((function(){x.getAll().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);L(t),x.setToken(t.token)}}),[]);var R=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(s," ").concat(v)),e.prev=2,e.next=5,m.login({username:s,password:v});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),x.setToken(n.token),L(n),h(""),y(""),e.next=22;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),N("neg"),I("missing or invalid credentials"),setTimeout((function(){I("")}),5e3);case 22:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,x.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),c(n.concat(r)),N("pos"),I('A new blog "'.concat(r.title,'" added')),setTimeout((function(){I("")}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=Object(r.useRef)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"BlogApp"}),""!==A&&Object(j.jsx)(O,{notification:A,tone:J}),null===C?Object(j.jsx)(w,{buttonLabel:"Login",children:Object(j.jsx)(d,{handleLogin:R,username:s,password:v,setUsername:h,setPassword:y})}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[C.name," is logged in",Object(j.jsx)("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogAppUser"),L(null)},children:"Log out"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"blogs"}),Object(j.jsx)(w,{buttonLabel:"New blog",ref:V,children:Object(j.jsx)(g,{createBlog:D})}),n.map((function(e){return Object(j.jsx)(b,{blog:e},e.id)}))]})]})]})};n(41);a.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2b324d57.chunk.js.map