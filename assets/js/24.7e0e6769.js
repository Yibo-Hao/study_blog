(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{383:function(t,_,v){"use strict";v.r(_);var a=v(43),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"算法的复杂度分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法的复杂度分析"}},[t._v("#")]),t._v(" 算法的复杂度分析")]),t._v(" "),v("h2",{attrs:{id:"事后分析估算方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事后分析估算方法"}},[t._v("#")]),t._v(" 事后分析估算方法")]),t._v(" "),v("p",[t._v("先根据算法编好程序，运行程序比较时间/空间大小。很明显的不靠谱")]),t._v(" "),v("h2",{attrs:{id:"事前分析估算方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事前分析估算方法"}},[t._v("#")]),t._v(" 事前分析估算方法")]),t._v(" "),v("p",[t._v("一个高级程序语言编写的程序在计算机运行所消耗的时间取决于：")]),t._v(" "),v("ul",[v("li",[t._v("算法本身")]),t._v(" "),v("li",[t._v("编译产生的代码质量")]),t._v(" "),v("li",[t._v("问题的输入规模")]),t._v(" "),v("li",[t._v("机器执行指令的速度")])]),t._v(" "),v("p",[t._v("编译和执行速度取决于软件硬件，所以一个算法的运行时间取决于算法的好坏和问题输入规模。")]),t._v(" "),v("h2",{attrs:{id:"算法比较实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法比较实例"}},[t._v("#")]),t._v(" 算法比较实例")]),t._v(" "),v("ul",[v("li",[t._v("算法A：2n方")]),t._v(" "),v("li",[t._v("算法B：2n方 + 3n + 1")])]),t._v(" "),v("p",[t._v("可以理解为算法A，进行了两次两重for循环，算法B进行了两次两重for循环加3次for循环，一次赋值或运算操作。")]),t._v(" "),v("p",[t._v("在n无限大时，判断一个算法的效率函数中的常数和其他次项常常可以忽略，而更应该关注最高阶项的阶数。")]),t._v(" "),v("p",[t._v("所以，我们不计较变量声明，循环索引，终止条件，字符打印等等操作。")]),t._v(" "),v("h2",{attrs:{id:"大-o-复杂度表示法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大-o-复杂度表示法"}},[t._v("#")]),t._v(" 大 O 复杂度表示法")]),t._v(" "),v("p",[t._v("我们假设每行语句的执行一遍的时间是一个单位时间（unit_time）。所以整段代码总的执行时间:")]),t._v(" "),v("p",[v("code",[t._v("T(n) = (2n+1)*unit_time")])]),t._v(" "),v("p",[t._v("尽管我们不知道 unit_time 的具体值，但是通过公式，我们知道所有代码的执行时间 T(n) 与每行代码的执行次数 n 成正比。")]),t._v(" "),v("p",[t._v("因此我们可以引出这么条公式：T(n) = O(f(n)) ，于是代码执行时间会演变成：T(n) = O(2n+1) = O(n)")]),t._v(" "),v("p",[t._v("O是同阶无穷小，简言之就是 T(n) 和 f(n) 趋于零的速率一致。")]),t._v(" "),v("h2",{attrs:{id:"推导大-o-阶方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#推导大-o-阶方法"}},[t._v("#")]),t._v(" 推导大 O 阶方法")]),t._v(" "),v("ul",[v("li",[t._v("用常数1取代运行时间中的所有加法常数")]),t._v(" "),v("li",[t._v("在上一步的基础上，只保留最高阶")]),t._v(" "),v("li",[t._v("去除常数就是最后结果")]),t._v(" "),v("li",[t._v("常数阶都是O(1)")])]),t._v(" "),v("h2",{attrs:{id:"平均情况和最坏情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#平均情况和最坏情况"}},[t._v("#")]),t._v(" 平均情况和最坏情况")]),t._v(" "),v("p",[t._v("在 n 个元素的数组中查找一个数字，有可能第一个就是也有可能最后一个才是，在没有特殊说明情况下，我们指的都是最坏时间复杂度")]),t._v(" "),v("h2",{attrs:{id:"算法空间复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法空间复杂度"}},[t._v("#")]),t._v(" 算法空间复杂度")]),t._v(" "),v("p",[t._v("可以使用空间来换时间，判断某一年是否为闰年可以每次都直接计算，也可以写入全部年份，闰年赋值为1或者为0，\nS(n) = O(f(n))，一次执行次数等于一个单位内存即可")])])}),[],!1,null,null,null);_.default=r.exports}}]);