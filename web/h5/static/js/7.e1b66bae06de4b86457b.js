webpackJsonp([7],{"0Otq":function(t,e,s){"use strict";s("NYxO");var i=s("of8y"),n=s("NG/f"),a=s("My3Y"),r=s("Emh4"),c=s("MIzg"),o=s("EVr7"),l=s("162o"),u=document.documentElement.clientHeight-44,d={name:"item-bank",data:function(){return{testData:this.info,testAnswer:this.answer,height:0,currentIndex:this.current}},props:{info:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){}},current:{type:Number,default:0},showScore:{type:Boolean,default:!0}},watch:{answer:function(t){this.$emit("update:answer",t)},current:function(t,e){Number(t);this.$refs.swipe.swipeTo(t-1)}},components:{fillType:i.a,essayType:n.a,headTop:a.a,choiceType:r.a,singleChoice:c.a,determineType:o.a},mounted:function(){var t=this;Object(l.setTimeout)(function(){t.$nextTick(function(){t.changeswiper(0)})},500)},methods:{changeswiper:function(s){var i=this;this.currentIndex=s,this.$emit("update:slideIndex",s),this.$nextTick(function(){var t=window.getComputedStyle(i.$refs["paper"+s][0]).height,e=Math.max(Number(t.substring(0,t.length-2)));e!=i.height&&(i.height=e<=u?u:e)})},last:function(){0!=this.currentIndex&&this.$refs.swipe.swipeTo(this.currentIndex-1)},next:function(){this.currentIndex!=this.info.length-1&&this.$refs.swipe.swipeTo(this.currentIndex+1)},subject:function(t){var e,s="",i=t.type;switch(t.parentType&&(s="材料题-"),i){case"single_choice":e="单选题";break;case"choice":e="多选题";break;case"essay":e="问答题";break;case"uncertain_choice":e="不定项选择题";break;case"determine":e="判断题";break;case"fill":e="填空题";break;case"material":e="材料题"}return s+e},singleChoose:function(t,e){this.$set(this.testAnswer[e],0,t)},choiceChoose:function(t,e){this.$set(this.testAnswer,e,t)},determineChoose:function(t,e){this.$set(this.testAnswer[e],0,Number(t))}}},m={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"paper-swiper"},[0<s.testData.length?i("van-swipe",{ref:"swipe",attrs:{height:s.height,"show-indicators":!1,loop:!1,duration:100},on:{change:s.changeswiper}},s._l(s.info,function(t,e){return i("van-swipe-item",{key:t.id},[i("div",{ref:"paper"+e,refInFor:!0,staticClass:"paper-item"},[i("head-top",{attrs:{all:s.testData.length,current:s.currentIndex+1,subject:s.subject(t),score:""+parseFloat(t.score),showScore:s.showScore}}),s._v(" "),"single_choice"==t.type?i("single-choice",{attrs:{itemdata:t,answer:s.testAnswer[t.id],number:e+1},on:{singleChoose:s.singleChoose}}):s._e(),s._v(" "),"choice"==t.type||"uncertain_choice"==t.type?i("choice-type",{attrs:{itemdata:t,answer:s.testAnswer[t.id],number:e+1},on:{choiceChoose:s.choiceChoose}}):s._e(),s._v(" "),"determine"==t.type?i("determine-type",{attrs:{itemdata:t,answer:s.testAnswer[t.id],number:e+1},on:{determineChoose:s.determineChoose}}):s._e(),s._v(" "),"essay"==t.type?i("essay-type",{attrs:{itemdata:t,answer:s.testAnswer[t.id],number:e+1}}):s._e(),s._v(" "),"fill"==t.type?i("fill-type",{attrs:{itemdata:t,answer:s.testAnswer[t.id],number:e+1}}):s._e()],1)])})):s._e(),s._v(" "),i("div",[i("div",{class:["left-slide__btn",0==s.currentIndex?"slide-disabled":""],on:{click:function(t){s.last()}}},[i("i",{staticClass:"iconfont icon-arrow-left"})]),s._v(" "),i("div",{class:["right-slide__btn",s.currentIndex==s.info.length-1?"slide-disabled":""],on:{click:function(t){s.next()}}},[i("i",{staticClass:"iconfont icon-arrow-right"})])])],1)},staticRenderFns:[]};var h=s("VU/8")(d,m,!1,function(t){s("VU3e")},null,null);e.a=h.exports},"5MEZ":function(t,e){},EVr7:function(t,e,s){"use strict";var i={name:"determine-type",data:function(){return{radio:this.answer[0],determine:{id:"4",type:"determine",stem:"<p>测试单选卡夫卡的飞开口道福克斯宽度发发多少发的（）</p>\r\n",score:"2.0",categoryId:"0",difficulty:"normal",target:"course-20",courseId:"0",lessonId:"0",parentId:"0",subCount:"0",finishedTimes:"0",passedTimes:"0",createdUserId:"2",updatedUserId:"2",courseSetId:"20",seq:"1"}}},props:{itemdata:{type:Object,default:function(){}},number:{type:Number,default:1},answer:{type:Array,default:function(){return[]}}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},methods:{choose:function(){this.$emit("determineChoose",this.radio,this.itemdata.id)}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"subject"},[s("div",{staticClass:"subject-stem"},[s("span",{staticClass:"serial-number"},[e._v(e._s(e.number)+"、")]),e._v(" "),s("div",{staticClass:"subject-stem__content rich-text",domProps:{innerHTML:e._s(e.stem)}})]),e._v(" "),e.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[e._v("问题"+e._s(e.itemdata.materialIndex)+"：")]),e._v(" "),s("div",{staticClass:"rich-text",domProps:{innerHTML:e._s(e.itemdata.stem)}})]):e._e(),e._v(" "),s("van-radio-group",{staticClass:"answer-paper",on:{change:function(t){e.choose()}},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[s("van-radio",{staticClass:"subject-option subject-option--determine",attrs:{name:1},scopedSlots:e._u([{key:"icon",fn:function(t){return s("i",{staticClass:"iconfont icon-yes subject-option__order"})}}])},[s("div",{staticClass:"subject-option__content"},[e._v("对")])]),e._v(" "),s("van-radio",{staticClass:"subject-option subject-option--determine",attrs:{name:0},scopedSlots:e._u([{key:"icon",fn:function(t){return s("i",{staticClass:"iconfont icon-no subject-option__order"})}}])},[s("div",{staticClass:"subject-option__content"},[e._v("错")])])],1)],1)},staticRenderFns:[]},a=s("VU/8")(i,n,!1,null,null,null);e.a=a.exports},Emh4:function(t,e,s){"use strict";var i={name:"choice-type",data:function(){return{choice:{id:"5",type:"choice",stem:"<p>测试多选题</p>\r\n",score:"2.0",metas:{choices:["<p>选项A</p>\n","<p>选项B</p>\n","<p>选项C</p>\n","<p>选项D</p>\n"]},categoryId:"0",difficulty:"normal",target:"course-20",courseId:"0",lessonId:"0",parentId:"0",subCount:"0",finishedTimes:"0",passedTimes:"0",createdUserId:"2",updatedUserId:"2",courseSetId:"20",seq:"2",missScore:"0.0"},result:this.answer}},props:{itemdata:{type:Object,default:function(){}},number:{type:Number,default:1},answer:{type:Array,default:function(){return[]}}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},filters:{filterOrder:function(t){return["A","B","C","D","E","F","G","H","I","J"][t]}},methods:{choose:function(t){this.$emit("choiceChoose",this.result,this.itemdata.id)}}},n={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"subject"},[i("div",{staticClass:"subject-stem"},[i("span",{staticClass:"serial-number"},[s._v(s._s(s.number)+"、")]),s._v(" "),i("div",{staticClass:"subject-stem__content rich-text",domProps:{innerHTML:s._s(s.stem)}})]),s._v(" "),s.itemdata.parentTitle?i("div",{staticClass:"material-title"},[i("span",{staticClass:"serial-number"},[s._v("问题"+s._s(s.itemdata.materialIndex)+"：")]),s._v(" "),i("div",{staticClass:"rich-text",domProps:{innerHTML:s._s(s.itemdata.stem)}})]):s._e(),s._v(" "),i("van-checkbox-group",{staticClass:"answer-paper",on:{change:function(t){s.choose()}},model:{value:s.result,callback:function(t){s.result=t},expression:"result"}},s._l(s.itemdata.metas.choices,function(t,e){return i("van-checkbox",{key:e,staticClass:"subject-option",attrs:{name:e},scopedSlots:s._u([{key:"icon",fn:function(t){return i("span",{staticClass:"subject-option__order subject-option__order--square"},[s._v(s._s(s._f("filterOrder")(e)))])}}])},[i("div",{staticClass:"subject-option__content",domProps:{innerHTML:s._s(t)}})])}))],1)},staticRenderFns:[]},a=s("VU/8")(i,n,!1,null,null,null);e.a=a.exports},MIzg:function(t,e,s){"use strict";var i={name:"single-choice",data:function(){return{radio:this.answer[0]}},props:{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},filters:{filterOrder:function(t){return["A","B","C","D","E","F","G","H","I","J"][t]}},methods:{choose:function(){this.$emit("singleChoose",this.radio,this.itemdata.id)}}},n={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"subject"},[i("div",{staticClass:"subject-stem"},[i("span",{staticClass:"serial-number"},[s._v(s._s(s.number)+"、")]),s._v(" "),i("div",{staticClass:"rich-text",domProps:{innerHTML:s._s(s.stem)}})]),s._v(" "),s.itemdata.parentTitle?i("div",{staticClass:"material-title"},[i("span",{staticClass:"serial-number"},[s._v("问题"+s._s(s.itemdata.materialIndex)+"：")]),s._v(" "),i("div",{staticClass:"rich-text",domProps:{innerHTML:s._s(s.itemdata.stem)}})]):s._e(),s._v(" "),i("van-radio-group",{staticClass:"answer-paper",on:{change:function(t){s.choose()}},model:{value:s.radio,callback:function(t){s.radio=t},expression:"radio"}},s._l(s.itemdata.metas.choices,function(t,e){return i("van-radio",{key:e,staticClass:"subject-option",attrs:{name:e},scopedSlots:s._u([{key:"icon",fn:function(t){return i("span",{staticClass:"subject-option__order"},[s._v(s._s(s._f("filterOrder")(e)))])}}])},[i("div",{staticClass:"subject-option__content",domProps:{innerHTML:s._s(t)}})])}))],1)},staticRenderFns:[]},a=s("VU/8")(i,n,!1,null,null,null);e.a=a.exports},My3Y:function(t,e,s){"use strict";var i={name:"head-top",props:{all:{type:Number,default:0},current:{type:Number,default:0},subject:{type:String,default:""},score:{type:String,default:"0"},showScore:{type:Boolean,default:!0}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"head-top"},[s("div",{staticClass:"head-left"},[t._v("\n    "+t._s(t.subject)+"\n    "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.showScore,expression:"showScore"}],staticClass:"left-color"},[t._v("["+t._s(t.score)+"分]")])]),t._v(" "),s("div",{staticClass:"head-right"},[s("span",{staticClass:"right-color"},[t._v(t._s(t.current))]),t._v("/"+t._s(t.all)+"\n  ")])])},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("5MEZ")},null,null);e.a=a.exports},"NG/f":function(t,e,s){"use strict";var i={name:"essay-type",props:{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1}},computed:{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}},methods:{change:function(){}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"essay"},[s("div",{staticClass:"subject-stem"},[s("div",{staticClass:"serial-number"},[e._v(e._s(e.number)+"、")]),e._v(" "),s("div",{staticClass:"rich-text",domProps:{innerHTML:e._s(e.stem)}})]),e._v(" "),e.itemdata.parentTitle?s("div",{staticClass:"material-title"},[s("span",{staticClass:"serial-number"},[e._v("问题"+e._s(e.itemdata.materialIndex)+"：")]),e._v(" "),s("div",{staticClass:"rich-text",domProps:{innerHTML:e._s(e.itemdata.stem)}})]):e._e(),e._v(" "),s("div",{staticClass:"answer-paper"},[s("van-field",{staticClass:"essay-input",attrs:{"label-width":"0px",type:"textarea",placeholder:"请填写你的答案......",autosize:{maxHeight:200,minHeight:200}},on:{input:function(t){e.change()}},model:{value:e.answer[0],callback:function(t){e.$set(e.answer,0,t)},expression:"answer[0]"}})],1)])},staticRenderFns:[]};var a=s("VU/8")(i,n,!1,function(t){s("bVxB")},null,null);e.a=a.exports},VU3e:function(t,e){},X0ui:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("//Fk"),a=s.n(i),n=s("mvHQ"),r=s.n(n),c=s("woOf"),o=s.n(c),l=s("fZjL"),u=s.n(l),d=(s("eqfM"),s("/QYm")),m=s("Dd8w"),h=s.n(m),p=(s("XmAh"),s("il3B")),f=(s("nsZj"),s("J1XP")),v=s("gyMJ"),_=s("NYxO"),b=s("Du/2"),w=(s("of8y"),s("NG/f"),s("My3Y"),s("Emh4"),s("MIzg"),s("EVr7"),s("acEQ")),g=s("0Otq"),y=s("xPBg"),C=s("y1zP"),x="",T={name:"testpaperDo",mixins:[C.a],directives:{},data:function(){return{cardSeq:0,testpaper:{},testpaperResult:{},info:[],answer:{},cardShow:!1,items:{},time:null,timeMeter:null,timeWarn:!1,isHandExam:!1,localtime:null,localtimeName:null,localanswerName:null,localuseTime:null,lastAnswer:null,lastTime:null,startTime:null,backUrl:"",slideIndex:0}},created:function(){this.getData()},components:{itemBank:g.a,guidePage:w.a,vanOverlay:f.a},filters:{type:function(t){switch(t){case"single_choice":return"单选题";case"choice":return"多选题";case"essay":return"问答题";case"uncertain_choice":return"不定项选择题";case"determine":return"判断题";case"fill":return"填空题";case"material":return"材料题"}}},beforeRouteEnter:function(t,e,s){x="/"===e.fullPath?"/":"",s()},beforeRouteLeave:function(t,e,s){0==this.info.length||this.isHandExam||"doing"!=this.testpaperResult.status?s():this.submitPaper().then(function(){s()}).catch(function(){s(!1)})},beforeDestroy:function(){this.clearTime(),p.a.close()},computed:h()({},Object(_.mapState)({isLoading:function(t){return t.isLoading},user:function(t){return t.user}})),watch:{answer:{handler:"saveAnswer",deep:!0}},methods:h()({},Object(_.mapActions)("course",["handExamdo"]),{getData:function(){var e=this,t=this.$route.query.testId,s=this.$route.query.targetId,i=this.$route.query.action;v.a.getExamInfo({query:{testId:t},data:{action:i,targetId:s,targetType:"task"}}).then(function(t){e.afterGetData(t)}).catch(function(t){4032207==t.code||4032204==t.code?e.toIntro():d.a.fail(t.message)})},afterGetData:function(t){this.$store.commit(b.j,this.$route.query.title),this.items=t.items,this.testpaper=t.testpaper,t.testpaperResult.limitedTime=Number(t.testpaperResult.limitedTime),this.testpaperResult=t.testpaperResult,this.isDoing()||(this.localanswerName=this.user.id+"-"+this.testpaperResult.id,this.localtimeName=this.user.id+"-"+this.testpaperResult.id+"-time",this.lastTime=localStorage.getItem(this.localtimeName),this.lastAnswer=JSON.parse(localStorage.getItem(this.localanswerName)),this.formatData(t),this.interruption(),this.saveTime(),this.timer())},isDoing:function(){return"doing"!=this.testpaperResult.status&&(this.showResult(),!0)},interruption:function(){var i=this;this.$route.params.KeepDoing||this.canDoing(this.testpaperResult,this.user.id).then(function(){}).catch(function(t){var e=t.answer,s=t.endTime;i.submitExam(e,s)})},formatData:function(t){var n=this,e=t.items;u()(e).forEach(function(t){"material"!=t&&e[t].forEach(function(t){n.sixType(t.type,t)}),"material"==t&&e[t].forEach(function(s){var i=o()({},s,{subs:""});s.subs.forEach(function(t,e){t.parentTitle=i,t.parentType=s.type,t.materialIndex=e+1,n.sixType(t.type,t)})})})},sixType:function(t,e){if("single_choice"==t){e.metas.choices.length;this.lastAnswer?this.$set(this.answer,e.id,this.lastAnswer[e.id]):this.$set(this.answer,e.id,[]),this.info.push(e)}if("choice"!=t&&"uncertain_choice"!=t||(this.lastAnswer?this.$set(this.answer,e.id,this.lastAnswer[e.id]):this.$set(this.answer,e.id,[]),this.info.push(e)),"essay"==t&&(this.lastAnswer?this.$set(this.answer,e.id,this.lastAnswer[e.id]):this.$set(this.answer,e.id,[""]),this.info.push(e)),"fill"==t){var s=e.stem,i=this.fillReplce(s,0),n=i.stem,a=i.index;e.stem=n,e.fillnum=a,this.lastAnswer?this.$set(this.answer,e.id,this.lastAnswer[e.id]):this.$set(this.answer,e.id,new Array(a).fill("")),this.info.push(e)}"determine"==t&&(this.lastAnswer?this.$set(this.answer,e.id,this.lastAnswer[e.id]):this.$set(this.answer,e.id,[]),this.info.push(e))},fillReplce:function(t,e){for(var s=/\[\[.+?\]\]/;s.exec(t);)t=t.replace(s,function(){return'<span class="fill-bank">（'+ ++e+"）</span>"});return{stem:t,index:e}},formatStatus:function(t,e){var s=0;return("single_choice"==t||"choice"==t||"uncertain_choice"==t||"determine"==t)&&0<this.answer[e].length?s=1:"essay"==t&&""!=this.answer[e][0]?s=1:"fill"==t?s=Number(this.answer[e].some(function(t){return""!=t})):s},slideToNumber:function(t){var e=Number(t);this.cardSeq=e,this.cardShow=!1},timer:function(t){var n=this,a=0,r=60*this.testpaperResult.limitedTime*1e3;if(!(r<=0)){if(this.lastTime){var e=Math.ceil((new Date).getTime()-1e3*this.testpaperResult.beginTime);r-=e}this.timeMeter=setInterval(function(){var t=Object(y.getCountDown)(r,a++),e=t.hours,s=t.minutes,i=t.seconds;n.time=e+":"+s+":"+i,0==e&&0==s&&i<60&&(n.timeWarn=!0),(0==Number(e)&&0==Number(s)&&0==Number(i)||Number(i)<0)&&(n.clearTime(),n.submitExam())},1e3)}},clearTime:function(){clearInterval(this.timeMeter),this.timeMeter=null,clearInterval(this.localtime),this.localtime=null},submitPaper:function(){var t=this,e=0,i="题目已经做完，确认交卷吗?",n=JSON.parse(r()(this.answer));return u()(n).forEach(function(t){n[t]=n[t].filter(function(t){return""!==t}),0===n[t].length&&e++}),0<e&&(i="还有"+e+"题未做，确认交卷吗？"),new a.a(function(e,s){p.a.confirm({title:"交卷",cancelButtonText:"确认交卷",confirmButtonText:"检查一下",message:i}).then(function(){t.cardShow=!0,s()}).catch(function(){t.clearTime(),t.submitExam(n).then(function(t){e()}).catch(function(t){s()})})})},submitExam:function(e,t){var i=this;e||(e=JSON.parse(r()(this.answer)),u()(e).forEach(function(t){e[t]=e[t].filter(function(t){return""!==t})})),t=t||(new Date).getTime();var n={answer:e,resultId:this.testpaperResult.id,userId:this.user.id,endTime:t,beginTime:Number(this.testpaperResult.beginTime)};return new a.a(function(e,s){i.handExamdo(n).then(function(t){i.isHandExam=!0,e(),i.showResult()}).catch(function(t){s(),d.a.fail(t.message)})})},saveAnswer:function(t){localStorage.setItem(this.localanswerName,r()(t))},saveTime:function(){var t=this;this.localuseTime=this.user.id+"-"+this.testpaperResult.id+"-usedTime";var e=localStorage.getItem(this.localuseTime)||0;this.localtime=setInterval(function(){t.testpaperResult.limitedTime||localStorage.setItem(t.localuseTime,++e),localStorage.setItem(t.localtimeName,(new Date).getTime())},1e3)},showResult:function(){this.$router.replace({name:"testpaperResult",query:{resultId:this.testpaperResult.id,testId:this.$route.query.testId,targetId:this.$route.query.targetId,backUrl:x}})},toIntro:function(){this.$router.push({name:"testpaperIntro",query:{testId:this.$route.query.testId,targetId:this.$route.query.targetId}})}})},I={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"paper-swiper"},[s.isLoading?i("e-loading"):s._e(),s._v(" "),0<s.info.length?i("item-bank",{attrs:{current:s.cardSeq,info:s.info,answer:s.answer,slideIndex:s.slideIndex},on:{"update:current":function(t){s.cardSeq=t},"update:answer":function(t){s.answer=t},"update:slideIndex":function(t){s.slideIndex=t}}}):s._e(),s._v(" "),i("guide-page"),s._v(" "),i("div",{staticClass:"paper-footer"},[i("div",[i("span",{on:{click:function(t){s.cardShow=!0}}},[i("i",{staticClass:"iconfont icon-Questioncard"}),s._v("\n        题卡\n      ")])]),s._v(" "),i("div",[i("span",{on:{click:function(t){s.submitPaper()}}},[i("i",{staticClass:"iconfont icon-submit"}),s._v("\n      交卷\n      ")])])]),s._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:s.cardShow,callback:function(t){s.cardShow=t},expression:"cardShow"}},[0<s.info.length?i("div",{staticClass:"card"},[i("div",{staticClass:"card-title"},[i("div",[i("span",{staticClass:"card-finish"},[s._v("已完成")]),s._v(" "),i("span",{staticClass:"card-nofinish"},[s._v("未完成")])]),s._v(" "),i("i",{staticClass:"iconfont icon-no",on:{click:function(t){s.cardShow=!1}}})]),s._v(" "),i("div",{staticClass:"card-list"},s._l(s.items,function(t,e){return i("div",{key:e,staticClass:"card-item"},[i("div",{staticClass:"card-item-title"},[s._v(s._s(s._f("type")(e)))]),s._v(" "),"material"!=e?i("div",{staticClass:"card-item-list"},s._l(s.items[e],function(e){return i("div",{key:e.id,class:["list-cicle",1==s.formatStatus(e.type,e.id)?"cicle-active":""],on:{click:function(t){s.slideToNumber(e.seq)}}},[s._v("\n             "+s._s(e.seq)+"\n             ")])})):s._e(),s._v(" "),"material"==e?i("div",{staticClass:"card-item-list"},[s._l(s.items[e],function(t){return s._l(t.subs,function(e){return i("div",{key:e.id,class:["list-cicle",1==s.formatStatus(e.type,e.id)?"cicle-active":""],on:{click:function(t){s.slideToNumber(e.seq)}}},[s._v("\n               "+s._s(e.seq)+"\n              ")])})})],2):s._e()])}))]):s._e()]),s._v(" "),i("div",{class:["time",s.timeWarn?"warn":""]},[s._v("\n      "+s._s(s.time)+"\n  ")])],1)},staticRenderFns:[]},$=s("VU/8")(T,I,!1,null,null,null);e.default=$.exports},acEQ:function(t,e,s){"use strict";var i=s("Dd8w"),n=s.n(i),a=s("NYxO"),r={name:"guide-page",data:function(){return{isFristVisited:!1}},computed:n()({},Object(a.mapState)({user:function(t){return t.user}})),created:function(){this.setVisited()},methods:{setVisited:function(){var t=this.user.id+"-task-visited";localStorage.getItem(t);localStorage.getItem(t)||(this.isFristVisited=!0,localStorage.setItem(t,!0))}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isFristVisited,expression:"isFristVisited"}],staticClass:"guide",on:{click:function(t){e.isFristVisited=!1}}},[s("div",{staticClass:"guide__text"},[e._v("左右切换滑动")]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guide__gesture"},[e("img",{attrs:{src:"static/images/leftslide.png"}}),this._v(" "),e("img",{attrs:{src:"static/images/rightslide.png"}})])}]},o=s("VU/8")(r,c,!1,null,null,null);e.a=o.exports},bVxB:function(t,e){},of8y:function(t,e,s){"use strict";var i,n=s("bOdI"),a=s.n(n),r=(i={name:"fill-type",props:{filldata:{type:Object,default:function(){}}}},a()(i,"props",{itemdata:{type:Object,default:function(){}},answer:{type:Array,default:function(){return[]}},number:{type:Number,default:1}}),a()(i,"computed",{stem:{get:function(){return this.itemdata.parentTitle?this.itemdata.parentTitle.stem:this.itemdata.stem}}}),a()(i,"data",function(){return{index:0}}),a()(i,"methods",{}),i),c={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"fill"},[i("div",{staticClass:"subject-stem"},[i("div",{staticClass:"serial-number"},[s._v(s._s(s.number)+"、")]),s._v(" "),i("div",{staticClass:"rich-text",domProps:{innerHTML:s._s(s.stem)}})]),s._v(" "),s.itemdata.parentTitle?i("div",{staticClass:"material-title"},[i("span",{staticClass:"serial-number"},[s._v("问题"+s._s(s.itemdata.materialIndex)+"：")]),s._v(" "),i("div",{staticClass:"rich-text",domProps:{innerHTML:s._s(s.itemdata.stem)}})]):s._e(),s._v(" "),i("div",{staticClass:"answer-paper"},s._l(s.itemdata.fillnum,function(t,e){return i("div",{key:e},[i("div",{staticClass:"fill-subject"},[s._v("填空题（"+s._s(e+1)+"）")]),s._v(" "),i("van-field",{staticClass:"fill-input",attrs:{"label-width":"0px",type:"textarea",placeholder:"请填写答案",rows:"1",autosize:""},model:{value:s.answer[e],callback:function(t){s.$set(s.answer,e,t)},expression:"answer[index]"}})],1)}))])},staticRenderFns:[]},o=s("VU/8")(r,c,!1,null,null,null);e.a=o.exports}});