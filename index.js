var data = [65, 2, 87, 30, 16, 5, 14, 67, 56, 8];

function checkIfNumberOdd(array){
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 != 0){
            array[i]+= " != pair";
        }else{
            array[i]+= " = pair";
        }
    }
    return array;
}

console.log(checkIfNumberOdd(data));



