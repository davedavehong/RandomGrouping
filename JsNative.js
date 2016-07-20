/**
 * Created by dave on 7月19 019.
 * 几乎每次面试都问一个题：一群人出去玩，写一个程序随机分组可以如何分。最后简化成 10 个人出去玩，如何将人随机分配到 4 个组里，并保证每个组的人比较均匀。
 * URL:https://github.com/sofish/learn-js/issues/8
 */

'use strict';

var arr = [];

for (var j =0 ;j<50000;j++){
    arr[j] = j;
}
var group = [[], [], [], []];


(function split(arr, group) {
    var date1=new Date();  //开始时间

    var size = group.length; // 分多少组
    var length = arr.length; // 人数总长度

    // 每次随机叫一个人，跳进一个组里，并从原数组里踢掉
    while (arr.length) {
        for (var i = 0; i < length; i++) {
            var index = Math.random() * arr.length | 0;  // 随机，|0可以取整
            group[i % size].push(arr[index]);            // 入组
            arr.splice(index, 1);                        // 踢掉
        }
    }
    group.sort(function () {//随机排序数组
        return Math.random() * 2 - 1;
        //return Math.random() - 0.5;//另一种随机排序
    });
    // console.log(group);
    var date2=new Date();    //结束时间
    console.log(date2.getTime()-date1.getTime());
})(arr, group);



