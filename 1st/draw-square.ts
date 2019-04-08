
let lineCount: number = 6;


var sign: string = "%%";
var spaces: string = "";
for (let i = 0; i <= lineCount-2; i++){
    sign += "%"
    spaces += " "
}
console.log(sign);

for (let j = 0; j <= lineCount-2; j++){
    console.log("%"+spaces+"%");
}
console.log(sign);
