function Node(value) {
    let next = null;

    return {
        value,
        next
    }
}

function LinkedList() {
    let head = null;

    function getHead() {
        return head;
    }

    function setHead(value) {
        head = Node(value);
    }

    function append(value) {
        let currentNode = head;
        let previousNode;

        while (currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        
        if (previousNode) {
            previousNode.next = Node(value);
        } else {
            setHead(value);
        }
    }

    return {
        getHead,
        append
    }
}

const list = LinkedList();
list.append(2);
list.append(3);
list.append(4);
console.log(list.getHead());