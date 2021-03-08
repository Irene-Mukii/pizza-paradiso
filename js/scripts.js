//business-logic
function PizzaOrder(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = [];
    this.number = number;
    this.otherOrders=[];
    this.address=[];
    this.customerDetails=[];
}
function OtherOrders(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
function CustomerDetails(name,cell, email){
    this.name=name;
    this.phoneNumber=cell;
    this.email=email;
}
function CustomerAddress(subcounty,street,house){
    this.subcounty=subcounty;
    this.street=street;
    this,house=house;
}
function addCheese() {
    var cheeseAmount = 0;
    var selectedSize=size.options[size.selectedIndex].value;
    var addCheese = document.getElementById("cheese");
    if (addCheese.checked === true) {
        cheeseAmount = 50;
        if(selectedSize==='medium'){ cheeseAmount += 50;}
        if (selectedSize==='large'){cheeseAmount += 100;}
    }
    console.log(cheeseAmount);
    return parseInt(cheeseAmount);
}
function addBbq() {
    var bbqAmount = 0;
    var selectedSize=size.options[size.selectedIndex].value;
    var addBbq = document.getElementById("bbq");
    if (addBbq.checked === true) {
        bbqAmount = 50;
        if(selectedSize==='medium'){ bbqAmount += 50;}
        if (selectedSize==='large'){bbqAmount += 100;}
    }
    console.log(bbqAmount);
    return parseInt(bbqAmount);
}
function addChicken() {
    var chickenAmount = 0;
    var selectedSize=size.options[size.selectedIndex].value;
    var addChicken = document.getElementById("chicken");
    if (addChicken.checked === true) {
        chickenAmount = 100;
        if(selectedSize==='medium'){ chickenAmount += 50;}
        if (selectedSize==='large'){chickenAmount += 100;}
    }
    console.log(chickenAmount);
    return parseInt(chickenAmount);
}
function getSizeCost() {
    var selectedSize=size.options[size.selectedIndex].value;
    var sizeAmount;
    if(selectedSize==='small'){ sizeAmount = 600;}
    if (selectedSize==='medium'){sizeAmount = 800;}
    if(selectedSize==='large'){sizeAmount=1000}
    console.log(sizeAmount);
    return sizeAmount;
}
function getCrustCost() {
    var selectedCrust=crust.options[crust.selectedIndex].value;
    var crustAmount;
    if(selectedCrust==='stuffed'){ crustAmount = 200;}
    if (selectedCrust==='crispy'){ crustAmount = 200;}
    if(selectedCrust==='gluten free'){crustAmount=300;}
    console.log(crustAmount)
    return crustAmount;
}
function getNumberOfPizzas(){
    var number =parseInt($("input#new-number").val());
    console.log(number)
    return number;
}
function deliveryFee(){
    var charge;
    var subcounty = document.getElementById('new-sub-county').value;
    var street = document.getElementById('new-street').value;
    var houseNum = document.getElementById('new-house').value;

    if(subcounty===''&& street===''&& houseNum===''){
        charge=0;
    }else {
        charge=180;
    }
    console.log(subcounty,street,houseNum)
    console.log(charge)
    return charge;
}
function extraPizzaCost(){
    var extraAmount = (getSizeCost()+getCrustCost()+addBbq()+addCheese()+addChicken())*(getNumberOfPizzas());
        console.log("Your total amount payable is " + extraAmount +"." )

        console.log(extraAmount)
        return extraAmount;

}
PizzaOrder.prototype.pizzaCost=function(){
        var totalAmount = (getSizeCost()+getCrustCost()+addBbq()+addCheese()+addChicken())*(getNumberOfPizzas())+(deliveryFee());
        console.log("Your total amount payable is " + totalAmount +"." )

        console.log(totalAmount)
        return totalAmount;
          //total will be picked from otherOder array as well
} 


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

    var inputtedSize=  size.options[size.selectedIndex].value;
    var inputtedCrust = crust.options[crust.selectedIndex].value;

    var inputtedToppings =[]  
    
    console.log(inputtedToppings)

    var inputtedNumber =parseInt($("input#new-number").val());

    
    var newPizzaOrder = new PizzaOrder(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);


    var inputtedName= $("input#new-name").val();
    var inputtedCell= $("input#new-email").val();
    var inputtedEmail= $("input#new-phone-number").val();   

    var nonDeliveryOrder = document.getElementById('pick-up');
    var deliveryOrder = document.getElementById('order-done');

    var progress= document.getElementById('progress');

    let pizzaOrders =[];
    var pizzaOrderPrices =[];

    next1.onclick = function(){
        orderForm.style.left="-600px"
        contactForm.style.left="40px";
        progress.style.width="300px";
    }
    moreOrders.onclick = function(){
        inputtedNumber =parseInt($("input#new-number").val());
        $.each($("input[name='new-toppings']:checked"), function(){
            inputtedToppings.push($(this).val())
        })
        console.log(inputtedToppings)
        var newPizzaOrder = new OtherOrders(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);

        pizzaOrders.push(newPizzaOrder)
        pizzaOrderPrices.push(extraPizzaCost())


        console.log(pizzaOrders)
        console.log(pizzaOrderPrices)
        

        $("ul#cart").append("<li><span class='order'>"+"<br>"+newPizzaOrder.number +" "+ newPizzaOrder.size+ " Paradiso Pizza on a "+newPizzaOrder.crust+" crust with "+inputtedToppings+" as topping "+"</span></li>");

         extraPizzaCost();

        inputtedToppings.splice(0,inputtedToppings.length)
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
    }
    back2.onclick = function(){
        contactForm.style.left="40px";
        deliveryForm.style.left="600px";
        progress.style.width="300px";
    }

    nonDeliveryOrder.onclick = function(){ 
        inputtedNumber =parseInt($("input#new-number").val());
        $.each($("input[name='new-toppings']:checked"), function(){
            inputtedToppings.push($(this).val())
        })

        pizzaOrders.push(newPizzaOrder)
        pizzaOrderPrices.push(newPizzaOrder.pizzaCost())

        console.log(newPizzaOrder);
        let customerDetails= new CustomerDetails(inputtedName,inputtedCell,inputtedEmail);
        console.log(newPizzaOrder.address.push(customerDetails));
        console.log(pizzaOrders)
        console.log(pizzaOrderPrices)
        //console.log(PizzaOrder.otherOrders.push(newPizza))
    
        $("ul#cart").append("<li><span class='order'>" +"<br>"+newPizzaOrder.number +" "+ newPizzaOrder.size+ " Paradiso Pizza on a "+newPizzaOrder.crust+" crust with "+inputtedToppings+" as toppings. "+"<br>"+"ALL DONE"+"</span></li>");
        alert(`Hello ${customerDetails.name} your order has been received. We will call you once it is ready.`)

        var totalCost = pizzaOrderPrices.reduce((a,b)=>a+b,0);
        alert("Your total amount payable is " + totalCost +"." )

        pizzaOrders.splice(0, pizzaOrders.length) 
        pizzaOrderPrices.splice(0, pizzaOrderPrices.length) 
        inputtedToppings.splice(0,inputtedToppings.length)

        document.getElementById("order").reset();
        document.getElementById("contact").reset();
        document.getElementById("location").reset();

        orderForm.style.left="40px";
        contactForm.style.left="600px";
        progress.style.width="150px";
    }

    deliveryOrder.onclick = function () {
        inputtedNumber =parseInt($("input#new-number").val());
        $.each($("input[name='new-toppings']:checked"), function(){
            inputtedToppings.push($(this).val())
        })

        pizzaOrders.push(newPizzaOrder)
        pizzaOrderPrices.push(newPizzaOrder.pizzaCost())
        console.log(pizzaOrders)
        console.log(pizzaOrderPrices)

        var inputtedSubCounty=$("input#new-sub-county").val();
        var inputtedStreet=$("input#new-street").val();
        var inputtedHouse=$("input#new-house").val();

        console.log(newPizzaOrder);
        let customerDetails= new CustomerDetails(inputtedName,inputtedCell,inputtedEmail);
        console.log(newPizzaOrder.customerDetails.push(customerDetails));

        let customerAddress= new CustomerAddress(inputtedSubCounty,inputtedStreet, inputtedHouse);
        console.log(newPizzaOrder.address.push(customerAddress));

    //use . push to get address and other orders
        $("ul#cart").append("<li><span class='order'>" +"<br>"+newPizzaOrder.number +" "+ newPizzaOrder.size+ " Paradiso Pizza on a "+newPizzaOrder.crust+" crust with "+inputtedToppings+" as toppings. "+"<br>"+"ALL DONE"+"</span></li>");
        alert(`Hello ${customerDetails.name} your order has been received.The delivery charge will be 180. Your pizza will be delivered to your location within the hour`)
        
        var totalCost = pizzaOrderPrices.reduce((a,b)=>a+b,0);
        alert("Your total amount payable is " + totalCost +"." )

        pizzaOrders.splice(0, pizzaOrders.length) 
        pizzaOrderPrices.splice(0, pizzaOrderPrices.length) 
        inputtedToppings.splice(0,inputtedToppings.length)

        document.getElementById("order").reset();
        document.getElementById("contact").reset();
        document.getElementById("location").reset();

        orderForm.style.left="40px";
        contactForm.style.left="600px";
        progress.style.width="150px";
        deliveryForm.style.left="600px";
      };
});