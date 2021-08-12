import AddTask from "./components/add-task.js";

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTaskForm = new AddTask();

        this.addTaskForm.onClick((title,description, fecha) => this.addTaskView(title,description, fecha));
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
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => this.taskCompleted(task.id);
        row.children[3].appendChild(checkbox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTask(task.id);
        row.children[4].appendChild(removeBtn);}
}