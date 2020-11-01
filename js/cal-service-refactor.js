/**
 * NOTE
 * 
    month           1       2       3       4       5       6       7       8       9       10       11       12        
    30.41666 
    day/month       30.41   60.83   91.24   121.66  152.08  182.49  212.91  243.33  273.74  304.16   334.58   364.99  



    biweek          1       2       3       4       5       6       7       8       9       10       11       12       13 
                    
    14.03846        14.03   28.07   42.11   56.15   70.19   84.23   98.26   112.3   126.34  140.38   154.42   168.46   182.49
    day/biweek     
                    14      15      16      17      18      19      20      21      22       23      24       25       26

            196.53  210.57  224.65  238.65  252.69  266.73  280.76  294.8   308.84   322.88  336.92   350.96   364.99

*
*/







var roundToCents = function(input) {
    return Math.floor(input * 100) / 100;
}



var isBiWeeklyCycleBelongToTheMonth = (week, month) => {
  // 30.41 days = 1 month
  // 1 biweek = 14 days
  // to see if the by week include in the month
  //  1  2  3  4  5  6  7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
  // 14 28 42 56 70 84 98 112 126 140 154 168 182 196 210 224 238 252 266 280 294 308 322 336 350 364
  //    30.41  60.82 91.23 121.64  152.05      182.46  212.87   243.28  273.69  304.10   334.51   364.92

  // each year there is 2 month of 3 weeks with bi weekly cycle
  // default 3 weeks months to 7 and 12
  var biWeeklyDayOfYear = week * 14;
  var monthlyDayOfYear = month * 365 / 12;
  var previousMonthEndDayOfYear = ((month - 1) < 0) ? (365 / 12) : (month - 1) * (365 / 12);
  return (monthlyDayOfYear > biWeeklyDayOfYear) && (previousMonthEndDayOfYear < biWeeklyDayOfYear);



}

/* This is base off a very generic week/month separation, not accurate to the calendar */
var isBiWeekFirstOfMonth = (biWeek, month) => {
  return month < 7 && biWeek === ((month * 2) - 1) || month > 6 && biWeek === month * 2;
}





/**
@param(biweekly) biweekly cycle : 1 < biweekly < 26
@return equivalent month to the biweekly cycle for the frist time : 1 < month < 13 || -1

1  2  3  4  5

1 -1  2 -1  

*/
var equivalentMonthOfBiweekly = (biweekly) => {
/**
 
  
*/ 

var month = -1;


return month;
}


