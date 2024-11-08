var nums = [2,7,9,4,5,6];
var target = 9;

var twoSum = function(nums, target) {
  
  var obj = {};
   
  for (var i = 0; i< nums.length; i++) {
    
     var delta = target - nums[i];

     if (obj[nums[i]]) {
       console.log(nums[i], delta);
       
     } else {
       obj[delta.toString()] = i;
     }
    
  }
  
};


twoSum(nums, target);






// var nums = [-1, 0, 1, 2, -1, -4];

var nums = [-1,0,1,2,-1,-4,0,-5,-2];


// [[-2,0,2],[-1,-1,2],[-1,0,1]]

/**
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  var len = nums.length;
  if (len < 3) return [];
  var result = [];
  
  var mp = {};
  
  // loop 1
  for (var i = 1; i< len; i++) {
    // storing - (nums[i - 1] + nums[i])  in an map
    mp[-(nums[i - 1] + nums[i])] = i;
  }
  
  console.log(mp);
  
  // map[ - (nums[i - 1] + nums[i]) ] = i;
  // loop 2
  for (var j = 0; j< len; j++) {
    // check if nums[i] is found from the map && i is not the value
    // find combination
    if ( mp[nums[j]] !== undefined && j !== mp[nums[j]] ) {
       var idx = mp[nums[j]];
       var com = [nums[j], nums[idx], nums[idx - 1] ];
       result.push(com);
    }
  }
  

  console.log(result);
  return result;
  
  
    
};

threeSum(nums);