var str1 = 'abc';
var str2 = 'axc';


var longestSequrence = function(text1, text2) {

    var n = text1.length;
    var m = text2.length;
    if (n === 0 || m === 0) return 0;

    var max = 0;
    var dp = [];

    for(var i = 0; i< n+1; i++) {
        var temp = [];
        for (var j= 0; j < m+1; j++){
            temp.push(0);
        }
        dp.push(temp);
    }

    for ( var i = 1; i< n+1; i++) {
        for (var j  = 1; j< m+1; j++) {

            if (text1.charAt(i -1) === text2.chartAt(j-1)) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }   

            max = Math.max(max, dp[i][j]);
        }
    }

    return max;

}