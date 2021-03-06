//business-logic
function Pizza(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}

//user-interface
$(document).ready(function(){
    var orderForm=document.getElementById('order');
    var contactForm=document.getElementById('contact');
    var deliveryForm=document.getElementById('location');

    var next1 = document.getElementById('next1');
    var next2 = document.getElementById('next2');
    var next3 = document.getElementById('next3');
    var back1 = document.getElementById('back1');
    var back2 = document.getElementById('back2');

    var progress= document.getElementById('progress');

    next1.onclick = function(event){
        event.preventDefault();
        orderForm.style.left="-600px"
        contactForm.style.left="40px";
        progress.style.width="300px";
    }
    back1.onclick = function(){
        orderForm.style.left="40px";
        contactForm.style.left="600px";
        progress.style.width="150px";
    }

    next2.onclick = function(){
        contactForm.style.left="-600px";
        deliveryForm.style.left="40px";
        progress.style.width="450px";
    }
    back2.onclick = function(){
        contactForm.style.left="40px";
        deliveryForm.style.left="600px";
        progress.style.width="300px";
    }
    
    next3.onclick = function getInput(event) {
        event.preventDefault();
    
        var inputtedSize= $("input#new-size").val();
        var inputtedCrust = $("input#new-crust").val();
        var inputtedToppings =$("input#new-toppings").val();
        var inputtedNumber =parseInt($("input#new-number").val());
    
        var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);
    
        $("ul#cart").append("<li><span class='order'>" +"Your order is:"+"<br>"+newPizza.number +" "+ newPizza.size+ " Paradiso Pizza on a "+newPizza.crust+" crust with "+newPizza.toppings+ " as toppings. "+"</span></li>");
      };
});