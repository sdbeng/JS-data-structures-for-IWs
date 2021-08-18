class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
    setNextNode(node){
        if(node instanceof Node || node === null){
            this.next = node
        }else{
            throw new Error('Next node must be a member of the Node class')
        }
    }
    getNextNode(){
        return this.next
    }
}
// the sequence could be: 
// vanilla->strawberry->coconut
const strawberryNode = new Node('Strawberry tasty!')
const vanillaNode = new Node('Vanilla')
const coconutNode = new Node('Coconuts for coconut')

vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

//set the current node and iterate over to organize the order
let currentNode = vanillaNode
while(currentNode !== null){
    console.log(currentNode.data)
    currentNode = currentNode.getNextNode()
}
module.exports = Node

// prints 
/* Vanilla
Strawberry tasty!
Coconuts for coconut
*/
