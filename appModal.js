/**
 *  create modal window
 *  .screen id='container',
 *  .box id='theBox' and inner box id='innerBox'
 *  enable to create input element and button
 *  .inputBox id='inputModalId';
 *  .closeBtn id='btnModalId'
 * @param screenColor
 * @param w
 * @param h
 * @param boxColor
 * @param border
 * @constructor
 */
function ModalWindow (screenColor, w, h, boxColor, border){
    /**
     * create screen cover
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
        // affect id
        fullScreen.id = 'container';

        document.body.appendChild(fullScreen);
    }

    /**
     * create modal window
     * @param title
     * @param text
     */
    this.box = function (title = "", text =""){
        // create modal window
        let theBox = document.createElement('div');
        // style
        theBox.style.backgroundColor = boxColor;
        theBox.style.border = border;
        theBox.style.width = w;
        theBox.style.height = h;
        theBox.style.padding = "1vh";
        theBox.style.fontFamily = "sans-serif";
        theBox.style.display = "flex";
        theBox.style.flexDirection = "column";
        theBox.style.justifyContent = "space-around";
        theBox.style.alignItems = "center";

        // affect id
        theBox.id = "theBox";

        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        theBox.appendChild(h1);

        // create inner box id='innerBox'
        let div = document.createElement('div');
        div.style.textAlign = "center";
        div.id = "innerBox";
        theBox.appendChild(div);

        // add text
        let p = document.createElement('p');
        p.innerHTML = (text).toString();
        p.style.margin = '1rem';
        div.appendChild(p);

        // append in container
        let container = document.getElementById('container');
        container.appendChild(theBox);
    }

    /**
     * create input element in the box
     * @param h
     * @param sizeTxt
     * @param txt
     */
    this.inputBox = function (h = '3rem', sizeTxt = '2rem', txt = ""){
        // create label
        let labelFrame = document.createElement('label');
        labelFrame.innerHTML = txt;
        labelFrame.style.alignSelf = "left";
        // create input
        let inputFrame = document.createElement('input');
        inputFrame.style.height = h;
        inputFrame.style.fontSize = sizeTxt;
        inputFrame.name = "inputInBox";
        inputFrame.type = "number";

        // affect id
        inputFrame.id = "inputModalId";

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
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.fontSize = "2rem";
        btn.style.padding = ".5rem 1rem";
        btn.innerHTML = btnText;
        btn.id = "btnFrameId";
        btn.type = "submit";
        btn.name = "inputInBox";

        // get element to close
        let container = document.getElementById('container');
        btn.addEventListener('click', function (){
            container.remove();
        });
        // get target element
        let theBox = document.getElementById('theBox');
        theBox.appendChild(btn);
    }
}

