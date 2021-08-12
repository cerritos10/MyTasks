import AddTask from "./components/add-task.js";
import Modal from "./components/modal.js";

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTaskForm = new AddTask();
        this.modal = new Modal();

        this.addTaskForm.onClick((title,description, fecha) => this.addTaskView(title,description, fecha));
        this.modal.onClick((id, values) => this.editTask(id, values));
    }

    setModel(model) {
        this.model = model;
    }

    saveLocalS() {
        const task = this.model.getTask();
        task.forEach((task) => this.createRow(task));
    }

    addTaskView(title, description, fecha) {
       const task = this.model.addTaskModel(title, description, fecha);
       this.createRow(task);
       console.log(task)
    }

    editTask(id, values) {
        this.model.editTask(id, values);
        const row = document.getElementById(id);
        row.children[0].innerText = values.title;
        row.children[1].innerText = values.description;
        row.children[2].innerText = values.fecha;
        row.children[3].children[0].checked = values.completed;
    }

    removeTask(id){
        this.model.removeTask(id);
        document.getElementById(id).remove();
    }
    taskCompleted(id){
        this.model.taskCompleted(id);
    }

    createRow(task) {
        const row = table.insertRow();
        row.setAttribute('id', task.id);
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.fecha}</td>
            <td class="text-center">

            </td>
            <td class="text-right">
                
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => this.taskCompleted(task.id);
        row.children[3].appendChild(checkbox);

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#modal');
        editBtn.onclick = () => this.modal.setValues({
            id: task.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            fecha: row.children[2].innerText,
            completed: row.children[3].children[0].checked,
        });
        row.children[4].appendChild(editBtn);
        
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTask(task.id);
        row.children[4].appendChild(removeBtn);
    }
}