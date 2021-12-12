function Item_budget (target){

    this.budgetTable = function (tableId, txtHead) {
        let place = document.getElementById(target);
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        table.id = tableId;
        th.innerHTML = txtHead;
        place.appendChild(table).appendChild(thead).appendChild(tr).appendChild(th);
    }

    this.item = function (tableId, arrayItem, ...itemHtml){
        let tbody = document.createElement('tbody');
        for(let item of arrayItem){
            let tr = document.createElement('tr');
            for(let i = 0 ; i < itemHtml ; i++){
                let td = document.createElement('td');
                td.innerHTML = itemHtml;
            }

        }
    }

}
