// var arr = ['a','c','b', 'x', 'x','c','m','o','v'];
var arr = [-3,-2, 4, 2, 4, 3, 0, 7, -1];

// console.log(arr.sort());


var bubbleSort = function(arr) {
  
  for(var i = 0; i < arr.length; i++) {
     
    for (var j = 0; j < arr.length; j++) {
       
       if ( i !== j && arr[i] < arr[j]) {
         
           var temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
         
       }
     }
  }
  
  
  return arr;
}


// console.log(bubbleSort(arr));


var sort = function(left, right) {
  
  var result = [];
  var ld = 0;
  var rd = 0;
  
  while(ld < left.length && rd < right.length) {
    if (left[ld] < right[rd]) {
      result.push(left[ld]);
      ld++;
    } else {
      result.push(right[rd]);
      rd++;
    }
  }
  
  return result.concat(left.slice(ld)).concat(right.slice(rd));
  
}



var mergeSort = function(arr) {
  
  var len = arr.length;
  if (len === 1) return arr;
  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  
  return sort(
    mergeSort(left),
    mergeSort(right)
  );
  
}


// console.log(mergeSort(arr));



var swap = function(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}


var partition = function(arr, start, end) {
  var piviot = arr[end];
  var pIndex = start;

  for (var i = start; i < end; i++) {
    if (arr[i] < piviot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }
  swap (arr, end, pIndex);
  return pIndex;
} 

// CT best O(n log n) worst O(n^2)
// MS O(log n)
var quickSort = function(arr, start, end) {
  if (start >= end) return;
  var pIndex = partition(arr, start, end);
  quickSort(arr, start, pIndex -1);
  quickSort(arr, pIndex + 1, end);
}

console.log(arr);
// partition(arr, 0, arr.length - 1);
quickSort(arr, 0, arr.length - 1);
console.log(arr);

