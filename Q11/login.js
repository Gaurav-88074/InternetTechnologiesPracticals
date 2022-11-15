window.onload =function() {
    document.getElementById("signup").addEventListener("click",(e)=>{
        window.location.href = "./signup.html";
    })
    document.querySelector(".loginButton").addEventListener("click",()=>{
        const phoneNumber = document.getElementById("ph").value;
        const password    = document.getElementById("pw").value;
        const obj = {
            phoneNumber,
            password,
        }
        console.log(obj);
        const options = {
            method: 'POST',
            body: JSON.stringify(obj)
          };
          
          fetch('http://localhost:5000/api/login', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if(response.length==0){
                    alert("invalid id or password")
                }
                else{
                    localStorage.setItem("username",response[0].username);
                }
                window.location.href = "./welcome.html";
            })
            .catch(err => console.error(err));
        // window.location.href = "./welcome.html";
    })
}