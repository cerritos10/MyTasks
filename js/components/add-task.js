import Alert from "./alert.js";

export default class AddTask{
    constructor() {
        this.btnAdd = document.getElementById('add');
        this.title = document.getElementById('title');
        this.desc = document.getElementById('description');
        this.date = document.getElementById("date");
        
        this.alert = new Alert('alert');
    }

    onClick(callback) {
        this.btnAdd.onclick = () => {
            if (this.title.value === '' || this.desc.value === '' || this.date.value ==='') {
                this.alert.show('ERROR: Title, description and date are required');
            } else {
                this.alert.hide();
                var fecha = this.date.value;
                callback(this.title.value, this.desc.value, fecha)
            }
         
        }
    }
}