// formaba onteni
// Toplevel

const canvas = document.getElementById('draw_canvas');

const context = canvas.getContext('2d');

const canvasWidth = 600;
const canvasHeight = 600;


function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawRowOfHouses(houseSize, houses) {
    const distanceBetweenHouses = 20;
    
    var houseXCoord = 10;

    let houseCount = houses.length;
    for(var i = 0; i < houseCount; i++) {
        let color = houses[i];
        drawRect(houseXCoord, 100, houseSize, houseSize, color);
        houseXCoord = houseXCoord + houseSize + distanceBetweenHouses;
    }

    // houses.forEach(function(houseColor) {
    //     drawRect(houseXCoord, 100, houseSize, houseSize, houseColor);
    //     houseXCoord = houseXCoord + houseSize + distanceBetweenHouses;
    // });
}

const houseColors = [
    'magenta',
    'magenta',
    'red',
    'blue',
    'yellow',
    'black',
    'red',
    'blue',
    'yellow',
    'black',
    'yellow',
];

// generalj tulajdonsagot
function getRandomColor() {
    const colors = ['red', 'blue', 'green'];

    const i = Math.floor(Math.random() * 3);

    return colors[i];
}

// Generalj adatot
let falu = [];
for (var i = 0; i < 600; i++) {
    falu[i] = getRandomColor();
}

// Rajzold ki
falu.forEach(color => drawRect(...drawRect., color))




const castle1 = [
    400,
    340,
    10,
    15,
    'red'
];

const castle2 = [
    100,
    140,
    40,
    40,
    'blue'
];

function drawCastle(houseAttr) {
    const x = houseAttr[0];
    const y = houseAttr[1];
    const houseWidth = houseAttr[2];
    const houseHeight = houseAttr[3];
    const color = houseAttr[4];

    context.fillStyle = color;
    context.fillRect(x,y,houseWidth, houseHeight);
}


drawRowOfHouses(20, houseColors);

drawCastle(castle1);
drawCastle(castle2);;

// Object oriented
const castle3 = {
    x: 100,
    y: 540,
    w: 50,
    h: 45,
    color: '#237228',
    neighbours: [castle1, castle2],

    calculateArea: function() {
        return this.x * this.y;
    },

    drawYourself: function(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

castle3.color;
castle3['color'];
castle3.built = 1901;

const obj = {};
obj.x=5;
obj.y = 20;
obj.w = 30;
obj.h = 30;
obj.color = 'black';

drawCastleObj({});


function drawCastleObj(castleObj) {
    context.fillStyle = castleObj.color;
    context.fillRect(
        castleObj.x,
        castleObj.y,
        castleObj.w,
        castleObj.h
    );
}

// drawCastleObj(castle3);


castle3.drawYourself(ctx);


const castles = [/*...*/];

for(var i = 0; i < castles.length; i++) {
    castles[i].drawYourself(ctx);
}


// const blockDistance = 15;
// for (let i = 0; i < 10; i++) {
//     drawRect(canvasWidth / 2 + i * blockDistance, canvasHeight / 2, 10, 10);
// }

// var isFoodReady = false;
// while (!isFoodReady) {
//     wait5Minutes();
//     isFoodReady = checkFood();
// }


// // (const), let, var <- valtozo kulcsszavak (keywords for defining variables)
// var y;

// if (false) {
//     let x = 5;
        // let => block scope

// } else {
//     y = 5;
        // var => function scope
// }


