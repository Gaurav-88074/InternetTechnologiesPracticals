window.onload = function(){
    const state = {
        index : 1,
        fontSize : 15, 
    }
    const getString = function(a,i){
        return `${a} X ${i} = ${a*i}`;
    }
    const getCardDiv = function(n,i,rgb,fontSize){
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerText = getString(n,i);
        div.style.color = rgb;
        div.style.fontSize = `${fontSize}px`;
        console.log(div);
        return div;
    }
    const getRandomRgb = function(){
        let a = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let c = Math.floor(Math.random()*255);
        return `rgb(${a},${b},${c})`;
    }

    setInterval(()=>{
        if(state.index>10){
            return;
        }
        let randomRGB = getRandomRgb();
        document.getElementsByTagName('main')[0].appendChild(getCardDiv(2,state.index,randomRGB,state.fontSize))
        // console.log(document.getElementsByTagName('main')[0]);
        state.index+=1;
        // state.fontSize+=0.5;
        console.log(state);
    },1000)
    
    
}