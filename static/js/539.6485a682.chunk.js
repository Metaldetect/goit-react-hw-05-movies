"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{3025:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return f},_k:function(){return s},h$:function(){return p},uV:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3",i="4b34cc9253777dc6fec5c1871a98544b",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4958:function(n,t,e){e.d(t,{Fg:function(){return v},aV:function(){return d},ck:function(){return x},t$:function(){return f},t8:function(){return l}});var r,a,c,o,u,i=e(168),s=e(6060),p=e(1087),f=s.Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n"]))),l=s.Z.h2(a||(a=(0,i.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),d=s.Z.ul(c||(c=(0,i.Z)(["\n  list-style: none;\n"]))),x=s.Z.li(o||(o=(0,i.Z)(["\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  text-decoration: none;\n  color: #333;\n  transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n"]))),v=(0,s.Z)(p.rU)(u||(u=(0,i.Z)(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  color: inherit;\n  gap: 10px;\n"])))},1539:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,o=e(5861),u=e(9439),i=e(4687),s=e.n(i),p=e(2791),f=e(1087),l=e(7689),d=e(3025),x=e(168),v=e(6060),h=v.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),g=v.Z.input(a||(a=(0,x.Z)(["\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n"]))),m=v.Z.button(c||(c=(0,x.Z)(["\n  width: 100px;\n  height: 40px;\n  padding: 10px 20px;\n  margin-left: 10px;\n  font-size: 16px;\n  background-color: #3f51b5;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #5f51b5;\n  }\n"]))),Z=e(184),b=function(n){var t=n.onSearch,e=(0,p.useState)(""),r=(0,u.Z)(e,2),a=r[0],c=r[1];return(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault(),t(a),c("")},children:[(0,Z.jsx)(g,{autoFocus:!0,type:"text",placeholder:"Enter movie name",name:"query",value:a,onChange:function(n){c(n.target.value)}}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},k=e(4958),y=e(6910),w=function(){var n=(0,p.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,f.lr)(),c=(0,u.Z)(a,2),i=c[0],x=c[1],v=(0,p.useState)(!1),h=(0,u.Z)(v,2),g=h[0],m=h[1],w=(0,l.TH)(),S=i.get("query")||"";(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),x({query:t}),n.prev=2,n.next=5,(0,d.h$)(t);case 5:e=n.sent,r(e),m(!1),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(2),console.error("Error fetching movies:",n.t0),r([]),m(!1);case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}();n(S)}),[S,x]);var _=function(){var n=(0,o.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m(!0),x({query:t});case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,Z.jsxs)(k.t$,{children:[(0,Z.jsx)(k.t8,{children:"Movies"}),(0,Z.jsx)(b,{onSearch:_}),g?(0,Z.jsx)(y.Z,{}):e.map((function(n){return(0,Z.jsx)(k.Fg,{to:"/movies/".concat(n.id),state:{from:w},children:n.title},n.id)}))]})}}}]);
//# sourceMappingURL=539.6485a682.chunk.js.map