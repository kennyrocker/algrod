var prices = [7,2,3,10,1,5,3,6,4,20,2,2,40,20,3];
//var prices = [7,6,4,3,1,3];
// var prices = [1,2,3,4];
// var prices = [7,1,5,3,6,4];
var prices = [1,2,3,0,2];

var sellDay = 5;


var maxProfitSingle = function(prices) {
  
    var minPrice = prices[0];
    var maxProfit = 0;
  
    for(var i = 1; i< prices.length; i++) {
      
      console.log('minPrice : '+ minPrice + ' | maxProfit : '+maxProfit);
      
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else {
        maxProfit = Math.max(maxProfit, prices[i]-minPrice);
      }
  
      
    }
    return maxProfit;
  
}

//console.log(maxProfitSingle(prices));

    //console.log('buyDate : '+buyDate);


var maxProfitMulti = function(prices) {
  var len = prices.length;
  if (len <= 1) return 0;
  var maxProfit = 0;
  for (var i = 1; i< len; i++) {
    maxProfit += Math.max(0, prices[i] - prices[i-1]);
  }
  return maxProfit;
  
}
// console.log(maxProfitMulti(prices));


// cd is 1 day
var maxProfitCd = function(prices) {
  var len = prices.length;
  if (len <= 1) return 0;
  var profit = 0;
  for (var i = 1; i< len; i++) {
    var sellPrice = prices[i] - prices[i-1];
    if (sellPrice > 0) { 
      profit += sellPrice;
      i++;
    }
  }
  return profit;
  
}

console.log(maxProfitCd(prices));




