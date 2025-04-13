let listContainer = document.querySelector("#listContainer");
let listInput = document.getElementById("listInput");
let quantityTask = document.getElementById("quantity");
const clear = document.getElementById('clear');
console.log(clear);


let ArrTask;
// 1. Insertar la tarea en el DOM

listInput.addEventListener("click", (e) => {
  let element = e.target;
  let textarea = listInput.querySelector("textarea");

  if (element.type === "checkbox" && textarea.value !== "") {
    let dataId = Date.now();

    // let checkImg = listInput.querySelector('input');
    
    function AddTask() {
      const taskHTML = `
              <div data-id="${dataId}" class="bg-gray-800 rounded-t-full w-full flex items-center py-4 px-3 gap-3 border-b border-gray-600 task">
                <input class="w-7 h-6 rounded-full appearance-none outline border-white border-1 checked:bg-[url(/images/icon-check.svg)] checked:m-auto cursor-pointer checked:bg-no-repeat checked:bg-[4px]" type="checkbox" name="check" id="check">
                <label class="w-full text-white text-xs cursor-pointer align-middle" for="check">${textarea.value}</label>
                <img class="w-4 h-4 cursor-pointer" src="./images/icon-cross.svg" alt="cross">
              </div>`;

      return taskHTML;
    }
    
    listContainer.insertAdjacentHTML("afterbegin", AddTask())
    textarea.value = "";

    updateTaskList()
        
  }
});

listContainer.addEventListener('click', (e) => {

    let element = e.target;
    
    // Verificamos si se hizo click en una cruz
    if (element === element.closest('img')) {
       
        const taskId = element.parentNode.getAttribute('data-id');
        const taskToRemove = listContainer.querySelector(`[data-id="${taskId}"]`);
        if (taskToRemove) {
            taskToRemove.remove();
            updateTaskList()
        }        
       
    }

    if(element === clear){
        
        listContainer.querySelectorAll(`[data-id]`).forEach( child => {
            listContainer.removeChild(child);
            updateTaskList()
        })

        
    }
    
});



function updateTaskList() {
    ArrTask = [...listContainer.querySelectorAll('div[data-id]')];
    quantityTask.textContent = ArrTask.length;
  }