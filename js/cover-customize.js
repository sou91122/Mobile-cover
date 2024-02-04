const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textEL = document.getElementById('text');
const colors = document.querySelectorAll('.colors li');
const fonts = document.querySelectorAll('.fonts li');
const layouts = document.querySelectorAll('.layout li');
const engrave = document.querySelector('.engrave');


let textValue = '';
let phoneImage = new Image();
let coverImage = new Image();
let textColor = 'white';
let textFont = 'Roboto';
let textAlignment = 'center';
let textBasealignment = 'middle';
let textFontSize = 120;
let variableFontSize = '';
let textWidth = '';
let rotateValue = '';
let translateValueX = '';
let translateValueY = '';
let dx = ctx.canvas.width >> 1;
let dy = ctx.canvas.height >> 1;
let textLayout = 'HorizontalTop';

function changelayout() {
    if (textLayout === 'HorizontalTop') {
        dx = ctx.canvas.width >> 1;
        dy = 360;
        textAlignment = 'center';
        textBasealignment = 'middle';
        textFontSize = 120;
        rotateValue = '';
        translateValueX = '';
        translateValueY = '';
    } else if (textLayout === 'HorizontalCenter') {
        dx = ctx.canvas.width >> 1;
        dy = ctx.canvas.height >> 1;
        textAlignment = 'center';
        textBasealignment = 'middle';
        textFontSize = 120;
        rotateValue = '';
        translateValueX = '';
        translateValueY = '';
    } else if (textLayout === 'HorizontalBottom') {
        dx = ctx.canvas.width >> 1;
        dy = ctx.canvas.height - 100;
        textFontSize = 96;
        textAlignment = 'center';
        textBasealignment = 'alphabetic';
        rotateValue = '';
        translateValueX = '';
        translateValueY = '';
    } else if (textLayout === 'VerticalLeftBottom') {
        dx = 0;
        dy = 0;
        textFontSize = 200;
        textAlignment = 'left';
        textBasealignment = 'hanging';
        rotateValue = (270 * Math.PI) / 180;
        translateValueX = 34;
        translateValueY = ctx.canvas.height - 100;
    } else if (textLayout === 'VerticalCenterBottom') {
        dx = 0;
        dy = 0;
        textFontSize = 192;
        textAlignment = 'left';
        textBasealignment = 'middle';
        rotateValue = (270 * Math.PI) / 180;
        translateValueX = canvas.width / 2;
        translateValueY = ctx.canvas.height - 100;
    } else if (textLayout === 'VerticalRightBottom') {
        dx = 0;
        dy = 0;
        textFontSize = 264;
        textAlignment = 'left';
        textBasealignment = 'alphabetic';
        rotateValue = (270 * Math.PI) / 180;
        translateValueX = canvas.width - 42;
        translateValueY = ctx.canvas.height - 100;
    } else {
        dx = ctx.canvas.width >> 1;
        dy = 360;
        textAlignment = 'center';
        textBasealignment = 'middle';
        textFontSize = 120;
        rotateValue = '';
        translateValueX = '';
        translateValueY = '';
    }
}

window.addEventListener('load', canvasOnload);

function canvasOnload() {
    phoneImage.onload = function () {
        canvasImage(phoneImage, coverImage);
        canvasText(phoneImage, coverImage);
    };
    phoneImage.src = './images/ip12pmx.png';
    
    coverImage.onload = function () {
        canvasImage(phoneImage, coverImage);
        canvasText(phoneImage, coverImage);
    };
    coverImage.src = './images/ip12pmx-frame-blue.png';
}

function canvasText(phoneImage, coverImage) {
    textEL.addEventListener('keyup', function () {
        canvasContent(phoneImage, coverImage);
    });
}

function canvasContent(phoneImage, coverImage) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    changelayout();
    canvasImage(phoneImage, coverImage);
    textInput(8);
}

function textInput(number) {
    textValue = textEL.value;
    ctx.font = textFontSize + 'px ' + textFont;
    ctx.textBaseline = textBasealignment;
    ctx.save();
    variableFontSize =
        textFontSize - parseInt(ctx.measureText(textValue).width / number);
    ctx.fillStyle = textColor;
    ctx.font = variableFontSize + 'px ' + textFont;
    ctx.textAlign = textAlignment;
    ctx.textBaseline = textBasealignment;
    ctx.translate(translateValueX, translateValueY);
    ctx.rotate(rotateValue);
    ctx.fillText(textValue, dx, dy);
    ctx.restore();
}

function canvasImage(img, imgone) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgone, 0, 0, canvas.width, canvas.height);
}

// colors
colors.forEach(function (item) {
    item.style.background = item.getAttribute('data-color');
    item.addEventListener('click', function () {
        colors.forEach(function (item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
        removeActive(engrave);
        textColor = item.getAttribute('data-color');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasImage(phoneImage, coverImage);
        textInput(8);
    });
});

// fonts
fonts.forEach(function (item) {
    item.style.fontFamily = item.getAttribute('data-font');
    item.addEventListener('click', function () {
        fonts.forEach(function (item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
        textFont = item.getAttribute('data-font');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvasImage(phoneImage, coverImage);
        textInput(8);
    });
});

// layouts
layouts.forEach(function (item) {
    item.addEventListener('click', function () {
        layouts.forEach(function (item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
        textLayout = item.getAttribute('data-layout');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        changelayout();
        canvasImage(phoneImage, coverImage);
        textInput(8);
    });
});

// remove-active
function removeActive(item) {
    item.classList.remove('active');
}

// remove-active-items
function removeActiveItems(item) {
    item.forEach(function (item) {
        item.classList.remove('active');
    });
}

// engrave
engrave.addEventListener('click', function () {
    this.classList.add('active');
    removeActiveItems(colors);
    textColor = 'rgba(255, 255, 255, 0.8)';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasImage(phoneImage, coverImage);
    textInput(8);
});
