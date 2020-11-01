




var factorialRc = function(n) {
    if (n === 1) {
      return n;
    }
    return n * factorialRc(n - 1);
  }
  
  
  var factorialIt = function(n) {
      var c = n
      for(var i=1; i<c; i++){
        n = n * i;
      }
      return n;
  }
  
  
  //console.log(factorialRc(2));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // 0 1 1 2 3 5 8 13 21 34 55 89
  
  
  var fibIt = function(n) {
    
    if (n === 1) {
      return 1;
    }
    
    var s = 0;
    var f = 1;
    var o = 0;
    
    for(var i = 1; i<n; i++){
        o = s + f;
        var temp = f;
        f = f + s;
        s = temp;
      
    }
    
    return o;
  }
  
  // console.log(fibIt(11));
  
  
  
  var fibRc = function(n) {
    if (n < 2) {
      return n;
    }
    
    
    return fibRc(n - 1) + fibRc(n - 2)
  }
  
  
  console.log(fibRc(3));
  
  
  
  
  
  var revstr = function(str) {
    
    if (str === "") {
      return "";
    }
    
    return str.substring(str.length -1 ) + revstr(str.substring(0, str.length - 1));
  }
  
  
  
  var string = "abcd";
  
  
  
  
  console.log(revstr(string));



 //https://2ality.com/2015/06/tail-call-optimization.html 


 