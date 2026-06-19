console.log("Smart Task Management Board Loaded");

let taskCounter = 0;

// DRAG START
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

// ALLOW DROP
function allowDrop(event) {
    event.preventDefault();
}

// DROP
function drop(event) {
    event.preventDefault();

    let taskId = event.dataTransfer.getData("text/plain");
    let task = document.getElementById(taskId);

    let column = event.target.closest(".column");

    if (column) {
        column.appendChild(task);
    }
}

const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", function () {

    const taskName = document.getElementById("taskInput").value;
    const priority = document.getElementById("priority").value;

    if (taskName === "") {
        alert("Please Enter Task");
        return;
    }

    taskCounter++;

    const task = document.createElement("div");

    task.id = "task" + taskCounter;
    task.draggable = true;
    task.ondragstart = drag;

    task.innerHTML = `
        <h3>${taskName}</h3>
        <p>Priority: ${priority}</p>
    `;

    if (priority === "High") {
        task.style.borderLeft = "5px solid red";
    }
    else if (priority === "Medium") {
        task.style.borderLeft = "5px solid orange";
    }
    else {
        task.style.borderLeft = "5px solid green";
    }

    task.style.padding = "10px";
    task.style.margin = "10px";
    task.style.backgroundColor = "white";
    task.style.cursor = "grab";

    document.getElementById("todo").appendChild(task);

    document.getElementById("taskInput").value = "";
});