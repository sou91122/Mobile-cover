const initCanvas = id => {
	return new fabric.Canvas(id, {
		width: 254,
		height: 497,
	});
};

const setbackGround = (url, canvas) => {
	fabric.Image.fromURL(url, img => {
		canvas.backgroundImage = img;
		canvas.requestRenderAll();
	});
};

const canvas = initCanvas('canvasimages');

let bgImage = './images/ip12pmx.png';
let maskImage = './images/ip12pmx-frame-blue.png';

setbackGround(bgImage, canvas);
canvas.setOverlayImage(maskImage);

function handleDragStart(e) {
	[].forEach.call(images, function (img) {
		img.classList.remove('img_dragging');
	});
	this.classList.add('img_dragging');
}
function handleDragOver(e) {
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.dataTransfer.dropEffect = 'copy';
	return false;
}

function handleDragEnter(e) {
	this.classList.add('over');
}

function handleDragLeave(e) {
	this.classList.remove('over');
}

function handleDrop(e) {
	e.preventDefault();
	var img = document.querySelector('#images img.img_dragging');
	var newImage = new fabric.Image(img, {
		scaleX: 20 / img.width,
		scaleY: 20 / img.height,
		left: e.layerX,
		top: e.layerY,
	});
	canvas.add(newImage);
	canvas.renderAll();
	return false;
}

function handleDragEnd(e) {
	[].forEach.call(images, function (img) {
		img.classList.remove('img_dragging');
	});
}

if (Modernizr.draganddrop) {
	var images = document.querySelectorAll('#images img');
	[].forEach.call(images, function (img) {
		img.addEventListener('dragstart', handleDragStart, false);
		img.addEventListener('dragend', handleDragEnd, false);
	});
	var canvasContainer = document.getElementById('canvas-container');
	canvasContainer.addEventListener('dragenter', handleDragEnter, false);
	canvasContainer.addEventListener('dragover', handleDragOver, false);
	canvasContainer.addEventListener('dragleave', handleDragLeave, false);
	canvasContainer.addEventListener('drop', handleDrop, false);
} else {
	alert("This browser doesn't support the HTML5 Drag and Drop API.");
}

// delete images
window.onkeydown = onKeyDownHandler;
function onKeyDownHandler(e) {
	switch (e.keyCode) {
		case 46:
			canvas.remove(canvas.getActiveObject());
	}
}

// remove active object
function removeActiveObject(e) {
	let except = 'canvas';
	if (!e.target.matches(except)) {
		canvas.discardActiveObject().renderAll();
	}
}
document.body.addEventListener('click', removeActiveObject);
