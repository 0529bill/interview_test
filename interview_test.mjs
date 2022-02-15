// 1. 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
function findFib(x) {
  if (x < 1) return 0;
  if (x < 3) return 1;
  return findFib(x - 2) + findFib(x - 1);
}

// 2. 使用 Linked List 實作 Stack ，實作需包含以下方法。
//  push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。

function Stack() {
  let length = 0;
  let head = null;

  let Node = function (elm) {
    this.elm = elm;
    this.next = null;
  };
  this.size = function () {
    return length;
  };
  this.head = function () {
    return head;
  };
  this.push = function (elm) {
    let node = new Node(elm);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.pop = function () {
    if (!head) {
      return null;
    }

    let currentNode = head;
    let prevNode = currentNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    length--;
    if (length == 0) {
      head = null;
    }
    return currentNode;
  };
}

// 3. 將下列輸入資料整合成期望的輸出結果。
// 輸入資料:
// const userIds = [‘U01’, ‘U02’, ‘U03’]
// const orderIds = [‘T01’, ‘T02’, ‘T03, ‘T04’]
// const userOrders = [
// { userId: ‘U01’, orderIds: [‘T01’, ‘T02’] },
//  	{ userId: ‘U02’, orderIds: [] },
//  	{ userId: ‘U03’, orderIds: [‘T03’] },
// ]
// const userData = { ‘U01’: ‘Tom’, ‘U02’: ‘Sam’, ‘U03’: ‘John’ }
// const orderData = {
// ‘T01’: { name: ‘A’, price: 499 },
// ‘T02’: { name: ‘B’, price: 599 },
// ‘T03’: { name: ‘C’, price: 699 },
// ‘T04’: { name: ‘D’, price: 799 }
// }
// 輸出結果:
// const result = [
// {
// 	user: { id: ‘U01’, name: ‘Tom’ },
// orders: [
// { id: ‘T01’, name: ‘A’, price: 499 },
// { id: ‘T02’, name: ‘B’, price: 599 },
// ],
// },
// …,
// ]

function getResult() {
  let result = [];

  for (let i = 0; i < Object.keys(userData).length; i++) {
    let [{ orderIds: targetOrder }] = userOrders.filter(
      (t) => t.userId == Object.keys(userData)[i]
    );
    let targeted = [];
    let filteredOrder = targetOrder.reduce(
      (obj, key) => targeted.push({ ...obj, id: key, ...orderData[key] }),
      {}
    );
    result.push({
      user: { id: Object.keys(userData)[i], name: Object.values(userData)[i] },
      orders: [...targeted],
    });
  }
  return result;
}
getResult();
