// const { Socket } = require("engine.io");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let body = document.querySelector("body");
// let boardTop = canvas.getBoundingClientRect().top;
// let boardLeft = canvas.getBoundingClientRect().left;
// let iX , iY , fX, fY
let mouseDown = false;
//API

let tool = canvas.getContext("2d");
tool.strokeStyle = "black";
tool.lineWidth = "3";

let eraserColor = "white";


let undoredoTracker = []; // Data
let track = 0; // Represent which action from tracker array


//====================================================================================================
// tool.beginPath(); //Generate new path(graphic)
// tool.moveTo(10,10);   //Start Point
// tool.lineTo(100,150); //End point
// tool.stroke() // color fill (graphic)


// tool.strokeStyle = "Purple";
// tool.lineWidth = "9";
// tool.beginPath();
// tool.moveTo(10,10);
// tool.lineTo(200,250);
// tool.stroke();
//====================================================================================================


//mousedown ->start new path
//mousemove -> path fill(graphic)

canvas.addEventListener("mousedown", (e) => {
    if (cTool == "pencil") {
        drawingMode = true;
        mouseDown = true;
        // beginPath({
        //     x: e.clientX,
        //     y: e.clientY
        // })
        let data = {
            x: e.clientX,
            y: e.clientY
        }
        socket.emit("beginPath", data);
    }
    else if (cTool == "eraser") {
        drawingMode = true;
        mouseDown = true;
        // beginPath({
        //     x: e.clientX,
        //     y: e.clientY
        // })
        let data = {
            x: e.clientX,
            y: e.clientY
        }
        socket.emit("beginPath", data);
    }
})

canvas.addEventListener("mousemove", (e) => {
    if (cTool == "pencil") {
        if (mouseDown) {
            let data = {
                x: e.clientX,
                y: e.clientY,
                
            }
            socket.emit("drawStroke", data);
        }
        // drawStroke({

        // })

    }
    else if (cTool == "eraser") {
        if (mouseDown) {
            // drawStroke({
            //     x: e.clientX,
            //     y: e.clientY
            // })
            let data = {
                x: e.clientX,
                y: e.clientY
            }
            socket.emit("drawStroke", data);
        }
    }

})
canvas.addEventListener("mouseup", (e) => {
    drawingMode = false;
    mouseDown = false;

    let url = canvas.toDataURL();
    undoredoTracker.push(url);
    track = undoredoTracker.length - 1;
})

undo.addEventListener("click", (e) => {
    if (track > 0) {
        track--;
    }
    //Track action
    // let trackObj = {
    //     trackValue: track,
    //     undoredoTracker
    // }
    let data ={
        trackValue: track,
        undoredoTracker
    }
    // undoredoCanvas(trackObj);
    socket.emit("redoundo",data);
})

redo.addEventListener("click", (e) => {
    if (track < undoredoTracker.length - 1) {
        track++;
    }
    //Track action
    // let trackObj = {
    //     trackValue: track,
    //     undoredoTracker
    // }
    let data ={
        trackValue: track,
        undoredoTracker
    }
    // undoredoCanvas(trackObj);
    socket.emit("redoundo",data);
})
function undoredoCanvas(trackObj) {
    track = trackObj.trackValue;
    undoredoTracker = trackObj.undoredoTracker;

    let url = undoredoTracker[track];
    let img = new Image(); //New Image Reference El
    img.src = url;
    img.onload = (e) => {
        tool.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}

function beginPath(strokeObj) {
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}

socket.on("beginPath", (data) => {
    // data from server
    beginPath(data);
})
socket.on("drawStroke",(data)=>{
    drawStroke(data);
})
socket.on("redoundo",(data)=>{
    undoredoCanvas(data);
})