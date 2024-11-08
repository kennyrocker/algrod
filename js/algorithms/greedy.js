
https://www.techiedelight.com/activity-selection-problem/


// var input = [ [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [6, 10], [8, 11], [8, 12], [2, 13], [12, 14] ];


// var input = [ [0, 4], [5, 7], [3, 8], [6, 10], [8, 14], [8, 12], [2, 13], [12, 122] ];


// var input = [ [0, 4], [1, 17],  [9, 12], [5, 8], [9, 128], [9, 12] ];

// var input = [ [1, 17], [5, 8], [9, 12] ];


var input = [ [0, 1], [1, 4] , [1, 2], [3, 4] , [2, 3] ];

// expect output :: [ [1, 4], [5, 7], [8, 11], [12, 14] ]


var as = function(a) {

    if (a.length <= 1) return [];

    a = a.sort((a, b) => a[1] - b[1]);

    var k = 0;
    var ids = [ 0 ];

    for (var i = 1; i < a.length; i++) {
        if (a[i][0] >= a[k][1]) {
            ids.push(i);
            k = i;
        }
    }

    var out = [];

    ids.forEach(i => out.push(a[i]));

    console.log('output ::  ', out);

}

// as(input);


/* Complexity O(n^2) */

var activitySelect = function(a) {

    if (a.length <= 1) return [];

    a = a.sort((a, b) => a[1] - b[1]);

    // console.log(a);

    var out = [];
    var max = 0;

    for (var j = 0; j < a.length; j++) {

        var alpha = pass(a, j);
        if (j + 1 > a.length) continue;
        var beta = pass(a, j + 1);

        if (max > alpha.sum || max > beta.sum) continue;

        if (alpha.sum > beta.sum) {
            out = alpha.out;
            max = alpha.sum;
        } else {
            out = beta.out;
            max = beta.sum;
        }

    }

    // console.log('output ::  ', out);
    return out;

}

var pass = function(a, index) {
    var out = [];
    var sum = 0;
    var pEnd = 0;

    for (var i = index; i < a.length; i++) {
        var start = a[i][0];
        var end = a[i][1];

        if (start < pEnd) continue;
        out.push(a[i]);
        sum += (end - start);
        pEnd = end;
    }

    // console.log( index, out, sum);

    return { out, sum };
}


activitySelect(input);





https://leetcode.com/problems/non-overlapping-intervals/


// var intervals = [[1,2],[2,3],[3,4],[1,3]];

// var intervals = [[1,2],[2,3], [3,4], [3,5], [4,5]];  // => [3, 5]

var intervals = [[1,100],[11,22],[1,11],[2,12], [1, 11]];

 // expect out :: 1  ==> [1, 3]


var eraseOverlapIntervals = function (a) {

    if (a.length <= 1) return 0;
    var removeCount = 0;

    // sort based on end time ascending
    a = a.sort((a, b) => a[1] - b[1] );

    var k = 0;

    for (var y = 1; y < a.length; y++) {
        // console.log( ' k Index :: ' + k   +' ||   index :: ' + y + ' || s1 ::  ' +  a[k][1]  +  ' || f2 :: ' + a[y][0]);
        if (a[k][1] <= a[y][0]) {
            k = y;
        } else {
            removeCount++;
        }
    }
    return removeCount;

}

eraseOverlapIntervals(intervals);



https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/


    var points = [[10,16],[2,8],[1,6],[7,12]];



    // expect result :: @7,11  => 2




    /**
     * @param {number[][]} points
     * @return {number}
     */
    var findMinArrowShots = function(points) {
        points = points.sort((a,b) => a[1] - b[1]);
        var overlap = 0;
        var k = 0;
        for (var i = 1; i < points.length; i++) {
            if (points[i][0] > points[k][1]) {
                k = i;
            } else {
                overlap++;
            }
        }
        return points.length - overlap;
    };
    
    findMinArrowShots(points);
