/**
 * title: 109. Convert Sorted List to Binary Search Tree
 * des:Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 * time:2017/4/22
 * version:1
 * url:https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/#/description
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function(head) {
    if(!head) return null;
    if(!head.next) return new TreeNode(head.val);

    var mid=head;
    var pre=head;
    var last=head;
    
    while(last){
        last=last.next;
        if(last){
            pre=mid;
            mid=mid.next;
            last=last.next;
        }
    }
    
    pre.next=null;
    var root=new TreeNode(mid.val);
    root.left=sortedListToBST(head);
    root.right=sortedListToBST(mid.next);
    return root;
};