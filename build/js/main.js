"use strict";
// input task form
const selectAppMenu = document.getElementById("input-table-app-menu");
const inputTableTopic = document.getElementById("input-table-topic");
const inputTableDescription = document.getElementById("input-table-description");
const selectTaskStatusMenu = document.getElementById("input-table-status-menu");
const taskInputClearBtn = document.getElementById("input-table-clear-button");
const taskInputSubmitFormBtn = document.getElementById("input-table-add-task-button");
// output tasks table
const outputTable = document.getElementById("output-table");
const outputTableBody = outputTable === null || outputTable === void 0 ? void 0 : outputTable.querySelector("tbody");
let taskInputArray = {
    "app": "",
    "topic": "",
    "description": "",
    "status": "",
};
const newRowToOutputTable = () => {
    var _a;
    const newRow = document.createElement("tr");
    const taskNumCell = document.createElement("td");
    taskNumCell.textContent = (((_a = outputTableBody === null || outputTableBody === void 0 ? void 0 : outputTableBody.querySelectorAll("tr").length) !== null && _a !== void 0 ? _a : 0) + 1).toString();
    const appCell = document.createElement("td");
    appCell.textContent = taskInputArray.app;
    const topicCell = document.createElement("td");
    topicCell.textContent = taskInputArray.topic;
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = taskInputArray.description;
    const statusCell = document.createElement("td");
    statusCell.textContent = taskInputArray.status;
    const editBtnCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "EDIT";
    editBtnCell.appendChild(editBtn);
    const deleteBtnCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "DELETE";
    deleteBtnCell.appendChild(deleteBtn);
    const elementsForNewRow = [taskNumCell, appCell, topicCell, descriptionCell, statusCell, editBtnCell, deleteBtnCell];
    for (let cell of elementsForNewRow) {
        if (!cell.textContent) {
            return;
        }
        newRow.appendChild(cell);
    }
    outputTableBody === null || outputTableBody === void 0 ? void 0 : outputTableBody.appendChild(newRow);
};
selectAppMenu === null || selectAppMenu === void 0 ? void 0 : selectAppMenu.addEventListener("change", (event) => {
    const target = event.target;
    const targetValue = (target === null || target === void 0 ? void 0 : target.value) || "";
    taskInputArray["app"] = targetValue;
});
inputTableTopic === null || inputTableTopic === void 0 ? void 0 : inputTableTopic.addEventListener("input", (event) => {
    const target = event.target;
    const targetValue = (target === null || target === void 0 ? void 0 : target.value) || "";
    taskInputArray["topic"] = targetValue;
});
inputTableDescription === null || inputTableDescription === void 0 ? void 0 : inputTableDescription.addEventListener("input", (event) => {
    const target = event.target;
    const targetValue = (target === null || target === void 0 ? void 0 : target.value) || "";
    taskInputArray["description"] = targetValue;
});
selectTaskStatusMenu === null || selectTaskStatusMenu === void 0 ? void 0 : selectTaskStatusMenu.addEventListener("change", (event) => {
    const target = event.target;
    const targetValue = (target === null || target === void 0 ? void 0 : target.value) || "";
    taskInputArray["status"] = targetValue;
});
taskInputSubmitFormBtn === null || taskInputSubmitFormBtn === void 0 ? void 0 : taskInputSubmitFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newRowToOutputTable();
});
