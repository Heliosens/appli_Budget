// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";


let place = new BudgetTable(main);
place.titleTxt("Budget mensuel", "title");

// create differents section
place.budgetSection("outlay", "Dépenses");
place.budgetSection("income", "Recettes");
place.budgetSection("saving", "Epargne");
place.budgetSection("result", "Résultat")

// create outlays fixe
place.budgetType("outlay", "Dépenses fixes", "Loyer et Charges", "Remboursement de crédits",
    "Eau - Electricité - Gaz", "Téléphone - Internet", "Assurance habitation", "Santé", "Impôts sur le revenu",
    "Impôts locaux");

// create outlays current
place.budgetType("outlay", "Dépenses courantes", "Courses", "Frais de transport en commun",
    "Activités sportives et culturelles");

// create outlays occasional
place.budgetType("outlay", "Dépenses occasionnelles", "Sorties", "Autres dépenses");

// saving
place.budgetType("saving", "Epargne", "Epargne")

// create income
place.budgetType("income", "Salaires", "Aides", "Rentes", "Autres recettes");

place.budgetType("result", "Total", 'Dépenses', 'Recettes', 'Résultat');

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
        frame.inputBox("number","2rem", "2rem", "montant ");
        frame.closeBtn('valider', '1rem');
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
})
