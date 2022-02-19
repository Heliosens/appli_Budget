/**
 * create title
 * create section which contain items
 * create items
 * write value in selected item
 * create result which contains total updated at each entry
 * create reset button
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
     * @param text
     */
    this.budgetSection = function (targetElem, secId, text){
        let sec = document.createElement('section');
        sec.id = secId;
        let h2 = document.createElement('h2');
        h2.innerHTML = text;
        targetElem.appendChild(sec).appendChild(h2);
    }

     /**
     * create div with title in targeted section,
     * give className to amount "out" for expenses, "in" for income
     * @param secId
     * @param signe
     * @param headName
     * @param itemHtml
     */
    this.budgetItem = function (secId, signe, headName, ...itemHtml){
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
            // case of link
            let tr = document.createElement('tr');
            let tdLink = document.createElement('td');
            let link = document.createElement('a');
            link.innerHTML = line;
            tdLink.appendChild(link);
            // case of number
            let td = document.createElement('td');
            td.className = signe;
            td.classList.add("nbr");
            td.innerHTML = (0).toFixed(2);
            tr.appendChild(tdLink);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }

    /**
     * listen click on item to open modal window, get & write user answer, calculate and update total
     */
    this.writeValue = function (targetElem) {
        // get items
        let allLink = targetElem.getElementsByTagName('a');
        let allNbr = targetElem.getElementsByClassName("nbr");

        // listen item
        for (let i = 0 ; i < allLink.length ; i++){
            allLink[i].addEventListener('click', function (e){
                e.preventDefault();

                // invoke modal window
                let frame = new ModalWindow(targetElem,'rgba(173, 216, 230, 0.5)',
                    'white', '3px double black');
                frame.screen();
                let txt = allLink[i].closest("table").querySelector('th').innerHTML;
                frame.box(txt,allLink[i].innerHTML);
                frame.inputBox("number","3rem", "2rem", "", true);
                frame.closeBtn('valider');

                let inputModal = document.getElementById("inputModalId");
                let btn = document.getElementById("btnFrameId");

                // validation btn
                btn.addEventListener('click', ()=>{
                    // get absolute value or 0
                    let itemValue = isNaN(parseFloat(inputModal.value)) ? 0 : Math.abs(parseFloat(inputModal.value));
                    // write value
                    allNbr[i].innerHTML = itemValue.toFixed(2);
                    // count
                    // reset amount
                    let outAmount = 0;
                    let inAmount = 0;
                    // get new outAmount
                    let sub = document.getElementsByClassName("out");
                    for(let item of sub){
                        outAmount += parseFloat(item.innerHTML);
                    }
                    // get new inAmount
                    let add = document.getElementsByClassName("in");
                    for (let item of add){
                        inAmount += parseFloat(item.innerHTML);
                    }
                    // display outcome
                    let total = document.getElementsByClassName("total");
                    total[0].innerHTML = outAmount.toFixed(2);
                    total[1].innerHTML = inAmount.toFixed(2);
                    total[2].innerHTML = (inAmount - outAmount).toFixed(2);

                    // adapt the text
                    total[2].parentElement.querySelector('td').innerHTML = (inAmount - outAmount) === 0 ?
                        "Votre solde est nul" : (inAmount - outAmount) > 0 ?
                        "Votre solde est positif" : "Votre solde est négatif";

                    // adapt the color
                    total[2].parentElement.style.color = (inAmount - outAmount) === 0 ? "black" :
                        (inAmount - outAmount) > 0 ? "green" : "red";
                })
            })
        }
    }

    /**
     * create result element
     * @param targetId
     * @param itemHtml
     */
    this.budgetResult = function (targetId, ...itemHtml){
        let place = document.getElementById(targetId);
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');

        for(let line of itemHtml){
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let tdNbr = document.createElement('td');
            tdNbr.className = "total";
            td.innerHTML = line;
            tdNbr.innerHTML = (0).toFixed(2);
            tr.appendChild(td);
            tr.appendChild(tdNbr);
            tbody.appendChild(tr);
        }
        place.appendChild(table).appendChild(tbody);
    }

    /**
     * create reset button in footer
     */
    this.reset = function (){

        let footer = document.createElement('footer');
        footer.style.textAlign = "center";
        let resetBtn = document.createElement("button");

        resetBtn.style.width = "30%";
        resetBtn.style.margin = ".5rem";
        resetBtn.type = "submit";
        resetBtn.innerHTML = "Reset";

        let place = document.getElementById("count");
        place.appendChild(footer).appendChild(resetBtn);

        resetBtn.addEventListener('click', function (){
            let amount = document.getElementsByTagName('td');
            for(let item of amount){
                if(Number.isInteger(parseFloat(item.innerHTML))){
                    item.innerHTML = (0).toFixed(2);
                }
            }
            amount[amount.length - 1].parentElement.querySelector('td').innerHTML = "Solde";
            amount[amount.length - 1].parentElement.style.color = "black";
        })
    }
}
