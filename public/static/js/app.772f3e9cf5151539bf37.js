webpackJsonp([1,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var a=n(11),o=i(a),s=n(56),u=i(s),r=n(59),l=i(r),c=n(57),d=i(c),f=n(61),p=i(f),_=n(58),T=i(_),v=n(65),E=i(v),g=n(64),h=i(g);o["default"].use(h["default"]),o["default"].use(E["default"]);var L=new E["default"];L.map({"/home":{component:l["default"]},"/about":{component:function(t){return t(d["default"])}},"/tags":{component:function(t){return t(p["default"])}},"/article/:id":{name:"article",component:function(t){return t(T["default"])}}}),L.redirect({"*":"/home"}),L.start(u["default"],"#app")},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.REQUEST_CONTENT_LIST="REQUEST_CONTENT_LIST",e.GET_CONTENT_LIST="GET_CONTENT_LIST",e.GET_CONTENT_LIST_FAILURE="GET_CONTENT_LIST_FAILURE",e.UPDATE_HEADLINE="UPDATE_HEADLINE",e.GET_HEADLINE="GET_HEADLINE",e.GET_ARTICLE="GET_ARTICLE",e.GET_ARTICLE_FAILURE="GET_ARTICLE_FAILURE",e.CLEAR_ARTICLE="CLEAR_ARTIVLE",e.GET_TAGS="GET_TAGS",e.GET_TAGS_FAILURE="GET_TAGS_FAILURE",e.GET_TAG_CONTENT_LIST="GET_TAG_CONTENT_LIST",e.GET_TAG_CONTENT_LIST_FAILURE="GET_TAG_CONTENT_LIST_FAILURE"},function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.clearTagContentList=e.getTagContentList=e.getTags=e.clearArticle=e.getArticle=e.updateHeadline=e.getHeadline=e.getContentList=void 0;var a=n(1),o=i(a),s=n(12);e.getContentList=function(t){var e=t.dispatch;e(o.REQUEST_CONTENT_LIST),this.$http.get(s.API_ROOT+"api/content-list").then(function(t){e(o.GET_CONTENT_LIST,JSON.parse(t.body))},function(t){e(o.GET_CONTENT_LIST_FAILURE,t)})},e.getHeadline=function(t){var e=t.dispatch;e(o.GET_HEADLINE)},e.updateHeadline=function(t,e){var n=t.dispatch;n(o.UPDATE_HEADLINE,e)},e.getArticle=function(t,e){var n=t.dispatch;this.$http.get(s.API_ROOT+"api/article/"+e).then(function(t){n(o.GET_ARTICLE,JSON.parse(t.body))},function(t){n(o.GET_ARTICLE_FAILURE,t)})},e.clearArticle=function(t){var e=t.dispatch;e(o.CLEAR_ARTICLE)},e.getTags=function(t){var e=t.dispatch;this.$http.get(s.API_ROOT+"api/tags").then(function(t){e(o.GET_TAGS,JSON.parse(t.body))},function(t){e(o.GET_TAGS_FAILURE,t)})},e.getTagContentList=function(t,e){var n=t.dispatch;this.$http.get(s.API_ROOT+"api/tags/"+e).then(function(t){n(o.GET_TAG_CONTENT_LIST,JSON.parse(t.body),e)},function(t){n(o.GET_TAG_CONTENT_LIST_FAILURE,t)})},e.clearTagContentList=function(t){var e=t.dispatch;e(o.CLEAR_TAG_CONTENT_LIST)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.contentList=function(t){var e=t.contentList;return e.contentList},e.headline=function(t){var e=t.headline;return e.headline},e.article=function(t){var e=t.article;return e},e.tags=function(t){var e=t.tags;return e.tagSet},e.tagContentList=function(t){var e=t.tagContentList;return e.tagContentList},e.tagContentListId=function(t){var e=t.tagContentList;return e.tagId}},,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="http://jiangjiu.leanapp.cn/"},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(4),s=i(o),u=n(1),r={content:"",title:""},l=(a={},(0,s["default"])(a,u.GET_ARTICLE,function(t,e){t.content=e.content,t.title=e.title}),(0,s["default"])(a,u.GET_ARTICLE_FAILURE,function(t){return t}),(0,s["default"])(a,u.CLEAR_ARTICLE,function(t){t.content="",t.title=""}),a);e["default"]={state:r,mutations:l}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(4),s=i(o),u=n(1),r={isFetching:!1,contentList:[]},l=(a={},(0,s["default"])(a,u.REQUEST_CONTENT_LIST,function(t){t.isFetching=!0}),(0,s["default"])(a,u.GET_CONTENT_LIST,function(t,e){t.isFetching=!1,t.contentList=e}),(0,s["default"])(a,u.GET_CONTENT_LIST_FAILURE,function(t){t.isFetching=!1}),a);e["default"]={state:r,mutations:l}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(4),s=i(o),u=n(1),r={headline:""},l=(a={},(0,s["default"])(a,u.UPDATE_HEADLINE,function(t,e){t.headline=e}),(0,s["default"])(a,u.GET_HEADLINE,function(t){return t.headline}),a);e["default"]={state:r,mutations:l}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(4),s=i(o),u=n(1),r={tagContentList:[],tagId:""},l=(a={},(0,s["default"])(a,u.GET_TAG_CONTENT_LIST,function(t,e,n){t.tagContentList=e,t.tagId=n}),(0,s["default"])(a,u.GET_TAG_CONTENT_LIST_FAILURE,function(t){return t}),a);e["default"]={state:r,mutations:l}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(4),s=i(o),u=n(1),r={tagSet:[]},l=(a={},(0,s["default"])(a,u.GET_TAGS,function(t,e){t.tagSet=e}),(0,s["default"])(a,u.GET_TAGS_FAILURE,function(t){return t}),a);e["default"]={state:r,mutations:l}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),o=i(a),s=n(66),u=i(s),r=n(14),l=i(r),c=n(15),d=i(c),f=n(13),p=i(f),_=n(17),T=i(_),v=n(16),E=i(v);o["default"].use(u["default"]),o["default"].config.debug=!0;var g=!1;e["default"]=new u["default"].Store({strict:g,modules:{contentList:l["default"],headline:d["default"],article:p["default"],tags:T["default"],tagContentList:E["default"]}})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(63),o=i(a),s=n(62),u=i(s),r=n(18),l=i(r);e["default"]={components:{Vheader:o["default"],Vfooter:u["default"]},store:l["default"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e["default"]={vuex:{actions:{updateHeadline:i.updateHeadline}},created:function(){this.updateHeadline("关于")}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(46),o=i(a),s=n(47),u=i(s);n(38);var r=n(3),l=n(2);o["default"].setOptions({highlight:function(t){return u["default"].highlight(t,u["default"].languages.javascript)}}),e["default"]={vuex:{getters:{article:r.article},actions:{getArticle:l.getArticle,clearArticle:l.clearArticle,updateHeadline:l.updateHeadline}},created:function(){this.getArticle(this.$route.params.id)},beforeDestroy:function(){this.clearArticle()},computed:{content:function(){this.updateHeadline(this.article.title);var t=this.article.content;return(0,o["default"])(t,function(e,n){e||(t=n)}),t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n(2);e["default"]={vuex:{getters:{items:i.contentList},actions:{getList:a.getContentList,updateHeadline:a.updateHeadline}},created:function(){this.getList(),this.updateHeadline("将就的博客")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n(2);e["default"]={data:function(){return{show:!0,finalItems:[]}},vuex:{getters:{items:i.tagContentList,tagId:i.tagContentListId,tags:i.tags},actions:{getTagContentList:a.getTagContentList,updateHeadline:a.updateHeadline,clearTagContentList:a.clearTagContentList}},created:function(){this.getTagContentList(this.tagId)},watch:{items:function(t,e){var n=this;this.show=!1,setTimeout(function(){n.show=!0,n.finalItems=t},400)},tags:function(t){t&&(this.getTagContentList(t[0].objectId),this.updateHeadline(t[0].tagName))}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n(3),s=n(60),u=i(s);e["default"]={components:{TagContentList:u["default"]},data:function(){return{selected:0}},vuex:{getters:{tags:o.tags},actions:{updateHeadline:a.updateHeadline,getTags:a.getTags,getTagContentList:a.getTagContentList}},created:function(){this.getTags()},methods:{update:function(t,e,n){this.selected=t,this.updateHeadline(e),this.getTagContentList(n)},watch:{tags:function(t,e){console.log(e),t&&(this.updateHeadline(t[0].tagName),console.log(2211))}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3);e["default"]={data:function(){return{show:!0,nav:"nav",navFixed:"nav-fixed",isTop:!0,headlineFinal:""}},vuex:{getters:{headline:i.headline}},watch:{headline:function(t,e){var n=this;this.show=!1,setTimeout(function(){n.show=!0,n.headlineFinal=t},400)}},ready:function(){var t=this;window.onscroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;t.isTop=0===e}}}},,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports=" <div id=wrapper> <vheader class=header></vheader> <div class=main> <router-view class=main-wrapper transition=fade transition-mode=out-in></router-view> </div> <vfooter class=footer></vfooter> </div> "},function(t,e){t.exports=' <div class=about-wrapper> <h2 class=list-title>将就</h2> <p>北邮研二 前端工程师 健身爱好者</p> <a href=https://github.com/jiangjiu>Github</a> <a href="http://weibo.com/2900330731/profile?topnav=1&wvr=6&is_all=1">微博</a> </div> '},function(t,e){t.exports=" <div class=article> <div v-html=content>zzz</div> </div> "},function(t,e){t.exports=' <div class=list-wrapper> <ul class=list-container id=list-ul> <li v-for="item in items" transition=fade> <a v-link="{ name: \'article\', params: {id: item.objectId}}"> <p class=list-title>{{item.title}}</p> <p class=list-updated>{{item.createdAt}}</p> <p class=list-abstract>{{item.abstract}}</p> </a> </li> </ul> </div> '},function(t,e){t.exports=' <div class=list-wrapper> <ul class=list-container id=list-ul v-if=show transition=fade> <li v-for="item in finalItems"> <a v-link="{ name: \'article\', params: {id: item.objectId}}"> <p class=list-title>{{item.title}}</p> <p class=list-updated>{{item.createdAt}}</p> <p class=list-abstract>{{item.abstract}}</p> </a> </li> </ul> </div> '},function(t,e){t.exports=' <div> <div class=tagset> <ul> <li v-for="tag in tags"> <a @click="update($index, tag.tagName, tag.objectId)" :class="{\'tagset-active\': $index === selected}"> {{tag.tagName}} </a> </li> </ul> </div> <tag-content-list></tag-content-list> </div> '},function(t,e){t.exports=' <div _v-0d64f75f=""> <p _v-0d64f75f="">Copyrights © 2016 将就. All Rights Reserved.</p> </div> '},function(t,e){t.exports=' <div _v-2e975b51=""> <div class=header-background _v-2e975b51=""></div> <ul :class="[nav, isTop ? \'\' : navFixed]" _v-2e975b51=""> <li _v-2e975b51=""> <a v-link="\'/home\'" _v-2e975b51="">主页</a> </li> <li _v-2e975b51=""> <a v-link="\'/about\'" _v-2e975b51="">关于</a> </li> <li _v-2e975b51=""> <a v-link="\'/tags\'" _v-2e975b51="">标签</a> </li> </ul> <div class=header-title _v-2e975b51=""><h1 v-if=show transition=fade _v-2e975b51="">{{headlineFinal}}</h1></div> </div> '},function(t,e,n){var i,a;n(39),i=n(19),a=n(48),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(40),i=n(20),a=n(49),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(41),i=n(21),a=n(50),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(42),i=n(22),a=n(51),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;i=n(23),a=n(52),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(43),i=n(24),a=n(53),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(44),a=n(54),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,n){var i,a;n(45),i=n(25),a=n(55),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)}]);
//# sourceMappingURL=app.772f3e9cf5151539bf37.js.map