var cal = {
  "id": "106363041",
  "name": "Comapny A",
  "lastUpdated": 1587759094366,
  "constantIncome":[
    {
      "id":728114984,
      "name":"condo rental",
      "amount":1900,
      "cycle":12,
      "active":true
    }
  ],
  "constantExpense":[
    {
      "id":2223526,
      "name":"internetBill",
      "amount":50,
      "cycle":12,
      "active":true
    },
    {
      "id":2223528,
      "name":"bmw gas",
      "amount":120,
      "cycle":12,
      "active":true
    },
    {
      "id":2243558,
      "name":"lunch",
      "amount":250,
      "cycle":12,
      "active":true
    }
  ],
  "periodicalVariable":[
    {
      "id":4253512,
      "name":"condo property tax",
      "amount":-247,
      "cycle":12,
      "active":true,
      "affectiveMonth":[
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "id":2223512,
      "name":"auto repair",
      "amount":-100,
      "cycle":12,
      "affectiveMonth":[
        3,
        8,
        12
      ],
      "active":true
    },
    {
      "id": 354572562,
      "name": "stock share vesting",
      "amount": 6500,
      "cycle": 1,
      "active": true,
      "affectiveMonth": [
        12
      ]
    }
  ]

};


var p = [
    {
      "id":4253512,
      "name":"condo property tax",
      "amount":-247,
      "cycle":12,
      "active":true,
      "affectiveMonth":[
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    {
      "id":2223512,
      "name":"auto repair",
      "amount":-100,
      "cycle":12,
      "affectiveMonth":[
        3,
        8,
        12
      ],
      "active":true
    },
    {
      "id": 354572562,
      "name": "stock share vesting",
      "amount": 6500,
      "cycle": 1,
      "active": true,
      "affectiveMonth": [
        12
      ]
    }
  ];


var pp = [
    {
      "id":4253512,
      "name":"condo property tax",
      "amount":-247,
      "cycle":12,
      "active":true,
      "affectiveMonth":{
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1
      }
    },
//       {
//         "id":2223512,
//         "name":"auto repair",
//         "amount":-100,
//         "cycle":12,
//         "affectiveMonth":{
//           3: 1,
//           8: 1,
//           12: 1
//         },
//         "active":true
//       },
//       {
//         "id": 354572562,
//         "name": "stock share vesting",
//         "amount": 6500,
//         "cycle": 1,
//         "active": true,
//         "affectiveMonth": {
//           12: 1
//         }
//       }
  ];








var getPeriodicSumWithMonthlyConverstion = function(items, monthOfYear) {
  var len = items.length;
  if (!items || len === 0 || monthOfYear < 1) {
    return 0;
  }
  var balance = 0;
  for (var i = 0; i < len; i++) {
      if (items[i].active === false) {
        continue;
      }
      var itemAmount = items[i].amount;
      if (items[i].cycle === 12 && 
          items[i].affectiveMonth[monthOfYear] !== undefined) {
           balance += itemAmount;
      }
      if (items[i].cycle === 1 && 
          items[i].affectiveMonth[monthOfYear] !== undefined) {
        balance += itemAmount;
      }
  }
  return roundToCents(balance);
}


// console.log(getPeriodicSumWithMonthlyConverstion(pp, 3));
// console.log(getPeriodicSumWithMonthlyConverstion(pp, 4));
// console.log(getPeriodicSumWithMonthlyConverstion(pp, 5));
// console.log(getPeriodicSumWithMonthlyConverstion(pp, 12));










var getPeriodicSumWithBiweeklyConvertsion = function(items, biWeekOfYear) {
  var len = items.length;
  if (!items || len === 0) {
    return 0;
  }
  var balance = 0;
  for (var i = 0; i < len; i++) {
      if (items[i].active === false) {
        continue;
      }
      // monthly
      if (items[i].cycle === 12) {
   
         console.log('affectiveMonth obj ' ,items[i].affectiveMonth, 'biweek cycle => '+ biWeekOfYear);  
        
          for (var j = 0; j < items[i].affectiveMonth.length; j++) { // TODO:: improve O(n^2)
            
             
             var affectiveMonthMap = items[i].affectiveMonth[j];
             // var equivalentMonth = equivalentMonthOfBiweekly(biWeekOfYear);
             // if (affectiveMonthMap[equivalentMonth] !== undefined) {
             //    var itemAmount = (month === 7 || month === 12) ? (items[i].amount / 3) : (items[i].amount / 2);
             //    balance += itemAmount;   
             //}
            
            
            
             var month = items[i].affectiveMonth[j];
            
            
             if (isBiWeeklyCycleBelongToTheMonth(biWeekOfYear, month)) {
                  // each year there is 2 month of 3 weeks with bi weekly cycle
                  // default 3 weeks months to 7 and 12
                  var itemAmount = (month === 7 || month === 12) ? (items[i].amount / 3) : (items[i].amount / 2);
                  balance += itemAmount;
             }
          }
        
      }
      // annually
      if (items[i].cycle === 1) {
//             var month = items[i].affectiveMonth[0];
//             if (isBiWeekFirstOfMonth(biWeekOfYear, month)) {
//                 balance += items[i].amount;
//             }
      }
  }
  return roundToCents(balance);
}


console.log(getPeriodicSumWithBiweeklyConvertsion(pp, 3));
// console.log(getPeriodicSumWithBiweeklyConvertsion(pp, 4));
// console.log(getPeriodicSumWithBiweeklyConvertsion(pp, 5));
// console.log(getPeriodicSumWithBiweeklyConvertsion(pp, 12));









