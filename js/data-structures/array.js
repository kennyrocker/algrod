/**
 * Reverse a string without affecting special characters
   Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), 
   reverse the string in a way that special characters are not affected.

    Example:

    Input:   str = "a,b$c"
    Output:  str = "c,b$a"
    Note that $ and , are not moved anywhere.  
    Only subsequence "abc" is reversed

    Input:   str = "Ab,c,de!$"
    Output:  str = "ed,c,bA!$"
 */


var str = "Ab,c,de!$";

// helper
var isAlphabetic = function(cc) {
    return (cc > 64 && cc < 91) || (cc > 96 && cc < 123 );
}


// O(2n) solution
var reverse = function(str) {
  var sc = [];
  var nc = [];
  var index = 0;
  
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    var cc = str.charCodeAt(i);
    
    if ( isAlphabetic(cc)) {
      
      nc.push(c);
      sc.push(index);
      index = index + 1;
    } else {
      
      sc.push(c);
    }
  }

  for (var j=0; j<nc.length; j++) {
    var id = sc.indexOf(j);
    sc[id] = nc[nc.length - 1 - j];
  }
  

  return sc.join("");
}


// O(n) solution
var reverseFast = function(string) {

  var str = string.split("");
  
  var r = str.length - 1; 
  var l = 0;
  
  while(l < r) {
    
    if (!isAlphabetic(string.charCodeAt(l))) {
        l++;
    } 
    else if (!isAlphabetic(string.charCodeAt(r))){
        r--;
    }
    else {
      var temp = str[l];
      str[l] = str[r];
      str[r] = temp;
      l++;
      r--;
    }
    
  }
  
  return str.join("");
}


console.log(reverse(str));
console.log(reverseFast(str));























var str = "ccbcc";



var ip = function(string) {
  var l = 0;
  var r = string.length -1;
  while(r > l) {
    if (string[l] === string[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}


var gp = function(string) {
  
  

  var output = [];

  
  var str = string.split("");
  
  for( var i =0; i< string.length; i++) {
    
    for (var j=0; j <= string.length; j++) {
      
      if (j > i){
         var subStr = string.substring(i, j);
   
        console.log(i + ' | ' + j + ' => ' + subStr);
      
      
        if ( subStr !== "" && ip(subStr)) {
        
          output.push(subStr);
        
        }
      }
      
     
      
    }
  }
  

  
  return output;
  
}


//console.log(gp(str));


//console.log(ip(str));






var addStrings = function(v, s, temp, index){
  var len = s.length;
  var str = "";
  var current = temp;
  
  if (index === 0) {
    temp = [];
  }
  
  for(var i = index; i< len; ++i) {
    str = str + s[i];
    
    if (ip(str)) {
      
      temp.push(str);
      
      if(i + 1 < len) {
        v = addStrings(v, s, temp, i+1);
      } else {
        v.push(temp);
      }
      
      temp = current;
    }
    
  }
  
  
  return v;
}



var partition = function(str, partitons) {
  var temp = [];
  var output = addStrings(partitons, str, temp, 0);
  console.log(output[0]);
}



var partitions = [];
partition("bcc", partitions);



