
//Problem - 01 . Kilometer To Meter 

function kilometerToMeter(kilometer){
    var meter=kilometer * 1000;
    return meter;
}
var outputMeter=kilometerToMeter(5);
console.log(outputMeter);

//Problem - 02 . Budget Calculator

function budgetCalculator(watch,phone,laptop){
    var totalWatchPrice = watch*50;
    var totalPhonePrice=phone*100;
    var totalLaptopPrice=laptop*500;
    var totalPrice=totalWatchPrice + totalPhonePrice +totalLaptopPrice;
    return totalPrice;
}
var outputTotalCost=budgetCalculator(12,22,8);
console.log(outputTotalCost);

//Problem - 03 . Hotel Cost

function hotelCost(numberOfDays){
    var money=0;
    if(numberOfDays<=10){
        money=numberOfDays*100;
    }
    else if(numberOfDays<=20){
        var  firstHotelCost=10*100;
        var afterTenDays=numberOfDays-10;
        var secondHotelCost=afterTenDays*80;
        money=firstHotelCost + secondHotelCost;
    }
    else{
        var  firstHotelCost=10*100;
        var secondHotelCost=10*80;
        var afterTwentyDays=numberOfDays-20;
        var thirdHotelCost=afterTwentyDays*50;
        money=firstHotelCost + secondHotelCost + thirdHotelCost;
    }
    return money;
}
var countDays=hotelCost(44);
console.log(countDays);
