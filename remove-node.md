## Qs
1- Given that node1 is a Node instance and links to node2, which is another Node instance, how would you remove node1‘s link to node2?

```JS
//This removes the link from node1 to node2 and turns node1 into an orphan node.
node1.setNextNode(null)
```

2- Given that node1 is a Node instance and links to node2, which is another Node instance, how would you remove node1‘s link to node2?
```JS
// this removes the link from `node1` to `node2` and turns node1 into an orphan node.
node1.setNextNode(null)
```

3- Given the following code, what would be the output of line 3 and why?
```JS
const node1 = new Node(5)
const node2 = new Node(node1)
node2.getNextNode() //null

//When node2 is initialized, it contains no links to the next node.

```
**Note** When instances of our Node class are created, they are orphan nodes. The data property is set to the constructor argument, but the next node is null.

4- How do you determine if node1 is an orphan Node?
There are no nodes that point to it.
Yes! and orphan Node is one with no pointers to it.

5- What properties make a Node useful?
`data` helps to store information, and `next` is a link to other Nodes for easier traversal.