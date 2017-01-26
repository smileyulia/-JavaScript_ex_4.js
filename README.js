1. 

function min(a,b){ 
    return ( a < b )? a : b; // если a < b вернуть a, если нет - b
}
console.log (min(0,10)) //0
console.log (min(0,-10)) //-10
=============================================================================================
2.

function countBs(strObj) {
    var count=0;
    for (var i=0; i <= strObj.length; i++){ //задаем цикл, с уcловием до последнего символа строки включительно
        if (strObj.charAt(i) == 'B'){ // если символ на позиции == B, считаем
            count += 1; // +1 при каждой итерации, если выполняется условие
        }
    }
    return (count); //возвращаем посчитанное
}
console.log (countBs('посчитаемBBBBBB')) //6
=============================================================================================
function countChar(strObj, symbol) {
    var count=0;
    for (var i=0; i <= strObj.length; i++){ 
        if (strObj.charAt(i) == symbol){ 
            count += 1; 
        }
    }
    return (count); 
}
console.log (countChar('просто длинная строка', 'н')) //2
