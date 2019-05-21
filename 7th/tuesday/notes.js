// [].forEach(function(element){ 
// });

//setTimeout : meghívás pillanatától mikor hívódjon meg
//setInterval: mennyi időnként hívódjon meg
//clearTimeout: 
//clearInterval: 

// XMLHttpRequest: 
// request methods: 
// .open: 
// .send: 
// .setRequestHeader: 
// .onreadystatechange: 
// .onload: 
// status codes | status cats: 
// .readyState: 
// .response: 
// Blocking / non-blocking: 
// Callbacks: 
// XML: 
// JSON: 
// API-s: 
// API keys: 
// Fetch API: 
// Cross origin: 

//példány létrehozása, amin kommunikálunk
const xhr = new XMLHttpRequest();
//elmondjuk mit csinálunk, hogy, mivel
xhr.open('GET', 'akarmi');
// infot csatol a gethez pl, mit akarunk:
xhr.setRequestHeader('Accept', 'application/json');
xhr.setRequestHeader('Accept', 'application/json');
//csomag send
xhr.send();
//mi történik a másik oldalon, amit a backend küld
xhr.onload();


xhr.onload = function(data){
    console.log(data);
};
//     ===
xhr.onload = data => {
    console.log(data);
};

// ===
xhr.onload = alma;
function alma (kutyuke){
    console.log(kutyuke)
};


const valamiobject = {
    name: 'pityu',
    age : 26,
    nemtom: true,
};

let something = JSON.stringify(valamiobject)
console.log(something);
//parse vissza

// XML : adatformátum
// API
// API key??

// miert van szükség json fileokra







//http://orteil.dashnet.org/cookieclicker/

// const bigCookie = document.querySelector('#bigCookie');
// setInterval(() => bigCookie.click(),1);