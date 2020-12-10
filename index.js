
var exercice1_data_input = [65, 2, 87, 30, 16, 5, 14, 67, 56, 8];
var exercice2_data_input = [65, 2, 87, 30, 16, 5, 14, 67, 56, 8];
var exercice3_data_input = 123456789;



function exo1(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 != 0){
            array[i]+= " != pair";
        }else{
            array[i]+= " = pair";
        }
    }
    console.log(array);
}

function exo2(array){
    var sum  = 0;
    var min = array[0]; 
    var max = array[0];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if(array[i] < min){
            min = array[i];
        }
        if (array[i] > max){
            max = array[i];
        }
    }
    moy = sum / array.length;
    console.log('moyenne = ' + moy +' - Plus petit = ' + min + ' - Plus grand = ' + max );
}

exo1(exercice1_data_input);
exo2(exercice2_data_input);


