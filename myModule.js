module.exports.beBasic = ()=>{
    count();
    return "That's so fetch";
}

let count =()=>{
    for(let i=0;i<10;i++){
        console.log(i);
    }
}
/*--------------------------------------- */
module.exports.count =()=>{
    for(let i=0;i<=10;i++){
        console.log(i);
    }
}