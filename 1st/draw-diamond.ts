'use strict';

let lineCount: number = 7;

for (var i = 0; i <= lineCount-1; i++){
    var diamond: string = "";
    if (i < lineCount/2){
        for (var j = 1; j < lineCount-i-lineCount/2; j++){
            diamond +=  " ";
        }
        for (var k = 1; k <= (2*i)+1; k++){
            diamond += "*";
        }
        console.log(diamond);
    }
    var diamondbottom: string = "";
    if (i > lineCount/2){
        for (var l = 0; l <= lineCount/2-(lineCount-i); l++){
            diamondbottom += " ";
        }
        for (var m = i-lineCount/2+1; m <= lineCount-l; m++){
            diamondbottom += "*";
        }
        console.log(diamondbottom);
    }
    
}
