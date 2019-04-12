// Given a string, compute recursively (no loops) a new string where all the 
// lowercase 'x' chars have been changed to 'y' chars.

var result: string = "";

function create_string(blabla: string): any {
    if (blabla.length > 0){
        if (blabla[0] === 'x') {
            result += 'y';
        } else {
            result += blabla[0];
        }
        return create_string(blabla.substr(1));
    } else {
        return result;
    }
}
console.log(create_string("x tho "));
addEventListener
  DataTransfer
  