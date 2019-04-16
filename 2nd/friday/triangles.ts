'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


var givitcolor = Math.floor(Math.random()* 255) + 0;
var givitcolor2 = Math.floor(Math.random()* 255) + 0;
var givitcolor3 = Math.floor(Math.random()* 255) + 0;


function drawLine(from, to){
    ctx.beginPath();
    ctx.moveTo(from.x,from.y);
    ctx.lineTo(to.x,to.y);
    ctx.stroke();
}

function drawTriangle(p0, p1, p2) {
    ctx.strokeStyle = 'rgb(' + givitcolor +', ' + givitcolor2 + ',' + givitcolor3 +')';
    drawLine(p0, p1);
    drawLine(p1, p2);
    drawLine(p2, p0);
}

function drawFract(p0, p1, p2, limit){
    if(limit > 0){
        const pA = {
            x: p0.x + (p1.x - p0.x)/2,
            y: p0.y - (p0.y - p1.y)/2
        },
        pB = {
            x: p1.x + (p2.x - p1.x)/2,
            y: p1.y - (p1.y - p2.y)/2
        },
        pC = {
            x: p0.x + (p2.x - p0.x)/2,
            y: p0.y
        };
        
        drawFract(p0, pA, pC, limit-1);
        drawFract(pA, p1, pB, limit-1);
        drawFract(pC, pB, p2, limit-1);
    }
    else{
        drawTriangle(p0,p1,p2);
    }
}
drawFract({x: 0, y:0},{x:300, y:600},  {x:600, y:0}, 10)