(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(16),a=n.n(c),s=n(2),i=n.n(s),l=n(5),u=n(3),d=n(0),j=function(e){var t=e.blog,n=e.changeBlog,o=e.removeBlog,c=e.loggedUsername,a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],l=s[1],j={display:i?"none":""},b={display:i?"":"none"},g=function(){l(!i)};console.log(t.user.username),console.log(c);var h={background:"blue",color:"white",display:t.user.username===c?"":"none"};return Object(d.jsxs)("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(d.jsxs)("div",{style:j,className:"defaultView",children:[Object(d.jsxs)("div",{children:[t.title," ",Object(d.jsx)("button",{onClick:g,children:"view"})]}),Object(d.jsx)("div",{children:t.author})]}),Object(d.jsxs)("div",{style:b,className:"allView",children:[Object(d.jsxs)("div",{children:[t.title," ",Object(d.jsx)("button",{onClick:g,children:"hide"})]}),Object(d.jsx)("div",{children:t.url}),Object(d.jsxs)("div",{children:[t.likes," ",Object(d.jsx)("button",{onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(d.jsx)("div",{children:t.author}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&o(t.id)},style:h,children:"remove"})})]})]})},b=function(e){var t=e.handleLogin,n=e.username,r=e.password,o=e.setUsername,c=e.setPassword;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login to application"}),Object(d.jsxs)("form",{id:"login-form",onSubmit:t,children:[Object(d.jsxs)("div",{children:["username",Object(d.jsx)("input",{id:"username",value:n,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(d.jsxs)("div",{children:["password",Object(d.jsx)("input",{id:"password",type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"login"})]})]})},g=function(e){var t=e.notification,n=e.tone;return Object(d.jsx)("h2",{className:n,children:t})},h=function(e){var t=e.createBlog,n=Object(r.useState)(""),o=Object(u.a)(n,2),c=o[0],a=o[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),l=i[0],j=i[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),h=g[0],p=g[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"create new"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:l,url:h}),a(""),j(""),p("")},id:"createBlogForm",children:[Object(d.jsxs)("div",{children:["title",Object(d.jsx)("input",{id:"title",value:c,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(d.jsxs)("div",{children:["author",Object(d.jsx)("input",{id:"author",value:l,name:"author",onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(d.jsxs)("div",{children:["url",Object(d.jsx)("input",{id:"url",value:h,name:"url",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"create"})]})]})},p=n(6),f=n.n(p),v="/api/blogs",O=null,x={getAll:function(){var e={headers:{Authorization:O}};return f.a.get(v,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,f.a.post(v,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)},change:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:O}},console.log(t),e.next=4,f.a.put("".concat(v,"/").concat(n),t,r);case 4:return o=e.sent,console.log("response in axios"),console.log(o),console.log(o.data),e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,f.a.delete("".concat(v,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(u.a)(n,2),c=o[0],a=o[1],s={display:c?"none":""},i={display:c?"":"none"},l=function(){a(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:s,children:Object(d.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:i,children:[e.children,Object(d.jsx)("button",{onClick:l,children:"cancel"})]})]})}));w.displayName="Togglable";var k=w,y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),s=a[0],p=a[1],f=Object(r.useState)(""),v=Object(u.a)(f,2),O=v[0],w=v[1],y=Object(r.useState)(null),S=Object(u.a)(y,2),B=S[0],U=S[1],C=Object(r.useState)(""),A=Object(u.a)(C,2),L=A[0],I=A[1],T=Object(r.useState)(""),N=Object(u.a)(T,2),E=N[0],R=N[1];Object(r.useEffect)((function(){x.getAll().then((function(e){return o(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);U(t),x.setToken(t.token)}}),[]);var V=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(s," ").concat(O)),e.prev=2,e.next=5,m.login({username:s,password:O});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),x.setToken(n.token),console.log("tokenin asetus onnistuu"),U(n),p(""),w(""),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),R("neg"),I("missing or invalid credentials"),setTimeout((function(){I("")}),5e3);case 23:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,x.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),o(n.concat(r)),R("pos"),I('A new blog "'.concat(r.title,'" added')),setTimeout((function(){I("")}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.change(t,r);case 2:c=e.sent,o(n.map((function(e){return e.id!==c.id?e:c})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.remove(t);case 2:o(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=Object(r.useRef)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"BlogApp"}),""!==L&&Object(d.jsx)(g,{notification:L,tone:E}),null===B?Object(d.jsx)(k,{buttonLabel:"Login",children:Object(d.jsx)(b,{handleLogin:V,username:s,password:O,setUsername:p,setPassword:w})}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[B.name," is logged in",Object(d.jsx)("button",{onClick:function(){window.localStorage.removeItem("loggedBlogAppUser"),U(null)},children:"Log out"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"blogs"}),Object(d.jsx)(k,{buttonLabel:"New blog",ref:H,children:Object(d.jsx)(h,{createBlog:z})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsx)(j,{blog:e,changeBlog:J,removeBlog:D,loggedUsername:B.user},e.id)}))]})]})]})};n(41);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.89b02d86.chunk.js.map