// input task form
const selectAppMenu: HTMLElement | null = document.getElementById("input-table-app-menu");
const inputTableTopic: HTMLElement | null = document.getElementById("input-table-topic");
const inputTableDescription: HTMLElement | null = document.getElementById("input-table-description");
const selectTaskStatusMenu: HTMLElement | null = document.getElementById("input-table-status-menu");
const taskInputClearBtn: HTMLElement | null = document.getElementById("input-table-clear-button");
const taskInputSubmitFormBtn: HTMLElement | null = document.getElementById("input-table-add-task-button");

// output tasks table
const outputTable: HTMLElement | null = document.getElementById("output-table");
const outputTableBody: HTMLTableSectionElement | null | undefined = outputTable?.querySelector("tbody");


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

taskInputSubmitFormBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    newRowToOutputTable();
});