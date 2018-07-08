// inner variables
var canvas, ctx;
var clockRadius = 100;
var clockImage;

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // get current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = hours > 12 ? hours - 12 : hours;
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    // save current context
    ctx.save();

    // draw clock image (as background)
    ctx.drawImage(clockImage, 48, 30,200,89);
    
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();

    // draw numbers
    ctx.font = 'normal small-caps normal 12px arial,sans-serif';
    
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var theta =  10;
    var x = clockRadius /2+10;
    var y = clockRadius  * 0.4-5;
    ctx.fillText(10+'M', x, y);

    var x = clockRadius /2+10;
    var y = clockRadius  * 0.4-45;
    ctx.fillText(20, x, y);

    var x = clockRadius /2-50;
    var y = clockRadius  * 0.4-60;
    ctx.fillText(30, x, y);

    var x = clockRadius - (clockRadius /2+10)-100;
    var y = clockRadius  * 0.4-45;
    ctx.fillText(40, x, y);

    var x = clockRadius - (clockRadius /2+10)-100;
    var y = clockRadius  * 0.4-5;
    ctx.fillText(50, x, y);

    // for (var n = 1; n <= 6; n++) {
        
        var x = clockRadius  * Math.cos(theta);
        var y = clockRadius  * Math.sin(theta);
    //     // window.alert(x)
    //     // window.alert(y)
    //     // theta = theta * n;
    //     ctx.fillText(n, x, y);
    // }

    // draw hour
    // ctx.save();
    // var theta = (hour - 3) * 2 * Math.PI / 12;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -5);
    // ctx.lineTo(-15, 5);
    // ctx.lineTo(clockRadius * 0.5, 1);
    // ctx.lineTo(clockRadius * 0.5, -1);
    // ctx.fill();
    // ctx.restore();

    // // draw minute
    // ctx.save();
    // var theta = (minute - 15) * 2 * Math.PI / 60;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -4);
    // ctx.lineTo(-15, 4);
    // ctx.lineTo(clockRadius * 0.8, 1);
    // ctx.lineTo(clockRadius * 0.8, -1);
    // ctx.fill();
    // ctx.restore();

    // draw second
    // ctx.save();
    // var theta = (seconds - 15) * 2 * Math.PI / 60;
    // ctx.rotate(theta);
    // ctx.beginPath();
    // ctx.moveTo(-15, -3);
    // ctx.lineTo(-15, 3);
    // ctx.lineTo(clockRadius * 0.9, 1);
    // ctx.lineTo(clockRadius * 0.9, -1);
    // ctx.fillStyle = '#0f0';
    // ctx.fill();
    // ctx.restore();

    ctx.restore();
}

// initialization
$(function(){
    window.alert('initialization')
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    // var width = canvas.width;
    // var height = canvas.height;
    
clockImage = new Image();
clockImage.src = 'https://static.runoob.com/images/mix/125855_nnla_89964.png';

    setInterval(drawScene, 1000); // loop drawScene
});

function drawAnipanel() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    // var width = canvas.width;
    // var height = canvas.height;
    // window.alert(width)
    // window.alert(height)
    clockImage = new Image();
    clockImage.src = '../render/images/anipanel/bitmap.anipanel.pointer.png';

    setInterval(drawScene, 1000); // loop drawScene
}


function playAnimation() {
    pointer = document.getElementById('pointer');
    pointer.style.animationPlayState = 'running';
}