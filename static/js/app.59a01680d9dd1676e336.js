webpackJsonp([1],{BKPn:function(e,t){},Ci6L:function(e,t){},Iytv:function(e,t){},JyvQ:function(e,t){},LNOw:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={};n.d(s,"selectClassId",function(){return Q});var a={};n.d(a,"bookId",function(){return Z}),n.d(a,"classId",function(){return X}),n.d(a,"gender",function(){return ee}),n.d(a,"end",function(){return te}),n.d(a,"chargeType",function(){return ne}),n.d(a,"page",function(){return se});var o=n("7+uW"),i=n("mtWM"),r=n.n(i),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"bottom-nav"},[t("router-link",{staticClass:"bottom-nav-btn",attrs:{tag:"li",to:"/bookshelf"}},[t("i",{staticClass:"icon-shujia icon"}),this._v("\n    书架\n  ")]),this._v(" "),t("router-link",{staticClass:"bottom-nav-btn",attrs:{tag:"li",to:"/bookshop"}},[t("i",{staticClass:"icon-shu icon"}),this._v("\n    书城")]),this._v(" "),t("router-link",{staticClass:"bottom-nav-btn",attrs:{tag:"li",to:"/bookfree"}},[t("i",{staticClass:"icon-xiaolian icon"}),this._v("\n    免费\n  ")])],1)},staticRenderFns:[]};var l={name:"App",components:{Tab:n("VU/8")({name:"tab",created:function(){},data:function(){return{}}},c,!1,function(e){n("Z34P")},"data-v-00954308",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1),this._v(" "),t("div",{staticClass:"seat"}),this._v(" "),t("tab")],1)},staticRenderFns:[]};var u=n("VU/8")(l,d,!1,function(e){n("LNOw")},null,null).exports,p=n("/ocq"),m={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var v=n("VU/8")({name:"",data:function(){return{}}},m,!1,function(e){n("mYis")},"data-v-59210ba8",null).exports,f={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var h=n("VU/8")({name:"",data:function(){return{}}},f,!1,function(e){n("eNqW")},"data-v-0ef3b206",null).exports,_=(n("v2ns"),n("7QTg")),g={name:"swi",components:{swiper:_.swiper,swiperSlide:_.swiperSlide},methods:{},props:{needIntro:{type:Boolean,default:!1},newClass:{type:String,default:""},sliders:{type:Array,default:function(){return[{cover:""}]}},options:{type:Object,default:function(){return{lazy:!1,autoplay:!1,direction:"horizontal",loop:!0,effet:"slide",slidesPerView:1,centeredSlides:!1,spaceBetween:0,pagination:{el:".sweper-pagination"}}}}},data:function(){return{}}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{class:e.newClass,attrs:{options:e.options}},[e._l(e.sliders,function(t){return n("swiper-slide",{key:t.id,on:{click:function(n){e.link(t.id)}}},[n("div",{staticClass:"swiper-slide-href"},[n("div",{staticClass:"swiper-slide-wrap"},[n("img",{staticClass:"swiper-slide-href-img",attrs:{src:t.cover}})]),e._v(" "),e.needIntro?n("h3",{staticClass:"swiper-slide-title"},[e._v(e._s(t.book))]):e._e(),e._v(" "),e.needIntro?n("p",{staticClass:"swiper-slide-author"},[e._v(e._s(t.author))]):e._e()])])}),e._v(" "),e.options.pagination?n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):e._e()],2)},staticRenderFns:[]};var k=n("VU/8")(g,b,!1,function(e){n("v5XY")},"data-v-4146b3de",null).exports,C={name:"panel",components:{Swiper:k},props:{title:{type:String,default:""},datas:{type:Array,default:function(){return[]}}},data:function(){return{options:{slidesPerView:2.6,spaceBetween:20},needIntro:!0,newClass:"panel-content"}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[n("h3",{staticClass:"panel-title"},[e._v(e._s(e.title))]),e._v(" "),n("swiper",{attrs:{sliders:e.datas,needIntro:e.needIntro,options:e.options,newClass:e.newClass}})],1)},staticRenderFns:[]};var E=n("VU/8")(C,w,!1,function(e){n("JyvQ")},"data-v-50d4cde6",null).exports,T=n("Dd8w"),y=n.n(T),S=n("NYxO"),I={name:"sort",methods:y()({link:function(e){this.selectClassId(e),this.$router.push("/booksort/"+e)}},Object(S.b)({selectClassId:"selectClassId"})),props:{datas:{types:Array,default:function(){return[{name:"",num:"",id:""}]}}},data:function(){return{}}},R={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.datas,function(t){return n("li",{key:t.id,staticClass:"sort-item",on:{click:function(n){e.link(t.id)}}},[n("h4",{staticClass:"sort-item-name"},[e._v(e._s(t.name))]),e._v(" "),n("p",{staticClass:"sort-item-num"},[e._v("("+e._s(t.num)+")")])])}))},staticRenderFns:[]};var N=n("VU/8")(I,R,!1,function(e){n("BKPn")},"data-v-b8573df6",null).exports,P=n("NC6I"),D=n.n(P);function F(){return((new Date).getTime()+"").substring(0,10)}var x="aaf50af46621010e7fbeda2b1fe8ef8e",A="f2850e634f85f485d719314ae3cfe252";function z(){var e=F(),t=new FormData;return t.append("moduleIds","6"),t.append("timestamp",e),t.append("sign",D()("6"+e+x)),r.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",t)}var O=n("Zrlr"),V=n.n(O),$=function e(t){var n=t.cover,s=t.author,a=t.book,o=t.intro,i=t.id;V()(this,e),this.cover=n,this.author=s,this.book=a,this.intro=o,this.id=i};function G(e){return new $({cover:e.cover,author:e.author_name,book:e.book_name,intro:e.intro,id:e.bid})}var L=function e(t){var n=t.cover,s=t.author,a=t.book_name,o=t.newChapName,i=t.size,r=t.end,c=t.up_time,l=t.id,d=t.class_name;V()(this,e),this.cover=n,this.author=s,this.book_name=a,this.newChapName=o,this.id=l,this.end=r,this.size=i,this.up_time=c,this.class_name=d};var U={name:"book-shop",components:{Swiper:k,Panel:E,Sort:N},created:function(){this._getSliders(),this._getModules(),this._getSort()},methods:{_getSliders:function(){var e,t,n=this;(e=new FormData,t=F(),e.append("moduleIds",1),e.append("timestamp",t),e.append("sign",D()(1+t+x)),r.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",e)).then(function(e){200==e.status&&e.data.data.module1.forEach(function(e){n.sliderData.push(G(e))})})},_getModules:function(){var e,t,n=this;(e=F(),t=new FormData,t.append("moduleIds","3,5,4,2"),t.append("timestamp",e),t.append("sign",D()("3,5,4,2"+e+x)),r.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcpage/moduleinfo",t)).then(function(e){if(200==e.status){var t=e.data.data;t.module2.forEach(function(e,s){n.moduleMan.push(G(e)),n.moduleFeman.push(G(t.module3[s])),n.moduleRecommend.push(G(t.module4[s])),n.modulePlusRecommend.push(G(t.module5[s]))})}})},_getSort:function(){var e=this;z().then(function(t){if(200==t.status){var n=t.data.show.module6.class_data;for(var s in n)if(n.hasOwnProperty(s)){var a=[];a.id=s,a.name=n[s].name,a.num=n[s].num,e.sort.push(a),a=null}}})}},data:function(){return{topSliderNeedIntro:!1,options:{effect:"coverflow",loop:!0,slidesPerView:2,centeredSlides:!0},sliderData:[],moduleManTitle:"男频榜单",moduleFemanTitle:"女频榜单",moduleRecommendTitle:"分类推荐榜",modulePlusRecommendTitle:"强力推荐榜",moduleMan:[],moduleFeman:[],moduleRecommend:[],modulePlusRecommend:[],sliderClassName:"book-shop-top-sliders",sort:[]}}},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("swiper",{staticClass:"top-slider",attrs:{options:e.options,needIntro:e.topSliderNeedIntro,sliders:e.sliderData,newClass:e.sliderClassName}}),e._v(" "),n("panel",{attrs:{datas:e.moduleMan,title:e.moduleManTitle}}),e._v(" "),n("panel",{attrs:{datas:e.moduleFeman,title:e.moduleFemanTitle}}),e._v(" "),n("panel",{attrs:{datas:e.moduleRecommend,title:e.moduleRecommendTitle}}),e._v(" "),n("panel",{attrs:{datas:e.modulePlusRecommend,title:e.modulePlusRecommendTitle}}),e._v(" "),n("sort",{attrs:{datas:e.sort}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"book-shop-top"},[t("i",{staticClass:"icon-fangdajing"})])}]};var B=n("VU/8")(U,M,!1,function(e){n("d8h3")},"data-v-cbb9e09c",null).exports;var Y={name:"book-sort",created:function(){this._getSort(),this._getBookList()},computed:y()({},Object(S.c)(["classId","gender","end","page"])),methods:y()({comeback:function(){this.$router.back()},selectGender:function(e){this.set_gender(e)},selectType:function(e){this.set_classId(e)},selectEnd:function(e){this.set_end(e)},selectChargeType:function(e){this.set_chargeType(e)},_getSort:function(){var e=this;z().then(function(t){if(200==t.status){var n=t.data.show.module6.class_data;for(var s in n)if(n.hasOwnProperty(s)){var a=[];a.id=s,a.name=n[s].name,a.num=n[s].num,e.types.push(a),a=null}}})},_getBookList:function(){var e,t,n,s,a,o,i,c,l=this;(e=this.page,t=this.pageSize,n=this.classId,s=this.gender,a=this.end,o=this.chargeType,i=new FormData,c=F(),i.append("page",e),i.append("pageSize",t),i.append("timestamp",c),i.append("classId",n),i.append("end",1),i.append("gender",s),i.append("end",a),i.append("chargeType",o),i.append("sign",D()(e+""+t+c+A)),r.a.post("https://ognv1.sqreader.com/index.php?r=pcapi/pcbook/librarysearch",i)).then(function(e){200==e.status&&(1==l.page&&(l.books=[]),e.data.data.forEach(function(e){var t;l.books.push(new L({cover:(t=e).cover,author:t.author_name,book_name:t.book_name,newChapName:t.newChapName,id:t.bid,end:t.end,class_name:t.class_name,size:t.size,up_time:t.up_time}))}))})}},Object(S.d)({set_classId:"SET_CLASSID",set_end:"SET_END",set_chargeType:"SET_CHARGETYPE",set_gender:"SET_GENDER"})),data:function(){return{types:[{id:"",name:"全部",num:0}],bookList:[],pageSize:18,books:[]}}},j={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"translate"}},[n("div",{staticClass:"book-sort"},[n("div",{staticClass:"book-sort-title"},[n("i",{staticClass:"icon-fanhui",on:{click:e.comeback}})]),e._v(" "),n("ul",[n("li",{staticClass:"book-sort-select"},[n("span",{class:{active:0==e.gender},on:{click:function(t){e.selectGender(0)}}},[e._v("全部")]),e._v(" "),n("span",{class:{active:1==e.gender},on:{click:function(t){e.selectGender(1)}}},[e._v("男频")]),e._v(" "),n("span",{class:{active:2==e.gender},on:{click:function(t){e.selectGender(2)}}},[e._v("女频")])]),e._v(" "),n("li",{staticClass:"book-sort-select"},e._l(e.types,function(t){return n("span",{class:{active:t.id==e.classId},on:{click:function(n){e.selectType(t.id)}}},[e._v(e._s(t.name))])})),e._v(" "),n("li",{staticClass:"book-sort-select"},[n("span",{class:{active:0==e.end},on:{click:function(t){e.selectEnd(0)}}},[e._v("全部")]),e._v(" "),n("span",{class:{active:1==e.end},on:{click:function(t){e.selectEnd(1)}}},[e._v("连载")]),e._v(" "),n("span",{class:{active:2==e.end},on:{click:function(t){e.selectEnd(2)}}},[e._v("完结")])]),e._v(" "),n("li",{staticClass:"book-sort-select"},[n("span",{class:{active:0==e.end},on:{click:function(t){e.selectChargeType(0)}}},[e._v("全部")]),e._v(" "),n("span",{class:{active:1==e.end},on:{click:function(t){e.selectChargeType(1)}}},[e._v("免费")]),e._v(" "),n("span",{class:{active:2==e.end},on:{click:function(t){e.selectChargeType(2)}}},[e._v("收费")])])]),e._v(" "),n("ul",{staticClass:"books"},e._l(e.books,function(t){return n("li",{key:t.id,staticClass:"books-item"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.cover,expression:"book.cover"}]}),e._v(" "),n("h3",[e._v(e._s(t.book_name))]),e._v(" "),n("h4",[e._v("作者:"+e._s(t.author))]),e._v(" "),n("div",{staticClass:"intro"},[n("p",[e._v(e._s(t.class_name)+"/"+e._s(1==t.end?"连载中":"完结")+"/"+e._s(t.size)+"字")]),e._v(" "),n("p",[e._v("最新章节:"+e._s(t.newChapName))]),e._v(" "),n("p",[e._v("更新时间:"+e._s(t.up_time))])])])}))])])},staticRenderFns:[]};var q=n("VU/8")(Y,j,!1,function(e){n("Iytv")},"data-v-04ee650a",null).exports,H={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var J=n("VU/8")({name:"",data:function(){return{}}},H,!1,function(e){n("Ci6L")},"data-v-d843a246",null).exports;o.a.use(p.a);var W,K=new p.a({linkActiveClass:"active",routes:[{path:"/",redirect:"/bookshelf"},{path:"/bookshelf",component:v},{path:"/booksort/:id",component:q},{path:"/bookshop",component:B},{path:"/bookfree",component:h},{path:"/bookreader/:id",component:J}]}),Q=function(e,t){var n=e.commit;e.state;n("SET_CLASSID",t.classId),n("SET_CHARGETYPE",0),n("SET_END",0),n("SET_GENDER",0),n("SET_PAGE",1)},Z=function(e){return e.bookId},X=function(e){return e.classId},ee=function(e){return e.gender},te=function(e){return e.end},ne=function(e){return state.ChargeType},se=function(e){return e.page},ae={bookId:"",classId:"",gender:0,end:0,chargeType:0,page:1},oe=n("bOdI"),ie=n.n(oe),re=(W={},ie()(W,"SET_BOOKID",function(e,t){e.bookId=t}),ie()(W,"SET_CLASSID",function(e,t){e.classId=t}),ie()(W,"SET_GENDER",function(e,t){e.gender=t}),ie()(W,"SET_END",function(e,t){e.end=t}),ie()(W,"SET_CHARGETYPE",function(e,t){e.chargeType=t}),ie()(W,"SET_PAGE",function(e,t){e.page=t}),W);n("sax8");o.a.use(S.a);var ce=new S.a.Store({actions:s,getters:a,state:ae,mutations:re,strict:!1,plugins:[]}),le=n("lJzc"),de=n.n(le);o.a.use(de.a,{preload:1.3,error:"common/img/logo.png",loading:"common/img/logo.png",attemp:1}),o.a.config.productionTip=!1,new o.a({el:"#app",router:K,store:ce,components:{App:u},template:"<App/>"})},Z34P:function(e,t){},d8h3:function(e,t){},eNqW:function(e,t){},mYis:function(e,t){},v2ns:function(e,t){},v5XY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.59a01680d9dd1676e336.js.map