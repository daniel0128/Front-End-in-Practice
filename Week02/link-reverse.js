function LinkNode(val, next) {
    this.val = val;
    this.next = next;
}
let tail = new LinkNode('tail', undefined);
let d = new LinkNode('d', tail);
let c = new LinkNode('c', d);
let b = new LinkNode('b', c);
let a = new LinkNode('a', b);
let head = new LinkNode('head', a);
function output(linkNode) {
    if (!linkNode) return;
    console.log(linkNode.val);
    output(linkNode.next);
};

//output(head)

function reverse(head) {
    if (!head || !head.next) return head;
    let next = head.next;
    let reverseHead = reverse(next);
    next.next = head;
    head.next = null;
    return reverseHead;
}

output(reverse(head));
