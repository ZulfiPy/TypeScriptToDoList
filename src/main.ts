// input task form
const selectAppMenu = document.getElementById("select-table-app-menu") as HTMLSelectElement | null;
const inputTableTopic = document.getElementById("input-table-topic") as HTMLInputElement | null;
const inputTableDescription = document.getElementById("input-table-description") as HTMLInputElement | null;
const selectTaskStatusMenu = document.getElementById("select-table-status-menu") as HTMLSelectElement | null;
const taskInputClearBtn = document.getElementById("table-clear-button") as HTMLButtonElement | null;
const taskInputSubmitFormBtn = document.getElementById("table-add-task-button") as HTMLButtonElement | null;

const taskInputTableForm = document.getElementById('task-input-table-form') as HTMLFormElement | null;

// output tasks table
const outputTableForm = document.getElementById('output-tasks-table-form') as HTMLFormElement | null;
const outputTableBody = outputTableForm?.querySelector('tbody') as HTMLTableSectionElement | null;

type Task = {
    app: string,
    topic: string,
    description: string,
    status: string
};

let taskInputArray: Task = {
    "app": "",
    "topic": "",
    "description": "",
    "status": "",
}

const newRowToOutputTable = () => {
    const newRow: HTMLTableRowElement = document.createElement("tr");

    const taskNumCell: HTMLTableCellElement = document.createElement("td");
    taskNumCell.textContent = ((outputTableBody?.querySelectorAll("tr").length ?? 0) + 1).toString();

    const appCell: HTMLTableCellElement = document.createElement("td");
    appCell.textContent = taskInputArray.app;

    const topicCell: HTMLTableCellElement = document.createElement("td");
    topicCell.textContent = taskInputArray.topic;

    const descriptionCell: HTMLTableCellElement = document.createElement("td");
    descriptionCell.textContent = taskInputArray.description;

    const statusCell: HTMLTableCellElement = document.createElement("td");
    statusCell.textContent = taskInputArray.status;

    const editBtnCell: HTMLTableCellElement = document.createElement("td");
    const editBtn: HTMLButtonElement = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "EDIT";
    editBtnCell.appendChild(editBtn);

    const deleteBtnCell: HTMLTableCellElement = document.createElement("td");
    const deleteBtn: HTMLButtonElement = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "DELETE";
    deleteBtnCell.appendChild(deleteBtn);

    const elementsForNewRow: HTMLTableCellElement[] = [taskNumCell, appCell, topicCell, descriptionCell, statusCell, editBtnCell, deleteBtnCell];

    for (let cell of elementsForNewRow) {
        if (!cell.textContent) {
            return;
        }
        newRow.appendChild(cell);
    }
    outputTableBody?.appendChild(newRow);
    taskInputTableForm?.reset()
}

selectAppMenu?.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement | null;
    const targetValue = target?.value || "";

    taskInputArray["app"] = targetValue;
});

inputTableTopic?.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement | null;
    const targetValue = target?.value || "";

    taskInputArray["topic"] = targetValue;
});

inputTableDescription?.addEventListener("input", (event) => {
    const target = event.target as HTMLInputElement | null;
    const targetValue = target?.value || "";

    taskInputArray["description"] = targetValue;
});

selectTaskStatusMenu?.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement | null;
    const targetValue = target?.value || "";

    taskInputArray["status"] = targetValue;
});

// clear all inputs in input task form
taskInputClearBtn?.addEventListener('click', () => taskInputTableForm?.reset())

// add new row with the data from inputs to output tasks table
taskInputSubmitFormBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    newRowToOutputTable();
});