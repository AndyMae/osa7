(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),o=n.n(a),c=n(3),s=n.n(c),u=n(5),l=n(4),i=n(0),j=function(e){var t=e.blog;return Object(i.jsxs)("div",{children:[t.title," ",t.author]})},b=function(e){var t=e.handleLogin,n=e.username,r=e.password,a=e.setUsername,o=e.setPassword;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:["username",Object(i.jsx)("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(i.jsxs)("div",{children:["password",Object(i.jsx)("input",{type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(i.jsx)("button",{type:"submit",children:"login"})]})},d=function(e){var t=e.title,n=e.author,r=e.url,a=e.setTitle,o=e.setAuthor,c=e.setUrl,s=e.addBlog;return Object(i.jsxs)("form",{onSubmit:s,children:[Object(i.jsxs)("div",{children:["title",Object(i.jsx)("input",{type:"text",value:t,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(i.jsxs)("div",{children:["author",Object(i.jsx)("input",{type:"text",value:n,name:"author",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(i.jsxs)("div",{children:["url",Object(i.jsx)("input",{type:"text",value:r,name:"url",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(i.jsx)("button",{type:"submit",children:"create"})]})},g=n(6),p=n.n(g),h="/api/blogs",O=null,v={getAll:function(){var e={headers:{Authorization:O}};return p.a.get(h,e).then((function(e){return e.data}))},create:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:O}},e.next=3,p.a.post(h,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){O="bearer ".concat(e)}},f={login:function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(l.a)(o,2),g=(c[0],c[1],Object(r.useState)("")),p=Object(l.a)(g,2),h=p[0],O=p[1],x=Object(r.useState)(""),m=Object(l.a)(x,2),w=m[0],S=m[1],k=Object(r.useState)(null),y=Object(l.a)(k,2),U=y[0],A=y[1],B=Object(r.useState)(""),I=Object(l.a)(B,2),T=I[0],C=I[1],E=Object(r.useState)(""),L=Object(l.a)(E,2),J=L[0],D=L[1],z=Object(r.useState)(""),N=Object(l.a)(z,2),P=N[0],R=N[1];Object(r.useEffect)((function(){v.getAll().then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);A(t),v.setToken(t.token)}}),[]);var G=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(h," ").concat(w)),e.prev=2,e.next=5,f.login({username:h,password:w});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),v.setToken(n.token),A(n),O(""),S(""),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials");case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(s.a.mark((function e(t){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={title:T,author:J,url:P},console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(r),e.next=6,v.create(r);case 6:o=e.sent,console.log("returned blogi"),console.log(o),a(n.concat(o)),C(""),D(""),R("");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"BlogApp"}),null===U?Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Login to application"}),Object(i.jsx)(b,{handleLogin:G,username:h,password:w,setUsername:O,setPassword:S})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"blogs"}),Object(i.jsxs)("p",{children:[U.name," is logged in",Object(i.jsx)("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogAppUser"),A(null)},children:"Log out"})]}),Object(i.jsx)("h2",{children:"create new"}),Object(i.jsx)(d,{title:T,author:J,url:P,setTitle:C,setAuthor:D,setUrl:R,addBlog:H}),n.map((function(e){return Object(i.jsx)(j,{blog:e},e.id)}))]})]})};o.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ea752f61.chunk.js.map