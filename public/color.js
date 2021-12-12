let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let black = document.querySelector(".black");



red.addEventListener("click",(e)=>{
    if(cTool!="eraser"){
    tool.strokeStyle = "lightpink";
    pencilColor = "lightpink";
    }
})
blue.addEventListener("click",(e)=>{
    if(cTool!="eraser"){
    tool.strokeStyle = "lightskyblue";
    pencilColor = "lightskyblue";
    }
})
green.addEventListener("click",(e)=>{
    if(cTool!="eraser"){
    tool.strokeStyle = "lightgreen";
    pencilColor ="lightgreen";
    }
})
black.addEventListener("click",(e)=>{
    if(cTool!="eraser"){
    tool.strokeStyle = "black";
    pencilColor ="black";
    }
})


// ============================================Width Change===================================
// // Pencil
let pencilWidth1 = document.querySelector(".pencil-width > .size1");
pencilWidth1.addEventListener("click",(e)=>{
    toolWidth(3);
    
})
let pencilWidth2 = document.querySelector(".pencil-width > .size2");
pencilWidth2.addEventListener("click",(e)=>{
    toolWidth(5);
})
let pencilWidth3 = document.querySelector(".pencil-width > .size3");
pencilWidth3.addEventListener("click",(e)=>{
    toolWidth(10);
})
let pencilWidth4 = document.querySelector(".pencil-width > .size4");
pencilWidth4.addEventListener("click",(e)=>{
    toolWidth(20);
})


//Eraser
let eraserWidth1 = document.querySelector(".eraser-width > .size1");
eraserWidth1.addEventListener("click",(e)=>{
    toolWidth(3)
})
let eraserWidth2 = document.querySelector(".eraser-width > .size2");
eraserWidth2.addEventListener("click",(e)=>{
    toolWidth(5)
})
let eraserWidth3 = document.querySelector(".eraser-width > .size3");
eraserWidth3.addEventListener("click",(e)=>{
    toolWidth(10)
})
let eraserWidth4 = document.querySelector(".eraser-width > .size4");
eraserWidth4.addEventListener("click",(e)=>{
    toolWidth(20)
})

//rectangle
let rectWidth1 = document.querySelector(".rect-width > .size1");
rectWidth1.addEventListener("click",(e)=>{
    toolWidth(3);
})
let rectWidth2 = document.querySelector(".rect-width > .size2");
rectWidth2.addEventListener("click",(e)=>{
    toolWidth(5);
})
let rectWidth3 = document.querySelector(".rect-width > .size3");
rectWidth3.addEventListener("click",(e)=>{
    toolWidth(10);
})
let rectWidth4 = document.querySelector(".rect-width > .size4");
rectWidth4.addEventListener("click",(e)=>{
    toolWidth(20);
})

//Line
let lineWidth1 = document.querySelector(".line-width > .size1");
lineWidth1.addEventListener("click",(e)=>{
    toolWidth(3);
})
let lineWidth2 = document.querySelector(".line-width > .size2");
lineWidth2.addEventListener("click",(e)=>{
    toolWidth(5);
})
let lineWidth3 = document.querySelector(".line-width > .size3");
lineWidth3.addEventListener("click",(e)=>{
    toolWidth(10);
})
let lineWidth4 = document.querySelector(".line-width > .size4");
lineWidth4.addEventListener("click",(e)=>{
    toolWidth(20);
})

function toolWidth(val){
    tool.lineWidth =val;
}
