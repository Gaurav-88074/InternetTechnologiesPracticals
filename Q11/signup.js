window.onload =function() {
    document.getElementById("login").addEventListener("click",(e)=>{
        window.location.href = "./login.html";
    })
    document.getElementById("signupbutton").addEventListener("click",(e)=>{
        const phoneNumber = document.getElementById("ph").value;
        const password = document.getElementById("pw").value;
        const obj = {
            phoneNumber,
            password,
            userName : "user"
        }
        console.log(obj);
        const options = {
            method: 'POST',
            body: JSON.stringify(obj)
          };
          
          fetch('http://localhost:5000/api/add/user', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                window.location.href = "./login.html";
            })
            .catch(err => console.error(err));
        window.location.href = "./login.html";
    })
}