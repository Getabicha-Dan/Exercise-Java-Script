/*

let shippingC;
let productC;
loc=['EU','Us','Canada','Other'];

function totalCost(productC,loc){
    tCost=productC+shippingC;
    if (loc==='EU') {shippingC===5;
        
    } else if(loc=[1] && [2]) {
        tcost=productC+shippingC[1]
    }else{
        tcost=productC+shippingC[2]
    }
    return tCost; 
}
totalCost(50,'EU');*/
/*let shippingC;
let productC;
loc=['EU','Us','Canada','Other'];

function totalCost(productC,loc){
    tCost=productC+shippingC;
    if (loc==='EU') {shippingC===5;
        console.
        
    } else if(loc=[1] && [2]) {
        tcost=productC+shippingC[1]
    }else{
        tcost=productC+shippingC[2]
    }
    return tCost; 
}
totalCost(50,'EU');*/
function totalCost(productC,loc){
   
    if (loc==='EU') {
        shippingC=5;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ ', €' + productC +'€'+ 'for the product and' + shippingC+ 'for shipping"');
        
    } else if(loc=='US' || 'Canada') {
        shippingC=15;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ '£, ' + productC +'£'+ 'for the product and' + shippingC+ 'for shipping"');

    }else{
        shippingC===20;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ '£, ' + productC +'£'+ 'for the product and' + shippingC+ 'for shipping"');
    }
    return tCost;
}
totalCost(50,'US');


   