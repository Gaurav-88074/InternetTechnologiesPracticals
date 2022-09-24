window.onload = function() {
    const buttons = ["Red","Green","Blue",'10','20','30',"serif","Times","Arial"];
    //-----------------------------
    const property      = new Map();
    const hashMap       = new Map();
    //-----------------------------
    
    //-------------------------------------------------
    hashMap.set('color',(selector,newColor)=>{
        selector.style.color = newColor;
        return;
    });
    hashMap.set('fontSize',(selector,newSize)=>{
        selector.style.fontSize = `${newSize}px`;
        return;
    });
    hashMap.set('fontStyle',(selector,newStyle)=>{
        selector.style.fontFamily = newStyle;
        return;
    });
    //-------------------------------------------------
    property.set('Red'  ,'color');
    property.set('Blue' ,'color');
    property.set('Green','color');
    //-------------------------------------------------
    property.set('10','fontSize');
    property.set('20','fontSize');
    property.set('30','fontSize');
    //-------------------------------------------------
    property.set('serif','fontStyle');
    property.set('Times','fontStyle');
    property.set('Arial','fontStyle');
    //-------------------------------------------------
    const performAction = function(e) {
        let value = e.target.textContent.trim();
        let paragraph = document.getElementById("paragraph");

        let prop = property.get(value);
        const Function = hashMap.get(prop);
        Function(paragraph,value)
    }
    const getButton = function(text) {
        let button = document.createElement('button');
        button.innerText = text;
        button.addEventListener('click',performAction);
        button.id = text;
        return button
    }
    let grid = document.getElementById("grid");
    buttons.forEach((value)=>{
        grid.appendChild(getButton(value));
    });
    
    //-------------------------------------------------
    // console.log(buttons);
}