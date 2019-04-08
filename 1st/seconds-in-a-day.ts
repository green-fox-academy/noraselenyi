let currentHours: number = 23;
let currentMinutes: number = 30;
let currentSeconds: number = 0;


var hours_left: number = 23-currentHours;
var minutes_left: number = 59-currentMinutes;
var seconds_left: number = 59-currentSeconds;

var remaining_seconds: number = (hours_left*60*60) + (minutes_left*60) + (seconds_left);

console.log(remaining_seconds);

var result = remaining_seconds / 60 /60
console.log(result)