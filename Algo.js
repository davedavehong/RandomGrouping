/**
 * Created by dave on 7月19 019.
 * 使用算法现将数组随机排序，大大提高效率
 */
'use strict';

var arr = [];

for (var j =0 ;j<100000;j++){
    arr[j] = j;
}
var group = [[], [], [], []];
(function split(arr, group) {

    var date3=new Date();  //开始时间
    var size = group.length; // 分多少组
    var length = arr.length; // 人数总长度

    // 随机洗牌
    shuffle(arr);

    for (var i = 0; i < length; i++) {
        group[i % size].push(arr[i]);    // 入组
    }

    shuffle(group);//随机排序数组

    // console.log(group);
    var date4=new Date();    //结束时间
    console.log(date4.getTime()-date3.getTime());
    console.log("Fisher–Yates Shuffle");
})(arr, group);


//Fisher–Yates Shuffle
//url：https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];  // 缓存当前的第 m 位
        array[m] = array[i]; // 随机 m 之前某位放进 m
        array[i] = t; // 第随机位换成 m 位的值（后续还会被取到）
    }

    return array;
}