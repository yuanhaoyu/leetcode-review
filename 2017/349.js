/**
 * title: 349. Intersection of Two Arrays
 * des:Given two arrays, write a function to compute their intersection.
 * Example: Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * version:1
 * url:https://leetcode.com/problems/intersection-of-two-arrays/#/solutions
 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1=onlySet(nums1);
    nums2=onlySet(nums2);
    var resultArr=[];
    for(var x in nums1){
        for(var y in nums2){
            if(nums1[x]==nums2[y]){
                resultArr.push(nums2[y]);
            }
        }
    }
    return resultArr;
};

function onlySet(arr){
    var t=[];
    for(var i in arr){
        if(t.indexOf(arr[i])<0){
            t.push(arr[i]);
        }
    }
    return t;
}