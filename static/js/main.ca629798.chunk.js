(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{13:function(e,t,n){e.exports={trendingHeader:"homePage_trendingHeader__1aAMc",trendingList:"homePage_trendingList__1NgD6",trendingListItem:"homePage_trendingListItem__14Z9X",homePageWrapper:"homePage_homePageWrapper__gQVG9"}},21:function(e,t,n){"use strict";var r=n(5),a=n.n(r),c=n(10),o=n(9),i=n.n(o);i.a.defaults.baseURL="https://api.themoviedb.org/3/";var s="5d541b775537fe62598d0f7b97768427",u={api_key:s,language:"ru-RU"};t.a={getTrending:function(){return Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("trending/all/day",{params:u});case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("error",e.t0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getMovieDetails:function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("movie/".concat(e),{params:u});case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getMovieCast:function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getMovieReviews:function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getMoviesSearchBar:function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()}}},35:function(e,t,n){e.exports=n(63)},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),i=n(17),s=n(18),u=n(19),l=n(20),p=n(21),m=n(11),v=n(13),g=n.n(v),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={movies:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.getTrending().then((function(t){return e.setState({movies:t.data.results})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:g.a.homePageWrapper},a.a.createElement("h2",{className:g.a.trendingHeader},"Trending today"),a.a.createElement("ul",{className:g.a.trendingList},this.state.movies.map((function(e){return a.a.createElement("li",{className:g.a.trendingListItem,key:e.id},a.a.createElement(m.b,{to:{pathname:"movies/".concat(e.id),state:{id:e.id}}},e.title||e.name))}))))}}]),n}(r.Component),h=n(7),f=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,86))})),b=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,85))})),w=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,84))})),E=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,a.a.createElement("p",null,"Please wait..."))},a.a.createElement(w,null),a.a.createElement(h.d,null,a.a.createElement(h.b,{exact:!0,path:"/",component:d}),a.a.createElement(h.b,{path:"/movies/:movieId",component:f}),a.a.createElement(h.b,{path:"/movies",component:b}),a.a.createElement(h.a,{to:"/"}))))};o.a.render(a.a.createElement(m.a,null,a.a.createElement(E,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ca629798.chunk.js.map