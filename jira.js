const createIssueButton = document.getElementById('create-issue');
const box = document.getElementsByClassName('box')[0];
const modal = document.getElementById("modal");
const newModal = document.createElement('div');
let activeDraggedElement = null;
let activeDraggedElementData = null;





// Data Management : 
// {
//     taskName : 'task_name',
//     status : 'TO DO',
//     description : 'about task',
//     assignee : 'Sameer',
// }


newModal.id ='modal';
newModal.className = 'modal';
newModal.innerHTML = `
<div class="modal-body">
    <form action="" >
        <span class="material-icons close" onclick="closeModal()" >close</span>
        <p style="color: #182A4D; font-weight: 700;">ADD TASK</p>
        <input type="text" name="taskName" placeholder="Task Name" required>
        <textarea rows="3" type="text" name="description" placeholder="Description" style="resize: none;" required></textarea>
        <input type="text" name="assigneeName" placeholder="Assignee Name" id="assigneeName" required>
        <select name="status" id="" required>
            <option value="TO_DO">TO DO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
        </select>

        <button type="submit">Create</button>
    </form>
</div>
`
function closeModal(){
    newModal.remove();
}

            // <div class="item">
            //     <textarea name="" id="" cols="46" rows="3 " style="resize: none;"></textarea>
            //     <select name="" id="">
            //         <option value="">ABC</option>
            //         <option value="">XYZ</option>
            //     </select>
            // </div>


function onSumitForm(event){
    event.preventDefault();
    const formElement = event.target;
    const userData = {
        taskName : formElement['taskName'].value.trim(),
        description : formElement['description'].value.trim(),
        assigneeName : formElement['assigneeName'].value.trim(),  
        status : formElement['status'].value,
    }
    activeDraggedElementData = userData;
    closeModal();
    addNewTask(userData);
}



createIssueButton.addEventListener("click", (e) => {
    document.body.appendChild(newModal); 


    const dataInput = document.querySelector('.modal form');
    dataInput.removeEventListener("submit",onSumitForm);
    dataInput.addEventListener("submit",onSumitForm)
    
    // createIssueButton.remove();
    // const itemContainer = document.createElement('div');
    
    // itemContainer.className = 'item';
    // itemContainer.innerHTML = `
    // <textarea name="" id="" cols="46" rows="3 " style="resize: none;" placeholder="What needs to be done?"></textarea>
    // <select name="" id="">
    //     <option value="">ABC</option>
    //     <option value="">XYZ</option>
    // </select>`;



    
    // box.appendChild(itemContainer);
    // itemContainer.children[0].focus();
});





function addNewTask(userData){
    const card = document.createElement('div');
    card.className = 'card';
    card.addEventListener("dragstart",()=>{
        activeDraggedElement = card;
    })
    userData.status !== 'COMPLETED' && (card.draggable = "true");
    const initial = userData.assigneeName.split(" ");
    let extractInitial = initial[0][0].toUpperCase();
    if(initial.length>1){
        extractInitial+=initial[initial.length-1][0].toUpperCase();
    }
    // if(initial.length>1){
    //     for(let i=0;i<initial.length;i++){
    //         extractInitial += initial[i][0];
    //     }
    // }
    // else{
    //     extractInitial+=initial[0][0];
    // }
    
    
    card.innerHTML = `
                <p class="task_name">${userData.taskName}</p>
                <p class="Description">${userData.description}</p>
                <div class="status-container">
                    <p class="asignee_name" data-short-name="${extractInitial}" >${" "+userData.assigneeName}</p>
                    <p class="progress">${userData.status}</p>
                </div>
            `
    const statusBox = document.getElementById(userData.status);
    statusBox.appendChild(card);
}





