/*Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)*/

function elementProperty(PH){

    
       if(PH>7 && PH<14){
           Element= 'alkaline';
       } else if(PH< 7 && PH>0){
        Element= 'acidic';
       } else if(Ph===7){
        Element= 'neutral';
       }else{Element='inavlid'}
       return Element;
   }
   elementProperty(9);
   
   

   /*Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100));*/

   function discountedPrice(price,dsPercentage){
       PriceAfterDiscount=price-(price*(dsPercentage/100));
       if (price< 0 ||dsPercentage< 0){
           PriceAfterDiscount='Error';
           return PriceAfterDiscount;
       }

   }
   discountedPrice(70,30);
   discountedPrice(70,-30);
   discountedPrice(-70,30);

/*You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"   */

function totalCost(productC,loc){
   
    if (loc==='EU') {
        shippingC=5;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ '€,' + productC +'for the product and' + shippingC+'€'+  'for shipping"');
        
    } else if(loc=='US' || 'Canada') {
        shippingC=15;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ '€,' + productC +'€'+ 'for the product and' + shippingC+ '€'+ 'for shipping"');

    }else{
        shippingC===20;
        tCost=productC+shippingC;
        console.log('"You have to pay a total of' + tCost+ '€,' + productC +'€'+ 'for the product and' + shippingC+ '€'+ 'for shipping"');
    }
    return tCost;
}
totalCost(50,'US');



    /*Write a function that prints this version of children's song
"10 in the bed, the little one said rollover, 1 fell off" 
"9 in the bed.."
"8 in the bed.."
...
"1 in the bed, the little on said I am lonely!"

"The little one said, Everybody back on the bed!"*/
function childrenSong(){
    for(i=10; i>0;i--){
        if(i<=10 && i>1){
        console.log(i + ' ' +'in the bed, the little one said rollover, 1 fell off ' );
    }
    else{
        console.log( i+ ' ' +'in the bed, the little on said I am lonely!"');
    }
    }
    console.log('The little one said, Everybody back on the bed!"');
    }
    childrenSong(); 


    // Write a function that calculates the area of a triangle 

    function areaTriangel(base,height){
        area=(base*height)/2;
        return area;
    }
    areaTriangel(2,5);
/*Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"*/

function sum(){
    for(sum=1;sum<100;sum++){
        sum=sum+1;
    }
}
