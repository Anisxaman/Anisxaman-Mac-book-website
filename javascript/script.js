function memory(num1,idpara){


    const memoryCost=document.getElementById(idpara);

    memoryCost.innerText=num1;

    calculation();

}



function calculation(){
//    const BestPrice= document.getElementById("BestPrice");
//    const BestPhnPrice=eval(BestPrice.innerText);
   const memoryCost=document.getElementById("memoryCost").innerText;
   const extraMemoryCost=eval(memoryCost);
   const storageCost=document.getElementById("storageCost").innerText;
   const extraStorageCost=eval(storageCost);
   const deliveryCost=document.getElementById("deliveryCharge").innerText;
   const deliveryCharge=eval(deliveryCost);
    const TotalPrice=document.getElementById("totalPrice");
    const TotalAmountOfPrice=eval(TotalPrice.innerText);

    console.log(TotalAmountOfPrice);
    console.log(extraStorageCost);
    console.log(deliveryCharge);

TotalPrice.innerText=extraMemoryCost+extraStorageCost+deliveryCharge +1299;
const allTotalPrice=TotalPrice.innerText;

discount(allTotalPrice)
}



function discount(price){
  const discountTotal=  document.getElementById("finalTotal");
  discountTotal.innerText=price;

}







document.getElementById("memoryBtnOne").addEventListener('click',function(){
    memory(0,"memoryCost");
    
})
document.getElementById("memoryBtnTwo").addEventListener('click',function(){
    memory(180,"memoryCost");
    
})
document.getElementById("storageBtnOne").addEventListener('click',function(){
    memory(0,"storageCost");
    
})
document.getElementById("storageBtnTwo").addEventListener('click',function(){
    memory(100,"storageCost");
    
})
document.getElementById("storageBtnthree").addEventListener('click',function(){
    memory(180,"storageCost");
    
})
document.getElementById("deliveryBtnOne").addEventListener('click',function(){
    memory(0,"deliveryCharge");
    
})
document.getElementById("deliveryBtnTwo").addEventListener('click',function(){
    memory(20,"deliveryCharge");
    
})



