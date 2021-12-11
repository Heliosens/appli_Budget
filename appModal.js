
/**
 *
 * @param screenColor
 * @param w
 * @param h
 * @param boxColor
 * @param border
 * @constructor
 */
function ModalWindow (screenColor, w, h, boxColor, border){

    this.screenColor = screenColor;

    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.width = innerWidth + "px";
        fullScreen.style.height = innerHeight + "px";
        fullScreen.style.backgroundColor = this.screenColor;

        fullScreen.style.position = "absolute";
        fullScreen.style.top = "0";
        fullScreen.style.left = "0";

        fullScreen.style.display = "flex";
        fullScreen.style.justifyContent = "center";
        fullScreen.style.alignItems = "center";

        fullScreen.id = 'container';

        document.body.appendChild(fullScreen);
    }

    /**
     *
     * @param title
     * @param text
     */
    this.box = function (title = "", text =""){
        let littleBox = document.createElement('div');
        littleBox.style.backgroundColor = boxColor;
        littleBox.style.border = border;
        littleBox.style.width = w;
        littleBox.style.height = h;
        littleBox.style.padding = "1vh";
        littleBox.style.fontFamily = "sans-serif";

        littleBox.style.display = "flex";
        littleBox.style.flexDirection = "column";
        littleBox.style.justifyContent = "space-between";
        littleBox.style.alignItems = "center";
        // append in container
        let container = document.getElementById('container');
        container.appendChild(littleBox);
        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        littleBox.appendChild(h1);
        // create text
        let div = document.createElement('div');
        div.innerHTML = (text).toString();
        littleBox.appendChild(div);
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.padding = ".5rem 1rem";
        btn.innerHTML = "OK";
        btn.addEventListener('click', function (){
            container.style.display = "none";
        });
        littleBox.appendChild(btn);
    }
}


// call construct
// let test = new ModalWindow("#add8e64d", "30%","50vh","white", "1px solid black");
// test.screen();
// test.box("Titre de la fenêtre", "Le texte suivant est contenu dans la fenêtre");

