// DOM Elements
const textInput = document.getElementById("input-txt");
const addButton = document.getElementById("add-btn");
const displayContainer = document.getElementById("tododisplay");

// Priority List Array
const priorityLevels = ["Low", "Medium", "High"];

// Function to display user input
function userInputDisplay() {
    const prioritySelect = document.createElement("select");
    priorityLevels.forEach(level => {
        const option = document.createElement("option");
        option.value = level;
        option.textContent = level;
        prioritySelect.appendChild(option);
    });

    const userValue = textInput.value.trim();

    if (userValue !== "") {
        // Create task container
        const taskContainer = document.createElement("div");
        taskContainer.className = "task-item";

        // Create task text element
        const taskText = document.createElement("span");
        taskText.textContent = userValue;

        // Create task due date input
        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.className = "due-date";

        // Create task completion checkbox
        const completeCheckbox = document.createElement("input");
        completeCheckbox.type = "checkbox";
        completeCheckbox.className = "complete-checkbox";
        completeCheckbox.addEventListener("change", () => {
            taskText.classList.toggle("completed", completeCheckbox.checked);
        });

        // Create Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";
        editButton.addEventListener("click", () => {
            const newValue = prompt("Edit your task:", taskText.textContent);
            if (newValue !== null && newValue.trim() !== "") {
                taskText.textContent = newValue.trim();
            }
        });

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", () => {
            taskContainer.remove();
        });

        // Append all elements to the task container
        taskContainer.appendChild(taskText);
        taskContainer.appendChild(prioritySelect);
        taskContainer.appendChild(dueDateInput);
        taskContainer.appendChild(completeCheckbox);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);

        // Add task to the display container
        displayContainer.appendChild(taskContainer);

        // Clear input field
        textInput.value = "";
    }
}

// Attach event listener to Add button
addButton.addEventListener("click", userInputDisplay);
