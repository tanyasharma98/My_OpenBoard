// canavas board -> left  point kitna aage  hai 
let boardLeft = canvas.getBoundingClientRect().left;
let boardTop = canvas.getBoundingClientRect().top;
let iX, iY, fX, fY;
let drawingMode = false;
body.addEventListener("mousedown", function (e) {
    iX = e.clientX - boardLeft;
    iY = e.clientY - boardTop;
    // if (cTool == "pencil") {
    //     drawingMode = true;
    //     tool.beginPath();
    //     tool.moveTo(iX, iY);
    // }
    if (cTool == "rect") {
        e.preventDefault();
        e.stopPropagation();
        drawingMode = true;
    }
})
body.addEventListener("mouseup", function (e) {
    // if (cTool == "pencil") {
    //     drawingMode = false;

    if (cTool == "rect" || cTool == "line") {
        // rect, line
        fX = e.clientX;
        fY = e.clientY;
        let width = fX - iX;
        let height = fY - iY;
        if (cTool == "rect") {
            e.preventDefault();
            e.stopPropagation();
            drawingMode = false
            tool.strokeRect(iX, iY, width, height);
        }
        else if (cTool == "line") {
            tool.beginPath({
                x: iX,
                y: iY
            });
            tool.moveTo(iX, iY);
            tool.lineTo(fX, fY);
            tool.stroke();
    }
    }
})

body.addEventListener("mousemove", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (drawingMode == false)
        return;
    // if(drawingMode== true && cTool=="rect"){
    // fX = e.clientX - boardLeft;
    // fY = e.clientY - boardTop;
    // var width = fX - iX;
    // var height = fY - iY;
    // ctx.strokeRect(iX, iY, width, height);
    // // tool.lineTo(fX, fY);
    // // tool.stroke();
    //  iX = fX;
    //  iY = fY;
    // }


})
