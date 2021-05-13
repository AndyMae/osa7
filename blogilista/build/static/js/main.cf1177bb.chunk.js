(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(10),a=n.n(c),s=n(4),i=n(2),u=n.n(i),l=n(3),d=n(9),b=n.n(d),j="/api/blogs",f=null,p={getAll:function(){var e={headers:{Authorization:f}};return b.a.get(j,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,b.a.post(j,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){f="bearer ".concat(e)},change:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},console.log(t),e.next=4,b.a.put("".concat(j,"/").concat(t.id),t,n);case 4:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,b.a.delete("".concat(j,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},g=function(e){return console.log("notification to be added"),console.log(e),function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DROP_NOTIFICATION"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),console.log(t.notification),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},x=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.create(e);case 2:r=t.sent,n(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"POS_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n(g('A new blog "'.concat(r.title,'" added'))),setTimeout((function(){n(h())}),5e3),n({type:"ADD_BLOG",newBlog:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return e.concat(t.newBlog);case"REMOVE_BLOG":return e.filter((function(e){return e.id!==t.id}));case"CHANGE_BLOG":return e.map((function(e){return e.id!==t.changedBlog.id?e:t.changedBlog}));case"INIT_BLOGS":return t.data;default:return e}},w={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.login(e);case 2:r=t.sent,console.log("UUUUSERI"),console.log(r),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),p.setToken(r.token),console.log("tokenin asetus onnistuu"),console.log("kaikki onnistuu"),n({type:"ADD_USER",user:r});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":case"ADD_LOGGED_USER":return t.user;case"REMOVE_USER":return null;default:return e}},E=n(7),S=n(6),D=n(0),A=function(e){var t=e.blog,n=Object(s.c)((function(e){return e.user})),o=Object(r.useState)(""),c=Object(S.a)(o,2),a=c[0],i=c[1],d={display:a?"none":""},b={display:a?"":"none"},j=Object(s.b)(),f=function(){i(!a)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(n.name);var O={background:"blue",color:"white",display:t.user.username===n.name?"":"none"};return Object(D.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(D.jsxs)("table",{style:d,className:"defaultView",children:[Object(D.jsxs)("tr",{children:[t.title," ",Object(D.jsx)("button",{onClick:f,children:"view"})]}),Object(D.jsx)("tr",{children:t.author})]}),Object(D.jsxs)("table",{style:b,className:"allView",children:[Object(D.jsxs)("tr",{children:[t.title," ",Object(D.jsx)("button",{onClick:f,children:"view"})]}),Object(D.jsx)("tr",{children:t.url}),Object(D.jsxs)("tr",{children:[t.likes," ",Object(D.jsx)("button",{id:"like-button",onClick:function(){var e,n=Object(E.a)(Object(E.a)({},t),{},{likes:t.likes+1});j((e=n,function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.change(e);case 2:r=t.sent,n({type:"CHANGE_BLOG",changedBlog:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"like"})]}),Object(D.jsx)("tr",{children:t.author}),Object(D.jsx)("tr",{children:Object(D.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&t.id},style:O,children:"remove"})})]})]})},I=function(){var e=Object(s.c)((function(e){return e.blogs}));return Object(D.jsx)("div",{children:Object(D.jsx)("ul",{children:e.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(D.jsx)(A,{blog:e},e.id)}))})})},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PASSWORD":return Object(E.a)(Object(E.a)({},e),{},{password:t.password});case"ADD_USERNAME":return Object(E.a)(Object(E.a)({},e),{},{username:t.username});case"RESET_CREDENTIALS":return{username:"",password:""};default:return e}},N=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.credentials.username})),n=Object(s.c)((function(e){return e.credentials.password})),r=function(){var r=Object(l.a)(u.a.mark((function r(o){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o.preventDefault(),console.log("logging in with ".concat(t," ").concat(n));try{e(y({username:t,password:n})),e({type:"RESET_CREDENTIALS"})}catch(c){console.log(c),console.log("missing or invalid credentials"),e(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"NEG_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(g("missing or invalid credentials")),setTimeout((function(){e(h())}),5e3)}case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"Login to application"}),Object(D.jsxs)("form",{id:"login-form",onSubmit:r,children:[Object(D.jsxs)("div",{children:["username",Object(D.jsx)("input",{id:"username",value:t,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_USERNAME",username:e}}(n.value))}})]}),Object(D.jsxs)("div",{children:["password",Object(D.jsx)("input",{id:"password",type:"password",value:n,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_PASSWORD",password:e}}(n.value))}})]}),Object(D.jsx)("button",{type:"submit",children:"login"})]})]})},R=function(){console.log("in notification comp");var e=Object(s.c)((function(e){return e.notification})),t=Object(s.c)((function(e){return e.tone}));console.log(e),console.log(t);var n={color:"pos"===t?"green":"red",background:"lightgrey",display:""!==e?"":"none"};return Object(D.jsx)("h2",{style:n,children:e})},T=function(){var e=Object(s.b)(),t=Object(r.useState)(""),n=Object(S.a)(t,2),o=n[0],c=n[1],a=Object(r.useState)(""),i=Object(S.a)(a,2),d=i[0],b=i[1],j=Object(r.useState)(""),f=Object(S.a)(j,2),p=f[0],O=f[1],g=function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r={title:o,author:d,url:p},c(""),b(""),O(""),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(r),e(x(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"create new"}),Object(D.jsxs)("form",{onSubmit:g,id:"createBlogForm",children:[Object(D.jsxs)("div",{children:["title",Object(D.jsx)("input",{id:"title",value:o,name:"title",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(D.jsxs)("div",{children:["author",Object(D.jsx)("input",{id:"author",value:d,name:"author",onChange:function(e){var t=e.target;return b(t.value)}})]}),Object(D.jsxs)("div",{children:["url",Object(D.jsx)("input",{id:"url",value:p,name:"url",onChange:function(e){var t=e.target;return O(t.value)}})]}),Object(D.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},B=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(S.a)(n,2),c=o[0],a=o[1],s={display:c?"none":""},i={display:c?"":"none"},u=function(){a(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{style:s,children:Object(D.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(D.jsxs)("div",{style:i,children:[e.children,Object(D.jsx)("button",{onClick:u,children:"cancel"})]})]})}));B.displayName="Togglable";var L=B,U=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user}));Object(r.useEffect)((function(){console.log("Initializing blogs!"),e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getAll();case 2:n=e.sent,console.log("Palautuuko dataa??"),console.log(n),t({type:"INIT_BLOGS",data:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogAppUser");if(console.log("tulostuuko t\xe4m\xe4??"),console.log(t),t){var n=JSON.parse(t);console.log("t\xe4m\xe4 tulostuu"),console.log(n),e(function(e){return{type:"ADD_LOGGED_USER",user:e}}(n)),p.setToken(n.token)}}),[e]);var n=Object(r.useRef)();return console.log("UUUUSSSERRRIII"),console.log(t),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"BlogApp"}),Object(D.jsx)(R,{}),null===t?Object(D.jsx)(L,{buttonLabel:"Login",children:Object(D.jsx)(N,{})}):Object(D.jsxs)("div",{children:[Object(D.jsxs)("p",{children:[t.name," is logged in",Object(D.jsx)("button",{onClick:function(t){t.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),e({type:"REMOVE_USER"})},children:"Log out"})]}),Object(D.jsx)("h2",{children:"blogs"}),Object(D.jsx)(L,{buttonLabel:"New blog",ref:n,children:Object(D.jsx)(T,{})}),Object(D.jsx)(I,{})]})]})},C=(n(56),n(8)),G=n(24),P=n(25),V=Object(C.combineReducers)({notification:v,tone:O,credentials:_,user:k,blogs:m}),M=Object(C.createStore)(V,Object(G.composeWithDevTools)(Object(C.applyMiddleware)(P.a)));a.a.render(Object(D.jsx)(s.a,{store:M,children:Object(D.jsx)(U,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.cf1177bb.chunk.js.map