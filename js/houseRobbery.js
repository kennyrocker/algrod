

var house = [1,5,1,5,2,4];



var rob = function(nums) {
  
    var n = nums.length;
    if( n === 0 ) return 0;
    if( n === 1 ) return nums[0];
    
    var dp = [];
    
    dp.push(nums[0]);
  
    dp.push(Math.max(nums[0], nums[1]));
    
    
    for (var i = 2; i < n; i++) {
      
        dp.push(Math.max(dp[i-1], nums[i] + dp[i-2]));
    
    }
    
    console.log(dp);
  
        

   return Math.max(dp[n-1], dp[n-2]);
  
}


//console.log(rob(house));


/* house robber can't rob first and last house additonal condition  */
var rb = function(arr) {
  
  var len = arr.length;
  if (len === 0) return 0;
  if (len === 1) return arr[0];
  
  var dp = [];
  dp.push(0);
  dp.push(arr[1]);
  
  for (var i = 2; i< len -1; i++) {
    dp.push(Math.max( dp[i - 1], dp[i - 2] + arr[i] ));
  }
  
  var dpl = dp.length;
  
  return Math.max(dp[dpl-2], dp[dpl-1]);
  
  
}

console.log(rb(house));