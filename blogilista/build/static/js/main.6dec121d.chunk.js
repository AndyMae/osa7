(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(10),a=n.n(c),i=n(2),s=n.n(i),u=n(3),l=n(6),d=n(4),f=function(){return function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"POS_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},b=function(e){return console.log("notification to be added"),console.log(e),function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(){return function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DROP_NOTIFICATION"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),console.log(t.notification),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},h=n(8),O=n.n(h),v={login:function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x="/api/blogs",m=null,w={getAll:function(){var e={headers:{Authorization:m}};return O.a.get(x,e).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,O.a.post(x,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){m="bearer ".concat(e)},change:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:m}},console.log(t),e.next=4,O.a.put("".concat(x,"/").concat(n),t,r);case 4:return o=e.sent,console.log("response in axios"),console.log(o),console.log(o.data),e.abrupt("return",o.data);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,O.a.delete("".concat(x,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.login(e);case 2:r=t.sent,console.log("UUUUSERI"),console.log(r),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),w.setToken(r.token),console.log("tokenin asetus onnistuu"),console.log("kaikki onnistuu"),n({type:"ADD_USER",user:r});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":case"ADD_LOGGED_USER":return t.user;case"REMOVE_USER":return null;default:return e}},E=n(0),S=function(e){var t=e.blog,n=e.changeBlog,o=e.removeBlog,c=e.loggedUsername,a=Object(r.useState)(""),i=Object(l.a)(a,2),s=i[0],u=i[1],d={display:s?"none":""},f={display:s?"":"none"},p=function(){u(!s)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(c);var b={background:"blue",color:"white",display:t.user.username===c?"":"none"};return Object(E.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(E.jsxs)("table",{style:d,className:"defaultView",children:[Object(E.jsxs)("tr",{children:[t.title," ",Object(E.jsx)("button",{onClick:p,children:"view"})]}),Object(E.jsx)("tr",{children:t.author})]}),Object(E.jsxs)("table",{style:f,className:"allView",children:[Object(E.jsxs)("tr",{children:[t.title," ",Object(E.jsx)("button",{onClick:p,children:"view"})]}),Object(E.jsx)("tr",{children:t.url}),Object(E.jsxs)("tr",{children:[t.likes," ",Object(E.jsx)("button",{id:"like-button",onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};n(e,t.id),console.log(e)},children:"like"})]}),Object(E.jsx)("tr",{children:t.author}),Object(E.jsx)("tr",{children:Object(E.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&o(t.id)},style:b,children:"remove"})})]})]})},D=n(9),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PASSWORD":return Object(D.a)(Object(D.a)({},e),{},{password:t.password});case"ADD_USERNAME":return Object(D.a)(Object(D.a)({},e),{},{username:t.username});case"RESET_CREDENTIALS":return{username:"",password:""};default:return e}},T=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.credentials.username})),n=Object(d.c)((function(e){return e.credentials.password})),r=function(){var r=Object(u.a)(s.a.mark((function r(o){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o.preventDefault(),console.log("logging in with ".concat(t," ").concat(n));try{e(y({username:t,password:n})),e({type:"RESET_CREDENTIALS"})}catch(c){console.log(c),console.log("missing or invalid credentials"),e(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"NEG_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(b("missing or invalid credentials")),setTimeout((function(){e(j())}),5e3)}case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"Login to application"}),Object(E.jsxs)("form",{id:"login-form",onSubmit:r,children:[Object(E.jsxs)("div",{children:["username",Object(E.jsx)("input",{id:"username",value:t,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_USERNAME",username:e}}(n.value))}})]}),Object(E.jsxs)("div",{children:["password",Object(E.jsx)("input",{id:"password",type:"password",value:n,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_PASSWORD",password:e}}(n.value))}})]}),Object(E.jsx)("button",{type:"submit",children:"login"})]})]})},I=function(){console.log("in notification comp");var e=Object(d.c)((function(e){return e.notification})),t=Object(d.c)((function(e){return e.tone}));console.log(e),console.log(t);var n={color:"pos"===t?"green":"red",background:"lightgrey",display:""!==e?"":"none"};return Object(E.jsx)("h2",{style:n,children:e})},R=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.create(e);case 2:r=t.sent,n(f()),n(b('A new blog "'.concat(r.title,'" added'))),setTimeout((function(){n(j())}),5e3),n({type:"ADD_BLOG",newBlog:r});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return e.concat(t.newBlog);case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.id}));case"CHANGE_BLOG":return e.map((function(e){return e.id!==t.blog.id?e:t.blog}))}},N=function(){var e=Object(d.b)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),f=i[0],p=i[1],b=Object(r.useState)(""),j=Object(l.a)(b,2),g=j[0],h=j[1],O=function(){var t=Object(u.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),r={title:o,author:f,url:g},c(""),p(""),h(""),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(r),e(R(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"create new"}),Object(E.jsxs)("form",{onSubmit:O,id:"createBlogForm",children:[Object(E.jsxs)("div",{children:["title",Object(E.jsx)("input",{id:"title",value:o,name:"title",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(E.jsxs)("div",{children:["author",Object(E.jsx)("input",{id:"author",value:f,name:"author",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(E.jsxs)("div",{children:["url",Object(E.jsx)("input",{id:"url",value:g,name:"url",onChange:function(e){var t=e.target;return h(t.value)}})]}),Object(E.jsx)("button",{id:"create-button",type:"submit",children:"create"})]})]})},U=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(l.a)(n,2),c=o[0],a=o[1],i={display:c?"none":""},s={display:c?"":"none"},u=function(){a(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{style:i,children:Object(E.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(E.jsxs)("div",{style:s,children:[e.children,Object(E.jsx)("button",{onClick:u,children:"cancel"})]})]})}));U.displayName="Togglable";var B=U,L=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(d.b)(),a=Object(d.c)((function(e){return e.user}));Object(r.useEffect)((function(){w.getAll().then((function(e){return o(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(console.log("tulostuuko t\xe4m\xe4??"),console.log(e),e){var t=JSON.parse(e);console.log("t\xe4m\xe4 tulostuu"),console.log(t),c(function(e){return{type:"ADD_LOGGED_USER",user:e}}(t)),w.setToken(t.token)}}),[c]);var i=function(){var e=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.current.toggleVisibility(),console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(t),e.next=5,w.create(t);case 5:r=e.sent,console.log("returned blogi"),console.log(r),o(n.concat(r)),c(f()),c(b('A new blog "'.concat(r.title,'" added'))),setTimeout((function(){c(j())}),5e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(s.a.mark((function e(t,r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.change(t,r);case 2:c=e.sent,o(n.map((function(e){return e.id!==c.id?e:c})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.remove(t);case 2:o(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(r.useRef)();return console.log("UUUUSSSERRRIII"),console.log(a),Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{children:"BlogApp"}),Object(E.jsx)(I,{}),null===a?Object(E.jsx)(B,{buttonLabel:"Login",children:Object(E.jsx)(T,{})}):Object(E.jsxs)("div",{children:[Object(E.jsxs)("p",{children:[a.name," is logged in",Object(E.jsx)("button",{onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),c({type:"REMOVE_USER"})},children:"Log out"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("h2",{children:"blogs"}),Object(E.jsx)(B,{buttonLabel:"New blog",ref:h,children:Object(E.jsx)(N,{createBlog:i})}),Object(E.jsx)("ul",{children:n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(E.jsx)(S,{blog:e,changeBlog:p,removeBlog:g,loggedUsername:a.user},e.id)}))})]})]})]})},C=(n(56),n(7)),G=n(24),V=n(25),P=Object(C.combineReducers)({notification:g,tone:p,credentials:A,user:k,blogs:_}),F=Object(C.createStore)(P,Object(G.composeWithDevTools)(Object(C.applyMiddleware)(V.a)));a.a.render(Object(E.jsx)(d.a,{store:F,children:Object(E.jsx)(L,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6dec121d.chunk.js.map