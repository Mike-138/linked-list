function Node(value) {
    let next = null;

    return {
        value,
        next
    }
}

function LinkedList() {
    let head = null;
    let tail;

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

    const size = () => {
        let size = 0;
        let currentNode = head;

        while (currentNode) {
            size += 1;
            currentNode = currentNode.next;
        }

        return size;
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
        append,
        prepend,
        size
    }
}