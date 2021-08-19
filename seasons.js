const LinkedList = require('./LinkedList');

const seasons = new LinkedList()
seasons.printList()
seasons.addToHead('summer')
seasons.addToHead('spring')
seasons.printList()
seasons.addToTail('fall')
seasons.addToTail('winter')
seasons.printList()
seasons.removeHead()
seasons.printList()

/* prints
<head> <tail>
<head> spring summer <tail>
<head> spring summer fall winter <tail>
<head> summer fall winter <tail>
*/