/**
 *  create modal window
 *      .screen id='container',
 *      .box id='theBox' and inner box id='innerBox'
 *  enable to create input element and button
 *      .inputBox id='inputModalId';
 *  create close button
 *      .closeBtn id='btnModalId'
 * @param target
 * @param screenColor
 * @param w
 * @param h
 * @param boxColor
 * @param border
 * @constructor
 */
function ModalWindow (target, screenColor, w, h, boxColor, border){

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

        target.appendChild(fullScreen);
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
        let innerBox = document.createElement('div');
        innerBox.style.textAlign = "center";
        innerBox.style.display = "flex";
        innerBox.style.flexDirection = "column";
        innerBox.style.justifyContent = "space-around";
        innerBox.style.alignItems = "center";
        innerBox.id = "innerBox";
        theBox.appendChild(innerBox);

        // add text
        let p = document.createElement('p');
        p.innerHTML = (text).toString();
        p.style.margin = '1rem';
        innerBox.appendChild(p);

        // append in container
        let container = document.getElementById('container');
        container.appendChild(theBox);
    }

    /**
     *  create input element in the box
     * @param inputType
     * @param h
     * @param sizeTxt
     * @param txt
     */
    this.inputBox = function (inputType, h = '3rem', sizeTxt = '2rem', txt = ""){
        let div = document.createElement('div');
        // create label
        let labelFrame = document.createElement('label');
        labelFrame.innerHTML = txt;
        labelFrame.style.alignSelf = "left";
        // create input
        let inputFrame = document.createElement('input');
        inputFrame.style.height = h;
        inputFrame.style.fontSize = sizeTxt;
        inputFrame.name = "inputInBox";
        inputFrame.type = inputType;

        // affect id
        inputFrame.id = "inputModalId";

        let innerBox = document.getElementById('innerBox');
        div.appendChild(labelFrame);
        div.appendChild(inputFrame);
        innerBox.appendChild(div);
        inputFrame.focus();
    }

    /**
     * create button to remove modal window
     * @param btnText
     * @param textSize
     */
    this.closeBtn = function (btnText, textSize){
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.fontSize = textSize;
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
