
let newArr = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newArr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }


return newArr;
}

function countDown(num1){
    while (num1 > -1)
    console.log(num1--);
}
