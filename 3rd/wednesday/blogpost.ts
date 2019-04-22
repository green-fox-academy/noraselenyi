// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate


'use strict';


class BlogPost{
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(
        iauthorName: string,
        ititle: string,
        ipublicationDate: string,
        itext: string
    ){
        this.authorName = iauthorName;
        this.title = ititle;
        this.text = itext;
        this.publicationDate = ipublicationDate;
    }

    giveInfoAboutPost(): void{
        console.log(
            ` \n"${this.title}" titled by ${this.authorName} posted at "${this.publicationDate}".
             - ${this.text}'
            `);

    }
}

export { BlogPost };

const first: BlogPost = new BlogPost("Lorem Ipsum","John Doe","2000.05.04.", "Lorem ipsum dolor sit amet.");
const second: BlogPost = new BlogPost("Wait but why","Tim Urban","2010.10.10.","A popular long-form, stick-figure-illustrated blog about almost everything.");
const third: BlogPost = new BlogPost( "One Engineer Is Trying to Get IBM to Reckon With Trump",
"William Turton",
"2017.03.28.",
"Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.");


// function main(){
//     first.giveInfoAboutPost();
//     second.giveInfoAboutPost();
//     third.giveInfoAboutPost();
// }
// main();