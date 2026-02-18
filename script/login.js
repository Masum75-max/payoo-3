const Login=document.getElementById("Login-btn");

Login.addEventListener("click",function(){

  const Number=document.getElementById("Number").value;
const Pin=document.getElementById("Pin").value;
      if(Number==="01303814457" && Pin==="3322"){
        alert("Succesfully logged in");
        window.location.assign("home.js");
      }

      else{
        alert("Wrong Id or Password");
      }
})