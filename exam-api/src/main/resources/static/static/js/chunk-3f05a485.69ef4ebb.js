(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f05a485"],{"038d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-card",{staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"qu-content"},[e("p",[t._v("【"+t._s(t._f("quTypeFilter")(t.quData.quType))+"】"+t._s(t.quData.content))]),1===t.quData.quType||3===t.quData.quType?e("div",[e("el-radio-group",{attrs:{readonly:""},model:{value:t.answerValues[0],callback:function(a){t.$set(t.answerValues,0,a)},expression:"answerValues[0]"}},t._l(t.quData.answerList,(function(a){return e("el-radio",{attrs:{label:a.id,readonly:""}},[t._v(t._s(a.abc)+"."+t._s(a.content))])})),1)],1):t._e(),2===t.quData.quType?e("div",[e("el-checkbox-group",{attrs:{readonly:""},model:{value:t.answerValues,callback:function(a){t.answerValues=a},expression:"answerValues"}},t._l(t.quData.answerList,(function(a){return e("el-checkbox",{attrs:{label:a.id}},[t._v(t._s(a.abc)+"."+t._s(a.content))])})),1)],1):t._e(),t.analysisShow?e("div",{staticStyle:{"margin-top":"20px",color:"#1890ff","font-weight":"bold"}},[t._v(" 正确答案："+t._s(t.rightTags.join(" "))+" ")]):t._e()])]),t.analysisShow?e("el-card",{staticClass:"qu-analysis",staticStyle:{"margin-top":"20px"}},[t._v(" 整题解析： "),e("p",[t._v(t._s(t.quData.analysis))]),t.quData.analysis?t._e():e("p",[t._v("暂无解析内容！")])]):t._e(),t.analysisShow?e("el-card",{staticClass:"qu-analysis",staticStyle:{"margin-top":"20px"}},[t._v(" 选项解析： "),t._l(t.quData.answerList,(function(a){return a.analysis?e("div",{staticClass:"qu-analysis-line"},[e("p",{staticStyle:{color:"#555"}},[t._v(t._s(a.content)+"：")]),e("p",{staticStyle:{color:"#1890ff"}},[t._v(t._s(a.analysis))])]):t._e()})),0===t.analysisCount?e("p",[t._v("暂无选项解析")]):t._e()],2):t._e(),e("div",{staticStyle:{"padding-top":"30px"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.handNext}},[t._v("继续下一题")]),e("el-button",{attrs:{type:"info"},on:{click:t.onCancel}},[t._v("返回")])],1)],1)},n=[],i=(e("ac6a"),e("f4bc")),u=e("b775");function r(t,a){return Object(u["b"])("/exam/api/user/wrong-book/next",{examId:t,quId:a})}var c={name:"BookTrain",data:function(){return{examId:"",quId:"",tags:["A","B","C","D","E","F","G","H","I","J","K","L","M","N"],analysisShow:!1,quData:{},answerValues:[],rightValues:[],rightTags:[]}},created:function(){this.examId=this.$route.params.examId,this.fetchNextQu()},methods:{clearValues:function(){this.answerValues=[],this.rightValues=[],this.analysisShow=!1,this.rightTags=[]},fetchQuDetail:function(t){var a=this;this.quId=t,this.clearValues(),Object(i["b"])(t).then((function(t){a.quData=t.data,a.quData.answerList.forEach((function(t,e){t.abc=a.tags[e],t.isRight&&(a.rightValues.push(t.id),a.rightTags.push(t.abc))}))}))},fetchNextQu:function(){var t=this;r(this.examId,this.quId).then((function(a){t.fetchQuDetail(a.data.id)}))},onCancel:function(){this.$router.push({name:"ListTran"})},handNext:function(){this.analysisShow?this.fetchNextQu():this.rightValues.join(",")===this.answerValues.join(",")?(this.$message({message:"回答正确，你好棒哦！",type:"success"}),this.fetchNextQu()):(this.analysisShow=!0,this.$message({message:"很遗憾，又做错了呢，请参考答案解析！",type:"error"}))}}},o=c,l=(e("9725"),e("2877")),h=Object(l["a"])(o,s,n,!1,null,"5b981544",null);a["default"]=h.exports},"562a":function(t,a,e){},9725:function(t,a,e){"use strict";e("562a")},f4bc:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"e",(function(){return i})),e.d(a,"a",(function(){return u})),e.d(a,"d",(function(){return r})),e.d(a,"c",(function(){return c}));var s=e("b775");function n(t){return Object(s["b"])("/exam/api/qu/qu/detail",{id:t})}function i(t){return Object(s["b"])("/exam/api/qu/qu/save",t)}function u(t){return Object(s["a"])("/exam/api/qu/qu/export",t,"导出的数据.xlsx")}function r(){return Object(s["a"])("/exam/api/qu/qu/import/template",{},"qu-import-template.xlsx")}function c(t){return Object(s["c"])("/exam/api/qu/qu/import",t)}}}]);