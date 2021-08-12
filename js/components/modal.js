import Alert from "./alert.js";

export default class Modal {
    constructor() {
        this.btnModal = document.getElementById('modal-btn');
        this.title = document.getElementById('modal-title');
        this.desc = document.getElementById('modal-description');
        this.date = document.getElementById("modal-date");
        this.completed = document.getElementById("modal-completed");
        this.task = null
    }

    setValues(task) {
        this.task = task;
        this.title.value = task.title;
        this.desc.value = task.description;
        this.date.value = task.fecha;
        this.completed.checked = task.completed;

        this.alert = new Alert('modal-alert');
    }

    onClick(callback) {
        this.btnModal.onclick = () => {
            if (this.title.value === '' || this.desc.value === '' || this.date.value ==='') {
                this.alert.show('ERROR: Title, description and date are required');
                return;
            } 

            $('#modal').modal('toggle');

            callback(this.task.id, {
                title: this.title.value,
                description: this.desc.value,
                fecha: this.date.value,
                completed: this.completed.checked
            });
        }
    }
}