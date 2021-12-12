// get height
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// get items
let outlay = document.getElementById('outlay').getElementsByTagName('a');
console.log(outlay);

let income = document.getElementById('income').getElementsByTagName('a');
console.log(income);

let count = 0;

for (let item of outlay){
    item.addEventListener('click', function (e){
        e.preventDefault();
        console.log(item.parentElement);
        let frame = new ModalWindow('#add8e685', '50%', '50vh', 'white', '3px double black');
        frame.screen();
        frame.box("Poste de dépense",item.innerHTML);
        frame.inputBox("3rem", "2rem", "montant ");
        frame.closeBtn('valider');
        let inputFrame = document.getElementById("inputFrameId");
        let btn = document.getElementById("theBox").querySelector('button');

        btn.addEventListener('click', ()=>{
            count += parseFloat(inputFrame.value);
            console.log(count);
        })
    })

}



for(let item of income){
    item.addEventListener('click', function (e){
        e.preventDefault();
        console.log(item.innerHTML);
    })
}

