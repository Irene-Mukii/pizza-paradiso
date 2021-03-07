//business-logic
function PizzaOrder(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.otherOrders=[];
    this.address=[];
}
function OtherOrders(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
function CustomerAddress(name,cell, email,subcounty,street,house){
    this.subcounty=subcounty;
    this.street=street;
    this,house=house;
    this.name=name;
    this.phoneNumber=cell;
    this.email=email;
}
//total cost function using prototype
PizzaOrder.prototype.totalCost=function(toppings,number,crust,size){
        var amount;
        if(size==='small'){
            amount = 500;
            if (crust==='gluten-free'){amount = amount + 500;}
         }
         //total will be picked from otherOder array as well
}

//total delivery charges function


//user-interface
$(document).ready(function(){
    var orderForm=document.getElementById('order');
    var contactForm=document.getElementById('contact');
    var deliveryForm=document.getElementById('location');

    var next1 = document.getElementById('next1');
    var moreOrders = document.getElementById('more-orders');
    var next2 = document.getElementById('next2');
    var back1 = document.getElementById('back1');
    var back2 = document.getElementById('back2');

    var nonDeliveryOrder = document.getElementById('pick-up')
    var deliveryOrder = document.getElementById('order-done');

    var progress= document.getElementById('progress');

    var inputtedSize= $("input#new-size").val();
    var inputtedCrust = $("input#new-crust").val();
    var inputtedToppings =$("input#new-toppings").val();
    var inputtedNumber =parseInt($("input#new-number").val());

    var inputtedName= $("input#new-name").val();
    var inputtedCell= $("input#new-email").val();
    var inputtedEmail= $("input#new-phone-number").val();

    next1.onclick = function(){
        orderForm.style.left="-600px"
        contactForm.style.left="40px";
        progress.style.width="300px";
    }
    moreOrders.onclick = function(){
        var newPizza = new OtherOrders(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);
        $("ul#cart").append("<li><span class='order'>"+"<br>"+newPizza.number +" "+ newPizza.size+ " Paradiso Pizza on a "+newPizza.crust+" crust with "+newPizza.toppings+ " as toppings. "+"</span></li>");

        document.getElementById("order").reset();
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
//alert?
    }
    back2.onclick = function(){
        contactForm.style.left="40px";
        deliveryForm.style.left="600px";
        progress.style.width="300px";
    }

    nonDeliveryOrder.onclick = function(){
        var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);
        console.log(newPizzaOrder);
        var customerDetails= new CustomerAddress(inputtedName,inputtedCell,inputtedEmail)
        console.log(newPizzaOrder.address.push(customerDetails))
    
        $("ul#cart").append("<li><span class='order'>" +"<br>"+newPizzaOrder.number +" "+ newPizzaOrder.size+ " Paradiso Pizza on a "+newPizzaOrder.crust+" crust with "+newPizzaOrder.toppings+ " as toppings. "+"<br>"+"ALL DONE"+"</span></li>");
        alert(`Hello ${customerDetails.name} your order has been received. We will call you once it is ready.`)
        
        orderForm.style.left="40px";
        contactForm.style.left="600px";
        progress.style.width="150px";

        document.getElementById("order").reset();
        document.getElementById("contact").reset();
        document.getElementById("location").reset();
    }

    deliveryOrder.onclick = function () {
        var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);
        console.log(newPizzaOrder);
        var customerDetails= new CustomerAddress(inputtedName,inputtedCell,inputtedEmail)
        console.log(newPizzaOrder.address.push(customerDetails))

    //use . push to get address and other orders
        $("ul#cart").append("<li><span class='order'>" +"<br>"+newPizzaOrder.number +" "+ newPizzaOrder.size+ " Paradiso Pizza on a "+newPizzaOrder.crust+" crust with "+newPizzaOrder.toppings+ " as toppings. "+"<br>"+"ALL DONE"+"</span></li>");
        alert(`Hello ${customerDetails.name} your order has been received. YOur pizza will be delivered within the hour`)

        document.getElementById("order").reset();
        document.getElementById("contact").reset();
        document.getElementById("location").reset();

        orderForm.style.left="40px";
        contactForm.style.left="600px";
        progress.style.width="150px";
        deliveryForm.style.left="600px";
      };
});