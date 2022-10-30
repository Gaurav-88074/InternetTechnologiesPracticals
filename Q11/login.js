window.onload =function() {
    document.getElementById("signup").addEventListener("click",(e)=>{
        window.location.href = "./signup.html";
    })
    document.querySelector(".loginButton").addEventListener("click",()=>{
        window.location.href = "./welcome.html";
    })
}