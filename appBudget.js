// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// get items
let outlay = document.getElementById('outlay').getElementsByTagName('a');
let outNbr = document.getElementById('outlay').getElementsByClassName('nbr');
let income = document.getElementById('income').getElementsByTagName('a');
let result = document.getElementById('result').getElementsByClassName('nbrResult');

// convert html collection to array
let arrayOut = Array.from(outlay);
let arrayIn = Array.from(income);

let outCount = 0;
let inCount = 0;
let resultCount = 0;

let outTable = new budgetTable('outlay');
outTable.budgetTable('expense', 'Dépenses fixes :');


for (let item of arrayOut){
    item.addEventListener('click', function (e){
        e.preventDefault();
        // invoke modal window
        let frame = new ModalWindow(main,'rgba(173, 216, 230, 0.8)', '50%', '50vh', 'white', '3px double black');
        frame.screen();
        frame.box("Poste de dépense",item.innerHTML);
        frame.inputBox("number","3rem", "2rem", "montant ");
        frame.closeBtn('valider', '2rem');
        let inputModal = document.getElementById("inputModalId");
        let btn = document.getElementById("theBox").querySelector('button');
        // validation btn
        btn.addEventListener('click', ()=>{
            let itemNbr = isNaN(parseFloat(inputModal.value)) ? 0 : parseFloat(inputModal.value);
            outNbr[arrayOut.indexOf(item)].innerHTML = itemNbr.toFixed(2);
            outCount += itemNbr;
            result[0].innerHTML = outCount.toFixed(2);
            result[1].innerHTML = inCount.toFixed(2);
            result[2].innerHTML = (inCount - outCount).toFixed(2);
        })
    })
}

// for(let item of income){
//     item.addEventListener('click', function (e){
//         e.preventDefault();
//         console.log(item.innerHTML);
//     })
// }
//
