/**
 * create table id in param
 * @constructor
 */
function BudgetTable (){
    /**
     * create h1
     * @param targetElem
     * @param title
     * @param titleId
     */
    this.titleTxt = function (targetElem, title, titleId){
        let h1 = document.createElement('h1');
        h1.id = titleId;
        h1.innerHTML = title;
        targetElem.prepend(h1);
    }

    /**
     * create section for outlay or income or saving or result
     * @param targetElem
     * @param secId
     * @param txt
     */
    this.budgetSection = function (targetElem, secId, txt){
        let sec = document.createElement('section');
        sec.id = secId;
        let h2 = document.createElement('h2');
        h2.innerHTML = txt;
        targetElem.appendChild(sec).appendChild(h2);
    }

    /**
     * create div with title in targeted section
     * @param secId
     * @param headName
     * @param itemHtml
     */
    this.budgetType = function (secId, headName, ...itemHtml){
        // create and place table
        let place = document.getElementById(secId);
        let table = document.createElement('table');
        place.appendChild(table);

        // create table head
        let thead = document.createElement('thead');
        let hTr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = headName;
        table.appendChild(thead).appendChild(hTr).appendChild(th);

        // create table body
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // create items

        for(let line of itemHtml){
            let tr = document.createElement('tr');
            let tdLink = document.createElement('td');
            let link = document.createElement('a');
            link.innerHTML = line;
            tdLink.appendChild(link);
            let td = document.createElement('td');
            td.innerHTML = (0).toFixed(2);
            tr.appendChild(tdLink);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }

    this.count = function (){

    }


}

