// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"
'use strict';


class Postit{
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(
    backgroundColor: string,
    text: string,
    textColor: string  
    ){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }

    giveInfoAboutPostit(): void{
        console.log(
            ` Background color is: ${this.backgroundColor} the message is: ${this.text}, and the text color is: ${this.textColor}.'`);

    }
}

const first: Postit = new Postit('orange','Idea1','blue');
const second: Postit = new Postit('pink','Awesome','black');
const third: Postit = new Postit('yellow','Superb!','green');


first.giveInfoAboutPostit();
second.giveInfoAboutPostit();
third.giveInfoAboutPostit();