// 参考文章 https://blog.csdn.net/qq_42098849/article/details/104582160
/**
 * 事件的三个阶段
 * 1、捕获阶段：从根节点顺着目标节点构建一条事件路径逐级向下
 * 2、目标阶段:到达目标节点
 * 3、冒泡阶段：从目标节点顺着捕获阶段构建的路径回去，逐级向上
 */

/**
 * 阻止冒泡和捕获：（w3c的方法是event.stopPropagation()，IE则是使用event.cancelBubble = true）window.event? window.event.cancelBubble = true : e.stopPropagation();
 * 取消默认事件：（w3c的方法是e.preventDefault()，IE则是使用e.returnValue = false;）
 */

/**
 * vue防止 冒泡和捕获
 * @click.stop:阻止事件冒泡
 * @click.prevent:阻止事件默认行为
 * @click.self:事件只作用在元素本省，而不是其子元素
 */

/**
 * react防止冒泡和捕获  参考文章：https://www.cnblogs.com/yadiblogs/p/10137413.html
 *1：阻止合成事件往最外层document上的事件冒泡，用e.nativeEvent.stopImmediatePropagation()
 *2: 合成事件间的冒泡，使用 e.stopPropagation()；
 *3：阻止合成事件，往处理document上的其他原生事件冒泡，需要通过e.target来判断，示例代码如下
 */
