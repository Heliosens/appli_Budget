// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// get button
let reset = document.getElementById('reset');

// create elements
let fixed = new BudgetItemTable();
fixed.budgetTable('outlay', 'fixed');
fixed.budgetHead('fixed', 'dépenses fixes');
fixed.budgetBody('fixed');
fixed.budgetTr('fixed', '<a href="">Loyer et Charges</a>', 0)
fixed.budgetTr('fixed', '<a href="">Remboursement de crédits</a>', 0);
fixed.budgetTr('fixed','<a href="">Eau - Electricité - Gaz</a>', 0);
fixed.budgetTr('fixed','<a href="">Téléphone - Internet</a>', 0);
fixed.budgetTr('fixed','<a href="">Assurance habitation</a>', 0);
fixed.budgetTr('fixed','<a href="">Santé</a>', 0);
fixed.budgetTr('fixed','<a href="">Impôts sur le revenu</a>', 0);
fixed.budgetTr('fixed','<a href="">Impôts locaux</a>', 0);

let current = new BudgetItemTable();
current.budgetTable('outlay', 'current');
current.budgetHead('current', 'Dépenses courantes :');
current.budgetBody('current');
current.budgetTr('current', '<a href="">Courses</a>', 0);
current.budgetTr('current', '<a href="">Frais de transport en commun</a>', 0);
current.budgetTr('current', '<a href="">Activités sportives et culturelles</a>', 0);

let occasional = new BudgetItemTable();
occasional.budgetTable('outlay','occasional');
occasional.budgetHead('occasional', 'Dépenses occasionnelles :');
occasional.budgetBody('occasional');
occasional.budgetTr('occasional', '<a href="">Sorties</a>', 0);
occasional.budgetTr('occasional', '<a href="">Autres dépenses</a>', 0);

let income = new BudgetItemTable();
income.budgetTable('income', 'inNbr');
income.budgetBody('inNbr');
income.budgetTr('income', '<a href="">Salaires</a>', 0);
income.budgetTr('income', '<a href="">Aides</a>', 0);
income.budgetTr('income', '<a href="">Rentes</a>', 0);
income.budgetTr('income', '<a href="">Autres recettes</a>', 0);

let result = new BudgetItemTable();
result.budgetTable('result', 'totalResult');
result.budgetBody('totalResult');
result.budgetTr('result', 'Dépenses', 'Recettes', 'Résultat');
result.budgetTr('result', 0, 0, 0);

// get items
let allLink = main.getElementsByTagName('a');

let allNbr = main.getElementsByTagName('td');

// convert html collection to array
let arrayLink = Array.from(allLink);

for (let item of arrayLink){
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
            // recup input value
            let itemNbr = isNaN(parseFloat(inputModal.value)) ? 0 : parseFloat(inputModal.value);
            allNbr[arrayLink.indexOf(item) *2 + 1].innerHTML = itemNbr.toFixed(2);

            // count
            let i = allNbr.length;
            let outCount = 0;
            let inCount = 0;
            let arrNbr = Array.from(allNbr);
            for (let item of arrNbr){
                if(arrNbr.indexOf(item) <= 25){
                    if(Number.isInteger(parseFloat(item.innerHTML))){
                        console.log(item.innerHTML);
                        outCount += parseFloat(item.innerHTML);
                    }
                }
                else if (arrNbr.indexOf(item) < i - 3) {
                    if(Number.isInteger(parseFloat(item.innerHTML))){
                        console.log(item.innerHTML);
                        inCount += parseFloat(item.innerHTML);
                    }
                }
            }
            allNbr[i -3].innerHTML = outCount.toFixed(2);
            allNbr[i - 2].innerHTML = inCount.toFixed(2);
            allNbr[i - 1].innerHTML = (inCount - outCount).toFixed(2);
        })
    })
}

let cases = Array.from(allNbr);

reset.addEventListener('click', ()=> {
    for(let item of cases){
        if(Number.isInteger(parseFloat(item.innerHTML))){
            allNbr[cases.indexOf(item)].innerHTML = (0).toFixed(2);
        }
    }
    console.log('ici');
})
