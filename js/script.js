var pay = document.querySelector(".YOUR")//button to open the payment modal
var cart = document.querySelector(".choosed")//div to show selected items
var tclose = document.querySelector(".close")//button to close the payment modal
var calct = document.querySelector(".totalprice")//button to calculate the total price
var tp = document.querySelector(".TP")//div to show the total price
var payscreen = document.querySelector(".price-sec")//div to show the payment screen
var add = document.querySelectorAll(".add-to-cart")//button to add items to the cart
var totalprice = 0;
var pname = document.querySelector(".name")

pay.onclick = function(){
    payscreen.style.display = "block";
}



tclose.onclick = function(){
    payscreen.style.display = "none";
}

add.forEach(function(addbtn){
    addbtn.onclick = function(){
        cart.innerHTML += addbtn.getAttribute("name") + " "+ " -------- " + addbtn.getAttribute("price") + "<br>";

        totalprice += +(addbtn.getAttribute("price"));
    }
    
})


calct.onclick = function(){
    if (totalprice == 0){
        alert("Please add items to the cart first");
    }else{
        tp.style.display = "block";
        tp.innerHTML = totalprice + "$";
    }
}


