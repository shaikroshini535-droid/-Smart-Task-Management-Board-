console.log("Smart Task Management Board");

// Drag Start
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Allow Drop
function allowDrop(event) {
    event.preventDefault();
}

// Drop
function drop(event) {
    event.preventDefault();

    let taskId = event.dataTransfer.getData("text");
    let task = document.getElementById(taskId);

    event.target.appendChild(task);
}
