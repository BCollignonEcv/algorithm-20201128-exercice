# Algorithmie - Exercice - 28 novembre 2020

## Exercice 1 - Savoir si les nombres d'un tableau sont paire ou non  

_Données_
+ Entrée :  [65, 2, 87, 30, 16, 5, 14, 67, 56, 8]
+ Sortie : [65 != pair, 2 = pair, ...]

### Pseudo Code

    ALGO checkOdd
        data: ARRAY<NUMBER>
        array_size: NUMBER
        i: NUMBER

    START
        FUNCTION sort(data)
            array_size <- data.LENGTH

        START
            FOR i FROM 0 TO array_size [ i <- i + 1 ] 
                IF data[i] % 2 = THEN
                    tmp <- data[i]
                    data[i] <- data[j]
                    data[j] <- tmp
                END IF
            END FOR
        END FUNCTION
    END ALGO

## Exercice 2 - Calculer la moyenne des chiffre d'un tableau

## Exercice 3 - Additionner les chiffre d'un nombre
