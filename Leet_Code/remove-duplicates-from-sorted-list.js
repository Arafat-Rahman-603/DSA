/**
 * Removes duplicates from a sorted linked list.
 * @param {Object} head - The head node of the sorted linked list.
 * @returns {Object} The head node after removing duplicates.
 */
var deleteDuplicates = function(head) {

    let current = head; // Start traversal at the head node

    // Traverse the list until the end
    while (current && current.next) {
        // If current value matches next node value, bypass the next node
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // Otherwise, advance to the next node
            current = current.next;
        }
    }

    return head;
}

// Log traversal of duplicates deletion with a mock array representation
console.log(deleteDuplicates([1,1,2,3,3]))