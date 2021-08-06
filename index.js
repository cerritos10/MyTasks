document.addEventListener('DOMContentLoaded', function(){

    const title = document.getElementById('title');
    const desc = document.getElementById('description');
    const date = document.getElementById("date");
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btnAdd = document.getElementById('add');
    let id = 1;

    function clean(){
        title.value = '';
        desc.value = '';
        date.value ='';
    }

    function removeTask(id){
        console.log(id)
        document.getElementById(id).remove();
    }

    function addTask(){
        if (title.value === '' || desc.value === '' || date.value ==='') {
            alert.classList.remove('d-none');
            alert.innerText = 'ERROR: Title and description are required';
            return
        }

        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${desc.value}</td>
            <td>${date.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
            </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){
            removeTask(row.getAttribute('id'));
            //row.remove(id);
        }
        row.children[4].appendChild(removeBtn);
        clean();
    }

    btnAdd.onclick = addTask;
}); 