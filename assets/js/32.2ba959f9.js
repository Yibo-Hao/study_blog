(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{382:function(t,e,n){"use strict";n.r(e);var s=n(43),u=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),n("h2",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),n("p",[t._v("队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。队列用于存储按\n顺序排列的数据，先进先出，队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。"),n("br"),t._v("\n浏览器/操作系统中的事件处理就是队列的数据结构，而函数调用栈使用栈数据结构。")]),t._v(" "),n("h2",{attrs:{id:"队列的基本操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列的基本操作"}},[t._v("#")]),t._v(" 队列的基本操作")]),t._v(" "),n("ul",[n("li",[t._v("插入操作也叫做入队 enqueue()")]),t._v(" "),n("li",[t._v("删除操作也叫做出队 dequeue()")]),t._v(" "),n("li",[t._v("是读取队首队尾的元素 front(),back()。")]),t._v(" "),n("li",[t._v("队列中存储了多少元素使用 length 属性")]),t._v(" "),n("li",[t._v("清空队列中的所有元素，可以使用 clear() 方法")]),t._v(" "),n("li",[t._v("toString() 方法显示队列内的所有元素")])]),t._v(" "),n("h2",{attrs:{id:"队列的顺序存储-javascript实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列的顺序存储-javascript实现"}},[t._v("#")]),t._v(" 队列的顺序存储-JavaScript实现")]),t._v(" "),n("p",[t._v("线性表的顺序存储和链式存储，对于队列来说，也是同样适用的。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('function Queue() {\n  this.dataSource = [];\n  this.enqueue = enqueue;\n  this.dequeue = dequeue;\n  this.front = front;\n  this.back = back;\n  this.toString = toString;\n  this.clear = clear;\n  this.empty = empty;\n}\n\nfunction enqueue(element) {\n  this.dataSource.push(element);\n}\nfunction dequeue() {\n  return this.dataSource.shift();\n}\nfunction front() {\n  return this.dataSource[0];\n}\nfunction back() {\n  return this.dataSource[this.dataSource.length - 1];\n}\nfunction toString() {\n  let retStr = "";\n  for (let i = 0; i < this.dataSource.length; ++i) {\n    retStr += this.dataSource[i] + "\\n";\n  }\n  return retStr;\n}\nfunction empty() {\n  return this.dataSource.length === 0;\n}\nfunction clear() {\n  this.dataSource = [];\n}\n')])])]),n("h2",{attrs:{id:"使用队列来解决问题-基数排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用队列来解决问题-基数排序"}},[t._v("#")]),t._v(" 使用队列来解决问题-基数排序")]),t._v(" "),n("p",[t._v("基数排序将数据集扫描两次，第一次按个位上的数字进行排序，第二次按十位上的数字进行排序。每个数字根据对应位上的数值被分在不同的盒子里。使用队列代表盒子。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function distribute(nums,queues,n,digit) {\n    for (let i = 0;i<n;n++){\n        if (digit === 1){\n            queues[nums[i]%10].enqueue(nums[i])\n        }else{\n            queues[Math.floor(nums[i]/10)].enqueue(nums[i])\n        }\n    }\n}\nfunction collect(queues, nums) {\n    let i = 0;\n    for (let digit = 0; digit < 10; ++digit) {\n        while (!queues[digit].empty()) {\n            nums[i++] = queues[digit].dequeue();\n        }\n    }\n}\n")])])]),n("p",[t._v("下面是实例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let nums = [45, 78, 78, 89, 45, 45, 42, 14, 48];\nlet queues = [];\nfor (let i = 0; i < 10; ++i) {\n  queues[i] = new Queue();\n}\ndistribute(nums, queues, 1);\ncollect(queues,nums);\ndistribute(nums, queues, 10);\ncollect(queues,nums);\n")])])]),n("p",[t._v("先把nums数据放到queues里，再把queues数据按顺序放回nums里，进行两次就排好了")])])}),[],!1,null,null,null);e.default=u.exports}}]);