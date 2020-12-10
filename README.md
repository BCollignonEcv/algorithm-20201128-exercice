# Algorithmie - Exercice - 28 novembre 2020

## Exercice 1 - Savoir si les nombres d'un tableau sont paire ou non  

_Données_
+ Entrée :  [65, 2, 87, 30, 16, 5, 14, 67, 56, 8]
+ Sortie : [65 != pair, 2 = pair, ...]

### Pseudo Code

    ALGO exo1
        data: ARRAY<NUMBER>
        array_size: NUMBER
        i: NUMBER

    START
        FUNCTION sort(data)
            array_size <- data.LENGTH

        START
            FOR i FROM 0 TO array_size [ i <- i + 1 ] 
                IF data[i] % 2 = 0 THEN
                    data[i] <- data[i] + ' = pair'
                ELSE
                    data[i] <- data[i] + ' != pair'
                END IF
            END FOR
        END FUNCTION
    END ALGO

### Code Javascript

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

## Exercice 2 - Calculer la moyenne des chiffre d'un tableau

_Données_
+ Entrée :  [65, 2, 87, 30, 16, 5, 14, 67, 56, 8]
+ Sortie : Moyenne 35 - Plus petit = 2, Plus grand = 87

### Pseudo Code

    ALGO exo2
        data: ARRAY<NUMBER>
        array_size: NUMBER
        moy: NUMBER
        min: NUMBER
        max: NUMBER
        i: NUMBER

    START
        FUNCTION max(data)
            array_size <- data.LENGTH
            moy <- 0

        START
            min <- data[0]
            max <- data[0]
            FOR i FROM 0 TO array_size [ i <- i + 1 ] 
                moy <- moy + data[i] 
                IF data[i] < min THEN
                    min <- data[i]
                END IF
                IF data[i] > max THEN
                    max <- data[i]
                END IF
            END FOR
            moy <- moy / array_size
        END FUNCTION
        PRINT('Moyenne : ' + moy + ' - Min : ' + min + ' - Max : ' + max)
    END ALGO

### Code Javascript

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

## Exercice 3 - Additionner les chiffre d'un nombre

