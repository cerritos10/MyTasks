import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    //model.setView(view);
    view.setModel(model);
    view.saveLocalS();
    const tareas = model.getTask();

    function draw() {
        var calendarEl = document.getElementById('calendar');
        
            var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
              initialDate: '2021-08-12',
              headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              events: tareas.map(obj=>{
                    return{
                        title: obj.title,
                        start: obj.fecha,
                    } 
                }),
                themeSystem: 'bootstrap',
                eventBackgroundColor:'#0099ff',
                height: 470
            });
        
            calendar.render();
    }

    draw(/* tareas.map(obj=>{
        return{
            id: obj.id,
            fecha: obj.fecha
        }
        
    }) */);
});