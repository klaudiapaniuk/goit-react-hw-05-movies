"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{114:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(689),i=r(87),p=r(593),v=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,o.TH)();return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.getTrendingToday();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(u.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)("ul",{children:r.map((function(e){var t=e.id,r=e.title;return(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:l},children:r})},t)}))})]})}},593:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),u="8c57aa16de6d4d7f2d4ddf4e537ebfb8",o="https://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:u}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t,"/reviews?page=1"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"/search/movie?&page=1"),{params:{query:t,api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),d={getTrendingToday:i,getMovieById:l,getMovieCast:p,getMovieReviews:v,getMoviesByQuery:f};t.Z=d}}]);
//# sourceMappingURL=114.9b021c37.chunk.js.map