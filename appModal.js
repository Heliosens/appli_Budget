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
    /**
     * create cover screen
     */
    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.width = innerWidth + "px";
        fullScreen.style.height = innerHeight + "px";
        fullScreen.style.backgroundColor = screenColor;

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
     * create modal window
     * @param title
     * @param text
     */
    this.box = function (title = "", text =""){
        let theBox = document.createElement('div');
        theBox.style.backgroundColor = boxColor;
        theBox.style.border = border;
        theBox.style.width = w;
        theBox.style.height = h;
        theBox.style.padding = "1vh";
        theBox.style.fontFamily = "sans-serif";
        theBox.id = "theBox";

        theBox.style.display = "flex";
        theBox.style.flexDirection = "column";
        theBox.style.justifyContent = "space-around";
        theBox.style.alignItems = "center";
        // append in container
        let container = document.getElementById('container');
        container.appendChild(theBox);
        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        theBox.appendChild(h1);

        // create inner box
        let div = document.createElement('div');
        div.id = "innerBox";
        div.style.textAlign = "center";
        theBox.appendChild(div);
        // add text
        let p = document.createElement('p');
        p.innerHTML = (text).toString();
        p.style.margin = '1rem';
        div.appendChild(p);
    }

    /**
     * create input element in the box
     * @param h
     * @param sizeTxt
     * @param txt
     */
    this.inputBox = function (h = '3rem', sizeTxt = '2rem', txt = ""){
        let labelFrame = document.createElement('label');
        labelFrame.innerHTML = txt;
        labelFrame.style.alignSelf = "left";
        let inputFrame = document.createElement('input');
        inputFrame.style.height = h;
        inputFrame.style.fontSize = sizeTxt;
        inputFrame.name = "inputInBox";
        inputFrame.type = "number";
        inputFrame.id = "inputFrameId";
        let innerBox = document.getElementById('innerBox');
        innerBox.appendChild(labelFrame);
        innerBox.appendChild(inputFrame);
        inputFrame.focus();
    }

    /**
     * get input value and close window
     * @param btnText
     */
    this.closeBtn = function (btnText){
        let inputFrameId = document.getElementById("inputFrameId");
        let theBox = document.getElementById('theBox');
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.fontSize = "2rem";
        btn.style.padding = ".5rem 1rem";
        btn.innerHTML = btnText;
        btn.type = "submit";
        btn.name = "inputInBox";
        let container = document.getElementById('container');
        btn.addEventListener('click', function (){
            container.remove();
        });
        theBox.appendChild(btn);
    }
}

