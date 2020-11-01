var sub = "aa";
var str = "aaaaa";



var findOccurences = function(sub, str){
	var count = 0;
    var sublen = sub.length;
    var strlen = str.length;
    
    for ( var i = 0; i< strlen; i++) {
        
        var window = str.slice(i, i + sublen);
        if (window.length === sublen && window.indexOf(sub) !== -1) {
         	count++;
        }
    
    }
		
    return count;
}

console.log(findOccurences(sub, str));



var arr = ['a','x','x','a','b','c','d','x','a','x'];

var findTwoMostOccurence = function(arr) {
    var mp = {};
    var track = [];  
  
    for (var i = 0; i< arr.length; i++ ){
        var n = arr[i];
        if (mp[n] === undefined) {
            mp[n] = 1;
        } else {
            mp[n] = mp[n] + 1;
        }
    }

    for (var m in mp) {
       var obj = {};
       obj.char = m;
       obj.count = mp[m];
       track.push(obj);
    }
  
    track.sort((a, b) => b.count - a.count);
    
    return [track[0].char, track[1].char];
  
}

console.log(findTwoMostOccurence(arr));
