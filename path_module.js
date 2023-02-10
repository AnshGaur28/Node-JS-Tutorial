const path = require('path');

// platform seperator
console.log(path.sep);

//  join method 

const filePath =path.join('/content/' ,'subfolder' , 'text.txt')
console.log(filePath)

//  Base Name 
console.log(path.basename(filePath));

//  absolute path
console.log(path.resolve(__dirname , 'content' , 'subfolder' , 'text.txt'))