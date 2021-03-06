//business-logic
function Pizza(size,crust,toppings,number){
    this.size =size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}

//user-interface
$(document).ready(function(){
    $("form#new-pizza").submit(function(event) {
        event.preventDefault();
    
        var inputtedSize= $("input#new-size").val();
        var inputtedCrust = $("input#new-crust").val();
        var inputtedToppings =$("input#new-toppings").val();
        var inputtedNumber =parseInt($("input#new-number").val());
    
        var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings,inputtedNumber);
    
        $("ul#cart").append("<li><span class='order'>" +"Your order is:"+"<br>"+newPizza.number +" "+ newPizza.size+ " Paradiso Pizza on a "+newPizza.crust+" crust with "+newPizza.toppings+ " as toppings. "+"</span></li>");
    
        
      });

})