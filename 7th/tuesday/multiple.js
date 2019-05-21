'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

// const timedFruits = (word,time) => {
//     setTimeout(() => {
//         console.log(word)
//     }, time);
// }

// timedFruits('apple', 0)
// timedFruits('pear', 1000)
// timedFruits('melon', 3000)
// timedFruits('grapes', 5000)



const timedFruits = {
    'apple': 0,
    'pear': 1000,
    'melon': 3000,
    'grapes': 5000
};

for (let i = 0; i < Object.keys(timedFruits).length; i++){
    setTimeout(() => {
        console.log(Object.keys(timedFruits)[i])
    }, Object.values(timedFruits)[i]);
};
