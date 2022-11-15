window.onload =function() {
    document.querySelector(".greetBox").textContent = localStorage.getItem("username");
    setTimeout(()=>{
        console.log("run");
        document.querySelector(".greetBox").style.transform = "translateY(0%)";
    },500)
    
}