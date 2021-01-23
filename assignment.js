// https://github.com/biswas20/assignment.js


//Problem - 01 . Kilometer To Meter Problem Solving

function kilometerToMeter(kilometer){
    var meter=kilometer * 1000;
    return meter;
}
var outputMeter=kilometerToMeter(5);
console.log(outputMeter);

//Problem - 02 . Budget Calculator Problem Solving

function budgetCalculator(watch,phone,laptop){
    var totalWatchPrice = watch*50;
    var totalPhonePrice=phone*100;
    var totalLaptopPrice=laptop*500;
    var totalPrice=totalWatchPrice + totalPhonePrice +totalLaptopPrice;
    return totalPrice;
}
var outputTotalCost=budgetCalculator(12,22,8);
console.log(outputTotalCost);

//Problem - 03 . Hotel Cost Problem Solving

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
var totalDays=hotelCost(44);
console.log(totalDays);

//Problem - 04 . Mega Friend Problem Solving

function megaFriend(friendsNames){
    var lgth = 0;
    var longest;
    for (var i = 0; i < friendsNames.length; i++) {
        if (friendsNames[i].length > lgth) {
          var lgth = friendsNames[i].length;
          longest = friendsNames[i];
        }
      }
      return longest;

}

var friendsNames=["Tamal Biswas","Tanmoy Nath","Pranto Shikder Saha","Rahul Saha","Hridoy Kor"];
var longestFriendName= megaFriend(friendsNames);
console.log(longestFriendName);