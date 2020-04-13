/*

let fs = require('fs')
let myModule = require('./myModule.js');

console.log(myModule.beBasic());

console.log(myModule.count());


let content = 'some more words';

fs.writeFile('story.txt',content,function(err, data){
    if(err) {
        console.log('Error write file.')
    }
    else {
        console.log(content)
        console.log("file written successfully")
    }
})


fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log('There was an error.')
    }
    else {
        console.log(data)
    }
})


fs.appendFile('story.txt',content,function(err, data){
    if(err) {
        console.log('Error write file.')
    }
    else {
        console.log(content)
        console.log("file written successfully")
    }
})

*/
/*
let i=0;

const count=()=>{
    console.log('count is at',i);
    i++;
}
let myTimer = setInterval(count,1000);*/

let moment = require('moment');

console.log(moment().format("dddd MM DD YY"));

console.log(moment().format("dddd MMMM Do YYYY"));