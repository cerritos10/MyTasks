export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        const btnAdd = document.getElementById('add');
        btnAdd.onclick = () => this.addTaskView('titulo', 'desc', 'fecha');
    }

    setModel(model) {
        this.model = model;
    }

    addTaskView(title, description, fecha) {
       this.model.addTaskModel(title, description, fecha);
    }
}