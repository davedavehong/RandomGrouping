# 两种方法实现随机分组

题目：一群人出去玩，进行随机分组，保证每个组的人比较均匀。

JsNative.js使用js较为传统的方式，每次随机叫一个人，跳进一个组里，并从原数组里踢掉,，其中用到了数组的splice方法，在数量大时会影响整体速度。Algo.js先使用一个随机排序算法处理数组，再一次推入分组，最后再用这个算法随机排序这个数组。

使用js的`console.time()`方法来测试每种方法的执行时间，通过不同长度的数组测试发现，当数组小于1w时，两种方式都能在很短时间内完成，时间差距可以忽略，而当数组达到5w多甚至更大时，JsNative.js这种方法的执行时间就大大加大甚至达到了秒级别，数组更大时反应相当慢。，而Algo.js方法还是保持在毫秒级别。

在实际生产环境下，遇到那么大数据量的处理或者说对执行时间要求那么高的情况还是少见，尤其是前端，所以大部分时候，算法都不应该是第一考虑，而更应该熟悉前端的方法、框架和基本的流程控制。但也可以发现，使用算法也可以很好地优化主流程代码，便于维护和阅读，所以，其实可以选择一些较为优秀的算法作为公共方法来使用。

**相关网址** [题目](https://github.com/sofish/learn-js/issues/8) [随机排序算法](https://bost.ocks.org/mike/shuffle/)
