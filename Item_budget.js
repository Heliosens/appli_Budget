function budgetItemTable (target){

    this.budgetTable = function (tableId){
        let place = document.getElementById(target);
        let table = document.createElement('table');
        table.id = tableId;
    }

    this.budgetHead = function (tableId, txtHead) {
        let place = document.getElementById(tableId);
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');

        th.innerHTML = txtHead;
        place.appendChild(thead).appendChild(tr).appendChild(th);
    }

    this.budgetBody = function (tableId, tbodyId){
        let place = document.getElementById(tableId);
        let tbody = document.createElement('tbody');
        tbody.id = tbodyId;
        place.appendChild(tbody);
    }

    this.budgetItem = function (tbodyId, ...itemHtml){
        let place = document.getElementById(tbodyId);
        let tr = document.createElement('tr');
        for(let item of itemHtml){
            let td = document.createElement('td');
            td.innerHTML = itemHtml;
            tr.appendChild(td)
        }
        place.appendChild(tr);
    }
}

