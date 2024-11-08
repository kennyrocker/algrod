console.log('LinkedList JS Loaded');

function LinkList() {
    this.head = null;
    this.tail = null;

    this.append = function(node) {
        if (this.head === null && this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
            this.tail = node;
        }
    }

    this.prepend = function(node) {
        let reference = this.head;
        this.head = node;
        this.head.next = reference;
    }

    this.find = function(value) {
        if (this.head.value === value) return "found value : " + value;

        let current = this.head;
        while(current.next) {
            current = current.next;
            if (current.value === value) return "found value : " + value;
        }
        return "no value : " + value + " found";
    }


    this.print = function() {
        let current = this.head;
        console.log(current.value);
        while(current.next) {
            current = current.next;
            console.log(current.value);
        }
    }
}

function Node(value) {
    this.value = value;
    this.next = null;
}


let lks = new LinkList();

let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);



lks.append(node1);
lks.append(node2);
lks.append(node3);
lks.prepend(node0);


lks.print();
console.log(lks.find(1));

