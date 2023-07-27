const boxes = document.getElementsByClassName("box");


for(let i=0;i< boxes.length ; i++){
    let box = boxes[i];

    box.addEventListener("dragenter", () => {
        box.classList.add("active-box");
    });

    box.addEventListener("dragleave",() => {
        box.classList.remove("active-box");
    });

    box.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        let progressStatus = document.getElementsByClassName("progress")[0];
        
        
        if(box.id === 'COMPLETED'){
            progressStatus.innerText = "COMPLETED"
            activeDraggedElement.draggable = false;
        }
        if(box.id === 'TO_DO'){
            progressStatus.innerText = "TO_DO";
        }
        if(box.id === 'IN_PROGRESS'){
            progressStatus.innerText = "IN_PROGRESS";

        }
        box.appendChild(activeDraggedElement);
    })
}