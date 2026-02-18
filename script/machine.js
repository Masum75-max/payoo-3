

function value (id){
  const IdName=document.getElementById(id);

  const val= IdName.value;

  return val;
}


function getBalance(){
  const balanceElement=document.getElementById("balance");

  const balance=balanceElement.innerText;

  return Number(balance);
}

function setBalance(value){
  const balanceElement=document.getElementById("balance");

  balanceElement.innerText=value;

}


function onlyShow(id){
  const btns=document.getElementsByClassName("work")
  for(let btn of btns){
      btn.classList.add("hidden")
    
  }

  document.getElementById(id).classList.remove("hidden");
}
