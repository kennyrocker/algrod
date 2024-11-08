var arr = [1,3,5,7,9,9,11,21,24,26,28,30,62,64];

var arr = [26,28,30,62,64,1001,3,5,7,9,9,11,21,24];



var findMin = function(arr) {
  var min = arr[0];
  var len = arr.length;
  for (var i = 0; i< len; i++) {
     if (arr[i] < min) {
       min = arr[i];
     } 
  }
  return min;
};

console.log(findMin(arr));

var findMinBS = function(arr) {
  
  var l = 0;
  var r = arr.length - 1;
  
  while(l < r) {
    var m = Math.floor(l + (r -l)/2);
    if (arr[m] < arr[r]) {
      r = m + 1;
    } else if (arr[m] > arr[r]) {
      l = m;
    } else {
      r--;
    }
    
  }
  
  return arr[l];
}

console.log(findMinBS(arr));