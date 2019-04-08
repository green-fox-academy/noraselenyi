let lineCount: number = 4;

//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

 
for (var i = 0; i < lineCount; i++){
    var star: string = "";
    for (var j = 1; j < lineCount-i; j++) {
      star += " ";
    }
    for (var k = 1; k <= (2*i+1); k++) {
      star += "*";
    }
    console.log(star);
  }
