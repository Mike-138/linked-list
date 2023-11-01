function Node(value) {
    let next = null;

    return {
        value,
        next
    }
}

function LinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    const append = (value) => {
        let currentNode = head;
        let previousNode;

        while (currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        
        if (previousNode) {
            previousNode.next = Node(value);
        } else {
            head = Node(value);
        }
    }

    const prepend = (value) => {
        newHead = Node(value);
        newHead.next = head;
        head = newHead;
    }

    return {
        get head() {
            return head
        },
        get tail() {
            let currentNode = head;
            let previousNode = head;
            while (currentNode) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            return previousNode;
        },
        get size() {
            let currentNode = head;
    
            while (currentNode) {
                size += 1;
                currentNode = currentNode.next;
            }
    
            return size;
        },
        append,
        prepend
    }
}

const list = LinkedList();
console.log(list.size);
list.append(1);
list.append(2);
console.log(list.size);