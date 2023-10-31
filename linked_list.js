function Node(value) {
    let next = null;

    return {
        value,
        next
    }
}

function LinkedList() {
    let head = null;

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

    return {
        get head() {
            return head
        },
        append
    }
}
