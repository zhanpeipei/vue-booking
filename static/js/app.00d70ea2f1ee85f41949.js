webpackJsonp([1],{"0edO":function(t,e){},"13pd":function(t,e){},"1TLO":function(t,e){},"6hKq":function(t,e){},CCPp:function(t,e){},JyvQ:function(t,e){},KSp2:function(t,e){},KxO2:function(t,e,o){t.exports=o.p+"static/img/logo.8e43c3f.png"},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};o.d(a,"selectClassId",function(){return Ft}),o.d(a,"selectKeyWord",function(){return $t});var s={};o.d(s,"bookId",function(){return Nt}),o.d(s,"classId",function(){return Pt}),o.d(s,"gender",function(){return Rt}),o.d(s,"end",function(){return Dt}),o.d(s,"chargeType",function(){return Ot}),o.d(s,"page",function(){return At}),o.d(s,"keyword",function(){return zt}),o.d(s,"chapId",function(){return jt});var n=o("7+uW"),i=o("mtWM"),c=o.n(i),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"bottom-nav"},[e("router-link",{staticClass:"bottom-nav-btn",attrs:{tag:"li",to:"/bookshelf"}},[e("i",{staticClass:"icon-shujia icon"}),this._v("\n    书架\n  ")]),this._v(" "),e("router-link",{staticClass:"bottom-nav-btn",attrs:{tag:"li",to:"/bookshop"}},[e("i",{staticClass:"icon-shu icon"}),this._v("\n    书城")])],1)},staticRenderFns:[]};var l={name:"App",components:{Tab:o("VU/8")({name:"tab",created:function(){},data:function(){return{}}},r,!1,function(t){o("t8g7")},"data-v-38ac7d80",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view"),this._v(" "),e("tab")],1)},staticRenderFns:[]};var u=o("VU/8")(l,d,!1,function(t){o("0edO")},null,null).exports,h=o("/ocq"),p=o("Dd8w"),m=o.n(p),v=o("mvHQ"),f=o.n(v),_=o("pFYg"),g=o.n(_);function k(){return((new Date).getTime()+"").substring(0,10)}var b=window.localStorage,C="rd_books",I="liangdu";function w(t,e){var o=JSON.parse(b.getItem(C))||[];return"object"===(void 0===t?"undefined":g()(t)).toLowerCase()?(o.some(function(e){return e.id==t.id})&&(o=o.filter(function(e){return e.id!=t.id})),o.push(t),void b.setItem(C,f()(o))):"string"===(void 0===t?"undefined":g()(t)).toLowerCase()&&e?(o.forEach(function(o){o.id==t&&(o.cid=e,o.time=k())}),void b.setItem(C,f()(o))):void 0}function y(t){var e=JSON.parse(b.getItem(C))||[];return e=e.some(function(e){return e.id==t})}function S(t){var e=JSON.parse(b.getItem(C))||[];return void 0!=t&&(e=e.filter(function(e){return e.id==t})[0]),e}function T(){return JSON.parse(b.getItem(I))||"0"}function E(){return JSON.parse(b.getItem("fontsize"))||"18"}var x=o("NYxO"),L={name:"shelf",created:function(){this._getBooks()},methods:m()({deleteBookE:function(t){var e,o;e=t,o=JSON.parse(b.getItem(C))||[],console.log(o,e),o=o.filter(function(t){return t.cid!=e}),b.setItem(C,f()(o)),this.readyDelete="",this._getBooks()},deleteBook:function(t){t=t||window.event;var e=parseInt(t.timeStamp-this.timeStamp),o=t.target||t.srcElement;this.readyDelete=e>700?o.dataset.cid:"",console.log(this.readyDelete,0,o.dataset.cid)},noteStart:function(t){this.timeStamp=t.timeStamp},toReader:function(t,e){console.log(1),this.set_bookid(t),this.set_chapid(e),this.$router.push({path:"/bookreader/"+e})},toShop:function(){this.$router.push({path:"/bookshop"})},_getBooks:function(){var t=S();if(t)return t.sort(function(t,e){return e.time-t.time}),void(this.books=t);this.books=[{cover:"",title:"",cid:""}]}},Object(x.d)({set_bookid:"SET_BOOKID",set_chapid:"SET_CHAPID"})),watch:{bookId:function(t,e){this._getBooks()}},computed:m()({},Object(x.c)(["bookId"])),data:function(){return{books:[],readyDelete:"",timeStamp:0}}},B={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"shelf"},[o("div",{staticClass:"shelf-top"},[t.books[0]?o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.books[0].cover,expression:"books[0].cover"}],staticClass:"newest-book-img"}):t._e(),t._v(" "),t.books[0]?o("h3",{staticClass:"newest-book-title"},[t._v(t._s(t.books[0].title))]):t._e(),t._v(" "),t.books[0]?o("span",{staticClass:"newest-book-action"},[t._v("继续阅读")]):t._e()]),t._v(" "),o("ul",{staticClass:"book-list"},[t._l(t.books,function(e){return o("li",{staticClass:"book-list-item"},[o("div",{staticClass:"book-display",on:{touchstart:function(e){return e.stopPropagation(),t.noteStart(e)},touchend:function(e){return e.stopPropagation(),t.deleteBook(e)}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"book.cover"}],staticClass:"book-list-item-img"}),t._v(" "),o("div",{staticClass:"img-mask",attrs:{"data-cid":e.cid},on:{click:function(o){t.toReader(e.id,e.cid)}}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.readyDelete==e.cid,expression:"readyDelete==book.cid"}],staticClass:"book-list-item-delete",on:{click:function(t){t.stopPropagation()}}},[o("i",{staticClass:"icon-unredo icon",on:{click:function(e){e.stopPropagation(),t.readyDelete=""}}}),t._v(" "),o("i",{staticClass:"icon-remove-1-copy icon",on:{click:function(o){o.stopPropagation(),t.deleteBookE(e.cid)}}})]),t._v(" "),o("h4",{staticClass:"book-list-item-title"},[t._v(t._s(e.title))])])}),t._v(" "),o("li",{staticClass:"book-list-item book-list-item-display",on:{click:t.toShop}},[o("i",{staticClass:"icon-jia"})])],2)])},staticRenderFns:[]};var F=o("VU/8")(L,B,!1,function(t){o("Uonz")},"data-v-46720f0a",null).exports,$=(o("v2ns"),o("7QTg")),N={name:"swi",components:{swiper:$.swiper,swiperSlide:$.swiperSlide},methods:m()({selectBookId:function(t){this.set_bookId(t),this.$router.push({path:"/bookintro/"+t})}},Object(x.d)({set_bookId:"SET_BOOKID"})),props:{needIntro:{type:Boolean,default:!1},newClass:{type:String,default:""},sliders:{type:Array,default:function(){return[{cover:""}]}},options:{type:Object,default:function(){return{lazy:!1,autoplay:!1,direction:"horizontal",loop:!0,effet:"slide",slidesPerView:1,coverflowEffect:{rotate:0,stretch:10,depth:60,modifier:2,slideShadows:!0},spaceBetween:0,pagination:{el:".sweper-pagination"}}}}},data:function(){return{}}},P={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("swiper",{class:t.newClass,attrs:{options:t.options}},[t._l(t.sliders,function(e){return o("swiper-slide",{key:e.id},[o("div",{staticClass:"swiper-slide-href",on:{click:function(o){t.selectBookId(e.id)}}},[o("div",{staticClass:"swiper-slide-wrap"},[o("img",{staticClass:"swiper-slide-href-img",attrs:{src:e.cover}})]),t._v(" "),t.needIntro?o("h3",{staticClass:"swiper-slide-title"},[t._v(t._s(e.book))]):t._e(),t._v(" "),t.needIntro?o("p",{staticClass:"swiper-slide-author"},[t._v(t._s(e.author))]):t._e()])])}),t._v(" "),t.options.pagination?o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)},staticRenderFns:[]};var R=o("VU/8")(N,P,!1,function(t){o("13pd")},"data-v-a605aaa6",null).exports,D={name:"panel",components:{Swiper:R},props:{title:{type:String,default:""},datas:{type:Array,default:function(){return[]}}},data:function(){return{options:{slidesPerView:2.6,spaceBetween:20},needIntro:!0,newClass:"panel-content"}}},O={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"panel"},[o("h3",{staticClass:"panel-title"},[t._v(t._s(t.title))]),t._v(" "),o("swiper",{attrs:{sliders:t.datas,needIntro:t.needIntro,options:t.options,newClass:t.newClass}})],1)},staticRenderFns:[]};var A=o("VU/8")(D,O,!1,function(t){o("JyvQ")},"data-v-50d4cde6",null).exports,z={name:"search",computed:m()({},Object(x.c)(["keyword"])),methods:m()({search:function(){this.selectKeyWord({keyword:""+this.searchText}),this.$router.push({path:"/booksearch/"+encodeURIComponent(this.searchText)})}},Object(x.b)({selectKeyWord:"selectKeyWord"})),data:function(){return{searchText:"",toSearch:!1}}},j={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-form"},[o("i",{staticClass:"icon-fangdajing",on:{click:function(e){t.toSearch=!t.toSearch}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search-text",class:{active:!t.toSearch},attrs:{type:"text"},domProps:{value:t.searchText},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])},staticRenderFns:[]};var M=o("VU/8")(z,j,!1,function(t){o("KSp2")},"data-v-13610ac8",null).exports,q={name:"sort",methods:m()({link:function(t){this.selectClassId(t),this.$router.push("/booksort/"+t)}},Object(x.b)({selectClassId:"selectClassId"})),props:{datas:{types:Array,default:function(){return[{name:"",num:"",id:""}]}}},data:function(){return{}}},U={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",t._l(t.datas,function(e){return o("li",{key:e.id,staticClass:"sort-item",on:{click:function(o){t.link(e.id)}}},[o("h4",{staticClass:"sort-item-name"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"sort-item-num"},[t._v("("+t._s(e.num)+")")])])}))},staticRenderFns:[]};var H=o("VU/8")(q,U,!1,function(t){o("n6TU")},"data-v-1e6fad98",null).exports,K=o("NC6I"),V=o.n(K),G="aaf50af46621010e7fbeda2b1fe8ef8e",W="f2850e634f85f485d719314ae3cfe252";function J(){var t=k(),e=new FormData;return e.append("moduleIds","6"),e.append("timestamp",t),e.append("sign",V()("6"+t+G)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",e)}var Y=o("Zrlr"),Q=o.n(Y),Z=function t(e){var o=e.cover,a=e.author,s=e.book,n=e.intro,i=e.id;Q()(this,t),this.cover=o,this.author=a,this.book=s,this.intro=n,this.id=i};function X(t){return new Z({cover:t.cover,author:t.author_name,book:t.book_name,intro:t.intro,id:t.bid})}var tt=function t(e){var o=e.cover,a=e.author,s=e.book_name,n=e.newChapName,i=e.size,c=e.end,r=e.up_time,l=e.id,d=e.class_name;Q()(this,t),this.cover=o,this.author=a,this.book_name=s,this.newChapName=n,this.id=l,this.end=c,this.size=i,this.up_time=r,this.class_name=d};function et(t){return new tt({cover:t.cover,author:t.author_name,book_name:t.book_name,newChapName:t.newChapName,id:t.bid,end:t.end,class_name:t.class_name,size:t.size,up_time:t.up_time})}var ot={name:"book-shop",components:{Swiper:R,Panel:A,Sort:H,Search:M},created:function(){},mounted:function(){this._getSliders(),this._getModules(),this._getSort()},methods:{_getSliders:function(){var t,e,o=this;(t=new FormData,e=k(),t.append("moduleIds",1),t.append("timestamp",e),t.append("sign",V()(1+e+G)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",t)).then(function(t){200==t.status&&t.data.data.module1.forEach(function(t){o.sliderData.push(X(t))})})},_getModules:function(){var t,e,o=this;(t=k(),e=new FormData,e.append("moduleIds","3,5,4,2"),e.append("timestamp",t),e.append("sign",V()("3,5,4,2"+t+G)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",e)).then(function(t){if(200==t.status){var e=t.data.data;e.module2.forEach(function(t,a){o.moduleMan.push(X(t)),o.moduleFeman.push(X(e.module3[a])),o.moduleRecommend.push(X(e.module4[a])),o.modulePlusRecommend.push(X(e.module5[a]))})}})},_getSort:function(){var t=this;J().then(function(e){if(200==e.status){var o=e.data.show.module6.class_data;for(var a in o)if(o.hasOwnProperty(a)){var s=[];s.id=a,s.name=o[a].name,s.num=o[a].num,t.sort.push(s),s=null}}})}},data:function(){return{topSliderNeedIntro:!1,options:{effect:"coverflow",loop:!0,slidesPerView:2.8,spaceBetween:50,coverflowEffect:{rotate:0,stretch:2,depth:90,modifier:2,slideShadows:!0}},sliderData:[],moduleManTitle:"男频榜单",moduleFemanTitle:"女频榜单",moduleRecommendTitle:"分类推荐榜",modulePlusRecommendTitle:"强力推荐榜",moduleMan:[],moduleFeman:[],moduleRecommend:[],modulePlusRecommend:[],sliderClassName:"book-shop-top-sliders",sort:[]}}},at={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-shop"},[o("search"),t._v(" "),o("swiper",{staticClass:"top-slider",attrs:{options:t.options,needIntro:t.topSliderNeedIntro,sliders:t.sliderData,newClass:t.sliderClassName}}),t._v(" "),o("panel",{attrs:{datas:t.moduleMan,title:t.moduleManTitle}}),t._v(" "),o("panel",{attrs:{datas:t.moduleFeman,title:t.moduleFemanTitle}}),t._v(" "),o("panel",{attrs:{datas:t.moduleRecommend,title:t.moduleRecommendTitle}}),t._v(" "),o("panel",{attrs:{datas:t.modulePlusRecommend,title:t.modulePlusRecommendTitle}}),t._v(" "),o("sort",{attrs:{datas:t.sort}})],1)},staticRenderFns:[]};var st=o("VU/8")(ot,at,!1,function(t){o("puLK")},"data-v-25f7414a",null).exports,nt={name:"loading",props:{isLoading:{type:Number,default:0}},data:function(){return{}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[0==this.isLoading?e("div",{staticClass:"loader"},[this._v("Loading...")]):1==this.isLoading?e("div",{staticClass:"loaded"},[this._v("已经加载完毕")]):e("div",{staticClass:"no-fiction"},[this._v("没有满足条件的小说")])])},staticRenderFns:[]};var ct=o("VU/8")(nt,it,!1,function(t){o("juNV")},"data-v-e11343a2",null).exports,rt={name:"bookList",props:{datas:{type:Array,default:function(){return[]}}},methods:m()({setBookId:function(t){this.set_bookId(t),this.$router.push({path:"/bookintro/"+t})}},Object(x.d)({set_bookId:"SET_BOOKID"})),data:function(){return{}}},lt={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"books"},t._l(t.datas,function(e){return o("li",{key:e.book_name,staticClass:"books-item",on:{click:function(o){t.setBookId(e.id)}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"book.cover"}]}),t._v(" "),o("h3",{domProps:{innerHTML:t._s(e.book_name)}}),t._v(" "),o("h4",[t._v("作者:"+t._s(e.author))]),t._v(" "),o("div",{staticClass:"intro"},[o("p",[t._v(t._s(e.class_name)+"/"+t._s(1==e.end?"连载中":"完结")+"/"+t._s(e.size)+"字")]),t._v(" "),o("p",[t._v("最新章节:"+t._s(e.newChapName))]),t._v(" "),o("p",[t._v("更新时间:"+t._s(e.up_time))])])])}))},staticRenderFns:[]};var dt=o("VU/8")(rt,lt,!1,function(t){o("gybG")},"data-v-376ccee5",null).exports,ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"back"},[e("i",{staticClass:"icon-fanhui",on:{click:this.comeback}})])},staticRenderFns:[]};var ht=o("VU/8")({name:"back",methods:{comeback:function(){this.$router.back()}},data:function(){return{}}},ut,!1,function(t){o("loPT")},"data-v-4a068b88",null).exports;var pt={name:"book-sort",components:{Loading:ct,BookList:dt,Back:ht},created:function(){},mounted:function(){this._getSort(),this._getBookList()},computed:m()({},Object(x.c)(["classId","gender","end","page","chargeType","keyword"])),methods:m()({toTop:function(){var t=this,e=this.$refs.bookSort.scrollTop,o=setInterval(function(){e-40<0?(e=0,clearInterval(o)):e-=40,t.$refs.bookSort.scrollTo(0,e)},20)},downloadMore:function(){var t=this;if(this.on){var e=this.$refs.bookSort,o=e.offsetHeight,a=e.scrollHeight,s=e.scrollTop;this.isLong=o<=s,o+s>=a&&(this.on=!1,this.set_page(this.page+1),this._getBookList(),this.timer=setTimeout(function(){clearTimeout(t.timer),t.on=!0},3e3))}},selectGender:function(t){this.set_gender(t),this.set_page(1),this._getBookList()},selectType:function(t){this.set_classId(t),this.set_page(1),this._getBookList()},selectEnd:function(t){this.set_end(t),this.set_page(1),this._getBookList()},selectChargeType:function(t){this.set_chargeType(t),this.set_page(1),this._getBookList()},_getSort:function(){var t=this;J().then(function(e){if(200==e.status){var o=e.data.show.module6.class_data;for(var a in o)if(o.hasOwnProperty(a)){var s=[];s.id=a,s.name=o[a].name,s.num=o[a].num,t.types.push(s),s=null}}})},_getBookList:function(){var t,e,o,a,s,n,i,r,l,d=this;(t=this.page,e=this.pageSize,o=this.classId,a=this.gender,s=this.end,n=this.chargeType,i=this.keyword,r=new FormData,l=k(),r.append("page",t),r.append("pageSize",e),r.append("timestamp",l),r.append("classId",o),r.append("end",1),r.append("gender",a),r.append("end",s),r.append("chargeType",n),r.append("keyword",i),r.append("sign",V()(t+""+e+l+W)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/librarysearch",r)).then(function(t){if(200==t.status&&401==t.data.state)return d.isLoading=2,void(d.books=[]);1==d.page&&(d.books=[]);var e=t.data.data;d.isLoading=d.page*d.pageSize>=t.data.total?1:0,e.forEach(function(t){d.books.push(et(t))})})}},Object(x.d)({set_classId:"SET_CLASSID",set_end:"SET_END",set_chargeType:"SET_CHARGETYPE",set_gender:"SET_GENDER",set_page:"SET_PAGE"})),data:function(){return{types:[{id:"",name:"全部",num:0}],bookList:[],pageSize:18,books:[],isLong:!1,timer:null,on:!0,isLoading:0}}},mt={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"translate"}},[o("div",{ref:"bookSort",staticClass:"book-sort",on:{scroll:t.downloadMore}},[o("router-view"),t._v(" "),o("back"),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:t.isLong,expression:"isLong"}],staticClass:"icon-huidingbu",on:{click:t.toTop}}),t._v(" "),o("ul",[o("li",{staticClass:"book-sort-select"},[o("span",{class:{active:0==t.gender},on:{click:function(e){t.selectGender(0)}}},[t._v("全部")]),t._v(" "),o("span",{class:{active:1==t.gender},on:{click:function(e){t.selectGender(1)}}},[t._v("男频")]),t._v(" "),o("span",{class:{active:2==t.gender},on:{click:function(e){t.selectGender(2)}}},[t._v("女频")])]),t._v(" "),o("li",{staticClass:"book-sort-select"},t._l(t.types,function(e){return o("span",{class:{active:e.id==t.classId},on:{click:function(o){t.selectType(e.id)}}},[t._v(t._s(e.name))])})),t._v(" "),o("li",{staticClass:"book-sort-select"},[o("span",{class:{active:0==t.end},on:{click:function(e){t.selectEnd(0)}}},[t._v("全部")]),t._v(" "),o("span",{class:{active:1==t.end},on:{click:function(e){t.selectEnd(1)}}},[t._v("连载")]),t._v(" "),o("span",{class:{active:2==t.end},on:{click:function(e){t.selectEnd(2)}}},[t._v("完结")])]),t._v(" "),o("li",{staticClass:"book-sort-select"},[o("span",{class:{active:0==t.chargeType},on:{click:function(e){t.selectChargeType(0)}}},[t._v("全部")]),t._v(" "),o("span",{class:{active:1==t.chargeType},on:{click:function(e){t.selectChargeType(1)}}},[t._v("免费")]),t._v(" "),o("span",{class:{active:2==t.chargeType},on:{click:function(e){t.selectChargeType(2)}}},[t._v("收费")])])]),t._v(" "),o("book-list",{attrs:{datas:t.books}}),t._v(" "),o("loading",{attrs:{isLoading:t.isLoading}})],1)])},staticRenderFns:[]};var vt=o("VU/8")(pt,mt,!1,function(t){o("SmWu")},"data-v-06cfb68d",null).exports;o("//Fk"),o("hU7x");function ft(t){var e="";for(var o in t){if(t.hasOwnProperty(o))e+="&"+o+"="+(void 0==t[o]?"":t[o])}return e.substring(1)}function _t(t){var e=new FormData,o=k();return e.append("bid",t),e.append("timestamp",o),e.append("sign",V()(t+o+W)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/volumechapterlist",e)}var gt={name:"reader",created:function(){this.bookId||this.$router.back()},mounted:function(){this._getChap(),this._getCatalog();var t=T();this.domAction(t),this.chooseFont(),this.changeFontSize(),this.changeTheme()},methods:m()({lookMoreComments:function(){this.commentPage++,this._getComment()},_getComment:function(){var t=this;(function(t,e){var o="https://read.xiaoshuo1-sm.com/novel/i.php",a={do:"sp_get",authorId:t,bookId:e,fetch:"merge",source:"store",sqUid:8e6,page:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0};return a=ft(a),o+=o.indexOf("?")>0?a:"?"+a,c.a.get(o)})(this.sqAuthorId,this.sqBid,this.commentPage).then(function(e){if(200==e.status){var o=e.data.data;t.totalCommentNum=e.data.info.total,t.comments=t.comments.concat(o)}})},toBookShelf:function(){this.$router.push({path:"/bookshelf"})},toBookIntro:function(){this.$router.push({path:"/bookIntro/"+this.bookId})},chooseFont:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(b.getItem("fontfamily"))||"0";this.$refs.content.style.fontFamily=this.fontFamilyset[e].family,this.fontFamilyIndex=e,t=e,b.setItem("fontfamily",t)},changeFontSize:function(t){var e;t=(t=void 0==t?E():t+parseInt(E()))<12?12:t>40?40:t,this.$refs.content.style.fontSize=t/100+"rem",this.fontSize=t,e=t,b.setItem("fontsize",e)},changeTheme:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(b.getItem("theme"))||"0";this.$refs.bg.style.background=this.colorset[e].bg,this.$refs.content.style.color=this.colorset[e].color,this.bgIndex=e,t=e,b.setItem("theme",t)},toChapId:function(t,e){this.index=e,this.set_chapId(t),this._getChap(),this.active=0,w(this.bookId,t),this.$refs.reader.scrollTop=0},back:function(){this.$router.back()},domAction:function(t){var e=this.$refs.ldBg.offsetWidth;this.$refs.ldLine.style.width=t/.3*e+"px",this.$refs.mask.style.opacity=t},changePage:function(t){if(this.index=this.index+t,this.index<0)this.index=0;else if(this.index>=this.catalog.length)this.index=this.catalog.length-1;else{var e=this.catalog[this.index].chapid;this.set_chapId(e),this._getChap(),w(this.bookId,e),this.$refs.reader.scrollTop=0}},_getChap:function(){var t,e,o,a,s=this;(t=this.bookId,e=this.chapId,o=new FormData,a=k(),o.append("bid",t),o.append("chapid",e),o.append("timestamp",a),o.append("sign",V()(t+e+a+W)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/chaptercontent",o)).then(function(t){if(200==t.status){if(402==t.data.state)return void(s.content="这个章节要钱啊");t.data||s.back();var e=t.data.data.content;e="<p>"+(e=(e=(e=e.replace(/#+/g,"。")).replace(/\n/g,"</p><p>")).slice(0,-1))+"</p>",s.content=e,w(s.bookId,s.chapId)}})},_getCatalog:function(){var t=this;_t(this.bookId).then(function(e){if(200==e.status){t.catalog=[],t.comments=[],t.commentPage=1,t.book_name=e.data.main.book_name,t.sqAuthorId=e.data.main.sqAuthorId,t.sqBid=e.data.main.sqBid,t._getComment();var o=e.data.data;o&&o.forEach(function(e){e.volumeList.chapters.forEach(function(e,o){t.chapId==e.chapid&&(t.index=o),e.chap_name=e.chap_name.replace(/\s+/g,""),t.catalog=t.catalog.concat(e)})})}})},select:function(){0==this.active?this.active=1:this.active=0},changeActive:function(t){this.active=t,this.$refs.mask.style.opacity=T(),this.$refs.cata.scrollTop=this.$refs.cataItems[this.index].offsetTop},changeLD:function(t){var e,o=this.$refs.ldBg.offsetWidth,a=(t.clientX-this.$refs.ldBg.offsetLeft)/o*.3;this.domAction(a),e=a,b.setItem(I,e)}},Object(x.d)({set_chapId:"SET_CHAPID"}),{sortCatalog:function(){this.cataSort=!this.cataSort,this.catalog=this.catalog.reverse()}}),computed:m()({commentLoaded:function(){return 10*this.commentPage>=this.totalCommentNum},catalogLength:function(){return this.catalog.length},sortClass:function(){return this.cataSort?"icon-paixu-sheng":"icon-paixu-jiang"}},Object(x.c)(["chapId","bookId"])),data:function(){return{isLookMore:!1,content:"",catalog:[],beginCatalog:"",book_name:"",active:0,index:0,sqAuthorId:"",sqBid:"",totalCommentNum:"",commentPage:"",comments:[],fontSize:18,colorset:[{color:"#333",bg:"#FDF6EE"},{color:"#15695E",bg:"#A9EED6"},{color:"#5F526A",bg:"#E4C8F6"},{color:"#52606C",bg:"#CCEFFE"},{color:"#424242",bg:"#FFF"},{color:"#737C55",bg:"#F5FFB3"},{color:"#675555",bg:"#FDD9D9"},{color:"#254D50",bg:"url(./static/bg-theme.jpg)"},{color:"#1E573C",bg:"url(./static/bg-theme2)"}],fontFamilyset:[{family:"Microsoft YaHei",text:"默认字体"},{family:"SimHei",text:"黑体"},{family:"KaiTi",text:"楷体"},{family:"YouYuan",text:"幼圆"},{family:"FZShuTi",text:"方正舒体"},{family:"SThupo",text:"华文琥珀"}],bgIndex:0,fontFamilyIndex:0,cataSort:!0}}},kt={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"reader",staticClass:"reader"},[o("div",{staticClass:"reader-top",class:{active:1==t.active}},[o("i",{staticClass:"icon-fanhui",on:{click:t.back}}),t._v(" "),o("div",{staticClass:"reader-top-more"},[o("i",{staticClass:"icon-gengduo-tianchong",on:{click:function(e){t.isLookMore=!t.isLookMore}}}),t._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:t.isLookMore,expression:"isLookMore"}],staticClass:"more-nav"},[o("li",{staticClass:"more-nav-item",on:{click:t.toBookShelf}},[o("i",{staticClass:"icon-shujia"}),t._v("去书架")]),t._v(" "),o("li",{staticClass:"more-nav-item",on:{click:t.toBookIntro}},[o("i",{staticClass:"icon-book_icon"}),t._v("书籍详情")]),t._v(" "),t._m(0)])])]),t._v(" "),o("div",{ref:"bg",staticClass:"bg"}),t._v(" "),o("div",{ref:"mask",staticClass:"mask"}),t._v(" "),o("div",{staticClass:"click-mask",on:{click:t.select}}),t._v(" "),t.content?t._e():o("p",{staticClass:"waite"},[t._v("正在加载中...请稍等...")]),t._v(" "),o("div",{ref:"content",staticClass:"content",domProps:{innerHTML:t._s(t.content)},on:{click:t.select}}),t._v(" "),o("div",{staticClass:"page-btn"},[o("span",{staticClass:"page-btn-prev",class:{wrong:0==t.index},on:{click:function(e){t.changePage(-1)}}},[t._v("上一章")]),t._v(" "),o("span",{staticClass:"page-btn-next",class:{wrong:t.index>=t.catalog.length-1},on:{click:function(e){t.changePage(1)}}},[t._v("下一章")])]),t._v(" "),o("div",{staticClass:"reader-bottom"},[o("ul",{staticClass:"reader-bottom-nav",class:{active:1==t.active}},[o("li",{staticClass:"reader-bottom-nav-item",on:{click:function(e){t.changeActive(2)}}},[o("i",{staticClass:"icon-sort"}),t._v("目录")]),t._v(" "),o("li",{staticClass:"reader-bottom-nav-item",on:{click:function(e){t.changeActive(3)}}},[o("i",{staticClass:"icon-liangdu"}),t._v("亮度")]),t._v(" "),o("li",{staticClass:"reader-bottom-nav-item",on:{click:function(e){t.changeActive(4)}}},[o("i",{staticClass:"icon-shezhi"}),t._v("设置")]),t._v(" "),o("li",{staticClass:"reader-bottom-nav-item",on:{click:function(e){t.changeActive(5)}}},[o("i",{staticClass:"icon-pinglun"}),o("span",{staticClass:"comment-num"},[t._v(t._s(t.totalCommentNum))]),t._v("评论")])]),t._v(" "),o("ul",{staticClass:"reader-bottom-content"},[o("li",{ref:"cata",staticClass:"reader-bottom-content-cata",class:{active:2==t.active}},[o("div",{staticClass:"reader-bottom-content-cata-title"},[o("h3",{staticClass:"title"},[t._v(t._s(t.book_name))]),t._v(" "),o("h4",{staticClass:"catalog-num"},[t._v("共"+t._s(t.catalogLength)+"章")]),t._v(" "),o("p",{staticClass:"catalog-sort-set"},[o("i",{staticClass:"icon-sort",class:t.sortClass,on:{click:t.sortCatalog}})])]),t._v(" "),o("ul",{staticClass:"catalog-list-wrap"},t._l(t.catalog,function(e,a){return o("li",{key:e.chapid,ref:"cataItems",refInFor:!0,staticClass:"catalog-list",class:{active:e.chapid==t.chapId},on:{click:function(o){t.toChapId(e.chapid,a)}}},[t._v("\n            "+t._s(e.chap_name)+"\n            "),1==e.isVip?o("i",{staticClass:"icon-qiandai"}):t._e()])}))]),t._v(" "),o("li",{staticClass:"reader-bottom-content-sun",class:{active:3==t.active}},[o("i",{staticClass:"icon-liangdu icon-l"}),t._v(" "),o("i",{staticClass:"icon-liangdu icon-r"}),t._v(" "),o("div",{ref:"ldBg",staticClass:"ld-line",on:{click:t.changeLD}},[o("p",{ref:"ldLine",staticClass:"ld-adjust"})])]),t._v(" "),o("li",{staticClass:"reader-bottom-content-set",class:{active:4==t.active}},[o("div",{staticClass:"font-size sets"},[o("h5",{staticClass:"title"},[t._v("字号")]),t._v(" "),o("div",{staticClass:"font-size-set sets-item"},[o("p",[o("i",{staticClass:"icon-53 icon-num",on:{click:function(e){t.changeFontSize(-2)}}}),t._v(" "),o("span",{staticClass:"font-size-num"},[t._v(t._s(t.fontSize))]),t._v(" "),o("i",{staticClass:"icon-jia2 icon-num",on:{click:function(e){t.changeFontSize(2)}}})])])]),t._v(" "),o("div",{staticClass:"font-family sets"},[o("h5",{staticClass:"title"},[t._v("字体")]),t._v(" "),o("div",{staticClass:"sets-item font-family-set"},[o("p",t._l(t.fontFamilyset,function(e,a){return o("span",{class:{active:a==t.fontFamilyIndex},style:{fontFamily:e.family},on:{click:function(e){t.chooseFont(a)}}},[t._v(t._s(e.text))])}))])]),t._v(" "),o("div",{staticClass:"theme-color sets"},[o("h5",{staticClass:"title"},[t._v("主题")]),t._v(" "),o("div",{staticClass:"theme-color-set sets-item"},[o("p",t._l(t.colorset,function(e,a){return o("span",{key:e.color,staticClass:"color-set",class:{active:a==t.bgIndex},style:{background:e.bg},on:{click:function(e){t.changeTheme(a)}}})}))])])]),t._v(" "),o("li",{staticClass:"reader-bottom-content-comment",class:{active:5==t.active}},[o("ul",[t._l(t.comments,function(e,a){return o("li",{key:a},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.userPhoto,expression:"comment.userPhoto"}]}),t._v(" "),o("h5",[t._v(t._s(e.nickName))]),t._v(" "),o("p",[t._v(t._s(e.text))])])}),t._v(" "),t.commentLoaded?o("li",[t._v("已加载完毕...")]):o("li",{staticClass:"download-comments",on:{click:t.lookMoreComments}},[t._v("\n            继续加载请点击...\n          ")])],2)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"more-nav-item"},[e("i",{staticClass:"icon-fenxiang"}),this._v("分享此书")])}]};var bt=o("VU/8")(gt,kt,!1,function(t){o("6hKq")},null,null).exports;var Ct={name:"search",components:{BookList:dt,Loading:ct,Back:ht,Search:M},created:function(){this._getBookSearchList()},methods:m()({toTop:function(){var t=this,e=this.$refs.bookSort.scrollTop,o=setInterval(function(){e-40<0?(e=0,clearInterval(o)):e-=40,t.$refs.bookSort.scrollTo(0,e)},20)},_getBookSearchList:function(){var t,e,o,a,s,n,i,r,l,d=this;(t=this.page,e=this.pageSize,o=this.classId,a=this.gender,s=this.end,n=this.chargeType,i=this.keyword,r=new FormData,l=k(),r.append("page",t),r.append("pageSize",e),r.append("timestamp",l),r.append("classId",o),r.append("end",s),r.append("gender",a),r.append("chargeType",n),r.append("keyword",i),r.append("sign",V()(i+l+W)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/search",r)).then(function(t){if(200!=t.status||403!=t.data.state){1==d.page&&(d.books=[]);var e=t.data.data;d.isLoading=d.page*d.pageSize>=t.data.total?1:0,e.forEach(function(t){t.book_name=t.book_name.replace(new RegExp(d.keyword,"g"),function(){return'<span style="color:#eb634b">'+(arguments.length<=0?void 0:arguments[0])+"</span>"}),d.books.push(et(t))})}else d.isLoading=1})},downloadMore:function(){var t=this;if(this.on){var e=this.$refs.book,o=e.offsetHeight,a=e.scrollHeight,s=e.scrollTop;this.isLong=o<=s,o+s>=a&&(this.on=!1,this.set_page(this.page+1),this._getBookSearchList(),this.timer=setTimeout(function(){clearTimeout(t.timer),t.on=!0},3e3))}}},Object(x.d)({set_page:"SET_PAGE"})),computed:m()({},Object(x.c)(["page","classId","gender","end","chargeType","keyword"])),data:function(){return{books:[],isLoading:0,pageSize:9,isLong:!1,on:!0}}},It={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"translate"}},[o("div",{ref:"book",staticClass:"book-search",on:{scroll:t.downloadMore}},[o("router-view"),t._v(" "),o("back"),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:t.isLong,expression:"isLong"}],staticClass:"icon-fanhuidingbu",on:{click:t.toTop}}),t._v(" "),o("book-list",{attrs:{datas:t.books}}),t._v(" "),o("loading",{attrs:{isLoading:t.isLoading}})],1)])},staticRenderFns:[]};var wt=o("VU/8")(Ct,It,!1,function(t){o("1TLO")},"data-v-1ce6422c",null).exports,yt={name:"catalog",created:function(){this._getCatalog()},mounted:function(){},methods:m()({loadMore:function(){this.onePageC=this.onePageC.concat(this.catalog.slice(20*this.page,20*(this.page+1))),this.page++},_getCatalog:function(){var t=this;_t(this.bookId).then(function(e){200==e.status&&(t.catalog=[],t.page=1,e.data.data.forEach(function(e){e.volumeList.chapters.forEach(function(e){e.chap_name=e.chap_name.replace(/\s/g,""),t.catalog=t.catalog.concat(e)})}),t.onePageC=t.catalog.length>20?t.catalog.slice(0,20):t.catalog)})},toReader:function(t){this.$emit("startRead",t.chapid)}},Object(x.d)({set_chapId:"SET_CHAPID",set_bookId:"SET_BOOKID"})),computed:m()({isAll:function(){return Math.ceil(this.catalog.length/20)-this.page>0}},Object(x.c)(["bookId"])),data:function(){return{catalog:[],onePageC:[],page:1}}},St={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[t._l(t.onePageC,function(e){return o("li",{staticClass:"cata-list",on:{click:function(o){t.toReader(e)}}},[t._v("\n    "+t._s(e.chap_name)+"\n  ")])}),t._v(" "),t.isAll?o("li",{staticClass:"load-more",on:{click:t.loadMore}},[t._v("继续加载...")]):o("li",{staticClass:"load-more"},[t._v("加载完毕")])],2)},staticRenderFns:[]};var Tt={name:"book-intro",components:{Catalog:o("VU/8")(yt,St,!1,function(t){o("CCPp")},"data-v-8570bb3c",null).exports},created:function(){this.bookId||this.toBack()},mounted:function(){this._getBookIntro(),this._inits()},methods:m()({_inits:function(){if(y(this.bookId))return this.btnL="已添加",void(this.btnR="继续阅读");this.btnL="加入书架",this.btnR="开始阅读"},_addBook:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.firstChapid,e={};e.id=this.id,e.title=this.book_name,e.cid=t,e.cover=this.cover,e.end=this.end,e.newc=this.newChapName,e.time=k(),e.yidu=this.firstChapid,w(e),this.set_chapId(t),this._inits()},addBookToShelf:function(){y(this.bookId)||this._addBook()},startRead:function(){if(!y(this.bookId))return this._addBook(),void this.$router.push({path:"/bookreader/"+this.bookId});this.set_chapId(S(this.bookId).cid),this.$router.push({path:"/bookreader/"+this.bookId})},toRead:function(t){this._addBook(t),this.$router.push({path:"/bookreader/"+this.bookId})},toBack:function(){this.$router.back()},_getBookIntro:function(){var t,e,o,a=this;(t=this.bookId,e=new FormData,o=k(),e.append("bid",t),e.append("timestamp",o),e.append("sign",V()(t+o+W)),c.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/bookinfo",e)).then(function(t){if(200===t.status){var e=t.data.data,o=t.data.like;a.author_name=e.author_name,a.id=e.bid,a.book_gender=e.book_gender,a.book_name=e.book_name,a.class_name=e.class_name,a.cover=e.cover,a.authorId=e.sqAuthorId,a.sqBid=e.sqBid,a.intro=e.intro,a.end=e.end,a.newChapContent=e.newChapContent,a.newChapName=e.newChapName,a.firstChapid=e.fristChapid,a.size=e.size,a.up_time=e.up_time,a.like=o}})}},Object(x.d)({set_chapId:"SET_CHAPID"})),computed:m()({},Object(x.c)(["bookId"])),data:function(){return{author_name:"",id:"",book_name:"",class_name:"",size:"",sqBid:"",intro:"",newChapName:"",newChapContent:"",newChapid:"",end:"",cover:"",like:[],firstChapid:"",page:"",authorId:"",lookCatalog:!1,btnL:"加入书架",btnR:"开始阅读"}}},Et={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-intro"},[o("div",{staticClass:"book-intro-top"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],staticClass:"book-intro-top-bg"}),t._v(" "),o("i",{staticClass:"icon-fanhui",on:{click:t.toBack}}),t._v(" "),o("div",{staticClass:"book-intro-top-content"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"cover"}],staticClass:"book-intro-top-content-img"}),t._v(" "),o("h4",{staticClass:"book-intro-top-content-book"},[t._v(t._s(t.book_name))]),t._v(" "),o("h5",{staticClass:"book-intro-top-content-author"},[t._v(t._s(t.author_name))]),t._v(" "),o("p",{staticClass:"book-intro-top-content-message"},[t._v(t._s(t.class_name)+" "+t._s(t.size)+"字 "+t._s(1==t.end?"连载中":"完结"))])]),t._v(" "),o("p",{staticClass:"book-intro-top-intro"},[t._v(t._s(t.intro))])]),t._v(" "),o("div",{staticClass:"line"}),t._v(" "),o("ul",{staticClass:"book-intro-nav"},[o("li",[t._m(0),o("p",[t._v(t._s(t.newChapName))])]),t._v(" "),o("li",{on:{click:function(e){t.lookCatalog=!t.lookCatalog}}},[t._m(1)]),t._v(" "),t.author_name?t._e():o("li",[t._v("加载中...请稍等")])]),t._v(" "),o("catalog",{directives:[{name:"show",rawName:"v-show",value:t.lookCatalog,expression:"lookCatalog"}],on:{startRead:t.toRead}}),t._v(" "),o("div",{staticClass:"line"}),t._v(" "),o("ul",{staticClass:"bottom-actions"},[o("li",{ref:"actionL",staticClass:"bottom-actions-btn bottom-actions-btn-l",on:{click:t.addBookToShelf}},[t._v(t._s(t.btnL))]),t._v(" "),o("li",{ref:"actionR",staticClass:"bottom-actions-btn bottom-actions-btn-r",on:{click:t.startRead}},[t._v(t._s(t.btnR))])]),t._v(" "),o("div",{staticClass:"seat"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"icon-tubiaozuixin"}),this._v("最新")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"icon-sort"}),this._v("目录")])}]};var xt=o("VU/8")(Tt,Et,!1,function(t){o("WaHe")},"data-v-32596bdc",null).exports;n.a.use(h.a);var Lt,Bt=new h.a({linkActiveClass:"active",routes:[{path:"*",redirect:"/bookshelf"},{path:"/bookshelf",component:F,meta:{keepAlive:!1}},{path:"/booksort/:id",component:vt,meta:{keepAlive:!1},children:[{path:"/booksort/book/:id",component:xt,meta:{keepAlive:!1}}]},{path:"/booksearch/:content",component:wt,meta:{keepAlive:!1}},{path:"/bookshop",component:st,meta:{keepAlive:!0}},{path:"/bookintro/:id",component:xt,meta:{keepAlive:!1}},{path:"/bookreader/:id",component:bt,meta:{keepAlive:!1}}]}),Ft=function(t,e){var o=t.commit;t.state;o("SET_CLASSID",e.classId),o("SET_CHARGETYPE",0),o("SET_END",0),o("SET_GENDER",0),o("SET_PAGE",1),o("SET_KEYWORD","")},$t=function(t,e){var o=t.commit,a=(t.state,e.keyword);o("SET_CLASSID",""),o("SET_CHARGETYPE",0),o("SET_END",0),o("SET_GENDER",0),o("SET_PAGE",1),o("SET_KEYWORD",a)},Nt=function(t){return t.bookId},Pt=function(t){return t.classId},Rt=function(t){return t.gender},Dt=function(t){return t.end},Ot=function(t){return t.chargeType},At=function(t){return t.page},zt=function(t){return t.keyword},jt=function(t){return t.chapId},Mt={bookId:"",classId:"",gender:0,end:0,chargeType:0,page:1,keyword:"",chapId:""},qt=o("bOdI"),Ut=o.n(qt),Ht=(Lt={},Ut()(Lt,"SET_BOOKID",function(t,e){t.bookId=e}),Ut()(Lt,"SET_CLASSID",function(t,e){t.classId=e}),Ut()(Lt,"SET_GENDER",function(t,e){t.gender=e}),Ut()(Lt,"SET_END",function(t,e){t.end=e}),Ut()(Lt,"SET_CHARGETYPE",function(t,e){t.chargeType=e}),Ut()(Lt,"SET_PAGE",function(t,e){t.page=e}),Ut()(Lt,"SET_KEYWORD",function(t,e){t.keyword=e}),Ut()(Lt,"SET_CHAPID",function(t,e){t.chapId=e}),Lt);o("sax8");n.a.use(x.a);var Kt=new x.a.Store({actions:a,getters:s,state:Mt,mutations:Ht,strict:!1,plugins:[]}),Vt=o("lJzc"),Gt=o.n(Vt);n.a.use(Gt.a,{preload:1.3,error:o("KxO2"),loading:o("KxO2"),attempt:1}),n.a.config.productionTip=!1,new n.a({el:"#app",router:Bt,store:Kt,components:{App:u},template:"<App/>"})},SmWu:function(t,e){},Uonz:function(t,e){},WaHe:function(t,e){},gybG:function(t,e){},juNV:function(t,e){},loPT:function(t,e){},n6TU:function(t,e){},puLK:function(t,e){},t8g7:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.00d70ea2f1ee85f41949.js.map