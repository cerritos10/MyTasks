export default class Model {
    constructor() {
        this.view = null;
        this.tasks = JSON.parse(localStorage.getItem('myTasks'));
        var date = new Date();
        var fechaM = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}`
        if (!this.tasks || this.tasks.length < 1) {
            this.tasks =[
                {
                    id: 0,
                    title: 'Tareas',
                    description: 'Asignacion de tareas',
                    fecha: fechaM,
                    completed: 'true'
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.tasks[this.tasks.length -1].id + 1; 
        }
        
    }

   /*  setView(view) {
        this.view = view;
    } */

    getTask(tasks) {
        return this.tasks;
    } 

    save() {
        localStorage.setItem('myTasks', JSON.stringify(this.tasks))
    }

    findId(id) {
       return this.tasks.findIndex((myTask) => myTask.id === id);
    }

    taskCompleted(id) {
        const index = this.findId(id);
        const task = this.tasks[index];
        task.completed = !task.completed;
        this.save();
        console.log(this.tasks)
    }

    addTaskModel(title, description, fecha) {
        const myTask = {
            id: this.currentId++,
            title,
            description,
            fecha,
            completed: false
        }

        this.tasks.push(myTask);
        this.save();
        return {...myTask};
    }

    removeTask(id){
        const index = this.findId(id);
        this.tasks.splice(index, 1);
        this.save();
    }
}