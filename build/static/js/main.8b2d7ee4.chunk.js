(this.webpackJsonpnotyoutube=this.webpackJsonpnotyoutube||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(30),s=n.n(c),r=n(34),i=n(52),o=n(53),l=n(3),d="LOGIN_SUCCESS",u="LOGIN_FAIL",j="LOGIN_REQUEST",b="LOG_OUT",p="LOAD_PROFILE",h="HOME_VIDEOS_SUCCESS",O="HOME_VIDEOS_FAIL",m="HOME_VIDEOS_REQUEST",v="SELECTED_VIDEO_REQUEST",f="SELECTED_VIDEO_SUCCESS",x="SELECTED_VIDEO_FAIL",g="CHANNEL_DETAILS_REQUEST",y="CHANNEL_DETAILS_SUCCESS",S="CHANNEL_DETAILS_FAIL",_="COMMENT_LIST_SUCCESS",E="COMMENT_LIST_FAIL",N="COMMENT_LIST_REQUEST",w="SET_SUBSCRIPTION_STATUS",I="RELATED_VIDEO_REQUEST",C="RELATED_VIDEO_SUCCESS",k="RELATED_VIDEO_FAIL",T="SEARCHED_VIDEO_REQUEST",A="SEARCHED_VIDEO_SUCCESS",L="SEARCHED_VIDEO_FAIL",D="SUBSCRIPTIONS_CHANNEL_REQUEST",R="SUBSCRIPTIONS_CHANNEL_SUCCESS",z="SUBSCRIPTIONS_CHANNEL_FAIL",H="CHANNEL_VIDEOS_REQUEST",U="CHANNEL_VIDEOS_SUCCESS",V="CHANNEL_VIDEOS_FAIL",P={accessToken:sessionStorage.getItem("ytc-access-token")?sessionStorage.getItem("ytc-access-token"):null,user:sessionStorage.getItem("ytc-user")?JSON.parse(sessionStorage.getItem("ytc-user")):null,loading:!1},F=n(23),M=Object(r.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{accessToken:a,loading:!1});case u:return Object(l.a)(Object(l.a)({},e),{},{accessToken:null,loading:!1,error:a});case p:return Object(l.a)(Object(l.a)({},e),{},{user:a});case b:return Object(l.a)(Object(l.a)({},e),{},{accessToken:null,user:null});default:return e}},homeVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!1,nextPageToken:null,activeCategory:"All"},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h:return Object(l.a)(Object(l.a)({},e),{},{videos:e.activeCategory===a.category?[].concat(Object(F.a)(e.videos),Object(F.a)(a.videos)):a.videos,loading:!1,nextPageToken:a.nextPageToken,activeCategory:a.category});case O:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:a});case m:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}},selectedVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,video:null},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case v:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case f:return Object(l.a)(Object(l.a)({},e),{},{video:n,loading:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{video:null,loading:!1,error:n});default:return e}},channelDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,channel:{},subscriptionStatus:!1},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case g:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{channel:n,loading:!1});case S:return Object(l.a)(Object(l.a)({},e),{},{channel:null,loading:!1,error:n});case w:return Object(l.a)(Object(l.a)({},e),{},{subscriptionStatus:n});default:return e}},commentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,comments:null},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case N:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case _:return Object(l.a)(Object(l.a)({},e),{},{comments:n,loading:!1});case E:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:n});default:return e}},relatedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case I:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case C:return Object(l.a)(Object(l.a)({},e),{},{videos:n,loading:!1});case k:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:n});default:return e}},searchedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case T:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case A:return Object(l.a)(Object(l.a)({},e),{},{videos:n,loading:!1});case L:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:n});default:return e}},subscriptionsChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case D:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case R:return Object(l.a)(Object(l.a)({},e),{},{videos:n,loading:!1});case z:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:n});default:return e}},channelVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case H:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case U:return Object(l.a)(Object(l.a)({},e),{},{videos:n,loading:!1});case V:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:n});default:return e}}}),G=Object(r.createStore)(M,{},Object(i.composeWithDevTools)(Object(r.applyMiddleware)(o.a))),B=n(6),J=n(16),W=n(13),Q=n(10),q=n(113),K=n(54),Y=n(25),X=n(15),Z=(n(68),n(1)),$=function(e){var t=e.handleToggleSidebar,n=Object(a.useState)(""),c=Object(W.a)(n,2),s=c[0],r=c[1],i=Object(Q.g)(),o=Object(B.c)((function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user}));return Object(Z.jsxs)("div",{className:"header ",children:[Object(Z.jsx)(K.a,{className:"header__menu",size:26,onClick:function(){return t()}}),Object(Z.jsx)("img",{src:"http://pngimg.com/uploads/youtube/youtube_PNG2.png",alt:"",className:"header__logo"}),Object(Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.push("/search/".concat(s))},children:[Object(Z.jsx)("input",{type:"text",placeholder:"Search",value:s,onChange:function(e){return r(e.target.value)}}),Object(Z.jsx)("button",{type:"submit",children:Object(Z.jsx)(Y.b,{size:22})})]}),Object(Z.jsxs)("div",{className:"header__icons",children:[Object(Z.jsx)(X.g,{size:28}),Object(Z.jsx)(X.a,{size:28}),Object(Z.jsx)("img",{src:null===o||void 0===o?void 0:o.photoURL,alt:"avatar"})]})]})},ee=n(5),te=n.n(ee),ne=n(9),ae=n(33);n(72);ae.a.initializeApp({apiKey:"AIzaSyCHGohGaWkRjJAtwf3RmF9FsJrmKdt-5pw",authDomain:"ncr-ytc.firebaseapp.com",projectId:"ncr-ytc",storageBucket:"ncr-ytc.appspot.com",messagingSenderId:"33046587106",appId:"1:33046587106:web:a7266799fc5bc27caf20bb"});var ce=ae.a.auth(),se=(n(74),function(e){var t=e.sidebar,n=e.handleToggleSidebar,a=Object(B.b)();return Object(Z.jsxs)("nav",{className:t?"sidebar open":"sidebar",onClick:function(){return n(!1)},children:[Object(Z.jsx)(J.b,{to:"/",children:Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.e,{size:23}),Object(Z.jsx)("span",{children:"Home"})]})}),Object(Z.jsx)(J.b,{to:"/",children:Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.c,{esize:23}),Object(Z.jsx)("span",{children:"Explore"})]})}),Object(Z.jsx)(J.b,{to:"/feed/subscriptions",children:Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.h,{size:23}),Object(Z.jsx)("span",{children:"Subscriptions"})]})}),Object(Z.jsx)("hr",{}),Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.f,{size:23}),Object(Z.jsx)("span",{children:"Library"})]}),Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.d,{size:23}),Object(Z.jsx)("span",{children:"History"})]}),Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.k,{size:23}),Object(Z.jsx)("span",{children:"Watch later"})]}),Object(Z.jsxs)("li",{children:[Object(Z.jsx)(X.j,{size:23}),Object(Z.jsx)("span",{children:"Liked Video"})]}),Object(Z.jsx)("hr",{}),Object(Z.jsxs)("li",{onClick:function(){a(function(){var e=Object(ne.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.signOut();case 2:t({type:b}),sessionStorage.removeItem("ytc-access-token"),sessionStorage.removeItem("ytc-user");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(Z.jsx)(X.b,{size:23}),Object(Z.jsx)("span",{children:"Log Out"})]}),Object(Z.jsx)("hr",{})]})}),re=n(114),ie=n(20),oe=n.n(ie),le=n(22),de=n.n(le),ue=n(28),je=n(56),be=n.n(je);console.log('"AIzaSyCHGohGaWkRjJAtwf3RmF9FsJrmKdt-5pw";');var pe=be.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:"AIzaSyCHGohGaWkRjJAtwf3RmF9FsJrmKdt-5pw"}}),he=(n(94),function(e){var t=e.video,n=e.channelScreen,c=t.id,s=t.snippet,r=s.channelId,i=s.channelTitle,o=s.title,l=s.publishedAt,d=s.thumbnails.medium,u=t.contentDetails,j=Object(a.useState)(null),b=Object(W.a)(j,2),p=b[0],h=b[1],O=Object(a.useState)(null),m=Object(W.a)(O,2),v=m[0],f=m[1],x=Object(a.useState)(null),g=Object(W.a)(x,2),y=g[0],S=g[1],_=oe.a.duration(v).asSeconds(),E=oe.a.utc(1e3*_).format("mm:ss"),N=(null===c||void 0===c?void 0:c.videoId)||(null===u||void 0===u?void 0:u.videoId)||c,w=Object(Q.g)();Object(a.useEffect)((function(){(function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("/videos",{params:{part:"contentDetails,statistics",id:N}});case 2:t=e.sent,n=t.data.items,f(n[0].contentDetails.duration),h(n[0].statistics.viewCount);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[N]),Object(a.useEffect)((function(){(function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("/channels",{params:{part:"snippet",id:r}});case 2:t=e.sent,n=t.data.items,S(n[0].snippet.thumbnails.default);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]);return Object(Z.jsxs)("div",{className:"video",onClick:function(){w.push("/watch/".concat(N))},children:[Object(Z.jsxs)("div",{className:"video__top",children:[Object(Z.jsx)(ue.LazyLoadImage,{src:d.url,effect:"blur"}),Object(Z.jsx)("span",{className:"video__top__duration",children:E})]}),Object(Z.jsx)("div",{className:"video__title",children:o}),Object(Z.jsxs)("div",{className:"video__details",children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)(Y.a,{})," ",de()(p).format("0.a")," Views \u2022"," "]})," ",Object(Z.jsxs)("span",{children:[" ",oe()(l).fromNow()," "]})]}),!n&&Object(Z.jsxs)("div",{className:"video__channel",children:[Object(Z.jsx)(ue.LazyLoadImage,{src:null===y||void 0===y?void 0:y.url,effect:"blur"}),Object(Z.jsx)("p",{children:i})]})]})}),Oe=function(){return function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var a,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m}),e.next=4,pe("/videos",{params:{part:"snippet,contentDetails,statistics",chart:"mostPopular",regionCode:"US",maxResults:20,pageToken:n().homeVideos.nextPageToken}});case 4:a=e.sent,c=a.data,t({type:h,payload:{videos:c.items,nextPageToken:c.nextPageToken,category:"All"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:O,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n,a){var c,s;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:m}),t.next=4,pe("/search",{params:{part:"snippet",maxResults:20,pageToken:a().homeVideos.nextPageToken,q:e,type:"video"}});case 4:c=t.sent,s=c.data,n({type:h,payload:{videos:s.items,nextPageToken:s.nextPageToken,category:e}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:O,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},ve=(n(95),["All","React js","Style-Components","React Native","Rest API",".Net 5.0 full stack","Ehring lounge Jazz","Best of John Madden","Green Bay Packers football highlights","How its made","Python","Docker","Apollo","Gatsby","Poor Code","AWS","Firebase","Angular js","ORM","Big O notation","AI and Deep Learning"]),fe=function(){var e=Object(a.useState)("All"),t=Object(W.a)(e,2),n=t[0],c=t[1],s=Object(B.b)();return Object(Z.jsx)("div",{className:"categoriesBar",children:ve.map((function(e,t){return Object(Z.jsx)("span",{onClick:function(){return function(e){c(e),s("All"===e?Oe():me(e))}(e)},className:n===e?"active":"",children:e},t)}))})},xe=n(57),ge=n(12),ye=n.n(ge);var Se=function(){return Object(Z.jsx)("div",{style:{width:"100%",margin:"1rem 0"},children:Object(Z.jsxs)(ge.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:[Object(Z.jsx)(ye.a,{height:180}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(ye.a,{style:{margin:"0.5rem"},circle:!0,height:40,width:40}),Object(Z.jsx)(ye.a,{height:40,width:"75%"})]})]})})},_e=function(){var e=Object(B.b)();Object(a.useEffect)((function(){e(Oe())}),[e]);var t=Object(B.c)((function(e){return e.homeVideos})),n=t.videos,c=t.activeCategory,s=t.loading;return Object(Z.jsxs)(q.a,{children:[Object(Z.jsx)(fe,{}),Object(Z.jsx)(xe.a,{dataLength:n.length,next:function(){e("All"===c?Oe():me(c))},hasMore:!0,loader:Object(Z.jsx)("div",{className:"spinner-border text-danger d-block mx-auto"}),className:"row",children:s?Object(F.a)(Array(20)).map((function(){return Object(Z.jsx)(re.a,{lg:3,md:4,children:Object(Z.jsx)(Se,{})})})):n.map((function(e){return Object(Z.jsx)(re.a,{lg:3,md:4,children:Object(Z.jsx)(he,{video:e},e.id)})}))})]})},Ee=(n(99),function(){var e=Object(B.b)(),t=Object(B.c)((function(e){return e.auth.accessToken})),n=Object(Q.g)();return Object(a.useEffect)((function(){t&&n.push("/")}),[t,n]),Object(Z.jsx)("div",{className:"login",children:Object(Z.jsxs)("div",{className:"login__container",children:[Object(Z.jsx)("h2",{children:"A clone of youtube"}),Object(Z.jsx)("img",{src:"https://pngimg.com/uploads/youtube/youtube_PNG2.png",alt:""}),Object(Z.jsx)("button",{onClick:function(){e(function(){var e=Object(ne.a)(te.a.mark((function e(t){var n,a,c,s;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:j}),(n=new ae.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/youtube.force-ssl"),e.next=6,ce.signInWithPopup(n);case 6:a=e.sent,c=a.credential.accessToken,s={name:a.additionalUserInfo.profile.name,photoURL:a.additionalUserInfo.profile.picture},sessionStorage.setItem("ytc-access-token",c),sessionStorage.setItem("ytc-user",JSON.stringify(s)),t({type:d,payload:c}),t({type:p,payload:s}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message),t({type:u,payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},children:"Login with Google"}),Object(Z.jsx)("p",{children:"This Project was made possible with React, Redux, Youtube API, SCSS, Axios and Firebase!"})]})})}),Ne=n(115),we=function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:N}),t.next=4,pe("/commentThreads",{params:{part:"snippet",videoId:e}});case 4:a=t.sent,c=a.data,n({type:_,payload:c.items}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),n({type:E,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ie=(n(100),function(e){var t=e.comment,n=t.authorDisplayName,a=t.authorProfileImageUrl,c=t.publishedAt,s=t.textDisplay;return Object(Z.jsxs)("div",{className:"p-2 comment d-flex",children:[Object(Z.jsx)("img",{src:a,alt:"",className:"mr-3 rounded-circle"}),Object(Z.jsxs)("div",{className:"comment__body",children:[Object(Z.jsxs)("p",{className:"mb-1 comment__header",children:[n," \u2022 ",oe()(c).fromNow()]}),Object(Z.jsx)("p",{className:"mb-0",children:s})]})]})}),Ce=(n(101),function(e){var t=e.videoId,n=e.totalComments,c=Object(B.b)();Object(a.useEffect)((function(){c(we(t))}),[t,c]);var s=Object(B.c)((function(e){return e.commentList.comments})),r=Object(B.c)((function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user})).photoURL,i=Object(a.useState)(""),o=Object(W.a)(i,2),l=o[0],d=o[1],u=null===s||void 0===s?void 0:s.map((function(e){return e.snippet.topLevelComment.snippet}));return Object(Z.jsxs)("div",{className:"comments",children:[Object(Z.jsxs)("p",{children:[n," Comments"]}),Object(Z.jsxs)("div",{className:"my-2 comments__form d-flex w-100",children:[Object(Z.jsx)("img",{src:r,alt:"avatar",className:"mr-3 rounded-circle"}),Object(Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==l.length&&(c(function(e,t){return function(){var n=Object(ne.a)(te.a.mark((function n(a,c){var s;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s={snippet:{videoId:e,topLevelComment:{snippet:{textOriginal:t}}}},n.next=4,pe.post("/commentThreads",s,{params:{part:"snippet"},headers:{Authorization:"Bearer ".concat(c().auth.accessToken)}});case 4:a({type:"CREATE_COMMENT_SUCCESS"}),setTimeout((function(){return a(we(e))}),3e3),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response.data),a({type:"CREATE_COMMENT_FAIL",payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}(t,l)),d(""))},className:"d-flex flex-grow-1",children:[Object(Z.jsx)("input",{type:"text",className:"flex-grow-1",placeholder:"Write a comment...",value:l,onChange:function(e){return d(e.target.value)}}),Object(Z.jsx)("button",{className:"p-2 border-0",children:"Comment"})]})]}),Object(Z.jsx)("div",{className:"comments__list",children:null===u||void 0===u?void 0:u.map((function(e,t){return Object(Z.jsx)(Ie,{comment:e},t)}))})]})}),ke=(n(102),function(e){var t=e.video,n=e.searchScreen,c=e.subScreen,s=t.id,r=t.snippet,i=r.channelId,o=r.channelTitle,l=r.description,d=r.title,u=r.publishedAt,j=r.thumbnails.medium,b=r.resourceId,p=!("youtube#channel"===s.kind||c),h=Object(a.useState)(null),O=Object(W.a)(h,2),m=O[0],v=O[1],f=Object(a.useState)(null),x=Object(W.a)(f,2),g=x[0],y=x[1],S=Object(a.useState)(null),_=Object(W.a)(S,2),E=_[0],N=_[1];Object(a.useEffect)((function(){p&&function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("/videos",{params:{part:"contentDetails,statistics",id:s.videoId}});case 2:t=e.sent,n=t.data.items,y(n[0].contentDetails.duration),v(n[0].statistics.viewCount);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,p]),Object(a.useEffect)((function(){(function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe("/channels",{params:{part:"snippet",id:i}});case 2:t=e.sent,n=t.data.items,N(n[0].snippet.thumbnails.default);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);var w=oe.a.duration(g).asSeconds(),I=oe.a.utc(1e3*w).format("mm:ss"),C=Object(Q.g)(),k=(null===b||void 0===b?void 0:b.channelId)||i,T=!p&&"videoHorizontal__thumbnail-channel";return Object(Z.jsxs)(Ne.a,{className:"py-2 m-1 videoHorizontal align-items-center",onClick:function(){p?C.push("/watch/".concat(s.videoId)):C.push("/channel/".concat(k))},children:[Object(Z.jsxs)(re.a,{xs:6,md:n||c?4:6,className:"videoHorizontal__left",children:[Object(Z.jsx)(ue.LazyLoadImage,{src:j.url,effect:"blur",className:"videoHorizontal__thumbnail ".concat(T," "),wrapperClassName:"videoHorizontal__thumbnail-wrapper"}),p&&Object(Z.jsx)("span",{className:"videoHorizontal__duration",children:I})]}),Object(Z.jsxs)(re.a,{xs:6,md:n||c?8:6,className:"p-0 videoHorizontal__right",children:[Object(Z.jsx)("p",{className:"mb-1 videoHorizontal__title",children:d}),p&&Object(Z.jsxs)("div",{className:"videoHorizontal__details",children:[Object(Z.jsx)(Y.a,{})," ",de()(m).format("0.a")," Views \u2022",oe()(u).fromNow()]}),(n||c)&&Object(Z.jsx)("p",{className:"mt-1 videoHorizontal__desc",children:l}),Object(Z.jsxs)("div",{className:"my-1 videoHorizontal__channel d-flex align-items-center",children:[p&&Object(Z.jsx)(ue.LazyLoadImage,{src:null===E||void 0===E?void 0:E.url,effect:"blur"}),Object(Z.jsx)("p",{className:"mb-0",children:o})]}),c&&Object(Z.jsxs)("p",{className:"mt-2",children:[t.contentDetails.totalItemCount," Videos"]})]})]})}),Te=n(58),Ae=n.n(Te),Le=function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:g}),t.next=4,pe("/channels",{params:{part:"snippet,statistics,contentDetails",id:e}});case 4:a=t.sent,c=a.data,n({type:y,payload:c.items[0]}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),n({type:S,payload:t.t0.response.data});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},De=n(38),Re=function(e){var t=e.title,n=void 0===t?"NotYoutube using YoutubeAPI":t,a=e.description,c=void 0===a?"a project made with Youtube API V3, SaSS, React.js, Redux, and Firebase":a;return Object(Z.jsxs)(De.a,{children:[Object(Z.jsx)("title",{children:n}),Object(Z.jsx)("meta",{name:"description",content:c}),Object(Z.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(Z.jsx)("meta",{property:"og:type",content:"website"}),Object(Z.jsx)("meta",{property:"og:title",content:n}),Object(Z.jsx)("meta",{property:"og:description",content:c})]})},ze=(n(104),function(e){var t,n,c=e.video,s=c.snippet,r=c.statistics,i=(e.videoId,s.channelId),o=s.channelTitle,l=s.description,d=s.title,u=s.publishedAt,j=r.viewCount,b=r.likeCount,p=r.dislikeCount,h=Object(B.b)(),O=Object(B.c)((function(e){return e.channelDetails.channel})),m=O.snippet,v=O.statistics,f=Object(B.c)((function(e){return e.channelDetails.subscriptionStatus}));return Object(a.useEffect)((function(){var e;h(Le(i)),h((e=i,function(){var t=Object(ne.a)(te.a.mark((function t(n,a){var c,s;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pe("/subscriptions",{params:{part:"snippet",forChannelId:e,mine:!0},headers:{Authorization:"Bearer ".concat(a().auth.accessToken)}});case 3:c=t.sent,s=c.data,n({type:w,payload:0!==s.items.length}),console.log(s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()))}),[h,i]),Object(Z.jsxs)("div",{className:"py-2 videoMetaData",children:[Object(Z.jsx)(Re,{title:d,description:l}),Object(Z.jsxs)("div",{className:"videoMetaData__top",children:[Object(Z.jsx)("h5",{children:d}),Object(Z.jsxs)("div",{className:"py-1 d-flex justify-content-between align-items-center",children:[Object(Z.jsxs)("span",{children:[de()(j).format("0.a")," Views \u2022"," ",oe()(u).fromNow()]}),Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("span",{className:"mr-3",children:[Object(Z.jsx)(X.j,{size:26})," ",de()(b).format("0.a")]}),Object(Z.jsxs)("span",{className:"mr-3",children:[Object(Z.jsx)(X.i,{size:26})," ",de()(p).format("0.a")]})]})]})]}),Object(Z.jsxs)("div",{className:"py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center",children:[Object(Z.jsxs)("div",{className:"d-flex",children:[Object(Z.jsx)("img",{src:null===m||void 0===m||null===(t=m.thumbnails)||void 0===t||null===(n=t.default)||void 0===n?void 0:n.url,alt:"",className:"mr-3 rounded-circle"}),Object(Z.jsxs)("div",{className:"d-flex flex-column",children:[Object(Z.jsx)("span",{children:o}),Object(Z.jsxs)("span",{children:[" ",de()(null===v||void 0===v?void 0:v.subscriberCount).format("0.a")," ","Subscribers"]})]})]}),Object(Z.jsx)("button",{className:"p-2 m-2 border-0 btn ".concat(f&&"btn-gray"),children:f?"Subscribed":"Subscribe"})]}),Object(Z.jsx)("div",{className:"videoMetaData__description",children:Object(Z.jsx)(Ae.a,{lines:3,more:"SHOW MORE",less:"SHOW LESS",anchorClass:"showMoreText",expanded:!1,children:l})})]})}),He=(n(105),function(){var e,t,n,c=Object(Q.h)().id,s=Object(B.b)();Object(a.useEffect)((function(){s(function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:v}),t.next=4,pe("/videos",{params:{part:"snippet,statistics",id:e}});case 4:a=t.sent,c=a.data,n({type:f,payload:c.items[0]}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:x,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c)),s(function(e){return function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,c;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:I}),t.next=4,pe("/search",{params:{part:"snippet",relatedToVideoId:e,maxResults:15,type:"video"}});case 4:a=t.sent,c=a.data,n({type:C,payload:c.items}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data.message),n({type:k,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[s,c]);var r=Object(B.c)((function(e){return e.relatedVideos})),i=r.videos,o=(r.loading,Object(B.c)((function(e){return e.selectedVideo}))),l=o.video,d=o.loading;return Object(Z.jsxs)(Ne.a,{children:[Object(Z.jsx)(De.a,{children:Object(Z.jsx)("title",{children:null===l||void 0===l||null===(e=l.snippet)||void 0===e?void 0:e.title})}),Object(Z.jsxs)(re.a,{lg:8,children:[Object(Z.jsx)("div",{className:"watchScreen__player",children:Object(Z.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",title:null===l||void 0===l||null===(t=l.snippet)||void 0===t?void 0:t.title,allowFullScreen:!0,width:"100%",height:"100%"})}),d?Object(Z.jsx)("h6",{children:"Loading..."}):Object(Z.jsx)(ze,{video:l,videoId:c}),Object(Z.jsx)(Ce,{videoId:c,totalComments:null===l||void 0===l||null===(n=l.statistics)||void 0===n?void 0:n.commentCount})]}),Object(Z.jsx)(re.a,{lg:4,children:d?Object(Z.jsx)(ge.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(Z.jsx)(ye.a,{width:"100%",height:"130px",count:15})}):null===i||void 0===i?void 0:i.filter((function(e){return e.snippet})).map((function(e){return Object(Z.jsx)(ke,{video:e},e.id.videoId)}))})]})}),Ue=function(){var e=Object(Q.h)().query,t=Object(B.b)();Object(a.useEffect)((function(){var n;t((n=e,function(){var e=Object(ne.a)(te.a.mark((function e(t){var a,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:T}),e.next=4,pe("/search",{params:{part:"snippet",maxResults:20,q:n,type:"video,channel"}});case 4:a=e.sent,c=a.data,t({type:A,payload:c.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:L,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,t]);var n=Object(B.c)((function(e){return e.searchedVideos})),c=n.videos,s=n.loading;return Object(Z.jsx)(q.a,{children:s?Object(Z.jsx)(ge.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(Z.jsx)(ye.a,{width:"100%",height:"160px",count:20})}):null===c||void 0===c?void 0:c.map((function(e){return Object(Z.jsx)(ke,{video:e,searchScreen:!0},e.id.videoId)}))})},Ve=(n(106),function(){var e=Object(B.b)();Object(a.useEffect)((function(){e(function(){var e=Object(ne.a)(te.a.mark((function e(t,n){var a,c;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:D}),e.next=4,pe("/subscriptions",{params:{part:"snippet,contentDetails",mine:!0},headers:{Authorization:"Bearer ".concat(n().auth.accessToken)}});case 4:a=e.sent,c=a.data,t({type:R,payload:c.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data),t({type:z,payload:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}),[e]);var t=Object(B.c)((function(e){return e.subscriptionsChannel})),n=t.loading,c=t.videos;return Object(Z.jsx)(q.a,{fluid:!0,children:n?Object(Z.jsx)(ge.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(Z.jsx)(ye.a,{width:"100%",height:"160px",count:20})}):null===c||void 0===c?void 0:c.map((function(e){return Object(Z.jsx)(ke,{video:e,subScreen:!0},e.id)}))})}),Pe=(n(107),function(){var e,t,n=Object(Q.h)().channelId,c=Object(B.b)();Object(a.useEffect)((function(){var e;c((e=n,function(){var t=Object(ne.a)(te.a.mark((function t(n){var a,c,s,r,i;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:H}),t.next=4,pe("/channels",{params:{part:"contentDetails",id:e}});case 4:return a=t.sent,c=a.data.items,s=c[0].contentDetails.relatedPlaylists.uploads,t.next=9,pe("/playlistItems",{params:{part:"snippet,contentDetails",playlistId:s,maxResults:30}});case 9:r=t.sent,i=r.data,n({type:U,payload:i.items}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.response.data.message),n({type:S,payload:t.t0.response.data});case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())),c(Le(n))}),[c,n]);var s=Object(B.c)((function(e){return e.channelVideos})),r=s.videos,i=s.loading,o=Object(B.c)((function(e){return e.channelDetails.channel})),l=o.snippet,d=o.statistics;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("div",{className:"px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader",children:[Object(Z.jsxs)("div",{className:"d-flex align-items-center",children:[Object(Z.jsx)("img",{src:null===l||void 0===l||null===(e=l.thumbnails)||void 0===e||null===(t=e.default)||void 0===t?void 0:t.url,alt:""}),Object(Z.jsxs)("div",{className:"ml-3 channelHeader__details",children:[Object(Z.jsx)("h3",{children:null===l||void 0===l?void 0:l.title}),Object(Z.jsxs)("span",{children:[de()(null===d||void 0===d?void 0:d.subscriberCount).format("0.a")," subscribers"]})]})]}),Object(Z.jsx)("button",{children:"Subscribe"})]}),Object(Z.jsx)(q.a,{children:Object(Z.jsx)(Ne.a,{className:"mt-2",children:i?Object(F.a)(Array(15)).map((function(){return Object(Z.jsx)(re.a,{md:3,lg:3,children:Object(Z.jsx)(ge.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(Z.jsx)(ye.a,{width:"100%",height:"140px"})})})})):null===r||void 0===r?void 0:r.map((function(e){return Object(Z.jsx)(re.a,{md:3,lg:3,children:Object(Z.jsx)(he,{video:e,channelScreen:!0})})}))})})]})}),Fe=(n(108),function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(W.a)(n,2),s=c[0],r=c[1],i=function(){return r((function(e){return!e}))};return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)($,{handleToggle:i}),Object(Z.jsxs)("div",{className:"app__container",children:[Object(Z.jsx)(se,{sidebar:s,handleToggleSidebar:i}),Object(Z.jsx)(q.a,{fluid:!0,className:"app__main",children:t})]})]})}),Me=function(){var e=Object(B.c)((function(e){return e.auth})),t=e.accessToken,n=e.loading,c=Object(Q.g)();return Object(a.useEffect)((function(){n||t||c.push("/auth")}),[t,n,c]),Object(Z.jsxs)(Q.d,{children:[Object(Z.jsx)(Q.b,{path:"/",exact:!0,children:Object(Z.jsx)(Fe,{children:Object(Z.jsx)(_e,{})})}),Object(Z.jsx)(Q.b,{path:"/auth",children:Object(Z.jsx)(Ee,{})}),Object(Z.jsx)(Q.b,{path:"/search/:query",children:Object(Z.jsx)(Fe,{children:Object(Z.jsx)(Ue,{})})}),Object(Z.jsx)(Q.b,{path:"/watch/:id",children:Object(Z.jsx)(Fe,{children:Object(Z.jsx)(He,{})})}),Object(Z.jsx)(Q.b,{path:"/feed/subscriptions",children:Object(Z.jsx)(Fe,{children:Object(Z.jsx)(Ve,{})})}),Object(Z.jsx)(Q.b,{path:"/channel/:channelId",children:Object(Z.jsx)(Fe,{children:Object(Z.jsx)(Pe,{})})}),Object(Z.jsx)(Q.b,{children:Object(Z.jsx)(Q.a,{to:"/"})})]})};n(109),n(110),n(111);s.a.render(Object(Z.jsx)(B.a,{store:G,children:Object(Z.jsx)(J.a,{children:Object(Z.jsx)(Me,{})})}),document.getElementById("root"))},68:function(e,t,n){},74:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},99:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.8b2d7ee4.chunk.js.map