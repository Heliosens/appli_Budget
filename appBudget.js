// get main to place budget elements and modal window
let main = document.querySelector('main');

// create 2 columns
let side1 = document.createElement('div');
let side2 = document.createElement('div');
side1.className = "side";
side2.className = "side";
main.appendChild(side1);
main.appendChild(side2);

// create budget table
let place = new BudgetTable();

place.titleTxt(main,"Budget mensuel", "title");

// create differents section
place.budgetSection(side1,"outlay", "Dépenses");
place.budgetSection(side2,"income", "Entrées");
place.budgetSection(side2,"saving", "Epargne");
place.budgetSection(side2, "count", "Résultat");

// create result section
place.budgetResult('count', 'Dépenses', 'Recettes', 'Solde');

// add outlays fixe
place.budgetItem("outlay", "out", "Dépenses fixes", "Loyer et Charges", "Remboursement de crédits",
    "Eau - Electricité - Gaz", "Téléphone - Internet", "Assurance habitation", "Santé", "Impôts sur le revenu",
    "Impôts locaux");

// add outlays current
place.budgetItem("outlay", "out", "Dépenses courantes", "Courses", "Frais de transport en commun",
    "Activités sportives et culturelles");

// add outlays occasional
place.budgetItem("outlay", "out", "Dépenses occasionnelles", "Sorties", "Autres dépenses");

// create income
place.budgetItem("income", "in", "Recettes", "Salaires", "Aides", "Rentes", "Autres recettes");

// saving
place.budgetItem("saving", "", "Epargne", "Epargne");

// listen links to open modal window
place.writeValue(main);

// create buttons to count and reset
place.reset();
