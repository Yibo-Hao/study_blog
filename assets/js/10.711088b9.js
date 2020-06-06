(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(s,e,t){"use strict";t.r(e);var a=t(43),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"js专精-json格式-json对象-深拷贝-函数作为参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js专精-json格式-json对象-深拷贝-函数作为参数"}},[s._v("#")]),s._v(" JS专精-JSON格式/JSON对象/深拷贝/函数作为参数")]),s._v(" "),t("p",[s._v("深拷贝:拷贝前后的两个对象之间没有任何互相引用")]),s._v(" "),t("h2",{attrs:{id:"序列化和反序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化"}},[s._v("#")]),s._v(" 序列化和反序列化")]),s._v(" "),t("h3",{attrs:{id:"json格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json格式"}},[s._v("#")]),s._v(" JSON格式")]),s._v(" "),t("ul",[t("li",[s._v("JSON：JavaScript Object Notation 【JavaScript 对象表示法】")]),s._v(" "),t("li",[s._v("JSON不是编程语言是标记语言，跟HTML、XML、Markdown 一样，用来展示数据不涉及编译就普普通通放在内存中。")]),s._v(" "),t("li",[s._v("JSON是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。JSON采用完全独立于语言的文本格式， 这些特性使JSON成为理想的数据交换语言。")])]),s._v(" "),t("h3",{attrs:{id:"交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交互"}},[s._v("#")]),s._v(" 交互")]),s._v(" "),t("p",[s._v("客户端与服务端的交互数据无非就是两种，数组，对象。对象是一个无序的“‘名称/值’对”集合。数组是值（value）的有序集合。")]),s._v(" "),t("h3",{attrs:{id:"json-对值的类型和格式有严格的规定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-对值的类型和格式有严格的规定"}},[s._v("#")]),s._v(" JSON 对值的类型和格式有严格的规定")]),s._v(" "),t("ul",[t("li",[s._v("复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。")]),s._v(" "),t("li",[s._v("原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。")]),s._v(" "),t("li",[s._v("字符串必须使用双引号表示，不能使用单引号。")]),s._v(" "),t("li",[s._v("对象的键名必须放在双引号里面。")]),s._v(" "),t("li",[s._v("数组或对象最后一个成员的后面，不能加逗号。")])]),s._v(" "),t("h3",{attrs:{id:"数组和对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组和对象"}},[s._v("#")]),s._v(" 数组和对象")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/17237327348aebe8?w=1280&h=588&f=png&s=160493",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/5/21/1723733137b9fba9?w=1280&h=346&f=png&s=93462",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。")])]),s._v(" "),t("h2",{attrs:{id:"json-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-对象"}},[s._v("#")]),s._v(" JSON 对象")]),s._v(" "),t("p",[s._v("JSON对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：JSON.stringify()和JSON.parse()")]),s._v(" "),t("h3",{attrs:{id:"json-stringify"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-stringify"}},[s._v("#")]),s._v(" JSON.stringify")]),s._v(" "),t("p",[s._v("JSON.stringify方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被JSON.parse方法还原。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('JSON.stringify(\'abc\') // ""abc""\nJSON.stringify(1) // "1"\nJSON.stringify(false) // "false"\nJSON.stringify([]) // "[]"\nJSON.stringify({}) // "{}"\n\nJSON.stringify([1, "false", false])\n// \'[1,"false",false]\'\n\nJSON.stringify({ name: "张三" })\n// \'{"name":"张三"}\'\n')])])]),t("h3",{attrs:{id:"错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误"}},[s._v("#")]),s._v(" 错误")]),s._v(" "),t("ul",[t("li",[s._v("如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤忽略。")]),s._v(" "),t("li",[s._v("如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null。")]),s._v(" "),t("li",[s._v("不可以环引用会出错")]),s._v(" "),t("li",[s._v("不支持new Date() 会转换成ISO8601字符串")]),s._v(" "),t("li",[s._v("不支持正则表达式会变成空对象")])]),s._v(" "),t("h3",{attrs:{id:"json-parse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-parse"}},[s._v("#")]),s._v(" JSON.parse()")]),s._v(" "),t("p",[s._v("JSON.parse方法用于将 JSON 字符串转换成对应的值。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("JSON.parse('{}') // {}\nJSON.parse('true') // true\nJSON.parse('\"foo\"') // \"foo\"\nJSON.parse('[1, 5, \"false\"]') // [1, 5, \"false\"]\nJSON.parse('null') // null\n\nvar o = JSON.parse('{\"name\": \"张三\"}');\no.name // 张三\n")])])]),t("h3",{attrs:{id:"错误-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误-2"}},[s._v("#")]),s._v(" 错误")]),s._v(" "),t("p",[s._v("如果发生错误，json语法不符合规则，就会出错，或者")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("try {\n  JSON.parse(\"'String'\");\n} catch(e) {\n  console.log('parsing error');\n}\n")])])]),t("p",[s._v("try catch js代码来消化错误")]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[s._v("json格式和json对象不一样，一个是数据格式，一个是js库，"),t("strong",[s._v("json格式都是字符串")])]),s._v(" "),t("li",[s._v("我们拿到json字符串，再变成js对象")]),s._v(" "),t("li",[s._v("json是xml的升级版，比xml可以更好的体现出数据结构")])]),s._v(" "),t("h2",{attrs:{id:"递归克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归克隆"}},[s._v("#")]),s._v(" 递归克隆")]),s._v(" "),t("p",[s._v("JS的七种数据类型，除了object之外赋值只是简单的赋值而已，object赋值的地址，date，regExp，set，map都是对象的子类型")]),s._v(" "),t("h3",{attrs:{id:"instanceof运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instanceof运算符"}},[s._v("#")]),s._v(" instanceof运算符")]),s._v(" "),t("p",[s._v("instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。[]instanceof Object 是正确的。Object的prototype属性出现在了[]实例原型链上")]),s._v(" "),t("h3",{attrs:{id:"函数的深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数的深拷贝"}},[s._v("#")]),s._v(" 函数的深拷贝")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function deepClone(source) {\n//////\nif (source instanceof Function) {\n      const dist = function() {\n        return source.bind(this)(...arguments);\n      };\n      return dist;\n  }\n////\n}\n")])])]),t("p",[s._v("上面很好理解：我们调用dist时source.bind(this)会返回一个新的函数，bind中的this是dist调用时决定的，重新调用dist会重新绑定this，之后我们再修改source并不会影响source.bind(this)返回的新函数，自然不会影响dist")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function deepClone(source) {\n//////\nif (source instanceof Function) {\n      const dist = function() {\n        return source.apply(this,arguments);\n      };\n      return dist;\n  }\n////\n}\n")])])]),t("p",[s._v("再看看上面代码你可能会有一个错觉我们修改source会影响dist函数。其实不会下面我们分析一下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("let a = function(a, b) {\n  return a + b;\n};\nlet b = deepClone(a);\n")])])]),t("ol",[t("li",[s._v("我们把a代表的函数地址（#101）传入deepClone")]),s._v(" "),t("li",[s._v("deepClone接受到函数（#101），dist使用apply调用函数（#101）")]),s._v(" "),t("li",[s._v("我们修改a = function(a,b){a+2*b}")]),s._v(" "),t("li",[s._v("此时"),t("strong",[s._v("变量")]),s._v("a代表的函数地址改变（#102），但是 deepClone的参数仍是（#101）")]),s._v(" "),t("li",[s._v("函数深拷贝其实很容易因为你无法在不创建新函数的情况下去修改一个原来的函数，函数作为参数一但传进去只要外部的函数（deepClone）不重新调用就不会改变")])]),s._v(" "),t("h3",{attrs:{id:"深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[s._v("#")]),s._v(" 深拷贝")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function deepClone(source) {\n  if (source instanceof Object) {\n    if (source instanceof Array) {\n      const dist = [];\n      for (let key in source) {\n        dist[key] = deepClone(source[key]);\n      }\n      return dist;\n    } else if (source instanceof Function) {\n      const dist = function() {\n        console.log(source === a);\n        return source.bind(this)(...arguments);\n      };\n      return dist;\n    } else {\n      const dist = {};\n      for (let key in source) {\n        dist[key] = deepClone(source[key]);\n      }\n      return dist;\n    }\n  } else return source;\n}\n")])])]),t("h3",{attrs:{id:"环的深拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环的深拷贝"}},[s._v("#")]),s._v(" 环的深拷贝")]),s._v(" "),t("p",[s._v("采用缓存[source, dist]存到数组中，根据source找dist即可")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("let cache = [];\nfunction findCache(source) {\n  for (let i = 0; i < cache.length; i++) {\n    if (cache[i][0] === source) {\n      return cache[i][1];\n    }\n  }\n  return undefined;\n}\nfunction deepClone(source) {\n  if (source instanceof Object) {\n    let cacheDist = findCache(source);\n    if (cacheDist) {\n      return cacheDist;\n    } else {\n      let dist;\n      if (source instanceof Array) {} \n      else if (source instanceof Function) {} \n      else {\n        dist = {};\n        cache.push([source, dist]);\n        for (let key in source) {\n          if (source.hasOwnProperty(key)) {\n            dist[key] = deepClone(source[key]);\n          }\n        }\n      }\n      return dist;\n    }\n  } else return source;\n}\n")])])]),t("h3",{attrs:{id:"日期和正则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日期和正则"}},[s._v("#")]),s._v(" 日期和正则")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    if (source instanceof RegExp) {\n        dist = new RegExp(source.source, source.flags);\n      } else if (source instanceof Date) {\n        dist = new Date(source);\n    } \n")])])]),t("h3",{attrs:{id:"for-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-in"}},[s._v("#")]),s._v(" for in")]),s._v(" "),t("p",[s._v("for...in 循环只遍历可枚举属性（包括它的原型链上的可枚举属性）。需要hasOwnProperty进行筛选")]),s._v(" "),t("h3",{attrs:{id:"面向对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[s._v("#")]),s._v(" 面向对象")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Clone {\n  cache = [];\n  deepClone(source) {}\n  findCache(source) {}\n}\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);