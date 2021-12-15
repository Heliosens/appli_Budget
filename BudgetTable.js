/**
 * create title, section,
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
     * give className to amount "out" for expense, "in" for income
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
            let tr = document.createElement('tr');
            let tdLink = document.createElement('td');
            let link = document.createElement('a');
            link.innerHTML = line;
            tdLink.appendChild(link);
            let td = document.createElement('td');
            td.className = signe;
            td.innerHTML = (0).toFixed(2);
            tr.appendChild(tdLink);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }

    /**
     * listen click on item to open modal window and write user answer
     */
    this.writeValue = function () {
        // get items
        let allLink = main.getElementsByTagName('a');
        let allNbr = main.getElementsByTagName('td');

        // convert html collection to array
        let arrayLink = Array.from(allLink);

        // listen item
        for (let item of arrayLink){
            item.addEventListener('click', function (e){
                e.preventDefault();

                // invoke modal window
                let frame = new ModalWindow(main,'rgba(173, 216, 230, 0.8)',
                    '50%', '40vh', 'white', '3px double black');
                frame.screen();
                frame.box("Poste de dépense",item.innerHTML);
                frame.inputBox("number","2rem", "1.5rem", "", true);
                frame.closeBtn('valider');
                let inputModal = document.getElementById("inputModalId");
                let btn = document.getElementById("theBox").querySelector('button');

                // validation btn
                btn.addEventListener('click', ()=>{
                    // recup input value
                    let itemNbr = isNaN(parseFloat(inputModal.value)) ? 0 : parseFloat(inputModal.value);
                    allNbr[arrayLink.indexOf(item) *2 + 1].innerHTML = itemNbr.toFixed(2);
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
        let info = document.createElement('div');
        info.id = "info";

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
        place.appendChild(info);
    }


    /**
     * create button in footer
     *
     */
    this.count = function (){

        let footer = document.createElement('footer');
        footer.style.textAlign = "center";
        let resetBtn = document.createElement("button");
        let btn = document.createElement("button");

        resetBtn.style.width = "40%";
        resetBtn.style.margin = ".5rem";
        resetBtn.type = "submit";
        resetBtn.innerHTML = "Reset";

        btn.style.width = "40%";
        btn.style.margin = ".5rem";
        btn.type = "submit";
        btn.innerHTML = "Total";

        let place = document.getElementById("count");
        place.appendChild(footer).appendChild(resetBtn);
        footer.appendChild(btn);

        let outAmount = 0;
        let inAmount = 0;

        btn.addEventListener('click', function (){
            let add = document.getElementsByClassName("out");
            for(let item of add){
                outAmount += parseFloat(item.innerHTML);
            }
            let sub = document.getElementsByClassName("in");
            for (let item of sub){
                inAmount += parseFloat(item.innerHTML);
            }
            let total = document.getElementsByClassName("total");
            let info = document.getElementById("info");
            total[0].innerHTML = outAmount.toFixed(2);
            total[1].innerHTML = inAmount.toFixed(2);
            let sum = inAmount - outAmount;
            total[2].innerHTML = sum.toFixed(2);
            if(sum < 0){
                total[2].style.color = "green";
                info.innerHTML = "Votre solde est positif";
            }
            else {
                total[2].style.color = "red";
                info.innerHTML = "Votre solde est négatif";
            }

        })

        resetBtn.addEventListener('click', function (){
            let amount = document.getElementsByTagName('td');
            for(let item of amount){
                if(Number.isInteger(parseFloat(item.innerHTML))){
                    item.innerHTML = (0).toFixed(2);
                }
            }

        })
    }
}
