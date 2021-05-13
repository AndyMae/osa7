(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(16),a=n.n(o),s=n(2),i=n.n(s),u=n(5),l=n(3),d=n(0),j=function(e){var t=e.blog,n=e.changeBlog,c=e.removeBlog,o=e.userId,a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],j={display:i?"none":""},b={display:i?"":"none"},p=function(){u(!i)};console.log(t.user.id),console.log(o);var h={background:"blue",color:"white",visibility:t.user.id===o?"":"none"};return Object(d.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(d.jsxs)("div",{style:j,children:[t.title," ",Object(d.jsx)("button",{onClick:p,children:"view"})]}),Object(d.jsxs)("div",{style:b,children:[Object(d.jsxs)("div",{children:[t.title," ",Object(d.jsx)("button",{onClick:p,children:"hide"})]}),Object(d.jsx)("div",{children:t.url}),Object(d.jsxs)("div",{children:[t.likes," ",Object(d.jsx)("button",{onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(d.jsx)("div",{children:t.author}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&c(t.id)},style:h,children:"remove"})})]})]})},b=function(e){var t=e.handleLogin,n=e.username,r=e.password,c=e.setUsername,o=e.setPassword;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login to application"}),Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsxs)("div",{children:["username",Object(d.jsx)("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(d.jsxs)("div",{children:["password",Object(d.jsx)("input",{type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"login"})]})]})},p=function(e){var t=e.notification,n=e.tone;return Object(d.jsx)("h2",{className:n,children:t})},h=function(e){var t=e.createBlog,n=Object(r.useState)(""),c=Object(l.a)(n,2),o=c[0],a=c[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(r.useState)(""),p=Object(l.a)(b,2),h=p[0],g=p[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"create new"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:o,author:u,url:h}),a(""),j(""),g("")},children:[Object(d.jsxs)("div",{children:["title",Object(d.jsx)("input",{type:"text",value:o,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(d.jsxs)("div",{children:["author",Object(d.jsx)("input",{type:"text",value:u,name:"author",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(d.jsxs)("div",{children:["url",Object(d.jsx)("input",{type:"text",value:h,name:"url",onChange:function(e){var t=e.target;return g(t.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"create"})]})]})},g=n(6),f=n.n(g),v="/api/blogs",O=null,x={getAll:function(){var e={headers:{Authorization:O}};return f.a.get(v,e).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,f.a.post(v,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)},change:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:O}},console.log(t),e.next=4,f.a.put("".concat(v,"/").concat(n),t,r);case 4:return c=e.sent,console.log("response in axios"),console.log(c),console.log(c.data),e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,f.a.delete("".concat(v,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m={login:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],a=c[1],s={display:o?"none":""},i={display:o?"":"none"},u=function(){a(!o)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:s,children:Object(d.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:i,children:[e.children,Object(d.jsx)("button",{onClick:u,children:"cancel"})]})]})})),y=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),a=Object(l.a)(o,2),s=a[0],g=a[1],f=Object(r.useState)(""),v=Object(l.a)(f,2),O=v[0],y=v[1],k=Object(r.useState)(null),S=Object(l.a)(k,2),B=S[0],C=S[1],A=Object(r.useState)(""),I=Object(l.a)(A,2),L=I[0],U=I[1],T=Object(r.useState)(""),E=Object(l.a)(T,2),R=E[0],z=E[1];Object(r.useEffect)((function(){x.getAll().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);C(t),x.setToken(t.token)}}),[]);var J=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(s," ").concat(O)),e.prev=2,e.next=5,m.login({username:s,password:O});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),x.setToken(n.token),C(n),g(""),y(""),e.next=22;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),z("neg"),U("missing or invalid credentials"),setTimeout((function(){U("")}),5e3);case 22:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,x.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),c(n.concat(r)),z("pos"),U('A new blog "'.concat(r.title,'" added')),setTimeout((function(){U("")}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(i.a.mark((function e(t,r){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.change(t,r);case 2:o=e.sent,c(n.map((function(e){return e.id!==o.id?e:o})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.remove(t);case 2:c(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=Object(r.useRef)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"BlogApp"}),""!==L&&Object(d.jsx)(p,{notification:L,tone:R}),null===B?Object(d.jsx)(w,{buttonLabel:"Login",children:Object(d.jsx)(b,{handleLogin:J,username:s,password:O,setUsername:g,setPassword:y})}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[B.name," is logged in",Object(d.jsx)("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogAppUser"),C(null)},children:"Log out"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"blogs"}),Object(d.jsx)(w,{buttonLabel:"New blog",ref:H,children:Object(d.jsx)(h,{createBlog:N})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsx)(j,{blog:e,changeBlog:D,removeBlog:V,userId:B},e.id)}))]})]})]})};n(41);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5ddf1d7e.chunk.js.map