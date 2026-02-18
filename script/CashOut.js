
const WithDrawBtn= document.getElementById("WithDraw-btn")

WithDrawBtn.addEventListener("click",function(){
        const CashoutNumber =value("CashOut-Number");
        const amount =value("CashOut-Amount");
        const pin=value("CashOut-Pin");
        const balance=document.getElementById("balance").innerText;
        if(CashoutNumber.length != 11){
          alert("Agent Number not valid");
          return;
        }

        const NewBalance=Number(balance)-Number(amount);

        if(NewBalance<0){
           alert("No sufficient funds");

           return;
        }


        if(pin==="3322"){
          document.getElementById("balance").innerText=NewBalance;
          alert("Cashout completed Successfully");
        }

        else{
          alert("Wrong pin");
        }

         const trs=document.getElementById("transaction");

  const elem=document.createElement("div")
  
  elem.innerHTML=
    `
    <div class="flex bg-gray-100 w-full gap-10 p-2 items-center rounded-lg">
  <div class="bg-white h-10 w-10 flex justify-center items-center rounded-full">
  <img src="./assets/opt-1.png" class="h-7">
  </div>
  <div>
 <h1 class="font-bold">Cash out tk ${amount}</h1>

 <p class="text-sm">at ${new Date()}</p>
   </div>
   </div>


    `
 

  trs.appendChild(elem);
        
})