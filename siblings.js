const Node = require('./Node')

const oldest = new Node('John');
const middle = new Node('Jacob');
const youngest = new Node('Jingleheimer');
 
youngest.setNextNode(middle);
middle.setNextNode(oldest);
 
let currentSibling = youngest;
let oldestName = '';
while(currentSibling !== null) {
  oldestName= currentSibling.data;
  currentSibling= currentSibling.getNextNode();
}
 
console.log(`There goes ${oldestName} Schmidt!`);