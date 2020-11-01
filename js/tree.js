// Tree None Binary Tree
// https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393


function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}


function Tree(data) {
    var node = new Node(data);
    this._root = node;
}





// This method traverses a tree with depth-first search.  
Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0; i < currentNode.children.length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
         
        // step 1
    })(this._root);
 
};





var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];



console.log(tree);

/*
 
creates this tree
 

                 one
                  |
        --------------------
       two      three     four 
        |                   |
    ---------           ---------
  five     six                 seven 
    
*/

// tree.traverseDF(function(node) {
//     console.log(node.data)
// });

/*

logs the following strings to the console
 
'five'
'six'
'two'
'three'
'seven'
'four'
'one'
 
*/


function Queue() {
    this.dataStore = []
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element)
    }
    this.dequeue = function dequeue() {
        return this.dataStore.shift()
    }
    this.front = function front() {
        return this.dataStore[0]
    }
    this.back = function back() {
        return this.dataStore[this.dataStore.length - 1]
    }
}
 

// This method traverses a tree with bread-first search.  
Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
 
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0; i < currentTree.children.length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};


// tree.traverseBF(function(node) {
//     console.log(node.data)
// });




Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};


// tree is an example of a root node
tree.contains(function(node){
    console.log('data => ' + node.data);

    if (node.data === 'two') {
        console.log(node);
    }
}, tree.traverseBF);





Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};