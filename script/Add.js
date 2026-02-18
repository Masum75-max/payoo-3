

document.getElementById("Add-btn").addEventListener("click",function(){
   
  const bank= value("bank");
 
  if(bank==="DBL" || bank ==="IBBL" ||bank==="City Bank"){
    console.log("Bank is ok")
  }
  else{
    alert("Error bank selection");

    return;

  }

  const acNo=value("Add-Number");

  if(acNo.length!=10){
   alert("Error bank acc No.");

   return;
  }

  else{
    console.log("Acc No is ok");
  }
   
  const amount=value("Add-Amount");
  const pin=value("Add-Pin");

  if(pin==="3322"){
    alert(`Added tk ${amount}
       from ${bank} at ${new Date()}  
      `)
  }

  else{
    alert("Invalid pin");
    return;
  }

  

  const newBalance= getBalance()+ Number(amount);

  setBalance(newBalance);

  const trs=document.getElementById("transaction");

  const elem=document.createElement("div")
  
  elem.innerHTML=
    `
    <div class="flex bg-gray-100 w-full gap-10 p-2 items-center rounded-lg">
  <div class="bg-white h-10 w-10 flex justify-center items-center rounded-full">
  <img src="./assets/opt-1.png" class="h-7">
  </div>
  <div>
 <h1 class="font-bold">Added tk ${amount}</h1>

 <p class="text-sm">at ${new Date()}</p>
   </div>
   </div>


    `
 

  trs.appendChild(elem);

})