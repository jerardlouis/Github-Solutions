/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 //Runtime: 72ms, Memory Usage: 33.4MB
var bstToGst = function(root) {
    /*
    Construct a dictionary from the elements in the original tree as key
    The value of the key will be the greater than sum
    Remake the tree based off of the original tree but return a tree of just the values
    */
    var carry = 0
    const traverse = (node) => {
        if(node != null){
            traverse(node.right);
            carry += node.val;
            node.val = carry;
            traverse(node.left);
        }
    }
    traverse(root);
    return root;
};
