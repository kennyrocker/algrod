
var input = [2,1,1,2];
/* epect 4 https://leetcode.com/problems/house-robber/ */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  var map = {};
 
  var sub = function(arr, idx){
    
    if(idx > arr.length - 1) {
      return 0;
    }
    
    if(map[idx]){
      return map[idx];
    }
    
    
    var second = arr[idx] + sub(arr, idx+2);
    var first = sub(arr, idx+1);
    
    var max = Math.max(first, second);
    
    map[idx] = max;
    
    return max;
  }
  
  return sub(nums, 0);
 
}

console.log(rob(input));







https://leetcode.com/problems/climbing-stairs/discuss/427337/Javascript-Simple-Recursive-with-Caching
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let cache = {};
  
  function helper(n) {
   // base case
      if (n <=3 ) return n; 
  
  // place value in cache if not there
      if (cache[n] === undefined) {
          cache[n] = helper(n-1) + helper(n-2)
      }
  // always return the cached value to minimize duplicate computation
      return cache[n];
  }
  return helper(n);
};

















/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
  var max = 0;
  var last = 0;
  
  for (var i = 1; i < prices.length; i++) {
    
    last = last + prices[i] - prices[i - 1];
    
    if (last < 0) {
      last = 0;
    }
    
    max = Math.max(last, max);
    
  }
  

  return max;
  
};