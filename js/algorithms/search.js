var arr = [1,3,5,7,9,9,11,21,24,26,28,30,62,64];


var binarySearch = function(arr, x) {
  
  var len = arr.length;
  
  if (len === 1) return arr[0] === x;
  
  var left = 0;
  var right = len - 1;

  
  while(left < right) {
    
      var mid = Math.floor(left + (right - left) / 2);
      
      console.log(mid);
      
      if (arr[mid] < x) {
         left = mid + 1;
      } else if (arr[mid] > x) {
         right = mid;
      } else {
        return true;
      }
  }
  
  return false;
  
}


console.log(binarySearch(arr, 300));