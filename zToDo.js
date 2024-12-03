// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return alert("Please enter a task!");

        // Create task item
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Mark task as completed
        taskSpan.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    };

    // Add task on button click
    addBtn.addEventListener("click", addTask);

    // Add task on pressing "Enter"
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
});
