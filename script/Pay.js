
document.getElementById("Pay-btn").addEventListener("click",function (){


         console.log("clicked")
          const rn=value("Pay-Number");
          
          if(rn.length!=11){
            alert("Number doesnt exist");
            return;
          }

          const pin=value("Pay-Pin");

          if(pin !="3322"){
            alert("Wrong pin");
            return;
          }

          const amount=value("Pay-Amount");

          const newB=getBalance()-Number(amount);

          if(newB<0){
            alert("No sufficient funds");
            return;
          }
          else{
             alert(`Paid tk ${amount}
                   at ${new Date()}  
      `)
            setBalance(newB);
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
 <h1 class="font-bold">Bill Payed tk ${amount}</h1>

 <p class="text-sm">at ${new Date()}</p>
   </div>
   </div>


    `
 

  trs.appendChild(elem);


})