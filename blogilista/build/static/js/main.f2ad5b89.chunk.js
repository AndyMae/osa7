(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(9),a=n.n(c),s=n(2),i=n.n(s),l=n(3),u=n(5),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},j=function(e){return function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},g=n(1),p=function(e){var t=e.blog,n=e.changeBlog,o=e.removeBlog,c=e.loggedUsername,a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],l=s[1],d={display:i?"none":""},j={display:i?"":"none"},b=function(){l(!i)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(c);var p={background:"blue",color:"white",display:t.user.username===c?"":"none"};return Object(g.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(g.jsxs)("table",{style:d,className:"defaultView",children:[Object(g.jsxs)("tr",{children:[t.title," ",Object(g.jsx)("button",{onClick:b,children:"view"})]}),Object(g.jsx)("tr",{children:t.author})]}),Object(g.jsxs)("table",{style:j,className:"allView",children:[Object(g.jsxs)("tr",{children:[t.title," ",Object(g.jsx)("button",{onClick:b,children:"view"})]}),Object(g.jsx)("tr",{children:t.url}),Object(g.jsxs)("tr",{children:[t.likes," ",Object(g.jsx)("button",{id:"like-button",onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(g.jsx)("tr",{children:t.author}),Object(g.jsx)("tr",{children:Object(g.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&o(t.id)},style:p,children:"remove"})})]})]})},h=function(e){var t=e.handleLogin,n=e.username,r=e.password,o=e.setUsername,c=e.setPassword;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Login to application"}),Object(g.jsxs)("form",{id:"login-form",onSubmit:t,children:[Object(g.jsxs)("div",{children:["username",Object(g.jsx)("input",{id:"username",value:n,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(g.jsxs)("div",{children:["password",Object(g.jsx)("input",{id:"password",type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(g.jsx)("button",{type:"submit",children:"login"})]})]})},f=n(8),O=function(){console.log("in notification comp");var e=Object(f.b)((function(e){return e.notification})),t=Object(f.b)((function(e){return e.tone}));console.log(e),console.log(t);var n={background:"pos"===t?"green":"red",display:""!==e?"":"none"};return Object(g.jsx)("h2",{style:n,children:e})},v=function(e){var t=e.createBlog,n=Object(r.useState)(""),o=Object(u.a)(n,2),c=o[0],a=o[1],s=Object(r.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(r.useState)(""),b=Object(u.a)(j,2),p=b[0],h=b[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"create new"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:l,url:p}),a(""),d(""),h("")},id:"createBlogForm",children:[Object(g.jsxs)("div",{children:["title",Object(g.jsx)("input",{id:"title",value:c,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(g.jsxs)("div",{children:["author",Object(g.jsx)("input",{id:"author",value:l,name:"author",onChange:function(e){var t=e.target;return d(t.value)}})]}),Object(g.jsxs)("div",{children:["url",Object(g.jsx)("input",{id:"url",value:p,name:"url",onChange:function(e){var t=e.target;return h(t.value)}})]}),Object(g.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},x=n(7),m=n.n(x),w="/api/blogs",k=null,y={getAll:function(){var e={headers:{Authorization:k}};return m.a.get(w,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,m.a.post(w,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){k="bearer ".concat(e)},change:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:k}},console.log(t),e.next=4,m.a.put("".concat(w,"/").concat(n),t,r);case 4:return o=e.sent,console.log("response in axios"),console.log(o),console.log(o.data),e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:k}},e.next=3,m.a.delete("".concat(w,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S={login:function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(u.a)(n,2),c=o[0],a=o[1],s={display:c?"none":""},i={display:c?"":"none"},l=function(){a(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:l}})),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:s,children:Object(g.jsx)("button",{onClick:l,children:e.buttonLabel})}),Object(g.jsxs)("div",{style:i,children:[e.children,Object(g.jsx)("button",{onClick:l,children:"cancel"})]})]})}));I.displayName="Togglable";var T=I,A=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),a=Object(u.a)(c,2),s=a[0],d=a[1],b=Object(r.useState)(""),f=Object(u.a)(b,2),x=f[0],m=f[1],w=Object(r.useState)(null),k=Object(u.a)(w,2),I=k[0],A=k[1];Object(r.useEffect)((function(){y.getAll().then((function(e){return o(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);console.log("t\xe4m\xe4 tulostuu"),A(t),y.setToken(t.token)}}),[]);var B=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(s," ").concat(x)),e.prev=2,e.next=5,S.login({username:s,password:x});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),y.setToken(n.token),console.log("tokenin asetus onnistuu"),A(n),console.log("kaikki onnistuu"),d(""),m(""),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),setTimeout((function(){j("")}),5e3);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,y.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),o(n.concat(r)),j('A new blog "'.concat(r.title,'" added')),setTimeout((function(){}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(t,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.change(t,r);case 2:c=e.sent,o(n.map((function(e){return e.id!==c.id?e:c})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.remove(t);case 2:o(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=Object(r.useRef)();return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"BlogApp"}),Object(g.jsx)(O,{}),null===I?Object(g.jsx)(T,{buttonLabel:"Login",children:Object(g.jsx)(h,{handleLogin:B,username:s,password:x,setUsername:d,setPassword:m})}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[I.name," is logged in",Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),A(null)},children:"Log out"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"blogs"}),Object(g.jsx)(T,{buttonLabel:"New blog",ref:L,children:Object(g.jsx)(v,{createBlog:C})}),Object(g.jsx)("ul",{children:n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(g.jsx)(p,{blog:e,changeBlog:N,removeBlog:U,loggedUsername:I.user},e.id)}))})]})]})]})},B=(n(55),n(6)),C=n(23),N=n(24),U=Object(B.combineReducers)({notification:b,tone:d}),L=Object(B.createStore)(U,Object(C.composeWithDevTools)(Object(B.applyMiddleware)(N.a)));a.a.render(Object(g.jsx)(f.a,{store:L,children:Object(g.jsx)(A,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f2ad5b89.chunk.js.map