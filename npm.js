// NpM commands
// npm --v
// npm i <packageName>
// npm i -y 

//  we should always have a package json file to keep a track of all the dependencies and the packages involved in our project 

const _ = require('lodash')

const items = [1 ,[2 ,[3 ,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)

