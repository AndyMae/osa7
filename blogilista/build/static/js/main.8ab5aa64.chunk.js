(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(10),a=n.n(c),s=n(2),i=n.n(s),u=n(3),l=n(6),d=n(5),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},b=function(e){return console.log("notification to be added"),console.log(e),function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DROP_NOTIFICATION"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),console.log(t.notification),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},g=n(8),h=n.n(g),O={login:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v="/api/blogs",x=null,m={getAll:function(){var e={headers:{Authorization:x}};return h.a.get(v,e).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,h.a.post(v,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){x="bearer ".concat(e)},change:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:x}},console.log(t),e.next=4,h.a.put("".concat(v,"/").concat(n),t,r);case 4:return o=e.sent,console.log("response in axios"),console.log(o),console.log(o.data),e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,h.a.delete("".concat(v,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.login(e);case 2:r=t.sent,m.setToken(r.token),n({type:"ADD_USER",user:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":case"ADD_LOGGED_USER":return t.user;case"REMOVE_USER":return null;default:return e}},k=n(0),S=function(e){var t=e.blog,n=e.changeBlog,o=e.removeBlog,c=e.loggedUsername,a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],d={display:i?"none":""},j={display:i?"":"none"},b=function(){u(!i)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(c);var f={background:"blue",color:"white",display:t.user.username===c?"":"none"};return Object(k.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(k.jsxs)("table",{style:d,className:"defaultView",children:[Object(k.jsxs)("tr",{children:[t.title," ",Object(k.jsx)("button",{onClick:b,children:"view"})]}),Object(k.jsx)("tr",{children:t.author})]}),Object(k.jsxs)("table",{style:j,className:"allView",children:[Object(k.jsxs)("tr",{children:[t.title," ",Object(k.jsx)("button",{onClick:b,children:"view"})]}),Object(k.jsx)("tr",{children:t.url}),Object(k.jsxs)("tr",{children:[t.likes," ",Object(k.jsx)("button",{id:"like-button",onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(k.jsx)("tr",{children:t.author}),Object(k.jsx)("tr",{children:Object(k.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&o(t.id)},style:f,children:"remove"})})]})]})},E=n(9),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PASSWORD":return Object(E.a)(Object(E.a)({},e),{},{password:t.password});case"ADD_USERNAME":return Object(E.a)(Object(E.a)({},e),{},{username:t.username});case"RESET_CREDENTIALS":return{username:"",password:""};default:return e}},A=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.credentials.username})),n=Object(d.c)((function(e){return e.credentials.password})),r=Object(d.c)((function(e){return e.user})),o=function(){var o=Object(u.a)(i.a.mark((function o(c){return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:c.preventDefault(),console.log("logging in with ".concat(t," ").concat(n));try{e(w({username:t,password:n})),console.log("UUUUSERI"),console.log(r),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),m.setToken(r.token),console.log("tokenin asetus onnistuu"),console.log("kaikki onnistuu"),e({type:"RESET CREDENTIALS"})}catch(a){console.log(a),console.log("missing or invalid credentials"),e(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"NEG_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(b("missing or invalid credentials")),setTimeout((function(){e(f())}),5e3)}case 3:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Login to application"}),Object(k.jsxs)("form",{id:"login-form",onSubmit:o,children:[Object(k.jsxs)("div",{children:["username",Object(k.jsx)("input",{id:"username",value:t,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_USERNAME",username:e}}(n.value))}})]}),Object(k.jsxs)("div",{children:["password",Object(k.jsx)("input",{id:"password",type:"password",value:n,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_PASSWORD",password:e}}(n.value))}})]}),Object(k.jsx)("button",{type:"submit",children:"login"})]})]})},I=function(){console.log("in notification comp");var e=Object(d.c)((function(e){return e.notification})),t=Object(d.c)((function(e){return e.tone}));console.log(e),console.log(t);var n={color:"pos"===t?"green":"red",background:"lightgrey",display:""!==e?"":"none"};return Object(k.jsx)("h2",{style:n,children:e})},T=function(e){var t=e.createBlog,n=Object(r.useState)(""),o=Object(l.a)(n,2),c=o[0],a=o[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),f=b[0],p=b[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"create new"}),Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:u,url:f}),a(""),d(""),p("")},id:"createBlogForm",children:[Object(k.jsxs)("div",{children:["title",Object(k.jsx)("input",{id:"title",value:c,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(k.jsxs)("div",{children:["author",Object(k.jsx)("input",{id:"author",value:u,name:"author",onChange:function(e){var t=e.target;return d(t.value)}})]}),Object(k.jsxs)("div",{children:["url",Object(k.jsx)("input",{id:"url",value:f,name:"url",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(k.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},R=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(l.a)(n,2),c=o[0],a=o[1],s={display:c?"none":""},i={display:c?"":"none"},u=function(){a(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:s,children:Object(k.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(k.jsxs)("div",{style:i,children:[e.children,Object(k.jsx)("button",{onClick:u,children:"cancel"})]})]})}));R.displayName="Togglable";var N=R,U=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(d.b)(),a=Object(d.c)((function(e){return e.user}));console.log("USERS NAME IS"),console.log(a.name),Object(r.useEffect)((function(){m.getAll().then((function(e){return o(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);console.log("t\xe4m\xe4 tulostuu"),console.log(t),c(function(e){return{type:"ADD_LOGGED_USER",user:e}}(t)),m.setToken(t.token)}}),[c]);var s=function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,m.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),o(n.concat(r)),c(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"POS_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(b('A new blog "'.concat(r.title,'" added'))),setTimeout((function(){c(f())}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(i.a.mark((function e(t,r){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.change(t,r);case 2:c=e.sent,o(n.map((function(e){return e.id!==c.id?e:c})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.remove(t);case 2:o(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(r.useRef)();return console.log("UUUUSSSERRRIII"),console.log(a),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"BlogApp"}),Object(k.jsx)(I,{}),null===a?Object(k.jsx)(N,{buttonLabel:"Login",children:Object(k.jsx)(A,{})}):Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{children:[a.name," is logged in",Object(k.jsx)("button",{onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser")},children:"Log out"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"blogs"}),Object(k.jsx)(N,{buttonLabel:"New blog",ref:g,children:Object(k.jsx)(T,{createBlog:s})}),Object(k.jsx)("ul",{children:n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(k.jsx)(S,{blog:e,changeBlog:j,removeBlog:p,loggedUsername:a.user},e.id)}))})]})]})]})},_=(n(56),n(7)),C=n(24),B=n(25),L=Object(_.combineReducers)({notification:p,tone:j,credentials:D,user:y}),G=Object(_.createStore)(L,Object(C.composeWithDevTools)(Object(_.applyMiddleware)(B.a)));a.a.render(Object(k.jsx)(d.a,{store:G,children:Object(k.jsx)(U,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8ab5aa64.chunk.js.map