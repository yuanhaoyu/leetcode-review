/**
 * title: 21. Merge Two Sorted Lists
 * des:Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * time:2017/4/24
 * version:1
 * url:https://leetcode.com/problems/merge-two-sorted-lists/#/description
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 ===null) return l2;
    if(l2 ===null) return l1;
    
    var t;
    
    if(l1.val<l2.val){
        t=l1;
        t.next=mergeTwoLists(l1.next,l2);
    }else{
        t=l2;
        t.next=mergeTwoLists(l1,l2.next);
    }
    
    return t;
};