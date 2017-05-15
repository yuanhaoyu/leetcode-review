/**
 * title: 541. Reverse String II
 * des:Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. 
 *     If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, 
 *     then reverse the first k characters and left the other as original.
 * Example: Input: s = "abcdefg", k = 2 Output: "bacdfeg"
 * version:1
 * url:https://leetcode.com/problems/reverse-string-ii/#/description
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    if(k>s.length) return s.split("").reverse().join("");
    var resArr=s.split("");
    for(var i=0;i<s.length;i=i+2*k){
        var temp=resArr.splice(i,k).reverse();
        resArr.splice(i,0,...temp);
    }
    return resArr.join("");
};

