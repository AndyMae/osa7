(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(9),a=n.n(c),s=n(2),i=n.n(s),l=n(3),u=n(5),d=n(7),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},b=function(e){return console.log("notification to be added"),console.log(e),function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),console.log(t.notification),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},f=n(1),p=function(e){var t=e.blog,n=e.changeBlog,r=e.removeBlog,c=e.loggedUsername,a=Object(o.useState)(""),s=Object(u.a)(a,2),i=s[0],l=s[1],d={display:i?"none":""},j={display:i?"":"none"},b=function(){l(!i)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(c);var g={background:"blue",color:"white",display:t.user.username===c?"":"none"};return Object(f.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(f.jsxs)("table",{style:d,className:"defaultView",children:[Object(f.jsxs)("tr",{children:[t.title," ",Object(f.jsx)("button",{onClick:b,children:"view"})]}),Object(f.jsx)("tr",{children:t.author})]}),Object(f.jsxs)("table",{style:j,className:"allView",children:[Object(f.jsxs)("tr",{children:[t.title," ",Object(f.jsx)("button",{onClick:b,children:"view"})]}),Object(f.jsx)("tr",{children:t.url}),Object(f.jsxs)("tr",{children:[t.likes," ",Object(f.jsx)("button",{id:"like-button",onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(f.jsx)("tr",{children:t.author}),Object(f.jsx)("tr",{children:Object(f.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&r(t.id)},style:g,children:"remove"})})]})]})},h=function(e){var t=e.handleLogin,n=e.username,o=e.password,r=e.setUsername,c=e.setPassword;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Login to application"}),Object(f.jsxs)("form",{id:"login-form",onSubmit:t,children:[Object(f.jsxs)("div",{children:["username",Object(f.jsx)("input",{id:"username",value:n,name:"Username",onChange:function(e){var t=e.target;return r(t.value)}})]}),Object(f.jsxs)("div",{children:["password",Object(f.jsx)("input",{id:"password",type:"password",value:o,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(f.jsx)("button",{type:"submit",children:"login"})]})]})},O=function(){console.log("in notification comp");var e=Object(d.c)((function(e){return e.notification})),t=Object(d.c)((function(e){return e.tone}));console.log(e),console.log(t);var n={background:"pos"===t?"green":"red",display:""!==e?"":"none"};return Object(f.jsx)("h2",{style:n,children:e})},v=function(e){var t=e.createBlog,n=Object(o.useState)(""),r=Object(u.a)(n,2),c=r[0],a=r[1],s=Object(o.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(o.useState)(""),b=Object(u.a)(j,2),g=b[0],p=b[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"create new"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:l,url:g}),a(""),d(""),p("")},id:"createBlogForm",children:[Object(f.jsxs)("div",{children:["title",Object(f.jsx)("input",{id:"title",value:c,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(f.jsxs)("div",{children:["author",Object(f.jsx)("input",{id:"author",value:l,name:"author",onChange:function(e){var t=e.target;return d(t.value)}})]}),Object(f.jsxs)("div",{children:["url",Object(f.jsx)("input",{id:"url",value:g,name:"url",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(f.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},x=n(8),m=n.n(x),w="/api/blogs",k=null,y={getAll:function(){var e={headers:{Authorization:k}};return m.a.get(w,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,m.a.post(w,t,n);case 3:return o=e.sent,console.log("response in axios"),console.log(o),console.log(o.data),e.abrupt("return",o.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){k="bearer ".concat(e)},change:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={headers:{Authorization:k}},console.log(t),e.next=4,m.a.put("".concat(w,"/").concat(n),t,o);case 4:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,m.a.delete("".concat(w,"/").concat(t),n);case 3:o=e.sent,console.log("response in axios"),console.log(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=r.a.forwardRef((function(e,t){var n=Object(o.useState)(!1),r=Object(u.a)(n,2),c=r[0],a=r[1],s={display:c?"none":""},i={display:c?"":"none"},l=function(){a(!c)};return Object(o.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:s,children:Object(f.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(f.jsxs)("div",{style:i,children:[e.children,Object(f.jsx)("button",{onClick:l,children:"cancel"})]})]})}));I.displayName="Togglable";var T=I,A=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),a=Object(u.a)(c,2),s=a[0],j=a[1],g=Object(o.useState)(""),x=Object(u.a)(g,2),m=x[0],w=x[1],k=Object(o.useState)(null),I=Object(u.a)(k,2),A=I[0],B=I[1],C=d.b;Object(o.useEffect)((function(){y.getAll().then((function(e){return r(e)}))}),[]),Object(o.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);console.log("t\xe4m\xe4 tulostuu"),B(t),y.setToken(t.token)}}),[]);var N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(s," ").concat(m)),e.prev=2,e.next=5,S.login({username:s,password:m});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),y.setToken(n.token),console.log("tokenin asetus onnistuu"),B(n),console.log("kaikki onnistuu"),j(""),w(""),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),setTimeout((function(){b("")}),5e3);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,y.create(t);case 5:o=e.sent,console.log("returned blogi"),console.log(o),r(n.concat(o)),C(b('A new blog "'.concat(o.title,'" added'))),setTimeout((function(){}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark((function e(t,o){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.change(t,o);case 2:c=e.sent,r(n.map((function(e){return e.id!==c.id?e:c})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.remove(t);case 2:r(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(o.useRef)();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"BlogApp"}),Object(f.jsx)(O,{}),null===A?Object(f.jsx)(T,{buttonLabel:"Login",children:Object(f.jsx)(h,{handleLogin:N,username:s,password:m,setUsername:j,setPassword:w})}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:[A.name," is logged in",Object(f.jsx)("button",{onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),B(null)},children:"Log out"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"blogs"}),Object(f.jsx)(T,{buttonLabel:"New blog",ref:E,children:Object(f.jsx)(v,{createBlog:U})}),Object(f.jsx)("ul",{children:n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(f.jsx)(p,{blog:e,changeBlog:L,removeBlog:D,loggedUsername:A.user},e.id)}))})]})]})]})},B=(n(55),n(6)),C=n(23),N=n(24),U=Object(B.combineReducers)({notification:g,tone:j}),L=Object(B.createStore)(U,Object(C.composeWithDevTools)(Object(B.applyMiddleware)(N.a)));a.a.render(Object(f.jsx)(d.a,{store:L,children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d4d7fc35.chunk.js.map