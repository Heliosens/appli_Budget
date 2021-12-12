// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// get items
let outlay = document.getElementById('outlay').getElementsByTagName('a');
console.log(outlay);

// convert html collection to array
let arrayOut = Array.from(outlay);
let income = document.getElementById('income').getElementsByTagName('a');
console.log(income);

let count = 0;

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

        btn.addEventListener('click', ()=>{
            count += isNaN(parseFloat(inputModal.value)) ? 0 : parseFloat(inputModal.value);
            console.log('index = ' + arrayOut.indexOf(item) + " value = " + count);

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
