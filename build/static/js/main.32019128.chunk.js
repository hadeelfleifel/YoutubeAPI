(window.webpackJsonpyoutube_player=window.webpackJsonpyoutube_player||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},18:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),c=a.n(r),o=(a(18),a(2)),l=a(3),s=a(7),d=a(5),u=a(6),m=a(4),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={term:""},a.onInputChange=a.onInputChange.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e.target.value}),this.props.onSearchTermChange(e.target.value)}},{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar"},i.a.createElement("input",{value:this.state.term,onChange:this.onInputChange}))}}]),t}(i.a.Component),h=a(12),p=a.n(h),b=function(e){var t=e.video,a=e.onUserSelected,n=t.snippet.thumbnails.default.url;return i.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},i.a.createElement("div",{className:"video-list media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("img",{className:"media-object",src:n})),i.a.createElement("div",{className:"media-body"},i.a.createElement("div",{className:"media-heading"},t.snippet.title))))},f=function(e){var t=e.videos.map(function(t){return i.a.createElement(b,{onUserSelected:e.onVideoSelect,key:t.etag,video:t})});return i.a.createElement("ul",{className:"col-md-4 list-group"},t)},E=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return i.a.createElement("div",{className:"video-detail col-md-8"},i.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},i.a.createElement("iframe",{className:"embed-responsive-item",src:n})),i.a.createElement("div",{className:"details"},i.a.createElement("div",null,t.snippet.title),i.a.createElement("div",null,t.snippet.description)))},g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.videoSearch("React Tutorials"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"videoSearch",value:function(e){var t=this;p()({key:"AIzaSyAtdlqcMN8KkeMPc2rCfHHFVHUsg3gPW28",term:e},function(e){console.log(e),t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(v,{onSearchTermChange:function(t){return e.videoSearch(t)}}),i.a.createElement(E,{video:this.state.selectedVideo}),i.a.createElement(f,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.32019128.chunk.js.map