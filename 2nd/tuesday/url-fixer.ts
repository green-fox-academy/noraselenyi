'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

var replaced: string = url.replace("bots","odds");

var result: string = replaced.substring(7);

console.log("https://" + result);