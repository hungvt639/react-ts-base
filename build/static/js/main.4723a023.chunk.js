(this["webpackJsonpreact-app-ts"]=this["webpackJsonpreact-app-ts"]||[]).push([[3],{116:function(t,n){},118:function(t,n){},13:function(t,n,e){"use strict";e.d(n,"e",(function(){return r})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return u}));var r="SET_USER",c="SET_RES_LOGIN",o="CLEAR_USER",a="SET_LOGIN",u="SET_FRIENDS"},133:function(t,n,e){},134:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),o=e(28),a=e.n(o),u=(e(91),e(53)),i=(e(132),e(133),e(6));var s=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(u.b,{})})},f=function(t){t&&t instanceof Function&&e.e(24).then(e.bind(null,759)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;e(t),r(t),c(t),o(t),a(t)}))},d=e(25),l=e(20),g=e(8),p=e(13),b={user:void 0,token:localStorage.getItem("token")},j={userState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p.d:return Object(g.a)(Object(g.a)({},t),{},{user:n.user,token:n.token});case p.e:return Object(g.a)(Object(g.a)({},t),{},{user:n.user});case p.a:return Object(g.a)(Object(g.a)({},t),{},{user:void 0,token:null});case p.b:return Object(g.a)(Object(g.a)({},t),{},{user:t.user?Object(g.a)(Object(g.a)({},t.user),{},{friends:n.friends}):void 0});default:return t}}},h=Object(l.b)(j),v=e(80),O=e(2),m=e.n(O),x=e(82),k=m.a.mark(y);function y(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.a)([]);case 2:case"end":return t.stop()}}),k)}var S=y,L=Object(v.a)(),w=Object(l.d)(h,void 0,Object(l.a)(L));L.run(S);var P=w,A=e(42),E=e(81),F=e(76),I=e(136),T={Home:"Home",Header:"Header",Slider:"Slider",Logout:"Logout"},U={translation:Object(g.a)(Object(g.a)({},T),{},{Back:"Back","Language a":"Language",L:"English"})},z={Home:"Trang ch\u1ee7",Header:"Ti\xeau \u0111\u1ec1",Slider:"Thanh tr\u01b0\u1ee3t",Logout:"\u0110\u0103ng xu\u1ea5t"},B={vi:{translation:Object(g.a)(Object(g.a)({},z),{},{Back:"Quay l\u1ea1i",Language:"Ng\xf4n ng\u1eef",L:"Ti\u1ebfng Vi\u1ec7t"})},en:U};A.a.use(I.e).use(F.a).use(E.a).init({resources:B,lng:"vi",fallbackLng:"vi",keySeparator:!1,interpolation:{escapeValue:!1}});A.a;a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(d.a,{store:P,children:Object(i.jsx)(s,{})})}),document.getElementById("root")),f()},15:function(t,n,e){"use strict";e.d(n,"f",(function(){return r})),e.d(n,"k",(function(){return c})),e.d(n,"m",(function(){return o})),e.d(n,"l",(function(){return a})),e.d(n,"a",(function(){return u})),e.d(n,"d",(function(){return i})),e.d(n,"n",(function(){return s})),e.d(n,"o",(function(){return f})),e.d(n,"j",(function(){return d})),e.d(n,"e",(function(){return l})),e.d(n,"b",(function(){return g})),e.d(n,"c",(function(){return p})),e.d(n,"g",(function(){return b})),e.d(n,"h",(function(){return j})),e.d(n,"i",(function(){return h}));var r="/login",c="/register",o="/send_reset-password",a="/reset-password",u="/activate-user",i="/",s="/user",f="".concat(s,"/:id"),d="/new-blog",l="/list-blog",g="/blog",p="".concat(g,"/:slug"),b="/map",j="/message",h="".concat(j,"/:id")},31:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"e",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u}));var r="http://be-app.hung-vt.bike:8000",c="http://be-app.hung-vt.bike:8000",o="AIzaSyA7aU3f7K6Jw4RJy5AK1a1MmJYZWzFvqE0",a="https://api.imgur.com",u="580a8a4922f5737"},34:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return o})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u}));var r=e(13),c=function(t,n){return{type:r.d,user:t,token:n}},o=function(t){return{type:r.e,user:t}},a=function(){return{type:r.a}},u=function(t){return{type:r.b,friends:t}}},46:function(t,n,e){"use strict";var r=e(73),c=e.n(r),o=e(39),a=e.n(o),u=e(74),i=e.n(u),s=e(31),f="".concat(s.a,"/");function d(t,n,e){var r=c.a.create({baseURL:t,httpAgent:new a.a.Agent({keepAlive:!0}),httpsAgent:new i.a.Agent({keepAlive:!0})}),o={Accept:"*/*","Content-Type":e};return n&&(o.Authorization=n),r.interceptors.request.use((function(t){return t.headers=o,t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){try{return 200!==t.status?Promise.reject(t):t}catch(n){return Promise.reject(n)}}),(function(t){return Promise.reject(t)})),r}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/json",e=t?"Bearer ".concat(localStorage.getItem("token")):"";return d(f,e,n)}var g="user",p="api",b="api",j="notify",h={user:{login:function(t){return l(!1).post("".concat(g,"/login"),t)},register:function(t){return l(!1).post("".concat(g,"/register"),t)},getProfile:function(){return l(!0).get("".concat(g,"/profile"))},changePassword:function(t){return l(!0).post("".concat(g,"/change-password"),t)},activateUser:function(t){return l(!1).post("".concat(g,"/active_user"),t)},sendResetPassword:function(t){return l(!1).post("".concat(g,"/send-reset-password"),t)},resetPassword:function(t){return l(!1).post("".concat(g,"/reset-password"),t)},getUsers:function(){return l(!1).get("".concat(g,"/list"))},getUser:function(t,n){return l(!1).get("".concat(g,"/user/").concat(t,"?option=").concat(n))},addFriend:function(t){return l(!0).post("".concat(g,"/add-friend"),{idFriend:t})},unfriend:function(t){return l(!0).post("".concat(g,"/unfriend"),{idFriend:t})},acceptFriend:function(t){return l(!0).post("".concat(g,"/accep-friend"),{idFriend:t})},getChatUser:function(t){return l(!0).get("".concat(g,"/chat/").concat(t))},getChatMessage:function(t){return l(!0).get("".concat(g,"/message-chat/").concat(t))},getMessage:function(t){return l(!0).get("".concat(g,"/message/").concat(t))},getListChat:function(){return l(!0).get("".concat(g,"/chats"))},sendMessage:function(t,n){return l(!0).post("".concat(g,"/message/").concat(t),n)}},locations:{getListProvinces:function(){return l(!1).get("".concat(p,"/locations"))},getListDistricts:function(t){return l(!1).get("".concat(p,"/locations/").concat(t))},getListWards:function(t){return l(!1).get("".concat(p,"/district/").concat(t))}},blog:{getListBlog:function(){return l(!1).get("".concat(b,"/blog"))},getBlog:function(t){return l(!1).get("".concat(b,"/blog/").concat(t))},createBlog:function(t){return l(!0).post("".concat(b,"/blog"),t)}},notification:{getNotifyForUser:function(){return l(!0).get("".concat(j,"/list-user"))},getNotifyNotUser:function(){return l(!1).get("".concat(j,"/lists"))}},imgur:{uploadImg:function(t){return function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"multipart/form-data",n=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"Client-ID ".concat(s.d):"";return d("".concat(s.c,"/"),n,t)}(!0).post("".concat("3","/image"),t)}}};n.a=h},53:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=e(2),c=e.n(r),o=e(45),a=e(44),u=e(8),i=e(1),s=e.n(i),f=e(15),d=e(47),l=e(5),g=e(25),p=(e(95),e(46)),b=e(34),j=e(6),h=s.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(17)]).then(e.bind(null,137))})),v=s.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(2),e.e(15)]).then(e.bind(null,138))})),O=s.a.lazy((function(){return Promise.all([e.e(1),e.e(8),e.e(18)]).then(e.bind(null,142))})),m=s.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(19)]).then(e.bind(null,139))})),x=s.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(14)]).then(e.bind(null,140))})),k=s.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(13)]).then(e.bind(null,141))}));function y(t){return function(n){return Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)("div",{children:"loading"}),children:Object(j.jsx)(t,Object(u.a)({},n))})}}n.b=function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:f.f,component:y(h)}),Object(j.jsx)(l.b,{exact:!0,path:f.k,component:y(v)}),Object(j.jsx)(l.b,{exact:!0,path:f.a,component:y(m)}),Object(j.jsx)(l.b,{exact:!0,path:f.m,component:y(x)}),Object(j.jsx)(l.b,{exact:!0,path:f.l,component:y(k)}),Object(j.jsx)(S,{})]})})};var S=function(t){var n=Object(i.useState)(!0),e=Object(a.a)(n,2),r=e[0],u=e[1],s=Object(g.b)(),d=Object(g.c)((function(t){return t.userState.token}));return Object(i.useEffect)((function(){function t(){return(t=Object(o.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d){t.next=12;break}return t.prev=1,t.next=4,p.a.user.getProfile();case 4:n=t.sent,s(Object(b.d)(n.data)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),s(Object(b.a)()),localStorage.removeItem("token");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),u(!1)}),[d,s]),r?Object(j.jsx)("div",{children:"Loading...!"}):d?Object(j.jsx)(l.b,{path:f.d,component:y(O)}):Object(j.jsx)(l.a,{to:{pathname:f.f,search:"?next=".concat(t.location.pathname).concat(t.location.search)}})}},91:function(t,n,e){},95:function(t,n,e){}},[[134,4,6]]]);
//# sourceMappingURL=main.4723a023.chunk.js.map