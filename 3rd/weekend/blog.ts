// Create a Blog class which can
// - store a list of BlogPosts
// - add BlogPosts to the list
// - delete(int) one item at given index
// - update(int, BlogPost) one item at the given index and update it 
//      with another BlogPost

import { BlogPost } from '../wednesday/blogpost';

class Blog {
    posts: BlogPost[];

    constructor(posts: any[]){
        this.posts = posts;
    }

    addToPosts(post: BlogPost): void{
        this.posts.push(post);
    }    

    deletePost(given_index: number){
        blog.posts.splice(given_index, 1);
        return blog.posts;
    }

    update(given_index: number, newpost: BlogPost): void{
        blog.posts[given_index] = newpost;

    }

}


const first: BlogPost = new BlogPost("Lorem Ipsum","John Doe","2000.05.04.", "Lorem ipsum dolor sit amet.");
const second: BlogPost = new BlogPost("Wait but why","Tim Urban","2010.10.10.","A popular long-form, stick-figure-illustrated blog about almost everything.");
const third: BlogPost = new BlogPost( "One Engineer Is Trying to Get IBM to Reckon With Trump",
"William Turton",
"2017.03.28.",
"Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.");

const blog: Blog = new Blog([]);
const newpost: BlogPost = new BlogPost("That's ma new post", 'Nora','2019','Newpost salllalala');

blog.addToPosts(first);
blog.addToPosts(second);
blog.addToPosts(third);

console.log('Original posts:\n', blog, blog.posts.length);

blog.deletePost(2);
console.log('\nLast post erased: ', blog, blog.posts.length);

console.log('\nBlog to change: ', blog.posts[1]);
blog.update(1, newpost);
console.log('\nAnd the new post is:', blog.posts[1])


console.log(blog)
