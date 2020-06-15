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
 * @return {number}
 */
/*
//Runtime: 88ms, Memory Usage: 46.5MB
int maxDepth(node* node)  
{  
    if (node == NULL)  
        return 0;  
    else
    {  
        int lDepth = maxDepth(node->left);  
        int rDepth = maxDepth(node->right);  
      
        
        if (lDepth > rDepth)  
            return(lDepth + 1);  
        else return(rDepth + 1);  
    }  
}  
*/
var deepestLeavesSum = function(root) {
    /*
    Traverse the tree 
    */
    var sum = 0;
    const maxDepth = (tree) =>{
        if(tree == null){ return 0;}
        var lDepth = maxDepth(tree.left);
        var rDepth = maxDepth(tree.right);
        if(lDepth > rDepth){ return lDepth +1;}
        else{return rDepth +1;}
    }
    const traverse = (tree, depth, highest) =>{
        //console.log(tree.val);
        if(tree.left == null && tree.right == null && depth == highest){
            sum += tree.val;
        }
        if(tree.left){traverse(tree.left,depth+1, highest);}
        if(tree.right){traverse(tree.right,depth+1,highest);}
    }
    var highest = maxDepth(root);
    traverse(root,1,highest);
    return sum;
};
