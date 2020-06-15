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
 * @param {number} val
 * @return {TreeNode}
 */
//Runtime: 172 ms, Memory Usage: 44.3MB
var insertIntoBST = function(root, val) {
   if(!root) return new TreeNode(val)
   if(root.val < val){
       if(!root.right){
           let node = new TreeNode(val)
           root.right = node
           return root
       }
       insertIntoBST(root.right,val)
   }else if(root.val > val){
       if(!root.left){
           let node = new TreeNode(val)
           root.left = node
           return root
       }
       insertIntoBST(root.left,val)
   } 
   return root 
};
