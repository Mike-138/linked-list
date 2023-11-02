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

    const _getTail = () => {
        let currentNode = head;
        let previousNode = head;
        while (currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return previousNode;
    }

    const _getSize = () => {
        let currentNode = head;
        let size = 0;
    
        while (currentNode) {
            size += 1;
            currentNode = currentNode.next;
        }

        return size;
    }

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

    const atIndex = (index) => {
        let currentNode = head;

        if (index < 0) {
            let size = _getSize();
            index = size + index;
        }

        while (currentNode) {
            if (index === 0) {
                break;
            }
            currentNode = currentNode.next;
            index -= 1;
        }

        if (index > 0) {
            return "IndexError";
        }

        return currentNode;
    }

    const pop = () => {
        if (!head) {
            return "IndexError: Cannot pop an empty list";
        }
        let currentNode = head;
        let previousNode = head;
        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
        return currentNode;
    }

    const contains = (value) => {
        let currentNode = head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    const find = (value) => {
        let currentNode = head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index += 1;
        }
        return null;
    }

    return {
        get head() {
            return head
        },
        get tail() {
            return _getTail()
        },
        get size() {
            return _getSize()
        },
        append,
        prepend,
        atIndex,
        pop,
        contains,
        find
    }
}

module.exports = {
    Node,
    LinkedList
}
