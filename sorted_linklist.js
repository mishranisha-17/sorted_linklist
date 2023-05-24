class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    addNode(data) {
      let newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }

    mergeLists(list1, list2) {
      let dummyNode = new Node(0);
      let current = dummyNode;
      while (list1 && list2) {
        if (list1.data < list2.data) {
          current.next = list1;
          list1 = list1.next;
        } else {
          current.next = list2;
          list2 = list2.next;
        }
        current = current.next;
      }
      current.next = list1 || list2;
      return dummyNode.next;
    }

    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  let list1 = new LinkedList();
  list1.addNode(1);
  list1.addNode(2);
  list1.addNode(3);

  let list2 = new LinkedList();
  list2.addNode(4);
  list2.addNode(6);
  list2.addNode(5);

  console.log("List 1:");
  list1.printList();
  console.log("List 2:");
  list2.printList();

  let sortedList = new LinkedList();
  sortedList.head = sortedList.mergeLists(list1.head, list2.head);
  console.log("Sorted List:");

