/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 //Runtime 72ms, Memory UsageL 42.2MB
var shuffle = function(nums, n) {
  /*
  So the array has 2*n number of elements
  Create new array, for i in range nums.length/2, 
  if i%2 != 1 newArr.push(nums[i]) else 
  */
    var newArr = [];
    for(var i = 0; i < nums.length/2; i++){
        newArr.push(nums.slice(0,n)[i]);
        newArr.push(nums.slice(n)[i]);
    }
    return newArr;
    
};
