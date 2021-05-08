function sum(num1, num2){
    return num1 + num2;
}

function calc(num1,num2,callback) {
    return callback(num1, num2);
}

console.log(calc(8,2, sum));

function date(callback){
    console.log("date "+ new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log("printDate "+dateNow)
}

date(printDate);

