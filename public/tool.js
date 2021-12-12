let optionconst = document.querySelector(".options-cont");
let optionFlag = true;
let toolsCont = document.querySelector(".tools-cont");
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let sticky = document.querySelector("#notebook");
let download = document.querySelector("#download");
let upload = document.querySelector("#upload");
let redo = document.querySelector("#redo");
let undo = document.querySelector("#undo");
let options = document.querySelectorAll(".size-box");


let cTool = "pencil";
let pencilColor = "black";

//Hamburger option
// true-> show tool ,false->hide

// Click Parent -> select child
optionconst.addEventListener("click", (e) => {
    optionFlag = !optionFlag;
    // let iconEl = optionconst.children[0];
    // fa-bars-> times  times->fa-bars
    // let iconCl = iconEl.classList[1];
    if (optionFlag) openTools();
    else closeTools();
})

function openTools() {
    let iconEl = optionconst.children[0];
    iconEl.classList.remove("fa-times");
    iconEl.classList.add("fa-bars");
    toolsCont.style.display = "flex";
}
function closeTools() {
    let iconEl = optionconst.children[0]
    iconEl.classList.remove("fa-bars");
    iconEl.classList.add("fa-times");
    toolsCont.style.display = "none";
}

// Identify -> click ->again click

pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        // second click
        tool.strokeStyle = pencilColor;
        //options show
        options[0].style.display = "flex";
        
    } else {
        // To remove previously selected option
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // pencil.style.border = "2px solid green";
        cTool = "pencil";
        tool.strokeStyle = pencilColor;
        tool.lineWidth ="3";
    }
});
eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        // second click
    
        //options show
        options[1].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border = "2px solid green";
        cTool = "eraser";
        tool.strokeStyle = eraserColor;
        tool.lineWidth ="3";
    }
});

rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        // second click
        
        //options show
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // rect.style.border = "2px solid green";
        cTool = "rect";
        tool.strokeStyle = pencilColor;
        tool.lineWidth ="3";
    }
});
line.addEventListener("click", function (e) {
    if (cTool == "line") {
        // second click
       
        //options show
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // line.style.border = "2px solid green";
        cTool = "line";
        tool.strokeStyle = pencilColor;
        tool.lineWidth ="3";
    }
});

upload.addEventListener("click", (e) => {

    //Open File Explorer
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change", (e) => {
        let file = input.files[0];
        let url = URL.createObjectURL(file);

        let stickyTemplateHTML = `
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
            <img src="${url}"/>;
        </div>
        `
        createSticky(stickyTemplateHTML);
    })


})



sticky.addEventListener("click", (e) => {
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class", "sticky-cont");
    let stickyTemplateHTML = `
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
        <textarea spellcheck="false"></textarea>
        </div>
        `
    createSticky(stickyTemplateHTML);
})


function createSticky(stickyTemplateHTML) {
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class", "sticky-cont");
    stickyCont.innerHTML = stickyTemplateHTML;
    document.body.appendChild(stickyCont);

    // excess minimize and remove
    let minimize = stickyCont.querySelector(".minimize");
    let remove = stickyCont.querySelector(".remove");
    noteAction(minimize, remove, stickyCont);

    // Drag and drop
    stickyCont.onmousedown = function (event) {
        dragAnddrop(stickyCont, event);
    };

    stickyCont.ondragstart = function () {
        return false;
    };
}

function noteAction(minimize, remove, stickycont) {
    remove.addEventListener("click", (e) => {
        stickycont.remove();
    })
    minimize.addEventListener("click", (e) => {
        let noteCont = stickycont.querySelector(".note-cont");
        let display = getComputedStyle(noteCont).getPropertyValue("display");
        if (display === "none") {
            noteCont.style.display = "block";
        } else {
            noteCont.style.display = "none";
        }
    })
}

function dragAnddrop(el, event) {
    let shiftX = event.clientX - el.getBoundingClientRect().left;
    let shiftY = event.clientY - el.getBoundingClientRect().top;
    
    el.style.position = 'absolute';
    el.style.zIndex = 1000;
    
    moveAt(event.pageX, event.pageY);
    
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        el.style.left = pageX - shiftX + 'px';
        el.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // drop the ball, remove unneeded handlers
    el.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        el.onmouseup = null;
    };
}


//Download
download.addEventListener("click",(e)=>{
    let url = canvas.toDataURL();

    let ac = document.createElement("a");
    ac.href = url;
    ac.download = "board.jpg";
    ac.click();
})