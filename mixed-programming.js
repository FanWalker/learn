
/**************输出重复次数最多的字符********************/
var str = 'assssjdssskssalsssdkjsssdss';

var arr = str.split(''); //把字符串转换为数组
str = arr.sort().join(''); //首先进行排序，这样结果会把相同的字符放在一起，然后再转换为字符串
//alert(str);  // aaddjjkklsssssssssssssssss

var value = '';
var index = 0; 
var re = /(\w)\1+/g;  //匹配字符，且重复这个字符，重复次数至少一次。
str.replace(re,function($0,$1){ 
    console.log($0);  //代表每次匹配成功的结果 : aa dd jj kk l sssssssssssssssss
    //alert($1);  代表每次匹配成功的第一个子项，也就是\w:  a d j k l S 
　　
    if(index<$0.length){  //如果index保存的值小于$0的长度就进行下面的操作
        index = $0.length;  // 这样index一直保存的就在最大的长度
        value = $1;  //value保存的是出现最多的这个字符
    }

}); 

console.log('最多的字符:'+value+',重复的次数:'+index);  // s   17

/***********************输出最先出现3次的字母*******************************/

var line = "Have you ever gone shopping and",
    o = {},
    str = line.replace(/\s/ig,'');
for (var i=0; i<str.length; i++){
    var char = str.charAt(i);
    if(!o[char]){
        o[char]=1;
    }else{
        o[char]++;
        if(o[char]==3 && /\w/.test(char)){
            console.log(char);
            break;
        }
    }
}

/*************************去掉一个最小的数字，剩下的组成最大数*****************************/
var num;

function minNum(str){
    var index,
        tmp=parseInt(str.charAt(0));
    for(var i=1; i<str.length; i++){
        if(parseInt(str.charAt(i)) <= tmp){
            index = i;
        }
    }
    str = str.substring(0,index) + str.substring(index+1,str.length);
    console.log(str);
    return str;
}

for(var j=0; j<1; j++){
    num = minNum("325");
}
console.log(num);

/********************二分查找***********************/
//非递归
function binary_search(arr, key){
    var low = 0,
        high = arr.length - 1;
        while(high >= low){
            var mid = parseInt((high+low)/2);
            if(key == arr[mid]){
                return mid;
            }
            else if(key > arr[mid]){
                low = mid + 1;
            }
            else id(key < arr[mid]){
                high = mid - 1;
            }
            else{
                return -1;
            }
        }
}
//递归
function binary_search(arr,low, high, key) {
            if (low > high){
                return -1;
            }
            var mid = parseInt((high + low) / 2);
            if(arr[mid] == key){
                return mid;
            }else if (arr[mid] > key){
                high = mid - 1;
                return binary_search(arr, low, high, key);
            }else if (arr[mid] < key){
                low = mid + 1;
                return binary_search(arr, low, high, key);
            }
        };

function A(){
    var i = 0;
    return function(){
        console.log(i++);
    }
}
var f1 = new A(),
    f2 = new A();
f1();
f1();
f2();