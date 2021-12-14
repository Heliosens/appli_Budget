// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

let side1 = document.createElement('div');
let side2 = document.createElement('div');
side1.id = "side";
side2.id = "side";
main.appendChild(side1);
main.appendChild(side2);

let place = new BudgetTable();

place.titleTxt(main,"Budget mensuel", "title");

// create differents section
place.budgetSection(side1,"outlay", "Dépenses");
place.budgetSection(side2,"income", "Entrées");
place.budgetSection(side2,"saving", "Epargne");
place.budgetSection(side2, "count", "Résultat");

place.budgetResult('count', 'Dépenses', 'Recettes', 'Résultat');

// create outlays fixe
place.budgetType("outlay", "out", "Dépenses fixes", "Loyer et Charges", "Remboursement de crédits",
    "Eau - Electricité - Gaz", "Téléphone - Internet", "Assurance habitation", "Santé", "Impôts sur le revenu",
    "Impôts locaux");

// create outlays current
place.budgetType("outlay", "out", "Dépenses courantes", "Courses", "Frais de transport en commun",
    "Activités sportives et culturelles");

// create outlays occasional
place.budgetType("outlay", "out", "Dépenses occasionnelles", "Sorties", "Autres dépenses");

// saving
place.budgetType("saving", "", "Epargne", "Epargne")

// create income
place.budgetType("income", "in", "Recettes", "Salaires", "Aides", "Rentes", "Autres recettes");

// listen link
place.writeValue();

// create buttons and count
place.count();
