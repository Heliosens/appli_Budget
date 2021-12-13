/**
 * create table id in param
 * @constructor
 */
function BudgetItemTable (){
    /**
     *
     * @param target
     * @param sideId
     */
    this.budgetSection = function (target, sideId){
        let place = document.getElementById(target);
        let sec = document.createElement('section');
        sec.id = sideId;
    }

    /**
     *
     * @param target
     * @param divId
     * @param divTitle
     */
    this.budgetPart = function (target, divId, divTitle){
        let place = document.getElementById(target);
        let div = document.createElement('div');
        div.id = divId;
        let title = document.createElement('h2');
        title.innerHTML = divTitle;
        place.appendChild(div).appendChild(title);
    }

    /**
     *
     * @param target
     * @param tableId
     */
    this.budgetTable = function (target, tableId){
        let place = document.getElementById(target);
        let table = document.createElement('table');
        table.id = tableId;
        place.appendChild(table);
    }

    /**
     *
     * @param tableId
     * @param txtHead
     */
    this.budgetHead = function (tableId, txtHead) {
        let place = document.getElementById(tableId);
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = txtHead;
        place.appendChild(thead).appendChild(tr).appendChild(th);
    }

    /**
     *
     * @param tableId
     */
    this.budgetBody = function (tableId){
        let place = document.getElementById(tableId);
        let tbody = document.createElement('tbody');
        place.appendChild(tbody);
    }

    /**
     *
     * @param tableId
     * @param itemHtml
     */
    this.budgetTr = function (tableId, ...itemHtml){
        let place = document.getElementById(tableId).querySelector('tbody');
        let tr = document.createElement('tr');
        function addTd (...itemHtml){
            for(let line of itemHtml){
                let td = document.createElement('td');
                td.innerHTML = line;
                tr.appendChild(td)
            }
        }
        addTd(...itemHtml);
        place.appendChild(tr);
    }

}

