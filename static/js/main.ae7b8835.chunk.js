(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/logo.93d4f3ba.svg"},54:function(e,t,n){e.exports=n.p+"static/media/bulb.af737b55.svg"},55:function(e,t,n){e.exports=n.p+"static/media/pen.84b70f8a.svg"},56:function(e,t,n){e.exports=n.p+"static/media/logout.0969c92b.svg"},57:function(e,t,n){e.exports=n.p+"static/media/magnifier.a14461b8.svg"},60:function(e,t,n){e.exports=n.p+"static/media/plus.e43ce6c8.svg"},61:function(e,t,n){e.exports=n.p+"static/media/link.6fc1d8fe.svg"},64:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(26),i=n.n(o),l=n(8),u=n(3),s=n(9),p=n(31),d=n(51),f=n(23),m=n(24),h=n(19),b=n(20),g=n.n(b),x=function(e){return function(t,n){return t({type:"FETCH_REQUEST"}),g.a.get("http://localhost:9000/api/notes/type",{params:{type:e,userID:n().userID}}).then(function(n){var a=n.data;console.log(a),t({type:"FETCH_SUCCESS",payload:{data:a,itemType:e}})}).catch(function(e){console.log(e),t({type:"FETCH_FAILURE"})})}},v={userID:"62a0a2ce1c9325b80f9a8766"},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUCCESS":return Object(h.a)({},e,Object(f.a)({},t.payload.itemType,Object(m.a)(t.payload.data)));case"AUTH_FAILURE":return Object(h.a)({},e,{message:t.err.message});case"AUTH_SUCCESS":return Object(h.a)({},e,{userID:t.payload.data._id});case"ADD_ITEM_SUCCESS":return Object(h.a)({},e,Object(f.a)({},t.payload.itemType,[].concat(Object(m.a)(e[t.payload.itemType]),[t.payload.data])));case"REMOVE_ITEM_SUCCESS":return Object(h.a)({},e,Object(f.a)({},t.payload.itemType,Object(m.a)(e[t.payload.itemType].filter(function(e){return e._id!==t.payload._id}))));default:return e}},E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.b,O=Object(p.c)(y,E(Object(p.a)(d.a))),j=n(15),w=n(11),k=n(12),C=n(14),S=n(13),T=n(5),_=n(1),R=n(2),I={primary:"hsl(49, 100%, 58%)",notes:"hsl(49, 100%, 58%)",secondary:"hsl(196, 83%, 75%)",tertiary:"hsl(106, 47%, 64%)",articles:"hsl(106, 47%, 64%)",grey100:"hsl(0, 0%, 96%)",grey200:"hsl(0, 0%, 90%)",grey300:"hsl(0, 0%, 70%)",black:"hsl(0, 0%, 0%)",light:300,bold:600,fontWeight:{light:300,bold:600},fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},U=Object(_.b)(a||(a=Object(R.a)(["\n\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');\n\n  *, *::before, &::after {\n      box-sizing: border-box;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n  }\n\n  html {\n      font-size: 62.5%;\n  }\n\n\n\n  body { \n    padding-left: 150px;\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  .articles {\n    background-color: "," !important;\n  }\n\n  .notes {\n    background-color: "," !important;\n  }\n\n  button { \n    cursor: pointer;\n\n    &:hover { \n      filter: brightness(1.033);\n      transition: filter 0.25s ease-in-out;\n    }\n  }\n\n"])),I.articles,I.notes),z=c.a.createContext("notes");function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var D,A,M,P,N,V,F,H,L,Q,W,J,X,Y,Z,q,G,K=function(e){Object(C.a)(n,e);var t=B(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pageType:"notes"},e.setCurrentPage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.props.location.pathname,a=["articles","notes"].filter(function(e){return n.includes(e)}),r=Object(j.a)(a,1)[0];t.pageType!==r&&(e.setState({pageType:r}),console.log(e.state))},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,t){this.setCurrentPage(t)}},{key:"render",value:function(){var e=this.props.children,t=this.props.pageType;return c.a.createElement("div",null,c.a.createElement(z.Provider,{value:t},c.a.createElement(U,null),c.a.createElement(_.a,{theme:I},e)))}}]),n}(r.Component),$=(D=K,function(e){var t=Object(u.f)(),n=Object(u.g)();return c.a.createElement(D,Object.assign({},e,{navigate:n,location:t}))}),ee=_.d.button(A||(A=Object(R.a)(["\n  display: block;\n  width: 67px;\n  height: 67px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 40%;\n  margin-bottom: 20px;\n  border: none;\n  background-color: ",";\n\n  &.active {\n    background-color: white;\n  }\n"])),function(e){return e.icon},function(e){return e.active?"white":"transparent"}),te=n(54),ne=n.n(te),ae=n(55),re=n.n(ae),ce=n(56),oe=n.n(ce),ie=n(28),le=n.n(ie),ue=_.d.div(M||(M=Object(R.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 25px 0;\n  background-color: ",";\n  width: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n"])),function(e){var t=e.activeColor,n=e.theme;return t?n[t]:n.notes}),se=_.d.a(P||(P=Object(R.a)(["\n  display: block;\n  background-image: url(",");\n  background-position: 50% 50%;\n  background-size: 70%;\n  height: 67px;\n  width: 67px;\n  background-repeat: no-repeat;\n"])),le.a),pe=_.d.nav(N||(N=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),de=_.d.div(V||(V=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 10vh;\n"]))),fe=function(e){var t=e.pageType;return c.a.createElement(ue,{activeColor:t},c.a.createElement(pe,null,c.a.createElement(se,{href:"/"}),c.a.createElement(de,null,c.a.createElement(ee,{as:l.c,to:"/notes",icon:re.a,activeclass:"active"}),c.a.createElement(ee,{as:l.c,to:"/articles",icon:ne.a,activeclass:"active"}))),c.a.createElement(ee,{icon:oe.a,as:l.c,to:"/login"}))},me=function(e){var t=e.children,n=e.pageType;return c.a.createElement(c.a.Fragment,null,c.a.createElement(fe,{pageType:n}),t)},he=n(57),be=n.n(he),ge=_.d.input(F||(F=Object(R.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n\n  ","\n"])),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular},function(e){return e.theme.grey100},function(e){return e.theme.grey300},function(e){return e.search&&Object(_.c)(H||(H=Object(R.a)(["\n    padding: 10px 20px 10px 40px;\n    font-size: ",";\n    background-image: url(",");\n    background-size: 15px;\n    background-position: 15px 50%;\n    background-repeat: no-repeat;\n  "])),function(e){return e.theme.fontSize.xs},be.a)}),xe=_.d.h1(L||(L=Object(R.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),function(e){var t=e.theme;return e.big?t.fontSize.xl:t.fontSize.l},function(e){return e.theme.bold}),ve=_.d.p(Q||(Q=Object(R.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),function(e){return e.theme.fontSize.s},function(e){return e.theme.regular}),ye=n(16),Ee=_.d.button(W||(W=Object(R.a)(["\n  //background-color: #ffd82b;\n  background-color: ",";\n  border: none;\n  width: 220px;\n  height: 47px;\n  border-radius: 50px;\n  font-family: 'Montserrat';\n  font-weight: 500;\n  font-size: 16px;\n  text-transform: uppercase;\n\n  ","\n\n  ","\n"])),function(e){var t=e.activecolor;return e.theme[t]},function(e){return e.secondary&&Object(_.c)(J||(J=Object(R.a)(["\n      background-color: ",";\n      width: ",";\n      height: 30px;\n      font-size: 10px;\n    "])),function(e){return e.theme.grey200},function(e){return e.width||"105px"})},function(e){return e.tertiary&&Object(_.c)(X||(X=Object(R.a)(["\n      background-color: ",";\n    "])),function(e){return e.theme.tertiary})}),Oe=function(e){return function(t){return c.a.createElement(z.Consumer,null,function(n){return c.a.createElement(e,Object.assign({},t,{pageContext:n}))})}},je=_.d.div(Y||(Y=Object(R.a)(["\n  border-left: 10px solid ",";\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  padding: 100px 90px;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 680px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transform: translate(",");\n  transition: transform 0.25s ease-in-out;\n"])),function(e){return e.theme[e.activecolor]},function(e){return e.isVisible?"0%":"100%"}),we=Object(_.d)(ge)(Z||(Z=Object(R.a)(["\n  margin: 30px 0 100px;\n  border-radius: 20px;\n  height: 30vh;\n  width: 100%;\n"]))),ke=Object(_.d)(ge)(q||(q=Object(R.a)(["\n  margin-top: 30px;\n  width: 100%;\n"]))),Ce=Object(_.d)(ye.b)(G||(G=Object(R.a)(["\n  width: 100%;\n"]))),Se=function(e){var t=e.pageType,n=e.isVisible,a=e.addItem,r=e.handleClose;return c.a.createElement(je,{isVisible:n,activecolor:t},c.a.createElement(ye.c,{initialValues:{title:"",content:"",articleUrl:"",twittersUrl:"",created:""},onSubmit:function(e,n){var c=n.setSubmitting;console.log(e),a(t,e),r(),c(!1)}},function(e){var n=e.values,a=(e.errors,e.touched,e.handleChange),r=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting;return c.a.createElement(Ce,{onSubmit:o},c.a.createElement(xe,{big:!0},"Create new ",t),c.a.createElement(ke,{as:ye.a,type:"text",value:n.title,onChange:a,onBlur:r,name:"title",placeholder:"title"}),"articles"===t&&c.a.createElement(ke,{placeholder:"link",as:ye.a,onBlur:r,onChange:a,value:n.articleUrl,type:"text",name:"articleUrl"}),c.a.createElement(we,{as:"textarea",name:"content",onChange:a,onBlur:r,placeholder:"",value:n.content}),c.a.createElement(Ee,{disabled:i,type:"submit ",activecolor:t},"Add Note"))}))};Se.defaultProps={pageType:"notes"};var Te,_e,Re,Ie,Ue,ze,Be=Object(s.b)(null,function(e){return{addItem:function(t,n){return e(function(e,t){return function(n,a){return n({type:"ADD_ITEM_REQUEST"}),g.a.post("http://localhost:9000/api/note",Object(h.a)({userID:a().userID,type:e},t)).then(function(t){var a=t.data;console.log({data:a}),n({type:"ADD_ITEM_SUCCESS",payload:{itemType:e,data:a}})}).catch(function(e){console.log(e),n({type:"ADD_ITEM_FAILURE"})})}}(t,n))}}})(Oe(Se)),De=n(60),Ae=n.n(De);function Me(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var Pe=_.d.div(Te||(Te=Object(R.a)(["\n  position: relative;\n  padding: 25px 150px 25px 70px;\n"]))),Ne=_.d.div(_e||(_e=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n  @media (max-width: 1500px) {\n    grid-gap: 45px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (max-width: 1100px) {\n    grid-template-columns: 1fr;\n  }\n"]))),Ve=_.d.div(Re||(Re=Object(R.a)(["\n  margin: 25px 0 50px 0;\n"]))),Fe=Object(_.d)(xe)(Ie||(Ie=Object(R.a)(["\n  margin: 25px 0 0 0;\n\n  &:first-letter {\n    text-transform: uppercase;\n  }\n"]))),He=Object(_.d)(ve)(Ue||(Ue=Object(R.a)(["\n  margin: 0;\n  font-weight: ",";\n"])),function(e){return e.theme.fontWeight.light}),Le=Object(_.d)(ee)(ze||(ze=Object(R.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background-color: ",";\n  background-size: 35%;\n  border-radius: 50px;\n  z-index: 10000;\n"])),function(e){var t=e.activecolor;return e.theme[t]}),Qe=function(e){Object(C.a)(n,e);var t=Me(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isNewItemBarVisible:!1},e.toggleNewItemBar=function(){e.setState(function(e){return{isNewItemBarVisible:!e.isNewItemBarVisible}})},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.pageType,a=e.data,r=this.state.isNewItemBarVisible;return c.a.createElement(me,{pageType:n},c.a.createElement(Pe,null,c.a.createElement(Ve,null,c.a.createElement(ge,{search:!0,placeholder:"Search"}),c.a.createElement(Fe,{big:!0,as:"h1"},n),c.a.createElement(He,null,a.length," ",n)),c.a.createElement(Ne,null,t),c.a.createElement(Le,{icon:Ae.a,activecolor:n,onClick:this.toggleNewItemBar}),c.a.createElement(Be,{isVisible:r,pageType:n,handleClose:this.toggleNewItemBar})))}}]),n}(r.Component);Qe.defaultProps={pageType:"notes"};var We,Je,Xe,Ye,Ze,qe,Ge=Oe(Qe),Ke=n(61),$e=n.n(Ke);function et(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var tt=_.d.div(We||(We=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 385px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n"]))),nt=_.d.div(Je||(Je=Object(R.a)(["\n  padding: 17px 30px 10px;\n  background-color: ",";\n\n  ","\n"])),function(e){var t=e.activeColor,n=e.theme;return t?n[t]:"white"},function(e){return e.flex&&Object(_.c)(Xe||(Xe=Object(R.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100%;\n      flex: 1;\n    "])))}),at=Object(_.d)(ve)(Ye||(Ye=Object(R.a)(["\n  margin: 0 0 5px;\n  font-weight: ",";\n  font-size: ",";\n"])),function(e){return e.theme.fontWeight.bold},function(e){return e.theme.fontSize.xs}),rt=Object(_.d)(xe)(Ze||(Ze=Object(R.a)(["\n  margin: 5px 0 0;\n"]))),ct=_.d.a(qe||(qe=Object(R.a)(["\n  display: block;\n  width: 47px;\n  height: 47px;\n  border-radius: 50%;\n  background: white url(",") no-repeat;\n  background-size: 50%;\n  background-position: 50% 50%;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n"])),$e.a),ot=function(e){Object(C.a)(n,e);var t=et(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1},e.handleCardClick=function(){return e.setState({redirect:!0})},e}return Object(k.a)(n,[{key:"render",value:function(){var e=this.props,t=e._id,n=e.cardType,a=e.title,r=e.created,o=(e.twittersUrl,e.articleUrl),i=e.content,l=e.removeItem;return this.state.redirect?c.a.createElement(u.a,{to:"/".concat(n,"/").concat(t)}):c.a.createElement(tt,null,c.a.createElement(nt,{onClick:this.handleCardClick,activeColor:n},c.a.createElement(rt,null,a),c.a.createElement(at,null,r),"articles"===n&&c.a.createElement(ct,{href:o})),c.a.createElement(nt,{flex:!0},c.a.createElement(ve,null,i),c.a.createElement(Ee,{onClick:function(){return l(n,t)},secondary:!0},"Remove")))}}]),n}(r.Component);ot.defaultProps={cardType:"notes",twittersUrl:"https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg"};var it=Object(s.b)(null,function(e){return{removeItem:function(t,n){return e(function(e,t){return function(n){n({type:"REMOVE_ITEM_REQUEST"}),g.a.delete("http://localhost:9000/api/note/".concat(t)).then(function(){n({type:"REMOVE_ITEM_SUCCESS",payload:{itemType:e,_id:t}})}).catch(function(e){console.log(e),n({type:"REMOVE_ITEM_FAILURE"})})}}(t,n))}}})(ot);function lt(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var ut=function(e){Object(C.a)(n,e);var t=lt(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNotes()}},{key:"render",value:function(){var e=this.props.notes;return c.a.createElement(Ge,{pageType:"notes",data:e},e.map(function(e){var t=e.title,n=e.content,a=e.created,r=e._id;return c.a.createElement(it,{_id:r,title:t,content:n,created:a,key:r})}))}}]),n}(r.Component);ut.defaultProps={notes:[]};var st=Object(s.b)(function(e){return{notes:e.notes}},function(e){return{fetchNotes:function(){return e(x("notes"))}}})(ut);function pt(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var dt=function(e){Object(C.a)(n,e);var t=pt(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchArticles()}},{key:"render",value:function(){var e=this.props.articles;return c.a.createElement(Ge,{pageType:"articles",data:e},e.map(function(e){var t=e.title,n=e.content,a=e.articleUrl,r=e.created,o=e._id;return c.a.createElement(it,{_id:o,cardType:"articles",title:t,content:n,articleUrl:a,created:r,key:o})}))}}]),n}(r.Component);dt.defaultProps={articles:[]};var ft,mt,ht,bt,gt,xt,vt,yt=Object(s.b)(function(e){return{articles:e.articles}},function(e){return{fetchArticles:function(){return e(x("articles"))}}})(dt),Et=Object(_.d)(ve)(ft||(ft=Object(R.a)(["\n  margin: 0;\n  font-weight: ",";\n"])),function(e){return e.theme.bold}),Ot=_.d.a(mt||(mt=Object(R.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"])),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),jt=(_.d.img(ht||(ht=Object(R.a)(["\n  position: absolute;\n  right: -80px;\n  top: 50px;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n"]))),_.d.div(bt||(bt=Object(R.a)(["\n  padding: 25px 150px 25px 70px;\n  max-width: 50vw;\n  position: relative;\n  @media (max-width: 1200px) {\n    max-width: 80vw;\n  }\n"])))),wt=Object(_.d)(l.b)(gt||(gt=Object(R.a)(["\n  display: inline-block;\n  text-decoration: none;\n  color: ",";\n  height: auto;\n  padding: 15px 35px;\n  width: auto;\n"])),function(e){return e.theme.black}),kt=_.d.div(xt||(xt=Object(R.a)(["\n  margin: 25px 0 50px 0;\n"]))),Ct=Object(_.d)(xe)(vt||(vt=Object(R.a)(["\n  margin: 25px 0 0 0;\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]))),St=function(e){var t=e.pageType,n=e.title,a=e.created,r=e.content,o=e.articleUrl;e.twitterUrl;return c.a.createElement(me,{pageType:t},c.a.createElement(jt,null,c.a.createElement(kt,null,c.a.createElement(Ct,{big:!0,as:"h1"},n),c.a.createElement(Et,null,a)),c.a.createElement(ve,null,r),"articles"===t&&c.a.createElement(Ot,{href:o},"Open article"),c.a.createElement(Ee,{as:wt,to:"/".concat(t),className:t},"save / close")))};St.defaultProps={title:"",created:"",content:"",articleUrl:"",twitterUrl:""};var Tt=St;function _t(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(T.a)(e);if(t){var r=Object(T.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(S.a)(this,n)}}var Rt,It,Ut,zt,Bt,Dt,At,Mt,Pt,Nt,Vt=function(e){Object(C.a)(n,e);var t=_t(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:null},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){if(this.props.activeItem)console.log(this.props.activeItem),this.setState({activeItem:this.props.activeItem});else{var e=this.props.match.params.id;g.a.get("http://localhost:9000/api/note/".concat(e)).then(function(e){var t=e.data;return console.log(t)}).catch(function(e){return console.log(e)})}}},{key:"render",value:function(){var e=this.state.activeItem;return c.a.createElement(Tt,{_id:e,title:e.title,content:e.content,articleUrl:e.articleUrl,twitterName:e.twitterName})}}]),n}(r.Component),Ft=Oe(Object(s.b)(function(e,t){if(e[t.pageContext])return{activeItem:e[t.pageContext].filter(function(e){return e._id===t.match.params._id})}})(Vt)),Ht=_.d.div(Rt||(Rt=Object(R.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: -150px;\n  width: calc(100% + 150px);\n"])),function(e){return e.theme.notes}),Lt=_.d.img(It||(It=Object(R.a)(["\n  width: 200px;\n  height: auto;\n"]))),Qt=_.d.div(Ut||(Ut=Object(R.a)(["\n  width: 400px;\n  height: 400px;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Wt=function(e){var t=e.children;return c.a.createElement(Ht,null,c.a.createElement(Lt,{src:le.a,alt:""}),c.a.createElement(xe,null,"Your new favorite online notes experience"),c.a.createElement(Qt,null,t))},Jt=Object(_.d)(ye.b)(zt||(zt=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Xt=Object(_.d)(ge)(Bt||(Bt=Object(R.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]))),Yt=Object(_.d)(l.b)(Dt||(Dt=Object(R.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"])),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),Zt=Object(_.d)(ve)(At||(At=Object(R.a)(["\n  color: red;\n"]))),qt=Object(s.b)(function(e){var t=e.userID,n=void 0===t?null:t,a=e.message;return{userID:n,message:void 0===a?null:a}},function(e){return{authenticate:function(t,n){return e(function(e,t){return function(n){return n({type:"AUTH_REQUEST"}),g.a.post("http://localhost:9000/api/user/login",{username:e,password:t}).then(function(e){console.log(e),n({type:"AUTH_SUCCESS",payload:e})}).catch(function(e){console.log(e),n({type:"AUTH_FAILURE",err:e})})}}(t,n))}}})(function(e){var t=e.userID,n=e.message,a=e.authenticate;return c.a.createElement(Wt,null,c.a.createElement(ye.c,{initialValues:{username:"",password:""},onSubmit:function(e){var t=e.username,n=e.password;a(t,n)}},function(e){var a=e.handleChange,r=e.handleBlur,o=e.values;return t?c.a.createElement(u.a,{to:"/notes"}):c.a.createElement(c.a.Fragment,null,c.a.createElement(Zt,null,n),c.a.createElement(xe,null,"Sign in"),c.a.createElement(Jt,null,c.a.createElement(Xt,{type:"text",name:"username",placeholder:"Login",onChange:a,onBlur:r,value:o.title}),c.a.createElement(Xt,{type:"password",name:"password",placeholder:"Password",onChange:a,onBlur:r,value:o.title}),c.a.createElement(Ee,{activecolor:"notes",type:"submit"},"sign in")),c.a.createElement(Yt,{to:"/register"},"I want my account!"))}))}),Gt=Object(_.d)(ye.b)(Mt||(Mt=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Kt=Object(_.d)(ge)(Pt||(Pt=Object(R.a)(["\n  margin: 0 0 30px 0;\n  height: 40px;\n  width: 300px;\n"]))),$t=Object(_.d)(l.b)(Nt||(Nt=Object(R.a)(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  color: black;\n  text-transform: uppercase;\n  margin: 20px 0 50px;\n"])),function(e){return e.theme.bold},function(e){return e.theme.fontSize.xs}),en=function(){return c.a.createElement(Wt,null,c.a.createElement(ye.c,{initialValues:{username:"",password:""},onSubmit:function(e){e.username,e.password,console.log("hello")}},function(e){var t=e.handleChange,n=e.handleBlur,a=e.values;return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null,"Sign in"),c.a.createElement(Gt,null,c.a.createElement(Kt,{type:"text",name:"username",placeholder:"Login",onChange:t,onBlur:n,value:a.title}),c.a.createElement(Kt,{type:"password",name:"password",placeholder:"Password",onChange:t,onBlur:n,value:a.title}),c.a.createElement(Ee,{activecolor:"notes",type:"submit"},"register")),c.a.createElement($t,{to:"/login"},"I want to log in!"))}))};function tn(){return c.a.createElement(s.a,{store:O},c.a.createElement(l.a,null,c.a.createElement($,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",element:c.a.createElement(u.a,{to:"/login"})}),c.a.createElement(u.b,{path:"/login",element:c.a.createElement(qt,null)}),c.a.createElement(u.b,{path:"/register",element:c.a.createElement(en,null)}),c.a.createElement(u.b,{path:"/notes"},c.a.createElement(u.b,{index:!0,element:c.a.createElement(st,null)}),c.a.createElement(u.b,{path:":id",element:c.a.createElement(Ft,null)})),c.a.createElement(u.b,{path:"/articles"},c.a.createElement(u.b,{index:!0,element:c.a.createElement(yt,null)}),c.a.createElement(u.b,{path:":id",element:c.a.createElement(Ft,null)}))))))}i.a.render(c.a.createElement(tn,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.ae7b8835.chunk.js.map