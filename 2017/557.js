/**
 * title: 557. Reverse Words in a String III
 * des:Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * time:2017/4/23
 * version:1
 * url:https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description
 */



/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var strArr=s.split(" ");
    var result="";
    for(var i in strArr){
        if(i!=strArr.length-1){
          result=result+reStr(strArr[i])+" ";
        }else{
          result=result+reStr(strArr[i]);
        }
    }
    return result;
};

function reStr(s){
    var strArr=s.split("");
    var result="";
    for(var i=strArr.length-1;i>=0;i--){
        result=result+strArr[i];
    }
    return result;
}